<?php

namespace App\Http\Controllers\Core\Auth;

use App\Http\Controllers\Controller;
use App\Models\Tenant;
use App\Models\Core\Auth\User;
use App\Services\Core\Auth\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Validation\ValidationException;
use App\Exceptions\GeneralException;
use Stancl\Tenancy\Tenancy;
use App\Models\Core\Auth\Role;
use App\Models\Core\Auth\Permission;
use App\Models\App\User\SocialLink;
use App\Models\App\PaymentMethods\PaymentMethod;
use App\Models\Core\Status;
use App\Models\CentralUser;
use App\Models\Core\Auth\Type;

class MultiTenantAuthController extends Controller
{
    protected $tenancy;
    protected $userService;

    public function __construct(Tenancy $tenancy, UserService $userService)
    {
        $this->tenancy = $tenancy;
        $this->userService = $userService;
    }

    // ========================================
    // AUTHENTICATION METHODS
    // ========================================

    /**
     * Show the multi-tenant login form
     */
    public function showLogin()
    {
        return view('auth.login');
    }

    /**
     * Handle multi-tenant login
     * Searches across all tenant databases for the user
     */
    public function login(Request $request)
    {
        try {
            $this->validateLoginRequest($request);
        } catch (ValidationException $e) {
            return $this->handleValidationError($e, $request);
        }

        $email = $request->email;
        $password = $request->password;

        // Find central user and validate tenant
        $centralUser = $this->findCentralUser($email);
        $tenant = $this->findTenant($centralUser->tenant_id);
        
        // Initialize tenancy for the tenant
        $this->tenancy->initialize($tenant);

        // Authenticate user in tenant database
        $authenticatedUser = $this->authenticateUserInTenant($email, $password, $request);
        
        // Login the user
        $this->performUserLogin($authenticatedUser, $request->boolean('remember_me'), $request);
        
        // Store tenant info in session
        $this->storeTenantSession($tenant);

        return $this->handleSuccessfulLogin($tenant, $request);
    }

    /**
     * Logout from tenant and return to central
     */
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // End tenancy
        $this->tenancy->end();

        return redirect()->route('central.dashboard');
    }

    // ========================================
    // REGISTRATION METHODS
    // ========================================

    /**
     * Show the multi-tenant registration form
     */
    public function showRegister()
    {
        return view('auth.register');
    }

    /**
     * Handle multi-tenant registration
     * Creates a new tenant and user with system-generated tenant ID
     */
    public function register(Request $request)
    {
        try {
            $this->validateRegistrationRequest($request);
            
            Log::info('Current DB Name: ' . DB::connection()->getDatabaseName());

            DB::beginTransaction();

            // Create new tenant
            $tenant = $this->createTenant($request->company_name);
            
            // Create central user
            $centralUser = $this->createCentralUser($request->email, $tenant->id);
            
            // Initialize tenancy for the new tenant
            $this->tenancy->initialize($tenant);
            
            // Create user in tenant database
            $user = $this->createTenantUser($request);
            
            // Setup roles and permissions
            $this->setupUserRolesAndPermissions($user);
            
            // Setup payment methods
            $this->setupPaymentMethods($user);
            
            // Assign admin role to user
            $user->assignRole(config('access.users.app_admin_role'));
            
            DB::commit();
            
            // Login the user
            $this->performUserLogin($user, false, $request);
            $this->storeTenantSession($tenant);

            return $this->handleSuccessfulRegistration($tenant, $request);

        } catch (\Throwable $e) {
            DB::rollBack();
            $this->tenancy->end();

            Log::error('Registration failed', [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString()
            ]);

            return $this->handleRegistrationError($e, $request);
        }
    }

    // ========================================
    // PRIVATE HELPER METHODS - LOGIN
    // ========================================

    /**
     * Validate login request
     */
    private function validateLoginRequest(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
    }

    /**
     * Find central user by email
     */
    private function findCentralUser(string $email)
    {
        $centralUser = CentralUser::on('central')->where('email', $email)->first();
        
        if (!$centralUser) {
            $this->throwAuthenticationError();
        }
        
        return $centralUser;
    }

    /**
     * Find tenant by ID
     */
    private function findTenant(string $tenantId)
    {
        $tenant = Tenant::find($tenantId);
        
        if (!$tenant) {
            $this->throwAuthenticationError();
        }
        
        return $tenant;
    }

    /**
     * Authenticate user in tenant database
     */
    private function authenticateUserInTenant(string $email, string $password, Request $request)
    {
        $user = User::where('email', $email)->first();

        if (!$user || !Hash::check($password, $user->password)) {
            $this->throwAuthenticationError();
        }

        if ($user->roles->count() === 0) {
            $this->throwAuthenticationError();
        }

        return $user;
    }

    /**
     * Perform user login
     */
    private function performUserLogin(User $user, bool $rememberMe, Request $request)
    {
        try {
            Auth::login($user, $rememberMe);
        } catch (\Exception $e) {
            $this->tenancy->end();
            $this->handleLoginError($e, $request);
        }
    }

    /**
     * Store tenant information in session
     */
    private function storeTenantSession(Tenant $tenant)
    {
        session(['tenant_id' => $tenant->id]);
        session(['tenant_path' => $tenant->id]);
    }

    /**
     * Handle successful login
     */
    private function handleSuccessfulLogin(Tenant $tenant, Request $request)
    {
        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'success' => true,
                'message' => 'Login successful!',
                'redirect_url' => '/' . $tenant->id . '/dashboard',
                'tenant_path' => $tenant->id
            ]);
        }

        return redirect('/' . $tenant->id . '/dashboard');
    }

    // ========================================
    // PRIVATE HELPER METHODS - REGISTRATION
    // ========================================

    /**
     * Validate registration request
     */
    private function validateRegistrationRequest(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:central_users,email',
            'password' => 'required|string|min:8|confirmed',
            'company_name' => 'required|string|max:255',
        ]);
    }

    /**
     * Create new tenant
     */
    private function createTenant(string $companyName)
    {
        try {
            return Tenant::create([
                'company_name' => $companyName
            ]);
        } catch (\Exception $e) {
            throw new GeneralException('Failed to create tenant: ' . $e->getMessage());
        }
    }

    /**
     * Create central user
     */
    private function createCentralUser(string $email, string $tenantId)
    {
        $centralUser = CentralUser::create([
            'email' => $email,
            'is_active' => 1,
            'tenant_id' => $tenantId,
        ]);

        Log::info('Central user created', ['user' => $centralUser]);
        
        return $centralUser;
    }

    /**
     * Create user in tenant database
     */
    private function createTenantUser(Request $request)
    {
        try {
            return User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'status_id' => 1,
            ]);
        } catch (\Exception $e) {
            throw new GeneralException('Failed to create user: ' . $e->getMessage());
        }
    }

    /**
     * Setup user roles and permissions
     */
    private function setupUserRolesAndPermissions(User $user)
    {
        // Create admin role
        $adminRole = [
            'name' => config('access.users.app_admin_role'),
            'is_admin' => 1,
            'type_id' => Type::findByAlias('app')->id,
            'created_by' => $user->id,
            'is_default' => 1
        ];

        Role::query()->insert([$adminRole]);

        // Create additional roles
        Role::insert([
            [
                'name' => 'Manager',
                'type_id' => 1,
                'created_by' => $user->id
            ],
            [
                'name' => 'Moderator',
                'type_id' => 1,
                'created_by' => $user->id
            ],
        ]);

        // Attach permissions to admin role
        $permissions = Permission::pluck('id')->toArray();
        Role::where('id', 1)->get()->each(function (Role $role) use ($permissions) {
            $role->permissions()->attach($permissions);
        });
    }

    /**
     * Setup payment methods
     */
    private function setupPaymentMethods(User $user)
    {
        $activeStatusId = Status::query()
            ->where('type', 'payment_method')
            ->where('name', 'status_active')
            ->first()->id;

        $methods = [
            [
                'name' => 'Cash',
                'alias' => 'cash',
                'is_default' => 1,
                'status_id' => $activeStatusId,
                'created_by' => $user->id
            ]
        ];

        PaymentMethod::query()->insert($methods);
    }

    /**
     * Handle successful registration
     */
    private function handleSuccessfulRegistration(Tenant $tenant, Request $request)
    {
        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'success' => true,
                'message' => 'Tenant and user created successfully!',
                'redirect_url' => '/' . $tenant->id . '/dashboard',
                'tenant_path' => $tenant->id
            ]);
        }

        return redirect('/' . $tenant->id . '/dashboard')
            ->with('success', 'Tenant and user created successfully! Your tenant path is: /' . $tenant->id);
    }

    // ========================================
    // PRIVATE HELPER METHODS - ERROR HANDLING
    // ========================================

    /**
     * Handle validation errors
     */
    private function handleValidationError(ValidationException $e, Request $request)
    {
        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        }
        throw $e;
    }

    /**
     * Handle login errors
     */
    private function handleLoginError(\Exception $e, Request $request)
    {
        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to login user: ' . $e->getMessage()
            ], 422);
        }
        throw new GeneralException('Failed to login user: ' . $e->getMessage());
    }

    /**
     * Handle registration errors
     */
    private function handleRegistrationError(\Throwable $e, Request $request)
    {
        if ($request->expectsJson()) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ], 500);
        }
        throw $e;
    }

    /**
     * Throw authentication error
     */
    private function throwAuthenticationError()
    {
        $errorMessage = trans('default.incorrect_user_password', [
            'password' => trans('default.password'),
            'email' => trans('default.email')
        ]);

        throw ValidationException::withMessages([
            'email' => $errorMessage
        ]);
    }

    // ========================================
    // UTILITY METHODS
    // ========================================

    /**
     * Run the tenant database seeder
     */
    private function runTenantSeeder($tenant)
    {
        try {
            // Ensure we're in the tenant context
            $this->tenancy->initialize($tenant);

            // Run the tenant seeder
            Artisan::call('db:seed', [
                '--force' => true
            ]);

            // Log successful seeding
            Log::info("Tenant database seeded successfully for tenant: {$tenant->id}");
        } catch (\Exception $e) {
            // Log the error but don't fail the registration
            Log::error("Failed to seed tenant database for tenant {$tenant->id}: " . $e->getMessage());

            // Re-throw if it's a critical error that should stop registration
            if (config('app.debug')) {
                throw $e;
            }
        }
    }
}

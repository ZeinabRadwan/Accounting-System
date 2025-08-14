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
use Illuminate\Validation\ValidationException;
use App\Exceptions\GeneralException;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;
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
            $request->validate([
                'email' => 'required|email',
                'password' => 'required|string',
                // 'tenant_path' => 'nullable|string',
                'remember_me' => 'boolean'
            ]);
        } catch (ValidationException $e) {
            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $e->errors()
                ], 422);
            }
            throw $e;
        }



        $email = $request->email;
        $password = $request->password;

        $centralUser = CentralUser::on('central')->where('email', $email)->first();
        if (!$centralUser) {
            $errorMessage = trans('default.incorrect_user_password', [
                'password' => trans('default.password'),
                'email' => trans('default.email')
            ]);

            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'success' => false,
                    'message' => $errorMessage
                ], 422);
            }

            throw ValidationException::withMessages([
                'email' => $errorMessage
            ]);
        }
        $tenant = Tenant::find($centralUser->tenant_id);
        if (!$tenant) {
            $errorMessage = trans('default.incorrect_user_password', [
                'password' => trans('default.password'),
                'email' => trans('default.email')
            ]);

            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'success' => false,
                    'message' => $errorMessage
                ], 422);
            }

            throw ValidationException::withMessages([
                'email' => $errorMessage
            ]);
        }

        $rememberMe = $request->boolean('remember_me');
        $authenticatedUser = null;
        $authenticatedTenant = null;


        $this->tenancy->initialize($tenant);





        // Find user in central database with matching tenant_id
        $user = User::where('email', $email)
            ->first();

        if ($user && Hash::check($password, $user->password)) {
            if ($user->roles->count() > 0) {
                $authenticatedUser = $user;
                $authenticatedTenant = $tenant;
            }
        } else {
            $errorMessage = trans('default.incorrect_user_password', [
                'password' => trans('default.password'),
                'email' => trans('default.email')
            ]);

            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'success' => false,
                    'message' => $errorMessage
                ], 422);
            }

            throw ValidationException::withMessages([
                'email' => $errorMessage
            ]);
        }







        // Login the user
        try {
            Auth::login($authenticatedUser, $rememberMe);
        } catch (\Exception $e) {
            $this->tenancy->end();
            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to login user: ' . $e->getMessage()
                ], 422);
            }
            throw new GeneralException('Failed to login user: ' . $e->getMessage());
        }

        // Store tenant info in session
        session(['tenant_id' => $authenticatedTenant->id]);
        session(['tenant_path' => $authenticatedTenant->id]);

        // Check if request expects JSON response
        if ($request->expectsJson() || $request->ajax()) {
            return response()->json([
                'success' => true,
                'message' => 'Login successful!',
                'redirect_url' => '/' . $authenticatedTenant->id . '/dashboard',
                'tenant_path' => $authenticatedTenant->id
            ]);
        }

        // Redirect to tenant dashboard using path-based routing
        return redirect('/' . $authenticatedTenant->id . '/dashboard');
    }

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


            try {
                $request->validate([
                    'first_name' => 'required|string|max:255',
                    'last_name' => 'required|string|max:255',
                    'email' => 'required|email|max:255|unique:central_users,email',
                    'password' => 'required|string|min:8|confirmed',
                    'company_name' => 'required|string|max:255',
                ]);
            } catch (ValidationException $e) {
                if ($request->expectsJson() || $request->ajax()) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Validation failed',
                        'errors' => $e->errors()
                    ], 422);
                }
                throw $e;
            }




            //  try {
            DB::beginTransaction();

            // Create new tenant with system-generated UUID
            try {
                $tenant = Tenant::create([
                    'company_name' => $request->company_name
                ]);
            } catch (\Exception $e) {
                DB::rollBack();

                if ($request->expectsJson() || $request->ajax()) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Failed to create tenant: ' . $e->getMessage()
                    ], 422);
                }

                throw new GeneralException('Failed to create tenant: ' . $e->getMessage());
            }

            Log::info('tenant');
            Log::info($tenant);


            $this->tenancy->initialize($tenant);
            // Initialize tenancy for the new tenant and login the user
            //  try {
            // Run tenant database seeder
            // $this->runTenantSeeder($tenant);
            // } catch (\Exception $e) {
            //     DB::rollBack();
            //     $this->tenancy->end();

            //     if ($request->expectsJson() || $request->ajax()) {
            //         return response()->json([
            //             'success' => false,
            //             'message' => 'Failed to initialize tenant: ' . $e->getMessage()
            //         ], 422);
            //     }

            //     throw new GeneralException('Failed to initialize tenant: ' . $e->getMessage());
            // }


            // $statusRepo = resolve(\App\Repositories\Core\Status\StatusRepository::class);
            // $statusId = $statusRepo->userActive();

            // Create user in the central database with tenant_id
            try {
                $user = User::create([
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    'status_id' => 1,
                ]);

                CentralUser::on('central')->create([
                    'email' => $request->email,
                    'is_active' => 1,
                    'tenant_id' => $tenant->id,
                ]);
            } catch (\Exception $e) {
                DB::rollBack();
                $this->tenancy->end();

                if ($request->expectsJson() || $request->ajax()) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Failed to create user: ' . $e->getMessage()
                    ], 422);
                }

                throw new GeneralException('Failed to create user: ' . $e->getMessage());
            }

            $roles = [
                [
                    'name' => config('access.users.app_admin_role'),
                    'is_admin' => 1,
                    'type_id' => Type::findByAlias('app')->id,
                    'created_by' => $user->id,
                    'is_default' => 1
                ]
            ];

            Role::query()->insert($roles);

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
            $permissions = Permission::pluck('id')->toArray();
            $socialLinks = SocialLink::pluck('id')->toArray();

            Role::where('id', 1)->get()->each(function (Role $role) use ($permissions) {
                $role->permissions()->attach($permissions);
            });

            $methods = [
                [
                    'name' => 'Cash',
                    'alias' => 'cash',
                    'is_default' => 1,
                    'status_id' => Status::query()
                        ->where('type', 'payment_method')
                        ->where('name', 'status_active')
                        ->first()->id,
                    'created_by' => User::query()->first()->id
                ]
            ];
            PaymentMethod::query()->insert($methods);

            $user->assignRole(config('access.users.app_admin_role'));


            DB::commit();


            try {
                Auth::login($user);

                // Store tenant info in session
                session(['tenant_id' => $tenant->id]);
                session(['tenant_path' => $tenant->id]);
            } catch (\Exception $e) {
                DB::rollBack();
                $this->tenancy->end();

                if ($request->expectsJson() || $request->ajax()) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Failed to login user: ' . $e->getMessage()
                    ], 422);
                }

                throw new GeneralException('Failed to login user: ' . $e->getMessage());
            }

            // Check if request expects JSON response
            if ($request->expectsJson() || $request->ajax()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Tenant and user created successfully!',
                    'redirect_url' => '/' . $tenant->id . '/dashboard',
                    'tenant_path' => $tenant->id
                ]);
            }

            DB::commit();

            // Fallback for non-AJAX requests
            return redirect('/' . $tenant->id . '/dashboard')->with('success', 'Tenant and user created successfully! Your tenant path is: /' . $tenant->id);
        } catch (\Throwable $e) {
            DB::rollBack();
            $this->tenancy->end();

            Log::error('Registration failed', [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString()
            ]);

            if ($request->expectsJson()) {
                return response()->json([
                    'status' => false,
                    'message' => $e->getMessage()
                ], 500);
            }

            throw $e;
        }
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

            dd('ss');

            // Artisan::call('db:seed', [
            //     '--class' => 'database\\seeders\\Tenant\\TenantDatabaseSeeder',
            //     '--force' => true
            // ]);

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

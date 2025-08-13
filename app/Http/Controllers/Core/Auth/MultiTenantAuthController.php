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
use Stancl\Tenancy\Tenancy;

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
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
            'tenant_path' => 'nullable|string',
            'remember_me' => 'boolean'
        ]);

        $email = $request->email;
        $password = $request->password;
        $tenantPath = $request->tenant_path;
        $rememberMe = $request->boolean('remember_me');

        $authenticatedUser = null;
        $authenticatedTenant = null;

        // If tenant_path is provided, try to authenticate in that specific tenant first
        if ($tenantPath) {
            try {
                $tenant = Tenant::where('id', $tenantPath)->first();
                if ($tenant) {
                    // Find user in central database with matching tenant_id
                    $user = User::where('email', $email)
                        ->where('tenant_id', $tenant->id)
                        ->first();
                    
                    if ($user && Hash::check($password, $user->password)) {
                        if ($user->roles->count() > 0) {
                            $authenticatedUser = $user;
                            $authenticatedTenant = $tenant;
                        }
                    }
                }
            } catch (\Exception $e) {
                Log::warning("Error checking specific tenant {$tenantPath}: " . $e->getMessage());
            }
        }

        // If no specific tenant or authentication failed, search across all tenants
        if (!$authenticatedUser) {
            // Search for user in central database across all tenants
            $user = User::where('email', $email)->first();
            
            if ($user && Hash::check($password, $user->password)) {
                // Check if user has roles
                if ($user->roles->count() > 0) {
                    $authenticatedUser = $user;
                    $authenticatedTenant = Tenant::find($user->tenant_id);
                }
            }
        }

        if (!$authenticatedUser) {
            throw ValidationException::withMessages([
                'email' => trans('default.incorrect_user_password', [
                    'password' => trans('default.password'),
                    'email' => trans('default.email')
                ])
            ]);
        }

        // Initialize tenancy for the authenticated tenant
        $this->tenancy->initialize($authenticatedTenant);

        // Login the user
        Auth::login($authenticatedUser, $rememberMe);

        // Store tenant info in session
        session(['tenant_id' => $authenticatedTenant->id]);
        session(['tenant_path' => $authenticatedTenant->id]);

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
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:8|confirmed',
            'company_name' => 'required|string|max:255',
        ]);

        // try {
            DB::beginTransaction();

            // Create new tenant with system-generated UUID
            $tenant = Tenant::create([
                'company_name' => $request->company_name
            ]);
            
            // Get the active status ID from central database
            $statusRepo = resolve(\App\Repositories\Core\Status\StatusRepository::class);
            $statusId = $statusRepo->userActive();

            // Create user in the central database with tenant_id
            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'status_id' => $statusId,
                'tenant_id' => $tenant->id,
            ]);

            // Assign default role (Moderator)
            // try {
                $user->assignRole('Moderator');
            // } catch (\Exception $roleException) {
                // Log::warning("Could not assign Moderator role to user: " . $roleException->getMessage());
                // Continue without role assignment for now
            // }

            DB::commit();

            // Initialize tenancy for the new tenant and login the user
            $this->tenancy->initialize($tenant);
            Auth::login($user);

            // Store tenant info in session
            session(['tenant_id' => $tenant->id]);
            session(['tenant_path' => $tenant->id]);

            return redirect('/' . $tenant->id . '/dashboard')->with('success', 'Tenant and user created successfully! Your tenant path is: /' . $tenant->id);

        // } catch (\Exception $e) {
        //     DB::rollBack();
        //     $this->tenancy->end();
            
        //     Log::error('Registration failed: ' . $e->getMessage(), [
        //         'exception' => $e,
        //         'request_data' => $request->all()
        //     ]);
            
        //     throw new GeneralException('Failed to create tenant: ' . $e->getMessage());
        // }
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
}

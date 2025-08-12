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
        return view('auth.multi-tenant-login');
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
            'remember_me' => 'boolean'
        ]);

        $email = $request->email;
        $password = $request->password;
        $rememberMe = $request->boolean('remember_me');

        // Get all tenants
        $tenants = Tenant::all();
        $authenticatedUser = null;
        $authenticatedTenant = null;

        foreach ($tenants as $tenant) {
            try {
                // Initialize tenancy for this tenant
                $this->tenancy->initialize($tenant);

                // Search for user in this tenant's database
                $user = User::where('email', $email)->first();

                if ($user && Hash::check($password, $user->password)) {
                    // Check if user has roles
                    if ($user->roles->count() > 0) {
                        $authenticatedUser = $user;
                        $authenticatedTenant = $tenant;
                        break;
                    }
                }

                // End tenancy for this tenant
                $this->tenancy->end();
            } catch (\Exception $e) {
                // Log error and continue to next tenant
                Log::warning("Error checking tenant {$tenant->id}: " . $e->getMessage());
                $this->tenancy->end();
                continue;
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
        session(['tenant_domain' => $authenticatedTenant->domains->first()->domain ?? null]);

        // Redirect to tenant dashboard
        return redirect()->route('tenant.dashboard');
    }

    /**
     * Show the multi-tenant registration form
     */
    public function showRegister()
    {
        return view('auth.multi-tenant-register');
    }

    /**
     * Handle multi-tenant registration
     * Creates a new tenant and user
     */
    public function register(Request $request)
    {
        $request->validate([
            'tenant_id' => 'required|string|unique:tenants,id|regex:/^[a-zA-Z0-9_-]+$/',
            'domain' => 'required|string|unique:domains,domain',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:8|confirmed',
            'company_name' => 'required|string|max:255',
        ]);

        try {
            DB::beginTransaction();

            // Create new tenant
            $tenant = Tenant::create(['id' => $request->tenant_id]);
            
            // Create domain for the tenant
            $tenant->domains()->create(['domain' => $request->domain]);

            // Initialize tenancy for the new tenant
            $this->tenancy->initialize($tenant);

            // Create user in the new tenant's database
            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'status_id' => resolve(\App\Repositories\Core\Status\StatusRepository::class)->userActive(),
            ]);

            // Assign default role (Moderator)
            $user->assignRole('Moderator');

            // End tenancy
            $this->tenancy->end();

            DB::commit();

            // Initialize tenancy again and login the user
            $this->tenancy->initialize($tenant);
            Auth::login($user);

            // Store tenant info in session
            session(['tenant_id' => $tenant->id]);
            session(['tenant_domain' => $request->domain]);

            return redirect()->route('tenant.dashboard')->with('success', 'Tenant and user created successfully!');

        } catch (\Exception $e) {
            DB::rollBack();
            $this->tenancy->end();
            
            throw new GeneralException('Failed to create tenant: ' . $e->getMessage());
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
}

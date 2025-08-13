<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Stancl\Tenancy\Tenancy;

class TenantAuthenticationMiddleware
{
    protected $tenancy;

    public function __construct(Tenancy $tenancy)
    {
        $this->tenancy = $tenancy;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if user is authenticated
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        // Check if tenant is initialized
        if (!$this->tenancy->initialized) {
            // Try to initialize tenant from session
            $tenantId = session('tenant_id');
            if ($tenantId) {
                try {
                    $tenant = \App\Models\Tenant::find($tenantId);
                    if ($tenant) {
                        $this->tenancy->initialize($tenant);
                    } else {
                        // Tenant not found, clear session and redirect
                        Auth::logout();
                        $request->session()->invalidate();
                        $request->session()->regenerateToken();
                        return redirect()->route('login')->with('error', 'Tenant not found.');
                    }
                } catch (\Exception $e) {
                    // Error initializing tenant, clear session and redirect
                    Auth::logout();
                    $request->session()->invalidate();
                    $request->session()->regenerateToken();
                                            return redirect()->route('login')->with('error', 'Error initializing tenant.');
                }
            } else {
                // No tenant in session, redirect to login
                Auth::logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();
                return redirect()->route('login')->with('error', 'No tenant context found.');
            }
        }

        return $next($request);
    }
}



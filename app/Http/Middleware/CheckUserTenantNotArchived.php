<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserTenantNotArchived
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if user is authenticated and we're in a tenant context
        if (Auth::check() && tenant()) {
            // Check if the tenant is archived using direct database query on central database
            $isArchived = \DB::connection('mysql')->table('tenants')
                ->where('id', tenant()->id)
                ->value('is_archived');
                
            if ($isArchived) {
                // Log out the user
                Auth::logout();
                
                // Clear the session
                $request->session()->invalidate();
                $request->session()->regenerateToken();
                
                if ($request->expectsJson()) {
                    return response()->json([
                        'error' => 'Your company account has been suspended.',
                        'message' => 'Please contact the administrator for more information.',
                        'redirect_url' => url('/suspended')
                    ], 403);
                }
                
                // For web requests, redirect to suspension page
                return redirect()->route('suspended');
            }
        }

        return $next($request);
    }
}
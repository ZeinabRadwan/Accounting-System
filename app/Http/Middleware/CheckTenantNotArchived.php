<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckTenantNotArchived
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
        // Check if we're in a tenant context
        if (tenant()) {
            try {
                // Check if the tenant is archived using direct database query on central database
                $isArchived = \DB::connection('mysql')->table('tenants')
                    ->where('id', tenant()->id)
                    ->value('is_archived');
                    
                if ($isArchived) {
                    if ($request->expectsJson()) {
                        return response()->json([
                            'error' => 'This tenant has been archived and is no longer accessible.',
                            'message' => 'Please contact the administrator for more information.',
                            'redirect_url' => url('/suspended')
                        ], 403);
                    }
                    
                    // For web requests, redirect to suspension page
                    return redirect()->route('suspended');
                }
            } catch (\Exception $e) {
                // If there's an error checking the archive status, log it and continue
                \Log::error('Error checking tenant archive status: ' . $e->getMessage());
            }
        }

        return $next($request);
    }
}

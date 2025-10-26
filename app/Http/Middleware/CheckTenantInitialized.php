<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckTenantInitialized
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Skip check for initialization and user endpoints
        $path = $request->path();
        
        // Allow initialization endpoints
        if (strpos($path, 'api/tenant-initialization') === 0) {
            return $next($request);
        }
        
        // Allow user endpoint (needed for app initialization)
        if ($path === 'api/user') {
            return $next($request);
        }
        
        // Allow currencies endpoint (needed for wizard)
        if ($path === 'api/all-currencies') {
            return $next($request);
        }
        
        // Allow tenant me endpoint
        if ($path === 'api/tenant/me') {
            return $next($request);
        }

        // Check if tenant is initialized for other routes
        $isInitialized = $this->getInitializationStatus();

        if (!$isInitialized) {
            return response()->json([
                'success' => false,
                'message' => 'Tenant not initialized',
                'tenant_not_initialized' => true
            ], 403);
        }

        return $next($request);
    }

    /**
     * Get initialization status
     *
     * @return bool
     */
    private function getInitializationStatus()
    {
        try {
            $setting = DB::table('general_settings')
                ->where('key', 'tenant_initialized')
                ->first();

            return $setting && $setting->value === '1';
        } catch (\Exception $e) {
            // If table doesn't exist or any error, return false
            return false;
        }
    }
}

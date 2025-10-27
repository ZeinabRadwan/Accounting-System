<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Helpers\SystemTypeHelper;

class CheckSystemTypeAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $module
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $module = null)
    {
        // If no module is specified, allow access
        if (!$module) {
            return $next($request);
        }

        // Get the system type
        $systemType = SystemTypeHelper::getSystemType();

        // If 'both' is selected, allow all access
        if ($systemType === SystemTypeHelper::SYSTEM_TYPE_BOTH) {
            return $next($request);
        }

        // Check if the requested module matches the system type
        if ($systemType === $module) {
            return $next($request);
        }

        // Block access if module doesn't match
        return response()->json([
            'success' => false,
            'message' => 'Access denied: This module is not available for your system type.',
            'system_type' => $systemType
        ], 403);
    }
}

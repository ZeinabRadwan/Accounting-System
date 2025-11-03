<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class HandleDatabaseConnection
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
        try {
            // Check if database connection is available
            DB::connection()->getPdo();
        } catch (\Exception $e) {
            // Database connection failed
            // For API requests, return a JSON error
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Database connection failed. Please ensure MySQL is running.',
                    'error' => 'Database service unavailable',
                    'hint' => 'Make sure MySQL service is started in XAMPP Control Panel'
                ], 503);
            }
            
            // For web requests, return a view or redirect
            abort(503, 'Database service unavailable. Please ensure MySQL is running.');
        }

        return $next($request);
    }
}




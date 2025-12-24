<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

class ServerController extends Controller
{
    /**
     * Define middleware for cache clearing
     * Requires database-backup permission (admin-level access)
     */
    public function __construct()
    {
        $this->middleware('can:database-backup', ['only' => ['clearCache']]);
    }

    public function ip()
    {
        return $this->responseWithSuccess('Server IP', [
            'server_ip' => request()->server('SERVER_ADDR'),
        ]);
    }

    public function runCommand(Request $request)
    {
        $validated = $request->validate([
            'command' => ['required', Rule::in(['optimize:clear'])],
        ]);

        $call = Artisan::call($validated['command']);

        if ($call === 0) {
            return response()->json([
                'message' => 'Cache cleared successfully!',
            ]);
        }

        return response()->json([
            'message' => 'Failed',
        ]);
    }

    /**
     * Clear all Laravel caches
     * Uses optimize:clear which clears config, route, view, and application cache
     * Logs the action with user ID and IP address
     */
    public function clearCache(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $user = Auth::user();
            $userId = $user ? $user->id : null;
            $userEmail = $user ? $user->email : 'Unknown';
            $ipAddress = $request->ip();

            // Clear all Laravel caches using optimize:clear
            // This clears: config, route, view, and application cache
            Artisan::call('optimize:clear');

            // Log the cache clear action
            Log::info('Cache cleared', [
                'user_id' => $userId,
                'user_email' => $userEmail,
                'ip_address' => $ipAddress,
                'timestamp' => now()->toDateTimeString(),
            ]);

            // Log activity using Spatie Activity Log if available
            if (function_exists('activity') && $user) {
                activity()
                    ->causedBy($user)
                    ->withProperties([
                        'event' => 'Cache Clear',
                        'ip_address' => $ipAddress,
                    ])
                    ->useLog('System')
                    ->log('Cache cleared successfully');
            }

            return response()->json([
                'message' => 'Cache cleared successfully!',
                'success' => true,
            ]);
        } catch (\Exception $e) {
            // Log the error
            Log::error('Failed to clear cache', [
                'user_id' => Auth::id(),
                'ip_address' => $request->ip(),
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'message' => 'Failed to clear cache: '.$e->getMessage(),
                'success' => false,
            ], 500);
        }
    }
}

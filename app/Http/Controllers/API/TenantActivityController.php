<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\TenantActivityService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TenantActivityController extends Controller
{
    public function __construct(
        protected TenantActivityService $activityService
    ) {}

    /**
     * Handle heartbeat request from frontend to track user activity.
     */
    public function heartbeat(Request $request)
    {
        // Handle sendBeacon requests (Blob/JSON)
        $content = $request->getContent();
        if (! empty($content) && $request->header('Content-Type') === 'application/json') {
            try {
                $jsonData = json_decode($content, true);
                if ($jsonData) {
                    $request->merge($jsonData);
                }
            } catch (\Exception $e) {
                // Ignore JSON decode errors
            }
        }

        $sessionId = $request->input('session_id');
        $endSession = $request->input('end_session', false);

        // If ending session, allow it even without authentication (for logout/unload scenarios)
        if ($endSession && $sessionId) {
            $this->activityService->endSession($sessionId);

            return response()->json([
                'success' => true,
                'message' => 'Session ended',
            ]);
        }

        // For regular heartbeats, require authentication
        $user = Auth::user();

        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'User not authenticated',
            ], 401);
        }

        $tenant = tenant();

        if (! $tenant) {
            return response()->json([
                'success' => false,
                'message' => 'Tenant context not found',
            ], 400);
        }

        if ($sessionId) {
            // Update existing session
            $session = $this->activityService->updateActivity($sessionId);

            if (! $session) {
                // Session expired or not found, create new one
                $session = $this->activityService->getOrCreateSession(
                    $tenant,
                    (string) $user->id,
                    $user->name,
                    $user->email
                );
            }
        } else {
            // Create new session
            $session = $this->activityService->getOrCreateSession(
                $tenant,
                (string) $user->id,
                $user->name,
                $user->email
            );
        }

        return response()->json([
            'success' => true,
            'session_id' => $session->session_id,
            'total_seconds' => $session->total_seconds,
        ]);
    }
}

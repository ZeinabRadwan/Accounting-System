<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\TenantActivityService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Stancl\Tenancy\Facades\Tenancy;

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
        $user = Auth::user();

        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'User not authenticated',
            ], 401);
        }

        $tenant = Tenancy::tenant();

        if (! $tenant) {
            return response()->json([
                'success' => false,
                'message' => 'Tenant context not found',
            ], 400);
        }

        $sessionId = $request->input('session_id');

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

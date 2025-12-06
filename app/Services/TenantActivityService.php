<?php

namespace App\Services;

use App\Models\Tenant;
use App\Models\TenantUserActivity;
use Illuminate\Support\Str;

class TenantActivityService
{
    /**
     * Get or create an active session for a user in a tenant.
     */
    public function getOrCreateSession(Tenant $tenant, string $userId, ?string $userName = null, ?string $userEmail = null): TenantUserActivity
    {
        // First, clean up expired sessions
        $this->cleanupExpiredSessions($tenant);

        // Try to find an active session
        $session = TenantUserActivity::where('tenant_id', $tenant->id)
            ->where('user_id', $userId)
            ->where('is_active', true)
            ->where(function ($query) {
                $query->whereNull('expires_at')
                    ->orWhere('expires_at', '>', now());
            })
            ->first();

        if ($session) {
            // Update activity
            $session->updateActivity();

            return $session;
        }

        // Create a new session
        $session = TenantUserActivity::create([
            'tenant_id' => $tenant->id,
            'user_id' => $userId,
            'user_name' => $userName,
            'user_email' => $userEmail,
            'session_id' => Str::uuid()->toString(),
            'started_at' => now(),
            'last_activity_at' => now(),
            'total_seconds' => 0,
            'is_active' => true,
            'expires_at' => now()->addMinutes(10),
        ]);

        return $session;
    }

    /**
     * Update activity for a session.
     */
    public function updateActivity(string $sessionId): ?TenantUserActivity
    {
        $session = TenantUserActivity::where('session_id', $sessionId)
            ->where('is_active', true)
            ->first();

        if (! $session) {
            return null;
        }

        // Check if session is expired
        if ($session->isExpired()) {
            $session->markInactive();

            return null;
        }

        $session->updateActivity();

        return $session;
    }

    /**
     * Mark a session as inactive.
     */
    public function endSession(string $sessionId): bool
    {
        $session = TenantUserActivity::where('session_id', $sessionId)
            ->where('is_active', true)
            ->first();

        if (! $session) {
            return false;
        }

        $session->markInactive();

        return true;
    }

    /**
     * Clean up expired sessions for a tenant.
     */
    public function cleanupExpiredSessions(Tenant $tenant): void
    {
        TenantUserActivity::where('tenant_id', $tenant->id)
            ->where('is_active', true)
            ->where('expires_at', '<=', now())
            ->update(['is_active' => false]);
    }

    /**
     * Get activity statistics for a tenant.
     */
    public function getActivityStats(Tenant $tenant): array
    {
        // Get active users
        $activeSessions = TenantUserActivity::where('tenant_id', $tenant->id)
            ->where('is_active', true)
            ->where(function ($query) {
                $query->whereNull('expires_at')
                    ->orWhere('expires_at', '>', now());
            })
            ->get();

        // Get total working time (sum of all sessions, including inactive)
        $totalWorkingTime = TenantUserActivity::where('tenant_id', $tenant->id)
            ->sum('total_seconds');

        // Get unique users who have accessed
        $uniqueUsers = TenantUserActivity::where('tenant_id', $tenant->id)
            ->distinct('user_id')
            ->count('user_id');

        return [
            'active_users' => $activeSessions->map(function ($session) {
                return [
                    'user_id' => $session->user_id,
                    'user_name' => $session->user_name,
                    'user_email' => $session->user_email,
                    'session_id' => $session->session_id,
                    'started_at' => $session->started_at,
                    'last_activity_at' => $session->last_activity_at,
                    'total_seconds' => $session->total_seconds,
                ];
            }),
            'total_working_seconds' => $totalWorkingTime,
            'total_working_hours' => round($totalWorkingTime / 3600, 2),
            'unique_users_count' => $uniqueUsers,
        ];
    }
}

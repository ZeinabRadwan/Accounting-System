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
        // Execute in central database context
        return tenancy()->central(function () use ($tenant, $userId, $userName, $userEmail) {
            // First, clean up expired sessions (already in central context)
            $this->doCleanupExpiredSessions($tenant);

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
        });
    }

    /**
     * Update activity for a session.
     */
    public function updateActivity(string $sessionId): ?TenantUserActivity
    {
        // Execute in central database context
        return tenancy()->central(function () use ($sessionId) {
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
        });
    }

    /**
     * Mark a session as inactive.
     */
    public function endSession(string $sessionId): bool
    {
        // Execute in central database context
        return tenancy()->central(function () use ($sessionId) {
            $session = TenantUserActivity::where('session_id', $sessionId)
                ->where('is_active', true)
                ->first();

            if (! $session) {
                return false;
            }

            $session->markInactive();

            return true;
        });
    }

    /**
     * Clean up expired sessions for a tenant.
     */
    public function cleanupExpiredSessions(Tenant $tenant): void
    {
        // Execute in central database context
        tenancy()->central(function () use ($tenant) {
            $this->doCleanupExpiredSessions($tenant);
        });
    }

    /**
     * Internal method to clean up expired sessions (assumes already in central context).
     */
    private function doCleanupExpiredSessions(Tenant $tenant): void
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
        // Execute in central database context
        return tenancy()->central(function () use ($tenant) {
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
                    // Calculate current session duration (total_seconds + time since last activity)
                    $currentDuration = $session->total_seconds;
                    if ($session->last_activity_at) {
                        $secondsSinceLastActivity = now()->diffInSeconds($session->last_activity_at);
                        // Only add if within 10 minutes (600 seconds)
                        if ($secondsSinceLastActivity <= 600) {
                            $currentDuration += $secondsSinceLastActivity;
                        }
                    } else {
                        // If no last_activity_at, calculate from started_at
                        $currentDuration = now()->diffInSeconds($session->started_at);
                    }

                    return [
                        'user_id' => $session->user_id,
                        'user_name' => $session->user_name,
                        'user_email' => $session->user_email,
                        'session_id' => $session->session_id,
                        'started_at' => $session->started_at ? $session->started_at->toDateTimeString() : null,
                        'last_activity_at' => $session->last_activity_at ? $session->last_activity_at->toDateTimeString() : null,
                        'total_seconds' => $session->total_seconds,
                        'current_session_seconds' => $currentDuration,
                    ];
                }),
                'total_working_seconds' => $totalWorkingTime,
                'total_working_hours' => round($totalWorkingTime / 3600, 2),
                'unique_users_count' => $uniqueUsers,
                'has_active_sessions' => $activeSessions->count() > 0,
            ];
        });
    }
}

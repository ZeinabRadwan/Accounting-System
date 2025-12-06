<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TenantUserActivity extends Model
{
    use HasFactory;

    protected $fillable = [
        'tenant_id',
        'user_id',
        'user_name',
        'user_email',
        'session_id',
        'started_at',
        'last_activity_at',
        'total_seconds',
        'is_active',
        'expires_at',
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'last_activity_at' => 'datetime',
        'expires_at' => 'datetime',
        'is_active' => 'boolean',
        'total_seconds' => 'integer',
    ];

    /**
     * Get the tenant that owns this activity.
     */
    public function tenant(): BelongsTo
    {
        return $this->belongsTo(Tenant::class);
    }

    /**
     * Check if the session has expired.
     */
    public function isExpired(): bool
    {
        if (! $this->expires_at) {
            return false;
        }

        return $this->expires_at->isPast();
    }

    /**
     * Update the last activity timestamp and extend expiration.
     */
    public function updateActivity(): void
    {
        $now = now();
        $lastActivity = $this->last_activity_at ?? $this->started_at;

        // Calculate seconds since last activity
        $secondsSinceLastActivity = $now->diffInSeconds($lastActivity);

        // Only add time if it's within the activity window (less than 10 minutes)
        if ($secondsSinceLastActivity <= 600) {
            $this->total_seconds += $secondsSinceLastActivity;
        }

        $this->last_activity_at = $now;
        $this->expires_at = $now->copy()->addMinutes(10);
        $this->save();
    }

    /**
     * Mark session as inactive.
     */
    public function markInactive(): void
    {
        // Final update to capture remaining time
        $this->updateActivity();
        $this->is_active = false;
        $this->save();
    }

    /**
     * Scope to get active sessions.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true)
            ->where(function ($q) {
                $q->whereNull('expires_at')
                    ->orWhere('expires_at', '>', now());
            });
    }

    /**
     * Scope to get expired sessions.
     */
    public function scopeExpired($query)
    {
        return $query->where('expires_at', '<=', now());
    }
}

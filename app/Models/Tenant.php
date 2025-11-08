<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;
use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stripe\Tax\Transaction;

class Tenant extends BaseTenant implements TenantWithDatabase
{
    use HasDatabase, HasDomains, Notifiable;

    protected $with = [
        'domains',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'on_trial',
        'is_subscribed',
        'photo_url',
        'domain_url',
    ];

    protected $hidden = [
        'password',
    ];

    protected $fillable = [
        'data',
        'company',
        'name',
        'domain',
        'email',
        'password',
        'ready',
        'trial_ends_at',
        'trial_ends_email_sent_at',
        'primary_domain_id',
        'fallback_domain_id',
        'is_banned',
        'email_verified_at',
        'is_archived',
        'archived_at',
        'archived_by',
        'plan_id',
        'plan_ends_at',
    ];

    protected $casts = [
        'data' => 'array',
        'trial_ends_at' => 'datetime',
        'trial_ends_email_sent_at' => 'datetime',
        'plan_ends_at' => 'datetime',
        'email_verified_at' => 'datetime',
        'is_archived' => 'boolean',
        'archived_at' => 'datetime',
        'ready' => 'boolean',
        'is_banned' => 'boolean',
    ];

    public static function getCustomColumns(): array
    {
        return [
            'id',
            'plan_id',
            'plan_ends_at',
            'stripe_id',
            'pm_type',
            'pm_last_four',
            'trial_ends_at',
        ];
    }

    public function plan()
    {
        $plans = tenancy()->central(function () {
            return Plan::orderBy('amount')->first();
        });

        return $this->belongsTo(Plan::class)
            ->withDefault(function () use ($plans) {
                return $plans;
            });
    }

    public function subscriptions(): HasMany
    {
        return $this->hasMany(Subscription::class);
    }

    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }

    public function isSubscribed(): Attribute
    {
        return new Attribute(
            get: function () {
                if (! is_null($this->plan_id) || $this->onTrial()) {
                    if (! is_null($this->plan_ends_at)) {
                        return $this->plan_ends_at->greaterThan(now());
                    }

                    return true;
                } else {
                    return false;
                }
            }
        );
    }

    /**
     * Determine if the subscription is within its trial period.
     *
     * @return bool
     */
    public function onTrial(): bool
    {
        return $this->trial_ends_at && $this->trial_ends_at->isFuture();
    }


    /**
     * Determine if the subscription is within its trial period.
     *
     */
    public function getOnTrialAttribute()
    {
        return $this->onTrial();
    }

    public function photoUrl(): Attribute
    {
        return new Attribute(
            get: fn ($value) => vsprintf(
                'https://www.gravatar.com/avatar/%s.jpg?s=200&d=%s', [
                    md5(strtolower($this->email)), $this->name ?
                        urlencode("https://ui-avatars.com/api/$this->name") : 'mp',
                ]
            ),
        );
    }

    public function domainUrl(): Attribute
    {
        return new Attribute(
            get: fn ($value) => str_contains($this->domain, '.') ?
                request()->getScheme().'://'.$this->domain
                :
                request()->getScheme().'://'.$this->domain.'.'.config('tenancy.central_domains')[0],
        );
    }

    public function hasVerifiedEmail(): bool
    {
        return ! is_null($this->email_verified_at);
    }

    public function getEmailForVerification()
    {
        return $this->email;
    }

    public function markEmailAsVerified()
    {
        $this->forceFill([
            'email_verified_at' => $this->freshTimestamp(),
        ])->save();
    }

    /**
     * Archive the tenant
     */
    public function archive($archivedBy = null)
    {
        \DB::table('tenants')
            ->where('id', $this->id)
            ->update([
                'is_archived' => true,
                'archived_at' => now(),
                'archived_by' => $archivedBy ?? auth()->id(),
            ]);
    }

    /**
     * Restore the tenant from archive
     */
    public function restore()
    {
        \DB::table('tenants')
            ->where('id', $this->id)
            ->update([
                'is_archived' => false,
                'archived_at' => null,
                'archived_by' => null,
            ]);
    }

    /**
     * Check if tenant is archived
     */
    public function isArchived(): bool
    {
        return $this->is_archived;
    }

    /**
     * Scope to get only active (non-archived) tenants
     */
    public function scopeActive($query)
    {
        return $query->where('is_archived', false);
    }

    /**
     * Scope to get only archived tenants
     */
    public function scopeArchived($query)
    {
        return $query->where('is_archived', true);
    }
}
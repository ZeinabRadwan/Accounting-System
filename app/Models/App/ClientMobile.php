<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClientMobile extends AppModel
{
    protected $fillable = [
        'client_id',
        'mobile_number',
        'country_code',
        'is_primary',
        'is_verified',
        'notes',
        'is_active',
    ];

    protected $casts = [
        'is_primary' => 'boolean',
        'is_verified' => 'boolean',
        'is_active' => 'boolean',
    ];

    // Relationships
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopePrimary($query)
    {
        return $query->where('is_primary', true);
    }

    public function scopeVerified($query)
    {
        return $query->where('is_verified', true);
    }

    // Accessors
    public function getFullMobileNumberAttribute(): string
    {
        return $this->country_code . $this->mobile_number;
    }

    public function getDisplayMobileAttribute(): string
    {
        return $this->country_code . ' ' . $this->mobile_number;
    }
}

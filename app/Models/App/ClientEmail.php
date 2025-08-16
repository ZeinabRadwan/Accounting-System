<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClientEmail extends AppModel
{
    protected $fillable = [
        'client_id',
        'email',
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
    public function getDisplayEmailAttribute(): string
    {
        return $this->email;
    }

    public function getDomainAttribute(): string
    {
        return substr(strrchr($this->email, '@'), 1);
    }
}

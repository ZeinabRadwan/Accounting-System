<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Currency extends AppModel
{
    use HasTranslations;

    protected $fillable = [
        'code',
        'name',
        'symbol',
        'exchange_rate',
        'sort_order',
    ];

    protected $casts = [
        'exchange_rate' => 'decimal:6',
        'sort_order' => 'integer',
    ];

    // Relationships
    public function clients(): HasMany
    {
        return $this->hasMany(Client::class);
    }

    public function vendors(): HasMany
    {
        return $this->hasMany(Vendor::class);
    }

    // Scopes
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    // Accessors
    public function getFullNameAttribute(): string
    {
        return $this->getLocalizedNameAttribute();
    }

    public function getFormattedSymbolAttribute(): string
    {
        return $this->symbol ?? $this->code ?? '';
    }

    /**
     * Get the localized name with fallback
     */
    public function getDisplayNameAttribute(): string
    {
        return $this->getLocalizedNameAttribute();
    }
}

<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class State extends AppModel
{
    use HasTranslations;

    protected $fillable = [
        'name',
        'country_id',
        'created_by',
        'updated_by',
    ];

    protected $translatable = [
        'name',
    ];

    // Relationships
    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

    public function cities(): HasMany
    {
        return $this->hasMany(City::class);
    }

    // Scopes
    public function scopeByCountry($query, $countryId)
    {
        return $query->where('country_id', $countryId);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('name');
    }

    // Accessors
    public function getLocalizedNameAttribute(): string
    {
        return $this->getTranslatedNameAttribute();
    }

    public function getDisplayNameAttribute(): string
    {
        return $this->getLocalizedNameAttribute();
    }
}

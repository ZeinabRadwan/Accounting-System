<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class City extends AppModel
{
    use HasTranslations;

    protected $fillable = [
        'name',
        'state_id',
        'created_by',
        'updated_by',
    ];

    protected $translatable = [
        'name',
    ];

    // Relationships
    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'country_id', 'id', 'states');
    }

    // Scopes
    public function scopeByState($query, $stateId)
    {
        return $query->where('state_id', $stateId);
    }

    public function scopeByCountry($query, $countryId)
    {
        return $query->whereHas('state', function($q) use ($countryId) {
            $q->where('country_id', $countryId);
        });
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

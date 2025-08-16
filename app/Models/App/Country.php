<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Country extends AppModel
{
    use HasTranslations;

    protected $fillable = [
        'name',
        'created_by',
        'updated_by',
    ];

    protected $translatable = [
        'name',
    ];

    // Relationships
    public function states(): HasMany
    {
        return $this->hasMany(State::class);
    }

    public function cities(): HasMany
    {
        return $this->hasMany(City::class);
    }

    // Scopes
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

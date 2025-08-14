<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Relations\HasMany;

class IdType extends AppModel
{
    use HasTranslations;

    protected $fillable = [
        'name',
        'sort_order',
    ];

    protected $casts = [
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

    /**
     * Get the localized name with fallback
     */
    public function getDisplayNameAttribute(): string
    {
        return $this->getLocalizedNameAttribute();
    }
}

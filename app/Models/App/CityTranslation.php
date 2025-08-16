<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CityTranslation extends AppModel
{
    protected $table = 'cities_translations';

    protected $fillable = [
        'city_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the city that owns this translation.
     */
    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    /**
     * Get the translated name with fallback.
     */
    public function getTranslatedNameAttribute(): string
    {
        return $this->name ?? '';
    }
}

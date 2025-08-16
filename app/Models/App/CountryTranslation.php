<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CountryTranslation extends AppModel
{
    protected $table = 'countries_translations';

    protected $fillable = [
        'country_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the country that owns this translation.
     */
    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Get the translated name with fallback.
     */
    public function getTranslatedNameAttribute(): string
    {
        return $this->name ?? '';
    }
}

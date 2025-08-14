<?php

namespace App\Models\App\Translations;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CurrencyTranslation extends AppModel
{
    protected $fillable = [
        'currency_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the currency that owns the translation
     */
    public function currency(): BelongsTo
    {
        return $this->belongsTo(\App\Models\App\Currency::class);
    }
}

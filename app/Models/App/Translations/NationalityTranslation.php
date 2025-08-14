<?php

namespace App\Models\App\Translations;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class NationalityTranslation extends AppModel
{
    protected $fillable = [
        'nationality_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the nationality that owns the translation
     */
    public function nationality(): BelongsTo
    {
        return $this->belongsTo(\App\Models\App\Nationality::class);
    }
}

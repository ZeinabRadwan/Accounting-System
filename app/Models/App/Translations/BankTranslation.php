<?php

namespace App\Models\App\Translations;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BankTranslation extends AppModel
{
    protected $fillable = [
        'bank_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the bank that owns the translation
     */
    public function bank(): BelongsTo
    {
        return $this->belongsTo(\App\Models\App\Bank::class);
    }
}

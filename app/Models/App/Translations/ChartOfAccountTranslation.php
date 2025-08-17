<?php

namespace App\Models\App\Translations;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ChartOfAccountTranslation extends AppModel
{
    protected $fillable = [
        'chart_of_account_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the chart of account that owns the translation
     */
    public function chartOfAccount(): BelongsTo
    {
        return $this->belongsTo(\App\Models\App\ChartOfAccount::class);
    }
}

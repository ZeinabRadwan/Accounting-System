<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FinancialYearTranslation extends AppModel
{
    protected $table = 'financial_years_translations';

    protected $fillable = [
        'financial_year_id',
        'locale',
        'name',
    ];

    protected $casts = [
        'locale' => 'string',
    ];

    /**
     * Get the financial year that owns this translation.
     */
    public function financialYear(): BelongsTo
    {
        return $this->belongsTo(FinancialYear::class);
    }

    /**
     * Get the translated name with fallback.
     */
    public function getTranslatedNameAttribute(): string
    {
        return $this->name ?? '';
    }
}

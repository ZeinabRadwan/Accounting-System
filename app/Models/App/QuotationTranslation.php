<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class QuotationTranslation extends AppModel
{
    protected $table = 'quotation_translations';

    protected $fillable = [
        'quotation_id',
        'locale',
        'name',
        'subject',
    ];

    /**
     * Get the quotation that owns this translation.
     */
    public function quotation(): BelongsTo
    {
        return $this->belongsTo(Quotation::class);
    }

    /**
     * Get the translated name with fallback.
     */
    public function getTranslatedNameAttribute(): string
    {
        return $this->name ?? '';
    }

    /**
     * Get the translated subject with fallback.
     */
    public function getTranslatedSubjectAttribute(): string
    {
        return $this->subject ?? '';
    }
}

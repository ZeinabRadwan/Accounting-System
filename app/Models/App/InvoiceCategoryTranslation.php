<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InvoiceCategoryTranslation extends AppModel
{
    protected $table = 'invoice_categories_translations';

    protected $fillable = [
        'invoice_category_id',
        'locale',
        'name',
    ];

    /**
     * Get the invoice category that owns this translation.
     */
    public function invoiceCategory(): BelongsTo
    {
        return $this->belongsTo(InvoiceCategory::class);
    }

    /**
     * Get the translated name with fallback.
     */
    public function getTranslatedNameAttribute(): string
    {
        return $this->name ?? '';
    }
}

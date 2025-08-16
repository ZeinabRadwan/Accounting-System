<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InvoiceClientInfoTranslation extends AppModel
{
    protected $table = 'invoice_client_info_translations';

    protected $fillable = [
        'invoice_client_info_id',
        'locale',
        'client_name',
        'representative_name',
    ];

    /**
     * Get the invoice client info that owns this translation.
     */
    public function invoiceClientInfo(): BelongsTo
    {
        return $this->belongsTo(InvoiceClientInfo::class);
    }

    /**
     * Get the translated client name with fallback.
     */
    public function getTranslatedClientNameAttribute(): string
    {
        return $this->client_name ?? '';
    }

    /**
     * Get the translated representative name with fallback.
     */
    public function getTranslatedRepresentativeNameAttribute(): string
    {
        return $this->representative_name ?? '';
    }
}

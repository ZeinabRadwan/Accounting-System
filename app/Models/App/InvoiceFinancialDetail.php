<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Invoice;
use App\Models\App\Currency;
use App\Models\Core\Auth\User;
use App\Models\Core\Traits\Uuid;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;

class InvoiceFinancialDetail extends AppModel
{
    use Uuid;

    protected $fillable = [
        'invoice_id',
        'currency_id',
        'exchange_rate',
        'accounting_period_id',
        'financial_year_id',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'exchange_rate' => 'decimal:6',
    ];

    /**
     * Get the invoice associated with these financial details.
     */
    public function invoice(): BelongsTo
    {
        return $this->belongsTo(Invoice::class);
    }

    /**
     * Get the currency associated with these financial details.
     */
    public function currency(): BelongsTo
    {
        return $this->belongsTo(Currency::class);
    }



    /**
     * Get the user who created these financial details.
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the user who last updated these financial details.
     */
    public function updatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}

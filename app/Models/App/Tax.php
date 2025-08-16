<?php

namespace App\Models\App;

use App\Models\Core\BaseModel;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tax extends BaseModel
{
    protected $table = 'taxes';

    protected $fillable = [
        'name',
        'rate',
    ];

    protected $casts = [
        'rate' => 'decimal:2',
    ];

    /**
     * Get the invoice calculations that use this tax.
     */
    public function invoiceCalculations(): HasMany
    {
        return $this->hasMany(InvoiceCalculation::class);
    }

    /**
     * Get the quotation calculations that use this tax.
     */
    public function quotationCalculations(): HasMany
    {
        return $this->hasMany(QuotationCalculation::class);
    }

    /**
     * Get the rate as a percentage.
     */
    public function getRatePercentageAttribute(): float
    {
        return $this->rate;
    }

    /**
     * Get the rate as a decimal (e.g., 0.15 for 15%).
     */
    public function getRateDecimalAttribute(): float
    {
        return $this->rate / 100;
    }
}

<?php

namespace App\Models\Traits;

use App\Models\Core\Calculation;
use Illuminate\Database\Eloquent\Relations\MorphOne;

trait HasCalculations
{
    /**
     * Get the calculation record for this model.
     */
    public function calculation(): MorphOne
    {
        return $this->morphOne(Calculation::class, 'calculable');
    }

    /**
     * Create or update the calculation record.
     */
    public function updateCalculation(array $data = []): Calculation
    {
        if ($this->calculation) {
            $this->calculation->update($data);
            return $this->calculation;
        }

        return $this->calculation()->create($data);
    }

    /**
     * Get the total before discount.
     */
    public function getTotalBeforeDiscountAttribute(): float
    {
        return $this->calculation?->total_before_discount ?? 0.00;
    }

    /**
     * Get the discount type.
     */
    public function getDiscountTypeAttribute(): int
    {
        return $this->calculation?->discount_type ?? 0;
    }

    /**
     * Get the discount amount.
     */
    public function getDiscountAttribute(): float
    {
        return $this->calculation?->discount ?? 0.00;
    }

    /**
     * Get the total discount.
     */
    public function getTotalDiscountAttribute(): float
    {
        return $this->calculation?->total_discount ?? 0.00;
    }

    /**
     * Get the total after discount.
     */
    public function getTotalAfterDiscountAttribute(): float
    {
        return $this->calculation?->total_after_discount ?? 0.00;
    }

    /**
     * Get the VAT amount.
     */
    public function getVatAttribute(): float
    {
        return $this->calculation?->vat ?? 0.00;
    }

    /**
     * Get the total after VAT.
     */
    public function getTotalAfterVatAttribute(): float
    {
        return $this->calculation?->total_after_vat ?? 0.00;
    }

    /**
     * Get the final total.
     */
    public function getTotalAttribute(): float
    {
        return $this->calculation?->total ?? 0.00;
    }

    /**
     * Check if this model has a discount.
     */
    public function hasDiscount(): bool
    {
        return $this->calculation?->hasDiscount() ?? false;
    }

    /**
     * Check if this model has VAT.
     */
    public function hasVAT(): bool
    {
        return $this->calculation?->hasVAT() ?? false;
    }
}

<?php

namespace App\Models\App;

use App\Models\Core\BaseModel;
use App\Models\Core\Auth\User;
use App\Models\App\Invoice;
use App\Models\App\Tax;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InvoiceCalculation extends BaseModel
{
    protected $table = 'invoices_calculations';

    protected $fillable = [
        'invoice_id',
        'total_before_discount',
        'discount_type',
        'discount',
        'total_discount',
        'total_after_discount',
        'tax_id',
        'vat',
        'total_after_vat',
        'total',
        'created_by',
        'updated_by',
        'uuid',
    ];

    protected $casts = [
        'total_before_discount' => 'decimal:2',
        'discount_type' => 'integer',
        'discount' => 'decimal:2',
        'total_discount' => 'decimal:2',
        'total_after_discount' => 'decimal:2',
        'vat' => 'decimal:2',
        'total_after_vat' => 'decimal:2',
        'total' => 'decimal:2',
    ];

    // Discount type constants
    const DISCOUNT_TYPE_NONE = 0;
    const DISCOUNT_TYPE_PERCENTAGE = 1;
    const DISCOUNT_TYPE_FIXED = 2;

    /**
     * Get the invoice that owns this calculation.
     */
    public function invoice(): BelongsTo
    {
        return $this->belongsTo(Invoice::class);
    }

    /**
     * Get the tax associated with this calculation.
     */
    public function tax(): BelongsTo
    {
        return $this->belongsTo(Tax::class);
    }

    /**
     * Get the user who created this calculation.
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the user who last updated this calculation.
     */
    public function updatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    /**
     * Get discount type label.
     */
    public function getDiscountTypeLabelAttribute(): string
    {
        return match($this->discount_type) {
            self::DISCOUNT_TYPE_NONE => 'None',
            self::DISCOUNT_TYPE_PERCENTAGE => 'Percentage',
            self::DISCOUNT_TYPE_FIXED => 'Fixed',
            default => 'Unknown',
        };
    }

    /**
     * Check if discount is percentage based.
     */
    public function isPercentageDiscount(): bool
    {
        return $this->discount_type === self::DISCOUNT_TYPE_PERCENTAGE;
    }

    /**
     * Check if discount is fixed amount.
     */
    public function isFixedDiscount(): bool
    {
        return $this->discount_type === self::DISCOUNT_TYPE_FIXED;
    }

    /**
     * Check if discount is applied.
     */
    public function hasDiscount(): bool
    {
        return $this->discount_type !== self::DISCOUNT_TYPE_NONE && $this->discount > 0;
    }

    /**
     * Check if VAT is applied.
     */
    public function hasVAT(): bool
    {
        return $this->vat > 0;
    }
}

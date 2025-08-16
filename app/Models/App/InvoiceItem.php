<?php

namespace App\Models\App;

use App\Models\Core\BaseModel;
use App\Models\App\Invoice;
use App\Models\App\Tax;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InvoiceItem extends BaseModel
{
    protected $table = 'invoice_items';

    protected $fillable = [
        'invoice_id',
        'item_name',
        'item_name_ar',
        'item_code',
        'description',
        'description_ar',
        'unit',
        'quantity',
        'unit_price',
        'total_price',
        'discount_type',
        'discount',
        'discount_amount',
        'price_after_discount',
        'tax_id',
        'tax_rate',
        'tax_amount',
        'final_price',
        'custom_fields',
        'sort_order',
    ];

    protected $casts = [
        'quantity' => 'decimal:3',
        'unit_price' => 'decimal:2',
        'total_price' => 'decimal:2',
        'discount_type' => 'integer',
        'discount' => 'decimal:2',
        'discount_amount' => 'decimal:2',
        'price_after_discount' => 'decimal:2',
        'tax_rate' => 'decimal:2',
        'tax_amount' => 'decimal:2',
        'final_price' => 'decimal:2',
        'custom_fields' => 'array',
        'sort_order' => 'integer',
    ];

    // Discount type constants
    const DISCOUNT_TYPE_NONE = 0;
    const DISCOUNT_TYPE_PERCENTAGE = 1;
    const DISCOUNT_TYPE_FIXED = 2;

    /**
     * Get the invoice that owns this item.
     */
    public function invoice(): BelongsTo
    {
        return $this->belongsTo(Invoice::class);
    }

    /**
     * Get the tax associated with this item.
     */
    public function tax(): BelongsTo
    {
        return $this->belongsTo(Tax::class);
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
     * Check if tax is applied.
     */
    public function hasTax(): bool
    {
        return $this->tax_id && $this->tax_amount > 0;
    }
}

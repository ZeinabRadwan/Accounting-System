<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoiceProduct extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'invoice_id', 'product_id', 'quantity', 'purchase_price', 'sale_price', 'unit_cost', 'tax_amount',
        'discount', 'discount_type', 'discount_amount', 'vat_rate_id'
    ];

    protected $casts = [
        'discount' => 'decimal:2',
        'discount_amount' => 'decimal:2',
    ];

    /**
     * Get the invoice for this product.
     */
    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoice_id');
    }

    /**
     * Get the product.
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    /**
     * Get the VAT rate for this product.
     */
    public function vatRate()
    {
        return $this->belongsTo(VatRate::class, 'vat_rate_id');
    }

    /**
     * Calculate the discount amount for this product
     */
    public function calculateDiscountAmount()
    {
        if ($this->discount_type === 'percentage') {
            return ($this->sale_price * $this->quantity * $this->discount) / 100;
        }
        
        return $this->discount_amount ?? 0;
    }

    /**
     * Get the product total after discount
     */
    public function getTotalAfterDiscountAttribute()
    {
        $subtotal = $this->sale_price * $this->quantity;
        return $subtotal - $this->calculateDiscountAmount();
    }

    /**
     * Get the final product total (after discount, before tax)
     */
    public function getFinalTotalAttribute()
    {
        return $this->getTotalAfterDiscountAttribute();
    }
}

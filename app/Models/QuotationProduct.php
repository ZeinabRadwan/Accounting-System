<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QuotationProduct extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'quotation_id', 'product_id', 'quantity', 'purchase_price', 'sale_price', 'unit_cost', 'tax_amount',
        'discount', 'discount_type', 'discount_amount', 'vat_rate_id',
    ];

    /**
     * Get the product.
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    /**
     * Get the VAT rate.
     */
    public function vatRate()
    {
        return $this->belongsTo(VatRate::class, 'vat_rate_id');
    }

    /**
     * Get total after discount attribute.
     */
    public function getTotalAfterDiscountAttribute()
    {
        $salePrice = $this->sale_price ?? 0;
        $quantity = $this->quantity ?? 1;
        $discountAmount = $this->discount_amount ?? 0;
        
        // Total After Discount = (sale_price * quantity) - discount_amount
        return ($salePrice * $quantity) - $discountAmount;
    }

    /**
     * Get unit tax attribute.
     */
    public function getUnitTaxAttribute()
    {
        $taxAmount = $this->tax_amount ?? 0;
        $quantity = $this->quantity ?? 1;
        
        // Unit Tax = tax_amount / quantity
        return $quantity > 0 ? $taxAmount / $quantity : 0;
    }

    /**
     * Get unit cost attribute.
     */
    public function getUnitCostAttribute()
    {
        $totalAfterDiscount = $this->getTotalAfterDiscountAttribute();
        $unitTax = $this->getUnitTaxAttribute();
        
        // Unit Cost = Total After Discount + Unit Tax
        return $totalAfterDiscount + $unitTax;
    }

    /**
     * Get subtotal attribute.
     */
    public function getSubtotalAttribute()
    {
        $totalAfterDiscount = $this->getTotalAfterDiscountAttribute();
        
        // Subtotal = Total After Discount (without VAT)
        return $totalAfterDiscount;
    }
}

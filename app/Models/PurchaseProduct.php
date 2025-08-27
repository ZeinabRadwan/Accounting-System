<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseProduct extends Model
{
    use HasFactory;

    protected $table = 'purchase_products';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'purchase_id', 'product_id', 'quantity', 'purchase_price', 'unit_cost', 'tax_amount',
        'discount', 'discount_type', 'discount_amount'
    ];

    protected $casts = [
        'discount' => 'decimal:2',
        'discount_amount' => 'decimal:2',
    ];

    // get product total
    public function productTotal()
    {
        return $this->quantity * $this->purchase_price;
    }

    /**
     * Calculate the discount amount for this product
     */
    public function calculateDiscountAmount()
    {
        if ($this->discount_type === 'percentage') {
            return ($this->purchase_price * $this->quantity * $this->discount) / 100;
        }
        
        return $this->discount_amount ?? 0;
    }

    /**
     * Get the product total after discount
     */
    public function getTotalAfterDiscountAttribute()
    {
        $subtotal = $this->purchase_price * $this->quantity;
        return $subtotal - $this->calculateDiscountAmount();
    }

    /**
     * Get the final product total (after discount, before tax)
     */
    public function getFinalTotalAttribute()
    {
        return $this->getTotalAfterDiscountAttribute();
    }

    /**
     * Get the purchase for this product.
     */
    public function purchase()
    {
        return $this->belongsTo(Purchase::class, 'purchase_id');
    }

    /**
     * Get the product.
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id')->orderBy('code', 'ASC');
    }
}

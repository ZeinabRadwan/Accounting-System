<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrderProduct extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'purchase_order_id', 'product_id', 'quantity', 'purchase_price', 'unit_cost', 'tax_amount', 'discount', 'discount_type', 'discount_amount', 'branch_id',
    ];

    /**
     * Get the purchase order that owns the product.
     */
    public function purchaseOrder()
    {
        return $this->belongsTo(PurchaseOrder::class, 'purchase_order_id');
    }

    /**
     * Get the product for this purchase order product.
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
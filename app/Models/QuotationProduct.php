<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuotationProduct extends Model
{
    use HasFactory;

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
}

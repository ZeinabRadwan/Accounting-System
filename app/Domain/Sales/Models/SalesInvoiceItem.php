<?php

namespace App\Domain\Sales\Models;

use App\Domain\Product\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SalesInvoiceItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'sales_invoice_id',
        'product_id',
        'product_name',
        'sku',
        'unit_name',
        'conversion_factor',
        'price_level',
        'unit_price',
        'quantity',
        'item_discount',
        'line_subtotal',
        'line_total',
    ];

    protected $casts = [
        'conversion_factor' => 'decimal:4',
        'unit_price' => 'decimal:2',
        'quantity' => 'decimal:4',
        'item_discount' => 'decimal:2',
        'line_subtotal' => 'decimal:2',
        'line_total' => 'decimal:2',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function invoice(): BelongsTo
    {
        return $this->belongsTo(SalesInvoice::class, 'sales_invoice_id');
    }
}


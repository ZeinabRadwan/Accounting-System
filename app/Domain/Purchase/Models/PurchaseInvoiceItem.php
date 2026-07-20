<?php

namespace App\Domain\Purchase\Models;

use App\Domain\Product\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PurchaseInvoiceItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'purchase_invoice_id',
        'product_id',
        'product_name',
        'sku',
        'unit_name',
        'conversion_factor',
        'unit_cost',
        'quantity',
        'line_total_cost',
        'expiry_date',
        'update_price1',
        'new_price1',
        'new_price2',
        'new_price3',
    ];

    protected $casts = [
        'conversion_factor' => 'decimal:4',
        'unit_cost' => 'decimal:2',
        'quantity' => 'decimal:4',
        'line_total_cost' => 'decimal:2',
        'expiry_date' => 'date',
        'update_price1' => 'boolean',
        'new_price1' => 'decimal:2',
        'new_price2' => 'decimal:2',
        'new_price3' => 'decimal:2',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function invoice(): BelongsTo
    {
        return $this->belongsTo(PurchaseInvoice::class, 'purchase_invoice_id');
    }
}


<?php

namespace App\Domain\Inventory\Models;

use App\Domain\Branch\Models\Branch;
use App\Domain\Product\Models\Product;
use App\Domain\Purchase\Models\PurchaseInvoiceItem;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InventoryLot extends Model
{
    use HasFactory;

    protected $fillable = [
        'branch_id',
        'product_id',
        'purchase_invoice_item_id',
        'quantity',
        'expiry_date',
    ];

    protected $casts = [
        'quantity' => 'decimal:4',
        'expiry_date' => 'date',
    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function purchaseItem(): BelongsTo
    {
        return $this->belongsTo(PurchaseInvoiceItem::class, 'purchase_invoice_item_id');
    }

    public function scopeWithRemaining($query)
    {
        return $query->where('quantity', '>', 0);
    }

    public function scopeExpiringSoon($query, int $days = 30)
    {
        $today = now()->startOfDay();

        return $query->withRemaining()
            ->whereNotNull('expiry_date')
            ->whereDate('expiry_date', '>=', $today)
            ->whereDate('expiry_date', '<=', $today->copy()->addDays($days));
    }

    public function scopeExpired($query)
    {
        return $query->withRemaining()
            ->whereNotNull('expiry_date')
            ->whereDate('expiry_date', '<', now()->startOfDay());
    }
}

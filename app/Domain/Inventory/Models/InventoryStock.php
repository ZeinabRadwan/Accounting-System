<?php

namespace App\Domain\Inventory\Models;

use App\Domain\Branch\Models\Branch;
use App\Domain\Product\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class InventoryStock extends Model
{
    use HasFactory;

    protected $fillable = [
        'branch_id',
        'product_id',
        'quantity',
    ];

    protected $casts = [
        'quantity' => 'decimal:4',
    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function scopeWithNearestExpiry($query)
    {
        return $query->addSelect([
            'nearest_expiry' => InventoryLot::query()
                ->select(DB::raw('min(expiry_date)'))
                ->whereColumn('inventory_lots.branch_id', 'inventory_stocks.branch_id')
                ->whereColumn('inventory_lots.product_id', 'inventory_stocks.product_id')
                ->where('quantity', '>', 0)
                ->whereNotNull('expiry_date'),
        ]);
    }
}


<?php

namespace App\Domain\Inventory\Models;

use App\Domain\Branch\Models\Branch;
use App\Domain\Product\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InventoryAlertState extends Model
{
    protected $fillable = [
        'branch_id',
        'product_id',
        'last_notified_status',
        'last_notified_at',
    ];

    protected function casts(): array
    {
        return [
            'last_notified_at' => 'datetime',
        ];
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}

<?php

namespace App\Domain\Inventory\Models;

use App\Domain\Branch\Models\Branch;
use App\Domain\Inventory\Enums\MovementType;
use App\Domain\Product\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StockMovement extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'branch_id_from',
        'branch_id_to',
        'movement_type',
        'quantity',
        'meta',
    ];

    protected $casts = [
        'movement_type' => MovementType::class,
        'quantity' => 'decimal:4',
        'meta' => 'array',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function fromBranch(): BelongsTo
    {
        return $this->belongsTo(Branch::class, 'branch_id_from');
    }

    public function toBranch(): BelongsTo
    {
        return $this->belongsTo(Branch::class, 'branch_id_to');
    }
}


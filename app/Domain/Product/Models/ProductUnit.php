<?php

namespace App\Domain\Product\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductUnit extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'unit_name',
        'conversion_factor',
        'price1',
        'price2',
        'price3',
        'is_base',
    ];

    protected $casts = [
        'conversion_factor' => 'decimal:4',
        'price1' => 'decimal:2',
        'price2' => 'decimal:2',
        'price3' => 'decimal:2',
        'is_base' => 'boolean',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}


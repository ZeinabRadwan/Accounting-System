<?php

namespace App\Domain\Product\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'display_name',
        'sku',
        'price1',
        'price2',
        'price3',
        'base_unit',
        'minimum_stock',
        'is_active',
    ];

    protected $casts = [
        'price1' => 'decimal:2',
        'price2' => 'decimal:2',
        'price3' => 'decimal:2',
        'minimum_stock' => 'decimal:4',
        'is_active' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function units(): HasMany
    {
        return $this->hasMany(ProductUnit::class);
    }

    public function getFullDisplayNameAttribute(): string
    {
        return static::composeDisplayName(
            (string) $this->display_name,
            $this->relationLoaded('category')
                ? $this->category?->name
                : $this->category()->value('name')
        );
    }

    public static function composeDisplayName(string $productName, ?string $categoryName): string
    {
        $productName = trim($productName);
        $categoryName = trim((string) $categoryName);

        if ($productName === '') {
            return $categoryName;
        }

        if ($categoryName === '') {
            return $productName;
        }

        $suffix = ' - '.$categoryName;
        if (str_ends_with($productName, $suffix)) {
            return $productName;
        }

        $prefix = $categoryName.' - ';
        if (str_starts_with($productName, $prefix)) {
            return substr($productName, strlen($prefix)).$suffix;
        }

        return $productName.$suffix;
    }

    public static function extractProductName(string $displayName, ?string $categoryName): string
    {
        $displayName = trim($displayName);
        $categoryName = trim((string) $categoryName);

        if ($categoryName === '') {
            return $displayName;
        }

        $suffix = ' - '.$categoryName;
        if (str_ends_with($displayName, $suffix)) {
            return trim(substr($displayName, 0, -strlen($suffix)));
        }

        $prefix = $categoryName.' - ';
        if (str_starts_with($displayName, $prefix)) {
            return trim(substr($displayName, strlen($prefix)));
        }

        return $displayName;
    }
}

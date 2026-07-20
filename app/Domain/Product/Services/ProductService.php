<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Category;
use App\Domain\Product\Models\Product;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use InvalidArgumentException;

class ProductService
{
    public function paginate(?int $categoryId = null, ?string $search = null, ?string $status = null, int $perPage = 15): LengthAwarePaginator
    {
        return Product::query()
            ->when($categoryId, fn ($q) => $q->where('category_id', $categoryId))
            ->when($status !== null && $status !== '', function ($q) use ($status) {
                if ($status === 'active') {
                    $q->where('is_active', true);
                } elseif ($status === 'inactive') {
                    $q->where('is_active', false);
                }
            })
            ->when($search, function ($q) use ($search) {
                $q->where(function ($qq) use ($search) {
                    $qq->where('display_name', 'like', "%{$search}%")
                        ->orWhere('sku', 'like', "%{$search}%");
                });
            })
            ->with(['category', 'units'])
            ->orderBy('display_name')
            ->paginate($perPage);
    }

    public function create(array $data): Product
    {
        return DB::transaction(function () use ($data) {
            $units = $this->normalizeUnits($data['units'] ?? []);
            $base = $this->baseUnit($units);

            $categoryId = (int) $data['category_id'];
            $displayName = $this->composeProductDisplayName(
                (string) $data['display_name'],
                $categoryId
            );

            /** @var Product $product */
            $product = Product::create([
                'category_id' => $categoryId,
                'display_name' => $displayName,
                'sku' => ! empty($data['sku']) ? (string) $data['sku'] : $this->generateSku($displayName),
                'price1' => $base['price1'],
                'price2' => $base['price2'],
                'price3' => $base['price3'],
                'base_unit' => $base['unit_name'],
                'is_active' => (bool) ($data['is_active'] ?? true),
            ]);

            $this->createOrUpdateUnits($product, $units);

            return $product->load(['category', 'units']);
        });
    }

    public function update(Product $product, array $data): Product
    {
        return DB::transaction(function () use ($product, $data) {
            $units = array_key_exists('units', $data)
                ? $this->normalizeUnits($data['units'])
                : null;

            if ($units !== null && $units === []) {
                throw new InvalidArgumentException('At least one unit is required.');
            }

            $base = $units !== null ? $this->baseUnit($units) : null;

            $categoryId = (int) ($data['category_id'] ?? $product->category_id);
            $rawName = array_key_exists('display_name', $data)
                ? (string) $data['display_name']
                : Product::extractProductName((string) $product->display_name, $product->category?->name);
            $displayName = $this->composeProductDisplayName($rawName, $categoryId);

            $product->fill([
                'category_id' => $categoryId,
                'display_name' => $displayName,
                'sku' => $data['sku'] ?? $product->sku,
                'price1' => $base['price1'] ?? $product->price1,
                'price2' => $base['price2'] ?? $product->price2,
                'price3' => $base['price3'] ?? $product->price3,
                'base_unit' => $base['unit_name'] ?? $product->base_unit,
            ])->save();

            if ($units !== null) {
                $this->syncUnits($product, $units);
            }

            return $product->load(['category', 'units']);
        });
    }

    /**
     * @param  array<int, array<string, mixed>>  $units
     * @return array<int, array{unit_name: string, conversion_factor: float, price1: float, price2: float, price3: float, is_base: bool}>
     */
    protected function normalizeUnits(array $units): array
    {
        $normalized = [];
        $seenNames = [];
        $baseCount = 0;

        foreach (array_values($units) as $u) {
            if (! isset($u['unit_name']) || trim((string) $u['unit_name']) === '') {
                throw new InvalidArgumentException('Each unit requires a unit name.');
            }

            $unitName = trim((string) $u['unit_name']);
            $nameKey = mb_strtolower($unitName);
            if (isset($seenNames[$nameKey])) {
                throw new InvalidArgumentException('Duplicate unit names are not allowed for the same product.');
            }
            $seenNames[$nameKey] = true;

            if (! isset($u['price1']) || $u['price1'] === '' || $u['price1'] === null) {
                throw new InvalidArgumentException('Each unit requires Price 1.');
            }

            $isBase = filter_var($u['is_base'] ?? false, FILTER_VALIDATE_BOOLEAN);
            if ($isBase) {
                $baseCount++;
            }

            if ($isBase) {
                $factor = 1.0;
            } else {
                $rawFactor = $u['conversion_factor'] ?? null;
                if ($rawFactor === null || $rawFactor === '') {
                    throw new InvalidArgumentException('Conversion factor is required for non-base units.');
                }
                $factor = (float) $rawFactor;
                if ($factor <= 0) {
                    throw new InvalidArgumentException('Conversion factor must be greater than 0.');
                }
            }

            $price1 = (float) $u['price1'];
            $price2 = $this->resolveOptionalPrice($u['price2'] ?? null, $price1);
            $price3 = $this->resolveOptionalPrice($u['price3'] ?? null, $price1);

            $normalized[] = [
                'unit_name' => $unitName,
                'conversion_factor' => $factor,
                'price1' => $price1,
                'price2' => $price2,
                'price3' => $price3,
                'is_base' => $isBase,
            ];
        }

        if ($normalized === []) {
            throw new InvalidArgumentException('At least one unit is required.');
        }

        if ($baseCount !== 1) {
            throw new InvalidArgumentException('Exactly one base unit is required.');
        }

        usort($normalized, function (array $a, array $b): int {
            return ((int) $b['is_base']) <=> ((int) $a['is_base']);
        });

        return $normalized;
    }

    /**
     * @param  array<int, array{unit_name: string, conversion_factor: float, price1: float, price2: float, price3: float, is_base: bool}>  $units
     * @return array{unit_name: string, conversion_factor: float, price1: float, price2: float, price3: float, is_base: bool}
     */
    protected function baseUnit(array $units): array
    {
        foreach ($units as $unit) {
            if ($unit['is_base']) {
                return $unit;
            }
        }

        throw new InvalidArgumentException('Exactly one base unit is required.');
    }

    protected function resolveOptionalPrice(mixed $value, float $fallback): float
    {
        if ($value === null || $value === '') {
            return $fallback;
        }

        return (float) $value;
    }

    protected function generateSku(string $name): string
    {
        $base = strtoupper(Str::slug(Str::limit($name, 24, ''), ''));
        if ($base === '') {
            $base = 'PRD';
        }

        return $base.'-'.strtoupper(Str::random(6));
    }

    protected function composeProductDisplayName(string $productName, int $categoryId): string
    {
        $categoryName = Category::query()->whereKey($categoryId)->value('name');

        return Product::composeDisplayName($productName, $categoryName);
    }

    /**
     * @param  array<int, array{unit_name: string, conversion_factor: float, price1: float, price2: float, price3: float, is_base: bool}>  $units
     */
    protected function createOrUpdateUnits(Product $product, array $units): void
    {
        foreach ($units as $u) {
            $product->units()->updateOrCreate(
                ['unit_name' => $u['unit_name']],
                [
                    'conversion_factor' => $u['conversion_factor'],
                    'price1' => $u['price1'],
                    'price2' => $u['price2'],
                    'price3' => $u['price3'],
                    'is_base' => $u['is_base'],
                ]
            );
        }
    }

    /**
     * @param  array<int, array{unit_name: string, conversion_factor: float, price1: float, price2: float, price3: float, is_base: bool}>  $units
     */
    protected function syncUnits(Product $product, array $units): void
    {
        $existing = $product->units()->pluck('unit_name', 'id');
        $byName = [];
        foreach ($units as $u) {
            $byName[$u['unit_name']] = $u;
        }

        foreach ($existing as $id => $name) {
            if (! isset($byName[$name])) {
                $product->units()->whereKey($id)->delete();
            }
        }

        $this->createOrUpdateUnits($product, $units);
    }

    public function delete(Product $product): void
    {
        $product->delete();
    }
}

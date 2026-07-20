<?php

namespace App\Domain\Inventory\Services;

use App\Domain\Inventory\Models\InventoryStock;
use Illuminate\Database\UniqueConstraintViolationException;

class StockService
{
    /**
     * Get stock row for update (creates if missing with quantity 0).
     * Must be called inside an outer DB transaction for locking to be meaningful.
     */
    public function lockAndGet(int $branchId, int $productId): InventoryStock
    {
        /** @var InventoryStock|null $found */
        $found = InventoryStock::query()
            ->where('branch_id', $branchId)
            ->where('product_id', $productId)
            ->lockForUpdate()
            ->first();

        if ($found) {
            return $found;
        }

        try {
            return InventoryStock::query()->create([
                'branch_id' => $branchId,
                'product_id' => $productId,
                'quantity' => 0,
            ]);
        } catch (UniqueConstraintViolationException) {
            return InventoryStock::query()
                ->where('branch_id', $branchId)
                ->where('product_id', $productId)
                ->lockForUpdate()
                ->firstOrFail();
        }
    }

    public function available(int $branchId, int $productId): float
    {
        return (float) (InventoryStock::query()
            ->where('branch_id', $branchId)
            ->where('product_id', $productId)
            ->value('quantity') ?? 0);
    }
}

<?php

namespace App\Domain\Inventory\Services;

use App\Domain\Inventory\Enums\MovementType;
use App\Domain\Inventory\Models\InventoryLot;
use App\Domain\Inventory\Models\InventoryStock;
use App\Domain\Inventory\Models\StockMovement;
use DomainException;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class InventoryService
{
    public function __construct(private readonly StockService $stockService)
    {
    }

    /**
     * Increase stock in a branch for a product.
     *
     * Optional meta keys for lot tracking:
     * - expiry_date (?string Y-m-d)
     * - purchase_invoice_item_id (?int)
     */
    public function Increase(int $branchId, int $productId, float $quantity, array $meta = [], MovementType $type = MovementType::Purchase): InventoryStock
    {
        return DB::transaction(function () use ($branchId, $productId, $quantity, $meta, $type) {
            $stock = $this->stockService->lockAndGet($branchId, $productId);
            $stock->quantity = (float) $stock->quantity + $quantity;
            $stock->save();

            $expiry = $this->normalizeExpiry($meta['expiry_date'] ?? null);
            if ($expiry !== null) {
                InventoryLot::create([
                    'branch_id' => $branchId,
                    'product_id' => $productId,
                    'purchase_invoice_item_id' => $meta['purchase_invoice_item_id'] ?? null,
                    'quantity' => $quantity,
                    'expiry_date' => $expiry,
                ]);
            }

            $this->logMovement($productId, null, $branchId, $type, $quantity, $meta);

            return $stock->refresh();
        });
    }

    /**
     * Decrease stock in a branch for a product, preventing negative stock.
     */
    public function Decrease(int $branchId, int $productId, float $quantity, array $meta = [], MovementType $type = MovementType::Sale): InventoryStock
    {
        return DB::transaction(function () use ($branchId, $productId, $quantity, $meta, $type) {
            $stock = $this->stockService->lockAndGet($branchId, $productId);
            if ((float) $stock->quantity < $quantity) {
                throw new DomainException('Insufficient stock.');
            }

            $stock->quantity = (float) $stock->quantity - $quantity;
            $stock->save();

            $this->consumeLots($branchId, $productId, $quantity);

            $this->logMovement($productId, $branchId, null, $type, $quantity, $meta);

            return $stock->refresh();
        });
    }

    /**
     * Transfer stock between branches atomically, preventing negatives.
     */
    public function Transfer(int $fromBranchId, int $toBranchId, int $productId, float $quantity, array $meta = []): void
    {
        DB::transaction(function () use ($fromBranchId, $toBranchId, $productId, $quantity, $meta) {
            $from = $this->stockService->lockAndGet($fromBranchId, $productId);
            if ((float) $from->quantity < $quantity) {
                throw new DomainException('Insufficient stock for transfer.');
            }

            $to = $this->stockService->lockAndGet($toBranchId, $productId);

            $from->quantity = (float) $from->quantity - $quantity;
            $to->quantity = (float) $to->quantity + $quantity;

            $from->save();
            $to->save();

            $movedLots = $this->consumeLots($fromBranchId, $productId, $quantity, returnMoved: true);
            foreach ($movedLots as $moved) {
                InventoryLot::create([
                    'branch_id' => $toBranchId,
                    'product_id' => $productId,
                    'purchase_invoice_item_id' => $moved['purchase_invoice_item_id'],
                    'quantity' => $moved['quantity'],
                    'expiry_date' => $moved['expiry_date'],
                ]);
            }

            $this->logMovement($productId, $fromBranchId, $toBranchId, MovementType::TransferOut, $quantity, $meta);
            $this->logMovement($productId, $fromBranchId, $toBranchId, MovementType::TransferIn, $quantity, $meta);
        });
    }

    /**
     * Consume lots FIFO (earliest expiry first; null expiry last).
     *
     * @return list<array{quantity:float,expiry_date:?string,purchase_invoice_item_id:?int}>
     */
    protected function consumeLots(int $branchId, int $productId, float $quantity, bool $returnMoved = false): array
    {
        $remaining = $quantity;
        $moved = [];

        $lots = InventoryLot::query()
            ->where('branch_id', $branchId)
            ->where('product_id', $productId)
            ->where('quantity', '>', 0)
            ->orderByRaw('expiry_date is null')
            ->orderBy('expiry_date')
            ->orderBy('id')
            ->lockForUpdate()
            ->get();

        foreach ($lots as $lot) {
            if ($remaining <= 0) {
                break;
            }

            $available = (float) $lot->quantity;
            $take = min($available, $remaining);
            $lot->quantity = $available - $take;
            $lot->save();

            if ($returnMoved && $take > 0) {
                $moved[] = [
                    'quantity' => $take,
                    'expiry_date' => $lot->expiry_date?->format('Y-m-d'),
                    'purchase_invoice_item_id' => $lot->purchase_invoice_item_id,
                ];
            }

            $remaining -= $take;
        }

        return $moved;
    }

    protected function normalizeExpiry(mixed $value): ?string
    {
        if ($value === null || $value === '') {
            return null;
        }

        try {
            return Carbon::parse((string) $value)->toDateString();
        } catch (\Throwable) {
            return null;
        }
    }

    protected function logMovement(
        int $productId,
        ?int $fromBranchId,
        ?int $toBranchId,
        MovementType $type,
        float $quantity,
        array $meta = [],
    ): void {
        StockMovement::create([
            'product_id' => $productId,
            'branch_id_from' => $fromBranchId,
            'branch_id_to' => $toBranchId,
            'movement_type' => $type,
            'quantity' => $quantity,
            'meta' => $meta ?: null,
        ]);
    }
}

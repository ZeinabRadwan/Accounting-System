<?php

namespace App\Domain\Transfer\Services;

use App\Domain\Inventory\Services\InventoryService;
use App\Domain\Notifications\Services\SystemNotifier;
use App\Domain\Transfer\Models\StockTransfer;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class StockTransferService
{
    public function __construct(private readonly InventoryService $inventoryService)
    {
    }

    /**
     * Create a stock transfer between branches.
     *
     * Payload:
     * - branch_id_from, branch_id_to, user_id, notes?
     * - items[]: product_id, unit_name, conversion_factor, quantity
     */
    public function createTransfer(array $payload): StockTransfer
    {
        return DB::transaction(function () use ($payload) {
            $from = (int) $payload['branch_id_from'];
            $to = (int) $payload['branch_id_to'];
            $userId = (int) $payload['user_id'];

            $transfer = StockTransfer::create([
                'transfer_number' => 'TRF-'.Str::upper(Str::random(8)),
                'branch_id_from' => $from,
                'branch_id_to' => $to,
                'user_id' => $userId,
                'notes' => $payload['notes'] ?? null,
            ]);

            foreach ($payload['items'] as $line) {
                $created = $transfer->items()->create([
                    'product_id' => (int) $line['product_id'],
                    'unit_name' => (string) $line['unit_name'],
                    'conversion_factor' => (float) $line['conversion_factor'],
                    'quantity' => (float) $line['quantity'],
                ]);

                $baseQty = (float) $created->quantity * (float) $created->conversion_factor;
                // InventoryService handles insufficient stock prevention and movement logs
                $this->inventoryService->Transfer($from, $to, (int) $created->product_id, $baseQty, [
                    'stock_transfer_id' => $transfer->id,
                    'line_id' => $created->id,
                ]);
            }

            $transfer = $transfer->load('items');
            DB::afterCommit(fn () => app(SystemNotifier::class)->transferCompleted($transfer));

            return $transfer;
        });
    }
}


<?php

namespace App\Domain\Purchase\Services;

use App\Domain\Inventory\Enums\MovementType;
use App\Domain\Inventory\Services\InventoryService;
use App\Domain\Notifications\Services\SystemNotifier;
use App\Domain\Purchase\Models\PurchaseInvoice;
use App\Domain\Purchase\Models\PurchaseInvoiceItem;
use App\Domain\Purchase\Models\PurchaseReturn;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Services\TreasuryService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use DomainException;

class PurchaseReturnService
{
    public function __construct(
        private readonly InventoryService $inventoryService,
        private readonly TreasuryService $treasuryService,
    ) {
    }

    /**
     * Create purchase return. Payload:
     * - purchase_invoice_id, branch_id, user_id, notes?, payment_method? (defaults to invoice payment method or cash)
     * - items[] (purchase_invoice_item_id, quantity, unit_name, conversion_factor, unit_cost?)
     */
    public function createReturn(array $payload): PurchaseReturn
    {
        return DB::transaction(function () use ($payload) {
            /** @var PurchaseInvoice $invoice */
            $invoice = PurchaseInvoice::with('items')->findOrFail((int) $payload['purchase_invoice_id']);
            $branchId = (int) $payload['branch_id'];
            $userId = (int) $payload['user_id'];
            $returnNumber = 'PRET-'.Str::upper(Str::random(8));

            $totalCost = 0.0;
            $itemsToCreate = [];

            foreach ($payload['items'] as $line) {
                /** @var PurchaseInvoiceItem $invItem */
                $invItem = PurchaseInvoiceItem::findOrFail((int) $line['purchase_invoice_item_id']);
                if ($invItem->purchase_invoice_id !== $invoice->id) {
                    throw new DomainException('Item does not belong to purchase invoice.');
                }

                $qty = (float) $line['quantity'];
                $factor = (float) $line['conversion_factor'];
                $baseQtyReturn = $qty * $factor;

                // Sum of previous returns for this purchase invoice item
                $returnedBase = (float) DB::table('purchase_return_items')
                    ->where('purchase_invoice_item_id', $invItem->id)
                    ->join('purchase_returns', 'purchase_returns.id', '=', 'purchase_return_items.purchase_return_id')
                    ->sum(DB::raw('purchase_return_items.quantity * purchase_return_items.conversion_factor'));

                $originalBase = (float) $invItem->quantity * (float) $invItem->conversion_factor;
                if (($returnedBase + $baseQtyReturn) > $originalBase + 1e-6) {
                    throw new DomainException('Return quantity exceeds purchased quantity.');
                }

                $unitCost = isset($line['unit_cost']) ? (float) $line['unit_cost'] : (float) $invItem->unit_cost;
                $lineCost = $unitCost * $qty;
                $totalCost += $lineCost;

                $itemsToCreate[] = [
                    'purchase_invoice_item_id' => $invItem->id,
                    'product_id' => (int) $invItem->product_id,
                    'unit_name' => (string) $line['unit_name'],
                    'conversion_factor' => $factor,
                    'unit_cost' => $unitCost,
                    'quantity' => $qty,
                    'line_total_cost' => $lineCost,
                ];
            }

            /** @var PurchaseReturn $ret */
            $ret = PurchaseReturn::create([
                'return_number' => $returnNumber,
                'purchase_invoice_id' => $invoice->id,
                'branch_id' => $branchId,
                'user_id' => $userId,
                'total_return_cost' => $totalCost,
                'notes' => $payload['notes'] ?? null,
            ]);

            foreach ($itemsToCreate as $line) {
                $created = $ret->items()->create($line);
                $baseQty = (float) $created->quantity * (float) $created->conversion_factor;
                $this->inventoryService->Decrease($branchId, (int) $created->product_id, $baseQty, [
                    'purchase_return_id' => $ret->id,
                    'purchase_invoice_id' => $invoice->id,
                    'line_id' => $created->id,
                ], MovementType::PurchaseReturn);
            }

            if ($totalCost > 0) {
                $method = ! empty($payload['payment_method'])
                    ? PaymentMethod::normalize((string) $payload['payment_method'])
                    : PaymentMethod::normalize((string) ($invoice->payment_method ?? 'cash'));

                $this->treasuryService->recordIncome(
                    paymentMethod: $method,
                    amount: $totalCost,
                    referenceType: PurchaseReturn::class,
                    referenceId: $ret->id,
                    description: 'Purchase return '.$ret->return_number.' for '.$invoice->invoice_number,
                    createdBy: $userId,
                );
            }

            $ret = $ret->load('items');
            DB::afterCommit(fn () => app(SystemNotifier::class)->purchaseReturnCreated($ret));

            return $ret;
        });
    }
}


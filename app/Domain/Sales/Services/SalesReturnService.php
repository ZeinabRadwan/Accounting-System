<?php

namespace App\Domain\Sales\Services;

use App\Domain\Inventory\Enums\MovementType;
use App\Domain\Inventory\Services\InventoryService;
use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Sales\Models\SalesInvoiceItem;
use App\Domain\Sales\Models\SalesReturn;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Services\TreasuryService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use DomainException;

class SalesReturnService
{
    public function __construct(
        private readonly InventoryService $inventoryService,
        private readonly TreasuryService $treasuryService,
    ) {
    }

    /**
     * Create sales return. Payload:
     * - sales_invoice_id, branch_id, user_id, notes?, payment_method? (defaults to invoice payment method)
     * - items[] (sales_invoice_item_id, quantity, unit_name, conversion_factor, unit_price?)
     */
    public function createReturn(array $payload): SalesReturn
    {
        return DB::transaction(function () use ($payload) {
            /** @var SalesInvoice $invoice */
            $invoice = SalesInvoice::with('items')->findOrFail((int) $payload['sales_invoice_id']);
            $branchId = (int) $payload['branch_id'];
            $userId = (int) $payload['user_id'];
            $returnNumber = 'SRET-'.Str::upper(Str::random(8));

            $totalRefund = 0.0;
            $itemsToCreate = [];

            foreach ($payload['items'] as $line) {
                /** @var SalesInvoiceItem $invItem */
                $invItem = SalesInvoiceItem::findOrFail((int) $line['sales_invoice_item_id']);
                if ($invItem->sales_invoice_id !== $invoice->id) {
                    throw new DomainException('Item does not belong to invoice.');
                }

                $qty = (float) $line['quantity'];
                $factor = (float) $line['conversion_factor'];
                $baseQtyReturn = $qty * $factor;

                // Sum of previous returns for this invoice item
                $returnedBase = (float) DB::table('sales_return_items')
                    ->where('sales_invoice_item_id', $invItem->id)
                    ->join('sales_returns', 'sales_returns.id', '=', 'sales_return_items.sales_return_id')
                    ->sum(DB::raw('sales_return_items.quantity * sales_return_items.conversion_factor'));

                $originalBase = (float) $invItem->quantity * (float) $invItem->conversion_factor;
                if (($returnedBase + $baseQtyReturn) > $originalBase + 1e-6) {
                    throw new DomainException('Return quantity exceeds sold quantity.');
                }

                $unitPrice = isset($line['unit_price']) ? (float) $line['unit_price'] : (float) $invItem->unit_price;
                $lineRefund = $unitPrice * $qty;
                $totalRefund += $lineRefund;

                $itemsToCreate[] = [
                    'sales_invoice_item_id' => $invItem->id,
                    'product_id' => (int) $invItem->product_id,
                    'unit_name' => (string) $line['unit_name'],
                    'conversion_factor' => $factor,
                    'unit_price' => $unitPrice,
                    'quantity' => $qty,
                    'line_refund' => $lineRefund,
                ];
            }

            /** @var SalesReturn $ret */
            $ret = SalesReturn::create([
                'return_number' => $returnNumber,
                'sales_invoice_id' => $invoice->id,
                'branch_id' => $branchId,
                'user_id' => $userId,
                'total_refund' => $totalRefund,
                'notes' => $payload['notes'] ?? null,
            ]);

            foreach ($itemsToCreate as $line) {
                $created = $ret->items()->create($line);
                $baseQty = (float) $created->quantity * (float) $created->conversion_factor;
                $this->inventoryService->Increase($branchId, (int) $created->product_id, $baseQty, [
                    'sales_return_id' => $ret->id,
                    'sales_invoice_id' => $invoice->id,
                    'line_id' => $created->id,
                ], MovementType::SalesReturn);
            }

            if ($totalRefund > 0) {
                $method = ! empty($payload['payment_method'])
                    ? PaymentMethod::normalize((string) $payload['payment_method'])
                    : PaymentMethod::normalize((string) ($invoice->payment_method ?? 'cash'));

                $this->treasuryService->recordExpense(
                    paymentMethod: $method,
                    amount: $totalRefund,
                    referenceType: SalesReturn::class,
                    referenceId: $ret->id,
                    description: 'Sales return '.$ret->return_number.' for '.$invoice->invoice_number,
                    createdBy: $userId,
                );
            }

            return $ret->load('items');
        });
    }
}


<?php

namespace App\Domain\Purchase\Services;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Domain\Purchase\Models\PurchaseInvoice;
use App\Domain\Inventory\Services\InventoryService;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Services\TreasuryService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use DomainException;

class PurchaseService
{
    public function __construct(
        private readonly InventoryService $inventoryService,
        private readonly ProductService $productService,
        private readonly TreasuryService $treasuryService,
    ) {
    }

    /**
     * Create a purchase invoice with items.
     *
     * Payload:
     * - branch_id, user_id, supplier_id, notes?, discount_amount?
     * - payment_method (required when paid), paid_amount? (defaults to total)
     * - items[]:
     *   - Either product_id OR new_product{...}
     *   - unit_name, conversion_factor, unit_cost, quantity, expiry_date?
     */
    public function createInvoice(array $payload): PurchaseInvoice
    {
        return DB::transaction(function () use ($payload) {
            $branchId = (int) $payload['branch_id'];
            $userId = (int) $payload['user_id'];
            $supplierId = (int) $payload['supplier_id'];
            $invoiceNumber = $this->generateInvoiceNumber();

            $subtotal = 0.0;
            $items = [];
            foreach ($payload['items'] as $line) {
                $productId = $line['product_id'] ?? null;
                if (! $productId && ! empty($line['new_product'])) {
                    // Create product via ProductService
                    $created = $this->productService->create([
                        'category_id' => (int) $line['new_product']['category_id'],
                        'display_name' => (string) $line['new_product']['display_name'],
                        'sku' => $line['new_product']['sku'] ?? null,
                        'units' => $line['new_product']['units'] ?? [[
                            'unit_name' => (string) ($line['new_product']['base_unit'] ?? $line['unit_name'] ?? 'pcs'),
                            'conversion_factor' => 1,
                            'price1' => (float) ($line['new_product']['price1'] ?? 0),
                            'price2' => $line['new_product']['price2'] ?? null,
                            'price3' => $line['new_product']['price3'] ?? null,
                            'is_base' => true,
                        ]],
                    ]);
                    $productId = $created->id;
                }

                /** @var Product $product */
                $product = Product::with('category')->findOrFail((int) $productId);
                $unitName = (string) $line['unit_name'];
                $factor = (float) $line['conversion_factor'];
                $unitCost = (float) $line['unit_cost'];
                $qty = (float) $line['quantity'];

                $lineTotalCost = $unitCost * $qty;
                $subtotal += $lineTotalCost;

                $items[] = [
                    'product_id' => $product->id,
                    'product_name' => $product->full_display_name,
                    'sku' => $product->sku,
                    'unit_name' => $unitName,
                    'conversion_factor' => $factor,
                    'unit_cost' => $unitCost,
                    'quantity' => $qty,
                    'line_total_cost' => $lineTotalCost,
                    'expiry_date' => ! empty($line['expiry_date']) ? (string) $line['expiry_date'] : null,
                    'update_price1' => (bool) ($line['update_prices'] ?? false),
                    'new_price1' => isset($line['new_price1']) ? (float) $line['new_price1'] : null,
                    'new_price2' => isset($line['new_price2']) ? (float) $line['new_price2'] : null,
                    'new_price3' => isset($line['new_price3']) ? (float) $line['new_price3'] : null,
                ];
            }

            $discount = (float) ($payload['discount_amount'] ?? 0);
            $total = max(0.0, $subtotal - $discount);
            $paid = array_key_exists('paid_amount', $payload)
                ? (float) $payload['paid_amount']
                : $total;
            $paid = max(0.0, min($paid, $total));
            $remaining = max(0.0, round($total - $paid, 2));
            $paymentMethod = ! empty($payload['payment_method'])
                ? PaymentMethod::normalize((string) $payload['payment_method'])
                : null;

            if ($paid > 0 && ! $paymentMethod) {
                throw new DomainException('Payment method is required when the purchase is paid.');
            }

            $status = app(\App\Domain\Sales\Services\PaymentService::class)
                ->determineStatus($total, $paid);

            /** @var PurchaseInvoice $invoice */
            $invoice = PurchaseInvoice::create([
                'invoice_number' => $invoiceNumber,
                'branch_id' => $branchId,
                'user_id' => $userId,
                'supplier_id' => $supplierId,
                'subtotal' => $subtotal,
                'discount_amount' => $discount,
                'total' => $total,
                'notes' => $payload['notes'] ?? null,
                'payment_method' => $paymentMethod,
                'paid_amount' => $paid,
                'remaining_amount' => $remaining,
                'status' => $status,
            ]);

            foreach ($items as $line) {
                $created = $invoice->items()->create($line);

                // Increase inventory using base units
                $baseQty = (float) $created->quantity * (float) $created->conversion_factor;
                $this->inventoryService->Increase($branchId, (int) $created->product_id, $baseQty, [
                    'purchase_invoice_id' => $invoice->id,
                    'invoice_number' => $invoice->invoice_number,
                    'line_id' => $created->id,
                    'purchase_invoice_item_id' => $created->id,
                    'expiry_date' => $created->expiry_date?->format('Y-m-d'),
                ]);

                // Optional price updates
                if ($line['update_price1']) {
                    $product = Product::findOrFail((int) $created->product_id);
                    $updates = [];
                    if ($line['new_price1'] !== null) {
                        $updates['price1'] = (float) $line['new_price1'];
                    }
                    if ($line['new_price2'] !== null) {
                        $updates['price2'] = (float) $line['new_price2'];
                    }
                    if ($line['new_price3'] !== null) {
                        $updates['price3'] = (float) $line['new_price3'];
                    }
                    if (! empty($updates)) {
                        $product->fill($updates)->save();
                    }
                }
            }

            if ($paid > 0 && $paymentMethod) {
                $this->treasuryService->recordExpense(
                    paymentMethod: $paymentMethod,
                    amount: $paid,
                    referenceType: PurchaseInvoice::class,
                    referenceId: $invoice->id,
                    description: 'Purchase invoice '.$invoice->invoice_number,
                    createdBy: $userId,
                );
            }

            return $invoice->load('items');
        });
    }

    protected function generateInvoiceNumber(): string
    {
        return 'PINV-'.Str::upper(Str::random(8));
    }
}


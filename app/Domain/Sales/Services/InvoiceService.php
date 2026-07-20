<?php

namespace App\Domain\Sales\Services;

use App\Domain\Accounting\Services\ActivityLogService;
use App\Domain\Accounting\Services\JournalService;
use App\Domain\Customer\Models\CustomerPaymentApplication;
use App\Domain\Customer\Services\CustomerService;
use App\Domain\Inventory\Enums\MovementType;
use App\Domain\Inventory\Services\InventoryService;
use App\Domain\Product\Models\Product;
use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Enums\TreasuryTransactionType;
use App\Domain\Treasury\Services\TreasuryService;
use DomainException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class InvoiceService
{
    public function __construct(
        private readonly InventoryService $inventoryService,
        private readonly PaymentService $paymentService,
        private readonly CustomerService $customerService,
        private readonly TreasuryService $treasuryService,
        private readonly JournalService $journalService,
        private readonly ActivityLogService $activityLogService,
    ) {
    }

    public function createInvoice(array $payload): SalesInvoice
    {
        // payload keys: branch_id, user_id, customer (optional ['name','phone']), items[], invoice_discount, payment_method, paid_amount
        return DB::transaction(function () use ($payload) {
            $branchId = (int) $payload['branch_id'];
            $userId = (int) $payload['user_id'];

            $customerId = null;
            if (! empty($payload['customer_id'])) {
                $customerId = (int) $payload['customer_id'];
            } elseif (! empty($payload['customer'])) {
                $customer = $this->customerService->quickCreateIfNotExists(
                    (string) $payload['customer']['name'],
                    (string) $payload['customer']['phone']
                );
                $customerId = $customer->id;
            }

            $invoiceNumber = $this->generateInvoiceNumber();

            $subtotal = 0.0;
            $itemsInput = $payload['items'] ?? [];
            $items = [];

            foreach ($itemsInput as $item) {
                /** @var Product $product */
                $product = Product::with('category')->findOrFail((int) $item['product_id']);
                $qty = (float) $item['quantity'];
                $unitName = (string) $item['unit_name'];
                $factor = (float) $item['conversion_factor'];
                $priceLevel = (string) $item['price_level']; // price1/price2/price3
                $unitPrice = (float) $item['unit_price'];
                $itemDiscount = (float) ($item['item_discount'] ?? 0);

                $lineSubtotal = $qty * $unitPrice;
                $lineTotal = max(0.0, $lineSubtotal - $itemDiscount);
                $subtotal += $lineTotal;

                $items[] = [
                    'product_id' => $product->id,
                    'product_name' => $product->full_display_name,
                    'sku' => $product->sku,
                    'unit_name' => $unitName,
                    'conversion_factor' => $factor,
                    'price_level' => $priceLevel,
                    'unit_price' => $unitPrice,
                    'quantity' => $qty,
                    'item_discount' => $itemDiscount,
                    'line_subtotal' => $lineSubtotal,
                    'line_total' => $lineTotal,
                ];
            }

            $invoiceDiscount = (float) ($payload['invoice_discount'] ?? 0);
            $total = max(0.0, $subtotal - $invoiceDiscount);
            $paid = (float) ($payload['paid_amount'] ?? 0);
            $remaining = max(0.0, $total - $paid);
            $paymentMethod = PaymentMethod::normalize((string) $payload['payment_method']);
            $status = $this->paymentService->determineStatus($total, $paid);

            /** @var SalesInvoice $invoice */
            $invoice = SalesInvoice::create([
                'invoice_number' => $invoiceNumber,
                'branch_id' => $branchId,
                'user_id' => $userId,
                'customer_id' => $customerId,
                'subtotal' => $subtotal,
                'discount_amount' => $invoiceDiscount,
                'total' => $total,
                'payment_method' => $paymentMethod,
                'paid_amount' => $paid,
                'remaining_amount' => $remaining,
                'status' => $status,
            ]);

            foreach ($items as $line) {
                $created = $invoice->items()->create($line);

                // Deduct inventory using base units
                $baseQty = (float) $created->quantity * (float) $created->conversion_factor;
                $this->inventoryService->Decrease($branchId, (int) $created->product_id, $baseQty, [
                    'invoice_id' => $invoice->id,
                    'invoice_number' => $invoice->invoice_number,
                    'line_id' => $created->id,
                ]);
            }

            if ($paid > 0) {
                $this->treasuryService->recordIncome(
                    paymentMethod: $paymentMethod,
                    amount: $paid,
                    referenceType: SalesInvoice::class,
                    referenceId: $invoice->id,
                    description: 'Sales invoice '.$invoice->invoice_number,
                    createdBy: $userId,
                );
            }

            return $invoice->load('items');
        });
    }

    /**
     * Cancel an invoice: restore stock, reverse applied payments (refund treasury + reversing JE).
     */
    public function cancel(SalesInvoice $invoice, ?int $userId = null): SalesInvoice
    {
        return DB::transaction(function () use ($invoice, $userId) {
            /** @var SalesInvoice $invoice */
            $invoice = SalesInvoice::query()
                ->with('items')
                ->whereKey($invoice->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($invoice->is_cancelled) {
                throw new DomainException('Invoice is already cancelled.');
            }

            $userId = $userId ?? auth()->id();

            $applications = CustomerPaymentApplication::query()
                ->with('payment')
                ->where('sales_invoice_id', $invoice->id)
                ->lockForUpdate()
                ->get();

            $appliedTotal = round((float) $applications->sum('applied_amount'), 2);
            $posPaid = max(0, round((float) $invoice->paid_amount - $appliedTotal, 2));

            foreach ($applications as $application) {
                $amount = round((float) $application->applied_amount, 2);
                $payment = $application->payment;
                if (! $payment || $amount <= 0) {
                    $application->delete();
                    continue;
                }

                $this->treasuryService->recordForTreasury(
                    treasuryId: (int) $payment->treasury_id,
                    type: TreasuryTransactionType::Expense,
                    amount: $amount,
                    referenceType: SalesInvoice::class,
                    referenceId: $invoice->id,
                    description: 'Refund on cancel · '.$invoice->invoice_number.' · PAY-'.$payment->id,
                    createdBy: $userId,
                    allowNegativeBalance: true,
                );

                $this->journalService->create(
                    description: 'Reverse collection on cancel · '.$invoice->invoice_number,
                    lines: [
                        [
                            'account_type' => 'accounts_receivable',
                            'account_reference_id' => $invoice->customer_id,
                            'debit' => $amount,
                            'credit' => 0,
                        ],
                        [
                            'account_type' => 'cash',
                            'account_reference_id' => $payment->treasury_id,
                            'debit' => 0,
                            'credit' => $amount,
                        ],
                    ],
                    referenceType: SalesInvoice::class,
                    referenceId: $invoice->id,
                    createdBy: $userId,
                );

                $application->delete();
            }

            if ($posPaid > 0 && $invoice->payment_method) {
                $treasury = $this->treasuryService->findActiveByPaymentMethod((string) $invoice->payment_method);

                $this->treasuryService->recordForTreasury(
                    treasuryId: (int) $treasury->id,
                    type: TreasuryTransactionType::Expense,
                    amount: $posPaid,
                    referenceType: SalesInvoice::class,
                    referenceId: $invoice->id,
                    description: 'Refund on cancel · '.$invoice->invoice_number.' (sale payment)',
                    createdBy: $userId,
                    allowNegativeBalance: true,
                );

                if ($invoice->customer_id) {
                    $this->journalService->create(
                        description: 'Reverse POS payment on cancel · '.$invoice->invoice_number,
                        lines: [
                            [
                                'account_type' => 'accounts_receivable',
                                'account_reference_id' => $invoice->customer_id,
                                'debit' => $posPaid,
                                'credit' => 0,
                            ],
                            [
                                'account_type' => 'cash',
                                'account_reference_id' => $treasury->id,
                                'debit' => 0,
                                'credit' => $posPaid,
                            ],
                        ],
                        referenceType: SalesInvoice::class,
                        referenceId: $invoice->id,
                        createdBy: $userId,
                    );
                }
            }

            foreach ($invoice->items as $item) {
                $baseQty = (float) $item->quantity * (float) $item->conversion_factor;
                $this->inventoryService->Increase(
                    (int) $invoice->branch_id,
                    (int) $item->product_id,
                    $baseQty,
                    [
                        'invoice_id' => $invoice->id,
                        'invoice_number' => $invoice->invoice_number,
                        'line_id' => $item->id,
                        'reason' => 'invoice_cancel',
                    ],
                    MovementType::SalesReturn,
                );
            }

            $invoice->fill([
                'is_cancelled' => true,
                'paid_amount' => 0,
                'remaining_amount' => 0,
                'status' => 'cancelled',
            ])->save();

            $this->activityLogService->log(
                action: 'sales_invoice.cancelled',
                subject: $invoice,
                description: 'Cancelled sales invoice '.$invoice->invoice_number,
                properties: [
                    'applied_refunded' => $appliedTotal,
                    'pos_refunded' => $posPaid,
                ],
                userId: $userId,
            );

            return $invoice->refresh();
        });
    }

    protected function generateInvoiceNumber(): string
    {
        // Simple sequential-ish generator; replace with robust sequence later
        return 'INV-'.Str::upper(Str::random(8));
    }
}


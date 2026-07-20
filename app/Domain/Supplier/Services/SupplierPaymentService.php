<?php

namespace App\Domain\Supplier\Services;

use App\Domain\Accounting\Services\ActivityLogService;
use App\Domain\Accounting\Services\JournalService;
use App\Domain\Purchase\Models\PurchaseInvoice;
use App\Domain\Sales\Services\PaymentService;
use App\Domain\Supplier\Models\Supplier;
use App\Domain\Supplier\Models\SupplierPayment;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Enums\TreasuryTransactionType;
use App\Domain\Treasury\Models\Treasury;
use App\Domain\Treasury\Services\TreasuryService;
use DomainException;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class SupplierPaymentService
{
    public function __construct(
        private readonly PaymentService $paymentService,
        private readonly TreasuryService $treasuryService,
        private readonly JournalService $journalService,
        private readonly ActivityLogService $activityLogService,
    ) {
    }

    /**
     * @param  array{
     *   amount:float|int|string,
     *   treasury_id:int,
     *   payment_method:?string,
     *   paid_at:?string,
     *   notes?:?string,
     *   created_by:?int,
     *   purchase_invoice_id?:?int,
     *   allow_negative_treasury?:bool
     * }  $payload
     */
    public function record(Supplier $supplier, array $payload): SupplierPayment
    {
        $amount = round((float) $payload['amount'], 2);
        if ($amount <= 0) {
            throw new DomainException('Payment amount must be greater than zero.');
        }

        return DB::transaction(function () use ($supplier, $payload, $amount) {
            /** @var Supplier $supplier */
            $supplier = Supplier::query()->whereKey($supplier->id)->lockForUpdate()->firstOrFail();

            /** @var Treasury $treasury */
            $treasury = Treasury::query()->whereKey((int) $payload['treasury_id'])->lockForUpdate()->firstOrFail();
            if (! $treasury->is_active) {
                throw new DomainException('Selected treasury is inactive.');
            }

            $allowNegative = (bool) ($payload['allow_negative_treasury'] ?? false);
            if (! $allowNegative && (float) $treasury->current_balance + 1e-6 < $amount) {
                throw new DomainException(
                    "Insufficient balance in {$treasury->name}. Available: {$treasury->current_balance}, needed: {$amount}."
                );
            }

            $method = PaymentMethod::normalize(
                (string) ($payload['payment_method'] ?? $treasury->payment_method)
            );
            $paidAt = ! empty($payload['paid_at'])
                ? Carbon::parse((string) $payload['paid_at'])
                : now();
            $createdBy = isset($payload['created_by']) ? (int) $payload['created_by'] : auth()->id();

            $applications = [];
            $remainingToApply = $amount;

            if (! empty($payload['purchase_invoice_id'])) {
                /** @var PurchaseInvoice $invoice */
                $invoice = PurchaseInvoice::query()
                    ->whereKey((int) $payload['purchase_invoice_id'])
                    ->where('supplier_id', $supplier->id)
                    ->lockForUpdate()
                    ->firstOrFail();

                $this->assertInvoicePayable($invoice);
                $apply = min($remainingToApply, (float) $invoice->remaining_amount);
                if ($apply > 0) {
                    $applications[] = ['invoice' => $invoice, 'amount' => $apply];
                    $remainingToApply = round($remainingToApply - $apply, 2);
                }
            } else {
                $invoices = PurchaseInvoice::query()
                    ->where('supplier_id', $supplier->id)
                    ->where('remaining_amount', '>', 0)
                    ->orderBy('created_at')
                    ->orderBy('id')
                    ->lockForUpdate()
                    ->get();

                foreach ($invoices as $invoice) {
                    if ($remainingToApply <= 0) {
                        break;
                    }
                    $apply = min($remainingToApply, (float) $invoice->remaining_amount);
                    if ($apply <= 0) {
                        continue;
                    }
                    $applications[] = ['invoice' => $invoice, 'amount' => $apply];
                    $remainingToApply = round($remainingToApply - $apply, 2);
                }
            }

            $creditPortion = max(0, $remainingToApply);

            /** @var SupplierPayment $payment */
            $payment = SupplierPayment::query()->create([
                'supplier_id' => $supplier->id,
                'amount' => $amount,
                'payment_method' => $method,
                'treasury_id' => $treasury->id,
                'paid_at' => $paidAt,
                'notes' => $payload['notes'] ?? null,
                'created_by' => $createdBy,
                'credit_portion' => $creditPortion,
            ]);

            foreach ($applications as $row) {
                /** @var PurchaseInvoice $invoice */
                $invoice = $row['invoice'];
                $apply = (float) $row['amount'];

                $paid = round((float) $invoice->paid_amount + $apply, 2);
                $remaining = max(0, round((float) $invoice->total - $paid, 2));
                $invoice->fill([
                    'paid_amount' => $paid,
                    'remaining_amount' => $remaining,
                    'status' => $this->paymentService->determineStatus((float) $invoice->total, $paid),
                ])->save();

                $payment->applications()->create([
                    'purchase_invoice_id' => $invoice->id,
                    'applied_amount' => $apply,
                ]);
            }

            if ($creditPortion > 0) {
                $supplier->credit_balance = round((float) $supplier->credit_balance + $creditPortion, 2);
                $supplier->save();
            }

            $this->treasuryService->recordForTreasury(
                treasuryId: $treasury->id,
                type: TreasuryTransactionType::Expense,
                amount: $amount,
                referenceType: SupplierPayment::class,
                referenceId: $payment->id,
                description: 'Supplier payment #'.$payment->id.' · '.$supplier->name,
                createdBy: $createdBy,
                allowNegativeBalance: $allowNegative,
            );

            $journal = $this->journalService->create(
                description: 'Supplier payment · '.$supplier->name,
                lines: [
                    [
                        'account_type' => 'accounts_payable',
                        'account_reference_id' => $supplier->id,
                        'debit' => $amount,
                        'credit' => 0,
                    ],
                    [
                        'account_type' => 'cash',
                        'account_reference_id' => $treasury->id,
                        'debit' => 0,
                        'credit' => $amount,
                    ],
                ],
                referenceType: SupplierPayment::class,
                referenceId: $payment->id,
                createdBy: $createdBy,
                entryDate: $paidAt,
            );

            $payment->journal_entry_id = $journal->id;
            $payment->save();

            $this->activityLogService->log(
                action: 'supplier_payment.recorded',
                subject: $payment,
                description: 'Recorded supplier payment of '.$amount.' for '.$supplier->name,
                properties: [
                    'supplier_id' => $supplier->id,
                    'amount' => $amount,
                    'credit_portion' => $creditPortion,
                    'allow_negative_treasury' => $allowNegative,
                    'applications' => collect($applications)->map(fn ($a) => [
                        'invoice_id' => $a['invoice']->id,
                        'amount' => $a['amount'],
                    ])->all(),
                ],
                userId: $createdBy,
            );

            return $payment->load(['applications.invoice', 'treasury', 'journalEntry']);
        });
    }

    protected function assertInvoicePayable(PurchaseInvoice $invoice): void
    {
        if ((float) $invoice->remaining_amount <= 0) {
            throw new DomainException('Selected purchase invoice has no outstanding balance.');
        }
    }

    public function hasApplicationsForInvoice(int $purchaseInvoiceId): bool
    {
        return \App\Domain\Supplier\Models\SupplierPaymentApplication::query()
            ->where('purchase_invoice_id', $purchaseInvoiceId)
            ->exists();
    }
}

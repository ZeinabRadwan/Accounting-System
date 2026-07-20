<?php

namespace App\Domain\Customer\Services;

use App\Domain\Accounting\Services\ActivityLogService;
use App\Domain\Accounting\Services\JournalService;
use App\Domain\Customer\Models\Customer;
use App\Domain\Customer\Models\CustomerPayment;
use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Sales\Services\PaymentService;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Enums\TreasuryTransactionType;
use App\Domain\Treasury\Models\Treasury;
use App\Domain\Treasury\Services\TreasuryService;
use DomainException;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class CustomerPaymentService
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
     *   sales_invoice_id?:?int,
     *   apply_fifo?:bool
     * }  $payload
     */
    public function record(Customer $customer, array $payload): CustomerPayment
    {
        $amount = round((float) $payload['amount'], 2);
        if ($amount <= 0) {
            throw new DomainException('Payment amount must be greater than zero.');
        }

        return DB::transaction(function () use ($customer, $payload, $amount) {
            /** @var Customer $customer */
            $customer = Customer::query()->whereKey($customer->id)->lockForUpdate()->firstOrFail();

            /** @var Treasury $treasury */
            $treasury = Treasury::query()->whereKey((int) $payload['treasury_id'])->lockForUpdate()->firstOrFail();
            if (! $treasury->is_active) {
                throw new DomainException('Selected treasury is inactive.');
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

            if (! empty($payload['sales_invoice_id'])) {
                /** @var SalesInvoice $invoice */
                $invoice = SalesInvoice::query()
                    ->whereKey((int) $payload['sales_invoice_id'])
                    ->where('customer_id', $customer->id)
                    ->lockForUpdate()
                    ->firstOrFail();

                $this->assertInvoicePayable($invoice);
                $apply = min($remainingToApply, (float) $invoice->remaining_amount);
                if ($apply > 0) {
                    $applications[] = ['invoice' => $invoice, 'amount' => $apply];
                    $remainingToApply = round($remainingToApply - $apply, 2);
                }
            } else {
                $invoices = SalesInvoice::query()
                    ->where('customer_id', $customer->id)
                    ->where(function ($q) {
                        $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
                    })
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

            /** @var CustomerPayment $payment */
            $payment = CustomerPayment::query()->create([
                'customer_id' => $customer->id,
                'amount' => $amount,
                'payment_method' => $method,
                'treasury_id' => $treasury->id,
                'paid_at' => $paidAt,
                'notes' => $payload['notes'] ?? null,
                'created_by' => $createdBy,
                'credit_portion' => $creditPortion,
            ]);

            foreach ($applications as $row) {
                /** @var SalesInvoice $invoice */
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
                    'sales_invoice_id' => $invoice->id,
                    'applied_amount' => $apply,
                ]);
            }

            if ($creditPortion > 0) {
                $customer->credit_balance = round((float) $customer->credit_balance + $creditPortion, 2);
                $customer->save();
            }

            $this->treasuryService->recordForTreasury(
                treasuryId: $treasury->id,
                type: TreasuryTransactionType::Income,
                amount: $amount,
                referenceType: CustomerPayment::class,
                referenceId: $payment->id,
                description: 'Customer payment #'.$payment->id.' · '.$customer->name,
                createdBy: $createdBy,
            );

            $journal = $this->journalService->create(
                description: 'Customer collection · '.$customer->name,
                lines: [
                    [
                        'account_type' => 'cash',
                        'account_reference_id' => $treasury->id,
                        'debit' => $amount,
                        'credit' => 0,
                    ],
                    [
                        'account_type' => 'accounts_receivable',
                        'account_reference_id' => $customer->id,
                        'debit' => 0,
                        'credit' => $amount,
                    ],
                ],
                referenceType: CustomerPayment::class,
                referenceId: $payment->id,
                createdBy: $createdBy,
                entryDate: $paidAt,
            );

            $payment->journal_entry_id = $journal->id;
            $payment->save();

            $this->activityLogService->log(
                action: 'customer_payment.recorded',
                subject: $payment,
                description: 'Recorded customer payment of '.$amount.' for '.$customer->name,
                properties: [
                    'customer_id' => $customer->id,
                    'amount' => $amount,
                    'credit_portion' => $creditPortion,
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

    protected function assertInvoicePayable(SalesInvoice $invoice): void
    {
        if ($invoice->is_cancelled) {
            throw new DomainException('Cannot apply payment to a cancelled invoice.');
        }
        if ((float) $invoice->remaining_amount <= 0) {
            throw new DomainException('Selected invoice has no outstanding balance.');
        }
    }

    public function hasApplicationsForInvoice(int $salesInvoiceId): bool
    {
        return \App\Domain\Customer\Models\CustomerPaymentApplication::query()
            ->where('sales_invoice_id', $salesInvoiceId)
            ->exists();
    }

    /**
     * Move an application from one invoice to another (or FIFO), recalculating both invoices.
     * Journal/treasury amounts stay unchanged (same cash movement).
     */
    public function reallocateApplication(
        int $applicationId,
        ?int $newSalesInvoiceId,
        ?int $userId = null,
    ): CustomerPayment {
        return DB::transaction(function () use ($applicationId, $newSalesInvoiceId, $userId) {
            /** @var \App\Domain\Customer\Models\CustomerPaymentApplication $application */
            $application = \App\Domain\Customer\Models\CustomerPaymentApplication::query()
                ->whereKey($applicationId)
                ->lockForUpdate()
                ->firstOrFail();

            /** @var CustomerPayment $payment */
            $payment = CustomerPayment::query()
                ->whereKey($application->customer_payment_id)
                ->lockForUpdate()
                ->firstOrFail();

            $amount = round((float) $application->applied_amount, 2);

            /** @var SalesInvoice $oldInvoice */
            $oldInvoice = SalesInvoice::query()
                ->whereKey($application->sales_invoice_id)
                ->lockForUpdate()
                ->firstOrFail();

            $oldPaid = max(0, round((float) $oldInvoice->paid_amount - $amount, 2));
            $oldInvoice->fill([
                'paid_amount' => $oldPaid,
                'remaining_amount' => max(0, round((float) $oldInvoice->total - $oldPaid, 2)),
                'status' => $this->paymentService->determineStatus((float) $oldInvoice->total, $oldPaid),
            ])->save();

            $application->delete();

            $customer = Customer::query()->whereKey($payment->customer_id)->lockForUpdate()->firstOrFail();
            $remainingToApply = $amount;
            $applications = [];

            if ($newSalesInvoiceId) {
                /** @var SalesInvoice $invoice */
                $invoice = SalesInvoice::query()
                    ->whereKey($newSalesInvoiceId)
                    ->where('customer_id', $customer->id)
                    ->lockForUpdate()
                    ->firstOrFail();
                $this->assertInvoicePayable($invoice);
                $apply = min($remainingToApply, (float) $invoice->remaining_amount);
                if ($apply > 0) {
                    $applications[] = ['invoice' => $invoice, 'amount' => $apply];
                    $remainingToApply = round($remainingToApply - $apply, 2);
                }
            } else {
                $invoices = SalesInvoice::query()
                    ->where('customer_id', $customer->id)
                    ->where(function ($q) {
                        $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
                    })
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

            foreach ($applications as $row) {
                /** @var SalesInvoice $invoice */
                $invoice = $row['invoice'];
                $apply = (float) $row['amount'];
                $paid = round((float) $invoice->paid_amount + $apply, 2);
                $invoice->fill([
                    'paid_amount' => $paid,
                    'remaining_amount' => max(0, round((float) $invoice->total - $paid, 2)),
                    'status' => $this->paymentService->determineStatus((float) $invoice->total, $paid),
                ])->save();

                $payment->applications()->create([
                    'sales_invoice_id' => $invoice->id,
                    'applied_amount' => $apply,
                ]);
            }

            if ($remainingToApply > 0) {
                $payment->credit_portion = round((float) $payment->credit_portion + $remainingToApply, 2);
                $payment->save();
                $customer->credit_balance = round((float) $customer->credit_balance + $remainingToApply, 2);
                $customer->save();
            }

            $this->activityLogService->log(
                action: 'customer_payment.reallocated',
                subject: $payment,
                description: 'Reallocated customer payment application #'.$applicationId,
                properties: [
                    'old_invoice_id' => $oldInvoice->id,
                    'new_invoice_id' => $newSalesInvoiceId,
                    'amount' => $amount,
                    'credit_added' => $remainingToApply,
                ],
                userId: $userId ?? auth()->id(),
            );

            return $payment->load(['applications.invoice', 'treasury']);
        });
    }
}

<?php

namespace App\Domain\Reports\Services;

use App\Domain\Customer\Models\Customer;
use App\Domain\Customer\Models\CustomerPayment;
use App\Domain\Customer\Models\CustomerPaymentApplication;
use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Sales\Models\SalesReturn;
use Illuminate\Support\Collection;

class CustomerStatementService
{
    /**
     * Full statement of account for one customer.
     *
     * @return array{
     *     customer: Customer|null,
     *     opening_balance: float,
     *     closing_balance: float,
     *     period_sales: float,
     *     period_payments: float,
     *     period_returns: float,
     *     current_due: float,
     *     credit_balance: float,
     *     net_balance: float,
     *     invoices: Collection,
     *     payments: Collection,
     *     lines: Collection<int, object>
     * }
     */
    public function statement(
        ?int $customerId,
        ?string $dateFrom = null,
        ?string $dateTo = null,
        ?int $branchId = null,
    ): array {
        $empty = [
            'customer' => null,
            'opening_balance' => 0.0,
            'closing_balance' => 0.0,
            'period_sales' => 0.0,
            'period_payments' => 0.0,
            'period_returns' => 0.0,
            'current_due' => 0.0,
            'credit_balance' => 0.0,
            'net_balance' => 0.0,
            'invoices' => collect(),
            'payments' => collect(),
            'lines' => collect(),
        ];

        if (! $customerId) {
            return $empty;
        }

        $customer = Customer::query()->find($customerId);
        if (! $customer) {
            return $empty;
        }

        $invoices = SalesInvoice::query()
            ->with('branch:id,name')
            ->where('customer_id', $customerId)
            ->when($branchId, fn ($q) => $q->where('branch_id', $branchId))
            ->where(function ($q) {
                $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
            })
            ->when($dateFrom, fn ($q) => $q->whereDate('created_at', '>=', $dateFrom))
            ->when($dateTo, fn ($q) => $q->whereDate('created_at', '<=', $dateTo))
            ->orderByDesc('created_at')
            ->orderByDesc('id')
            ->get();

        $payments = CustomerPayment::query()
            ->with([
                'treasury:id,name,payment_method',
                'applications.invoice:id,invoice_number',
                'creator:id,name',
            ])
            ->where('customer_id', $customerId)
            ->when($dateFrom, fn ($q) => $q->whereDate('paid_at', '>=', $dateFrom))
            ->when($dateTo, fn ($q) => $q->whereDate('paid_at', '<=', $dateTo))
            ->orderByDesc('paid_at')
            ->orderByDesc('id')
            ->get();

        $openingBalance = $this->balanceBefore($customerId, $dateFrom, $branchId);
        $lines = $this->periodLines($customerId, $dateFrom, $dateTo, $branchId);

        $running = $openingBalance;
        $periodSales = 0.0;
        $periodPayments = 0.0;
        $periodReturns = 0.0;

        $enriched = $lines->map(function (object $line) use (&$running, &$periodSales, &$periodPayments, &$periodReturns) {
            $debit = (float) $line->debit;
            $credit = (float) $line->credit;
            $running += $debit - $credit;

            if ($line->entry_type === 'sale') {
                $periodSales += $debit;
            } elseif (in_array($line->entry_type, ['payment', 'pos_payment'], true)) {
                $periodPayments += $credit;
            } elseif ($line->entry_type === 'return') {
                $periodReturns += $credit;
            }

            $line->balance = round($running, 2);

            return $line;
        });

        $currentDue = (float) SalesInvoice::query()
            ->where('customer_id', $customerId)
            ->when($branchId, fn ($q) => $q->where('branch_id', $branchId))
            ->where(function ($q) {
                $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
            })
            ->sum('remaining_amount');

        $creditBalance = (float) $customer->credit_balance;

        return [
            'customer' => $customer,
            'opening_balance' => round($openingBalance, 2),
            'closing_balance' => round($running, 2),
            'period_sales' => round($periodSales, 2),
            'period_payments' => round($periodPayments, 2),
            'period_returns' => round($periodReturns, 2),
            'current_due' => round($currentDue, 2),
            'credit_balance' => round($creditBalance, 2),
            'net_balance' => round($currentDue - $creditBalance, 2),
            'invoices' => $invoices,
            'payments' => $payments,
            'lines' => $enriched,
        ];
    }

    protected function balanceBefore(int $customerId, ?string $dateFrom, ?int $branchId): float
    {
        if (! $dateFrom) {
            return 0.0;
        }

        $lines = $this->periodLines($customerId, null, $this->dayBefore($dateFrom), $branchId);
        $running = 0.0;
        foreach ($lines as $line) {
            $running += (float) $line->debit - (float) $line->credit;
        }

        return round($running, 2);
    }

    protected function dayBefore(string $dateFrom): string
    {
        return \Illuminate\Support\Carbon::parse($dateFrom)->subDay()->toDateString();
    }

    /**
     * @return Collection<int, object>
     */
    protected function periodLines(int $customerId, ?string $dateFrom, ?string $dateTo, ?int $branchId): Collection
    {
        $invoices = SalesInvoice::query()
            ->with('branch:id,name')
            ->where('customer_id', $customerId)
            ->when($branchId, fn ($q) => $q->where('branch_id', $branchId))
            ->where(function ($q) {
                $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
            })
            ->when($dateFrom, fn ($q) => $q->whereDate('created_at', '>=', $dateFrom))
            ->when($dateTo, fn ($q) => $q->whereDate('created_at', '<=', $dateTo))
            ->orderBy('created_at')
            ->orderBy('id')
            ->get();

        $invoiceIds = $invoices->pluck('id');

        $appliedByInvoice = CustomerPaymentApplication::query()
            ->whereIn('sales_invoice_id', $invoiceIds)
            ->selectRaw('sales_invoice_id, SUM(applied_amount) as applied_total')
            ->groupBy('sales_invoice_id')
            ->pluck('applied_total', 'sales_invoice_id');

        $lines = collect();

        foreach ($invoices as $invoice) {
            $lines->push((object) [
                'date' => $invoice->created_at,
                'entry_type' => 'sale',
                'reference' => $invoice->invoice_number,
                'invoice_id' => $invoice->id,
                'description' => __('Sales invoice').($invoice->branch?->name ? ' · '.$invoice->branch->name : ''),
                'payment_method' => null,
                'treasury_name' => null,
                'debit' => (float) $invoice->total,
                'credit' => 0.0,
                'sort' => $invoice->created_at?->format('Y-m-d H:i:s').'-'.$invoice->id.'-1',
            ]);

            $applied = (float) ($appliedByInvoice[$invoice->id] ?? 0);
            $posPaid = max(0, round((float) $invoice->paid_amount - $applied, 2));
            if ($posPaid > 0) {
                $method = $invoice->payment_method
                    ? str_replace('_', ' ', (string) $invoice->payment_method)
                    : 'payment';

                $lines->push((object) [
                    'date' => $invoice->created_at,
                    'entry_type' => 'pos_payment',
                    'reference' => $invoice->invoice_number,
                    'invoice_id' => $invoice->id,
                    'description' => __('Payment at sale').' ('.$method.')',
                    'payment_method' => $invoice->payment_method,
                    'treasury_name' => null,
                    'debit' => 0.0,
                    'credit' => $posPaid,
                    'sort' => $invoice->created_at?->format('Y-m-d H:i:s').'-'.$invoice->id.'-2',
                ]);
            }
        }

        $paymentsQuery = CustomerPayment::query()
            ->with(['treasury:id,name', 'applications.invoice:id,invoice_number'])
            ->where('customer_id', $customerId)
            ->when($dateFrom, fn ($q) => $q->whereDate('paid_at', '>=', $dateFrom))
            ->when($dateTo, fn ($q) => $q->whereDate('paid_at', '<=', $dateTo))
            ->orderBy('paid_at')
            ->orderBy('id');

        // Branch filter: include payments that touch a branch invoice, or all if no branch filter.
        if ($branchId) {
            $paymentsQuery->whereHas('applications.invoice', fn ($q) => $q->where('branch_id', $branchId));
        }

        foreach ($paymentsQuery->get() as $payment) {
            $invoiceRefs = $payment->applications
                ->map(fn ($a) => $a->invoice?->invoice_number)
                ->filter()
                ->implode(', ');

            $lines->push((object) [
                'date' => $payment->paid_at,
                'entry_type' => 'payment',
                'reference' => 'PAY-'.$payment->id,
                'invoice_id' => null,
                'payment_id' => $payment->id,
                'description' => __('Collection')
                    .($invoiceRefs ? ' · '.$invoiceRefs : '')
                    .((float) $payment->credit_portion > 0 ? ' · '.__('includes credit') : ''),
                'payment_method' => $payment->payment_method,
                'treasury_name' => $payment->treasury?->name,
                'debit' => 0.0,
                'credit' => (float) $payment->amount,
                'sort' => $payment->paid_at?->format('Y-m-d H:i:s').'-P'.$payment->id,
            ]);
        }

        $returns = SalesReturn::query()
            ->with(['invoice:id,invoice_number,customer_id,branch_id'])
            ->whereHas('invoice', function ($q) use ($customerId, $branchId) {
                $q->where('customer_id', $customerId)
                    ->when($branchId, fn ($qq) => $qq->where('branch_id', $branchId));
            })
            ->when($dateFrom, fn ($q) => $q->whereDate('created_at', '>=', $dateFrom))
            ->when($dateTo, fn ($q) => $q->whereDate('created_at', '<=', $dateTo))
            ->orderBy('created_at')
            ->orderBy('id')
            ->get();

        foreach ($returns as $return) {
            $lines->push((object) [
                'date' => $return->created_at,
                'entry_type' => 'return',
                'reference' => $return->return_number,
                'invoice_id' => $return->invoice_id,
                'description' => __('Sales return').($return->invoice?->invoice_number ? ' · '.$return->invoice->invoice_number : ''),
                'payment_method' => null,
                'treasury_name' => null,
                'debit' => 0.0,
                'credit' => (float) $return->total_refund,
                'sort' => $return->created_at?->format('Y-m-d H:i:s').'-R'.$return->id,
            ]);
        }

        return $lines->sortBy('sort')->values();
    }
}

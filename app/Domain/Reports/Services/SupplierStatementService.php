<?php

namespace App\Domain\Reports\Services;

use App\Domain\Purchase\Models\PurchaseInvoice;
use App\Domain\Supplier\Models\Supplier;
use App\Domain\Supplier\Models\SupplierPayment;
use App\Domain\Supplier\Models\SupplierPaymentApplication;
use Illuminate\Support\Collection;

class SupplierStatementService
{
    /**
     * @return array{
     *     supplier: Supplier|null,
     *     opening_balance: float,
     *     closing_balance: float,
     *     period_purchases: float,
     *     period_payments: float,
     *     current_due: float,
     *     credit_balance: float,
     *     net_balance: float,
     *     invoices: Collection,
     *     payments: Collection,
     *     lines: Collection<int, object>
     * }
     */
    public function statement(
        ?int $supplierId,
        ?string $dateFrom = null,
        ?string $dateTo = null,
        ?int $branchId = null,
    ): array {
        $empty = [
            'supplier' => null,
            'opening_balance' => 0.0,
            'closing_balance' => 0.0,
            'period_purchases' => 0.0,
            'period_payments' => 0.0,
            'current_due' => 0.0,
            'credit_balance' => 0.0,
            'net_balance' => 0.0,
            'invoices' => collect(),
            'payments' => collect(),
            'lines' => collect(),
        ];

        if (! $supplierId) {
            return $empty;
        }

        $supplier = Supplier::query()->find($supplierId);
        if (! $supplier) {
            return $empty;
        }

        $invoices = PurchaseInvoice::query()
            ->with('branch:id,name')
            ->where('supplier_id', $supplierId)
            ->when($branchId, fn ($q) => $q->where('branch_id', $branchId))
            ->when($dateFrom, fn ($q) => $q->whereDate('created_at', '>=', $dateFrom))
            ->when($dateTo, fn ($q) => $q->whereDate('created_at', '<=', $dateTo))
            ->orderByDesc('created_at')
            ->orderByDesc('id')
            ->get();

        $payments = SupplierPayment::query()
            ->with([
                'treasury:id,name,payment_method',
                'applications.invoice:id,invoice_number',
                'creator:id,name',
            ])
            ->where('supplier_id', $supplierId)
            ->when($dateFrom, fn ($q) => $q->whereDate('paid_at', '>=', $dateFrom))
            ->when($dateTo, fn ($q) => $q->whereDate('paid_at', '<=', $dateTo))
            ->orderByDesc('paid_at')
            ->orderByDesc('id')
            ->get();

        $openingBalance = $this->balanceBefore($supplierId, $dateFrom, $branchId);
        $lines = $this->periodLines($supplierId, $dateFrom, $dateTo, $branchId);

        $running = $openingBalance;
        $periodPurchases = 0.0;
        $periodPayments = 0.0;

        $enriched = $lines->map(function (object $line) use (&$running, &$periodPurchases, &$periodPayments) {
            $debit = (float) $line->debit;
            $credit = (float) $line->credit;
            $running += $debit - $credit;

            if ($line->entry_type === 'purchase') {
                $periodPurchases += $debit;
            } elseif (in_array($line->entry_type, ['payment', 'pos_payment'], true)) {
                $periodPayments += $credit;
            }

            $line->balance = round($running, 2);

            return $line;
        });

        $currentDue = (float) PurchaseInvoice::query()
            ->where('supplier_id', $supplierId)
            ->when($branchId, fn ($q) => $q->where('branch_id', $branchId))
            ->sum('remaining_amount');

        $creditBalance = (float) $supplier->credit_balance;

        return [
            'supplier' => $supplier,
            'opening_balance' => round($openingBalance, 2),
            'closing_balance' => round($running, 2),
            'period_purchases' => round($periodPurchases, 2),
            'period_payments' => round($periodPayments, 2),
            'current_due' => round($currentDue, 2),
            'credit_balance' => round($creditBalance, 2),
            'net_balance' => round($currentDue - $creditBalance, 2),
            'invoices' => $invoices,
            'payments' => $payments,
            'lines' => $enriched,
        ];
    }

    protected function balanceBefore(int $supplierId, ?string $dateFrom, ?int $branchId): float
    {
        if (! $dateFrom) {
            return 0.0;
        }

        $lines = $this->periodLines(
            $supplierId,
            null,
            \Illuminate\Support\Carbon::parse($dateFrom)->subDay()->toDateString(),
            $branchId
        );
        $running = 0.0;
        foreach ($lines as $line) {
            $running += (float) $line->debit - (float) $line->credit;
        }

        return round($running, 2);
    }

    /**
     * @return Collection<int, object>
     */
    protected function periodLines(int $supplierId, ?string $dateFrom, ?string $dateTo, ?int $branchId): Collection
    {
        $invoices = PurchaseInvoice::query()
            ->with('branch:id,name')
            ->where('supplier_id', $supplierId)
            ->when($branchId, fn ($q) => $q->where('branch_id', $branchId))
            ->when($dateFrom, fn ($q) => $q->whereDate('created_at', '>=', $dateFrom))
            ->when($dateTo, fn ($q) => $q->whereDate('created_at', '<=', $dateTo))
            ->orderBy('created_at')
            ->orderBy('id')
            ->get();

        $appliedByInvoice = SupplierPaymentApplication::query()
            ->whereIn('purchase_invoice_id', $invoices->pluck('id'))
            ->selectRaw('purchase_invoice_id, SUM(applied_amount) as applied_total')
            ->groupBy('purchase_invoice_id')
            ->pluck('applied_total', 'purchase_invoice_id');

        $lines = collect();

        foreach ($invoices as $invoice) {
            $lines->push((object) [
                'date' => $invoice->created_at,
                'entry_type' => 'purchase',
                'reference' => $invoice->invoice_number,
                'invoice_id' => $invoice->id,
                'description' => __('Purchase invoice').($invoice->branch?->name ? ' · '.$invoice->branch->name : ''),
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
                    'description' => __('Payment at purchase').' ('.$method.')',
                    'payment_method' => $invoice->payment_method,
                    'treasury_name' => null,
                    'debit' => 0.0,
                    'credit' => $posPaid,
                    'sort' => $invoice->created_at?->format('Y-m-d H:i:s').'-'.$invoice->id.'-2',
                ]);
            }
        }

        $paymentsQuery = SupplierPayment::query()
            ->with(['treasury:id,name', 'applications.invoice:id,invoice_number'])
            ->where('supplier_id', $supplierId)
            ->when($dateFrom, fn ($q) => $q->whereDate('paid_at', '>=', $dateFrom))
            ->when($dateTo, fn ($q) => $q->whereDate('paid_at', '<=', $dateTo))
            ->orderBy('paid_at')
            ->orderBy('id');

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
                'reference' => 'SPAY-'.$payment->id,
                'invoice_id' => null,
                'payment_id' => $payment->id,
                'description' => __('Payment to supplier')
                    .($invoiceRefs ? ' · '.$invoiceRefs : '')
                    .((float) $payment->credit_portion > 0 ? ' · '.__('includes credit') : ''),
                'payment_method' => $payment->payment_method,
                'treasury_name' => $payment->treasury?->name,
                'debit' => 0.0,
                'credit' => (float) $payment->amount,
                'sort' => $payment->paid_at?->format('Y-m-d H:i:s').'-P'.$payment->id,
            ]);
        }

        return $lines->sortBy('sort')->values();
    }
}

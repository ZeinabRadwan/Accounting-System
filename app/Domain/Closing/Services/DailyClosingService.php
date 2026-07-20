<?php

namespace App\Domain\Closing\Services;

use App\Domain\Closing\Models\DailyClosing;
use App\Domain\Expense\Models\Expense;
use App\Domain\Notifications\Services\SystemNotifier;
use App\Domain\Purchase\Models\PurchaseInvoice;
use App\Domain\Purchase\Models\PurchaseReturn;
use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Sales\Models\SalesReturn;
use App\Domain\Treasury\Enums\TreasuryTransactionType;
use App\Domain\Treasury\Models\Treasury;
use Carbon\CarbonInterface;
use DomainException;
use Illuminate\Support\Facades\DB;

class DailyClosingService
{
    public function runScheduledClosing(CarbonInterface $closingAt, string $period): DailyClosing
    {
        $normalizedPeriod = $this->normalizePeriod($period);

        return DB::transaction(function () use ($closingAt, $normalizedPeriod) {
            $existing = DailyClosing::query()
                ->where('closing_datetime', $closingAt->toDateTimeString())
                ->lockForUpdate()
                ->first();

            if ($existing) {
                return $existing;
            }

            $previousClosing = DailyClosing::query()
                ->where('closing_datetime', '<', $closingAt->toDateTimeString())
                ->orderByDesc('closing_datetime')
                ->first();

            $summary = $this->buildSummary($closingAt, $previousClosing?->closing_datetime);

            $closing = DailyClosing::query()->create([
                'closing_datetime' => $closingAt->toDateTimeString(),
                'closing_period' => $normalizedPeriod,
                'total_sales' => $summary['totals']['total_sales'],
                'total_purchases' => $summary['totals']['total_purchases'],
                'total_sales_returns' => $summary['totals']['total_sales_returns'],
                'total_purchase_returns' => $summary['totals']['total_purchase_returns'],
                'total_expenses' => $summary['totals']['total_expenses'],
                'net_sales' => $summary['totals']['net_sales'],
                'net_profit' => $summary['totals']['net_profit'],
                'treasury_summary' => $summary['treasury_summary'],
                'created_at' => now(),
            ]);

            $this->notifySuperAdmins($closing);

            return $closing;
        });
    }

    public function normalizePeriod(string $period): string
    {
        return match (strtolower(trim($period))) {
            '5pm', '17:00', '17' => '5pm',
            'midnight', '00:00', '0', '12am' => 'midnight',
            default => throw new DomainException('Unsupported closing period.'),
        };
    }

    public function scheduledTimestampFor(string $period, ?CarbonInterface $base = null): CarbonInterface
    {
        $base ??= now();
        $normalizedPeriod = $this->normalizePeriod($period);

        return $normalizedPeriod === '5pm'
            ? $base->copy()->setTime(17, 0, 0)
            : $base->copy()->startOfDay();
    }

    protected function buildSummary(CarbonInterface $closingAt, ?CarbonInterface $previousClosingAt): array
    {
        $totalSales = $this->activeSalesInvoicesQuery($closingAt)->sum('total');
        $totalPurchases = $this->purchaseInvoicesQuery($closingAt)->sum('total');
        $totalSalesReturns = $this->salesReturnsQuery($closingAt)->sum('total_refund');
        $totalPurchaseReturns = $this->purchaseReturnsQuery($closingAt)->sum('total_return_cost');
        $totalExpenses = $this->expensesQuery($closingAt)->sum('amount');
        $netSales = round($totalSales - $totalSalesReturns, 2);
        $netProfit = $this->calculateNetProfit($closingAt);

        return [
            'totals' => [
                'total_sales' => round((float) $totalSales, 2),
                'total_purchases' => round((float) $totalPurchases, 2),
                'total_sales_returns' => round((float) $totalSalesReturns, 2),
                'total_purchase_returns' => round((float) $totalPurchaseReturns, 2),
                'total_expenses' => round((float) $totalExpenses, 2),
                'net_sales' => $netSales,
                'net_profit' => $netProfit,
            ],
            'treasury_summary' => [
                'previous_closing_datetime' => $previousClosingAt?->toDateTimeString(),
                'counts' => [
                    'sales_invoices' => $this->activeSalesInvoicesQuery($closingAt)->count(),
                    'purchase_invoices' => $this->purchaseInvoicesQuery($closingAt)->count(),
                    'sales_returns' => $this->salesReturnsQuery($closingAt)->count(),
                    'purchase_returns' => $this->purchaseReturnsQuery($closingAt)->count(),
                    'expense_transactions' => $this->expensesQuery($closingAt)->count(),
                ],
                'treasuries' => $this->buildTreasurySummary($closingAt, $previousClosingAt),
            ],
        ];
    }

    protected function buildTreasurySummary(CarbonInterface $closingAt, ?CarbonInterface $previousClosingAt): array
    {
        $lifetimeUpToClosing = DB::table('treasury_transactions')
            ->selectRaw('treasury_id')
            ->selectRaw('SUM(CASE WHEN type = ? THEN amount ELSE 0 END) as income_total', [TreasuryTransactionType::Income->value])
            ->selectRaw('SUM(CASE WHEN type = ? THEN amount ELSE 0 END) as expense_total', [TreasuryTransactionType::Expense->value])
            ->where('created_at', '<=', $closingAt->toDateTimeString())
            ->groupBy('treasury_id')
            ->get()
            ->keyBy('treasury_id');

        $periodTransactions = DB::table('treasury_transactions')
            ->selectRaw('treasury_id')
            ->selectRaw('SUM(CASE WHEN type = ? THEN amount ELSE 0 END) as period_income', [TreasuryTransactionType::Income->value])
            ->selectRaw('SUM(CASE WHEN type = ? THEN amount ELSE 0 END) as period_expense', [TreasuryTransactionType::Expense->value])
            ->where('created_at', '<=', $closingAt->toDateTimeString())
            ->when($previousClosingAt, fn ($q) => $q->where('created_at', '>', $previousClosingAt->toDateTimeString()))
            ->groupBy('treasury_id')
            ->get()
            ->keyBy('treasury_id');

        return Treasury::query()
            ->orderBy('name')
            ->get()
            ->map(function (Treasury $treasury) use ($lifetimeUpToClosing, $periodTransactions) {
                $lifetime = $lifetimeUpToClosing->get($treasury->id);
                $period = $periodTransactions->get($treasury->id);

                $incomeTotal = round((float) ($lifetime->income_total ?? 0), 2);
                $expenseTotal = round((float) ($lifetime->expense_total ?? 0), 2);
                $closingBalance = round($incomeTotal - $expenseTotal, 2);

                $periodIncome = round((float) ($period->period_income ?? 0), 2);
                $periodExpense = round((float) ($period->period_expense ?? 0), 2);
                $openingBalance = round($closingBalance - $periodIncome + $periodExpense, 2);

                return [
                    'treasury_id' => $treasury->id,
                    'treasury_name' => $treasury->name,
                    'payment_method' => $treasury->payment_method,
                    'opening_balance' => $openingBalance,
                    'total_income' => $periodIncome,
                    'total_expenses' => $periodExpense,
                    'closing_balance' => $closingBalance,
                ];
            })
            ->values()
            ->all();
    }

    protected function calculateNetProfit(CarbonInterface $closingAt): float
    {
        return round((float) DB::query()
            ->fromSub(
                DB::table('sales_invoice_items as i')
                    ->join('sales_invoices as inv', 'inv.id', '=', 'i.sales_invoice_id')
                    ->selectRaw('i.product_id, SUM(i.line_total) as revenue')
                    ->where('inv.created_at', '<=', $closingAt->toDateTimeString())
                    ->where(function ($q) {
                        $q->where('inv.is_cancelled', false)
                            ->orWhereNull('inv.is_cancelled');
                    })
                    ->groupBy('i.product_id'),
                'r'
            )
            ->leftJoinSub(
                DB::table('purchase_invoice_items as pi')
                    ->join('purchase_invoices as pinv', 'pinv.id', '=', 'pi.purchase_invoice_id')
                    ->selectRaw('pi.product_id, SUM(pi.line_total_cost) as cogs_estimate')
                    ->where('pinv.created_at', '<=', $closingAt->toDateTimeString())
                    ->groupBy('pi.product_id'),
                'c',
                'c.product_id',
                '=',
                'r.product_id'
            )
            ->selectRaw('SUM(COALESCE(r.revenue,0)-COALESCE(c.cogs_estimate,0)) as net_profit')
            ->value('net_profit'), 2);
    }

    protected function notifySuperAdmins(DailyClosing $closing): void
    {
        DB::afterCommit(fn () => app(SystemNotifier::class)->dailyClosingCompleted($closing));
    }

    protected function activeSalesInvoicesQuery(CarbonInterface $closingAt)
    {
        return SalesInvoice::query()
            ->where('created_at', '<=', $closingAt->toDateTimeString())
            ->where(function ($q) {
                $q->where('is_cancelled', false)
                    ->orWhereNull('is_cancelled');
            });
    }

    protected function purchaseInvoicesQuery(CarbonInterface $closingAt)
    {
        return PurchaseInvoice::query()
            ->where('created_at', '<=', $closingAt->toDateTimeString());
    }

    protected function salesReturnsQuery(CarbonInterface $closingAt)
    {
        return SalesReturn::query()
            ->where('created_at', '<=', $closingAt->toDateTimeString());
    }

    protected function purchaseReturnsQuery(CarbonInterface $closingAt)
    {
        return PurchaseReturn::query()
            ->where('created_at', '<=', $closingAt->toDateTimeString());
    }

    protected function expensesQuery(CarbonInterface $closingAt)
    {
        return Expense::query()
            ->where('created_at', '<=', $closingAt->toDateTimeString());
    }
}

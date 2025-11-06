<?php

namespace App\Services;

use App\Interfaces\IDashboardService;
use Carbon\Carbon;

use App\Models\AccountTransaction;
use App\Models\BalanceTansfer;
use App\Models\Expense;
use App\Models\Invoice;
use App\Models\InvoicePayment;
use App\Models\InvoiceReturn;
use App\Models\LoanPayment;
use App\Models\NonInvoicePayment;
use App\Models\NonPurchasePayment;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\PurchasePayment;
use App\Models\PurchaseReturn;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class DashboardService implements IDashboardService
{

    public function getSummery($summeryType)
    {
        $to = Carbon::now();
        $from = Carbon::today();

        if ($summeryType == 'today') {

            $from = Carbon::today();

        } elseif ($summeryType == 'last_7_days') {

            $from = Carbon::now()->subDays(7);

        } elseif ($summeryType == 'this_month') {

            $from = Carbon::now()->startOfMonth();

        } elseif ($summeryType == 'this_year') {
            $from = Carbon::now()->startOfYear();

        }

        return $this->getSummeryBetweenDates($from, $to);
    }

    public function getSummeryBetweenDates($from, $to)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);

        $invoicePayment = InvoicePayment::where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->whereBetween('date', [$from, $to])
            ->sum('amount');
        
        $nonInvoicePayment = NonInvoicePayment::where('type', 1)
            ->where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->whereBetween('date', [$from, $to])
            ->sum('amount');

        // payment sent(Purchase + Nonpurhcase)
        $purchasePayment = PurchasePayment::where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->whereBetween('date', [$from, $to])
            ->sum('amount');
        
        $nonPurchasePayment = NonPurchasePayment::where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->whereBetween('date', [$from, $to])
            ->sum('amount');

        // expenses
        $expenses = Expense::select(DB::raw('SUM(account_transactions.amount) As expAmount'))
            ->leftJoin('account_transactions', 'account_transactions.id', '=', 'expenses.transaction_id')
            ->where('expenses.status', 1)
            ->whereIn('expenses.branch_id', $branchIds)
            ->whereBetween('expenses.date', [$from, $to])
            ->get();

        return [
            'purchaseAmount' => Purchase::where('status', 1)
                ->whereIn('branch_id', $branchIds)
                ->whereBetween('purchase_date', [$from, $to])
                ->get()
                ->sum('calculated_total'),
            'purchaseReturnAmount' => PurchaseReturn::where('status', 1)
                ->whereIn('branch_id', $branchIds)
                ->whereBetween('date', [$from, $to])
                ->sum('total_return'),
            'salesAmount' => Invoice::where('status', 1)
                ->whereIn('branch_id', $branchIds)
                ->whereBetween('invoice_date', [$from, $to])
                ->get()
                ->sum('calculated_total'),
            'salesReturnAmount' => InvoiceReturn::where('status', 1)
                ->whereIn('branch_id', $branchIds)
                ->whereBetween('date', [$from, $to])
                ->sum('total_return'),
            'paymentReceived' => $invoicePayment + $nonInvoicePayment,
            'paymentSent' => $purchasePayment + $nonPurchasePayment,
            'expenseAmount' => round($expenses[0]->expAmount ?? 0),
            'balanceTransfer' => BalanceTansfer::where('status', 1)
                ->whereIn('branch_id', $branchIds)
                ->whereBetween('date', [$from, $to])
                ->sum('amount'),
            'totalStockQuantity' => Product::where('status', 1)
                ->whereIn('branch_id', $branchIds)
                ->sum('inventory_count'),
            'totalStockValue' => Product::where('status', 1)
                ->whereIn('branch_id', $branchIds)
                ->get()
                ->sum(function ($product) {return round($product->purchase_price * $product->inventory_count);}),
        ];
    }
    
    private function getUserBranchIds($user)
    {
        $defaultBranchId = (int) ($user->default_branch_id ?? 0);
        return [$defaultBranchId > 0 ? $defaultBranchId : 0];
    }
}

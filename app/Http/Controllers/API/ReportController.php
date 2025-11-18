<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResource;
use App\Http\Resources\ExpenseResource;
use App\Http\Resources\InvoiceListResource;
use App\Http\Resources\InvoicePaymentResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\SupplierResource;
use App\Models\Account;
use App\Models\AdjustmentProduct;
use App\Models\Asset;
use App\Models\BalanceTansfer;
use App\Models\Client;
use App\Models\Expense;
use App\Models\Invoice;
use App\Models\InvoicePayment;
use App\Models\InvoiceProduct;
use App\Models\InvoiceReturn;
use App\Models\InvoiceReturnProduct;
use App\Models\LoanPayment;
use App\Models\Payroll;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\PurchaseProduct;
use App\Models\PurchaseReturn;
use App\Models\PurchaseReturnProduct;
use App\Models\Supplier;
use Carbon\Carbon;
use DateTime;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ReportController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:account-statement', ['only' => ['accountStatement']]);
        $this->middleware('can:balance-sheet', ['only' => ['balanceSheet', 'trialBalance']]);
        $this->middleware('can:summary-report', ['only' => ['summeryReport']]);
        $this->middleware('can:profit-loss', ['only' => ['profitLossReport']]);
        $this->middleware('can:expense-report', ['only' => ['expenseReport']]);
        $this->middleware('can:item-report', ['only' => ['itemsReport']]);
        $this->middleware('can:inventory-report', ['only' => ['inventoryReport']]);
    }

    // return balance sheet data based on chart of accounts and journal entries - OPTIMIZED
    public function balanceSheet(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Create filter object for consistency
            $filters = [
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
            ];

            // OPTIMIZED: Get all account balances in a single query using database aggregation
            $accountBalances = $this->getAllAccountBalancesOptimized($filters);

            // Calculate totals by account type using the pre-calculated balances
            $accountTypeBalances = [
                'Asset' => 0,
                'Liability' => 0,
                'Equity' => 0,
                'Revenue' => 0,
                'Expense' => 0,
            ];

            foreach ($accountBalances as $accountId => $balanceData) {
                $accountType = $balanceData['type_name'];
                if (isset($accountTypeBalances[$accountType])) {
                    $accountTypeBalances[$accountType] += $balanceData['balance'];
                }
            }

            // Calculate totals
            $totalAssets = $accountTypeBalances['Asset'];
            $totalLiabilities = $accountTypeBalances['Liability'];
            $totalEquity = $accountTypeBalances['Equity'];
            $totalRevenue = $accountTypeBalances['Revenue'];
            $totalExpenses = $accountTypeBalances['Expense'];

            // Calculate net income (Revenue - Expenses)
            $netIncome = $totalRevenue - $totalExpenses;

            // Calculate total equity including net income
            $totalEquityWithIncome = $totalEquity + $netIncome;

            // Calculate total assets and total liabilities + equity
            $totalAssetsAmount = $totalAssets;
            $totalLiabilitiesAndEquity = $totalLiabilities + $totalEquityWithIncome;

            // Get detailed account breakdown using pre-calculated balances
            $assetAccounts = $this->getAccountDetailsByTypeOptimized($accountBalances, 'Asset');
            $liabilityAccounts = $this->getAccountDetailsByTypeOptimized($accountBalances, 'Liability');
            $equityAccounts = $this->getAccountDetailsByTypeOptimized($accountBalances, 'Equity');

            // Get legacy data using pre-calculated balances
            $legacyData = $this->getLegacyBalanceData($accountBalances, $totalAssetsAmount, $totalLiabilities);

            return [
                'success' => true,
                'data' => [
                    'filters' => $filters,
                    'totals' => [
                        'total_assets' => round($totalAssetsAmount, 2),
                        'total_liabilities' => round($totalLiabilities, 2),
                        'total_equity' => round($totalEquity, 2),
                        'total_revenue' => round($totalRevenue, 2),
                        'total_expenses' => round($totalExpenses, 2),
                        'net_income' => round($netIncome, 2),
                        'total_liabilities_and_equity' => round($totalLiabilitiesAndEquity, 2),
                    ],
                    'accounts' => [
                        'assets' => $assetAccounts,
                        'liabilities' => $liabilityAccounts,
                        'equity' => $equityAccounts,
                    ],
                    'legacy_data' => $legacyData,
                ],
            ];
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate balance sheet',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get all account balances in a single optimized query
     */
    private function getAllAccountBalancesOptimized($filters)
    {
        // Build base query for journal entries with filters
        $baseQuery = DB::table('journal_entries')
            ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
            ->join('chart_of_accounts', 'journal_entry_lines.chart_of_account_id', '=', 'chart_of_accounts.id')
            ->join('chart_of_account_types', 'chart_of_accounts.type_id', '=', 'chart_of_account_types.id')
            ->where('journal_entries.status', 'posted')
            ->where('chart_of_accounts.is_active', true);

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $baseQuery->where('journal_entries.fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $baseQuery->where('journal_entries.accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $baseQuery->whereBetween('journal_entries.entry_date', [$filters['from_date'], $filters['to_date']]);
        }

        // Get all account balances in one query
        $balances = $baseQuery
            ->selectRaw('
                chart_of_accounts.id as account_id,
                chart_of_accounts.code as account_code,
                chart_of_accounts.name as account_name,
                chart_of_account_types.name as type_name,
                SUM(journal_entry_lines.debit_amount) as total_debits,
                SUM(journal_entry_lines.credit_amount) as total_credits
            ')
            ->groupBy('chart_of_accounts.id', 'chart_of_accounts.code', 'chart_of_accounts.name', 'chart_of_account_types.name')
            ->get();

        // Convert to array format
        $result = [];
        foreach ($balances as $balance) {
            $accountBalance = $balance->total_debits - $balance->total_credits;
            $result[$balance->account_id] = [
                'account_id' => $balance->account_id,
                'account_code' => $balance->account_code,
                'account_name' => $balance->account_name,
                'type_name' => $balance->type_name,
                'balance' => $accountBalance,
                'total_debits' => $balance->total_debits,
                'total_credits' => $balance->total_credits,
            ];
        }

        return $result;
    }

    /**
     * Calculate balances for each account type - DEPRECATED (kept for compatibility)
     */
    private function calculateAccountTypeBalances($chartOfAccounts, $filters)
    {
        $balances = [
            'Asset' => 0,
            'Liability' => 0,
            'Equity' => 0,
            'Revenue' => 0,
            'Expense' => 0,
        ];

        foreach ($chartOfAccounts as $account) {
            $accountType = $account->type->name ?? 'Unknown';
            $balance = $this->getAccountBalanceForFilters($account, $filters);

            if (isset($balances[$accountType])) {
                $balances[$accountType] += $balance;
            }
        }

        return $balances;
    }

    /**
     * Get account details by type - OPTIMIZED
     */
    private function getAccountDetailsByTypeOptimized($accountBalances, $typeName)
    {
        $accounts = [];
        foreach ($accountBalances as $accountId => $balanceData) {
            if ($balanceData['type_name'] === $typeName) {
                $balance = $balanceData['balance'];
                $accounts[] = [
                    'id' => $balanceData['account_id'],
                    'code' => $balanceData['account_code'],
                    'name' => $balanceData['account_name'],
                    'type' => $balanceData['type_name'],
                    'balance' => round($balance, 2),
                    'balance_type' => $balance >= 0 ? 'Debit' : 'Credit',
                    'absolute_balance' => round(abs($balance), 2),
                ];
            }
        }

        return $accounts;
    }

    /**
     * Get account details by type - DEPRECATED (kept for compatibility)
     */
    private function getAccountDetailsByType($chartOfAccounts, $typeName, $filters)
    {
        return $chartOfAccounts
            ->filter(function ($account) use ($typeName) {
                return ($account->type->name ?? '') === $typeName;
            })
            ->map(function ($account) use ($filters) {
                $balance = $this->getAccountBalanceForFilters($account, $filters);

                return [
                    'id' => $account->id,
                    'code' => $account->code,
                    'name' => $account->name,
                    'type' => $account->type->name ?? 'Unknown',
                    'balance' => round($balance, 2),
                    'balance_type' => $balance >= 0 ? 'Debit' : 'Credit',
                    'absolute_balance' => round(abs($balance), 2),
                ];
            })
            ->values()
            ->toArray();
    }

    /**
     * Get legacy balance data using pre-calculated balances
     */
    private function getLegacyBalanceData($accountBalances, $totalAssetsAmount, $totalLiabilities)
    {
        // Find specific accounts by name
        $inventoryValue = $this->findAccountBalanceByName($accountBalances, 'Inventory');
        $clientTotalDue = $this->findAccountBalanceByName($accountBalances, 'Accounts Receivable');
        $bankBalance = $this->findAccountBalanceByName($accountBalances, 'Bank Accounts');
        $supplierDue = $this->findAccountBalanceByName($accountBalances, 'Accounts Payable');
        $loanDue = $this->findAccountBalanceByName($accountBalances, 'Loans Payable');

        return [
            'assets' => round($totalAssetsAmount, 2),
            'inventoryValue' => $inventoryValue,
            'clientTotalDue' => $clientTotalDue,
            'bankBalance' => $bankBalance,
            'supplierDue' => $supplierDue,
            'loanDue' => $loanDue,
            'buisnessTotal' => round($totalAssetsAmount, 2),
            'liabilities' => round($totalLiabilities, 2),
            'totalAsset' => round($totalAssetsAmount - $totalLiabilities, 2),
        ];
    }

    /**
     * Find account balance by name in pre-calculated balances
     */
    private function findAccountBalanceByName($accountBalances, $accountName)
    {
        foreach ($accountBalances as $balanceData) {
            if ($balanceData['account_name'] === $accountName) {
                return round($balanceData['balance'], 2);
            }
        }

        return 0;
    }

    /**
     * Get balance for a specific account by name - DEPRECATED (kept for compatibility)
     */
    private function getAccountBalance($chartOfAccounts, $accountName, $filters)
    {
        $account = $chartOfAccounts->firstWhere('name', $accountName);
        if (! $account) {
            return 0;
        }

        $balance = $this->getAccountBalanceForFilters($account, $filters);

        return round($balance, 2);
    }

    /**
     * Get account balance using filters
     */
    private function getAccountBalanceForFilters($account, $filters)
    {
        // Build base query for journal entries
        $query = \App\Models\JournalEntry::query()
            ->where('status', 'posted')
            ->whereHas('lines', function ($query) use ($account) {
                $query->where('chart_of_account_id', $account->id);
            });

        // Apply branch filter
        if (isset($filters['branch_id']) && $filters['branch_id']) {
            $query->where('branch_id', $filters['branch_id']);
        }

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('entry_date', [$filters['from_date'], $filters['to_date']]);
        }

        // Calculate balance
        $debits = $query->get()->sum(function ($entry) use ($account) {
            return $entry->lines->where('chart_of_account_id', $account->id)->sum('debit_amount');
        });

        $credits = $query->get()->sum(function ($entry) use ($account) {
            return $entry->lines->where('chart_of_account_id', $account->id)->sum('credit_amount');
        });

        return $debits - $credits;
    }

    // return summery report data
    public function summeryReport(Request $request)
    {
        // validate request
        $this->validate($request, [
            'month' => 'required|integer|min:0|max:12',
            'year' => 'required|integer',
        ]);

        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        $month = $request->month;
        $year = $request->year;
        $dateObj = DateTime::createFromFormat('!m', $month);
        $monthName = $dateObj->format('F');

        // general expenses for a given month and year
        $expenses = Expense::select(DB::raw('SUM(account_transactions.amount) As expAmount'))
            ->leftJoin('account_transactions', 'account_transactions.id', '=', 'expenses.transaction_id')
            ->where('expenses.status', 1)
            ->whereIn('expenses.branch_id', $branchIds)
            ->whereYear('expenses.date', '=', $year)
            ->whereMonth('expenses.date', '=', $month)
            ->first();

        // payrolls for a given month and year
        $payrolls = Payroll::select(DB::raw('SUM(account_transactions.amount) As payrollAmount'))
            ->leftJoin('account_transactions', 'account_transactions.id', '=', 'payrolls.transaction_id')
            ->where('payrolls.status', 1)
            ->whereIn('payrolls.branch_id', $branchIds)
            ->where('payrolls.salary_month', '=', $monthName)
            ->whereYear('payrolls.salary_date', '=', $year)
            ->first();

        // loan interests for a given month and year
        $loanInterest = LoanPayment::where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->whereYear('date', '=', $year)
            ->whereMonth('date', '=', $month)
            ->sum('interest');

        $numOfDays = cal_days_in_month(CAL_GREGORIAN, $month, $year);
        $fromDate = $year.'-'.$month.'-01';
        $toDate = $year.'-'.$month.'-'.$numOfDays;

        // assets depreciation for a given month and year - Note: Assets may not have branch_id
        $branchIdsStr = implode(',', $branchIds);
        $assetDepriciation = DB::select('SELECT Sum( case when NumberOfDays > 0 then  new_assets.daily_depreciation * NumberOfDays else 0 end) as total_dep FROM ( SELECT daily_depreciation, ( CASE WHEN date < "'.$fromDate.'" && expire_date > "'.$toDate.'" THEN DATEDIFF("'.$toDate.'", "'.$fromDate.'") WHEN expire_date > "'.$fromDate.'" && expire_date < "'.$toDate.'" THEN DATEDIFF("'.$fromDate.'", expire_date) ELSE DATEDIFF("'.$toDate.'", date) END) AS NumberOfDays FROM assets WHERE depreciation = 1 AND status = 1 AND expire_date >= "'.$fromDate.'" AND branch_id IN ('.$branchIdsStr.') ) AS new_assets');

        // Total purchases for a given month and year
        $purchases = Purchase::where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->whereYear('purchase_date', '=', $year)
            ->whereMonth('purchase_date', '=', $month)
            ->get();
        $totalPurchase = $purchases->sum('sub_total') - $purchases->sum('discount') + $purchases->sum('transport') + $purchases->sum('total_tax');

        // opening balances for a given month and year - Note: Accounts may need branch filtering
        $branchIdsStr = implode(',', $branchIds);
        $openingBalances = DB::select('SELECT A.account_number, A.bank_name, SUM(IF(`type`=1, `amount`, 0))-SUM(IF(`type`=0, `amount`, 0)) AS `current_balance`
        FROM `accounts`  as A
        LEFT  JOIN account_transactions as T ON A.id = T.account_id
        AND T.status = 1 AND DATE(T.transaction_date) < "'.$fromDate.'" AND A.branch_id IN ('.$branchIdsStr.') AND (T.branch_id IN ('.$branchIdsStr.') OR T.branch_id IS NULL) GROUP BY A.id');

        // closing balances for a given month and year
        $closingBalances = DB::select('SELECT A.account_number, A.bank_name, SUM(IF(`type`=1, `amount`, 0))-SUM(IF(`type`=0, `amount`, 0)) AS `current_balance`
        FROM `accounts`  as A
        LEFT  JOIN account_transactions as T ON A.id = T.account_id
        AND T.status = 1 AND DATE(T.transaction_date) < "'.$toDate.'" AND A.branch_id IN ('.$branchIdsStr.') AND (T.branch_id IN ('.$branchIdsStr.') OR T.branch_id IS NULL) GROUP BY A.id');

        // invoice salesfor a given month and year
        $invoiceSales = Invoice::where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->whereYear('invoice_date', '=', $year)
            ->whereMonth('invoice_date', '=', $month)
            ->sum('sub_total');

        // invoice due a given month and year
        $invoiceTotalPaid = InvoicePayment::where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->whereYear('date', '=', $year)
            ->whereMonth('date', '=', $month)
            ->sum('amount');
        $invoiceDue = $invoiceSales - $invoiceTotalPaid;

        // account collection balances for a given month and year
        $branchIdsStr = implode(',', $branchIds);
        $accountCollections = DB::select('SELECT accounts.account_number, accounts.bank_name, SUM(IF(`type`= 1, `amount`, 0)) AS `total_collection`
        FROM `account_transactions`
        JOIN accounts ON accounts.id = account_transactions.account_id
        WHERE account_transactions.status = 1 AND accounts.branch_id IN ('.$branchIdsStr.') AND account_transactions.branch_id IN ('.$branchIdsStr.') AND MONTH(transaction_date)= "'.$month.'" AND YEAR(transaction_date)="'.$year.'" GROUP BY account_transactions.account_id');

        // balance transfer - Note: BalanceTansfer may not have branch_id
        $balanceTransfers = BalanceTansfer::with('debitTransaction.cashbookAccount', 'creditTransaction.cashbookAccount')
            ->where('status', 1)
            ->whereYear('date', '=', $year)
            ->whereMonth('date', '=', $month)
            ->get();

        return [
            'openingBalances' => $openingBalances,
            'closingBalances' => $closingBalances,
            'accountCollections' => $accountCollections,
            'balanceTransfers' => $balanceTransfers,
            'invoiceSales' => round($invoiceSales, 2),
            'invoiceDue' => round($invoiceDue, 2),
            'expenses' => round($expenses->expAmount, 2),
            'payrolls' => round($payrolls->payrollAmount, 2),
            'loanInterest' => round($loanInterest, 2),
            'assetDepriciation' => round($assetDepriciation[0]->total_dep, 2),
            'totalPurchase' => round($totalPurchase, 0),
            'monthName' => $monthName,
            'year' => $year,
        ];
    }

    // return profit loss report data - OPTIMIZED
    public function profitLossReport(Request $request)
    {
        // Validate request
        $this->validate($request, [
            'reportType' => 'required|integer|in:1,2',
            'fromDate' => 'required|date',
            'toDate' => 'required|date|after_or_equal:fromDate',
            'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
            'accounting_period_id' => 'nullable|exists:accounting_periods,id',
        ]);

        $fiscalYearId = $request->fiscal_year_id;
        $accountingPeriodId = $request->accounting_period_id;
        $fromDate = $request->fromDate;
        $toDate = $request->toDate;

        if ($request->reportType == 1) {
            // Product-wise profit & loss report - OPTIMIZED
            return $this->getProductWiseProfitLoss($fromDate, $toDate, $fiscalYearId, $accountingPeriodId);
        } else {
            // Summary profit & loss report - OPTIMIZED
            return $this->getSummaryProfitLoss($fromDate, $toDate, $fiscalYearId, $accountingPeriodId);
        }
    }

    /**
     * Get product-wise profit & loss report - OPTIMIZED
     */
    private function getProductWiseProfitLoss($fromDate, $toDate, $fiscalYearId = null, $accountingPeriodId = null)
    {
        // Build base query for invoices with filters
        $invoiceQuery = DB::table('invoices')
            ->where('status', 1)
            ->whereBetween('invoice_date', [$fromDate, $toDate]);

        if ($fiscalYearId) {
            $invoiceQuery->where('fiscal_year_id', $fiscalYearId);
        } elseif ($accountingPeriodId) {
            $invoiceQuery->where('accounting_period_id', $accountingPeriodId);
        }

        // Get product sales data in one optimized query
        $productSales = DB::table('invoice_products')
            ->join('invoices', 'invoice_products.invoice_id', '=', 'invoices.id')
            ->join('products', 'invoice_products.product_id', '=', 'products.id')
            ->where('invoices.status', 1)
            ->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);

        if ($fiscalYearId) {
            $productSales->where('invoices.fiscal_year_id', $fiscalYearId);
        } elseif ($accountingPeriodId) {
            $productSales->where('invoices.accounting_period_id', $accountingPeriodId);
        }

        $productSales = $productSales
            ->selectRaw('
                products.id as product_id,
                products.code as product_code,
                products.name as product_name,
                SUM(invoice_products.quantity) as total_quantity,
                SUM(invoice_products.purchase_price * invoice_products.quantity) as total_purchase_cost,
                SUM(invoice_products.sale_price * invoice_products.quantity) as total_sale_value
            ')
            ->groupBy('products.id', 'products.code', 'products.name')
            ->get();

        // Get product returns data in one optimized query
        $productReturns = DB::table('invoice_return_products')
            ->join('invoice_returns', 'invoice_return_products.return_id', '=', 'invoice_returns.id')
            ->join('invoices', 'invoice_returns.invoice_id', '=', 'invoices.id')
            ->where('invoices.status', 1)
            ->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);

        if ($fiscalYearId) {
            $productReturns->where('invoices.fiscal_year_id', $fiscalYearId);
        } elseif ($accountingPeriodId) {
            $productReturns->where('invoices.accounting_period_id', $accountingPeriodId);
        }

        $productReturns = $productReturns
            ->selectRaw('
                invoice_return_products.product_id,
                SUM(invoice_return_products.quantity) as return_quantity
            ')
            ->groupBy('invoice_return_products.product_id')
            ->pluck('return_quantity', 'product_id');

        // Process results
        $products = [];
        foreach ($productSales as $key => $product) {
            $returnQty = $productReturns[$product->product_id] ?? 0;
            $currentQty = $product->total_quantity - $returnQty;
            $avgPurchasePrice = $product->total_quantity > 0 ? $product->total_purchase_cost / $product->total_quantity : 0;
            $avgSalePrice = $product->total_quantity > 0 ? $product->total_sale_value / $product->total_quantity : 0;
            $profitOrLoss = ($avgSalePrice * $currentQty) - ($avgPurchasePrice * $currentQty);

            $products[$key] = [
                'itemCode' => $product->product_code,
                'code' => $product->product_code,
                'itemName' => $product->product_name,
                'avgPurchasePrice' => round($avgPurchasePrice, 2),
                'avgSalePrice' => round($avgSalePrice, 2),
                'invoiceQty' => $product->total_quantity,
                'currentQty' => $currentQty,
                'returnQty' => $returnQty > 0 ? $returnQty : 0,
                'profitOrLoss' => round($profitOrLoss, 2),
            ];
        }

        return [
            'type' => 1,
            'reportData' => $products,
        ];
    }

    /**
     * Get summary profit & loss report - OPTIMIZED
     */
    private function getSummaryProfitLoss($fromDate, $toDate, $fiscalYearId = null, $accountingPeriodId = null)
    {
        $daysDifference = strtotime($toDate) - strtotime($fromDate);
        $daysDifference = floor($daysDifference / (60 * 60 * 24)) + 1;

        // Build base query for invoices with filters
        $invoiceQuery = DB::table('invoices')
            ->where('status', 1)
            ->whereBetween('invoice_date', [$fromDate, $toDate]);

        if ($fiscalYearId) {
            $invoiceQuery->where('fiscal_year_id', $fiscalYearId);
        } elseif ($accountingPeriodId) {
            $invoiceQuery->where('accounting_period_id', $accountingPeriodId);
        }

        // Get total sales - OPTIMIZED
        $totalSales = $invoiceQuery->sum('sub_total');

        // Get cost of goods sold - OPTIMIZED
        $costOfGoodsSold = $this->getCostOfGoodsSold($fromDate, $toDate, $fiscalYearId, $accountingPeriodId);

        // Get inventory adjustments - OPTIMIZED
        $adjustments = $this->getInventoryAdjustments($fromDate, $toDate, $fiscalYearId, $accountingPeriodId);

        // Get expenses - OPTIMIZED
        $expenses = $this->getExpenses($fromDate, $toDate, $fiscalYearId, $accountingPeriodId);

        // Get other costs - OPTIMIZED
        $otherCosts = $this->getOtherCosts($fromDate, $toDate, $fiscalYearId, $accountingPeriodId, $daysDifference);

        // Get product details for detailed breakdown
        $productDetails = $this->getProductWiseProfitLoss($fromDate, $toDate, $fiscalYearId, $accountingPeriodId);

        // Calculate totals
        $totalSaleReturn = 0;
        foreach ($productDetails['reportData'] as $product) {
            $totalSaleReturn += $product['returnQty'] * $product['avgSalePrice'];
        }

        $grossProfitOrLoss = round(($totalSales + $adjustments['pos'] - ($costOfGoodsSold + $adjustments['neg'] + $totalSaleReturn)), 2);
        $totalExpense = round(($expenses['general'] + $expenses['payroll'] + $otherCosts['loanInterest'] + $otherCosts['depreciation']), 2);
        $netProfitOrLoss = round(($grossProfitOrLoss - $totalExpense), 2);

        return [
            'type' => 2,
            'reportData' => [
                'totalSales' => round($totalSales, 2),
                'totalSalesReturn' => round($totalSaleReturn, 2),
                'costOfGoodsSold' => round($costOfGoodsSold, 2),
                'posAdjustment' => round($adjustments['pos'], 2),
                'negAdjustment' => round($adjustments['neg'], 2),
                'totalAdjustment' => round($adjustments['pos'] - $adjustments['neg'], 2),
                'expenseAmount' => round($expenses['general'], 2),
                'payrollAmount' => round($expenses['payroll'], 2),
                'loanInterest' => round($otherCosts['loanInterest'], 2),
                'assetDepriciation' => round($otherCosts['depreciation'], 2),
                'grossProfitOrLoss' => $grossProfitOrLoss,
                'totalExpense' => $totalExpense,
                'netProfitOrLoss' => $netProfitOrLoss,
            ],
            'products' => $productDetails['reportData'],
        ];
    }

    /**
     * Get cost of goods sold - OPTIMIZED
     */
    private function getCostOfGoodsSold($fromDate, $toDate, $fiscalYearId = null, $accountingPeriodId = null)
    {
        // Invoice purchase price - OPTIMIZED
        $invoiceQuery = DB::table('invoice_products')
            ->join('invoices', 'invoice_products.invoice_id', '=', 'invoices.id')
            ->where('invoices.status', 1)
            ->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);

        if ($fiscalYearId) {
            $invoiceQuery->where('invoices.fiscal_year_id', $fiscalYearId);
        } elseif ($accountingPeriodId) {
            $invoiceQuery->where('invoices.accounting_period_id', $accountingPeriodId);
        }

        $invoicePurchasePrice = $invoiceQuery->sum(DB::raw('invoice_products.purchase_price * invoice_products.quantity'));

        // Return purchase price - OPTIMIZED
        $returnQuery = DB::table('invoice_return_products')
            ->join('invoice_returns', 'invoice_return_products.return_id', '=', 'invoice_returns.id')
            ->join('invoices', 'invoice_returns.invoice_id', '=', 'invoices.id')
            ->where('invoices.status', 1)
            ->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);

        if ($fiscalYearId) {
            $returnQuery->where('invoices.fiscal_year_id', $fiscalYearId);
        } elseif ($accountingPeriodId) {
            $returnQuery->where('invoices.accounting_period_id', $accountingPeriodId);
        }

        $returnPurchasePrice = $returnQuery->sum(DB::raw('invoice_return_products.purchase_price * invoice_return_products.quantity'));

        return $invoicePurchasePrice - $returnPurchasePrice;
    }

    /**
     * Get inventory adjustments - OPTIMIZED
     */
    private function getInventoryAdjustments($fromDate, $toDate, $fiscalYearId = null, $accountingPeriodId = null)
    {
        $adjustmentQuery = DB::table('adjustment_products')
            ->join('inventory_adjustments', 'adjustment_products.adjustment_id', '=', 'inventory_adjustments.id')
            ->where('inventory_adjustments.status', 1)
            ->whereBetween('inventory_adjustments.date', [$fromDate, $toDate]);

        $posAdjustment = (clone $adjustmentQuery)->where('adjustment_products.type', 1)
            ->sum(DB::raw('adjustment_products.purchase_price * adjustment_products.quantity'));

        $negAdjustment = (clone $adjustmentQuery)->where('adjustment_products.type', 0)
            ->sum(DB::raw('adjustment_products.purchase_price * adjustment_products.quantity'));

        return [
            'pos' => $posAdjustment,
            'neg' => $negAdjustment,
        ];
    }

    /**
     * Get expenses - OPTIMIZED
     */
    private function getExpenses($fromDate, $toDate, $fiscalYearId = null, $accountingPeriodId = null)
    {
        // General expenses - OPTIMIZED
        $generalExpenses = DB::table('expenses')
            ->join('account_transactions', 'account_transactions.id', '=', 'expenses.transaction_id')
            ->where('expenses.status', 1)
            ->whereBetween('expenses.date', [$fromDate, $toDate])
            ->sum('account_transactions.amount');

        // Payroll expenses - OPTIMIZED
        $payrollExpenses = DB::table('payrolls')
            ->join('account_transactions', 'account_transactions.id', '=', 'payrolls.transaction_id')
            ->where('payrolls.status', 1)
            ->whereBetween('payrolls.salary_date', [$fromDate, $toDate])
            ->sum('account_transactions.amount');

        return [
            'general' => $generalExpenses,
            'payroll' => $payrollExpenses,
        ];
    }

    /**
     * Get other costs - OPTIMIZED
     */
    private function getOtherCosts($fromDate, $toDate, $fiscalYearId, $accountingPeriodId, $daysDifference)
    {
        // Loan interest - OPTIMIZED
        $loanInterest = DB::table('loan_payments')
            ->where('status', 1)
            ->whereBetween('date', [$fromDate, $toDate])
            ->sum('interest');

        // Asset depreciation - OPTIMIZED
        $depreciation = DB::table('assets')
            ->where('status', 1)
            ->where('depreciation', 1)
            ->where('expire_date', '>=', date('Y-m-d'))
            ->sum('daily_depreciation') * $daysDifference;

        return [
            'loanInterest' => $loanInterest,
            'depreciation' => $depreciation,
        ];
    }

    /**
     * Get VAT report data - OPTIMIZED
     */
    public function vatReport(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
                'page' => 'nullable|integer|min:1',
                'per_page' => 'nullable|integer|min:1|max:100',
            ]);

            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;
            $page = $request->page ?? 1;
            $perPage = $request->per_page ?? 10; // Default to 10 rows per page

            // Create filter object for consistency
            $filters = [
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
            ];

            // Get all VAT rates with their accounts (no filtering by specific rate)
            $vatRates = $this->getVatRates();

            // Get VAT summary data (always calculate for consistency)
            $vatSummary = $this->getVatSummary($filters, $vatRates);

            // Get detailed VAT transactions with pagination
            $vatTransactionsData = $this->getVatTransactionsPaginated($filters, $vatRates, $page, $perPage);

            return [
                'success' => true,
                'data' => [
                    'filters' => $filters,
                    'vat_rates' => $vatRates,
                    'summary' => $vatSummary,
                    'transactions' => $vatTransactionsData['transactions'],
                    'pagination' => $vatTransactionsData['pagination'],
                ],
            ];
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate VAT report',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get VAT report data for printing - NO PAGINATION
     */
    public function vatReportForPrint(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        try {
            // Debug: Log input parameters
            Log::info('VAT Report For Print - Input:', $request->all());

            // Validate request
            $this->validate($request, [
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            Log::info('VAT Report For Print - Validation passed');

            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Create filter object for consistency
            $filters = [
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
            ];

            // Get all VAT rates with their accounts (no filtering by specific rate)
            $vatRates = $this->getVatRates();

            // Get VAT summary data (always calculate for consistency)
            $vatSummary = $this->getVatSummary($filters, $vatRates);

            // Get ALL detailed VAT transactions without pagination
            $vatTransactions = $this->getAllVatTransactionsForPrint($filters, $vatRates);

            Log::info('VAT Report For Print - Query Results:', [
                'total_vat_rates' => count($vatRates),
                'total_transactions' => count($vatTransactions),
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
            ]);

            Log::info('VAT Report For Print - Processing complete. Total transactions: '.count($vatTransactions));

            return [
                'success' => true,
                'data' => [
                    'filters' => $filters,
                    'vat_rates' => $vatRates,
                    'summary' => $vatSummary,
                    'transactions' => $vatTransactions,
                    'total_entries' => count($vatTransactions),
                ],
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Failed to generate VAT report for print',
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Get ALL VAT transactions for print (no pagination)
     */
    private function getAllVatTransactionsForPrint($filters, $vatRates)
    {
        $transactions = [];
        $seenTransactions = []; // Track unique transactions

        // Get all transactions first (we need to deduplicate)
        foreach ($vatRates as $vatRate) {
            // Get invoice VAT transactions
            $invoiceTransactions = $this->getInvoiceVatTransactions($filters, $vatRate->id);

            // Get journal VAT transactions
            $journalTransactions = $this->getJournalVatTransactions($filters, $vatRate);

            $transactions = array_merge($transactions, $invoiceTransactions, $journalTransactions);
        }

        // Get purchase VAT transactions (all purchases, not filtered by VAT rate)
        $purchaseTransactions = $this->getPurchaseVatTransactions($filters);
        $transactions = array_merge($transactions, $purchaseTransactions);

        // Remove duplicates based on reference, date, type, and source
        $uniqueTransactions = [];
        foreach ($transactions as $transaction) {
            $key = $transaction['reference'].'|'.$transaction['date'].'|'.$transaction['type'].'|'.$transaction['source'];
            if (! isset($seenTransactions[$key])) {
                $seenTransactions[$key] = true;
                $uniqueTransactions[] = $transaction;
            }
        }

        // Sort by date
        usort($uniqueTransactions, function ($a, $b) {
            return strtotime($a['date']) - strtotime($b['date']);
        });

        return $uniqueTransactions;
    }

    /**
     * Get VAT rates with their accounts
     */
    private function getVatRates()
    {
        return DB::table('vat_rates')
            ->leftJoin('chart_of_accounts as sales_account', 'vat_rates.sales_vat_account_id', '=', 'sales_account.id')
            ->leftJoin('chart_of_accounts as purchase_account', 'vat_rates.purchase_vat_account_id', '=', 'purchase_account.id')
            ->where('vat_rates.status', 1)
            ->selectRaw('
                vat_rates.id,
                vat_rates.name,
                vat_rates.code,
                vat_rates.rate,
                vat_rates.note,
                sales_account.id as sales_account_id,
                sales_account.name as sales_account_name,
                sales_account.code as sales_account_code,
                purchase_account.id as purchase_account_id,
                purchase_account.name as purchase_account_name,
                purchase_account.code as purchase_account_code
            ')
            ->get();
    }

    /**
     * Get VAT summary data - OPTIMIZED
     */
    private function getVatSummary($filters, $vatRates)
    {
        $summary = [];

        // Get total purchase VAT (since purchase_products doesn't have vat_rate_id)
        $totalPurchaseVat = $this->getTotalPurchaseVatAmount($filters);

        // Get all sales VAT amounts in one query
        $salesVatData = $this->getAllSalesVatAmounts($filters, $vatRates);

        // Get all journal VAT amounts in one query
        $journalVatData = $this->getAllJournalVatAmounts($filters, $vatRates);

        foreach ($vatRates as $vatRate) {
            // Get sales VAT from cached data
            $salesVat = $salesVatData[$vatRate->id] ?? 0;

            // For purchase VAT, we'll distribute the total based on the VAT rate percentage
            // This is a simplified approach since we can't track which products use which VAT rates
            $purchaseVat = $this->calculatePurchaseVatForRate($totalPurchaseVat, $vatRate->rate, $vatRates);

            // Get VAT from journal entries from cached data
            $journalVat = $journalVatData[$vatRate->id] ?? 0;

            $netVat = $salesVat - $purchaseVat + $journalVat;

            $summary[] = [
                'vat_rate_id' => $vatRate->id,
                'vat_rate_name' => $vatRate->name,
                'vat_rate_code' => $vatRate->code,
                'vat_rate_percentage' => $vatRate->rate,
                'sales_vat' => round($salesVat, 2),
                'purchase_vat' => round($purchaseVat, 2),
                'journal_vat' => round($journalVat, 2),
                'net_vat' => round($netVat, 2),
                'sales_account' => [
                    'id' => $vatRate->sales_account_id,
                    'name' => $vatRate->sales_account_name,
                    'code' => $vatRate->sales_account_code,
                ],
                'purchase_account' => [
                    'id' => $vatRate->purchase_account_id,
                    'name' => $vatRate->purchase_account_name,
                    'code' => $vatRate->purchase_account_code,
                ],
            ];
        }

        return $summary;
    }

    /**
     * Get all sales VAT amounts in one query - OPTIMIZED
     */
    private function getAllSalesVatAmounts($filters, $vatRates)
    {
        $vatRateIds = $vatRates->pluck('id')->toArray();

        $query = DB::table('invoice_products')
            ->join('invoices', 'invoice_products.invoice_id', '=', 'invoices.id')
            ->where('invoices.status', 1)
            ->whereIn('invoice_products.vat_rate_id', $vatRateIds);

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('invoices.fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('invoices.accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('invoices.invoice_date', [$filters['from_date'], $filters['to_date']]);
        }

        $results = $query
            ->selectRaw('invoice_products.vat_rate_id, SUM(invoice_products.tax_amount) as total_vat')
            ->groupBy('invoice_products.vat_rate_id')
            ->get()
            ->keyBy('vat_rate_id');

        $salesVatData = [];
        foreach ($vatRates as $vatRate) {
            $salesVatData[$vatRate->id] = $results->get($vatRate->id)->total_vat ?? 0;
        }

        return $salesVatData;
    }

    /**
     * Get sales VAT amount - OPTIMIZED (kept for backward compatibility)
     */
    private function getSalesVatAmount($filters, $vatRateId)
    {
        $query = DB::table('invoice_products')
            ->join('invoices', 'invoice_products.invoice_id', '=', 'invoices.id')
            ->where('invoices.status', 1)
            ->where('invoice_products.vat_rate_id', $vatRateId);

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('invoices.fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('invoices.accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('invoices.invoice_date', [$filters['from_date'], $filters['to_date']]);
        }

        return $query->sum('invoice_products.tax_amount');
    }

    /**
     * Get total purchase VAT amount - OPTIMIZED
     */
    private function getTotalPurchaseVatAmount($filters)
    {
        $query = DB::table('purchase_products')
            ->join('purchases', 'purchase_products.purchase_id', '=', 'purchases.id')
            ->where('purchases.status', 1)
            ->where('purchase_products.tax_amount', '>', 0);

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('purchases.fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('purchases.accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('purchases.purchase_date', [$filters['from_date'], $filters['to_date']]);
        }

        return $query->sum('purchase_products.tax_amount');
    }

    /**
     * Calculate purchase VAT for a specific rate
     */
    private function calculatePurchaseVatForRate($totalPurchaseVat, $ratePercentage, $vatRates)
    {
        // Calculate total percentage of all VAT rates
        $totalPercentage = $vatRates->sum('rate');

        if ($totalPercentage == 0) {
            return 0;
        }

        // Distribute purchase VAT proportionally based on rate percentage
        return ($totalPurchaseVat * $ratePercentage) / $totalPercentage;
    }

    /**
     * Get all journal VAT amounts in one query - OPTIMIZED
     */
    private function getAllJournalVatAmounts($filters, $vatRates)
    {
        // Collect all unique account IDs
        $accountIds = [];
        foreach ($vatRates as $vatRate) {
            if ($vatRate->sales_account_id) {
                $accountIds[] = $vatRate->sales_account_id;
            }
            if ($vatRate->purchase_account_id) {
                $accountIds[] = $vatRate->purchase_account_id;
            }
        }

        if (empty($accountIds)) {
            return [];
        }

        $query = DB::table('journal_entries')
            ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
            ->where('journal_entries.status', 'posted')
            ->whereIn('journal_entry_lines.chart_of_account_id', $accountIds);

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('journal_entries.fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('journal_entries.accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('journal_entries.entry_date', [$filters['from_date'], $filters['to_date']]);
        }

        $results = $query
            ->selectRaw('
                journal_entry_lines.chart_of_account_id,
                SUM(journal_entry_lines.credit_amount - journal_entry_lines.debit_amount) as vat_amount
            ')
            ->groupBy('journal_entry_lines.chart_of_account_id')
            ->get()
            ->keyBy('chart_of_account_id');

        $journalVatData = [];
        foreach ($vatRates as $vatRate) {
            $totalVat = 0;

            // Sales VAT (credit - debit)
            if ($vatRate->sales_account_id && $results->has($vatRate->sales_account_id)) {
                $totalVat += $results->get($vatRate->sales_account_id)->vat_amount ?? 0;
            }

            // Purchase VAT (debit - credit) - we need to negate the result
            if ($vatRate->purchase_account_id && $results->has($vatRate->purchase_account_id)) {
                $totalVat -= $results->get($vatRate->purchase_account_id)->vat_amount ?? 0;
            }

            $journalVatData[$vatRate->id] = $totalVat;
        }

        return $journalVatData;
    }

    /**
     * Get VAT from journal entries - OPTIMIZED (kept for backward compatibility)
     */
    private function getJournalVatAmount($filters, $vatRate)
    {
        $salesVatAccountId = $vatRate->sales_account_id;
        $purchaseVatAccountId = $vatRate->purchase_account_id;

        if (! $salesVatAccountId && ! $purchaseVatAccountId) {
            return 0;
        }

        $query = DB::table('journal_entries')
            ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
            ->where('journal_entries.status', 'posted');

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('journal_entries.fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('journal_entries.accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('journal_entries.entry_date', [$filters['from_date'], $filters['to_date']]);
        }

        $totalVat = 0;

        // Sales VAT (credit - debit)
        if ($salesVatAccountId) {
            $salesVat = (clone $query)
                ->where('journal_entry_lines.chart_of_account_id', $salesVatAccountId)
                ->selectRaw('SUM(journal_entry_lines.credit_amount - journal_entry_lines.debit_amount) as vat_amount')
                ->value('vat_amount');
            $totalVat += $salesVat ?? 0;
        }

        // Purchase VAT (debit - credit)
        if ($purchaseVatAccountId) {
            $purchaseVat = (clone $query)
                ->where('journal_entry_lines.chart_of_account_id', $purchaseVatAccountId)
                ->selectRaw('SUM(journal_entry_lines.debit_amount - journal_entry_lines.credit_amount) as vat_amount')
                ->value('vat_amount');
            $totalVat += $purchaseVat ?? 0;
        }

        return $totalVat;
    }

    /**
     * Get detailed VAT transactions - OPTIMIZED
     */
    private function getVatTransactions($filters, $vatRates)
    {
        $transactions = [];
        $seenTransactions = []; // Track unique transactions

        foreach ($vatRates as $vatRate) {
            // Get invoice VAT transactions
            $invoiceTransactions = $this->getInvoiceVatTransactions($filters, $vatRate->id);

            // Get journal VAT transactions
            $journalTransactions = $this->getJournalVatTransactions($filters, $vatRate);

            $transactions = array_merge($transactions, $invoiceTransactions, $journalTransactions);
        }

        // Get purchase VAT transactions (all purchases, not filtered by VAT rate)
        $purchaseTransactions = $this->getPurchaseVatTransactions($filters);
        $transactions = array_merge($transactions, $purchaseTransactions);

        // Remove duplicates based on reference, date, type, and source
        $uniqueTransactions = [];
        foreach ($transactions as $transaction) {
            $key = $transaction['reference'].'|'.$transaction['date'].'|'.$transaction['type'].'|'.$transaction['source'];
            if (! isset($seenTransactions[$key])) {
                $seenTransactions[$key] = true;
                $uniqueTransactions[] = $transaction;
            }
        }

        // Sort by date
        usort($uniqueTransactions, function ($a, $b) {
            return strtotime($a['date']) - strtotime($b['date']);
        });

        return $uniqueTransactions;
    }

    /**
     * Get detailed VAT transactions with pagination - OPTIMIZED
     */
    private function getVatTransactionsPaginated($filters, $vatRates, $page, $perPage)
    {
        $transactions = [];
        $seenTransactions = []; // Track unique transactions

        // Get all transactions first (we need to deduplicate before paginating)
        foreach ($vatRates as $vatRate) {
            // Get invoice VAT transactions
            $invoiceTransactions = $this->getInvoiceVatTransactions($filters, $vatRate->id);

            // Get journal VAT transactions
            $journalTransactions = $this->getJournalVatTransactions($filters, $vatRate);

            $transactions = array_merge($transactions, $invoiceTransactions, $journalTransactions);
        }

        // Get purchase VAT transactions (all purchases, not filtered by VAT rate)
        $purchaseTransactions = $this->getPurchaseVatTransactions($filters);
        $transactions = array_merge($transactions, $purchaseTransactions);

        // Remove duplicates based on reference, date, type, and source
        $uniqueTransactions = [];
        foreach ($transactions as $transaction) {
            $key = $transaction['reference'].'|'.$transaction['date'].'|'.$transaction['type'].'|'.$transaction['source'];
            if (! isset($seenTransactions[$key])) {
                $seenTransactions[$key] = true;
                $uniqueTransactions[] = $transaction;
            }
        }

        // Sort by date
        usort($uniqueTransactions, function ($a, $b) {
            return strtotime($a['date']) - strtotime($b['date']);
        });

        // Apply pagination
        $totalCount = count($uniqueTransactions);
        $totalPages = ceil($totalCount / $perPage);
        $offset = ($page - 1) * $perPage;
        $paginatedTransactions = array_slice($uniqueTransactions, $offset, $perPage);

        return [
            'transactions' => $paginatedTransactions,
            'pagination' => [
                'current_page' => $page,
                'per_page' => $perPage,
                'total_count' => $totalCount,
                'total_pages' => $totalPages,
                'has_more' => $page < $totalPages,
            ],
        ];
    }

    /**
     * Get invoice VAT transactions - OPTIMIZED
     */
    private function getInvoiceVatTransactions($filters, $vatRateId)
    {
        $query = DB::table('invoice_products')
            ->join('invoices', 'invoice_products.invoice_id', '=', 'invoices.id')
            ->join('clients', 'invoices.client_id', '=', 'clients.id')
            ->where('invoices.status', 1)
            ->where('invoice_products.vat_rate_id', $vatRateId)
            ->where('invoice_products.tax_amount', '>', 0);

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('invoices.fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('invoices.accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('invoices.invoice_date', [$filters['from_date'], $filters['to_date']]);
        }

        return $query
            ->selectRaw('
                invoices.invoice_no as reference,
                invoices.invoice_date as date,
                clients.name as client_name,
                invoice_products.tax_amount as vat_amount,
                "Sales" as type,
                "Invoice" as source
            ')
            ->get()
            ->map(function ($transaction) {
                return [
                    'reference' => $transaction->reference,
                    'date' => $transaction->date,
                    'client_supplier' => $transaction->client_name,
                    'vat_amount' => round($transaction->vat_amount, 2),
                    'type' => $transaction->type,
                    'source' => $transaction->source,
                ];
            })
            ->toArray();
    }

    /**
     * Get purchase VAT transactions - OPTIMIZED
     */
    private function getPurchaseVatTransactions($filters)
    {
        $query = DB::table('purchase_products')
            ->join('purchases', 'purchase_products.purchase_id', '=', 'purchases.id')
            ->join('suppliers', 'purchases.supplier_id', '=', 'suppliers.id')
            ->where('purchases.status', 1)
            ->where('purchase_products.tax_amount', '>', 0);

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('purchases.fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('purchases.accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('purchases.purchase_date', [$filters['from_date'], $filters['to_date']]);
        }

        return $query
            ->selectRaw('
                purchases.purchase_no as reference,
                purchases.purchase_date as date,
                suppliers.name as supplier_name,
                purchase_products.tax_amount as vat_amount,
                "Purchase" as type,
                "Purchase" as source
            ')
            ->get()
            ->map(function ($transaction) {
                return [
                    'reference' => $transaction->reference,
                    'date' => $transaction->date,
                    'client_supplier' => $transaction->supplier_name,
                    'vat_amount' => round($transaction->vat_amount, 2),
                    'type' => $transaction->type,
                    'source' => $transaction->source,
                ];
            })
            ->toArray();
    }

    /**
     * Get journal VAT transactions - OPTIMIZED
     */
    private function getJournalVatTransactions($filters, $vatRate)
    {
        $salesVatAccountId = $vatRate->sales_account_id;
        $purchaseVatAccountId = $vatRate->purchase_account_id;

        if (! $salesVatAccountId && ! $purchaseVatAccountId) {
            return [];
        }

        $query = DB::table('journal_entries')
            ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
            ->where('journal_entries.status', 'posted');

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('journal_entries.fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('journal_entries.accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('journal_entries.entry_date', [$filters['from_date'], $filters['to_date']]);
        }

        $transactions = [];

        // Sales VAT transactions
        if ($salesVatAccountId) {
            $salesTransactions = (clone $query)
                ->where('journal_entry_lines.chart_of_account_id', $salesVatAccountId)
                ->whereRaw('journal_entry_lines.credit_amount > journal_entry_lines.debit_amount')
                ->selectRaw('
                    journal_entries.reference,
                    journal_entries.entry_date as date,
                    journal_entry_lines.credit_amount - journal_entry_lines.debit_amount as vat_amount,
                    "Sales" as type,
                    "Journal Entry" as source
                ')
                ->get();

            foreach ($salesTransactions as $transaction) {
                $transactions[] = [
                    'reference' => $transaction->reference ?: 'Manual Entry',
                    'date' => $transaction->date,
                    'client_supplier' => 'N/A',
                    'vat_amount' => round($transaction->vat_amount, 2),
                    'type' => $transaction->type,
                    'source' => $transaction->source,
                ];
            }
        }

        // Purchase VAT transactions
        if ($purchaseVatAccountId) {
            $purchaseTransactions = (clone $query)
                ->where('journal_entry_lines.chart_of_account_id', $purchaseVatAccountId)
                ->whereRaw('journal_entry_lines.debit_amount > journal_entry_lines.credit_amount')
                ->selectRaw('
                    journal_entries.reference,
                    journal_entries.entry_date as date,
                    journal_entry_lines.debit_amount - journal_entry_lines.credit_amount as vat_amount,
                    "Purchase" as type,
                    "Journal Entry" as source
                ')
                ->get();

            foreach ($purchaseTransactions as $transaction) {
                $transactions[] = [
                    'reference' => $transaction->reference ?: 'Manual Entry',
                    'date' => $transaction->date,
                    'client_supplier' => 'N/A',
                    'vat_amount' => round($transaction->vat_amount, 2),
                    'type' => $transaction->type,
                    'source' => $transaction->source,
                ];
            }
        }

        return $transactions;
    }

    // return expense report data
    public function expenseReport(Request $request)
    {
        // Extract parameters using input() which works with both query params and POST data
        $categoryId = $request->input('category.id') ?? ($request->category['id'] ?? null);
        $categoryName = $request->input('category.name') ?? ($request->category['name'] ?? null);
        $subCategoryId = $request->input('subCategory.id') ?? ($request->subCategory['id'] ?? null);
        $subCategoryName = $request->input('subCategory.name') ?? ($request->subCategory['name'] ?? null);
        $fromDateRaw = $request->input('fromDate') ?? $request->fromDate;
        $toDateRaw = $request->input('toDate') ?? $request->toDate;

        // Parse dates from ISO 8601 format to date-only format (YYYY-MM-DD) for DATE column
        $fromDate = null;
        $toDate = null;
        if ($fromDateRaw) {
            $fromDate = Carbon::parse($fromDateRaw)->format('Y-m-d');
        }
        if ($toDateRaw) {
            $toDate = Carbon::parse($toDateRaw)->format('Y-m-d');
        }

        // Log for debugging
     $log =   [
            'categoryId' => $categoryId,
            'subCategoryId' => $subCategoryId,
            'fromDateRaw' => $fromDateRaw,
            'toDateRaw' => $toDateRaw,
            'fromDate' => $fromDate,
            'toDate' => $toDate,
            'all_request' => $request->all(),
        ];
       

        // Validate request - create category array for validation
        $categoryArray = $categoryId !== null ? ['id' => (int) $categoryId, 'name' => $categoryName ?? ''] : null;
        $subCategoryArray = $subCategoryId !== null ? ['id' => (int) $subCategoryId, 'name' => $subCategoryName ?? ''] : null;

        // Temporarily merge for validation
        $request->merge([
            'category' => $categoryArray,
            'subCategory' => $subCategoryArray,
        ]);

        $this->validate($request, [
            'category' => 'required',
            'subCategory' => ($categoryId && $categoryId != 0) ? 'required' : 'nullable',
        ]);

      
        $expenses = '';

        if ($categoryId !== null && $subCategoryId !== null) {
            if ($subCategoryId != 0) {
                $expenses = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount', 'user')
                  
                    ->where('sub_cat_id', $subCategoryId)
                    ->whereBetween('date', [$fromDate, $toDate])
                    ->get();
            } else {
                $expenses = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount')
                
                    ->whereBetween('date', [$fromDate, $toDate])
                    ->whereHas('expSubCategory', function ($newQuery) use ($categoryId) {
                        $newQuery->whereHas('expCategory', function ($newQuery) use ($categoryId) {
                            $newQuery->where('id', $categoryId);
                        });
                    })
                    ->get();
            }
        } else {
            $expenses = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount', 'user')
                
                ->whereBetween('date', [$fromDate, $toDate])
                ->get();
        }

     

        return ExpenseResource::collection($expenses);
    }

    // return items report data
    public function itemsReport(Request $request)
    {
        // validate request
        $this->validate($request, [
            'productName' => 'required|array',
            'productName.slug' => 'required|string',
        ]);

        try {
            // // Get authenticated user - try Auth facade first, then from request
            // $user = Auth::user();
            // if (! $user && $request->user()) {
            //     $user = $request->user();
            // }

            // // If user is still null, return error
            // if (! $user) {
            //     return $this->responseWithError('User not authenticated', [], 401);
            // }

            // $branchIds = $this->getUserBranchIds($user);

            $productSlug = $request->productName['slug'] ?? null;

            if (! $productSlug) {
                return $this->responseWithError('Product slug is required', [], 422);
            }

            $product = Product::where('slug', $productSlug)
                // ->whereIn('branch_id', $branchIds)
                ->with('proSubCategory.category', 'productUnit')
                ->first();

            if (! $product) {
                // Check if product exists but not in user's branches
                $productExists = Product::where('slug', $productSlug)->exists();
                $errorMessage = $productExists
                    ?? "Product with slug '{$productSlug}' not found.";

                return $this->responseWithError($errorMessage, [], 404);
            }

            // stock ins
            $purchaseIns = PurchaseProduct::with('purchase.supplier')
                ->where('product_id', $product->id)
                ->whereHas('purchase', function ($newQuery) use ($request) {
                    $newQuery->whereBetween('purchase_date', [$request->fromDate, $request->toDate]);
                })
                ->get();

            $invoiceReturnIns = InvoiceReturnProduct::with('invoiceReturn.invoice.client')
                ->where('product_id', $product->id)
                ->whereHas('invoiceReturn', function ($newQuery) use ($request) {
                    $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
                })
                ->get();

            $adjutmentIns = AdjustmentProduct::with('inventoryAdjustment')
                ->where('product_id', $product->id)
                ->where('type', 1)
                ->whereHas('inventoryAdjustment', function ($newQuery) use ($request) {
                    $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
                })
                ->get();

            $stockIns = [];
            // purchases
            foreach ($purchaseIns as $key => $inventoryIn) {
                $stockIns[$key]['quantity'] = $inventoryIn->quantity;
                $stockIns[$key]['date'] = $inventoryIn->purchase->purchase_date;
                $stockIns[$key]['supplier'] = $inventoryIn->purchase->supplier->name;
                $stockIns[$key]['price'] = $inventoryIn->purchase_price;
                $stockIns[$key]['type'] = 'Purchase';
                $stockIns[$key]['purchaseNo'] = $inventoryIn->purchase->purchase_no;
                $stockIns[$key]['code'] = config('config.purchasePrefix').'-'.$inventoryIn->purchase->purchase_no;
            }

            $length = count($stockIns);
            // Invoice returns
            foreach ($invoiceReturnIns as $key => $inventoryIn) {
                $stockIns[$length]['quantity'] = $inventoryIn->quantity;
                $stockIns[$length]['date'] = $inventoryIn->invoiceReturn->date;
                $stockIns[$length]['client'] = $inventoryIn->invoiceReturn->invoice->client->name;
                $stockIns[$length]['price'] = $inventoryIn->purchase_price;
                $stockIns[$length]['type'] = 'Invoice Return';
                $stockIns[$length++]['code'] = config('config.invoiceReturnPrefix').'-'.$inventoryIn->invoiceReturn->return_no;
            }

            $length = count($stockIns);
            // Inventory adjustments
            foreach ($adjutmentIns as $key => $inventoryIn) {
                $stockIns[$length]['code'] = config('config.adjustmentPrefix').'-'.$inventoryIn->inventoryAdjustment->code;
                $stockIns[$length]['quantity'] = $inventoryIn->quantity;
                $stockIns[$length]['date'] = $inventoryIn->inventoryAdjustment->date;
                $stockIns[$length]['reason'] = $inventoryIn->inventoryAdjustment->reason;
                $stockIns[$length]['price'] = $inventoryIn->purchase_price;
                $stockIns[$length++]['type'] = 'Adjustment';
            }

            // stock outs
            $adjutmentOuts = AdjustmentProduct::with('inventoryAdjustment')
                ->where('product_id', $product->id)
                ->where('type', 0)
                ->whereHas('inventoryAdjustment', function ($newQuery) use ($request) {
                    $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
                })
                ->get();

            $inventoryOuts = InvoiceProduct::with('invoice.client')
                ->where('product_id', $product->id)
                ->whereHas('invoice', function ($newQuery) use ($request) {
                    $newQuery->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
                })
                ->get();

            $purchaseReturnOuts = PurchaseReturnProduct::with('purchaseReturn.purchase.supplier')
                ->where('product_id', $product->id)
                ->whereHas('purchaseReturn', function ($newQuery) use ($request) {
                    $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
                })
                ->get();

            $stockOuts = [];
            // Invoice sales
            foreach ($inventoryOuts as $key => $inventoryOut) {
                $stockOuts[$key]['quantity'] = $inventoryOut->quantity;
                $stockOuts[$key]['invoiceNo'] = $inventoryOut->invoice->invoice_no;
                $stockOuts[$key]['date'] = $inventoryOut->invoice->invoice_date;
                $stockOuts[$key]['price'] = $inventoryOut->sale_price;
                $stockOuts[$key]['client'] = $inventoryOut->invoice->client->name;
                $stockOuts[$key]['code'] = config('config.invoicePrefix').'-'.$inventoryOut->invoice->invoice_no;
                $stockOuts[$key]['type'] = 'Invoice';
            }

            $length = count($stockOuts);
            // Inventory adjustments
            foreach ($adjutmentOuts as $key => $adjutmentOut) {
                $stockOuts[$length]['code'] = config('config.adjustmentPrefix').'-'.$adjutmentOut->inventoryAdjustment->code;
                $stockOuts[$length]['quantity'] = $adjutmentOut->quantity;
                $stockOuts[$length]['date'] = $adjutmentOut->inventoryAdjustment->date;
                $stockOuts[$length]['reason'] = $adjutmentOut->inventoryAdjustment->reason;
                $stockOuts[$length]['price'] = $adjutmentOut->purchase_price;
                $stockOuts[$length++]['type'] = 'Adjustment';
            }

            $length = count($stockOuts);
            // Purchase returns
            foreach ($purchaseReturnOuts as $key => $purchaseReturnOut) {
                $stockOuts[$length]['code'] = config('config.purchaseReturnPrefix').'-'.$purchaseReturnOut->purchaseReturn->code;
                $stockOuts[$length]['quantity'] = $purchaseReturnOut->quantity;
                $stockOuts[$length]['date'] = $purchaseReturnOut->purchaseReturn->date;
                $stockOuts[$length]['reason'] = $purchaseReturnOut->purchaseReturn->reason;
                $stockOuts[$length]['supplier'] = $purchaseReturnOut->purchaseReturn->purchase->supplier->name;
                $stockOuts[$length]['price'] = $purchaseReturnOut->purchase_price;
                $stockOuts[$length++]['type'] = 'Purchase Return';
            }

            return [
                'product' => new ProductResource($product),
                'stockIns' => $stockIns,
                'stockOuts' => $stockOuts,
            ];
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    // return inventory report data
    public function inventoryReport(Request $request,$user = null)
    {
        // validate request
        $this->validate($request, [
            'category' => 'required',
            'subCategory' => 'required',
            'itemName' => 'required',
        ]);

        $user = $user ?? Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        $allProducts = [];

        if (($request->category['slug'] == 'all' && $request->subCategory['slug'] == 'all' && $request->itemName['slug'] == 'all')) {
            $products = Product::whereIn('branch_id', $branchIds)
                ->orderBy('code', 'ASC')
                ->get();
            $allProducts = $this->generateItemsArray($products, $request, $branchIds);
        } elseif (($request->category['slug'] != 'all' && $request->subCategory['slug'] == 'all' && $request->itemName['slug'] == 'all')) {
            $catId = $request->category['id'];
            $products = Product::with('proSubCategory.category')
                ->whereIn('branch_id', $branchIds)
                ->whereHas('proSubCategory', function ($newQuery) use ($catId) {
                    $newQuery->whereHas('category', function ($newQuery) use ($catId) {
                        $newQuery->where('id', $catId);
                    });
                })
                ->get();
            $allProducts = $this->generateItemsArray($products, $request, $branchIds);
        } elseif (($request->category['slug'] == 'all' && $request->subCategory['slug'] != 'all' && $request->itemName['slug'] == 'all') || ($request->category['slug'] != 'all' && $request->subCategory['slug'] != 'all' && $request->itemName['slug'] == 'all')) {
            $products = Product::where('sub_cat_id', $request->subCategory['id'])
                ->whereIn('branch_id', $branchIds)
                ->orderBy('code', 'ASC')
                ->get();
            $allProducts = $this->generateItemsArray($products, $request, $branchIds);
        } else {
            $products = Product::where('slug', $request->itemName['slug'])
                ->whereIn('branch_id', $branchIds)
                ->with('proSubCategory.category', 'productUnit')
                ->get();
            $allProducts = $this->generateItemsArray($products, $request, $branchIds);
        }

        return $allProducts;
    }

    // generate invetory items array
    public function generateItemsArray($products, $request, $branchIds = null)
    {
        if ($branchIds === null) {
            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);
        }

        $allProducts = [];
        foreach ($products as $key => $product) {
            // stock ins
            $purchaseIns = PurchaseProduct::with('purchase.supplier')
                ->where('product_id', $product->id)
                ->whereHas('purchase', function ($newQuery) use ($request, $branchIds) {
                    $newQuery->whereIn('branch_id', $branchIds)
                        ->whereBetween('purchase_date', [$request->fromDate, $request->toDate]);
                })
                ->sum('quantity');

            $invoiceReturnIns = InvoiceReturnProduct::with('invoiceReturn.invoice.client')
                ->where('product_id', $product->id)
                ->whereHas('invoiceReturn', function ($newQuery) use ($request, $branchIds) {
                    $newQuery->whereIn('branch_id', $branchIds)
                        ->whereBetween('date', [$request->fromDate, $request->toDate]);
                })
                ->sum('quantity');

            $adjutmentIns = AdjustmentProduct::with('inventoryAdjustment')
                ->where('product_id', $product->id)
                ->where('type', 1)
                ->whereHas('inventoryAdjustment', function ($newQuery) use ($request, $branchIds) {
                    $newQuery->whereIn('branch_id', $branchIds)
                        ->whereBetween('date', [$request->fromDate, $request->toDate]);
                })
                ->sum('quantity');

            // stock outs
            $adjutmentOuts = AdjustmentProduct::with('inventoryAdjustment')
                ->where('product_id', $product->id)
                ->where('type', 0)
                ->whereHas('inventoryAdjustment', function ($newQuery) use ($request, $branchIds) {
                    $newQuery->whereIn('branch_id', $branchIds)
                        ->whereBetween('date', [$request->fromDate, $request->toDate]);
                })
                ->sum('quantity');

            $inventoryOuts = InvoiceProduct::with('invoice.client')
                ->where('product_id', $product->id)
                ->whereHas('invoice', function ($newQuery) use ($request, $branchIds) {
                    $newQuery->whereIn('branch_id', $branchIds)
                        ->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
                })
                ->sum('quantity');

            $purchaseReturnOuts = PurchaseReturnProduct::with('purchaseReturn.purchase.supplier')
                ->where('product_id', $product->id)
                ->whereHas('purchaseReturn', function ($newQuery) use ($request, $branchIds) {
                    $newQuery->whereIn('branch_id', $branchIds)
                        ->whereBetween('date', [$request->fromDate, $request->toDate]);
                })
                ->sum('quantity');

            $stockIns = $purchaseIns + $invoiceReturnIns + $adjutmentIns;
            $stockOuts = $adjutmentOuts + $inventoryOuts + $purchaseReturnOuts;
            if ($purchaseIns > 0 || $invoiceReturnIns > 0 || $adjutmentIns > 0 || $adjutmentOuts > 0 || $inventoryOuts > 0 || $purchaseReturnOuts > 0) {
                $allProducts[$key]['productName'] = $product->name;
                $allProducts[$key]['productCode'] = $product->code;
                $allProducts[$key]['stockIn'] = $stockIns;
                $allProducts[$key]['stockOut'] = $stockOuts;
                $allProducts[$key]['availableStock'] = $product->inventory_count;
            }
        }

        return $allProducts;
    }

    // get supplier due reports
    public function supplierDueReport(Request $request)
    {
        try {
            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);

            $query = Supplier::with('purchases.purchaseReturn')
                ->whereIn('branch_id', $branchIds);

            return SupplierResource::collection($query->latest()->paginate($request->perPage));
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    // get client due reports
    public function clientDueReport(Request $request)
    {
        try {
            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);

            $query = Client::query()
                ->whereIn('branch_id', $branchIds);

            return ClientResource::collection($query->latest()->paginate($request->perPage));
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    // get sales by user report
    public function salesByUserReport(Request $request)
    {
        $this->validate($request, [
            'user' => 'required',
        ]);
        try {
            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);

            $query = Invoice::with('client', 'invoicePayments', 'invoiceReturn', 'user')
                ->whereIn('branch_id', $branchIds);

            $term = $request->user['id'];
            if ($request->fromDate && $request->toDate) {
                $query = $query->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
            }

            if ($term !== 0) {
                $query = $query->where(function ($query) use ($term) {
                    $query->WhereHas('user', function ($newQuery) use ($term) {
                        $newQuery->where('id', $term);
                    });
                });
            }

            return InvoiceListResource::collection($query->latest()->get());
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    // get sales collection by user report
    public function collectionByUserReport(Request $request)
    {
        $this->validate($request, [
            'user' => 'required',
        ]);

        try {
            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);

            $query = InvoicePayment::with('user.employee', 'invoice', 'invoicePaymentTransaction')
                ->whereIn('branch_id', $branchIds);

            $term = $request->user['id'];
            if ($request->fromDate && $request->toDate) {
                $query = $query->whereBetween('date', [$request->fromDate, $request->toDate]);
            }

            if ($term !== 0) {
                $query = $query->where(function ($query) use ($term) {
                    $query->WhereHas('user', function ($newQuery) use ($term) {
                        $newQuery->where('id', $term);
                    });
                });
            }

            return InvoicePaymentResource::collection($query->latest()->get());
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    // get today report
    public function todayReport()
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        $today = Carbon::today();
        $invoices = Invoice::with('invoiceProducts')
            ->whereIn('branch_id', $branchIds)
            ->whereDate('created_at', $today)
            ->where('status', true)
            ->get();

        $productList = [];

        foreach ($invoices as $invoice) {
            foreach ($invoice->invoiceProducts as $product) {
                $productId = $product->product_id;
                $quantity = $product->quantity;

                // Store product ID and quantity in the array
                $productList[] = ['product_id' => $productId, 'quantity' => $quantity];
            }
        }

        $products = Product::whereIn('branch_id', $branchIds)->where('status', true)->get();
        $simulatedInventoryCounts = [];
        $simulatedInventoryCountsBySalePrice = [];

        // Initialize simulated inventory counts for all products
        foreach ($products as $product) {
            $productId = $product->id;

            // Initialize inventory count
            $simulatedInventoryCounts[] = [
                'product_id' => $productId,
                'quantity' => $product->inventory_count,
                'purchase_price' => $product->purchase_price,
            ];

            $simulatedInventoryCountsBySalePrice[] = [
                'product_id' => $productId,
                'quantity' => $product->inventory_count,
                'regular_price' => $product->regular_price,
            ];
        }

        // Update inventory counts based on $productList
        foreach ($productList as $item) {
            $productId = $item['product_id'];
            $quantity = $item['quantity'];

            // Find the product in the simulated inventory counts
            foreach ($simulatedInventoryCounts as &$count) {
                if ($count['product_id'] === $productId) {
                    $count['quantity'] += $quantity;
                    break;
                }
            }

            foreach ($simulatedInventoryCountsBySalePrice as &$count) {
                if ($count['product_id'] === $productId) {
                    $count['quantity'] += $quantity;
                    break;
                }
            }
        }

        // calculate the opening stock price by sale price
        $openingStockBySalePrice = 0;
        foreach ($simulatedInventoryCountsBySalePrice as $InventoryCountsBySalePrice) {
            $quantity = $InventoryCountsBySalePrice['quantity'] ?? 0;
            $regularPrice = $InventoryCountsBySalePrice['regular_price'] ?? 0;
            $openingStockBySalePrice += ($quantity * $regularPrice);
        }

        // calculate the opening stock price by purchase price
        $openingStockByPurchasePrice = 0;
        foreach ($simulatedInventoryCounts as $InventoryCountByPurchasePrice) {
            $quantity = $InventoryCountByPurchasePrice['quantity'] ?? 0;
            $purchasePrice = $InventoryCountByPurchasePrice['purchase_price'] ?? 0;
            $openingStockByPurchasePrice += ($quantity * $purchasePrice);
        }

        // calculate the closing stock price by purchase price
        $closingStockByPurchasePrice = 0;
        foreach ($products as $product) {
            $closingStockByPurchasePrice += $product->inventory_count * $product->purchase_price;
        }

        // calculate the closing stock price by sale price
        $closingStockBySalePrice = 0;
        foreach ($products as $product) {
            $closingStockBySalePrice += $product->inventory_count * $product->regular_price;
        }

        // invoice sales for current date
        $invoiceSales = Invoice::whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('invoice_date', DB::raw('CURDATE()'))->sum('sub_total');

        // invoice discount for current date
        $invoiceDiscount = Invoice::whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('invoice_date', DB::raw('CURDATE()'))->sum('discount');

        // invoice return for current date
        $invoiceReturn = InvoiceReturn::whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('date', now()->format('Y-m-d'))->sum('total_return');

        // Total purchases for current date
        $totalPurchase = Purchase::selectRaw('(sub_total + IFNULL(transport, 0) + (sub_total * (vat_rates.rate / 100))) - IFNULL(discount, 0) AS total_value')
            ->leftJoin('vat_rates', 'purchases.tax_id', '=', 'vat_rates.id')
            ->whereIn('purchases.branch_id', $branchIds)
            ->where('purchases.status', 1)
            ->whereDate('purchases.purchase_date', DB::raw('CURDATE()'))
            ->get()
            ->sum('total_value');

        $productRurchasePriceToSalePriceDifference = Purchase::with('purchaseProducts.product.productUnit')
            ->whereIn('branch_id', $branchIds)
            ->where('purchase_date', DB::raw('CURDATE()'))
            ->first();
        if ($productRurchasePriceToSalePriceDifference) {
            $purchaseProducts = [];
            foreach ($productRurchasePriceToSalePriceDifference->purchaseProducts as $purchaseProduct) {
                $purchaseProducts[] = [
                    'product_id' => $purchaseProduct->product_id,
                    'quantity' => $purchaseProduct->quantity,
                ];
            }
        }

        $totalDifferenceSumOfTodayPurchaseProducts = 0;
        if ($productRurchasePriceToSalePriceDifference) {
            $purchaseProductsDetails = [];
            foreach ($purchaseProducts as $purchaseProduct) {
                $product = Product::find($purchaseProduct['product_id']);
                if ($product) {
                    $difference = $product->regular_price - $product->purchase_price;
                    $totalDifference = $difference * $purchaseProduct['quantity'];
                    $purchaseProductsDetails[] = [
                        'product_id' => $purchaseProduct['product_id'],
                        'quantity' => $purchaseProduct['quantity'],
                        'total_difference' => $totalDifference,
                    ];
                }
            }

            foreach ($purchaseProductsDetails as $purchaseProductDetail) {
                $totalDifferenceSumOfTodayPurchaseProducts += $purchaseProductDetail['total_difference'];
            }
        }

        // Total purchases discount for current date
        $todayPurchaseDiscount = Purchase::whereIn('branch_id', $branchIds)
            ->where('status', 1)
            ->where('purchase_date', now()->format('Y-m-d'))
            ->sum('discount');

        // purchase return for current date
        $purchaseReturn = PurchaseReturn::whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('date', now()->format('Y-m-d'))->sum('total_return');

        // today purchase return by sale price
        $todayPurchaseReturns = PurchaseReturn::with('purchaseReturnProducts')
            ->whereIn('branch_id', $branchIds)
            ->where('status', 1)
            ->whereDate('date', now()->format('Y-m-d'))
            ->get();
        if ($todayPurchaseReturns) {
            $todayPurchaseReturnProducts = [];
            foreach ($todayPurchaseReturns as $todayPurchaseReturn) {
                foreach ($todayPurchaseReturn->purchaseReturnProducts as $purchaseReturnProduct) {
                    $todayPurchaseReturnProducts[] = [
                        'product_id' => $purchaseReturnProduct->product_id,
                        'quantity' => $purchaseReturnProduct->quantity,
                    ];
                }
            }
        }

        $todayPurchaseReturnsTotalBySalePrice = 0;
        if ($todayPurchaseReturns) {
            $todayPurchaseReturnProductsDetails = [];
            foreach ($todayPurchaseReturnProducts as $todayPurchaseReturnProduct) {
                $product = Product::find($todayPurchaseReturnProduct['product_id']);
                if ($product) {
                    $productRegularPrice = $product->regular_price;
                    $todayPurchaseReturnProductsDetails[] = [
                        'product_id' => $todayPurchaseReturnProduct['product_id'],
                        'quantity' => $todayPurchaseReturnProduct['quantity'],
                        'product_regular_price' => $productRegularPrice,
                    ];
                }
            }

            foreach ($todayPurchaseReturnProductsDetails as $todayPurchaseReturnProductsDetail) {
                $todayPurchaseReturnsTotalBySalePrice += $todayPurchaseReturnProductsDetail['product_regular_price'];
            }
        }

        // general expenses for current date
        $expenses = Expense::select(DB::raw('SUM(account_transactions.amount) As expAmount'))
            ->leftJoin('account_transactions', 'account_transactions.id', '=', 'expenses.transaction_id')
            ->whereIn('expenses.branch_id', $branchIds)
            ->where('expenses.status', 1)
            ->whereDate('expenses.date', DB::raw('CURDATE()'))
            ->first();

        // payrolls for current date
        $payrolls = Payroll::select(DB::raw('SUM(account_transactions.amount) As payrollAmount'))
            ->leftJoin('account_transactions', 'account_transactions.id', '=', 'payrolls.transaction_id')
            ->whereIn('payrolls.branch_id', $branchIds)
            ->where('payrolls.status', 1)
            ->whereDate('payrolls.salary_date', DB::raw('CURDATE()'))
            ->first();

        // term loan interests for current date
        $loanInterest = LoanPayment::whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('date', DB::raw('CURDATE()'))->sum('interest');

        // daily depreciation
        $assetDepriciation = Asset::where('status', 1)
            ->where('depreciation', 1)
            ->where('expire_date', '>=', date('Y-m-d'))
            ->whereIn('branch_id', $branchIds)
            ->sum('daily_depreciation');

        // start for gross and net profit

        $productsForGrossProfits = [];
        $inventoryOuts = InvoiceProduct::with('invoice', 'product')->whereHas('invoice', function ($newQuery) use ($today, $branchIds) {
            $newQuery->whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('invoice_date', $today);
        })->groupBy('product_id')
            ->selectRaw('sum(quantity) as sumQty, product_id')
            ->selectRaw('sum(purchase_price * quantity) as purchasePrice, product_id')
            ->selectRaw('sum(sale_price * quantity) as salePrice, product_id')
            ->get();

        foreach ($inventoryOuts as $key => $inventoryOut) {
            $returnQty = InvoiceReturnProduct::with('invoiceReturn.invoice')->whereHas('invoiceReturn', function ($newQuery) use ($today, $branchIds) {
                $newQuery->whereIn('branch_id', $branchIds)->whereHas('invoice', function ($anotherQuery) use ($today, $branchIds) {
                    $anotherQuery->whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('invoice_date', $today);
                });
            })->where('product_id', $inventoryOut->product->id)->sum('quantity');

            $currentQty = $inventoryOut->sumQty - $returnQty;
            $avgPurchasePrice = $inventoryOut->purchasePrice / $inventoryOut->sumQty;
            $avgSalePrice = $inventoryOut->salePrice / $inventoryOut->sumQty;
            $profitOrLoss = ($avgSalePrice * $currentQty) - ($avgPurchasePrice * $currentQty);

            $productsForGrossProfits[$key]['itemCode'] = $inventoryOut->product->code;
            $productsForGrossProfits[$key]['code'] = $inventoryOut->product->code;
            $productsForGrossProfits[$key]['itemName'] = $inventoryOut->product->name;
            $productsForGrossProfits[$key]['avgPurchasePrice'] = round($avgPurchasePrice, 2);
            $productsForGrossProfits[$key]['avgSalePrice'] = round($avgSalePrice, 2);
            $productsForGrossProfits[$key]['invoiceQty'] = $inventoryOut->sumQty;
            $productsForGrossProfits[$key]['currentQty'] = $currentQty;
            $productsForGrossProfits[$key]['returnQty'] = $returnQty > 0 ? $returnQty : 0;
            $productsForGrossProfits[$key]['profitOrLoss'] = round($profitOrLoss, 2);
        }

        $grossProfitForToday = 0;
        foreach ($productsForGrossProfits as $productsForGrossProfit) {
            $grossProfitForToday += $productsForGrossProfit['profitOrLoss'];
        }

        $totalSales = Invoice::whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('invoice_date', $today)->sum('sub_total');

        // inventory positive adjustment
        $posAdjustment = AdjustmentProduct::with('inventoryAdjustment')->whereHas('inventoryAdjustment', function ($newQuery) use ($today, $branchIds) {
            $newQuery->whereIn('branch_id', $branchIds)->where('status', 1)->where('type', 1)->whereDate('date', $today);
        })->get()->sum(function ($row) {
            return $row->purchase_price * $row->quantity;
        });

        // cost of goods sold between a given date range
        $invoicePurchasePrice = InvoiceProduct::with('invoice')->whereHas('invoice', function ($newQuery) use ($today, $branchIds) {
            $newQuery->whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('invoice_date', $today);
        })->get()->sum(function ($row) {
            return $row->purchase_price * $row->quantity;
        });

        $returnPurchasePrice = InvoiceReturnProduct::with('invoiceReturn.invoice')->whereHas('invoiceReturn', function ($newQuery) use ($today, $branchIds) {
            $newQuery->whereIn('branch_id', $branchIds)->whereHas('invoice', function ($anotherQuery) use ($today, $branchIds) {
                $anotherQuery->whereIn('branch_id', $branchIds)->where('status', 1)->whereDate('invoice_date', $today);
            });
        })->get()->sum(function ($row) {
            return $row->purchase_price * $row->quantity;
        });
        $costOfGoodsSold = $invoicePurchasePrice - $returnPurchasePrice;

        // inventory negative adjustment
        $negAdjustment = AdjustmentProduct::with('inventoryAdjustment')->whereHas('inventoryAdjustment', function ($newQuery) use ($today, $branchIds) {
            $newQuery->whereIn('branch_id', $branchIds)->where('status', 1)->where('type', 0)->whereDate('date', $today);
        })->get()->sum(function ($row) {
            return $row->purchase_price * $row->quantity;
        });

        $grossProfitOrLoss = round(($totalSales + $posAdjustment - ($costOfGoodsSold + $negAdjustment)), 2);
        $expensesAmount = $expenses->expAmount ?? 0;
        $payrollsAmount = $payrolls->payrollAmount ?? 0;
        $inTotalExpense = round(($expensesAmount + $payrollsAmount + $loanInterest + $assetDepriciation), 2);
        $netProfitOrLoss = round(($grossProfitForToday - $inTotalExpense), 2);
        $openingStockByPurchasePriceFinal = ($openingStockByPurchasePrice - $returnPurchasePrice) + $purchaseReturn - $totalPurchase;
        $openingStockBySalePriceFinal = $openingStockBySalePrice + $todayPurchaseReturnsTotalBySalePrice - $invoiceReturn - $totalPurchase - $totalDifferenceSumOfTodayPurchaseProducts;

        // end for gross and net profit

        return [
            'invoiceSales' => round($invoiceSales, 2),
            'invoiceDiscount' => round($invoiceDiscount, 2),
            'invoiceReturn' => round($invoiceReturn, 2),
            'totalPurchase' => round($totalPurchase, 0),
            'purchaseReturn' => round($purchaseReturn, 0),
            'todayPurchaseDiscount' => round($todayPurchaseDiscount, 0),
            'expenses' => round($expensesAmount, 2),
            'payrolls' => round($payrollsAmount, 2),
            'loanInterest' => round($loanInterest, 2),
            'assetDepriciation' => round($assetDepriciation, 2),
            'openingStockByPurchasePrice' => round($openingStockByPurchasePriceFinal, 2),
            'openingStockBySalePrice' => round($openingStockBySalePriceFinal, 2),
            'closingStockByPurchasePrice' => round($closingStockByPurchasePrice, 2),
            'closingStockBySalePrice' => round($closingStockBySalePrice, 2),
            'grossProfit' => round($grossProfitForToday, 2),
            'netProfit' => round($netProfitOrLoss, 2),
        ];
    }

    /**
     * Get sub chart of accounts for a selected parent account
     */
    public function getSubChartOfAccounts(Request $request)
    {
        try {
            $this->validate($request, [
                'parent_account_id' => 'required|exists:chart_of_accounts,id',
                'search' => 'nullable|string|max:255',
            ]);

            $parentAccountId = $request->parent_account_id;
            $search = $request->search;

            $branchId = Auth::user()->default_branch_id ?? null;

            // Get the parent account with complete hierarchy
            $parentAccount = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with($this->getCompleteHierarchyEagerLoad())
                ->findOrFail($parentAccountId);

            // Get all descendants of the parent account (complete hierarchy)
            $allDescendants = $this->getAllDescendants($parentAccount);

            // Build query for sub accounts (parent + all descendants)
            $query = \App\Models\ChartOfAccount::with('type')
                ->forBranch($branchId)
                ->whereIn('id', array_merge([$parentAccountId], $allDescendants))
                ->where('is_active', true);

            // Apply search filter if provided
            if ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                        ->orWhere('code', 'like', "%{$search}%");
                });
            }

            $subAccounts = $query->orderBy('code')->orderBy('name')->get();

            // Format the response
            $formattedAccounts = $subAccounts->map(function ($account) use ($parentAccountId) {
                $translatedName = method_exists($account, 'getTranslatedField') ? $account->getTranslatedField('name') : $account->name;

                return [
                    'id' => $account->id,
                    'name' => $translatedName,
                    'code' => $account->code,
                    'type' => $account->type ? $account->type->name : 'Unknown',
                    'display_name' => "[{$account->code}] {$translatedName}",
                    'is_parent' => $account->id == $parentAccountId,
                    'parent_id' => $account->parent_id,
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $formattedAccounts,
                'parent_account' => [
                    'id' => $parentAccount->id,
                    'name' => $parentAccount->name,
                    'code' => $parentAccount->code,
                    'type' => $parentAccount->type ? $parentAccount->type->name : 'Unknown',
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error retrieving sub chart of accounts',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get Account Statement report data with chunked loading
     */
    public function accountStatement(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'chart_of_account_id' => 'required|exists:chart_of_accounts,id',
                'sub_chart_of_account_id' => 'nullable|exists:chart_of_accounts,id',
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
                'page' => 'nullable|integer|min:1',
                'per_page' => 'nullable|integer|min:1|max:100',
            ]);

            $chartOfAccountId = $request->chart_of_account_id;
            $subChartOfAccountId = $request->sub_chart_of_account_id;
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;
            $page = $request->page ?? 1;
            $perPage = $request->per_page ?? 10; // Default to 10 rows per page

            // Determine which account to use for the report
            $reportAccountId = $subChartOfAccountId ?: $chartOfAccountId;
            $branchId = Auth::user()->default_branch_id ?? null;

           

            // Get chart of account details
            $chartOfAccount = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with('type')
                ->findOrFail($chartOfAccountId);
            $reportAccount = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with('type')
                ->findOrFail($reportAccountId);

            // Build date range query
            $dateQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->whereHas('lines', function ($query) use ($reportAccountId) {
                    $query->where('chart_of_account_id', $reportAccountId);
                });

            // Apply filters
            if ($fiscalYearId) {
                $dateQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $dateQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $dateQuery->whereBetween('entry_date', [$fromDate, $toDate]);
            }

            // Get total count for pagination
            $totalCount = $dateQuery->count();

            // Get journal entries with pagination
            $journalEntries = $dateQuery
                ->with(['lines' => function ($query) use ($reportAccountId) {
                    $query->where('chart_of_account_id', $reportAccountId);
                }])
                ->orderBy('entry_date', 'desc')
                ->orderBy('id', 'desc')
                ->skip(($page - 1) * $perPage)
                ->take($perPage)
                ->get();

            // Calculate opening balance (balance before the date range) - OPTIMIZED
            $openingBalanceQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->where('journal_entry_lines.chart_of_account_id', $reportAccountId);

            if ($fiscalYearId) {
                $fiscalYear = \App\Models\FiscalYear::findOrFail($fiscalYearId);
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $fiscalYear->start_date);
            } elseif ($accountingPeriodId) {
                $accountingPeriod = \App\Models\AccountingPeriod::findOrFail($accountingPeriodId);
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $accountingPeriod->start_date);
            } elseif ($fromDate) {
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $fromDate);
            }

            $openingTotals = $openingBalanceQuery
                ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
                ->first();

            $openingDebits = $openingTotals->total_debits ?? 0;
            $openingCredits = $openingTotals->total_credits ?? 0;

            $openingBalance = $openingDebits - $openingCredits;

            // Calculate running balance for each entry
            $runningBalance = $openingBalance;
            $processedEntries = [];

            foreach ($journalEntries as $entry) {
                $entryLines = $entry->lines->where('chart_of_account_id', $reportAccountId);

                if ($entryLines->count() > 0) {
                    // If there are multiple lines for the same account, show each one separately
                    foreach ($entryLines as $entryLine) {
                        $debitAmount = $entryLine->debit_amount;
                        $creditAmount = $entryLine->credit_amount;
                        $netAmount = $debitAmount - $creditAmount;
                        $runningBalance += $netAmount;

                        $processedEntries[] = [
                            'id' => $entry->id.'_'.$entryLine->id, // Unique ID for each line
                            'entry_number' => $entry->formatted_entry_number,
                            'entry_date' => $entry->entry_date->format('Y-m-d'),
                            'reference' => $entry->reference,
                            'description' => $entry->description,
                            'debit_amount' => round($debitAmount, 2),
                            'credit_amount' => round($creditAmount, 2),
                            'net_amount' => round($netAmount, 2),
                            'running_balance' => round($runningBalance, 2),
                            'balance_type' => $runningBalance >= 0 ? 'Debit' : 'Credit',
                            'source_type' => $entry->source_type,
                            'source_id' => $entry->source_id,
                        ];
                    }
                }
            }

            // Calculate period totals - OPTIMIZED
            $periodTotalsQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->where('journal_entry_lines.chart_of_account_id', $reportAccountId);

            // Apply same filters as main query
            if ($fiscalYearId) {
                $periodTotalsQuery->where('journal_entries.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $periodTotalsQuery->where('journal_entries.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $periodTotalsQuery->whereBetween('journal_entries.entry_date', [$fromDate, $toDate]);
            }

            $periodTotals = $periodTotalsQuery
                ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
                ->first();

            $periodDebits = $periodTotals->total_debits ?? 0;
            $periodCredits = $periodTotals->total_credits ?? 0;

            $periodNet = $periodDebits - $periodCredits;
            $closingBalance = $openingBalance + $periodNet;

            return [
                'success' => true,
                'data' => [
                    'chart_of_account' => [
                        'id' => $chartOfAccount->id,
                        'code' => $chartOfAccount->code,
                        'name' => $chartOfAccount->name,
                        'type' => $chartOfAccount->type->name ?? 'Unknown',
                    ],
                    'report_account' => [
                        'id' => $reportAccount->id,
                        'code' => $reportAccount->code,
                        'name' => $reportAccount->name,
                        'type' => $reportAccount->type->name ?? 'Unknown',
                    ],
                    'filters' => [
                        'fiscal_year_id' => $fiscalYearId,
                        'accounting_period_id' => $accountingPeriodId,
                        'from_date' => $fromDate,
                        'to_date' => $toDate,
                    ],
                    'summary' => [
                        'opening_balance' => round($openingBalance, 2),
                        'opening_balance_type' => $openingBalance >= 0 ? 'Debit' : 'Credit',
                        'period_debits' => round($periodDebits, 2),
                        'period_credits' => round($periodCredits, 2),
                        'period_net' => round($periodNet, 2),
                        'closing_balance' => round($closingBalance, 2),
                        'closing_balance_type' => $closingBalance >= 0 ? 'Debit' : 'Credit',
                    ],
                    'entries' => $processedEntries,
                    'pagination' => [
                        'current_page' => $page,
                        'per_page' => $perPage,
                        'total_count' => $totalCount,
                        'total_pages' => ceil($totalCount / $perPage),
                        'has_more' => $page < ceil($totalCount / $perPage),
                    ],
                ],
            ];
        } catch (\Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get Account Statement report data for printing (all data, no pagination)
     */
    public function accountStatementForPrint(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'chart_of_account_id' => 'required|exists:chart_of_accounts,id',
                'sub_chart_of_account_id' => 'nullable|exists:chart_of_accounts,id',
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            $chartOfAccountId = $request->chart_of_account_id;
            $subChartOfAccountId = $request->sub_chart_of_account_id;
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Determine which account to use for the report
            $reportAccountId = $subChartOfAccountId ?: $chartOfAccountId;
            $branchId = Auth::user()->default_branch_id ?? null;

            // Get chart of account details
            $chartOfAccount = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with('type')
                ->findOrFail($chartOfAccountId);
            $reportAccount = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with('type')
                ->findOrFail($reportAccountId);

            // Build date range query - NO PAGINATION
            $dateQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->whereHas('lines', function ($query) use ($reportAccountId) {
                    $query->where('chart_of_account_id', $reportAccountId);
                });

            // Apply filters
            if ($fiscalYearId) {
                $dateQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $dateQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $dateQuery->whereBetween('entry_date', [$fromDate, $toDate]);
            }

            // Get ALL journal entries - NO PAGINATION
            $journalEntries = $dateQuery
                ->with(['lines' => function ($query) use ($reportAccountId) {
                    $query->where('chart_of_account_id', $reportAccountId);
                }])
                ->orderBy('entry_date', 'desc')
                ->orderBy('id', 'desc')
                ->get(); // Get ALL entries

            // Calculate opening balance (balance before the date range) - OPTIMIZED
            $openingBalanceQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->where('journal_entry_lines.chart_of_account_id', $reportAccountId);

            if ($fiscalYearId) {
                $fiscalYear = \App\Models\FiscalYear::findOrFail($fiscalYearId);
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $fiscalYear->start_date);
            } elseif ($accountingPeriodId) {
                $accountingPeriod = \App\Models\AccountingPeriod::findOrFail($accountingPeriodId);
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $accountingPeriod->start_date);
            } elseif ($fromDate) {
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $fromDate);
            }

            $openingTotals = $openingBalanceQuery
                ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
                ->first();

            $openingDebits = $openingTotals->total_debits ?? 0;
            $openingCredits = $openingTotals->total_credits ?? 0;
            $openingBalance = $openingDebits - $openingCredits;

            // Process journal entries
            $processedEntries = [];
            $runningBalance = $openingBalance;

            foreach ($journalEntries as $entry) {
                $entryLines = $entry->lines->where('chart_of_account_id', $reportAccountId);

                foreach ($entryLines as $line) {
                    $debitAmount = $line->debit_amount ?? 0;
                    $creditAmount = $line->credit_amount ?? 0;
                    $netAmount = $debitAmount - $creditAmount;
                    $runningBalance += $netAmount;

                    $processedEntries[] = [
                        'entry_date' => $entry->entry_date,
                        'entry_number' => $entry->entry_number,
                        'reference' => $entry->reference,
                        'description' => $line->description ?? $entry->description,
                        'debit_amount' => $debitAmount,
                        'credit_amount' => $creditAmount,
                        'net_amount' => $netAmount,
                        'running_balance' => $runningBalance,
                        'balance_type' => $runningBalance >= 0 ? 'Debit' : 'Credit',
                        'source_type' => $entry->source_type,
                        'source_id' => $entry->source_id,
                    ];
                }
            }

            // Calculate period totals - OPTIMIZED
            $periodTotalsQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->where('journal_entry_lines.chart_of_account_id', $reportAccountId);

            // Apply same filters as main query
            if ($fiscalYearId) {
                $periodTotalsQuery->where('journal_entries.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $periodTotalsQuery->where('journal_entries.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $periodTotalsQuery->whereBetween('journal_entries.entry_date', [$fromDate, $toDate]);
            }

            $periodTotals = $periodTotalsQuery
                ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
                ->first();

            $periodDebits = $periodTotals->total_debits ?? 0;
            $periodCredits = $periodTotals->total_credits ?? 0;

            $periodNet = $periodDebits - $periodCredits;
            $closingBalance = $openingBalance + $periodNet;

            return [
                'success' => true,
                'data' => [
                    'chart_of_account' => [
                        'id' => $chartOfAccount->id,
                        'code' => $chartOfAccount->code,
                        'name' => $chartOfAccount->name,
                        'type' => $chartOfAccount->type->name ?? 'Unknown',
                    ],
                    'report_account' => [
                        'id' => $reportAccount->id,
                        'code' => $reportAccount->code,
                        'name' => $reportAccount->name,
                        'type' => $reportAccount->type->name ?? 'Unknown',
                    ],
                    'filters' => [
                        'fiscal_year_id' => $fiscalYearId,
                        'accounting_period_id' => $accountingPeriodId,
                        'from_date' => $fromDate,
                        'to_date' => $toDate,
                    ],
                    'summary' => [
                        'opening_balance' => round($openingBalance, 2),
                        'opening_balance_type' => $openingBalance >= 0 ? 'Debit' : 'Credit',
                        'period_debits' => round($periodDebits, 2),
                        'period_credits' => round($periodCredits, 2),
                        'period_net' => round($periodNet, 2),
                        'closing_balance' => round($closingBalance, 2),
                        'closing_balance_type' => $closingBalance >= 0 ? 'Debit' : 'Credit',
                    ],
                    'entries' => $processedEntries,
                    'total_entries' => count($processedEntries),
                ],
            ];
        } catch (\Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get Group Account Statement report data
     */
    public function groupAccountStatement(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'chart_of_account_ids' => 'required|array|min:1',
                'chart_of_account_ids.*' => 'exists:chart_of_accounts,id',
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
                'page' => 'nullable|integer|min:1',
                'per_page' => 'nullable|integer|min:1|max:100',
            ]);

            $chartOfAccountIds = $request->chart_of_account_ids;
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;
            $page = $request->page ?? 1;
            $perPage = $request->per_page ?? 10; // Default to 10 rows per page

            // Get chart of accounts details
            $branchId = Auth::user()->default_branch_id ?? null;
            $chartOfAccounts = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with('type')
                ->whereIn('id', $chartOfAccountIds)
                ->get();

            if ($chartOfAccounts->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'No valid accounts found',
                ], 400);
            }

            // Apply date filters
            $dateQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->whereHas('lines', function ($query) use ($chartOfAccountIds) {
                    $query->whereIn('chart_of_account_id', $chartOfAccountIds);
                });

            if ($fiscalYearId) {
                $dateQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $dateQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $dateQuery->whereBetween('entry_date', [$fromDate, $toDate]);
            }

            // Get total count for pagination
            $totalCount = $dateQuery->count();

            // Get journal entries with pagination
            $journalEntries = $dateQuery
                ->with(['lines' => function ($query) use ($chartOfAccountIds) {
                    $query->whereIn('chart_of_account_id', $chartOfAccountIds);
                }])
                ->orderBy('entry_date', 'desc')
                ->orderBy('id', 'desc')
                ->skip(($page - 1) * $perPage)
                ->take($perPage)
                ->get();

            // Calculate opening balance (balance before the date range) - OPTIMIZED
            $openingBalanceQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->whereIn('journal_entry_lines.chart_of_account_id', $chartOfAccountIds);

            if ($fiscalYearId) {
                $fiscalYear = \App\Models\FiscalYear::findOrFail($fiscalYearId);
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $fiscalYear->start_date);
            } elseif ($accountingPeriodId) {
                $accountingPeriod = \App\Models\AccountingPeriod::findOrFail($accountingPeriodId);
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $accountingPeriod->start_date);
            } elseif ($fromDate) {
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $fromDate);
            }

            $openingTotals = $openingBalanceQuery
                ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
                ->first();

            $openingDebits = $openingTotals->total_debits ?? 0;
            $openingCredits = $openingTotals->total_credits ?? 0;

            $openingBalance = $openingDebits - $openingCredits;
            $openingBalanceType = $openingBalance >= 0 ? 'Debit' : 'Credit';
            $openingBalance = abs($openingBalance);

            // Process entries
            $processedEntries = [];
            $runningBalance = $openingBalance;
            $runningBalanceType = $openingBalanceType;

            foreach ($journalEntries as $entry) {
                $entryLines = $entry->lines->whereIn('chart_of_account_id', $chartOfAccountIds);

                $totalDebit = $entryLines->sum('debit_amount');
                $totalCredit = $entryLines->sum('credit_amount');
                $netAmount = $totalDebit - $totalCredit;

                // Update running balance
                if ($runningBalanceType === 'Debit') {
                    $runningBalance += $netAmount;
                } else {
                    $runningBalance -= $netAmount;
                }

                // Determine new balance type
                if ($runningBalance >= 0) {
                    $runningBalanceType = 'Debit';
                } else {
                    $runningBalanceType = 'Credit';
                    $runningBalance = abs($runningBalance);
                }

                $processedEntries[] = [
                    'id' => $entry->id,
                    'entry_date' => $entry->entry_date,
                    'entry_number' => $entry->entry_number,
                    'reference' => $entry->reference,
                    'description' => $entry->description,
                    'debit_amount' => round($totalDebit, 2),
                    'credit_amount' => round($totalCredit, 2),
                    'net_amount' => round($netAmount, 2),
                    'running_balance' => round($runningBalance, 2),
                    'balance_type' => $runningBalanceType,
                    'accounts' => $entryLines->map(function ($line) {
                        return [
                            'id' => $line->chart_of_account_id,
                            'code' => $line->chartOfAccount->code,
                            'name' => $line->chartOfAccount->name,
                            'debit' => $line->debit_amount,
                            'credit' => $line->credit_amount,
                        ];
                    })->toArray(),
                ];
            }

            // Calculate period totals - OPTIMIZED
            $periodTotalsQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->whereIn('journal_entry_lines.chart_of_account_id', $chartOfAccountIds);

            // Apply same filters as main query
            if ($fiscalYearId) {
                $periodTotalsQuery->where('journal_entries.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $periodTotalsQuery->where('journal_entries.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $periodTotalsQuery->whereBetween('journal_entries.entry_date', [$fromDate, $toDate]);
            }

            $periodTotals = $periodTotalsQuery
                ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
                ->first();

            $periodDebits = $periodTotals->total_debits ?? 0;
            $periodCredits = $periodTotals->total_credits ?? 0;

            $periodNet = $periodDebits - $periodCredits;

            // Calculate closing balance
            $closingBalance = $openingBalance + $periodNet;
            $closingBalanceType = $closingBalance >= 0 ? 'Debit' : 'Credit';
            $closingBalance = abs($closingBalance);

            $summary = [
                'opening_balance' => round($openingBalance, 2),
                'opening_balance_type' => $openingBalanceType,
                'period_debits' => round($periodDebits, 2),
                'period_credits' => round($periodCredits, 2),
                'period_net' => round($periodNet, 2),
                'closing_balance' => round($closingBalance, 2),
                'closing_balance_type' => $closingBalanceType,
                'total_entries' => count($processedEntries),
            ];

            return [
                'success' => true,
                'data' => [
                    'chart_of_accounts' => $chartOfAccounts->map(function ($account) {
                        return [
                            'id' => $account->id,
                            'code' => $account->code,
                            'name' => $account->name,
                            'type' => $account->type->name ?? 'Unknown',
                        ];
                    }),
                    'filters' => [
                        'fiscal_year_id' => $fiscalYearId,
                        'accounting_period_id' => $accountingPeriodId,
                        'from_date' => $fromDate,
                        'to_date' => $toDate,
                    ],
                    'entries' => $processedEntries,
                    'summary' => $summary,
                    'pagination' => [
                        'current_page' => $page,
                        'per_page' => $perPage,
                        'total_count' => $totalCount,
                        'total_pages' => ceil($totalCount / $perPage),
                        'has_more' => $page < ceil($totalCount / $perPage),
                    ],
                ],
            ];
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate group account statement',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get Group Account Statement report data for printing - NO PAGINATION
     */
    public function groupAccountStatementForPrint(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'chart_of_account_ids' => 'required|array|min:1',
                'chart_of_account_ids.*' => 'exists:chart_of_accounts,id',
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            $chartOfAccountIds = $request->chart_of_account_ids;
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Get chart of accounts details
            $branchId = Auth::user()->default_branch_id ?? null;
            $chartOfAccounts = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with('type')
                ->whereIn('id', $chartOfAccountIds)
                ->get();

            if ($chartOfAccounts->isEmpty()) {
                return [
                    'success' => false,
                    'message' => 'No valid accounts found',
                ];
            }

            // Apply date filters - NO PAGINATION
            $dateQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->whereHas('lines', function ($query) use ($chartOfAccountIds) {
                    $query->whereIn('chart_of_account_id', $chartOfAccountIds);
                });

            if ($fiscalYearId) {
                $dateQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $dateQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $dateQuery->whereBetween('entry_date', [$fromDate, $toDate]);
            }

            // Get ALL journal entries - NO PAGINATION
            $journalEntries = $dateQuery
                ->with(['lines' => function ($query) use ($chartOfAccountIds) {
                    $query->whereIn('chart_of_account_id', $chartOfAccountIds)
                        ->with('chartOfAccount');
                }])
                ->orderBy('entry_date', 'desc')
                ->orderBy('id', 'desc')
                ->get(); // Get ALL entries

            // Calculate opening balance (balance before the date range) - OPTIMIZED
            $openingBalanceQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->whereIn('journal_entry_lines.chart_of_account_id', $chartOfAccountIds);

            if ($fiscalYearId) {
                $fiscalYear = \App\Models\FiscalYear::findOrFail($fiscalYearId);
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $fiscalYear->start_date);
            } elseif ($accountingPeriodId) {
                $accountingPeriod = \App\Models\AccountingPeriod::findOrFail($accountingPeriodId);
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $accountingPeriod->start_date);
            } elseif ($fromDate) {
                $openingBalanceQuery->where('journal_entries.entry_date', '<', $fromDate);
            }

            $openingTotals = $openingBalanceQuery
                ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
                ->first();

            $openingDebits = $openingTotals->total_debits ?? 0;
            $openingCredits = $openingTotals->total_credits ?? 0;
            $openingBalance = $openingDebits - $openingCredits;
            $openingBalanceType = $openingBalance >= 0 ? 'Debit' : 'Credit';
            $openingBalance = abs($openingBalance);

            // Process journal entries
            $processedEntries = [];
            $runningBalance = $openingBalance;
            $runningBalanceType = $openingBalanceType;

            foreach ($journalEntries as $entry) {
                $entryLines = $entry->lines->whereIn('chart_of_account_id', $chartOfAccountIds);

                $totalDebit = $entryLines->sum('debit_amount');
                $totalCredit = $entryLines->sum('credit_amount');
                $netAmount = $totalDebit - $totalCredit;

                // Update running balance
                if ($runningBalanceType === 'Debit') {
                    $runningBalance += $netAmount;
                } else {
                    $runningBalance -= $netAmount;
                }

                // Determine new balance type
                if ($runningBalance >= 0) {
                    $runningBalanceType = 'Debit';
                } else {
                    $runningBalanceType = 'Credit';
                    $runningBalance = abs($runningBalance);
                }

                $processedEntries[] = [
                    'id' => $entry->id,
                    'entry_date' => $entry->entry_date,
                    'entry_number' => $entry->entry_number,
                    'reference' => $entry->reference,
                    'description' => $entry->description,
                    'debit_amount' => round($totalDebit, 2),
                    'credit_amount' => round($totalCredit, 2),
                    'net_amount' => round($netAmount, 2),
                    'running_balance' => round($runningBalance, 2),
                    'balance_type' => $runningBalanceType,
                    'accounts' => $entryLines->map(function ($line) {
                        return [
                            'id' => $line->chart_of_account_id,
                            'code' => $line->chartOfAccount->code,
                            'name' => $line->chartOfAccount->name,
                            'debit' => $line->debit_amount,
                            'credit' => $line->credit_amount,
                        ];
                    })->toArray(),
                ];
            }

            // Calculate period totals - OPTIMIZED
            $periodTotalsQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->whereIn('journal_entry_lines.chart_of_account_id', $chartOfAccountIds);

            // Apply same filters as main query
            if ($fiscalYearId) {
                $periodTotalsQuery->where('journal_entries.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $periodTotalsQuery->where('journal_entries.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $periodTotalsQuery->whereBetween('journal_entries.entry_date', [$fromDate, $toDate]);
            }

            $periodTotals = $periodTotalsQuery
                ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
                ->first();

            $periodDebits = $periodTotals->total_debits ?? 0;
            $periodCredits = $periodTotals->total_credits ?? 0;

            $periodNet = $periodDebits - $periodCredits;

            // Calculate closing balance
            $closingBalance = $openingBalance + $periodNet;
            $closingBalanceType = $closingBalance >= 0 ? 'Debit' : 'Credit';
            $closingBalance = abs($closingBalance);

            $summary = [
                'opening_balance' => round($openingBalance, 2),
                'opening_balance_type' => $openingBalanceType,
                'period_debits' => round($periodDebits, 2),
                'period_credits' => round($periodCredits, 2),
                'period_net' => round($periodNet, 2),
                'closing_balance' => round($closingBalance, 2),
                'closing_balance_type' => $closingBalanceType,
                'total_entries' => count($processedEntries),
            ];

            return [
                'success' => true,
                'data' => [
                    'chart_of_accounts' => $chartOfAccounts->map(function ($account) {
                        return [
                            'id' => $account->id,
                            'code' => $account->code,
                            'name' => $account->name,
                            'type' => $account->type->name ?? 'Unknown',
                        ];
                    }),
                    'filters' => [
                        'fiscal_year_id' => $fiscalYearId,
                        'accounting_period_id' => $accountingPeriodId,
                        'from_date' => $fromDate,
                        'to_date' => $toDate,
                    ],
                    'entries' => $processedEntries,
                    'summary' => $summary,
                    'total_entries' => count($processedEntries),
                ],
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Failed to generate group account statement for print',
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Get Invoice Summary report data - OPTIMIZED
     */
    public function invoiceSummary(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
                'page' => 'nullable|integer|min:1',
                'per_page' => 'nullable|integer|min:1|max:100',
            ]);

            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;
            $page = $request->page ?? 1;
            $perPage = $request->per_page ?? 50; // Default to 50 clients per page

            // Build base query for invoices
            $baseQuery = Invoice::query()->where('status', 1)->whereIn('branch_id', $branchIds);

            // Apply filters
            if ($fiscalYearId) {
                $baseQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $baseQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $baseQuery->whereBetween('invoice_date', [$fromDate, $toDate]);
            }

            // Calculate summary data using database aggregation - MUCH FASTER
            $summaryData = $baseQuery->selectRaw('
                COUNT(*) as total_invoices,
                SUM(sub_total) as total_amount,
                SUM(discount) as total_discount,
                SUM(transport) as total_transport
            ')->first();

            // Calculate total paid using join
            $totalPaid = DB::table('invoices')
                ->join('invoice_payments', 'invoices.id', '=', 'invoice_payments.invoice_id')
                ->where('invoices.status', 1)
                ->where('invoice_payments.status', 1)
                ->whereIn('invoices.branch_id', $branchIds);

            if ($fiscalYearId) {
                $totalPaid->where('invoices.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $totalPaid->where('invoices.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $totalPaid->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);
            }

            $totalPaid = $totalPaid->sum('invoice_payments.amount');

            // Calculate total returns using join
            $returnData = DB::table('invoices')
                ->join('invoice_returns', 'invoices.id', '=', 'invoice_returns.invoice_id')
                ->where('invoices.status', 1)
                ->where('invoice_returns.status', 1)
                ->whereIn('invoices.branch_id', $branchIds);

            if ($fiscalYearId) {
                $returnData->where('invoices.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $returnData->where('invoices.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $returnData->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);
            }

            $returnData = $returnData->selectRaw('
                COUNT(*) as total_returns,
                SUM(invoice_returns.total_return) as total_return_amount
            ')->first();

            // Calculate tax using join with vat_rates
            $taxData = DB::table('invoices')
                ->join('vat_rates', 'invoices.tax_id', '=', 'vat_rates.id')
                ->where('invoices.status', 1)
                ->whereIn('invoices.branch_id', $branchIds);

            if ($fiscalYearId) {
                $taxData->where('invoices.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $taxData->where('invoices.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $taxData->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);
            }

            $taxData = $taxData->selectRaw('
                SUM((invoices.sub_total - IFNULL(invoices.discount, 0)) * (vat_rates.rate / 100)) as total_tax
            ')->first();

            $totalInvoices = $summaryData->total_invoices ?? 0;
            $totalAmount = $summaryData->total_amount ?? 0;
            $totalDiscount = $summaryData->total_discount ?? 0;
            $totalTax = $taxData->total_tax ?? 0;
            $totalReturns = $returnData->total_returns ?? 0;
            $totalReturnAmount = $returnData->total_return_amount ?? 0;
            $totalDue = $totalAmount - $totalPaid;
            $netSales = $totalAmount - $totalReturnAmount;

            // Get client summary with pagination using database aggregation
            $clientSummaryQuery = DB::table('invoices')
                ->join('clients', 'invoices.client_id', '=', 'clients.id')
                ->where('invoices.status', 1)
                ->whereIn('invoices.branch_id', $branchIds);

            if ($fiscalYearId) {
                $clientSummaryQuery->where('invoices.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $clientSummaryQuery->where('invoices.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $clientSummaryQuery->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);
            }

            $clientSummary = $clientSummaryQuery
                ->selectRaw('
                    clients.id as client_id,
                    clients.name as client_name,
                    clients.phone as client_phone,
                    COUNT(invoices.id) as invoice_count,
                    SUM(invoices.sub_total) as total_amount,
                    SUM(invoices.discount) as discount_amount
                ')
                ->groupBy('clients.id', 'clients.name', 'clients.phone')
                ->orderBy('total_amount', 'desc')
                ->offset(($page - 1) * $perPage)
                ->limit($perPage)
                ->get();

            // Get total client count for pagination
            $totalClients = DB::table('invoices')
                ->where('status', 1);

            if ($fiscalYearId) {
                $totalClients->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $totalClients->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $totalClients->whereBetween('invoice_date', [$fromDate, $toDate]);
            }

            $totalClients = $totalClients->distinct('client_id')->count('client_id');

            // Calculate paid and due amounts for each client (this is still expensive but limited to paginated results)
            $clientIds = $clientSummary->pluck('client_id');
            $clientPayments = [];
            $clientReturns = [];

            if ($clientIds->isNotEmpty()) {
                // Get payments for these clients
                $payments = DB::table('invoices')
                    ->join('invoice_payments', 'invoices.id', '=', 'invoice_payments.invoice_id')
                    ->whereIn('invoices.client_id', $clientIds)
                    ->where('invoices.status', 1)
                    ->where('invoice_payments.status', 1);

                if ($fiscalYearId) {
                    $payments->where('invoices.fiscal_year_id', $fiscalYearId);
                } elseif ($accountingPeriodId) {
                    $payments->where('invoices.accounting_period_id', $accountingPeriodId);
                } elseif ($fromDate && $toDate) {
                    $payments->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);
                }

                $clientPayments = $payments
                    ->selectRaw('invoices.client_id, SUM(invoice_payments.amount) as paid_amount')
                    ->groupBy('invoices.client_id')
                    ->pluck('paid_amount', 'client_id');

                // Get returns for these clients
                $returns = DB::table('invoices')
                    ->join('invoice_returns', 'invoices.id', '=', 'invoice_returns.invoice_id')
                    ->whereIn('invoices.client_id', $clientIds)
                    ->where('invoices.status', 1)
                    ->where('invoice_returns.status', 1);

                if ($fiscalYearId) {
                    $returns->where('invoices.fiscal_year_id', $fiscalYearId);
                } elseif ($accountingPeriodId) {
                    $returns->where('invoices.accounting_period_id', $accountingPeriodId);
                } elseif ($fromDate && $toDate) {
                    $returns->whereBetween('invoices.invoice_date', [$fromDate, $toDate]);
                }

                $clientReturns = $returns
                    ->selectRaw('invoices.client_id, SUM(invoice_returns.total_return) as return_amount')
                    ->groupBy('invoices.client_id')
                    ->pluck('return_amount', 'client_id');
            }

            // Add paid and due amounts to client summary
            $clientSummary = $clientSummary->map(function ($client) use ($clientPayments, $clientReturns) {
                $paidAmount = $clientPayments[$client->client_id] ?? 0;
                $returnAmount = $clientReturns[$client->client_id] ?? 0;
                $dueAmount = $client->total_amount - $paidAmount;

                return [
                    'client_id' => $client->client_id,
                    'client_name' => $client->client_name,
                    'client_phone' => $client->client_phone,
                    'invoice_count' => $client->invoice_count,
                    'total_amount' => round($client->total_amount, 2),
                    'paid_amount' => round($paidAmount, 2),
                    'due_amount' => round($dueAmount, 2),
                    'discount_amount' => round($client->discount_amount, 2),
                    'tax_amount' => 0, // Will be calculated if needed
                ];
            });

            // Get monthly summary using database aggregation
            $monthlySummary = DB::table('invoices')
                ->where('status', 1);

            if ($fiscalYearId) {
                $monthlySummary->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $monthlySummary->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $monthlySummary->whereBetween('invoice_date', [$fromDate, $toDate]);
            }

            $monthlySummary = $monthlySummary
                ->selectRaw('
                    DATE_FORMAT(invoice_date, "%Y-%m") as month,
                    COUNT(*) as invoice_count,
                    SUM(sub_total) as total_amount
                ')
                ->groupBy('month')
                ->orderBy('month', 'desc')
                ->get()
                ->map(function ($month) {
                    return [
                        'month' => $month->month,
                        'month_name' => \Carbon\Carbon::parse($month->month.'-01')->format('F Y'),
                        'invoice_count' => $month->invoice_count,
                        'total_amount' => round($month->total_amount, 2),
                        'paid_amount' => 0, // Will be calculated if needed
                        'due_amount' => 0, // Will be calculated if needed
                    ];
                });

            return [
                'success' => true,
                'data' => [
                    'filters' => [
                        'fiscal_year_id' => $fiscalYearId,
                        'accounting_period_id' => $accountingPeriodId,
                        'from_date' => $fromDate,
                        'to_date' => $toDate,
                    ],
                    'summary' => [
                        'total_invoices' => $totalInvoices,
                        'total_amount' => round($totalAmount, 2),
                        'total_paid' => round($totalPaid, 2),
                        'total_due' => round($totalDue, 2),
                        'total_discount' => round($totalDiscount, 2),
                        'total_tax' => round($totalTax, 2),
                        'total_returns' => $totalReturns,
                        'total_return_amount' => round($totalReturnAmount, 2),
                        'net_sales' => round($netSales, 2),
                        'payment_percentage' => $totalAmount > 0 ? round(($totalPaid / $totalAmount) * 100, 2) : 0,
                    ],
                    'client_summary' => $clientSummary,
                    'monthly_summary' => $monthlySummary,
                    'pagination' => [
                        'current_page' => $page,
                        'per_page' => $perPage,
                        'total_clients' => $totalClients,
                        'total_pages' => ceil($totalClients / $perPage),
                        'has_more' => $page < ceil($totalClients / $perPage),
                    ],
                ],
            ];
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate invoice summary report',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get Invoice Summary report data for printing - NO PAGINATION
     */
    public function invoiceSummaryForPrint(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        try {
            // Debug: Log input parameters
            Log::info('Invoice Summary For Print - Input:', $request->all());

            // Validate request
            $this->validate($request, [
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            Log::info('Invoice Summary For Print - Validation passed');

            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Build base query for invoices - NO PAGINATION
            $baseQuery = Invoice::query()->where('status', 1);

            // Apply filters
            if ($fiscalYearId) {
                $baseQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $baseQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $baseQuery->whereBetween('invoice_date', [$fromDate, $toDate]);
            }

            // Get ALL invoices - NO PAGINATION - OPTIMIZED
            $invoices = $baseQuery->with(['client:id,name']) // Only load client id and name
                ->select('id', 'client_id', 'sub_total', 'discount', 'transport', 'invoice_date')
                ->orderBy('invoice_date', 'desc')
                ->get(); // Get ALL invoices

            Log::info('Invoice Summary For Print - Query Results:', [
                'total_invoices_found' => $invoices->count(),
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
            ]);

            // Group by client and calculate summaries
            $clientSummaries = [];
            $totalInvoices = 0;
            $totalAmount = 0;
            $totalTax = 0;
            $totalPaid = 0;
            $totalDue = 0;

            foreach ($invoices as $invoice) {
                $clientId = $invoice->client_id;
                $clientName = $invoice->client->name ?? 'Unknown Client';

                if (! isset($clientSummaries[$clientId])) {
                    $clientSummaries[$clientId] = [
                        'client_id' => $clientId,
                        'client_name' => $clientName,
                        'total_invoices' => 0,
                        'total_amount' => 0,
                        'total_tax' => 0,
                        'total_paid' => 0,
                        'total_due' => 0,
                    ];
                }

                $invoiceAmount = $invoice->sub_total ?? 0;
                $invoiceDiscount = $invoice->discount ?? 0;
                $invoiceTransport = $invoice->transport ?? 0;

                // Calculate tax and total (simplified calculation)
                $invoiceTax = 0; // Will calculate from tax relationships if needed
                $invoiceTotal = $invoiceAmount - $invoiceDiscount + $invoiceTransport + $invoiceTax;

                // Calculate paid amount (simplified for now - would need payment joins for accuracy)
                $invoicePaid = 0; // Will be calculated from invoice_payments if needed
                $invoiceDue = $invoiceTotal - $invoicePaid;

                $clientSummaries[$clientId]['total_invoices']++;
                $clientSummaries[$clientId]['total_amount'] += $invoiceAmount;
                $clientSummaries[$clientId]['total_tax'] += $invoiceTax;
                $clientSummaries[$clientId]['total_paid'] += $invoicePaid;
                $clientSummaries[$clientId]['total_due'] += $invoiceDue;

                // Don't store individual invoices for print to save memory
                // $clientSummaries[$clientId]['invoices'][] = [...];

                $totalInvoices++;
                $totalAmount += $invoiceAmount;
                $totalTax += $invoiceTax;
                $totalPaid += $invoicePaid;
                $totalDue += $invoiceDue;
            }

            // Convert to array and sort
            $clientData = array_values($clientSummaries);
            usort($clientData, function ($a, $b) {
                return strcmp($a['client_name'], $b['client_name']);
            });

            $summary = [
                'total_clients' => count($clientData),
                'total_invoices' => $totalInvoices,
                'total_amount' => round($totalAmount, 2),
                'total_tax' => round($totalTax, 2),
                'total_paid' => round($totalPaid, 2),
                'total_due' => round($totalDue, 2),
                'grand_total' => round($totalAmount + $totalTax, 2),
            ];

            return [
                'success' => true,
                'data' => [
                    'summary' => $summary,
                    'clients' => $clientData,
                    'filters' => [
                        'fiscal_year_id' => $fiscalYearId,
                        'accounting_period_id' => $accountingPeriodId,
                        'from_date' => $fromDate,
                        'to_date' => $toDate,
                    ],
                    'total_entries' => count($clientData),
                ],
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Failed to generate invoice summary report for print',
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Get Purchase Summary report data - OPTIMIZED
     */
    public function purchaseSummary(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
                'page' => 'nullable|integer|min:1',
                'per_page' => 'nullable|integer|min:1|max:100',
            ]);

            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;
            $page = $request->page ?? 1;
            $perPage = $request->per_page ?? 50; // Default to 50 suppliers per page

            // Build base query for purchases
            $baseQuery = Purchase::query()->where('status', 1)->whereIn('branch_id', $branchIds);

            // Apply filters
            if ($fiscalYearId) {
                $baseQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $baseQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $baseQuery->whereBetween('purchase_date', [$fromDate, $toDate]);
            }

            // Calculate summary data using database aggregation - MUCH FASTER
            $summaryData = $baseQuery->selectRaw('
                COUNT(*) as total_purchases,
                SUM(sub_total) as total_amount,
                SUM(discount) as total_discount,
                SUM(transport) as total_transport
            ')->first();

            // Calculate total paid using join
            $totalPaid = DB::table('purchases')
                ->join('purchase_payments', 'purchases.id', '=', 'purchase_payments.purchase_id')
                ->where('purchases.status', 1)
                ->where('purchase_payments.status', 1)
                ->whereIn('purchases.branch_id', $branchIds);

            if ($fiscalYearId) {
                $totalPaid->where('purchases.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $totalPaid->where('purchases.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $totalPaid->whereBetween('purchases.purchase_date', [$fromDate, $toDate]);
            }

            $totalPaid = $totalPaid->sum('purchase_payments.amount');

            // Calculate total returns using join
            $returnData = DB::table('purchases')
                ->join('purchase_returns', 'purchases.id', '=', 'purchase_returns.purchase_id')
                ->where('purchases.status', 1)
                ->where('purchase_returns.status', 1)
                ->whereIn('purchases.branch_id', $branchIds);

            if ($fiscalYearId) {
                $returnData->where('purchases.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $returnData->where('purchases.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $returnData->whereBetween('purchases.purchase_date', [$fromDate, $toDate]);
            }

            $returnData = $returnData->selectRaw('
                COUNT(*) as total_returns,
                SUM(purchase_returns.total_return) as total_return_amount
            ')->first();

            // Calculate tax using join with vat_rates
            $taxData = DB::table('purchases')
                ->join('vat_rates', 'purchases.tax_id', '=', 'vat_rates.id')
                ->where('purchases.status', 1)
                ->whereIn('purchases.branch_id', $branchIds);

            if ($fiscalYearId) {
                $taxData->where('purchases.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $taxData->where('purchases.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $taxData->whereBetween('purchases.purchase_date', [$fromDate, $toDate]);
            }

            $taxData = $taxData->selectRaw('
                SUM((purchases.sub_total - IFNULL(purchases.discount, 0)) * (vat_rates.rate / 100)) as total_tax
            ')->first();

            $totalPurchases = $summaryData->total_purchases ?? 0;
            $totalAmount = $summaryData->total_amount ?? 0;
            $totalDiscount = $summaryData->total_discount ?? 0;
            $totalTax = $taxData->total_tax ?? 0;
            $totalReturns = $returnData->total_returns ?? 0;
            $totalReturnAmount = $returnData->total_return_amount ?? 0;
            $totalDue = $totalAmount - $totalPaid;
            $netPurchases = $totalAmount - $totalReturnAmount;

            // Get supplier summary with pagination using database aggregation
            $supplierSummaryQuery = DB::table('purchases')
                ->whereIn('purchases.branch_id', $branchIds)
                ->join('suppliers', 'purchases.supplier_id', '=', 'suppliers.id')
                ->where('purchases.status', 1);

            if ($fiscalYearId) {
                $supplierSummaryQuery->where('purchases.fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $supplierSummaryQuery->where('purchases.accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $supplierSummaryQuery->whereBetween('purchases.purchase_date', [$fromDate, $toDate]);
            }

            $supplierSummary = $supplierSummaryQuery
                ->selectRaw('
                    suppliers.id as supplier_id,
                    suppliers.name as supplier_name,
                    COALESCE(suppliers.phone_number, suppliers.phone_legacy) as supplier_phone,
                    COUNT(purchases.id) as purchase_count,
                    SUM(purchases.sub_total) as total_amount,
                    SUM(purchases.discount) as discount_amount
                ')
                ->groupBy('suppliers.id', 'suppliers.name', 'suppliers.phone_number', 'suppliers.phone_legacy')
                ->orderBy('total_amount', 'desc')
                ->offset(($page - 1) * $perPage)
                ->limit($perPage)
                ->get();

            // Get total supplier count for pagination
            $totalSuppliers = DB::table('purchases')
                ->where('status', 1);

            if ($fiscalYearId) {
                $totalSuppliers->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $totalSuppliers->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $totalSuppliers->whereBetween('purchase_date', [$fromDate, $toDate]);
            }

            $totalSuppliers = $totalSuppliers->distinct('supplier_id')->count('supplier_id');

            // Calculate paid and due amounts for each supplier (this is still expensive but limited to paginated results)
            $supplierIds = $supplierSummary->pluck('supplier_id');
            $supplierPayments = [];
            $supplierReturns = [];

            if ($supplierIds->isNotEmpty()) {
                // Get payments for these suppliers
                $payments = DB::table('purchases')
                    ->join('purchase_payments', 'purchases.id', '=', 'purchase_payments.purchase_id')
                    ->whereIn('purchases.supplier_id', $supplierIds)
                    ->where('purchases.status', 1)
                    ->where('purchase_payments.status', 1);

                if ($fiscalYearId) {
                    $payments->where('purchases.fiscal_year_id', $fiscalYearId);
                } elseif ($accountingPeriodId) {
                    $payments->where('purchases.accounting_period_id', $accountingPeriodId);
                } elseif ($fromDate && $toDate) {
                    $payments->whereBetween('purchases.purchase_date', [$fromDate, $toDate]);
                }

                $supplierPayments = $payments
                    ->selectRaw('purchases.supplier_id, SUM(purchase_payments.amount) as paid_amount')
                    ->groupBy('purchases.supplier_id')
                    ->pluck('paid_amount', 'supplier_id');

                // Get returns for these suppliers
                $returns = DB::table('purchases')
                    ->join('purchase_returns', 'purchases.id', '=', 'purchase_returns.purchase_id')
                    ->whereIn('purchases.supplier_id', $supplierIds)
                    ->where('purchases.status', 1)
                    ->where('purchase_returns.status', 1);

                if ($fiscalYearId) {
                    $returns->where('purchases.fiscal_year_id', $fiscalYearId);
                } elseif ($accountingPeriodId) {
                    $returns->where('purchases.accounting_period_id', $accountingPeriodId);
                } elseif ($fromDate && $toDate) {
                    $returns->whereBetween('purchases.purchase_date', [$fromDate, $toDate]);
                }

                $supplierReturns = $returns
                    ->selectRaw('purchases.supplier_id, SUM(purchase_returns.total_return) as return_amount')
                    ->groupBy('purchases.supplier_id')
                    ->pluck('return_amount', 'supplier_id');
            }

            // Add paid and due amounts to supplier summary
            $supplierSummary = $supplierSummary->map(function ($supplier) use ($supplierPayments, $supplierReturns) {
                $paidAmount = $supplierPayments[$supplier->supplier_id] ?? 0;
                $returnAmount = $supplierReturns[$supplier->supplier_id] ?? 0;
                $dueAmount = $supplier->total_amount - $paidAmount;

                return [
                    'supplier_id' => $supplier->supplier_id,
                    'supplier_name' => $supplier->supplier_name,
                    'supplier_phone' => $supplier->supplier_phone,
                    'purchase_count' => $supplier->purchase_count,
                    'total_amount' => round($supplier->total_amount, 2),
                    'paid_amount' => round($paidAmount, 2),
                    'due_amount' => round($dueAmount, 2),
                    'discount_amount' => round($supplier->discount_amount, 2),
                    'tax_amount' => 0, // Will be calculated if needed
                ];
            });

            // Get monthly summary using database aggregation
            $monthlySummary = DB::table('purchases')
                ->where('status', 1);

            if ($fiscalYearId) {
                $monthlySummary->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $monthlySummary->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $monthlySummary->whereBetween('purchase_date', [$fromDate, $toDate]);
            }

            $monthlySummary = $monthlySummary
                ->selectRaw('
                    DATE_FORMAT(purchase_date, "%Y-%m") as month,
                    COUNT(*) as purchase_count,
                    SUM(sub_total) as total_amount
                ')
                ->groupBy('month')
                ->orderBy('month', 'desc')
                ->get()
                ->map(function ($month) {
                    return [
                        'month' => $month->month,
                        'month_name' => \Carbon\Carbon::parse($month->month.'-01')->format('F Y'),
                        'purchase_count' => $month->purchase_count,
                        'total_amount' => round($month->total_amount, 2),
                        'paid_amount' => 0, // Will be calculated if needed
                        'due_amount' => 0, // Will be calculated if needed
                    ];
                });

            return [
                'success' => true,
                'data' => [
                    'filters' => [
                        'fiscal_year_id' => $fiscalYearId,
                        'accounting_period_id' => $accountingPeriodId,
                        'from_date' => $fromDate,
                        'to_date' => $toDate,
                    ],
                    'summary' => [
                        'total_purchases' => $totalPurchases,
                        'total_amount' => round($totalAmount, 2),
                        'total_paid' => round($totalPaid, 2),
                        'total_due' => round($totalDue, 2),
                        'total_discount' => round($totalDiscount, 2),
                        'total_tax' => round($totalTax, 2),
                        'total_returns' => $totalReturns,
                        'total_return_amount' => round($totalReturnAmount, 2),
                        'net_purchases' => round($netPurchases, 2),
                        'payment_percentage' => $totalAmount > 0 ? round(($totalPaid / $totalAmount) * 100, 2) : 0,
                    ],
                    'supplier_summary' => $supplierSummary,
                    'monthly_summary' => $monthlySummary,
                    'pagination' => [
                        'current_page' => $page,
                        'per_page' => $perPage,
                        'total_suppliers' => $totalSuppliers,
                        'total_pages' => ceil($totalSuppliers / $perPage),
                        'has_more' => $page < ceil($totalSuppliers / $perPage),
                    ],
                ],
            ];
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate purchase summary report',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get Purchase Summary report data for printing - NO PAGINATION
     */
    public function purchaseSummaryForPrint(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        try {
            // Debug: Log input parameters
            Log::info('Purchase Summary For Print - Input:', $request->all());

            // Validate request
            $this->validate($request, [
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            Log::info('Purchase Summary For Print - Validation passed');

            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Build base query for purchases - NO PAGINATION
            $baseQuery = Purchase::query()->where('status', 1);

            // Apply filters
            if ($fiscalYearId) {
                $baseQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $baseQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $baseQuery->whereBetween('purchase_date', [$fromDate, $toDate]);
            }

            // Get ALL purchases - NO PAGINATION - OPTIMIZED
            $purchases = $baseQuery->with(['supplier:id,name']) // Only load supplier id and name
                ->select('id', 'supplier_id', 'sub_total', 'discount', 'transport', 'purchase_date')
                ->orderBy('purchase_date', 'desc')
                ->get(); // Get ALL purchases

            Log::info('Purchase Summary For Print - Query Results:', [
                'total_purchases_found' => $purchases->count(),
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
            ]);

            // Group by supplier and calculate summaries
            $supplierSummaries = [];
            $totalPurchases = 0;
            $totalAmount = 0;
            $totalTax = 0;
            $totalPaid = 0;
            $totalDue = 0;

            foreach ($purchases as $purchase) {
                $supplierId = $purchase->supplier_id;
                $supplierName = $purchase->supplier->name ?? 'Unknown Supplier';

                if (! isset($supplierSummaries[$supplierId])) {
                    $supplierSummaries[$supplierId] = [
                        'supplier_id' => $supplierId,
                        'supplier_name' => $supplierName,
                        'total_purchases' => 0,
                        'total_amount' => 0,
                        'total_tax' => 0,
                        'total_paid' => 0,
                        'total_due' => 0,
                    ];
                }

                $purchaseAmount = $purchase->sub_total ?? 0;
                $purchaseDiscount = $purchase->discount ?? 0;
                $purchaseTransport = $purchase->transport ?? 0;

                // Calculate tax and total (simplified calculation)
                $purchaseTax = 0; // Will calculate from tax relationships if needed
                $purchaseTotal = $purchaseAmount - $purchaseDiscount + $purchaseTransport + $purchaseTax;

                // Calculate paid amount (simplified for now - would need payment joins for accuracy)
                $purchasePaid = 0; // Will be calculated from purchase_payments if needed
                $purchaseDue = $purchaseTotal - $purchasePaid;

                $supplierSummaries[$supplierId]['total_purchases']++;
                $supplierSummaries[$supplierId]['total_amount'] += $purchaseAmount;
                $supplierSummaries[$supplierId]['total_tax'] += $purchaseTax;
                $supplierSummaries[$supplierId]['total_paid'] += $purchasePaid;
                $supplierSummaries[$supplierId]['total_due'] += $purchaseDue;

                // Don't store individual purchases for print to save memory
                // $supplierSummaries[$supplierId]['purchases'][] = [...];

                $totalPurchases++;
                $totalAmount += $purchaseAmount;
                $totalTax += $purchaseTax;
                $totalPaid += $purchasePaid;
                $totalDue += $purchaseDue;
            }

            // Convert to array and sort
            $supplierData = array_values($supplierSummaries);
            usort($supplierData, function ($a, $b) {
                return strcmp($a['supplier_name'], $b['supplier_name']);
            });

            $summary = [
                'total_suppliers' => count($supplierData),
                'total_purchases' => $totalPurchases,
                'total_amount' => round($totalAmount, 2),
                'total_tax' => round($totalTax, 2),
                'total_paid' => round($totalPaid, 2),
                'total_due' => round($totalDue, 2),
                'grand_total' => round($totalAmount + $totalTax, 2),
            ];

            return [
                'success' => true,
                'data' => [
                    'summary' => $summary,
                    'suppliers' => $supplierData,
                    'filters' => [
                        'fiscal_year_id' => $fiscalYearId,
                        'accounting_period_id' => $accountingPeriodId,
                        'from_date' => $fromDate,
                        'to_date' => $toDate,
                    ],
                    'total_entries' => count($supplierData),
                ],
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Failed to generate purchase summary report for print',
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Get Trial Balance report data with hierarchical tree structure
     */
    public function trialBalance(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'chart_of_account_id' => 'nullable|exists:chart_of_accounts,id',
                'sub_chart_of_account_id' => 'nullable|exists:chart_of_accounts,id',
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
                'page' => 'nullable|numeric|min:1',
                'per_page' => 'nullable|numeric|min:1|max:100',
            ]);

            $chartOfAccountId = $request->chart_of_account_id;
            $subChartOfAccountId = $request->sub_chart_of_account_id;
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;
            $page = (int) ($request->page ?? 1);
            $perPage = (int) ($request->per_page ?? ($page === 1 ? 999999 : 30)); // Page 1 loads all, others use chunks

            // Load ALL chart of accounts first (much faster) - load complete hierarchy
            $branchId = Auth::user()->default_branch_id ?? null;

            // Create filter object for consistency
            $filters = [
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
                'branch_id' => $branchId,
            ];
            $allAccountsQuery = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with($this->getCompleteHierarchyEagerLoad())
                ->where('is_active', true)
                ->whereNull('parent_id'); // Only get root level accounts

            // If specific account is selected, get that account and its children
            if ($subChartOfAccountId) {
                $selectedAccount = \App\Models\ChartOfAccount::forBranch($branchId)
                    ->with($this->getCompleteHierarchyEagerLoad())
                    ->findOrFail($subChartOfAccountId);

                $allAccounts = collect([$selectedAccount]);
                $totalCount = 1;
            } elseif ($chartOfAccountId) {
                $selectedAccount = \App\Models\ChartOfAccount::forBranch($branchId)
                    ->with($this->getCompleteHierarchyEagerLoad())
                    ->findOrFail($chartOfAccountId);

                $allAccounts = collect([$selectedAccount]);
                $totalCount = 1;
            } else {
                // Load ALL accounts at once (much faster than pagination)
                $allAccounts = $allAccountsQuery->orderBy('code')->get();
                $totalCount = $allAccounts->count();
            }

            // Always return ALL accounts with zero balances (no pagination)
            $trialBalanceData = $this->buildTrialBalanceHierarchyWithZeroBalances($allAccounts);
            $totalCount = count($trialBalanceData);

            // Since all accounts have zero balances, grand totals should also be zero
            $grandTotals = [
                'total_debits' => 0,
                'total_credits' => 0,
                'opening_debit' => 0,
                'opening_credit' => 0,
                'movement_debit' => 0,
                'movement_credit' => 0,
                'net_movement_debit' => 0,
                'net_movement_credit' => 0,
                'closing_debit' => 0,
                'closing_credit' => 0,
                'difference' => 0,
            ];

            Log::info("Trial Balance - All accounts loaded: {$totalCount} accounts with zero balances");

            return [
                'success' => true,
                'data' => [
                    'filters' => $filters,
                    'trial_balance' => $trialBalanceData,
                    'grand_totals' => $grandTotals,
                    'total_count' => $totalCount,
                ],
            ];
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate trial balance',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get Trial Balance report data for printing - NO PAGINATION
     */
    public function trialBalanceForPrint(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        try {
            // Debug: Log input parameters
            Log::info('Trial Balance For Print - Input:', $request->all());

            // Validate request
            $this->validate($request, [
                'chart_of_account_id' => 'nullable|exists:chart_of_accounts,id',
                'sub_chart_of_account_id' => 'nullable|exists:chart_of_accounts,id',
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            Log::info('Trial Balance For Print - Validation passed');

            $chartOfAccountId = $request->chart_of_account_id;
            $subChartOfAccountId = $request->sub_chart_of_account_id;
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Load accounts using Eloquent models (same as original trialBalance method)
            $branchId = Auth::user()->default_branch_id ?? null;

            // Create filter object for consistency
            $filters = [
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
                'chart_of_account_id' => $chartOfAccountId,
                'sub_chart_of_account_id' => $subChartOfAccountId,
                'branch_id' => $branchId,
            ];
            $allAccountsQuery = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with($this->getCompleteHierarchyEagerLoad())
                ->where('is_active', true)
                ->whereNull('parent_id'); // Only get root level accounts

            // If specific account is selected, get that account and its children
            if ($subChartOfAccountId) {
                $selectedAccount = \App\Models\ChartOfAccount::forBranch($branchId)
                    ->with($this->getCompleteHierarchyEagerLoad())
                    ->findOrFail($subChartOfAccountId);

                $allAccounts = collect([$selectedAccount]);
                $totalCount = 1;
            } elseif ($chartOfAccountId) {
                $selectedAccount = \App\Models\ChartOfAccount::forBranch($branchId)
                    ->with($this->getCompleteHierarchyEagerLoad())
                    ->findOrFail($chartOfAccountId);

                $allAccounts = collect([$selectedAccount]);
                $totalCount = 1;
            } else {
                // Load ALL accounts at once (much faster than pagination)
                $allAccounts = $allAccountsQuery->orderBy('code')->get();
                $totalCount = $allAccounts->count();
            }

            Log::info('Trial Balance For Print - Query Results:', [
                'total_accounts_found' => $totalCount,
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
            ]);

            // Build the hierarchical trial balance with REAL calculated balances
            // Note: Not passing pre-loaded data, let the method calculate balances individually
            Log::info('Trial Balance For Print - Starting hierarchy build with '.count($allAccounts).' accounts');

            try {
                $trialBalanceData = $this->buildTrialBalanceHierarchy($allAccounts, $filters);
                $totalCount = count($trialBalanceData);

                Log::info('Trial Balance For Print - Hierarchy build successful. Generated '.$totalCount.' data entries');
            } catch (\Exception $e) {
                Log::error('Trial Balance For Print - Hierarchy build failed: '.$e->getMessage(), [
                    'trace' => $e->getTraceAsString(),
                    'filters' => $filters,
                    'account_count' => count($allAccounts),
                ]);
                throw $e;
            }

            // Calculate grand totals from real data
            $grandTotals = $this->calculateGrandTotals($trialBalanceData);

            Log::info('Trial Balance For Print - Processing complete. Total accounts: '.$totalCount);

            return [
                'success' => true,
                'data' => [
                    'filters' => $filters,
                    'trial_balance' => $trialBalanceData,
                    'grand_totals' => $grandTotals,
                    'total_count' => $totalCount,
                    'total_entries' => $totalCount,
                ],
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Failed to generate trial balance report for print',
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * Calculate balance for a single account
     */
    public function calculateAccountBalances(Request $request)
    {
        try {
            // Validate request
            $this->validate($request, [
                'account_id' => 'required|exists:chart_of_accounts,id',
                'fiscal_year_id' => 'nullable|exists:fiscal_years,id',
                'accounting_period_id' => 'nullable|exists:accounting_periods,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            $accountId = $request->account_id;
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Get the specific account
            $branchId = Auth::user()->default_branch_id ?? null;

            // Create filter object for consistency
            $filters = [
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
                'branch_id' => $branchId,
            ];
            $account = \App\Models\ChartOfAccount::forBranch($branchId)
                ->with(['type'])
                ->where('id', $accountId)
                ->where('is_active', true)
                ->first();

            if (! $account) {
                return response()->json([
                    'success' => false,
                    'message' => 'Account not found',
                ], 404);
            }

            // Calculate balance for this single account using the original method
            $balanceDetails = $this->calculateAccountBalanceDetailsOriginal($account, $filters);
            Log::info("CalculateAccountBalance - Account {$accountId} ({$account->name}) - Filters: ".json_encode($filters));
            Log::info("CalculateAccountBalance - Calculated balance for account {$accountId}: ".json_encode($balanceDetails));

            // Return the account with calculated balance
            $accountWithBalance = [
                'id' => $account->id,
                'name' => method_exists($account, 'getTranslatedField') ? $account->getTranslatedField('name') : $account->name,
                'code' => $account->code,
                'type' => $account->type,
                'opening_debit' => $balanceDetails['opening_debit'],
                'opening_credit' => $balanceDetails['opening_credit'],
                'movement_debit' => $balanceDetails['movement_debit'],
                'movement_credit' => $balanceDetails['movement_credit'],
                'net_movement_debit' => $balanceDetails['net_movement_debit'],
                'net_movement_credit' => $balanceDetails['net_movement_credit'],
                'closing_debit' => $balanceDetails['closing_debit'],
                'closing_credit' => $balanceDetails['closing_credit'],
                'isCalculating' => false,
            ];

            return [
                'success' => true,
                'data' => [
                    'account' => $accountWithBalance,
                ],
            ];
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to calculate account balance',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Pre-load all journal entry data for efficient calculation
     */
    private function preloadJournalEntryData($filters)
    {
        // Build base query for journal entries
        $baseQuery = \App\Models\JournalEntry::query()
            ->where('status', 'posted')
            ->with(['lines' => function ($query) {
                $query->select('id', 'journal_entry_id', 'chart_of_account_id', 'debit_amount', 'credit_amount');
            }])
            ->select('id', 'entry_date', 'fiscal_year_id', 'accounting_period_id', 'branch_id');

        // Apply branch filter
        if (isset($filters['branch_id']) && $filters['branch_id']) {
            $baseQuery->where('branch_id', $filters['branch_id']);
        }

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $baseQuery->where('fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $baseQuery->where('accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $baseQuery->whereBetween('entry_date', [$filters['from_date'], $filters['to_date']]);
        }

        // Get all journal entries
        $allEntries = $baseQuery->get();
        Log::info('PreloadJournalEntryData - Found '.$allEntries->count().' journal entries');

        // Group by account ID for fast lookup
        $accountBalances = [];

        foreach ($allEntries as $entry) {
            foreach ($entry->lines as $line) {
                $accountId = $line->chart_of_account_id;

                if (! isset($accountBalances[$accountId])) {
                    $accountBalances[$accountId] = [
                        'opening_debit' => 0,
                        'opening_credit' => 0,
                        'movement_debit' => 0,
                        'movement_credit' => 0,
                    ];
                }

                // Determine if this is opening balance or movement
                $isOpening = false;
                if ($filters['fiscal_year_id']) {
                    $fiscalYear = \App\Models\FiscalYear::find($filters['fiscal_year_id']);
                    $isOpening = $fiscalYear && $entry->entry_date < $fiscalYear->start_date;
                } elseif ($filters['accounting_period_id']) {
                    $accountingPeriod = \App\Models\AccountingPeriod::find($filters['accounting_period_id']);
                    $isOpening = $accountingPeriod && $entry->entry_date < $accountingPeriod->start_date;
                } elseif ($filters['from_date']) {
                    $isOpening = $entry->entry_date < $filters['from_date'];
                } else {
                    $isOpening = $entry->entry_date < now()->startOfYear();
                }

                if ($isOpening) {
                    $accountBalances[$accountId]['opening_debit'] += $line->debit_amount;
                    $accountBalances[$accountId]['opening_credit'] += $line->credit_amount;
                } else {
                    $accountBalances[$accountId]['movement_debit'] += $line->debit_amount;
                    $accountBalances[$accountId]['movement_credit'] += $line->credit_amount;
                }
            }
        }

        Log::info('PreloadJournalEntryData - Processed balances for '.count($accountBalances).' accounts');

        return $accountBalances;
    }

    /**
     * Build hierarchical trial balance data with zero balances (for immediate display)
     */
    private function buildTrialBalanceHierarchyWithZeroBalances($accounts, $level = 0)
    {
        $result = [];

        foreach ($accounts as $account) {
            // Get children accounts
            $children = $account->children()->where('is_active', true)->orderBy('code')->get();
            $childrenData = [];

            if ($children->count() > 0) {
                $childrenData = $this->buildTrialBalanceHierarchyWithZeroBalances($children, $level + 1);
            }

            $accountData = [
                'id' => $account->id,
                'code' => $account->code,
                'name' => method_exists($account, 'getTranslatedField') ? $account->getTranslatedField('name') : $account->name,
                'type' => $account->type ? $account->type->name : 'Unknown',
                'level' => $level,
                'is_parent' => $children->count() > 0,

                // All zero balances for immediate display
                'opening_debit' => 0,
                'opening_credit' => 0,
                'movement_debit' => 0,
                'movement_credit' => 0,
                'net_movement_debit' => 0,
                'net_movement_credit' => 0,
                'closing_debit' => 0,
                'closing_credit' => 0,

                // Children totals (also zero)
                'children_opening_debit' => 0,
                'children_opening_credit' => 0,
                'children_movement_debit' => 0,
                'children_movement_credit' => 0,
                'children_net_movement_debit' => 0,
                'children_net_movement_credit' => 0,
                'children_closing_debit' => 0,
                'children_closing_credit' => 0,

                // Total amounts (also zero)
                'total_opening_debit' => 0,
                'total_opening_credit' => 0,
                'total_movement_debit' => 0,
                'total_movement_credit' => 0,
                'total_net_movement_debit' => 0,
                'total_net_movement_credit' => 0,
                'total_closing_debit' => 0,
                'total_closing_credit' => 0,

                'children' => $childrenData,
            ];

            $result[] = $accountData;
        }

        return $result;
    }

    /**
     * Get complete hierarchy eager load for chart of accounts
     * This ensures we load all levels of the hierarchy
     */
    private function getCompleteHierarchyEagerLoad($depth = 10)
    {
        $eagerLoad = ['type'];

        $currentLevel = 'children';
        for ($i = 0; $i < $depth; $i++) {
            $eagerLoad[$currentLevel] = function ($query) use ($i, $depth) {
                $query->with('type');
                if ($i < $depth - 1) {
                    $query->with('children');
                }
            };
            $currentLevel .= '.children';
        }

        return $eagerLoad;
    }

    /**
     * Get all descendant account IDs from a parent account
     */
    private function getAllDescendants($account, $descendants = [])
    {
        if ($account->children && $account->children->count() > 0) {
            foreach ($account->children as $child) {
                $descendants[] = $child->id;
                $descendants = $this->getAllDescendants($child, $descendants);
            }
        }

        return $descendants;
    }

    /**
     * Build hierarchical trial balance data
     */
    private function buildTrialBalanceHierarchy($accounts, $filters, $journalEntryData = null, $level = 0)
    {
        $result = [];

        foreach ($accounts as $account) {
            // Calculate detailed balance information using pre-loaded data
            $balanceData = $this->calculateAccountBalanceDetails($account, $filters, $journalEntryData);

            // Get children accounts
            $children = $account->children()->where('is_active', true)->orderBy('code')->get();
            $childrenData = [];
            $childrenTotals = [
                'opening_debit' => 0,
                'opening_credit' => 0,
                'movement_debit' => 0,
                'movement_credit' => 0,
                'net_movement_debit' => 0,
                'net_movement_credit' => 0,
                'closing_debit' => 0,
                'closing_credit' => 0,
            ];

            if ($children->count() > 0) {
                $childrenData = $this->buildTrialBalanceHierarchy($children, $filters, $level + 1);

                // Calculate children totals (from ALL descendants, not just direct children)
                foreach ($childrenData as $child) {
                    // Add amounts from all descendants (recursive)
                    // Use total amounts for parent accounts, own amounts for leaf accounts
                    $childrenTotals['opening_debit'] += $child['total_opening_debit'];
                    $childrenTotals['opening_credit'] += $child['total_opening_credit'];
                    $childrenTotals['movement_debit'] += $child['total_movement_debit'];
                    $childrenTotals['movement_credit'] += $child['total_movement_credit'];
                    $childrenTotals['net_movement_debit'] += $child['total_net_movement_debit'];
                    $childrenTotals['net_movement_credit'] += $child['total_net_movement_credit'];
                    $childrenTotals['closing_debit'] += $child['total_closing_debit'];
                    $childrenTotals['closing_credit'] += $child['total_closing_credit'];
                }
            }

            // Calculate total amounts (own + all descendants)
            $totalOpeningDebit = $balanceData['opening_debit'] + $childrenTotals['opening_debit'];
            $totalOpeningCredit = $balanceData['opening_credit'] + $childrenTotals['opening_credit'];
            $totalMovementDebit = $balanceData['movement_debit'] + $childrenTotals['movement_debit'];
            $totalMovementCredit = $balanceData['movement_credit'] + $childrenTotals['movement_credit'];
            $totalNetMovementDebit = $balanceData['net_movement_debit'] + $childrenTotals['net_movement_debit'];
            $totalNetMovementCredit = $balanceData['net_movement_credit'] + $childrenTotals['net_movement_credit'];
            $totalClosingDebit = $balanceData['closing_debit'] + $childrenTotals['closing_debit'];
            $totalClosingCredit = $balanceData['closing_credit'] + $childrenTotals['closing_credit'];

            $accountData = [
                'id' => $account->id,
                'code' => $account->code,
                'name' => method_exists($account, 'getTranslatedField') ? $account->getTranslatedField('name') : $account->name,
                'type' => $account->type ? $account->type->name : 'Unknown',
                'level' => $level,
                'is_parent' => $children->count() > 0,

                // Own account data
                'opening_debit' => round($balanceData['opening_debit'], 2),
                'opening_credit' => round($balanceData['opening_credit'], 2),
                'movement_debit' => round($balanceData['movement_debit'], 2),
                'movement_credit' => round($balanceData['movement_credit'], 2),
                'net_movement_debit' => round($balanceData['net_movement_debit'], 2),
                'net_movement_credit' => round($balanceData['net_movement_credit'], 2),
                'closing_debit' => round($balanceData['closing_debit'], 2),
                'closing_credit' => round($balanceData['closing_credit'], 2),

                // Children totals
                'children_opening_debit' => round($childrenTotals['opening_debit'], 2),
                'children_opening_credit' => round($childrenTotals['opening_credit'], 2),
                'children_movement_debit' => round($childrenTotals['movement_debit'], 2),
                'children_movement_credit' => round($childrenTotals['movement_credit'], 2),
                'children_net_movement_debit' => round($childrenTotals['net_movement_debit'], 2),
                'children_net_movement_credit' => round($childrenTotals['net_movement_credit'], 2),
                'children_closing_debit' => round($childrenTotals['closing_debit'], 2),
                'children_closing_credit' => round($childrenTotals['closing_credit'], 2),

                // Total amounts (own + children)
                'total_opening_debit' => round($totalOpeningDebit, 2),
                'total_opening_credit' => round($totalOpeningCredit, 2),
                'total_movement_debit' => round($totalMovementDebit, 2),
                'total_movement_credit' => round($totalMovementCredit, 2),
                'total_net_movement_debit' => round($totalNetMovementDebit, 2),
                'total_net_movement_credit' => round($totalNetMovementCredit, 2),
                'total_closing_debit' => round($totalClosingDebit, 2),
                'total_closing_credit' => round($totalClosingCredit, 2),

                'children' => $childrenData,
            ];

            $result[] = $accountData;
        }

        return $result;
    }

    /**
     * Calculate detailed account balance information
     * Only calculate balances for leaf accounts (accounts without children)
     */
    private function calculateAccountBalanceDetails($account, $filters, $journalEntryData = null)
    {
        // Check if this account has children
        $hasChildren = $account->children()->where('is_active', true)->exists();

        // If account has children, return zero balances (parent accounts are not calculated)
        if ($hasChildren) {
            return [
                'opening_debit' => 0,
                'opening_credit' => 0,
                'movement_debit' => 0,
                'movement_credit' => 0,
                'net_movement_debit' => 0,
                'net_movement_credit' => 0,
                'closing_debit' => 0,
                'closing_credit' => 0,
            ];
        }

        // Use pre-loaded data if available (much faster)
        if ($journalEntryData && isset($journalEntryData[$account->id])) {
            $data = $journalEntryData[$account->id];

            $openingBalance = $data['opening_debit'] - $data['opening_credit'];
            $openingDebit = max($openingBalance, 0);
            $openingCredit = $openingBalance < 0 ? abs($openingBalance) : 0;

            $movementDebits = $data['movement_debit'];
            $movementCredits = $data['movement_credit'];
            $netMovement = $movementDebits - $movementCredits;
            $netMovementDebit = max($netMovement, 0);
            $netMovementCredit = $netMovement < 0 ? abs($netMovement) : 0;

            $closingBalance = $openingBalance + $netMovement;
            $closingDebit = max($closingBalance, 0);
            $closingCredit = $closingBalance < 0 ? abs($closingBalance) : 0;
        } else {
            // Fallback to original method if pre-loaded data not available
            return $this->calculateAccountBalanceDetailsOriginal($account, $filters);
        }

        return [
            'opening_debit' => $openingDebit,
            'opening_credit' => $openingCredit,
            'movement_debit' => $movementDebits,
            'movement_credit' => $movementCredits,
            'net_movement_debit' => $netMovementDebit,
            'net_movement_credit' => $netMovementCredit,
            'closing_debit' => $closingDebit,
            'closing_credit' => $closingCredit,
        ];
    }

    /**
     * Original calculateAccountBalanceDetails method (fallback)
     */
    private function calculateAccountBalanceDetailsOriginal($account, $filters)
    {
        // Build base query for journal entries
        $baseQuery = \App\Models\JournalEntry::query()
            ->where('status', 'posted')
            ->whereHas('lines', function ($query) use ($account) {
                $query->where('chart_of_account_id', $account->id);
            });

        // Apply branch filter
        if (isset($filters['branch_id']) && $filters['branch_id']) {
            $baseQuery->where('branch_id', $filters['branch_id']);
        }

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $baseQuery->where('fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $baseQuery->where('accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $baseQuery->whereBetween('entry_date', [$filters['from_date'], $filters['to_date']]);
        }

        // Calculate opening balance (before the current period)
        $openingBalanceQuery = clone $baseQuery;

        if ($filters['fiscal_year_id']) {
            $fiscalYear = \App\Models\FiscalYear::findOrFail($filters['fiscal_year_id']);
            $openingBalanceQuery->where('entry_date', '<', $fiscalYear->start_date);
            Log::info("CalculateAccountBalance - Using fiscal year: {$fiscalYear->name} (start: {$fiscalYear->start_date})");
        } elseif ($filters['accounting_period_id']) {
            $accountingPeriod = \App\Models\AccountingPeriod::findOrFail($filters['accounting_period_id']);
            $openingBalanceQuery->where('entry_date', '<', $accountingPeriod->start_date);
            Log::info("CalculateAccountBalance - Using accounting period: {$accountingPeriod->name} (start: {$accountingPeriod->start_date})");
        } elseif ($filters['from_date']) {
            $openingBalanceQuery->where('entry_date', '<', $filters['from_date']);
            Log::info("CalculateAccountBalance - Using from_date: {$filters['from_date']}");
        } else {
            // Default to current year
            $openingBalanceQuery->where('entry_date', '<', now()->startOfYear());
            Log::info('CalculateAccountBalance - Using default current year: '.now()->startOfYear());
        }

        // Use efficient database aggregation instead of loading all entries
        $openingTotals = $openingBalanceQuery
            ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
            ->where('journal_entry_lines.chart_of_account_id', $account->id)
            ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
            ->first();

        $openingDebits = $openingTotals->total_debits ?? 0;
        $openingCredits = $openingTotals->total_credits ?? 0;

        Log::info("CalculateAccountBalance - Opening balance for account {$account->id}: debits={$openingDebits}, credits={$openingCredits}");

        $openingBalance = $openingDebits - $openingCredits;
        $openingDebit = max($openingBalance, 0);
        $openingCredit = $openingBalance < 0 ? abs($openingBalance) : 0;

        // Calculate movements (within the current period) using efficient database aggregation
        $movementTotals = $baseQuery
            ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
            ->where('journal_entry_lines.chart_of_account_id', $account->id)
            ->selectRaw('SUM(journal_entry_lines.debit_amount) as total_debits, SUM(journal_entry_lines.credit_amount) as total_credits')
            ->first();

        $movementDebits = $movementTotals->total_debits ?? 0;
        $movementCredits = $movementTotals->total_credits ?? 0;

        Log::info("CalculateAccountBalance - Movement balance for account {$account->id}: debits={$movementDebits}, credits={$movementCredits}");

        $netMovement = $movementDebits - $movementCredits;
        $netMovementDebit = max($netMovement, 0);
        $netMovementCredit = $netMovement < 0 ? abs($netMovement) : 0;

        // Calculate closing balance
        $closingBalance = $openingBalance + $netMovement;
        $closingDebit = max($closingBalance, 0);
        $closingCredit = $closingBalance < 0 ? abs($closingBalance) : 0;

        return [
            'opening_debit' => $openingDebit,
            'opening_credit' => $openingCredit,
            'movement_debit' => $movementDebits,
            'movement_credit' => $movementCredits,
            'net_movement_debit' => $netMovementDebit,
            'net_movement_credit' => $netMovementCredit,
            'closing_debit' => $closingDebit,
            'closing_credit' => $closingCredit,
        ];
    }

    /**
     * Calculate grand totals for trial balance
     * Only include leaf accounts (accounts without children) in grand totals
     */
    private function calculateGrandTotals($trialBalanceData)
    {
        $totals = [
            'opening_debit' => 0,
            'opening_credit' => 0,
            'movement_debit' => 0,
            'movement_credit' => 0,
            'net_movement_debit' => 0,
            'net_movement_credit' => 0,
            'closing_debit' => 0,
            'closing_credit' => 0,
        ];

        // Recursively calculate totals from leaf accounts only
        $this->addLeafAccountTotals($trialBalanceData, $totals);

        // Check if trial balance is balanced (total debits = total credits)
        $totalDebits = $totals['closing_debit'];
        $totalCredits = $totals['closing_credit'];
        $isBalanced = abs($totalDebits - $totalCredits) < 0.01;

        return [
            'opening_debit' => round($totals['opening_debit'], 2),
            'opening_credit' => round($totals['opening_credit'], 2),
            'movement_debit' => round($totals['movement_debit'], 2),
            'movement_credit' => round($totals['movement_credit'], 2),
            'net_movement_debit' => round($totals['net_movement_debit'], 2),
            'net_movement_credit' => round($totals['net_movement_credit'], 2),
            'closing_debit' => round($totals['closing_debit'], 2),
            'closing_credit' => round($totals['closing_credit'], 2),
            'total_debits' => round($totalDebits, 2),
            'total_credits' => round($totalCredits, 2),
            'difference' => round($totalDebits - $totalCredits, 2),
            'is_balanced' => $isBalanced,
        ];
    }

    /**
     * Recursively add totals from leaf accounts only
     */
    private function addLeafAccountTotals($accounts, &$totals)
    {
        foreach ($accounts as $account) {
            // Only add totals from leaf accounts (accounts without children)
            if (! $account['is_parent']) {
                $totals['opening_debit'] += $account['opening_debit'];
                $totals['opening_credit'] += $account['opening_credit'];
                $totals['movement_debit'] += $account['movement_debit'];
                $totals['movement_credit'] += $account['movement_credit'];
                $totals['net_movement_debit'] += $account['net_movement_debit'];
                $totals['net_movement_credit'] += $account['net_movement_credit'];
                $totals['closing_debit'] += $account['closing_debit'];
                $totals['closing_credit'] += $account['closing_credit'];
            }

            // Recursively process children
            if (! empty($account['children'])) {
                $this->addLeafAccountTotals($account['children'], $totals);
            }
        }
    }

    /**
     * Cost Center Statement Report
     */
    public function costCenterStatement(Request $request)
    {
        try {
            $this->validate($request, [
                'cost_center_id' => 'required|exists:cost_centers,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            $costCenter = \App\Models\CostCenter::with('parent')->findOrFail($request->cost_center_id);

            $query = \App\Models\JournalEntryLine::with(['journalEntry', 'chartOfAccount'])
                ->where('cost_center_id', $request->cost_center_id);

            if ($request->from_date) {
                $query->whereHas('journalEntry', function ($q) use ($request) {
                    $q->where('entry_date', '>=', $request->from_date);
                });
            }

            if ($request->to_date) {
                $query->whereHas('journalEntry', function ($q) use ($request) {
                    $q->where('entry_date', '<=', $request->to_date);
                });
            }

            $lines = $query->get();

            $totals = [
                'debit' => $lines->sum('debit_amount'),
                'credit' => $lines->sum('credit_amount'),
                'net' => $lines->sum('debit_amount') - $lines->sum('credit_amount'),
            ];

            return response()->json([
                'cost_center' => [
                    'id' => $costCenter->id,
                    'code' => $costCenter->code,
                    'name' => $costCenter->name,
                    'full_path' => $costCenter->getFullPath(),
                ],
                'period' => [
                    'from_date' => $request->from_date,
                    'to_date' => $request->to_date,
                ],
                'lines' => $lines->map(function ($line) {
                    return [
                        'date' => $line->journalEntry->entry_date,
                        'account_code' => $line->chartOfAccount->code,
                        'account_name' => $line->chartOfAccount->name,
                        'description' => $line->description,
                        'debit' => $line->debit_amount,
                        'credit' => $line->credit_amount,
                    ];
                }),
                'totals' => $totals,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Cost Allocation Report
     */
    public function costAllocationReport(Request $request)
    {
        try {
            $this->validate($request, [
                'rule_id' => 'nullable|exists:cost_allocation_rules,id',
                'from_date' => 'nullable|date',
                'to_date' => 'nullable|date|after_or_equal:from_date',
            ]);

            $query = \App\Models\CostAllocationExecution::with(['rule.sourceCostCenter', 'journalEntry', 'executor']);

            if ($request->rule_id) {
                $query->where('cost_allocation_rule_id', $request->rule_id);
            }

            if ($request->from_date) {
                $query->where('execution_date', '>=', $request->from_date);
            }

            if ($request->to_date) {
                $query->where('execution_date', '<=', $request->to_date);
            }

            $executions = $query->get();

            return response()->json([
                'executions' => $executions->map(function ($execution) {
                    return [
                        'id' => $execution->id,
                        'rule_name' => $execution->rule->name,
                        'source_cost_center' => $execution->rule->sourceCostCenter->name,
                        'execution_date' => $execution->execution_date,
                        'period_start' => $execution->period_start_date,
                        'period_end' => $execution->period_end_date,
                        'total_amount' => $execution->total_amount,
                        'status' => $execution->status,
                        'executed_by' => $execution->executor->name,
                        'journal_entry_id' => $execution->journal_entry_id,
                    ];
                }),
                'summary' => [
                    'total_executions' => $executions->count(),
                    'total_amount' => $executions->sum('total_amount'),
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    private function getUserBranchIds($user)
    {
        $branchIds = [];

        // Return [0] if user is null
        if (! $user) {
            return [0];
        }

        // Super admin (account_role === 1) has access to all active branches
        if ((int) $user->account_role === 1) {
            $allBranchIds = DB::table('branches')
                ->whereNull('deleted_at')
                ->where('is_active', true)
                ->pluck('id')
                ->toArray();

            return ! empty($allBranchIds) ? array_values($allBranchIds) : [0];
        }

        // Add default branch if set (always include it even if not in branch_user table)
        $defaultBranchId = (int) ($user->default_branch_id ?? 0);
        if ($defaultBranchId > 0) {
            $branchIds[] = $defaultBranchId;
        }

        // Add all branches the user has access to from branch_user table
        $userBranchIds = DB::table('branch_user')
            ->where('user_id', $user->id)
            ->pluck('branch_id')
            ->toArray();

        $branchIds = array_merge($branchIds, $userBranchIds);

        // Remove duplicates and filter out zeros
        $branchIds = array_unique(array_filter($branchIds, function ($id) {
            return $id > 0;
        }));

        // If no branches found, return [0] to prevent empty array issues
        return ! empty($branchIds) ? array_values($branchIds) : [0];
    }
}

<?php

namespace App\Http\Controllers\API;

use DateTime;
use Exception;
use Carbon\Carbon;
use App\Models\Asset;
use App\Models\Client;
use App\Models\Account;
use App\Models\Expense;
use App\Models\Invoice;
use App\Models\Payroll;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\Supplier;
use App\Models\LoanPayment;
use Illuminate\Http\Request;
use App\Models\InvoiceReturn;
use App\Models\LoanAuthority;
use App\Models\BalanceTansfer;
use App\Models\InvoicePayment;
use App\Models\InvoiceProduct;
use App\Models\PurchaseReturn;
use App\Models\PurchasePayment;
use App\Models\PurchaseProduct;
use App\Models\AdjustmentProduct;
use App\Models\NonInvoicePayment;
use App\Models\NonPurchasePayment;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\InvoiceReturnProduct;
use App\Models\PurchaseReturnProduct;
use App\Http\Resources\ClientResource;
use App\Http\Resources\ExpenseResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\SupplierResource;
use App\Http\Resources\InvoiceListResource;
use App\Http\Resources\InvoicePaymentResource;

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

    // return balance sheet data based on chart of accounts and journal entries
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

            // Get all chart of accounts with their balances
            $chartOfAccounts = \App\Models\ChartOfAccount::with('type')
                ->where('is_active', true)
                ->get();

            // Calculate balances for each account type
            $accountTypeBalances = $this->calculateAccountTypeBalances($chartOfAccounts, $filters);

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

            // Get detailed account breakdown
            $assetAccounts = $this->getAccountDetailsByType($chartOfAccounts, 'Asset', $filters);
            $liabilityAccounts = $this->getAccountDetailsByType($chartOfAccounts, 'Liability', $filters);
            $equityAccounts = $this->getAccountDetailsByType($chartOfAccounts, 'Equity', $filters);

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
                    'legacy_data' => [
                        'assets' => round($totalAssetsAmount, 2),
                        'inventoryValue' => $this->getAccountBalance($chartOfAccounts, 'Inventory', $filters),
                        'clientTotalDue' => $this->getAccountBalance($chartOfAccounts, 'Accounts Receivable', $filters),
                        'bankBalance' => $this->getAccountBalance($chartOfAccounts, 'Bank Accounts', $filters),
                        'supplierDue' => $this->getAccountBalance($chartOfAccounts, 'Accounts Payable', $filters),
                        'loanDue' => $this->getAccountBalance($chartOfAccounts, 'Loans Payable', $filters),
                        'buisnessTotal' => round($totalAssetsAmount, 2),
                        'liabilities' => round($totalLiabilities, 2),
                        'totalAsset' => round($totalAssetsAmount - $totalLiabilities, 2),
                    ]
                ]
            ];

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate balance sheet',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    /**
     * Calculate balances for each account type
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
     * Get account details by type
     */
    private function getAccountDetailsByType($chartOfAccounts, $typeName, $filters)
    {
        return $chartOfAccounts
            ->filter(function($account) use ($typeName) {
                return ($account->type->name ?? '') === $typeName;
            })
            ->map(function($account) use ($filters) {
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
     * Get balance for a specific account by name
     */
    private function getAccountBalance($chartOfAccounts, $accountName, $filters)
    {
        $account = $chartOfAccounts->firstWhere('name', $accountName);
        if (!$account) {
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
            ->whereHas('lines', function($query) use ($account) {
                $query->where('chart_of_account_id', $account->id);
            });

        // Apply filters
        if ($filters['fiscal_year_id']) {
            $query->where('fiscal_year_id', $filters['fiscal_year_id']);
        } elseif ($filters['accounting_period_id']) {
            $query->where('accounting_period_id', $filters['accounting_period_id']);
        } elseif ($filters['from_date'] && $filters['to_date']) {
            $query->whereBetween('entry_date', [$filters['from_date'], $filters['to_date']]);
        }

        // Calculate balance
        $debits = $query->get()->sum(function($entry) use ($account) {
            return $entry->lines->where('chart_of_account_id', $account->id)->sum('debit_amount');
        });

        $credits = $query->get()->sum(function($entry) use ($account) {
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

        $month = $request->month;
        $year = $request->year;
        $dateObj = DateTime::createFromFormat('!m', $month);
        $monthName = $dateObj->format('F');

        // general expenses for a given month and year
        $expenses = Expense::select(DB::raw('SUM(account_transactions.amount) As expAmount'))
            ->leftJoin('account_transactions', 'account_transactions.id', '=', 'expenses.transaction_id')
            ->where('expenses.status', 1)
            ->whereYear('expenses.date', '=', $year)
            ->whereMonth('expenses.date', '=', $month)
            ->first();

        // payrolls for a given month and year
        $payrolls = Payroll::select(DB::raw('SUM(account_transactions.amount) As payrollAmount'))
            ->leftJoin('account_transactions', 'account_transactions.id', '=', 'payrolls.transaction_id')
            ->where('payrolls.status', 1)
            ->where('payrolls.salary_month', '=', $monthName)
            ->whereYear('payrolls.salary_date', '=', $year)
            ->first();

        // loan interests for a given month and year
        $loanInterest = LoanPayment::where('status', 1)->whereYear('date', '=', $year)->whereMonth('date', '=', $month)->sum('interest');

        $numOfDays = cal_days_in_month(CAL_GREGORIAN, $month, $year);
        $fromDate = $year . '-' . $month . '-01';
        $toDate = $year . '-' . $month . '-' . $numOfDays;
        // assets depreciation for a given month and year
        $assetDepriciation = DB::select('SELECT Sum( case when NumberOfDays > 0 then  new_assets.daily_depreciation * NumberOfDays else 0 end) as total_dep FROM ( SELECT daily_depreciation, ( CASE WHEN date < "' . $fromDate . '" && expire_date > "' . $toDate . '" THEN DATEDIFF("' . $toDate . '", "' . $fromDate . '") WHEN expire_date > "' . $fromDate . '" && expire_date < "' . $toDate . '" THEN DATEDIFF("' . $fromDate . '", expire_date) ELSE DATEDIFF("' . $toDate . '", date) END) AS NumberOfDays FROM assets WHERE depreciation = 1 AND status = 1 AND expire_date >= "' . $fromDate . '" ) AS new_assets');

        // Total purchases for a given month and year
        $purchases = Purchase::where('status', 1)->whereYear('purchase_date', '=', $year)->whereMonth('purchase_date', '=', $month)->get();
        $totalPurchase = $purchases->sum('sub_total') - $purchases->sum('discount') + $purchases->sum('transport') + $purchases->sum('total_tax');

        // opening balances for a given month and year
        $openingBalances = DB::select('SELECT A.account_number, A.bank_name, SUM(IF(`type`=1, `amount`, 0))-SUM(IF(`type`=0, `amount`, 0)) AS `current_balance`
        FROM `accounts`  as A
        LEFT  JOIN account_transactions as T ON A.id = T.account_id
        AND T.status = 1 AND DATE(T.transaction_date) < "' . $fromDate . '"  GROUP BY A.id');

        // closing balances for a given month and year
        $closingBalances = DB::select('SELECT A.account_number, A.bank_name, SUM(IF(`type`=1, `amount`, 0))-SUM(IF(`type`=0, `amount`, 0)) AS `current_balance`
        FROM `accounts`  as A
        LEFT  JOIN account_transactions as T ON A.id = T.account_id
        AND T.status = 1 AND DATE(T.transaction_date) < "' . $toDate . '"  GROUP BY A.id');

        // invoice salesfor a given month and year
        $invoiceSales = Invoice::where('status', 1)->whereYear('invoice_date', '=', $year)->whereMonth('invoice_date', '=', $month)->sum('sub_total');

        // invoice due a given month and year
        $invoiceTotalPaid = InvoicePayment::where('status', 1)->whereYear('date', '=', $year)->whereMonth('date', '=', $month)->sum('amount');
        $invoiceDue = $invoiceSales - $invoiceTotalPaid;

        // account collection balances for a given month and year
        $accountCollections = DB::select('SELECT accounts.account_number, accounts.bank_name, SUM(IF(`type`= 1, `amount`, 0)) AS `total_collection`
        FROM `account_transactions`
        JOIN accounts ON accounts.id = account_transactions.account_id
        WHERE account_transactions.status = 1 AND MONTH(transaction_date)= "' . $month . '" AND YEAR(transaction_date)="' . $year . '" GROUP BY account_transactions.account_id');

        // balance transfer
        $balanceTransfers = BalanceTansfer::with('debitTransaction.cashbookAccount', 'creditTransaction.cashbookAccount')->where('status', 1)->whereYear('date', '=', $year)->whereMonth('date', '=', $month)->get();

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

    // return profit loss report data
    public function profitLossReport(Request $request)
    {
        if ($request->reportType == 1) {
            $products = [];
            $inventoryOuts = InvoiceProduct::with('invoice', 'product')->whereHas('invoice', function ($newQuery) use ($request) {
                $newQuery->where('status', 1)->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
            })->groupBy('product_id')
                ->selectRaw('sum(quantity) as sumQty, product_id')
                ->selectRaw('sum(purchase_price * quantity) as purchasePrice, product_id')
                ->selectRaw('sum(sale_price * quantity) as salePrice, product_id')
                ->get();

            foreach ($inventoryOuts  as $key => $inventoryOut) {
                $returnQty = InvoiceReturnProduct::with('invoiceReturn.invoice')->whereHas('invoiceReturn', function ($newQuery) use ($request) {
                    $newQuery->whereHas('invoice', function ($anotherQuery) use ($request) {
                        $anotherQuery->where('status', 1)->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
                    });
                })->where('product_id', $inventoryOut->product->id)->sum('quantity');

                $currentQty = $inventoryOut->sumQty - $returnQty;
                $avgPurchasePrice = $inventoryOut->purchasePrice / $inventoryOut->sumQty;
                $avgSalePrice = $inventoryOut->salePrice / $inventoryOut->sumQty;
                $profitOrLoss = ($avgSalePrice * $currentQty) - ($avgPurchasePrice * $currentQty);

                $products[$key]['itemCode'] = $inventoryOut->product->code;
                $products[$key]['code'] = $inventoryOut->product->code;
                $products[$key]['itemName'] = $inventoryOut->product->name;
                $products[$key]['avgPurchasePrice'] = round($avgPurchasePrice, 2);
                $products[$key]['avgSalePrice'] = round($avgSalePrice, 2);
                $products[$key]['invoiceQty'] = $inventoryOut->sumQty;
                $products[$key]['currentQty'] = $currentQty;
                $products[$key]['returnQty'] = $returnQty > 0 ? $returnQty : 0;
                $products[$key]['profitOrLoss'] = round($profitOrLoss, 2);
            }

            return [
                'type' => 1,
                'reportData' => $products,
            ];
        } else {
            $fromDate = date_format((date_create($request->fromDate)), 'Y-m-d');
            $toDate = date_format((date_create($request->toDate)), 'Y-m-d');
            $daysDifference = strtotime($toDate) - strtotime($fromDate);
            $daysDifference = floor($daysDifference / (60 * 60 * 24)) + 1;

            // total sales between a given date range
            $totalSales = Invoice::where('status', 1)->whereBetween('invoice_date', [$request->fromDate, $request->toDate])->sum('sub_total');

            // cost of goods sold between a given date range
            $invoicePurchasePrice = InvoiceProduct::with('invoice')->whereHas('invoice', function ($newQuery) use ($request) {
                $newQuery->where('status', 1)->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
            })->get()->sum(function ($row) {
                return $row->purchase_price * $row->quantity;
            });

            $returnPurchasePrice = InvoiceReturnProduct::with('invoiceReturn.invoice')->whereHas('invoiceReturn', function ($newQuery) use ($request) {
                $newQuery->whereHas('invoice', function ($anotherQuery) use ($request) {
                    $anotherQuery->where('status', 1)->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
                });
            })->get()->sum(function ($row) {
                return $row->purchase_price * $row->quantity;
            });
            $costOfGoodsSold = $invoicePurchasePrice - $returnPurchasePrice;

            // inventory positive adjustment
            $posAdjustment = AdjustmentProduct::with('inventoryAdjustment')->whereHas('inventoryAdjustment', function ($newQuery) use ($request) {
                $newQuery->where('status', 1)->where('type', 1)->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->get()->sum(function ($row) {
                return $row->purchase_price * $row->quantity;
            });

            // inventory negative adjustment
            $negAdjustment = AdjustmentProduct::with('inventoryAdjustment')->whereHas('inventoryAdjustment', function ($newQuery) use ($request) {
                $newQuery->where('status', 1)->where('type', 0)->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->get()->sum(function ($row) {
                return $row->purchase_price * $row->quantity;
            });

            // general expenses between a given date range
            $expenses = Expense::select(DB::raw('SUM(account_transactions.amount) As expAmount'))
                ->leftJoin('account_transactions', 'account_transactions.id', '=', 'expenses.transaction_id')
                ->where('expenses.status', 1)->whereBetween('expenses.date', [$request->fromDate, $request->toDate])
                ->first();

            // payrolls between a given date range
            $payrolls = Payroll::select(DB::raw('SUM(account_transactions.amount) As payrollAmount'))
                ->leftJoin('account_transactions', 'account_transactions.id', '=', 'payrolls.transaction_id')
                ->where('payrolls.status', 1)->whereBetween('payrolls.salary_date', [$request->fromDate, $request->toDate])
                ->first();

            // loan interests between a given date range
            $loanInterest = LoanPayment::where('status', 1)->whereBetween('date', [$request->fromDate, $request->toDate])->sum('interest');

            $assetDepriciation = Asset::where('status', 1)
                ->where('depreciation', 1)
                ->where('expire_date', '>=', date('Y-m-d'))
                ->sum('daily_depreciation') * $daysDifference;


            $products = [];
            $inventoryOuts = InvoiceProduct::with('invoice', 'product')->whereHas('invoice', function ($newQuery) use ($request) {
                $newQuery->where('status', 1)->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
            })->groupBy('product_id')
                ->selectRaw('sum(quantity) as sumQty, product_id')
                ->selectRaw('sum(purchase_price * quantity) as purchasePrice, product_id')
                ->selectRaw('sum(sale_price * quantity) as salePrice, product_id')
                ->get();

            foreach ($inventoryOuts  as $key => $inventoryOut) {
                $returnQty = InvoiceReturnProduct::with('invoiceReturn.invoice')->whereHas('invoiceReturn', function ($newQuery) use ($request) {
                    $newQuery->whereHas('invoice', function ($anotherQuery) use ($request) {
                        $anotherQuery->where('status', 1)->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
                    });
                })->where('product_id', $inventoryOut->product->id)->sum('quantity');

                $currentQty = $inventoryOut->sumQty - $returnQty;
                $avgPurchasePrice = $inventoryOut->purchasePrice / $inventoryOut->sumQty;
                $avgSalePrice = $inventoryOut->salePrice / $inventoryOut->sumQty;
                $profitOrLoss = ($avgSalePrice * $currentQty) - ($avgPurchasePrice * $currentQty);

                $products[$key]['itemCode'] = $inventoryOut->product->code;
                $products[$key]['code'] = $inventoryOut->product->code;
                $products[$key]['itemName'] = $inventoryOut->product->name;
                $products[$key]['avgPurchasePrice'] = round($avgPurchasePrice, 2);
                $products[$key]['avgSalePrice'] = round($avgSalePrice, 2);
                $products[$key]['invoiceQty'] = $inventoryOut->sumQty;
                $products[$key]['currentQty'] = $currentQty;
                $products[$key]['returnQty'] = $returnQty > 0 ? $returnQty : 0;
                $products[$key]['profitOrLoss'] = round($profitOrLoss, 2);
            }

            $totalSaleReturn = 0;
            foreach ($products as $product) {
                $totalSaleReturn += $product['returnQty'] * $product['avgSalePrice'];
            }

            $grossProfitOrLoss = round(($totalSales + $posAdjustment - ($costOfGoodsSold + $negAdjustment + $totalSaleReturn)), 2);
            $totalExpense = round(($expenses->expAmount + $payrolls->payrollAmount + $loanInterest + $assetDepriciation), 2);
            $netProfitOrLoss = round(($grossProfitOrLoss - $totalExpense), 2);

            $data = [[
                'totalSales' => round($totalSales, 2),
                'totalSalesReturn' => round($totalSaleReturn, 2),
                'costOfGoodsSold' => round($costOfGoodsSold, 2),
                'posAdjustment' => round($posAdjustment, 2),
                'negAdjustment' => round($negAdjustment, 2),
                'totalAdjustment' => round($posAdjustment - $negAdjustment, 2),
                'expenseAmount' => round($expenses->expAmount, 2),
                'payrollAmount' => round($payrolls->payrollAmount, 2),
                'loanInterest' => round($loanInterest, 2),
                'assetDepriciation' => round($assetDepriciation, 2),
                'grossProfitOrLoss' => round($grossProfitOrLoss, 2),
                'totalExpense' => round($totalExpense, 2),
                'netProfitOrLoss' => round($netProfitOrLoss, 2),
            ]];

            return [
                'type' => 0,
                'reportData' => $data,
            ];
        }
    }

    //return expense report data
    public function expenseReport(Request $request)
    {
        // validate request
        $this->validate($request, [
            'category' => 'required',
            'subCategory' => ($request->category && $request->category['id'] != 0) ? 'required' : 'nullable',
        ]);
        $expenses = '';
        if (isset($request->category) && isset($request->subCategory)) {
            if ($request->subCategory['id'] != 0) {
                $expenses = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount', 'user')->where('sub_cat_id', $request->subCategory['id'])->whereBetween('date', [$request->fromDate, $request->toDate])->get();
            } else {
                $expenses = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount')->whereBetween('date', [$request->fromDate, $request->toDate])
                    ->whereHas('expSubCategory', function ($newQuery) use ($request) {
                        $newQuery->whereHas('expCategory', function ($newQuery) use ($request) {
                            $newQuery->where('id', $request->category['id']);
                        });
                    })->get();
            }
        } else {
            $expenses = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount', 'user')->whereBetween('date', [$request->fromDate, $request->toDate])->get();
        }

        return ExpenseResource::collection($expenses);
    }

    // return items report data
    public function itemsReport(Request $request)
    {
        // validate request
        $this->validate($request, [
            'productName' => 'required',
        ]);

        try {
            $product = Product::where('slug', $request->productName['slug'])->with('proSubCategory.category', 'productUnit')->first();

            // stock ins
            $purchaseIns = PurchaseProduct::with('purchase.supplier')->where('product_id', $product->id)->whereHas('purchase', function ($newQuery) use ($request) {
                $newQuery->whereBetween('purchase_date', [$request->fromDate, $request->toDate]);
            })->get();

            $invoiceReturnIns = InvoiceReturnProduct::with('invoiceReturn.invoice.client')->where('product_id', $product->id)->whereHas('invoiceReturn', function ($newQuery) use ($request) {
                $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->get();

            $adjutmentIns = AdjustmentProduct::with('inventoryAdjustment')->where('product_id', $product->id)->where('type', 1)->whereHas('inventoryAdjustment', function ($newQuery) use ($request) {
                $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->get();

            $stockIns = [];
            // purchases
            foreach ($purchaseIns as $key => $inventoryIn) {
                $stockIns[$key]['quantity'] = $inventoryIn->quantity;
                $stockIns[$key]['date'] = $inventoryIn->purchase->purchase_date;
                $stockIns[$key]['supplier'] = $inventoryIn->purchase->supplier->name;
                $stockIns[$key]['price'] = $inventoryIn->purchase_price;
                $stockIns[$key]['type'] = 'Purchase';
                $stockIns[$key]['purchaseNo'] = $inventoryIn->purchase->purchase_no;
                $stockIns[$key]['code'] = config('config.purchasePrefix') . '-' . $inventoryIn->purchase->purchase_no;
            }

            $length = count($stockIns);
            // Invoice returns
            foreach ($invoiceReturnIns as $key => $inventoryIn) {
                $stockIns[$length]['quantity'] = $inventoryIn->quantity;
                $stockIns[$length]['date'] = $inventoryIn->invoiceReturn->date;
                $stockIns[$length]['client'] = $inventoryIn->invoiceReturn->invoice->client->name;
                $stockIns[$length]['price'] = $inventoryIn->purchase_price;
                $stockIns[$length]['type'] = 'Invoice Return';
                $stockIns[$length++]['code'] = config('config.invoiceReturnPrefix') . '-' . $inventoryIn->invoiceReturn->return_no;
            }

            $length = count($stockIns);
            // Inventory adjustments
            foreach ($adjutmentIns as $key => $inventoryIn) {
                $stockIns[$length]['code'] = config('config.adjustmentPrefix') . '-' . $inventoryIn->inventoryAdjustment->code;
                $stockIns[$length]['quantity'] = $inventoryIn->quantity;
                $stockIns[$length]['date'] = $inventoryIn->inventoryAdjustment->date;
                $stockIns[$length]['reason'] = $inventoryIn->inventoryAdjustment->reason;
                $stockIns[$length]['price'] = $inventoryIn->purchase_price;
                $stockIns[$length++]['type'] = 'Adjustment';
            }

            // stock outs
            $adjutmentOuts = AdjustmentProduct::with('inventoryAdjustment')->where('product_id', $product->id)->where('type', 0)->whereHas('inventoryAdjustment', function ($newQuery) use ($request) {
                $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->get();

            $inventoryOuts = InvoiceProduct::with('invoice.client')->where('product_id', $product->id)->whereHas('invoice', function ($newQuery) use ($request) {
                $newQuery->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
            })->get();

            $purchaseReturnOuts = PurchaseReturnProduct::with('purchaseReturn.purchase.supplier')->where('product_id', $product->id)->whereHas('purchaseReturn', function ($newQuery) use ($request) {
                $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->get();

            $stockOuts = [];
            // Invoice sales
            foreach ($inventoryOuts as $key => $inventoryOut) {
                $stockOuts[$key]['quantity'] = $inventoryOut->quantity;
                $stockOuts[$key]['invoiceNo'] = $inventoryOut->invoice->invoice_no;
                $stockOuts[$key]['date'] = $inventoryOut->invoice->invoice_date;
                $stockOuts[$key]['price'] = $inventoryOut->sale_price;
                $stockOuts[$key]['client'] = $inventoryOut->invoice->client->name;
                $stockOuts[$key]['code'] = config('config.invoicePrefix') . '-' . $inventoryOut->invoice->invoice_no;
                $stockOuts[$key]['type'] = 'Invoice';
            }

            $length = count($stockOuts);
            // Inventory adjustments
            foreach ($adjutmentOuts as $key => $adjutmentOut) {
                $stockOuts[$length]['code'] = config('config.adjustmentPrefix') . '-' . $adjutmentOut->inventoryAdjustment->code;
                $stockOuts[$length]['quantity'] = $adjutmentOut->quantity;
                $stockOuts[$length]['date'] = $adjutmentOut->inventoryAdjustment->date;
                $stockOuts[$length]['reason'] = $adjutmentOut->inventoryAdjustment->reason;
                $stockOuts[$length]['price'] = $adjutmentOut->purchase_price;
                $stockOuts[$length++]['type'] = 'Adjustment';
            }

            $length = count($stockOuts);
            // Purchase returns
            foreach ($purchaseReturnOuts as $key => $purchaseReturnOut) {
                $stockOuts[$length]['code'] = config('config.purchaseReturnPrefix') . '-' . $purchaseReturnOut->purchaseReturn->code;
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
    public function inventoryReport(Request $request)
    {
        // validate request
        $this->validate($request, [
            'category' => 'required',
            'subCategory' => 'required',
            'itemName' => 'required',
        ]);

        $allProducts = [];
        if (($request->category['slug'] == 'all' && $request->subCategory['slug'] == 'all' && $request->itemName['slug'] == 'all')) {
            $products = Product::orderBy('code', 'ASC')->get();
            $allProducts = $this->generateItemsArray($products, $request);
        } elseif (($request->category['slug'] != 'all' && $request->subCategory['slug'] == 'all' && $request->itemName['slug'] == 'all')) {
            $catId = $request->category['id'];
            $products = Product::with('proSubCategory.category')->whereHas('proSubCategory', function ($newQuery) use ($catId) {
                $newQuery->whereHas('category', function ($newQuery) use ($catId) {
                    $newQuery->where('id', $catId);
                });
            })->get();
            $allProducts = $this->generateItemsArray($products, $request);
        } elseif (($request->category['slug'] == 'all' && $request->subCategory['slug'] != 'all' && $request->itemName['slug'] == 'all') || ($request->category['slug'] != 'all' && $request->subCategory['slug'] != 'all' && $request->itemName['slug'] == 'all')) {
            $products = Product::where('sub_cat_id', $request->subCategory['id'])->orderBy('code', 'ASC')->get();
            $allProducts = $this->generateItemsArray($products, $request);
        } else {
            $products = Product::where('slug', $request->itemName['slug'])->with('proSubCategory.category', 'productUnit')->get();
            $allProducts = $this->generateItemsArray($products, $request);
        }

        return $allProducts;
    }

    // generate invetory items array
    public function generateItemsArray($products, $request)
    {
        $allProducts = [];
        foreach ($products as $key => $product) {
            // stock ins
            $purchaseIns = PurchaseProduct::with('purchase.supplier')->where('product_id', $product->id)->whereHas('purchase', function ($newQuery) use ($request) {
                $newQuery->whereBetween('purchase_date', [$request->fromDate, $request->toDate]);
            })->sum('quantity');

            $invoiceReturnIns = InvoiceReturnProduct::with('invoiceReturn.invoice.client')->where('product_id', $product->id)->whereHas('invoiceReturn', function ($newQuery) use ($request) {
                $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->sum('quantity');

            $adjutmentIns = AdjustmentProduct::with('inventoryAdjustment')->where('product_id', $product->id)->where('type', 1)->whereHas('inventoryAdjustment', function ($newQuery) use ($request) {
                $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->sum('quantity');

            // stock outs
            $adjutmentOuts = AdjustmentProduct::with('inventoryAdjustment')->where('product_id', $product->id)->where('type', 0)->whereHas('inventoryAdjustment', function ($newQuery) use ($request) {
                $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->sum('quantity');

            $inventoryOuts = InvoiceProduct::with('invoice.client')->where('product_id', $product->id)->whereHas('invoice', function ($newQuery) use ($request) {
                $newQuery->whereBetween('invoice_date', [$request->fromDate, $request->toDate]);
            })->sum('quantity');

            $purchaseReturnOuts = PurchaseReturnProduct::with('purchaseReturn.purchase.supplier')->where('product_id', $product->id)->whereHas('purchaseReturn', function ($newQuery) use ($request) {
                $newQuery->whereBetween('date', [$request->fromDate, $request->toDate]);
            })->sum('quantity');

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
            $query = Supplier::query();
            return SupplierResource::collection($query->latest()->paginate($request->perPage));
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    // get client due reports
    public function clientDueReport(Request $request)
    {
        try {
            $query = Client::query();
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
            $query = Invoice::with('client', 'invoicePayments', 'user');
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
            $query = InvoicePayment::with('user.employee', 'invoice', 'invoicePaymentTransaction');
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
        $today = Carbon::today();
        $invoices = Invoice::with('invoiceProducts')
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


        $products = Product::where('status', true)->get();
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
        $invoiceSales = Invoice::where('status', 1)->whereDate('invoice_date', DB::raw('CURDATE()'))->sum('sub_total');

        // invoice discount for current date
        $invoiceDiscount = Invoice::where('status', 1)->whereDate('invoice_date', DB::raw('CURDATE()'))->sum('discount');

        // invoice return for current date
        $invoiceReturn = InvoiceReturn::where('status', 1)->whereDate('date', now()->format('Y-m-d'))->sum('total_return');

        // Total purchases for current date
        $totalPurchase = Purchase::selectRaw('(sub_total + IFNULL(transport, 0) + (sub_total * (vat_rates.rate / 100))) - IFNULL(discount, 0) AS total_value')
            ->leftJoin('vat_rates', 'purchases.tax_id', '=', 'vat_rates.id')
            ->where('purchases.status', 1)
            ->whereDate('purchases.purchase_date', DB::raw('CURDATE()'))
            ->get()
            ->sum('total_value');

        $productRurchasePriceToSalePriceDifference = Purchase::with('purchaseProducts.product.productUnit')->where('purchase_date', DB::raw('CURDATE()'))->first();
        if ($productRurchasePriceToSalePriceDifference) {
            $purchaseProducts = [];
            foreach ($productRurchasePriceToSalePriceDifference->purchaseProducts as $purchaseProduct) {
                $purchaseProducts[] = [
                    'product_id' => $purchaseProduct->product_id,
                    'quantity' => $purchaseProduct->quantity
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
                        'total_difference' => $totalDifference
                    ];
                }
            }

            foreach ($purchaseProductsDetails as $purchaseProductDetail) {
                $totalDifferenceSumOfTodayPurchaseProducts += $purchaseProductDetail['total_difference'];
            }
        }

        // Total purchases discount for current date
        $todayPurchaseDiscount = Purchase::where('status', 1)
            ->where('purchase_date', now()->format('Y-m-d'))
            ->sum('discount');

        // purchase return for current date
        $purchaseReturn = PurchaseReturn::where('status', 1)->whereDate('date', now()->format('Y-m-d'))->sum('total_return');

        // today purchase return by sale price
        $todayPurchaseReturns =  PurchaseReturn::with('purchaseReturnProducts')->where('status', 1)->whereDate('date', now()->format('Y-m-d'))->get();
        if ($todayPurchaseReturns) {
            $todayPurchaseReturnProducts = [];
            foreach ($todayPurchaseReturns as $todayPurchaseReturn) {
                foreach ($todayPurchaseReturn->purchaseReturnProducts as $purchaseReturnProduct) {
                    $todayPurchaseReturnProducts[] = [
                        'product_id' => $purchaseReturnProduct->product_id,
                        'quantity' => $purchaseReturnProduct->quantity
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
                        'product_regular_price' => $productRegularPrice
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
            ->where('expenses.status', 1)
            ->whereDate('expenses.date', DB::raw('CURDATE()'))
            ->first();

        // payrolls for current date
        $payrolls = Payroll::select(DB::raw('SUM(account_transactions.amount) As payrollAmount'))
            ->leftJoin('account_transactions', 'account_transactions.id', '=', 'payrolls.transaction_id')
            ->where('payrolls.status', 1)
            ->whereDate('payrolls.salary_date', DB::raw('CURDATE()'))
            ->first();

        // term loan interests for current date
        $loanInterest = LoanPayment::where('status', 1)->whereDate('date', DB::raw('CURDATE()'))->sum('interest');

        // daily depreciation 
        $assetDepriciation = Asset::where('status', 1)->where('depreciation', 1)->where('expire_date', '>=', date('Y-m-d'))->sum('daily_depreciation');

        // start for gross and net profit

        $productsForGrossProfits = [];
        $inventoryOuts = InvoiceProduct::with('invoice', 'product')->whereHas('invoice', function ($newQuery) use ($today) {
            $newQuery->where('status', 1)->whereDate('invoice_date',  $today);
        })->groupBy('product_id')
            ->selectRaw('sum(quantity) as sumQty, product_id')
            ->selectRaw('sum(purchase_price * quantity) as purchasePrice, product_id')
            ->selectRaw('sum(sale_price * quantity) as salePrice, product_id')
            ->get();

        foreach ($inventoryOuts  as $key => $inventoryOut) {
            $returnQty = InvoiceReturnProduct::with('invoiceReturn.invoice')->whereHas('invoiceReturn', function ($newQuery) use ($today) {
                $newQuery->whereHas('invoice', function ($anotherQuery) use ($today) {
                    $anotherQuery->where('status', 1)->whereDate('invoice_date', $today);
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


        $totalSales = Invoice::where('status', 1)->whereDate('invoice_date', $today)->sum('sub_total');

        // inventory positive adjustment
        $posAdjustment = AdjustmentProduct::with('inventoryAdjustment')->whereHas('inventoryAdjustment', function ($newQuery) use ($today) {
            $newQuery->where('status', 1)->where('type', 1)->whereDate('date', $today);
        })->get()->sum(function ($row) {
            return $row->purchase_price * $row->quantity;
        });

        // cost of goods sold between a given date range
        $invoicePurchasePrice = InvoiceProduct::with('invoice')->whereHas('invoice', function ($newQuery) use ($today) {
            $newQuery->where('status', 1)->whereDate('invoice_date', $today);
        })->get()->sum(function ($row) {
            return $row->purchase_price * $row->quantity;
        });

        $returnPurchasePrice = InvoiceReturnProduct::with('invoiceReturn.invoice')->whereHas('invoiceReturn', function ($newQuery) use ($today) {
            $newQuery->whereHas('invoice', function ($anotherQuery) use ($today) {
                $anotherQuery->where('status', 1)->whereDate('invoice_date', $today);
            });
        })->get()->sum(function ($row) {
            return $row->purchase_price * $row->quantity;
        });
        $costOfGoodsSold = $invoicePurchasePrice - $returnPurchasePrice;

        // inventory negative adjustment
        $negAdjustment = AdjustmentProduct::with('inventoryAdjustment')->whereHas('inventoryAdjustment', function ($newQuery) use ($today) {
            $newQuery->where('status', 1)->where('type', 0)->whereDate('date', $today);
        })->get()->sum(function ($row) {
            return $row->purchase_price * $row->quantity;
        });


        $grossProfitOrLoss = round(($totalSales + $posAdjustment - ($costOfGoodsSold + $negAdjustment)), 2);
        $inTotalExpense = round(($expenses->expAmount + $payrolls->payrollAmount + $loanInterest + $assetDepriciation), 2);
        $netProfitOrLoss = round(($grossProfitForToday - $inTotalExpense), 2);
        $openingStockByPurchasePriceFinal = ($openingStockByPurchasePrice - $returnPurchasePrice) + $purchaseReturn - $totalPurchase;
        $openingStockBySalePriceFinal =  $openingStockBySalePrice + $todayPurchaseReturnsTotalBySalePrice - $invoiceReturn - $totalPurchase - $totalDifferenceSumOfTodayPurchaseProducts;

        // end for gross and net profit



        return [
            'invoiceSales'                => round($invoiceSales, 2),
            'invoiceDiscount'             => round($invoiceDiscount, 2),
            'invoiceReturn'               => round($invoiceReturn, 2),
            'totalPurchase'               => round($totalPurchase, 0),
            'purchaseReturn'              => round($purchaseReturn, 0),
            'todayPurchaseDiscount'       => round($todayPurchaseDiscount, 0),
            'expenses'                    => round($expenses->expAmount, 2),
            'payrolls'                    => round($payrolls->payrollAmount, 2),
            'loanInterest'                => round($loanInterest, 2),
            'assetDepriciation'           => round($assetDepriciation, 2),
            'openingStockByPurchasePrice' => round($openingStockByPurchasePriceFinal, 2),
            'openingStockBySalePrice'     => round($openingStockBySalePriceFinal, 2),
            'closingStockByPurchasePrice' => round($closingStockByPurchasePrice, 2),
            'closingStockBySalePrice'     => round($closingStockBySalePrice, 2),
            'grossProfit'                 => round($grossProfitForToday, 2),
            'netProfit'                   => round($netProfitOrLoss, 2),
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

            // Get the parent account
            $parentAccount = \App\Models\ChartOfAccount::with('type')->findOrFail($parentAccountId);

            // Build query for sub accounts (children + parent itself)
            $query = \App\Models\ChartOfAccount::with('type')
                ->where(function($q) use ($parentAccountId) {
                    $q->where('id', $parentAccountId) // Include the parent account itself
                      ->orWhere('parent_id', $parentAccountId); // Include direct children
                })
                ->where('is_active', true);

            // Apply search filter if provided
            if ($search) {
                $query->where(function($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                      ->orWhere('code', 'like', "%{$search}%");
                });
            }

            $subAccounts = $query->orderBy('code')->orderBy('name')->get();

            // Format the response
            $formattedAccounts = $subAccounts->map(function($account) use ($parentAccountId) {
                return [
                    'id' => $account->id,
                    'name' => $account->name,
                    'code' => $account->code,
                    'type' => $account->type ? $account->type->name : 'Unknown',
                    'display_name' => "[{$account->code}] {$account->name}",
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
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error retrieving sub chart of accounts',
                'error' => $e->getMessage()
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
            $perPage = $request->per_page ?? 10; // Default to 10 rows per chunk

            // Determine which account to use for the report
            $reportAccountId = $subChartOfAccountId ?: $chartOfAccountId;
            
            // Get chart of account details
            $chartOfAccount = \App\Models\ChartOfAccount::with('type')->findOrFail($chartOfAccountId);
            $reportAccount = \App\Models\ChartOfAccount::with('type')->findOrFail($reportAccountId);

            // Build date range query
            $dateQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->whereHas('lines', function($query) use ($reportAccountId) {
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
                ->with(['lines' => function($query) use ($reportAccountId) {
                    $query->where('chart_of_account_id', $reportAccountId);
                }])
                ->orderBy('entry_date', 'desc')
                ->orderBy('id', 'desc')
                ->skip(($page - 1) * $perPage)
                ->take($perPage)
                ->get();

            // Calculate opening balance (balance before the date range)
            $openingBalanceQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->whereHas('lines', function($query) use ($reportAccountId) {
                    $query->where('chart_of_account_id', $reportAccountId);
                });

            if ($fiscalYearId) {
                $fiscalYear = \App\Models\FiscalYear::findOrFail($fiscalYearId);
                $openingBalanceQuery->where('entry_date', '<', $fiscalYear->start_date);
            } elseif ($accountingPeriodId) {
                $accountingPeriod = \App\Models\AccountingPeriod::findOrFail($accountingPeriodId);
                $openingBalanceQuery->where('entry_date', '<', $accountingPeriod->start_date);
            } elseif ($fromDate) {
                $openingBalanceQuery->where('entry_date', '<', $fromDate);
            }

            $openingDebits = $openingBalanceQuery->get()->sum(function($entry) use ($reportAccountId) {
                return $entry->lines->where('chart_of_account_id', $reportAccountId)->sum('debit_amount');
            });

            $openingCredits = $openingBalanceQuery->get()->sum(function($entry) use ($reportAccountId) {
                return $entry->lines->where('chart_of_account_id', $reportAccountId)->sum('credit_amount');
            });

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
                            'id' => $entry->id . '_' . $entryLine->id, // Unique ID for each line
                            'entry_number' => $entry->formatted_entry_number,
                            'entry_date' => $entry->entry_date->format('Y-m-d'),
                            'reference' => $entry->reference,
                            'description' => $entry->description,
                            'debit_amount' => number_format($debitAmount, 2),
                            'credit_amount' => number_format($creditAmount, 2),
                            'net_amount' => number_format($netAmount, 2),
                            'running_balance' => number_format($runningBalance, 2),
                            'balance_type' => $runningBalance >= 0 ? 'Debit' : 'Credit',
                            'source_type' => $entry->source_type,
                            'source_id' => $entry->source_id,
                        ];
                    }
                }
            }

            // Calculate period totals
            $periodDebits = $journalEntries->sum(function($entry) use ($reportAccountId) {
                return $entry->lines->where('chart_of_account_id', $reportAccountId)->sum('debit_amount');
            });

            $periodCredits = $journalEntries->sum(function($entry) use ($reportAccountId) {
                return $entry->lines->where('chart_of_account_id', $reportAccountId)->sum('credit_amount');
            });

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
                        'opening_balance' => number_format($openingBalance, 2),
                        'opening_balance_type' => $openingBalance >= 0 ? 'Debit' : 'Credit',
                        'period_debits' => number_format($periodDebits, 2),
                        'period_credits' => number_format($periodCredits, 2),
                        'period_net' => number_format($periodNet, 2),
                        'closing_balance' => number_format($closingBalance, 2),
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
            ]);

            $chartOfAccountIds = $request->chart_of_account_ids;
            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Get chart of accounts details
            $chartOfAccounts = \App\Models\ChartOfAccount::with('type')
                ->whereIn('id', $chartOfAccountIds)
                ->get();

            if ($chartOfAccounts->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'No valid accounts found'
                ], 400);
            }

            // Apply date filters
            $dateQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->whereHas('lines', function($query) use ($chartOfAccountIds) {
                    $query->whereIn('chart_of_account_id', $chartOfAccountIds);
                });

            if ($fiscalYearId) {
                $dateQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $dateQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $dateQuery->whereBetween('entry_date', [$fromDate, $toDate]);
            }

            // Get journal entries
            $journalEntries = $dateQuery
                ->with(['lines' => function($query) use ($chartOfAccountIds) {
                    $query->whereIn('chart_of_account_id', $chartOfAccountIds);
                }])
                ->orderBy('entry_date', 'desc')
                ->orderBy('id', 'desc')
                ->get();

            // Calculate opening balance (balance before the date range)
            $openingBalanceQuery = \App\Models\JournalEntry::query()
                ->where('status', 'posted')
                ->whereHas('lines', function($query) use ($chartOfAccountIds) {
                    $query->whereIn('chart_of_account_id', $chartOfAccountIds);
                });

            if ($fiscalYearId) {
                $fiscalYear = \App\Models\FiscalYear::findOrFail($fiscalYearId);
                $openingBalanceQuery->where('entry_date', '<', $fiscalYear->start_date);
            } elseif ($accountingPeriodId) {
                $accountingPeriod = \App\Models\AccountingPeriod::findOrFail($accountingPeriodId);
                $openingBalanceQuery->where('entry_date', '<', $accountingPeriod->start_date);
            } elseif ($fromDate) {
                $openingBalanceQuery->where('entry_date', '<', $fromDate);
            }

            $openingDebits = $openingBalanceQuery->get()->sum(function($entry) use ($chartOfAccountIds) {
                return $entry->lines->whereIn('chart_of_account_id', $chartOfAccountIds)->sum('debit_amount');
            });

            $openingCredits = $openingBalanceQuery->get()->sum(function($entry) use ($chartOfAccountIds) {
                return $entry->lines->whereIn('chart_of_account_id', $chartOfAccountIds)->sum('credit_amount');
            });

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
                    'debit_amount' => number_format($totalDebit, 2),
                    'credit_amount' => number_format($totalCredit, 2),
                    'net_amount' => $netAmount >= 0 ? '+' . number_format($netAmount, 2) : number_format($netAmount, 2),
                    'running_balance' => number_format($runningBalance, 2),
                    'balance_type' => $runningBalanceType,
                    'accounts' => $entryLines->map(function($line) {
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

            // Calculate period totals
            $periodDebits = $journalEntries->sum(function($entry) use ($chartOfAccountIds) {
                return $entry->lines->whereIn('chart_of_account_id', $chartOfAccountIds)->sum('debit_amount');
            });

            $periodCredits = $journalEntries->sum(function($entry) use ($chartOfAccountIds) {
                return $entry->lines->whereIn('chart_of_account_id', $chartOfAccountIds)->sum('credit_amount');
            });

            $periodNet = $periodDebits - $periodCredits;

            // Calculate closing balance
            $closingBalance = $openingBalance + $periodNet;
            $closingBalanceType = $closingBalance >= 0 ? 'Debit' : 'Credit';
            $closingBalance = abs($closingBalance);

            $summary = [
                'opening_balance' => number_format($openingBalance, 2),
                'opening_balance_type' => $openingBalanceType,
                'period_debits' => number_format($periodDebits, 2),
                'period_credits' => number_format($periodCredits, 2),
                'period_net' => $periodNet >= 0 ? '+' . number_format($periodNet, 2) : number_format($periodNet, 2),
                'closing_balance' => number_format($closingBalance, 2),
                'closing_balance_type' => $closingBalanceType,
                'total_entries' => count($processedEntries),
            ];

            return [
                'success' => true,
                'data' => [
                    'chart_of_accounts' => $chartOfAccounts->map(function($account) {
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
                ]
            ];

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate group account statement',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get Invoice Summary report data
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
            ]);

            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Build base query for invoices
            $invoiceQuery = Invoice::query()
                ->with(['client', 'invoiceProducts', 'invoicePayments', 'invoiceReturn'])
                ->where('status', 1); // Only active invoices

            // Apply filters
            if ($fiscalYearId) {
                $invoiceQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $invoiceQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $invoiceQuery->whereBetween('invoice_date', [$fromDate, $toDate]);
            }

            // Get invoices
            $invoices = $invoiceQuery->orderBy('invoice_date', 'desc')->get();

            // Calculate summary data
            $totalInvoices = $invoices->count();
            $totalAmount = $invoices->sum('sub_total');
            $totalPaid = $invoices->sum(function($invoice) {
                return $invoice->invoicePayments->sum('amount');
            });
            $totalDue = $invoices->sum(function($invoice) {
                return $invoice->totalDue();
            });
            $totalDiscount = $invoices->sum('discount');
            $totalTax = $invoices->sum(function($invoice) {
                return $invoice->taxAmount();
            });

            // Calculate returns data
            $totalReturns = 0;
            $totalReturnAmount = 0;
            $returnInvoices = [];

            foreach ($invoices as $invoice) {
                $return = $invoice->invoiceReturn;
                if ($return) {
                    $totalReturns++;
                    $returnAmount = $return->total_return;
                    $totalReturnAmount += $returnAmount;
                    $returnInvoices[] = [
                        'invoice' => $invoice,
                        'returns' => [$return], // Wrap in array for consistency
                        'return_amount' => $returnAmount
                    ];
                }
            }

            // Calculate net sales (total - returns)
            $netSales = $totalAmount - $totalReturnAmount;

            // Group by client for client summary
            $clientSummary = $invoices->groupBy('client_id')->map(function ($clientInvoices) {
                $client = $clientInvoices->first()->client;
                return [
                    'client_id' => $client->id,
                    'client_name' => $client->name,
                    'client_phone' => $client->phone,
                    'invoice_count' => $clientInvoices->count(),
                    'total_amount' => $clientInvoices->sum('sub_total'),
                    'paid_amount' => $clientInvoices->sum(function($invoice) {
                        return $invoice->invoicePayments->sum('amount');
                    }),
                    'due_amount' => $clientInvoices->sum(function($invoice) {
                        return $invoice->totalDue();
                    }),
                    'discount_amount' => $clientInvoices->sum('discount'),
                    'tax_amount' => $clientInvoices->sum(function($invoice) {
                        return $invoice->taxAmount();
                    }),
                ];
            })->values();

            // Group by month for monthly summary
            $monthlySummary = $invoices->groupBy(function ($invoice) {
                return \Carbon\Carbon::parse($invoice->invoice_date)->format('Y-m');
            })->map(function ($monthInvoices, $month) {
                return [
                    'month' => $month,
                    'month_name' => \Carbon\Carbon::parse($month . '-01')->format('F Y'),
                    'invoice_count' => $monthInvoices->count(),
                    'total_amount' => $monthInvoices->sum('sub_total'),
                    'paid_amount' => $monthInvoices->sum(function($invoice) {
                        return $invoice->invoicePayments->sum('amount');
                    }),
                    'due_amount' => $monthInvoices->sum(function($invoice) {
                        return $invoice->totalDue();
                    }),
                ];
            })->values();

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
                        'total_amount' => number_format($totalAmount, 2),
                        'total_paid' => number_format($totalPaid, 2),
                        'total_due' => number_format($totalDue, 2),
                        'total_discount' => number_format($totalDiscount, 2),
                        'total_tax' => number_format($totalTax, 2),
                        'total_returns' => $totalReturns,
                        'total_return_amount' => number_format($totalReturnAmount, 2),
                        'net_sales' => number_format($netSales, 2),
                        'payment_percentage' => $totalAmount > 0 ? number_format(($totalPaid / $totalAmount) * 100, 2) : 0,
                    ],
                    'client_summary' => $clientSummary,
                    'monthly_summary' => $monthlySummary,
                    'return_invoices' => $returnInvoices,
                ]
            ];

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate invoice summary report',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get Purchase Summary report data
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
            ]);

            $fiscalYearId = $request->fiscal_year_id;
            $accountingPeriodId = $request->accounting_period_id;
            $fromDate = $request->from_date;
            $toDate = $request->to_date;

            // Build base query for purchases
            $purchaseQuery = Purchase::query()
                ->with(['supplier', 'purchaseProducts', 'purchasePayments', 'purchaseReturn'])
                ->where('status', 1); // Only active purchases

            // Apply filters
            if ($fiscalYearId) {
                $purchaseQuery->where('fiscal_year_id', $fiscalYearId);
            } elseif ($accountingPeriodId) {
                $purchaseQuery->where('accounting_period_id', $accountingPeriodId);
            } elseif ($fromDate && $toDate) {
                $purchaseQuery->whereBetween('purchase_date', [$fromDate, $toDate]);
            }

            // Get purchases
            $purchases = $purchaseQuery->orderBy('purchase_date', 'desc')->get();

            // Calculate summary data
            $totalPurchases = $purchases->count();
            $totalAmount = $purchases->sum('sub_total');
            $totalPaid = $purchases->sum(function($purchase) {
                return $purchase->purchasePayments->sum('amount');
            });
            $totalDue = $purchases->sum(function($purchase) {
                return $purchase->totalDue();
            });
            $totalDiscount = $purchases->sum('discount');
            $totalTax = $purchases->sum(function($purchase) {
                return $purchase->taxAmount();
            });

            // Calculate returns data
            $totalReturns = 0;
            $totalReturnAmount = 0;
            $returnPurchases = [];

            foreach ($purchases as $purchase) {
                $return = $purchase->purchaseReturn;
                if ($return) {
                    $totalReturns++;
                    $returnAmount = $return->total_return;
                    $totalReturnAmount += $returnAmount;
                    $returnPurchases[] = [
                        'purchase' => $purchase,
                        'returns' => [$return], // Wrap in array for consistency
                        'return_amount' => $returnAmount
                    ];
                }
            }

            // Calculate net purchases (total - returns)
            $netPurchases = $totalAmount - $totalReturnAmount;

            // Group by supplier for supplier summary
            $supplierSummary = $purchases->groupBy('supplier_id')->map(function ($supplierPurchases) {
                $supplier = $supplierPurchases->first()->supplier;
                return [
                    'supplier_id' => $supplier->id,
                    'supplier_name' => $supplier->name,
                    'supplier_phone' => $supplier->phone,
                    'purchase_count' => $supplierPurchases->count(),
                    'total_amount' => $supplierPurchases->sum('sub_total'),
                    'paid_amount' => $supplierPurchases->sum(function($purchase) {
                        return $purchase->purchasePayments->sum('amount');
                    }),
                    'due_amount' => $supplierPurchases->sum(function($purchase) {
                        return $purchase->totalDue();
                    }),
                    'discount_amount' => $supplierPurchases->sum('discount'),
                    'tax_amount' => $supplierPurchases->sum(function($purchase) {
                        return $purchase->taxAmount();
                    }),
                ];
            })->values();

            // Group by month for monthly summary
            $monthlySummary = $purchases->groupBy(function ($purchase) {
                return \Carbon\Carbon::parse($purchase->purchase_date)->format('Y-m');
            })->map(function ($monthPurchases, $month) {
                return [
                    'month' => $month,
                    'month_name' => \Carbon\Carbon::parse($month . '-01')->format('F Y'),
                    'purchase_count' => $monthPurchases->count(),
                    'total_amount' => $monthPurchases->sum('sub_total'),
                    'paid_amount' => $monthPurchases->sum(function($purchase) {
                        return $purchase->purchasePayments->sum('amount');
                    }),
                    'due_amount' => $monthPurchases->sum(function($purchase) {
                        return $purchase->totalDue();
                    }),
                ];
            })->values();

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
                        'total_amount' => number_format($totalAmount, 2),
                        'total_paid' => number_format($totalPaid, 2),
                        'total_due' => number_format($totalDue, 2),
                        'total_discount' => number_format($totalDiscount, 2),
                        'total_tax' => number_format($totalTax, 2),
                        'total_returns' => $totalReturns,
                        'total_return_amount' => number_format($totalReturnAmount, 2),
                        'net_purchases' => number_format($netPurchases, 2),
                        'payment_percentage' => $totalAmount > 0 ? number_format(($totalPaid / $totalAmount) * 100, 2) : 0,
                    ],
                    'supplier_summary' => $supplierSummary,
                    'monthly_summary' => $monthlySummary,
                    'return_purchases' => $returnPurchases,
                ]
            ];

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate purchase summary report',
                'error' => $e->getMessage()
            ], 500);
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
            $perPage = (int) ($request->per_page ?? 20); // Default to 20 accounts per chunk

            // Create filter object for consistency
            $filters = [
                'fiscal_year_id' => $fiscalYearId,
                'accounting_period_id' => $accountingPeriodId,
                'from_date' => $fromDate,
                'to_date' => $toDate,
            ];

            // Get chart of accounts with hierarchical structure
            $query = \App\Models\ChartOfAccount::with(['type', 'children' => function($query) {
                $query->with(['type', 'children' => function($query) {
                    $query->with(['type', 'children' => function($query) {
                        $query->with('type');
                    }]);
                }]);
            }])
            ->where('is_active', true)
            ->whereNull('parent_id'); // Only get root level accounts

            // If specific account is selected, get that account and its children
            if ($subChartOfAccountId) {
                $selectedAccount = \App\Models\ChartOfAccount::with(['type', 'children' => function($query) {
                    $query->with(['type', 'children' => function($query) {
                        $query->with(['type', 'children' => function($query) {
                            $query->with('type');
                        }]);
                    }]);
                }])->findOrFail($subChartOfAccountId);
                
                $accounts = collect([$selectedAccount]);
                $totalCount = 1;
            } elseif ($chartOfAccountId) {
                $selectedAccount = \App\Models\ChartOfAccount::with(['type', 'children' => function($query) {
                    $query->with(['type', 'children' => function($query) {
                        $query->with(['type', 'children' => function($query) {
                            $query->with('type');
                        }]);
                    }]);
                }])->findOrFail($chartOfAccountId);
                
                $accounts = collect([$selectedAccount]);
                $totalCount = 1;
            } else {
                // Get total count for pagination
                $totalCount = $query->count();
                
                // Get paginated accounts
                $accounts = $query->orderBy('code')
                    ->skip(($page - 1) * $perPage)
                    ->take($perPage)
                    ->get();
            }

            // Build hierarchical trial balance data
            $trialBalanceData = $this->buildTrialBalanceHierarchy($accounts, $filters);

            // Calculate grand totals (only for first page or when no pagination)
            $grandTotals = null;
            if ($page === 1 || $totalCount <= $perPage) {
                $grandTotals = $this->calculateGrandTotals($trialBalanceData);
            }

            return [
                'success' => true,
                'data' => [
                    'filters' => $filters,
                    'trial_balance' => $trialBalanceData,
                    'grand_totals' => $grandTotals,
                    'pagination' => [
                        'current_page' => $page,
                        'per_page' => $perPage,
                        'total_count' => $totalCount,
                        'total_pages' => ceil($totalCount / $perPage),
                        'has_more' => $page < ceil($totalCount / $perPage),
                    ],
                ]
            ];

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to generate trial balance',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Build hierarchical trial balance data
     */
    private function buildTrialBalanceHierarchy($accounts, $filters, $level = 0)
    {
        $result = [];

        foreach ($accounts as $account) {
            // Calculate detailed balance information
            $balanceData = $this->calculateAccountBalanceDetails($account, $filters);

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
                'name' => $account->name,
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
    private function calculateAccountBalanceDetails($account, $filters)
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

        // Build base query for journal entries
        $baseQuery = \App\Models\JournalEntry::query()
            ->where('status', 'posted')
            ->whereHas('lines', function($query) use ($account) {
                $query->where('chart_of_account_id', $account->id);
            });

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
        } elseif ($filters['accounting_period_id']) {
            $accountingPeriod = \App\Models\AccountingPeriod::findOrFail($filters['accounting_period_id']);
            $openingBalanceQuery->where('entry_date', '<', $accountingPeriod->start_date);
        } elseif ($filters['from_date']) {
            $openingBalanceQuery->where('entry_date', '<', $filters['from_date']);
        } else {
            // Default to current year
            $openingBalanceQuery->where('entry_date', '<', now()->startOfYear());
        }

        $openingDebits = $openingBalanceQuery->get()->sum(function($entry) use ($account) {
            return $entry->lines->where('chart_of_account_id', $account->id)->sum('debit_amount');
        });

        $openingCredits = $openingBalanceQuery->get()->sum(function($entry) use ($account) {
            return $entry->lines->where('chart_of_account_id', $account->id)->sum('credit_amount');
        });

        $openingBalance = $openingDebits - $openingCredits;
        $openingDebit = max($openingBalance, 0);
        $openingCredit = $openingBalance < 0 ? abs($openingBalance) : 0;

        // Calculate movements (within the current period)
        $movementQuery = clone $baseQuery;
        $movementDebits = $movementQuery->get()->sum(function($entry) use ($account) {
            return $entry->lines->where('chart_of_account_id', $account->id)->sum('debit_amount');
        });

        $movementCredits = $movementQuery->get()->sum(function($entry) use ($account) {
            return $entry->lines->where('chart_of_account_id', $account->id)->sum('credit_amount');
        });

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
            if (!$account['is_parent']) {
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
            if (!empty($account['children'])) {
                $this->addLeafAccountTotals($account['children'], $totals);
            }
        }
    }
}

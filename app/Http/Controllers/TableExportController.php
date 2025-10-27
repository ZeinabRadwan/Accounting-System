<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use App\Models\Role;
use App\Models\Unit;
use App\Models\Asset;
use App\Models\Brand;
use App\Models\Client;
use App\Models\Account;
use App\Models\Expense;
use App\Models\Invoice;
use App\Models\Payroll;
use App\Models\Product;
use App\Models\VatRate;
use App\Models\Currency;
use App\Models\Employee;
use App\Models\Purchase;
use App\Models\PurchaseOrder;
use App\Models\Supplier;
use App\Models\AssetType;
use App\Models\Quotation;
use App\Models\Department;
use App\Exports\ExportLoan;
use App\Models\LoanPayment;
use App\Exports\ExportAsset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Exports\ExportClient;
use App\Models\InvoiceReturn;
use App\Models\LoanAuthority;
use App\Models\PaymentMethod;
use App\Exports\ExpenseExport;
use App\Exports\ExportPayroll;
use App\Exports\ExportProduct;
use App\Exports\InvoiceExport;
use App\Models\BalanceTansfer;
use App\Models\InvoicePayment;
use App\Models\PurchaseReturn;
use App\Exports\ExportAccounts;
use App\Exports\ExportEmployee;
use App\Exports\ExportPurchase;
use App\Exports\ExportSupplier;
use App\Models\ExpenseCategory;
use App\Models\ProductCategory;
use App\Models\PurchasePayment;
use App\Models\SalaryIncrement;
use Barryvdh\DomPDF\Facade\Pdf as PDF;
use Barryvdh\Snappy\Facades\SnappyPdf;
use App\Exports\ExportAssetType;
use App\Exports\ExportInventory;
use App\Exports\ExportQuotation;
use App\Models\NonInvoicePayment;
use App\Exports\ExpCategoryExport;
use App\Exports\ExportLoanPayment;
use App\Models\AccountTransaction;
use App\Models\ExpenseSubCategory;
use App\Models\NonPurchasePayment;
use App\Models\ProductSubCategory;
use App\Models\InventoryAdjustment;
use App\Exports\ExportInvoiceReturn;
use App\Exports\ExportLoanAuthority;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ExportPurchaseReturn;
use App\Exports\ExportPurchaseOrder;
use App\Exports\ExpSubCategoryExport;
use App\Exports\ExportBalanceTransfer;
use App\Exports\ExportProductCategory;
use App\Exports\ExportSalaryIncrement;
use App\Exports\ExportSalesByUserReport;
use App\Exports\ExportAccountTransaction;
use App\Exports\ExportExployeeDepartment;
use App\Exports\ExportProductSubCategory;
use App\Exports\ExportInventoryAdjustment;
use App\Exports\ExportClientInvoicePayment;
use App\Exports\ExportSupplierPayableReport;
use App\Exports\ExportClientReceivableReport;
use App\Exports\ExportCollectionByUserReport;
use App\Exports\ExportClientNonInvoicePayment;
use App\Exports\ExportSupplierPurchasePayment;
use App\Exports\ExportAccountTransactionHistory;
use App\Exports\ExportSupplierNonPurchasePayment;
use App\Exports\ExportTodayReport;
use App\Exports\ExportBalanceSheet;
use App\Exports\ExportProfitLoss;
use App\Exports\ExportExpensesReport;
use App\Exports\ExportAccountStatement;
use App\Exports\ExportGroupAccountStatement;
use App\Exports\ExportInvoiceSummary;
use App\Exports\ExportPurchaseSummary;
use App\Exports\ExportVatReport;
use App\Exports\ExportChartOfAccounts;
use App\Exports\ExportJournalEntries;


class TableExportController extends Controller
{
    /**
     * Generate PDF with consistent configuration
     */
    private function generatePDF($view, $data, $filename, $paper = 'a4', $orientation = 'portrait')
    {
        try {
            Log::info("Generating PDF: {$filename}", [
                'view' => $view,
                'data_keys' => array_keys($data),
                'paper' => $paper,
                'orientation' => $orientation
            ]);
            
            // For quotations PDF, use SnappyPdf for better Arabic support
            if ($view === 'pdf.quotations') {
                return $this->generateQuotationsPDFWithSnappy($view, $data, $filename);
            }
            
            $pdf = PDF::loadView($view, $data)
                ->setPaper($paper, $orientation)
                ->setOptions([
                    'isHtml5ParserEnabled' => true,
                    'isRemoteEnabled' => true,
                    'defaultFont' => 'Cairo',
                    'isPhpEnabled' => false,
                    'isJavascriptEnabled' => false,
                    'debugKeepTemp' => false,
                    'debugCss' => false,
                    'debugLayout' => false,
                    'debugLayoutLines' => false,
                    'debugLayoutBlocks' => false,
                    'debugLayoutInline' => false,
                ]);
            
            Log::info("PDF generated successfully: {$filename}");
            return $pdf->download($filename);
            
        } catch (\Exception $e) {
            Log::error("PDF generation failed: {$filename}", [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            throw $e;
        }
    }
    
    private function generateQuotationsPDFWithSnappy($view, $data, $filename)
    {
        try {
            // Render the view to HTML
            $html = view($view, $data)->render();
            
            // Add Arabic support CSS to the HTML
            $html = str_replace('<head>', '<head>
                <meta charset="UTF-8">
                <style>
                    body {
                        font-family: Arial, "DejaVu Sans", "Tahoma", sans-serif;
                        direction: ' . ($data['locale'] === 'ar' ? 'rtl' : 'ltr') . ';
                        margin: 0;
                        padding: 10px;
                    }
                    .arabic-text {
                        font-family: Arial, "DejaVu Sans", "Tahoma", sans-serif;
                        direction: rtl;
                        text-align: right;
                        unicode-bidi: bidi-override;
                    }
                    .english-text {
                        font-family: Arial, "DejaVu Sans", sans-serif;
                        direction: ltr;
                        text-align: left;
                    }
                    .table-listing {
                        border-collapse: collapse;
                        width: 100%;
                        margin-top: 10px;
                    }
                    .table-listing th, .table-listing td {
                        padding: 8px;
                        border: 1px solid #ddd;
                        font-size: 12px;
                    }
                    .table-listing th {
                        font-weight: bold;
                    }
                    h3 {
                        text-align: ' . ($data['locale'] === 'ar' ? 'right' : 'left') . ';
                        margin-bottom: 10px;
                    }
                </style>', $html);
            
            // Use SnappyPdf (wkhtmltopdf) for better Arabic support
            $pdf = SnappyPdf::loadHTML($html)
                ->setPaper('a4')
                ->setOrientation('landscape')
                ->setOption('encoding', 'UTF-8')
                ->setOption('enable-local-file-access', true)
                ->setOption('disable-smart-shrinking', true)
                ->setOption('print-media-type', true)
                ->setOption('no-background', false)
                ->setOption('margin-top', 10)
                ->setOption('margin-right', 10)
                ->setOption('margin-bottom', 10)
                ->setOption('margin-left', 10);
            
            return $pdf->download($filename);
            
        } catch (\Exception $e) {
            Log::error("Html2Pdf generation failed: {$filename}", [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            // Fallback to DomPDF with Cairo font
            $pdf = PDF::loadView($view, $data)
                ->setPaper('a4', 'landscape')
                ->setOptions([
                    'isHtml5ParserEnabled' => true,
                    'isRemoteEnabled' => true,
                    'defaultFont' => 'Cairo',
                    'isPhpEnabled' => false,
                    'isJavascriptEnabled' => false,
                ]);
            
            return $pdf->download($filename);
        } catch (\Exception $e) {
            Log::error("PDF generation failed: {$filename}", [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            // Final fallback with basic settings
            $pdf = PDF::loadView($view, $data)
                ->setPaper('a4', 'landscape')
                ->setOptions([
                    'isHtml5ParserEnabled' => true,
                    'isRemoteEnabled' => false,
                    'defaultFont' => 'DejaVu Sans',
                    'isPhpEnabled' => false,
                    'isJavascriptEnabled' => false,
                ]);
            
            return $pdf->download($filename);
        }
    }
    // return all brands pdf
    public function brandsPDF()
    {
        // retrieve all records from db
        $data = Brand::latest()->get()->toArray();
        // share data to view
        view()->share('brands', $data);
        return $this->generatePDF('pdf.brands', $data, 'brands-list.pdf');
    }

    // return all currencies pdf
    public function currenciesPDF()
    {
        // retrieve all records from db
        $data = Currency::latest()->get()->toArray();
        // share data to view
        view()->share('currencies', $data);
        $pdf = PDF::loadView('pdf.currencies', $data);
        // download PDF file with download method
        return $pdf->download('currencies-list.pdf');
    }

    // return all units pdf
    public function unitsPDF()
    {
        // retrieve all records from db
        $data = Unit::latest()->get()->toArray();
        // share data to view
        view()->share('units', $data);
        $pdf = PDF::loadView('pdf.units', $data);
        // download PDF file with download method
        return $pdf->download('units-list.pdf');
    }

    // return all vat rates pdf
    public function vatRatesPDF()
    {
        // retrieve all records from db
        $data = VatRate::latest()->get()->toArray();
        // share data to view
        view()->share('vatRates', $data);
        $pdf = PDF::loadView('pdf.vat-rates', $data);
        // download PDF file with download method
        return $pdf->download('vat-rates-list.pdf');
    }

    // return all roles pdf
    public function rolesPDF()
    {
        // retrieve all records from db
        $data = Role::latest()->get()->toArray();
        // share data to view
        view()->share('roles', $data);
        $pdf = PDF::loadView('pdf.roles', $data);
        // download PDF file with download method
        return $pdf->download('roles-list.pdf');
    }

    // return all payment methods pdf
    public function paymentMethodsPDF()
    {
        // retrieve all records from db
        $data = PaymentMethod::latest()->get()->toArray();
        // share data to view
        view()->share('paymentMethods', $data);
        $pdf = PDF::loadView('pdf.payment-methods', $data);
        // download PDF file with download method
        return $pdf->download('payment-methods-list.pdf');
    }

    // return expense category pdf
    public function expCategoriesPDF()
    {
        // retrieve all records from db
        $data = ExpenseCategory::latest()->get()->toArray();
        // share data to view
        view()->share('categories', $data);
        $pdf = PDF::loadView('pdf.exp-categories', $data);
        // download PDF file with download method
        return $pdf->download('exp-categories-list.pdf');
    }

    // return expense category export
    public function expCategoriesExportExcel(Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExpCategoryExport($term), 'ExpenseCategories.xlsx');
    }

    // return expense sub category pdf
    public function expSubCategoriesPDF()
    {
        // retrieve all records from db
        $data = ExpenseSubCategory::with('expCategory')->latest()->get()->toArray();
        // share data to view
        view()->share('categories', $data);
        $pdf = PDF::loadView('pdf.exp-sub-categories', $data);
        // download PDF file with download method
        return $pdf->download('exp-sub-categories-list.pdf');
    }

    // return expense sub category export
    public function expSubCategoriesExportExcel(Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExpSubCategoryExport($term), 'ExpenseSubCategories.xlsx');
    }

    // return expense pdf
    public function expensesPDF()
    {
        // retrieve all records from db
        $data = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount')->latest()->get()->toArray();
        // share data to view
        view()->share('expenses', $data);
        return $this->generatePDF('pdf.expenses', $data, 'expenses-list.pdf', 'a4', 'landscape');
    }

    // return expense export
    public function expensesExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExpenseExport($startDate, $endDate, $term), 'Expenses.xlsx');
    }

    // return purchases pdf
    public function purchasesPDF()
    {
        // retrieve all records from db
        $data = Purchase::with('supplier')->latest()->get()->toArray();
        // share data to view
        view()->share('purchases', $data);
        return $this->generatePDF('pdf.purchases', $data, 'purchases-list.pdf', 'a4', 'landscape');
    }

    // return purchases excel
    public function purchasesExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportPurchase($startDate, $endDate, $term), 'Purchases.xlsx');
    }

    // return purchase orders excel
    public function purchaseOrdersExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportPurchaseOrder($startDate, $endDate, $term), 'PurchaseOrders.xlsx');
    }

    // return purchase orders pdf
    public function purchaseOrdersPDF()
    {
        // retrieve all records from db
        $data = PurchaseOrder::with('supplier')->latest()->get()->toArray();
        // share data to view
        view()->share('purchaseOrders', $data);
        return $this->generatePDF('pdf.purchase-orders', $data, 'purchase-orders-list.pdf', 'a4', 'landscape');
    }

    // return purchase returns pdf
    public function purchaseReturnsPDF()
    {
        // retrieve all records from db
        $data = PurchaseReturn::with('purchase.supplier')->latest()->get()->toArray();
        // share data to view
        view()->share('returns', $data);
        $pdf = PDF::loadView('pdf.purchase-returns', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('purchase-returns-list.pdf');
    }

    // return purchase returns export
    public function purchaseReturnsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportPurchaseReturn($startDate, $endDate, $term), 'PurchaseReturn.xlsx');
    }

    // return quotation pdf
    public function quotationsPDF(Request $request)
    {
        // Get locale from request parameter, fallback to session, then app locale
        $locale = $request->input('locale', session('locale', app()->getLocale()));
        
        // Set the locale for translations
        app()->setLocale($locale);
        
        // retrieve all records from db
        $quotations = Quotation::with('client')->latest()->get()->toArray();
        
        // Pass data to the view with locale
        $data = [
            'quotations' => $quotations,
            'locale' => $locale
        ];
        
        // share data to view
        view()->share('quotations', $quotations);
        return $this->generatePDF('pdf.quotations', $data, 'quotation-list.pdf', 'a4', 'landscape');
    }

    // return quotation export
    public function quotationsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');
        $locale = $request->input('locale', session('locale', app()->getLocale()));

        return Excel::download(new ExportQuotation($startDate, $endDate, $term, $locale), 'SalesQuotations.xlsx');
    }

    // return invoice pdf
    public function invoicePDF()
    {
        // retrieve all records from db
        $data = Invoice::with('client', 'invoicePayments')->latest()->get()->toArray();
        // share data to view
        view()->share('invoices', $data);
        return $this->generatePDF('pdf.invoices', $data, 'invoice-list.pdf', 'a4', 'landscape');
    }

    // return invoice pdf
    public function invoiceExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');
        $locale = $request->input('locale', session('locale', app()->getLocale()));

        return Excel::download(new InvoiceExport($startDate, $endDate, $term, $locale), 'Invoices.xlsx');
    }

    // return invoice pdf
    public function invoiceReturnPDF()
    {
        // retrieve all records from db
        $data = InvoiceReturn::with('invoice.client')->latest()->get()->toArray();
        // share data to view
        view()->share('returns', $data);
        $pdf = PDF::loadView('pdf.invoice-returns', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('invoice-return-list.pdf');
    }

    // return invoice export
    public function invoiceReturnExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportInvoiceReturn($startDate, $endDate, $term), 'InvoiceReturn.xlsx');
    }

    // return accounts pdf
    public function accountsPDF()
    {
        // retrieve all records from db
        $data = Account::with('balanceTransactions')->latest()->get()->toArray();
        // share data to view
        view()->share('accounts', $data);
        $pdf = PDF::loadView('pdf.accounts', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('account-list.pdf');
    }

    // return accounts export
    public function accountsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportAccounts($startDate, $endDate, $term), 'Accounts.xlsx');
    }

    // return chart of accounts pdf
    public function chartOfAccountsPDF()
    {
        // retrieve all records from db
        $data = \App\Models\ChartOfAccount::with('type', 'parent', 'creator')->orderBy('code')->get()->toArray();
        // share data to view
        view()->share('chartOfAccounts', $data);
        $pdf = PDF::loadView('pdf.chart-of-accounts', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('chart-of-accounts-list.pdf');
    }

    // return chart of accounts export
    public function chartOfAccountsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportChartOfAccounts($startDate, $endDate, $term), 'ChartOfAccounts.xlsx');
    }

    // return account transaction pdf
    public function accountTransactionsPDF($slug)
    {
        $account = Account::where('slug', $slug)->first();
        if (!$account) {
           abort(404);
        }
        $data = AccountTransaction::with('cashbookAccount', 'user')->where('account_id', $account->id)->orderBy('created_at', 'asc')->get()->toArray();
        // share data to view
        view()->share('transactions', $data);
        $pdf = PDF::loadView('pdf.transactions', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download($account->account_number.'-ledger.pdf');
    }

    // return non invoice add balances pdf
    public function nonInvoiceBalancesPDF()
    {
        $data = AccountTransaction::with('cashbookAccount')->where('reason', 'LIKE', 'Non invoice balance added%')->latest()->get()->toArray();
        // share data to view
        view()->share('balances', $data);
        $pdf = PDF::loadView('pdf.non-invoice-balances', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('account-transaction-list.pdf');
    }

    // return balances adjustment export
    public function nonInvoiceBalancesExportExcel(Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExportAccountTransaction($term), 'BalanceAdjustments.xlsx');
    }

    // return transfer balances pdf
    public function transferBalancesPDF()
    {
        $data = BalanceTansfer::with('debitTransaction.cashbookAccount', 'creditTransaction.cashbookAccount', 'user')->latest()->get()->toArray();
        // share data to view
        view()->share('transfers', $data);
        $pdf = PDF::loadView('pdf.transfer-balances', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('balance-transfer-list.pdf');
    }

    // return transfer balances export
    public function transferBalancesExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportBalanceTransfer($startDate, $endDate, $term), 'BalanceTransfer.xlsx');
    }

    // return transactions PDF
    public function transactionsPDF()
    {
        $data = AccountTransaction::with('cashbookAccount', 'user')->latest()->get()->toArray();
        // share data to view
        view()->share('transactions', $data);
        $pdf = PDF::loadView('pdf.all-transactions', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('transaction-list.pdf');
    }

    // return transactions export
    public function transactionsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportAccountTransactionHistory($startDate, $endDate, $term), 'TransactionHistory.xlsx');
    }

    // return client non invoice payment pdf
    public function nonInvoicePaymentsPDF()
    {
        $data = NonInvoicePayment::with('client', 'paymentTransaction.cashbookAccount')->latest()->get()->toArray();
        // share data to view
        view()->share('payments', $data);
        $pdf = PDF::loadView('pdf.non-invoice-payments', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('non-invoice-payment-list.pdf');
    }

    // return client non invoice payment export
    public function nonInvoicePaymentsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportClientNonInvoicePayment($startDate, $endDate, $term), 'ClientNonInvoicePayments.xlsx');
    }

    // return client invoice payment pdf
    public function invoicePaymentsPDF()
    {
        $data = InvoicePayment::with('invoice.client', 'invoicePaymentTransaction.cashbookAccount', 'user')->latest()->get()->toArray();
        // share data to view
        view()->share('payments', $data);
        $pdf = PDF::loadView('pdf.invoice-payments', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('invoice-payment-list.pdf');
    }

    // return client invoice payment export
    public function invoicePaymentsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportClientInvoicePayment($startDate, $endDate, $term), 'ClientInvoicePayment.xlsx');
    }

    // return supplier non purchase payment pdf
    public function nonPurchasePaymentsPDF()
    {
        $data = NonPurchasePayment::with('supplier', 'paymentTransaction.cashbookAccount')->latest()->get()->toArray();
        // share data to view
        view()->share('payments', $data);
        $pdf = PDF::loadView('pdf.non-purchase-payments', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('non-purchase-payment-list.pdf');
    }

    // return supplier non purchase payment export
    public function nonPurchasePaymentsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportSupplierNonPurchasePayment($startDate, $endDate, $term), 'SupplierNonPurchasePayment.xlsx');
    }

    // return supplier purchase payment pdf
    public function purchasePaymentsPDF()
    {
        $data = PurchasePayment::with('purchase.supplier', 'purchasePaymentTransaction.cashbookAccount', 'user')->latest()->get()->toArray();
        // share data to view
        view()->share('payments', $data);
        $pdf = PDF::loadView('pdf.purchase-payments', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('purchase-payments-list.pdf');
    }

    // return supplier purchase payment export
    public function purchasePaymentsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportSupplierPurchasePayment($startDate, $endDate, $term), 'SupplierPurchasePayment.xlsx');
    }

    // return loan authorities pdf
    public function loanAuthoritiesPDF()
    {
        // retrieve all records from db
        $data = LoanAuthority::latest()->get()->toArray();
        // share data to view
        view()->share('loanAuthorities', $data);
        $pdf = PDF::loadView('pdf.loan-authorities', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('loan-authority-list.pdf');
    }

    // return loan authorities export
    public function loanAuthoritiesExportExcel(Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExportLoanAuthority($term), 'LoanAuthorities .xlsx');
    }

    // return loans pdf
    public function loansPDF()
    {
        // retrieve all records from db
        $data = Loan::with('loanAuthority', 'loanPayments', 'loanTransaction.cashbookAccount')->latest()->get();
        // share data to view
        view()->share('loans', $data);
        $pdf = PDF::loadView('pdf.loans', compact('data'))->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('loan-list.pdf');
    }

    // return loans export
    public function loansExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportLoan($startDate, $endDate, $term), 'Loans.xlsx');
    }

    // return loan payments pdf
    public function loanPaymentsPDF()
    {
        // retrieve all records from db
        $data = LoanPayment::with('loan.loanAuthority', 'loanPaymentTransaction.cashbookAccount')->latest()->get();
        // share data to view
        view()->share('loanPayments', $data);
        $pdf = PDF::loadView('pdf.loan-payments', compact('data'))->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('loan-payment-list.pdf');
    }

    // return loan payments export
    public function loanPaymentsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportLoanPayment($startDate, $endDate, $term), 'LoanPayments.xlsx');
    }

    // return asset types pdf
    public function assetTypesPDF()
    {
        // retrieve all records from db
        $data = AssetType::latest()->get()->toArray();
        // share data to view
        view()->share('assetTypes', $data);
        $pdf = PDF::loadView('pdf.asset-types', $data);
        // download PDF file with download method
        return $pdf->download('asset-type-list.pdf');
    }

    // return asset types export
    public function assetTypesExportExcel(Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExportAssetType($term), 'AssetTypes.xlsx');
    }

    // return assets pdf
    public function assetsPDF()
    {
        // retrieve all records from db
        $data = Asset::with('assetType')->latest()->get()->toArray();
        // share data to view
        view()->share('assets', $data);
        $pdf = PDF::loadView('pdf.assets', $data);
        // download PDF file with download method
        return $pdf->download('asset-list.pdf');
    }

    // return assets export
    public function assetsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportAsset($startDate, $endDate, $term), 'Assets.xlsx');
    }

    // return payroll pdf
    public function payrollPDF()
    {
        // retrieve all records from db
        $data = Payroll::with('employee.department', 'payrollTransaction.cashbookAccount')->latest()->get()->toArray();
        // share data to view
        view()->share('allPayroll', $data);
        $pdf = PDF::loadView('pdf.payroll', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('payroll-list.pdf');
    }

    // return payroll export
    public function payrollExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportPayroll($startDate, $endDate, $term), 'Payroll.xlsx');
    }

    // return clients pdf
    public function clientsPDF()
    {
        // retrieve all records from db
        $data = Client::latest()->get()->toArray();
        // share data to view
        view()->share('clients', $data);
        return $this->generatePDF('pdf.clients', $data, 'client-list.pdf', 'a4', 'landscape');
    }

    // return clients export
    public function clientsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');
        $type = $request->input('type');

        return Excel::download(new ExportClient($startDate, $endDate, $term, $type), 'Clients.xlsx');
    }

    // return suppliers pdf
    public function suppliersPDF()
    {
        // retrieve all records from db
        $data = Supplier::latest()->get()->toArray();
        // share data to view
        view()->share('suppliers', $data);
        $pdf = PDF::loadView('pdf.suppliers', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('supplier-list.pdf');
    }

    // return suppliers export
    public function suppliersExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');
        $type = $request->input('type');

        return Excel::download(new ExportSupplier($startDate, $endDate, $term, $type), 'Suppliers.xlsx');
    }

    // return departments pdf
    public function departmentsPDF()
    {
        // retrieve all records from db
        $data = Department::latest()->get()->toArray();
        // share data to view
        view()->share('departments', $data);
        $pdf = PDF::loadView('pdf.departments', $data);
        // download PDF file with download method
        return $pdf->download('department-list.pdf');
    }

    // return departments export
    public function departmentsExportExcel(Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExportExployeeDepartment($term), 'EmpDepartment.xlsx');
    }

    // return employees pdf
    public function employeesPDF()
    {
        // retrieve all records from db
        $data = Employee::with('department', 'user')->latest()->get()->toArray();
        // share data to view
        view()->share('employees', $data);
        $pdf = PDF::loadView('pdf.employees', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('employee-list.pdf');
    }

    // return employees export
    public function employeesExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportEmployee($startDate, $endDate, $term), 'Employee.xlsx');
    }

    // return increments pdf
    public function incrementsPDF()
    {
        // retrieve all records from db
        $data = SalaryIncrement::with('employee.department')->latest()->get()->toArray();
        // share data to view
        view()->share('salIncrements', $data);
        $pdf = PDF::loadView('pdf.increments', $data)->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('increment-list.pdf');
    }

    // return increments export
    public function incrementsExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportSalaryIncrement($startDate, $endDate, $term), 'EmpIncrement.xlsx');
    }

    // return product categories pdf
    public function productCategoriesPDF()
    {
        // retrieve all records from db
        $data = ProductCategory::latest()->get()->toArray();
        // share data to view
        view()->share('productCategories', $data);
        $pdf = PDF::loadView('pdf.product-categories', $data);
        // download PDF file with download method
        return $pdf->download('product-category-list.pdf');
    }

    // return product categories export
    public function productCategoriesExportExcel(Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExportProductCategory($term), 'ProductCategories.xlsx');
    }  

    // return product sub categories pdf
    public function productSubCategoriesPDF()
    {
        // retrieve all records from db
        $data = ProductSubCategory::with('category')->latest()->get()->toArray();
        // share data to view
        view()->share('productsubCategories', $data);
        $pdf = PDF::loadView('pdf.product-sub-categories', $data);
        // download PDF file with download method
        return $pdf->download('product-sub-category-list.pdf');
    }

    // return product sub categories export
    public function productSubCategoriesExportExcel(Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExportProductSubCategory($term), 'ProductSubCategory.xlsx');
    }

    // return product sub categories pdf
    public function productsPDF()
    {
        // retrieve all records from db
        $data = Product::with('proSubCategory.category', 'productUnit')->latest()->get();
        // share data to view
        view()->share('products', $data);
        $pdf = PDF::loadView('pdf.products', compact('data'))->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('product-list.pdf');
    }

    // return product export
    public function productsExportExcel(Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExportProduct($term), 'Products.xlsx');
    }

    // return inventoryAdjustments PDF
    public function inventoryAdjustmentsPDF()
    {
        // retrieve all records from db
        $data = InventoryAdjustment::latest()->get();
        // share data to view
        view()->share('adjustments', $data);
        $pdf = PDF::loadView('pdf.adjustments', compact('data'))->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('inventory-adjustment-list.pdf');
    }

    // return inventoryAdjustments excel
    public function inventoryAdjustmentsExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportInventoryAdjustment($startDate, $endDate, $term), 'InventoryAdjustment.xlsx');
    }

    // return inventory excel
    public function inventoryExcel (Request $request)
    {
        $term = $request->input('term');
        return Excel::download(new ExportInventory($term), 'Inventory.xlsx');
    }

    // return non zero inventory products
    public function nonZeroInventoryPDF()
    {
        // retrieve all records from db
        $data = Product::where('inventory_count', '>', 0)->with('proSubCategory.category', 'productUnit')->latest()->get();
        // share data to view
        view()->share('products', $data);
        $pdf = PDF::loadView('pdf.non-zero-inventory', compact('data'))->setPaper('a4', 'landscape');
        // download PDF file with download method
        return $pdf->download('non-zero-inventory-list.pdf');

    }

    // return supplier payable report export
    public function supplierPayableReportExportExcel(Request $request){
        $term = $request->input('term');
        return Excel::download(new ExportSupplierPayableReport($term), 'SupplierPayableReport.xlsx');
    }

    // return client receivable report export
    public function clientReceivableReportExportExcel(Request $request){
        $term = $request->input('term');
        return Excel::download(new ExportClientReceivableReport($term), 'ClientReceivableReport.xlsx');
    }

    // return client receivable report pdf
    public function clientReceivableReportPDF(Request $request)
    {
        $term = $request->input('term');
        
        // Get the same data as the Excel export
        $query = \App\Models\Client::query();
        
        if ($term) {
            $query->where(function ($query) use ($term) {
                $query->where('name', 'Like', '%' . $term . '%')
                    ->orWhere('client_id', 'Like', '%' . $term . '%')
                    ->orWhere('email', 'Like', '%' . $term . '%')
                    ->orWhere('phone', 'Like', '%' . $term . '%')
                    ->orWhere('company_name', 'Like', '%' . $term . '%');
            });
        }
        
        $clients = $query->latest()->get();
        
        // Calculate totals
        $totalInvoiceDue = $clients->sum(function ($client) {
            return $client->clientDue() ?: 0;
        });
        
        $totalNonInvoiceDue = $clients->sum(function ($client) {
            return $client->nonInvoiceCurrentDue() ?: 0;
        });
        
        $totalDue = $totalInvoiceDue + $totalNonInvoiceDue;
        
        // Prepare data for the view
        $data = [
            'clients' => $clients,
            'totalInvoiceDue' => $totalInvoiceDue,
            'totalNonInvoiceDue' => $totalNonInvoiceDue,
            'totalDue' => $totalDue,
            'currencySymbol' => getGeneralSettingsInfo()['currency']['symbol'],
            'clientPrefix' => config('config.clientPrefix'),
            'companyName' => getGeneralSettingsInfo()['company_name'],
            'companyAddress' => getGeneralSettingsInfo()['company_address'],
            'companyPhone' => getGeneralSettingsInfo()['company_phone'],
            'companyEmail' => getGeneralSettingsInfo()['company_email'],
            'companyVatNumber' => getGeneralSettingsInfo()['company_vat_number'],
            'companyLogo' => getGeneralSettingsInfo()['company_logo'],
        ];
        
        // Share data to view
        view()->share('data', $data);
        
        // Generate PDF using the Saudi Professional template
        $pdf = PDF::loadView('pdf.client-receivable-report-saudi', $data)
            ->setPaper('a4', 'portrait')
            ->setOptions([
                'isHtml5ParserEnabled' => true,
                'isRemoteEnabled' => true,
                'defaultFont' => 'Cairo'
            ]);
        
        return $pdf->download('client-receivable-report.pdf');
    }

    // return salesByUser export
    public function salesByUserReportExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportSalesByUserReport($startDate, $endDate, $term), 'SalesByUserReport.xlsx');
    }

    // return collectionByUser export
    public function collectionByUserReportExportExcel(Request $request)
    {
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');
        $term = $request->input('term');

        return Excel::download(new ExportCollectionByUserReport($startDate, $endDate, $term), 'CollectionByUserReport.xlsx');
    }

    // return today report pdf
    public function todayReportPDF()
    {
        // Get today's report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $data = $reportController->todayReport();
        
        // Add current date to data
        $data['reportDate'] = now()->format('Y-m-d');
        
        // share data to view
        view()->share('reportData', $data);
        return $this->generatePDF('pdf.today-report', $data, 'today-report.pdf');
    }

    // return today report excel
    public function todayReportExportExcel(Request $request)
    {
        return Excel::download(new ExportTodayReport(), 'TodayReport.xlsx');
    }

    // return balance sheet pdf
    public function balanceSheetPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs with all entries
        ini_set('memory_limit', '1G'); // 1GB for very large datasets
        set_time_limit(300); // 5 minutes for processing
        
        try {
            // Get balance sheet data using the same filters
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->balanceSheet($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            if (!$reportData['success']) {
                abort(404, 'Report data not found');
            }
            
            $data = $reportData['data'];
            
            Log::info('Balance Sheet PDF - Processing balance sheet data');
            
            // Add filters to data for template - merge with existing filters if they exist
            $data['filters'] = array_merge($data['filters'] ?? [], [
                'from_date' => $request->input('from_date'),
                'to_date' => $request->input('to_date'),
                'fiscal_year_id' => $request->input('fiscal_year_id'),
                'accounting_period_id' => $request->input('accounting_period_id'),
            ]);
            
            // Log the data structure for debugging
            Log::info('Balance Sheet PDF Data Structure:', [
                'has_accounts' => isset($data['accounts']),
                'has_totals' => isset($data['totals']),
                'assets_count' => isset($data['accounts']['assets']) ? count($data['accounts']['assets']) : 0,
                'liabilities_count' => isset($data['accounts']['liabilities']) ? count($data['accounts']['liabilities']) : 0,
                'equity_count' => isset($data['accounts']['equity']) ? count($data['accounts']['equity']) : 0,
            ]);
            
            // share data to view
            view()->share('balanceData', $data);
            return $this->generatePDF('pdf.balance-sheet', $data, 'balance-sheet.pdf', 'a4', 'landscape');
            
        } catch (\Exception $e) {
            Log::error('Balance Sheet PDF Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return error response
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return balance sheet excel
    public function balanceSheetExportExcel(Request $request)
    {
        $filters = $request->all();
        return Excel::download(new ExportBalanceSheet($filters), 'BalanceSheet.xlsx');
    }

    // return profit loss pdf
    public function profitLossPDF(Request $request)
    {
        // Get profit loss data using the same filters
        $reportController = new \App\Http\Controllers\API\ReportController();
        $response = $reportController->profitLossReport($request);
        
        if (!$response) {
            abort(500, 'Failed to generate profit loss data');
        }
        
        // Ensure filters are properly structured
        $filters = $request->all();
        
        // Normalize date field names to match what the template expects
        if (isset($filters['fromDate'])) {
            $filters['from_date'] = $filters['fromDate'];
        }
        if (isset($filters['toDate'])) {
            $filters['to_date'] = $filters['toDate'];
        }
        
        $data = [
            'type' => $response['type'],
            'reportData' => $response['reportData'],
            'filters' => $filters
        ];
        
        // share data to view
        view()->share('profitLossData', $data);
        return $this->generatePDF('pdf.profit-loss', $data, 'profit-loss.pdf', 'a4', 'landscape');
    }

    // return profit loss excel
    public function profitLossExportExcel(Request $request)
    {
        $filters = $request->all();
        return Excel::download(new ExportProfitLoss($filters), 'ProfitLoss.xlsx');
    }

    // return sales by user report pdf
    public function salesByUserReportPDF(Request $request)
    {
        // Map query params to expected ReportController payload
        $mappedRequest = new \Illuminate\Http\Request([
            'fromDate' => $request->input('start_date'),
            'toDate' => $request->input('end_date'),
            'user' => [ 'id' => (int) $request->input('term') ],
        ]);

        // Get sales by user report data using the same filters
        $reportController = new \App\Http\Controllers\API\ReportController();
        $collection = $reportController->salesByUserReport($mappedRequest);
        // Normalize to plain array to avoid any accidental model access in Blade
        $raw = $collection->toArray(request());
        $plainItems = array_map(function ($row) {
            return [
                'salesBy' => $row['salesBy'] ?? '',
                'invoiceLabel' => $row['invoiceLabel'] ?? '',
                'client' => $row['client'] ?? '',
                'invoiceTotal' => isset($row['invoiceTotal']) ? $row['invoiceTotal'] : null,
                'invoiceDate' => $row['invoiceDate'] ?? null,
            ];
        }, $raw);
        $data = [ 'items' => $plainItems ];
        
        // Add filters to data for template
        $data['filters'] = [
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
            'term' => $request->input('term'),
        ];
        
        // share data to view
        view()->share('salesByUserData', $data);
        return $this->generatePDF('pdf.sales-by-user-report', $data, 'sales-by-user-report.pdf', 'a4', 'landscape');
    }

    // return collection by user report pdf
    public function collectionByUserReportPDF(Request $request)
    {
        // Map query params to expected ReportController payload
        $mappedRequest = new \Illuminate\Http\Request([
            'fromDate' => $request->input('start_date'),
            'toDate' => $request->input('end_date'),
            'user' => [ 'id' => (int) $request->input('term') ],
        ]);

        // Get collection by user report data using the same filters
        $reportController = new \App\Http\Controllers\API\ReportController();
        $collection = $reportController->collectionByUserReport($mappedRequest);
        // Normalize to plain array to avoid accessing Eloquent relations in Blade
        $raw = $collection->toArray(request());
        $plainItems = array_map(function ($row) {
            return [
                'collectionBy' => $row['collectionBy'] ?? ($row['user']['employee']['name'] ?? ''),
                'invoiceLabel' => $row['invoice']['invoiceLabel'] ?? '',
                'clientName' => $row['client']['name'] ?? '',
                // Use subTotal from resource to avoid invoking model accessors/relations
                'invoiceAmount' => isset($row['invoice']['subTotal']) ? $row['invoice']['subTotal'] : null,
                'amount' => $row['amount'] ?? 0,
                'transactionDate' => $row['transaction']['transaction_date'] ?? null,
            ];
        }, $raw);
        $data = [ 'items' => $plainItems ];
        
        // Add filters to data for template
        $data['filters'] = [
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
            'term' => $request->input('term'),
        ];
        
        // share data to view
        view()->share('collectionByUserData', $data);
        return $this->generatePDF('pdf.collection-by-user-report', $data, 'collection-by-user-report.pdf', 'a4', 'landscape');
    }

    // return account statement pdf
    public function accountStatementPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs with all entries
        ini_set('memory_limit', '1G'); // 1GB for very large datasets
        set_time_limit(300); // 5 minutes for processing
        
        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->accountStatementForPrint($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            if (!$reportData['success']) {
                abort(404, 'Report data not found');
            }
            
            $data = $reportData['data'];
            
            // Log entry count for debugging
            if (isset($data['entries'])) {
                Log::info('Account Statement PDF - Processing all entries. Total: ' . count($data['entries']));
            }
            
            // Add filters to data for template - merge with existing filters if they exist
            $data['filters'] = array_merge($data['filters'] ?? [], [
                'from_date' => $request->input('from_date'),
                'to_date' => $request->input('to_date'),
                'chart_of_account_id' => $request->input('chart_of_account_id'),
                'sub_chart_of_account_id' => $request->input('sub_chart_of_account_id'),
                'fiscal_year_id' => $request->input('fiscal_year_id'),
                'accounting_period_id' => $request->input('accounting_period_id'),
            ]);
            
            // Log the data structure for debugging
            Log::info('Account Statement PDF Data Structure:', [
                'has_chart_of_account' => isset($data['chart_of_account']),
                'has_report_account' => isset($data['report_account']),
                'has_summary' => isset($data['summary']),
                'has_entries' => isset($data['entries']),
                'entries_count' => isset($data['entries']) ? count($data['entries']) : 0,
                'chart_of_account_keys' => isset($data['chart_of_account']) ? array_keys($data['chart_of_account']) : [],
                'summary_keys' => isset($data['summary']) ? array_keys($data['summary']) : [],
            ]);
            
            // For debugging purposes, temporarily return HTML instead of PDF
            if ($request->has('debug')) {
                return view('pdf.account-statement', ['reportData' => $data]);
            }
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.account-statement', $data, 'account-statement.pdf');
            
        } catch (\Exception $e) {
            Log::error('Account Statement PDF Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return error response
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return account statement excel
    public function accountStatementExportExcel(Request $request)
    {
        $filters = $request->all();
        return Excel::download(new ExportAccountStatement($filters), 'AccountStatement.xlsx');
    }

    // return group account statement pdf
    public function groupAccountStatementPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs with all entries
        ini_set('memory_limit', '1G'); // 1GB for very large datasets
        set_time_limit(300); // 5 minutes for processing
        
        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->groupAccountStatementForPrint($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            if (!$reportData['success']) {
                abort(404, 'Report data not found');
            }
            
            $data = $reportData['data'];
            
            // Add filters to data for template - merge with existing filters if they exist
            $data['filters'] = array_merge($data['filters'] ?? [], [
                'from_date' => $request->input('from_date'),
                'to_date' => $request->input('to_date'),
                'chart_of_account_ids' => $request->input('chart_of_account_ids'),
                'sub_chart_of_account_ids' => $request->input('sub_chart_of_account_ids'),
                'fiscal_year_id' => $request->input('fiscal_year_id'),
                'accounting_period_id' => $request->input('accounting_period_id'),
            ]);
            
            // Log the data structure for debugging
            Log::info('Group Account Statement PDF Data Structure:', [
                'has_chart_of_accounts' => isset($data['chart_of_accounts']),
                'has_summary' => isset($data['summary']),
                'has_entries' => isset($data['entries']),
                'entries_count' => isset($data['entries']) ? count($data['entries']) : 0,
                'chart_of_accounts_count' => isset($data['chart_of_accounts']) ? count($data['chart_of_accounts']) : 0,
                'summary_keys' => isset($data['summary']) ? array_keys($data['summary']) : [],
            ]);
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.group-account-statement', $data, 'group-account-statement.pdf');
            
        } catch (\Exception $e) {
            Log::error('Group Account Statement PDF Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return error response
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return group account statement excel
    public function groupAccountStatementExportExcel(Request $request)
    {
        $filters = $request->all();
        return Excel::download(new ExportGroupAccountStatement($filters), 'GroupAccountStatement.xlsx');
    }


    // return invoice summary excel
    public function invoiceSummaryExportExcel(Request $request)
    {
        $filters = $request->all();
        return Excel::download(new ExportInvoiceSummary($filters), 'InvoiceSummary.xlsx');
    }


    // return purchase summary excel
    public function purchaseSummaryExportExcel(Request $request)
    {
        $filters = $request->all();
        return Excel::download(new ExportPurchaseSummary($filters), 'PurchaseSummary.xlsx');
    }


    // return vat report excel
    public function vatReportExportExcel(Request $request)
    {
        $filters = $request->all();
        return Excel::download(new ExportVatReport($filters), 'VatReport.xlsx');
    }

    // return invoice summary pdf
    public function invoiceSummaryPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs with all entries
        ini_set('memory_limit', '1G'); // 1GB for very large datasets
        set_time_limit(300); // 5 minutes for processing
        
        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->invoiceSummaryForPrint($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            if (!$reportData['success']) {
                abort(404, 'Report data not found');
            }
            
            $data = $reportData['data'];
            
            // Log entry count for debugging
            if (isset($data['clients'])) {
                Log::info('Invoice Summary PDF - Processing all clients. Total: ' . count($data['clients']));
            }
            
            // Add filters to data for template - merge with existing filters if they exist
            $data['filters'] = array_merge($data['filters'] ?? [], [
                'from_date' => $request->input('from_date'),
                'to_date' => $request->input('to_date'),
                'fiscal_year_id' => $request->input('fiscal_year_id'),
                'accounting_period_id' => $request->input('accounting_period_id'),
            ]);
            
            // Log the data structure for debugging
            Log::info('Invoice Summary PDF Data Structure:', [
                'has_summary' => isset($data['summary']),
                'has_clients' => isset($data['clients']),
                'clients_count' => isset($data['clients']) ? count($data['clients']) : 0,
                'summary_keys' => isset($data['summary']) ? array_keys($data['summary']) : [],
            ]);
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.invoice-summary', $data, 'invoice-summary.pdf');
            
        } catch (\Exception $e) {
            Log::error('Invoice Summary PDF Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return error response
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return purchase summary pdf
    public function purchaseSummaryPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs with all entries
        ini_set('memory_limit', '1G'); // 1GB for very large datasets
        set_time_limit(300); // 5 minutes for processing
        
        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->purchaseSummaryForPrint($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            if (!$reportData['success']) {
                abort(404, 'Report data not found');
            }
            
            $data = $reportData['data'];
            
            // Log entry count for debugging
            if (isset($data['suppliers'])) {
                Log::info('Purchase Summary PDF - Processing all suppliers. Total: ' . count($data['suppliers']));
            }
            
            // Add filters to data for template - merge with existing filters if they exist
            $data['filters'] = array_merge($data['filters'] ?? [], [
                'from_date' => $request->input('from_date'),
                'to_date' => $request->input('to_date'),
                'fiscal_year_id' => $request->input('fiscal_year_id'),
                'accounting_period_id' => $request->input('accounting_period_id'),
            ]);
            
            // Log the data structure for debugging
            Log::info('Purchase Summary PDF Data Structure:', [
                'has_summary' => isset($data['summary']),
                'has_suppliers' => isset($data['suppliers']),
                'suppliers_count' => isset($data['suppliers']) ? count($data['suppliers']) : 0,
                'summary_keys' => isset($data['summary']) ? array_keys($data['summary']) : [],
            ]);
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.purchase-summary', $data, 'purchase-summary.pdf');
            
        } catch (\Exception $e) {
            Log::error('Purchase Summary PDF Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return error response
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return trial balance pdf
    public function trialBalancePDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs
        ini_set('memory_limit', '1G');
        set_time_limit(300);
        
        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->trialBalanceForPrint($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            if (!$reportData['success']) {
                abort(404, 'Report data not found');
            }
            
            $data = $reportData['data'];
            
            // Log entry count for debugging
            if (isset($data['trial_balance'])) {
                Log::info('Trial Balance PDF - Processing all accounts. Total: ' . count($data['trial_balance']));
            }
            
            // Add filters to data for template - merge with existing filters if they exist
            $data['filters'] = array_merge($data['filters'] ?? [], [
                'from_date' => $request->input('from_date'),
                'to_date' => $request->input('to_date'),
                'fiscal_year_id' => $request->input('fiscal_year_id'),
                'accounting_period_id' => $request->input('accounting_period_id'),
                'chart_of_account_id' => $request->input('chart_of_account_id'),
                'sub_chart_of_account_id' => $request->input('sub_chart_of_account_id'),
            ]);
            
            // Log the data structure for debugging
            Log::info('Trial Balance PDF Data Structure:', [
                'has_trial_balance' => isset($data['trial_balance']),
                'has_grand_totals' => isset($data['grand_totals']),
                'accounts_count' => isset($data['trial_balance']) ? count($data['trial_balance']) : 0,
                'total_count' => $data['total_count'] ?? 0,
            ]);
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.trial-balance', $data, 'trial-balance.pdf');
            
        } catch (\Exception $e) {
            Log::error('Trial Balance PDF Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return inventory report pdf
    public function inventoryReportPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs
        ini_set('memory_limit', '1G');
        set_time_limit(300);
        
        try {
            // Get inventory report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->inventoryReport($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            $data = $reportData;
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.inventory-report', $data, 'inventory-report.pdf');
            
        } catch (\Exception $e) {
            Log::error('Inventory Report PDF Error: ' . $e->getMessage());
            
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return items report pdf
    public function itemsReportPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs
        ini_set('memory_limit', '1G');
        set_time_limit(300);
        
        try {
            // Get items report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->itemsReport($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            $data = $reportData;
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.items-report', $data, 'items-report.pdf');
            
        } catch (\Exception $e) {
            Log::error('Items Report PDF Error: ' . $e->getMessage());
            
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return expenses report pdf
    public function expensesReportPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs
        ini_set('memory_limit', '1G');
        set_time_limit(300);
        
        try {
            // Get expenses report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->expenseReport($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            $data = $reportData;
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.expenses-report', $data, 'expenses-report.pdf');
            
        } catch (\Exception $e) {
            Log::error('Expenses Report PDF Error: ' . $e->getMessage());
            
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return expenses report excel
    public function expensesReportExportExcel(Request $request)
    {
        $filters = $request->all();
        return Excel::download(new ExportExpensesReport($filters), 'ExpensesReport.xlsx');
    }

    // return supplier payable report pdf
    public function supplierPayableReportPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs
        ini_set('memory_limit', '1G');
        set_time_limit(300);
        
        try {
            // Get supplier payable report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->supplierDueReport($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            $data = $reportData;
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.supplier-payable-report', $data, 'supplier-payable-report.pdf');
            
        } catch (\Exception $e) {
            Log::error('Supplier Payable Report PDF Error: ' . $e->getMessage());
            
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return VAT report pdf
    public function vatReportPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs with all entries
        ini_set('memory_limit', '1G'); // 1GB for very large datasets
        set_time_limit(300); // 5 minutes for processing
        
        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $response = $reportController->vatReportForPrint($request);
            
            // Handle JsonResponse
            if ($response instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $response->getData(true);
            } else {
                $reportData = $response;
            }
            
            if (!$reportData['success']) {
                abort(404, 'Report data not found');
            }
            
            $data = $reportData['data'];
            
            // Log entry count for debugging
            if (isset($data['transactions'])) {
                Log::info('VAT Report PDF - Processing all transactions. Total: ' . count($data['transactions']));
            }
            
            // Add filters to data for template - merge with existing filters if they exist
            $data['filters'] = array_merge($data['filters'] ?? [], [
                'from_date' => $request->input('from_date'),
                'to_date' => $request->input('to_date'),
                'fiscal_year_id' => $request->input('fiscal_year_id'),
                'accounting_period_id' => $request->input('accounting_period_id'),
            ]);
            
            // Log the data structure for debugging
            Log::info('VAT Report PDF Data Structure:', [
                'has_summary' => isset($data['summary']),
                'has_transactions' => isset($data['transactions']),
                'vat_rates_count' => isset($data['vat_rates']) ? count($data['vat_rates']) : 0,
                'summary_count' => isset($data['summary']) ? count($data['summary']) : 0,
                'transactions_count' => isset($data['transactions']) ? count($data['transactions']) : 0,
            ]);
            
            // share data to view
            view()->share('reportData', $data);
            return $this->generatePDF('pdf.vat-report', $data, 'vat-report.pdf');
            
        } catch (\Exception $e) {
            Log::error('VAT Report PDF Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return error response
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }

    // return summary report pdf
    public function summaryPDF(Request $request)
    {
        // Disable Telescope for this request to avoid database issues
        \Laravel\Telescope\Telescope::stopRecording();
        
        // Increase memory limit for large PDFs
        ini_set('memory_limit', '1G');
        set_time_limit(300);
        
        try {
            // Get summary report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $summaryData = $reportController->summeryReport($request);
            
            // Handle JsonResponse
            if ($summaryData instanceof \Illuminate\Http\JsonResponse) {
                $summaryData = $summaryData->getData(true);
            }
            
            // Log the data structure for debugging
            Log::info('Summary Report PDF Data Structure:', [
                'has_data' => !empty($summaryData),
                'data_count' => count($summaryData),
                'data_keys' => is_array($summaryData) ? array_keys($summaryData) : 'not array',
            ]);
            
            // share data to view
            view()->share('reportData', $summaryData);
            return $this->generatePDF('pdf.summary', $summaryData, 'summary-report.pdf');
            
        } catch (\Exception $e) {
            Log::error('Summary Report PDF Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return error response
            return response()->json([
                'error' => 'Failed to generate PDF: ' . $e->getMessage()
            ], 500);
        }
    }


    // Note: Other missing PDF methods (invoiceSummaryPDF, etc.) already exist in the codebase

    /**
     * Export journal entries to Excel
     */
    public function journalEntriesExportExcel(Request $request)
    {
        try {
            $filters = [
                'status' => $request->input('status'),
                'from_date' => $request->input('from_date'),
                'to_date' => $request->input('to_date'),
            ];

            return Excel::download(new ExportJournalEntries($filters), 'journal-entries-' . date('Y-m-d') . '.xlsx');
        } catch (\Exception $e) {
            Log::error('Journal Entries Excel Export Error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to export journal entries: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Export journal entries to PDF
     */
    public function journalEntriesExportPDF(Request $request)
    {
        try {
            $query = \App\Models\JournalEntry::with(['lines.chartOfAccount.type', 'creator', 'poster']);

            // Apply filters
            if ($request->input('status')) {
                $query->where('status', $request->input('status'));
            }

            if ($request->input('from_date')) {
                $query->where('entry_date', '>=', $request->input('from_date'));
            }

            if ($request->input('to_date')) {
                $query->where('entry_date', '<=', $request->input('to_date'));
            }

            $journalEntries = $query->orderBy('entry_date', 'desc')->get();

            $data = [
                'journalEntries' => $journalEntries,
                'filters' => [
                    'status' => $request->input('status'),
                    'from_date' => $request->input('from_date'),
                    'to_date' => $request->input('to_date'),
                ],
                'company' => \App\Models\GeneralSetting::first(),
            ];

            return $this->generatePDF('pdf.journal-entries', $data, 'journal-entries-' . date('Y-m-d') . '.pdf');
        } catch (\Exception $e) {
            Log::error('Journal Entries PDF Export Error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to export journal entries: ' . $e->getMessage()
            ], 500);
        }
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\GeneralSetting;
use App\Models\Invoice;
use App\Models\InvoiceReturn;
use App\Models\PaymentVoucher;
use App\Models\PrintTemplate;
use App\Models\Purchase;
use App\Models\PurchaseOrder;
use App\Models\PurchaseReturn;
use App\Models\Quotation;
use Barryvdh\DomPDF\Facade\Pdf;
use Barryvdh\Snappy\Facades\SnappyPdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Spipu\Html2Pdf\Exception\Html2PdfException;
use Spipu\Html2Pdf\Html2Pdf;
use Symfony\Component\Process\Process;

class PrintController extends Controller
{
    /**
     * Print invoice using selected template
     */
    public function printInvoice($slug)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        $invoice = Invoice::where('slug', $slug)
            ->with('client', 'invoiceProducts.invoice', 'invoicePayments.invoicePaymentTransaction.cashbookAccount',
                'invoiceProducts.product.productUnit', 'invoiceProducts.product.productTax',
                'invoiceTax', 'user')
            ->firstOrFail();

        // Get the default template for invoices
        $template = PrintTemplate::byModule('invoice')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        if (! $template) {
            // Fallback to basic template if no print template is set
            return view('print.invoice-basic', compact('invoice', 'locale', 'logoBase64'));
        }

        return view('print.invoice', compact('invoice', 'template', 'locale', 'logoBase64'));
    }

    /**
     * Print purchase using selected template
     */
    public function printPurchase($slug)
    {
        // Set locale for translations - force Arabic for print templates
        app()->setLocale('ar');

        $purchase = Purchase::where('slug', $slug)
            ->with('supplier', 'purchaseProducts.purchase', 'purchasePayments.purchasePaymentTransaction.cashbookAccount',
                'purchaseProducts.product.productUnit', 'purchaseProducts.product.productTax',
                'purchaseTax', 'user')
            ->firstOrFail();

        // Get the default template for purchases
        $template = PrintTemplate::byModule('purchase')->default()->first();

        if (! $template) {
            // Fallback to basic template if no print template is set
            return view('print.purchase-basic', compact('purchase'));
        }

        return view('print.purchase', compact('purchase', 'template'));
    }

    /**
     * Print quotation using selected template
     */
    public function printQuotation($slug)
    {
        // Set locale for translations - force Arabic for print templates
        app()->setLocale('ar');

        $quotation = Quotation::where('slug', $slug)
            ->with('client', 'quotationProducts.product.productUnit', 'quotationProducts.product.productTax', 'user')
            ->firstOrFail();

        // Get the default template for quotations
        $template = PrintTemplate::byModule('quotation')->default()->first();

        if (! $template) {
            // Fallback to basic template if no print template is set
            return view('print.quotation-basic', compact('quotation'));
        }

        return view('print.quotation', compact('quotation', 'template'));
    }

    /**
     * Print invoice return using selected template
     */
    public function printInvoiceReturn($slug)
    {
        // Set locale for translations - force Arabic for print templates
        app()->setLocale('ar');

        $invoiceReturn = InvoiceReturn::where('slug', $slug)
            ->with([
                'invoice.client',
                'invoice.invoiceProducts.product.productUnit',
                'invoice.invoiceProducts.product.productTax',
                'invoice.invoiceProducts.vatRate',
                'invoiceReturnProducts.product.productUnit',
                'invoiceReturnProducts.product.productTax',
                'user',
            ])
            ->firstOrFail();

        // Get the default template for invoice returns
        $template = PrintTemplate::byModule('invoice-return')->default()->first();

        if (! $template) {
            // Fallback to basic template if no print template is set
            return view('print.invoice-return-basic', compact('invoiceReturn'));
        }

        return view('print.invoice-return', compact('invoiceReturn', 'template'));
    }

    /**
     * Print purchase return using selected template
     */
    public function printPurchaseReturn($slug)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        $purchaseReturn = PurchaseReturn::where('slug', $slug)
            ->with([
                'purchase.supplier',
                'purchase.purchaseProducts.product.productUnit',
                'purchase.purchaseProducts.product.productTax',
                'purchaseReturnProducts.product.productUnit',
                'purchaseReturnProducts.product.productTax',
                'user',
            ])
            ->firstOrFail();

        // Get the default template for purchase returns
        $template = PrintTemplate::byModule('purchase-return')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        if (! $template) {
            // Fallback to basic template if no print template is set
            return view('print.purchase-return-basic', compact('purchaseReturn', 'locale', 'logoBase64'));
        }

        return view('print.purchase-return', compact('purchaseReturn', 'template', 'locale', 'logoBase64'));
    }

    /**
     * Print payment voucher using selected template
     */
    public function printVoucher($slug)
    {
        // Set locale for translations - force Arabic for print templates
        app()->setLocale('ar');

        $voucher = PaymentVoucher::where('slug', $slug)
            ->with('client', 'supplier', 'chartOfAccount', 'account', 'transaction', 'invoice', 'purchase', 'user')
            ->firstOrFail();

        // Get the default template for vouchers; fallback to invoice template config
        $template = PrintTemplate::byModule('voucher')->default()->first();
        if (! $template) {
            // Fallback to basic template if no print template is set
            if (view()->exists('print.voucher-basic')) {
                return view('print.voucher-basic', compact('voucher'));
            }

            $template = new PrintTemplate();
            $template->template_config = $this->getTemplateConfig('invoice');
        }

        return view('print.voucher', compact('voucher', 'template'));
    }

    /**
     * Download voucher as PDF using selected template
     */
    public function downloadVoucherPDF($slug)
    {
        // Set locale for translations - force Arabic for print templates
        app()->setLocale('ar');

        $voucher = PaymentVoucher::where('slug', $slug)
            ->with('client', 'supplier', 'chartOfAccount', 'account', 'transaction', 'invoice', 'purchase', 'user')
            ->firstOrFail();

        // Get the default template for vouchers; fallback appropriately
        $template = PrintTemplate::byModule('voucher')->default()->first();

        if (! $template) {
            if (view()->exists('print.voucher-basic')) {
                $html = view('print.voucher-basic', compact('voucher'))->render();
            } else {
                $template = new PrintTemplate();
                $template->template_config = $this->getTemplateConfig('invoice');
                $html = view('print.voucher', compact('voucher', 'template'))->render();
            }
        } else {
            $html = view('print.voucher', compact('voucher', 'template'))->render();
        }

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $this->getLogoAsBase64($template);

        // Hide buttons in PDF and add Arabic support, ensure proper fonts
        $html = str_replace('<head>', '<head>
            <style>
                .action-buttons { display: none !important; }
                body { 
                    font-family: Arial, "DejaVu Sans", sans-serif; 
                    direction: ltr;
                }
                .arabic-text { 
                    direction: rtl; 
                    text-align: right; 
                    font-family: Arial, "DejaVu Sans", "Tahoma", sans-serif;
                }
                * { 
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                .items-table { width: 100%; border-collapse: collapse; }
                .items-table th, .items-table td { border: 1px solid #e5e7eb; padding: 8px; }
                .document-header > div { display: table; width: 100%; }
            </style>', $html);

        // Replace logo placeholder with base64 if available
        if ($logoBase64) {
            $html = str_replace('{{LOGO_BASE64}}', $logoBase64, $html);
        }

        $fileLabel = $voucher->isReceive() ? 'Receive-Voucher' : 'Send-Voucher';
        $fileNumber = $voucher->receipt_no ?: ($voucher->cheque_no ?: $voucher->id);

        return $this->generatePDF($html, $fileLabel.'-'.$fileNumber.'.pdf');
    }

    /**
     * Print balance sheet report using selected template
     */
    public function printBalanceSheet(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Get report data from the API
            $reportController = new \App\Http\Controllers\API\ReportController();
            $reportResponse = $reportController->balanceSheet($request);

            // Handle JsonResponse
            if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $reportResponse->getData(true);
            } else {
                $reportData = $reportResponse;
            }

            // Debug: Log the response structure
            Log::info('Balance Sheet Response Debug:', [
                'response_type' => gettype($reportResponse),
                'is_json_response' => $reportResponse instanceof \Illuminate\Http\JsonResponse,
                'report_data_type' => gettype($reportData),
                'report_data_keys' => is_array($reportData) ? array_keys($reportData) : 'not array',
                'success_key_exists' => isset($reportData['success']),
                'success_value' => $reportData['success'] ?? 'key not found',
                'request_params' => $request->all(),
            ]);

            if (! isset($reportData['success']) || ! $reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';

                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> '.htmlspecialchars($errorMessage).'</p><p><strong>Detail:</strong> '.htmlspecialchars($errorDetail).'</p><p><strong>Response:</strong> '.htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)).'</p></body></html>', 500);
            }

            $balanceData = $reportData['data'];

            Log::info('Print Balance Sheet - Report generated successfully');

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.balance-sheet-basic', compact('balanceData'));
            }

            return view('print.reports.balance-sheet', compact('balanceData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Balance Sheet Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Balance Sheet PDF
     */
    public function previewBalanceSheetPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get report data from the API
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->balanceSheet($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! isset($reportData['success']) || ! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $balanceData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $balanceData['filters']['from_date'] ?? '';
        $toDate = $balanceData['filters']['to_date'] ?? '';
        $filename = 'Balance-Sheet-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.balance-sheet' : 'print.balance-sheet-basic',
            'view_data' => compact('balanceData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Balance Sheet PDF
     */
    public function downloadBalanceSheetPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get report data from the API
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->balanceSheet($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! isset($reportData['success']) || ! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $balanceData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $balanceData['filters']['from_date'] ?? '';
        $toDate = $balanceData['filters']['to_date'] ?? '';
        $filename = 'Balance-Sheet-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.balance-sheet' : 'print.balance-sheet-basic',
            'view_data' => compact('balanceData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print trial balance report using selected template
     */
    public function printTrialBalance(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $reportResponse = $reportController->trialBalanceForPrint($request);

            // Handle JsonResponse
            if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $reportResponse->getData(true);
            } else {
                $reportData = $reportResponse;
            }

            // Debug: Log the response structure
            Log::info('Trial Balance Response Debug:', [
                'response_type' => gettype($reportResponse),
                'is_json_response' => $reportResponse instanceof \Illuminate\Http\JsonResponse,
                'report_data_type' => gettype($reportData),
                'report_data_keys' => is_array($reportData) ? array_keys($reportData) : 'not array',
                'success_key_exists' => isset($reportData['success']),
                'success_value' => $reportData['success'] ?? 'key not found',
                'request_params' => $request->all(),
            ]);

            if (! isset($reportData['success']) || ! $reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';

                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> '.htmlspecialchars($errorMessage).'</p><p><strong>Detail:</strong> '.htmlspecialchars($errorDetail).'</p><p><strong>Response:</strong> '.htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)).'</p></body></html>', 500);
            }

            $trialBalanceData = $reportData['data'];

            Log::info('Print Trial Balance - Report generated successfully');

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.trial-balance-basic', compact('trialBalanceData'));
            }

            return view('print.reports.trial-balance', compact('trialBalanceData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Trial Balance Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Trial Balance PDF
     */
    public function previewTrialBalancePDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get report data from the API
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->trialBalanceForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! isset($reportData['success']) || ! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $trialBalanceData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $trialBalanceData['filters']['from_date'] ?? '';
        $toDate = $trialBalanceData['filters']['to_date'] ?? '';
        $filename = 'Trial-Balance-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.trial-balance' : 'print.trial-balance-basic',
            'view_data' => compact('trialBalanceData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Trial Balance PDF
     */
    public function downloadTrialBalancePDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get report data from the API
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->trialBalanceForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! isset($reportData['success']) || ! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $trialBalanceData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $trialBalanceData['filters']['from_date'] ?? '';
        $toDate = $trialBalanceData['filters']['to_date'] ?? '';
        $filename = 'Trial-Balance-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.trial-balance' : 'print.trial-balance-basic',
            'view_data' => compact('trialBalanceData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Profit Loss using selected template
     */
    public function printProfitLoss(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Get report data from the API
            $reportController = new \App\Http\Controllers\API\ReportController();
            $reportResponse = $reportController->profitLossReport($request);

            // Handle JsonResponse
            if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $reportResponse->getData(true);
            } else {
                $reportData = $reportResponse;
            }

            // The profit loss API returns data directly without success wrapper
            if (! $reportData || ! isset($reportData['type'])) {
                Log::error('Profit Loss Print Error: Invalid response structure', [
                    'response' => $reportData,
                    'request_params' => $request->all(),
                ]);

                return response()->make(
                    '<html><body><h1>Debug Error</h1><p><strong>Message:</strong>Invalid profit loss data structure</p><p><strong>Detail:</strong>Expected type and reportData keys</p><p><strong>Response:</strong>'.htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)).'</p></body></html>',
                    500
                );
            }

            // Prepare data structure to match what templates expect
            $filters = $request->all();

            // Normalize date field names to match what the template expects
            if (isset($filters['fromDate'])) {
                $filters['from_date'] = $filters['fromDate'];
            }
            if (isset($filters['toDate'])) {
                $filters['to_date'] = $filters['toDate'];
            }

            $profitLossData = [
                'type' => $reportData['type'],
                'reportData' => $reportData['reportData'],
                'filters' => $filters,
            ];

            Log::info('Print Profit Loss - Report generated successfully', [
                'type' => $profitLossData['type'],
                'data_count' => count($profitLossData['reportData'] ?? []),
                'filters' => $profitLossData['filters'],
                'sample_item' => isset($profitLossData['reportData'][0]) ? $profitLossData['reportData'][0] : 'no data',
                'raw_response_structure' => array_keys($reportData),
                'reportData_is_array' => is_array($profitLossData['reportData']),
            ]);

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.profit-loss-basic', compact('profitLossData'));
            }

            return view('print.reports.profit-loss', compact('profitLossData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Profit Loss Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Profit Loss PDF
     */
    public function previewProfitLossPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get report data from the API
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->profitLossReport($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData || ! isset($reportData['type'])) {
            abort(404, 'Report data not found');
        }

        // Prepare data structure
        $filters = $request->all();
        if (isset($filters['fromDate'])) {
            $filters['from_date'] = $filters['fromDate'];
        }
        if (isset($filters['toDate'])) {
            $filters['to_date'] = $filters['toDate'];
        }

        $profitLossData = [
            'type' => $reportData['type'],
            'reportData' => $reportData['reportData'],
            'filters' => $filters,
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $filters['from_date'] ?? '';
        $toDate = $filters['to_date'] ?? '';
        $filename = 'Profit-Loss-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.profit-loss' : 'print.profit-loss-basic',
            'view_data' => compact('profitLossData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Profit Loss PDF
     */
    public function downloadProfitLossPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get report data from the API
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->profitLossReport($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData || ! isset($reportData['type'])) {
            abort(404, 'Report data not found');
        }

        // Prepare data structure
        $filters = $request->all();
        if (isset($filters['fromDate'])) {
            $filters['from_date'] = $filters['fromDate'];
        }
        if (isset($filters['toDate'])) {
            $filters['to_date'] = $filters['toDate'];
        }

        $profitLossData = [
            'type' => $reportData['type'],
            'reportData' => $reportData['reportData'],
            'filters' => $filters,
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $filters['from_date'] ?? '';
        $toDate = $filters['to_date'] ?? '';
        $filename = 'Profit-Loss-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.profit-loss' : 'print.profit-loss-basic',
            'view_data' => compact('profitLossData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print account statement report using selected template
     */
    public function printAccountStatement(Request $request)
    {
        // // Set locale for translations
        // app()->setLocale('ar');

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->accountStatementForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $accountStatementData = $reportData['data'];

        Log::info('Print Account Statement - Total entries: '.count($accountStatementData['entries']));

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        if (! $template) {
            // Fallback to basic template if no print template is set
            return view('print.account-statement-basic', compact('accountStatementData'));
        }

        return view('print.reports.account-statement', compact('accountStatementData', 'template'));
    }

    /**
     * Download Account Statement PDF
     */
    public function previewAccountStatementPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->accountStatementForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $accountStatementData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $accountName = $accountStatementData['chart_of_account']['name'] ?? 'Account';
        $fromDate = $accountStatementData['filters']['from_date'] ?? '';
        $toDate = $accountStatementData['filters']['to_date'] ?? '';
        $filename = 'Account-Statement-'.str_replace(' ', '-', $accountName).'-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.account-statement' : 'print.account-statement-basic',
            'view_data' => compact('accountStatementData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    public function downloadAccountStatementPDF(Request $request)
    {
        // Set locale for translations
        // app()->setLocale('ar');

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->accountStatementForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $accountStatementData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $accountName = $accountStatementData['chart_of_account']['name'] ?? 'Account';
        $fromDate = $accountStatementData['filters']['from_date'] ?? '';
        $toDate = $accountStatementData['filters']['to_date'] ?? '';
        $filename = 'Account-Statement-'.str_replace(' ', '-', $accountName).'-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);
        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.account-statement' : 'print.account-statement-basic',
            'view_data' => compact('accountStatementData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',

            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Get template configuration for a specific module
     */
    private function getTemplateConfig($module)
    {
        $template = PrintTemplate::byModule($module)->default()->first();

        if (! $template) {
            return [
                'colors' => [
                    'primary' => '#2563eb',
                    'secondary' => '#6b7280',
                    'background' => '#ffffff',
                ],
                'typography' => [
                    'fontFamily' => 'Inter, sans-serif',
                    'baseFontSize' => 14,
                    'headerFontSize' => 24,
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 20,
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true,
                ],
            ];
        }

        return $template->template_config ?? [];
    }

    /**
     * Prepare data for template rendering
     */
    private function prepareTemplateData($data, $module)
    {
        $templateData = [];

        // Get settings from GeneralSetting model
        $settings = GeneralSetting::get();

        // Common data
        $templateData['company'] = [
            'name' => $settings->where('key', 'company_name')->first()?->value ?? 'Company Name',
            'address' => $settings->where('key', 'address')->first()?->value ?? 'Company Address',
            'phone' => $settings->where('key', 'phone_number')->first()?->value ?? 'Phone',
            'email' => $settings->where('key', 'email_address')->first()?->value ?? 'Email',
            'website' => $settings->where('key', 'website')->first()?->value ?? 'Website',
        ];

        // Module-specific data
        switch ($module) {
            case 'invoice':
                $templateData['document'] = [
                    'type' => 'Invoice',
                    'number' => $data->invoiceNumber,
                    'date' => $data->invoiceDate,
                    'due_date' => $data->dueDate,
                    'status' => $data->status,
                ];
                $templateData['client'] = $data->client;
                $templateData['items'] = $data->invoiceProducts;
                $templateData['totals'] = [
                    'subtotal' => $data->subTotal,
                    'tax' => $data->taxTotal,
                    'discount' => $data->discountTotal,
                    'total' => $data->total,
                ];
                break;

            case 'purchase':
                $templateData['document'] = [
                    'type' => 'Purchase',
                    'number' => $data->purchaseNumber,
                    'date' => $data->purchaseDate,
                    'due_date' => $data->dueDate,
                    'status' => $data->status,
                ];
                $templateData['supplier'] = $data->supplier;
                $templateData['items'] = $data->purchaseProducts;
                $templateData['totals'] = [
                    'subtotal' => $data->subTotal,
                    'tax' => $data->taxTotal,
                    'discount' => $data->discountTotal,
                    'total' => $data->total,
                ];
                break;

            case 'quotation':
                $templateData['document'] = [
                    'type' => 'Quotation',
                    'number' => $data->quotationNumber,
                    'date' => $data->quotationDate,
                    'valid_until' => $data->validUntil,
                    'status' => $data->status,
                ];
                $templateData['client'] = $data->client;
                $templateData['items'] = $data->quotationProducts;
                $templateData['totals'] = [
                    'subtotal' => $data->subTotal,
                    'tax' => $data->taxTotal,
                    'discount' => $data->discountTotal,
                    'total' => $data->total,
                ];
                break;
        }

        return $templateData;
    }

    public function upload(Request $request)
    {
        if (! $request->hasFile('file')) {
            return response()->json(['error' => 'No file uploaded'], 400);
        }

        $type = $request->type;

        if ($type == 'invoice') {
            $path = 'uploads/invoices/pdfs';
        } elseif ($type == 'purchase') {
            $path = 'uploads/purchases/pdfs';
        } elseif ($type == 'quotation') {
            $path = 'uploads/quotations/pdfs';
        } elseif ($type == 'voucher') {
            $path = 'uploads/vouchers/pdfs';
        } elseif ($type == 'account-statement') {
            $path = 'uploads/reports/account-statement/pdfs';
        } else {
            // Default path for unknown types
            $path = 'uploads/pdfs';
        }

        $file = $request->file('file');
        $fileName = $file->getClientOriginalName();

        // ✅ Make sure folder exists (public/pdfs)
        $destinationPath = public_path($path);
        if (! File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, 0777, true);
        }

        // ✅ Move uploaded PDF into /public/pdfs
        $file->move($destinationPath, $fileName);

        $fullPath = asset($path.'/'.$fileName);

        return response()->json([
            'success' => true,
            'path' => $fullPath,
            'type' => $type,
        ]);
    }

    public function generatePdf(Request $request)
    {
        $type = $request->type ?? 'default';

        // Determine folder path
        if ($type == 'invoice') {
            $path = 'uploads/invoices/pdfs';
        } elseif ($type == 'purchase') {
            $path = 'uploads/purchases/pdfs';
        } else {
            $path = 'uploads/pdfs';
        }

        $destinationPath = public_path($path);
        if (! File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, 0777, true);
        }

        $fileName = 'pdf_'.time().'.pdf';
        $fullPath = $destinationPath.'/'.$fileName;

        // Generate PDF via Puppeteer (Node.js script)
        $html = $request->html ?? '<h1>Hello PDF</h1>'; // You can pass HTML from front-end

        $scriptPath = base_path('scripts/generatePdf.js');
        $nodePath = 'C:\Program Files\nodejs\node.exe'; // adjust if different
        $process = new Process([$nodePath, $scriptPath, $fullPath, base64_encode($html)]);

        if (! $process->isSuccessful()) {
            return response()->json([
                'success' => false,
                'message' => $process->getErrorOutput(),
            ], 500);
        }

        return response()->json([
            'success' => true,
            'path' => asset($path.'/'.$fileName),
        ]);
    }

    /**
     * Generate PDF using DomPDF as primary method with fallbacks
     */
    // private function generatePDF($html, $filename)
    // {
    //     try {
    //         // Primary method: DomPDF for better compatibility and reliability
    //         $pdf = Pdf::loadHTML($html)
    //             ->setPaper('A4', 'portrait')
    //             ->setOptions([
    //                 'isHtml5ParserEnabled' => true,
    //                 'isRemoteEnabled' => true,
    //                 'isPhpEnabled' => true,
    //                 'defaultFont' => 'DejaVu Sans',
    //                 'isJavascriptEnabled' => false,
    //                 'debugKeepTemp' => false,
    //                 'debugCss' => false,
    //                 'debugLayout' => false,
    //                 'debugLayoutLines' => false,
    //                 'debugLayoutBlocks' => false,
    //                 'debugLayoutInline' => false,
    //             ]);

    //         return $pdf->download($filename);
    //     } catch (\Exception $e) {
    //         Log::warning('DomPDF generation failed: ' . $e->getMessage());
    //     }

    //     try {
    //         // Fallback to SnappyPdf if available
    //         $pdf = SnappyPdf::loadHTML($html)
    //             ->setPaper('a4')
    //             ->setOrientation('portrait')
    //             ->setOption('encoding', 'UTF-8')
    //             ->setOption('enable-local-file-access', true)
    //             ->setOption('disable-smart-shrinking', true)
    //             ->setOption('print-media-type', true)
    //             ->setOption('no-background', false)
    //             ->setOption('margin-top', 10)
    //             ->setOption('margin-right', 10)
    //             ->setOption('margin-bottom', 10)
    //             ->setOption('margin-left', 10);

    //         return $pdf->download($filename);
    //     } catch (\Exception $e) {
    //         Log::warning('SnappyPdf generation failed: ' . $e->getMessage());
    //     }

    //     try {
    //         // Fallback to Puppeteer
    //         $result = $this->generatePDFWithPuppeteer($html, $filename);
    //         if ($result['success']) {
    //             return $result['response'];
    //         }
    //     } catch (\Exception $e) {
    //         Log::warning('Puppeteer PDF generation failed: ' . $e->getMessage());
    //     }

    //     // Final fallback to html2pdf
    //     try {
    //         $html2pdf = new Html2Pdf('P', 'A4', 'en', true, 'UTF-8', [0, 0, 0, 0]);
    //         $html2pdf->setDefaultFont('Arial');
    //         $html2pdf->writeHTML($html);

    //         return response($html2pdf->output('S'), 200, [
    //             'Content-Type' => 'application/pdf',
    //             'Content-Disposition' => 'attachment; filename="' . $filename . '"',
    //             'Cache-Control' => 'private, max-age=0, must-revalidate',
    //             'Pragma' => 'public'
    //         ]);
    //     } catch (Html2PdfException $e) {
    //         return response()->json([
    //             'error' => 'PDF generation failed',
    //             'message' => 'All PDF generation methods failed',
    //             'dompdf_error' => 'DomPDF failed',
    //             'snappy_error' => 'SnappyPdf failed',
    //             'puppeteer_error' => 'Puppeteer failed',
    //             'html2pdf_error' => $e->getMessage()
    //         ], 500);
    //     }
    // }

    /**
     * Generate PDF using snapshot approach (Puppeteer)
     */
    private function generateSnapshotPDF($url, $filename)
    {
        try {
            // Use Puppeteer to take a snapshot of the print view
            $result = $this->generatePDFWithPuppeteer($url, $filename, true);

            return $result;
        } catch (\Exception $e) {
            Log::error('Snapshot PDF generation failed: '.$e->getMessage());

            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    /**
     * Convert logo to base64 for PDF compatibility
     */
    private function getLogoAsBase64($template)
    {
        try {
            if (! $template) {
                Log::warning('Template is null in getLogoAsBase64');

                return null;
            }

            // Use the logo_path accessor which handles all fallbacks
            $logoPath = $template->logo_path;

            if (! $logoPath) {
                Log::warning('Logo path is null for template: '.$template->id);

                return null;
            }

            if (! file_exists($logoPath)) {
                Log::warning('Logo file does not exist: '.$logoPath);

                return null;
            }

            $imageData = file_get_contents($logoPath);
            if ($imageData === false) {
                Log::warning('Failed to read logo file: '.$logoPath);

                return null;
            }

            $mimeType = mime_content_type($logoPath);
            if (! $mimeType) {
                // Fallback: determine mime type from extension
                $extension = strtolower(pathinfo($logoPath, PATHINFO_EXTENSION));
                $mimeTypes = [
                    'png' => 'image/png',
                    'jpg' => 'image/jpeg',
                    'jpeg' => 'image/jpeg',
                    'gif' => 'image/gif',
                    'svg' => 'image/svg+xml',
                    'webp' => 'image/webp',
                ];
                $mimeType = $mimeTypes[$extension] ?? 'image/png';
            }

            $base64 = 'data:'.$mimeType.';base64,'.base64_encode($imageData);
            Log::info('Logo converted to base64 successfully', [
                'logo_path' => $logoPath,
                'mime_type' => $mimeType,
                'size' => strlen($base64),
            ]);

            return $base64;
        } catch (\Exception $e) {
            Log::error('Failed to convert logo to base64: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
            ]);
        }

        return null;
    }

    /**
     * Generate PDF using Puppeteer (screenshot-based)
     */
    private function generatePDFWithPuppeteer($input, $filename, $isUrl = false)
    {
        $tempDir = storage_path('app/temp');
        if (! file_exists($tempDir)) {
            mkdir($tempDir, 0755, true);
        }

        $url = $input;
        $tempHtmlFile = null;

        // If input is HTML content, create temporary file
        if (! $isUrl) {
            $tempHtmlFile = $tempDir.'/temp_'.uniqid().'.html';
            file_put_contents($tempHtmlFile, $input);
            $url = url('storage/app/temp/'.basename($tempHtmlFile));
        }

        // Output PDF path
        $outputPath = $tempDir.'/'.$filename;

        // Run the Node.js script
        $nodeScript = base_path('generate-pdf.js');
        $command = "node \"$nodeScript\" \"$url\" \"$outputPath\" \"$filename\" 2>&1";

        $output = [];
        $returnCode = 0;
        exec($command, $output, $returnCode);

        if ($returnCode === 0 && file_exists($outputPath)) {
            $pdfContent = file_get_contents($outputPath);

            // Clean up temporary files
            if ($tempHtmlFile && file_exists($tempHtmlFile)) {
                unlink($tempHtmlFile);
            }
            unlink($outputPath);

            return [
                'success' => true,
                'response' => response($pdfContent, 200, [
                    'Content-Type' => 'application/pdf',
                    'Content-Disposition' => 'attachment; filename="'.$filename.'"',
                    'Cache-Control' => 'private, max-age=0, must-revalidate',
                    'Pragma' => 'public',
                ]),
            ];
        } else {
            // Clean up temporary files
            if ($tempHtmlFile && file_exists($tempHtmlFile)) {
                unlink($tempHtmlFile);
            }
            if (file_exists($outputPath)) {
                unlink($outputPath);
            }

            return [
                'success' => false,
                'error' => 'Puppeteer failed: '.implode("\n", $output),
            ];
        }
    }

    /**
     * Preview invoice as PDF using selected template
     */
    public function previewInvoicePDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $invoice = Invoice::where('slug', $slug)
            ->with('client', 'invoiceProducts.invoice', 'invoicePayments.invoicePaymentTransaction.cashbookAccount',
                'invoiceProducts.product.productUnit', 'invoiceProducts.product.productTax',
                'invoiceTax', 'user')
            ->firstOrFail();

        // Get the default template for invoices
        $template = PrintTemplate::byModule('invoice')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Invoice-'.$invoice->invoice_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.invoice' : 'print.invoice-basic',
            'view_data' => compact('invoice', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Download invoice as PDF using selected template
     */
    public function downloadInvoicePDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $invoice = Invoice::where('slug', $slug)
            ->with('client', 'invoiceProducts.invoice', 'invoicePayments.invoicePaymentTransaction.cashbookAccount',
                'invoiceProducts.product.productUnit', 'invoiceProducts.product.productTax',
                'invoiceTax', 'user')
            ->firstOrFail();

        // Get the default template for invoices
        $template = PrintTemplate::byModule('invoice')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Invoice-'.$invoice->invoice_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.invoice' : 'print.invoice-basic',
            'view_data' => compact('invoice', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Preview purchase as PDF using selected template
     */
    public function previewPurchasePDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $purchase = Purchase::where('slug', $slug)
            ->with('supplier', 'purchaseProducts.purchase', 'purchasePayments.purchasePaymentTransaction.cashbookAccount',
                'purchaseProducts.product.productUnit', 'purchaseProducts.product.productTax',
                'purchaseTax', 'user')
            ->firstOrFail();

        // Get the default template for purchases
        $template = PrintTemplate::byModule('purchase')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Purchase-'.$purchase->purchase_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.purchase' : 'print.purchase-basic',
            'view_data' => compact('purchase', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Download purchase as PDF using selected template
     */
    public function downloadPurchasePDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $purchase = Purchase::where('slug', $slug)
            ->with('supplier', 'purchaseProducts.purchase', 'purchasePayments.purchasePaymentTransaction.cashbookAccount',
                'purchaseProducts.product.productUnit', 'purchaseProducts.product.productTax',
                'purchaseTax', 'user')
            ->firstOrFail();

        // Get the default template for purchases
        $template = PrintTemplate::byModule('purchase')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Purchase-'.$purchase->purchase_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.purchase' : 'print.purchase-basic',
            'view_data' => compact('purchase', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Preview quotation as PDF using selected template
     */
    public function previewQuotationPDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $quotation = Quotation::where('slug', $slug)
            ->with('client', 'quotationProducts.product.productUnit', 'quotationProducts.product.productTax', 'user')
            ->firstOrFail();

        // Get the default template for quotations
        $template = PrintTemplate::byModule('quotation')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Quotation-'.$quotation->quotation_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.quotation' : 'print.quotation-basic',
            'view_data' => compact('quotation', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Download quotation as PDF using selected template
     */
    public function downloadQuotationPDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $quotation = Quotation::where('slug', $slug)
            ->with('client', 'quotationProducts.product.productUnit', 'quotationProducts.product.productTax', 'user')
            ->firstOrFail();

        // Get the default template for quotations
        $template = PrintTemplate::byModule('quotation')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Quotation-'.$quotation->quotation_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.quotation' : 'print.quotation-basic',
            'view_data' => compact('quotation', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Preview invoice return (credit note) as PDF using selected template
     */
    public function previewInvoiceReturnPDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $invoiceReturn = InvoiceReturn::where('slug', $slug)
            ->with([
                'invoice.client',
                'invoice.invoiceProducts.product.productUnit',
                'invoice.invoiceProducts.product.productTax',
                'invoice.invoiceProducts.vatRate',
                'invoiceReturnProducts.product.productUnit',
                'invoiceReturnProducts.product.productTax',
                'user',
            ])
            ->firstOrFail();

        // Get the default template for invoice returns
        $template = PrintTemplate::byModule('invoice-return')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Invoice-Return-'.$invoiceReturn->return_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.invoice-return' : 'print.invoice-return-basic',
            'view_data' => compact('invoiceReturn', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Download invoice return as PDF using selected template
     */
    public function downloadInvoiceReturnPDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $invoiceReturn = InvoiceReturn::where('slug', $slug)
            ->with([
                'invoice.client',
                'invoice.invoiceProducts.product.productUnit',
                'invoice.invoiceProducts.product.productTax',
                'invoice.invoiceProducts.vatRate',
                'invoiceReturnProducts.product.productUnit',
                'invoiceReturnProducts.product.productTax',
                'user',
            ])
            ->firstOrFail();

        // Get the default template for invoice returns
        $template = PrintTemplate::byModule('invoice-return')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Invoice-Return-'.$invoiceReturn->return_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.invoice-return' : 'print.invoice-return-basic',
            'view_data' => compact('invoiceReturn', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Preview purchase return (debit note) as PDF using selected template
     */
    public function previewPurchaseReturnPDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $purchaseReturn = PurchaseReturn::where('slug', $slug)
            ->with([
                'purchase.supplier',
                'purchase.purchaseProducts.product.productUnit',
                'purchase.purchaseProducts.product.productTax',
                'purchaseReturnProducts.product.productUnit',
                'purchaseReturnProducts.product.productTax',
                'user',
            ])
            ->firstOrFail();

        // Get the default template for purchase returns
        $template = PrintTemplate::byModule('purchase-return')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Purchase-Return-'.$purchaseReturn->return_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.purchase-return' : 'print.purchase-return-basic',
            'view_data' => compact('purchaseReturn', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Download purchase return (debit note) as PDF using selected template
     */
    public function downloadPurchaseReturnPDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $purchaseReturn = PurchaseReturn::where('slug', $slug)
            ->with([
                'purchase.supplier',
                'purchase.purchaseProducts.product.productUnit',
                'purchase.purchaseProducts.product.productTax',
                'purchaseReturnProducts.product.productUnit',
                'purchaseReturnProducts.product.productTax',
                'user',
            ])
            ->firstOrFail();

        // Get the default template for purchase returns
        $template = PrintTemplate::byModule('purchase-return')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Purchase-Return-'.$purchaseReturn->return_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.purchase-return' : 'print.purchase-return-basic',
            'view_data' => compact('purchaseReturn', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Print purchase order using selected template
     */
    public function printPurchaseOrder($slug)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        $purchaseOrder = PurchaseOrder::where('slug', $slug)
            ->with('supplier', 'purchaseOrderProducts.product.productUnit', 'purchaseOrderProducts.product.productTax', 'user')
            ->firstOrFail();

        // Get the default template for purchase orders
        $template = PrintTemplate::byModule('purchase-order')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        if (! $template) {
            // Fallback to basic template if no print template is set
            return view('print.purchase-order-basic', compact('purchaseOrder', 'locale', 'logoBase64'));
        }

        return view('print.purchase-order', compact('purchaseOrder', 'template', 'locale', 'logoBase64'));
    }

    /**
     * Preview purchase order as PDF using selected template
     */
    public function previewPurchaseOrderPDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $purchaseOrder = PurchaseOrder::where('slug', $slug)
            ->with('supplier', 'purchaseOrderProducts.product.productUnit', 'purchaseOrderProducts.product.productTax', 'user')
            ->firstOrFail();

        // Get the default template for purchase orders
        $template = PrintTemplate::byModule('purchase-order')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Purchase-Order-'.$purchaseOrder->purchase_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.purchase-order' : 'print.purchase-order-basic',
            'view_data' => compact('purchaseOrder', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Download purchase order as PDF using selected template
     */
    public function downloadPurchaseOrderPDF($slug)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        $purchaseOrder = PurchaseOrder::where('slug', $slug)
            ->with('supplier', 'purchaseOrderProducts.product.productUnit', 'purchaseOrderProducts.product.productTax', 'user')
            ->firstOrFail();

        // Get the default template for purchase orders
        $template = PrintTemplate::byModule('purchase-order')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Purchase-Order-'.$purchaseOrder->purchase_no.'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.purchase-order' : 'print.purchase-order-basic',
            'view_data' => compact('purchaseOrder', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'portrait', false);
    }

    /**
     * Print Today Report using selected template
     */
    public function printTodayReport(Request $request)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        // Get today's report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->todayReport($request);

        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        if (! $template) {
            return view('print.today-report-basic', compact('reportData'));
        }

        return view('print.reports.today-report', compact('reportData', 'template', 'logoBase64', 'locale'));
    }

    /**
     * Preview Today Report PDF
     */
    public function previewTodayReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get today's report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->todayReport($request);

        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Today-Report-'.date('Y-m-d').'.pdf';

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.today-report' : 'print.today-report-basic',
            'view_data' => compact('reportData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Today Report PDF
     */
    public function downloadTodayReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get today's report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->todayReport($request);

        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Today-Report-'.date('Y-m-d').'.pdf';

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.today-report' : 'print.today-report-basic',
            'view_data' => compact('reportData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Invoice Summary using selected template
     */
    public function printInvoiceSummary(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $reportResponse = $reportController->invoiceSummaryForPrint($request);

            // Handle JsonResponse
            if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $reportResponse->getData(true);
            } else {
                $reportData = $reportResponse;
            }

            // Debug: Log the response structure
            Log::info('Invoice Summary Response Debug:', [
                'response_type' => gettype($reportResponse),
                'is_json_response' => $reportResponse instanceof \Illuminate\Http\JsonResponse,
                'report_data_type' => gettype($reportData),
                'report_data_keys' => is_array($reportData) ? array_keys($reportData) : 'not array',
                'success_key_exists' => isset($reportData['success']),
                'success_value' => $reportData['success'] ?? 'key not found',
                'request_params' => $request->all(),
            ]);

            if (! isset($reportData['success']) || ! $reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';

                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> '.htmlspecialchars($errorMessage).'</p><p><strong>Detail:</strong> '.htmlspecialchars($errorDetail).'</p><p><strong>Response:</strong> '.htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)).'</p></body></html>', 500);
            }

            $invoiceSummaryData = $reportData['data'];

            Log::info('Print Invoice Summary - Total clients: '.count($invoiceSummaryData['clients']));

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            if (! $template) {
                return view('print.invoice-summary-basic', compact('invoiceSummaryData'));
            }

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            return view('print.reports.invoice-summary', compact('invoiceSummaryData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Invoice Summary Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Invoice Summary PDF
     */
    public function previewInvoiceSummaryPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->invoiceSummaryForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $invoiceSummaryData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $invoiceSummaryData['filters']['from_date'] ?? '';
        $toDate = $invoiceSummaryData['filters']['to_date'] ?? '';
        $filename = 'Invoice-Summary-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.invoice-summary' : 'print.invoice-summary-basic',
            'view_data' => compact('invoiceSummaryData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Invoice Summary PDF
     */
    public function downloadInvoiceSummaryPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->invoiceSummaryForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $invoiceSummaryData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $invoiceSummaryData['filters']['from_date'] ?? '';
        $toDate = $invoiceSummaryData['filters']['to_date'] ?? '';
        $filename = 'Invoice-Summary-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.invoice-summary' : 'print.invoice-summary-basic',
            'view_data' => compact('invoiceSummaryData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Purchase Summary using selected template
     */
    public function printPurchaseSummary(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $reportResponse = $reportController->purchaseSummaryForPrint($request);

            // Handle JsonResponse
            if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $reportResponse->getData(true);
            } else {
                $reportData = $reportResponse;
            }

            // Debug: Log the response structure
            Log::info('Purchase Summary Response Debug:', [
                'response_type' => gettype($reportResponse),
                'is_json_response' => $reportResponse instanceof \Illuminate\Http\JsonResponse,
                'report_data_type' => gettype($reportData),
                'report_data_keys' => is_array($reportData) ? array_keys($reportData) : 'not array',
                'success_key_exists' => isset($reportData['success']),
                'success_value' => $reportData['success'] ?? 'key not found',
                'request_params' => $request->all(),
            ]);

            if (! isset($reportData['success']) || ! $reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';

                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> '.htmlspecialchars($errorMessage).'</p><p><strong>Detail:</strong> '.htmlspecialchars($errorDetail).'</p><p><strong>Response:</strong> '.htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)).'</p></body></html>', 500);
            }

            $purchaseSummaryData = $reportData['data'];

            Log::info('Print Purchase Summary - Total suppliers: '.count($purchaseSummaryData['suppliers']));

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.purchase-summary-basic', compact('purchaseSummaryData'));
            }

            return view('print.reports.purchase-summary', compact('purchaseSummaryData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Purchase Summary Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Purchase Summary PDF
     */
    public function previewPurchaseSummaryPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->purchaseSummaryForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $purchaseSummaryData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $purchaseSummaryData['filters']['from_date'] ?? '';
        $toDate = $purchaseSummaryData['filters']['to_date'] ?? '';
        $filename = 'Purchase-Summary-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.purchase-summary' : 'print.purchase-summary-basic',
            'view_data' => compact('purchaseSummaryData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Purchase Summary PDF
     */
    public function downloadPurchaseSummaryPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->purchaseSummaryForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $purchaseSummaryData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $purchaseSummaryData['filters']['from_date'] ?? '';
        $toDate = $purchaseSummaryData['filters']['to_date'] ?? '';
        $filename = 'Purchase-Summary-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.purchase-summary' : 'print.purchase-summary-basic',
            'view_data' => compact('purchaseSummaryData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print VAT Report using selected template
     */
    public function printVatReport(Request $request)
    {
        // Increase memory limit for large datasets
        ini_set('memory_limit', '1G');
        set_time_limit(300);

        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Use the dedicated print method that gets ALL data without pagination
            $reportController = new \App\Http\Controllers\API\ReportController();
            $reportResponse = $reportController->vatReportForPrint($request);

            // Handle JsonResponse
            if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
                $reportData = $reportResponse->getData(true);
            } else {
                $reportData = $reportResponse;
            }

            // Debug: Log the response structure
            Log::info('VAT Report Response Debug:', [
                'response_type' => gettype($reportResponse),
                'is_json_response' => $reportResponse instanceof \Illuminate\Http\JsonResponse,
                'report_data_type' => gettype($reportData),
                'report_data_keys' => is_array($reportData) ? array_keys($reportData) : 'not array',
                'success_key_exists' => isset($reportData['success']),
                'success_value' => $reportData['success'] ?? 'key not found',
                'request_params' => $request->all(),
            ]);

            if (! isset($reportData['success']) || ! $reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';

                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> '.htmlspecialchars($errorMessage).'</p><p><strong>Detail:</strong> '.htmlspecialchars($errorDetail).'</p><p><strong>Response:</strong> '.htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)).'</p></body></html>', 500);
            }

            $vatReportData = $reportData['data'];

            Log::info('Print VAT Report - Data generated successfully');

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.vat-report-basic', compact('vatReportData'));
            }

            return view('print.reports.vat-report', compact('vatReportData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print VAT Report Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview VAT Report PDF
     */
    public function previewVatReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get report data from the API
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->vatReportForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! isset($reportData['success']) || ! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $vatReportData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $vatReportData['filters']['from_date'] ?? '';
        $toDate = $vatReportData['filters']['to_date'] ?? '';
        $filename = 'VAT-Report-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.vat-report' : 'print.vat-report-basic',
            'view_data' => compact('vatReportData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download VAT Report PDF
     */
    public function downloadVatReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get report data from the API
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->vatReportForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! isset($reportData['success']) || ! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $vatReportData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $vatReportData['filters']['from_date'] ?? '';
        $toDate = $vatReportData['filters']['to_date'] ?? '';
        $filename = 'VAT-Report-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.vat-report' : 'print.vat-report-basic',
            'view_data' => compact('vatReportData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Inventory Report using selected template
     */
    public function printInventory(Request $request)
    {
        // Set locale for translations
        $user = \Auth::user();
        $locale = $user->locale ?? app()->getLocale();
        \App::setLocale($locale);

        // Ensure user is authenticated in the request context
        if ($user) {
            \Auth::setUser($user);
        }

        try {
            // Get inventory report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $inventoryData = $reportController->inventoryReport($request);

            // Handle JsonResponse (the inventory API returns array of products)
            if ($inventoryData instanceof \Illuminate\Http\JsonResponse) {
                $inventoryData = $inventoryData->getData(true);
            }

            // Structure the data for the template
            $inventoryReportData = [
                'data' => $inventoryData,
                'filters' => [
                    'from_date' => $request->fromDate,
                    'to_date' => $request->toDate,
                    'category' => $request->input('category.name'),
                    'sub_category' => $request->input('subCategory.name'),
                    'item_name' => $request->input('itemName.name'),
                ],
            ];

            Log::info('Print Inventory Report - Data generated successfully', [
                'data_count' => count($inventoryData ?? []),
                'filters' => $inventoryReportData['filters'],
            ]);

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.inventory-basic', compact('inventoryReportData'));
            }

            return view('print.reports.inventory', compact('inventoryReportData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Inventory Report Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Inventory Report PDF
     */
    public function previewInventoryPDF(Request $request)
    {
        $user = \Auth::user();
        $locale = $user->locale ?? 'ar';
        \App::setLocale($locale);

        // Ensure user is authenticated in the request context
        if ($user) {
            \Auth::setUser($user);
        }

        // Get inventory report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $inventoryData = $reportController->inventoryReport($request);

        // Handle JsonResponse
        if ($inventoryData instanceof \Illuminate\Http\JsonResponse) {
            $inventoryData = $inventoryData->getData(true);
        }

        // Structure the data for the template
        $inventoryReportData = [
            'data' => $inventoryData,
            'filters' => [
                'from_date' => $request->fromDate,
                'to_date' => $request->toDate,
                'category' => $request->input('category.name'),
                'sub_category' => $request->input('subCategory.name'),
                'item_name' => $request->input('itemName.name'),
            ],
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $request->fromDate ?? '';
        $toDate = $request->toDate ?? '';
        $category = $request->input('category.name') ?? '';
        $filename = 'Inventory-Report-'.$category.'-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.inventory' : 'print.inventory-basic',
            'view_data' => compact('inventoryReportData', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Inventory Report PDF
     */
    public function downloadInventoryPDF(Request $request)
    {
        $user = \Auth::user();
        $locale = $user->locale ?? 'ar';
        \App::setLocale($locale);

        // Ensure user is authenticated in the request context
        if ($user) {
            \Auth::setUser($user);
        }

        // Get inventory report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $inventoryData = $reportController->inventoryReport($request);

        // Handle JsonResponse
        if ($inventoryData instanceof \Illuminate\Http\JsonResponse) {
            $inventoryData = $inventoryData->getData(true);
        }

        // Structure the data for the template
        $inventoryReportData = [
            'data' => $inventoryData,
            'filters' => [
                'from_date' => $request->fromDate,
                'to_date' => $request->toDate,
                'category' => $request->input('category.name'),
                'sub_category' => $request->input('subCategory.name'),
                'item_name' => $request->input('itemName.name'),
            ],
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $request->fromDate ?? '';
        $toDate = $request->toDate ?? '';
        $category = $request->input('category.name') ?? '';
        $filename = 'Inventory-Report-'.$category.'-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.inventory' : 'print.inventory-basic',
            'view_data' => compact('inventoryReportData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Items Report using selected template
     */
    public function printItems(Request $request)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Get items report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $itemsData = $reportController->itemsReport($request);

            // Handle JsonResponse (error response)
            if ($itemsData instanceof \Illuminate\Http\JsonResponse) {
                $statusCode = $itemsData->getStatusCode();
                $itemsData = $itemsData->getData(true);

                // Check if it's an error response (status code >= 400, or 'error: true', or 'success: false')
                if ($statusCode >= 400 || (isset($itemsData['error']) && $itemsData['error']) || (isset($itemsData['success']) && ! $itemsData['success'])) {
                    $errorMessage = $itemsData['message'] ?? $itemsData['error'] ?? 'Unknown error';

                    // Log the error for debugging
                    \Log::warning('Items Report Print Error', [
                        'error_message' => $errorMessage,
                        'status_code' => $statusCode,
                        'request_params' => $request->all(),
                        'product_slug' => $request->input('productName.slug'),
                    ]);

                    return response()->make(
                        '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Error</h1><p><strong>Error:</strong> '.htmlspecialchars($errorMessage).'</p></body></html>',
                        $statusCode >= 400 ? $statusCode : 400
                    );
                }
            }

            // Structure the data for the template
            $itemsReportData = [
                'product' => $itemsData['product'] ?? null,
                'stockIns' => $itemsData['stockIns'] ?? [],
                'stockOuts' => $itemsData['stockOuts'] ?? [],
                'filters' => [
                    'from_date' => $request->fromDate,
                    'to_date' => $request->toDate,
                    'product_name' => $request->input('productName.label') ?? $request->input('productName.name'),
                ],
            ];

            Log::info('Print Items Report - Data generated successfully', [
                'product' => $itemsReportData['product']['name'] ?? 'Unknown',
                'stockIns_count' => count($itemsReportData['stockIns']),
                'stockOuts_count' => count($itemsReportData['stockOuts']),
                'filters' => $itemsReportData['filters'],
            ]);

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.items-basic', compact('itemsReportData'));
            }

            return view('print.reports.items', compact('itemsReportData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Items Report Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Items PDF
     */
    public function previewItemsPDF(Request $request)
    {
        $user = \Auth::user();
        $locale = $user->locale ?? 'ar';
        \App::setLocale($locale);

        try {
            // Ensure user is authenticated in the request context
            if ($user) {
                \Auth::setUser($user);
            }

            // Get items report data - use service container to maintain request context
            $reportController = app(\App\Http\Controllers\API\ReportController::class);
            $itemsData = $reportController->itemsReport($request);

            // Handle JsonResponse (error response)
            if ($itemsData instanceof \Illuminate\Http\JsonResponse) {
                $statusCode = $itemsData->getStatusCode();
                $itemsData = $itemsData->getData(true);

                // Check if it's an error response (status code >= 400, or 'error: true', or 'success: false')
                if ($statusCode >= 400 || (isset($itemsData['error']) && $itemsData['error']) || (isset($itemsData['success']) && ! $itemsData['success'])) {
                    $errorMessage = $itemsData['message'] ?? $itemsData['error'] ?? 'Unknown error';

                    // Log the error for debugging
                    \Log::warning('Items Report Preview Error', [
                        'error_message' => $errorMessage,
                        'status_code' => $statusCode,
                        'request_params' => $request->all(),
                        'product_slug' => $request->input('productName.slug'),
                    ]);

                    return response()->make(
                        '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Error</h1><p><strong>Error:</strong> '.htmlspecialchars($errorMessage).'</p></body></html>',
                        $statusCode >= 400 ? $statusCode : 400
                    );
                }
            }

            // Check if data is empty or invalid
            if (! is_array($itemsData) || (! isset($itemsData['product']) && ! isset($itemsData['stockIns']) && ! isset($itemsData['stockOuts']))) {
                return response()->make(
                    '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Error</h1><p>No data found for the selected filters. Please check your filters and try again.</p></body></html>',
                    404
                );
            }

            // Structure the data for the template
            $itemsReportData = [
                'product' => $itemsData['product'] ?? null,
                'stockIns' => $itemsData['stockIns'] ?? [],
                'stockOuts' => $itemsData['stockOuts'] ?? [],
                'filters' => [
                    'from_date' => $request->fromDate,
                    'to_date' => $request->toDate,
                    'product_name' => $request->input('productName.label') ?? $request->input('productName.name'),
                ],
            ];

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            // Generate filename
            $fromDate = $request->fromDate ?? '';
            $toDate = $request->toDate ?? '';
            $productName = $itemsReportData['filters']['product_name'] ?? '';
            $filename = 'Items-Report-'.$productName.'-'.$fromDate.'-to-'.$toDate.'.pdf';
            $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

            // Use Utility::buildPdf to generate PDF
            return \App\Models\Utility::buildPdf([
                'view' => $template ? 'print.reports.items' : 'print.items-basic',
                'view_data' => compact('itemsReportData', 'template', 'logoBase64', 'locale'),
                'type' => 'preview',
                'file_name' => $filename,
                'header' => '',
                'footer' => '',
                'header_spacing' => '2',
                'margins' => [
                    'top' => '10mm',
                    'bottom' => '10mm',
                ],
            ], 'landscape', false);
        } catch (\Illuminate\Validation\ValidationException $e) {
            $errors = $e->errors();
            $errorMessage = 'Validation failed: '.implode(', ', array_map(function ($fieldErrors) {
                return implode(', ', $fieldErrors);
            }, $errors));

            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Validation Error</h1><p><strong>Error:</strong> '.htmlspecialchars($errorMessage).'</p><p>Please check your filters and try again.</p></body></html>',
                422
            );
        } catch (\Exception $e) {
            Log::error('Preview Items PDF Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Download Items PDF
     */
    public function downloadItemsPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        try {
            // Get items report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $itemsData = $reportController->itemsReport($request);

            // Handle JsonResponse (error response)
            if ($itemsData instanceof \Illuminate\Http\JsonResponse) {
                $statusCode = $itemsData->getStatusCode();
                $itemsData = $itemsData->getData(true);

                // Check if it's an error response (status code >= 400, or 'error: true', or 'success: false')
                if ($statusCode >= 400 || (isset($itemsData['error']) && $itemsData['error']) || (isset($itemsData['success']) && ! $itemsData['success'])) {
                    $errorMessage = $itemsData['message'] ?? $itemsData['error'] ?? 'Unknown error';

                    // Log the error for debugging
                    \Log::warning('Items Report Download Error', [
                        'error_message' => $errorMessage,
                        'status_code' => $statusCode,
                        'request_params' => $request->all(),
                        'product_slug' => $request->input('productName.slug'),
                    ]);

                    return response()->make(
                        '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Error</h1><p><strong>Error:</strong> '.htmlspecialchars($errorMessage).'</p></body></html>',
                        $statusCode >= 400 ? $statusCode : 400
                    );
                }
            }

            // Check if data is empty or invalid
            if (! is_array($itemsData) || (! isset($itemsData['product']) && ! isset($itemsData['stockIns']) && ! isset($itemsData['stockOuts']))) {
                return response()->make(
                    '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Error</h1><p>No data found for the selected filters. Please check your filters and try again.</p></body></html>',
                    404
                );
            }

            // Structure the data for the template
            $itemsReportData = [
                'product' => $itemsData['product'] ?? null,
                'stockIns' => $itemsData['stockIns'] ?? [],
                'stockOuts' => $itemsData['stockOuts'] ?? [],
                'filters' => [
                    'from_date' => $request->fromDate,
                    'to_date' => $request->toDate,
                    'product_name' => $request->input('productName.label') ?? $request->input('productName.name'),
                ],
            ];

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            // Generate filename
            $fromDate = $request->fromDate ?? '';
            $toDate = $request->toDate ?? '';
            $productName = $itemsReportData['filters']['product_name'] ?? '';
            $filename = 'Items-Report-'.$productName.'-'.$fromDate.'-to-'.$toDate.'.pdf';
            $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

            // Use Utility::buildPdf to generate PDF
            return \App\Models\Utility::buildPdf([
                'view' => $template ? 'print.reports.items' : 'print.items-basic',
                'view_data' => compact('itemsReportData', 'template', 'locale', 'logoBase64'),
                'type' => 'download',
                'file_name' => $filename,
                'header' => '',
                'footer' => '',
                'header_spacing' => '2',
                'margins' => [
                    'top' => '10mm',
                    'bottom' => '10mm',
                ],
            ], 'landscape', false);
        } catch (\Illuminate\Validation\ValidationException $e) {
            $errors = $e->errors();
            $errorMessage = 'Validation failed: '.implode(', ', array_map(function ($fieldErrors) {
                return implode(', ', $fieldErrors);
            }, $errors));

            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Validation Error</h1><p><strong>Error:</strong> '.htmlspecialchars($errorMessage).'</p><p>Please check your filters and try again.</p></body></html>',
                422
            );
        } catch (\Exception $e) {
            Log::error('Download Items PDF Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Print Expenses Report using selected template
     */
    public function printExpenses(Request $request)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Get expenses report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $expensesData = $reportController->expenseReport($request);

            // Handle JsonResponse (the expenses API returns a collection resource)
            if ($expensesData instanceof \Illuminate\Http\JsonResponse) {
                $expensesData = $expensesData->getData(true);
            }

            // Structure the data for the template
            $expensesReportData = [
                'data' => $expensesData,
                'filters' => [
                    'from_date' => $request->fromDate,
                    'to_date' => $request->toDate,
                    'category' => $request->input('category.name'),
                    'sub_category' => $request->input('subCategory.name'),
                ],
            ];

            Log::info('Print Expenses Report - Data generated successfully', [
                'data_count' => count($expensesData ?? []),
                'filters' => $expensesReportData['filters'],
            ]);

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.expenses-basic', compact('expensesReportData'));
            }

            return view('print.reports.expenses', compact('expensesReportData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Expenses Report Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Expenses PDF
     */
    public function previewExpensesPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Normalize request parameters from query string to match POST format
        $normalizedRequest = $this->normalizeExpenseReportRequest($request);

        // Get expenses report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $expensesData = $reportController->expenseReport($normalizedRequest);

        // Handle JsonResponse
        if ($expensesData instanceof \Illuminate\Http\JsonResponse) {
            $expensesData = $expensesData->getData(true);
        }

        // Structure the data for the template
        $expensesReportData = [
            'data' => $expensesData,
            'filters' => [
                'from_date' => $request->fromDate,
                'to_date' => $request->toDate,
                'category' => $request->input('category.name'),
                'sub_category' => $request->input('subCategory.name'),
            ],
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $request->fromDate ?? '';
        $toDate = $request->toDate ?? '';
        $filename = 'Expenses-Report-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.expenses' : 'print.expenses-basic',
            'view_data' => compact('expensesReportData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Expenses PDF
     */
    public function downloadExpensesPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Normalize request parameters from query string to match POST format
        $normalizedRequest = $this->normalizeExpenseReportRequest($request);

        // Get expenses report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $expensesData = $reportController->expenseReport($normalizedRequest);

        // Handle JsonResponse
        if ($expensesData instanceof \Illuminate\Http\JsonResponse) {
            $expensesData = $expensesData->getData(true);
        }

        // Structure the data for the template
        $expensesReportData = [
            'data' => $expensesData,
            'filters' => [
                'from_date' => $request->fromDate,
                'to_date' => $request->toDate,
                'category' => $request->input('category.name'),
                'sub_category' => $request->input('subCategory.name'),
            ],
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $request->fromDate ?? '';
        $toDate = $request->toDate ?? '';
        $filename = 'Expenses-Report-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.expenses' : 'print.expenses-basic',
            'view_data' => compact('expensesReportData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Normalize expense report request parameters from query string to match POST format
     */
    private function normalizeExpenseReportRequest(Request $request): Request
    {
        // Create a new request with normalized data
        $normalizedData = $request->all();

        // Normalize category array - Laravel should parse category[id]=1 automatically, but ensure it's an array
        $categoryId = $request->input('category.id') ?? $request->input('category[id]') ?? ($request->category['id'] ?? null);
        $categoryName = $request->input('category.name') ?? $request->input('category[name]') ?? ($request->category['name'] ?? null);

        if ($categoryId !== null) {
            $normalizedData['category'] = [
                'id' => (int) $categoryId,
                'name' => $categoryName ?? '',
            ];
        }

        // Normalize subCategory array
        $subCategoryId = $request->input('subCategory.id') ?? $request->input('subCategory[id]') ?? ($request->subCategory['id'] ?? null);
        $subCategoryName = $request->input('subCategory.name') ?? $request->input('subCategory[name]') ?? ($request->subCategory['name'] ?? null);

        if ($subCategoryId !== null) {
            $normalizedData['subCategory'] = [
                'id' => (int) $subCategoryId,
                'name' => $subCategoryName ?? '',
            ];
        }

        // Preserve fromDate and toDate
        if ($request->has('fromDate')) {
            $normalizedData['fromDate'] = $request->fromDate;
        }
        if ($request->has('toDate')) {
            $normalizedData['toDate'] = $request->toDate;
        }

        // Create a new request with the normalized data
        $normalizedRequest = new Request($normalizedData);
        $normalizedRequest->setMethod($request->method());
        $normalizedRequest->headers->replace($request->headers->all());

        return $normalizedRequest;
    }

    /**
     * Print Client Receivable Report using selected template
     */
    public function printClientReceivableReport(Request $request)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        // Get client receivable report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->clientDueReport($request);

        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        if (! $template) {
            return view('print.client-receivable-report-basic', compact('reportData'));
        }

        return view('print.reports.client-receivable-report', compact('reportData', 'template', 'logoBase64', 'locale'));
    }

    /**
     * Preview Client Receivable Report PDF
     */
    public function previewClientReceivableReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get client receivable report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->clientDueReport($request);

        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Client-Receivable-Report-'.date('Y-m-d').'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.client-receivable-report' : 'print.client-receivable-report-basic',
            'view_data' => compact('reportData', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Client Receivable Report PDF
     */
    public function downloadClientReceivableReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get client receivable report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->clientDueReport($request);

        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Client-Receivable-Report-'.date('Y-m-d').'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.client-receivable-report' : 'print.client-receivable-report-basic',
            'view_data' => compact('reportData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Supplier Payable Report using selected template
     */
    public function printSupplierPayableReport(Request $request)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        // Get supplier payable report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->supplierDueReport($request);

        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        if (! $template) {
            return view('print.supplier-payable-report-basic', compact('reportData'));
        }

        return view('print.reports.supplier-payable-report', compact('reportData', 'template', 'logoBase64', 'locale'));
    }

    /**
     * Preview Supplier Payable Report PDF
     */
    public function previewSupplierPayableReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get supplier payable report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->supplierDueReport($request);

        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Supplier-Payable-Report-'.date('Y-m-d').'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.supplier-payable-report' : 'print.supplier-payable-report-basic',
            'view_data' => compact('reportData', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Supplier Payable Report PDF
     */
    public function downloadSupplierPayableReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get supplier payable report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->supplierDueReport($request);

        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $filename = 'Supplier-Payable-Report-'.date('Y-m-d').'.pdf';

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.supplier-payable-report' : 'print.supplier-payable-report-basic',
            'view_data' => compact('reportData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Sales By User Report using selected template
     */
    public function printSalesByUserReport(Request $request)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Get sales by user report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $salesData = $reportController->salesByUserReport($request);

            // Handle JsonResponse (the sales by user API returns a collection resource)
            if ($salesData instanceof \Illuminate\Http\JsonResponse) {
                $salesData = $salesData->getData(true);
            }

            // Structure the data for the template
            $salesByUserReportData = [
                'data' => $salesData,
                'filters' => [
                    'from_date' => $request->fromDate,
                    'to_date' => $request->toDate,
                    'user' => $request->input('user.name'),
                ],
            ];

            Log::info('Print Sales By User Report - Data generated successfully', [
                'data_count' => count($salesData ?? []),
                'filters' => $salesByUserReportData['filters'],
            ]);

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.sales-by-user-basic', compact('salesByUserReportData'));
            }

            return view('print.reports.sales-by-user', compact('salesByUserReportData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Sales By User Report Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Sales By User Report PDF
     */
    public function previewSalesByUserReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get sales by user report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $salesData = $reportController->salesByUserReport($request);

        // Handle JsonResponse
        if ($salesData instanceof \Illuminate\Http\JsonResponse) {
            $salesData = $salesData->getData(true);
        }

        // Structure the data for the template
        $salesByUserReportData = [
            'data' => $salesData,
            'filters' => [
                'from_date' => $request->fromDate,
                'to_date' => $request->toDate,
                'user' => $request->input('user.name'),
            ],
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $request->fromDate ?? '';
        $toDate = $request->toDate ?? '';
        $user = $request->input('user.name') ?? '';
        $filename = 'Sales-By-User-Report-'.$user.'-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.sales-by-user' : 'print.sales-by-user-basic',
            'view_data' => compact('salesByUserReportData', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Sales By User Report PDF
     */
    public function downloadSalesByUserReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get sales by user report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $salesData = $reportController->salesByUserReport($request);

        // Handle JsonResponse
        if ($salesData instanceof \Illuminate\Http\JsonResponse) {
            $salesData = $salesData->getData(true);
        }

        // Structure the data for the template
        $salesByUserReportData = [
            'data' => $salesData,
            'filters' => [
                'from_date' => $request->fromDate,
                'to_date' => $request->toDate,
                'user' => $request->input('user.name'),
            ],
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $request->fromDate ?? '';
        $toDate = $request->toDate ?? '';
        $user = $request->input('user.name') ?? '';
        $filename = 'Sales-By-User-Report-'.$user.'-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.sales-by-user' : 'print.sales-by-user-basic',
            'view_data' => compact('salesByUserReportData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Collection By User Report using selected template
     */
    public function printCollectionByUserReport(Request $request)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Get collection by user report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $collectionData = $reportController->collectionByUserReport($request);

            // Handle JsonResponse (the collection by user API returns a collection resource)
            if ($collectionData instanceof \Illuminate\Http\JsonResponse) {
                $collectionData = $collectionData->getData(true);
            }

            // Structure the data for the template
            $collectionByUserReportData = [
                'data' => $collectionData,
                'filters' => [
                    'from_date' => $request->fromDate,
                    'to_date' => $request->toDate,
                    'user' => $request->input('user.name'),
                ],
            ];

            Log::info('Print Collection By User Report - Data generated successfully', [
                'data_count' => count($collectionData ?? []),
                'filters' => $collectionByUserReportData['filters'],
            ]);

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.collection-by-user-basic', compact('collectionByUserReportData'));
            }

            return view('print.reports.collection-by-user', compact('collectionByUserReportData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Collection By User Report Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Collection By User Report PDF
     */
    public function previewCollectionByUserReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get collection by user report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $collectionData = $reportController->collectionByUserReport($request);

        // Handle JsonResponse
        if ($collectionData instanceof \Illuminate\Http\JsonResponse) {
            $collectionData = $collectionData->getData(true);
        }

        // Structure the data for the template
        $collectionByUserReportData = [
            'data' => $collectionData,
            'filters' => [
                'from_date' => $request->fromDate,
                'to_date' => $request->toDate,
                'user' => $request->input('user.name'),
            ],
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $request->fromDate ?? '';
        $toDate = $request->toDate ?? '';
        $user = $request->input('user.name') ?? '';
        $filename = 'Collection-By-User-Report-'.$user.'-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.collection-by-user' : 'print.collection-by-user-basic',
            'view_data' => compact('collectionByUserReportData', 'template', 'locale', 'logoBase64'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Collection By User Report PDF
     */
    public function downloadCollectionByUserReportPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get collection by user report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $collectionData = $reportController->collectionByUserReport($request);

        // Handle JsonResponse
        if ($collectionData instanceof \Illuminate\Http\JsonResponse) {
            $collectionData = $collectionData->getData(true);
        }

        // Structure the data for the template
        $collectionByUserReportData = [
            'data' => $collectionData,
            'filters' => [
                'from_date' => $request->fromDate,
                'to_date' => $request->toDate,
                'user' => $request->input('user.name'),
            ],
        ];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $request->fromDate ?? '';
        $toDate = $request->toDate ?? '';
        $user = $request->input('user.name') ?? '';
        $filename = 'Collection-By-User-Report-'.$user.'-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.collection-by-user' : 'print.collection-by-user-basic',
            'view_data' => compact('collectionByUserReportData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Group Account Statement using selected template
     */
    public function printGroupAccountStatement(Request $request)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->groupAccountStatementForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $groupStatementData = $reportData['data'];

        Log::info('Print Group Account Statement - Total entries: '.count($groupStatementData['entries']));

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        if (! $template) {
            return view('print.group-account-statement-basic', compact('groupStatementData'));
        }

        return view('print.reports.group-account-statement', compact('groupStatementData', 'template', 'logoBase64', 'locale'));
    }

    /**
     * Preview Group Account Statement PDF
     */
    public function previewGroupAccountStatementPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->groupAccountStatementForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $groupStatementData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $groupStatementData['filters']['from_date'] ?? '';
        $toDate = $groupStatementData['filters']['to_date'] ?? '';
        $accountCount = count($groupStatementData['chart_of_accounts'] ?? []);
        $filename = 'Group-Account-Statement-'.$accountCount.'-Accounts-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.group-account-statement' : 'print.group-account-statement-basic',
            'view_data' => compact('groupStatementData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Group Account Statement PDF
     */
    public function downloadGroupAccountStatementPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->groupAccountStatementForPrint($request);

        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }

        if (! $reportData['success']) {
            abort(404, 'Report data not found');
        }

        $groupStatementData = $reportData['data'];

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $fromDate = $groupStatementData['filters']['from_date'] ?? '';
        $toDate = $groupStatementData['filters']['to_date'] ?? '';
        $accountCount = count($groupStatementData['chart_of_accounts'] ?? []);
        $filename = 'Group-Account-Statement-'.$accountCount.'-Accounts-'.$fromDate.'-to-'.$toDate.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.group-account-statement' : 'print.group-account-statement-basic',
            'view_data' => compact('groupStatementData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Print Summary Report using selected template
     */
    public function printSummary(Request $request)
    {
        // Set locale for translations
        $locale = \Auth::user()->locale ?? app()->getLocale();
        \App::setLocale($locale);

        try {
            // Get summary report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $summaryData = $reportController->summeryReport($request);

            if ($summaryData instanceof \Illuminate\Http\JsonResponse) {
                $summaryData = $summaryData->getData(true);
            }

            Log::info('Print Summary Report - Data generated successfully');

            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();

            // Convert logo to base64 for PDF compatibility
            $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

            if (! $template) {
                return view('print.summary-basic', compact('summaryData'));
            }

            return view('print.reports.summary', compact('summaryData', 'template', 'logoBase64', 'locale'));
        } catch (\Exception $e) {
            Log::error('Print Summary Report Error: '.$e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all(),
            ]);

            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> '.htmlspecialchars($e->getMessage()).'</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Preview Summary PDF
     */
    public function previewSummaryPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get summary report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $summaryData = $reportController->summeryReport($request);

        if ($summaryData instanceof \Illuminate\Http\JsonResponse) {
            $summaryData = $summaryData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $month = $request->month ?? '';
        $year = $request->year ?? '';
        $filename = 'Summary-Report-'.$month.'-'.$year.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.summary' : 'print.summary-basic',
            'view_data' => compact('summaryData', 'template', 'logoBase64', 'locale'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }

    /**
     * Download Summary PDF
     */
    public function downloadSummaryPDF(Request $request)
    {
        $locale = \Auth::user()->locale ?? 'ar';
        \App::setLocale($locale);

        // Get summary report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $summaryData = $reportController->summeryReport($request);

        if ($summaryData instanceof \Illuminate\Http\JsonResponse) {
            $summaryData = $summaryData->getData(true);
        }

        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();

        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $template ? $this->getLogoAsBase64($template) : null;

        // Generate filename
        $month = $request->month ?? '';
        $year = $request->year ?? '';
        $filename = 'Summary-Report-'.$month.'-'.$year.'.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);

        // Use Utility::buildPdf to generate PDF
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.summary' : 'print.summary-basic',
            'view_data' => compact('summaryData', 'template', 'locale', 'logoBase64'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ],
        ], 'landscape', false);
    }
}

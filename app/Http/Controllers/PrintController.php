<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\InvoiceReturn;
use App\Models\PaymentVoucher;
use App\Models\Purchase;
use App\Models\Quotation;
use App\Models\PrintTemplate;
use App\Models\GeneralSetting;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Spipu\Html2Pdf\Html2Pdf;
use Spipu\Html2Pdf\Exception\Html2PdfException;
use Spipu\Html2Pdf\Exception\ExceptionFormatter;
use Barryvdh\Snappy\Facades\SnappyPdf;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Process\Process;
use Illuminate\Support\Facades\File;

class PrintController extends Controller
{
    /**
     * Print invoice using selected template
     */
    public function printInvoice($slug)
    {
        // Set locale for translations - force Arabic for print templates
        app()->setLocale('ar');
        
        $invoice = Invoice::where('slug', $slug)
            ->with('client', 'invoiceProducts.invoice', 'invoicePayments.invoicePaymentTransaction.cashbookAccount', 
                   'invoiceProducts.product.productUnit', 'invoiceProducts.product.productTax', 
                   'invoiceTax', 'user')
            ->firstOrFail();

        // Get the default template for invoices
        $template = PrintTemplate::byModule('invoice')->default()->first();
        
        if (!$template) {
            // Fallback to basic template if no print template is set
            return view('print.invoice-basic', compact('invoice'));
        }

        return view('print.invoice', compact('invoice', 'template'));
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
        
        if (!$template) {
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
        
        if (!$template) {
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
                'user'
            ])
            ->firstOrFail();

        // Get the default template for invoice returns
        $template = PrintTemplate::byModule('invoice-return')->default()->first();
        
        if (!$template) {
            // Fallback to basic template if no print template is set
            return view('print.invoice-return-basic', compact('invoiceReturn'));
        }

        return view('print.invoice-return', compact('invoiceReturn', 'template'));
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
        if (!$template) {
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

        if (!$template) {
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
        return $this->generatePDF($html, $fileLabel . '-' . $fileNumber . '.pdf');
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
        app()->setLocale(app()->getLocale());
        
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
                'request_params' => $request->all()
            ]);
            
            if (!isset($reportData['success']) || !$reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';
                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> ' . htmlspecialchars($errorMessage) . '</p><p><strong>Detail:</strong> ' . htmlspecialchars($errorDetail) . '</p><p><strong>Response:</strong> ' . htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)) . '</p></body></html>', 500);
            }
            
            $balanceData = $reportData['data'];
            
            Log::info("Print Balance Sheet - Report generated successfully");
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        if (!$template) {
            return view('print.balance-sheet-basic', compact('balanceData'));
        }

        return view('print.reports.balance-sheet', compact('balanceData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Balance Sheet Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
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
        app()->setLocale(app()->getLocale());
        
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
                'request_params' => $request->all()
            ]);
            
            if (!isset($reportData['success']) || !$reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';
                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> ' . htmlspecialchars($errorMessage) . '</p><p><strong>Detail:</strong> ' . htmlspecialchars($errorDetail) . '</p><p><strong>Response:</strong> ' . htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)) . '</p></body></html>', 500);
        }
        
        $trialBalanceData = $reportData['data'];
            
            Log::info("Print Trial Balance - Report generated successfully");
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        if (!$template) {
            return view('print.trial-balance-basic', compact('trialBalanceData'));
        }

        return view('print.reports.trial-balance', compact('trialBalanceData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Trial Balance Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
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
        app()->setLocale(app()->getLocale());
        
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
            if (!$reportData || !isset($reportData['type'])) {
                Log::error('Profit Loss Print Error: Invalid response structure', [
                    'response' => $reportData,
                    'request_params' => $request->all()
                ]);
                
                return response()->make(
                    '<html><body><h1>Debug Error</h1><p><strong>Message:</strong>Invalid profit loss data structure</p><p><strong>Detail:</strong>Expected type and reportData keys</p><p><strong>Response:</strong>' . htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)) . '</p></body></html>', 
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
                'filters' => $filters
            ];
            
            Log::info("Print Profit Loss - Report generated successfully", [
                'type' => $profitLossData['type'],
                'data_count' => count($profitLossData['reportData'] ?? []),
                'filters' => $profitLossData['filters'],
                'sample_item' => isset($profitLossData['reportData'][0]) ? $profitLossData['reportData'][0] : 'no data',
                'raw_response_structure' => array_keys($reportData),
                'reportData_is_array' => is_array($profitLossData['reportData']),
            ]);
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        if (!$template) {
            return view('print.profit-loss-basic', compact('profitLossData'));
        }

        return view('print.reports.profit-loss', compact('profitLossData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Profit Loss Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p></body></html>',
                500
            );
        }
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
        
        if (!$reportData['success']) {
            abort(404, 'Report data not found');
        }
        
        $accountStatementData = $reportData['data'];
        
        Log::info("Print Account Statement - Total entries: " . count($accountStatementData['entries']));
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        if (!$template) {
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
        
        if (!$reportData['success']) {
            abort(404, 'Report data not found');
        }
        
        $accountStatementData = $reportData['data'];
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        // Generate filename
        $accountName = $accountStatementData['chart_of_account']['name'] ?? 'Account';
        $fromDate = $accountStatementData['filters']['from_date'] ?? '';
        $toDate = $accountStatementData['filters']['to_date'] ?? '';
        $filename = 'Account-Statement-' . str_replace(' ', '-', $accountName) . '-' . $fromDate . '-to-' . $toDate . '.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);
        
        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.account-statement' : 'print.account-statement-basic',
            'view_data' => compact('accountStatementData', 'template'),
            'type' => 'preview',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ]
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
        
        if (!$reportData['success']) {
            abort(404, 'Report data not found');
        }
        
        $accountStatementData = $reportData['data'];
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        // Generate filename
        $accountName = $accountStatementData['chart_of_account']['name'] ?? 'Account';
        $fromDate = $accountStatementData['filters']['from_date'] ?? '';
        $toDate = $accountStatementData['filters']['to_date'] ?? '';
        $filename = 'Account-Statement-' . str_replace(' ', '-', $accountName) . '-' . $fromDate . '-to-' . $toDate . '.pdf';
        $filename = preg_replace('/[^a-zA-Z0-9\-_\.]/', '', $filename);
       
        $locale = \Auth::user()->locale ?? 'ar';
        // Use Utility::buildPdf to generate PDF
        // Pass headerFooter as false since header/footer are empty to prevent repetition
        return \App\Models\Utility::buildPdf([
            'view' => $template ? 'print.reports.account-statement' : 'print.account-statement-basic',
            'view_data' => compact('accountStatementData', 'template','locale'),
            'type' => 'download',
            'file_name' => $filename,
            'header' => '',
            'footer' => '',
            'header_spacing' => '2',
        
            'margins' => [
                'top' => '10mm',
                'bottom' => '10mm',
            ]
        ], 'landscape', false);
    }

    /**
     * Get template configuration for a specific module
     */
    private function getTemplateConfig($module)
    {
        $template = PrintTemplate::byModule($module)->default()->first();
        
        if (!$template) {
            return [
                'colors' => [
                    'primary' => '#2563eb',
                    'secondary' => '#6b7280',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Inter, sans-serif',
                    'baseFontSize' => 14,
                    'headerFontSize' => 24
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 20
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
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
        if (!$request->hasFile('file')) {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
        

        $type = $request->type;


        if($type == 'invoice')
        {
            $path  = 'uploads/invoices/pdfs';
        }
        else if($type == 'purchase')
        {
            $path  = 'uploads/purchases/pdfs';
        }
        else if($type == 'quotation')
        {
            $path  = 'uploads/quotations/pdfs';
        }
        else if($type == 'voucher')
        {
            $path  = 'uploads/vouchers/pdfs';
        }
        else if($type == 'account-statement')
        {
            $path  = 'uploads/reports/account-statement/pdfs';
        }
        else
        {
            // Default path for unknown types
            $path  = 'uploads/pdfs';
        }


        $file = $request->file('file');
        $fileName = $file->getClientOriginalName();

        // ✅ Make sure folder exists (public/pdfs)
        $destinationPath = public_path($path);
        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, 0777, true);
        }

        // ✅ Move uploaded PDF into /public/pdfs
        $file->move($destinationPath, $fileName);

        $fullPath = asset($path.'/' . $fileName);
        

        return response()->json([
            'success' => true,
            'path' =>  $fullPath,
            'type' => $type,
        ]);
    }


    public function generatePdf(Request $request)
    {
        $type = $request->type ?? 'default';

        // Determine folder path
        if($type == 'invoice') {
            $path = 'uploads/invoices/pdfs';
        } elseif($type == 'purchase') {
            $path = 'uploads/purchases/pdfs';
        } else {
            $path = 'uploads/pdfs';
        }

        $destinationPath = public_path($path);
        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, 0777, true);
        }

        $fileName = 'pdf_' . time() . '.pdf';
        $fullPath = $destinationPath . '/' . $fileName;

        // Generate PDF via Puppeteer (Node.js script)
        $html = $request->html ?? '<h1>Hello PDF</h1>'; // You can pass HTML from front-end

        $scriptPath = base_path('scripts/generatePdf.js');
        $nodePath = 'C:\Program Files\nodejs\node.exe'; // adjust if different
        $process = new Process([$nodePath, $scriptPath, $fullPath, base64_encode($html)]);
        

        if (!$process->isSuccessful()) {
            return response()->json([
                'success' => false,
                'message' => $process->getErrorOutput()
            ], 500);
        }

        return response()->json([
            'success' => true,
            'path' => asset($path . '/' . $fileName)
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
            Log::error('Snapshot PDF generation failed: ' . $e->getMessage());
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    /**
     * Convert logo to base64 for PDF compatibility
     */
    private function getLogoAsBase64($template)
    {
        try {
            // Try template's custom logo first
            if ($template->custom_logo) {
                $logoPath = public_path('images/' . $template->custom_logo);
                if (file_exists($logoPath)) {
                    $imageData = file_get_contents($logoPath);
                    $mimeType = mime_content_type($logoPath);
                    return 'data:' . $mimeType . ';base64,' . base64_encode($imageData);
                }
            }
            
            // Fallback to general settings logo
            $settings = \App\Models\GeneralSetting::get();
            $logo = $settings->where('key', 'logo')->first()?->value;
            
            if ($logo) {
                $logoPath = public_path('images/' . $logo);
                if (file_exists($logoPath)) {
                    $imageData = file_get_contents($logoPath);
                    $mimeType = mime_content_type($logoPath);
                    return 'data:' . $mimeType . ';base64,' . base64_encode($imageData);
                }
            }
            
            // Try default logo fallback
            $defaultLogoPath = public_path('images/white_logo.png');
            if (file_exists($defaultLogoPath)) {
                $imageData = file_get_contents($defaultLogoPath);
                $mimeType = mime_content_type($defaultLogoPath);
                return 'data:' . $mimeType . ';base64,' . base64_encode($imageData);
            }
            
        } catch (\Exception $e) {
            Log::warning('Failed to convert logo to base64: ' . $e->getMessage());
        }
        
        return null;
    }

    /**
     * Generate PDF using Puppeteer (screenshot-based)
     */
    private function generatePDFWithPuppeteer($input, $filename, $isUrl = false)
    {
        $tempDir = storage_path('app/temp');
        if (!file_exists($tempDir)) {
            mkdir($tempDir, 0755, true);
        }

        $url = $input;
        $tempHtmlFile = null;

        // If input is HTML content, create temporary file
        if (!$isUrl) {
            $tempHtmlFile = $tempDir . '/temp_' . uniqid() . '.html';
            file_put_contents($tempHtmlFile, $input);
            $url = url('storage/app/temp/' . basename($tempHtmlFile));
        }
        
        // Output PDF path
        $outputPath = $tempDir . '/' . $filename;
        
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
                    'Content-Disposition' => 'attachment; filename="' . $filename . '"',
                    'Cache-Control' => 'private, max-age=0, must-revalidate',
                    'Pragma' => 'public'
                ])
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
                'error' => 'Puppeteer failed: ' . implode("\n", $output)
            ];
        }
    }

    /**
     * Download invoice as PDF using selected template
     */
    public function downloadInvoicePDF($slug)
    {
        // Set locale for translations - force Arabic for print templates
        app()->setLocale('ar');
        
        $invoice = Invoice::where('slug', $slug)
            ->with('client', 'invoiceProducts.invoice', 'invoicePayments.invoicePaymentTransaction.cashbookAccount', 
                   'invoiceProducts.product.productUnit', 'invoiceProducts.product.productTax', 
                   'invoiceTax', 'user')
            ->firstOrFail();

        // Get the default template for invoices
        $template = PrintTemplate::byModule('invoice')->default()->first();
        
        if (!$template) {
            // Fallback to basic template if no print template is set
            if (view()->exists('print.invoice-basic')) {
                $html = view('print.invoice-basic', compact('invoice'))->render();
            } else {
                // Use regular template without template config
                $template = new PrintTemplate();
                $template->template_config = $this->getTemplateConfig('invoice');
                $html = view('print.invoice', compact('invoice', 'template'))->render();
            }
        } else {
            $html = view('print.invoice', compact('invoice', 'template'))->render();
        }
        
        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $this->getLogoAsBase64($template);
        
        // Hide buttons in PDF and add Arabic support
        // $html = str_replace('<head>', '<head>
        //     <style>
        //         .action-buttons { display: none !important; }
        //         body { 
        //             font-family: Arial, "DejaVu Sans", sans-serif; 
        //             direction: ltr;
        //         }
        //         .arabic-text { 
        //             direction: rtl; 
        //             text-align: right; 
        //             font-family: Arial, "DejaVu Sans", "Tahoma", sans-serif;
        //         }
        //         * { 
        //             -webkit-font-smoothing: antialiased;
        //             -moz-osx-font-smoothing: grayscale;
        //         }
                
        //         /* Fix layout issues for PDF */
        //         .document-header > div {
        //             display: table !important;
        //             width: 100% !important;
        //         }
        //         .document-header > div > div:first-child {
        //             display: table-cell !important;
        //             vertical-align: top !important;
        //             width: 60% !important;
        //         }
        //         .document-header > div > div:last-child {
        //             display: table-cell !important;
        //             vertical-align: top !important;
        //             width: 40% !important;
        //             text-align: right !important;
        //         }
                
        //         /* Fix logo display */
        //         .company-logo {
        //             max-height: 60px !important;
        //             max-width: 200px !important;
        //             height: auto !important;
        //             width: auto !important;
        //             display: block !important;
        //         }
                
        //         /* Fix totals section layout */
        //         .totals-section {
        //             display: table !important;
        //             width: 100% !important;
        //         }
        //         .totals-table {
        //             display: table-cell !important;
        //             width: 300px !important;
        //             vertical-align: top !important;
        //         }
                
        //         /* Ensure proper spacing */
        //         .client-info, .supplier-info {
        //             margin-bottom: 20px !important;
        //         }
                
        //         /* Professional table styling for PDF - High specificity */
        //         .document-container .items-table {
        //             width: 100% !important;
        //             border-collapse: collapse !important;
        //             margin-bottom: 25px !important;
        //             font-size: 12px !important;
        //             border: 2px solid #374151 !important;
        //             box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
        //         }
        //         .document-container .items-table th,
        //         .document-container .items-table td {
        //             padding: 10px 8px !important;
        //             border: 1px solid #d1d5db !important;
        //             vertical-align: middle !important;
        //             font-size: 11px !important;
        //             line-height: 1.4 !important;
        //         }
        //         .document-container .items-table th {
        //             background: #374151 !important;
        //             color: #ffffff !important;
        //             font-weight: 600 !important;
        //             text-align: center !important;
        //             padding: 12px 8px !important;
        //             border-bottom: 2px solid #1f2937 !important;
        //             text-transform: uppercase !important;
        //             letter-spacing: 0.5px !important;
        //         }
        //         .document-container .items-table tbody tr {
        //             background: #ffffff !important;
        //         }
        //         .document-container .items-table tbody tr:nth-child(even) {
        //             background: #f9fafb !important;
        //         }
        //         .document-container .items-table tbody tr:hover {
        //             background: #f3f4f6 !important;
        //         }
        //         .document-container .items-table .text-right {
        //             text-align: right !important;
        //             font-weight: 500 !important;
        //         }
        //         .document-container .items-table .text-center {
        //             text-align: center !important;
        //         }
        //         .document-container .items-table tbody td {
        //             color: #374151 !important;
        //         }
        //         .document-container .items-table tbody td strong {
        //             font-weight: 600 !important;
        //             color: #111827 !important;
        //         }
        //         .document-container .items-table tbody td small {
        //             font-size: 10px !important;
        //             color: #6b7280 !important;
        //         }
                
                
        //         /* Fix number formatting */
        //         .items-table td {
        //             white-space: nowrap !important;
        //         }
        //         .items-table td:first-child {
        //             white-space: normal !important;
        //         }
        //     </style>
        //     <meta http-equiv="Content-Type" content="text/html; charset=utf-8">', $html);
            
        // Replace logo URLs with base64 data URLs
        if ($logoBase64) {
            // Replace both Blade template variable and actual rendered URLs
            $html = str_replace('src="{{ $template->logo_url }}"', 'src="' . $logoBase64 . '"', $html);
            
            // Also replace any existing logo URLs that might be rendered
            $pattern = '/src="[^"]*\/images\/[^"]*\.(png|jpg|jpeg|gif)"/i';
            $html = preg_replace($pattern, 'src="' . $logoBase64 . '"', $html);
            
            Log::info('Logo converted to base64 successfully');
        } else {
            Log::warning('Logo base64 conversion failed - no logo will be displayed');
        }

        return $this->generatePDF($html, 'Invoice-' . $invoice->invoice_no . '.pdf');
    }

    /**
     * Download purchase as PDF using selected template
     */
    public function downloadPurchasePDF($slug)
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
        
        if (!$template) {
            // Fallback to basic template if no print template is set
            if (view()->exists('print.purchase-basic')) {
                $html = view('print.purchase-basic', compact('purchase'))->render();
            } else {
                // Use regular template without template config
                $template = new PrintTemplate();
                $template->template_config = $this->getTemplateConfig('purchase');
                $html = view('print.purchase', compact('purchase', 'template'))->render();
            }
        } else {
            $html = view('print.purchase', compact('purchase', 'template'))->render();
        }
        
        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $this->getLogoAsBase64($template);
        
        // Hide buttons in PDF and add Arabic support
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
                
                /* Fix layout issues for PDF */
                .document-header > div {
                    display: table !important;
                    width: 100% !important;
                }
                .document-header > div > div:first-child {
                    display: table-cell !important;
                    vertical-align: top !important;
                    width: 60% !important;
                }
                .document-header > div > div:last-child {
                    display: table-cell !important;
                    vertical-align: top !important;
                    width: 40% !important;
                    text-align: right !important;
                }
                
                /* Fix logo display */
                .company-logo {
                    max-height: 60px !important;
                    max-width: 200px !important;
                    height: auto !important;
                    width: auto !important;
                    display: block !important;
                }
                
                /* Fix totals section layout */
                .totals-section {
                    display: table !important;
                    width: 100% !important;
                }
                .totals-table {
                    display: table-cell !important;
                    width: 300px !important;
                    vertical-align: top !important;
                }
                
                /* Ensure proper spacing */
                .client-info, .supplier-info {
                    margin-bottom: 20px !important;
                }
                
                /* Professional table styling for PDF - High specificity */
                .document-container .items-table {
                    width: 100% !important;
                    border-collapse: collapse !important;
                    margin-bottom: 25px !important;
                    font-size: 12px !important;
                    border: 2px solid #374151 !important;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
                }
                .document-container .items-table th,
                .document-container .items-table td {
                    padding: 10px 8px !important;
                    border: 1px solid #d1d5db !important;
                    vertical-align: middle !important;
                    font-size: 11px !important;
                    line-height: 1.4 !important;
                }
                .document-container .items-table th {
                    background: #374151 !important;
                    color: #ffffff !important;
                    font-weight: 600 !important;
                    text-align: center !important;
                    padding: 12px 8px !important;
                    border-bottom: 2px solid #1f2937 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.5px !important;
                }
                .document-container .items-table tbody tr {
                    background: #ffffff !important;
                }
                .document-container .items-table tbody tr:nth-child(even) {
                    background: #f9fafb !important;
                }
                .document-container .items-table tbody tr:hover {
                    background: #f3f4f6 !important;
                }
                .document-container .items-table .text-right {
                    text-align: right !important;
                    font-weight: 500 !important;
                }
                .document-container .items-table .text-center {
                    text-align: center !important;
                }
                .document-container .items-table tbody td {
                    color: #374151 !important;
                }
                .document-container .items-table tbody td strong {
                    font-weight: 600 !important;
                    color: #111827 !important;
                }
                .document-container .items-table tbody td small {
                    font-size: 10px !important;
                    color: #6b7280 !important;
                }
                
                
                /* Fix number formatting */
                .items-table td {
                    white-space: nowrap !important;
                }
                .items-table td:first-child {
                    white-space: normal !important;
                }
            </style>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">', $html);
            
        // Replace logo URLs with base64 data URLs
        if ($logoBase64) {
            // Replace both Blade template variable and actual rendered URLs
            $html = str_replace('src="{{ $template->logo_url }}"', 'src="' . $logoBase64 . '"', $html);
            
            // Also replace any existing logo URLs that might be rendered
            $pattern = '/src="[^"]*\/images\/[^"]*\.(png|jpg|jpeg|gif)"/i';
            $html = preg_replace($pattern, 'src="' . $logoBase64 . '"', $html);
            
            Log::info('Logo converted to base64 successfully');
        } else {
            Log::warning('Logo base64 conversion failed - no logo will be displayed');
        }

        return $this->generatePDF($html, 'Purchase-' . $purchase->purchase_no . '.pdf');
    }

    /**
     * Download quotation as PDF using selected template - SNAPSHOT APPROACH
     */
    public function downloadQuotationPDF($slug)
    {
        // Set locale for translations - force Arabic for print templates
        app()->setLocale('ar');
        
        $quotation = Quotation::where('slug', $slug)
            ->with('client', 'quotationProducts.product.productUnit', 'quotationProducts.product.productTax', 'user')
            ->firstOrFail();

        // Get the default template for quotations
        $template = PrintTemplate::byModule('quotation')->default()->first();
        
        if (!$template) {
            // Fallback to basic template if no print template is set
            $template = new PrintTemplate();
            $template->template_config = $this->getTemplateConfig('quotation');
        }
        
        // Generate the print view URL for snapshot
        $printUrl = route('print.quotation', $slug);
        
        // Try Puppeteer snapshot approach first
        try {
            $result = $this->generateSnapshotPDF($printUrl, 'Quotation-' . $quotation->quotation_no . '.pdf');
            if ($result['success']) {
                return $result['response'];
            }
        } catch (\Exception $e) {
            Log::warning('Puppeteer snapshot PDF generation failed: ' . $e->getMessage());
        }
        
        // Fallback to original approach if snapshot fails
        $html = view('print.quotation', compact('quotation', 'template'))->render();
        
        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $this->getLogoAsBase64($template);
        
        // Replace logo URLs with base64 data URLs
        if ($logoBase64) {
            $html = str_replace('src="{{ $template->logo_url }}"', 'src="' . $logoBase64 . '"', $html);
            $pattern = '/src="[^"]*\/images\/[^"]*\.(png|jpg|jpeg|gif)"/i';
            $html = preg_replace($pattern, 'src="' . $logoBase64 . '"', $html);
        }

        return $this->generatePDF($html, 'Quotation-' . $quotation->quotation_no . '.pdf');
    }

    /**
     * Download invoice return as PDF using selected template
     */
    public function downloadInvoiceReturnPDF($slug)
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
                'user'
            ])
            ->firstOrFail();

        // Get the default template for invoice returns
        $template = PrintTemplate::byModule('invoice-return')->default()->first();
        
        if (!$template) {
            // Fallback to basic template if no print template is set
            if (view()->exists('print.invoice-return-basic')) {
                $html = view('print.invoice-return-basic', compact('invoiceReturn'))->render();
            } else {
                // Use regular template without template config
                $template = new PrintTemplate();
                $template->template_config = $this->getTemplateConfig('invoice-return');
                $html = view('print.invoice-return', compact('invoiceReturn', 'template'))->render();
            }
        } else {
            $html = view('print.invoice-return', compact('invoiceReturn', 'template'))->render();
        }
        
        // Convert logo to base64 for PDF compatibility
        $logoBase64 = $this->getLogoAsBase64($template);
        
        // Hide buttons in PDF and add Arabic support
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
                
                /* Fix layout issues for PDF */
                .document-header > div {
                    display: table !important;
                    width: 100% !important;
                }
                .document-header .company-info,
                .document-header .client-info {
                    display: table-cell !important;
                    vertical-align: top !important;
                }
                
                /* Ensure proper spacing */
                .invoice-header {
                    margin-bottom: 20px;
                }
                
                /* Table styling for PDF */
                .invoice-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                
                .invoice-table th,
                .invoice-table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                
                .invoice-table th {
                    background-color: #f5f5f5;
                    font-weight: bold;
                }
                
                /* Summary table styling */
                .summary-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                
                .summary-table th,
                .summary-table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: right;
                }
                
                .summary-table th {
                    background-color: #f8f9fa;
                    font-weight: bold;
                }
                
                /* Hide print-specific elements */
                .no-print {
                    display: none !important;
                }
                
                /* Ensure proper page breaks */
                .page-break {
                    page-break-before: always;
                }
                
                /* Logo styling */
                .company-logo {
                    max-width: 150px;
                    max-height: 80px;
                    object-fit: contain;
                }
            </style>', $html);

        // Replace logo placeholder with base64 if available
        if ($logoBase64) {
            $html = str_replace('{{LOGO_BASE64}}', $logoBase64, $html);
            Log::info('Logo converted to base64 successfully');
        } else {
            Log::warning('Logo base64 conversion failed - no logo will be displayed');
        }

        return $this->generatePDF($html, 'Invoice-Return-' . $invoiceReturn->return_no . '.pdf');
    }

    /**
     * Print Today Report using selected template
     */
    public function printTodayReport(Request $request)
    {
        // Set locale for translations
        app()->setLocale(app()->getLocale());
        
        // Get today's report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->todayReport($request);
        
        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        if (!$template) {
            return view('print.today-report-basic', compact('reportData'));
        }

        return view('print.reports.today-report', compact('reportData', 'template'));
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
        app()->setLocale(app()->getLocale());
        
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
                'request_params' => $request->all()
            ]);
            
            if (!isset($reportData['success']) || !$reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';
                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> ' . htmlspecialchars($errorMessage) . '</p><p><strong>Detail:</strong> ' . htmlspecialchars($errorDetail) . '</p><p><strong>Response:</strong> ' . htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)) . '</p></body></html>', 500);
            }
            
            $invoiceSummaryData = $reportData['data'];
            
            Log::info("Print Invoice Summary - Total clients: " . count($invoiceSummaryData['clients']));
            
            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();
            
            if (!$template) {
                return view('print.invoice-summary-basic', compact('invoiceSummaryData'));
            }

            return view('print.reports.invoice-summary', compact('invoiceSummaryData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Invoice Summary Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
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
        app()->setLocale(app()->getLocale());
        
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
                'request_params' => $request->all()
            ]);
            
            if (!isset($reportData['success']) || !$reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';
                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> ' . htmlspecialchars($errorMessage) . '</p><p><strong>Detail:</strong> ' . htmlspecialchars($errorDetail) . '</p><p><strong>Response:</strong> ' . htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)) . '</p></body></html>', 500);
            }
            
            $purchaseSummaryData = $reportData['data'];
            
            Log::info("Print Purchase Summary - Total suppliers: " . count($purchaseSummaryData['suppliers']));
            
            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();
            
            if (!$template) {
                return view('print.purchase-summary-basic', compact('purchaseSummaryData'));
            }

            return view('print.reports.purchase-summary', compact('purchaseSummaryData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Purchase Summary Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
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
        app()->setLocale(app()->getLocale());
        
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
                'request_params' => $request->all()
            ]);
            
            if (!isset($reportData['success']) || !$reportData['success']) {
                $errorMessage = $reportData['message'] ?? 'Unknown error';
                $errorDetail = $reportData['error'] ?? 'No error details';
                return response()->make('<html><body><h1>Debug Error</h1><p><strong>Message:</strong> ' . htmlspecialchars($errorMessage) . '</p><p><strong>Detail:</strong> ' . htmlspecialchars($errorDetail) . '</p><p><strong>Response:</strong> ' . htmlspecialchars(json_encode($reportData, JSON_PRETTY_PRINT)) . '</p></body></html>', 500);
            }
            
            $vatReportData = $reportData['data'];
            
            Log::info("Print VAT Report - Data generated successfully");
            
            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();
            
            if (!$template) {
                return view('print.vat-report-basic', compact('vatReportData'));
            }

            return view('print.reports.vat-report', compact('vatReportData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print VAT Report Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Print Inventory Report using selected template
     */
    public function printInventory(Request $request)
    {
        // Set locale for translations
        app()->setLocale(app()->getLocale());
        
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
                ]
            ];
            
            Log::info("Print Inventory Report - Data generated successfully", [
                'data_count' => count($inventoryData ?? []),
                'filters' => $inventoryReportData['filters']
            ]);
            
            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();
            
            if (!$template) {
                return view('print.inventory-basic', compact('inventoryReportData'));
            }

            return view('print.reports.inventory', compact('inventoryReportData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Inventory Report Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Print Items Report using selected template
     */
    public function printItems(Request $request)
    {
        // Set locale for translations
        app()->setLocale(app()->getLocale());
        
        try {
            // Get items report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $itemsData = $reportController->itemsReport($request);
            
            // Handle JsonResponse (the items API returns array with product, stockIns, stockOuts)
            if ($itemsData instanceof \Illuminate\Http\JsonResponse) {
                $itemsData = $itemsData->getData(true);
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
                ]
            ];
            
            Log::info("Print Items Report - Data generated successfully", [
                'product' => $itemsReportData['product']['name'] ?? 'Unknown',
                'stockIns_count' => count($itemsReportData['stockIns']),
                'stockOuts_count' => count($itemsReportData['stockOuts']),
                'filters' => $itemsReportData['filters']
            ]);
            
            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();
            
            if (!$template) {
                return view('print.items-basic', compact('itemsReportData'));
            }

            return view('print.reports.items', compact('itemsReportData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Items Report Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
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
        app()->setLocale(app()->getLocale());
        
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
                ]
            ];
            
            Log::info("Print Expenses Report - Data generated successfully", [
                'data_count' => count($expensesData ?? []),
                'filters' => $expensesReportData['filters']
            ]);
            
            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();
            
            if (!$template) {
                return view('print.expenses-basic', compact('expensesReportData'));
            }

            return view('print.reports.expenses', compact('expensesReportData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Expenses Report Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Print Client Receivable Report using selected template
     */
    public function printClientReceivableReport(Request $request)
    {
        // Set locale for translations
        app()->setLocale(app()->getLocale());
        
        // Get client receivable report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->clientDueReport($request);
        
        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        if (!$template) {
            return view('print.client-receivable-report-basic', compact('reportData'));
        }

        return view('print.reports.client-receivable-report', compact('reportData', 'template'));
    }

    /**
     * Print Supplier Payable Report using selected template
     */
    public function printSupplierPayableReport(Request $request)
    {
        // Set locale for translations
        app()->setLocale(app()->getLocale());
        
        // Get supplier payable report data
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportData = $reportController->supplierDueReport($request);
        
        if ($reportData instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportData->getData(true);
        }
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        if (!$template) {
            return view('print.supplier-payable-report-basic', compact('reportData'));
        }

        return view('print.reports.supplier-payable-report', compact('reportData', 'template'));
    }

    /**
     * Print Sales By User Report using selected template
     */
    public function printSalesByUserReport(Request $request)
    {
        // Set locale for translations
        app()->setLocale(app()->getLocale());
        
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
                ]
            ];
            
            Log::info("Print Sales By User Report - Data generated successfully", [
                'data_count' => count($salesData ?? []),
                'filters' => $salesByUserReportData['filters']
            ]);
            
            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();
            
            if (!$template) {
                return view('print.sales-by-user-basic', compact('salesByUserReportData'));
            }

            return view('print.reports.sales-by-user', compact('salesByUserReportData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Sales By User Report Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Print Collection By User Report using selected template
     */
    public function printCollectionByUserReport(Request $request)
    {
        // Set locale for translations
        app()->setLocale(app()->getLocale());
        
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
                ]
            ];
            
            Log::info("Print Collection By User Report - Data generated successfully", [
                'data_count' => count($collectionData ?? []),
                'filters' => $collectionByUserReportData['filters']
            ]);
            
            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();
            
            if (!$template) {
                return view('print.collection-by-user-basic', compact('collectionByUserReportData'));
            }

            return view('print.reports.collection-by-user', compact('collectionByUserReportData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Collection By User Report Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }

    /**
     * Print Group Account Statement using selected template
     */
    public function printGroupAccountStatement(Request $request)
    {
        // Set locale for translations
        app()->setLocale(app()->getLocale());
        
        // Use the dedicated print method that gets ALL data without pagination
        $reportController = new \App\Http\Controllers\API\ReportController();
        $reportResponse = $reportController->groupAccountStatementForPrint($request);
        
        // Handle JsonResponse
        if ($reportResponse instanceof \Illuminate\Http\JsonResponse) {
            $reportData = $reportResponse->getData(true);
        } else {
            $reportData = $reportResponse;
        }
        
        if (!$reportData['success']) {
            abort(404, 'Report data not found');
        }
        
        $groupStatementData = $reportData['data'];
        
        Log::info("Print Group Account Statement - Total entries: " . count($groupStatementData['entries']));
        
        // Get the default template for reports
        $template = PrintTemplate::byModule('reports')->default()->first();
        
        if (!$template) {
            return view('print.group-account-statement-basic', compact('groupStatementData'));
        }

        return view('print.reports.group-account-statement', compact('groupStatementData', 'template'));
    }

    /**
     * Print Summary Report using selected template
     */
    public function printSummary(Request $request)
    {
        // Set locale for translations
        app()->setLocale(app()->getLocale());
        
        try {
            // Get summary report data
            $reportController = new \App\Http\Controllers\API\ReportController();
            $summaryData = $reportController->summeryReport($request);
            
            if ($summaryData instanceof \Illuminate\Http\JsonResponse) {
                $summaryData = $summaryData->getData(true);
            }
            
            Log::info("Print Summary Report - Data generated successfully");
            
            // Get the default template for reports
            $template = PrintTemplate::byModule('reports')->default()->first();
            
            if (!$template) {
                return view('print.summary-basic', compact('summaryData'));
            }

            return view('print.reports.summary', compact('summaryData', 'template'));
            
        } catch (\Exception $e) {
            Log::error('Print Summary Report Error: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_params' => $request->all()
            ]);
            
            // Return simple HTML error response (no view dependency)
            return response()->make(
                '<html><body style="font-family: Arial, sans-serif; padding: 20px;"><h1 style="color: #dc3545;">Print Error</h1><p><strong>Error:</strong> ' . htmlspecialchars($e->getMessage()) . '</p><p><em>Please check the logs for more details.</em></p></body></html>',
                500
            );
        }
    }


}

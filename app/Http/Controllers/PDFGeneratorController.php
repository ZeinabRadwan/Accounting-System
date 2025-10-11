<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Purchase;
use App\Models\PurchaseOrder;
use App\Models\Quotation;
use App\Models\PrintTemplate;
use Barryvdh\DomPDF\Facade\Pdf;

class PDFGeneratorController extends Controller
{
    // generate invoice pdf
    public function generateInvoicePDF($slug){
        $invoice = Invoice::where('slug', $slug)->with('client', 'invoiceProducts.invoice', 'invoicePayments.invoicePaymentTransaction.cashbookAccount', 'invoiceProducts.product.productUnit', 'invoiceProducts.product.productTax', 'invoiceTax', 'user')->first();
        
        // Get the default template for invoices
        $template = PrintTemplate::byModule('invoice')->default()->first();
        
        if ($template) {
            // Use the template system
            $html = $this->renderTemplate($template, $invoice, 'invoice');
            $pdf = Pdf::loadHTML($html);
        } else {
            // Fallback to original template
        $pdf = Pdf::loadHTML(view('pdf.invoice-template', [
            'invoice' => $invoice
        ]));
        }
        
        $pdf->setPaper('A4', 'portrait');
        $pdf->render();
        return $pdf->stream('Invoice-'.$invoice->slug.'.pdf');
    }

    // generate purchase pdf
    public function generatePurchasePDF($slug){
        $purchase = Purchase::with('supplier', 'purchaseProducts.purchase', 'purchaseReturn', 'purchasePayments.purchasePaymentTransaction.cashbookAccount', 'purchaseProducts.product.productUnit', 'purchaseProducts.product.productTax',  'user')->where('slug', $slug)->first();
        
        // Get the default template for purchases
        $template = PrintTemplate::byModule('purchase')->default()->first();
        
        if ($template) {
            // Use the template system
            $html = $this->renderTemplate($template, $purchase, 'purchase');
            $pdf = Pdf::loadHTML($html);
        } else {
            // Fallback to original template
        $pdf = Pdf::loadHTML(view('pdf.purchase-template', [
            'purchase' => $purchase
        ]));
        }
        
        $pdf->setPaper('A4', 'portrait');
        $pdf->render();
        return $pdf->stream('Purchase-'.$purchase->slug.'.pdf');
    }

    // generate quotation pdf
    public function generateQuotationPDF($slug){
        $quotation = Quotation::with('client', 'quotationProducts.product.productUnit', 'quotationProducts.product.productTax', 'user')->where('slug', $slug)->firstOrFail();
        
        // Get the default template for quotations
        $template = PrintTemplate::byModule('quotation')->default()->first();
        
        if ($template) {
            // Use the template system
            $html = $this->renderTemplate($template, $quotation, 'quotation');
            $pdf = Pdf::loadHTML($html);
        } else {
            // Fallback to original template
        $pdf = Pdf::loadHTML(view('pdf.quotation-template', [
            'quotation' => $quotation
        ]));
        }
        
        $pdf->setPaper('A4', 'portrait');
        $pdf->render();
        return $pdf->stream('Quotation-'.$quotation->slug.'.pdf');
    }

    // generate purchase order pdf
    public function generatePurchaseOrderPDF($slug){
        $purchaseOrder = PurchaseOrder::with('supplier', 'purchaseOrderProducts.product.productUnit', 'purchaseOrderProducts.product.productTax', 'user')->where('slug', $slug)->firstOrFail();
        
        // Get the default template for purchase orders
        $template = PrintTemplate::byModule('purchase_order')->default()->first();
        
        if ($template) {
            // Use the template system
            $html = $this->renderTemplate($template, $purchaseOrder, 'purchase_order');
            $pdf = Pdf::loadHTML($html);
        } else {
            // Fallback to original template
        $pdf = Pdf::loadHTML(view('pdf.purchase-order-template', [
            'purchaseOrder' => $purchaseOrder
        ]));
        }
        
        $pdf->setPaper('A4', 'portrait');
        $pdf->render();
        return $pdf->stream('Purchase-Order-'.$purchaseOrder->slug.'.pdf');
    }

    /**
     * Preview a template with sample data
     */
    public function previewTemplate($id)
    {
        $template = PrintTemplate::findOrFail($id);
        
        // Generate sample data based on module
        $sampleData = $this->generateSampleData($template->module);
        
        // Render the template
        $html = $this->renderTemplate($template, $sampleData, $template->module);
        
        return response($html)->header('Content-Type', 'text/html');
    }

    /**
     * Render a template with data
     */
    private function renderTemplate($template, $data, $module)
    {
        // Get the HTML template
        $html = $template->html_template;
        $css = $template->css_styles;
        
        // Prepare data for template
        $templateData = $this->prepareTemplateData($data, $module);
        
        // Replace placeholders in the template
        $html = $this->replaceTemplatePlaceholders($html, $templateData);
        
        // Add CSS styles
        $html = str_replace('</head>', '<style>' . $css . '</style></head>', $html);
        
        return $html;
    }

    /**
     * Prepare data for template rendering
     */
    private function prepareTemplateData($data, $module)
    {
        $templateData = [];
        
        switch ($module) {
            case 'invoice':
                $templateData = [
                    'invoice' => $data,
                    'logo' => $this->getCompanyLogo(),
                    'company_name' => config('config.companyName'),
                    'company_address' => config('config.address'),
                    'company_phone' => config('config.companyPhoneNumber'),
                    'company_email' => config('config.companyEmail'),
                    'invoice_prefix' => config('config.invoicePrefix'),
                ];
                break;
                
            case 'purchase':
                $templateData = [
                    'purchase' => $data,
                    'logo' => $this->getCompanyLogo(),
                    'company_name' => config('config.companyName'),
                    'company_address' => config('config.address'),
                    'company_phone' => config('config.companyPhoneNumber'),
                    'company_email' => config('config.companyEmail'),
                    'purchase_prefix' => config('config.purchasePrefix'),
                ];
                break;
                
            case 'quotation':
                $templateData = [
                    'quotation' => $data,
                    'logo' => $this->getCompanyLogo(),
                    'company_name' => config('config.companyName'),
                    'company_address' => config('config.address'),
                    'company_phone' => config('config.companyPhoneNumber'),
                    'company_email' => config('config.companyEmail'),
                    'quotation_prefix' => config('config.quotationPrefix'),
                ];
                break;
        }
        
        return $templateData;
    }

    /**
     * Replace placeholders in template
     */
    private function replaceTemplatePlaceholders($html, $data)
    {
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                // Handle nested arrays (like invoice data)
                $html = $this->replaceNestedPlaceholders($html, $value, $key);
            } else {
                $html = str_replace('{{ $' . $key . ' }}', $value, $html);
                $html = str_replace('{{ config("config.' . $key . '") }}', $value, $html);
            }
        }
        
        return $html;
    }

    /**
     * Replace nested placeholders
     */
    private function replaceNestedPlaceholders($html, $data, $prefix)
    {
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                $html = $this->replaceNestedPlaceholders($html, $value, $prefix . '.' . $key);
            } else {
                $placeholder = '{{ $' . $prefix . '["' . $key . '"] }}';
                $html = str_replace($placeholder, $value, $html);
            }
        }
        
        return $html;
    }

    /**
     * Get company logo as base64
     */
    private function getCompanyLogo()
    {
        try {
            $logoPath = config('config.logoBlack');
            if (str_contains($logoPath, 'images')) {
                $path = global_asset($logoPath);
            } else {
                $path = global_asset('images/' . $logoPath);
            }
            
            $type = pathinfo($path, PATHINFO_EXTENSION);
            $data = file_get_contents($path);
            return 'data:image/' . $type . ';base64,' . base64_encode($data);
        } catch (\Exception $e) {
            return '';
        }
    }

    /**
     * Generate sample data for template preview
     */
    private function generateSampleData($module)
    {
        $baseData = [
            'date' => now()->format('Y-m-d'),
            'sub_total' => 1000.00,
            'tax_amount' => 100.00,
            'total' => 1100.00,
            'items' => [
                [
                    'name' => 'Sample Product 1',
                    'quantity' => 2,
                    'price' => 500.00,
                    'total' => 1000.00
                ]
            ]
        ];

        switch ($module) {
            case 'invoice':
                return (object) array_merge($baseData, [
                    'invoice_no' => 'INV-001',
                    'client' => (object) [
                        'name' => 'John Doe',
                        'company_name' => 'Acme Corp',
                        'email' => 'john@acme.com',
                        'phone' => '+1 234 567 8900',
                        'address' => '123 Main St, City, State 12345'
                    ],
                    'invoice_date' => now()->format('Y-m-d'),
                    'due_date' => now()->addDays(30)->format('Y-m-d'),
                ]);
                
            case 'purchase':
                return (object) array_merge($baseData, [
                    'purchase_no' => 'PUR-001',
                    'supplier' => (object) [
                        'name' => 'Supplier Name',
                        'company_name' => 'Supplier Corp',
                        'email' => 'supplier@example.com',
                        'phone' => '+1 234 567 8900',
                        'address' => '123 Supplier St, City, State 12345'
                    ],
                    'purchase_date' => now()->format('Y-m-d'),
                ]);
                
            case 'quotation':
                return (object) array_merge($baseData, [
                    'quotation_no' => 'QUO-001',
                    'client' => (object) [
                        'name' => 'Client Name',
                        'company_name' => 'Client Corp',
                        'email' => 'client@example.com',
                        'phone' => '+1 234 567 8900',
                        'address' => '123 Client St, City, State 12345'
                    ],
                    'quotation_date' => now()->format('Y-m-d'),
                    'valid_until' => now()->addDays(30)->format('Y-m-d'),
                ]);
                
            default:
                return (object) $baseData;
        }
    }
}
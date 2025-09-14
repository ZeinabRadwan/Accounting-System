<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Purchase;
use App\Models\Quotation;
use App\Models\PrintTemplate;
use App\Models\GeneralSetting;
use Illuminate\Http\Request;

class PrintController extends Controller
{
    /**
     * Print invoice using selected template
     */
    public function printInvoice($slug)
    {
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
}

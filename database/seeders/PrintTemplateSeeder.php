<?php

namespace Database\Seeders;

use App\Models\PrintTemplate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PrintTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createInvoiceTemplates();
        $this->createPurchaseTemplates();
        $this->createQuotationTemplates();
    }

    private function createInvoiceTemplates()
    {
        // Template 1: Modern Minimal
        PrintTemplate::create([
            'name' => 'modern_minimal',
            'module' => 'invoice',
            'template_key' => 'invoice_modern_minimal',
            'display_name' => 'Modern Minimal',
            'description' => 'Clean and minimal design with modern typography',
            'is_default' => true,
            'is_active' => true,
            'template_config' => [
                'primary_color' => '#2563eb',
                'secondary_color' => '#64748b',
                'accent_color' => '#f1f5f9',
                'font_family' => 'Inter, sans-serif',
                'font_size' => '14px',
                'header_font_size' => '24px',
                'border_radius' => '8px',
                'layout' => 'minimal'
            ],
            'html_template' => $this->getInvoiceTemplate('modern_minimal'),
            'css_styles' => $this->getInvoiceCSS('modern_minimal'),
            'preview_data' => $this->getInvoicePreviewData(),
            'sort_order' => 1,
        ]);

        // Template 2: Professional Corporate
        PrintTemplate::create([
            'name' => 'professional_corporate',
            'module' => 'invoice',
            'template_key' => 'invoice_professional_corporate',
            'display_name' => 'Professional Corporate',
            'description' => 'Professional corporate design with structured layout',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'primary_color' => '#1e40af',
                'secondary_color' => '#374151',
                'accent_color' => '#e5e7eb',
                'font_family' => 'Roboto, sans-serif',
                'font_size' => '13px',
                'header_font_size' => '22px',
                'border_radius' => '4px',
                'layout' => 'corporate'
            ],
            'html_template' => $this->getInvoiceTemplate('professional_corporate'),
            'css_styles' => $this->getInvoiceCSS('professional_corporate'),
            'preview_data' => $this->getInvoicePreviewData(),
            'sort_order' => 2,
        ]);

        // Template 3: Creative Colorful
        PrintTemplate::create([
            'name' => 'creative_colorful',
            'module' => 'invoice',
            'template_key' => 'invoice_creative_colorful',
            'display_name' => 'Creative Colorful',
            'description' => 'Vibrant and creative design with colorful accents',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'primary_color' => '#7c3aed',
                'secondary_color' => '#f59e0b',
                'accent_color' => '#fef3c7',
                'font_family' => 'Poppins, sans-serif',
                'font_size' => '14px',
                'header_font_size' => '26px',
                'border_radius' => '12px',
                'layout' => 'creative'
            ],
            'html_template' => $this->getInvoiceTemplate('creative_colorful'),
            'css_styles' => $this->getInvoiceCSS('creative_colorful'),
            'preview_data' => $this->getInvoicePreviewData(),
            'sort_order' => 3,
        ]);

        // Template 4: Elegant Classic
        PrintTemplate::create([
            'name' => 'elegant_classic',
            'module' => 'invoice',
            'template_key' => 'invoice_elegant_classic',
            'display_name' => 'Elegant Classic',
            'description' => 'Elegant and timeless design with classic typography',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'primary_color' => '#1f2937',
                'secondary_color' => '#6b7280',
                'accent_color' => '#f9fafb',
                'font_family' => 'Playfair Display, serif',
                'font_size' => '15px',
                'header_font_size' => '28px',
                'border_radius' => '6px',
                'layout' => 'classic'
            ],
            'html_template' => $this->getInvoiceTemplate('elegant_classic'),
            'css_styles' => $this->getInvoiceCSS('elegant_classic'),
            'preview_data' => $this->getInvoicePreviewData(),
            'sort_order' => 4,
        ]);

        // Template 5: Tech Modern
        PrintTemplate::create([
            'name' => 'tech_modern',
            'module' => 'invoice',
            'template_key' => 'invoice_tech_modern',
            'display_name' => 'Tech Modern',
            'description' => 'Modern tech-inspired design with geometric elements',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'primary_color' => '#059669',
                'secondary_color' => '#1f2937',
                'accent_color' => '#ecfdf5',
                'font_family' => 'JetBrains Mono, monospace',
                'font_size' => '13px',
                'header_font_size' => '20px',
                'border_radius' => '0px',
                'layout' => 'tech'
            ],
            'html_template' => $this->getInvoiceTemplate('tech_modern'),
            'css_styles' => $this->getInvoiceCSS('tech_modern'),
            'preview_data' => $this->getInvoicePreviewData(),
            'sort_order' => 5,
        ]);
    }

    private function createPurchaseTemplates()
    {
        // Similar structure for purchase templates
        PrintTemplate::create([
            'name' => 'modern_minimal',
            'module' => 'purchase',
            'template_key' => 'purchase_modern_minimal',
            'display_name' => 'Modern Minimal',
            'description' => 'Clean and minimal design for purchase orders',
            'is_default' => true,
            'is_active' => true,
            'template_config' => [
                'primary_color' => '#dc2626',
                'secondary_color' => '#64748b',
                'accent_color' => '#fef2f2',
                'font_family' => 'Inter, sans-serif',
                'font_size' => '14px',
                'header_font_size' => '24px',
                'border_radius' => '8px',
                'layout' => 'minimal'
            ],
            'html_template' => $this->getPurchaseTemplate('modern_minimal'),
            'css_styles' => $this->getPurchaseCSS('modern_minimal'),
            'preview_data' => $this->getPurchasePreviewData(),
            'sort_order' => 1,
        ]);
    }

    private function createQuotationTemplates()
    {
        // Similar structure for quotation templates
        PrintTemplate::create([
            'name' => 'modern_minimal',
            'module' => 'quotation',
            'template_key' => 'quotation_modern_minimal',
            'display_name' => 'Modern Minimal',
            'description' => 'Clean and minimal design for quotations',
            'is_default' => true,
            'is_active' => true,
            'template_config' => [
                'primary_color' => '#0891b2',
                'secondary_color' => '#64748b',
                'accent_color' => '#f0f9ff',
                'font_family' => 'Inter, sans-serif',
                'font_size' => '14px',
                'header_font_size' => '24px',
                'border_radius' => '8px',
                'layout' => 'minimal'
            ],
            'html_template' => $this->getQuotationTemplate('modern_minimal'),
            'css_styles' => $this->getQuotationCSS('modern_minimal'),
            'preview_data' => $this->getQuotationPreviewData(),
            'sort_order' => 1,
        ]);
    }

    // Template methods will be implemented below
    private function getInvoiceTemplate($template)
    {
        switch ($template) {
            case 'modern_minimal':
                return $this->getModernMinimalTemplate();
            case 'professional_corporate':
                return $this->getProfessionalCorporateTemplate();
            case 'creative_colorful':
                return $this->getCreativeColorfulTemplate();
            case 'elegant_classic':
                return $this->getElegantClassicTemplate();
            case 'tech_modern':
                return $this->getTechModernTemplate();
            default:
                return $this->getModernMinimalTemplate();
        }
    }

    private function getInvoiceCSS($template)
    {
        switch ($template) {
            case 'modern_minimal':
                return $this->getModernMinimalCSS();
            case 'professional_corporate':
                return $this->getProfessionalCorporateCSS();
            case 'creative_colorful':
                return $this->getCreativeColorfulCSS();
            case 'elegant_classic':
                return $this->getElegantClassicCSS();
            case 'tech_modern':
                return $this->getTechModernCSS();
            default:
                return $this->getModernMinimalCSS();
        }
    }

    private function getInvoicePreviewData()
    {
        return [
            'invoice_no' => 'INV-001',
            'client' => [
                'name' => 'John Doe',
                'company_name' => 'Acme Corp',
                'email' => 'john@acme.com',
                'phone' => '+1 234 567 8900',
                'address' => '123 Main St, City, State 12345'
            ],
            'invoice_date' => '2024-01-15',
            'due_date' => '2024-02-15',
            'sub_total' => 1000.00,
            'tax_amount' => 100.00,
            'total' => 1100.00,
            'items' => [
                [
                    'name' => 'Product 1',
                    'quantity' => 2,
                    'price' => 500.00,
                    'total' => 1000.00
                ]
            ]
        ];
    }

    private function getPurchaseTemplate($template)
    {
        return '<div class="purchase-template">Purchase Template HTML</div>';
    }

    private function getPurchaseCSS($template)
    {
        return '.purchase-template { color: #333; }';
    }

    private function getPurchasePreviewData()
    {
        return [
            'purchase_no' => 'PUR-001',
            'supplier' => [
                'name' => 'Supplier Name',
                'company_name' => 'Supplier Corp',
                'email' => 'supplier@example.com',
                'phone' => '+1 234 567 8900',
                'address' => '123 Supplier St, City, State 12345'
            ],
            'purchase_date' => '2024-01-15',
            'sub_total' => 1000.00,
            'tax_amount' => 100.00,
            'total' => 1100.00,
            'items' => [
                [
                    'name' => 'Product 1',
                    'quantity' => 2,
                    'price' => 500.00,
                    'total' => 1000.00
                ]
            ]
        ];
    }

    private function getQuotationTemplate($template)
    {
        return '<div class="quotation-template">Quotation Template HTML</div>';
    }

    private function getQuotationCSS($template)
    {
        return '.quotation-template { color: #333; }';
    }

    private function getQuotationPreviewData()
    {
        return [
            'quotation_no' => 'QUO-001',
            'client' => [
                'name' => 'Client Name',
                'company_name' => 'Client Corp',
                'email' => 'client@example.com',
                'phone' => '+1 234 567 8900',
                'address' => '123 Client St, City, State 12345'
            ],
            'quotation_date' => '2024-01-15',
            'valid_until' => '2024-02-15',
            'sub_total' => 1000.00,
            'tax_amount' => 100.00,
            'total' => 1100.00,
            'items' => [
                [
                    'name' => 'Product 1',
                    'quantity' => 2,
                    'price' => 500.00,
                    'total' => 1000.00
                ]
            ]
        ];
    }

    private function getModernMinimalTemplate()
    {
        return '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Invoice</title>
        </head>
        <body>
            <div class="invoice-container">
                <!-- Header -->
                <div class="invoice-header">
                    <div class="company-info">
                        <div class="logo">
                            <img src="{{ $logo }}" alt="Company Logo" class="logo-img">
                        </div>
                        <div class="company-details">
                            <h1 class="company-name">{{ config("config.companyName") }}</h1>
                            <p class="company-address">{{ config("config.address") }}</p>
                            <p class="company-contact">
                                <span>{{ config("config.companyPhoneNumber") }}</span> • 
                                <span>{{ config("config.companyEmail") }}</span>
                            </p>
                        </div>
                    </div>
                    <div class="invoice-info">
                        <h2 class="invoice-title">INVOICE</h2>
                        <div class="invoice-details">
                            <p><strong>Invoice #:</strong> {{ config("config.invoicePrefix") }}-{{ $invoice["invoice_no"] }}</p>
                            <p><strong>Date:</strong> {{ $invoice["invoice_date"] }}</p>
                            @if($invoice["reference"])
                            <p><strong>Reference:</strong> {{ $invoice["reference"] }}</p>
                            @endif
                        </div>
                    </div>
                </div>

                <!-- Client Info -->
                <div class="client-section">
                    <h3>Bill To:</h3>
                    <div class="client-info">
                        <p class="client-name">{{ $invoice["client"]["name"] }}</p>
                        @if($invoice["client"]["company_name"])
                        <p class="client-company">{{ $invoice["client"]["company_name"] }}</p>
                        @endif
                        <p class="client-address">{{ $invoice["client"]["address"] }}</p>
                        <p class="client-contact">
                            <span>{{ $invoice["client"]["phone"] }}</span> • 
                            <span>{{ $invoice["client"]["email"] }}</span>
                        </p>
                    </div>
                </div>

                <!-- Items Table -->
                <div class="items-section">
                    <table class="items-table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Rate</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($invoice["invoiceProducts"] as $item)
                            <tr>
                                <td class="item-description">
                                    <strong>{{ $item["product"]["name"] }}</strong>
                                    @if($item["product"]["productUnit"])
                                    <br><small>{{ $item["product"]["productUnit"]["code"] }}</small>
                                    @endif
                                </td>
                                <td class="item-qty">{{ $item["quantity"] }}</td>
                                <td class="item-rate">@currency($item["unit_cost"])</td>
                                <td class="item-amount">@currency($item["unit_cost"] * $item["quantity"])</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                <!-- Totals -->
                <div class="totals-section">
                    <div class="totals-table">
                        <div class="total-row">
                            <span>Subtotal:</span>
                            <span>@currency($invoice["sub_total"])</span>
                        </div>
                        @if($invoice["discount"])
                        <div class="total-row">
                            <span>Discount:</span>
                            <span>-@currency($invoice["discount"])</span>
                        </div>
                        @endif
                        @if($invoice["transport"])
                        <div class="total-row">
                            <span>Transport:</span>
                            <span>@currency($invoice["transport"])</span>
                        </div>
                        @endif
                        @if($invoice->taxAmount())
                        <div class="total-row">
                            <span>Tax:</span>
                            <span>@currency($invoice->taxAmount())</span>
                        </div>
                        @endif
                        <div class="total-row total-final">
                            <span>Total:</span>
                            <span>@currency($invoice->invoiceTotal())</span>
                        </div>
                        <div class="total-row">
                            <span>Paid:</span>
                            <span>@currency($invoice->invoiceTotalPaid())</span>
                        </div>
                        <div class="total-row">
                            <span>Due:</span>
                            <span>@currency($invoice->totalDue())</span>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="invoice-footer">
                    <p class="thank-you">{{ invoiceThankYouMessage() }}</p>
                </div>
            </div>
        </body>
        </html>';
    }

    private function getModernMinimalCSS()
    {
        return '
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Inter, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #374151;
            background: #ffffff;
        }

        .invoice-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            background: #ffffff;
        }

        .invoice-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e5e7eb;
        }

        .company-info {
            display: flex;
            align-items: flex-start;
            gap: 20px;
        }

        .logo-img {
            max-width: 80px;
            height: auto;
        }

        .company-name {
            font-size: 24px;
            font-weight: 700;
            color: #2563eb;
            margin-bottom: 8px;
        }

        .company-address {
            color: #6b7280;
            margin-bottom: 4px;
        }

        .company-contact {
            color: #6b7280;
            font-size: 13px;
        }

        .invoice-info {
            text-align: right;
        }

        .invoice-title {
            font-size: 32px;
            font-weight: 300;
            color: #1f2937;
            margin-bottom: 20px;
        }

        .invoice-details p {
            margin-bottom: 4px;
            color: #6b7280;
        }

        .client-section {
            margin-bottom: 30px;
        }

        .client-section h3 {
            font-size: 16px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 12px;
        }

        .client-name {
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 4px;
        }

        .client-company {
            font-size: 16px;
            color: #6b7280;
            margin-bottom: 4px;
        }

        .client-address {
            color: #6b7280;
            margin-bottom: 4px;
        }

        .client-contact {
            color: #6b7280;
            font-size: 13px;
        }

        .items-section {
            margin-bottom: 30px;
        }

        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .items-table th {
            background: #f8fafc;
            padding: 12px 16px;
            text-align: left;
            font-weight: 600;
            color: #374151;
            border-bottom: 1px solid #e5e7eb;
        }

        .items-table td {
            padding: 16px;
            border-bottom: 1px solid #f3f4f6;
        }

        .item-description {
            font-weight: 500;
        }

        .item-qty, .item-rate, .item-amount {
            text-align: right;
        }

        .totals-section {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 40px;
        }

        .totals-table {
            width: 300px;
        }

        .total-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #f3f4f6;
        }

        .total-final {
            font-weight: 700;
            font-size: 16px;
            color: #1f2937;
            border-top: 2px solid #e5e7eb;
            border-bottom: 2px solid #e5e7eb;
            margin-top: 8px;
            padding-top: 12px;
        }

        .invoice-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
        }

        .thank-you {
            font-style: italic;
            color: #6b7280;
        }';
    }

    // Placeholder methods for other templates
    private function getProfessionalCorporateTemplate()
    {
        return $this->getModernMinimalTemplate();
    }

    private function getProfessionalCorporateCSS()
    {
        return $this->getModernMinimalCSS();
    }

    private function getCreativeColorfulTemplate()
    {
        return $this->getModernMinimalTemplate();
    }

    private function getCreativeColorfulCSS()
    {
        return $this->getModernMinimalCSS();
    }

    private function getElegantClassicTemplate()
    {
        return $this->getModernMinimalTemplate();
    }

    private function getElegantClassicCSS()
    {
        return $this->getModernMinimalCSS();
    }

    private function getTechModernTemplate()
    {
        return $this->getModernMinimalTemplate();
    }

    private function getTechModernCSS()
    {
        return $this->getModernMinimalCSS();
    }
}

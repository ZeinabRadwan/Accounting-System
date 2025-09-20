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
        if ($this->command) {
            $this->command->info('Updating print templates...');
        }
        
        // Clear existing templates
        PrintTemplate::truncate();
        
        $this->createInvoiceTemplates();
        $this->createPurchaseTemplates();
        $this->createQuotationTemplates();
        $this->createExpenseTemplates();
        $this->createReportsTemplates();
        
        if ($this->command) {
            $this->command->info('Print templates updated successfully!');
        }
    }

    private function createInvoiceTemplates()
    {
        // Template 1: Saudi Professional (Default) - Traditional Layout
        PrintTemplate::create([
            'name' => 'saudi_professional',
            'module' => 'invoice',
            'template_key' => 'invoice_saudi_professional',
            'display_name' => 'Saudi Professional',
            'description' => 'Traditional professional layout with header, sidebar, and structured content',
            'is_default' => true,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#1e40af',
                    'secondary' => '#374151',
                    'accent' => '#f8fafc',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Cairo, Arial, sans-serif',
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
            ],
            'html_template' => $this->getSaudiProfessionalTemplate(),
            'css_styles' => $this->getSaudiProfessionalCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 1,
        ]);

        // Template 2: Saudi Corporate - Two Column Layout
        PrintTemplate::create([
            'name' => 'saudi_corporate',
            'module' => 'invoice',
            'template_key' => 'invoice_saudi_corporate',
            'display_name' => 'Saudi Corporate',
            'description' => 'Corporate two-column layout with company info on left, invoice details on right',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#0f172a',
                    'secondary' => '#475569',
                    'accent' => '#f1f5f9',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Tajawal, Arial, sans-serif',
                    'baseFontSize' => 13,
                    'headerFontSize' => 22
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 25
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getSaudiCorporateTemplate(),
            'css_styles' => $this->getSaudiCorporateCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 2,
        ]);

        // Template 3: Saudi Modern - Card-based Layout
        PrintTemplate::create([
            'name' => 'saudi_modern',
            'module' => 'invoice',
            'template_key' => 'invoice_saudi_modern',
            'display_name' => 'Saudi Modern',
            'description' => 'Modern card-based design with rounded corners and shadows',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#059669',
                    'secondary' => '#6b7280',
                    'accent' => '#ecfdf5',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'IBM Plex Sans Arabic, Arial, sans-serif',
                    'baseFontSize' => 14,
                    'headerFontSize' => 26
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 15
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getSaudiModernTemplate(),
            'css_styles' => $this->getSaudiModernCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 3,
        ]);

        // Template 4: Saudi Classic - Elegant Border Design
        PrintTemplate::create([
            'name' => 'saudi_classic',
            'module' => 'invoice',
            'template_key' => 'invoice_saudi_classic',
            'display_name' => 'Saudi Classic',
            'description' => 'Elegant design with decorative borders and classic typography',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#7c2d12',
                    'secondary' => '#374151',
                    'accent' => '#fef3c7',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Amiri, serif',
                    'baseFontSize' => 15,
                    'headerFontSize' => 28
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 30
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getSaudiClassicTemplate(),
            'css_styles' => $this->getSaudiClassicCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 4,
        ]);

        // Template 5: Saudi Minimal - Clean Single Column
        PrintTemplate::create([
            'name' => 'saudi_minimal',
            'module' => 'invoice',
            'template_key' => 'invoice_saudi_minimal',
            'display_name' => 'Saudi Minimal',
            'description' => 'Ultra-minimal single column design with maximum whitespace',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#1f2937',
                    'secondary' => '#6b7280',
                    'accent' => '#f9fafb',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Noto Sans Arabic, Arial, sans-serif',
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
            ],
            'html_template' => $this->getSaudiMinimalTemplate(),
            'css_styles' => $this->getSaudiMinimalCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 5,
        ]);
    }

    private function createPurchaseTemplates()
    {
        // Template 1: Saudi Professional (Default)
        PrintTemplate::create([
            'name' => 'saudi_professional',
            'module' => 'purchase',
            'template_key' => 'purchase_saudi_professional',
            'display_name' => 'Saudi Professional',
            'description' => 'Professional design for purchase orders with Saudi Arabian business standards',
            'is_default' => true,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#dc2626',
                    'secondary' => '#374151',
                    'accent' => '#fef2f2',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Cairo, Arial, sans-serif',
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
            ],
            'html_template' => $this->getPurchaseProfessionalTemplate(),
            'css_styles' => $this->getPurchaseProfessionalCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 1,
        ]);

        // Template 2: Saudi Corporate
        PrintTemplate::create([
            'name' => 'saudi_corporate',
            'module' => 'purchase',
            'template_key' => 'purchase_saudi_corporate',
            'display_name' => 'Saudi Corporate',
            'description' => 'Corporate design for purchase orders with structured layout',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#991b1b',
                    'secondary' => '#475569',
                    'accent' => '#f1f5f9',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Tajawal, Arial, sans-serif',
                    'baseFontSize' => 13,
                    'headerFontSize' => 22
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 25
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getPurchaseCorporateTemplate(),
            'css_styles' => $this->getPurchaseCorporateCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 2,
        ]);

        // Template 3: Saudi Modern
        PrintTemplate::create([
            'name' => 'saudi_modern',
            'module' => 'purchase',
            'template_key' => 'purchase_saudi_modern',
            'display_name' => 'Saudi Modern',
            'description' => 'Modern design for purchase orders with clean lines',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#b91c1c',
                    'secondary' => '#6b7280',
                    'accent' => '#ecfdf5',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'IBM Plex Sans Arabic, Arial, sans-serif',
                    'baseFontSize' => 14,
                    'headerFontSize' => 26
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 15
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getPurchaseModernTemplate(),
            'css_styles' => $this->getPurchaseModernCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 3,
        ]);

        // Template 4: Saudi Classic
        PrintTemplate::create([
            'name' => 'saudi_classic',
            'module' => 'purchase',
            'template_key' => 'purchase_saudi_classic',
            'display_name' => 'Saudi Classic',
            'description' => 'Classic design for purchase orders with traditional styling',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#7c2d12',
                    'secondary' => '#374151',
                    'accent' => '#fef3c7',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Amiri, serif',
                    'baseFontSize' => 15,
                    'headerFontSize' => 28
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 30
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getPurchaseClassicTemplate(),
            'css_styles' => $this->getPurchaseClassicCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 4,
        ]);

        // Template 5: Saudi Minimal
        PrintTemplate::create([
            'name' => 'saudi_minimal',
            'module' => 'purchase',
            'template_key' => 'purchase_saudi_minimal',
            'display_name' => 'Saudi Minimal',
            'description' => 'Minimalist design for purchase orders with focus on content',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#991b1b',
                    'secondary' => '#6b7280',
                    'accent' => '#f9fafb',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Noto Sans Arabic, Arial, sans-serif',
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
            ],
            'html_template' => $this->getPurchaseMinimalTemplate(),
            'css_styles' => $this->getPurchaseMinimalCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 5,
        ]);
    }

    private function createQuotationTemplates()
    {
        // Template 1: Saudi Professional (Default)
        PrintTemplate::create([
            'name' => 'saudi_professional',
            'module' => 'quotation',
            'template_key' => 'quotation_saudi_professional',
            'display_name' => 'Saudi Professional',
            'description' => 'Professional design for quotations with Saudi Arabian business standards',
            'is_default' => true,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#059669',
                    'secondary' => '#374151',
                    'accent' => '#f0f9ff',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Cairo, Arial, sans-serif',
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
            ],
            'html_template' => $this->getQuotationProfessionalTemplate(),
            'css_styles' => $this->getQuotationProfessionalCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 1,
        ]);

        // Template 2: Saudi Corporate
        PrintTemplate::create([
            'name' => 'saudi_corporate',
            'module' => 'quotation',
            'template_key' => 'quotation_saudi_corporate',
            'display_name' => 'Saudi Corporate',
            'description' => 'Corporate design for quotations with structured layout',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#0f172a',
                    'secondary' => '#475569',
                    'accent' => '#f1f5f9',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Tajawal, Arial, sans-serif',
                    'baseFontSize' => 13,
                    'headerFontSize' => 22
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 25
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getSaudiCorporateTemplate(),
            'css_styles' => $this->getSaudiCorporateCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 2,
        ]);

        // Template 3: Saudi Modern
        PrintTemplate::create([
            'name' => 'saudi_modern',
            'module' => 'quotation',
            'template_key' => 'quotation_saudi_modern',
            'display_name' => 'Saudi Modern',
            'description' => 'Modern design for quotations with clean lines',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#059669',
                    'secondary' => '#6b7280',
                    'accent' => '#ecfdf5',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'IBM Plex Sans Arabic, Arial, sans-serif',
                    'baseFontSize' => 14,
                    'headerFontSize' => 26
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 15
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getSaudiModernTemplate(),
            'css_styles' => $this->getSaudiModernCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 3,
        ]);

        // Template 4: Saudi Classic
        PrintTemplate::create([
            'name' => 'saudi_classic',
            'module' => 'quotation',
            'template_key' => 'quotation_saudi_classic',
            'display_name' => 'Saudi Classic',
            'description' => 'Classic design for quotations with traditional styling',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#7c2d12',
                    'secondary' => '#374151',
                    'accent' => '#fef3c7',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Amiri, serif',
                    'baseFontSize' => 15,
                    'headerFontSize' => 28
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 30
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getSaudiClassicTemplate(),
            'css_styles' => $this->getSaudiClassicCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 4,
        ]);

        // Template 5: Saudi Minimal
        PrintTemplate::create([
            'name' => 'saudi_minimal',
            'module' => 'quotation',
            'template_key' => 'quotation_saudi_minimal',
            'display_name' => 'Saudi Minimal',
            'description' => 'Minimalist design for quotations with focus on content',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#1f2937',
                    'secondary' => '#6b7280',
                    'accent' => '#f9fafb',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Noto Sans Arabic, Arial, sans-serif',
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
            ],
            'html_template' => $this->getSaudiMinimalTemplate(),
            'css_styles' => $this->getSaudiMinimalCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 5,
        ]);
    }

    private function createExpenseTemplates()
    {
        // Template 1: Saudi Professional (Default)
        PrintTemplate::create([
            'name' => 'saudi_professional',
            'module' => 'expense',
            'template_key' => 'expense_saudi_professional',
            'display_name' => 'Saudi Professional',
            'description' => 'Professional design for expense receipts with Saudi Arabian business standards',
            'is_default' => true,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#7c3aed',
                    'secondary' => '#374151',
                    'accent' => '#faf5ff',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Cairo, Arial, sans-serif',
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
            ],
            'html_template' => $this->getExpenseProfessionalTemplate(),
            'css_styles' => $this->getExpenseProfessionalCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 1,
        ]);

        // Template 2: Saudi Corporate
        PrintTemplate::create([
            'name' => 'saudi_corporate',
            'module' => 'expense',
            'template_key' => 'expense_saudi_corporate',
            'display_name' => 'Saudi Corporate',
            'description' => 'Corporate design for expense receipts with structured layout',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#6b21a8',
                    'secondary' => '#475569',
                    'accent' => '#f1f5f9',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Tajawal, Arial, sans-serif',
                    'baseFontSize' => 13,
                    'headerFontSize' => 22
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 25
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getExpenseCorporateTemplate(),
            'css_styles' => $this->getExpenseCorporateCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 2,
        ]);

        // Template 3: Saudi Modern
        PrintTemplate::create([
            'name' => 'saudi_modern',
            'module' => 'expense',
            'template_key' => 'expense_saudi_modern',
            'display_name' => 'Saudi Modern',
            'description' => 'Modern design for expense receipts with clean lines',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#8b5cf6',
                    'secondary' => '#6b7280',
                    'accent' => '#ecfdf5',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'IBM Plex Sans Arabic, Arial, sans-serif',
                    'baseFontSize' => 14,
                    'headerFontSize' => 26
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 15
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getExpenseModernTemplate(),
            'css_styles' => $this->getExpenseModernCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 3,
        ]);

        // Template 4: Saudi Classic
        PrintTemplate::create([
            'name' => 'saudi_classic',
            'module' => 'expense',
            'template_key' => 'expense_saudi_classic',
            'display_name' => 'Saudi Classic',
            'description' => 'Classic design for expense receipts with traditional styling',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#7c3aed',
                    'secondary' => '#374151',
                    'accent' => '#fef3c7',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Amiri, serif',
                    'baseFontSize' => 15,
                    'headerFontSize' => 28
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 30
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showClientInfo' => true,
                    'showItemsTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getExpenseClassicTemplate(),
            'css_styles' => $this->getExpenseClassicCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 4,
        ]);

        // Template 5: Saudi Minimal
        PrintTemplate::create([
            'name' => 'saudi_minimal',
            'module' => 'expense',
            'template_key' => 'expense_saudi_minimal',
            'display_name' => 'Saudi Minimal',
            'description' => 'Minimalist design for expense receipts with focus on content',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#7c3aed',
                    'secondary' => '#6b7280',
                    'accent' => '#f9fafb',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Noto Sans Arabic, Arial, sans-serif',
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
            ],
            'html_template' => $this->getExpenseMinimalTemplate(),
            'css_styles' => $this->getExpenseMinimalCSS(),
            'preview_data' => $this->getSaudiPreviewData(),
            'sort_order' => 5,
        ]);
    }

    // Saudi Preview Data
    private function getSaudiPreviewData()
    {
        return [
            'document_no' => 'INV-2024-001',
            'client' => [
                'name' => 'أحمد محمد العلي',
                'name_en' => 'Ahmed Mohammed Al-Ali',
                'company_name' => 'شركة الرياض التجارية',
                'company_name_en' => 'Riyadh Trading Company',
                'email' => 'ahmed@riyadhtrading.com',
                'phone' => '+966 50 123 4567',
                'address' => 'شارع الملك فهد، الرياض 12345',
                'address_en' => 'King Fahd Road, Riyadh 12345',
                'vat_number' => '123456789012345'
            ],
            'company' => [
                'name' => 'شركة المحاسبة المتقدمة',
                'name_en' => 'Advanced Accounting Company',
                'email' => 'info@advancedaccounting.com',
                'phone' => '+966 11 234 5678',
                'address' => 'شارع التحلية، جدة 21432',
                'address_en' => 'Tahlia Street, Jeddah 21432',
                'vat_number' => '987654321098765',
                'commercial_register' => '1010123456'
            ],
            'document_date' => '2024-01-15',
            'due_date' => '2024-02-15',
            'sub_total' => 1000.00,
            'vat_amount' => 150.00,
            'total' => 1150.00,
            'items' => [
                [
                    'name' => 'خدمات استشارية',
                    'name_en' => 'Consulting Services',
                    'quantity' => 10,
                    'price' => 100.00,
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

    // Saudi Professional Template - Traditional Layout
    private function getSaudiProfessionalTemplate()
    {
        return '
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>فاتورة ضريبية</title>
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet">
        </head>
        <body>
            <div class="document-container">
                <!-- Header with Logo and Company Info -->
                <div class="header-section">
                    <div class="company-branding">
                        <div class="logo-container">
                            <img src="{{ $companyLogo }}" alt="شعار الشركة" class="company-logo">
                        </div>
                        <div class="company-details">
                            <h1 class="company-name">{{ $companyName }}</h1>
                            <div class="company-meta">
                                <p class="company-address">{{ $companyAddress }}</p>
                                <p class="company-contact">{{ $companyPhone }} • {{ $companyEmail }}</p>
                                <p class="vat-number">الرقم الضريبي: {{ $companyVatNumber }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="invoice-header">
                        <h2 class="invoice-title">فاتورة ضريبية</h2>
                        <div class="invoice-meta">
                            <div class="meta-item">
                                <span class="meta-label">رقم الفاتورة:</span>
                                <span class="meta-value">{{ $documentNumber }}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">التاريخ:</span>
                                <span class="meta-value">{{ $documentDate }}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">تاريخ الاستحقاق:</span>
                                <span class="meta-value">{{ $dueDate }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Client Information Sidebar -->
                <div class="content-layout">
                    <div class="client-sidebar">
                        <h3 class="sidebar-title">بيانات العميل</h3>
                        <div class="client-card">
                            <div class="client-name">{{ $clientName }}</div>
                            <div class="client-company">{{ $clientCompany }}</div>
                            <div class="client-address">{{ $clientAddress }}</div>
                            <div class="client-contact">{{ $clientPhone }} • {{ $clientEmail }}</div>
                            <div class="client-vat">الرقم الضريبي: {{ $clientVatNumber }}</div>
                        </div>
                    </div>

                    <!-- Main Content -->
                    <div class="main-content">
                        <!-- Items Table -->
                        <div class="items-section">
                            <table class="items-table">
                                <thead>
                                    <tr>
                                        <th class="col-description">الوصف</th>
                                        <th class="col-qty">الكمية</th>
                                        <th class="col-price">السعر</th>
                                        <th class="col-total">المجموع</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($items as $item)
                                    <tr>
                                        <td class="item-description">{{ $item["name"] }}</td>
                                        <td class="item-qty">{{ $item["quantity"] }}</td>
                                        <td class="item-price">{{ number_format($item["price"], 2) }} ريال</td>
                                        <td class="item-total">{{ number_format($item["total"], 2) }} ريال</td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                        <!-- Totals Section -->
                        <div class="totals-section">
                            <div class="totals-card">
                                <div class="total-row">
                                    <span class="total-label">المجموع الفرعي:</span>
                                    <span class="total-value">{{ number_format($subTotal, 2) }} ريال</span>
                                </div>
                                <div class="total-row">
                                    <span class="total-label">ضريبة القيمة المضافة (15%):</span>
                                    <span class="total-value">{{ number_format($vatAmount, 2) }} ريال</span>
                                </div>
                                <div class="total-row total-final">
                                    <span class="total-label">المجموع الكلي:</span>
                                    <span class="total-value">{{ number_format($total, 2) }} ريال</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="document-footer">
                    <div class="footer-content">
                        <p class="thank-you">شكراً لتعاملكم معنا</p>
                        <p class="footer-note">هذه فاتورة ضريبية صالحة</p>
                    </div>
                </div>
            </div>
        </body>
        </html>';
    }

    private function getSaudiProfessionalCSS()
    {
        return '
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Cairo", Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #374151;
            background: #ffffff;
            direction: rtl;
        }

        .document-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 30px;
            background: #ffffff;
        }

        .header-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #1e40af;
        }

        .company-branding {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .logo-container {
            flex-shrink: 0;
        }

        .company-logo {
            max-width: 70px;
            height: auto;
        }

        .company-name {
            font-size: 22px;
            font-weight: 700;
            color: #1e40af;
            margin-bottom: 8px;
        }

        .company-meta p {
            margin-bottom: 3px;
            color: #6b7280;
            font-size: 13px;
        }

        .vat-number {
            color: #1e40af;
            font-weight: 600;
            font-size: 12px;
        }

        .invoice-header {
            text-align: left;
        }

        .invoice-title {
            font-size: 28px;
            font-weight: 700;
            color: #1e40af;
            margin-bottom: 15px;
        }

        .invoice-meta {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .meta-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-width: 200px;
        }

        .meta-label {
            color: #6b7280;
            font-size: 13px;
        }

        .meta-value {
            color: #1f2937;
            font-weight: 600;
            font-size: 13px;
        }

        .content-layout {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
        }

        .client-sidebar {
            width: 250px;
            flex-shrink: 0;
        }

        .sidebar-title {
            font-size: 16px;
            font-weight: 600;
            color: #1e40af;
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 2px solid #1e40af;
        }

        .client-card {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }

        .client-card > div {
            margin-bottom: 8px;
            font-size: 13px;
        }

        .client-name {
            font-weight: 600;
            color: #1f2937;
            font-size: 15px;
        }

        .client-company {
            color: #6b7280;
        }

        .client-address {
            color: #6b7280;
        }

        .client-contact {
            color: #6b7280;
        }

        .client-vat {
            color: #1e40af;
            font-weight: 600;
            font-size: 12px;
        }

        .main-content {
            flex: 1;
        }

        .items-section {
            margin-bottom: 20px;
        }

        .items-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #e5e7eb;
        }

        .items-table th {
            background: #1e40af;
            color: white;
            padding: 12px 10px;
            text-align: center;
            font-weight: 600;
            font-size: 13px;
        }

        .col-description { width: 50%; }
        .col-qty { width: 15%; }
        .col-price { width: 17.5%; }
        .col-total { width: 17.5%; }

        .items-table td {
            padding: 12px 10px;
            border-bottom: 1px solid #e5e7eb;
            text-align: center;
            font-size: 13px;
        }

        .item-description {
            text-align: right;
            font-weight: 500;
        }

        .totals-section {
            display: flex;
            justify-content: flex-end;
        }

        .totals-card {
            width: 280px;
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }

        .total-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
            font-size: 13px;
        }

        .total-final {
            font-weight: 700;
            font-size: 15px;
            color: #1e40af;
            border-top: 2px solid #1e40af;
            border-bottom: 2px solid #1e40af;
            margin-top: 8px;
            padding-top: 12px;
        }

        .document-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
        }

        .thank-you {
            font-style: italic;
            color: #6b7280;
            font-size: 15px;
            margin-bottom: 5px;
        }

        .footer-note {
            color: #1e40af;
            font-weight: 600;
            font-size: 12px;
        }';
    }

    // Saudi Corporate Template - Two Column Layout
    private function getSaudiCorporateTemplate()
    {
        return '
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>فاتورة ضريبية</title>
            <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;600;700&display=swap" rel="stylesheet">
        </head>
        <body>
            <div class="document-container">
                <!-- Two Column Header -->
                <div class="two-column-header">
                    <div class="left-column">
                        <div class="company-section">
                            <div class="company-logo">
                                <img src="{{ $companyLogo }}" alt="شعار الشركة" class="logo-img">
                            </div>
                            <div class="company-info">
                                <h1 class="company-name">{{ $companyName }}</h1>
                                <div class="company-details">
                                    <p class="company-address">{{ $companyAddress }}</p>
                                    <p class="company-contact">{{ $companyPhone }} • {{ $companyEmail }}</p>
                                    <p class="vat-info">الرقم الضريبي: {{ $companyVatNumber }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-column">
                        <div class="invoice-section">
                            <h2 class="invoice-title">فاتورة ضريبية</h2>
                            <div class="invoice-details">
                                <div class="detail-row">
                                    <span class="detail-label">رقم الفاتورة:</span>
                                    <span class="detail-value">{{ $documentNumber }}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">التاريخ:</span>
                                    <span class="detail-value">{{ $documentDate }}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">تاريخ الاستحقاق:</span>
                                    <span class="detail-value">{{ $dueDate }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Two Column Content -->
                <div class="two-column-content">
                    <div class="left-content">
                        <div class="client-section">
                            <h3 class="section-title">بيانات العميل</h3>
                            <div class="client-info">
                                <div class="info-group">
                                    <label>الاسم:</label>
                                    <span>{{ $clientName }}</span>
                                </div>
                                <div class="info-group">
                                    <label>الشركة:</label>
                                    <span>{{ $clientCompany }}</span>
                                </div>
                                <div class="info-group">
                                    <label>العنوان:</label>
                                    <span>{{ $clientAddress }}</span>
                                </div>
                                <div class="info-group">
                                    <label>التواصل:</label>
                                    <span>{{ $clientPhone }} • {{ $clientEmail }}</span>
                                </div>
                                <div class="info-group">
                                    <label>الرقم الضريبي:</label>
                                    <span>{{ $clientVatNumber }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-content">
                        <div class="items-section">
                            <h3 class="section-title">تفاصيل الفاتورة</h3>
                            <table class="items-table">
                                <thead>
                                    <tr>
                                        <th>الوصف</th>
                                        <th>الكمية</th>
                                        <th>السعر</th>
                                        <th>المجموع</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($items as $item)
                                    <tr>
                                        <td class="item-desc">{{ $item["name"] }}</td>
                                        <td class="item-qty">{{ $item["quantity"] }}</td>
                                        <td class="item-price">{{ number_format($item["price"], 2) }} ريال</td>
                                        <td class="item-total">{{ number_format($item["total"], 2) }} ريال</td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Totals Section -->
                <div class="totals-section">
                    <div class="totals-container">
                        <div class="totals-grid">
                            <div class="total-item">
                                <span class="total-label">المجموع الفرعي:</span>
                                <span class="total-value">{{ number_format($subTotal, 2) }} ريال</span>
                            </div>
                            <div class="total-item">
                                <span class="total-label">ضريبة القيمة المضافة (15%):</span>
                                <span class="total-value">{{ number_format($vatAmount, 2) }} ريال</span>
                            </div>
                            <div class="total-item total-final">
                                <span class="total-label">المجموع الكلي:</span>
                                <span class="total-value">{{ number_format($total, 2) }} ريال</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="document-footer">
                    <div class="footer-text">
                        <p class="thank-you">شكراً لتعاملكم معنا</p>
                        <p class="footer-note">هذه فاتورة ضريبية صالحة</p>
                    </div>
                </div>
            </div>
        </body>
        </html>';
    }

    private function getSaudiCorporateCSS()
    {
        return '
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Tajawal", Arial, sans-serif;
            font-size: 13px;
            line-height: 1.5;
            color: #374151;
            background: #ffffff;
            direction: rtl;
        }

        .document-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 25px;
            background: #ffffff;
        }

        .two-column-header {
            display: flex;
            gap: 30px;
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 2px solid #0f172a;
        }

        .left-column {
            flex: 1;
        }

        .right-column {
            flex: 1;
        }

        .company-section {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .logo-img {
            max-width: 60px;
            height: auto;
        }

        .company-name {
            font-size: 20px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 8px;
        }

        .company-details p {
            margin-bottom: 3px;
            color: #475569;
            font-size: 12px;
        }

        .vat-info {
            color: #0f172a;
            font-weight: 600;
            font-size: 11px;
        }

        .invoice-section {
            text-align: left;
        }

        .invoice-title {
            font-size: 24px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 15px;
        }

        .invoice-details {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 0;
            border-bottom: 1px solid #e5e7eb;
        }

        .detail-label {
            color: #475569;
            font-size: 12px;
        }

        .detail-value {
            color: #0f172a;
            font-weight: 600;
            font-size: 12px;
        }

        .two-column-content {
            display: flex;
            gap: 30px;
            margin-bottom: 25px;
        }

        .left-content {
            flex: 1;
        }

        .right-content {
            flex: 1;
        }

        .section-title {
            font-size: 16px;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 12px;
            padding-bottom: 5px;
            border-bottom: 1px solid #0f172a;
        }

        .client-info {
            background: #f1f5f9;
            padding: 15px;
            border-radius: 6px;
        }

        .info-group {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 12px;
        }

        .info-group label {
            color: #475569;
            font-weight: 600;
        }

        .info-group span {
            color: #0f172a;
        }

        .items-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #e5e7eb;
        }

        .items-table th {
            background: #0f172a;
            color: white;
            padding: 10px 8px;
            text-align: center;
            font-weight: 600;
            font-size: 12px;
        }

        .items-table td {
            padding: 10px 8px;
            border-bottom: 1px solid #e5e7eb;
            text-align: center;
            font-size: 12px;
        }

        .item-desc {
            text-align: right;
            font-weight: 500;
        }

        .totals-section {
            margin-bottom: 25px;
        }

        .totals-container {
            display: flex;
            justify-content: flex-end;
        }

        .totals-grid {
            width: 300px;
            background: #f1f5f9;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }

        .total-item {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px solid #e5e7eb;
            font-size: 12px;
        }

        .total-final {
            font-weight: 700;
            font-size: 14px;
            color: #0f172a;
            border-top: 2px solid #0f172a;
            border-bottom: 2px solid #0f172a;
            margin-top: 6px;
            padding-top: 10px;
        }

        .document-footer {
            text-align: center;
            padding-top: 15px;
            border-top: 1px solid #e5e7eb;
        }

        .thank-you {
            font-style: italic;
            color: #475569;
            font-size: 14px;
            margin-bottom: 5px;
        }

        .footer-note {
            color: #0f172a;
            font-weight: 600;
            font-size: 11px;
        }';
    }

    // Saudi Modern Template - Card-based Layout
    private function getSaudiModernTemplate()
    {
        return '
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>فاتورة ضريبية</title>
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;600;700&display=swap" rel="stylesheet">
        </head>
        <body>
            <div class="document-container">
                <!-- Header Card -->
                <div class="header-card">
                    <div class="company-info">
                        <div class="logo-section">
                            <img src="{{ $companyLogo }}" alt="شعار الشركة" class="company-logo">
                        </div>
                        <div class="company-details">
                            <h1 class="company-name">{{ $companyName }}</h1>
                            <p class="company-address">{{ $companyAddress }}</p>
                            <p class="company-contact">{{ $companyPhone }} • {{ $companyEmail }}</p>
                            <p class="vat-info">الرقم الضريبي: {{ $companyVatNumber }}</p>
                        </div>
                    </div>
                    <div class="invoice-info">
                        <h2 class="invoice-title">فاتورة ضريبية</h2>
                        <div class="invoice-meta">
                            <div class="meta-card">
                                <span class="meta-label">رقم الفاتورة</span>
                                <span class="meta-value">{{ $documentNumber }}</span>
                            </div>
                            <div class="meta-card">
                                <span class="meta-label">التاريخ</span>
                                <span class="meta-value">{{ $documentDate }}</span>
                            </div>
                            <div class="meta-card">
                                <span class="meta-label">تاريخ الاستحقاق</span>
                                <span class="meta-value">{{ $dueDate }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Client Card -->
                <div class="client-card">
                    <h3 class="card-title">بيانات العميل</h3>
                    <div class="client-details">
                        <div class="detail-item">
                            <span class="detail-label">الاسم:</span>
                            <span class="detail-value">{{ $clientName }}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">الشركة:</span>
                            <span class="detail-value">{{ $clientCompany }}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">العنوان:</span>
                            <span class="detail-value">{{ $clientAddress }}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">التواصل:</span>
                            <span class="detail-value">{{ $clientPhone }} • {{ $clientEmail }}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">الرقم الضريبي:</span>
                            <span class="detail-value">{{ $clientVatNumber }}</span>
                        </div>
                    </div>
                </div>

                <!-- Items Card -->
                <div class="items-card">
                    <h3 class="card-title">تفاصيل الفاتورة</h3>
                    <div class="table-container">
                        <table class="items-table">
                            <thead>
                                <tr>
                                    <th>الوصف</th>
                                    <th>الكمية</th>
                                    <th>السعر</th>
                                    <th>المجموع</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($items as $item)
                                <tr>
                                    <td class="item-desc">{{ $item["name"] }}</td>
                                    <td class="item-qty">{{ $item["quantity"] }}</td>
                                    <td class="item-price">{{ number_format($item["price"], 2) }} ريال</td>
                                    <td class="item-total">{{ number_format($item["total"], 2) }} ريال</td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Totals Card -->
                <div class="totals-card">
                    <div class="totals-content">
                        <div class="total-row">
                            <span class="total-label">المجموع الفرعي:</span>
                            <span class="total-value">{{ number_format($subTotal, 2) }} ريال</span>
                        </div>
                        <div class="total-row">
                            <span class="total-label">ضريبة القيمة المضافة (15%):</span>
                            <span class="total-value">{{ number_format($vatAmount, 2) }} ريال</span>
                        </div>
                        <div class="total-row total-final">
                            <span class="total-label">المجموع الكلي:</span>
                            <span class="total-value">{{ number_format($total, 2) }} ريال</span>
                        </div>
                    </div>
                </div>

                <!-- Footer Card -->
                <div class="footer-card">
                    <p class="thank-you">شكراً لتعاملكم معنا</p>
                    <p class="footer-note">هذه فاتورة ضريبية صالحة</p>
                </div>
            </div>
        </body>
        </html>';
    }

    private function getSaudiModernCSS()
    {
        return '
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "IBM Plex Sans Arabic", Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #374151;
            background: #f8fafc;
            direction: rtl;
        }

        .document-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 15px;
            background: #f8fafc;
        }

        .header-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e5e7eb;
        }

        .company-info {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 20px;
        }

        .company-logo {
            max-width: 80px;
            height: auto;
            border-radius: 12px;
        }

        .company-name {
            font-size: 26px;
            font-weight: 700;
            color: #059669;
            margin-bottom: 8px;
        }

        .company-details p {
            margin-bottom: 4px;
            color: #6b7280;
            font-size: 14px;
        }

        .vat-info {
            color: #059669;
            font-weight: 600;
            font-size: 12px;
        }

        .invoice-info {
            text-align: left;
        }

        .invoice-title {
            font-size: 32px;
            font-weight: 700;
            color: #059669;
            margin-bottom: 20px;
        }

        .invoice-meta {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }

        .meta-card {
            background: #ecfdf5;
            padding: 12px 16px;
            border-radius: 12px;
            border: 1px solid #d1fae5;
            text-align: center;
            min-width: 120px;
        }

        .meta-label {
            display: block;
            color: #6b7280;
            font-size: 12px;
            margin-bottom: 4px;
        }

        .meta-value {
            display: block;
            color: #059669;
            font-weight: 600;
            font-size: 14px;
        }

        .client-card, .items-card, .totals-card, .footer-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e5e7eb;
        }

        .card-title {
            font-size: 18px;
            font-weight: 600;
            color: #059669;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid #ecfdf5;
        }

        .client-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 12px;
        }

        .detail-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
        }

        .detail-label {
            color: #6b7280;
            font-weight: 500;
            font-size: 13px;
        }

        .detail-value {
            color: #1f2937;
            font-weight: 600;
            font-size: 13px;
        }

        .table-container {
            overflow-x: auto;
        }

        .items-table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e5e7eb;
        }

        .items-table th {
            background: #059669;
            color: white;
            padding: 15px 12px;
            text-align: center;
            font-weight: 600;
            font-size: 14px;
        }

        .items-table td {
            padding: 15px 12px;
            border-bottom: 1px solid #f3f4f6;
            text-align: center;
            font-size: 14px;
        }

        .item-desc {
            text-align: right;
            font-weight: 500;
        }

        .totals-content {
            max-width: 400px;
            margin-left: auto;
        }

        .total-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #f3f4f6;
            font-size: 14px;
        }

        .total-final {
            font-weight: 700;
            font-size: 16px;
            color: #059669;
            border-top: 2px solid #059669;
            border-bottom: 2px solid #059669;
            margin-top: 8px;
            padding-top: 15px;
        }

        .footer-card {
            text-align: center;
            background: #ecfdf5;
            border: 1px solid #d1fae5;
        }

        .thank-you {
            font-style: italic;
            color: #6b7280;
            font-size: 16px;
            margin-bottom: 8px;
        }

        .footer-note {
            color: #059669;
            font-weight: 600;
            font-size: 12px;
        }';
    }

    // Saudi Classic Template - Elegant Border Design
    private function getSaudiClassicTemplate()
    {
        return '
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>فاتورة ضريبية</title>
            <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet">
        </head>
        <body>
            <div class="document-container">
                <!-- Decorative Header -->
                <div class="decorative-header">
                    <div class="header-border">
                        <div class="company-section">
                            <div class="company-logo">
                                <img src="{{ $companyLogo }}" alt="شعار الشركة" class="logo-img">
                            </div>
                            <div class="company-info">
                                <h1 class="company-name">{{ $companyName }}</h1>
                                <div class="company-details">
                                    <p class="company-address">{{ $companyAddress }}</p>
                                    <p class="company-contact">{{ $companyPhone }} • {{ $companyEmail }}</p>
                                    <p class="vat-info">الرقم الضريبي: {{ $companyVatNumber }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="invoice-section">
                            <h2 class="invoice-title">فاتورة ضريبية</h2>
                            <div class="invoice-details">
                                <div class="detail-line">
                                    <span class="detail-label">رقم الفاتورة:</span>
                                    <span class="detail-value">{{ $documentNumber }}</span>
                                </div>
                                <div class="detail-line">
                                    <span class="detail-label">التاريخ:</span>
                                    <span class="detail-value">{{ $documentDate }}</span>
                                </div>
                                <div class="detail-line">
                                    <span class="detail-label">تاريخ الاستحقاق:</span>
                                    <span class="detail-value">{{ $dueDate }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Client Section with Border -->
                <div class="bordered-section">
                    <h3 class="section-title">بيانات العميل</h3>
                    <div class="client-info">
                        <div class="info-line">
                            <span class="info-label">الاسم:</span>
                            <span class="info-value">{{ $clientName }}</span>
                        </div>
                        <div class="info-line">
                            <span class="info-label">الشركة:</span>
                            <span class="info-value">{{ $clientCompany }}</span>
                        </div>
                        <div class="info-line">
                            <span class="info-label">العنوان:</span>
                            <span class="info-value">{{ $clientAddress }}</span>
                        </div>
                        <div class="info-line">
                            <span class="info-label">التواصل:</span>
                            <span class="info-value">{{ $clientPhone }} • {{ $clientEmail }}</span>
                        </div>
                        <div class="info-line">
                            <span class="info-label">الرقم الضريبي:</span>
                            <span class="info-value">{{ $clientVatNumber }}</span>
                        </div>
                    </div>
                </div>

                <!-- Items Table with Decorative Border -->
                <div class="bordered-section">
                    <h3 class="section-title">تفاصيل الفاتورة</h3>
                    <div class="table-wrapper">
                        <table class="items-table">
                            <thead>
                                <tr>
                                    <th>الوصف</th>
                                    <th>الكمية</th>
                                    <th>السعر</th>
                                    <th>المجموع</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($items as $item)
                                <tr>
                                    <td class="item-desc">{{ $item["name"] }}</td>
                                    <td class="item-qty">{{ $item["quantity"] }}</td>
                                    <td class="item-price">{{ number_format($item["price"], 2) }} ريال</td>
                                    <td class="item-total">{{ number_format($item["total"], 2) }} ريال</td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Totals Section -->
                <div class="totals-section">
                    <div class="totals-wrapper">
                        <div class="total-line">
                            <span class="total-label">المجموع الفرعي:</span>
                            <span class="total-value">{{ number_format($subTotal, 2) }} ريال</span>
                        </div>
                        <div class="total-line">
                            <span class="total-label">ضريبة القيمة المضافة (15%):</span>
                            <span class="total-value">{{ number_format($vatAmount, 2) }} ريال</span>
                        </div>
                        <div class="total-line total-final">
                            <span class="total-label">المجموع الكلي:</span>
                            <span class="total-value">{{ number_format($total, 2) }} ريال</span>
                        </div>
                    </div>
                </div>

                <!-- Decorative Footer -->
                <div class="decorative-footer">
                    <div class="footer-border">
                        <p class="thank-you">شكراً لتعاملكم معنا</p>
                        <p class="footer-note">هذه فاتورة ضريبية صالحة</p>
                    </div>
                </div>
            </div>
        </body>
        </html>';
    }

    private function getSaudiClassicCSS()
    {
        return '
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Amiri", serif;
            font-size: 15px;
            line-height: 1.7;
            color: #374151;
            background: #ffffff;
            direction: rtl;
        }

        .document-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 30px;
            background: #ffffff;
        }

        .decorative-header {
            margin-bottom: 30px;
        }

        .header-border {
            border: 3px solid #7c2d12;
            border-radius: 8px;
            padding: 25px;
            background: #fef3c7;
        }

        .company-section {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 20px;
        }

        .logo-img {
            max-width: 70px;
            height: auto;
            border-radius: 4px;
        }

        .company-name {
            font-size: 28px;
            font-weight: 700;
            color: #7c2d12;
            margin-bottom: 10px;
        }

        .company-details p {
            margin-bottom: 5px;
            color: #6b7280;
            font-size: 14px;
        }

        .vat-info {
            color: #7c2d12;
            font-weight: 600;
            font-size: 13px;
        }

        .invoice-section {
            text-align: left;
        }

        .invoice-title {
            font-size: 32px;
            font-weight: 700;
            color: #7c2d12;
            margin-bottom: 20px;
            text-align: center;
        }

        .invoice-details {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
        }

        .detail-line {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .detail-label {
            color: #6b7280;
            font-size: 13px;
            margin-bottom: 5px;
        }

        .detail-value {
            color: #7c2d12;
            font-weight: 600;
            font-size: 14px;
        }

        .bordered-section {
            border: 2px solid #7c2d12;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 25px;
            background: #fef3c7;
        }

        .section-title {
            font-size: 18px;
            font-weight: 700;
            color: #7c2d12;
            margin-bottom: 15px;
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 2px solid #7c2d12;
        }

        .client-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
        }

        .info-line {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid #d97706;
        }

        .info-label {
            color: #6b7280;
            font-weight: 600;
            font-size: 14px;
        }

        .info-value {
            color: #1f2937;
            font-weight: 500;
            font-size: 14px;
        }

        .table-wrapper {
            overflow-x: auto;
        }

        .items-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #7c2d12;
        }

        .items-table th {
            background: #7c2d12;
            color: white;
            padding: 15px 12px;
            text-align: center;
            font-weight: 600;
            font-size: 15px;
        }

        .items-table td {
            padding: 15px 12px;
            border-bottom: 1px solid #d97706;
            text-align: center;
            font-size: 14px;
        }

        .item-desc {
            text-align: right;
            font-weight: 500;
        }

        .totals-section {
            margin-bottom: 30px;
        }

        .totals-wrapper {
            max-width: 400px;
            margin-left: auto;
            border: 2px solid #7c2d12;
            border-radius: 6px;
            padding: 20px;
            background: #fef3c7;
        }

        .total-line {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #d97706;
            font-size: 15px;
        }

        .total-final {
            font-weight: 700;
            font-size: 17px;
            color: #7c2d12;
            border-top: 2px solid #7c2d12;
            border-bottom: 2px solid #7c2d12;
            margin-top: 10px;
            padding-top: 15px;
        }

        .decorative-footer {
            margin-top: 30px;
        }

        .footer-border {
            border: 2px solid #7c2d12;
            border-radius: 6px;
            padding: 20px;
            text-align: center;
            background: #fef3c7;
        }

        .thank-you {
            font-style: italic;
            color: #6b7280;
            font-size: 17px;
            margin-bottom: 8px;
        }

        .footer-note {
            color: #7c2d12;
            font-weight: 600;
            font-size: 13px;
        }';
    }

    // Saudi Minimal Template - Clean Single Column
    private function getSaudiMinimalTemplate()
    {
        return '
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>فاتورة ضريبية</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;600;700&display=swap" rel="stylesheet">
        </head>
        <body>
            <div class="document-container">
                <!-- Minimal Header -->
                <div class="minimal-header">
                    <div class="company-info">
                        <h1 class="company-name">{{ $companyName }}</h1>
                        <p class="company-address">{{ $companyAddress }}</p>
                        <p class="company-contact">{{ $companyPhone }} • {{ $companyEmail }}</p>
                        <p class="vat-info">الرقم الضريبي: {{ $companyVatNumber }}</p>
                    </div>
                    <div class="invoice-info">
                        <h2 class="invoice-title">فاتورة ضريبية</h2>
                        <div class="invoice-meta">
                            <span class="meta-item">رقم: {{ $documentNumber }}</span>
                            <span class="meta-item">التاريخ: {{ $documentDate }}</span>
                            <span class="meta-item">الاستحقاق: {{ $dueDate }}</span>
                        </div>
                    </div>
                </div>

                <!-- Client Information -->
                <div class="client-section">
                    <h3 class="section-title">بيانات العميل</h3>
                    <div class="client-details">
                        <p><strong>{{ $clientName }}</strong></p>
                        <p>{{ $clientCompany }}</p>
                        <p>{{ $clientAddress }}</p>
                        <p>{{ $clientPhone }} • {{ $clientEmail }}</p>
                        <p>الرقم الضريبي: {{ $clientVatNumber }}</p>
                    </div>
                </div>

                <!-- Items Table -->
                <div class="items-section">
                    <table class="items-table">
                        <thead>
                            <tr>
                                <th>الوصف</th>
                                <th>الكمية</th>
                                <th>السعر</th>
                                <th>المجموع</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($items as $item)
                            <tr>
                                <td class="item-desc">{{ $item["name"] }}</td>
                                <td class="item-qty">{{ $item["quantity"] }}</td>
                                <td class="item-price">{{ number_format($item["price"], 2) }} ريال</td>
                                <td class="item-total">{{ number_format($item["total"], 2) }} ريال</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                <!-- Totals -->
                <div class="totals-section">
                    <div class="totals-table">
                        <div class="total-row">
                            <span class="total-label">المجموع الفرعي:</span>
                            <span class="total-value">{{ number_format($subTotal, 2) }} ريال</span>
                        </div>
                        <div class="total-row">
                            <span class="total-label">ضريبة القيمة المضافة (15%):</span>
                            <span class="total-value">{{ number_format($vatAmount, 2) }} ريال</span>
                        </div>
                        <div class="total-row total-final">
                            <span class="total-label">المجموع الكلي:</span>
                            <span class="total-value">{{ number_format($total, 2) }} ريال</span>
                        </div>
                    </div>
                </div>

                <!-- Minimal Footer -->
                <div class="minimal-footer">
                    <p class="thank-you">شكراً لتعاملكم معنا</p>
                    <p class="footer-note">هذه فاتورة ضريبية صالحة</p>
                </div>
            </div>
        </body>
        </html>';
    }

    private function getSaudiMinimalCSS()
    {
        return '
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Noto Sans Arabic", Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #1f2937;
            background: #ffffff;
            direction: rtl;
        }

        .document-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            background: #ffffff;
        }

        .minimal-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e5e7eb;
        }

        .company-name {
            font-size: 24px;
            font-weight: 700;
            color: #1f2937;
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

        .vat-info {
            color: #1f2937;
            font-weight: 600;
            font-size: 12px;
            margin-top: 8px;
        }

        .invoice-info {
            text-align: left;
        }

        .invoice-title {
            font-size: 28px;
            font-weight: 300;
            color: #1f2937;
            margin-bottom: 15px;
        }

        .invoice-meta {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .meta-item {
            color: #6b7280;
            font-size: 13px;
        }

        .client-section {
            margin-bottom: 30px;
        }

        .section-title {
            font-size: 16px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 12px;
            padding-bottom: 4px;
            border-bottom: 1px solid #e5e7eb;
        }

        .client-details p {
            margin-bottom: 6px;
            color: #6b7280;
            font-size: 14px;
        }

        .client-details p:first-child {
            color: #1f2937;
            font-weight: 600;
            font-size: 16px;
        }

        .items-section {
            margin-bottom: 30px;
        }

        .items-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #e5e7eb;
        }

        .items-table th {
            background: #f9fafb;
            color: #1f2937;
            padding: 12px 16px;
            text-align: center;
            font-weight: 600;
            font-size: 13px;
            border-bottom: 1px solid #e5e7eb;
        }

        .items-table td {
            padding: 16px;
            border-bottom: 1px solid #f3f4f6;
            text-align: center;
            font-size: 14px;
        }

        .item-desc {
            text-align: right;
            font-weight: 500;
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
            font-size: 14px;
        }

        .total-final {
            font-weight: 700;
            font-size: 16px;
            color: #1f2937;
            border-top: 2px solid #1f2937;
            border-bottom: 2px solid #1f2937;
            margin-top: 8px;
            padding-top: 12px;
        }

        .minimal-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
        }

        .thank-you {
            font-style: italic;
            color: #6b7280;
            font-size: 15px;
            margin-bottom: 6px;
        }

        .footer-note {
            color: #1f2937;
            font-weight: 600;
            font-size: 12px;
        }';
    }

    // Purchase-specific template methods
    private function getPurchaseProfessionalTemplate()
    {
        return str_replace('فاتورة ضريبية', 'أمر شراء', $this->getSaudiProfessionalTemplate());
    }

    private function getPurchaseProfessionalCSS()
    {
        return str_replace('#1e40af', '#dc2626', $this->getSaudiProfessionalCSS());
    }

    private function getPurchaseCorporateTemplate()
    {
        return str_replace('فاتورة ضريبية', 'أمر شراء', $this->getSaudiCorporateTemplate());
    }

    private function getPurchaseCorporateCSS()
    {
        return str_replace('#0f172a', '#991b1b', $this->getSaudiCorporateCSS());
    }

    private function getPurchaseModernTemplate()
    {
        return str_replace('فاتورة ضريبية', 'أمر شراء', $this->getSaudiModernTemplate());
    }

    private function getPurchaseModernCSS()
    {
        return str_replace('#059669', '#b91c1c', $this->getSaudiModernCSS());
    }

    private function getPurchaseClassicTemplate()
    {
        return str_replace('فاتورة ضريبية', 'أمر شراء', $this->getSaudiClassicTemplate());
    }

    private function getPurchaseClassicCSS()
    {
        return str_replace('#7c2d12', '#7f1d1d', $this->getSaudiClassicCSS());
    }

    private function getPurchaseMinimalTemplate()
    {
        return str_replace('فاتورة ضريبية', 'أمر شراء', $this->getSaudiMinimalTemplate());
    }

    private function getPurchaseMinimalCSS()
    {
        return str_replace('#1f2937', '#991b1b', $this->getSaudiMinimalCSS());
    }

    // Quotation-specific template methods
    private function getQuotationProfessionalTemplate()
    {
        return str_replace('فاتورة ضريبية', 'عرض سعر', $this->getSaudiProfessionalTemplate());
    }

    private function getQuotationProfessionalCSS()
    {
        return str_replace('#1e40af', '#059669', $this->getSaudiProfessionalCSS());
    }

    private function getQuotationCorporateTemplate()
    {
        return str_replace('فاتورة ضريبية', 'عرض سعر', $this->getSaudiCorporateTemplate());
    }

    private function getQuotationCorporateCSS()
    {
        return str_replace('#0f172a', '#0d9488', $this->getSaudiCorporateCSS());
    }

    private function getQuotationModernTemplate()
    {
        return str_replace('فاتورة ضريبية', 'عرض سعر', $this->getSaudiModernTemplate());
    }

    private function getQuotationModernCSS()
    {
        return str_replace('#059669', '#10b981', $this->getSaudiModernCSS());
    }

    private function getQuotationClassicTemplate()
    {
        return str_replace('فاتورة ضريبية', 'عرض سعر', $this->getSaudiClassicTemplate());
    }

    private function getQuotationClassicCSS()
    {
        return str_replace('#7c2d12', '#059669', $this->getSaudiClassicCSS());
    }

    private function getQuotationMinimalTemplate()
    {
        return str_replace('فاتورة ضريبية', 'عرض سعر', $this->getSaudiMinimalTemplate());
    }

    private function getQuotationMinimalCSS()
    {
        return str_replace('#1f2937', '#059669', $this->getSaudiMinimalCSS());
    }

    // Expense-specific template methods
    private function getExpenseProfessionalTemplate()
    {
        return str_replace('فاتورة ضريبية', 'إيصال مصروف', $this->getSaudiProfessionalTemplate());
    }

    private function getExpenseProfessionalCSS()
    {
        return str_replace('#1e40af', '#7c3aed', $this->getSaudiProfessionalCSS());
    }

    private function getExpenseCorporateTemplate()
    {
        return str_replace('فاتورة ضريبية', 'إيصال مصروف', $this->getSaudiCorporateTemplate());
    }

    private function getExpenseCorporateCSS()
    {
        return str_replace('#0f172a', '#6b21a8', $this->getSaudiCorporateCSS());
    }

    private function getExpenseModernTemplate()
    {
        return str_replace('فاتورة ضريبية', 'إيصال مصروف', $this->getSaudiModernTemplate());
    }

    private function getExpenseModernCSS()
    {
        return str_replace('#059669', '#8b5cf6', $this->getSaudiModernCSS());
    }

    private function getExpenseClassicTemplate()
    {
        return str_replace('فاتورة ضريبية', 'إيصال مصروف', $this->getSaudiClassicTemplate());
    }

    private function getExpenseClassicCSS()
    {
        return str_replace('#7c2d12', '#7c3aed', $this->getSaudiClassicCSS());
    }

    private function getExpenseMinimalTemplate()
    {
        return str_replace('فاتورة ضريبية', 'إيصال مصروف', $this->getSaudiMinimalTemplate());
    }

    private function getExpenseMinimalCSS()
    {
        return str_replace('#1f2937', '#7c3aed', $this->getSaudiMinimalCSS());
    }

    private function createReportsTemplates()
    {
        // Template 1: Reports Professional (Default)
        PrintTemplate::create([
            'name' => 'reports_professional',
            'module' => 'reports',
            'template_key' => 'reports_professional',
            'display_name' => 'Reports Professional',
            'description' => 'Professional design for accounting reports with clean layout',
            'is_default' => true,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#1e40af',
                    'secondary' => '#374151',
                    'accent' => '#f0f9ff',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Inter, Arial, sans-serif',
                    'baseFontSize' => 12,
                    'headerFontSize' => 20
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 20
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showReportTitle' => true,
                    'showPeriod' => true,
                    'showGeneratedDate' => true,
                    'showDataTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getReportsProfessionalTemplate(),
            'css_styles' => $this->getReportsProfessionalCSS(),
            'preview_data' => $this->getReportsPreviewData(),
            'sort_order' => 1,
        ]);

        // Template 2: Reports Corporate
        PrintTemplate::create([
            'name' => 'reports_corporate',
            'module' => 'reports',
            'template_key' => 'reports_corporate',
            'display_name' => 'Reports Corporate',
            'description' => 'Corporate design for formal accounting reports',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#0f172a',
                    'secondary' => '#475569',
                    'accent' => '#f8fafc',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Inter, Arial, sans-serif',
                    'baseFontSize' => 12,
                    'headerFontSize' => 22
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 25
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showReportTitle' => true,
                    'showPeriod' => true,
                    'showGeneratedDate' => true,
                    'showDataTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getReportsCorporateTemplate(),
            'css_styles' => $this->getReportsCorporateCSS(),
            'preview_data' => $this->getReportsPreviewData(),
            'sort_order' => 2,
        ]);

        // Template 3: Reports Modern
        PrintTemplate::create([
            'name' => 'reports_modern',
            'module' => 'reports',
            'template_key' => 'reports_modern',
            'display_name' => 'Reports Modern',
            'description' => 'Modern design for contemporary accounting reports',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#059669',
                    'secondary' => '#374151',
                    'accent' => '#ecfdf5',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Inter, Arial, sans-serif',
                    'baseFontSize' => 12,
                    'headerFontSize' => 20
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 20
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showReportTitle' => true,
                    'showPeriod' => true,
                    'showGeneratedDate' => true,
                    'showDataTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getReportsModernTemplate(),
            'css_styles' => $this->getReportsModernCSS(),
            'preview_data' => $this->getReportsPreviewData(),
            'sort_order' => 3,
        ]);

        // Template 4: Reports Classic
        PrintTemplate::create([
            'name' => 'reports_classic',
            'module' => 'reports',
            'template_key' => 'reports_classic',
            'display_name' => 'Reports Classic',
            'description' => 'Classic design for traditional accounting reports',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#7c2d12',
                    'secondary' => '#374151',
                    'accent' => '#fef3c7',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Times New Roman, serif',
                    'baseFontSize' => 12,
                    'headerFontSize' => 18
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 25
                ],
                'elements' => [
                    'showLogo' => true,
                    'showCompanyInfo' => true,
                    'showReportTitle' => true,
                    'showPeriod' => true,
                    'showGeneratedDate' => true,
                    'showDataTable' => true,
                    'showTotals' => true,
                    'showFooter' => true
                ]
            ],
            'html_template' => $this->getReportsClassicTemplate(),
            'css_styles' => $this->getReportsClassicCSS(),
            'preview_data' => $this->getReportsPreviewData(),
            'sort_order' => 4,
        ]);

        // Template 5: Reports Minimal
        PrintTemplate::create([
            'name' => 'reports_minimal',
            'module' => 'reports',
            'template_key' => 'reports_minimal',
            'display_name' => 'Reports Minimal',
            'description' => 'Minimal design for clean accounting reports',
            'is_default' => false,
            'is_active' => true,
            'template_config' => [
                'colors' => [
                    'primary' => '#1f2937',
                    'secondary' => '#6b7280',
                    'accent' => '#f9fafb',
                    'background' => '#ffffff'
                ],
                'typography' => [
                    'fontFamily' => 'Inter, Arial, sans-serif',
                    'baseFontSize' => 12,
                    'headerFontSize' => 18
                ],
                'layout' => [
                    'paperSize' => 'A4',
                    'orientation' => 'portrait',
                    'margins' => 20
                ],
                'elements' => [
                    'showLogo' => false,
                    'showCompanyInfo' => true,
                    'showReportTitle' => true,
                    'showPeriod' => true,
                    'showGeneratedDate' => true,
                    'showDataTable' => true,
                    'showTotals' => true,
                    'showFooter' => false
                ]
            ],
            'html_template' => $this->getReportsMinimalTemplate(),
            'css_styles' => $this->getReportsMinimalCSS(),
            'preview_data' => $this->getReportsPreviewData(),
            'sort_order' => 5,
        ]);
    }

    // Reports Preview Data
    private function getReportsPreviewData()
    {
        return [
            'report_type' => 'Balance Sheet',
            'report_title' => 'Balance Sheet Report',
            'period' => now()->format('Y-m-d') . ' to ' . now()->addDays(30)->format('Y-m-d'),
            'generated_date' => now()->format('Y-m-d H:i:s'),
            'company' => [
                'name' => 'Sample Company',
                'address' => '123 Business St, City, State 12345',
                'phone' => '+1 234 567 8900',
                'email' => 'info@sample.com'
            ],
            'data' => [
                'assets' => [
                    ['name' => 'Cash', 'code' => '1001', 'balance' => 50000.00],
                    ['name' => 'Accounts Receivable', 'code' => '1002', 'balance' => 25000.00],
                    ['name' => 'Inventory', 'code' => '1003', 'balance' => 15000.00]
                ],
                'liabilities' => [
                    ['name' => 'Accounts Payable', 'code' => '2001', 'balance' => 20000.00],
                    ['name' => 'Accrued Expenses', 'code' => '2002', 'balance' => 5000.00]
                ],
                'equity' => [
                    ['name' => 'Owner Equity', 'code' => '3001', 'balance' => 65000.00]
                ]
            ],
            'totals' => [
                'total_assets' => 90000.00,
                'total_liabilities' => 25000.00,
                'total_equity' => 65000.00
            ]
        ];
    }

    // Reports Template Methods
    private function getReportsProfessionalTemplate()
    {
        return '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{{ report_title }}</title>
        </head>
        <body>
            <div class="report-container">
                <div class="report-header">
                    <div class="company-info">
                        <img src="{{ company.logo_url }}" alt="Company Logo" class="logo-img">
                        <div class="company-details">
                            <h1 class="company-name">{{ company.name }}</h1>
                            <p class="company-address">{{ company.address }}</p>
                            <p class="company-contact">{{ company.phone }} | {{ company.email }}</p>
                        </div>
                    </div>
                    <div class="report-info">
                        <h2 class="report-title">{{ report_title }}</h2>
                        <p class="report-period">Period: {{ period }}</p>
                        <p class="generated-date">Generated: {{ generated_date }}</p>
                    </div>
                </div>

                <div class="report-content">
                    <div class="data-section">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Account Name</th>
                                    <th>Code</th>
                                    <th class="text-right">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if(data.assets)
                                <tr class="section-header">
                                    <td colspan="3"><strong>Assets</strong></td>
                                </tr>
                                @foreach(data.assets as asset)
                                <tr>
                                    <td>{{ asset.name }}</td>
                                    <td>{{ asset.code }}</td>
                                    <td class="text-right">{{ asset.balance | currency }}</td>
                                </tr>
                                @endforeach
                                @endif

                                @if(data.liabilities)
                                <tr class="section-header">
                                    <td colspan="3"><strong>Liabilities</strong></td>
                                </tr>
                                @foreach(data.liabilities as liability)
                                <tr>
                                    <td>{{ liability.name }}</td>
                                    <td>{{ liability.code }}</td>
                                    <td class="text-right">{{ liability.balance | currency }}</td>
                                </tr>
                                @endforeach
                                @endif

                                @if(data.equity)
                                <tr class="section-header">
                                    <td colspan="3"><strong>Equity</strong></td>
                                </tr>
                                @foreach(data.equity as equity)
                                <tr>
                                    <td>{{ equity.name }}</td>
                                    <td>{{ equity.code }}</td>
                                    <td class="text-right">{{ equity.balance | currency }}</td>
                                </tr>
                                @endforeach
                                @endif
                            </tbody>
                        </table>
                    </div>

                    <div class="totals-section">
                        <table class="totals-table">
                            <tr>
                                <td><strong>Total Assets:</strong></td>
                                <td class="text-right"><strong>{{ totals.total_assets | currency }}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Total Liabilities:</strong></td>
                                <td class="text-right"><strong>{{ totals.total_liabilities | currency }}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Total Equity:</strong></td>
                                <td class="text-right"><strong>{{ totals.total_equity | currency }}</strong></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="report-footer">
                    <p class="footer-text">This report was generated on {{ generated_date }}</p>
                </div>
            </div>
        </body>
        </html>';
    }

    private function getReportsProfessionalCSS()
    {
        return '
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Inter, Arial, sans-serif;
            font-size: 12px;
            line-height: 1.6;
            color: #374151;
            background: #ffffff;
        }

        .report-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #ffffff;
        }

        .report-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #1e40af;
        }

        .company-info {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .logo-img {
            max-width: 60px;
            height: auto;
        }

        .company-name {
            font-size: 20px;
            font-weight: 700;
            color: #1e40af;
            margin-bottom: 5px;
        }

        .company-address {
            color: #6b7280;
            margin-bottom: 3px;
        }

        .company-contact {
            color: #6b7280;
            font-size: 11px;
        }

        .report-info {
            text-align: right;
        }

        .report-title {
            font-size: 20px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 10px;
        }

        .report-period {
            color: #6b7280;
            margin-bottom: 3px;
        }

        .generated-date {
            color: #6b7280;
            font-size: 11px;
        }

        .data-section {
            margin-bottom: 30px;
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .data-table th {
            background: #f0f9ff;
            padding: 10px 12px;
            text-align: left;
            font-weight: 600;
            color: #1e40af;
            border: 1px solid #e5e7eb;
        }

        .data-table td {
            padding: 8px 12px;
            border: 1px solid #e5e7eb;
        }

        .section-header td {
            background: #f8fafc;
            font-weight: 600;
            color: #374151;
        }

        .text-right {
            text-align: right;
        }

        .totals-section {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 30px;
        }

        .totals-table {
            width: 250px;
        }

        .totals-table tr {
            border-bottom: 1px solid #e5e7eb;
        }

        .totals-table td {
            padding: 8px 0;
        }

        .report-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
        }

        .footer-text {
            color: #6b7280;
            font-size: 11px;
        }';
    }

    private function getReportsCorporateTemplate()
    {
        return str_replace('#1e40af', '#0f172a', $this->getReportsProfessionalTemplate());
    }

    private function getReportsCorporateCSS()
    {
        return str_replace('#1e40af', '#0f172a', $this->getReportsProfessionalCSS());
    }

    private function getReportsModernTemplate()
    {
        return str_replace('#1e40af', '#059669', $this->getReportsProfessionalTemplate());
    }

    private function getReportsModernCSS()
    {
        return str_replace('#1e40af', '#059669', $this->getReportsProfessionalCSS());
    }

    private function getReportsClassicTemplate()
    {
        return str_replace('#1e40af', '#7c2d12', $this->getReportsProfessionalTemplate());
    }

    private function getReportsClassicCSS()
    {
        return str_replace('#1e40af', '#7c2d12', $this->getReportsProfessionalCSS());
    }

    private function getReportsMinimalTemplate()
    {
        return str_replace('#1e40af', '#1f2937', $this->getReportsProfessionalTemplate());
    }

    private function getReportsMinimalCSS()
    {
        return str_replace('#1e40af', '#1f2937', $this->getReportsProfessionalCSS());
    }
}

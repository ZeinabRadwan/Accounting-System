@extends('print.layout')

@section('page-style')
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');
    
    body {
        font-family: 'Roboto', sans-serif;
        @if(app()->getLocale() == 'ar')
            direction: rtl;
            text-align: right;
            font-family: 'Noto Kufi Arabic', sans-serif;
        @endif
    }
    
    .table th, .table td {
        text-align: center;
        @if(app()->getLocale() == 'ar')
            text-align: center;
        @endif
    }
    
    .text-right {
        @if(app()->getLocale() == 'ar')
            text-align: left !important;
        @endif
    }
    
    .text-left {
        @if(app()->getLocale() == 'ar')
            text-align: right !important;
        @endif
    }
</style>
@endsection

@php
    // Custom currency formatter for PDF
    if (!function_exists('formatPdfCurrency')) {
        function formatPdfCurrency($amount) {
            $locale = app()->getLocale();
            $formattedAmount = number_format(abs($amount), 2);
            
            if ($locale == 'ar') {
                // For Arabic, use the proper riyal symbol instead of 'ê'
                return $formattedAmount . ' ﷼';
            } else {
                // For English
                return '$' . $formattedAmount;
            }
        }
    }
@endphp

@section('content')
    @php
        $config = $template->template_config ?? [];
        $elements = $config['elements'] ?? [];
        $colors = $config['colors'] ?? [];
        $typography = $config['typography'] ?? [];
        
        // Get settings from GeneralSetting model
        $settings = \App\Models\GeneralSetting::get();
        $companyName = $settings->where('key', 'company_name')->first()?->value ?? 'Company Name';
        $companyAddress = $settings->where('key', 'address')->first()?->value ?? 'Company Address';
        $companyPhone = $settings->where('key', 'phone_number')->first()?->value ?? 'Phone';
        $companyEmail = $settings->where('key', 'email_address')->first()?->value ?? 'Email';
    @endphp

    @if(($elements['showLogo'] ?? true) || ($elements['showCompanyInfo'] ?? true))
    <!-- Header -->
    <div class="document-header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                @if($elements['showLogo'] ?? true)
                <div style="margin-bottom: 15px;">
                    <img src="{{ $template->logo_url }}" 
                         alt="Company Logo" class="company-logo">
                </div>
                @endif
                
                @if($elements['showCompanyInfo'] ?? true)
                <h1 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: {{ $typography['headerFontSize'] ?? 24 }}px; margin: 0 0 10px 0;" class="arabic-text">
                    {{ $companyName }}
                </h1>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $companyAddress }}
                </p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $companyPhone }} • {{ $companyEmail }}
                </p>
                @endif
            </div>
            <div class="document-info">
                @if($elements['showReportTitle'] ?? true)
                <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 24px; margin: 0 0 15px 0;">
                    @lang('Profit & Loss Statement')
                </h2>
                @endif
                
                @if($elements['showPeriod'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('Period'): {{ $profitLossData['filters']['from_date'] ?? '' }} - {{ $profitLossData['filters']['to_date'] ?? '' }}
                </p>
                @endif
                
                @if($elements['showGeneratedDate'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('Generated'): {{ now()->format('Y-m-d H:i:s') }}
                </p>
                @endif
            </div>
        </div>
    </div>
    @endif

    <!-- Report Content -->
    <div class="report-content">
        @if($elements['showDataTable'] ?? true)
        <div class="data-section">
            <table class="data-table">
                <thead>
                    <tr style="background: {{ $colors['accent'] ?? '#f8fafc' }};">
                        <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};">
                            @lang('Description')
                        </th>
                        <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};">
                            @lang('Amount')
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($profitLossData['revenues']) && count($profitLossData['revenues']) > 0)
                        <tr class="section-header">
                            <td colspan="2" style="padding: 12px; font-weight: bold; background: {{ $colors['accent'] ?? '#f8fafc' }}; color: {{ $colors['primary'] ?? '#2563eb' }};">
                                @lang('REVENUES')
                            </td>
                        </tr>
                        @foreach($profitLossData['revenues'] as $revenue)
                        <tr>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">
                                {{ $revenue['name'] }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">
                                {{ number_format($revenue['amount'], 2) }}
                            </td>
                        </tr>
                        @endforeach
                    @endif

                    @if(isset($profitLossData['expenses']) && count($profitLossData['expenses']) > 0)
                        <tr class="section-header">
                            <td colspan="2" style="padding: 12px; font-weight: bold; background: {{ $colors['accent'] ?? '#f8fafc' }}; color: {{ $colors['primary'] ?? '#2563eb' }};">
                                @lang('EXPENSES')
                            </td>
                        </tr>
                        @foreach($profitLossData['expenses'] as $expense)
                        <tr>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">
                                {{ $expense['name'] }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">
                                {{ number_format($expense['amount'], 2) }}
                            </td>
                        </tr>
                        @endforeach
                    @endif
                </tbody>
            </table>
        </div>
        @endif

        @if($elements['showTotals'] ?? true)
        <div class="totals-section">
            <table class="totals-table">
                <tr>
                    <td style="padding: 12px; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        @lang('Total Revenue'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        {{ number_format($profitLossData['totals']['total_revenue'] ?? 0, 2) }}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        @lang('Total Expenses'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        {{ number_format($profitLossData['totals']['total_expenses'] ?? 0, 2) }}
                    </td>
                </tr>
                <tr style="border-top: 2px solid {{ $colors['primary'] ?? '#2563eb' }};">
                    <td style="padding: 12px; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        @lang('Net Profit/Loss'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        {{ number_format($profitLossData['totals']['net_profit'] ?? 0, 2) }}
                    </td>
                </tr>
            </table>
        </div>
        @endif
    </div>

    @if($elements['showFooter'] ?? true)
    <!-- Footer -->
    <div class="document-footer">
        <p style="text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: 12px; margin: 20px 0 0 0;">
            @lang('This report was generated on') {{ now()->format('Y-m-d H:i:s') }}
        </p>
    </div>
    @endif

    <style>
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        
        .data-table th {
            font-weight: 600;
            background: {{ $colors['accent'] ?? '#f8fafc' }};
        }
        
        .data-table td {
            font-size: {{ $typography['baseFontSize'] ?? 12 }}px;
        }
        
        .section-header td {
            font-weight: bold;
            background: {{ $colors['accent'] ?? '#f8fafc' }};
        }
        
        .totals-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        .totals-table td {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .company-logo {
            max-width: 80px;
            height: auto;
        }
    </style>

    <!-- Print and Download Buttons -->
    <div class="action-buttons no-print">
        <button class="print-button" onclick="window.print()">
            <i class="fas fa-print"></i> @lang('print.Print')
        </button>
        <button class="pdf-button" onclick="downloadPDF()">
            <i class="fas fa-download"></i> @lang('print.Download PDF')
        </button>
    </div>

    <script>
        function downloadPDF() {
            // Create PDF download URL for profit loss report
            const urlParams = new URLSearchParams(window.location.search);
            let pdfUrl = '/reports/profit-loss/pdf';
            if (urlParams.toString()) {
                pdfUrl += '?' + urlParams.toString();
            }
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    </script>
@endsection

@extends('print.layout')

@section('content')
    @php
        $config = $template->template_config ?? [];
        $elements = $config['elements'] ?? [];
        $colors = $config['colors'] ?? [];
        $typography = $config['typography'] ?? [];
        $currentLocale = app()->getLocale();
        $isRTL = $currentLocale === 'ar';
        
        // Get settings from GeneralSetting model
        $settings = \App\Models\GeneralSetting::get();
        $companyName = $settings->where('key', 'company_name')->first()?->value ?? 'Company Name';
        $companyAddress = $settings->where('key', 'address')->first()?->value ?? 'Company Address';
        $companyPhone = $settings->where('key', 'phone_number')->first()?->value ?? 'Phone';
        $companyEmail = $settings->where('key', 'email_address')->first()?->value ?? 'Email';
    @endphp

    <!-- Action Buttons -->
    <div class="action-buttons no-print">
        <button class="print-button" onclick="window.print()">
            <i class="fas fa-print"></i> @lang('print.Print')
        </button>
        <button class="pdf-button" onclick="downloadPDF()">
            <i class="fas fa-download"></i> @lang('print.Download PDF')
        </button>
    </div>

    @if(($elements['showLogo'] ?? true) || ($elements['showCompanyInfo'] ?? true))
    <!-- Header -->
    <div class="document-header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; {{ $isRTL ? 'flex-direction: row-reverse;' : '' }}">
            <div>
                @if($elements['showLogo'] ?? true)
                <div style="margin-bottom: 15px;">
                    <img src="{{ $template->logo_url }}" 
                         alt="@lang('Company Logo')" class="company-logo">
                </div>
                @endif
                
                @if($elements['showCompanyInfo'] ?? true)
                <h1 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: {{ $typography['headerFontSize'] ?? 24 }}px; margin: 0 0 10px 0;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    {{ $companyName }}
                </h1>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    {{ $companyAddress }}
                </p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    {{ $companyPhone }} • {{ $companyEmail }}
                </p>
                @endif
            </div>
            <div class="document-info" style="text-align: {{ $isRTL ? 'left' : 'right' }};">
                @if($elements['showReportTitle'] ?? true)
                <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 24px; margin: 0 0 15px 0;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    @lang('print.Account Statement')
                </h2>
                @endif
                
                @if($elements['showAccountInfo'] ?? true)
                <div style="margin-bottom: 10px;">
                    <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-weight: bold;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                        @lang('print.Account'): {{ $accountStatementData['chart_of_account']['code'] }} - {{ $accountStatementData['chart_of_account']['name'] }}
                    </p>
                    @if(isset($accountStatementData['report_account']) && $accountStatementData['report_account']['id'] !== $accountStatementData['chart_of_account']['id'])
                    <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: 14px;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                        @lang('print.Sub Account'): {{ $accountStatementData['report_account']['code'] }} - {{ $accountStatementData['report_account']['name'] }}
                    </p>
                    @endif
                </div>
                @endif
                
                @if($elements['showPeriod'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    @lang('print.Period'): {{ $accountStatementData['filters']['from_date'] ?? '' }} - {{ $accountStatementData['filters']['to_date'] ?? '' }}
                </p>
                @endif
                
                @if($elements['showGeneratedDate'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    @lang('print.Generated'): {{ now()->format('Y-m-d H:i:s') }}
                </p>
                @endif
            </div>
        </div>
    </div>
    @endif

    <!-- Summary Section -->
    @if($elements['showSummary'] ?? true)
    <div class="summary-section" style="margin: 20px 0;">
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 15px; {{ $isRTL ? 'flex-direction: row-reverse;' : '' }}">
            <div class="summary-box" style="flex: 1; min-width: 200px; padding: 15px; background: {{ $colors['accent'] ?? '#f8fafc' }}; border: 1px solid #e5e7eb; border-radius: 8px; text-align: center;">
                <h4 style="margin: 0 0 8px 0; color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 14px;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Opening Balance')</h4>
                <p style="margin: 0; font-size: 18px; font-weight: bold; color: {{ $colors['text'] ?? '#111827' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    {{ number_format($accountStatementData['summary']['opening_balance'] ?? 0, 2) }} 
                    @if(($accountStatementData['summary']['opening_balance_type'] ?? '') === 'Debit')
                        @lang('print.Debit')
                    @elseif(($accountStatementData['summary']['opening_balance_type'] ?? '') === 'Credit')
                        @lang('print.Credit')
                    @else
                        {{ $accountStatementData['summary']['opening_balance_type'] ?? '' }}
                    @endif
                </p>
            </div>
            <div class="summary-box" style="flex: 1; min-width: 200px; padding: 15px; background: {{ $colors['accent'] ?? '#f8fafc' }}; border: 1px solid #e5e7eb; border-radius: 8px; text-align: center;">
                <h4 style="margin: 0 0 8px 0; color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 14px;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Period Debits')</h4>
                <p style="margin: 0; font-size: 18px; font-weight: bold; color: {{ $colors['text'] ?? '#111827' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    {{ number_format($accountStatementData['summary']['period_debits'] ?? 0, 2) }}
                </p>
            </div>
            <div class="summary-box" style="flex: 1; min-width: 200px; padding: 15px; background: {{ $colors['accent'] ?? '#f8fafc' }}; border: 1px solid #e5e7eb; border-radius: 8px; text-align: center;">
                <h4 style="margin: 0 0 8px 0; color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 14px;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Period Credits')</h4>
                <p style="margin: 0; font-size: 18px; font-weight: bold; color: {{ $colors['text'] ?? '#111827' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    {{ number_format($accountStatementData['summary']['period_credits'] ?? 0, 2) }}
                </p>
            </div>
            <div class="summary-box" style="flex: 1; min-width: 200px; padding: 15px; background: {{ $colors['primary'] ?? '#2563eb' }}; border: 1px solid #e5e7eb; border-radius: 8px; text-align: center;">
                <h4 style="margin: 0 0 8px 0; color: white; font-size: 14px;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Closing Balance')</h4>
                <p style="margin: 0; font-size: 18px; font-weight: bold; color: white;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                    {{ number_format($accountStatementData['summary']['closing_balance'] ?? 0, 2) }} 
                    @if(($accountStatementData['summary']['closing_balance_type'] ?? '') === 'Debit')
                        @lang('print.Debit')
                    @elseif(($accountStatementData['summary']['closing_balance_type'] ?? '') === 'Credit')
                        @lang('print.Credit')
                    @else
                        {{ $accountStatementData['summary']['closing_balance_type'] ?? '' }}
                    @endif
                </p>
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
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                            @lang('print.Date')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                            @lang('print.Entry #')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                            @lang('print.Reference')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                            @lang('print.Description')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                            @lang('print.Debit')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                            @lang('print.Credit')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                            @lang('print.Net Amount')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                            @lang('print.Running Balance')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                            @lang('print.Balance Type')
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($accountStatementData['entries']) && count($accountStatementData['entries']) > 0)
                        @foreach($accountStatementData['entries'] as $index => $entry)
                        <tr>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                {{ \Carbon\Carbon::parse($entry['entry_date'])->format('d-M-Y') }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                {{ $entry['entry_number'] ?? '-' }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                {{ $entry['reference'] ?? '-' }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                                {{ $entry['description'] ?? '-' }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                @if(isset($entry['debit_amount']) && $entry['debit_amount'] > 0)
                                    {{ number_format($entry['debit_amount'], 2) }}
                                @else
                                    -
                                @endif
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                @if(isset($entry['credit_amount']) && $entry['credit_amount'] > 0)
                                    {{ number_format($entry['credit_amount'], 2) }}
                                @else
                                    -
                                @endif
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                <span style="color: {{ ($entry['net_amount'] ?? 0) < 0 ? '#dc2626' : '#059669' }}; font-weight: bold;">
                                    {{ number_format($entry['net_amount'] ?? 0, 2) }}
                                </span>
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                <span style="color: {{ ($entry['balance_type'] ?? '') === 'Debit' ? '#059669' : '#dc2626' }}; font-weight: bold;">
                                    {{ number_format($entry['running_balance'] ?? 0, 2) }}
                                </span>
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                <span style="padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; 
                                      background: {{ ($entry['balance_type'] ?? '') === 'Debit' ? '#dcfce7' : '#fee2e2' }}; 
                                      color: {{ ($entry['balance_type'] ?? '') === 'Debit' ? '#166534' : '#991b1b' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                                    @if(($entry['balance_type'] ?? '') === 'Debit')
                                        @lang('print.Debit')
                                    @elseif(($entry['balance_type'] ?? '') === 'Credit')
                                        @lang('print.Credit')
                                    @else
                                        {{ $entry['balance_type'] ?? '-' }}
                                    @endif
                                </span>
                            </td>
                        </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="9" style="padding: 20px; text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }}; border: 1px solid #e5e7eb;">
                                @lang('print.No entries found for the selected period.')
                            </td>
                        </tr>
                    @endif
                </tbody>
            </table>
        </div>
        @endif

        @if($elements['showTotals'] ?? true)
        <div class="totals-section" style="margin-top: 20px;">
            <table class="totals-table" style="width: 100%; border-collapse: collapse;">
                <tr style="border-top: 2px solid {{ $colors['primary'] ?? '#2563eb' }};">
                    <td style="padding: 12px; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }}; width: 50%; text-align: {{ $isRTL ? 'right' : 'left' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                        @lang('print.Total Debit'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }}; width: 50%;">
                        {{ number_format($accountStatementData['summary']['period_debits'] ?? 0, 2) }}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }}; text-align: {{ $isRTL ? 'right' : 'left' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                        @lang('print.Total Credit'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        {{ number_format($accountStatementData['summary']['period_credits'] ?? 0, 2) }}
                    </td>
                </tr>
                <tr style="border-top: 2px solid {{ $colors['primary'] ?? '#2563eb' }}; background: {{ $colors['accent'] ?? '#f8fafc' }};">
                    <td style="padding: 12px; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 16px; text-align: {{ $isRTL ? 'right' : 'left' }};" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                        @lang('print.Closing Balance'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 16px;">
                        {{ number_format($accountStatementData['summary']['closing_balance'] ?? 0, 2) }} 
                        @if(($accountStatementData['summary']['closing_balance_type'] ?? '') === 'Debit')
                            @lang('print.Debit')
                        @elseif(($accountStatementData['summary']['closing_balance_type'] ?? '') === 'Credit')
                            @lang('print.Credit')
                        @else
                            {{ $accountStatementData['summary']['closing_balance_type'] ?? '' }}
                        @endif
                    </td>
                </tr>
            </table>
        </div>
        @endif
    </div>

    @if($elements['showFooter'] ?? true)
    <!-- Footer -->
    <div class="document-footer">
        <p style="text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: 12px; margin: 20px 0 0 0;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
            @lang('print.This report was generated on') {{ now()->format('Y-m-d H:i:s') }}
        </p>
    </div>
    @endif

    <style>
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: {{ $typography['baseFontSize'] ?? 12 }}px;
        }
        
        .data-table th {
            font-weight: 600;
            background: {{ $colors['accent'] ?? '#f8fafc' }};
        }
        
        .data-table td {
            font-size: {{ $typography['baseFontSize'] ?? 12 }}px;
        }
        
        .data-table tbody tr:nth-child(even) {
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
        
        .summary-box {
            text-align: center;
        }
        
        /* RTL specific styles */
        @if($isRTL)
        .data-table th,
        .data-table td {
            text-align: {{ $isRTL ? 'right' : 'left' }};
        }
        
        .data-table .text-right {
            text-align: right !important;
        }
        
        .data-table .text-center {
            text-align: center !important;
        }
        
        .totals-table td:first-child {
            text-align: right !important;
        }
        
        .totals-table td:last-child {
            text-align: left !important;
        }
        @endif
        
        /* Action Buttons Styling */
        .action-buttons {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 10px;
        }
        
        .print-button, .pdf-button {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .print-button {
            background: linear-gradient(135deg, #059669, #047857);
            color: white;
        }
        
        .pdf-button {
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: white;
        }
        
        .print-button:hover, .pdf-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .print-button:active, .pdf-button:active {
            transform: translateY(0);
        }
        
        @media print {
            .no-print, .action-buttons {
                display: none !important;
            }
            
            .summary-section {
                page-break-inside: avoid;
            }
            
            .data-table {
                page-break-inside: auto;
            }
            
            .data-table thead {
                display: table-header-group;
            }
            
            .data-table tbody tr {
                page-break-inside: avoid;
            }
        }
        
        /* Font Awesome icons */
        .fas, .fa-print, .fa-download {
            font-family: "Font Awesome 6 Free";
            font-weight: 900;
        }
        .fa-print:before { content: "\f02f"; }
        .fa-download:before { content: "\f019"; }
    </style>

    <script>
        // PDF Download function
        function downloadPDF() {
            // Get current URL parameters to maintain filters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Build PDF URL with same parameters
            let pdfUrl = '/account-statement/pdf';
            if (urlParams.toString()) {
                pdfUrl += '?' + urlParams.toString();
            }
            
            // Create a temporary link to download the PDF
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        // Handle print events
        window.addEventListener('beforeprint', function() {
            console.log('Preparing to print...');
        });
        
        window.addEventListener('afterprint', function() {
            console.log('Print completed');
        });
    </script>
@endsection

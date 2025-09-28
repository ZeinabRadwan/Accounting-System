@extends('print.layout')

@section('page-style')
    <style>
        body {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        .currency-symbol {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        /* Fix for riyal symbol display */
        .riyal-symbol {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        
        /* Print styles */
        .action-buttons {
            margin: 20px 0;
            text-align: center;
        }
        
        .print-button, .pdf-button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 0 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            display: inline-block;
        }
        
        .pdf-button {
            background: #28a745;
        }
        
        .print-button:hover {
            background: #0056b3;
            color: white;
            text-decoration: none;
        }
        
        .pdf-button:hover {
            background: #1e7e34;
            color: white;
            text-decoration: none;
        }
        
        @media print {
            .no-print, .action-buttons {
                display: none !important;
            }
        }
    </style>
@endsection

@section('content')
    @php
        $currentLocale = app()->getLocale();
        $isRTL = $currentLocale === 'ar';
        
        // Custom currency formatter for PDF - no currency symbols as requested
        function formatPdfCurrency($amount) {
            $formattedAmount = number_format($amount, 2, '.', ',');
            return $formattedAmount; // Return only the amount without currency symbol
        }
        
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
                    @lang('Balance Sheet')
                </h2>
                @endif
                
                @if($elements['showPeriod'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('Period'): {{ $balanceData['filters']['from_date'] ?? '' }} - {{ $balanceData['filters']['to_date'] ?? '' }}
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
                        <th colspan="2" style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};">
                            @lang('Assets')
                        </th>
                        <th colspan="2" style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};">
                            @lang('Liabilities & Equity')
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($balanceData['accounts']) && (count($balanceData['accounts']['assets'] ?? []) > 0 || count($balanceData['accounts']['liabilities'] ?? []) > 0 || count($balanceData['accounts']['equity'] ?? []) > 0))
                        @php
                            $maxRows = max(
                                count($balanceData['accounts']['assets'] ?? []),
                                count($balanceData['accounts']['liabilities'] ?? []),
                                count($balanceData['accounts']['equity'] ?? [])
                            );
                        @endphp
                        
                        @for($i = 0; $i < $maxRows; $i++)
                        <tr>
                            <!-- Assets Column -->
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: bold;">
                                @if(isset($balanceData['accounts']['assets'][$i]))
                                    {{ $balanceData['accounts']['assets'][$i]['name'] }} ({{ $balanceData['accounts']['assets'][$i]['code'] }})
                                @endif
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold;">
                                @if(isset($balanceData['accounts']['assets'][$i]))
                                    @if($balanceData['accounts']['assets'][$i]['balance_type'] === 'Debit')
                                        <span style="color: #059669;">{!! formatPdfCurrency($balanceData['accounts']['assets'][$i]['absolute_balance']) !!}</span>
                                    @else
                                        <span style="color: #dc2626;">({!! formatPdfCurrency($balanceData['accounts']['assets'][$i]['absolute_balance']) !!})</span>
                                    @endif
                                @endif
                            </td>
                            
                            <!-- Liabilities & Equity Column -->
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: bold;">
                                @if(isset($balanceData['accounts']['liabilities'][$i]))
                                    {{ $balanceData['accounts']['liabilities'][$i]['name'] }} ({{ $balanceData['accounts']['liabilities'][$i]['code'] }})
                                @elseif(isset($balanceData['accounts']['equity'][$i - count($balanceData['accounts']['liabilities'] ?? [])]))
                                    @php $equityIndex = $i - count($balanceData['accounts']['liabilities'] ?? []); @endphp
                                    {{ $balanceData['accounts']['equity'][$equityIndex]['name'] }} ({{ $balanceData['accounts']['equity'][$equityIndex]['code'] }})
                                @endif
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold;">
                                @if(isset($balanceData['accounts']['liabilities'][$i]))
                                    @if($balanceData['accounts']['liabilities'][$i]['balance_type'] === 'Credit')
                                        <span style="color: #dc2626;">{!! formatPdfCurrency($balanceData['accounts']['liabilities'][$i]['absolute_balance']) !!}</span>
                                    @else
                                        <span style="color: #059669;">({!! formatPdfCurrency($balanceData['accounts']['liabilities'][$i]['absolute_balance']) !!})</span>
                                    @endif
                                @elseif(isset($balanceData['accounts']['equity'][$i - count($balanceData['accounts']['liabilities'] ?? [])]))
                                    @php $equityIndex = $i - count($balanceData['accounts']['liabilities'] ?? []); @endphp
                                    @if($balanceData['accounts']['equity'][$equityIndex]['balance_type'] === 'Credit')
                                        <span style="color: #dc2626;">{!! formatPdfCurrency($balanceData['accounts']['equity'][$equityIndex]['absolute_balance']) !!}</span>
                                    @else
                                        <span style="color: #059669;">({!! formatPdfCurrency($balanceData['accounts']['equity'][$equityIndex]['absolute_balance']) !!})</span>
                                    @endif
                                @endif
                            </td>
                        </tr>
                        @endfor
                        
                        <!-- Net Income Row -->
                        @if(isset($balanceData['totals']['net_income']) && $balanceData['totals']['net_income'] != 0)
                        <tr>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;"></td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;"></td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: bold;">@lang('Net Income')</td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold;">
                                @if($balanceData['totals']['net_income'] > 0)
                                    <span style="color: #dc2626;">{{ number_format($balanceData['totals']['net_income'], 2) }}</span>
                                @else
                                    <span style="color: #059669;">({{ number_format(abs($balanceData['totals']['net_income']), 2) }})</span>
                                @endif
                            </td>
                        </tr>
                        @endif
                        
                        <!-- Totals Row -->
                        <tr style="border-top: 2px solid {{ $colors['primary'] ?? '#2563eb' }}; font-weight: bold;">
                            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">@lang('Total Assets')</td>
                            <td style="padding: 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold; color: #059669;">
                                {{ number_format($balanceData['totals']['total_assets'] ?? 0, 2) }}
                            </td>
                            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">@lang('Total Liabilities & Equity')</td>
                            <td style="padding: 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold; color: #dc2626;">
                                {{ number_format($balanceData['totals']['total_liabilities_and_equity'] ?? 0, 2) }}
                            </td>
                        </tr>
                    @else
                        <tr>
                            <td colspan="4" style="padding: 20px; text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                                @lang('No data available for the selected period')
                            </td>
                        </tr>
                    @endif
                </tbody>
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

    <script>
        function downloadPDF() {
            // Get current URL parameters to maintain filters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Build PDF URL with same parameters
            let pdfUrl = '/balance-sheet/pdf';
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
    </script>
@endsection

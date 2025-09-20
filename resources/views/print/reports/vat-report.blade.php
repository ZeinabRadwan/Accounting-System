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
        
        .table-listing th, .table-listing td {
            text-align: center;
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
        
        // Custom currency formatter for PDF to fix riyal symbol display
        function formatPdfCurrency($amount) {
            $currencySymbol = config('config.currencySymbol');
            $currencyPosition = config('config.currencyPosition');
            $formattedAmount = number_format($amount, 2, '.', ',');
            
            // Replace the problematic 'ê' with proper riyal symbol
            if ($currencySymbol === 'ê') {
                $currencySymbol = '﷼'; // Proper Saudi Riyal symbol
            }
            
            if ($currencyPosition == 'left') {
                return '<span class="currency-symbol">' . $currencySymbol . '</span>' . $formattedAmount;
            } else {
                return $formattedAmount . '<span class="currency-symbol">' . $currencySymbol . '</span>';
            }
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
                         alt="@lang('print.Company Logo')" class="company-logo">
                </div>
                @endif
                
                @if($elements['showCompanyInfo'] ?? true)
                <h1 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: {{ $typography['headerFontSize'] ?? 24 }}px; margin: 0 0 10px 0;">
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
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('print.This report was generated on') {{ date('d-M-Y') }}
                </p>
            </div>
        </div>
    </div>
    @endif

    <!-- Report Title -->
    <div class="report-title" style="text-align: center; margin: 20px 0;">
        <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin: 0;">@lang('print.VAT Report')</h2>
        @if(isset($vatReportData['filters']['from_date']) && isset($vatReportData['filters']['to_date']))
            <p style="margin: 5px 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                @lang('print.Period'): {{ $vatReportData['filters']['from_date'] }} - {{ $vatReportData['filters']['to_date'] }}
            </p>
        @endif
    </div>

    <!-- VAT Summary -->
    @if(isset($vatReportData['summary']) && count($vatReportData['summary']) > 0)
        <div class="vat-summary-section" style="margin-bottom: 30px;">
            <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 15px;">@lang('print.VAT Summary')</h3>
            
            <div class="table-responsive">
                <table class="table-listing table table-bordered table-striped table-sm">
                    <thead class="thead-light">
                        <tr>
                            <th>@lang('print.VAT Rate')</th>
                            <th>@lang('print.Rate %')</th>
                            <th>@lang('print.Sales VAT')</th>
                            <th>@lang('print.Purchase VAT')</th>
                            <th>@lang('print.Journal VAT')</th>
                            <th>@lang('print.Net VAT')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($vatReportData['summary'] as $summary)
                            <tr>
                                <td>
                                    <strong>{{ $summary['vat_rate_name'] ?? '' }}</strong><br>
                                    <small class="text-muted">{{ $summary['vat_rate_code'] ?? '' }}</small>
                                </td>
                                <td>{{ $summary['vat_rate_percentage'] ?? 0 }}%</td>
                                <td>{!! formatPdfCurrency($summary['sales_vat'] ?? 0) !!}</td>
                                <td>{!! formatPdfCurrency($summary['purchase_vat'] ?? 0) !!}</td>
                                <td>{!! formatPdfCurrency($summary['journal_vat'] ?? 0) !!}</td>
                                <td>
                                    @if(($summary['net_vat'] ?? 0) >= 0)
                                        <span style="color: #059669;">
                                            {!! formatPdfCurrency($summary['net_vat'] ?? 0) !!}
                                        </span>
                                    @else
                                        <span style="color: #dc2626;">
                                            ({!! formatPdfCurrency(abs($summary['net_vat'] ?? 0)) !!})
                                        </span>
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    @endif

    <!-- VAT Transactions -->
    @if(isset($vatReportData['transactions']) && count($vatReportData['transactions']) > 0)
        <div class="vat-transactions-section">
            <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 15px;">@lang('print.VAT Transactions')</h3>
            
            <div class="table-responsive">
                <table class="table-listing table table-bordered table-striped table-sm">
                    <thead class="thead-light">
                        <tr>
                            <th>@lang('print.Date')</th>
                            <th>@lang('print.Reference')</th>
                            <th>@lang('print.Client/Supplier')</th>
                            <th>@lang('print.Type')</th>
                            <th>@lang('print.Source')</th>
                            <th>@lang('print.VAT Amount')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($vatReportData['transactions'] as $transaction)
                            <tr>
                                <td>{{ $transaction['date'] ?? '' }}</td>
                                <td>{{ $transaction['reference'] ?? '' }}</td>
                                <td>{{ $transaction['client_supplier'] ?? '' }}</td>
                                <td>
                                    @if(($transaction['type'] ?? '') === 'Sales')
                                        <span style="background: #059669; color: white; padding: 2px 6px; border-radius: 3px; font-size: 12px;">
                                            {{ $transaction['type'] }}
                                        </span>
                                    @else
                                        <span style="background: #3b82f6; color: white; padding: 2px 6px; border-radius: 3px; font-size: 12px;">
                                            {{ $transaction['type'] ?? '' }}
                                        </span>
                                    @endif
                                </td>
                                <td>
                                    <span style="background: #6b7280; color: white; padding: 2px 6px; border-radius: 3px; font-size: 12px;">
                                        {{ $transaction['source'] ?? '' }}
                                    </span>
                                </td>
                                <td>{!! formatPdfCurrency($transaction['vat_amount'] ?? 0) !!}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            <div style="text-align: center; color: #6b7280; margin-top: 15px;">
                @lang('print.Total transactions'): {{ count($vatReportData['transactions']) }}
            </div>
        </div>
    @endif

    @if((!isset($vatReportData['summary']) || count($vatReportData['summary']) === 0) && (!isset($vatReportData['transactions']) || count($vatReportData['transactions']) === 0))
        <div class="alert alert-info" style="background: #e0f2fe; border: 1px solid #0288d1; color: #01579b; padding: 15px; border-radius: 5px;">
            @lang('print.No VAT data found for the selected period.')
        </div>
    @endif

    <script>
        function downloadPDF() {
            // Get current URL parameters to maintain filters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Build PDF URL with same parameters
            let pdfUrl = '/vat-report/pdf';
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

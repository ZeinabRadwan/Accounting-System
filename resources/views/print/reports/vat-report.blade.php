@php
    $currentLocale = $locale ?? app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}" id="pdfContent">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VAT Report</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <style>
        @font-face {
            font-family: 'DINNextLTArabic';
            src: url('data:font/truetype;charset=utf-8;base64,AAEAAAAQAQAABAAAR0RFRr0Hn+QAAAI8AAACGEdQT1OOWAWJAABV9AAAYmZHU1VCiCdPCwAAKbgAAA84T1MvMql1jZoAAAHcAAAAYFNUQVTxa9kpAAABmAAAAERjbWFw5H2zVgAAE5gAAAlIZ2FzcAAAABAAAAEUAAAACGdseWYlBDkyAAC4XAAAuLRoZWFkJQKeYgAAAWAAAAA2aGhlYQq9Bl8AAAE8AAAAJGhtdHhDdWI+AAAc4AAADNZsb2Nh+MrKOQAABFQAAAZubWF4cANSAQcAAAEcAAAAIG5hbWU/41TYAAAKxAAACNRwb3N042TgLgAAOPAAAB0CcHJlcGgGjIUAAAEMAAAAB7gB/4WwBI0AAAEAAf//AA8AAQAAAzYAcAAMAJUADAABAAAAAAAAAAAAAAAAAAMAAQABAAAFF/3FAAAGb/8g/vUGgwABAAAAAAAAAAAAAAAAAAADNQABAAAAAyFIv2jFeV8PPPUAAwPoAAAAAOAanXsAAAAA4CucLv8g/lIGgwQ8AAAABgACAAAAAAAAAAEAAQAIAAIAAAAUAAIAAAAkAAJzbG50AQEAAHdnaHQBAAABABQABAADAAEAAgEEAZAAAAK8AAAAAQAAAAIBHgAAAAAABAJjAZAABQAAAooCWAAAAEsCigJYAAABXgAyASwAAAAAAAAAAAAAAACgACCvkAAgSwAAAAgAAAAAMUtURgDAABD+/AUX/cUAAAUgAjsgAADTAAgAAAH0ArwAAAAgAAQAAQACAW4AAAAOAAABugDoAHIBWAFYAVgBWAFYAVgBWAFYAVgBUAFQAUgBQAFAAUABOAE4AVgBUAFQAUgBQAFAAUABUAFQAUgBQAFAAUABUAFQAUgBQAFAAUABMAEwASgBKAEoASgBMAEwASABIAEgASABKAEoATABMAEwATABIAEgASABKAEoATABMAEwATABIAEgAS [... omitted for brevity]');
            font-weight: normal;
            font-style: normal;
        }

        body {
            font-family: 'DINNextLTArabic' !important;
            padding: 5mm !important;
            font-size: {{ $template->template_config['typography']['baseFontSize'] ?? 14 }}px;
            line-height: 1.6;
            color: {{ $template->template_config['colors']['secondary'] ?? '#6b7280' }};
            background: {{ $template->template_config['colors']['background'] ?? '#ffffff' }};
            margin: 0;
            padding: {{ $template->template_config['layout']['margins'] ?? 20 }}mm;
            min-height: 100vh;
            direction: {{ $isRTL ? 'rtl' : 'ltr' }};
        }

        @page {
            size: landscape;
        }

        @media print {
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }

            body {
                margin: 0 !important;
                padding: {{ $template->template_config['layout']['margins'] ?? 20 }}mm !important;
                font-family: 'DINNextLTArabic' !important;
            }

            .no-print,
            .print-button,
            .pdf-button,
            .action-buttons {
                display: none !important;
            }

            .page-break {
                page-break-before: always;
            }

            .avoid-break {
                page-break-inside: avoid;
            }

            .report-header {
                page-break-inside: avoid;
                page-break-after: avoid;
            }

            .report-header,
            .report-header * {
                position: relative !important;
            }

            #document-container {
                position: relative !important;
            }

            #document-container > * {
                position: relative !important;
            }

            /* Prevent table header from repeating on each page */
            thead {
                display: table-row-group !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            thead tr {
                display: table-row !important;
                page-break-inside: avoid;
                page-break-after: auto;
            }

            table {
                page-break-inside: auto;
            }

            tbody {
                display: table-row-group !important;
            }

            tbody tr {
                page-break-inside: avoid;
                page-break-after: auto;
            }
        }
    </style>

    @if($template && $template->css_styles)
        <style>
            {!! $template->css_styles !!}
        </style>
    @endif
</head>

<body>
   

    <div id="document-container" style="max-width: 100%; margin: 0 auto;">
        <div style="position: relative;">
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
        
        // Custom currency formatter for PDF - no currency symbols
        function formatPdfCurrency($amount) {
            $formattedAmount = number_format($amount, 2, '.', ',');
            return $formattedAmount;
        }
    @endphp

    @if(($elements['showLogo'] ?? true) || ($elements['showCompanyInfo'] ?? true))
    <!-- Header -->
    <div class="report-header" style="border-bottom: 2px solid #e5e7eb; margin-bottom: 30px; padding-bottom: 20px; page-break-inside: avoid; page-break-after: avoid;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; {{ $isRTL ? 'flex-direction: row-reverse;' : '' }}">
            <div style="text-align: {{ $isRTL ? 'right' : 'left' }}; {{ $isRTL ? 'direction: rtl;' : '' }}">
                @if($elements['showLogo'] ?? true)
                <div style="margin-bottom: 15px; text-align: {{ $isRTL ? 'right' : 'left' }};">
                    <img src="{{ $logoBase64 ?? $template->logo_url ?? '' }}" 
                         alt="@lang('print.Company Logo')" style="max-height: 120px; margin-bottom: 15px; max-width: 200px; height: auto; width: auto;">
                </div>
                @endif
                
                @if($elements['showCompanyInfo'] ?? true)
                <h1 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: {{ $typography['headerFontSize'] ?? 24 }}px; margin: 0 0 10px 0; text-align: {{ $isRTL ? 'right' : 'left' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                    {{ $companyName }}
                </h1>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'right' : 'left' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                    {{ $companyAddress }}
                </p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'right' : 'left' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                    {{ $companyPhone }} • {{ $companyEmail }}
                </p>
                @endif
            </div>
            <div style="text-align: {{ $isRTL ? 'left' : 'right' }}; {{ $isRTL ? 'direction: ltr;' : '' }}">
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('print.This report was generated on') {{ date('d-M-Y') }}
                </p>
            </div>
        </div>
    </div>
    @endif

    <!-- Report Title -->
    <div style="text-align: center; margin: 20px 0;">
        <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin: 0;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.VAT Report')</h2>
        @if(isset($vatReportData['filters']['from_date']) && isset($vatReportData['filters']['to_date']))
            <p style="margin: 5px 0; color: {{ $colors['secondary'] ?? '#6b7280' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                @lang('print.Period'): {{ $vatReportData['filters']['from_date'] }} - {{ $vatReportData['filters']['to_date'] }}
            </p>
        @endif
    </div>

    <!-- VAT Summary -->
    @if(isset($vatReportData['summary']) && count($vatReportData['summary']) > 0)
        <div style="margin-bottom: 30px;">
            <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 15px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.VAT Summary')</h3>
            
            <div>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                    <thead style="display: table-row-group !important;">
                        <tr style="background: {{ $colors['accent'] ?? '#f8fafc' }};">
                            <th style="padding: 12px; text-align: {{ $isRTL ? 'right' : 'left' }}; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.VAT Rate')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Rate %')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Sales VAT')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Purchase VAT')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Journal VAT')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Net VAT')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($vatReportData['summary'] as $summary)
                            <tr>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                                    <strong>{{ $summary['vat_rate_name'] ?? '' }}</strong><br>
                                    <small style="color: #6b7280;">{{ $summary['vat_rate_code'] ?? '' }}</small>
                                </td>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">{{ $summary['vat_rate_percentage'] ?? 0 }}%</td>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">{!! formatPdfCurrency($summary['sales_vat'] ?? 0) !!}</td>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">{!! formatPdfCurrency($summary['purchase_vat'] ?? 0) !!}</td>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">{!! formatPdfCurrency($summary['journal_vat'] ?? 0) !!}</td>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
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
        <div>
            <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 15px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.VAT Transactions')</h3>
            
            <div>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                    <thead style="display: table-row-group !important;">
                        <tr style="background: {{ $colors['accent'] ?? '#f8fafc' }};">
                            <th style="padding: 12px; text-align: {{ $isRTL ? 'right' : 'left' }}; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Date')</th>
                            <th style="padding: 12px; text-align: {{ $isRTL ? 'right' : 'left' }}; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Reference')</th>
                            <th style="padding: 12px; text-align: {{ $isRTL ? 'right' : 'left' }}; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Client/Supplier')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Type')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Source')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.VAT Amount')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($vatReportData['transactions'] as $transaction)
                            <tr>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">{{ $transaction['date'] ?? '' }}</td>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">{{ $transaction['reference'] ?? '' }}</td>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">{{ $transaction['client_supplier'] ?? '' }}</td>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
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
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                    <span style="background: #6b7280; color: white; padding: 2px 6px; border-radius: 3px; font-size: 12px;">
                                        {{ $transaction['source'] ?? '' }}
                                    </span>
                                </td>
                                <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">{!! formatPdfCurrency($transaction['vat_amount'] ?? 0) !!}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            <div style="text-align: center; color: #6b7280; margin-top: 15px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                @lang('print.Total transactions'): {{ count($vatReportData['transactions']) }}
            </div>
        </div>
    @endif

    @if((!isset($vatReportData['summary']) || count($vatReportData['summary']) === 0) && (!isset($vatReportData['transactions']) || count($vatReportData['transactions']) === 0))
        <div style="background: #e0f2fe; border: 1px solid #0288d1; color: #01579b; padding: 15px; border-radius: 5px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
            @lang('print.No VAT data found for the selected period.')
        </div>
    @endif

    @if($elements['showFooter'] ?? true)
    <!-- Footer -->
    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; font-style: italic;">
        <p style="text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: 12px; margin: 20px 0 0 0;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
            @lang('This report was generated on') {{ now()->format('Y-m-d H:i:s') }}
        </p>
    </div>
    @endif


    <script>
        // Handle print events
        window.addEventListener('beforeprint', function() {
            console.log('Preparing to print...');
        });
        
        window.addEventListener('afterprint', function() {
            console.log('Print completed');
        });
    </script>
  </div>
    </div>


   

</body>

</html>

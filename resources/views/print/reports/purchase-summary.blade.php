@php
    $currentLocale = $locale ?? app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}" id="pdfContent">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purchase Summary</title>
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
                         alt="@lang('Company Logo')" style="max-height: 120px; margin-bottom: 15px; max-width: 200px; height: auto; width: auto;">
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
                @if($elements['showReportTitle'] ?? true)
                <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 24px; margin: 0 0 15px 0; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('print.Purchase Summary')
                </h2>
                @endif
                
                @if($elements['showPeriod'] ?? true && isset($purchaseSummaryData['filters']['from_date']) && isset($purchaseSummaryData['filters']['to_date']))
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('print.Period'): {{ $purchaseSummaryData['filters']['from_date'] ?? '' }} - {{ $purchaseSummaryData['filters']['to_date'] ?? '' }}
                </p>
                @endif
                
                @if($elements['showGeneratedDate'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('print.Generated'): {{ now()->format('Y-m-d H:i:s') }}
                </p>
                @endif
            </div>
        </div>
    </div>
    @endif

    <!-- Summary Section -->
    @if($elements['showSummary'] ?? true && isset($purchaseSummaryData['summary']))
    <div style="margin: 20px 0 30px 0; width: 100%;">
        <table style="width: 100%; border-collapse: separate; border-spacing: 15px;">
            <tr>
                <td style="width: 22%; padding: 0; vertical-align: top;">
                    <div style="padding: 18px; background: #dcfce7; border: 2px solid #e5e7eb; border-radius: 10px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h4 style="margin: 0 0 10px 0; color: #166534; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">@lang('print.Total Suppliers')</h4>
                        <p style="margin: 0; font-size: 20px; font-weight: bold; color: #166534;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            {{ $purchaseSummaryData['summary']['total_suppliers'] ?? 0 }}
                        </p>
                    </div>
                </td>
                <td style="width: 22%; padding: 0; vertical-align: top;">
                    <div style="padding: 18px; background: #dbeafe; border: 2px solid #e5e7eb; border-radius: 10px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h4 style="margin: 0 0 10px 0; color: #1e40af; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">@lang('print.Total Purchases')</h4>
                        <p style="margin: 0; font-size: 20px; font-weight: bold; color: #1e40af;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            {{ $purchaseSummaryData['summary']['total_purchases'] ?? 0 }}
                        </p>
                    </div>
                </td>
                <td style="width: 22%; padding: 0; vertical-align: top;">
                    <div style="padding: 18px; background: #fef3c7; border: 2px solid #e5e7eb; border-radius: 10px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h4 style="margin: 0 0 10px 0; color: #92400e; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">@lang('print.Total Amount')</h4>
                        <p style="margin: 0; font-size: 20px; font-weight: bold; color: #92400e;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            {!! formatPdfCurrency($purchaseSummaryData['summary']['total_amount'] ?? 0) !!}
                        </p>
                    </div>
                </td>
                <td style="width: 22%; padding: 0; vertical-align: top;">
                    <div style="padding: 18px; background: #fee2e2; border: 2px solid #e5e7eb; border-radius: 10px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h4 style="margin: 0 0 10px 0; color: #991b1b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">@lang('print.Total Due')</h4>
                        <p style="margin: 0; font-size: 20px; font-weight: bold; color: #991b1b;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            {!! formatPdfCurrency($purchaseSummaryData['summary']['total_due'] ?? 0) !!}
                        </p>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    @endif

    <!-- Report Content -->
    <div>
        @if($elements['showDataTable'] ?? true)
        <div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                <thead style="display: table-row-group !important;">
                    <tr style="background: {{ $colors['accent'] ?? '#f8fafc' }};">
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @lang('print.Row Number')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @lang('print.Supplier Name')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @lang('print.Total Purchases')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @lang('print.Total Amount')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @lang('print.Total Tax')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @lang('print.Total Paid')
                        </th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @lang('print.Total Due')
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($purchaseSummaryData['suppliers']) && count($purchaseSummaryData['suppliers']) > 0)
                        @foreach($purchaseSummaryData['suppliers'] as $index => $supplier)
                        <tr style="{{ $index % 2 === 0 ? 'background: ' . ($colors['accent'] ?? '#f8fafc') . ';' : '' }}">
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                {{ $index + 1 }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                                {{ $supplier['supplier_name'] ?? 'Unknown Supplier' }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                {{ $supplier['total_purchases'] ?? 0 }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                {!! formatPdfCurrency($supplier['total_amount'] ?? 0) !!}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                {!! formatPdfCurrency($supplier['total_tax'] ?? 0) !!}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                {!! formatPdfCurrency($supplier['total_paid'] ?? 0) !!}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                {!! formatPdfCurrency($supplier['total_due'] ?? 0) !!}
                            </td>
                        </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="7" style="padding: 20px; text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }}; border: 1px solid #e5e7eb;">
                                @lang('print.No suppliers found for the selected period.')
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
    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; font-style: italic;">
        <p style="text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: 12px; margin: 20px 0 0 0;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
            @lang('print.This report was generated on') {{ now()->format('Y-m-d H:i:s') }}
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

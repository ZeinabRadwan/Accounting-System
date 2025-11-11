@php
    $currentLocale = $locale ?? app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}" id="pdfContent">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventory Report</title>
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

        .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        .table th,
        .table td {
            padding: 12px;
            text-align: center;
            border: 1px solid #e5e7eb;
        }

        .table th {
            background-color: #f9fafb;
            font-weight: 600;
        }

        .table-striped tbody tr:nth-of-type(odd) {
            background-color: #f9fafb;
        }

        .text-right {
            text-align: right;
        }

        .text-center {
            text-align: center;
        }

        .table-info {
            background-color: #d1ecf1 !important;
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
                <div style="display: flex; justify-content: space-between; align-items: center; flex-direction: {{ $isRTL ? 'row-reverse' : 'row' }};">
                    @if($elements['showLogo'] ?? true)
                        <div style="flex: 0 0 auto;">
                            @if($logoBase64)
                                <img src="data:image/png;base64,{{ $logoBase64 }}" alt="Logo" style="max-height: 80px; max-width: 200px; object-fit: contain;">
                            @elseif($template->logo_path)
                                <img src="{{ asset($template->logo_path) }}" alt="Logo" style="max-height: 80px; max-width: 200px; object-fit: contain;">
                            @endif
                        </div>
                    @endif
                    @if($elements['showCompanyInfo'] ?? true)
                        <div style="flex: 1; text-align: {{ $isRTL ? 'right' : 'left' }}; {{ $isRTL ? 'margin-right' : 'margin-left' }}: 20px;">
                            <h2 style="margin: 0 0 10px 0; color: {{ $colors['primary'] ?? '#1f2937' }}; font-size: {{ ($typography['headingSize'] ?? 24) }}px; font-weight: bold;">{{ $companyName }}</h2>
                            @if($companyAddress)
                                <p style="margin: 5px 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: {{ ($typography['baseFontSize'] ?? 14) }}px;">{{ $companyAddress }}</p>
                            @endif
                            @if($companyPhone)
                                <p style="margin: 5px 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: {{ ($typography['baseFontSize'] ?? 14) }}px;">{{ $companyPhone }}</p>
                            @endif
                            @if($companyEmail)
                                <p style="margin: 5px 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: {{ ($typography['baseFontSize'] ?? 14) }}px;">{{ $companyEmail }}</p>
                            @endif
                        </div>
                    @endif
                </div>
            </div>
            @endif

            <!-- Report Title -->
            <div class="text-center mb-4" style="margin-bottom: 30px;">
                <h2 style="margin: 0 0 10px 0; color: {{ $colors['primary'] ?? '#1f2937' }}; font-size: {{ ($typography['headingSize'] ?? 24) }}px; font-weight: bold;">@lang('print.Inventory Report')</h2>
                @if(isset($inventoryReportData['filters']['from_date']) && isset($inventoryReportData['filters']['to_date']))
                    <h4 style="margin: 5px 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: {{ ($typography['baseFontSize'] ?? 14) + 2 }}px;">@lang('print.Period'): {{ $inventoryReportData['filters']['from_date'] }} - {{ $inventoryReportData['filters']['to_date'] }}</h4>
                @endif
                @if(isset($inventoryReportData['filters']['category']))
                    <h5 style="margin: 5px 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: {{ ($typography['baseFontSize'] ?? 14) + 1 }}px;">@lang('print.Category'): {{ $inventoryReportData['filters']['category'] }}</h5>
                @endif
                @if(isset($inventoryReportData['filters']['sub_category']))
                    <h5 style="margin: 5px 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: {{ ($typography['baseFontSize'] ?? 14) + 1 }}px;">@lang('print.Sub Category'): {{ $inventoryReportData['filters']['sub_category'] }}</h5>
                @endif
                @if(isset($inventoryReportData['filters']['item_name']))
                    <h5 style="margin: 5px 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: {{ ($typography['baseFontSize'] ?? 14) + 1 }}px;">@lang('print.Product'): {{ $inventoryReportData['filters']['item_name'] }}</h5>
                @endif
            </div>

            @if(isset($inventoryReportData['data']) && count($inventoryReportData['data']) > 0)
                <!-- Inventory Table -->
                <div class="table-responsive" style="overflow-x: auto;">
                    <table class="table table-bordered table-striped table-sm">
                        <thead>
                            <tr>
                                <th>@lang('print.#')</th>
                                <th>@lang('print.Code')</th>
                                <th>@lang('print.Name')</th>
                                <th>@lang('print.Stock In')</th>
                                <th>@lang('print.Stock Out')</th>
                                <th>@lang('print.Stock in Hand')</th>
                            </tr>
                        </thead>
                        <tbody>
                            @php
                                $totalStockIn = 0;
                                $totalStockOut = 0;
                                $totalStockInHand = 0;
                            @endphp
                            @foreach($inventoryReportData['data'] as $index => $item)
                                <tr>
                                    <td>{{ $index + 1 }}</td>
                                    <td>{{ $item['productCode'] ?? '' }}</td>
                                    <td>{{ $item['productName'] ?? '' }}</td>
                                    <td class="text-right">{{ $item['stockIn'] ?? 0 }}</td>
                                    <td class="text-right">{{ $item['stockOut'] ?? 0 }}</td>
                                    <td class="text-right">{{ $item['availableStock'] ?? 0 }}</td>
                                </tr>
                                @php
                                    $totalStockIn += $item['stockIn'] ?? 0;
                                    $totalStockOut += $item['stockOut'] ?? 0;
                                    $totalStockInHand += $item['availableStock'] ?? 0;
                                @endphp
                            @endforeach
                            <tr class="table-info">
                                <td colspan="3" class="text-right"><strong>@lang('print.Total Quantity')</strong></td>
                                <td class="text-right"><strong>{{ $totalStockIn }}</strong></td>
                                <td class="text-right"><strong>{{ $totalStockOut }}</strong></td>
                                <td class="text-right"><strong>{{ $totalStockInHand }}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            @else
                <div class="text-center mt-5" style="margin-top: 50px; text-align: center;">
                    <h4 style="color: {{ $colors['secondary'] ?? '#6b7280' }};">@lang('print.No inventory data found for the selected period.')</h4>
                </div>
            @endif
        </div>
    </div>
</body>

</html>

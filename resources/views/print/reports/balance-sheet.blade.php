@php
    $currentLocale = $locale ?? app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}" id="pdfContent">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Balance Sheet</title>
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
                    @lang('Balance Sheet')
                </h2>
                @endif
                
                @if($elements['showPeriod'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('Period'): {{ $balanceData['filters']['from_date'] ?? '' }} - {{ $balanceData['filters']['to_date'] ?? '' }}
                </p>
                @endif
                
                @if($elements['showGeneratedDate'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('Generated'): {{ now()->format('Y-m-d H:i:s') }}
                </p>
                @endif
            </div>
        </div>
    </div>
    @endif

    <!-- Report Content -->
    <div>
        @if($elements['showDataTable'] ?? true)
        <div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                <thead style="display: table-row-group !important;">
                    <tr style="background: {{ $colors['accent'] ?? '#f8fafc' }};">
                        <th colspan="2" style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @lang('Assets')
                        </th>
                        <th colspan="2" style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
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
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                                @if(isset($balanceData['accounts']['assets'][$i]))
                                    {{ $balanceData['accounts']['assets'][$i]['name'] }} ({{ $balanceData['accounts']['assets'][$i]['code'] }})
                                @endif
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                @if(isset($balanceData['accounts']['assets'][$i]))
                                    @if($balanceData['accounts']['assets'][$i]['balance_type'] === 'Debit')
                                        <span style="color: #059669;">{!! formatPdfCurrency($balanceData['accounts']['assets'][$i]['absolute_balance']) !!}</span>
                                    @else
                                        <span style="color: #dc2626;">({!! formatPdfCurrency($balanceData['accounts']['assets'][$i]['absolute_balance']) !!})</span>
                                    @endif
                                @endif
                            </td>
                            
                            <!-- Liabilities & Equity Column -->
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                                @if(isset($balanceData['accounts']['liabilities'][$i]))
                                    {{ $balanceData['accounts']['liabilities'][$i]['name'] }} ({{ $balanceData['accounts']['liabilities'][$i]['code'] }})
                                @elseif(isset($balanceData['accounts']['equity'][$i - count($balanceData['accounts']['liabilities'] ?? [])]))
                                    @php $equityIndex = $i - count($balanceData['accounts']['liabilities'] ?? []); @endphp
                                    {{ $balanceData['accounts']['equity'][$equityIndex]['name'] }} ({{ $balanceData['accounts']['equity'][$equityIndex]['code'] }})
                                @endif
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
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
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">@lang('Net Income')</td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                @if($balanceData['totals']['net_income'] > 0)
                                    <span style="color: #dc2626;">{{ number_format($balanceData['totals']['net_income'], 2) }}</span>
                                @else
                                    <span style="color: #059669;">({{ number_format(abs($balanceData['totals']['net_income']), 2) }})</span>
                                @endif
                            </td>
                        </tr>
                        @endif
                        
                        <!-- Totals Row -->
                        <tr style="border-top: 2px solid {{ $colors['primary'] ?? '#2563eb' }}; font-weight: bold; background: {{ $colors['accent'] ?? '#f8fafc' }};">
                            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">@lang('Total Assets')</td>
                            <td style="padding: 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold; color: #059669; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                {{ number_format($balanceData['totals']['total_assets'] ?? 0, 2) }}
                            </td>
                            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">@lang('Total Liabilities & Equity')</td>
                            <td style="padding: 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold; color: #dc2626; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                                {{ number_format($balanceData['totals']['total_liabilities_and_equity'] ?? 0, 2) }}
                            </td>
                        </tr>
                    @else
                        <tr>
                            <td colspan="4" style="padding: 20px; text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }}; border: 1px solid #e5e7eb;">
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

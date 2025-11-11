@php
    $currentLocale = $locale ?? app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}" id="pdfContent">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Today Report</title>
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
                @if($elements['showReportTitle'] ?? true)
                <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 24px; margin: 0 0 15px 0; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('print.Today Report')
                </h2>
                @endif
                
                @if($elements['showPeriod'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    <strong>@lang('print.Report Date'):</strong> {{ date('Y-m-d') }}
                </p>
                @endif
            </div>
        </div>
    </div>
    @endif

    @if($reportData && count($reportData) > 0)
        <!-- Stock Information Section -->
        <div style="display: flex; gap: 20px; margin-bottom: 30px;">
            <div style="flex: 1;">
                <h4 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 15px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Opening Stock Information')</h4>
                <table style="width: 100%; border-collapse: collapse; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                    <tbody>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                                @lang('print.Opening Stock') <br><small style="color: #6b7280;">@lang('print.By purchase price')</small>:
                            </th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['openingStockByPurchasePrice'] ?? 0) }}</td>
                        </tr>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                                @lang('print.Opening Stock') <br><small style="color: #6b7280;">@lang('print.By sale price')</small>:
                            </th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['openingStockBySalePrice'] ?? 0) }}</td>
                        </tr>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                                @lang('print.Closing Stock') <br><small style="color: #6b7280;">@lang('print.By purchase price')</small>:
                            </th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['closingStockByPurchasePrice'] ?? 0) }}</td>
                        </tr>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                                @lang('print.Closing Stock') <br><small style="color: #6b7280;">@lang('print.By sale price')</small>:
                            </th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['closingStockBySalePrice'] ?? 0) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div style="flex: 1;">
                <h4 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 15px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Sales & Purchase Information')</h4>
                <table style="width: 100%; border-collapse: collapse; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                    <tbody>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Invoice Sales'):</th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['invoiceSales'] ?? 0) }}</td>
                        </tr>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Invoice Discount'):</th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['invoiceDiscount'] ?? 0) }}</td>
                        </tr>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Invoice Return'):</th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['invoiceReturn'] ?? 0) }}</td>
                        </tr>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Total Purchase'):</th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['totalPurchase'] ?? 0) }}</td>
                        </tr>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Purchase Return'):</th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['purchaseReturn'] ?? 0) }}</td>
                        </tr>
                        <tr style="border: 1px solid #e5e7eb;">
                            <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Purchase Discount'):</th>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['todayPurchaseDiscount'] ?? 0) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <div style="border-top: 2px solid #e5e7eb; margin: 30px 0;"></div>
        
        <!-- Expenses Section -->
        <div style="margin-bottom: 30px;">
            <h4 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 15px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Expenses Information')</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                <tbody>
                    <tr style="border: 1px solid #e5e7eb;">
                        <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Total Expense'):</th>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['expenses'] ?? 0) }}</td>
                    </tr>
                    <tr style="border: 1px solid #e5e7eb;">
                        <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Total Payroll'):</th>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['payrolls'] ?? 0) }}</td>
                    </tr>
                    <tr style="border: 1px solid #e5e7eb;">
                        <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Total Loan Interest'):</th>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['loanInterest'] ?? 0) }}</td>
                    </tr>
                    <tr style="border: 1px solid #e5e7eb;">
                        <th style="padding: 8px 12px; border: 1px solid #e5e7eb; background: {{ $colors['accent'] ?? '#f8fafc' }}; text-align: {{ $isRTL ? 'right' : 'left' }}; font-weight: 600;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Asset Depreciation'):</th>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">{{ formatPdfCurrency($reportData['assetDepriciation'] ?? 0) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div style="border-top: 2px solid #e5e7eb; margin: 30px 0;"></div>
        
        <!-- Profit/Loss Section -->
        <div style="background: {{ $colors['accent'] ?? '#f8fafc' }}; padding: 20px; border-radius: 5px; text-align: center; margin-bottom: 30px;">
            <div style="display: flex; gap: 20px; justify-content: center;">
                <div style="flex: 1;">
                    @if(($reportData['grossProfit'] ?? 0) >= 0)
                        <h3 style="color: #059669; font-weight: bold; margin: 0;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                            @lang('print.Gross Profit'): {{ formatPdfCurrency($reportData['grossProfit']) }}
                        </h3>
                    @else
                        <h3 style="color: #dc2626; font-weight: bold; margin: 0;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                            @lang('print.Gross Loss'): {{ formatPdfCurrency(abs($reportData['grossProfit'])) }}
                        </h3>
                    @endif
                </div>
                <div style="flex: 1;">
                    @if(($reportData['netProfit'] ?? 0) >= 0)
                        <h3 style="color: #059669; font-weight: bold; margin: 0;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                            @lang('print.Net Profit'): {{ formatPdfCurrency($reportData['netProfit']) }}
                        </h3>
                    @else
                        <h3 style="color: #dc2626; font-weight: bold; margin: 0;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
                            @lang('print.Net Loss'): {{ formatPdfCurrency(abs($reportData['netProfit'])) }}
                        </h3>
                    @endif
                </div>
            </div>
        </div>
    @else
        <div style="text-align: center; margin-top: 50px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
            <h4 style="color: {{ $colors['secondary'] ?? '#6b7280' }};">@lang('print.No data found for today.')</h4>
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

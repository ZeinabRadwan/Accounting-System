@php
    $currentLocale = $locale ?? app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}" id="pdfContent">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Report</title>
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
                    @lang('print.Expense Report')
                </h2>
                @endif
                
                @if($elements['showPeriod'] ?? true && isset($expensesReportData['filters']['from_date']) && isset($expensesReportData['filters']['to_date']))
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('print.Period'): {{ $expensesReportData['filters']['from_date'] }} - {{ $expensesReportData['filters']['to_date'] }}
                </p>
                @endif
                @if(isset($expensesReportData['filters']['category']))
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('print.Category'): {{ $expensesReportData['filters']['category'] }}
                </p>
                @endif
                @if(isset($expensesReportData['filters']['sub_category']))
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }}; text-align: {{ $isRTL ? 'left' : 'right' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: ltr;' : '' }}">
                    @lang('print.Sub Category'): {{ $expensesReportData['filters']['sub_category'] }}
                </p>
                @endif
            </div>
        </div>
    </div>
    @endif

    @if(isset($expensesReportData['data']) && count($expensesReportData['data']) > 0)
        <!-- Expenses Table -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
            <thead style="display: table-row-group !important;">
                <tr style="background: {{ $colors['accent'] ?? '#f8fafc' }};">
                    <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.#')</th>
                    <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Date')</th>
                    <th style="padding: 12px; text-align: {{ $isRTL ? 'right' : 'left' }}; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Expense Reason')</th>
                    <th style="padding: 12px; text-align: {{ $isRTL ? 'right' : 'left' }}; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Category')</th>
                    <th style="padding: 12px; text-align: {{ $isRTL ? 'right' : 'left' }}; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Sub Category')</th>
                    <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Amount')</th>
                    <th style="padding: 12px; text-align: {{ $isRTL ? 'right' : 'left' }}; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Account')</th>
                    <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};">@lang('print.Status')</th>
                    <th style="padding: 12px; text-align: {{ $isRTL ? 'right' : 'left' }}; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }}; font-weight: 600; background: {{ $colors['accent'] ?? '#f8fafc' }};{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">@lang('print.Created By')</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $totalAmount = 0;
                @endphp
                @foreach($expensesReportData['data'] as $index => $expense)
                    <tr>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">{{ $index + 1 }}</td>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">{{ isset($expense['date']) ? \Carbon\Carbon::parse($expense['date'])->format('d M, Y') : '' }}</td>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">{{ $expense['reason'] ?? '' }}</td>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @if(isset($expense['category']) && $expense['category'])
                                {{ $expense['category']['code'] ?? '' }}
                            @elseif(isset($expense['exp_sub_category']['exp_category']))
                                {{ $expense['exp_sub_category']['exp_category']['code'] ?? '' }}
                            @endif
                        </td>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @if(isset($expense['sub_category']) && $expense['sub_category'])
                                {{ $expense['sub_category']['code'] ?? '' }}
                            @elseif(isset($expense['exp_sub_category']))
                                {{ $expense['exp_sub_category']['code'] ?? '' }}
                            @endif
                        </td>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                            @php
                                $amount = 0;
                                if (isset($expense['transaction']['amount'])) {
                                    $amount = $expense['transaction']['amount'];
                                } elseif (isset($expense['exp_transaction']['amount'])) {
                                    $amount = $expense['exp_transaction']['amount'];
                                }
                                $totalAmount += $amount;
                            @endphp
                            {{ formatPdfCurrency($amount) }}
                        </td>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @if(isset($expense['transaction']['cashbook_account']))
                                {{ $expense['transaction']['cashbook_account']['account_number'] ?? '' }}
                            @elseif(isset($expense['exp_transaction']['cashbook_account']))
                                {{ $expense['exp_transaction']['cashbook_account']['account_number'] ?? '' }}
                            @endif
                        </td>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;">
                            @if(($expense['status'] ?? 0) == 1)
                                <span style="color: #059669;">@lang('print.Active')</span>
                            @else
                                <span style="color: #dc2626;">@lang('print.Inactive')</span>
                            @endif
                        </td>
                        <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl; text-align: right;' : '' }}">
                            @if(isset($expense['user']))
                                {{ $expense['user']['name'] ?? '' }}
                            @endif
                        </td>
                    </tr>
                @endforeach
                <tr style="background: {{ $colors['accent'] ?? '#f8fafc' }};">
                    <td colspan="5" style="padding: 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}"><strong>@lang('print.Total')</strong></td>
                    <td style="padding: 12px; border: 1px solid #e5e7eb; text-align: right; font-weight: bold; font-size: {{ $typography['baseFontSize'] ?? 12 }}px;"><strong>{{ formatPdfCurrency($totalAmount) }}</strong></td>
                    <td colspan="3" style="padding: 12px; border: 1px solid #e5e7eb;"></td>
                </tr>
            </tbody>
        </table>
    @else
        <div style="text-align: center; margin-top: 50px;{{ app()->getLocale() === 'ar' ? ' font-family: DINNextLTArabic !important; direction: rtl;' : '' }}">
            <h4 style="color: {{ $colors['secondary'] ?? '#6b7280' }};">@lang('print.No expenses found for the selected period.')</h4>
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

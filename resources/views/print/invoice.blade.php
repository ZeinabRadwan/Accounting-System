@php
    $currentLocale = $locale ?? app()->getLocale();
    $isRTL = $currentLocale === 'ar';
    
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
    $invoiceFooterText = $settings->where('key', 'invoice_footer_text')->first()?->value ?? '';
    
    // Custom currency formatter for PDF - no currency symbols
    function formatPdfCurrency($amount) {
        $formattedAmount = number_format($amount, 2, '.', ',');
        return $formattedAmount;
    }
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}" id="pdfContent">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>
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
            font-size: {{ $typography['baseFontSize'] ?? 14 }}px;
            line-height: 1.6;
            color: {{ $colors['secondary'] ?? '#6b7280' }};
            background: {{ $colors['background'] ?? '#ffffff' }};
            margin: 0;
            padding: {{ $config['layout']['margins'] ?? 20 }}mm;
            min-height: 100vh;
            direction: {{ $isRTL ? 'rtl' : 'ltr' }};
        }

        @page {
            size: A4 portrait;
        }

        @media print {
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }

            body {
                margin: 0 !important;
                padding: {{ $config['layout']['margins'] ?? 20 }}mm !important;
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

            .document-header {
                page-break-inside: avoid;
                page-break-after: avoid;
            }

            .document-header,
            .document-header * {
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

        .document-header {
            border-bottom: 2px solid #e5e7eb;
            margin-bottom: 30px;
            padding-bottom: 20px;
            page-break-inside: avoid;
            page-break-after: avoid;
        }

        .document-header > div {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: {{ $isRTL ? 'row-reverse' : 'row' }};
        }

        .company-logo {
            max-height: 80px;
            max-width: 200px;
            object-fit: contain;
            margin-bottom: 15px;
        }

        .document-info {
            text-align: {{ $isRTL ? 'left' : 'right' }};
        }

        .client-info {
            margin-bottom: 30px;
            padding: 15px;
            background-color: #f9fafb;
            border-radius: 8px;
        }

        .items-section {
            margin-bottom: 30px;
        }

        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        .items-table th,
        .items-table td {
            padding: 12px;
            text-align: center;
            border: 1px solid #e5e7eb;
        }

        .items-table th {
            background-color: #f9fafb;
            font-weight: 600;
        }

        .items-table tbody tr:nth-of-type(odd) {
            background-color: #f9fafb;
        }

        .text-right {
            text-align: right;
        }

        .text-center {
            text-align: center;
        }

        .totals-section {
            margin-top: 30px;
            display: flex;
            justify-content: {{ $isRTL ? 'flex-start' : 'flex-end' }};
        }

        .totals-table {
            width: 300px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 15px;
            background-color: #f9fafb;
        }

        .total-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }

        .total-row:last-child {
            border-bottom: none;
        }

        .total-final {
            font-weight: bold;
            font-size: {{ ($typography['baseFontSize'] ?? 14) + 2 }}px;
            color: {{ $colors['primary'] ?? '#2563eb' }};
            margin-top: 10px;
            padding-top: 10px;
            border-top: 2px solid {{ $colors['primary'] ?? '#2563eb' }};
        }

        .document-footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
        }

        .arabic-text {
            direction: rtl;
            text-align: right;
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
            @if(($elements['showLogo'] ?? true) || ($elements['showCompanyInfo'] ?? true))
            <!-- Header -->
            <div class="document-header">
                <div>
                    <div>
                        @if($elements['showLogo'] ?? true)
                        <div style="margin-bottom: 15px;">
                            @if($logoBase64)
                                <img src="data:image/png;base64,{{ $logoBase64 }}" alt="@lang('print.Company Logo')" class="company-logo">
                            @elseif($template && $template->logo_path)
                                <img src="{{ asset($template->logo_path) }}" alt="@lang('print.Company Logo')" class="company-logo">
                            @endif
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
                        <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 24px; margin: 0 0 15px 0;">
                            @lang('print.Invoice')
                        </h2>
                        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                            @lang('print.Invoice #'): {{ $invoice->invoice_no }}
                        </p>
                        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                            @lang('print.Date'): {{ \Carbon\Carbon::parse($invoice->invoice_date)->format('M d, Y') }}
                        </p>
                        @if($invoice->dueDate)
                        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                            @lang('print.Due Date'): {{ \Carbon\Carbon::parse($invoice->dueDate)->format('M d, Y') }}
                        </p>
                        @endif
                    </div>
                </div>
            </div>
            @endif
            
            @if($elements['showClientInfo'] ?? true)
            <!-- Client Info -->
            <div class="client-info">
                <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 10px;">@lang('print.Bill To'):</h3>
                <p style="margin: 0; font-weight: 600;" class="arabic-text">{{ $invoice->client->name ?? __('print.N/A') }}</p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $invoice->client->address ?? __('print.N/A') }}
                </p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $invoice->client->email ?? __('print.N/A') }} • {{ $invoice->client->phone ?? __('print.N/A') }}
                </p>
            </div>
            @endif
            
            @if($elements['showItemsTable'] ?? true)
            <!-- Items Table -->
            <div class="items-section">
                <table class="items-table">
                    <thead>
                        <tr>
                            <th class="text-center">@lang('print.Row Number')</th>
                            <th class="text-center">@lang('print.Product Code')</th>
                            <th class="text-center">@lang('print.Product Name')</th>
                            <th class="text-center">@lang('print.Quantity')</th>
                            @if($invoice->invoiceReturn)
                            <th class="text-center">@lang('print.Return Quantity')</th>
                            @endif
                            <th class="text-right">@lang('print.Price')</th>
                            <th class="text-right">@lang('print.Total')</th>
                            <th class="text-center">@lang('print.Discount')</th>
                            <th class="text-right">@lang('print.Total After Discount')</th>
                            <th class="text-right">@lang('print.VAT')</th>
                            <th class="text-right">@lang('print.Total with Tax')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($invoice->invoiceProducts as $index => $product)
                        <tr>
                            <td class="text-center">{{ $index + 1 }}</td>
                            <td class="text-center">{{ $product->product->code ?? __('print.N/A') }}</td>
                            <td>
                                <strong>{{ $product->product->name ?? __('print.N/A') }}</strong>
                                @if($product->product->description)
                                <br><small style="color: {{ $colors['secondary'] ?? '#6b7280' }};">{{ $product->product->description }}</small>
                                @endif
                            </td>
                            <td class="text-center">{{ $product->quantity }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                            @if($invoice->invoiceReturn)
                            <td class="text-center">{{ $product->invoiceReturnQty ?? 0 }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                            @endif
                            <td class="text-right">{{ formatPdfCurrency($product->sale_price) }}</td>
                            <td class="text-right">{{ formatPdfCurrency($product->quantity * $product->sale_price) }}</td>
                            <td class="text-center">
                                @if($product->discount > 0)
                                    @if($product->discount_type === 'percentage')
                                        {{ $product->discount }}% ({{ formatPdfCurrency($product->discount_amount ?? 0) }})
                                    @else
                                        {{ formatPdfCurrency($product->discount_amount ?? 0) }}
                                    @endif
                                @else
                                    @lang('print.No Discount')
                                @endif
                            </td>
                            <td class="text-right">{{ formatPdfCurrency($product->getTotalAfterDiscountAttribute()) }}</td>
                            <td class="text-right">
                                @if($product->tax_amount > 0)
                                    {{ formatPdfCurrency($product->tax_amount) }}
                                @else
                                    @lang('print.No VAT')
                                @endif
                            </td>
                            <td class="text-right">{{ formatPdfCurrency($product->getTotalAfterDiscountAttribute() + $product->tax_amount) }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            @endif
            
            @if($elements['showTotals'] ?? true)
            <!-- Totals -->
            <div class="totals-section">
                <div class="totals-table">
                    @php
                        // Calculate totals similar to quotation structure
                        // Calculate subtotal from actual products (sum of quantity × price)
                        $subtotal = $invoice->invoiceProducts->sum(function($product) {
                            return $product->quantity * $product->sale_price;
                        });
                        
                        // Calculate total product discount
                        $totalProductDiscount = $invoice->invoiceProducts->sum(function($product) {
                            return $product->discount_amount ?? 0;
                        });
                        
                        // Calculate total product VAT
                        $totalProductVat = $invoice->invoiceProducts->sum('tax_amount');
                        
                        $totalAfterDiscount = $subtotal - $totalProductDiscount;
                        $totalWithVat = $totalAfterDiscount + $totalProductVat;
                    @endphp
                    
                    <div class="total-row">
                        <span>@lang('print.Subtotal'):</span>
                        <span>{{ formatPdfCurrency($subtotal) }}</span>
                    </div>
                    
                    <div class="total-row">
                        <span>@lang('print.Discount'):</span>
                        <span>{{ formatPdfCurrency($totalProductDiscount) }}</span>
                    </div>
                    
                    <div class="total-row">
                        <span>@lang('print.Total After Discount'):</span>
                        <span>{{ formatPdfCurrency($totalAfterDiscount) }}</span>
                    </div>
                    
                    @if($totalProductVat > 0)
                    <div class="total-row">
                        <span>@lang('print.VAT'):</span>
                        <span>{{ formatPdfCurrency($totalProductVat) }}</span>
                    </div>
                    @endif
                    
                    <div class="total-row total-final">
                        <span>@lang('print.Total with VAT'):</span>
                        <span>{{ formatPdfCurrency($totalWithVat) }}</span>
                    </div>
                </div>
            </div>
            @endif
            
            @if($elements['showFooter'] ?? true)
            <!-- Footer -->
            <div class="document-footer">
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('print.Thank you for your business!')
                </p>
                @if($invoiceFooterText)
                <p style="margin: 10px 0 0 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $invoiceFooterText }}
                </p>
                @endif
            </div>
            @endif
        </div>
    </div>
</body>

</html>

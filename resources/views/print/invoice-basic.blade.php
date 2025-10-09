@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice - {{ $invoice->invoice_no }}</title>
    <style>
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Inter', sans-serif; 
            font-size: 14px; 
            line-height: 1.6; 
            color: #6b7280; 
            background: #ffffff; 
            margin: 0; 
            padding: 20mm;
            direction: {{ $isRTL ? 'rtl' : 'ltr' }};
        }
        
        /* Arabic text support */
        .arabic-text {
            font-family: 'DejaVu Sans', 'Arial Unicode MS', 'Tahoma', sans-serif;
            direction: rtl;
            text-align: right;
        }
        
        /* RTL Support */
        @if($isRTL)
        .document-header > div {
            flex-direction: row-reverse;
        }
        
        .items-table th,
        .items-table td {
            text-align: {{ $isRTL ? 'right' : 'left' }};
        }
        
        .items-table .text-right {
            text-align: {{ $isRTL ? 'left' : 'right' }} !important;
        }
        @endif
        .document-container { max-width: 800px; margin: 0 auto; }
        h1, h2, h3 { color: #2563eb; }
        .document-header { border-bottom: 2px solid #e5e7eb; margin-bottom: 30px; padding-bottom: 20px; }
        .items-table th { background: #f8fafc; }
        .total-final { font-weight: 700; border-top: 2px solid #e5e7eb; }
        
        @media print {
            .no-print { display: none !important; }
            .print-button { display: none !important; }
        }
        
        .print-button {
            position: fixed; top: 20px; right: 20px; z-index: 1000;
            background: #667eea; color: white; border: none; padding: 12px 24px;
            border-radius: 8px; font-weight: 600; cursor: pointer;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        .print-button:hover { background: #5a67d8; transform: translateY(-2px); }
        
        .items-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .items-table th, .items-table td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
        .items-table th { background: #f8fafc; font-weight: 600; }
        .items-table .text-right { text-align: right; }
        .totals-section { display: flex; justify-content: flex-end; margin-bottom: 30px; }
        .totals-table { width: 300px; }
        .totals-table .total-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
        .totals-table .total-final { font-weight: 700; font-size: 16px; border-top: 2px solid #e5e7eb; border-bottom: 2px solid #e5e7eb; padding: 12px 0; }
        .document-footer { text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; font-style: italic; }
    </style>
</head>
<body>
    <button class="print-button no-print" onclick="window.print()">
        <i class="fas fa-print"></i> @lang('print.Print Document')
    </button>
    
    <div class="document-container">
        <!-- Header -->
        <div class="document-header">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    @php
                        $settings = \App\Models\GeneralSetting::get();
                        $companyName = $settings->where('key', 'company_name')->first()?->value ?? 'Company Name';
                        $companyAddress = $settings->where('key', 'address')->first()?->value ?? 'Company Address';
                        $companyPhone = $settings->where('key', 'phone_number')->first()?->value ?? 'Phone';
                        $companyEmail = $settings->where('key', 'email_address')->first()?->value ?? 'Email';
                    @endphp
                    <h1 style="font-size: 24px; margin: 0 0 10px 0;" class="arabic-text">{{ $companyName }}</h1>
                    <p style="margin: 0;">{{ $companyAddress }}</p>
                    <p style="margin: 0;">{{ $companyPhone }} • {{ $companyEmail }}</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 24px; margin: 0 0 15px 0;">@lang('print.Invoice')</h2>
                    <p style="margin: 0;">@lang('print.Invoice #'): {{ $invoice->invoice_no }}</p>
                    <p style="margin: 0;">@lang('print.Date'): {{ \Carbon\Carbon::parse($invoice->invoice_date)->format('M d, Y') }}</p>
                    @if($invoice->dueDate)
                    <p style="margin: 0;">@lang('print.Due Date'): {{ \Carbon\Carbon::parse($invoice->dueDate)->format('M d, Y') }}</p>
                    @endif
                </div>
            </div>
        </div>
        
        <!-- Client Info -->
        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 10px;">@lang('print.Bill To'):</h3>
            <p style="margin: 0; font-weight: 600;" class="arabic-text">{{ $invoice->client->name ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $invoice->client->address ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $invoice->client->email ?? __('print.N/A') }} • {{ $invoice->client->phone ?? __('print.N/A') }}</p>
        </div>
        
        <!-- Items Table -->
        <div style="margin-bottom: 30px;">
            <table class="items-table">
                <thead>
                    <tr>
                        <th>@lang('print.Product Name')</th>
                        <th class="text-right">@lang('print.Quantity')</th>
                        <th class="text-right">@lang('print.Price')</th>
                        <th class="text-right">@lang('print.Total')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($invoice->invoiceProducts as $product)
                    <tr>
                        <td>
                            <strong>{{ $product->product->name ?? __('print.N/A') }}</strong>
                            @if($product->product->description)
                            <br><small>{{ $product->product->description }}</small>
                            @endif
                        </td>
                        <td class="text-right">{{ $product->quantity }}</td>
                        <td class="text-right">{!! centralCurrencySymbolFormat($product->salePrice) !!}</td>
                        <td class="text-right">{!! centralCurrencySymbolFormat($product->quantity * $product->salePrice) !!}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        
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
                    <span>{!! centralCurrencySymbolFormat($subtotal) !!}</span>
                </div>
                
                <div class="total-row">
                    <span>@lang('print.Discount'):</span>
                    <span>{!! centralCurrencySymbolFormat($totalProductDiscount) !!}</span>
                </div>
                
                <div class="total-row">
                    <span>@lang('print.Total After Discount'):</span>
                    <span>{!! centralCurrencySymbolFormat($totalAfterDiscount) !!}</span>
                </div>
                
                @if($totalProductVat > 0)
                <div class="total-row">
                    <span>@lang('print.VAT'):</span>
                    <span>{!! centralCurrencySymbolFormat($totalProductVat) !!}</span>
                </div>
                @endif
                
                <div class="total-row total-final">
                    <span>@lang('print.Total with VAT'):</span>
                    <span>{!! centralCurrencySymbolFormat($totalWithVat) !!}</span>
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="document-footer">
            <p style="margin: 0;">@lang('print.Thank you for your business!')</p>
        </div>
    </div>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</body>
</html>

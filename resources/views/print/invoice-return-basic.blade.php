@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice Return - {{ $invoiceReturn->return_no }}</title>
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
        }
        body { direction: {{ $isRTL ? 'rtl' : 'ltr' }}; }
        .arabic-text { font-family: 'DejaVu Sans', 'Arial Unicode MS', 'Tahoma', sans-serif; direction: rtl; text-align: right; }
        @if($isRTL)
        .items-table th, .items-table td { text-align: right; }
        .items-table .text-right { text-align: left !important; }
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
        .return-info { margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px; }
        .return-info h4 { margin-bottom: 10px; color: #2563eb; }
        .return-info div { margin-bottom: 5px; }
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
                    <h1 style="font-size: 24px; margin: 0 0 10px 0;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">{{ $companyName }}</h1>
                    <p style="margin: 0;">{{ $companyAddress }}</p>
                    <p style="margin: 0;">{{ $companyPhone }} • {{ $companyEmail }}</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 24px; margin: 0 0 15px 0;">@lang('print.Invoice Return')</h2>
                    <p style="margin: 0;">@lang('print.Return #'): {{ $invoiceReturn->return_no }}</p>
                    <p style="margin: 0;">@lang('print.Date'): {{ \Carbon\Carbon::parse($invoiceReturn->date)->format('M d, Y') }}</p>
                    @if($invoiceReturn->invoice)
                    <p style="margin: 0;">@lang('print.Original Invoice #'): {{ $invoiceReturn->invoice->invoice_no }}</p>
                    @endif
                </div>
            </div>
        </div>
        
        <!-- Client Info -->
        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 10px;">@lang('print.Return From'):</h3>
            <p style="margin: 0; font-weight: 600;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">{{ $invoiceReturn->invoice->client->name ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $invoiceReturn->invoice->client->address ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $invoiceReturn->invoice->client->email ?? __('print.N/A') }} • {{ $invoiceReturn->invoice->client->phone ?? __('print.N/A') }}</p>
        </div>

        <!-- Return Information -->
        <div class="return-info">
            <h4>@lang('print.Return Details')</h4>
            <div>
                <strong>@lang('print.Reason'):</strong> {{ $invoiceReturn->reason ?? __('print.N/A') }}
            </div>
            <div>
                <strong>@lang('print.Status'):</strong> 
                <span style="color: {{ $invoiceReturn->status ? '#28a745' : '#dc3545' }};">
                    {{ $invoiceReturn->status ? __('print.Active') : __('print.Inactive') }}
                </span>
            </div>
            @if($invoiceReturn->user)
            <div>
                <strong>@lang('print.Created By'):</strong> {{ $invoiceReturn->user->name ?? __('print.N/A') }}
            </div>
            @endif
            @if($invoiceReturn->note)
            <div>
                <strong>@lang('print.Note'):</strong> {{ $invoiceReturn->note }}
            </div>
            @endif
        </div>
        
        <!-- Items Table -->
        <div style="margin-bottom: 30px;">
            <table class="items-table">
                <thead>
                    <tr>
                        <th>@lang('print.Product Name')</th>
                        <th class="text-right">@lang('print.Invoice Quantity')</th>
                        <th class="text-right">@lang('print.Return Quantity')</th>
                        <th class="text-right">@lang('print.Price')</th>
                        <th class="text-right">@lang('print.Return Total')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($invoiceReturn->invoiceReturnProducts as $product)
                    @php
                        // Get the original invoice product data
                        $invoice = $invoiceReturn->invoice;
                        $invoiceProducts = $invoice ? $invoice->invoiceProducts : collect();
                        $invoiceProduct = $invoiceProducts->firstWhere('product_id', $product->product_id);
                        
                        if (!$invoiceProduct) {
                            // Try to load it directly if not found
                            $invoiceProduct = \App\Models\InvoiceProduct::where('invoice_id', $invoiceReturn->invoice_id)
                                ->where('product_id', $product->product_id)
                                ->with('vatRate')
                                ->first();
                        }
                        
                        if (!$invoiceProduct) {
                            continue; // Skip if invoice product not found
                        }
                        
                        // Invoice product data - use getAttribute to ensure we get the actual value
                        $invoiceQty = $invoiceProduct->getAttribute('quantity') ?? 0;
                        $returnQty = $product->getAttribute('quantity') ?? 0;
                        $salePrice = $product->getAttribute('sale_price') ?? 0;
                        $discountAmount = $invoiceProduct->getAttribute('discount_amount') ?? 0;
                        $taxAmount = $invoiceProduct->getAttribute('tax_amount') ?? 0;
                        
                        // Calculate per unit values (same as Vue component)
                        $perUnitDiscount = $invoiceQty > 0 ? round($discountAmount / $invoiceQty, 2) : 0;
                        $unitNet = round($salePrice - $perUnitDiscount, 2);
                        $perUnitVat = $invoiceQty > 0 ? round($taxAmount / $invoiceQty, 2) : 0;
                        
                        // Calculate return values
                        $returnDiscount = round($perUnitDiscount * $returnQty, 2);
                        $returnNet = round($unitNet * $returnQty, 2);
                        $returnVat = round($perUnitVat * $returnQty, 2);
                        $returnTotal = round($returnNet + $returnVat, 2);
                    @endphp
                    <tr>
                        <td>
                            <strong>{{ $product->product->name ?? __('print.N/A') }}</strong>
                            @if($product->product->description)
                            <br><small>{{ $product->product->description }}</small>
                            @endif
                        </td>
                        <td class="text-right">{{ $invoiceQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                        <td class="text-right">{{ $returnQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                        <td class="text-right">{!! centralCurrencySymbolFormat($salePrice) !!}</td>
                        <td class="text-right">
                            {!! centralCurrencySymbolFormat($returnTotal) !!}
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        
        <!-- Totals -->
        <div class="totals-section">
            <div class="totals-table">
                @php
                    // Calculate return totals (same as show.vue)
                    $returnSubtotal = 0;
                    $returnTotalDiscount = 0;
                    $returnTotalTax = 0;
                    
                    foreach($invoiceReturn->invoiceReturnProducts as $product) {
                        // Get invoice product with fallback
                        $invoice = $invoiceReturn->invoice;
                        $invoiceProducts = $invoice ? $invoice->invoiceProducts : collect();
                        $invoiceProduct = $invoiceProducts->firstWhere('product_id', $product->product_id);
                        
                        if (!$invoiceProduct) {
                            // Try to load it directly if not found
                            $invoiceProduct = \App\Models\InvoiceProduct::where('invoice_id', $invoiceReturn->invoice_id)
                                ->where('product_id', $product->product_id)
                                ->first();
                        }
                        
                        if (!$invoiceProduct) continue;
                        
                        $returnQty = $product->getAttribute('quantity') ?? 0;
                        if ($returnQty <= 0) continue;
                        
                        $salePrice = $product->getAttribute('sale_price') ?? 0;
                        $invoiceQty = $invoiceProduct->getAttribute('quantity') ?? 1;
                        $discountAmount = $invoiceProduct->getAttribute('discount_amount') ?? 0;
                        $taxAmount = $invoiceProduct->getAttribute('tax_amount') ?? 0;
                        
                        // Calculate per unit values
                        $perUnitDiscount = $invoiceQty > 0 ? round($discountAmount / $invoiceQty, 2) : 0;
                        $unitNet = round($salePrice - $perUnitDiscount, 2);
                        $perUnitVat = $invoiceQty > 0 ? round($taxAmount / $invoiceQty, 2) : 0;
                        
                        // Accumulate totals
                        $returnSubtotal += round($salePrice * $returnQty, 2);
                        $returnTotalDiscount += round($perUnitDiscount * $returnQty, 2);
                        $returnTotalTax += round($perUnitVat * $returnQty, 2);
                    }
                    
                    $returnTotalAfterDiscount = $returnSubtotal - $returnTotalDiscount;
                    $returnTotalWithVat = $returnTotalAfterDiscount + $returnTotalTax;
                @endphp
                
                <div class="total-row">
                    <span>@lang('print.Subtotal'):</span>
                    <span>{!! centralCurrencySymbolFormat($returnSubtotal) !!}</span>
                </div>
                
                <div class="total-row">
                    <span>@lang('print.Product Discount'):</span>
                    <span>{!! centralCurrencySymbolFormat($returnTotalDiscount) !!}</span>
                </div>
                
                <div class="total-row">
                    <span>@lang('print.Total After Discount'):</span>
                    <span>{!! centralCurrencySymbolFormat($returnTotalAfterDiscount) !!}</span>
                </div>
                
                @if($returnTotalTax > 0)
                <div class="total-row">
                    <span>@lang('print.Product VAT'):</span>
                    <span>{!! centralCurrencySymbolFormat($returnTotalTax) !!}</span>
                </div>
                @endif
                
                <div class="total-row total-final">
                    <span>@lang('print.Total with VAT'):</span>
                    <span>= {!! centralCurrencySymbolFormat($returnTotalWithVat) !!}</span>
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="document-footer">
            <p style="margin: 0;">@lang('print.Thank you for your business!')</p>
        </div>
    </div>
    
    <script>
        // Auto-print when page loads
        window.onload = function() {
            // Small delay to ensure content is fully loaded
            setTimeout(function() {
                window.print();
            }, 500);
        };
    </script>
</body>
</html>

@php
    $currentLocale = $locale ?? app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice Return - {{ $invoiceReturn->return_no }}</title>
</head>
<body style="font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.6; color: #6b7280; background: #ffffff; margin: 0; padding: 20mm; direction: {{ $isRTL ? 'rtl' : 'ltr' }};">
    <div style="max-width: 800px; margin: 0 auto;">
        <!-- Header -->
        <div style="border-bottom: 2px solid #e5e7eb; margin-bottom: 30px; padding-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-direction: {{ $isRTL ? 'row-reverse' : 'row' }};">
                <div>
                    @php
                        $settings = \App\Models\GeneralSetting::get();
                        $companyName = $settings->where('key', 'company_name')->first()?->value ?? 'Company Name';
                        $companyAddress = $settings->where('key', 'address')->first()?->value ?? 'Company Address';
                        $companyPhone = $settings->where('key', 'phone_number')->first()?->value ?? 'Phone';
                        $companyEmail = $settings->where('key', 'email_address')->first()?->value ?? 'Email';
                    @endphp
                    <h1 style="font-size: 24px; margin: 0 0 10px 0; color: #2563eb; direction: rtl; text-align: right;">{{ $companyName }}</h1>
                    <p style="margin: 0;">{{ $companyAddress }}</p>
                    <p style="margin: 0;">{{ $companyPhone }} • {{ $companyEmail }}</p>
                </div>
                <div style="text-align: {{ $isRTL ? 'left' : 'right' }};">
                    <h2 style="font-size: 24px; margin: 0 0 15px 0; color: #2563eb;">@lang('print.Invoice Return')</h2>
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
            <h3 style="margin-bottom: 10px; color: #2563eb;">@lang('print.Return From'):</h3>
            <p style="margin: 0; font-weight: 600; direction: rtl; text-align: right;">{{ $invoiceReturn->invoice->client->name ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $invoiceReturn->invoice->client->address ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $invoiceReturn->invoice->client->email ?? __('print.N/A') }} • {{ $invoiceReturn->invoice->client->phone ?? __('print.N/A') }}</p>
        </div>

        <!-- Return Information -->
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
            <h4 style="margin-bottom: 10px; color: #2563eb;">@lang('print.Return Details')</h4>
            <div>
                <strong>@lang('print.Reason'):</strong> {{ $invoiceReturn->reason ?? __('print.N/A') }}
            </div>
            <div style="margin-top: 5px;">
                <strong>@lang('print.Status'):</strong> 
                <span style="color: {{ $invoiceReturn->status ? '#28a745' : '#dc3545' }};">
                    {{ $invoiceReturn->status ? __('print.Active') : __('print.Inactive') }}
                </span>
            </div>
            @if($invoiceReturn->user)
            <div style="margin-top: 5px;">
                <strong>@lang('print.Created By'):</strong> {{ $invoiceReturn->user->name ?? __('print.N/A') }}
            </div>
            @endif
            @if($invoiceReturn->note)
            <div style="margin-top: 5px;">
                <strong>@lang('print.Note'):</strong> {{ $invoiceReturn->note }}
            </div>
            @endif
        </div>
        
        <!-- Items Table -->
        <div style="margin-bottom: 30px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <thead>
                    <tr>
                        <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Product Name')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Invoice Quantity')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Return Quantity')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Price')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Return Total')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($invoiceReturn->invoiceReturnProducts as $product)
                    @php
                        $invoice = $invoiceReturn->invoice;
                        $invoiceProducts = $invoice ? $invoice->invoiceProducts : collect();
                        $invoiceProduct = $invoiceProducts->firstWhere('product_id', $product->product_id);
                        
                        if (!$invoiceProduct) {
                            $invoiceProduct = \App\Models\InvoiceProduct::where('invoice_id', $invoiceReturn->invoice_id)
                                ->where('product_id', $product->product_id)
                                ->with('vatRate')
                                ->first();
                        }
                        
                        if (!$invoiceProduct) {
                            continue;
                        }
                        
                        $invoiceQty = $invoiceProduct->getAttribute('quantity') ?? 0;
                        $returnQty = $product->getAttribute('quantity') ?? 0;
                        $salePrice = $product->getAttribute('sale_price') ?? 0;
                        $discountAmount = $invoiceProduct->getAttribute('discount_amount') ?? 0;
                        $taxAmount = $invoiceProduct->getAttribute('tax_amount') ?? 0;
                        
                        $perUnitDiscount = $invoiceQty > 0 ? round($discountAmount / $invoiceQty, 2) : 0;
                        $unitNet = round($salePrice - $perUnitDiscount, 2);
                        $perUnitVat = $invoiceQty > 0 ? round($taxAmount / $invoiceQty, 2) : 0;
                        
                        $returnDiscount = round($perUnitDiscount * $returnQty, 2);
                        $returnNet = round($unitNet * $returnQty, 2);
                        $returnVat = round($perUnitVat * $returnQty, 2);
                        $returnTotal = round($returnNet + $returnVat, 2);
                    @endphp
                    <tr>
                        <td style="padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb;">
                            <strong>{{ $product->product->name ?? __('print.N/A') }}</strong>
                            @if($product->product->description)
                            <br><small>{{ $product->product->description }}</small>
                            @endif
                        </td>
                        <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb;">{{ $invoiceQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                        <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb;">{{ $returnQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                        <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb;">{!! centralCurrencySymbolFormat($salePrice) !!}</td>
                        <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb;">
                            {!! centralCurrencySymbolFormat($returnTotal) !!}
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        
        <!-- Totals -->
        <div style="display: flex; justify-content: {{ $isRTL ? 'flex-start' : 'flex-end' }}; margin-bottom: 30px;">
            <div style="width: 300px;">
                @php
                    $returnSubtotal = 0;
                    $returnTotalDiscount = 0;
                    $returnTotalTax = 0;
                    
                    foreach($invoiceReturn->invoiceReturnProducts as $product) {
                        $invoice = $invoiceReturn->invoice;
                        $invoiceProducts = $invoice ? $invoice->invoiceProducts : collect();
                        $invoiceProduct = $invoiceProducts->firstWhere('product_id', $product->product_id);
                        
                        if (!$invoiceProduct) {
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
                        
                        $perUnitDiscount = $invoiceQty > 0 ? round($discountAmount / $invoiceQty, 2) : 0;
                        $unitNet = round($salePrice - $perUnitDiscount, 2);
                        $perUnitVat = $invoiceQty > 0 ? round($taxAmount / $invoiceQty, 2) : 0;
                        
                        $returnSubtotal += round($salePrice * $returnQty, 2);
                        $returnTotalDiscount += round($perUnitDiscount * $returnQty, 2);
                        $returnTotalTax += round($perUnitVat * $returnQty, 2);
                    }
                    
                    $returnTotalAfterDiscount = $returnSubtotal - $returnTotalDiscount;
                    $returnTotalWithVat = $returnTotalAfterDiscount + $returnTotalTax;
                @endphp
                
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6;">
                    <span>@lang('print.Subtotal'):</span>
                    <span>{!! centralCurrencySymbolFormat($returnSubtotal) !!}</span>
                </div>
                
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6;">
                    <span>@lang('print.Product Discount'):</span>
                    <span>{!! centralCurrencySymbolFormat($returnTotalDiscount) !!}</span>
                </div>
                
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6;">
                    <span>@lang('print.Total After Discount'):</span>
                    <span>{!! centralCurrencySymbolFormat($returnTotalAfterDiscount) !!}</span>
                </div>
                
                @if($returnTotalTax > 0)
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6;">
                    <span>@lang('print.Product VAT'):</span>
                    <span>{!! centralCurrencySymbolFormat($returnTotalTax) !!}</span>
                </div>
                @endif
                
                <div style="display: flex; justify-content: space-between; padding: 12px 0; font-weight: 700; font-size: 16px; border-top: 2px solid #e5e7eb; border-bottom: 2px solid #e5e7eb;">
                    <span>@lang('print.Total with VAT'):</span>
                    <span>= {!! centralCurrencySymbolFormat($returnTotalWithVat) !!}</span>
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; font-style: italic;">
            <p style="margin: 0;">@lang('print.Thank you for your business!')</p>
        </div>
    </div>
</body>
</html>

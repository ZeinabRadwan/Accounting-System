@php
    $currentLocale = $locale ?? app()->getLocale();
    $isRTL = $currentLocale === 'ar';
    
    // Custom currency formatter for PDF - no currency symbols
    function formatPdfCurrency($amount) {
        $formattedAmount = number_format($amount, 2, '.', ',');
        return $formattedAmount;
    }
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purchase Order - {{ $purchaseOrder->purchase_no }}</title>
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
                    <h2 style="font-size: 24px; margin: 0 0 15px 0; color: #2563eb;">@lang('print.Purchase Order')</h2>
                    <p style="margin: 0;">@lang('print.Purchase Order #'): {{ $purchaseOrder->purchase_no }}</p>
                    <p style="margin: 0;">@lang('print.Date'): {{ \Carbon\Carbon::parse($purchaseOrder->po_date ?? $purchaseOrder->purchase_date)->format('M d, Y') }}</p>
                    @if($purchaseOrder->po_reference)
                    <p style="margin: 0;">@lang('print.Reference'): {{ $purchaseOrder->po_reference }}</p>
                    @endif
                </div>
            </div>
        </div>
        
        <!-- Supplier Info -->
        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 10px; color: #2563eb;">@lang('print.Supplier'):</h3>
            <p style="margin: 0; font-weight: 600; direction: rtl; text-align: right;">{{ $purchaseOrder->supplier->name ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $purchaseOrder->supplier->address ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $purchaseOrder->supplier->email ?? __('print.N/A') }} • {{ $purchaseOrder->supplier->phone ?? __('print.N/A') }}</p>
        </div>
        
        <!-- Items Table -->
        <div style="margin-bottom: 30px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <thead>
                    <tr>
                        <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Product Name')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Quantity')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Price')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Total')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($purchaseOrder->purchaseOrderProducts as $product)
                    <tr>
                        <td style="padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb;">
                            <strong>{{ $product->product->name ?? __('print.N/A') }}</strong>
                            @if($product->product->description)
                            <br><small>{{ $product->product->description }}</small>
                            @endif
                        </td>
                        <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb;">{{ $product->quantity }}</td>
                        <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb;">{!! centralCurrencySymbolFormat($product->purchase_price) !!}</td>
                        <td style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb;">{!! centralCurrencySymbolFormat($product->quantity * $product->purchase_price) !!}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        
        <!-- Totals -->
        <div style="display: flex; justify-content: {{ $isRTL ? 'flex-start' : 'flex-end' }}; margin-bottom: 30px;">
            <div style="width: 300px;">
                @php
                    $subtotal = $purchaseOrder->sub_total ?? 0;
                    $discount = $purchaseOrder->discount ?? 0;
                    $tax = $purchaseOrder->calculated_tax ?? 0;
                    $transport = $purchaseOrder->transport ?? 0;
                    $total = $purchaseOrder->calculated_total ?? 0;
                @endphp
                
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6;">
                    <span>@lang('print.Subtotal'):</span>
                    <span>{!! centralCurrencySymbolFormat($subtotal) !!}</span>
                </div>
                
                @if($discount > 0)
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6;">
                    <span>@lang('print.Discount'):</span>
                    <span>-{!! centralCurrencySymbolFormat($discount) !!}</span>
                </div>
                @endif
                
                @if($tax > 0)
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6;">
                    <span>@lang('print.VAT'):</span>
                    <span>{!! centralCurrencySymbolFormat($tax) !!}</span>
                </div>
                @endif
                
                @if($transport > 0)
                <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6;">
                    <span>@lang('print.Transport'):</span>
                    <span>{!! centralCurrencySymbolFormat($transport) !!}</span>
                </div>
                @endif
                
                <div style="display: flex; justify-content: space-between; padding: 12px 0; font-weight: 700; font-size: 16px; border-top: 2px solid #e5e7eb; border-bottom: 2px solid #e5e7eb;">
                    <span>@lang('print.Total'):</span>
                    <span>{!! centralCurrencySymbolFormat($total) !!}</span>
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

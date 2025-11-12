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
    <title>Purchase Return - {{ $purchaseReturn->code ?? $purchaseReturn->reason }}</title>
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
                    <h2 style="font-size: 24px; margin: 0 0 15px 0; color: #2563eb;">@lang('print.Purchase Return')</h2>
                    <p style="margin: 0;">@lang('print.Return #'): {{ $purchaseReturn->code ?? __('print.N/A') }}</p>
                    <p style="margin: 0;">@lang('print.Date'): {{ \Carbon\Carbon::parse($purchaseReturn->date)->format('M d, Y') }}</p>
                    @if($purchaseReturn->purchase)
                    <p style="margin: 0;">@lang('print.Original Purchase #'): {{ $purchaseReturn->purchase->purchase_no }}</p>
                    @endif
                </div>
            </div>
        </div>
        
        <!-- Supplier Info -->
        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 10px; color: #2563eb;">@lang('print.Return From'):</h3>
            <p style="margin: 0; font-weight: 600; direction: rtl; text-align: right;">{{ $purchaseReturn->purchase->supplier->name ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $purchaseReturn->purchase->supplier->address ?? __('print.N/A') }}</p>
            <p style="margin: 0;">{{ $purchaseReturn->purchase->supplier->email ?? __('print.N/A') }} • {{ $purchaseReturn->purchase->supplier->phone ?? __('print.N/A') }}</p>
        </div>
        
        <!-- Return Information -->
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
            <h4 style="margin-bottom: 10px; color: #2563eb;">@lang('print.Return Details')</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div>
                    <strong>@lang('print.Reason'):</strong> {{ $purchaseReturn->reason ?? __('print.N/A') }}
                </div>
                <div>
                    <strong>@lang('print.Status'):</strong> 
                    <span style="color: {{ $purchaseReturn->status ? '#28a745' : '#dc3545' }};">
                        {{ $purchaseReturn->status ? __('print.Active') : __('print.Inactive') }}
                    </span>
                </div>
                @if($purchaseReturn->user)
                <div>
                    <strong>@lang('print.Created By'):</strong> {{ $purchaseReturn->user->name ?? __('print.N/A') }}
                </div>
                @endif
                @if($purchaseReturn->note)
                <div style="grid-column: 1 / -1;">
                    <strong>@lang('print.Note'):</strong> {{ $purchaseReturn->note }}
                </div>
                @endif
            </div>
        </div>
        
        <!-- Items Table -->
        <div style="margin-bottom: 30px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <thead>
                    <tr>
                        <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Product Name')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Return Quantity')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Price')</th>
                        <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; background: #f8fafc; font-weight: 600;">@lang('print.Return Total')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($purchaseReturn->purchaseReturnProducts as $product)
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
                    $totalReturn = $purchaseReturn->total_return ?? 0;
                @endphp
                
                <div style="display: flex; justify-content: space-between; padding: 12px 0; font-weight: 700; font-size: 16px; border-top: 2px solid #e5e7eb; border-bottom: 2px solid #e5e7eb;">
                    <span>@lang('print.Total Return'):</span>
                    <span>{!! centralCurrencySymbolFormat($totalReturn) !!}</span>
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

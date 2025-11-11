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
    $purchaseFooterText = $settings->where('key', 'purchase_footer_text')->first()?->value ?? '';
    
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
    <title>Purchase Order - {{ $purchaseOrder->purchase_no }}</title>
    <!-- Base64 font will be added here manually -->
    <!-- @font-face {
        font-family: 'DINNextLTArabic';
        src: url('data:font/truetype;charset=utf-8;base64,...');
    } -->
</head>

<body style="font-family: 'Inter', sans-serif; font-size: {{ $typography['baseFontSize'] ?? 14 }}px; line-height: 1.6; color: {{ $colors['text'] ?? '#6b7280' }}; background: #ffffff; margin: 0; padding: 20mm; direction: {{ $isRTL ? 'rtl' : 'ltr' }};">
    <div id="document-container" style="max-width: 100%; margin: 0 auto;">
        <div style="position: relative;">
            @if(($elements['showLogo'] ?? true) || ($elements['showCompanyInfo'] ?? true))
            <!-- Header -->
            <div style="border-bottom: 2px solid {{ $colors['border'] ?? '#e5e7eb' }}; margin-bottom: 30px; padding-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start; flex-direction: {{ $isRTL ? 'row-reverse' : 'row' }};">
                    <div>
                        @if($elements['showLogo'] ?? true)
                        <div style="margin-bottom: 15px;">
                            @if($logoBase64)
                                <img src="{{ $logoBase64 }}" alt="@lang('print.Company Logo')" style="max-width: 150px; max-height: 80px; object-fit: contain;">
                            @elseif($template && $template->logo_path)
                                <img src="{{ asset($template->logo_path) }}" alt="@lang('print.Company Logo')" style="max-width: 150px; max-height: 80px; object-fit: contain;">
                            @endif
                        </div>
                        @endif
                        
                        @if($elements['showCompanyInfo'] ?? true)
                        <h1 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: {{ $typography['headerFontSize'] ?? 24 }}px; margin: 0 0 10px 0; direction: rtl; text-align: right;">
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
                    <div style="text-align: {{ $isRTL ? 'left' : 'right' }};">
                        <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 24px; margin: 0 0 15px 0;">
                            @lang('print.Purchase Order')
                        </h2>
                        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                            @lang('print.Purchase Order #'): {{ $purchaseOrder->purchase_no }}
                        </p>
                        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                            @lang('print.Date'): {{ \Carbon\Carbon::parse($purchaseOrder->po_date ?? $purchaseOrder->purchase_date)->format('M d, Y') }}
                        </p>
                        @if($purchaseOrder->po_reference)
                        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                            @lang('print.Reference'): {{ $purchaseOrder->po_reference }}
                        </p>
                        @endif
                    </div>
                </div>
            </div>
            @endif
            
            @if($elements['showClientInfo'] ?? true)
            <!-- Supplier Info -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 10px;">@lang('print.Supplier'):</h3>
                <p style="margin: 0; font-weight: 600; direction: rtl; text-align: right;">{{ $purchaseOrder->supplier->name ?? __('print.N/A') }}</p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $purchaseOrder->supplier->address ?? __('print.N/A') }}
                </p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $purchaseOrder->supplier->email ?? __('print.N/A') }} • {{ $purchaseOrder->supplier->phone ?? __('print.N/A') }}
                </p>
            </div>
            @endif
            
            @if($elements['showItemsTable'] ?? true)
            <!-- Items Table -->
            <div style="margin-top: 30px;">
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <thead>
                        <tr>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Row Number')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Product Code')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Product Name')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Quantity')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Price')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Total')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Discount')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Total After Discount')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.VAT')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Total with Tax')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($purchaseOrder->purchaseOrderProducts as $index => $product)
                        <tr style="background-color: {{ $index % 2 == 0 ? '#f9fafb' : '#ffffff' }};">
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">{{ $index + 1 }}</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">{{ $product->product->code ?? __('print.N/A') }}</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">
                                <strong>{{ $product->product->name ?? __('print.N/A') }}</strong>
                                @if($product->product->description)
                                <br><small style="color: {{ $colors['secondary'] ?? '#6b7280' }};">{{ $product->product->description }}</small>
                                @endif
                            </td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">{{ $product->quantity }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">{{ formatPdfCurrency($product->purchase_price) }}</td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">{{ formatPdfCurrency($product->quantity * $product->purchase_price) }}</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">
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
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">{{ formatPdfCurrency(($product->quantity * $product->purchase_price) - ($product->discount_amount ?? 0)) }}</td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">
                                @if($product->tax_amount > 0)
                                    {{ formatPdfCurrency($product->tax_amount) }}
                                @else
                                    @lang('print.No VAT')
                                @endif
                            </td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">{{ formatPdfCurrency(($product->quantity * $product->purchase_price) - ($product->discount_amount ?? 0) + $product->tax_amount) }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            @endif
            
            @if($elements['showTotals'] ?? true)
            <!-- Totals -->
            <div style="margin-top: 30px; display: flex; justify-content: {{ $isRTL ? 'flex-start' : 'flex-end' }};">
                <div style="width: 300px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; background-color: #f9fafb;">
                    @php
                        $subtotal = $purchaseOrder->sub_total ?? 0;
                        $discount = $purchaseOrder->discount ?? 0;
                        $tax = $purchaseOrder->calculated_tax ?? 0;
                        $total = $purchaseOrder->calculated_total ?? 0;
                    @endphp
                    
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                        <span>@lang('print.Subtotal'):</span>
                        <span>{{ formatPdfCurrency($subtotal) }}</span>
                    </div>
                    
                    @if($discount > 0)
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                        <span>@lang('print.Discount'):</span>
                        <span>-{{ formatPdfCurrency($discount) }}</span>
                    </div>
                    @endif
                    
                    @if($tax > 0)
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                        <span>@lang('print.VAT'):</span>
                        <span>{{ formatPdfCurrency($tax) }}</span>
                    </div>
                    @endif
                    
                    @if($purchaseOrder->transport > 0)
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                        <span>@lang('print.Transport'):</span>
                        <span>{{ formatPdfCurrency($purchaseOrder->transport) }}</span>
                    </div>
                    @endif
                    
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; font-weight: bold; font-size: {{ ($typography['baseFontSize'] ?? 14) + 2 }}px; color: {{ $colors['primary'] ?? '#2563eb' }}; margin-top: 10px; padding-top: 10px; border-top: 2px solid {{ $colors['primary'] ?? '#2563eb' }};">
                        <span>@lang('print.Total'):</span>
                        <span>{{ formatPdfCurrency($total) }}</span>
                    </div>
                </div>
            </div>
            @endif
            
            @if($elements['showFooter'] ?? true)
            <!-- Footer -->
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('print.Thank you for your business!')
                </p>
                @if($purchaseFooterText)
                <p style="margin: 10px 0 0 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $purchaseFooterText }}
                </p>
                @endif
            </div>
            @endif
        </div>
    </div>
</body>

</html>

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
    <title>Invoice Return - {{ $invoiceReturn->return_no }}</title>
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
                            @lang('print.Invoice Return')
                        </h2>
                        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                            @lang('print.Return #'): {{ $invoiceReturn->return_no }}
                        </p>
                        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                            @lang('print.Date'): {{ \Carbon\Carbon::parse($invoiceReturn->date)->format('M d, Y') }}
                        </p>
                        @if($invoiceReturn->invoice)
                        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                            @lang('print.Original Invoice #'): {{ $invoiceReturn->invoice->invoice_no }}
                        </p>
                        @endif
                    </div>
                </div>
            </div>
            @endif
            
            @if($elements['showClientInfo'] ?? true)
            <!-- Client Info -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 10px;">@lang('print.Return From'):</h3>
                <p style="margin: 0; font-weight: 600; direction: rtl; text-align: right;">{{ $invoiceReturn->invoice->client->name ?? __('print.N/A') }}</p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $invoiceReturn->invoice->client->address ?? __('print.N/A') }}
                </p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    {{ $invoiceReturn->invoice->client->email ?? __('print.N/A') }} • {{ $invoiceReturn->invoice->client->phone ?? __('print.N/A') }}
                </p>
            </div>
            @endif

            @if($elements['showReturnInfo'] ?? true)
            <!-- Return Information -->
            <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
                <h4 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 10px;">@lang('print.Return Details')</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
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
                    <div style="grid-column: 1 / -1;">
                        <strong>@lang('print.Note'):</strong> {{ $invoiceReturn->note }}
                    </div>
                    @endif
                </div>
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
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Invoice Quantity')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Return Quantity')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Price')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Total')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Discount')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Total After Discount')</th>
                            <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.VAT Type')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.VAT')</th>
                            <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; background-color: #f9fafb; font-weight: 600;">@lang('print.Return Total')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($invoiceReturn->invoiceReturnProducts as $index => $product)
                        @php
                            $invoice = $invoiceReturn->invoice;
                            $invoiceProducts = $invoice ? $invoice->invoiceProducts : collect();
                            $invoiceProduct = $invoiceProducts->firstWhere('product_id', $product->product_id);
                            
                            if (!$invoiceProduct) {
                                $invoiceProduct = \App\Models\InvoiceProduct::where('invoice_id', $invoiceReturn->invoice_id)
                                    ->where('product_id', $product->product_id)
                                    ->with('vatRate')
                                    ->first();
                                
                                if (!$invoiceProduct) {
                                    continue;
                                }
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
                            $returnTotalBeforeDiscount = round($salePrice * $returnQty, 2);
                            
                            $vatRate = 0;
                            if ($invoiceProduct->relationLoaded('vatRate') && $invoiceProduct->vatRate) {
                                $vatRate = $invoiceProduct->vatRate->rate ?? 0;
                            } elseif ($invoiceProduct->vat_rate_id) {
                                if (!$invoiceProduct->relationLoaded('vatRate')) {
                                    $invoiceProduct->load('vatRate');
                                }
                                $vatRate = $invoiceProduct->vatRate ? $invoiceProduct->vatRate->rate : 0;
                                if (!$vatRate && $invoiceProduct->vat_rate_id) {
                                    $vatRateObj = \App\Models\VatRate::find($invoiceProduct->vat_rate_id);
                                    $vatRate = $vatRateObj->rate ?? 0;
                                }
                            }
                        @endphp
                        <tr style="background-color: {{ $index % 2 == 0 ? '#f9fafb' : '#ffffff' }};">
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">{{ $index + 1 }}</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">{{ $product->product->code ?? __('print.N/A') }}</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">
                                <strong>{{ $product->product->name ?? __('print.N/A') }}</strong>
                                @if($product->product->description)
                                <br><small style="color: {{ $colors['secondary'] ?? '#6b7280' }};">{{ $product->product->description }}</small>
                                @endif
                            </td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">{{ $invoiceQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">{{ $returnQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">{{ formatPdfCurrency($salePrice) }}</td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">{{ formatPdfCurrency($returnTotalBeforeDiscount) }}</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">
                                @if($returnDiscount > 0)
                                    {{ formatPdfCurrency($returnDiscount) }}
                                @else
                                    @lang('print.No Discount')
                                @endif
                            </td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">{{ formatPdfCurrency($returnNet) }}</td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">
                                {{ $vatRate > 0 ? $vatRate . '%' : __('print.N/A') }}
                            </td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">
                                @if($returnVat > 0)
                                    {{ formatPdfCurrency($returnVat) }}
                                @else
                                    @lang('print.No VAT')
                                @endif
                            </td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #e5e7eb;">{{ formatPdfCurrency($returnTotal) }}</td>
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
                        $returnSubtotal = 0;
                        $returnTotalDiscount = 0;
                        $returnTotalTax = 0;
                        
                        foreach($invoiceReturn->invoiceReturnProducts as $product) {
                            $invoiceProduct = $invoiceReturn->invoice->invoiceProducts->firstWhere('product_id', $product->product_id);
                            if (!$invoiceProduct) continue;
                            
                            $returnQty = $product->quantity ?? 0;
                            if ($returnQty <= 0) continue;
                            
                            $salePrice = $product->sale_price ?? 0;
                            $invoiceQty = $invoiceProduct->quantity ?? 1;
                            $discountAmount = $invoiceProduct->discount_amount ?? 0;
                            $taxAmount = $invoiceProduct->tax_amount ?? 0;
                            
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
                    
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                        <span>@lang('print.Subtotal'):</span>
                        <span>{{ formatPdfCurrency($returnSubtotal) }}</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                        <span>@lang('print.Product Discount'):</span>
                        <span>{{ formatPdfCurrency($returnTotalDiscount) }}</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                        <span>@lang('print.Total After Discount'):</span>
                        <span>{{ formatPdfCurrency($returnTotalAfterDiscount) }}</span>
                    </div>
                    
                    @if($returnTotalTax > 0)
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                        <span>@lang('print.Product VAT'):</span>
                        <span>{{ formatPdfCurrency($returnTotalTax) }}</span>
                    </div>
                    @endif
                    
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; font-weight: bold; font-size: {{ ($typography['baseFontSize'] ?? 14) + 2 }}px; color: {{ $colors['primary'] ?? '#2563eb' }}; margin-top: 10px; padding-top: 10px; border-top: 2px solid {{ $colors['primary'] ?? '#2563eb' }};">
                        <span>@lang('print.Total with VAT'):</span>
                        <span>= {{ formatPdfCurrency($returnTotalWithVat) }}</span>
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

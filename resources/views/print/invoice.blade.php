@extends('print.layout')

@section('content')
    @php
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
        $companyLogo = $settings->where('key', 'logo')->first()?->value ?? '';
        $invoiceFooterText = $settings->where('key', 'invoice_footer_text')->first()?->value ?? '';
    @endphp

    @if(($elements['showLogo'] ?? true) || ($elements['showCompanyInfo'] ?? true))
    <!-- Header -->
    <div class="document-header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                @if($elements['showLogo'] ?? true)
                <div style="margin-bottom: 15px;">
                    <img src="{{ $template->logo_url }}" 
                         alt="@lang('print.Company Logo')" class="company-logo">
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
                    <td class="text-right">{!! centralCurrencySymbolFormat($product->sale_price) !!}</td>
                    <td class="text-right">{!! centralCurrencySymbolFormat($product->quantity * $product->sale_price) !!}</td>
                    <td class="text-center">
                        @if($product->discount > 0)
                            @if($product->discount_type === 'percentage')
                                {{ $product->discount }}% ({{ centralCurrencySymbolFormat($product->discount_amount ?? 0) }})
                            @else
                                {!! centralCurrencySymbolFormat($product->discount_amount ?? 0) !!}
                            @endif
                        @else
                            @lang('print.No Discount')
                        @endif
                    </td>
                    <td class="text-right">{!! centralCurrencySymbolFormat($product->getTotalAfterDiscountAttribute()) !!}</td>
                    <td class="text-right">
                        @if($product->tax_amount > 0)
                            {!! centralCurrencySymbolFormat($product->tax_amount) !!}
                        @else
                            @lang('print.No VAT')
                        @endif
                    </td>
                    <td class="text-right">{!! centralCurrencySymbolFormat($product->getTotalAfterDiscountAttribute() + $product->tax_amount) !!}</td>
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
@endsection

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
        $purchaseFooterText = $settings->where('key', 'purchase_footer_text')->first()?->value ?? '';
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
                <h1 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: {{ $typography['headerFontSize'] ?? 24 }}px; margin: 0 0 10px 0;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
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
                    @lang('print.Purchase')
                </h2>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('print.Purchase #'): {{ $purchase->purchase_no }}
                </p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('print.Date'): {{ \Carbon\Carbon::parse($purchase->purchase_date)->format('M d, Y') }}
                </p>
                @if($purchase->dueDate)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('print.Due Date'): {{ \Carbon\Carbon::parse($purchase->dueDate)->format('M d, Y') }}
                </p>
                @endif
            </div>
        </div>
    </div>
    @endif
    
    @if($elements['showClientInfo'] ?? true)
    <!-- Supplier Info -->
    <div class="supplier-info">
        <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 10px;">@lang('print.Supplier'):</h3>
        <p style="margin: 0; font-weight: 600;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">{{ $purchase->supplier->name ?? __('print.N/A') }}</p>
        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
            {{ $purchase->supplier->address ?? __('print.N/A') }}
        </p>
        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
            {{ $purchase->supplier->email ?? __('print.N/A') }} • {{ $purchase->supplier->phone ?? __('print.N/A') }}
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
                    <th class="text-center">@lang('print.Return Quantity')</th>
                    <th class="text-right">@lang('print.Price')</th>
                    <th class="text-right">@lang('print.Total')</th>
                    <th class="text-center">@lang('print.Discount')</th>
                    <th class="text-right">@lang('print.Total After Discount')</th>
                    <th class="text-right">@lang('print.VAT')</th>
                    <th class="text-right">@lang('print.Total with Tax')</th>
                </tr>
            </thead>
            <tbody>
                @foreach($purchase->purchaseProducts as $index => $product)
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
                    <td class="text-center">{{ $product->purchaseReturnQty ?? 0 }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                    <td class="text-right">{!! centralCurrencySymbolFormat($product->purchase_price) !!}</td>
                    <td class="text-right">{!! centralCurrencySymbolFormat($product->quantity * $product->purchase_price) !!}</td>
                    <td class="text-center">
                        @if($product->discount > 0)
                            @if($product->discount_type === 'percentage')
                                {{ $product->discount }}%
                            @else
                                {!! centralCurrencySymbolFormat($product->discount) !!}
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
            <div class="total-row">
                <span>@lang('print.Subtotal'):</span>
                <span>{!! centralCurrencySymbolFormat($purchase->sub_total) !!}</span>
            </div>
            @if($purchase->discount > 0)
            <div class="total-row">
                <span>@lang('print.Discount'):</span>
                <span>-{!! centralCurrencySymbolFormat($purchase->discount) !!}</span>
            </div>
            @endif
            @if($purchase->calculated_tax > 0)
            <div class="total-row">
                <span>@lang('print.Tax'):</span>
                <span>{!! centralCurrencySymbolFormat($purchase->calculated_tax) !!}</span>
            </div>
            @endif
            <div class="total-row total-final">
                <span>@lang('print.Total'):</span>
                <span>{!! centralCurrencySymbolFormat($purchase->calculated_total) !!}</span>
            </div>
        </div>
    </div>
    @endif
    
    @if($elements['showFooter'] ?? true)
    <!-- Footer -->
    <div class="document-footer">
        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
            @lang('print.Thank you for your service!')
        </p>
        @if($purchaseFooterText)
        <p style="margin: 10px 0 0 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
            {{ $purchaseFooterText }}
        </p>
        @endif
    </div>
    @endif
@endsection

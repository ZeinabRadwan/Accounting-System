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
                         alt="Company Logo" class="company-logo">
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
                    PURCHASE
                </h2>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    Purchase #: {{ $purchase->purchase_no }}
                </p>
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    Date: {{ \Carbon\Carbon::parse($purchase->purchase_date)->format('M d, Y') }}
                </p>
                @if($purchase->dueDate)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    Due Date: {{ \Carbon\Carbon::parse($purchase->dueDate)->format('M d, Y') }}
                </p>
                @endif
            </div>
        </div>
    </div>
    @endif
    
    @if($elements['showClientInfo'] ?? true)
    <!-- Supplier Info -->
    <div class="supplier-info">
        <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 10px;">Supplier:</h3>
        <p style="margin: 0; font-weight: 600;" class="arabic-text">{{ $purchase->supplier->name ?? 'N/A' }}</p>
        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
            {{ $purchase->supplier->address ?? 'N/A' }}
        </p>
        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
            {{ $purchase->supplier->email ?? 'N/A' }} • {{ $purchase->supplier->phone ?? 'N/A' }}
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
                    <td class="text-center">{{ $product->product->code ?? 'N/A' }}</td>
                    <td>
                        <strong>{{ $product->product->name ?? 'N/A' }}</strong>
                        @if($product->product->description)
                        <br><small style="color: {{ $colors['secondary'] ?? '#6b7280' }};">{{ $product->product->description }}</small>
                        @endif
                    </td>
                    <td class="text-center">{{ $product->quantity }} {{ $product->product->productUnit->name ?? 'Pcs' }}</td>
                    <td class="text-center">{{ $product->purchaseReturnQty ?? 0 }} {{ $product->product->productUnit->name ?? 'Pcs' }}</td>
                    <td class="text-right">${{ number_format($product->purchase_price, 2) }}</td>
                    <td class="text-right">${{ number_format($product->quantity * $product->purchase_price, 2) }}</td>
                    <td class="text-center">
                        @if($product->discount > 0)
                            @if($product->discount_type === 'percentage')
                                {{ $product->discount }}%
                            @else
                                ${{ number_format($product->discount, 2) }}
                            @endif
                        @else
                            @lang('print.No Discount')
                        @endif
                    </td>
                    <td class="text-right">${{ number_format($product->getTotalAfterDiscountAttribute(), 2) }}</td>
                    <td class="text-right">
                        @if($product->tax_amount > 0)
                            ${{ number_format($product->tax_amount, 2) }}
                        @else
                            @lang('print.No VAT')
                        @endif
                    </td>
                    <td class="text-right">${{ number_format($product->getTotalAfterDiscountAttribute() + $product->tax_amount, 2) }}</td>
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
                <span>Subtotal:</span>
                <span>${{ number_format($purchase->sub_total, 2) }}</span>
            </div>
            @if($purchase->discount > 0)
            <div class="total-row">
                <span>Discount:</span>
                <span>-${{ number_format($purchase->discount, 2) }}</span>
            </div>
            @endif
            @if($purchase->calculated_tax > 0)
            <div class="total-row">
                <span>Tax:</span>
                <span>${{ number_format($purchase->calculated_tax, 2) }}</span>
            </div>
            @endif
            <div class="total-row total-final">
                <span>Total:</span>
                <span>${{ number_format($purchase->calculated_total, 2) }}</span>
            </div>
        </div>
    </div>
    @endif
    
    @if($elements['showFooter'] ?? true)
    <!-- Footer -->
    <div class="document-footer">
        <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
            Thank you for your service!
        </p>
        @if($purchaseFooterText)
        <p style="margin: 10px 0 0 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
            {{ $purchaseFooterText }}
        </p>
        @endif
    </div>
    @endif
@endsection

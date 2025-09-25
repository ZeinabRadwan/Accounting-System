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
    <div class="client-info">
        <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin-bottom: 10px;">@lang('print.Return From'):</h3>
        <p style="margin: 0; font-weight: 600;" class="arabic-text">{{ $invoiceReturn->invoice->client->name ?? __('print.N/A') }}</p>
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
    <div class="return-info" style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
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
    <div class="items-section">
        <table class="items-table">
            <thead>
                <tr>
                    <th class="text-center">@lang('print.Row Number')</th>
                    <th class="text-center">@lang('print.Product Code')</th>
                    <th class="text-center">@lang('print.Product Name')</th>
                    <th class="text-center">@lang('print.Invoice Quantity')</th>
                    <th class="text-center">@lang('print.Return Quantity')</th>
                    <th class="text-right">@lang('print.Price')</th>
                    <th class="text-right">@lang('print.Total')</th>
                    <th class="text-center">@lang('print.Discount')</th>
                    <th class="text-right">@lang('print.Total After Discount')</th>
                    <th class="text-right">@lang('print.VAT')</th>
                    <th class="text-right">@lang('print.Return Total')</th>
                </tr>
            </thead>
            <tbody>
                @foreach($invoiceReturn->invoiceReturnProducts as $index => $product)
                <tr>
                    <td class="text-center">{{ $index + 1 }}</td>
                    <td class="text-center">{{ $product->product->code ?? __('print.N/A') }}</td>
                    <td>
                        <strong>{{ $product->product->name ?? __('print.N/A') }}</strong>
                        @if($product->product->description)
                        <br><small style="color: {{ $colors['secondary'] ?? '#6b7280' }};">{{ $product->product->description }}</small>
                        @endif
                    </td>
                    <td class="text-center">{{ $product->invoiceQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                    <td class="text-center">{{ $product->returnQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                    <td class="text-right">${{ number_format($product->salePrice, 2) }}</td>
                    <td class="text-right">${{ number_format($product->invoiceQty * $product->salePrice, 2) }}</td>
                    <td class="text-center">
                        @if($product->discountAmount > 0)
                            ${{ number_format($product->discountAmount, 2) }}
                        @else
                            @lang('print.No Discount')
                        @endif
                    </td>
                    <td class="text-right">
                        @php
                            $unitDiscount = $product->invoiceQty > 0 ? $product->discountAmount / $product->invoiceQty : 0;
                            $unitNet = $product->salePrice - $unitDiscount;
                            $totalAfterDiscount = $unitNet * $product->invoiceQty;
                        @endphp
                        ${{ number_format($totalAfterDiscount, 2) }}
                    </td>
                    <td class="text-right">
                        @if($product->taxAmount > 0)
                            ${{ number_format($product->taxAmount, 2) }}
                        @else
                            @lang('print.No VAT')
                        @endif
                    </td>
                    <td class="text-right">
                        @php
                            $returnTotal = $unitNet * $product->returnQty;
                            $returnVat = $product->taxAmount > 0 ? ($product->taxAmount / $product->invoiceQty) * $product->returnQty : 0;
                            $totalWithVat = $returnTotal + $returnVat;
                        @endphp
                        ${{ number_format($totalWithVat, 2) }}
                    </td>
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
                <span>@lang('print.Original Invoice Subtotal'):</span>
                <span>${{ number_format($invoiceReturn->invoice->subTotal ?? 0, 2) }}</span>
            </div>
            <div class="total-row">
                <span>@lang('print.Return Amount'):</span>
                <span style="color: #dc3545;">-${{ number_format($invoiceReturn->totalReturn ?? 0, 2) }}</span>
            </div>
            @if($invoiceReturn->invoice->discount > 0)
            <div class="total-row">
                <span>@lang('print.Original Discount'):</span>
                <span>-${{ number_format($invoiceReturn->invoice->discount ?? 0, 2) }}</span>
            </div>
            @endif
            @if($invoiceReturn->invoice->calculatedTax > 0)
            <div class="total-row">
                <span>@lang('print.Original Tax'):</span>
                <span>${{ number_format($invoiceReturn->invoice->calculatedTax ?? 0, 2) }}</span>
            </div>
            @endif
            <div class="total-row total-final">
                <span>@lang('print.Net Amount After Return'):</span>
                <span>${{ number_format(($invoiceReturn->invoice->calculatedTotal ?? 0) - ($invoiceReturn->totalReturn ?? 0), 2) }}</span>
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

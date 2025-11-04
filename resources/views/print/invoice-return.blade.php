@extends('print.layout')

@section('content')
    @php
        // DEBUG: Check data availability (remove after debugging)
        $debugMode = false; // Set to true to see debug output
        if ($debugMode) {
            echo "<!-- DEBUG INFO START -->";
            echo "<!-- Invoice Return ID: " . ($invoiceReturn->id ?? 'N/A') . " -->";
            echo "<!-- Invoice ID: " . ($invoiceReturn->invoice_id ?? 'N/A') . " -->";
            echo "<!-- Invoice Return Products Count: " . ($invoiceReturn->invoiceReturnProducts->count() ?? 0) . " -->";
            echo "<!-- Invoice Products Count: " . ($invoiceReturn->invoice->invoiceProducts->count() ?? 0) . " -->";
            echo "<!-- DEBUG INFO END -->";
        }
        
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
        <p style="margin: 0; font-weight: 600;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">{{ $invoiceReturn->invoice->client->name ?? __('print.N/A') }}</p>
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
    <div class="items-section">
        @php
            // TEMPORARY DEBUG: Uncomment to see debug output
            $showDebug = false; // Change to true to see debug info
            if ($showDebug && isset($_GET['debug'])) {
                echo '<div style="background: yellow; padding: 10px; margin: 10px 0; border: 2px solid red;">';
                echo '<strong>DEBUG INFO:</strong><br>';
                echo 'Invoice Return Products Count: ' . $invoiceReturn->invoiceReturnProducts->count() . '<br>';
                echo 'Invoice ID: ' . ($invoiceReturn->invoice_id ?? 'N/A') . '<br>';
                echo 'Has Invoice: ' . ($invoiceReturn->invoice ? 'Yes' : 'No') . '<br>';
                if ($invoiceReturn->invoice) {
                    echo 'Invoice Products Count: ' . $invoiceReturn->invoice->invoiceProducts->count() . '<br>';
                }
                echo '</div>';
            }
        @endphp
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
                    <th class="text-center">@lang('print.VAT Type')</th>
                    <th class="text-right">@lang('print.VAT')</th>
                    <th class="text-right">@lang('print.Return Total')</th>
                </tr>
            </thead>
            <tbody>
                @foreach($invoiceReturn->invoiceReturnProducts as $index => $product)
                @php
                    // Debug: Check if invoice and invoiceProducts are loaded
                    $invoice = $invoiceReturn->invoice;
                    $invoiceProducts = $invoice ? $invoice->invoiceProducts : collect();
                    
                    // Get the original invoice product data
                    $invoiceProduct = $invoiceProducts->firstWhere('product_id', $product->product_id);
                    
                    if (!$invoiceProduct) {
                        // Try to load it directly if not found
                        $invoiceProduct = \App\Models\InvoiceProduct::where('invoice_id', $invoiceReturn->invoice_id)
                            ->where('product_id', $product->product_id)
                            ->with('vatRate')
                            ->first();
                        
                        if (!$invoiceProduct) {
                            continue; // Skip if invoice product not found
                        }
                    }
                    
                    // Invoice product data - use getAttribute to ensure we get the actual value
                    $invoiceQty = $invoiceProduct->getAttribute('quantity') ?? 0;
                    $returnQty = $product->getAttribute('quantity') ?? 0;
                    $salePrice = $product->getAttribute('sale_price') ?? 0;
                    $discountAmount = $invoiceProduct->getAttribute('discount_amount') ?? 0;
                    $taxAmount = $invoiceProduct->getAttribute('tax_amount') ?? 0;
                    
                    // Debug: Show actual values if debug mode is on
                    if (isset($showDebug) && $showDebug && isset($_GET['debug'])) {
                        echo "<!-- Product Debug: product_id={$product->product_id}, returnQty={$returnQty}, salePrice={$salePrice}, invoiceQty={$invoiceQty}, discount={$discountAmount}, tax={$taxAmount} -->";
                    }
                    
                    // Calculate per unit values (same as Vue component)
                    $perUnitDiscount = $invoiceQty > 0 ? round($discountAmount / $invoiceQty, 2) : 0;
                    $unitNet = round($salePrice - $perUnitDiscount, 2);
                    $perUnitVat = $invoiceQty > 0 ? round($taxAmount / $invoiceQty, 2) : 0;
                    
                    // Calculate return values
                    $returnDiscount = round($perUnitDiscount * $returnQty, 2);
                    $returnNet = round($unitNet * $returnQty, 2);
                    $returnVat = round($perUnitVat * $returnQty, 2);
                    $returnTotal = round($returnNet + $returnVat, 2);
                    
                    // Return total (quantity * price)
                    $returnTotalBeforeDiscount = round($salePrice * $returnQty, 2);
                    
                    // Get VAT rate for display
                    $vatRate = 0;
                    if ($invoiceProduct->relationLoaded('vatRate') && $invoiceProduct->vatRate) {
                        $vatRate = $invoiceProduct->vatRate->rate ?? 0;
                    } elseif ($invoiceProduct->vat_rate_id) {
                        // Load vatRate relationship if not already loaded
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
                <tr>
                    <td class="text-center">{{ $index + 1 }}</td>
                    <td class="text-center">{{ $product->product->code ?? __('print.N/A') }}</td>
                    <td>
                        <strong>{{ $product->product->name ?? __('print.N/A') }}</strong>
                        @if($product->product->description)
                        <br><small style="color: {{ $colors['secondary'] ?? '#6b7280' }};">{{ $product->product->description }}</small>
                        @endif
                    </td>
                    <td class="text-center">{{ $invoiceQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                    <td class="text-center">{{ $returnQty }} {{ $product->product->productUnit->name ?? __('print.Pcs') }}</td>
                    <td class="text-right">{!! centralCurrencySymbolFormat($salePrice) !!}</td>
                    <td class="text-right">{!! centralCurrencySymbolFormat($returnTotalBeforeDiscount) !!}</td>
                    <td class="text-center">
                        @if($returnDiscount > 0)
                            {!! centralCurrencySymbolFormat($returnDiscount) !!}
                        @else
                            @lang('print.No Discount')
                        @endif
                    </td>
                    <td class="text-right">
                        {!! centralCurrencySymbolFormat($returnNet) !!}
                    </td>
                    <td class="text-center">
                        {{ $vatRate > 0 ? $vatRate . '%' : __('print.N/A') }}
                    </td>
                    <td class="text-right">
                        @if($returnVat > 0)
                            {!! centralCurrencySymbolFormat($returnVat) !!}
                        @else
                            @lang('print.No VAT')
                        @endif
                    </td>
                    <td class="text-right">
                        {!! centralCurrencySymbolFormat($returnTotal) !!}
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
            @php
                // Calculate return totals (same as show.vue)
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

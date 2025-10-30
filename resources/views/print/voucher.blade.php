@extends('print.layout')

@section('content')
    @php
        $config = $template->template_config ?? [];
        $elements = $config['elements'] ?? [];
        $colors = $config['colors'] ?? [];
        $typography = $config['typography'] ?? [];

        $settings = \App\Models\GeneralSetting::get();
        $companyName = $settings->where('key', 'company_name')->first()?->value ?? 'Company Name';
        $companyAddress = $settings->where('key', 'address')->first()?->value ?? 'Company Address';
        $companyPhone = $settings->where('key', 'phone_number')->first()?->value ?? 'Phone';
        $companyEmail = $settings->where('key', 'email_address')->first()?->value ?? 'Email';
        $companyLogo = $settings->where('key', 'logo')->first()?->value ?? '';
        $footerText = $settings->where('key', 'invoice_footer_text')->first()?->value ?? '';

        $isReceive = $voucher->isReceive();
        $title = $isReceive ? __('سند قبض') : __('سند صرف');
        $partyName = $voucher->client?->name ?? $voucher->supplier?->name ?? ($voucher->chartOfAccount?->name ?? '');
        $partyLabel = $isReceive ? __('من') : __('إلى');
        $voucherNo = $voucher->receipt_no ?: ($voucher->cheque_no ?: $voucher->id);
    @endphp

    <!-- Header -->
    <div class="document-header">
        <div class="d-flex justify-content-between align-items-start">
            <div>
                @if($elements['showLogo'] ?? true)
                    @if(!empty($companyLogo))
                        <img class="company-logo" src="{{ asset('images/' . $companyLogo) }}" alt="Logo" />
                    @elseif(!empty($template->logo_url ?? ''))
                        <img class="company-logo" src="{{ $template->logo_url }}" alt="Logo" />
                    @else
                        <img class="company-logo" src="{{ asset('images/white_logo.png') }}" alt="Logo" />
                    @endif
                @endif

                @if($elements['showCompanyInfo'] ?? true)
                    <h2 class="company-name">{{ $companyName }}</h2>
                    <p class="company-info">
                        {{ $companyAddress }}<br />
                        {{ $companyPhone }} {{ $companyEmail ? ' | ' . $companyEmail : '' }}
                    </p>
                @endif
            </div>

            <div class="document-info text-right">
                <h1 class="document-title">{{ $title }}</h1>
                <div>
                    <strong>{{ __('رقم السند') }}:</strong> {{ $voucherNo }}<br />
                    <strong>{{ __('التاريخ') }}:</strong> {{ $voucher->date }}<br />
                    <strong>{{ __('الطريقة') }}:</strong> {{ __($voucher->payment_method) }}
                </div>
            </div>
        </div>
    </div>

    <!-- Party and Account Info -->
    <div class="row mt-3">
        <div class="col-6">
            <div class="client-info">
                <h3 class="section-title">{{ $partyLabel }}</h3>
                <p>
                    <strong>{{ __('الاسم') }}:</strong> {{ $partyName }}<br />
                    @if($voucher->client)
                        <strong>{{ __('نوع الكيان') }}:</strong> {{ __('عميل') }}
                    @elseif($voucher->supplier)
                        <strong>{{ __('نوع الكيان') }}:</strong> {{ __('مورد') }}
                    @elseif($voucher->chartOfAccount)
                        <strong>{{ __('نوع الكيان') }}:</strong> {{ __('حساب') }}
                    @endif
                </p>
            </div>
        </div>
        <div class="col-6">
            <div class="supplier-info text-right">
                <h3 class="section-title">{{ __('الحساب النقدي/البنكي') }}</h3>
                <p>
                    <strong>{{ __('الحساب') }}:</strong> {{ $voucher->account?->label ?? '-' }}<br />
                    <strong>{{ __('شيك رقم') }}:</strong> {{ $voucher->cheque_no ?? '-' }}<br />
                    <strong>{{ __('إيصال رقم') }}:</strong> {{ $voucher->receipt_no ?? '-' }}
                </p>
            </div>
        </div>
    </div>

    <!-- Amount and Reference -->
    <div class="totals-section mt-3">
        <table class="totals-table">
            <tbody>
                <tr>
                    <th>{{ __('المبلغ') }}</th>
                    <td class="text-right total-final">{{ number_format($voucher->amount, 2) }}</td>
                </tr>
                @if($voucher->invoice)
                <tr>
                    <th>{{ __('فاتورة') }}</th>
                    <td class="text-right">{{ $voucher->invoice->invoice_no }}</td>
                </tr>
                @endif
                @if($voucher->purchase)
                <tr>
                    <th>{{ __('مشتريات') }}</th>
                    <td class="text-right">{{ $voucher->purchase->purchase_no }}</td>
                </tr>
                @endif
            </tbody>
        </table>
    </div>

    <!-- Notes -->
    @if($voucher->note)
    <div class="row mt-3">
        <div class="col-12">
            <strong>{{ __('ملاحظات') }}:</strong>
            <p>{{ $voucher->note }}</p>
        </div>
    </div>
    @endif

    <!-- Footer -->
    @if($elements['showFooter'] ?? true)
        <div class="document-footer">
            <div class="row">
                <div class="col-6 text-left">
                    <strong>{{ __('المستلم') }}</strong>
                    <div style="height:60px; border-bottom:1px solid #e5e7eb; width:80%"></div>
                </div>
                <div class="col-6 text-right">
                    <strong>{{ __('المحاسب/المدير') }}</strong>
                    <div style="height:60px; border-bottom:1px solid #e5e7eb; width:80%; float:right"></div>
                </div>
            </div>
            @if($footerText)
                <p class="mt-3">{{ $footerText }}</p>
            @endif
        </div>
    @endif
@endsection



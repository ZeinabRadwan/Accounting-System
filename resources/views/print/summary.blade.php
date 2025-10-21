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
                @if($elements['showReportTitle'] ?? true)
                <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 24px; margin: 0 0 15px 0;">
                    @lang('Summary Report')
                </h2>
                @endif
                
                @if($elements['showPeriod'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('Period'): {{ $summaryData['filters']['from_date'] ?? '' }} - {{ $summaryData['filters']['to_date'] ?? '' }}
                </p>
                @endif
                
                @if($elements['showGeneratedDate'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('Generated'): {{ now()->format('Y-m-d H:i:s') }}
                </p>
                @endif
            </div>
        </div>
    </div>
    @endif

    <!-- Report Content -->
    <div class="report-content">
        @if($elements['showDataTable'] ?? true)
        <div class="data-section">
            <table class="data-table">
                <thead>
                    <tr style="background: {{ $colors['accent'] ?? '#f8fafc' }};">
                        <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};">
                            @lang('Description')
                        </th>
                        <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};">
                            @lang('Amount')
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($summaryData['summary']) && count($summaryData['summary']) > 0)
                        @foreach($summaryData['summary'] as $item)
                        <tr>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">
                                {{ $item['name'] }}
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">
                                {{ number_format($item['amount'], 2) }}
                            </td>
                        </tr>
                        @endforeach
                    @endif
                </tbody>
            </table>
        </div>
        @endif

        @if($elements['showTotals'] ?? true)
        <div class="totals-section">
            <table class="totals-table">
                <tr style="border-top: 2px solid {{ $colors['primary'] ?? '#2563eb' }};">
                    <td style="padding: 12px; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        @lang('Total'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        {{ number_format($summaryData['totals']['total'] ?? 0, 2) }}
                    </td>
                </tr>
            </table>
        </div>
        @endif
    </div>

    @if($elements['showFooter'] ?? true)
    <!-- Footer -->
    <div class="document-footer">
        <p style="text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }}; font-size: 12px; margin: 20px 0 0 0;">
            @lang('This report was generated on') {{ now()->format('Y-m-d H:i:s') }}
        </p>
    </div>
    @endif

    <style>
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        
        .data-table th {
            font-weight: 600;
            background: {{ $colors['accent'] ?? '#f8fafc' }};
        }
        
        .data-table td {
            font-size: {{ $typography['baseFontSize'] ?? 12 }}px;
        }
        
        .totals-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        .totals-table td {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .company-logo {
            max-width: 80px;
            height: auto;
        }
    </style>
@endsection

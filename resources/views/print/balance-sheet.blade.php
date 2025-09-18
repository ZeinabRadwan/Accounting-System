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
                @if($elements['showReportTitle'] ?? true)
                <h2 style="color: {{ $colors['primary'] ?? '#2563eb' }}; font-size: 24px; margin: 0 0 15px 0;">
                    @lang('Balance Sheet')
                </h2>
                @endif
                
                @if($elements['showPeriod'] ?? true)
                <p style="margin: 0; color: {{ $colors['secondary'] ?? '#6b7280' }};">
                    @lang('Period'): {{ $balanceData['filters']['from_date'] ?? '' }} - {{ $balanceData['filters']['to_date'] ?? '' }}
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
                            @lang('Assets')
                        </th>
                        <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};">
                            @lang('Amount')
                        </th>
                        <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};">
                            @lang('Liabilities & Equity')
                        </th>
                        <th style="padding: 12px; text-align: right; border: 1px solid #e5e7eb; color: {{ $colors['primary'] ?? '#2563eb' }};">
                            @lang('Amount')
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($balanceData['accounts']['assets']) && count($balanceData['accounts']['assets']) > 0)
                        @php
                            $maxRows = max(
                                count($balanceData['accounts']['assets'] ?? []),
                                count($balanceData['accounts']['liabilities'] ?? []),
                                count($balanceData['accounts']['equity'] ?? [])
                            );
                        @endphp
                        
                        @for($i = 0; $i < $maxRows; $i++)
                        <tr>
                            <!-- Assets Column -->
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">
                                @if(isset($balanceData['accounts']['assets'][$i]))
                                    {{ $balanceData['accounts']['assets'][$i]['name'] }} ({{ $balanceData['accounts']['assets'][$i]['code'] }})
                                @endif
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">
                                @if(isset($balanceData['accounts']['assets'][$i]))
                                    @if($balanceData['accounts']['assets'][$i]['balance_type'] === 'Debit')
                                        <span style="color: #059669;">{{ number_format($balanceData['accounts']['assets'][$i]['absolute_balance'], 2) }}</span>
                                    @else
                                        <span style="color: #dc2626;">({{ number_format($balanceData['accounts']['assets'][$i]['absolute_balance'], 2) }})</span>
                                    @endif
                                @endif
                            </td>
                            
                            <!-- Liabilities & Equity Column -->
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">
                                @if(isset($balanceData['accounts']['liabilities'][$i]))
                                    {{ $balanceData['accounts']['liabilities'][$i]['name'] }} ({{ $balanceData['accounts']['liabilities'][$i]['code'] }})
                                @elseif(isset($balanceData['accounts']['equity'][$i - count($balanceData['accounts']['liabilities'] ?? [])]))
                                    @php $equityIndex = $i - count($balanceData['accounts']['liabilities'] ?? []); @endphp
                                    {{ $balanceData['accounts']['equity'][$equityIndex]['name'] }} ({{ $balanceData['accounts']['equity'][$equityIndex]['code'] }})
                                @endif
                            </td>
                            <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: right;">
                                @if(isset($balanceData['accounts']['liabilities'][$i]))
                                    @if($balanceData['accounts']['liabilities'][$i]['balance_type'] === 'Credit')
                                        <span style="color: #dc2626;">{{ number_format($balanceData['accounts']['liabilities'][$i]['absolute_balance'], 2) }}</span>
                                    @else
                                        <span style="color: #059669;">({{ number_format($balanceData['accounts']['liabilities'][$i]['absolute_balance'], 2) }})</span>
                                    @endif
                                @elseif(isset($balanceData['accounts']['equity'][$i - count($balanceData['accounts']['liabilities'] ?? [])]))
                                    @php $equityIndex = $i - count($balanceData['accounts']['liabilities'] ?? []); @endphp
                                    @if($balanceData['accounts']['equity'][$equityIndex]['balance_type'] === 'Credit')
                                        <span style="color: #dc2626;">{{ number_format($balanceData['accounts']['equity'][$equityIndex]['absolute_balance'], 2) }}</span>
                                    @else
                                        <span style="color: #059669;">({{ number_format($balanceData['accounts']['equity'][$equityIndex]['absolute_balance'], 2) }})</span>
                                    @endif
                                @endif
                            </td>
                        </tr>
                        @endfor
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
                        @lang('Total Assets'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        {{ number_format($balanceData['totals']['total_assets'] ?? 0, 2) }}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        @lang('Total Liabilities'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        {{ number_format($balanceData['totals']['total_liabilities'] ?? 0, 2) }}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        @lang('Total Equity'):
                    </td>
                    <td style="padding: 12px; text-align: right; font-weight: bold; color: {{ $colors['primary'] ?? '#2563eb' }};">
                        {{ number_format($balanceData['totals']['total_equity'] ?? 0, 2) }}
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

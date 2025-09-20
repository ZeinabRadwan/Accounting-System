@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';
    
    // Custom currency formatter for PDF to fix riyal symbol display
    function formatPdfCurrency($amount) {
        $currencySymbol = config('config.currencySymbol');
        $currencyPosition = config('config.currencyPosition');
        $formattedAmount = number_format($amount, 2, '.', ',');
        
        // Replace the problematic 'ê' with proper riyal symbol
        if ($currencySymbol === 'ê') {
            $currencySymbol = '﷼'; // Proper Saudi Riyal symbol
        }
        
        if ($currencyPosition == 'left') {
            return '<span class="currency-symbol">' . $currencySymbol . '</span>' . $formattedAmount;
        } else {
            return $formattedAmount . '<span class="currency-symbol">' . $currencySymbol . '</span>';
        }
    }
@endphp

@extends('print.layout')

@php
    // Create a default template for basic view
    $template = (object) [
        'template_config' => [
            'colors' => [
                'primary' => '#2563eb',
                'secondary' => '#6b7280',
                'accent' => '#f8fafc',
                'background' => '#ffffff'
            ],
            'typography' => [
                'fontFamily' => 'Inter, Arial, sans-serif',
                'baseFontSize' => 12,
                'headerFontSize' => 18
            ],
            'layout' => [
                'margins' => 20
            ]
        ],
        'css_styles' => ''
    ];
@endphp

@section('content')
    <div class="report-container">
        <div class="report-header">
            <h1>@lang('Trial Balance')</h1>
            <p>@lang('Period'): {{ $trialBalanceData['filters']['from_date'] ?? '' }} - {{ $trialBalanceData['filters']['to_date'] ?? '' }}</p>
            <p>@lang('Generated'): {{ now()->format('Y-m-d H:i:s') }}</p>
        </div>

        <div class="report-content">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>@lang('Account Name')</th>
                        <th>@lang('Code')</th>
                        <th class="text-right">@lang('Debit')</th>
                        <th class="text-right">@lang('Credit')</th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($trialBalanceData['trial_balance']) && count($trialBalanceData['trial_balance']) > 0)
                        @foreach($trialBalanceData['trial_balance'] as $account)
                        <tr>
                            <td>{{ $account['name'] }}</td>
                            <td>{{ $account['code'] }}</td>
                            <td class="text-right">
                                @if(isset($account['closing_debit']) && $account['closing_debit'] > 0)
                                    {{ number_format($account['closing_debit'], 2) }}
                                @else
                                    -
                                @endif
                            </td>
                            <td class="text-right">
                                @if(isset($account['closing_credit']) && $account['closing_credit'] > 0)
                                    {{ number_format($account['closing_credit'], 2) }}
                                @else
                                    -
                                @endif
                            </td>
                        </tr>
                        @endforeach
                    @endif
                </tbody>
            </table>

            <div class="totals-section">
                <table class="totals-table">
                    <tr>
                        <td><strong>@lang('Total Debit'):</strong></td>
                        <td class="text-right"><strong>{{ number_format($trialBalanceData['totals']['total_debit'] ?? 0, 2) }}</strong></td>
                    </tr>
                    <tr>
                        <td><strong>@lang('Total Credit'):</strong></td>
                        <td class="text-right"><strong>{{ number_format($trialBalanceData['totals']['total_credit'] ?? 0, 2) }}</strong></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="report-footer">
            <p>@lang('This report was generated on') {{ now()->format('Y-m-d H:i:s') }}</p>
        </div>
    </div>

    <style>
        .report-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .report-header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 20px;
        }
        
        .report-header h1 {
            color: #1f2937;
            margin-bottom: 10px;
        }
        
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        
        .data-table th {
            background: #f8fafc;
            padding: 12px;
            text-align: left;
            border: 1px solid #e5e7eb;
            font-weight: 600;
        }
        
        .data-table td {
            padding: 8px 12px;
            border: 1px solid #e5e7eb;
        }
        
        .text-right {
            text-align: right;
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
        
        .report-footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
        }
    </style>
@endsection

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
            <h1>@lang('Profit & Loss Statement')</h1>
            <p>@lang('Period'): {{ $profitLossData['filters']['from_date'] ?? '' }} - {{ $profitLossData['filters']['to_date'] ?? '' }}</p>
            <p>@lang('Generated'): {{ now()->format('Y-m-d H:i:s') }}</p>
        </div>

        <div class="report-content">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>@lang('Description')</th>
                        <th class="text-right">@lang('Amount')</th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($profitLossData['revenues']) && count($profitLossData['revenues']) > 0)
                        <tr class="section-header">
                            <td colspan="2"><strong>@lang('REVENUES')</strong></td>
                        </tr>
                        @foreach($profitLossData['revenues'] as $revenue)
                        <tr>
                            <td>{{ $revenue['name'] }}</td>
                            <td class="text-right">{{ number_format($revenue['amount'], 2) }}</td>
                        </tr>
                        @endforeach
                    @endif

                    @if(isset($profitLossData['expenses']) && count($profitLossData['expenses']) > 0)
                        <tr class="section-header">
                            <td colspan="2"><strong>@lang('EXPENSES')</strong></td>
                        </tr>
                        @foreach($profitLossData['expenses'] as $expense)
                        <tr>
                            <td>{{ $expense['name'] }}</td>
                            <td class="text-right">{{ number_format($expense['amount'], 2) }}</td>
                        </tr>
                        @endforeach
                    @endif
                </tbody>
            </table>

            <div class="totals-section">
                <table class="totals-table">
                    <tr>
                        <td><strong>@lang('Total Revenue'):</strong></td>
                        <td class="text-right"><strong>{{ number_format($profitLossData['totals']['total_revenue'] ?? 0, 2) }}</strong></td>
                    </tr>
                    <tr>
                        <td><strong>@lang('Total Expenses'):</strong></td>
                        <td class="text-right"><strong>{{ number_format($profitLossData['totals']['total_expenses'] ?? 0, 2) }}</strong></td>
                    </tr>
                    <tr class="total-final">
                        <td><strong>@lang('Net Profit/Loss'):</strong></td>
                        <td class="text-right"><strong>{{ number_format($profitLossData['totals']['net_profit'] ?? 0, 2) }}</strong></td>
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
        
        .section-header td {
            font-weight: bold;
            background: #f8fafc;
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
        
        .total-final {
            border-top: 2px solid #e5e7eb;
            font-weight: bold;
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

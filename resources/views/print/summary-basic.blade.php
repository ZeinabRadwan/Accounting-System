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
            <h1>@lang('Summary Report')</h1>
            <p>@lang('Period'): {{ $summaryData['filters']['from_date'] ?? '' }} - {{ $summaryData['filters']['to_date'] ?? '' }}</p>
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
                    @if(isset($summaryData['summary']) && count($summaryData['summary']) > 0)
                        @foreach($summaryData['summary'] as $item)
                        <tr>
                            <td>{{ $item['name'] }}</td>
                            <td class="text-right">{{ number_format($item['amount'], 2) }}</td>
                        </tr>
                        @endforeach
                    @endif
                </tbody>
            </table>

            <div class="totals-section">
                <table class="totals-table">
                    <tr class="total-final">
                        <td><strong>@lang('Total'):</strong></td>
                        <td class="text-right"><strong>{{ number_format($summaryData['totals']['total'] ?? 0, 2) }}</strong></td>
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

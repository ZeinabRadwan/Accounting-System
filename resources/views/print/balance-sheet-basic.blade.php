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
            <h1>@lang('Balance Sheet')</h1>
            <p>@lang('Period'): {{ $balanceData['filters']['from_date'] ?? '' }} - {{ $balanceData['filters']['to_date'] ?? '' }}</p>
            <p>@lang('Generated'): {{ now()->format('Y-m-d H:i:s') }}</p>
        </div>

        <div class="report-content">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>@lang('Assets')</th>
                        <th>@lang('Amount')</th>
                        <th>@lang('Liabilities & Equity')</th>
                        <th>@lang('Amount')</th>
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
                            <td>
                                @if(isset($balanceData['accounts']['assets'][$i]))
                                    {{ $balanceData['accounts']['assets'][$i]['name'] }} ({{ $balanceData['accounts']['assets'][$i]['code'] }})
                                @endif
                            </td>
                            <td class="text-right">
                                @if(isset($balanceData['accounts']['assets'][$i]))
                                    @if($balanceData['accounts']['assets'][$i]['balance_type'] === 'Debit')
                                        <span class="text-success">{{ number_format($balanceData['accounts']['assets'][$i]['absolute_balance'], 2) }}</span>
                                    @else
                                        <span class="text-danger">({{ number_format($balanceData['accounts']['assets'][$i]['absolute_balance'], 2) }})</span>
                                    @endif
                                @endif
                            </td>
                            
                            <!-- Liabilities & Equity Column -->
                            <td>
                                @if(isset($balanceData['accounts']['liabilities'][$i]))
                                    {{ $balanceData['accounts']['liabilities'][$i]['name'] }} ({{ $balanceData['accounts']['liabilities'][$i]['code'] }})
                                @elseif(isset($balanceData['accounts']['equity'][$i - count($balanceData['accounts']['liabilities'] ?? [])]))
                                    @php $equityIndex = $i - count($balanceData['accounts']['liabilities'] ?? []); @endphp
                                    {{ $balanceData['accounts']['equity'][$equityIndex]['name'] }} ({{ $balanceData['accounts']['equity'][$equityIndex]['code'] }})
                                @endif
                            </td>
                            <td class="text-right">
                                @if(isset($balanceData['accounts']['liabilities'][$i]))
                                    @if($balanceData['accounts']['liabilities'][$i]['balance_type'] === 'Credit')
                                        <span class="text-danger">{{ number_format($balanceData['accounts']['liabilities'][$i]['absolute_balance'], 2) }}</span>
                                    @else
                                        <span class="text-success">({{ number_format($balanceData['accounts']['liabilities'][$i]['absolute_balance'], 2) }})</span>
                                    @endif
                                @elseif(isset($balanceData['accounts']['equity'][$i - count($balanceData['accounts']['liabilities'] ?? [])]))
                                    @php $equityIndex = $i - count($balanceData['accounts']['liabilities'] ?? []); @endphp
                                    @if($balanceData['accounts']['equity'][$equityIndex]['balance_type'] === 'Credit')
                                        <span class="text-danger">{{ number_format($balanceData['accounts']['equity'][$equityIndex]['absolute_balance'], 2) }}</span>
                                    @else
                                        <span class="text-success">({{ number_format($balanceData['accounts']['equity'][$equityIndex]['absolute_balance'], 2) }})</span>
                                    @endif
                                @endif
                            </td>
                        </tr>
                        @endfor
                    @endif
                </tbody>
            </table>

            <div class="totals-section">
                <table class="totals-table">
                    <tr>
                        <td><strong>@lang('Total Assets'):</strong></td>
                        <td class="text-right"><strong>{{ number_format($balanceData['totals']['total_assets'] ?? 0, 2) }}</strong></td>
                    </tr>
                    <tr>
                        <td><strong>@lang('Total Liabilities'):</strong></td>
                        <td class="text-right"><strong>{{ number_format($balanceData['totals']['total_liabilities'] ?? 0, 2) }}</strong></td>
                    </tr>
                    <tr>
                        <td><strong>@lang('Total Equity'):</strong></td>
                        <td class="text-right"><strong>{{ number_format($balanceData['totals']['total_equity'] ?? 0, 2) }}</strong></td>
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
        
        .text-success {
            color: #059669;
        }
        
        .text-danger {
            color: #dc2626;
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

<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Monthly Summary')</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');
        
        body {
            font-family: 'Roboto', sans-serif;
            margin: 20px;
            @if(app()->getLocale() == 'ar')
                direction: rtl;
                text-align: right;
                font-family: 'Noto Kufi Arabic', sans-serif;
            @endif
        }
        
        .table {
            width: 100%;
            margin-bottom: 1rem;
            border-collapse: collapse;
        }
        
        .table th, .table td {
            padding: 0.75rem;
            vertical-align: top;
            border: 1px solid #dee2e6;
            text-align: center;
        }
        
        .table thead th {
            border-bottom: 2px solid #dee2e6;
            background-color: #f8f9fa;
            font-weight: bold;
        }
        
        .table-striped tbody tr:nth-of-type(odd) {
            background-color: rgba(0,0,0,.05);
        }
        
        .text-center { text-align: center; }
        .text-muted { color: #6c757d; }
        .mb-4 { margin-bottom: 1.5rem; }
        .summary-header { background-color: #f8f9fa; font-weight: bold; }
    </style>
</head>
<body>
    @php
        // Custom currency formatter for PDF
        if (!function_exists('formatPdfCurrency')) {
            function formatPdfCurrency($amount) {
                $locale = app()->getLocale();
                $formattedAmount = number_format(abs($amount), 2);
                
                if ($locale == 'ar') {
                    // For Arabic, use the proper riyal symbol instead of 'ê'
                    return $formattedAmount . ' ﷼';
                } else {
                    // For English
                    return '$' . $formattedAmount;
                }
            }
        }
    @endphp

    <div class="text-center mb-4">
        <h2>@lang('print.Monthly Summary')</h2>
        @if(isset($summaryData['monthName']) && isset($summaryData['year']))
            <h4>{{ $summaryData['monthName'] }}, {{ $summaryData['year'] }}</h4>
        @endif
    </div>
    
    @if($summaryData && count($summaryData) > 0)
        <!-- Summary Table -->
        <table class="table table-striped">
            <thead>
                <tr class="summary-header">
                    <th>@lang('print.#')</th>
                    <th>@lang('print.Particulars')</th>
                    <th>@lang('print.Balance')</th>
                </tr>
            </thead>
            
            <!-- Opening Balance Section -->
            <thead>
                <tr class="summary-header">
                    <th colspan="3">@lang('print.Opening Balance')</th>
                </tr>
            </thead>
            <tbody>
                @if(isset($summaryData['openingBalances']) && count($summaryData['openingBalances']) > 0)
                    @foreach($summaryData['openingBalances'] as $index => $balance)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>
                                <strong>{{ $balance->account_number }}</strong><br>
                                <small class="text-muted">{{ $balance->bank_name }}</small>
                            </td>
                            <td>{{ formatPdfCurrency($balance->current_balance ?? 0) }}</td>
                        </tr>
                    @endforeach
                @else
                    <tr>
                        <td colspan="3" class="text-center text-muted">@lang('print.No opening balances found')</td>
                    </tr>
                @endif
            </tbody>
            
            <!-- Collections Section -->
            <thead>
                <tr class="summary-header">
                    <th colspan="3">@lang('print.Collections')</th>
                </tr>
            </thead>
            <tbody>
                @if(isset($summaryData['accountCollections']) && count($summaryData['accountCollections']) > 0)
                    @foreach($summaryData['accountCollections'] as $index => $collection)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>
                                <strong>{{ $collection->account_number }}</strong><br>
                                <small class="text-muted">{{ $collection->bank_name }}</small>
                            </td>
                            <td>{{ formatPdfCurrency($collection->total_collection ?? 0) }}</td>
                        </tr>
                    @endforeach
                @else
                    <tr>
                        <td colspan="3" class="text-center text-muted">@lang('print.No collections found')</td>
                    </tr>
                @endif
            </tbody>
            
            <!-- Expenses Section -->
            <thead>
                <tr class="summary-header">
                    <th colspan="3">@lang('print.Expenses')</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>@lang('print.General Expenses')</td>
                    <td>{{ formatPdfCurrency($summaryData['expenses'] ?? 0) }}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>@lang('print.Payrolls')</td>
                    <td>{{ formatPdfCurrency($summaryData['payrolls'] ?? 0) }}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>@lang('print.Loan Interest')</td>
                    <td>{{ formatPdfCurrency($summaryData['loanInterest'] ?? 0) }}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>@lang('print.Asset Depreciation')</td>
                    <td>{{ formatPdfCurrency($summaryData['assetDepriciation'] ?? 0) }}</td>
                </tr>
            </tbody>
            
            <!-- Sales Section -->
            <thead>
                <tr class="summary-header">
                    <th colspan="3">@lang('print.Sales & Purchase')</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>@lang('print.Invoice Sales')</td>
                    <td>{{ formatPdfCurrency($summaryData['invoiceSales'] ?? 0) }}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>@lang('print.Invoice Due')</td>
                    <td>{{ formatPdfCurrency($summaryData['invoiceDue'] ?? 0) }}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>@lang('print.Total Purchase')</td>
                    <td>{{ formatPdfCurrency($summaryData['totalPurchase'] ?? 0) }}</td>
                </tr>
            </tbody>
            
            <!-- Closing Balance Section -->
            <thead>
                <tr class="summary-header">
                    <th colspan="3">@lang('print.Closing Balance')</th>
                </tr>
            </thead>
            <tbody>
                @if(isset($summaryData['closingBalances']) && count($summaryData['closingBalances']) > 0)
                    @foreach($summaryData['closingBalances'] as $index => $balance)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>
                                <strong>{{ $balance->account_number }}</strong><br>
                                <small class="text-muted">{{ $balance->bank_name }}</small>
                            </td>
                            <td>{{ formatPdfCurrency($balance->current_balance ?? 0) }}</td>
                        </tr>
                    @endforeach
                @else
                    <tr>
                        <td colspan="3" class="text-center text-muted">@lang('print.No closing balances found')</td>
                    </tr>
                @endif
            </tbody>
        </table>
    @else
        <div class="text-center" style="margin-top: 3rem;">
            <h4>@lang('print.No summary data found for the selected period.')</h4>
        </div>
    @endif
</body>
</html>
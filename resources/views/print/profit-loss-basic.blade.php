<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Profit/Loss Report')</title>
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
        .text-right { text-align: right; }
        .text-success { color: #28a745; }
        .text-danger { color: #dc3545; }
        .mb-4 { margin-bottom: 1.5rem; }
        
        .no-print { display: none; }
        @media print {
            .no-print { display: none !important; }
        }
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
        <h2>@lang('print.Profit/Loss Report')</h2>
        @if(isset($profitLossData['filters']['from_date']) && isset($profitLossData['filters']['to_date']))
            <h4>@lang('print.Period'): {{ $profitLossData['filters']['from_date'] }} - {{ $profitLossData['filters']['to_date'] }}</h4>
        @endif
    </div>
    
    @if(isset($profitLossData) && $profitLossData)
        @if($profitLossData['type'] == 1)
            {{-- Product-wise Profit/Loss Report (Gross) --}}
            <div>
                <h3>@lang('print.Gross Profit/Loss Report')</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>@lang('print.#')</th>
                            <th>@lang('print.Code')</th>
                            <th>@lang('print.Name')</th>
                            <th>@lang('print.Avg. Purchase Price')</th>
                            <th>@lang('print.Avg. Selling Price')</th>
                            <th>@lang('print.Sold Qty')</th>
                            <th>@lang('print.Profit') / @lang('print.Loss')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                            $totalQty = 0;
                            $totalProfitOrLoss = 0;
                        @endphp
                        @foreach($profitLossData['reportData'] as $index => $item)
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>{{ $item['itemCode'] }}</td>
                                <td>{{ $item['itemName'] }}</td>
                                <td class="text-right">{{ formatPdfCurrency($item['avgPurchasePrice']) }}</td>
                                <td class="text-right">{{ formatPdfCurrency($item['avgSalePrice']) }}</td>
                                <td>{{ $item['currentQty'] }}</td>
                                <td class="text-right">
                                    @if($item['profitOrLoss'] >= 0)
                                        <span class="text-success">{{ formatPdfCurrency($item['profitOrLoss']) }}</span>
                                    @else
                                        <span class="text-danger">{{ formatPdfCurrency($item['profitOrLoss']) }}</span>
                                    @endif
                                </td>
                            </tr>
                            @php
                                $totalQty += $item['currentQty'];
                                $totalProfitOrLoss += $item['profitOrLoss'];
                            @endphp
                        @endforeach
                        <tr style="background-color: #f8f9fa; font-weight: bold;">
                            <td colspan="5" class="text-right">@lang('print.Total')</td>
                            <td>{{ $totalQty }}</td>
                            <td class="text-right">{{ formatPdfCurrency($totalProfitOrLoss) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        @elseif($profitLossData['type'] == 2)
            {{-- Summary Profit/Loss Report (Net) --}}
            <div>
                <h3>@lang('print.Net Profit/Loss Report')</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>@lang('print.Description')</th>
                            <th>@lang('print.Amount')</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>@lang('print.Total Sales')</th>
                            <td class="text-right">{{ formatPdfCurrency($profitLossData['reportData']['totalSales'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('print.Cost of Goods Sold')</th>
                            <td class="text-right">{{ formatPdfCurrency($profitLossData['reportData']['costOfGoodsSold'] ?? 0) }}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <th>@lang('print.Gross Profit')/@lang('print.Loss')</th>
                            <td class="text-right"><strong>{{ formatPdfCurrency($profitLossData['reportData']['grossProfitOrLoss'] ?? 0) }}</strong></td>
                        </tr>
                        <tr>
                            <th>@lang('print.Operating Expenses')</th>
                            <td class="text-right">{{ formatPdfCurrency($profitLossData['reportData']['totalExpense'] ?? 0) }}</td>
                        </tr>
                        <tr style="background-color: #007bff; color: white;">
                            <th style="color: white;">
                                @if(($profitLossData['reportData']['netProfitOrLoss'] ?? 0) >= 0)
                                    @lang('print.Net Profit')
                                @else
                                    @lang('print.Net Loss')
                                @endif
                            </th>
                            <td class="text-right" style="color: white; font-size: 18px;">
                                <strong>{{ formatPdfCurrency($profitLossData['reportData']['netProfitOrLoss'] ?? 0) }}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        @endif
    @else
        <div class="text-center" style="margin-top: 3rem;">
            <h4>@lang('print.No data found for the selected period.')</h4>
        </div>
    @endif

    <!-- Print and Download Buttons -->
    <div class="no-print" style="margin-top: 30px; text-align: center;">
        <button onclick="window.print()" style="background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; margin-right: 10px;">
            🖨️ @lang('print.Print')
        </button>
        <button onclick="downloadPDF()" style="background: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 4px;">
            📥 @lang('print.Download PDF')
        </button>
    </div>

    <script>
        function downloadPDF() {
            // Create PDF download URL for profit loss report
            const urlParams = new URLSearchParams(window.location.search);
            let pdfUrl = '/reports/profit-loss/pdf';
            if (urlParams.toString()) {
                pdfUrl += '?' + urlParams.toString();
            }
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    </script>
</body>
</html>
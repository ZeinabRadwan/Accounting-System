@extends('print.layout')

@section('page-style')
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');
    
    body {
        font-family: 'Roboto', sans-serif;
        @if(app()->getLocale() == 'ar')
            direction: rtl;
            text-align: right;
            font-family: 'Noto Kufi Arabic', sans-serif;
        @endif
    }
    
    .table th, .table td {
        text-align: center;
        @if(app()->getLocale() == 'ar')
            text-align: center;
        @endif
    }
    
    .text-right {
        @if(app()->getLocale() == 'ar')
            text-align: left !important;
        @endif
    }
    
    .text-left {
        @if(app()->getLocale() == 'ar')
            text-align: right !important;
        @endif
    }
</style>
@endsection

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

@section('content')
<div class="container-fluid">
    <!-- Header -->
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
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-sm">
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
                            <tr class="table-info">
                                <td colspan="5" class="text-right"><strong>@lang('print.Total')</strong></td>
                                <td><strong>{{ $totalQty }}</strong></td>
                                <td class="text-right"><strong>{{ formatPdfCurrency($totalProfitOrLoss) }}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        @elseif($profitLossData['type'] == 2)
            {{-- Summary Profit/Loss Report (Net) --}}
            <div>
                <h3>@lang('print.Net Profit/Loss Report')</h3>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-sm">
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
                            <tr class="table-info">
                                <th>@lang('print.Gross Profit')/@lang('print.Loss')</th>
                                <td class="text-right"><strong>{{ formatPdfCurrency($profitLossData['reportData']['grossProfitOrLoss'] ?? 0) }}</strong></td>
                            </tr>
                            <tr>
                                <th>@lang('print.Operating Expenses')</th>
                                <td class="text-right">{{ formatPdfCurrency($profitLossData['reportData']['totalExpense'] ?? 0) }}</td>
                            </tr>
                            <tr class="table-primary">
                                <th>
                                    @if(($profitLossData['reportData']['netProfitOrLoss'] ?? 0) >= 0)
                                        @lang('print.Net Profit')
                                    @else
                                        @lang('print.Net Loss')
                                    @endif
                                </th>
                                <td class="text-right">
                                    <strong style="font-size: 18px;">{{ formatPdfCurrency($profitLossData['reportData']['netProfitOrLoss'] ?? 0) }}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        @endif
    @else
        <div class="text-center mt-5">
            <h4>@lang('print.No data found for the selected period.')</h4>
        </div>
    @endif
</div>

<!-- Print and Download Buttons -->
<div class="action-buttons no-print">
    <button class="print-button" onclick="window.print()">
        <i class="fas fa-print"></i> @lang('print.Print')
    </button>
    <button class="pdf-button" onclick="downloadPDF()">
        <i class="fas fa-download"></i> @lang('print.Download PDF')
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
@endsection
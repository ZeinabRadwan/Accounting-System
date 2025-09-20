@extends('pdf')

@section('page-style')
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700&family:Roboto:wght@400;500;700&display=swap');
    
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

@section('content-area')
    <h3>@lang('Profit/Loss Report')</h3>
    
    @if(isset($profitLossData['filters']['from_date']) && isset($profitLossData['filters']['to_date']))
        <div class="row mt-3">
            <div class="col-12 text-center">
                <h6 class="text-muted">
                    @lang('Period'): {{ $profitLossData['filters']['from_date'] }} - {{ $profitLossData['filters']['to_date'] }}
                </h6>
            </div>
        </div>
    @endif

    @if($profitLossData['type'] == 1)
        {{-- Gross Profit/Loss Report --}}
        <div class="row mt-3">
            <div class="col-12">
                <h4>@lang('Gross Profit/Loss Report')</h4>
                <div class="table-responsive">
                    <table class="table-listing table table-bordered table-striped table-sm">
                        <thead>
                            <tr>
                                <th>@lang('#')</th>
                                <th>@lang('Code')</th>
                                <th>@lang('Name')</th>
                                <th>@lang('Avg. Purchase Price')</th>
                                <th>@lang('Avg. Selling Price')</th>
                                <th>@lang('Sold Qty')</th>
                                <th class="text-right">@lang('Profit') / @lang('Loss')</th>
                            </tr>
                        </thead>
                        <tbody>
                            @php
                                $totalQty = 0;
                                $totalProfitOrLoss = 0;
                                $totalPurchased = 0;
                                $totalSold = 0;
                            @endphp
                            @foreach($profitLossData['reportData'] as $index => $item)
                                <tr>
                                    <td>{{ $index + 1 }}</td>
                                    <td>{{ $item['itemCode'] }}</td>
                                    <td>{{ $item['itemName'] }}</td>
                                    <td>@currency($item['avgPurchasePrice'])</td>
                                    <td>@currency($item['avgSalePrice'])</td>
                                    <td>{{ $item['currentQty'] }}</td>
                                    <td class="text-right">
                                        <strong>
                                            @if($item['profitOrLoss'] >= 0)
                                                <span class="text-success">@currency($item['profitOrLoss'])</span>
                                            @else
                                                <span class="text-danger">@currency($item['profitOrLoss'])</span>
                                            @endif
                                        </strong>
                                    </td>
                                </tr>
                                @php
                                    $totalQty += $item['currentQty'];
                                    $totalProfitOrLoss += $item['profitOrLoss'];
                                    $totalPurchased += $item['avgPurchasePrice'] * $item['currentQty'];
                                    $totalSold += $item['avgSalePrice'] * $item['currentQty'];
                                @endphp
                            @endforeach
                            <tr>
                                <td colspan="5" class="text-right"><strong>@lang('Total')</strong></td>
                                <td><strong>{{ $totalQty }}</strong></td>
                                <td class="text-right"><strong>@currency($totalProfitOrLoss)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="row mt-3">
                    <div class="col-12">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>@lang('Total Sales (Average)')</th>
                                    <td></td>
                                    <td class="text-right"><strong>@currency($totalSold)</strong></td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                </tr>
                                <tr>
                                    <th>@lang('Total Purchase (Average)')</th>
                                    <td></td>
                                    <td class="text-right"><u><strong>(@currency($totalPurchased))</strong></u></td>
                                </tr>
                                <tr class="{{ $totalProfitOrLoss >= 0 ? 'text-success' : 'text-danger' }}">
                                    <th>
                                        @if($totalProfitOrLoss >= 0)
                                            @lang('Profit')
                                        @else
                                            @lang('Loss')
                                        @endif
                                    </th>
                                    <td></td>
                                    <td class="text-right"><strong>@currency($totalProfitOrLoss)</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    @else
        {{-- Net Profit/Loss Report --}}
        <div class="row mt-3">
            <div class="col-12">
                <h4>@lang('Income Statement')</h4>
                <div class="table-responsive">
                    <table class="table-listing table table-bordered table-striped table-sm">
                        <thead>
                            <tr class="text-center">
                                <th colspan="3"><h5>@lang('Income Statement')</h5></th>
                            </tr>
                            <tr class="text-center">
                                <td colspan="3">
                                    <strong>@lang('From') {{ $profitLossData['filters']['from_date'] }} @lang('To') {{ $profitLossData['filters']['to_date'] }}</strong>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            @php $data = $profitLossData['reportData'][0]; @endphp
                            <tr>
                                <th>@lang('Total Sales')</th>
                                <td></td>
                                <td class="text-right"><strong>@currency($data['totalSales'])</strong></td>
                            </tr>
                            <tr><td colspan="3"></td></tr>
                            <tr>
                                <th>@lang('Cost of Goods Sold')</th>
                                <td></td>
                                <td class="text-right"><u><strong>(@currency($data['costOfGoodsSold']))</strong></u></td>
                            </tr>
                            <tr>
                                <th colspan="3">@lang('Inventory Adjustment')</th>
                            </tr>
                            <tr class="text-success">
                                <td>@lang('Positive Adjusted')</td>
                                <td class="text-right"><u><strong>@currency($data['posAdjustment'])</strong></u></td>
                                <td></td>
                            </tr>
                            <tr class="text-danger">
                                <td>@lang('Negative Adjusted')</td>
                                <td class="text-right"><u><strong>(@currency($data['negAdjustment']))</strong></u></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>@lang('Total Adjusted')</th>
                                <td></td>
                                <td class="text-right {{ $data['totalAdjustment'] >= 0 ? 'text-success' : 'text-danger' }}">
                                    <strong>
                                        @if($data['totalAdjustment'] >= 0)
                                            @currency($data['totalAdjustment'])
                                        @else
                                            (@currency($data['totalAdjustment']))
                                        @endif
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <th>@lang('Total Sell Return')</th>
                                <td></td>
                                <td class="text-right"><strong>@currency($data['totalSalesReturn'])</strong></td>
                            </tr>
                            <tr>
                                <th>
                                    @if($data['grossProfitOrLoss'] > 0)
                                        @lang('Gross Profit')
                                    @else
                                        @lang('Gross Loss')
                                    @endif
                                </th>
                                <td></td>
                                <td class="text-right"><strong>@currency($data['grossProfitOrLoss'])</strong></td>
                            </tr>
                            <tr><td colspan="3"></td></tr>
                            <tr>
                                <th colspan="3">@lang('Operating Expenses')</th>
                            </tr>
                            <tr>
                                <td>@lang('Salaries')</td>
                                <td class="text-right"><strong>@currency($data['payrollAmount'])</strong></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>@lang('General Expenses')</td>
                                <td class="text-right"><strong>@currency($data['expenseAmount'])</strong></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>@lang('Loan Interest')</td>
                                <td class="text-right"><strong>@currency($data['loanInterest'])</strong></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>@lang('Asset Depreciation')</td>
                                <td class="text-right"><strong>@currency($data['assetDepriciation'])</strong></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>@lang('Total Expense')</th>
                                <td></td>
                                <td class="text-right"><strong>(@currency($data['totalExpense']))</strong></td>
                            </tr>
                            <tr class="{{ $data['netProfitOrLoss'] >= 0 ? 'text-success' : 'text-danger' }}">
                                <th>
                                    @if($data['netProfitOrLoss'] >= 0)
                                        @lang('Net Profit')
                                    @else
                                        @lang('Net Loss')
                                    @endif
                                </th>
                                <td></td>
                                <td class="text-right">
                                    <strong>@currency($data['netProfitOrLoss'])</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    @endif
@endsection
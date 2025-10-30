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
    
    .item-tables {
        display: flex;
        justify-content: space-between;
        @if(app()->getLocale() == 'ar')
            flex-direction: row-reverse;
        @endif
    }
    
    .stock-table {
        width: 48%;
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
        <h2>@lang('print.Item Report')</h2>
        @if(isset($itemsReportData['filters']['from_date']) && isset($itemsReportData['filters']['to_date']))
            <h4>@lang('print.Period'): {{ $itemsReportData['filters']['from_date'] }} - {{ $itemsReportData['filters']['to_date'] }}</h4>
        @endif
        @if(isset($itemsReportData['filters']['product_name']))
            <h5>@lang('print.Product'): {{ $itemsReportData['filters']['product_name'] }}</h5>
        @endif
    </div>

    @if(isset($itemsReportData['product']))
        <!-- Product Information -->
        <div class="row mb-4">
            <div class="col-md-6">
                <table class="table table-bordered">
                    <tr>
                        <th>@lang('print.Code')</th>
                        <td>{{ $itemsReportData['product']['code'] ?? '' }}</td>
                    </tr>
                    <tr>
                        <th>@lang('print.Category')</th>
                        <td>{{ $itemsReportData['product']['pro_sub_category']['category']['name'] ?? '' }}</td>
                    </tr>
                    <tr>
                        <th>@lang('print.Sub Category')</th>
                        <td>{{ $itemsReportData['product']['pro_sub_category']['name'] ?? '' }}</td>
                    </tr>
                    <tr>
                        <th>@lang('print.Available Stock')</th>
                        <td>{{ $itemsReportData['product']['available_qty'] ?? 0 }} {{ $itemsReportData['product']['product_unit']['code'] ?? '' }}</td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Stock In and Stock Out Tables -->
        <div class="item-tables">
            <!-- Stock In Table -->
            <div class="stock-table">
                <h4><i>@lang('print.Stock In')</i></h4>
                <table class="table table-bordered table-striped table-sm">
                    <thead>
                        <tr>
                            <th>@lang('print.#')</th>
                            <th>@lang('print.Date')</th>
                            <th>@lang('print.Stock In')</th>
                            <th>@lang('print.Price')</th>
                            <th>@lang('print.Type')</th>
                            <th>@lang('print.Code')</th>
                            <th>@lang('print.Supplier')/@lang('print.Client')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                            $totalStockInQty = 0;
                        @endphp
                        @if(isset($itemsReportData['stockIns']) && count($itemsReportData['stockIns']) > 0)
                            @foreach($itemsReportData['stockIns'] as $index => $stockIn)
                                <tr>
                                    <td>{{ $index + 1 }}</td>
                                    <td>{{ isset($stockIn['date']) ? \Carbon\Carbon::parse($stockIn['date'])->format('d M, Y') : '' }}</td>
                                    <td>{{ $stockIn['quantity'] ?? 0 }}</td>
                                    <td>{{ formatPdfCurrency($stockIn['price'] ?? 0) }}</td>
                                    <td>
                                        <span class="badge badge-success">{{ $stockIn['type'] ?? '' }}</span>
                                    </td>
                                    <td>{{ $stockIn['code'] ?? '' }}</td>
                                    <td>
                                        @if($stockIn['type'] === 'Purchase')
                                            {{ $stockIn['supplier'] ?? '' }}
                                        @elseif($stockIn['type'] === 'Invoice Return')
                                            {{ $stockIn['client'] ?? '' }}
                                        @else
                                            {{ $stockIn['reason'] ?? '' }}
                                        @endif
                                    </td>
                                </tr>
                                @php
                                    $totalStockInQty += $stockIn['quantity'] ?? 0;
                                @endphp
                            @endforeach
                            <tr class="table-info">
                                <td colspan="2" class="text-right"><strong>@lang('print.Total Quantity')</strong></td>
                                <td><strong>{{ $totalStockInQty }}</strong></td>
                                <td colspan="4"></td>
                            </tr>
                        @else
                            <tr>
                                <td colspan="7" class="text-center">@lang('print.No stock in data found')</td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>

            <!-- Stock Out Table -->
            <div class="stock-table">
                <h4><i>@lang('print.Stock Out')</i></h4>
                <table class="table table-bordered table-striped table-sm">
                    <thead>
                        <tr>
                            <th>@lang('print.#')</th>
                            <th>@lang('print.Date')</th>
                            <th>@lang('print.Stock Out')</th>
                            <th>@lang('print.Price')</th>
                            <th>@lang('print.Type')</th>
                            <th>@lang('print.Code')</th>
                            <th>@lang('print.Supplier')/@lang('print.Client')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                            $totalStockOutQty = 0;
                        @endphp
                        @if(isset($itemsReportData['stockOuts']) && count($itemsReportData['stockOuts']) > 0)
                            @foreach($itemsReportData['stockOuts'] as $index => $stockOut)
                                <tr>
                                    <td>{{ $index + 1 }}</td>
                                    <td>{{ isset($stockOut['date']) ? \Carbon\Carbon::parse($stockOut['date'])->format('d M, Y') : '' }}</td>
                                    <td>{{ $stockOut['quantity'] ?? 0 }}</td>
                                    <td>{{ formatPdfCurrency($stockOut['price'] ?? 0) }}</td>
                                    <td>
                                        <span class="badge badge-danger">{{ $stockOut['type'] ?? '' }}</span>
                                    </td>
                                    <td>{{ $stockOut['code'] ?? '' }}</td>
                                    <td>
                                        @if($stockOut['type'] === 'Invoice')
                                            {{ $stockOut['client'] ?? '' }}
                                        @elseif($stockOut['type'] === 'Purchase Return')
                                            {{ $stockOut['supplier'] ?? '' }}
                                        @else
                                            {{ $stockOut['reason'] ?? '' }}
                                        @endif
                                    </td>
                                </tr>
                                @php
                                    $totalStockOutQty += $stockOut['quantity'] ?? 0;
                                @endphp
                            @endforeach
                            <tr class="table-info">
                                <td colspan="2" class="text-right"><strong>@lang('print.Total Quantity')</strong></td>
                                <td><strong>{{ $totalStockOutQty }}</strong></td>
                                <td colspan="4"></td>
                            </tr>
                        @else
                            <tr>
                                <td colspan="7" class="text-center">@lang('print.No stock out data found')</td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    @else
        <div class="text-center mt-5">
            <h4>@lang('print.No product data found for the selected period.')</h4>
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
        // Create PDF download URL for items report
        const urlParams = new URLSearchParams(window.location.search);
        let pdfUrl = '/items-report/pdf';
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

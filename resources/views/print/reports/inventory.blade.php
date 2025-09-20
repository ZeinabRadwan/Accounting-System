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
        <h2>@lang('print.Inventory Report')</h2>
        @if(isset($inventoryReportData['filters']['from_date']) && isset($inventoryReportData['filters']['to_date']))
            <h4>@lang('print.Period'): {{ $inventoryReportData['filters']['from_date'] }} - {{ $inventoryReportData['filters']['to_date'] }}</h4>
        @endif
        @if(isset($inventoryReportData['filters']['category']))
            <h5>@lang('print.Category'): {{ $inventoryReportData['filters']['category'] }}</h5>
        @endif
        @if(isset($inventoryReportData['filters']['sub_category']))
            <h5>@lang('print.Sub Category'): {{ $inventoryReportData['filters']['sub_category'] }}</h5>
        @endif
        @if(isset($inventoryReportData['filters']['item_name']))
            <h5>@lang('print.Product'): {{ $inventoryReportData['filters']['item_name'] }}</h5>
        @endif
    </div>

    @if(isset($inventoryReportData['data']) && count($inventoryReportData['data']) > 0)
        <!-- Inventory Table -->
        <div class="table-responsive">
            <table class="table table-bordered table-striped table-sm">
                <thead>
                    <tr>
                        <th>@lang('print.#')</th>
                        <th>@lang('print.Code')</th>
                        <th>@lang('print.Name')</th>
                        <th>@lang('print.Stock In')</th>
                        <th>@lang('print.Stock Out')</th>
                        <th>@lang('print.Stock in Hand')</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $totalStockIn = 0;
                        $totalStockOut = 0;
                        $totalStockInHand = 0;
                    @endphp
                    @foreach($inventoryReportData['data'] as $index => $item)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ $item['productCode'] ?? '' }}</td>
                            <td>{{ $item['productName'] ?? '' }}</td>
                            <td class="text-right">{{ $item['stockIn'] ?? 0 }}</td>
                            <td class="text-right">{{ $item['stockOut'] ?? 0 }}</td>
                            <td class="text-right">{{ $item['availableStock'] ?? 0 }}</td>
                        </tr>
                        @php
                            $totalStockIn += $item['stockIn'] ?? 0;
                            $totalStockOut += $item['stockOut'] ?? 0;
                            $totalStockInHand += $item['availableStock'] ?? 0;
                        @endphp
                    @endforeach
                    <tr class="table-info">
                        <td colspan="3" class="text-right"><strong>@lang('print.Total Quantity')</strong></td>
                        <td class="text-right"><strong>{{ $totalStockIn }}</strong></td>
                        <td class="text-right"><strong>{{ $totalStockOut }}</strong></td>
                        <td class="text-right"><strong>{{ $totalStockInHand }}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    @else
        <div class="text-center mt-5">
            <h4>@lang('print.No inventory data found for the selected period.')</h4>
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
        // Create PDF download URL for inventory report
        const urlParams = new URLSearchParams(window.location.search);
        let pdfUrl = '/reports/inventory-report/pdf';
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

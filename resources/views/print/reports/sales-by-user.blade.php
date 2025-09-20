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
        <h2>@lang('print.Sales By User Report')</h2>
        @if(isset($salesByUserReportData['filters']['from_date']) && isset($salesByUserReportData['filters']['to_date']))
            <h4>@lang('print.Period'): {{ $salesByUserReportData['filters']['from_date'] }} - {{ $salesByUserReportData['filters']['to_date'] }}</h4>
        @endif
        @if(isset($salesByUserReportData['filters']['user']))
            <h5>@lang('print.User'): {{ $salesByUserReportData['filters']['user'] }}</h5>
        @endif
    </div>

    @if(isset($salesByUserReportData['data']) && count($salesByUserReportData['data']) > 0)
        <!-- Sales Table -->
        <div class="table-responsive">
            <table class="table table-bordered table-striped table-sm">
                <thead>
                    <tr>
                        <th>@lang('print.#')</th>
                        <th>@lang('print.Sales By')</th>
                        <th>@lang('print.Invoice No')</th>
                        <th>@lang('print.Client')</th>
                        <th>@lang('print.Net Total')</th>
                        <th>@lang('print.Invoice Date')</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $totalAmount = 0;
                    @endphp
                    @foreach($salesByUserReportData['data'] as $index => $sale)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ $sale['salesBy'] ?? '' }}</td>
                            <td>{{ $sale['invoiceLabel'] ?? '' }}</td>
                            <td>{{ $sale['client'] ?? '' }}</td>
                            <td class="text-right">
                                @php
                                    $amount = $sale['invoiceTotal'] ?? 0;
                                    $totalAmount += $amount;
                                @endphp
                                {{ formatPdfCurrency($amount) }}
                            </td>
                            <td>{{ isset($sale['invoiceDate']) ? \Carbon\Carbon::parse($sale['invoiceDate'])->format('d M, Y') : '' }}</td>
                        </tr>
                    @endforeach
                    <tr class="table-info">
                        <td colspan="4" class="text-right"><strong>@lang('print.Total')</strong></td>
                        <td class="text-right"><strong>{{ formatPdfCurrency($totalAmount) }}</strong></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    @else
        <div class="text-center mt-5">
            <h4>@lang('print.No sales data found for the selected period.')</h4>
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
        // Create PDF download URL for sales by user report
        const urlParams = new URLSearchParams(window.location.search);
        let pdfUrl = '/sales-by-user-report/pdf';
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

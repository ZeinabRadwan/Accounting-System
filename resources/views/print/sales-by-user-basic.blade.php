<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Sales By User Report')</title>
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
        <table class="table table-striped">
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
                <tr style="background-color: #f8f9fa; font-weight: bold;">
                    <td colspan="4" class="text-right">@lang('print.Total')</td>
                    <td class="text-right">{{ formatPdfCurrency($totalAmount) }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    @else
        <div class="text-center" style="margin-top: 3rem;">
            <h4>@lang('print.No sales data found for the selected period.')</h4>
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
</body>
</html>

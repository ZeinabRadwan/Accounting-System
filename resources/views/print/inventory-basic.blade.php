<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Inventory Report')</title>
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
        <table class="table table-striped">
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
                <tr style="background-color: #f8f9fa; font-weight: bold;">
                    <td colspan="3" class="text-right">@lang('print.Total Quantity')</td>
                    <td class="text-right">{{ $totalStockIn }}</td>
                    <td class="text-right">{{ $totalStockOut }}</td>
                    <td class="text-right">{{ $totalStockInHand }}</td>
                </tr>
            </tbody>
        </table>
    @else
        <div class="text-center" style="margin-top: 3rem;">
            <h4>@lang('print.No inventory data found for the selected period.')</h4>
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
</body>
</html>

<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Item Report')</title>
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
        
        .badge {
            display: inline-block;
            padding: 0.25em 0.4em;
            font-size: 75%;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 0.25rem;
        }
        
        .badge-success {
            color: #fff;
            background-color: #28a745;
        }
        
        .badge-danger {
            color: #fff;
            background-color: #dc3545;
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
        <div style="margin-bottom: 2rem;">
            <table class="table" style="width: 50%;">
                <tr>
                    <th style="background-color: #f8f9fa;">@lang('print.Code')</th>
                    <td>{{ $itemsReportData['product']['code'] ?? '' }}</td>
                </tr>
                <tr>
                    <th style="background-color: #f8f9fa;">@lang('print.Category')</th>
                    <td>{{ $itemsReportData['product']['pro_sub_category']['category']['name'] ?? '' }}</td>
                </tr>
                <tr>
                    <th style="background-color: #f8f9fa;">@lang('print.Sub Category')</th>
                    <td>{{ $itemsReportData['product']['pro_sub_category']['name'] ?? '' }}</td>
                </tr>
                <tr>
                    <th style="background-color: #f8f9fa;">@lang('print.Available Stock')</th>
                    <td>{{ $itemsReportData['product']['available_qty'] ?? 0 }} {{ $itemsReportData['product']['product_unit']['code'] ?? '' }}</td>
                </tr>
            </table>
        </div>

        <!-- Stock In and Stock Out Tables -->
        <div class="item-tables">
            <!-- Stock In Table -->
            <div class="stock-table">
                <h4><i>@lang('print.Stock In')</i></h4>
                <table class="table table-striped">
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
                            <tr style="background-color: #f8f9fa; font-weight: bold;">
                                <td colspan="2" class="text-right">@lang('print.Total Quantity')</td>
                                <td>{{ $totalStockInQty }}</td>
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
                <table class="table table-striped">
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
                            <tr style="background-color: #f8f9fa; font-weight: bold;">
                                <td colspan="2" class="text-right">@lang('print.Total Quantity')</td>
                                <td>{{ $totalStockOutQty }}</td>
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
        <div class="text-center" style="margin-top: 3rem;">
            <h4>@lang('print.No product data found for the selected period.')</h4>
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
            // Create PDF download URL for items report
            const urlParams = new URLSearchParams(window.location.search);
            let pdfUrl = '/reports/items-report/pdf';
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

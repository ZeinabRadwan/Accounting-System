<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Today Report')</title>
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
        }
        
        .table-striped tbody tr:nth-of-type(odd) {
            background-color: rgba(0,0,0,.05);
        }
        
        .text-center { text-align: center; }
        .mb-4 { margin-bottom: 1.5rem; }
        .profit-loss-section {
            margin: 20px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        .value-positive { color: #28a745; font-weight: bold; }
        .value-negative { color: #dc3545; font-weight: bold; }
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
        <h2>@lang('print.Today Report')</h2>
        <p><strong>@lang('print.Report Date'):</strong> {{ date('Y-m-d') }}</p>
    </div>
    
    @if($reportData && count($reportData) > 0)
        <!-- Stock Information Section -->
        <div style="display: flex; margin-bottom: 2rem;">
            <div style="width: 50%; padding-right: 15px;">
                <h4>@lang('print.Opening Stock Information')</h4>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th>@lang('print.Opening Stock') <br><small>@lang('print.By purchase price')</small>:</th>
                            <td>{{ formatPdfCurrency($reportData['openingStockByPurchasePrice'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('print.Opening Stock') <br><small>@lang('print.By sale price')</small>:</th>
                            <td>{{ formatPdfCurrency($reportData['openingStockBySalePrice'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('print.Closing Stock') <br><small>@lang('print.By purchase price')</small>:</th>
                            <td>{{ formatPdfCurrency($reportData['closingStockByPurchasePrice'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('print.Closing Stock') <br><small>@lang('print.By sale price')</small>:</th>
                            <td>{{ formatPdfCurrency($reportData['closingStockBySalePrice'] ?? 0) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div style="width: 50%; padding-left: 15px;">
                <h4>@lang('print.Sales & Purchase Information')</h4>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th>@lang('print.Invoice Sales'):</th>
                            <td>{{ formatPdfCurrency($reportData['invoiceSales'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('print.Invoice Discount'):</th>
                            <td>{{ formatPdfCurrency($reportData['invoiceDiscount'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('print.Invoice Return'):</th>
                            <td>{{ formatPdfCurrency($reportData['invoiceReturn'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('print.Total Purchase'):</th>
                            <td>{{ formatPdfCurrency($reportData['totalPurchase'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('print.Purchase Return'):</th>
                            <td>{{ formatPdfCurrency($reportData['purchaseReturn'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('print.Purchase Discount'):</th>
                            <td>{{ formatPdfCurrency($reportData['todayPurchaseDiscount'] ?? 0) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <!-- Expenses Section -->
        <div class="mb-4">
            <h4>@lang('print.Expenses Information')</h4>
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th>@lang('print.Total Expense'):</th>
                        <td>{{ formatPdfCurrency($reportData['expenses'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <th>@lang('print.Total Payroll'):</th>
                        <td>{{ formatPdfCurrency($reportData['payrolls'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <th>@lang('print.Total Loan Interest'):</th>
                        <td>{{ formatPdfCurrency($reportData['loanInterest'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <th>@lang('print.Asset Depreciation'):</th>
                        <td>{{ formatPdfCurrency($reportData['assetDepriciation'] ?? 0) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Profit/Loss Section -->
        <div class="profit-loss-section text-center">
            <div style="display: flex;">
                <div style="width: 50%;">
                    @if(($reportData['grossProfit'] ?? 0) >= 0)
                        <h3 class="value-positive">
                            @lang('print.Gross Profit'): {{ formatPdfCurrency($reportData['grossProfit']) }}
                        </h3>
                    @else
                        <h3 class="value-negative">
                            @lang('print.Gross Loss'): {{ formatPdfCurrency(abs($reportData['grossProfit'])) }}
                        </h3>
                    @endif
                </div>
                <div style="width: 50%;">
                    @if(($reportData['netProfit'] ?? 0) >= 0)
                        <h3 class="value-positive">
                            @lang('print.Net Profit'): {{ formatPdfCurrency($reportData['netProfit']) }}
                        </h3>
                    @else
                        <h3 class="value-negative">
                            @lang('print.Net Loss'): {{ formatPdfCurrency(abs($reportData['netProfit'])) }}
                        </h3>
                    @endif
                </div>
            </div>
        </div>
    @else
        <div class="text-center" style="margin-top: 3rem;">
            <h4>@lang('print.No data found for today.')</h4>
        </div>
    @endif
</body>
</html>

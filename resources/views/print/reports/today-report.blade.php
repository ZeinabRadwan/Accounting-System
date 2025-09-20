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
    
    .profit-loss-section {
        margin: 20px 0;
        padding: 15px;
        background-color: #f8f9fa;
        border-radius: 5px;
    }
    
    .section-divider {
        border-top: 2px solid #dee2e6;
        margin: 30px 0;
    }
    
    .value-positive {
        color: #28a745;
        font-weight: bold;
    }
    
    .value-negative {
        color: #dc3545;
        font-weight: bold;
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
        <h2>@lang('print.Today Report')</h2>
        <p><strong>@lang('print.Report Date'):</strong> {{ date('Y-m-d') }}</p>
    </div>
    
    @if($reportData && count($reportData) > 0)
        <!-- Stock Information Section -->
        <div class="row mb-4">
            <div class="col-md-6">
                <h4>@lang('print.Opening Stock Information')</h4>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-sm">
                        <tbody>
                            <tr>
                                <th>@lang('print.Opening Stock') <br><small class="text-muted">@lang('print.By purchase price')</small>:</th>
                                <td>{{ formatPdfCurrency($reportData['openingStockByPurchasePrice'] ?? 0) }}</td>
                            </tr>
                            <tr>
                                <th>@lang('print.Opening Stock') <br><small class="text-muted">@lang('print.By sale price')</small>:</th>
                                <td>{{ formatPdfCurrency($reportData['openingStockBySalePrice'] ?? 0) }}</td>
                            </tr>
                            <tr>
                                <th>@lang('print.Closing Stock') <br><small class="text-muted">@lang('print.By purchase price')</small>:</th>
                                <td>{{ formatPdfCurrency($reportData['closingStockByPurchasePrice'] ?? 0) }}</td>
                            </tr>
                            <tr>
                                <th>@lang('print.Closing Stock') <br><small class="text-muted">@lang('print.By sale price')</small>:</th>
                                <td>{{ formatPdfCurrency($reportData['closingStockBySalePrice'] ?? 0) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="col-md-6">
                <h4>@lang('print.Sales & Purchase Information')</h4>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-sm">
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
        </div>
        
        <div class="section-divider"></div>
        
        <!-- Expenses Section -->
        <div class="row mb-4">
            <div class="col-md-12">
                <h4>@lang('print.Expenses Information')</h4>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-sm">
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
            </div>
        </div>
        
        <div class="section-divider"></div>
        
        <!-- Profit/Loss Section -->
        <div class="profit-loss-section text-center">
            <div class="row">
                <div class="col-md-6">
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
                <div class="col-md-6">
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
        <div class="text-center mt-5">
            <h4>@lang('print.No data found for today.')</h4>
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
        // Create PDF download URL for today's report
        const link = document.createElement('a');
        link.href = '/today-report/pdf';
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
</script>
@endsection

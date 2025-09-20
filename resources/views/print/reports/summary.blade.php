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
    
    .section-divider {
        border-top: 2px solid #dee2e6;
        margin: 20px 0;
    }
    
    .summary-header {
        background-color: #f8f9fa;
        font-weight: bold;
    }
    
    .amount-positive {
        color: #28a745;
        font-weight: bold;
    }
    
    .amount-negative {
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
        <h2>@lang('print.Monthly Summary')</h2>
        @if(isset($summaryData['monthName']) && isset($summaryData['year']))
            <h4>{{ $summaryData['monthName'] }}, {{ $summaryData['year'] }}</h4>
        @endif
    </div>
    
    @if($summaryData && count($summaryData) > 0)
        <!-- Summary Table -->
        <div class="table-responsive">
            <table class="table table-bordered table-striped table-sm">
                <thead>
                    <tr class="summary-header">
                        <th>@lang('print.#')</th>
                        <th>@lang('print.Particulars')</th>
                        <th>@lang('print.Balance')</th>
                    </tr>
                </thead>
                
                <!-- Opening Balance Section -->
                <thead>
                    <tr class="summary-header">
                        <th colspan="3">@lang('print.Opening Balance')</th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($summaryData['openingBalances']) && count($summaryData['openingBalances']) > 0)
                        @foreach($summaryData['openingBalances'] as $index => $balance)
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>
                                    <strong>{{ $balance->account_number }}</strong><br>
                                    <small class="text-muted">{{ $balance->bank_name }}</small>
                                </td>
                                <td>{{ formatPdfCurrency($balance->current_balance ?? 0) }}</td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="3" class="text-center text-muted">@lang('print.No opening balances found')</td>
                        </tr>
                    @endif
                </tbody>
                
                <!-- Collections Section -->
                <thead>
                    <tr class="summary-header">
                        <th colspan="3">@lang('print.Collections')</th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($summaryData['accountCollections']) && count($summaryData['accountCollections']) > 0)
                        @foreach($summaryData['accountCollections'] as $index => $collection)
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>
                                    <strong>{{ $collection->account_number }}</strong><br>
                                    <small class="text-muted">{{ $collection->bank_name }}</small>
                                </td>
                                <td>{{ formatPdfCurrency($collection->total_collection ?? 0) }}</td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="3" class="text-center text-muted">@lang('print.No collections found')</td>
                        </tr>
                    @endif
                </tbody>
                
                <!-- Expenses Section -->
                <thead>
                    <tr class="summary-header">
                        <th colspan="3">@lang('print.Expenses')</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>@lang('print.General Expenses')</td>
                        <td>{{ formatPdfCurrency($summaryData['expenses'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>@lang('print.Payrolls')</td>
                        <td>{{ formatPdfCurrency($summaryData['payrolls'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>@lang('print.Loan Interest')</td>
                        <td>{{ formatPdfCurrency($summaryData['loanInterest'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>@lang('print.Asset Depreciation')</td>
                        <td>{{ formatPdfCurrency($summaryData['assetDepriciation'] ?? 0) }}</td>
                    </tr>
                </tbody>
                
                <!-- Sales Section -->
                <thead>
                    <tr class="summary-header">
                        <th colspan="3">@lang('print.Sales & Purchase')</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>@lang('print.Invoice Sales')</td>
                        <td>{{ formatPdfCurrency($summaryData['invoiceSales'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>@lang('print.Invoice Due')</td>
                        <td>{{ formatPdfCurrency($summaryData['invoiceDue'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>@lang('print.Total Purchase')</td>
                        <td>{{ formatPdfCurrency($summaryData['totalPurchase'] ?? 0) }}</td>
                    </tr>
                </tbody>
                
                <!-- Balance Transfers Section -->
                @if(isset($summaryData['balanceTransfers']) && count($summaryData['balanceTransfers']) > 0)
                    <thead>
                        <tr class="summary-header">
                            <th colspan="3">@lang('print.Balance Transfers')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($summaryData['balanceTransfers'] as $index => $transfer)
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>
                                    @lang('print.From'): {{ $transfer->debitTransaction->cashbookAccount->account_number ?? 'N/A' }}<br>
                                    @lang('print.To'): {{ $transfer->creditTransaction->cashbookAccount->account_number ?? 'N/A' }}
                                </td>
                                <td>{{ formatPdfCurrency($transfer->amount ?? 0) }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                @endif
                
                <!-- Closing Balance Section -->
                <thead>
                    <tr class="summary-header">
                        <th colspan="3">@lang('print.Closing Balance')</th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($summaryData['closingBalances']) && count($summaryData['closingBalances']) > 0)
                        @foreach($summaryData['closingBalances'] as $index => $balance)
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>
                                    <strong>{{ $balance->account_number }}</strong><br>
                                    <small class="text-muted">{{ $balance->bank_name }}</small>
                                </td>
                                <td>{{ formatPdfCurrency($balance->current_balance ?? 0) }}</td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="3" class="text-center text-muted">@lang('print.No closing balances found')</td>
                        </tr>
                    @endif
                </tbody>
            </table>
        </div>
    @else
        <div class="text-center mt-5">
            <h4>@lang('print.No summary data found for the selected period.')</h4>
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
        // Create PDF download URL for summary report
        const urlParams = new URLSearchParams(window.location.search);
        let pdfUrl = '/summary/pdf';
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
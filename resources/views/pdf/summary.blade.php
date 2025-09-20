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
    
    .summary-header {
        background-color: #f8f9fa;
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

@section('content-area')
<div class="container-fluid">
    <!-- Header -->
    <div class="text-center mb-4">
        <h2>@lang('print.Monthly Summary')</h2>
        @if(isset($reportData['monthName']) && isset($reportData['year']))
            <h4>{{ $reportData['monthName'] }}, {{ $reportData['year'] }}</h4>
        @endif
    </div>
    
    @if($reportData && count($reportData) > 0)
        <!-- Summary Table -->
        <div class="table-responsive">
            <table class="table-listing table table-bordered table-striped table-sm">
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
                    @if(isset($reportData['openingBalances']) && count($reportData['openingBalances']) > 0)
                        @foreach($reportData['openingBalances'] as $index => $balance)
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
                    @if(isset($reportData['accountCollections']) && count($reportData['accountCollections']) > 0)
                        @foreach($reportData['accountCollections'] as $index => $collection)
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
                        <td>{{ formatPdfCurrency($reportData['expenses'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>@lang('print.Payrolls')</td>
                        <td>{{ formatPdfCurrency($reportData['payrolls'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>@lang('print.Loan Interest')</td>
                        <td>{{ formatPdfCurrency($reportData['loanInterest'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>@lang('print.Asset Depreciation')</td>
                        <td>{{ formatPdfCurrency($reportData['assetDepriciation'] ?? 0) }}</td>
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
                        <td>{{ formatPdfCurrency($reportData['invoiceSales'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>@lang('print.Invoice Due')</td>
                        <td>{{ formatPdfCurrency($reportData['invoiceDue'] ?? 0) }}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>@lang('print.Total Purchase')</td>
                        <td>{{ formatPdfCurrency($reportData['totalPurchase'] ?? 0) }}</td>
                    </tr>
                </tbody>
                
                <!-- Balance Transfers Section -->
                @if(isset($reportData['balanceTransfers']) && count($reportData['balanceTransfers']) > 0)
                    <thead>
                        <tr class="summary-header">
                            <th colspan="3">@lang('print.Balance Transfers')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($reportData['balanceTransfers'] as $index => $transfer)
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
                    @if(isset($reportData['closingBalances']) && count($reportData['closingBalances']) > 0)
                        @foreach($reportData['closingBalances'] as $index => $balance)
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
@endsection

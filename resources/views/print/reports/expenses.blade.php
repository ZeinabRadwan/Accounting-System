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
        <h2>@lang('print.Expense Report')</h2>
        @if(isset($expensesReportData['filters']['from_date']) && isset($expensesReportData['filters']['to_date']))
            <h4>@lang('print.Period'): {{ $expensesReportData['filters']['from_date'] }} - {{ $expensesReportData['filters']['to_date'] }}</h4>
        @endif
        @if(isset($expensesReportData['filters']['category']))
            <h5>@lang('print.Category'): {{ $expensesReportData['filters']['category'] }}</h5>
        @endif
        @if(isset($expensesReportData['filters']['sub_category']))
            <h5>@lang('print.Sub Category'): {{ $expensesReportData['filters']['sub_category'] }}</h5>
        @endif
    </div>

    @if(isset($expensesReportData['data']) && count($expensesReportData['data']) > 0)
        <!-- Expenses Table -->
        <div class="table-responsive">
            <table class="table table-bordered table-striped table-sm">
                <thead>
                    <tr>
                        <th>@lang('print.#')</th>
                        <th>@lang('print.Date')</th>
                        <th>@lang('print.Expense Reason')</th>
                        <th>@lang('print.Category')</th>
                        <th>@lang('print.Sub Category')</th>
                        <th>@lang('print.Amount')</th>
                        <th>@lang('print.Account')</th>
                        <th>@lang('print.Status')</th>
                        <th>@lang('print.Created By')</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $totalAmount = 0;
                    @endphp
                    @foreach($expensesReportData['data'] as $index => $expense)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ isset($expense['date']) ? \Carbon\Carbon::parse($expense['date'])->format('d M, Y') : '' }}</td>
                            <td>{{ $expense['reason'] ?? '' }}</td>
                            <td>
                                @if(isset($expense['category']) && $expense['category'])
                                    {{ $expense['category']['code'] ?? '' }}
                                @elseif(isset($expense['exp_sub_category']['exp_category']))
                                    {{ $expense['exp_sub_category']['exp_category']['code'] ?? '' }}
                                @endif
                            </td>
                            <td>
                                @if(isset($expense['sub_category']) && $expense['sub_category'])
                                    {{ $expense['sub_category']['code'] ?? '' }}
                                @elseif(isset($expense['exp_sub_category']))
                                    {{ $expense['exp_sub_category']['code'] ?? '' }}
                                @endif
                            </td>
                            <td class="text-right">
                                @php
                                    $amount = 0;
                                    if (isset($expense['transaction']['amount'])) {
                                        $amount = $expense['transaction']['amount'];
                                    } elseif (isset($expense['exp_transaction']['amount'])) {
                                        $amount = $expense['exp_transaction']['amount'];
                                    }
                                    $totalAmount += $amount;
                                @endphp
                                {{ formatPdfCurrency($amount) }}
                            </td>
                            <td>
                                @if(isset($expense['transaction']['cashbook_account']))
                                    {{ $expense['transaction']['cashbook_account']['account_number'] ?? '' }}
                                @elseif(isset($expense['exp_transaction']['cashbook_account']))
                                    {{ $expense['exp_transaction']['cashbook_account']['account_number'] ?? '' }}
                                @endif
                            </td>
                            <td>
                                @if(($expense['status'] ?? 0) == 1)
                                    <span class="text-success">@lang('print.Active')</span>
                                @else
                                    <span class="text-danger">@lang('print.Inactive')</span>
                                @endif
                            </td>
                            <td>
                                @if(isset($expense['user']))
                                    {{ $expense['user']['name'] ?? '' }}
                                @endif
                            </td>
                        </tr>
                    @endforeach
                    <tr class="table-info">
                        <td colspan="5" class="text-right"><strong>@lang('print.Total')</strong></td>
                        <td class="text-right"><strong>{{ formatPdfCurrency($totalAmount) }}</strong></td>
                        <td colspan="3"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    @else
        <div class="text-center mt-5">
            <h4>@lang('print.No expenses found for the selected period.')</h4>
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
        // Create PDF download URL for expenses report
        const urlParams = new URLSearchParams(window.location.search);
        let pdfUrl = '/reports/expenses-report/pdf';
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

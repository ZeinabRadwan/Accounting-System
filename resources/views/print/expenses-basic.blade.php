<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() == 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Expense Report')</title>
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
        .text-success { color: #28a745; }
        .text-danger { color: #dc3545; }
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
        <table class="table table-striped">
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
                <tr style="background-color: #f8f9fa; font-weight: bold;">
                    <td colspan="5" class="text-right">@lang('print.Total')</td>
                    <td class="text-right">{{ formatPdfCurrency($totalAmount) }}</td>
                    <td colspan="3"></td>
                </tr>
            </tbody>
        </table>
    @else
        <div class="text-center" style="margin-top: 3rem;">
            <h4>@lang('print.No expenses found for the selected period.')</h4>
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
</body>
</html>

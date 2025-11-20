@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Account Statement')</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        body {
            font-family: {{ $isRTL ? 'DejaVu Sans, Arial Unicode MS, Tahoma, sans-serif' : 'Arial, sans-serif' }};
            margin: 0;
            padding: 20px;
            background: white;
            color: #333;
            direction: {{ $isRTL ? 'rtl' : 'ltr' }};
        }

        .arabic-text {
            font-family: 'DejaVu Sans', 'Arial Unicode MS', 'Tahoma', sans-serif;
            direction: rtl;
            text-align: right;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 20px;
        }

        .company-name {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 10px;
        }

        .report-title {
            font-size: 20px;
            font-weight: bold;
            color: #374151;
            margin-bottom: 10px;
        }

        /* RTL specific styles */
        @if ($isRTL)
            .data-table th,
            .data-table td {
                text-align: right;
            }

            .data-table .text-right {
                text-align: right !important;
            }

            .data-table .text-center {
                text-align: center !important;
            }

            .totals-table td:first-child {
                text-align: right !important;
            }

            .totals-table td:last-child {
                text-align: left !important;
            }
        @endif

        .account-info {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .summary-section {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 15px;
        }

        .summary-box {
            flex: 1;
            min-width: 200px;
            padding: 15px;
            background: #f8fafc;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            text-align: center;
        }

        .summary-box.closing {
            background: #2563eb;
            color: white;
        }

        .summary-label {
            font-size: 14px;
            color: #6b7280;
            margin-bottom: 8px;
        }

        .summary-value {
            font-size: 18px;
            font-weight: bold;
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: 12px;
        }

        .data-table th {
            background: #f8fafc;
            color: #2563eb;
            padding: 12px 8px;
            text-align: left;
            border: 1px solid #e5e7eb;
            font-weight: 600;
        }

        .data-table td {
            padding: 8px;
            border: 1px solid #e5e7eb;
            vertical-align: top;
        }

        .data-table tbody tr:nth-child(even) {
            background: #f9fafb;
        }

        .text-right {
            text-align: right;
        }

        .text-center {
            text-align: center;
        }

        .positive {
            color: #059669;
        }

        .negative {
            color: #dc2626;
        }

        .badge {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
        }

        .badge-debit {
            background: #dcfce7;
            color: #166534;
        }

        .badge-credit {
            background: #fee2e2;
            color: #991b1b;
        }

        .totals-section {
            margin-top: 20px;
        }

        .totals-table {
            width: 100%;
            border-collapse: collapse;
        }

        .totals-table td {
            padding: 12px;
            border-bottom: 1px solid #e5e7eb;
        }

        .totals-table .total-row {
            border-top: 2px solid #2563eb;
            background: #f8fafc;
            font-weight: bold;
            font-size: 16px;
        }

        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 12px;
        }

        @media print {
            body {
                padding: 0;
            }

            .summary-section {
                page-break-inside: avoid;
            }

            .data-table {
                page-break-inside: auto;
            }

            .data-table thead {
                display: table-header-group;
            }

            .data-table tbody tr {
                page-break-inside: avoid;
            }

            /* Action Buttons Styling */
            .action-buttons {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                gap: 10px;
            }

            .print-button,
            .pdf-button {
                padding: 12px 20px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.2s ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .print-button {
                background: linear-gradient(135deg, #059669, #047857);
                color: white;
            }

            .pdf-button {
                background: linear-gradient(135deg, #2563eb, #1d4ed8);
                color: white;
            }

            .print-button:hover,
            .pdf-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }

            .print-button:active,
            .pdf-button:active {
                transform: translateY(0);
            }

            @media print {

                .no-print,
                .action-buttons {
                    display: none !important;
                }
            }

            /* Font Awesome icons */
            .fas,
            .fa-print,
            .fa-download {
                font-family: "Font Awesome 6 Free";
                font-weight: 900;
            }

            .fa-print:before {
                content: "\f02f";
            }

            .fa-download:before {
                content: "\f019";
            }
    </style>
</head>

<body>
    <!-- Action Buttons -->
    /* <div class="action-buttons no-print">
        <button class="pdf-button" onclick="downloadPDF()">
            <i class="fas fa-download"></i> @lang('print.Download PDF')
        </button>
    </div> */

    <!-- Header -->
    <div class="header">
        <div class="company-name arabic-text">@lang('print.Company Name')</div>
        <div class="report-title arabic-text">@lang('print.Account Statement')</div>
    </div>

    <!-- Account Information -->
    <div class="account-info arabic-text">
        <strong>@lang('print.Account'):</strong> {{ $accountStatementData['chart_of_account']['code'] }} -
        {{ $accountStatementData['chart_of_account']['name'] }}
        @if (isset($accountStatementData['report_account']) &&
                $accountStatementData['report_account']['id'] !== $accountStatementData['chart_of_account']['id']
        )
            <br><strong>@lang('print.Sub Account'):</strong> {{ $accountStatementData['report_account']['code'] }} -
            {{ $accountStatementData['report_account']['name'] }}
        @endif
        <br><strong>@lang('print.Period'):</strong> {{ $accountStatementData['filters']['from_date'] ?? '' }} -
        {{ $accountStatementData['filters']['to_date'] ?? '' }}
    </div>

    <!-- Summary Section -->
    <div class="summary-section">
        <div class="summary-box">
            <div class="summary-label arabic-text">@lang('print.Opening Balance')</div>
            <div class="summary-value arabic-text">
                {{ number_format($accountStatementData['summary']['opening_balance'] ?? 0, 2) }}
                @if (($accountStatementData['summary']['opening_balance_type'] ?? '') === 'Debit')
                    @lang('print.Debit')
                @elseif(($accountStatementData['summary']['opening_balance_type'] ?? '') === 'Credit')
                    @lang('print.Credit')
                @else
                    {{ $accountStatementData['summary']['opening_balance_type'] ?? '' }}
                @endif
            </div>
        </div>
        <div class="summary-box">
            <div class="summary-label arabic-text">@lang('print.Period Debits')</div>
            <div class="summary-value arabic-text">
                {{ number_format($accountStatementData['summary']['period_debits'] ?? 0, 2) }}</div>
        </div>
        <div class="summary-box">
            <div class="summary-label arabic-text">@lang('print.Period Credits')</div>
            <div class="summary-value arabic-text">
                {{ number_format($accountStatementData['summary']['period_credits'] ?? 0, 2) }}</div>
        </div>
        <div class="summary-box closing">
            <div class="summary-label arabic-text">@lang('print.Closing Balance')</div>
            <div class="summary-value arabic-text">
                {{ number_format($accountStatementData['summary']['closing_balance'] ?? 0, 2) }}
                @if (($accountStatementData['summary']['closing_balance_type'] ?? '') === 'Debit')
                    @lang('print.Debit')
                @elseif(($accountStatementData['summary']['closing_balance_type'] ?? '') === 'Credit')
                    @lang('print.Credit')
                @else
                    {{ $accountStatementData['summary']['closing_balance_type'] ?? '' }}
                @endif
            </div>
        </div>
    </div>

    <!-- Entries Table -->
    <table class="data-table">
        <thead>
            <tr>
                <th class="text-center arabic-text">@lang('print.Date')</th>
                <th class="text-center arabic-text">@lang('print.Entry #')</th>
                <th class="text-center arabic-text">@lang('print.Reference')</th>
                <th class="text-center arabic-text">@lang('print.Description')</th>
                <th class="text-center arabic-text">@lang('print.Debit')</th>
                <th class="text-center arabic-text">@lang('print.Credit')</th>
                <th class="text-center arabic-text">@lang('print.Net Amount')</th>
                <th class="text-center arabic-text">@lang('print.Running Balance')</th>
                <th class="text-center arabic-text">@lang('print.Balance Type')</th>
            </tr>
        </thead>
        <tbody>
            @if (isset($accountStatementData['entries']) && count($accountStatementData['entries']) > 0)
                @foreach ($accountStatementData['entries'] as $entry)
                    <tr>
                        <td class="text-center">{{ \Carbon\Carbon::parse($entry['entry_date'])->format('d-M-Y') }}</td>
                        <td class="text-center">{{ $entry['entry_number'] ?? '-' }}</td>
                        <td class="text-center">{{ $entry['reference'] ?? '-' }}</td>
                        <td class="text-center arabic-text">{{ $entry['description'] ?? '-' }}</td>
                        <td class="text-center">
                            @if (isset($entry['debit_amount']) && $entry['debit_amount'] > 0)
                                {{ number_format($entry['debit_amount'], 2) }}
                            @else
                                -
                            @endif
                        </td>
                        <td class="text-center">
                            @if (isset($entry['credit_amount']) && $entry['credit_amount'] > 0)
                                {{ number_format($entry['credit_amount'], 2) }}
                            @else
                                -
                            @endif
                        </td>
                        <td class="text-center {{ ($entry['net_amount'] ?? 0) < 0 ? 'negative' : 'positive' }}">
                            {{ number_format($entry['net_amount'] ?? 0, 2) }}
                        </td>
                        <td
                            class="text-center {{ ($entry['balance_type'] ?? '') === 'Debit' ? 'positive' : 'negative' }}">
                            {{ number_format($entry['running_balance'] ?? 0, 2) }}
                        </td>
                        <td class="text-center">
                            <span
                                class="badge {{ ($entry['balance_type'] ?? '') === 'Debit' ? 'badge-debit' : 'badge-credit' }} arabic-text">
                                @if (($entry['balance_type'] ?? '') === 'Debit')
                                    @lang('print.Debit')
                                @elseif(($entry['balance_type'] ?? '') === 'Credit')
                                    @lang('print.Credit')
                                @else
                                    {{ $entry['balance_type'] ?? '-' }}
                                @endif
                            </span>
                        </td>
                    </tr>
                @endforeach
            @else
                <tr>
                    <td colspan="9" class="text-center">@lang('print.No entries found for the selected period.')</td>
                </tr>
            @endif
        </tbody>
    </table>

    <!-- Totals Section -->
    <div class="totals-section">
        <table class="totals-table">
            <tr>
                <td class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}"><strong>@lang('print.Total Debit'):</strong>
                </td>
                <td class="text-right">
                    <strong>{{ number_format($accountStatementData['summary']['period_debits'] ?? 0, 2) }}</strong>
                </td>
            </tr>
            <tr>
                <td class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}"><strong>@lang('print.Total Credit'):</strong>
                </td>
                <td class="text-right">
                    <strong>{{ number_format($accountStatementData['summary']['period_credits'] ?? 0, 2) }}</strong>
                </td>
            </tr>
            <tr class="total-row">
                <td class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}"><strong>@lang('print.Closing Balance'):</strong>
                </td>
                <td class="text-right">
                    <strong>{{ number_format($accountStatementData['summary']['closing_balance'] ?? 0, 2) }}
                        @if (($accountStatementData['summary']['closing_balance_type'] ?? '') === 'Debit')
                            @lang('print.Debit')
                        @elseif(($accountStatementData['summary']['closing_balance_type'] ?? '') === 'Credit')
                            @lang('print.Credit')
                        @else
                            {{ $accountStatementData['summary']['closing_balance_type'] ?? '' }}
                        @endif
                    </strong></td>
            </tr>
        </table>
    </div>

    <!-- Footer -->
    <div class="footer arabic-text">
        @lang('print.This report was generated on') {{ now()->format('Y-m-d H:i:s') }}
    </div>

    <script>
        // PDF Download function
        function downloadPDF() {
            // Get current URL parameters to maintain filters
            const urlParams = new URLSearchParams(window.location.search);

            // Build PDF URL with same parameters
            let pdfUrl = '/account-statement/pdf';
            if (urlParams.toString()) {
                pdfUrl += '?' + urlParams.toString();
            }

            // Create a temporary link to download the PDF
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Handle print events
        window.addEventListener('beforeprint', function() {
            console.log('Preparing to print...');
        });

        window.addEventListener('afterprint', function() {
            console.log('Print completed');
        });
    </script>
</body>

</html>

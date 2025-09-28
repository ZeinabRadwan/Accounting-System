@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';
    
    // Custom currency formatter for PDF - no currency symbols as requested
    function formatPdfCurrency($amount) {
        $formattedAmount = number_format($amount, 2, '.', ',');
        return $formattedAmount; // Return only the amount without currency symbol
    }
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Group Account Statement')</title>
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
        
        .currency-symbol {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        
        h1, h2, h3 {
            color: #2563eb;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .accounts-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        
        .summary-boxes {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
            flex-wrap: wrap;
        }
        
        .summary-box {
            background: #f0f7ff;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            min-width: 150px;
            margin: 5px;
            border-left: 4px solid #2563eb;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 12px;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        
        th {
            background: #2563eb;
            color: white;
            font-weight: bold;
        }
        
        tr:nth-child(even) {
            background: #f9f9f9;
        }
        
        .positive {
            color: #22c55e;
            font-weight: bold;
        }
        
        .negative {
            color: #ef4444;
            font-weight: bold;
        }
        
        .badge {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
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
        
        .no-data {
            text-align: center;
            padding: 40px;
            color: #6b7280;
        }
        
        /* Print styles */
        .action-buttons {
            margin: 20px 0;
            text-align: center;
        }
        
        .print-button, .pdf-button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 0 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            display: inline-block;
        }
        
        .pdf-button {
            background: #28a745;
        }
        
        .print-button:hover {
            background: #0056b3;
            color: white;
            text-decoration: none;
        }
        
        .pdf-button:hover {
            background: #1e7e34;
            color: white;
            text-decoration: none;
        }
        
        @media print {
            .no-print, .action-buttons {
                display: none !important;
            }
        }
    </style>
</head>
<body>
    <!-- Action Buttons -->
    <div class="action-buttons no-print">
        <button class="print-button" onclick="window.print()">
            <i class="fas fa-print"></i> @lang('print.Print')
        </button>
        <button class="pdf-button" onclick="downloadPDF()">
            <i class="fas fa-download"></i> @lang('print.Download PDF')
        </button>
    </div>

    <div class="header">
        <h1 class="arabic-text">@lang('print.Group Account Statement')</h1>
        <p class="arabic-text">@lang('print.This report was generated on') {{ date('d-M-Y H:i:s') }}</p>
    </div>

    <!-- Account Information -->
    @if(isset($groupStatementData['chart_of_accounts']) && count($groupStatementData['chart_of_accounts']) > 0)
        <div class="accounts-info">
            <h3 class="arabic-text">@lang('print.Selected Accounts')</h3>
            @foreach($groupStatementData['chart_of_accounts'] as $account)
                <div style="margin-bottom: 10px;">
                    <strong class="arabic-text">@lang('print.Account'):</strong> 
                    <span class="arabic-text">{{ $account['code'] ?? '' }} - {{ $account['name'] ?? '' }}</span><br>
                    <strong class="arabic-text">@lang('Account Type'):</strong> 
                    <span class="arabic-text">{{ $account['type'] ?? '' }}</span>
                </div>
            @endforeach
        </div>
    @endif

    <!-- Summary Section -->
    @if(isset($groupStatementData['summary']))
        <h3 class="arabic-text">@lang('print.Summary')</h3>
        <div class="summary-boxes">
            <div class="summary-box">
                <h4 class="arabic-text">@lang('print.Opening Balance')</h4>
                <p>{!! formatPdfCurrency($groupStatementData['summary']['opening_balance'] ?? 0) !!}</p>
                <small class="arabic-text">
                    @if(($groupStatementData['summary']['opening_balance_type'] ?? '') === 'Debit')
                        @lang('print.Debit')
                    @elseif(($groupStatementData['summary']['opening_balance_type'] ?? '') === 'Credit')
                        @lang('print.Credit')
                    @else
                        {{ $groupStatementData['summary']['opening_balance_type'] ?? '' }}
                    @endif
                </small>
            </div>
            <div class="summary-box">
                <h4 class="arabic-text">@lang('print.Period Debits')</h4>
                <p>{!! formatPdfCurrency($groupStatementData['summary']['period_debits'] ?? 0) !!}</p>
            </div>
            <div class="summary-box">
                <h4 class="arabic-text">@lang('print.Period Credits')</h4>
                <p>{!! formatPdfCurrency($groupStatementData['summary']['period_credits'] ?? 0) !!}</p>
            </div>
            <div class="summary-box">
                <h4 class="arabic-text">@lang('print.Closing Balance')</h4>
                <p>{!! formatPdfCurrency($groupStatementData['summary']['closing_balance'] ?? 0) !!}</p>
                <small class="arabic-text">
                    @if(($groupStatementData['summary']['closing_balance_type'] ?? '') === 'Debit')
                        @lang('print.Debit')
                    @elseif(($groupStatementData['summary']['closing_balance_type'] ?? '') === 'Credit')
                        @lang('print.Credit')
                    @else
                        {{ $groupStatementData['summary']['closing_balance_type'] ?? '' }}
                    @endif
                </small>
            </div>
        </div>
    @endif

    <!-- Transaction Details -->
    @if(isset($groupStatementData['entries']) && count($groupStatementData['entries']) > 0)
        <h3 class="arabic-text">@lang('print.Transaction Details')</h3>
        <table>
            <thead>
                <tr>
                    <th class="arabic-text">@lang('print.Row Number')</th>
                    <th class="arabic-text">@lang('print.Date')</th>
                    <th class="arabic-text">@lang('print.Entry #')</th>
                    <th class="arabic-text">@lang('print.Reference')</th>
                    <th class="arabic-text">@lang('print.Description')</th>
                    <th class="arabic-text">@lang('print.Debit')</th>
                    <th class="arabic-text">@lang('print.Credit')</th>
                    <th class="arabic-text">@lang('print.Running Balance')</th>
                    <th class="arabic-text">@lang('print.Balance Type')</th>
                </tr>
            </thead>
            <tbody>
                @foreach($groupStatementData['entries'] as $index => $entry)
                    <tr>
                        <td>{{ $index + 1 }}</td>
                        <td>{{ \Carbon\Carbon::parse($entry['entry_date'])->format('d-M-Y') }}</td>
                        <td>{{ $entry['entry_number'] ?? '-' }}</td>
                        <td>{{ $entry['reference'] ?? '-' }}</td>
                        <td class="arabic-text">{{ $entry['description'] ?? '-' }}</td>
                        <td>{!! formatPdfCurrency($entry['debit_amount'] ?? 0) !!}</td>
                        <td>{!! formatPdfCurrency($entry['credit_amount'] ?? 0) !!}</td>
                        <td>{!! formatPdfCurrency($entry['running_balance'] ?? 0) !!}</td>
                        <td>
                            <span class="badge {{ ($entry['balance_type'] ?? '') === 'Debit' ? 'badge-debit' : 'badge-credit' }} arabic-text">
                                @if(($entry['balance_type'] ?? '') === 'Debit')
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
            </tbody>
        </table>
        
        <p style="text-align: center; margin-top: 20px; color: #6b7280;" class="arabic-text">
            @lang('print.Total entries'): {{ count($groupStatementData['entries']) }}
        </p>
    @else
        <div class="no-data">
            <h4 class="arabic-text">@lang('print.No entries found for the selected period.')</h4>
        </div>
    @endif

    <script>
        function downloadPDF() {
            // Get current URL parameters to maintain filters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Build PDF URL with same parameters
            let pdfUrl = '/group-account-statement/pdf';
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
    </script>
</body>
</html>

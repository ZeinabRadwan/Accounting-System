@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';
    $accountStatementData = $analyticalAccountStatementData ?? [];
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Analytical Account Statement')</title>
    <style>
        body {
            font-family: {{ $isRTL ? 'DejaVu Sans, Arial Unicode MS, Tahoma, sans-serif' : 'Arial, sans-serif' }};
            margin: 0;
            padding: 20px;
            background: white;
            color: #333;
            direction: {{ $isRTL ? 'rtl' : 'ltr' }};
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 20px;
        }

        .report-title {
            font-size: 20px;
            font-weight: bold;
            color: #374151;
            margin-bottom: 10px;
        }

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

        .text-right {
            text-align: right;
        }

        .text-center {
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="header">
        <div class="report-title">@lang('print.Analytical Account Statement')</div>
    </div>

    @if(isset($accountStatementData['analytical_account']))
        <div class="account-info">
            <strong>@lang('print.Analytical Account'):</strong> 
            {{ $accountStatementData['analytical_account']['code'] ?? '' }} - 
            {{ $accountStatementData['analytical_account']['name'] ?? '' }}<br>
            <strong>@lang('Account Type'):</strong> {{ $accountStatementData['analytical_account']['type'] ?? '' }}<br>
            @if(isset($accountStatementData['filters']['from_date']) && isset($accountStatementData['filters']['to_date']))
                <strong>@lang('print.Period'):</strong> 
                {{ $accountStatementData['filters']['from_date'] }} - 
                {{ $accountStatementData['filters']['to_date'] }}
            @endif
        </div>
    @endif

    @if(isset($accountStatementData['summary']))
        <div class="summary-section">
            <div class="summary-box">
                <div>@lang('print.Opening Balance')</div>
                <div style="font-size: 18px; font-weight: bold;">
                    {{ number_format($accountStatementData['summary']['opening_balance'] ?? 0, 2) }}
                    {{ $accountStatementData['summary']['opening_balance_type'] ?? '' }}
                </div>
            </div>
            <div class="summary-box">
                <div>@lang('print.Period Debits')</div>
                <div style="font-size: 18px; font-weight: bold;">
                    {{ number_format($accountStatementData['summary']['period_debits'] ?? 0, 2) }}
                </div>
            </div>
            <div class="summary-box">
                <div>@lang('print.Period Credits')</div>
                <div style="font-size: 18px; font-weight: bold;">
                    {{ number_format($accountStatementData['summary']['period_credits'] ?? 0, 2) }}
                </div>
            </div>
            <div class="summary-box" style="background: #2563eb; color: white;">
                <div>@lang('print.Closing Balance')</div>
                <div style="font-size: 18px; font-weight: bold;">
                    {{ number_format($accountStatementData['summary']['closing_balance'] ?? 0, 2) }}
                    {{ $accountStatementData['summary']['closing_balance_type'] ?? '' }}
                </div>
            </div>
        </div>
    @endif

    @if(isset($accountStatementData['entries']) && count($accountStatementData['entries']) > 0)
        <table class="data-table">
            <thead>
                <tr>
                    <th>@lang('print.Row Number')</th>
                    <th>@lang('print.Date')</th>
                    <th>@lang('print.Description')</th>
                    <th>@lang('print.Reference')</th>
                    <th>@lang('print.Chart of Account')</th>
                    <th class="text-right">@lang('print.Debit')</th>
                    <th class="text-right">@lang('print.Credit')</th>
                    <th class="text-right">@lang('print.Running Balance')</th>
                    <th>@lang('print.Balance Type')</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($accountStatementData['entries'] as $index => $entry)
                    <tr>
                        <td>{{ $index + 1 }}</td>
                        <td>{{ \Carbon\Carbon::parse($entry['entry_date'] ?? $entry['date'] ?? '')->format('d-M-Y') }}</td>
                        <td>{{ $entry['description'] ?? $entry['particulars'] ?? '' }}</td>
                        <td>{{ $entry['reference'] ?? '' }}</td>
                        <td>
                            @if(isset($entry['account_code']) && isset($entry['account_name']))
                                {{ $entry['account_code'] }} - {{ $entry['account_name'] }}
                            @else
                                -
                            @endif
                        </td>
                        <td class="text-right">{{ number_format($entry['debit_amount'] ?? $entry['debit'] ?? 0, 2) }}</td>
                        <td class="text-right">{{ number_format($entry['credit_amount'] ?? $entry['credit'] ?? 0, 2) }}</td>
                        <td class="text-right">{{ number_format($entry['running_balance'] ?? $entry['balance'] ?? 0, 2) }}</td>
                        <td class="text-center">{{ $entry['balance_type'] ?? '-' }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @else
        <div style="text-align: center; padding: 20px; color: #6b7280;">
            @lang('print.No entries found for the selected period.')
        </div>
    @endif
</body>

</html>

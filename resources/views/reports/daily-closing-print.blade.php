<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ __('Daily Closing') }} - {{ $closing->closing_datetime?->format('Y-m-d H:i') }}</title>
    <style>
        body { font-family: Arial, sans-serif; color: #0f172a; margin: 24px; }
        .toolbar { margin-bottom: 20px; display: flex; gap: 8px; }
        .btn { padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; text-decoration: none; color: #0f172a; background: #fff; }
        .grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin: 18px 0; }
        .card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; }
        .muted { color: #64748b; font-size: 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        th, td { border: 1px solid #e2e8f0; padding: 8px 10px; text-align: start; }
        .num { text-align: end; white-space: nowrap; }
        @media print {
            .toolbar { display: none; }
            body { margin: 0; }
        }
    </style>
</head>
<body @if($autoPrint) onload="window.print()" @endif>
    <div class="toolbar">
        <button class="btn" onclick="window.print()">{{ __('Print') }}</button>
        <button class="btn" onclick="window.close()">{{ __('Close') }}</button>
    </div>

    <div>
        <h1 style="margin:0 0 6px;">{{ $template['store_name'] ?: config('app.name', 'DentalLink') }}</h1>
        <div class="muted">{{ __('Daily Closing') }} · {{ $closing->closing_datetime?->format('Y-m-d H:i') }} · {{ strtoupper($closing->closing_period) }}</div>
    </div>

    <div class="grid">
        <div class="card"><div class="muted">{{ __('Total Sales') }}</div><div>EGP {{ number_format((float) $closing->total_sales, 2) }}</div></div>
        <div class="card"><div class="muted">{{ __('Total Purchases') }}</div><div>EGP {{ number_format((float) $closing->total_purchases, 2) }}</div></div>
        <div class="card"><div class="muted">{{ __('Net Sales') }}</div><div>EGP {{ number_format((float) $closing->net_sales, 2) }}</div></div>
        <div class="card"><div class="muted">{{ __('Net Profit') }}</div><div>EGP {{ number_format((float) $closing->net_profit, 2) }}</div></div>
    </div>

    <table>
        <thead>
            <tr>
                <th>{{ __('Metric') }}</th>
                <th class="num">{{ __('Value') }}</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>{{ __('Total Sales Returns') }}</td><td class="num">EGP {{ number_format((float) $closing->total_sales_returns, 2) }}</td></tr>
            <tr><td>{{ __('Total Purchase Returns') }}</td><td class="num">EGP {{ number_format((float) $closing->total_purchase_returns, 2) }}</td></tr>
            <tr><td>{{ __('Total Expenses') }}</td><td class="num">EGP {{ number_format((float) $closing->total_expenses, 2) }}</td></tr>
            <tr><td>{{ __('Sales Invoices') }}</td><td class="num">{{ number_format((int) ($counts['sales_invoices'] ?? 0)) }}</td></tr>
            <tr><td>{{ __('Purchase Invoices') }}</td><td class="num">{{ number_format((int) ($counts['purchase_invoices'] ?? 0)) }}</td></tr>
            <tr><td>{{ __('Sales Returns') }}</td><td class="num">{{ number_format((int) ($counts['sales_returns'] ?? 0)) }}</td></tr>
            <tr><td>{{ __('Purchase Returns') }}</td><td class="num">{{ number_format((int) ($counts['purchase_returns'] ?? 0)) }}</td></tr>
            <tr><td>{{ __('Expense Transactions') }}</td><td class="num">{{ number_format((int) ($counts['expense_transactions'] ?? 0)) }}</td></tr>
        </tbody>
    </table>

    <table>
        <thead>
            <tr>
                <th>{{ __('Treasury Name') }}</th>
                <th class="num">{{ __('Opening Balance') }}</th>
                <th class="num">{{ __('Total Income') }}</th>
                <th class="num">{{ __('Total Expenses') }}</th>
                <th class="num">{{ __('Closing Balance') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($treasuries as $row)
                <tr>
                    <td>{{ $row['treasury_name'] }}</td>
                    <td class="num">EGP {{ number_format((float) $row['opening_balance'], 2) }}</td>
                    <td class="num">EGP {{ number_format((float) $row['total_income'], 2) }}</td>
                    <td class="num">EGP {{ number_format((float) $row['total_expenses'], 2) }}</td>
                    <td class="num">EGP {{ number_format((float) $row['closing_balance'], 2) }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>

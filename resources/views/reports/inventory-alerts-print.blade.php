<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ __('Inventory Alerts Report') }}</title>
    <style>
        body { font-family: Arial, sans-serif; color: #0f172a; margin: 24px; }
        .toolbar { margin-bottom: 20px; display: flex; gap: 8px; }
        .btn { padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; background: #fff; cursor: pointer; }
        .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 18px 0; }
        .card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; }
        .muted { color: #64748b; font-size: 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        th, td { border: 1px solid #e2e8f0; padding: 8px 10px; text-align: start; font-size: 13px; }
        .num { text-align: end; white-space: nowrap; }
        h2 { margin: 24px 0 8px; font-size: 16px; }
        @media print { .toolbar { display: none; } body { margin: 0; } }
    </style>
</head>
<body @if($autoPrint) onload="window.print()" @endif>
    <div class="toolbar">
        <button class="btn" onclick="window.print()">{{ __('Print') }}</button>
        <button class="btn" onclick="window.close()">{{ __('Close') }}</button>
    </div>

    <h1 style="margin:0 0 6px;">{{ $template['store_name'] ?: config('app.name', 'DentalLink') }}</h1>
    <div class="muted">{{ __('Inventory Alerts Report') }} · {{ now()->format('Y-m-d H:i') }}</div>

    <div class="grid">
        <div class="card"><div class="muted">{{ __('Total Out of Stock Products') }}</div><div>{{ $report['totals']['out_of_stock'] }}</div></div>
        <div class="card"><div class="muted">{{ __('Total Low Stock Products') }}</div><div>{{ $report['totals']['low_stock'] }}</div></div>
        <div class="card"><div class="muted">{{ __('Total Alerts') }}</div><div>{{ $report['totals']['total'] }}</div></div>
    </div>

    <h2>{{ __('Grouped by Branch') }}</h2>
    <table>
        <thead>
            <tr>
                <th>{{ __('Branch') }}</th>
                <th class="num">{{ __('Out of Stock') }}</th>
                <th class="num">{{ __('Low Stock') }}</th>
                <th class="num">{{ __('Total') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($report['by_branch'] as $row)
                <tr>
                    <td>{{ $row->branch_name }}</td>
                    <td class="num">{{ $row->out_of_stock }}</td>
                    <td class="num">{{ $row->low_stock }}</td>
                    <td class="num">{{ $row->total }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <h2>{{ __('Grouped by Category') }}</h2>
    <table>
        <thead>
            <tr>
                <th>{{ __('Category') }}</th>
                <th class="num">{{ __('Out of Stock') }}</th>
                <th class="num">{{ __('Low Stock') }}</th>
                <th class="num">{{ __('Total') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($report['by_category'] as $row)
                <tr>
                    <td>{{ $row->category_name }}</td>
                    <td class="num">{{ $row->out_of_stock }}</td>
                    <td class="num">{{ $row->low_stock }}</td>
                    <td class="num">{{ $row->total }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <h2>{{ __('Alert Details') }}</h2>
    <table>
        <thead>
            <tr>
                <th>{{ __('Product') }}</th>
                <th>{{ __('Category') }}</th>
                <th>{{ __('Branch') }}</th>
                <th class="num">{{ __('Qty') }}</th>
                <th class="num">{{ __('Min') }}</th>
                <th>{{ __('Status') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($report['rows'] as $row)
                <tr>
                    <td>{{ $row->product_name }}</td>
                    <td>{{ $row->category_name ?: '—' }}</td>
                    <td>{{ $row->branch_name }}</td>
                    <td class="num">{{ rtrim(rtrim(number_format($row->quantity, 2, '.', ''), '0'), '.') }}</td>
                    <td class="num">{{ rtrim(rtrim(number_format($row->minimum_stock, 2, '.', ''), '0'), '.') }}</td>
                    <td>{{ $row->status_label }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>

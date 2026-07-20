<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ __('Statement of Account') }} — {{ $supplier->name }}</title>
    <style>
        * { box-sizing: border-box; }
        body { margin: 0; background: #e2e8f0; color: #0f172a; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; line-height: 1.45; }
        .toolbar { position: sticky; top: 0; z-index: 10; display: flex; gap: 8px; justify-content: center; padding: 12px; background: #0f172a; }
        .toolbar button, .toolbar a { appearance: none; border: 0; border-radius: 10px; padding: 10px 16px; font-weight: 600; font-size: 13px; cursor: pointer; text-decoration: none; color: #0f172a; background: #fff; }
        .toolbar .primary { background: #2563eb; color: #fff; }
        .sheet { width: 210mm; max-width: 100%; margin: 16px auto; background: #fff; padding: 24px 28px; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12); }
        h1 { font-size: 20px; margin: 0 0 4px; }
        .muted { color: #64748b; }
        .meta { display: flex; justify-content: space-between; gap: 16px; margin: 16px 0 20px; }
        .cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 18px; }
        .card { border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 12px; }
        .card .lbl { color: #64748b; font-size: 11px; }
        .card .val { font-weight: 700; margin-top: 4px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border-bottom: 1px solid #e2e8f0; padding: 7px 6px; text-align: start; vertical-align: top; }
        th { font-size: 11px; text-transform: uppercase; letter-spacing: .03em; color: #64748b; }
        .num { text-align: end; white-space: nowrap; }
        .pos { color: #dc2626; font-weight: 700; }
        .neg { color: #16a34a; font-weight: 700; }
        @media print {
            body { background: #fff; }
            .toolbar { display: none; }
            .sheet { box-shadow: none; margin: 0; width: auto; }
        }
    </style>
</head>
<body>
    <div class="toolbar">
        <button class="primary" type="button" onclick="window.print()">{{ __('Print') }}</button>
        <a href="javascript:window.close()">{{ __('Close') }}</a>
    </div>
    <div class="sheet">
        <h1>{{ $template['store_name'] ?? config('app.name') }}</h1>
        <p class="muted">{{ __('Supplier Statement of Account') }}</p>
        <div class="meta">
            <div>
                <strong>{{ $supplier->name }}</strong><br>
                {{ $supplier->phone }}
            </div>
            <div class="muted" style="text-align:end">
                {{ __('Period') }}: {{ $dateFrom ?: '—' }} → {{ $dateTo ?: '—' }}<br>
                {{ __('Printed') }}: {{ now()->format('Y-m-d H:i') }}
            </div>
        </div>
        <div class="cards">
            <div class="card"><div class="lbl">{{ __('Amount Owed') }}</div><div class="val">EGP {{ number_format($statement['current_due'], 2) }}</div></div>
            <div class="card"><div class="lbl">{{ __('Credit Balance') }}</div><div class="val">EGP {{ number_format($statement['credit_balance'], 2) }}</div></div>
            <div class="card"><div class="lbl">{{ __('Net Balance') }}</div><div class="val">EGP {{ number_format($statement['net_balance'], 2) }}</div></div>
            <div class="card"><div class="lbl">{{ __('Closing Balance') }}</div><div class="val">EGP {{ number_format($statement['closing_balance'], 2) }}</div></div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>{{ __('Date & Time') }}</th>
                    <th>{{ __('Type') }}</th>
                    <th>{{ __('Reference') }}</th>
                    <th>{{ __('Description') }}</th>
                    <th>{{ __('Method') }}</th>
                    <th>{{ __('Treasury') }}</th>
                    <th class="num">{{ __('Debit') }}</th>
                    <th class="num">{{ __('Credit') }}</th>
                    <th class="num">{{ __('Balance') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="6"><strong>{{ __('Opening balance') }}</strong></td>
                    <td class="num">—</td>
                    <td class="num">—</td>
                    <td class="num"><strong>EGP {{ number_format($statement['opening_balance'], 2) }}</strong></td>
                </tr>
                @foreach ($statement['lines'] as $line)
                    <tr>
                        <td>{{ $line->date?->format('Y-m-d H:i:s') }}</td>
                        <td>{{ $line->entry_type }}</td>
                        <td>{{ $line->reference }}</td>
                        <td>{{ $line->description }}</td>
                        <td>{{ $line->payment_method ? str_replace('_', ' ', $line->payment_method) : '—' }}</td>
                        <td>{{ $line->treasury_name ?: '—' }}</td>
                        <td class="num">{{ $line->debit > 0 ? number_format($line->debit, 2) : '—' }}</td>
                        <td class="num">{{ $line->credit > 0 ? number_format($line->credit, 2) : '—' }}</td>
                        <td class="num {{ $line->balance > 0 ? 'pos' : ($line->balance < 0 ? 'neg' : '') }}">{{ number_format($line->balance, 2) }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    @if ($autoPrint)
        <script>window.addEventListener('load', () => window.print());</script>
    @endif
</body>
</html>

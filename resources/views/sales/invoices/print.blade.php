<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Invoice {{ $invoice->invoice_number }}</title>
    <style>
        :root {
            color-scheme: light;
        }
        * { box-sizing: border-box; }
        body {
            margin: 0;
            background: #e2e8f0;
            color: #0f172a;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-size: 13px;
            line-height: 1.4;
        }
        .toolbar {
            position: sticky;
            top: 0;
            z-index: 10;
            display: flex;
            gap: 8px;
            justify-content: center;
            padding: 12px;
            background: #0f172a;
        }
        .toolbar button, .toolbar a {
            appearance: none;
            border: 0;
            border-radius: 10px;
            padding: 10px 16px;
            font-weight: 600;
            font-size: 13px;
            cursor: pointer;
            text-decoration: none;
            color: #0f172a;
            background: #fff;
        }
        .toolbar .primary {
            background: #2563eb;
            color: #fff;
        }
        .sheet {
            width: 80mm;
            max-width: 100%;
            margin: 16px auto;
            background: #fff;
            padding: 16px 14px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
        }
        .center { text-align: center; }
        .muted { color: #64748b; }
        .store-name {
            font-size: 18px;
            font-weight: 700;
            margin: 0 0 4px;
        }
        .header-block { margin-bottom: 12px; }
        .meta {
            border-top: 1px dashed #94a3b8;
            border-bottom: 1px dashed #94a3b8;
            padding: 10px 0;
            margin: 12px 0;
        }
        .meta-row {
            display: flex;
            justify-content: space-between;
            gap: 8px;
            margin: 3px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 8px 0 12px;
        }
        th, td {
            padding: 5px 0;
            vertical-align: top;
        }
        th {
            text-align: left;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: #64748b;
            border-bottom: 1px solid #cbd5e1;
        }
        .qty, .price, .amount { text-align: right; white-space: nowrap; }
        .item-name { font-weight: 600; }
        .item-sku { font-size: 11px; color: #64748b; }
        .item-disc { font-size: 11px; color: #b45309; margin-top: 2px; }
        .totals {
            border-top: 1px dashed #94a3b8;
            padding-top: 8px;
        }
        .totals .row {
            display: flex;
            justify-content: space-between;
            margin: 4px 0;
        }
        .totals .grand {
            font-size: 15px;
            font-weight: 700;
            margin-top: 8px;
            padding-top: 8px;
            border-top: 1px solid #cbd5e1;
        }
        .footer {
            margin-top: 14px;
            padding-top: 10px;
            border-top: 1px dashed #94a3b8;
            text-align: center;
            white-space: pre-line;
        }
        @media print {
            body { background: #fff; }
            .toolbar { display: none !important; }
            .sheet {
                width: 80mm;
                margin: 0;
                box-shadow: none;
                padding: 0;
            }
        }
    </style>
</head>
<body>
@php
    $storeName = trim((string) ($template['store_name'] ?? '')) ?: 'DentalLink';
    $address = trim((string) ($template['address'] ?? ''));
    $phone = trim((string) ($template['phone'] ?? ''));
    $header = trim((string) ($template['receipt_header'] ?? ''));
    $footer = trim((string) ($template['receipt_footer'] ?? ''));
    $payment = str_replace('_', ' ', (string) ($invoice->payment_method ?? ''));
@endphp

<div class="toolbar">
    <button type="button" class="primary" onclick="window.print()">Print</button>
    <button type="button" onclick="window.close()">Close</button>
</div>

<main class="sheet">
    <div class="header-block center">
        <h1 class="store-name">{{ $storeName }}</h1>
        @if ($address !== '')
            <div class="muted">{{ $address }}</div>
        @endif
        @if ($phone !== '')
            <div class="muted">Tel: {{ $phone }}</div>
        @endif
        @if ($header !== '')
            <div style="margin-top:8px; white-space:pre-line;">{{ $header }}</div>
        @endif
    </div>

    <div class="meta">
        <div class="meta-row"><span class="muted">Invoice</span><strong>{{ $invoice->invoice_number }}</strong></div>
        <div class="meta-row"><span class="muted">Date</span><span>{{ $invoice->created_at?->format('Y-m-d H:i') }}</span></div>
        <div class="meta-row"><span class="muted">Branch</span><span>{{ $invoice->branch?->name ?: '—' }}</span></div>
        <div class="meta-row"><span class="muted">Cashier</span><span>{{ $invoice->user?->name ?: '—' }}</span></div>
        <div class="meta-row">
            <span class="muted">Customer</span>
            <span>
                {{ $invoice->customer?->name ?? 'Walk-in' }}
                @if ($invoice->customer?->phone)
                    ({{ $invoice->customer->phone }})
                @endif
            </span>
        </div>
        <div class="meta-row"><span class="muted">Payment</span><span>{{ ucwords($payment) }} · {{ str_replace('_', ' ', (string) $invoice->status) }}</span></div>
    </div>

    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th class="qty">Qty</th>
                <th class="price">Price</th>
                <th class="amount">Total</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($invoice->items as $line)
                @php
                    $itemDisc = (float) ($line->item_discount ?? 0);
                    $qty = (float) $line->quantity;
                    $unitPrice = (float) $line->unit_price;
                @endphp
                <tr>
                    <td>
                        <div class="item-name">{{ $line->product_name }}</div>
                        <div class="item-sku">{{ $line->sku }} · {{ $line->unit_name }}</div>
                        @if ($itemDisc > 0)
                            <div class="item-disc">Disc: −EGP {{ number_format($itemDisc, 2) }}</div>
                        @endif
                    </td>
                    <td class="qty">{{ rtrim(rtrim(number_format($qty, 4, '.', ''), '0'), '.') }}</td>
                    <td class="price">{{ number_format($unitPrice, 2) }}</td>
                    <td class="amount">{{ number_format((float) $line->line_total, 2) }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <div class="totals">
        <div class="row"><span class="muted">Subtotal</span><span>EGP {{ number_format((float) $invoice->subtotal, 2) }}</span></div>
        <div class="row"><span class="muted">Invoice discount</span><span>EGP {{ number_format((float) $invoice->discount_amount, 2) }}</span></div>
        <div class="row grand"><span>Total</span><span>EGP {{ number_format((float) $invoice->total, 2) }}</span></div>
        <div class="row"><span class="muted">Paid</span><span>EGP {{ number_format((float) $invoice->paid_amount, 2) }}</span></div>
        <div class="row"><span class="muted">Remaining</span><span>EGP {{ number_format((float) $invoice->remaining_amount, 2) }}</span></div>
    </div>

    <div class="footer">
        @if ($footer !== '')
            {{ $footer }}
        @else
            Thank you for your business.
        @endif
    </div>
</main>

@if ($autoPrint)
    <script>
        window.addEventListener('load', function () {
            setTimeout(function () { window.print(); }, 250);
        });
    </script>
@endif
</body>
</html>

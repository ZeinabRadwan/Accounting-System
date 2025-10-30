@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $voucher->isReceive() ? 'سند قبض' : 'سند صرف' }} - {{ $voucher->receipt_no ?: ($voucher->cheque_no ?: $voucher->id) }}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', 'DejaVu Sans', sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #374151;
            background: #ffffff;
            margin: 0;
            padding: 20mm;
            direction: {{ $isRTL ? 'rtl' : 'ltr' }};
        }
        .document-container { max-width: 800px; margin: 0 auto; }
        .document-header { border-bottom: 2px solid #e5e7eb; margin-bottom: 20px; padding-bottom: 12px; }
        .company-name { font-size: 24px; font-weight: 700; color: #111827; }
        .section-title { font-size: 16px; font-weight: 600; color: #1f2937; margin-bottom: 8px; }
        .items-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .items-table th, .items-table td { border: 1px solid #e5e7eb; padding: 8px; text-align: left; }
        .text-right { text-align: right; }
        .total-final { font-weight: 700; }
        .company-logo { max-height: 60px; }
        @media print { .no-print { display: none !important; } }
    </style>
</head>
<body>
    <div class="document-container" id="pdfContent">
        <div class="document-header">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                    <h1 class="company-name">{{ \App\Models\GeneralSetting::where('key', 'company_name')->first()?->value ?? 'Company' }}</h1>
                    <div style="color:#6b7280;">
                        {{ \App\Models\GeneralSetting::where('key', 'address')->first()?->value ?? '' }}
                    </div>
                </div>
                <div class="text-right">
                    <h2 style="margin:0 0 8px 0;">{{ $voucher->isReceive() ? 'سند قبض' : 'سند صرف' }}</h2>
                    <div><strong>رقم السند:</strong> {{ $voucher->receipt_no ?: ($voucher->cheque_no ?: $voucher->id) }}</div>
                    <div><strong>التاريخ:</strong> {{ $voucher->date }}</div>
                </div>
            </div>
        </div>

        <div style="display:flex; gap:20px;">
            <div style="flex:1;">
                <div class="section-title">{{ $voucher->isReceive() ? 'من' : 'إلى' }}</div>
                <div>
                    {{ $voucher->client?->name ?? $voucher->supplier?->name ?? ($voucher->chartOfAccount?->name ?? '') }}
                </div>
            </div>
            <div style="flex:1;" class="text-right">
                <div class="section-title">الحساب</div>
                <div>
                    {{ $voucher->account?->label ?? '-' }}
                </div>
            </div>
        </div>

        <table class="items-table" style="margin-top:20px;">
            <tbody>
                <tr>
                    <th>المبلغ</th>
                    <td class="text-right total-final">{{ number_format($voucher->amount, 2) }}</td>
                </tr>
                <tr>
                    <th>طريقة الدفع</th>
                    <td class="text-right">{{ $voucher->payment_method }}</td>
                </tr>
                <tr>
                    <th>شيك رقم</th>
                    <td class="text-right">{{ $voucher->cheque_no ?? '-' }}</td>
                </tr>
                <tr>
                    <th>إيصال رقم</th>
                    <td class="text-right">{{ $voucher->receipt_no ?? '-' }}</td>
                </tr>
                @if($voucher->invoice)
                <tr>
                    <th>فاتورة</th>
                    <td class="text-right">{{ $voucher->invoice->invoice_no }}</td>
                </tr>
                @endif
                @if($voucher->purchase)
                <tr>
                    <th>مشتريات</th>
                    <td class="text-right">{{ $voucher->purchase->purchase_no }}</td>
                </tr>
                @endif
                @if($voucher->note)
                <tr>
                    <th>ملاحظات</th>
                    <td class="text-right">{{ $voucher->note }}</td>
                </tr>
                @endif
            </tbody>
        </table>

        <div style="display:flex; justify-content:space-between; margin-top:40px;">
            <div style="width:40%;">
                <div class="section-title">المستلم</div>
                <div style="height:60px; border-bottom:1px solid #e5e7eb;"></div>
            </div>
            <div style="width:40%;" class="text-right">
                <div class="section-title">المحاسب/المدير</div>
                <div style="height:60px; border-bottom:1px solid #e5e7eb;"></div>
            </div>
        </div>
    </div>
</body>
</html>



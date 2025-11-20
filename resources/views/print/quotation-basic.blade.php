<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quotation - {{ $quotation->quotation_no }}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #6b7280;
            background: #ffffff;
            margin: 0;
            padding: 20mm;
        }

        .document-container {
            max-width: 800px;
            margin: 0 auto;
        }

        h1,
        h2,
        h3 {
            color: #2563eb;
        }

        .document-header {
            border-bottom: 2px solid #e5e7eb;
            margin-bottom: 30px;
            padding-bottom: 20px;
        }

        .items-table th {
            background: #f8fafc;
        }

        .total-final {
            font-weight: 700;
            border-top: 2px solid #e5e7eb;
        }

        @media print {
            .no-print {
                display: none !important;
            }

            .print-button {
                display: none !important;
            }
        }

        .print-button {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .print-button:hover {
            background: #5a67d8;
            transform: translateY(-2px);
        }

        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }

        .items-table th,
        .items-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }

        .items-table th {
            background: #f8fafc;
            font-weight: 600;
        }

        .items-table .text-right {
            text-align: right;
        }

        .totals-section {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 30px;
        }

        .totals-table {
            width: 300px;
        }

        .totals-table .total-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #f3f4f6;
        }

        .totals-table .total-final {
            font-weight: 700;
            font-size: 16px;
            border-top: 2px solid #e5e7eb;
            border-bottom: 2px solid #e5e7eb;
            padding: 12px 0;
        }

        .document-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-style: italic;
        }
    </style>
</head>

<body>

    <div class="document-container">
        <!-- Header -->
        <div class="document-header">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    @php
                        $settings = \App\Models\GeneralSetting::get();
                        $companyName = $settings->where('key', 'company_name')->first()?->value ?? 'Company Name';
                        $companyAddress = $settings->where('key', 'address')->first()?->value ?? 'Company Address';
                        $companyPhone = $settings->where('key', 'phone_number')->first()?->value ?? 'Phone';
                        $companyEmail = $settings->where('key', 'email_address')->first()?->value ?? 'Email';
                    @endphp
                    <h1 style="font-size: 24px; margin: 0 0 10px 0;"
                        class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">{{ $companyName }}</h1>
                    <p style="margin: 0;">{{ $companyAddress }}</p>
                    <p style="margin: 0;">{{ $companyPhone }} • {{ $companyEmail }}</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 24px; margin: 0 0 15px 0;">QUOTATION</h2>
                    <p style="margin: 0;">Quotation #: {{ $quotation->quotation_no }}</p>
                    <p style="margin: 0;">Date:
                        {{ \Carbon\Carbon::parse($quotation->quotation_date)->format('M d, Y') }}</p>
                </div>
            </div>
        </div>

        <!-- Client Info -->
        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 10px;">Quote To:</h3>
            <p style="margin: 0; font-weight: 600;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                {{ $quotation->client->name ?? 'N/A' }}</p>
            <p style="margin: 0;">{{ $quotation->client->address ?? 'N/A' }}</p>
            <p style="margin: 0;">{{ $quotation->client->email ?? 'N/A' }} • {{ $quotation->client->phone ?? 'N/A' }}
            </p>
        </div>

        <!-- Items Table -->
        <div style="margin-bottom: 30px;">
            <table class="items-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th class="text-right">Qty</th>
                        <th class="text-right">Rate</th>
                        <th class="text-right">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($quotation->quotationProducts as $product)
                        <tr>
                            <td>
                                <strong>{{ $product->product->name ?? 'N/A' }}</strong>
                                @if ($product->product->description)
                                    <br><small>{{ $product->product->description }}</small>
                                @endif
                            </td>
                            <td class="text-right">{{ $product->quantity }}</td>
                            <td class="text-right">${{ number_format($product->sale_price, 2) }}</td>
                            <td class="text-right">${{ number_format($product->quantity * $product->sale_price, 2) }}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <!-- Totals -->
        <div class="totals-section">
            <div class="totals-table">
                <div class="total-row">
                    <span>Subtotal:</span>
                    <span>${{ number_format($quotation->sub_total, 2) }}</span>
                </div>
                @if ($quotation->discount > 0)
                    <div class="total-row">
                        <span>Discount:</span>
                        <span>-${{ number_format($quotation->discount, 2) }}</span>
                    </div>
                @endif
                @if ($quotation->calculated_tax > 0)
                    <div class="total-row">
                        <span>Tax:</span>
                        <span>${{ number_format($quotation->calculated_tax, 2) }}</span>
                    </div>
                @endif
                <div class="total-row total-final">
                    <span>Total:</span>
                    <span>${{ number_format($quotation->calculated_total, 2) }}</span>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="document-footer">
            <p style="margin: 0;">Thank you for considering our services!</p>
        </div>
    </div>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</body>

</html>

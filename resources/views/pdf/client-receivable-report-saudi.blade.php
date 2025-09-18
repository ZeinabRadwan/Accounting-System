<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تقرير المستحقات من العملاء</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Cairo", Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #374151;
            background: #ffffff;
            direction: rtl;
        }

        .document-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 30px;
            background: #ffffff;
        }

        .header-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #1e40af;
        }

        .company-branding {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .logo-container {
            flex-shrink: 0;
        }

        .company-logo {
            max-width: 70px;
            height: auto;
        }

        .company-name {
            font-size: 22px;
            font-weight: 700;
            color: #1e40af;
            margin-bottom: 8px;
        }

        .company-meta p {
            margin-bottom: 3px;
            color: #6b7280;
            font-size: 13px;
        }

        .vat-number {
            color: #1e40af;
            font-weight: 600;
            font-size: 12px;
        }

        .report-header {
            text-align: left;
        }

        .report-title {
            font-size: 28px;
            font-weight: 700;
            color: #1e40af;
            margin-bottom: 15px;
        }

        .report-meta {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .meta-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-width: 200px;
        }

        .meta-label {
            color: #6b7280;
            font-size: 13px;
        }

        .meta-value {
            color: #1f2937;
            font-weight: 600;
            font-size: 13px;
        }

        .content-layout {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
        }

        .summary-sidebar {
            width: 250px;
            flex-shrink: 0;
        }

        .sidebar-title {
            font-size: 16px;
            font-weight: 600;
            color: #1e40af;
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 2px solid #1e40af;
        }

        .summary-card {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }

        .summary-card > div {
            margin-bottom: 8px;
            font-size: 13px;
        }

        .summary-label {
            color: #6b7280;
            font-size: 12px;
        }

        .summary-value {
            color: #1f2937;
            font-weight: 600;
            font-size: 14px;
        }

        .summary-total {
            color: #1e40af;
            font-weight: 700;
            font-size: 15px;
            border-top: 2px solid #1e40af;
            padding-top: 8px;
            margin-top: 8px;
        }

        .main-content {
            flex: 1;
        }

        .clients-section {
            margin-bottom: 20px;
        }

        .clients-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #e5e7eb;
        }

        .clients-table th {
            background: #1e40af;
            color: white;
            padding: 12px 10px;
            text-align: center;
            font-weight: 600;
            font-size: 13px;
        }

        .col-client-id { width: 15%; }
        .col-name { width: 25%; }
        .col-phone { width: 15%; }
        .col-email { width: 20%; }
        .col-company { width: 15%; }
        .col-invoice-due { width: 10%; }
        .col-non-invoice-due { width: 10%; }
        .col-total-due { width: 10%; }

        .clients-table td {
            padding: 12px 10px;
            border-bottom: 1px solid #e5e7eb;
            text-align: center;
            font-size: 13px;
        }

        .client-name {
            text-align: right;
            font-weight: 500;
        }

        .client-email {
            text-align: right;
        }

        .amount-cell {
            text-align: left;
            font-weight: 600;
        }

        .totals-section {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
        }

        .totals-card {
            width: 280px;
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }

        .total-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
            font-size: 13px;
        }

        .total-final {
            font-weight: 700;
            font-size: 15px;
            color: #1e40af;
            border-top: 2px solid #1e40af;
            border-bottom: 2px solid #1e40af;
            margin-top: 8px;
            padding-top: 12px;
        }

        .document-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
        }

        .thank-you {
            font-style: italic;
            color: #6b7280;
            font-size: 15px;
            margin-bottom: 5px;
        }

        .footer-note {
            color: #1e40af;
            font-weight: 600;
            font-size: 12px;
        }

        .status-active {
            color: #059669;
            font-weight: 600;
        }

        .status-inactive {
            color: #dc2626;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="document-container">
        <!-- Header with Logo and Company Info -->
        <div class="header-section">
            <div class="company-branding">
                <div class="logo-container">
                    @if($data['companyLogo'])
                        <img src="{{ $data['companyLogo'] }}" alt="شعار الشركة" class="company-logo">
                    @endif
                </div>
                <div class="company-details">
                    <h1 class="company-name">{{ $data['companyName'] }}</h1>
                    <div class="company-meta">
                        <p class="company-address">{{ $data['companyAddress'] }}</p>
                        <p class="company-contact">{{ $data['companyPhone'] }} • {{ $data['companyEmail'] }}</p>
                        @if($data['companyVatNumber'])
                            <p class="vat-number">الرقم الضريبي: {{ $data['companyVatNumber'] }}</p>
                        @endif
                    </div>
                </div>
            </div>
            <div class="report-header">
                <h2 class="report-title">تقرير المستحقات من العملاء</h2>
                <div class="report-meta">
                    <div class="meta-item">
                        <span class="meta-label">تاريخ التقرير:</span>
                        <span class="meta-value">{{ date('Y-m-d') }}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">إجمالي العملاء:</span>
                        <span class="meta-value">{{ count($data['clients']) }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Summary and Main Content -->
        <div class="content-layout">
            <div class="summary-sidebar">
                <h3 class="sidebar-title">ملخص التقرير</h3>
                <div class="summary-card">
                    <div>
                        <div class="summary-label">المجموع الفرعي للفواتير:</div>
                        <div class="summary-value">{{ $data['currencySymbol'] }}{{ number_format($data['totalInvoiceDue'], 2) }}</div>
                    </div>
                    <div>
                        <div class="summary-label">المجموع الفرعي للمدفوعات:</div>
                        <div class="summary-value">{{ $data['currencySymbol'] }}{{ number_format($data['totalNonInvoiceDue'], 2) }}</div>
                    </div>
                    <div class="summary-total">
                        <div class="summary-label">المجموع الكلي:</div>
                        <div class="summary-value">{{ $data['currencySymbol'] }}{{ number_format($data['totalDue'], 2) }}</div>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="main-content">
                <!-- Clients Table -->
                <div class="clients-section">
                    <table class="clients-table">
                        <thead>
                            <tr>
                                <th class="col-client-id">رقم العميل</th>
                                <th class="col-name">الاسم</th>
                                <th class="col-phone">الهاتف</th>
                                <th class="col-email">البريد الإلكتروني</th>
                                <th class="col-company">اسم الشركة</th>
                                <th class="col-invoice-due">مستحق الفواتير</th>
                                <th class="col-non-invoice-due">مستحق المدفوعات</th>
                                <th class="col-total-due">المجموع</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data['clients'] as $client)
                            <tr>
                                <td>{{ $data['clientPrefix'] }}-{{ $client->client_id }}</td>
                                <td class="client-name">{{ $client->name }}</td>
                                <td>{{ $client->phone }}</td>
                                <td class="client-email">{{ $client->email }}</td>
                                <td>{{ $client->company_name }}</td>
                                <td class="amount-cell">{{ $data['currencySymbol'] }}{{ number_format($client->clientDue() ?: 0, 2) }}</td>
                                <td class="amount-cell">{{ $data['currencySymbol'] }}{{ number_format($client->nonInvoiceCurrentDue() ?: 0, 2) }}</td>
                                <td class="amount-cell">{{ $data['currencySymbol'] }}{{ number_format(($client->clientDue() ?: 0) + ($client->nonInvoiceCurrentDue() ?: 0), 2) }}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                <!-- Totals Section -->
                <div class="totals-section">
                    <div class="totals-card">
                        <div class="total-row">
                            <span class="total-label">إجمالي مستحقات الفواتير:</span>
                            <span class="total-value">{{ $data['currencySymbol'] }}{{ number_format($data['totalInvoiceDue'], 2) }}</span>
                        </div>
                        <div class="total-row">
                            <span class="total-label">إجمالي مستحقات المدفوعات:</span>
                            <span class="total-value">{{ $data['currencySymbol'] }}{{ number_format($data['totalNonInvoiceDue'], 2) }}</span>
                        </div>
                        <div class="total-row total-final">
                            <span class="total-label">المجموع الكلي:</span>
                            <span class="total-value">{{ $data['currencySymbol'] }}{{ number_format($data['totalDue'], 2) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="document-footer">
            <div class="footer-content">
                <p class="thank-you">شكراً لاستخدامكم نظام المحاسبة</p>
                <p class="footer-note">تقرير المستحقات من العملاء - {{ date('Y-m-d H:i') }}</p>
            </div>
        </div>
    </div>
</body>
</html>

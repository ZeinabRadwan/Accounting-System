<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VAT Report</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.4;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #333;
            padding-bottom: 20px;
        }
        
        .header h1 {
            margin: 0;
            font-size: 24px;
            color: #333;
        }
        
        .header h2 {
            margin: 5px 0 0 0;
            font-size: 16px;
            color: #666;
            font-weight: normal;
        }
        
        .period-info {
            background-color: #f8f9fa;
            padding: 10px;
            margin-bottom: 20px;
            border-left: 4px solid #007bff;
        }
        
        .period-info h3 {
            margin: 0 0 10px 0;
            font-size: 14px;
            color: #333;
        }
        
        .period-info p {
            margin: 0;
            font-size: 12px;
            color: #666;
        }
        
        .summary-section {
            margin-bottom: 30px;
        }
        
        .summary-section h3 {
            background-color: #007bff;
            color: white;
            padding: 8px 12px;
            margin: 0 0 15px 0;
            font-size: 14px;
            border-radius: 4px;
        }
        
        .table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        
        .table th,
        .table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        
        .table th {
            background-color: #f8f9fa;
            font-weight: bold;
            text-align: center;
        }
        
        .table .text-right {
            text-align: right;
        }
        
        .table .text-center {
            text-align: center;
        }
        
        .table tfoot th {
            background-color: #e9ecef;
            font-weight: bold;
        }
        
        .total-row {
            background-color: #f8f9fa;
            font-weight: bold;
        }
        
        .sales-total {
            color: #28a745;
        }
        
        .purchase-total {
            color: #dc3545;
        }
        
        .transactions-section {
            margin-top: 30px;
        }
        
        .transactions-section h3 {
            background-color: #6c757d;
            color: white;
            padding: 8px 12px;
            margin: 0 0 15px 0;
            font-size: 14px;
            border-radius: 4px;
        }
        
        .no-data {
            text-align: center;
            color: #6c757d;
            font-style: italic;
            padding: 20px;
        }
        
        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 10px;
            color: #666;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }
        
        @media print {
            body {
                margin: 0;
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>VAT Report</h1>
        <h2>{{ $data['app_name'] ?? 'Accounting System' }}</h2>
    </div>

    @if(isset($data['filters']))
    <div class="period-info">
        <h3>Report Period</h3>
        @if(isset($data['filters']['from_date']) && isset($data['filters']['to_date']))
            <p><strong>Date Range:</strong> {{ $data['filters']['from_date'] }} to {{ $data['filters']['to_date'] }}</p>
        @elseif(isset($data['filters']['fiscal_year_id']))
            <p><strong>Fiscal Year ID:</strong> {{ $data['filters']['fiscal_year_id'] }}</p>
        @elseif(isset($data['filters']['accounting_period_id']))
            <p><strong>Accounting Period ID:</strong> {{ $data['filters']['accounting_period_id'] }}</p>
        @endif
    </div>
    @endif

    @if(isset($data['summary']) && is_array($data['summary']) && count($data['summary']) > 0)
        <!-- Sales VAT Summary -->
        <div class="summary-section">
            <h3>Sales VAT Summary</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>VAT Rate</th>
                        <th>Rate %</th>
                        <th class="text-right">Total Sales</th>
                        <th class="text-right">Sales VAT</th>
                        <th class="text-right">Journal VAT</th>
                        <th class="text-right">Total Sales VAT</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $totalSalesAmount = 0;
                        $totalSalesVat = 0;
                        $totalJournalVat = 0;
                    @endphp
                    @foreach($data['summary'] as $summary)
                        @php
                            $salesAmount = $summary['sales_vat'] ? $summary['sales_vat'] / ($summary['vat_rate_percentage'] / 100) : 0;
                            $totalSalesAmount += $salesAmount;
                            $totalSalesVat += $summary['sales_vat'] ?? 0;
                            $totalJournalVat += $summary['journal_vat'] ?? 0;
                        @endphp
                        <tr>
                            <td>
                                <strong>{{ $summary['vat_rate_name'] ?? '' }}</strong><br>
                                <small style="color: #666;">{{ $summary['vat_rate_code'] ?? '' }}</small>
                            </td>
                            <td class="text-center">{{ $summary['vat_rate_percentage'] ?? 0 }}%</td>
                            <td class="text-right">{{ number_format($salesAmount, 2) }}</td>
                            <td class="text-right">{{ number_format($summary['sales_vat'] ?? 0, 2) }}</td>
                            <td class="text-right">{{ number_format($summary['journal_vat'] ?? 0, 2) }}</td>
                            <td class="text-right sales-total">
                                {{ number_format(($summary['sales_vat'] ?? 0) + ($summary['journal_vat'] ?? 0), 2) }}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <th colspan="2">Total</th>
                        <th class="text-right">{{ number_format($totalSalesAmount, 2) }}</th>
                        <th class="text-right">{{ number_format($totalSalesVat, 2) }}</th>
                        <th class="text-right">{{ number_format($totalJournalVat, 2) }}</th>
                        <th class="text-right sales-total">{{ number_format($totalSalesVat + $totalJournalVat, 2) }}</th>
                    </tr>
                </tfoot>
            </table>
        </div>

        <!-- Purchase VAT Summary -->
        <div class="summary-section">
            <h3>Purchase VAT Summary</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>VAT Rate</th>
                        <th>Rate %</th>
                        <th class="text-right">Total Purchases</th>
                        <th class="text-right">Purchase VAT</th>
                        <th class="text-right">Journal VAT</th>
                        <th class="text-right">Total Purchase VAT</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $totalPurchaseAmount = 0;
                        $totalPurchaseVat = 0;
                        $totalJournalVat = 0;
                    @endphp
                    @foreach($data['summary'] as $summary)
                        @php
                            $purchaseAmount = $summary['purchase_vat'] ? $summary['purchase_vat'] / ($summary['vat_rate_percentage'] / 100) : 0;
                            $totalPurchaseAmount += $purchaseAmount;
                            $totalPurchaseVat += $summary['purchase_vat'] ?? 0;
                            $totalJournalVat += $summary['journal_vat'] ?? 0;
                        @endphp
                        <tr>
                            <td>
                                <strong>{{ $summary['vat_rate_name'] ?? '' }}</strong><br>
                                <small style="color: #666;">{{ $summary['vat_rate_code'] ?? '' }}</small>
                            </td>
                            <td class="text-center">{{ $summary['vat_rate_percentage'] ?? 0 }}%</td>
                            <td class="text-right">{{ number_format($purchaseAmount, 2) }}</td>
                            <td class="text-right">{{ number_format($summary['purchase_vat'] ?? 0, 2) }}</td>
                            <td class="text-right">{{ number_format($summary['journal_vat'] ?? 0, 2) }}</td>
                            <td class="text-right purchase-total">
                                {{ number_format(($summary['purchase_vat'] ?? 0) + ($summary['journal_vat'] ?? 0), 2) }}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <th colspan="2">Total</th>
                        <th class="text-right">{{ number_format($totalPurchaseAmount, 2) }}</th>
                        <th class="text-right">{{ number_format($totalPurchaseVat, 2) }}</th>
                        <th class="text-right">{{ number_format($totalJournalVat, 2) }}</th>
                        <th class="text-right purchase-total">{{ number_format($totalPurchaseVat + $totalJournalVat, 2) }}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    @endif

    @if(isset($data['transactions']) && is_array($data['transactions']) && count($data['transactions']) > 0)
        <!-- VAT Transactions -->
        <div class="transactions-section">
            <h3>VAT Transactions</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Reference</th>
                        <th>Client/Supplier</th>
                        <th>Type</th>
                        <th>Source</th>
                        <th class="text-right">VAT Amount</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($data['transactions'] as $transaction)
                        <tr>
                            <td>{{ $transaction['date'] ?? '' }}</td>
                            <td>{{ $transaction['reference'] ?? '' }}</td>
                            <td>{{ $transaction['client_supplier'] ?? '' }}</td>
                            <td>
                                <span style="
                                    background-color: {{ $transaction['type'] === 'Sales' ? '#28a745' : '#17a2b8' }};
                                    color: white;
                                    padding: 2px 6px;
                                    border-radius: 3px;
                                    font-size: 10px;
                                ">
                                    {{ $transaction['type'] ?? '' }}
                                </span>
                            </td>
                            <td>
                                <span style="
                                    background-color: #6c757d;
                                    color: white;
                                    padding: 2px 6px;
                                    border-radius: 3px;
                                    font-size: 10px;
                                ">
                                    {{ $transaction['source'] ?? '' }}
                                </span>
                            </td>
                            <td class="text-right">{{ number_format($transaction['vat_amount'] ?? 0, 2) }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @else
        <div class="no-data">
            <p>No VAT data found for the selected criteria</p>
        </div>
    @endif

    <div class="footer">
        <p>Generated on {{ date('Y-m-d H:i:s') }}</p>
    </div>
</body>
</html>

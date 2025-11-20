@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';

    // Custom currency formatter for PDF - no currency symbols as requested
    function formatPdfCurrency($amount)
    {
        $formattedAmount = number_format($amount, 2, '.', ',');
        return $formattedAmount; // Return only the amount without currency symbol
    }
@endphp

<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.VAT Report')</title>
    <style>
        body {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
            margin: 20px;
            line-height: 1.6;
            color: #333;
        }

        .currency-symbol {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #2563eb;
        }

        .header h1 {
            color: #2563eb;
            margin: 0 0 10px 0;
        }

        .period-info {
            color: #6b7280;
            margin: 10px 0;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        .table th,
        .table td {
            border: 1px solid #e5e7eb;
            padding: 8px 12px;
            text-align: center;
        }

        .table th {
            background: #f8fafc;
            color: #2563eb;
            font-weight: bold;
        }

        .section-title {
            color: #2563eb;
            margin: 30px 0 15px 0;
            font-size: 18px;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 5px;
        }

        .action-buttons {
            margin: 20px 0;
            text-align: center;
        }

        .print-button,
        .pdf-button {
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

        .alert {
            background: #e0f2fe;
            border: 1px solid #0288d1;
            color: #01579b;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }

        @media print {

            .no-print,
            .action-buttons {
                display: none !important;
            }
        }
    </style>
</head>

<body>
    <!-- Action Buttons -->
    <div class="action-buttons no-print">
        <button class="pdf-button" onclick="downloadPDF()">
            <i class="fas fa-download"></i> @lang('print.Download PDF')
        </button>
    </div>

    <div class="header">
        <h1>@lang('print.VAT Report')</h1>
        <div class="period-info">
            @lang('print.Generated'): {{ date('d-M-Y') }}
            @if (isset($vatReportData['filters']['from_date']) && isset($vatReportData['filters']['to_date']))
                <br>@lang('print.Period'): {{ $vatReportData['filters']['from_date'] }} -
                {{ $vatReportData['filters']['to_date'] }}
            @endif
        </div>
    </div>

    <!-- VAT Summary -->
    @if (isset($vatReportData['summary']) && count($vatReportData['summary']) > 0)
        <h2 class="section-title">@lang('print.VAT Summary')</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>@lang('print.VAT Rate')</th>
                    <th>@lang('print.Rate %')</th>
                    <th>@lang('print.Sales VAT')</th>
                    <th>@lang('print.Purchase VAT')</th>
                    <th>@lang('print.Journal VAT')</th>
                    <th>@lang('print.Net VAT')</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($vatReportData['summary'] as $summary)
                    <tr>
                        <td>
                            <strong>{{ $summary['vat_rate_name'] ?? '' }}</strong><br>
                            <small>{{ $summary['vat_rate_code'] ?? '' }}</small>
                        </td>
                        <td>{{ $summary['vat_rate_percentage'] ?? 0 }}%</td>
                        <td>{!! formatPdfCurrency($summary['sales_vat'] ?? 0) !!}</td>
                        <td>{!! formatPdfCurrency($summary['purchase_vat'] ?? 0) !!}</td>
                        <td>{!! formatPdfCurrency($summary['journal_vat'] ?? 0) !!}</td>
                        <td>
                            @if (($summary['net_vat'] ?? 0) >= 0)
                                <span style="color: #059669;">
                                    {!! formatPdfCurrency($summary['net_vat'] ?? 0) !!}
                                </span>
                            @else
                                <span style="color: #dc2626;">
                                    ({!! formatPdfCurrency(abs($summary['net_vat'] ?? 0)) !!})
                                </span>
                            @endif
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif

    <!-- VAT Transactions -->
    @if (isset($vatReportData['transactions']) && count($vatReportData['transactions']) > 0)
        <h2 class="section-title">@lang('print.VAT Transactions')</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>@lang('print.Date')</th>
                    <th>@lang('print.Reference')</th>
                    <th>@lang('print.Client/Supplier')</th>
                    <th>@lang('print.Type')</th>
                    <th>@lang('print.Source')</th>
                    <th>@lang('print.VAT Amount')</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($vatReportData['transactions'] as $transaction)
                    <tr>
                        <td>{{ $transaction['date'] ?? '' }}</td>
                        <td>{{ $transaction['reference'] ?? '' }}</td>
                        <td>{{ $transaction['client_supplier'] ?? '' }}</td>
                        <td>{{ $transaction['type'] ?? '' }}</td>
                        <td>{{ $transaction['source'] ?? '' }}</td>
                        <td>{!! formatPdfCurrency($transaction['vat_amount'] ?? 0) !!}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <div style="text-align: center; color: #6b7280; margin-top: 15px;">
            @lang('print.Total transactions'): {{ count($vatReportData['transactions']) }}
        </div>
    @endif

    @if (
        (!isset($vatReportData['summary']) || count($vatReportData['summary']) === 0) &&
            (!isset($vatReportData['transactions']) || count($vatReportData['transactions']) === 0))
        <div class="alert">
            @lang('print.No VAT data found for the selected period.')
        </div>
    @endif

    <script>
        function downloadPDF() {
            // Get current URL parameters to maintain filters
            const urlParams = new URLSearchParams(window.location.search);

            // Build PDF URL with same parameters
            let pdfUrl = '/vat-report/pdf';
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

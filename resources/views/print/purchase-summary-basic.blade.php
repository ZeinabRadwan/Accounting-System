@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';
    
    // Custom currency formatter for PDF - no currency symbols as requested
    function formatPdfCurrency($amount) {
        $formattedAmount = number_format($amount, 2, '.', ',');
        return $formattedAmount; // Return only the amount without currency symbol
    }
@endphp

<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('print.Purchase Summary')</title>
    <style>
        body {
            font-family: {{ $isRTL ? '"DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif' : '"DejaVu Sans", "Arial", sans-serif' }};
            margin: 20px;
            color: #333;
            line-height: 1.4;
            background: white;
        }
        
        .arabic-text {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        
        .currency-symbol {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        
        h1, h2, h3 {
            color: #2563eb;
            margin-top: 0;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 20px;
        }
        
        .summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .summary-box {
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }
        
        .summary-box.suppliers { background: #dcfce7; color: #166534; }
        .summary-box.purchases { background: #dbeafe; color: #1e40af; }
        .summary-box.amount { background: #fef3c7; color: #92400e; }
        .summary-box.due { background: #fee2e2; color: #991b1b; }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: 12px;
        }
        
        th, td {
            padding: 8px 12px;
            border: 1px solid #e5e7eb;
            text-align: center;
        }
        
        th {
            background: #2563eb;
            color: white;
            font-weight: bold;
        }
        
        tbody tr:nth-child(even) {
            background: #f9fafb;
        }
        
        .no-data {
            text-align: center;
            padding: 40px;
            background: #f9fafb;
            border-radius: 8px;
            color: #6b7280;
        }
        
        .action-buttons {
            margin: 20px 0;
            text-align: center;
        }
        
        .print-button, .pdf-button {
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
        
        .print-button:hover {
            background: #0056b3;
            color: white;
            text-decoration: none;
        }
        
        .pdf-button:hover {
            background: #1e7e34;
            color: white;
            text-decoration: none;
        }
        
        @media print {
            .no-print, .action-buttons {
                display: none !important;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Action Buttons -->
        <div class="action-buttons no-print">
            <button class="print-button" onclick="window.print()">
                <i class="fas fa-print"></i> @lang('print.Print')
            </button>
            <button class="pdf-button" onclick="downloadPDF()">
                <i class="fas fa-download"></i> @lang('print.Download PDF')
            </button>
        </div>

        <div class="header">
            <h1 class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Purchase Summary')</h1>
            <p class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.This report was generated on') {{ date('d-M-Y H:i:s') }}</p>
        </div>

        <!-- Summary Section -->
        @if(isset($purchaseSummaryData['summary']))
            <h2 class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Summary')</h2>
            <div class="summary-grid">
                <div class="summary-box suppliers">
                    <h3 class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Total Suppliers')</h3>
                    <p style="font-size: 24px; font-weight: bold; margin: 0;">
                        {{ $purchaseSummaryData['summary']['total_suppliers'] ?? 0 }}
                    </p>
                </div>
                <div class="summary-box purchases">
                    <h3 class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Total Purchases')</h3>
                    <p style="font-size: 24px; font-weight: bold; margin: 0;">
                        {{ $purchaseSummaryData['summary']['total_purchases'] ?? 0 }}
                    </p>
                </div>
                <div class="summary-box amount">
                    <h3 class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Total Amount')</h3>
                    <p style="font-size: 24px; font-weight: bold; margin: 0;">
                        {!! formatPdfCurrency($purchaseSummaryData['summary']['total_amount'] ?? 0) !!}
                    </p>
                </div>
                <div class="summary-box due">
                    <h3 class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Total Due')</h3>
                    <p style="font-size: 24px; font-weight: bold; margin: 0;">
                        {!! formatPdfCurrency($purchaseSummaryData['summary']['total_due'] ?? 0) !!}
                    </p>
                </div>
            </div>
        @endif

        <!-- Supplier Details -->
        @if(isset($purchaseSummaryData['suppliers']) && count($purchaseSummaryData['suppliers']) > 0)
            <h2 class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Supplier Details')</h2>
            <table>
                <thead>
                    <tr>
                        <th class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Row Number')</th>
                        <th class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Supplier Name')</th>
                        <th class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Total Purchases')</th>
                        <th class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Total Amount')</th>
                        <th class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Total Tax')</th>
                        <th class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Total Paid')</th>
                        <th class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.Total Due')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($purchaseSummaryData['suppliers'] as $index => $supplier)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">{{ $supplier['supplier_name'] ?? 'Unknown Supplier' }}</td>
                            <td>{{ $supplier['total_purchases'] ?? 0 }}</td>
                            <td>{!! formatPdfCurrency($supplier['total_amount'] ?? 0) !!}</td>
                            <td>{!! formatPdfCurrency($supplier['total_tax'] ?? 0) !!}</td>
                            <td>{!! formatPdfCurrency($supplier['total_paid'] ?? 0) !!}</td>
                            <td>{!! formatPdfCurrency($supplier['total_due'] ?? 0) !!}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            
            <div style="text-align: center; color: #6b7280; margin-top: 15px;" class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">
                @lang('print.Total suppliers'): {{ count($purchaseSummaryData['suppliers']) }}
            </div>
        @else
            <div class="no-data">
                <h3 class="{{ app()->getLocale() === 'ar' ? 'arabic-text' : '' }}">@lang('print.No suppliers found for the selected period.')</h3>
            </div>
        @endif
    </div>

    <script>
        function downloadPDF() {
            // Get current URL parameters to maintain filters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Build PDF URL with same parameters
            let pdfUrl = '/purchase-summary/pdf';
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

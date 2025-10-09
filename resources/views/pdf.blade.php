@php
    $currentLocale = app()->getLocale();
    $isRTL = $currentLocale === 'ar';
@endphp
<!DOCTYPE html>
<html lang="{{ $currentLocale }}" dir="{{ $isRTL ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $documentTitle ?? 'Document' }}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    
    <!-- Print-specific styles -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'DejaVu Sans', Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #6b7280;
            background: #ffffff;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            direction: {{ $isRTL ? 'rtl' : 'ltr' }};
        }
        
        /* Arabic text support */
        .arabic-text {
            font-family: 'DejaVu Sans', 'Arial Unicode MS', 'Tahoma', sans-serif;
            direction: rtl;
            text-align: right;
        }
        
        .english-text {
            font-family: 'DejaVu Sans', Arial, sans-serif;
            direction: ltr;
            text-align: left;
        }
        
        /* RTL Support */
        @if($isRTL)
        .document-header > div {
            flex-direction: row-reverse;
        }
        
        .document-info {
            text-align: left !important;
        }
        
        .totals-section {
            justify-content: flex-start !important;
        }
        
        .items-table th,
        .items-table td {
            text-align: {{ $isRTL ? 'right' : 'left' }};
        }
        
        .items-table .text-right {
            text-align: {{ $isRTL ? 'left' : 'right' }} !important;
        }
        
        .items-table .text-center {
            text-align: center !important;
        }
        @endif
        
        .document-container {
            max-width: 100%;
            margin: 0 auto;
        }
        
        h1, h2, h3 {
            color: #2563eb;
        }
        
        .table-listing {
            border-collapse: collapse;
            width: 100%;
            margin-top: 10px;
        }
        
        .table-listing th, .table-listing td {
            padding: 8px;
            border: 1px solid #ddd;
            font-size: 12px;
        }
        
        .table-listing th {
            font-weight: bold;
            background-color: #f8f9fa;
        }
        
        h3 {
            text-align: {{ $isRTL ? 'right' : 'left' }};
            margin-bottom: 10px;
        }
        
        /* Hide elements that shouldn't appear in PDF */
        .action-buttons, .print-actions, .no-print, .print-button, .pdf-button {
            display: none !important;
        }
        
        /* Ensure proper color rendering in PDF */
        * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
    </style>
</head>
<body>
    <div class="document-container">
        @yield('content-area')
    </div>
</body>
</html>

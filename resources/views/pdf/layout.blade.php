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
        /* Load Saudi Riyal new symbol font (same package used in app.scss) */
        @import url('https://unpkg.com/@abdulrysr/saudi-riyal-new-symbol-font/style.css');
        
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: {{ $template->template_config['typography']['fontFamily'] ?? 'DejaVu Sans, Arial, sans-serif' }};
            font-size: {{ $template->template_config['typography']['baseFontSize'] ?? 14 }}px;
            line-height: 1.6;
            color: {{ $template->template_config['colors']['secondary'] ?? '#6b7280' }};
            background: {{ $template->template_config['colors']['background'] ?? '#ffffff' }};
            margin: 0;
            padding: {{ $template->template_config['layout']['margins'] ?? 20 }}mm;
            min-height: 100vh;
            direction: {{ $isRTL ? 'rtl' : 'ltr' }};
        }
        
        /* Arabic text support */
        .arabic-text {
            font-family: 'DejaVu Sans', 'Arial Unicode MS', 'Tahoma', sans-serif;
            direction: rtl;
            text-align: right;
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
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1, h2, h3 {
            color: {{ $template->template_config['colors']['primary'] ?? '#2563eb' }};
        }
        
        /* Ensure ê renders as the new Saudi Riyal symbol where wrapped */
        .saudi-riyal {
            font-family: SaudiRiyalSymbol, sans-serif !important;
            font-weight: normal;
            padding: 0 3px;
        }
        
        /* Force Saudi Riyal symbol for all currency values */
        body {
            font-family: {{ $template->template_config['typography']['fontFamily'] ?? 'DejaVu Sans, Arial, sans-serif' }}, SaudiRiyalSymbol, sans-serif;
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
            background: {{ $template->template_config['colors']['primary'] ?? '#10b981' }};
            color: #ffffff;
            font-weight: 600;
        }
        
        .items-table .text-right {
            text-align: right;
        }
        
        .items-table .text-center {
            text-align: center;
        }
        
        .totals-section {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
        }
        
        .totals-table {
            width: 300px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            background: #f9fafb;
        }
        
        .total-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding: 5px 0;
        }
        
        .total-row:last-child {
            margin-bottom: 0;
        }
        
        .total-final {
            font-weight: 700;
            border-top: 2px solid #e5e7eb;
            padding-top: 10px;
            margin-top: 10px;
        }
        
        .client-info, .supplier-info {
            margin-bottom: 20px;
            padding: 15px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid {{ $template->template_config['colors']['primary'] ?? '#2563eb' }};
        }
        
        .document-footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
        }
        
        .company-logo {
            max-height: 60px;
            max-width: 200px;
            height: auto;
            width: auto;
        }
        
        .document-info {
            text-align: right;
        }
        
        .document-info h2 {
            margin-bottom: 10px;
        }
        
        .document-info p {
            margin: 5px 0;
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
        
        /* Font Awesome icons support */
        .fa, .fas, .far, .fab {
            font-family: "Font Awesome 5 Free", "Font Awesome 5 Brands", "FontAwesome" !important;
            font-weight: 900;
        }
        
        .fa-print:before { content: "\f02f"; }
        .fa-download:before { content: "\f019"; }
    </style>
</head>
<body>
    <div class="document-container">
        @yield('content')
    </div>
</body>
</html>

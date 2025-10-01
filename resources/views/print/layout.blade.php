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
        
        /* Print-specific styles */
        @media print {
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            
            body {
                margin: 0 !important;
                padding: {{ $template->template_config['layout']['margins'] ?? 20 }}mm !important;
                font-size: {{ $template->template_config['typography']['baseFontSize'] ?? 14 }}px !important;
                line-height: 1.6 !important;
                color: {{ $template->template_config['colors']['secondary'] ?? '#6b7280' }} !important;
                background: {{ $template->template_config['colors']['background'] ?? '#ffffff' }} !important;
            }
            
            .document-container {
                max-width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            
            .no-print {
                display: none !important;
            }
            
            .page-break {
                page-break-before: always;
            }
            
            .avoid-break {
                page-break-inside: avoid;
            }
            
            .action-buttons {
                display: none !important;
            }
            
            .print-button, .pdf-button {
                display: none !important;
            }
            
            /* Ensure proper spacing in print */
            h1, h2, h3 {
                margin: 0 0 1rem 0 !important;
                padding: 0 !important;
            }
            
            p {
                margin: 0 0 0.5rem 0 !important;
                padding: 0 !important;
            }
            
            table {
                margin: 1rem 0 !important;
                width: 100% !important;
                border-collapse: collapse !important;
                background: #ffffff !important;
            }
            
            th, td {
                padding: 0.75rem !important;
                border-bottom: 1px solid #e5e7eb !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            
            th {
                background: #f8fafc !important;
                background-color: #f8fafc !important;
                font-weight: 600 !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            
            /* Additional table styling for better print appearance */
            .items-table {
                background: #ffffff !important;
            }
            
            .items-table th {
                background: #f8fafc !important;
                background-color: #f8fafc !important;
                color: #374151 !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            
            .items-table td {
                background: #ffffff !important;
                background-color: #ffffff !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        }
        
        /* Action buttons styles */
        .action-buttons {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            gap: 10px;
        }
        
        .print-button, .pdf-button {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        /* Show buttons by default, hide in PDF */
        .action-buttons {
            display: flex;
        }
        
        .pdf-button {
            background: #10b981;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        
        .print-button:hover {
            background: #5a67d8;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .pdf-button:hover {
            background: #059669;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
        }
        
        .print-button:active, .pdf-button:active {
            transform: translateY(0);
        }
        
        /* Template-specific styles */
        .template-content {
            position: relative;
        }
        
        .company-logo {
            max-height: 60px;
            margin-bottom: 15px;
        }
        
        .document-title {
            font-size: {{ $template->template_config['typography']['headerFontSize'] ?? 24 }}px;
            font-weight: 700;
            margin-bottom: 15px;
        }
        
        .document-info {
            text-align: right;
        }
        
        .client-info, .supplier-info {
            margin-bottom: 30px;
        }
        
        .client-info h3, .supplier-info h3 {
            margin-bottom: 10px;
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
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            body {
                padding: 10mm;
            }
            
            .document-container {
                max-width: 100%;
            }
            
            .totals-section {
                justify-content: flex-start;
            }
            
            .totals-table {
                width: 100%;
            }
        }
    </style>
    
    @if($template && $template->css_styles)
        <style>
            {!! $template->css_styles !!}
        </style>
    @endif
</head>
<body>
    <!-- Action Buttons -->
    <div class="action-buttons no-print">
        <button class="print-button" onclick="window.print()">
            <i class="fas fa-print"></i> @lang('print.Print Document')
        </button>
        <button class="pdf-button" onclick="downloadPDF()">
            <i class="fas fa-download"></i> @lang('print.Download PDF')
        </button>
    </div>
    
    <div class="document-container">
        <div class="template-content">
            @yield('content')
        </div>
    </div>
    
    <!-- Font Awesome for icons - using local fallback -->
    <style>
        .fas, .fa-print, .fa-download {
            font-family: "Font Awesome 6 Free";
            font-weight: 900;
        }
        .fa-print:before { content: "\f02f"; }
        .fa-download:before { content: "\f019"; }
    </style>
    
    <script>
        // Auto-focus for better print experience
        window.onload = function() {
            // Optional: Auto-print when page loads (uncomment if desired)
            // window.print();
        };
        
        // Handle print events
        window.addEventListener('beforeprint', function() {
            // Add any pre-print logic here
            console.log('Preparing to print...');
        });
        
        window.addEventListener('afterprint', function() {
            // Add any post-print logic here
            console.log('Print completed');
        });
        
        // PDF Download function
        function downloadPDF() {
            // Get current URL path to determine document type
            const currentPath = window.location.pathname;
            let pdfUrl = '';
            
            // Extract slug from URL and determine PDF route
            if (currentPath.includes('/print/invoice/')) {
                const slug = currentPath.split('/print/invoice/')[1];
                pdfUrl = `/print/invoice/${slug}/pdf`;
            } else if (currentPath.includes('/print/purchase/')) {
                const slug = currentPath.split('/print/purchase/')[1];
                pdfUrl = `/print/purchase/${slug}/pdf`;
            } else if (currentPath.includes('/print/quotation/')) {
                const slug = currentPath.split('/print/quotation/')[1];
                pdfUrl = `/print/quotation/${slug}/pdf`;
            }
            
            if (pdfUrl) {
                // Create a temporary link to download the PDF
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.download = '';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                console.error('Unable to determine document type for PDF download');
                alert('Unable to download PDF. Please try again.');
            }
        }
    </script>
</body>
</html>

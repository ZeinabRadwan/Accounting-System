<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $documentTitle ?? 'Document' }}</title>
    
    <!-- Print-specific styles -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: {{ $template->template_config['typography']['fontFamily'] ?? 'Inter, sans-serif' }};
            font-size: {{ $template->template_config['typography']['baseFontSize'] ?? 14 }}px;
            line-height: 1.6;
            color: {{ $template->template_config['colors']['secondary'] ?? '#6b7280' }};
            background: {{ $template->template_config['colors']['background'] ?? '#ffffff' }};
            margin: 0;
            padding: {{ $template->template_config['layout']['margins'] ?? 20 }}mm;
            min-height: 100vh;
        }
        
        .document-container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1, h2, h3 {
            color: {{ $template->template_config['colors']['primary'] ?? '#2563eb' }};
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
            
            .print-button {
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
            }
            
            th, td {
                padding: 0.75rem !important;
                border-bottom: 1px solid #e5e7eb !important;
            }
            
            th {
                background: #f8fafc !important;
                font-weight: 600 !important;
            }
        }
        
        /* Print button styles */
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
            transition: all 0.2s ease;
        }
        
        .print-button:hover {
            background: #5a67d8;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .print-button:active {
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
    <!-- Print Button -->
    <button class="print-button no-print" onclick="window.print()">
        <i class="fas fa-print"></i> Print Document
    </button>
    
    <div class="document-container">
        <div class="template-content">
            @yield('content')
        </div>
    </div>
    
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
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
    </script>
</body>
</html>

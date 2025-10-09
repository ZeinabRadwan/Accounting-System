<?php

// Resolve wkhtmltopdf binary path across common installations
$possiblePdfBinaries = [
    env('WKHTMLTOPDF_BINARY'),                    // explicit env override
    '/opt/homebrew/bin/wkhtmltopdf',              // Apple Silicon (Homebrew)
    '/usr/local/bin/wkhtmltopdf',                 // Intel macOS/Linux (Homebrew)
    '/usr/bin/wkhtmltopdf',                       // Debian/Ubuntu
];

$resolvedPdfBinary = null;
foreach ($possiblePdfBinaries as $candidate) {
    if (!empty($candidate) && file_exists($candidate)) {
        $resolvedPdfBinary = $candidate;
        break;
    }
}

return [
    'pdf' => [
        'enabled' => true,
        'binary'  => $resolvedPdfBinary ?: '/usr/local/bin/wkhtmltopdf',
        'timeout' => false,
        'options' => [
            'encoding' => 'UTF-8',
            'enable-local-file-access' => true,
            'disable-smart-shrinking' => true,
            'print-media-type' => true,
            'no-background' => false,
            'margin-top' => 10,
            'margin-right' => 10,
            'margin-bottom' => 10,
            'margin-left' => 10,
        ],
        'env'     => [],
    ],
    'image' => [
        'enabled' => true,
        'binary'  => env('WKHTMLTOIMAGE_BINARY', '/usr/local/bin/wkhtmltoimage'),
        'timeout' => false,
        'options' => [],
        'env'     => [],
    ],
];



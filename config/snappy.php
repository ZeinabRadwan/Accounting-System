<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Snappy PDF / Image Configuration
    |--------------------------------------------------------------------------
    |
    | This option contains settings for PDF generation.
    |
    | Enabled:
    |
    |    Whether to load PDF / Image generation.
    |
    | Binary:
    |
    |    The file path of the wkhtmltopdf / wkhtmltoimage executable.
    |
    | Timout:
    |
    |    The amount of time to wait (in seconds) before PDF / Image generation is stopped.
    |    Setting this to false disables the timeout (unlimited processing time).
    |
    | Options:
    |
    |    The wkhtmltopdf command options. These are passed directly to wkhtmltopdf.
    |    See https://wkhtmltopdf.org/usage/wkhtmltopdf.txt for all options.
    |
    | Env:
    |
    |    The environment variables to set while running the wkhtmltopdf process.
    |
    */

    'pdf' => [
        'enabled' => true,
        'binary' => (isset($_SERVER['HTTP_HOST']) && (strpos($_SERVER['HTTP_HOST'], 'localhost') !== false || strpos($_SERVER['HTTP_HOST'], '127.0.0.1') !== false))
            ? base_path('vendor/h4cc/wkhtmltopdf-amd64/bin/wkhtmltopdf-amd64')  // Local development - use amd64 for Windows
            : base_path('vendor/h4cc/wkhtmltopdf-amd64/bin/wkhtmltopdf-amd64'), // Production - use amd64
        'timeout' => false,
        'options' => [
            'enable-local-file-access' => true,
            'orientation' => 'portrait',
            'encoding' => 'UTF-8',
        ],
        'env' => [],

    ],

    'image' => [
        'enabled' => true,
        'binary' => env('WKHTML_IMG_BINARY', 'vendor/bin/wkhtmltoimage-amd64'),
        'timeout' => false,
        'options' => [],
        'env' => [],
    ],

    'debug' => true
];

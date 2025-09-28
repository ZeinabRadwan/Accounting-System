<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>@lang('PDF View')</title>
    <style>
        @font-face {
            font-family: 'DINNextLTArabic';
            src: url('{{ public_path('fonts/DINNextLTArabic-Regular-3.ttf') }}') format('truetype');
            font-weight: normal;
            font-style: normal;
        }

        body {
            font-family: 'DINNextLTArabic', "DejaVu Sans", "Helvetica", "Arial", sans-serif;
            font-size: .90em;
            line-height: 1;
        }

        h6,
        .h6,
        h5,
        .h5,
        h4,
        .h4,
        h3,
        .h3,
        h2,
        .h2,
        h1,
        .h1 {
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-weight: 600;
            line-height: 1.25;
            color: #24292d;
        }

        .table-listing {
            font-family: "DejaVu Sans", "Helvetica", "Arial", sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        .table-listing td,
        .table-listing th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        .table-listing tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        .table-listing tr:hover {
            background-color: #ddd;
        }

        .table-listing th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #33a0d9;
            color: white;
        }

        .table-image-preview {
            width: 60px;
            height: 60px;
            border-radius: 4px;
        }

        .no-preview {
            width: 60px;
            height: 60px;
            border-radius: 4px;
            background: rgb(219, 219, 219);
            display: block;
            padding: 0;
            margin-top: -5px;
            text-align: center;
        }

        .no-preview small {
            text-align: center;
        }

        .table-sm th,
        .table-sm td {
            padding: 0.3rem;
        }
    </style>

    @yield('styles')
</head>

<body>
    <div class="container">
        <div class="row table-content">
            @yield('content')
        </div>
    </div>
</body>

</html>

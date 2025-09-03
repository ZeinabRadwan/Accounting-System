@php
    $config = [
        'appName' => config('app.name'),
        'locale' => ($locale = session('locale', config('app.fallback_locale', 'ar'))),
        'locales' => config('app.locales'),
        'githubAuth' => config('services.github.client_id'),
        'isDemoMode' => config('app.is_demo_mode'),
    ];
@endphp
<!DOCTYPE html>
<html lang="{{ session('locale', config('app.fallback_locale', 'ar')) }}" dir="{{ session('locale', config('app.fallback_locale', 'ar')) === 'ar' ? 'rtl' : 'ltr' }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="google" content="notranslate">
    <title>{{ config('app.name') }}</title>
    <link rel="icon" href='{{ global_asset('images/' . config('config.favicon')) }}'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    {!! settings()->get('custom_html') !!}


</head>

<body class="hold-transition layout-footer-fixed" dir="{{ session('locale', config('app.fallback_locale', 'ar')) === 'ar' ? 'rtl' : 'ltr' }}">
    <div id="app"></div>

    {{-- Global configuration object --}}
    <script>
        window.config = @json($config);
    </script>

    {{-- Load the application scripts --}}
    <script src="{{ mix('/js/central.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>



</body>

</html>
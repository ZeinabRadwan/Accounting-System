<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? config('app.name', 'DentalLink') }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=cairo:400,500,600,700|inter:400,500,600,700&display=swap" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="{{ app()->getLocale() === 'ar' ? 'font-arabic' : 'font-sans' }} antialiased bg-slate-100 text-slate-800" x-data>
    <div class="min-h-screen flex">
        {{-- Desktop sidebar --}}
        <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:start-0">
            <x-ui.sidebar />
        </div>

        {{-- Mobile drawer --}}
        <div
            x-show="$store.sidebar.open"
            x-cloak
            class="lg:hidden fixed inset-0 z-40"
            style="display: none;"
        >
            <div class="absolute inset-0 bg-slate-900/40" @click="$store.sidebar.close()"></div>
            <div class="absolute inset-y-0 start-0 w-72 max-w-[85vw] shadow-soft" @click.outside="$store.sidebar.close()">
                <x-ui.sidebar />
            </div>
        </div>

        <div class="flex-1 lg:ps-64 min-w-0 flex flex-col min-h-screen">
            <x-ui.navbar :title="$title ?? __('Dashboard')" />
            <main class="flex-1 p-4 lg:p-6">
                {{ $slot }}
            </main>
        </div>
    </div>

    <x-ui.toast />
</body>
</html>

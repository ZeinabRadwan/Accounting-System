<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? __('Notifications') }} — {{ config('app.name', 'DentalLink') }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=cairo:400,500,600,700|inter:400,500,600,700&display=swap" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="{{ app()->getLocale() === 'ar' ? 'font-arabic' : 'font-sans' }} antialiased bg-slate-100 text-slate-800" x-data>
    <div class="min-h-screen flex flex-col">
        <header class="h-14 shrink-0 bg-white border-b border-slate-200 flex items-center justify-between px-4 gap-3">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm">DL</div>
                <div>
                    <p class="text-sm font-semibold text-slate-900 leading-tight">{{ $title ?? __('Notifications') }}</p>
                    <p class="text-[11px] text-slate-500 leading-tight">DentalLink</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <livewire:notifications.notification-bell />
                <x-ui.locale-switcher />
                <x-ui.button variant="secondary" size="sm" href="{{ route('pos') }}">{{ __('Open POS') }}</x-ui.button>
                <x-ui.user-menu :user="auth()->user()" />
            </div>
        </header>
        <main class="flex-1 p-4 lg:p-6">
            {{ $slot }}
        </main>
    </div>
    <x-ui.toast />
    <x-geofence-check />
</body>
</html>

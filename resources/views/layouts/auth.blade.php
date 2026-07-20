<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? __('Sign in') }} — {{ config('app.name', 'DentalLink') }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=cairo:400,500,600,700|inter:400,500,600,700&display=swap" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="{{ app()->getLocale() === 'ar' ? 'font-arabic' : 'font-sans' }} antialiased min-h-screen bg-slate-100">
    <div class="absolute top-4 end-4 z-20">
        <x-ui.locale-switcher />
    </div>
    <div class="min-h-screen flex">
        <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary-700">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-slate-900"></div>
            <div class="relative z-10 flex flex-col justify-between p-12 text-white w-full">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center font-bold">DL</div>
                    <span class="text-lg font-semibold tracking-tight">DentalLink</span>
                </div>
                <div>
                    <h1 class="text-4xl font-semibold tracking-tight leading-tight">
                        {{ __('Modern POS,') }}<br>{{ __('Inventory & Accounting') }}
                    </h1>
                    <p class="mt-4 text-primary-100 max-w-md text-base">{{ __('Fast cashier workflows, clear inventory control, and clean financial reporting in one place.') }}</p>
                </div>
                <p class="text-sm text-primary-200/80">© {{ date('Y') }} DentalLink</p>
            </div>
        </div>

        <div class="flex-1 flex items-center justify-center p-6 sm:p-10">
            <div class="w-full max-w-md">
                <div class="lg:hidden flex items-center gap-2.5 mb-8">
                    <div class="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm">DL</div>
                    <span class="text-lg font-semibold text-slate-900">DentalLink</span>
                </div>
                <div class="bg-white rounded-xl shadow-card border border-slate-200/80 p-6 sm:p-8">
                    {{ $slot }}
                </div>
            </div>
        </div>
    </div>
    <x-ui.toast />
</body>
</html>

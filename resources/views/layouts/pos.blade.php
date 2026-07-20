<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? __('POS') }} — {{ config('app.name', 'DentalLink') }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=cairo:400,500,600,700|inter:400,500,600,700&display=swap" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="{{ app()->getLocale() === 'ar' ? 'font-arabic' : 'font-sans' }} antialiased bg-slate-100 text-slate-800 overflow-hidden" x-data>
    <div class="h-screen flex flex-col">
        <header class="h-14 shrink-0 bg-white border-b border-slate-200 flex items-center justify-between px-4 gap-3">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm">DL</div>
                <div>
                    <p class="text-sm font-semibold text-slate-900 leading-tight">{{ __('Point of Sale') }}</p>
                    <p class="text-[11px] text-slate-500 leading-tight">{{ __('Cashier mode') }}</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-xl p-2 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 ui-transition"
                    @click="$store.posFx.toggleSound()"
                    :title="$store.posFx.soundOn ? '{{ __('Mute sounds') }}' : '{{ __('Unmute sounds') }}'"
                    :aria-pressed="$store.posFx.soundOn ? 'true' : 'false'"
                >
                    <span x-show="$store.posFx.soundOn">
                        <x-ui.icon name="volume-on" class="w-4 h-4" />
                    </span>
                    <span x-show="! $store.posFx.soundOn" x-cloak>
                        <x-ui.icon name="volume-off" class="w-4 h-4" />
                    </span>
                </button>
                <x-ui.locale-switcher />
                @if (auth()->user()?->canAccessAdminPanel())
                    <x-ui.button variant="secondary" size="sm" href="{{ route('admin.dashboard') }}">
                        <x-ui.icon name="home" class="w-4 h-4" />
                        {{ __('Dashboard') }}
                    </x-ui.button>
                @endif
                <x-ui.user-menu :user="auth()->user()" />
            </div>
        </header>
        <main class="flex-1 min-h-0 overflow-hidden">
            {{ $slot }}
        </main>
    </div>
    <x-ui.toast />
</body>
</html>

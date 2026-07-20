@props(['active' => null])

@php
    $settingsNav = [
        [__('Invoice Settings'), 'admin.settings.invoice'],
        [__('Daily Settings'), 'admin.settings.daily'],
        [__('Permissions'), 'admin.settings.permissions'],
        [__('Daily Visibility'), 'admin.settings.daily_visibility'],
    ];
@endphp

<x-ui.card class="lg:col-span-1 !p-3">
    <nav class="space-y-1">
        @foreach ($settingsNav as $item)
            @php $isActive = $active ? $active === $item[1] : request()->routeIs($item[1]); @endphp
            <a
                href="{{ route($item[1]) }}"
                class="block rounded-xl px-3 py-2.5 text-sm font-medium {{ $isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50' }}"
            >
                {{ $item[0] }}
            </a>
        @endforeach
    </nav>
</x-ui.card>

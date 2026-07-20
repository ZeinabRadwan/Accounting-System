@props([
    'name' => 'drawer',
    'title' => null,
    'side' => 'end',
    'showProperty' => null,
])

@php
    $isStart = in_array($side, ['left', 'start'], true);
    $sideClass = $isStart ? 'start-0' : 'end-0';
    $borderClass = $isStart ? 'border-e' : 'border-s';
    $enterStart = $isStart
        ? 'ltr:-translate-x-full rtl:translate-x-full'
        : 'ltr:translate-x-full rtl:-translate-x-full';
    $leaveEnd = $enterStart;
@endphp

<div
    @if ($showProperty)
        x-data="{ show: $wire.entangle('{{ $showProperty }}') }"
    @else
        x-data="{ show: false }"
    @endif
    x-on:open-drawer.window="if ($event.detail === '{{ $name }}') show = true"
    x-on:close-drawer.window="if ($event.detail === '{{ $name }}') show = false"
    x-on:keydown.escape.window="show = false"
    x-show="show"
    class="relative z-50"
    style="display: none;"
>
    <div x-show="show" x-transition.opacity class="fixed inset-0 bg-slate-900/40" @click="show = false"></div>
    <div
        x-show="show"
        x-transition:enter="transform transition ease-out duration-200"
        x-transition:enter-start="{{ $enterStart }}"
        x-transition:enter-end="translate-x-0"
        x-transition:leave="transform transition ease-in duration-150"
        x-transition:leave-start="translate-x-0"
        x-transition:leave-end="{{ $leaveEnd }}"
        class="fixed inset-y-0 {{ $sideClass }} w-full max-w-md bg-white shadow-soft border-slate-200 {{ $borderClass }} flex flex-col"
    >
        <div class="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <h3 class="text-base font-semibold text-slate-900">{{ $title ?? 'Details' }}</h3>
            <button type="button" @click="show = false" class="text-slate-400 hover:text-slate-600">
                <x-ui.icon name="x" class="w-5 h-5" />
            </button>
        </div>
        <div class="flex-1 overflow-y-auto px-5 py-4">
            {{ $slot }}
        </div>
        @isset($footer)
            <div class="px-5 py-4 border-t border-slate-100 flex justify-end gap-2">
                {{ $footer }}
            </div>
        @endisset
    </div>
</div>

@props([
    'name' => 'modal',
    'title' => null,
    'maxWidth' => 'lg',
    'showProperty' => null,
])

@php
$widths = [
    'sm' => 'max-w-sm',
    'md' => 'max-w-md',
    'lg' => 'max-w-lg',
    'xl' => 'max-w-xl',
    '2xl' => 'max-w-2xl',
];
@endphp

<div
    @if ($showProperty)
        x-data="{ show: $wire.entangle('{{ $showProperty }}') }"
    @else
        x-data="{ show: false }"
    @endif
    x-on:open-modal.window="if ($event.detail === '{{ $name }}') show = true"
    x-on:close-modal.window="if ($event.detail === '{{ $name }}') show = false"
    x-on:keydown.escape.window="show = false"
    x-show="show"
    class="relative z-50"
    style="display: none;"
>
    <div x-show="show" x-transition.opacity class="fixed inset-0 bg-slate-900/40" @click="show = false"></div>
    <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-end sm:items-center justify-center p-4">
            <div
                x-show="show"
                x-transition
                @click.outside="show = false"
                class="w-full {{ $widths[$maxWidth] ?? $widths['lg'] }} bg-white rounded-xl shadow-soft border border-slate-200"
            >
                @if ($title)
                    <div class="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                        <h3 class="text-base font-semibold text-slate-900">{{ $title }}</h3>
                        <button type="button" @click="show = false" class="text-slate-400 hover:text-slate-600">
                            <x-ui.icon name="x" class="w-5 h-5" />
                        </button>
                    </div>
                @endif
                <div class="px-5 py-4">
                    {{ $slot }}
                </div>
                @isset($footer)
                    <div class="px-5 py-4 border-t border-slate-100 bg-slate-50/80 rounded-b-xl flex justify-end gap-2">
                        {{ $footer }}
                    </div>
                @endisset
            </div>
        </div>
    </div>
</div>

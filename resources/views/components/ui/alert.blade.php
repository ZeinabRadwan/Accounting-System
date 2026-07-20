@props([
    'variant' => 'info',
    'title' => null,
    'dismissible' => false,
])

@php
$styles = [
    'info' => 'bg-primary-50 text-primary-800 border-primary-100',
    'success' => 'bg-success-50 text-success-800 border-success-100',
    'warning' => 'bg-warning-50 text-warning-800 border-warning-100',
    'danger' => 'bg-danger-50 text-danger-800 border-danger-100',
];
@endphp

<div
    x-data="{ show: true }"
    x-show="show"
    x-transition
    {{ $attributes->merge(['class' => 'rounded-xl border px-4 py-3 text-sm '.($styles[$variant] ?? $styles['info'])]) }}
>
    <div class="flex items-start gap-3">
        <div class="flex-1">
            @if ($title)
                <p class="font-semibold">{{ $title }}</p>
            @endif
            <div class="{{ $title ? 'mt-0.5' : '' }}">{{ $slot }}</div>
        </div>
        @if ($dismissible)
            <button type="button" @click="show = false" class="opacity-60 hover:opacity-100">
                <x-ui.icon name="x" class="w-4 h-4" />
            </button>
        @endif
    </div>
</div>

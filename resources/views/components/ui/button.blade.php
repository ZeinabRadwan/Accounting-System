@props([
    'variant' => 'primary',
    'size' => 'md',
    'type' => 'button',
    'href' => null,
    'loading' => false,
    'disabled' => false,
])

@php
$base = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl ui-transition disabled:opacity-50 disabled:cursor-not-allowed';
$sizes = [
    'sm' => 'px-3 py-1.5 text-sm',
    'md' => 'px-4 py-2 text-sm',
    'lg' => 'px-5 py-2.5 text-base',
];
$variants = [
    'primary' => 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
    'secondary' => 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm',
    'ghost' => 'bg-transparent text-slate-600 hover:bg-slate-100',
    'danger' => 'bg-danger-600 text-white hover:bg-danger-700 shadow-sm',
    'success' => 'bg-success-600 text-white hover:bg-success-700 shadow-sm',
];
$classes = $base.' '.($sizes[$size] ?? $sizes['md']).' '.($variants[$variant] ?? $variants['primary']);
@endphp

@if ($href)
    <a href="{{ $href }}" {{ $attributes->merge(['class' => $classes]) }}>
        @if ($loading)
            <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
        @endif
        {{ $slot }}
    </a>
@else
    <button type="{{ $type }}" {{ $attributes->merge(['class' => $classes, 'disabled' => $disabled || $loading]) }}>
        @if ($loading)
            <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
        @endif
        {{ $slot }}
    </button>
@endif

@props([
    'variant' => 'slate',
    'size' => 'md',
])

@php
$variants = [
    'slate' => 'bg-slate-100 text-slate-700',
    'primary' => 'bg-primary-50 text-primary-700',
    'success' => 'bg-success-50 text-success-700',
    'warning' => 'bg-warning-50 text-warning-700',
    'danger' => 'bg-danger-50 text-danger-700',
];
$sizes = [
    'sm' => 'px-2 py-0.5 text-xs',
    'md' => 'px-2.5 py-1 text-xs',
];
@endphp

<span {{ $attributes->merge(['class' => 'inline-flex items-center font-medium rounded-lg '.($variants[$variant] ?? $variants['slate']).' '.($sizes[$size] ?? $sizes['md'])]) }}>
    {{ $slot }}
</span>

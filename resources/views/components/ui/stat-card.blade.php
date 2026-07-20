@props([
    'label' => 'Metric',
    'value' => '0',
    'hint' => null,
    'icon' => 'cube',
    'tone' => 'primary',
])

@php
$tones = [
    'primary' => 'bg-primary-50 text-primary-600',
    'success' => 'bg-success-50 text-success-600',
    'warning' => 'bg-warning-50 text-warning-600',
    'danger' => 'bg-danger-50 text-danger-600',
    'slate' => 'bg-slate-100 text-slate-600',
];
@endphp

<x-ui.card class="!p-4">
    <div class="flex items-start justify-between gap-3">
        <div>
            <p class="text-xs font-medium uppercase tracking-wide text-slate-500">{{ $label }}</p>
            <p class="mt-2 text-2xl font-semibold text-slate-900">{{ $value }}</p>
            @if ($hint)
                <p class="mt-1 text-xs text-slate-500">{{ $hint }}</p>
            @endif
        </div>
        <div class="rounded-xl p-2.5 {{ $tones[$tone] ?? $tones['primary'] }}">
            <x-ui.icon :name="$icon" class="w-5 h-5" />
        </div>
    </div>
</x-ui.card>

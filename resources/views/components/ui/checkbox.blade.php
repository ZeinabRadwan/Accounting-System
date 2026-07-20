@props(['label' => null, 'checked' => null])

@php
    $hasWireModel = $attributes->whereStartsWith('wire:model')->isNotEmpty();
@endphp

<label class="inline-flex items-center gap-2 cursor-pointer">
    <input
        type="checkbox"
        @if (! $hasWireModel && $checked !== null)
            @checked($checked)
        @endif
        {{ $attributes->merge(['class' => 'rounded border-slate-300 text-primary-600 shadow-sm focus:ring-primary-500/40']) }}
    />
    @if ($label || $slot->isNotEmpty())
        <span class="text-sm text-slate-700">{{ $label ?? $slot }}</span>
    @endif
</label>

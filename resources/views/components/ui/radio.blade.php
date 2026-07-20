@props(['label' => null, 'checked' => false])

<label class="inline-flex items-center gap-2 cursor-pointer">
    <input
        type="radio"
        @checked($checked)
        {{ $attributes->merge(['class' => 'border-slate-300 text-primary-600 shadow-sm focus:ring-primary-500/40']) }}
    />
    @if ($label || $slot->isNotEmpty())
        <span class="text-sm text-slate-700">{{ $label ?? $slot }}</span>
    @endif
</label>

@props(['label' => null])

<div class="space-y-1.5">
    @if ($label)
        <label class="block text-sm font-medium text-slate-700">{{ $label }}</label>
    @endif
    <input
        type="date"
        {{ $attributes->merge([
            'class' => 'block w-full rounded-xl border-slate-200 bg-white text-sm text-slate-800 shadow-sm ui-focus ui-transition',
        ]) }}
    />
</div>

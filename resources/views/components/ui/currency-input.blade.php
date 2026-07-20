@props(['label' => null, 'prefix' => 'EGP'])

<div class="space-y-1.5">
    @if ($label)
        <label class="block text-sm font-medium text-slate-700">{{ $label }}</label>
    @endif
    <div class="relative">
        <span class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-xs font-medium text-slate-400">{{ $prefix }}</span>
        <input
            type="number"
            step="0.01"
            {{ $attributes->merge([
                'class' => 'block w-full rounded-xl border-slate-200 bg-white ps-12 pe-3 py-2 text-sm text-slate-800 shadow-sm ui-focus ui-transition',
            ]) }}
        />
    </div>
</div>

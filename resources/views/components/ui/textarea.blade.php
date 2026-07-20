@props(['label' => null, 'rows' => 3])

<div class="space-y-1.5">
    @if ($label)
        <label class="block text-sm font-medium text-slate-700">{{ $label }}</label>
    @endif
    <textarea
        rows="{{ $rows }}"
        {{ $attributes->merge([
            'class' => 'block w-full rounded-xl border-slate-200 bg-white text-sm text-slate-800 shadow-sm placeholder:text-slate-400 ui-focus ui-transition',
        ]) }}
    >{{ $slot }}</textarea>
</div>

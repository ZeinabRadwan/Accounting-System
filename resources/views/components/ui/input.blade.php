@props([
    'label' => null,
    'type' => 'text',
    'error' => null,
])

<div {{ $attributes->only('class')->merge(['class' => 'space-y-1.5']) }}>
    @if ($label)
        <label class="block text-sm font-medium text-slate-700">{{ $label }}</label>
    @endif
    <input
        type="{{ $type }}"
        {{ $attributes->except('class')->merge([
            'class' => 'block w-full rounded-xl border-slate-200 bg-white text-sm text-slate-800 shadow-sm placeholder:text-slate-400 ui-focus ui-transition'.($error ? ' border-danger-500' : ''),
        ]) }}
    />
    @if ($error)
        <p class="text-xs text-danger-600">{{ $error }}</p>
    @endif
</div>

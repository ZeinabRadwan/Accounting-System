@props(['label' => null, 'error' => null])

<div class="space-y-1.5">
    @if ($label)
        <label class="block text-sm font-medium text-slate-700">{{ $label }}</label>
    @endif
    <select
        {{ $attributes->merge([
            'class' => 'block w-full rounded-xl border-slate-200 bg-white text-sm text-slate-800 shadow-sm ui-focus ui-transition'.($error ? ' border-danger-500' : ''),
        ]) }}
    >
        {{ $slot }}
    </select>
    @if ($error)
        <p class="text-xs text-danger-600">{{ $error }}</p>
    @endif
</div>

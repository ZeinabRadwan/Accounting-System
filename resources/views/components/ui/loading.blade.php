@props(['label' => 'Loading...'])

<div {{ $attributes->merge(['class' => 'flex items-center justify-center gap-3 py-12 text-slate-500']) }}>
    <svg class="animate-spin h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
    <span class="text-sm">{{ $label }}</span>
</div>

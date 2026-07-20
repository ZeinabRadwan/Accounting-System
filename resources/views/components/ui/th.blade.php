@props(['sortable' => false])

<th {{ $attributes->merge(['class' => 'px-4 py-3 text-start text-xs font-semibold uppercase tracking-wide text-slate-500 whitespace-nowrap']) }}>
    @if ($sortable)
        <span class="inline-flex items-center gap-1">
            <span>{{ $slot }}</span>
            <svg class="ms-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
        </span>
    @else
        {{ $slot }}
    @endif
</th>

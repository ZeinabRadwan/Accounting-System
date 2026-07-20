@props(['lines' => 3])

<div {{ $attributes->merge(['class' => 'animate-pulse space-y-3']) }}>
    @for ($i = 0; $i < $lines; $i++)
        <div class="h-4 rounded-lg bg-slate-200 {{ $i === 0 ? 'w-1/3' : ($i === $lines - 1 ? 'w-2/3' : 'w-full') }}"></div>
    @endfor
</div>

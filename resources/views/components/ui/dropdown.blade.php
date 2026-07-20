@props(['align' => 'end'])

@php
    $alignClass = match ($align) {
        'left', 'start' => 'start-0',
        default => 'end-0',
    };
@endphp

<div x-data="{ open: false }" class="relative inline-block text-start" @click.outside="open = false">
    <div @click="open = !open">
        {{ $trigger }}
    </div>
    <div
        x-show="open"
        x-transition
        class="absolute z-40 mt-2 w-48 rounded-xl bg-white shadow-soft border border-slate-200 py-1 {{ $alignClass }}"
        style="display: none;"
    >
        {{ $slot }}
    </div>
</div>

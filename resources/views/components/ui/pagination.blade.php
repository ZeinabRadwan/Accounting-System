@props([
    'from' => 1,
    'to' => 10,
    'total' => 100,
    'livewire' => false,
    'onFirstPage' => true,
    'hasMorePages' => false,
    'hasPages' => false,
])

<div {{ $attributes->merge(['class' => 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 py-3']) }}>
    <p class="text-sm text-slate-500 text-start">
        {{ __('Showing') }}
        <span class="font-medium text-slate-700">{{ $from }}</span>–
        <span class="font-medium text-slate-700">{{ $to }}</span>
        {{ __('of') }}
        <span class="font-medium text-slate-700">{{ $total }}</span>
    </p>
    <div class="flex items-center gap-1">
        @if ($livewire)
            <x-ui.button variant="secondary" size="sm" wire:click="previousPage" :disabled="$onFirstPage || ! $hasPages">
                <x-ui.icon name="chevron-left" class="w-4 h-4 rtl:rotate-180" />
            </x-ui.button>
            <x-ui.button variant="primary" size="sm">{{ request()->integer('page', 1) ?: 1 }}</x-ui.button>
            <x-ui.button variant="secondary" size="sm" wire:click="nextPage" :disabled="! $hasMorePages">
                <x-ui.icon name="chevron-right" class="w-4 h-4 rtl:rotate-180" />
            </x-ui.button>
        @else
            <x-ui.button variant="secondary" size="sm" disabled>
                <x-ui.icon name="chevron-left" class="w-4 h-4 rtl:rotate-180" />
            </x-ui.button>
            <x-ui.button variant="primary" size="sm">1</x-ui.button>
            <x-ui.button variant="secondary" size="sm">2</x-ui.button>
            <x-ui.button variant="secondary" size="sm">3</x-ui.button>
            <x-ui.button variant="secondary" size="sm">
                <x-ui.icon name="chevron-right" class="w-4 h-4 rtl:rotate-180" />
            </x-ui.button>
        @endif
    </div>
</div>

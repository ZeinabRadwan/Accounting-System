@props([
    'title' => 'No results',
    'description' => 'Try adjusting your filters or add a new record.',
    'icon' => 'archive',
])

<div {{ $attributes->merge(['class' => 'flex flex-col items-center justify-center py-16 px-6 text-center']) }}>
    <div class="rounded-xl bg-slate-100 p-3 text-slate-400 mb-4">
        <x-ui.icon :name="$icon" class="w-8 h-8" />
    </div>
    <h3 class="text-base font-semibold text-slate-800">{{ $title }}</h3>
    <p class="mt-1 text-sm text-slate-500 max-w-sm">{{ $description }}</p>
    @if ($slot->isNotEmpty())
        <div class="mt-4">{{ $slot }}</div>
    @endif
</div>

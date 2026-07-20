@props(['name' => null])

<div class="flex items-center gap-1.5 text-sm">
    @foreach ($items ?? [] as $i => $item)
        @if ($i > 0)
            <x-ui.icon name="chevron-right" class="w-3.5 h-3.5 text-slate-300" />
        @endif
        @if (!empty($item['href']) && $i < count($items) - 1)
            <a href="{{ $item['href'] }}" class="text-slate-500 hover:text-primary-600">{{ $item['label'] }}</a>
        @else
            <span class="text-slate-800 font-medium">{{ $item['label'] }}</span>
        @endif
    @endforeach
    {{ $slot }}
</div>

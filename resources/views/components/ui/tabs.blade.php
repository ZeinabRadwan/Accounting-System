@props(['tabs' => []])

<div x-data="{ active: '{{ $tabs[0]['id'] ?? 'tab-1' }}' }">
    <div class="flex gap-1 border-b border-slate-200 mb-4 overflow-x-auto">
        @foreach ($tabs as $tab)
            <button
                type="button"
                @click="active = '{{ $tab['id'] }}'"
                :class="active === '{{ $tab['id'] }}' ? 'border-primary-600 text-primary-700' : 'border-transparent text-slate-500 hover:text-slate-700'"
                class="px-4 py-2.5 text-sm font-medium border-b-2 whitespace-nowrap ui-transition"
            >
                {{ $tab['label'] }}
            </button>
        @endforeach
    </div>
    {{ $slot }}
</div>

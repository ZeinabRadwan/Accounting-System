@props(['label' => null, 'options' => []])

<div
    x-data="{ open: false, selected: [] }"
    class="relative space-y-1.5"
    @click.outside="open = false"
>
    @if ($label)
        <label class="block text-sm font-medium text-slate-700">{{ $label }}</label>
    @endif
    <button
        type="button"
        @click="open = !open"
        class="w-full flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-start shadow-sm ui-focus"
    >
        <span class="text-slate-500" x-text="selected.length ? selected.join(', ') : 'Select...'"></span>
        <x-ui.icon name="chevron-down" class="w-4 h-4 text-slate-400" />
    </button>
    <div x-show="open" x-transition class="absolute z-30 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-soft p-2 max-h-48 overflow-y-auto" style="display:none;">
        @foreach ($options as $option)
            <label class="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer">
                <input type="checkbox" value="{{ $option }}" class="rounded border-slate-300 text-primary-600" @change="selected.includes('{{ $option }}') ? selected = selected.filter(i => i !== '{{ $option }}') : selected.push('{{ $option }}')" />
                <span class="text-sm text-slate-700">{{ $option }}</span>
            </label>
        @endforeach
    </div>
</div>

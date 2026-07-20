@props(['placeholder' => 'Search...'])

<div {{ $attributes->only('class')->merge(['class' => 'relative']) }}>
    <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-slate-400">
        <x-ui.icon name="search" class="w-4 h-4" />
    </div>
    <input
        type="search"
        placeholder="{{ $placeholder }}"
        {{ $attributes->except('class')->merge([
            'class' => 'block w-full rounded-xl border-slate-200 bg-white ps-10 pe-3 py-2 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 ui-focus ui-transition',
        ]) }}
    />
</div>

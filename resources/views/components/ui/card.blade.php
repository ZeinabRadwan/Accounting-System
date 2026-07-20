@props(['padding' => true])

<div {{ $attributes->merge(['class' => 'bg-white rounded-xl shadow-card border border-slate-200/80'.($padding ? ' p-5' : '')]) }}>
    {{ $slot }}
</div>

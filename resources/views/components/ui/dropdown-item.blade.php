@props(['href' => '#', 'danger' => false])

<a
    href="{{ $href }}"
    {{ $attributes->merge([
        'class' => 'flex items-center gap-2 px-3 py-2 text-sm ui-transition '.($danger ? 'text-danger-600 hover:bg-danger-50' : 'text-slate-700 hover:bg-slate-50'),
    ]) }}
>
    {{ $slot }}
</a>

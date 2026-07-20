@props(['compact' => false])

@php
    $locale = app()->getLocale();
@endphp

<div {{ $attributes->merge(['class' => 'inline-flex items-center rounded-xl border border-slate-200 bg-white p-0.5 text-xs font-medium']) }}>
    <a
        href="{{ route('locale.switch', 'en') }}"
        class="rounded-lg px-2.5 py-1.5 ui-transition {{ $locale === 'en' ? 'bg-primary-600 text-white' : 'text-slate-600 hover:bg-slate-50' }}"
        @if ($locale === 'en') aria-current="true" @endif
    >EN</a>
    <a
        href="{{ route('locale.switch', 'ar') }}"
        class="rounded-lg px-2.5 py-1.5 ui-transition {{ $locale === 'ar' ? 'bg-primary-600 text-white' : 'text-slate-600 hover:bg-slate-50' }}"
        @if ($locale === 'ar') aria-current="true" @endif
    >ع</a>
</div>

@php
    $isAdmin = auth()->user()?->canAccessAdminPanel() ?? false;
@endphp

@if ($isAdmin)
    <x-admin-layout :title="__('Profile')">
        @include('profile._content')
    </x-admin-layout>
@else
    <x-shell-layout :title="__('Profile')">
        @include('profile._content')
    </x-shell-layout>
@endif

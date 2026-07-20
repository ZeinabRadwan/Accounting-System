@props([
    'name' => 'Admin User',
    'email' => 'admin@dentallink.co',
    'src' => null,
    'user' => null,
])

@php
    if ($user) {
        $name = $user->name ?? $name;
        $email = $user->email ?? $email;
        $src = $user->profile_photo_url ?? $src;
    }
@endphp

<x-ui.dropdown align="right">
    <x-slot:trigger>
        <button type="button" class="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-slate-100 ui-transition">
            <x-ui.avatar :name="$name" :src="$src" size="sm" />
            <div class="hidden sm:block text-start">
                <p class="text-sm font-medium text-slate-800 leading-tight">{{ $name }}</p>
                <p class="text-xs text-slate-500 leading-tight">{{ $email }}</p>
            </div>
            <x-ui.icon name="chevron-down" class="w-4 h-4 text-slate-400" />
        </button>
    </x-slot:trigger>

    <x-ui.dropdown-item href="{{ route('profile') }}">{{ __('Profile') }}</x-ui.dropdown-item>
    @if (auth()->user()?->canAccessAdminPanel())
        <x-ui.dropdown-item href="{{ route('admin.settings.invoice') }}">{{ __('Settings') }}</x-ui.dropdown-item>
    @endif
    <form method="POST" action="{{ route('logout') }}">
        @csrf
        <button type="submit" class="w-full flex items-center gap-2 px-3 py-2 text-sm text-danger-600 hover:bg-danger-50">
            <x-ui.icon name="logout" class="w-4 h-4" />
            {{ __('Log out') }}
        </button>
    </form>
</x-ui.dropdown>

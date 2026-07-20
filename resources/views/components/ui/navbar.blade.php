<header class="sticky top-0 z-30 h-16 bg-white/90 backdrop-blur border-b border-slate-200 flex items-center justify-between gap-4 px-4 lg:px-6">
    <div class="flex items-center gap-3 min-w-0">
        <button type="button" class="lg:hidden rounded-xl p-2 text-slate-600 hover:bg-slate-100" @click="$store.sidebar.toggle()">
            <x-ui.icon name="menu" class="w-5 h-5" />
        </button>
        <div class="min-w-0">
            @isset($breadcrumb)
                {{ $breadcrumb }}
            @else
                <p class="text-sm font-medium text-slate-800 truncate">{{ $title ?? __('Dashboard') }}</p>
            @endisset
        </div>
    </div>

    <div class="flex items-center gap-2">
        <div class="hidden md:block w-56">
            <x-ui.search placeholder="{{ __('Search...') }}" />
        </div>
        <x-ui.notifications-menu />
        <x-ui.locale-switcher />
        <x-ui.user-menu :user="auth()->user()" />
    </div>
</header>

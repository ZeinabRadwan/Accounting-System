@php
    $notifications = auth()->check()
        ? auth()->user()->notifications()->latest()->limit(8)->get()
        : collect();
    $unreadCount = auth()->check() ? auth()->user()->unreadNotifications()->count() : 0;
@endphp

@if (auth()->check())
    <div x-data="{ open: false }" class="relative" @click.outside="open = false">
        <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-xl p-2 text-slate-600 hover:bg-slate-100 ui-transition"
            @click="open = !open"
        >
            <x-ui.icon name="bell" class="w-5 h-5" />
            @if ($unreadCount > 0)
                <span class="absolute -top-1 -end-1 min-w-5 h-5 px-1 rounded-full bg-danger-600 text-white text-[10px] font-semibold flex items-center justify-center">
                    {{ $unreadCount > 99 ? '99+' : $unreadCount }}
                </span>
            @endif
        </button>

        <div
            x-show="open"
            x-transition
            class="absolute end-0 z-40 mt-2 w-80 rounded-xl bg-white shadow-soft border border-slate-200 overflow-hidden"
            style="display: none;"
        >
            <div class="px-3 py-2 border-b border-slate-100 text-sm font-semibold text-slate-900">
                {{ __('Notifications') }}
            </div>
            <div class="max-h-96 overflow-y-auto">
                @forelse ($notifications as $notification)
                    <a
                        href="{{ data_get($notification->data, 'url', '#') }}"
                        class="block px-3 py-3 border-b border-slate-100 hover:bg-slate-50"
                    >
                        <div class="flex items-start justify-between gap-3">
                            <div class="min-w-0">
                                <p class="text-sm font-medium text-slate-900">{{ data_get($notification->data, 'title', __('Notification')) }}</p>
                                <p class="mt-1 text-xs text-slate-500">
                                    {{ data_get($notification->data, 'closing_datetime') }}
                                    @if (data_get($notification->data, 'net_profit') !== null)
                                        · {{ __('Net Profit') }}: EGP {{ number_format((float) data_get($notification->data, 'net_profit', 0), 2) }}
                                    @endif
                                </p>
                                @if (is_array(data_get($notification->data, 'treasuries')))
                                    <div class="mt-2 space-y-1">
                                        @foreach (data_get($notification->data, 'treasuries', []) as $treasury)
                                            <p class="text-[11px] text-slate-500">
                                                {{ $treasury['treasury_name'] ?? '' }}:
                                                EGP {{ number_format((float) ($treasury['closing_balance'] ?? 0), 2) }}
                                            </p>
                                        @endforeach
                                    </div>
                                @endif
                            </div>
                            @if (is_null($notification->read_at))
                                <span class="mt-1 w-2 h-2 rounded-full bg-primary-500 shrink-0"></span>
                            @endif
                        </div>
                    </a>
                @empty
                    <div class="px-3 py-6 text-sm text-slate-500 text-center">{{ __('No notifications yet.') }}</div>
                @endforelse
            </div>
        </div>
    </div>
@endif

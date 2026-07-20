<div
    wire:poll.30s="poll"
    x-data="{ open: false }"
    class="relative"
    @click.outside="open = false"
>
    <button
        type="button"
        class="relative inline-flex items-center justify-center rounded-xl p-2 text-slate-600 hover:bg-slate-100 ui-transition"
        @click="open = !open"
        aria-label="{{ __('Notifications') }}"
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
        class="absolute end-0 z-40 mt-2 w-[22rem] max-w-[90vw] rounded-xl bg-white shadow-soft border border-slate-200 overflow-hidden"
        style="display: none;"
    >
        <div class="px-3 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2">
            <div>
                <p class="text-sm font-semibold text-slate-900">{{ __('Notifications') }}</p>
                <p class="text-[11px] text-slate-500">{{ $unreadCount }} {{ __('Unread') }}</p>
            </div>
            @if ($unreadCount > 0)
                <button type="button" wire:click="markAllAsRead" class="text-xs font-medium text-primary-600 hover:text-primary-700">
                    {{ __('Mark All as Read') }}
                </button>
            @endif
        </div>

        <div class="max-h-96 overflow-y-auto">
            @forelse ($notifications as $notification)
                @php
                    $data = $notification->data ?? [];
                    $tone = $data['type'] ?? 'info';
                    $toneClass = match ($tone) {
                        'success' => 'bg-success-50 text-success-600',
                        'warning' => 'bg-warning-50 text-warning-600',
                        'error' => 'bg-danger-50 text-danger-600',
                        default => 'bg-primary-50 text-primary-600',
                    };
                    $isUnread = is_null($notification->read_at);
                @endphp
                <button
                    type="button"
                    wire:click="open('{{ $notification->id }}')"
                    class="w-full text-start px-3 py-3 border-b border-slate-100 hover:bg-slate-50 {{ $isUnread ? 'bg-primary-50/30' : '' }}"
                >
                    <div class="flex items-start gap-3">
                        <div class="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center {{ $toneClass }}">
                            <x-ui.icon :name="$data['icon'] ?? 'bell'" class="w-4 h-4" />
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex items-start justify-between gap-2">
                                <p class="text-sm font-medium text-slate-900 truncate">{{ $data['title'] ?? __('Notification') }}</p>
                                @if ($isUnread)
                                    <span class="mt-1.5 w-2 h-2 rounded-full bg-primary-500 shrink-0"></span>
                                @endif
                            </div>
                            <p class="mt-0.5 text-xs text-slate-500 line-clamp-2">{{ $data['body'] ?? $data['description'] ?? '' }}</p>
                            <div class="mt-1.5 flex items-center justify-between gap-2">
                                <span class="text-[11px] text-slate-400">{{ $notification->created_at?->diffForHumans() }}</span>
                                @if ($isUnread)
                                    <span
                                        wire:click.stop="markAsRead('{{ $notification->id }}')"
                                        class="text-[11px] font-medium text-primary-600 hover:text-primary-700"
                                    >{{ __('Mark as Read') }}</span>
                                @endif
                            </div>
                        </div>
                    </div>
                </button>
            @empty
                <div class="px-3 py-8 text-sm text-slate-500 text-center">{{ __('No notifications yet.') }}</div>
            @endforelse
        </div>

        @if ($canViewAll)
            <div class="border-t border-slate-100 px-3 py-2.5 bg-slate-50/70">
                <a href="{{ $viewAllUrl }}" class="block text-center text-sm font-medium text-primary-600 hover:text-primary-700">
                    {{ __('View All Notifications') }}
                </a>
            </div>
        @endif
    </div>
</div>

<div wire:poll.45s>
    <x-ui.page-header title="{{ __('Notifications') }}" subtitle="{{ __('Your role-based activity alerts.') }}">
        @if ($unreadCount > 0)
            <x-ui.button variant="secondary" wire:click="markAllAsRead">{{ __('Mark All as Read') }}</x-ui.button>
        @endif
        @if (auth()->user()?->isSuperAdmin())
            <x-ui.button href="{{ route('admin.settings.notifications') }}">{{ __('Notification Settings') }}</x-ui.button>
        @endif
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Unread') }}" :value="(string) $unreadCount" icon="bell" tone="primary" />
        <x-ui.stat-card label="{{ __('Total') }}" :value="(string) $notifications->total()" icon="archive" tone="slate" />
        <div class="sm:col-span-1 flex items-end">
            <x-ui.select wire:model.live="filter" label="{{ __('Filter') }}">
                <option value="all">{{ __('All') }}</option>
                <option value="unread">{{ __('Unread') }}</option>
                <option value="read">{{ __('Read') }}</option>
            </x-ui.select>
        </div>
    </div>

    <x-ui.card class="!p-0 overflow-hidden">
        <ul class="divide-y divide-slate-100">
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
                <li class="p-4 {{ $isUnread ? 'bg-primary-50/20' : 'bg-white' }}">
                    <div class="flex items-start gap-3">
                        <div class="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center {{ $toneClass }}">
                            <x-ui.icon :name="$data['icon'] ?? 'bell'" class="w-5 h-5" />
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="flex flex-wrap items-start justify-between gap-2">
                                <div class="min-w-0">
                                    <p class="text-sm font-semibold text-slate-900">{{ $data['title'] ?? __('Notification') }}</p>
                                    <p class="mt-1 text-sm text-slate-600">{{ $data['body'] ?? $data['description'] ?? '' }}</p>
                                    <div class="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                        <span>{{ $notification->created_at?->format('Y-m-d H:i') }}</span>
                                        <span>·</span>
                                        <span>{{ $notification->created_at?->diffForHumans() }}</span>
                                        @if (! empty($data['module']))
                                            <span>·</span>
                                            <span class="uppercase tracking-wide">{{ $data['module'] }}</span>
                                        @endif
                                        @if (! empty($data['type']))
                                            <span>·</span>
                                            <span class="capitalize">{{ __($data['type']) }}</span>
                                        @endif
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 shrink-0">
                                    @if ($isUnread)
                                        <x-ui.button size="sm" variant="secondary" wire:click="markAsRead('{{ $notification->id }}')">
                                            {{ __('Mark as Read') }}
                                        </x-ui.button>
                                    @endif
                                    @if (! empty($data['url']))
                                        <x-ui.button size="sm" wire:click="open('{{ $notification->id }}')">
                                            {{ __('Open') }}
                                        </x-ui.button>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            @empty
                <li class="p-10">
                    <x-ui.empty-state
                        title="{{ __('No notifications yet.') }}"
                        description="{{ __('Alerts relevant to your role will appear here.') }}"
                        icon="bell"
                    />
                </li>
            @endforelse
        </ul>
    </x-ui.card>

    <div class="mt-4">
        <x-ui.pagination
            :from="$notifications->firstItem() ?? 0"
            :to="$notifications->lastItem() ?? 0"
            :total="$notifications->total()"
            livewire
            :has-pages="$notifications->hasPages()"
            :on-first-page="$notifications->onFirstPage()"
            :has-more-pages="$notifications->hasMorePages()"
        />
    </div>
</div>

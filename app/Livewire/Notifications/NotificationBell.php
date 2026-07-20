<?php

namespace App\Livewire\Notifications;

use App\Domain\Notifications\Services\SystemNotifier;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class NotificationBell extends Component
{
    public int $limit = 8;

    public function markAsRead(string $id): void
    {
        $notification = Auth::user()?->notifications()->where('id', $id)->first();
        $notification?->markAsRead();
    }

    public function markAllAsRead(): void
    {
        Auth::user()?->unreadNotifications->markAsRead();
    }

    public function open(string $id): void
    {
        $notification = Auth::user()?->notifications()->where('id', $id)->first();
        if (! $notification) {
            return;
        }

        $notification->markAsRead();
        $url = data_get($notification->data, 'url');

        if (is_string($url) && $url !== '') {
            $this->redirect($url);
        }
    }

    public function poll(SystemNotifier $notifier): void
    {
        $this->checkSessionExpiry($notifier);
    }

    public function checkSessionExpiry(SystemNotifier $notifier): void
    {
        $user = Auth::user();
        if (! $user?->isSales()) {
            return;
        }

        $lifetimeMinutes = (int) config('session.lifetime', 120);
        $startedAt = session('auth_session_started_at');
        if (! $startedAt) {
            session(['auth_session_started_at' => now()->timestamp]);

            return;
        }

        $elapsed = now()->timestamp - (int) $startedAt;
        $remaining = ($lifetimeMinutes * 60) - $elapsed;

        if ($remaining > 0 && $remaining <= 600) {
            $notifier->sessionExpiring($user, max(1, (int) ceil($remaining / 60)));
        }
    }

    public function render(): View
    {
        $user = Auth::user();

        if ($user && ! session()->has('auth_session_started_at')) {
            session(['auth_session_started_at' => now()->timestamp]);
        }

        $notifications = $user
            ? $user->notifications()->latest()->limit($this->limit)->get()
            : collect();

        $unreadCount = $user ? $user->unreadNotifications()->count() : 0;

        return view('livewire.notifications.notification-bell', [
            'notifications' => $notifications,
            'unreadCount' => $unreadCount,
            'canViewAll' => (bool) $user,
            'viewAllUrl' => route('notifications.index'),
        ]);
    }
}

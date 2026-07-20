<?php

namespace App\Livewire\Notifications;

use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class NotificationsIndex extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $filter = 'all';

    public function updatedFilter(): void
    {
        $this->resetPage();
    }

    public function markAsRead(string $id): void
    {
        Auth::user()?->notifications()->where('id', $id)->first()?->markAsRead();
    }

    public function markAllAsRead(): void
    {
        Auth::user()?->unreadNotifications->markAsRead();
        $this->toast('All notifications marked as read.');
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

    public function render(): View
    {
        $user = Auth::user();
        abort_unless($user, 403);

        $query = $user->notifications()->latest();
        if ($this->filter === 'unread') {
            $query->whereNull('read_at');
        } elseif ($this->filter === 'read') {
            $query->whereNotNull('read_at');
        }

        $notifications = $query->paginate(20);

        if ($user->canAccessAdminPanel()) {
            return $this->adminView('livewire.notifications.notifications-index', [
                'notifications' => $notifications,
                'unreadCount' => $user->unreadNotifications()->count(),
            ], 'Notifications');
        }

        return view('livewire.notifications.notifications-index', [
            'notifications' => $notifications,
            'unreadCount' => $user->unreadNotifications()->count(),
        ])->layout('layouts.notifications', ['title' => __('Notifications')]);
    }
}

<?php

namespace App\Livewire\Admin\Settings;

use App\Domain\Notifications\Enums\NotificationEvent;
use App\Domain\Notifications\Services\NotificationSettingsService;
use App\Domain\Notifications\Services\SystemNotifier;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class NotificationSettings extends Component
{
    use InteractsWithAdminLayout;

    /** @var array<string, bool> */
    public array $events = [];

    public float $low_stock_threshold = 10;

    public float $large_treasury_threshold = 10000;

    public function mount(NotificationSettingsService $settings): void
    {
        abort_unless(auth()->user()?->isSuperAdmin(), 403);

        $all = $settings->all();
        $this->events = $all['events'];
        $this->low_stock_threshold = $all['low_stock_threshold'];
        $this->large_treasury_threshold = $all['large_treasury_threshold'];
    }

    public function save(NotificationSettingsService $settings, SystemNotifier $notifier): void
    {
        abort_unless(auth()->user()?->isSuperAdmin(), 403);

        $validated = $this->validate([
            'events' => ['array'],
            'low_stock_threshold' => ['required', 'numeric', 'min:0', 'max:100000'],
            'large_treasury_threshold' => ['required', 'numeric', 'min:0', 'max:100000000'],
        ]);

        $settings->save(
            collect(NotificationEvent::configurable())
                ->mapWithKeys(fn (NotificationEvent $event) => [
                    $event->value => (bool) ($this->events[$event->value] ?? false),
                ])
                ->all(),
            (float) $validated['low_stock_threshold'],
            (float) $validated['large_treasury_threshold'],
            auth()->id(),
        );

        $notifier->settingsChanged('Notification settings');
        $this->toast('Notification settings saved.');
    }

    public function render(): View
    {
        $grouped = collect(NotificationEvent::configurable())
            ->groupBy(fn (NotificationEvent $e) => $e->module());

        return $this->adminView('livewire.admin.settings.notification-settings', [
            'grouped' => $grouped,
        ], 'Notification Settings');
    }
}

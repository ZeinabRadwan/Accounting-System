<?php

namespace App\Livewire\Admin\Reports;

use App\Domain\Closing\Models\DailyClosing;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class DailyClosingShow extends Component
{
    use InteractsWithAdminLayout;

    public DailyClosing $closing;

    public function mount(DailyClosing $closing): void
    {
        abort_unless(auth()->user()?->isSuperAdmin(), 403);

        $this->closing = $closing;

        auth()->user()?->unreadNotifications()
            ->where(function ($q) use ($closing) {
                $q->where('data->closing_id', $closing->id)
                    ->orWhere('data->meta->closing_id', $closing->id)
                    ->orWhere('data->fingerprint', 'daily_closing|'.$closing->id);
            })
            ->update(['read_at' => now()]);
    }

    public function render(): View
    {
        $counts = $this->closing->counts();
        $treasuries = $this->closing->treasuries();

        return $this->adminView('livewire.admin.reports.daily-closing-show', [
            'counts' => $counts,
            'treasuries' => $treasuries,
            'treasuryClosingTotal' => collect($treasuries)->sum('closing_balance'),
        ], 'Daily Closing');
    }
}

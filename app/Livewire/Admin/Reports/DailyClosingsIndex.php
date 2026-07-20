<?php

namespace App\Livewire\Admin\Reports;

use App\Domain\Closing\Models\DailyClosing;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Livewire\Component;
use Livewire\WithPagination;

class DailyClosingsIndex extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public function mount(): void
    {
        abort_unless(auth()->user()?->isSuperAdmin(), 403);
    }

    public function render(): View
    {
        $closings = DailyClosing::query()
            ->orderByDesc('closing_datetime')
            ->paginate(15);

        return $this->adminView('livewire.admin.reports.daily-closings-index', [
            'closings' => $closings,
            'latestClosing' => DailyClosing::query()->latest('closing_datetime')->first(),
        ], 'Daily Closings');
    }
}

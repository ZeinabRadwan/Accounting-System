<?php

namespace App\Livewire\Admin\Reports;

use App\Domain\Reports\Services\TreasuryReportService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class TreasuryReport extends Component
{
    use InteractsWithAdminLayout;

    public function render(TreasuryReportService $service): View
    {
        $rows = $service->dataset();

        return $this->adminView('livewire.admin.reports.treasury', [
            'rows' => $rows,
            'totalBalance' => $rows->sum('current_balance'),
            'totalIncome' => $rows->sum('total_income'),
            'totalExpenses' => $rows->sum('total_expenses'),
        ], 'Treasury Report');
    }
}

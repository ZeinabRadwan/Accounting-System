<?php

namespace App\Livewire\Admin\Reports;

use App\Domain\Branch\Models\Branch;
use App\Domain\Inventory\Services\InventoryAlertService;
use App\Domain\Product\Models\Category;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class InventoryAlertsReport extends Component
{
    use InteractsWithAdminLayout;

    public string $filter_branch_id = '';

    public string $filter_category_id = '';

    public string $filter_status = '';

    public function render(InventoryAlertService $service): View
    {
        $branchId = $this->filter_branch_id !== '' ? (int) $this->filter_branch_id : null;
        $categoryId = $this->filter_category_id !== '' ? (int) $this->filter_category_id : null;
        $status = $this->filter_status !== '' ? $this->filter_status : null;

        $report = $service->report($branchId, $categoryId, $status);

        return $this->adminView('livewire.admin.reports.inventory-alerts', [
            'report' => $report,
            'branches' => Branch::query()->orderBy('name')->get(['id', 'name']),
            'categories' => Category::query()->where('is_active', true)->orderBy('name')->get(['id', 'name']),
        ], 'Inventory Alerts Report');
    }
}

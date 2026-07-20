<?php

namespace App\Livewire\Admin\Inventory;

use App\Domain\Branch\Models\Branch;
use App\Domain\Inventory\Services\InventoryAlertService;
use App\Domain\Product\Models\Category;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Livewire\Component;
use Livewire\WithPagination;

class InventoryAlerts extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';

    public string $filter_branch_id = '';

    public string $filter_category_id = '';

    public string $filter_status = '';

    protected $queryString = [
        'search' => ['except' => ''],
        'filter_branch_id' => ['except' => '', 'as' => 'branch'],
        'filter_category_id' => ['except' => '', 'as' => 'category'],
        'filter_status' => ['except' => '', 'as' => 'status'],
    ];

    public function mount(): void
    {
        $status = request()->query('status');
        if (in_array($status, [InventoryAlertService::STATUS_LOW, InventoryAlertService::STATUS_OUT], true)) {
            $this->filter_status = $status;
        }
    }

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterBranchId(): void
    {
        $this->resetPage();
    }

    public function updatedFilterCategoryId(): void
    {
        $this->resetPage();
    }

    public function updatedFilterStatus(): void
    {
        $this->resetPage();
    }

    public function render(InventoryAlertService $service): View
    {
        $branchId = $this->filter_branch_id !== '' ? (int) $this->filter_branch_id : null;
        $categoryId = $this->filter_category_id !== '' ? (int) $this->filter_category_id : null;
        $status = $this->filter_status !== '' ? $this->filter_status : null;

        $alerts = $service->paginateAlerts(
            $branchId,
            $categoryId,
            $status,
            $this->search !== '' ? $this->search : null,
            20,
        );

        $counts = $service->counts($branchId);

        return $this->adminView('livewire.admin.inventory.inventory-alerts', [
            'alerts' => $alerts,
            'counts' => $counts,
            'branches' => Branch::query()->orderBy('name')->get(['id', 'name']),
            'categories' => Category::query()->where('is_active', true)->orderBy('name')->get(['id', 'name']),
        ], 'Inventory Alerts');
    }
}

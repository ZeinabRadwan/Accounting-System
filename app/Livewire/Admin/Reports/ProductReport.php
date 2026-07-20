<?php

namespace App\Livewire\Admin\Reports;

use App\Livewire\Concerns\InteractsWithAdminLayout;

use App\Domain\Reports\Services\ProductReportService;
use Illuminate\Contracts\View\View;
use Livewire\Component;
use Livewire\WithPagination;

class ProductReport extends Component
{
    use InteractsWithAdminLayout;

    use WithPagination;

    public ?int $branch_id = null;
    public ?int $product_id = null;
    public ?string $date_from = null;
    public ?string $date_to = null;

    public function render(ProductReportService $service): View
    {
        $data = $service->dataset($this->branch_id, $this->product_id, $this->date_from, $this->date_to, 25);
        return $this->adminView('livewire.admin.reports.product', ['data' => $data], 'Product Report');
    }
}


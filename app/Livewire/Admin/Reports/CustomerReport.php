<?php

namespace App\Livewire\Admin\Reports;

use App\Livewire\Concerns\InteractsWithAdminLayout;

use App\Domain\Reports\Services\CustomerReportService;
use Illuminate\Contracts\View\View;
use Livewire\Component;
use Livewire\WithPagination;

class CustomerReport extends Component
{
    use InteractsWithAdminLayout;

    use WithPagination;

    public ?int $branch_id = null;
    public ?int $customer_id = null;
    public ?string $date_from = null;
    public ?string $date_to = null;

    public function render(CustomerReportService $service): View
    {
        $data = $service->dataset($this->branch_id, $this->customer_id, $this->date_from, $this->date_to, 25);
        return $this->adminView('livewire.admin.reports.customer', ['data' => $data], 'Customer Report');
    }
}


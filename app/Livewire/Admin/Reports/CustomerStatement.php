<?php

namespace App\Livewire\Admin\Reports;

use App\Domain\Branch\Models\Branch;
use App\Domain\Customer\Models\Customer;
use App\Domain\Customer\Services\CustomerService;
use App\Domain\Reports\Services\CustomerStatementService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class CustomerStatement extends Component
{
    use InteractsWithAdminLayout;

    public ?int $customer_id = null;

    public string $customer_search = '';

    public string $customer_name = '';

    public string $customer_phone = '';

    /** @var array<int, array{id:int,name:string,phone:string}> */
    public array $customer_results = [];

    public ?int $branch_id = null;

    public ?string $date_from = null;

    public ?string $date_to = null;

    protected $queryString = [
        'customer_id' => ['except' => null],
        'branch_id' => ['except' => null],
        'date_from' => ['except' => null],
        'date_to' => ['except' => null],
    ];

    public function mount(): void
    {
        if ($this->customer_id) {
            $this->selectCustomer($this->customer_id);
        } elseif ($id = request()->integer('customer_id')) {
            $this->selectCustomer($id);
        }

        if (! $this->date_from) {
            $this->date_from = now()->startOfMonth()->toDateString();
        }

        if (! $this->date_to) {
            $this->date_to = now()->toDateString();
        }
    }

    public function updatedCustomerSearch(): void
    {
        $term = trim($this->customer_search);
        if ($term === '') {
            $this->customer_results = [];

            return;
        }

        $this->customer_results = app(CustomerService::class)
            ->quickSearch($term, 10)
            ->map(fn (Customer $c) => [
                'id' => $c->id,
                'name' => $c->name,
                'phone' => $c->phone,
            ])
            ->toArray();
    }

    public function selectCustomer(int $id): void
    {
        $customer = Customer::findOrFail($id);
        $this->customer_id = $customer->id;
        $this->customer_name = (string) $customer->name;
        $this->customer_phone = (string) $customer->phone;
        $this->customer_search = '';
        $this->customer_results = [];
    }

    public function clearCustomer(): void
    {
        $this->customer_id = null;
        $this->customer_name = '';
        $this->customer_phone = '';
        $this->customer_search = '';
        $this->customer_results = [];
    }

    public function render(CustomerStatementService $service): View
    {
        $statement = $service->statement(
            $this->customer_id,
            $this->date_from,
            $this->date_to,
            $this->branch_id,
        );

        return $this->adminView('livewire.admin.reports.customer-statement', [
            'statement' => $statement,
            'branches' => Branch::query()->orderBy('name')->get(['id', 'name']),
        ], 'Client Statement');
    }
}

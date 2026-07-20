<?php

namespace App\Livewire\Admin\Customers;

use App\Domain\Customer\Enums\CustomerType;
use App\Domain\Customer\Enums\StudentClass;
use App\Domain\Customer\Models\Customer;
use App\Domain\Customer\Services\CustomerService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rule;
use Livewire\Component;
use Livewire\WithPagination;

class ManageCustomers extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';

    public string $filter_type = '';

    public string $filter_student_class = '';

    public string $filter_outstanding = '';

    public bool $showCustomerForm = false;

    public bool $showCustomerDrawer = false;

    public bool $showDeleteConfirm = false;

    public ?int $editingId = null;

    public ?int $viewingId = null;

    public ?int $deletingId = null;

    public string $name = '';

    public string $phone = '';

    public string $type = 'doctor';

    public string $student_class = '';

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterType(): void
    {
        $this->resetPage();
        if ($this->filter_type !== CustomerType::Student->value) {
            $this->filter_student_class = '';
        }
    }

    public function updatedFilterStudentClass(): void
    {
        $this->resetPage();
    }

    public function updatedFilterOutstanding(): void
    {
        $this->resetPage();
    }

    public function updatedType(): void
    {
        if ($this->type !== CustomerType::Student->value) {
            $this->student_class = '';
        }
    }

    public function startCreate(): void
    {
        $this->resetForm();
        $this->showCustomerForm = true;
    }

    public function startEdit(int $id): void
    {
        $customer = Customer::findOrFail($id);
        $this->editingId = $customer->id;
        $this->name = (string) $customer->name;
        $this->phone = (string) $customer->phone;
        $this->type = $customer->type instanceof CustomerType
            ? $customer->type->value
            : (string) ($customer->type ?? 'doctor');
        $this->student_class = $customer->student_class instanceof StudentClass
            ? $customer->student_class->value
            : (string) ($customer->student_class ?? '');
        $this->resetErrorBag();
        $this->showCustomerForm = true;
    }

    public function startView(int $id): void
    {
        $this->viewingId = $id;
        $this->showCustomerDrawer = true;
    }

    public function closeCustomerForm(): void
    {
        $this->showCustomerForm = false;
        $this->resetForm();
    }

    public function save(CustomerService $service): void
    {
        $validated = $this->validate([
            'name' => ['required', 'string', 'max:255'],
            'phone' => [
                'required',
                'string',
                'max:50',
                Rule::unique('customers', 'phone')->ignore($this->editingId),
            ],
            'type' => ['required', 'string', Rule::in(CustomerType::values())],
            'student_class' => [
                'nullable',
                'string',
                Rule::in(array_merge([''], StudentClass::values())),
            ],
        ]);

        $validated['student_class'] = $validated['type'] === CustomerType::Student->value
            ? ($validated['student_class'] ?: null)
            : null;

        if ($this->editingId) {
            $service->update(Customer::findOrFail($this->editingId), $validated);
            $message = 'Customer updated successfully.';
        } else {
            $service->create($validated);
            $message = 'Customer created successfully.';
        }

        $this->showCustomerForm = false;
        $this->resetForm();
        $this->toast($message);
    }

    public function prepareDelete(int $id): void
    {
        $this->deletingId = $id;
        $this->showDeleteConfirm = true;
    }

    public function cancelDelete(): void
    {
        $this->deletingId = null;
        $this->showDeleteConfirm = false;
    }

    public function confirmDelete(CustomerService $service): void
    {
        if (! $this->deletingId) {
            return;
        }

        $service->delete(Customer::findOrFail($this->deletingId));

        if ($this->viewingId === $this->deletingId) {
            $this->showCustomerDrawer = false;
            $this->viewingId = null;
        }

        $this->deletingId = null;
        $this->showDeleteConfirm = false;
        $this->toast('Customer deleted successfully.');
    }

    protected function resetForm(): void
    {
        $this->editingId = null;
        $this->name = '';
        $this->phone = '';
        $this->type = 'doctor';
        $this->student_class = '';
        $this->resetErrorBag();
    }

    public function render(CustomerService $service): View
    {
        $customers = $service->paginate(
            $this->search !== '' ? $this->search : null,
            $this->filter_type !== '' ? $this->filter_type : null,
            $this->filter_student_class !== '' ? $this->filter_student_class : null,
            15,
            $this->filter_outstanding === '1',
        );

        $viewingCustomer = $this->viewingId
            ? Customer::find($this->viewingId)
            : null;

        $viewingBalance = 0.0;
        if ($viewingCustomer) {
            $viewingBalance = $viewingCustomer->outstandingBalance();
        }

        $withBalance = $service->countWithOutstanding();

        $doctorCount = Schema::hasColumn('customers', 'type')
            ? Customer::where('type', CustomerType::Doctor->value)->count()
            : 0;
        $studentCount = Schema::hasColumn('customers', 'type')
            ? Customer::where('type', CustomerType::Student->value)->count()
            : 0;

        return $this->adminView('livewire.admin.customers.manage-customers', [
            'customers' => $customers,
            'viewingCustomer' => $viewingCustomer,
            'viewingBalance' => $viewingBalance,
            'totalCustomers' => Customer::count(),
            'withBalance' => $withBalance,
            'doctorCount' => $doctorCount,
            'studentCount' => $studentCount,
            'customerTypes' => CustomerType::cases(),
            'studentClasses' => StudentClass::cases(),
            'newThisMonth' => Customer::where('created_at', '>=', Carbon::now()->startOfMonth())->count(),
        ], 'Customers');
    }
}

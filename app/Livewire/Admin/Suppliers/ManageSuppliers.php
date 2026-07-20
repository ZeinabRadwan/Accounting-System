<?php

namespace App\Livewire\Admin\Suppliers;

use App\Domain\Supplier\Models\Supplier;
use App\Domain\Supplier\Services\SupplierService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Illuminate\Validation\Rule;
use Livewire\Component;
use Livewire\WithPagination;

class ManageSuppliers extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';

    public string $filter_outstanding = '';

    public bool $showSupplierForm = false;
    public bool $showSupplierDrawer = false;
    public bool $showDeleteConfirm = false;

    public ?int $editingId = null;
    public ?int $viewingId = null;
    public ?int $deletingId = null;

    public string $name = '';
    public string $phone = '';
    public ?string $address = null;

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterOutstanding(): void
    {
        $this->resetPage();
    }

    public function startCreate(): void
    {
        $this->resetForm();
        $this->showSupplierForm = true;
    }

    public function startEdit(int $id): void
    {
        $supplier = Supplier::findOrFail($id);
        $this->editingId = $supplier->id;
        $this->name = (string) $supplier->name;
        $this->phone = (string) $supplier->phone;
        $this->address = $supplier->address;
        $this->resetErrorBag();
        $this->showSupplierForm = true;
    }

    public function startView(int $id): void
    {
        $this->viewingId = $id;
        $this->showSupplierDrawer = true;
    }

    public function closeSupplierForm(): void
    {
        $this->showSupplierForm = false;
        $this->resetForm();
    }

    public function save(SupplierService $service): void
    {
        $validated = $this->validate([
            'name' => ['required', 'string', 'max:255'],
            'phone' => [
                'required',
                'string',
                'max:50',
                Rule::unique('suppliers', 'phone')->ignore($this->editingId),
            ],
            'address' => ['nullable', 'string', 'max:500'],
        ]);

        if ($this->editingId) {
            $service->update(Supplier::findOrFail($this->editingId), $validated);
            $message = 'Supplier updated successfully.';
        } else {
            $service->create($validated);
            $message = 'Supplier created successfully.';
        }

        $this->showSupplierForm = false;
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

    public function confirmDelete(SupplierService $service): void
    {
        if (! $this->deletingId) {
            return;
        }

        $service->delete(Supplier::findOrFail($this->deletingId));

        if ($this->viewingId === $this->deletingId) {
            $this->showSupplierDrawer = false;
            $this->viewingId = null;
        }

        $this->deletingId = null;
        $this->showDeleteConfirm = false;
        $this->toast('Supplier deleted successfully.');
    }

    protected function resetForm(): void
    {
        $this->editingId = null;
        $this->name = '';
        $this->phone = '';
        $this->address = null;
        $this->resetErrorBag();
    }

    public function render(SupplierService $service): View
    {
        $suppliers = $service->paginate(
            $this->search !== '' ? $this->search : null,
            15,
            $this->filter_outstanding === '1',
        );

        $viewingSupplier = $this->viewingId
            ? Supplier::find($this->viewingId)
            : null;

        $viewingBalance = $viewingSupplier ? $viewingSupplier->outstandingBalance() : 0.0;

        return $this->adminView('livewire.admin.suppliers.manage-suppliers', [
            'suppliers' => $suppliers,
            'viewingSupplier' => $viewingSupplier,
            'viewingBalance' => $viewingBalance,
            'totalSuppliers' => Supplier::count(),
            'withBalance' => $service->countWithOutstanding(),
        ], 'Suppliers');
    }
}

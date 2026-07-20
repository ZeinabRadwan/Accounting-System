<?php

namespace App\Livewire\Admin\Branches;

use App\Domain\Branch\Models\Branch;
use App\Domain\Branch\Services\BranchService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use App\Models\User;
use DomainException;
use Illuminate\Contracts\View\View;
use Illuminate\Validation\Rule;
use Livewire\Component;
use Livewire\WithPagination;

class ManageBranches extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';
    public string $filter_status = '';

    public bool $showBranchForm = false;
    public bool $showBranchDrawer = false;
    public bool $showDeleteConfirm = false;

    public ?int $editingId = null;
    public ?int $viewingId = null;
    public ?int $deletingId = null;

    public string $name = '';
    public string $code = '';
    public ?string $address = null;
    public bool $is_active = true;

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterStatus(): void
    {
        $this->resetPage();
    }

    public function startCreate(): void
    {
        $this->resetForm();
        $this->showBranchForm = true;
    }

    public function startEdit(int $id): void
    {
        $branch = Branch::findOrFail($id);
        $this->authorize('update', $branch);

        $this->editingId = $branch->id;
        $this->name = (string) $branch->name;
        $this->code = (string) $branch->code;
        $this->address = $branch->address;
        $this->is_active = (bool) $branch->is_active;
        $this->resetErrorBag();
        $this->showBranchForm = true;
    }

    public function startView(int $id): void
    {
        $this->viewingId = $id;
        $this->showBranchDrawer = true;
    }

    public function closeBranchForm(): void
    {
        $this->showBranchForm = false;
        $this->resetForm();
    }

    public function save(BranchService $service): void
    {
        if ($this->editingId) {
            $branch = Branch::findOrFail($this->editingId);
            $this->authorize('update', $branch);

            $validated = $this->validate([
                'name' => ['required', 'string', 'max:255'],
                'code' => ['required', 'string', 'max:50', Rule::unique('branches', 'code')->ignore($this->editingId)],
                'address' => ['nullable', 'string', 'max:500'],
                'is_active' => ['boolean'],
            ]);

            $service->update($branch, $validated);
            $message = 'Branch updated successfully.';
        } else {
            $this->authorize('viewAny', Branch::class);

            $validated = $this->validate([
                'name' => ['required', 'string', 'max:255'],
                'code' => ['required', 'string', 'max:50', 'unique:branches,code'],
                'address' => ['nullable', 'string', 'max:500'],
                'is_active' => ['boolean'],
            ]);

            $service->create($validated);
            $message = 'Branch created successfully.';
        }

        $this->showBranchForm = false;
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

    public function confirmDelete(BranchService $service): void
    {
        if (! $this->deletingId) {
            return;
        }

        $branch = Branch::findOrFail($this->deletingId);
        $this->authorize('update', $branch);

        try {
            $service->delete($branch);
        } catch (DomainException $e) {
            $this->showDeleteConfirm = false;
            $this->deletingId = null;
            $this->toast($e->getMessage());

            return;
        }

        if ($this->viewingId === $this->deletingId) {
            $this->showBranchDrawer = false;
            $this->viewingId = null;
        }

        $this->deletingId = null;
        $this->showDeleteConfirm = false;
        $this->toast('Branch deleted successfully.');
    }

    protected function resetForm(): void
    {
        $this->editingId = null;
        $this->name = '';
        $this->code = '';
        $this->address = null;
        $this->is_active = true;
        $this->resetErrorBag();
    }

    public function render(): View
    {
        $this->authorize('viewAny', Branch::class);

        $branches = Branch::query()
            ->with(['users' => fn ($q) => $q->orderBy('name')])
            ->withCount('users')
            ->withCount([
                'inventoryStocks as products_count' => fn ($q) => $q->where('quantity', '>', 0),
            ])
            ->withSum('inventoryStocks as inventory_qty', 'quantity')
            ->when($this->search !== '', function ($q) {
                $term = trim($this->search);
                $q->where(function ($qq) use ($term) {
                    $qq->where('name', 'like', "%{$term}%")
                        ->orWhere('code', 'like', "%{$term}%")
                        ->orWhere('address', 'like', "%{$term}%");
                });
            })
            ->when($this->filter_status === 'active', fn ($q) => $q->where('is_active', true))
            ->when($this->filter_status === 'inactive', fn ($q) => $q->where('is_active', false))
            ->orderBy('name')
            ->paginate(12);

        $viewingBranch = null;
        if ($this->viewingId) {
            $viewingBranch = Branch::query()
                ->with(['users' => fn ($q) => $q->orderBy('name')])
                ->withCount('users')
                ->withCount([
                    'inventoryStocks as products_count' => fn ($q) => $q->where('quantity', '>', 0),
                    'inventoryStocks as out_of_stock_count' => fn ($q) => $q->where('quantity', '<=', 0),
                    'inventoryStocks as low_stock_count' => fn ($q) => $q->where('quantity', '>', 0)->where('quantity', '<=', 10),
                ])
                ->withSum('inventoryStocks as inventory_qty', 'quantity')
                ->find($this->viewingId);
        }

        return $this->adminView('livewire.admin.branches.manage-branches', [
            'branches' => $branches,
            'viewingBranch' => $viewingBranch,
            'totalBranches' => Branch::count(),
            'activeBranches' => Branch::where('is_active', true)->count(),
            'inactiveBranches' => Branch::where('is_active', false)->count(),
            'usersAssigned' => User::whereNotNull('branch_id')->count(),
        ], 'Branches');
    }
}

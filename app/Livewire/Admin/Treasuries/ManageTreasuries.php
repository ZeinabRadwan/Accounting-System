<?php

namespace App\Livewire\Admin\Treasuries;

use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Models\Treasury;
use App\Domain\Treasury\Services\TreasuryService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use DomainException;
use Illuminate\Contracts\View\View;
use Illuminate\Validation\Rule;
use Livewire\Component;
use Livewire\WithPagination;

class ManageTreasuries extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';
    public string $filter_status = '';

    public bool $showTreasuryForm = false;
    public bool $showDeleteConfirm = false;

    public ?int $editingId = null;
    public ?int $deletingId = null;

    public string $name = '';
    public string $payment_method = 'cash';
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
        $this->showTreasuryForm = true;
    }

    public function startEdit(int $id): void
    {
        $treasury = Treasury::findOrFail($id);
        $this->editingId = $treasury->id;
        $this->name = (string) $treasury->name;
        $this->payment_method = (string) $treasury->payment_method;
        $this->is_active = (bool) $treasury->is_active;
        $this->resetErrorBag();
        $this->showTreasuryForm = true;
    }

    public function closeTreasuryForm(): void
    {
        $this->showTreasuryForm = false;
        $this->resetForm();
    }

    public function save(TreasuryService $service): void
    {
        $validated = $this->validate([
            'name' => ['required', 'string', 'max:255'],
            'payment_method' => ['required', 'string', Rule::in(PaymentMethod::values())],
            'is_active' => ['boolean'],
        ]);

        try {
            if ($this->editingId) {
                $service->update(Treasury::findOrFail($this->editingId), $validated);
                $message = 'Treasury updated successfully.';
            } else {
                $service->create($validated);
                $message = 'Treasury created successfully.';
            }
        } catch (DomainException $e) {
            $this->toast($e->getMessage());

            return;
        }

        $this->showTreasuryForm = false;
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

    public function confirmDelete(): void
    {
        if (! $this->deletingId) {
            return;
        }

        $treasury = Treasury::withCount('transactions')->findOrFail($this->deletingId);

        if ($treasury->transactions_count > 0 || (float) $treasury->current_balance != 0.0) {
            $this->showDeleteConfirm = false;
            $this->deletingId = null;
            $this->toast('Cannot delete a treasury that has balance or transactions. Deactivate it instead.');

            return;
        }

        $treasury->delete();
        $this->deletingId = null;
        $this->showDeleteConfirm = false;
        $this->toast('Treasury deleted successfully.');
    }

    protected function resetForm(): void
    {
        $this->editingId = null;
        $this->name = '';
        $this->payment_method = 'cash';
        $this->is_active = true;
        $this->resetErrorBag();
    }

    public function render(): View
    {
        $treasuries = Treasury::query()
            ->withCount('transactions')
            ->when($this->search !== '', function ($q) {
                $term = trim($this->search);
                $q->where(function ($qq) use ($term) {
                    $qq->where('name', 'like', "%{$term}%")
                        ->orWhere('payment_method', 'like', "%{$term}%");
                });
            })
            ->when($this->filter_status === 'active', fn ($q) => $q->where('is_active', true))
            ->when($this->filter_status === 'inactive', fn ($q) => $q->where('is_active', false))
            ->orderBy('name')
            ->paginate(15);

        return $this->adminView('livewire.admin.treasuries.manage-treasuries', [
            'treasuries' => $treasuries,
            'paymentMethods' => PaymentMethod::cases(),
            'totalBalance' => (float) Treasury::sum('current_balance'),
            'activeCount' => Treasury::where('is_active', true)->count(),
        ], 'Treasuries');
    }
}

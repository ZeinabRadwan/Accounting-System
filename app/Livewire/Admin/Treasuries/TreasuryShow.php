<?php

namespace App\Livewire\Admin\Treasuries;

use App\Domain\Treasury\Enums\TreasuryTransactionType;
use App\Domain\Treasury\Models\Treasury;
use App\Domain\Treasury\Models\TreasuryTransaction;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Livewire\Component;
use Livewire\WithPagination;

class TreasuryShow extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public Treasury $treasury;

    public string $search = '';

    public string $filter_type = '';

    public string $date_from = '';

    public string $date_to = '';

    public function mount(Treasury $treasury): void
    {
        $this->treasury = $treasury;
    }

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterType(): void
    {
        $this->resetPage();
    }

    public function updatedDateFrom(): void
    {
        $this->resetPage();
    }

    public function updatedDateTo(): void
    {
        $this->resetPage();
    }

    public function render(): View
    {
        $this->treasury->refresh();

        $baseQuery = TreasuryTransaction::query()
            ->where('treasury_id', $this->treasury->id);

        $totalIncome = (float) (clone $baseQuery)
            ->where('type', TreasuryTransactionType::Income->value)
            ->sum('amount');

        $totalExpenses = (float) (clone $baseQuery)
            ->where('type', TreasuryTransactionType::Expense->value)
            ->sum('amount');

        $transactions = TreasuryTransaction::query()
            ->with('creator:id,name')
            ->where('treasury_id', $this->treasury->id)
            ->when($this->search !== '', function ($q) {
                $term = trim($this->search);
                $q->where(function ($qq) use ($term) {
                    $qq->where('description', 'like', "%{$term}%")
                        ->orWhere('reference_type', 'like', "%{$term}%");
                });
            })
            ->when($this->filter_type !== '', fn ($q) => $q->where('type', $this->filter_type))
            ->when($this->date_from !== '', fn ($q) => $q->whereDate('created_at', '>=', $this->date_from))
            ->when($this->date_to !== '', fn ($q) => $q->whereDate('created_at', '<=', $this->date_to))
            ->latest('id')
            ->paginate(20);

        return $this->adminView('livewire.admin.treasuries.treasury-show', [
            'transactions' => $transactions,
            'totalIncome' => $totalIncome,
            'totalExpenses' => $totalExpenses,
            'transactionsCount' => (clone $baseQuery)->count(),
        ], $this->treasury->name);
    }
}

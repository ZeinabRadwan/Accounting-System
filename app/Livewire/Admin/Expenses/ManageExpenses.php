<?php

namespace App\Livewire\Admin\Expenses;

use App\Domain\Branch\Models\Branch;
use App\Domain\Expense\Enums\ExpenseCategory;
use App\Domain\Expense\Models\Expense;
use App\Domain\Expense\Services\ExpenseService;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use DomainException;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Livewire\Component;
use Livewire\WithPagination;

class ManageExpenses extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';

    public string $filter_branch_id = '';

    public string $filter_category = '';

    public string $filter_payment_method = '';

    public string $date_from = '';

    public string $date_to = '';

    public bool $showExpenseForm = false;

    public bool $showExpenseDrawer = false;

    public ?int $viewingId = null;

    public ?int $branch_id = null;

    public string $category = 'other';

    public string $title = '';

    public ?string $notes = null;

    public ?float $amount = null;

    public string $payment_method = 'cash';

    public string $expense_date = '';

    public function mount(): void
    {
        $this->expense_date = now()->toDateString();
    }

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterBranchId(): void
    {
        $this->resetPage();
    }

    public function updatedFilterCategory(): void
    {
        $this->resetPage();
    }

    public function updatedFilterPaymentMethod(): void
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

    public function startCreate(): void
    {
        $this->resetForm();
        $this->showExpenseForm = true;
    }

    public function closeExpenseForm(): void
    {
        $this->showExpenseForm = false;
        $this->resetForm();
    }

    public function startView(int $id): void
    {
        $this->viewingId = $id;
        $this->showExpenseDrawer = true;
    }

    public function save(ExpenseService $service): void
    {
        $validated = $this->validate([
            'branch_id' => ['nullable', 'integer', 'exists:branches,id'],
            'category' => ['required', 'string', Rule::in(ExpenseCategory::values())],
            'title' => ['required', 'string', 'max:255'],
            'notes' => ['nullable', 'string', 'max:2000'],
            'amount' => ['required', 'numeric', 'gt:0'],
            'payment_method' => ['required', 'string', Rule::in(PaymentMethod::values())],
            'expense_date' => ['required', 'date'],
        ]);

        try {
            $expense = $service->create([
                ...$validated,
                'created_by' => Auth::id(),
            ]);
        } catch (DomainException $e) {
            $this->toastError($e->getMessage());

            return;
        }

        $this->showExpenseForm = false;
        $this->resetForm();
        $this->toast('Expense :number saved', ['number' => $expense->expense_number]);
    }

    protected function resetForm(): void
    {
        $this->branch_id = null;
        $this->category = 'other';
        $this->title = '';
        $this->notes = null;
        $this->amount = null;
        $this->payment_method = 'cash';
        $this->expense_date = now()->toDateString();
        $this->resetErrorBag();
    }

    public function render(): View
    {
        $expenses = Expense::query()
            ->with(['branch:id,name', 'treasury:id,name', 'creator:id,name'])
            ->when($this->search !== '', function ($q) {
                $term = trim($this->search);
                $q->where(function ($qq) use ($term) {
                    $qq->where('expense_number', 'like', "%{$term}%")
                        ->orWhere('title', 'like', "%{$term}%")
                        ->orWhere('notes', 'like', "%{$term}%");
                });
            })
            ->when($this->filter_branch_id !== '', fn ($q) => $q->where('branch_id', (int) $this->filter_branch_id))
            ->when($this->filter_category !== '', fn ($q) => $q->where('category', $this->filter_category))
            ->when($this->filter_payment_method !== '', fn ($q) => $q->where('payment_method', $this->filter_payment_method))
            ->when($this->date_from !== '', fn ($q) => $q->whereDate('expense_date', '>=', $this->date_from))
            ->when($this->date_to !== '', fn ($q) => $q->whereDate('expense_date', '<=', $this->date_to))
            ->latest('expense_date')
            ->latest('id')
            ->paginate(15);

        $viewingExpense = $this->viewingId
            ? Expense::with(['branch:id,name', 'treasury:id,name', 'creator:id,name'])->find($this->viewingId)
            : null;

        $base = Expense::query()
            ->when($this->date_from !== '', fn ($q) => $q->whereDate('expense_date', '>=', $this->date_from))
            ->when($this->date_to !== '', fn ($q) => $q->whereDate('expense_date', '<=', $this->date_to));

        return $this->adminView('livewire.admin.expenses.manage-expenses', [
            'expenses' => $expenses,
            'viewingExpense' => $viewingExpense,
            'branches' => Branch::query()->orderBy('name')->get(['id', 'name']),
            'categories' => ExpenseCategory::cases(),
            'paymentMethods' => PaymentMethod::cases(),
            'totalAmount' => (float) (clone $base)->sum('amount'),
            'totalCount' => (clone $base)->count(),
            'monthAmount' => (float) Expense::query()
                ->whereMonth('expense_date', now()->month)
                ->whereYear('expense_date', now()->year)
                ->sum('amount'),
            'monthCount' => Expense::query()
                ->whereMonth('expense_date', now()->month)
                ->whereYear('expense_date', now()->year)
                ->count(),
        ], 'Expenses');
    }
}

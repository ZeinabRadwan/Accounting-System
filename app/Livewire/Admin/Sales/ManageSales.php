<?php

namespace App\Livewire\Admin\Sales;

use App\Domain\Branch\Models\Branch;
use App\Domain\Sales\Models\SalesInvoice;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ManageSales extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';
    public string $filter_branch_id = '';
    public string $filter_status = '';

    public bool $showInvoiceDrawer = false;
    public ?int $viewingId = null;

    protected $queryString = [
        'search' => ['except' => ''],
        'filter_branch_id' => ['except' => ''],
        'filter_status' => ['except' => ''],
    ];

    public function mount(): void
    {
        if ($id = request()->integer('invoice')) {
            $this->startView($id);
        }
    }

    public function cancelInvoice(\App\Domain\Sales\Services\InvoiceService $service): void
    {
        if (! $this->viewingId) {
            return;
        }

        $user = Auth::user();
        if ($user && ! $user->isSuperAdmin() && ! $user->hasPermission('allow_invoice_cancel')) {
            abort(403);
        }

        try {
            $service->cancel(SalesInvoice::findOrFail($this->viewingId), $user?->id);
            $this->toast('Invoice cancelled successfully.');
            $this->showInvoiceDrawer = false;
            $this->viewingId = null;
        } catch (\DomainException $e) {
            $this->toast($e->getMessage());
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

    public function updatedFilterStatus(): void
    {
        $this->resetPage();
    }

    public function startView(int $id): void
    {
        $invoice = SalesInvoice::query()->findOrFail($id);
        $this->authorize('view', $invoice);

        $this->viewingId = $id;
        $this->showInvoiceDrawer = true;
    }

    public function render(): View
    {
        $user = Auth::user();

        $baseQuery = SalesInvoice::query()->visibleToUser($user);

        $invoices = (clone $baseQuery)
            ->with(['branch:id,name', 'customer:id,name,phone', 'user:id,name'])
            ->when($this->search !== '', function ($q) {
                $term = trim($this->search);
                $q->where(function ($qq) use ($term) {
                    $qq->where('invoice_number', 'like', "%{$term}%")
                        ->orWhereHas('customer', fn ($c) => $c->where('name', 'like', "%{$term}%")
                            ->orWhere('phone', 'like', "%{$term}%"));
                });
            })
            ->when($this->filter_branch_id !== '', fn ($q) => $q->where('branch_id', (int) $this->filter_branch_id))
            ->when($this->filter_status !== '', fn ($q) => $q->where('status', $this->filter_status))
            ->latest()
            ->paginate(15);

        $viewingInvoice = null;
        if ($this->viewingId) {
            $viewingInvoice = SalesInvoice::with(['branch:id,name', 'customer:id,name,phone', 'user:id,name', 'items'])
                ->find($this->viewingId);

            if ($viewingInvoice && $user && ! $user->can('view', $viewingInvoice)) {
                $viewingInvoice = null;
                $this->viewingId = null;
                $this->showInvoiceDrawer = false;
            }
        }

        return $this->adminView('livewire.admin.sales.manage-sales', [
            'invoices' => $invoices,
            'viewingInvoice' => $viewingInvoice,
            'branches' => Branch::orderBy('name')->get(['id', 'name']),
            'totalCount' => (clone $baseQuery)->count(),
            'totalAmount' => (float) (clone $baseQuery)->sum('total'),
            'partialCount' => (clone $baseQuery)->where('status', 'partially_paid')->count(),
            'unpaidCount' => (clone $baseQuery)->where('status', 'unpaid')->count(),
        ], 'Sales Invoices');
    }
}

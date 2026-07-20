<?php

namespace App\Livewire\Admin\Transfers;

use App\Domain\Branch\Models\Branch;
use App\Domain\Product\Models\Product;
use App\Domain\Transfer\Models\StockTransfer;
use App\Domain\Transfer\Services\StockTransferService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use DomainException;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ManageTransfers extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';

    public string $filter_branch_from = '';

    public string $filter_branch_to = '';

    public bool $showTransferForm = false;

    public bool $showTransferDrawer = false;

    public ?int $viewingId = null;

    public ?int $branch_id_from = null;

    public ?int $branch_id_to = null;

    public ?string $notes = null;

    public string $product_search = '';

    /** @var array<int, array<string, mixed>> */
    public array $product_results = [];

    /** @var array<int, array<string, mixed>> */
    public array $items = [];

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterBranchFrom(): void
    {
        $this->resetPage();
    }

    public function updatedFilterBranchTo(): void
    {
        $this->resetPage();
    }

    public function updatedProductSearch(): void
    {
        $term = trim($this->product_search);
        if ($term === '') {
            $this->product_results = [];

            return;
        }

        $this->product_results = Product::query()
            ->where('is_active', true)
            ->where(function ($q) use ($term) {
                $q->where('display_name', 'like', "%{$term}%")
                    ->orWhere('sku', 'like', "%{$term}%");
            })
            ->with(['category:id,name', 'units'])
            ->orderBy('display_name')
            ->limit(10)
            ->get()
            ->map(fn (Product $p) => [
                'id' => $p->id,
                'display_name' => $p->full_display_name,
                'sku' => $p->sku,
                'category' => $p->category?->name,
            ])
            ->toArray();
    }

    public function startCreate(): void
    {
        $this->resetForm();
        $ids = Branch::query()->where('is_active', true)->orderBy('name')->pluck('id');
        $this->branch_id_from = $ids->first();
        $this->branch_id_to = $ids->skip(1)->first() ?? $ids->first();
        $this->showTransferForm = true;
    }

    public function closeTransferForm(): void
    {
        $this->showTransferForm = false;
        $this->resetForm();
    }

    public function startView(int $id): void
    {
        $this->viewingId = $id;
        $this->showTransferDrawer = true;
    }

    public function addProduct(int $productId): void
    {
        $product = Product::with(['units', 'category'])
            ->where('is_active', true)
            ->findOrFail($productId);

        $existingIndex = collect($this->items)->search(
            fn ($item) => (int) ($item['product_id'] ?? 0) === $product->id
        );

        if ($existingIndex !== false) {
            $this->items[$existingIndex]['quantity'] = (float) $this->items[$existingIndex]['quantity'] + 1;
            $this->product_search = '';
            $this->product_results = [];

            return;
        }

        $unit = $product->units->firstWhere('is_base', true) ?? $product->units->first();

        $this->items[] = [
            'product_id' => $product->id,
            'display_name' => $product->full_display_name,
            'sku' => $product->sku,
            'unit_name' => $unit?->unit_name ?? $product->base_unit,
            'conversion_factor' => (float) ($unit?->conversion_factor ?? 1),
            'quantity' => 1,
            'units' => $product->units->map(fn ($u) => [
                'unit_name' => $u->unit_name,
                'conversion_factor' => (float) $u->conversion_factor,
            ])->values()->toArray(),
        ];

        $this->product_search = '';
        $this->product_results = [];
    }

    public function setUnit(int $index, string $unitName): void
    {
        if (! isset($this->items[$index])) {
            return;
        }

        $unit = collect($this->items[$index]['units'] ?? [])->firstWhere('unit_name', $unitName);
        if (! $unit) {
            return;
        }

        $this->items[$index]['unit_name'] = $unit['unit_name'];
        $this->items[$index]['conversion_factor'] = (float) $unit['conversion_factor'];
    }

    public function removeItem(int $index): void
    {
        if (isset($this->items[$index])) {
            array_splice($this->items, $index, 1);
        }
    }

    public function save(StockTransferService $service): void
    {
        $this->validate([
            'branch_id_from' => ['required', 'integer', 'exists:branches,id', 'different:branch_id_to'],
            'branch_id_to' => ['required', 'integer', 'exists:branches,id'],
            'notes' => ['nullable', 'string', 'max:1000'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.product_id' => ['required', 'integer', 'exists:products,id'],
            'items.*.unit_name' => ['required', 'string'],
            'items.*.conversion_factor' => ['required', 'numeric', 'gt:0'],
            'items.*.quantity' => ['required', 'numeric', 'gt:0'],
        ], [
            'branch_id_from.different' => 'From and To branches must be different.',
            'items.required' => 'Add at least one product.',
            'items.min' => 'Add at least one product.',
        ]);

        try {
            $transfer = $service->createTransfer([
                'branch_id_from' => $this->branch_id_from,
                'branch_id_to' => $this->branch_id_to,
                'user_id' => Auth::id(),
                'notes' => $this->notes,
                'items' => collect($this->items)->map(fn ($item) => [
                    'product_id' => $item['product_id'],
                    'unit_name' => $item['unit_name'],
                    'conversion_factor' => $item['conversion_factor'],
                    'quantity' => $item['quantity'],
                ])->values()->all(),
            ]);
        } catch (DomainException $e) {
            $this->toastError($e->getMessage());

            return;
        }

        $this->showTransferForm = false;
        $this->resetForm();
        $this->toast('Transfer :number saved', ['number' => $transfer->transfer_number]);
    }

    protected function resetForm(): void
    {
        $this->branch_id_from = null;
        $this->branch_id_to = null;
        $this->notes = null;
        $this->items = [];
        $this->product_search = '';
        $this->product_results = [];
        $this->resetErrorBag();
    }

    public function render(): View
    {
        $transfers = StockTransfer::query()
            ->with(['fromBranch:id,name', 'toBranch:id,name', 'user:id,name'])
            ->withCount('items')
            ->when($this->search !== '', function ($q) {
                $term = trim($this->search);
                $q->where('transfer_number', 'like', "%{$term}%");
            })
            ->when($this->filter_branch_from !== '', fn ($q) => $q->where('branch_id_from', (int) $this->filter_branch_from))
            ->when($this->filter_branch_to !== '', fn ($q) => $q->where('branch_id_to', (int) $this->filter_branch_to))
            ->latest()
            ->paginate(15);

        $viewingTransfer = $this->viewingId
            ? StockTransfer::with([
                'fromBranch:id,name',
                'toBranch:id,name',
                'user:id,name',
                'items.product:id,display_name,sku',
            ])->find($this->viewingId)
            : null;

        return $this->adminView('livewire.admin.transfers.manage-transfers', [
            'transfers' => $transfers,
            'viewingTransfer' => $viewingTransfer,
            'branches' => Branch::query()->orderBy('name')->get(['id', 'name']),
            'totalCount' => StockTransfer::count(),
            'todayCount' => StockTransfer::whereDate('created_at', today())->count(),
        ], 'Transfers');
    }
}

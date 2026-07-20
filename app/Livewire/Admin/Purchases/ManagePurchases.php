<?php

namespace App\Livewire\Admin\Purchases;

use App\Domain\Branch\Models\Branch;
use App\Domain\Product\Models\Product;
use App\Domain\Purchase\Models\PurchaseInvoice;
use App\Domain\Purchase\Services\PurchaseService;
use App\Domain\Supplier\Models\Supplier;
use App\Domain\Supplier\Services\SupplierService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithPagination;

class ManagePurchases extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';
    public string $filter_branch_id = '';
    public string $filter_supplier_id = '';

    public bool $showPurchaseForm = false;
    public bool $showPurchaseDrawer = false;
    public bool $showQuickSupplier = false;

    public ?int $viewingId = null;

    public ?int $branch_id = null;
    public ?int $supplier_id = null;
    public string $supplier_name = '';
    public string $supplier_phone = '';
    public string $supplier_search = '';
    /** @var array<int, array{id:int,name:string,phone:string}> */
    public array $supplier_results = [];

    public string $quick_name = '';
    public string $quick_phone = '';
    public ?string $quick_address = null;

    public ?string $notes = null;
    public float $discount_amount = 0;
    public string $payment_method = 'cash';
    public ?float $paid_amount = null;

    /** @var array<int, array<string, mixed>> */
    public array $items = [];

    public string $product_search = '';
    /** @var array<int, array<string, mixed>> */
    public array $product_results = [];

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterBranchId(): void
    {
        $this->resetPage();
    }

    public function updatedFilterSupplierId(): void
    {
        $this->resetPage();
    }

    public function updatedSupplierSearch(): void
    {
        $term = trim($this->supplier_search);
        if ($term === '') {
            $this->supplier_results = [];

            return;
        }

        $this->supplier_results = app(SupplierService::class)
            ->quickSearch($term, 10)
            ->map(fn (Supplier $s) => [
                'id' => $s->id,
                'name' => $s->name,
                'phone' => $s->phone,
            ])
            ->toArray();
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

    public function selectSupplier(int $id): void
    {
        $supplier = Supplier::findOrFail($id);
        $this->supplier_id = $supplier->id;
        $this->supplier_name = (string) $supplier->name;
        $this->supplier_phone = (string) $supplier->phone;
        $this->supplier_search = '';
        $this->supplier_results = [];
    }

    public function clearSupplier(): void
    {
        $this->supplier_id = null;
        $this->supplier_name = '';
        $this->supplier_phone = '';
        $this->supplier_search = '';
        $this->supplier_results = [];
    }

    public function openQuickSupplier(): void
    {
        $this->quick_name = $this->supplier_name;
        $this->quick_phone = $this->supplier_phone;
        $this->quick_address = null;
        $this->resetErrorBag(['quick_name', 'quick_phone', 'quick_address']);
        $this->showQuickSupplier = true;
    }

    public function closeQuickSupplier(): void
    {
        $this->showQuickSupplier = false;
        $this->quick_name = '';
        $this->quick_phone = '';
        $this->quick_address = null;
        $this->resetErrorBag(['quick_name', 'quick_phone', 'quick_address']);
    }

    public function saveQuickSupplier(SupplierService $service): void
    {
        $validated = $this->validate([
            'quick_name' => ['required', 'string', 'max:255'],
            'quick_phone' => ['required', 'string', 'max:50'],
            'quick_address' => ['nullable', 'string', 'max:500'],
        ], [], [
            'quick_name' => 'name',
            'quick_phone' => 'phone',
            'quick_address' => 'address',
        ]);

        $supplier = $service->quickCreateIfNotExists(
            $validated['quick_name'],
            $validated['quick_phone'],
            $validated['quick_address'] ?? null
        );

        $this->selectSupplier($supplier->id);
        $this->closeQuickSupplier();
        $this->toast('Supplier selected.');
    }

    public function startCreate(): void
    {
        $this->resetForm();
        $this->branch_id = Branch::query()->where('is_active', true)->value('id');
        $this->items = [];
        $this->showPurchaseForm = true;
    }

    public function closePurchaseForm(): void
    {
        $this->showPurchaseForm = false;
        $this->resetForm();
    }

    public function startView(int $id): void
    {
        $this->viewingId = $id;
        $this->showPurchaseDrawer = true;
    }

    public function mount(): void
    {
        if ($id = request()->integer('invoice')) {
            $this->startView($id);
        }
    }

    public function addProduct(int $productId): void
    {
        $product = Product::with(['units', 'category'])
            ->where('is_active', true)
            ->findOrFail($productId);

        $existingIndex = collect($this->items)->search(
            fn ($item) => (int) ($item['product_id'] ?? 0) === $product->id
                && ($item['expiry_date'] ?? '') === ''
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
            'unit_cost' => 0,
            'quantity' => 1,
            'expiry_date' => '',
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

    public function save(PurchaseService $service): void
    {
        $this->validate([
            'branch_id' => ['required', 'integer', 'exists:branches,id'],
            'supplier_id' => ['required', 'integer', 'exists:suppliers,id'],
            'discount_amount' => ['nullable', 'numeric', 'gte:0'],
            'payment_method' => ['required', 'string', 'in:cash,visa,instapay,vodafone_cash'],
            'paid_amount' => ['nullable', 'numeric', 'gte:0'],
            'notes' => ['nullable', 'string', 'max:1000'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.product_id' => ['required', 'integer', 'exists:products,id'],
            'items.*.unit_name' => ['required', 'string'],
            'items.*.conversion_factor' => ['required', 'numeric', 'gt:0'],
            'items.*.unit_cost' => ['required', 'numeric', 'gte:0'],
            'items.*.quantity' => ['required', 'numeric', 'gt:0'],
            'items.*.expiry_date' => ['nullable', 'date'],
        ], [
            'supplier_id.required' => 'Please select a supplier.',
            'items.required' => 'Add at least one product.',
            'items.min' => 'Add at least one product.',
            'payment_method.required' => 'Select a treasury payment method.',
        ]);

        $paidAmount = $this->paid_amount;
        if ($paidAmount === null) {
            $paidAmount = collect($this->items)->sum(
                fn ($i) => (float) ($i['unit_cost'] ?? 0) * (float) ($i['quantity'] ?? 0)
            ) - (float) $this->discount_amount;
            $paidAmount = max(0, $paidAmount);
        }

        try {
            $invoice = $service->createInvoice([
                'branch_id' => $this->branch_id,
                'user_id' => Auth::id(),
                'supplier_id' => $this->supplier_id,
                'notes' => $this->notes,
                'discount_amount' => $this->discount_amount,
                'payment_method' => $this->payment_method,
                'paid_amount' => $paidAmount,
                'items' => collect($this->items)->map(fn ($item) => [
                    'product_id' => $item['product_id'],
                    'unit_name' => $item['unit_name'],
                    'conversion_factor' => $item['conversion_factor'],
                    'unit_cost' => $item['unit_cost'],
                    'quantity' => $item['quantity'],
                    'expiry_date' => ! empty($item['expiry_date']) ? $item['expiry_date'] : null,
                ])->values()->all(),
            ]);
        } catch (\DomainException $e) {
            $this->toast($e->getMessage());

            return;
        }

        $this->showPurchaseForm = false;
        $this->resetForm();
        $this->toast('Purchase :number saved', ['number' => $invoice->invoice_number]);
    }

    protected function resetForm(): void
    {
        $this->branch_id = null;
        $this->clearSupplier();
        $this->notes = null;
        $this->discount_amount = 0;
        $this->payment_method = 'cash';
        $this->paid_amount = null;
        $this->items = [];
        $this->product_search = '';
        $this->product_results = [];
        $this->resetErrorBag();
    }

    public function render(): View
    {
        $invoices = PurchaseInvoice::query()
            ->with(['branch:id,name', 'supplier:id,name', 'user:id,name'])
            ->when($this->search !== '', function ($q) {
                $term = trim($this->search);
                $q->where(function ($qq) use ($term) {
                    $qq->where('invoice_number', 'like', "%{$term}%")
                        ->orWhereHas('supplier', fn ($s) => $s->where('name', 'like', "%{$term}%"));
                });
            })
            ->when($this->filter_branch_id !== '', fn ($q) => $q->where('branch_id', (int) $this->filter_branch_id))
            ->when($this->filter_supplier_id !== '', fn ($q) => $q->where('supplier_id', (int) $this->filter_supplier_id))
            ->latest()
            ->paginate(15);

        $viewingInvoice = $this->viewingId
            ? PurchaseInvoice::with(['branch:id,name', 'supplier:id,name,phone', 'user:id,name', 'items'])->find($this->viewingId)
            : null;

        return $this->adminView('livewire.admin.purchases.manage-purchases', [
            'invoices' => $invoices,
            'viewingInvoice' => $viewingInvoice,
            'branches' => Branch::orderBy('name')->get(['id', 'name']),
            'suppliers' => Supplier::orderBy('name')->get(['id', 'name']),
            'totalCount' => PurchaseInvoice::count(),
            'totalAmount' => (float) PurchaseInvoice::sum('total'),
            'lineSubtotal' => collect($this->items)->sum(
                fn ($i) => (float) ($i['unit_cost'] ?? 0) * (float) ($i['quantity'] ?? 0)
            ),
        ], 'Purchases');
    }
}

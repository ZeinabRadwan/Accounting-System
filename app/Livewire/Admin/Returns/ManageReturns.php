<?php

namespace App\Livewire\Admin\Returns;

use App\Domain\Purchase\Models\PurchaseInvoice;
use App\Domain\Purchase\Models\PurchaseReturn;
use App\Domain\Purchase\Services\PurchaseReturnService;
use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Sales\Models\SalesReturn;
use App\Domain\Sales\Services\SalesReturnService;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use DomainException;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Livewire\Component;
use Livewire\WithPagination;

class ManageReturns extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $tab = 'sales';

    public string $search = '';

    public bool $showReturnForm = false;

    public bool $showReturnDrawer = false;

    public ?int $viewingId = null;

    public string $invoice_search = '';

    /** @var array<int, array{id:int,invoice_number:string,label:string}> */
    public array $invoice_results = [];

    public ?int $selected_invoice_id = null;

    public string $selected_invoice_number = '';

    public string $payment_method = 'cash';

    public ?string $notes = null;

    /**
     * Lines loaded from the selected invoice.
     *
     * @var array<int, array<string, mixed>>
     */
    public array $lines = [];

    public function setTab(string $tab): void
    {
        $this->tab = in_array($tab, ['sales', 'purchase'], true) ? $tab : 'sales';
        $this->resetPage();
        $this->closeReturnForm();
        $this->showReturnDrawer = false;
        $this->viewingId = null;
    }

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedInvoiceSearch(): void
    {
        $term = trim($this->invoice_search);
        if ($term === '') {
            $this->invoice_results = [];

            return;
        }

        if ($this->tab === 'purchase') {
            $this->invoice_results = PurchaseInvoice::query()
                ->with(['supplier:id,name', 'branch:id,name'])
                ->where(function ($q) use ($term) {
                    $q->where('invoice_number', 'like', "%{$term}%")
                        ->orWhereHas('supplier', fn ($s) => $s->where('name', 'like', "%{$term}%"));
                })
                ->latest()
                ->limit(10)
                ->get()
                ->map(fn (PurchaseInvoice $inv) => [
                    'id' => $inv->id,
                    'invoice_number' => $inv->invoice_number,
                    'label' => $inv->invoice_number
                        .' · '.($inv->supplier?->name ?? 'Supplier')
                        .' · '.($inv->branch?->name ?? ''),
                ])
                ->toArray();
        } else {
            $this->invoice_results = SalesInvoice::query()
                ->with(['customer:id,name', 'branch:id,name'])
                ->where(function ($q) {
                    $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
                })
                ->where(function ($q) use ($term) {
                    $q->where('invoice_number', 'like', "%{$term}%")
                        ->orWhereHas('customer', fn ($c) => $c->where('name', 'like', "%{$term}%")
                            ->orWhere('phone', 'like', "%{$term}%"));
                })
                ->latest()
                ->limit(10)
                ->get()
                ->map(fn (SalesInvoice $inv) => [
                    'id' => $inv->id,
                    'invoice_number' => $inv->invoice_number,
                    'label' => $inv->invoice_number
                        .' · '.($inv->customer?->name ?? 'Walk-in')
                        .' · '.($inv->branch?->name ?? ''),
                ])
                ->toArray();
        }
    }

    public function startCreate(): void
    {
        $this->resetForm();
        $this->showReturnForm = true;
    }

    public function closeReturnForm(): void
    {
        $this->showReturnForm = false;
        $this->resetForm();
    }

    public function startView(int $id): void
    {
        $this->viewingId = $id;
        $this->showReturnDrawer = true;
    }

    public function selectInvoice(int $id): void
    {
        if ($this->tab === 'purchase') {
            $invoice = PurchaseInvoice::with('items')->findOrFail($id);
            $this->selected_invoice_id = $invoice->id;
            $this->selected_invoice_number = (string) $invoice->invoice_number;
            $this->payment_method = PaymentMethod::normalize((string) ($invoice->payment_method ?? 'cash'));

            $this->lines = $invoice->items->map(function ($item) {
                $returnedBase = $this->returnedBaseForPurchaseItem((int) $item->id);
                $originalBase = (float) $item->quantity * (float) $item->conversion_factor;
                $remainingBase = max(0, $originalBase - $returnedBase);
                $maxQty = (float) $item->conversion_factor > 0
                    ? round($remainingBase / (float) $item->conversion_factor, 4)
                    : 0;

                return [
                    'invoice_item_id' => $item->id,
                    'product_name' => $item->product_name,
                    'sku' => $item->sku,
                    'unit_name' => $item->unit_name,
                    'conversion_factor' => (float) $item->conversion_factor,
                    'unit_price' => (float) $item->unit_cost,
                    'original_qty' => (float) $item->quantity,
                    'max_qty' => $maxQty,
                    'quantity' => $maxQty > 0 ? $maxQty : 0,
                    'include' => $maxQty > 0,
                ];
            })->values()->toArray();
        } else {
            $invoice = SalesInvoice::with('items')->findOrFail($id);
            $this->selected_invoice_id = $invoice->id;
            $this->selected_invoice_number = (string) $invoice->invoice_number;
            $this->payment_method = PaymentMethod::normalize((string) ($invoice->payment_method ?? 'cash'));

            $this->lines = $invoice->items->map(function ($item) {
                $returnedBase = $this->returnedBaseForSalesItem((int) $item->id);
                $originalBase = (float) $item->quantity * (float) $item->conversion_factor;
                $remainingBase = max(0, $originalBase - $returnedBase);
                $maxQty = (float) $item->conversion_factor > 0
                    ? round($remainingBase / (float) $item->conversion_factor, 4)
                    : 0;

                return [
                    'invoice_item_id' => $item->id,
                    'product_name' => $item->product_name,
                    'sku' => $item->sku,
                    'unit_name' => $item->unit_name,
                    'conversion_factor' => (float) $item->conversion_factor,
                    'unit_price' => (float) $item->unit_price,
                    'original_qty' => (float) $item->quantity,
                    'max_qty' => $maxQty,
                    'quantity' => $maxQty > 0 ? $maxQty : 0,
                    'include' => $maxQty > 0,
                ];
            })->values()->toArray();
        }

        $this->invoice_search = '';
        $this->invoice_results = [];
    }

    public function clearInvoice(): void
    {
        $this->selected_invoice_id = null;
        $this->selected_invoice_number = '';
        $this->lines = [];
        $this->invoice_search = '';
        $this->invoice_results = [];
    }

    public function save(SalesReturnService $salesService, PurchaseReturnService $purchaseService): void
    {
        $this->validate([
            'selected_invoice_id' => ['required', 'integer'],
            'payment_method' => ['required', 'string', Rule::in(PaymentMethod::values())],
            'notes' => ['nullable', 'string', 'max:1000'],
            'lines' => ['required', 'array', 'min:1'],
        ], [
            'selected_invoice_id.required' => 'Select an invoice to return from.',
        ]);

        $selectedLines = collect($this->lines)
            ->filter(fn ($line) => ! empty($line['include']) && (float) ($line['quantity'] ?? 0) > 0)
            ->values();

        if ($selectedLines->isEmpty()) {
            $this->addError('lines', 'Select at least one line with a return quantity.');

            return;
        }

        foreach ($selectedLines as $i => $line) {
            if ((float) $line['quantity'] > (float) $line['max_qty'] + 1e-6) {
                $this->addError('lines', __('Return qty exceeds remaining for :product.', ['product' => $line['product_name']]));

                return;
            }
        }

        try {
            if ($this->tab === 'purchase') {
                $invoice = PurchaseInvoice::findOrFail($this->selected_invoice_id);
                $ret = $purchaseService->createReturn([
                    'purchase_invoice_id' => $invoice->id,
                    'branch_id' => $invoice->branch_id,
                    'user_id' => Auth::id(),
                    'notes' => $this->notes,
                    'payment_method' => $this->payment_method,
                    'items' => $selectedLines->map(fn ($line) => [
                        'purchase_invoice_item_id' => $line['invoice_item_id'],
                        'unit_name' => $line['unit_name'],
                        'conversion_factor' => $line['conversion_factor'],
                        'unit_cost' => $line['unit_price'],
                        'quantity' => $line['quantity'],
                    ])->all(),
                ]);
                $message = __('Purchase return :number saved', ['number' => $ret->return_number]);
            } else {
                $invoice = SalesInvoice::findOrFail($this->selected_invoice_id);
                $ret = $salesService->createReturn([
                    'sales_invoice_id' => $invoice->id,
                    'branch_id' => $invoice->branch_id,
                    'user_id' => Auth::id(),
                    'notes' => $this->notes,
                    'payment_method' => $this->payment_method,
                    'items' => $selectedLines->map(fn ($line) => [
                        'sales_invoice_item_id' => $line['invoice_item_id'],
                        'unit_name' => $line['unit_name'],
                        'conversion_factor' => $line['conversion_factor'],
                        'unit_price' => $line['unit_price'],
                        'quantity' => $line['quantity'],
                    ])->all(),
                ]);
                $message = __('Sales return :number saved', ['number' => $ret->return_number]);
            }
        } catch (DomainException $e) {
            $this->toast($e->getMessage());

            return;
        }

        $this->showReturnForm = false;
        $this->resetForm();
        $this->toast($message);
    }

    protected function returnedBaseForSalesItem(int $invoiceItemId): float
    {
        return (float) DB::table('sales_return_items')
            ->where('sales_invoice_item_id', $invoiceItemId)
            ->sum(DB::raw('quantity * conversion_factor'));
    }

    protected function returnedBaseForPurchaseItem(int $invoiceItemId): float
    {
        return (float) DB::table('purchase_return_items')
            ->where('purchase_invoice_item_id', $invoiceItemId)
            ->sum(DB::raw('quantity * conversion_factor'));
    }

    protected function resetForm(): void
    {
        $this->invoice_search = '';
        $this->invoice_results = [];
        $this->selected_invoice_id = null;
        $this->selected_invoice_number = '';
        $this->payment_method = 'cash';
        $this->notes = null;
        $this->lines = [];
        $this->resetErrorBag();
    }

    public function render(): View
    {
        if ($this->tab === 'purchase') {
            $returns = PurchaseReturn::query()
                ->with(['branch:id,name', 'invoice:id,invoice_number', 'user:id,name'])
                ->withCount('items')
                ->when($this->search !== '', function ($q) {
                    $term = trim($this->search);
                    $q->where(function ($qq) use ($term) {
                        $qq->where('return_number', 'like', "%{$term}%")
                            ->orWhereHas('invoice', fn ($iq) => $iq->where('invoice_number', 'like', "%{$term}%"));
                    });
                })
                ->latest()
                ->paginate(15);

            $viewingReturn = $this->viewingId
                ? PurchaseReturn::with([
                    'branch:id,name',
                    'invoice:id,invoice_number',
                    'user:id,name',
                    'items.product:id,display_name,sku,category_id',
                    'items.product.category:id,name',
                ])->find($this->viewingId)
                : null;
        } else {
            $returns = SalesReturn::query()
                ->with(['branch:id,name', 'invoice:id,invoice_number', 'user:id,name'])
                ->withCount('items')
                ->when($this->search !== '', function ($q) {
                    $term = trim($this->search);
                    $q->where(function ($qq) use ($term) {
                        $qq->where('return_number', 'like', "%{$term}%")
                            ->orWhereHas('invoice', fn ($iq) => $iq->where('invoice_number', 'like', "%{$term}%"));
                    });
                })
                ->latest()
                ->paginate(15);

            $viewingReturn = $this->viewingId
                ? SalesReturn::with([
                    'branch:id,name',
                    'invoice:id,invoice_number',
                    'user:id,name',
                    'items.product:id,display_name,sku,category_id',
                    'items.product.category:id,name',
                ])->find($this->viewingId)
                : null;
        }

        return $this->adminView('livewire.admin.returns.manage-returns', [
            'returns' => $returns,
            'viewingReturn' => $viewingReturn,
            'paymentMethods' => PaymentMethod::cases(),
            'salesCount' => SalesReturn::count(),
            'purchaseCount' => PurchaseReturn::count(),
            'salesTotal' => (float) SalesReturn::sum('total_refund'),
            'purchaseTotal' => (float) PurchaseReturn::sum('total_return_cost'),
        ], 'Returns');
    }
}

<?php

namespace App\Livewire\Sales;

use App\Domain\Branch\Models\Branch;
use App\Domain\Customer\Enums\CustomerType;
use App\Domain\Customer\Enums\StudentClass;
use App\Domain\Customer\Models\Customer;
use App\Domain\Customer\Services\CustomerService;
use App\Domain\Product\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Sales\Services\InvoiceService;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Livewire\Component;

class Pos extends Component
{
    public ?int $customer_id = null;
    public string $customer_name = '';
    public string $customer_phone = '';
    public string $customer_type = '';
    public string $customer_search = '';
    public array $customer_results = [];

    public bool $showQuickCustomer = false;
    public string $quick_name = '';
    public string $quick_phone = '';
    public string $quick_type = 'doctor';
    public string $quick_student_class = '';

    public string $product_search = '';
    public string $filter_category_id = '';

    /** @var array<int, array<string, mixed>> */
    public array $items = [];

    public float $invoice_discount = 0;
    public string $payment_method = 'cash';
    public float $paid_amount = 0;

    public bool $showSaveSuccess = false;
    public string $last_invoice_number = '';
    public ?int $last_invoice_id = null;

    public function currentBranchId(): int
    {
        $user = Auth::user();

        return (int) ($user?->branch_id
            ?? Branch::query()->where('is_active', true)->value('id')
            ?? 0);
    }

    public function payFull(): void
    {
        $this->paid_amount = (float) $this->computeTotals()['total'];
        $this->fx('click');
    }

    public function updatedCustomerSearch(): void
    {
        $term = trim($this->customer_search);
        if ($term === '') {
            $this->customer_results = [];

            return;
        }

        $this->customer_results = app(CustomerService::class)
            ->quickSearch($term, 10)
            ->map(fn (Customer $c) => [
                'id' => $c->id,
                'name' => $c->name,
                'phone' => $c->phone,
                'type' => $this->formatCustomerTypeLabel($c),
            ])
            ->toArray();
    }

    public function selectCustomer(int $id): void
    {
        $customer = Customer::findOrFail($id);
        $this->customer_id = $customer->id;
        $this->customer_name = (string) $customer->name;
        $this->customer_phone = (string) $customer->phone;
        $this->customer_type = $this->formatCustomerTypeLabel($customer);
        $this->customer_search = '';
        $this->customer_results = [];
        $this->fx('click');
    }

    public function clearCustomer(): void
    {
        $this->customer_id = null;
        $this->customer_name = '';
        $this->customer_phone = '';
        $this->customer_type = '';
        $this->customer_search = '';
        $this->customer_results = [];
        $this->fx('click');
    }

    public function openQuickCustomer(): void
    {
        $this->quick_name = $this->customer_name;
        $this->quick_phone = $this->customer_phone;
        $this->quick_type = 'doctor';
        $this->quick_student_class = '';
        $this->resetErrorBag(['quick_name', 'quick_phone', 'quick_type', 'quick_student_class']);
        $this->showQuickCustomer = true;
    }

    public function closeQuickCustomer(): void
    {
        $this->showQuickCustomer = false;
        $this->quick_name = '';
        $this->quick_phone = '';
        $this->quick_type = 'doctor';
        $this->quick_student_class = '';
        $this->resetErrorBag(['quick_name', 'quick_phone', 'quick_type', 'quick_student_class']);
    }

    public function updatedQuickType(): void
    {
        if ($this->quick_type !== CustomerType::Student->value) {
            $this->quick_student_class = '';
        }
    }

    public function saveQuickCustomer(CustomerService $service): void
    {
        $validated = $this->validate([
            'quick_name' => ['required', 'string', 'max:255'],
            'quick_phone' => ['required', 'string', 'max:50'],
            'quick_type' => ['required', 'string', Rule::in(CustomerType::values())],
            'quick_student_class' => [
                'nullable',
                'string',
                Rule::in(array_merge([''], StudentClass::values())),
            ],
        ], [], [
            'quick_name' => 'name',
            'quick_phone' => 'phone',
            'quick_type' => 'type',
            'quick_student_class' => 'student class',
        ]);

        $studentClass = $validated['quick_type'] === CustomerType::Student->value
            ? ($validated['quick_student_class'] ?: null)
            : null;

        $customer = $service->quickCreateIfNotExists(
            $validated['quick_name'],
            $validated['quick_phone'],
            $validated['quick_type'],
            $studentClass
        );
        $this->selectCustomer($customer->id);
        $this->closeQuickCustomer();
        $this->toast('Customer selected.');
    }

    protected function formatCustomerTypeLabel(Customer $customer): string
    {
        $type = $customer->type instanceof CustomerType
            ? $customer->type->label()
            : ucfirst((string) ($customer->type ?? ''));

        if ($type === '') {
            return '';
        }

        $class = $customer->student_class instanceof StudentClass
            ? $customer->student_class->label()
            : null;

        return $class ? "{$type} · {$class}" : $type;
    }

    public function addProduct(int $productId): void
    {
        $product = Product::with(['units', 'category'])
            ->where('is_active', true)
            ->findOrFail($productId);

        $existingIndex = collect($this->items)->search(
            fn ($item) => (int) $item['product_id'] === $product->id
        );

        if ($existingIndex !== false) {
            $this->items[$existingIndex]['quantity'] = (float) $this->items[$existingIndex]['quantity'] + 1;
            $this->fx('add');

            return;
        }

        $unit = $product->units->firstWhere('is_base', true) ?? $product->units->first();
        $price1 = (float) ($unit?->price1 ?? $product->price1);
        $price2 = (float) ($unit?->price2 ?? $unit?->price1 ?? $product->price2 ?? $product->price1);
        $price3 = (float) ($unit?->price3 ?? $unit?->price1 ?? $product->price3 ?? $product->price1);

        $this->items[] = [
            'product_id' => $product->id,
            'display_name' => $product->full_display_name,
            'sku' => $product->sku,
            'unit_name' => $unit?->unit_name ?? $product->base_unit,
            'conversion_factor' => (float) ($unit?->conversion_factor ?? 1),
            'price_level' => 'price1',
            'unit_price' => $price1,
            'quantity' => 1,
            'item_discount' => 0,
            'units' => $product->units->map(fn ($u) => [
                'unit_name' => $u->unit_name,
                'conversion_factor' => (float) $u->conversion_factor,
                'price1' => (float) ($u->price1 ?? $product->price1),
                'price2' => (float) ($u->price2 ?? $u->price1 ?? $product->price2 ?? $product->price1),
                'price3' => (float) ($u->price3 ?? $u->price1 ?? $product->price3 ?? $product->price1),
            ])->values()->toArray(),
            'prices' => [
                'price1' => $price1,
                'price2' => $price2,
                'price3' => $price3,
            ],
        ];
        $this->fx('add');
    }

    public function setUnit(int $index, string $unitName): void
    {
        if (! isset($this->items[$index])) {
            return;
        }

        $units = $this->items[$index]['units'] ?? [];
        $unit = collect($units)->firstWhere('unit_name', $unitName);
        if (! $unit) {
            return;
        }

        $level = $this->items[$index]['price_level'] ?? 'price1';
        $this->items[$index]['unit_name'] = $unit['unit_name'];
        $this->items[$index]['conversion_factor'] = (float) $unit['conversion_factor'];
        $this->items[$index]['prices'] = [
            'price1' => (float) $unit['price1'],
            'price2' => (float) $unit['price2'],
            'price3' => (float) $unit['price3'],
        ];
        $this->items[$index]['unit_price'] = (float) ($unit[$level] ?? $unit['price1']);
    }

    public function setPriceLevel(int $index, string $level): void
    {
        if (! isset($this->items[$index])) {
            return;
        }

        if (! in_array($level, ['price1', 'price2', 'price3'], true)) {
            return;
        }

        $this->items[$index]['price_level'] = $level;
        $prices = $this->items[$index]['prices'] ?? [];
        $this->items[$index]['unit_price'] = (float) ($prices[$level] ?? $this->items[$index]['unit_price']);
    }

    public function incrementQty(int $index): void
    {
        if (! isset($this->items[$index])) {
            return;
        }

        $this->items[$index]['quantity'] = (float) $this->items[$index]['quantity'] + 1;
        $this->fx('click');
    }

    public function decrementQty(int $index): void
    {
        if (! isset($this->items[$index])) {
            return;
        }

        $qty = (float) $this->items[$index]['quantity'] - 1;
        $this->items[$index]['quantity'] = max(1, $qty);
        $this->fx('click');
    }

    public function removeItem(int $index): void
    {
        if (isset($this->items[$index])) {
            array_splice($this->items, $index, 1);
            $this->fx('remove');
        }
    }

    public function clearCart(): void
    {
        $this->items = [];
        $this->invoice_discount = 0;
        $this->paid_amount = 0;
        $this->fx('clear');
    }

    public function save(InvoiceService $service): void
    {
        $user = Auth::user();
        $branchId = $this->currentBranchId();

        if ($branchId <= 0) {
            $this->addError('items', __('No branch available for this sale. Create an active branch first.'));
            $this->toast(__('No branch available for this sale.'), 'danger');
            $this->fx('error');

            return;
        }

        foreach ($this->items as $i => $item) {
            if (($this->items[$i]['item_discount'] ?? '') === '' || $this->items[$i]['item_discount'] === null) {
                $this->items[$i]['item_discount'] = 0;
            }
            $this->items[$i]['quantity'] = (float) ($this->items[$i]['quantity'] ?? 0);
            $this->items[$i]['unit_price'] = (float) ($this->items[$i]['unit_price'] ?? 0);
            $this->items[$i]['conversion_factor'] = (float) ($this->items[$i]['conversion_factor'] ?? 1);
        }

        if ((float) $this->invoice_discount < 0) {
            $this->invoice_discount = 0;
        }
        if ((float) $this->paid_amount < 0) {
            $this->paid_amount = 0;
        }

        $this->validate([
            'items' => ['required', 'array', 'min:1'],
            'items.*.product_id' => ['required', 'integer', 'exists:products,id'],
            'items.*.unit_name' => ['required', 'string'],
            'items.*.conversion_factor' => ['required', 'numeric', 'gt:0'],
            'items.*.price_level' => ['required', Rule::in(['price1', 'price2', 'price3'])],
            'items.*.unit_price' => ['required', 'numeric', 'gte:0'],
            'items.*.quantity' => ['required', 'numeric', 'gt:0'],
            'items.*.item_discount' => ['nullable', 'numeric', 'gte:0'],
            'invoice_discount' => ['nullable', 'numeric', 'gte:0'],
            'payment_method' => ['required', 'string'],
            'paid_amount' => ['nullable', 'numeric', 'gte:0'],
            'customer_id' => ['nullable', 'integer', 'exists:customers,id'],
        ], [
            'items.required' => __('Add at least one product to the cart.'),
            'items.min' => __('Add at least one product to the cart.'),
        ]);

        $stockErrors = $this->validateStockAvailability($branchId);
        if ($stockErrors !== []) {
            $message = implode(' ', $stockErrors);
            $this->addError('items', $message);
            $this->js(
                'window.Alpine && Alpine.store("toast") && Alpine.store("toast").show('
                .json_encode($message).', '
                .json_encode('danger').')'
            );
            $this->fx('error');

            return;
        }

        $payload = [
            'branch_id' => $branchId,
            'user_id' => (int) $user->id,
            'customer_id' => $this->customer_id,
            'customer' => $this->prepareCustomerPayload(),
            'items' => collect($this->items)->map(fn ($item) => [
                'product_id' => (int) $item['product_id'],
                'unit_name' => (string) $item['unit_name'],
                'conversion_factor' => (float) $item['conversion_factor'],
                'price_level' => (string) $item['price_level'],
                'unit_price' => (float) $item['unit_price'],
                'quantity' => (float) $item['quantity'],
                'item_discount' => (float) ($item['item_discount'] ?? 0),
            ])->values()->all(),
            'invoice_discount' => (float) $this->invoice_discount,
            'payment_method' => $this->payment_method,
            'paid_amount' => (float) $this->paid_amount,
        ];

        try {
            $invoice = $service->createInvoice($payload);
        } catch (\DomainException $e) {
            $this->addError('items', $e->getMessage());
            $this->toast($e->getMessage(), 'danger');
            $this->fx('error');

            return;
        } catch (\Throwable $e) {
            report($e);
            $this->addError('items', __('Could not save invoice. Please try again.'));
            $this->toast(__('Could not save invoice. Please try again.'), 'danger');
            $this->fx('error');

            return;
        }

        $this->last_invoice_id = $invoice->id;
        $this->last_invoice_number = (string) $invoice->invoice_number;
        $this->showSaveSuccess = true;
        $this->resetSale(keepSuccess: true);
        $this->toast(__('Invoice :number saved', ['number' => $invoice->invoice_number]));
        $this->fx('success');
        $this->dispatch('saved', invoiceId: $invoice->id, invoiceNumber: $invoice->invoice_number);
    }

    public function closeSaveSuccess(): void
    {
        $this->showSaveSuccess = false;
        $this->last_invoice_id = null;
        $this->last_invoice_number = '';
    }

    /**
     * @return list<string>
     */
    protected function validateStockAvailability(int $branchId): array
    {
        $stockService = app(\App\Domain\Inventory\Services\StockService::class);
        $neededByProduct = [];

        foreach ($this->items as $item) {
            $productId = (int) $item['product_id'];
            $baseQty = (float) $item['quantity'] * (float) $item['conversion_factor'];
            $neededByProduct[$productId] = ($neededByProduct[$productId] ?? 0) + $baseQty;
        }

        $errors = [];
        foreach ($neededByProduct as $productId => $needed) {
            $available = $stockService->available($branchId, $productId);
            if ($available + 0.0001 < $needed) {
                $name = collect($this->items)->firstWhere('product_id', $productId)['display_name'] ?? ('#'.$productId);
                $errors[] = __('Insufficient stock for :name (need :needed, available :available).', [
                    'name' => $name,
                    'needed' => $needed,
                    'available' => $available,
                ]);
            }
        }

        return $errors;
    }

    protected function prepareCustomerPayload(): ?array
    {
        if ($this->customer_id) {
            return null;
        }

        if ($this->customer_name === '' && $this->customer_phone === '') {
            return null;
        }

        return [
            'name' => $this->customer_name !== '' ? $this->customer_name : 'Walk-in',
            'phone' => $this->customer_phone !== '' ? $this->customer_phone : 'N/A',
        ];
    }

    protected function computeTotals(): array
    {
        $subtotal = 0.0;
        foreach ($this->items as $i) {
            $lineSubtotal = (float) $i['quantity'] * (float) $i['unit_price'];
            $lineTotal = max(0.0, $lineSubtotal - (float) ($i['item_discount'] ?? 0));
            $subtotal += $lineTotal;
        }
        $total = max(0.0, $subtotal - (float) $this->invoice_discount);
        $remaining = max(0.0, $total - (float) $this->paid_amount);

        return [
            'subtotal' => $subtotal,
            'total' => $total,
            'remaining' => $remaining,
        ];
    }

    protected function resetSale(bool $keepSuccess = false): void
    {
        $this->clearCustomer();
        $this->product_search = '';
        $this->filter_category_id = '';
        $this->items = [];
        $this->invoice_discount = 0;
        $this->payment_method = 'cash';
        $this->paid_amount = 0;
        $this->closeQuickCustomer();
        $this->resetErrorBag();

        if (! $keepSuccess) {
            $this->closeSaveSuccess();
        }
    }

    protected function toast(string $message, string $type = 'success'): void
    {
        $this->js(
            'window.Alpine && Alpine.store("toast") && Alpine.store("toast").show('
            .json_encode($message).', '
            .json_encode($type).')'
        );
    }

    protected function fx(string $sound): void
    {
        $this->dispatch('pos-fx', sound: $sound);
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function catalogProducts(): array
    {
        $term = trim($this->product_search);
        $categoryId = $this->filter_category_id !== '' ? (int) $this->filter_category_id : null;
        $branchId = $this->currentBranchId();
        $stockService = app(\App\Domain\Inventory\Services\StockService::class);

        return Product::query()
            ->where('is_active', true)
            ->when($categoryId, fn ($q) => $q->where('category_id', $categoryId))
            ->when($term !== '', function ($q) use ($term) {
                $q->where(function ($qq) use ($term) {
                    $qq->where('display_name', 'like', "%{$term}%")
                        ->orWhere('sku', 'like', "%{$term}%");
                });
            })
            ->with(['category:id,name', 'units'])
            ->orderBy('display_name')
            ->limit($term === '' && ! $categoryId ? 48 : 60)
            ->get()
            ->map(function (Product $p) use ($branchId, $stockService) {
                $base = $p->units->firstWhere('is_base', true) ?? $p->units->first();

                return [
                    'id' => $p->id,
                    'display_name' => $p->full_display_name,
                    'sku' => $p->sku,
                    'category' => $p->category?->name,
                    'price' => (float) ($base?->price1 ?? $p->price1),
                    'unit' => $base?->unit_name ?? $p->base_unit,
                    'stock' => $branchId > 0 ? $stockService->available($branchId, $p->id) : 0,
                ];
            })
            ->toArray();
    }

    public function render(): View
    {
        return view('livewire.sales.pos', [
            'totals' => $this->computeTotals(),
            'branchId' => $this->currentBranchId(),
            'categories' => Category::query()
                ->where('is_active', true)
                ->orderBy('name')
                ->get(['id', 'name']),
            'catalog' => $this->catalogProducts(),
        ])->layout('layouts.pos', ['title' => 'POS']);
    }
}

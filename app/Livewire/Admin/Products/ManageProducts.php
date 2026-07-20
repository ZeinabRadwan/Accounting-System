<?php

namespace App\Livewire\Admin\Products;

use App\Domain\Product\Models\Category;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Models\ProductUnit;
use App\Domain\Product\Services\ProductService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use DomainException;
use Illuminate\Contracts\View\View;
use Illuminate\Validation\Validator;
use InvalidArgumentException;
use Livewire\Component;
use Livewire\WithPagination;

class ManageProducts extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';
    public string $filter_category_id = '';
    public string $filter_status = '';

    public bool $showProductForm = false;
    public bool $showProductDrawer = false;
    public bool $showDeleteConfirm = false;

    public ?int $editingId = null;
    public ?int $viewingId = null;
    public ?int $deletingId = null;

    public ?int $category_id = null;
    public string $display_name = '';
    public float|string $minimum_stock = 10;

    /** @var array<int, array{unit_name: string, is_base: bool, conversion_factor: mixed, price1: mixed, price2: mixed, price3: mixed}> */
    public array $units = [];

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterCategoryId(): void
    {
        $this->resetPage();
    }

    public function updatedFilterStatus(): void
    {
        $this->resetPage();
    }

    public function addUnit(): void
    {
        $this->units[] = [
            'unit_name' => '',
            'is_base' => $this->units === [],
            'conversion_factor' => $this->units === [] ? 1 : null,
            'price1' => null,
            'price2' => null,
            'price3' => null,
        ];
    }

    public function removeUnit(int $index): void
    {
        if (count($this->units) <= 1) {
            return;
        }

        if (! isset($this->units[$index])) {
            return;
        }

        $wasBase = (bool) ($this->units[$index]['is_base'] ?? false);
        array_splice($this->units, $index, 1);

        if ($wasBase && $this->units !== []) {
            $this->setBaseUnit(0);
        }
    }

    public function setBaseUnit(int $index): void
    {
        if (! isset($this->units[$index])) {
            return;
        }

        foreach ($this->units as $i => $unit) {
            $this->units[$i]['is_base'] = $i === $index;
            if ($i === $index) {
                $this->units[$i]['conversion_factor'] = 1;
            }
        }
    }

    public function updatedUnits($value, string $key): void
    {
        if (! preg_match('/^(\d+)\.(is_base|conversion_factor)$/', $key, $m)) {
            return;
        }

        $index = (int) $m[1];
        $field = $m[2];

        if ($field === 'is_base' && filter_var($value, FILTER_VALIDATE_BOOLEAN)) {
            $this->setBaseUnit($index);

            return;
        }

        if ($field === 'conversion_factor' && ($this->units[$index]['is_base'] ?? false)) {
            $this->units[$index]['conversion_factor'] = 1;
        }
    }

    public function startCreate(): void
    {
        $this->resetForm();
        $this->addUnit();
        $this->showProductForm = true;
    }

    public function startEdit(int $id): void
    {
        $p = Product::with(['units', 'category'])->findOrFail($id);
        $this->editingId = $p->id;
        $this->category_id = $p->category_id;
        $this->display_name = Product::extractProductName((string) $p->display_name, $p->category?->name);
        $this->minimum_stock = (float) ($p->minimum_stock ?? 10);
        $this->units = $p->units
            ->sortByDesc('is_base')
            ->values()
            ->map(fn ($u) => [
                'unit_name' => (string) $u->unit_name,
                'is_base' => (bool) $u->is_base,
                'conversion_factor' => $u->conversion_factor !== null ? (float) $u->conversion_factor : 1,
                'price1' => $u->price1 !== null ? (float) $u->price1 : null,
                'price2' => $u->price2 !== null ? (float) $u->price2 : null,
                'price3' => $u->price3 !== null ? (float) $u->price3 : null,
            ])
            ->toArray();

        if ($this->units === []) {
            $this->addUnit();
        } elseif (! collect($this->units)->contains(fn ($u) => ! empty($u['is_base']))) {
            $this->setBaseUnit(0);
        }

        $this->resetErrorBag();
        $this->showProductForm = true;
    }

    public function startView(int $id): void
    {
        $this->viewingId = $id;
        $this->showProductDrawer = true;
    }

    public function closeProductForm(): void
    {
        $this->showProductForm = false;
        $this->resetForm();
    }

    public function save(ProductService $service): void
    {
        $this->withValidator(function (Validator $validator) {
            $validator->after(function (Validator $validator) {
                $baseCount = collect($this->units)->filter(
                    fn ($u) => filter_var($u['is_base'] ?? false, FILTER_VALIDATE_BOOLEAN)
                )->count();

                if ($baseCount !== 1) {
                    $validator->errors()->add('units', 'Exactly one base unit is required.');
                }

                foreach ($this->units as $index => $unit) {
                    $isBase = filter_var($unit['is_base'] ?? false, FILTER_VALIDATE_BOOLEAN);
                    if ($isBase) {
                        continue;
                    }
                    $factor = $unit['conversion_factor'] ?? null;
                    if ($factor === null || $factor === '') {
                        $validator->errors()->add(
                            "units.{$index}.conversion_factor",
                            'Conversion factor is required for non-base units.'
                        );
                    }
                }
            });
        });

        $validated = $this->validate([
            'category_id' => ['required', 'integer', 'exists:categories,id'],
            'display_name' => ['required', 'string', 'max:255'],
            'minimum_stock' => ['required', 'numeric', 'min:0'],
            'units' => ['required', 'array', 'min:1'],
            'units.*.unit_name' => ['required', 'string', 'max:50', 'distinct:ignore_case'],
            'units.*.is_base' => ['boolean'],
            'units.*.conversion_factor' => ['nullable', 'numeric', 'gt:0'],
            'units.*.price1' => ['required', 'numeric', 'min:0'],
            'units.*.price2' => ['nullable', 'numeric', 'min:0'],
            'units.*.price3' => ['nullable', 'numeric', 'min:0'],
        ], [
            'category_id.required' => 'Category is required.',
            'display_name.required' => 'Product name is required.',
            'minimum_stock.required' => 'Minimum stock is required.',
            'units.required' => 'At least one unit is required.',
            'units.min' => 'At least one unit is required.',
            'units.*.unit_name.required' => 'Unit name is required.',
            'units.*.unit_name.distinct' => 'Duplicate unit names are not allowed.',
            'units.*.price1.required' => 'Price 1 is required.',
            'units.*.conversion_factor.gt' => 'Conversion factor must be greater than 0.',
        ]);

        $payload = [
            'category_id' => $validated['category_id'],
            'display_name' => $validated['display_name'],
            'minimum_stock' => (float) $validated['minimum_stock'],
            'units' => collect($this->units)->map(function ($unit) {
                $isBase = filter_var($unit['is_base'] ?? false, FILTER_VALIDATE_BOOLEAN);

                return [
                    'unit_name' => $unit['unit_name'],
                    'is_base' => $isBase,
                    'conversion_factor' => $isBase ? 1 : $unit['conversion_factor'],
                    'price1' => $unit['price1'],
                    'price2' => $unit['price2'] ?? null,
                    'price3' => $unit['price3'] ?? null,
                ];
            })->values()->all(),
        ];

        try {
            if ($this->editingId) {
                $service->update(Product::findOrFail($this->editingId), $payload);
                $message = 'Data updated successfully.';
            } else {
                $service->create($payload);
                $message = 'Product created successfully.';
            }
        } catch (InvalidArgumentException|DomainException $e) {
            $this->toastError($e->getMessage());

            return;
        }

        $this->showProductForm = false;
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

    public function confirmDelete(ProductService $service): void
    {
        if (! $this->deletingId) {
            return;
        }

        $service->delete(Product::findOrFail($this->deletingId));

        if ($this->viewingId === $this->deletingId) {
            $this->showProductDrawer = false;
            $this->viewingId = null;
        }

        $this->deletingId = null;
        $this->showDeleteConfirm = false;
        $this->toast('Item deleted successfully.');
    }

    protected function resetForm(): void
    {
        $this->editingId = null;
        $this->category_id = null;
        $this->display_name = '';
        $this->minimum_stock = 10;
        $this->units = [];
        $this->resetErrorBag();
    }

    public function render(ProductService $service): View
    {
        $categoryId = $this->filter_category_id !== '' ? (int) $this->filter_category_id : null;
        $status = $this->filter_status !== '' ? $this->filter_status : null;

        $products = $service->paginate($categoryId, $this->search !== '' ? $this->search : null, $status, 15);
        $categories = Category::orderBy('name')->get(['id', 'name']);

        $viewingProduct = $this->viewingId
            ? Product::with(['category', 'units'])->find($this->viewingId)
            : null;

        return $this->adminView('livewire.admin.products.manage-products', [
            'products' => $products,
            'categories' => $categories,
            'viewingProduct' => $viewingProduct,
            'activeProducts' => Product::where('is_active', true)->count(),
            'unitsCount' => ProductUnit::count(),
        ], 'Products');
    }
}

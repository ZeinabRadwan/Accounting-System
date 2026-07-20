<?php

namespace App\Livewire\Admin\Products;

use App\Domain\Product\Models\Product;
use App\Domain\Product\Services\ProductService;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use Illuminate\Contracts\View\View;
use Livewire\Attributes\On;
use Livewire\Component;

class ProductCrud extends Component
{
    public $id = null;
    public $display_name = '';
    public $sku = '';
    public $category_id = null;
    public $base_unit = '';
    public $price1 = 0;
    public $price2 = null;
    public $price3 = null;
    public $is_active = true;

    public $categories = [];

    #[On('open-modal')]
    public function whenOpenModal($data = null)
    {
        if (! is_array($data)) {
            return;
        }
        if (($data['name'] ?? null) !== 'product-form') {
            return;
        }
        $this->resetForm();
        if (! empty($data['id'])) {
            $p = Product::with('units')->find((int) $data['id']);
            if ($p) {
                $this->id = $p->id;
                $this->display_name = $p->display_name;
                $this->sku = $p->sku;
                $this->category_id = $p->category_id;
                $this->base_unit = $p->base_unit;
                $this->price1 = (float) $p->price1;
                $this->price2 = $p->price2 !== null ? (float) $p->price2 : null;
                $this->price3 = $p->price3 !== null ? (float) $p->price3 : null;
                $this->is_active = (bool) $p->is_active;
            }
        }
    }

    public function save(ProductService $service)
    {
        $data = [
            'category_id' => $this->category_id,
            'display_name' => $this->display_name,
            'sku' => $this->sku,
            'units' => [[
                'unit_name' => $this->base_unit ?: 'pcs',
                'conversion_factor' => 1,
                'price1' => $this->price1,
                'price2' => $this->price2,
                'price3' => $this->price3,
                'is_base' => true,
            ]],
        ];

        if ($this->id) {
            $rules = app(UpdateProductRequest::class)->rules();
            validator($data, $rules)->validate();
            $product = Product::findOrFail($this->id);
            $service->update($product, $data);
        } else {
            $rules = app(StoreProductRequest::class)->rules();
            validator($data, $rules)->validate();
            $service->create($data);
        }

        $this->dispatch('close-modal', name: 'product-form');
        session()->flash('status', 'Product saved');

        return redirect(request()->fullUrl());
    }

    public function render(): View
    {
        return view('livewire.admin.products.product-crud');
    }

    protected function resetForm(): void
    {
        $this->id = null;
        $this->display_name = '';
        $this->sku = '';
        $this->category_id = null;
        $this->base_unit = '';
        $this->price1 = 0;
        $this->price2 = null;
        $this->price3 = null;
        $this->is_active = true;
    }
}

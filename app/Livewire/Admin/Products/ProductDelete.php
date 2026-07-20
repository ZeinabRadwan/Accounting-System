<?php

namespace App\Livewire\Admin\Products;

use App\Domain\Product\Models\Product;
use Illuminate\Contracts\View\View;
use Livewire\Attributes\On;
use Livewire\Component;

class ProductDelete extends Component
{
    public ?int $id = null;

    #[On('open-modal')]
    public function whenOpenModal($data = null)
    {
        if (! is_array($data)) {
            return;
        }
        if (($data['name'] ?? null) !== 'product-delete') {
            return;
        }
        $this->id = $data['id'] ?? null;
    }

    public function delete(): void
    {
        if ($this->id) {
            Product::whereKey($this->id)->delete();
        }
        $this->dispatch('close-modal', name: 'product-delete');
        session()->flash('status', 'Product deleted');
        $this->redirect(request()->fullUrl(), navigate: true);
    }

    public function render(): View
    {
        return view('livewire.admin.products.product-delete');
    }
}


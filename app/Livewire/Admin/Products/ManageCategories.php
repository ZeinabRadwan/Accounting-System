<?php

namespace App\Livewire\Admin\Products;

use App\Domain\Product\Models\Category;
use App\Domain\Product\Services\CategoryService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Livewire\Component;
use Livewire\WithPagination;

class ManageCategories extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';
    public string $filter_status = '';

    public bool $showCategoryForm = false;
    public bool $showCategoryDrawer = false;
    public bool $showDeleteConfirm = false;

    public ?int $editingId = null;
    public ?int $viewingId = null;
    public ?int $deletingId = null;

    public string $name = '';
    public bool $is_active = true;

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterStatus(): void
    {
        $this->resetPage();
    }

    public function startCreate(): void
    {
        $this->resetForm();
        $this->showCategoryForm = true;
    }

    public function startEdit(int $id): void
    {
        $cat = Category::findOrFail($id);
        $this->editingId = $cat->id;
        $this->name = (string) $cat->name;
        $this->is_active = (bool) $cat->is_active;
        $this->resetErrorBag();
        $this->showCategoryForm = true;
    }

    public function startView(int $id): void
    {
        $this->viewingId = $id;
        $this->showCategoryDrawer = true;
    }

    public function closeCategoryForm(): void
    {
        $this->showCategoryForm = false;
        $this->resetForm();
    }

    public function save(CategoryService $service): void
    {
        $validated = $this->validate([
            'name' => ['required', 'string', 'max:255'],
            'is_active' => ['boolean'],
        ]);

        if ($this->editingId) {
            $service->update(Category::findOrFail($this->editingId), $validated);
            $message = 'Category updated successfully.';
        } else {
            $service->create($validated);
            $message = 'Category created successfully.';
        }

        $this->showCategoryForm = false;
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

    public function confirmDelete(CategoryService $service): void
    {
        if (! $this->deletingId) {
            return;
        }

        $service->delete(Category::findOrFail($this->deletingId));

        if ($this->viewingId === $this->deletingId) {
            $this->showCategoryDrawer = false;
            $this->viewingId = null;
        }

        $this->deletingId = null;
        $this->showDeleteConfirm = false;
        $this->toast('Category deleted successfully.');
    }

    protected function resetForm(): void
    {
        $this->editingId = null;
        $this->name = '';
        $this->is_active = true;
        $this->resetErrorBag();
    }

    public function render(CategoryService $service): View
    {
        $categories = Category::query()
            ->when($this->search !== '', function ($q) {
                $term = trim($this->search);
                $q->where('name', 'like', "%{$term}%");
            })
            ->when($this->filter_status === 'active', fn ($q) => $q->where('is_active', true))
            ->when($this->filter_status === 'inactive', fn ($q) => $q->where('is_active', false))
            ->withCount('products')
            ->orderBy('name')
            ->paginate(15);

        $viewingCategory = $this->viewingId
            ? Category::withCount('products')->find($this->viewingId)
            : null;

        return $this->adminView('livewire.admin.products.manage-categories', [
            'categories' => $categories,
            'viewingCategory' => $viewingCategory,
        ], 'Categories');
    }
}

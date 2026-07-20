<?php

namespace App\Domain\Product\Services;

use App\Domain\Product\Models\Category;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class CategoryService
{
    public function paginate(?string $search = null, int $perPage = 15): LengthAwarePaginator
    {
        return Category::query()
            ->when($search, fn ($q) => $q->where('name', 'like', "%{$search}%"))
            ->orderBy('name')
            ->paginate($perPage);
    }

    public function create(array $data): Category
    {
        return Category::create([
            'name' => $data['name'],
            'is_active' => (bool) ($data['is_active'] ?? true),
        ]);
    }

    public function update(Category $category, array $data): Category
    {
        $category->fill([
            'name' => $data['name'],
            'is_active' => (bool) ($data['is_active'] ?? $category->is_active),
        ])->save();

        return $category->refresh();
    }

    public function delete(Category $category): void
    {
        $category->delete();
    }
}


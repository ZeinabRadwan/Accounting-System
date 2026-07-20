<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Domain\Product\Models\Category;
use App\Domain\Product\Services\ProductService;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ProductController extends Controller
{
    public function categories(): View
    {
        return view('admin.products.categories');
    }

    public function products(Request $request, ProductService $service): View
    {
        $search = (string) $request->query('q', '');
        $categoryId = $request->filled('category_id') ? (int) $request->query('category_id') : null;
        $status = $request->filled('status') ? (string) $request->query('status') : null;

        $products = $service->paginate($categoryId, $search, $status, 15);

        $productCount = (int) $products->total();
        $activeProducts = (int) $products->total();
        $categoriesCount = (int) Category::count();
        $unitsCount = 0;

        $categories = Category::orderBy('name')->get(['id', 'name']);

        return view('admin.products.products', [
            'products' => $products,
            'productCount' => $productCount,
            'activeProducts' => $activeProducts,
            'categoriesCount' => $categoriesCount,
            'unitsCount' => $unitsCount,
            'categories' => $categories,
            'filters' => [
                'q' => $search,
                'category_id' => $categoryId,
                'status' => $status,
            ],
        ]);
    }
}

<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use App\Models\ProductSubCategory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductSelectReource;
use App\Http\Resources\ProductSubCategoryResource;
use App\Http\Requests\Product\StoreProductSubCategoryRequest;
use App\Http\Requests\Product\UpdateProductSubCategoryRequest;
use Illuminate\Support\Facades\DB;

class ProSubCatController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:product-sub-category-list', ['only' => ['index', 'search']]);
        $this->middleware('can:product-sub-category-create', ['only' => ['create']]);
        $this->middleware('can:product-sub-category-edit', ['only' => ['update']]);
        $this->middleware('can:product-sub-category-create', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $query = ProductSubCategory::with('category')
            ->whereIn('branch_id', $branchIds)
            ->latest();
            
        return ProductSubCategoryResource::collection($query->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductSubCategoryRequest $request)
    {
        try {
            // store sub category
            $user = Auth::user();
            $branchId = (int) ($user->default_branch_id ?? 0);
            $branchIds = $this->getUserBranchIds($user);
            
            // generate code (filtered by branch)
            $code = 1;
            $prevCode = ProductSubCategory::whereIn('branch_id', $branchIds)->latest()->first();
            if ($prevCode) {
                $code = $prevCode->code + 1;
            }
            
          $ProductSubCategory =  ProductSubCategory::create([
                'name' => $request->name,
                'code' => $code,
                'cat_id' => $request->category['id'],
                'note' => clean($request->note),
                'status' => $request->status,
                'branch_id' => $branchId,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($ProductSubCategory)
                ->withProperties([
                    'name' => $request->name,
                    'code' => '[' . config('config.proSubCatPrefix') . '-' . $code . ']',
                    'event' => 'Create',
                    'slug' => $ProductSubCategory->slug,
                    'routeName' => ''
                ])
                ->useLog('Product Sub Category Created')
                ->log('Product Sub Category Created');

            return $this->responseWithSuccess('Sub category added successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        try {
            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);
            
            $subCategory = ProductSubCategory::with('category')
                ->where('slug', $slug)
                ->whereIn('branch_id', $branchIds)
                ->first();

            if (!$subCategory) {
                return $this->responseWithError('Sub category not found');
            }

            return new ProductSubCategoryResource($subCategory);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductSubCategoryRequest $request, $slug)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $subCategory = ProductSubCategory::where('slug', $slug)
            ->whereIn('branch_id', $branchIds)
            ->first();

        if (!$subCategory) {
            return $this->responseWithError('Sub category not found');
        }

        try {
            // update sub category
            $subCategory->update([
                'name' => $request->name,
                'cat_id' => $request->category['id'],
                'note' => clean($request->note),
                'status' => $request->status,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($subCategory)
                ->withProperties([
                    'name' => $subCategory->name,
                    'code' => '[' . config('config.proSubCatPrefix') . '-' . $subCategory->code . ']',
                    'event' => 'Update',
                    'slug' => $subCategory->slug,
                    'routeName' => ''
                ])
                ->useLog('Product Sub Category Updated')
                ->log('Product Sub Category Updated');

            return $this->responseWithSuccess('Sub category updated successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        try {
            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);
            
            $subCategory = ProductSubCategory::where('slug', $slug)
                ->whereIn('branch_id', $branchIds)
                ->first();
                
            if (!$subCategory) {
                return $this->responseWithError('Sub category not found');
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($subCategory)
                ->withProperties([
                    'name' => $subCategory->name,
                    'code' => '[' . config('config.proSubCatPrefix') . '-' . $subCategory->code . ']',
                    'event' => 'Delete'
                ])
                ->useLog('Product Sub Category Deleted')
                ->log('Product Sub Category Deleted');


            $subCategory->delete();

            return $this->responseWithSuccess('Sub category deleted successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * search resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $term = $request->term;
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);

        $query = ProductSubCategory::with('category')
            ->whereIn('branch_id', $branchIds)
            ->where(function($q) use ($term) {
                $q->where('name', 'LIKE', '%'.$term.'%')
                  ->orWhere('note', 'LIKE', '%'.$term.'%')
                  ->orWhereHas('category', function ($newQuery) use ($term) {
                      $newQuery->where('name', 'LIKE', '%'.$term.'%');
                  });
            })
            ->latest()
            ->paginate($request->perPage);

        return ProductSubCategoryResource::collection($query);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allSubCategories()
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $subCategories = ProductSubCategory::where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->latest()
            ->get();

        return ProductSubCategoryResource::collection($subCategories);
    }

    // retun subcategories by category
    public function subCategoriesByCategory($slug)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        if ($slug == 'all') {
            $subCategories = ProductSubCategory::whereIn('branch_id', $branchIds)->latest()->get();
            $products = Product::whereIn('branch_id', $branchIds)->latest()->get();
        } else {
            $category = ProductCategory::where('slug', $slug)
                ->whereIn('branch_id', $branchIds)
                ->first();
                
            if (!$category) {
                return $this->responseWithError('Category not found');
            }
            
            $subCategories = ProductSubCategory::where('cat_id', $category->id)
                ->whereIn('branch_id', $branchIds)
                ->latest()
                ->get();
            $products = Product::with('proSubCategory.category')
                ->whereIn('branch_id', $branchIds)
                ->whereHas('proSubCategory', function ($newQuery) use ($category, $branchIds) {
                    $newQuery->where('cat_id', $category->id)
                        ->whereIn('branch_id', $branchIds);
                })->get();
        }

        return [
            'cats' => ProductSubCategoryResource::collection($subCategories),
            'products' => ProductResource::collection($products),
        ];
    }

    // retun subcategories by category
    public function allSubCategoriesByCategory($slug)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        if ($slug == 'all') {
            $subCategories = ProductSubCategory::whereIn('branch_id', $branchIds)->latest()->get();
            $products = Product::whereIn('branch_id', $branchIds)->latest()->paginate(5);
        } else {
            $category = ProductCategory::where('slug', $slug)
                ->whereIn('branch_id', $branchIds)
                ->first();
                
            if (!$category) {
                return $this->responseWithError('Category not found');
            }
            
            $subCategories = ProductSubCategory::where('cat_id', $category->id)
                ->whereIn('branch_id', $branchIds)
                ->latest()
                ->get();
            $products = Product::with('proSubCategory.category')
                ->whereIn('branch_id', $branchIds)
                ->whereHas('proSubCategory', function ($newQuery) use ($category, $branchIds) {
                    $newQuery->where('cat_id', $category->id)
                        ->whereIn('branch_id', $branchIds);
                })->paginate(5);
        }

        return [
            'cats' => ProductSubCategoryResource::collection($subCategories),
            'products' => ProductSelectReource::collection($products),
        ];
    }
    
    private function getUserBranchIds($user)
    {


        $defaultBranchId = (int) ($user->default_branch_id ?? 0);
        return [$defaultBranchId > 0 ? $defaultBranchId : 0];


        // Super admin can see all branches
        // if ((int) $user->account_role === 1) {
        //     return \App\Models\Branch::where('is_active', true)->pluck('id')->toArray();
        // }
        
        // // Get all branch IDs from branch_user table
        // $branchIds = DB::table('branch_user')
        //     ->where('user_id', $user->id)
        //     ->pluck('branch_id')
        //     ->toArray();
        
        // // If no branches assigned, fall back to default_branch_id
        // if (empty($branchIds)) {
        //     $defaultBranchId = (int) ($user->default_branch_id ?? 0);
        //     return $defaultBranchId > 0 ? [$defaultBranchId] : [0];
        // }
        
        // return $branchIds;
    }
}

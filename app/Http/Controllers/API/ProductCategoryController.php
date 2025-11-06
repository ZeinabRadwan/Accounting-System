<?php

namespace App\Http\Controllers\API;

use Exception;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ProductCategoryResource;
use App\Http\Requests\Product\StoreProductCategoryRequest;
use App\Http\Requests\Product\UpdateProductCategoryRequest;

class ProductCategoryController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:product-category-list', ['only' => ['index', 'search']]);
        $this->middleware('can:product-category-create', ['only' => ['create']]);
        $this->middleware('can:product-category-edit', ['only' => ['update']]);
        $this->middleware('can:product-category-delete', ['only' => ['destroy']]);
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
        
        $query = ProductCategory::whereIn('branch_id', $branchIds)->latest();
        
        return ProductCategoryResource::collection($query->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductCategoryRequest $request)
    {
        try {
            // save category
            $user = Auth::user();
            $branchId = (int) ($user->default_branch_id ?? 0);
            $branchIds = $this->getUserBranchIds($user);
            
            // generate code (filtered by branch)
            $code = 1;
            $prevCode = ProductCategory::whereIn('branch_id', $branchIds)->latest()->first();
            if ($prevCode) {
                $code = $prevCode->code + 1;
            }
            
          $ProductCategory =  ProductCategory::create([
                'name' => $request->name,
                'code' => $code,
                'note' => $request->note,
                'status' => $request->status,
                'branch_id' => $branchId,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($ProductCategory)
                ->withProperties([
                    'name' => $request->name,
                    'code' => '[' . config('config.proCatPrefix') . '-' . $code . ']',
                    'event' => 'Create',
                    'slug' => $ProductCategory->slug,
                    'routeName' => ''
                ])
                ->useLog('Product Category Created')
                ->log('Product Category Created');

            return $this->responseWithSuccess('Category added successfully');
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
            
            $category = ProductCategory::where('slug', $slug)
                ->whereIn('branch_id', $branchIds)
                ->first();

            if (!$category) {
                return $this->responseWithError('Category not found');
            }

            return $category;
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
    public function update(UpdateProductCategoryRequest $request, $slug)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $category = ProductCategory::where('slug', $slug)
            ->whereIn('branch_id', $branchIds)
            ->first();

        if (!$category) {
            return $this->responseWithError('Category not found');
        }

        try {
            // update category
            $category->update([
                'name' => $request->name,
                'note' => $request->note,
                'status' => $request->status,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($category)
                ->withProperties([
                    'name' => $category->name,
                    'code' => '[' . config('config.proCatPrefix') . '-' . $category->code . ']',
                    'event' => 'Update',
                    'slug' => $category->slug,
                    'routeName' => ''
                ])
                ->useLog('Product Category Updated')
                ->log('Product Category Updated');

            return $this->responseWithSuccess('Category updated successfully');
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
            
            $category = ProductCategory::where('slug', $slug)
                ->whereIn('branch_id', $branchIds)
                ->first();
                
            if (!$category) {
                return $this->responseWithError('Category not found');
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($category)
                ->withProperties([
                    'name' => $category->name,
                    'code' => '[' . config('config.proCatPrefix') . '-' . $category->code . ']',
                    'event' => 'Delete'
                ])
                ->useLog('Product Category Deleted')
                ->log('Product Category Deleted');


            $category->delete();

            return $this->responseWithSuccess('Category deleted successfully');
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

        $query = ProductCategory::whereIn('branch_id', $branchIds)
            ->where(function($q) use ($term) {
                $q->where('name', 'LIKE', '%'.$term.'%')
                  ->orWhere('slug', 'LIKE', '%'.$term.'%')
                  ->orWhere('note', 'LIKE', '%'.$term.'%');
            })
            ->latest()
            ->paginate($request->perPage);

        return ProductCategoryResource::collection($query);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allCategories()
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $categories = ProductCategory::where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->latest()
            ->get();

        return ProductCategoryResource::collection($categories);
    }
    
    private function getUserBranchIds($user)
    {

        $defaultBranchId = (int) ($user->default_branch_id ?? 0);
        return [$defaultBranchId > 0 ? $defaultBranchId : 0];
        // // Super admin can see all branches
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

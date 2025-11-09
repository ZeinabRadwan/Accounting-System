<?php

namespace App\Http\Controllers\API;

use Exception;
use ZipArchive;
use App\Models\Unit;
use App\Models\Brand;
use App\Models\Product;
use App\Models\VatRate;
use App\Models\ChartOfAccount;
use Illuminate\Http\Request;
use App\Models\GeneralSetting;
use App\Models\ProductCategory;
use App\Models\ProductSubCategory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Validator;
use Spatie\SimpleExcel\SimpleExcelReader;
use App\Http\Resources\ProductSelectResource;
use App\Http\Resources\ProductListingResource;
use Intervention\Image\Facades\Image as Image;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use App\Models\AccountRoutingSetting;
use App\Models\ChartOfAccountType;


class ProductController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:product-list', ['only' => ['index', 'search']]);
        $this->middleware('can:product-create', ['only' => ['create']]);
        $this->middleware('can:product-view', ['only' => ['show']]);
        $this->middleware('can:product-edit', ['only' => ['update']]);
        $this->middleware('can:product-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Product::with(
            'proSubCategory.category',
            'productUnit',
            'productTax',
            'productBrand',
            'salesAccount.type',
            'purchaseAccount.type'
        );
        
        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        // if ((int) $user->account_role !== 1) {
            $branchIds = $this->getUserBranchIds($user);
            $query->whereIn('branch_id', $branchIds);
        // }
        
        return ProductListingResource::collection($query->latest()->paginate($request->perPage));
    }
    
    private function getUserBranchIds($user)
    {
        $defaultBranchId = (int) ($user->default_branch_id ?? 0);
        return [$defaultBranchId > 0 ? $defaultBranchId : 0];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate request
        $this->validate($request, [
            'itemType' => 'required|string',
            'itemName' => 'required|string|max:255',
            'itemCode' => 'required|unique:products,code',
            'itemModel' => 'nullable|string|min:2|max:255',
            'barcodeSymbology' => 'required|string|max:20',
            'subCategory' => 'required',
            'brand' => 'nullable',
            'itemUnit' => 'required',
            'productTax' => 'required',
            'taxType' => 'required',
            'regularPrice' => 'required|numeric|min:0',
            'servicePurchasePrice' => $request->itemType == 'service' ? 'required|numeric|min:0' : 'nullable',
            'openingStockCount' => $request->isOpeningStock == true ? 'required|numeric|min:1' : 'nullable',
            'openingStockUnitPrice' => $request->isOpeningStock == true ? 'required|numeric|min:1' : 'nullable',
            'discount' => 'nullable|numeric|min:0|max:100',
            'note' => 'nullable|string|max:255',
            'alertQuantity' => 'nullable|numeric|min:1',
            'overrideSalesAccount' => 'nullable|boolean',
            'overridePurchaseAccount' => 'nullable|boolean',
        ]);
        try {
            DB::beginTransaction();

            // get logged in user
            $user = Auth::user();
            $branchId = (int) ($user->default_branch_id ?? 0);

            // generate code
            $code = 1;
            if ($request->itemCode) {
                //$code = ltrim($request->itemCode, '0');
                $code = $request->itemCode;
            } else {
                $product = Product::latest()->first();
                if ($product) {
                    $code = $product->code + 1;
                }
            }

            // upload thumbnail and set the name
            $imageName = '';
            if ($request->image) {
                $imageName = time() . '.' . explode(
                    '/',
                    explode(':', substr($request->image, 0, strpos($request->image, ';')))[1]
                )[1];
                Image::make($request->image)->save(public_path('images/products/') . $imageName);
            }

            $brand = $tax = $discount = null;
            if (isset($request->brand)) {
                $brand = is_array($request->brand) ? $request->brand['id'] : $request->brand;
            }
            if (isset($request->productTax)) {
                $tax = is_array($request->productTax) ? $request->productTax['id'] : $request->productTax;
            }
            if ($request->discount) {
                $discount = $request->discount;
            }

            $openingStockCount = null;
            $openingStockUnitPrice = null;
            if ($request->isOpeningStock == true) {
                $openingStockCount = $request->openingStockCount;
                $openingStockUnitPrice = $request->openingStockUnitPrice;
            }

            // Safely extract account IDs
            $salesAccountId = null;
            $purchaseAccountId = null;

            $sales_settings = AccountRoutingSetting::where('module', 'sales')->where('setting_key', 'product_sales_account')->first();
            $purchase_settings = AccountRoutingSetting::where('module', 'purchase')->where('setting_key', 'product_purchase_account')->first();

            // Handle Sales Account
            $isSalesAutomatic = $sales_settings && $sales_settings->routing_type == 'automatic';
            $overrideSales = $request->boolean('overrideSalesAccount', false);
            
            if ($isSalesAutomatic && !$overrideSales) {
                // Use automatic routing
                $salesAccountId = $sales_settings?->main_account_id;
                if ($salesAccountId == null || $salesAccountId == '' || $salesAccountId == 0) {
                    return $this->responseWithError('Sales Account is required - Please configure account routing settings');
                }
            } else {
                // Use manual selection (either not automatic or override is checked)
                if ($request->salesAccountId) {
                    $salesAccountId = is_array($request->salesAccountId) || is_object($request->salesAccountId)
                        ? (is_array($request->salesAccountId) ? $request->salesAccountId['id'] : $request->salesAccountId->id)
                        : $request->salesAccountId;
                } else {
                    return $this->responseWithError('Sales Account is required');
                }
            }

            // Handle Purchase Account
            $isPurchaseAutomatic = $purchase_settings && $purchase_settings->routing_type == 'automatic';
            $overridePurchase = $request->boolean('overridePurchaseAccount', false);
            
            if ($isPurchaseAutomatic && !$overridePurchase) {
                // Use automatic routing
                $purchaseAccountId = $purchase_settings?->main_account_id;
                if ($purchaseAccountId == null || $purchaseAccountId == '' || $purchaseAccountId == 0) {
                    return $this->responseWithError('Purchase Account is required - Please configure account routing settings');
                }
            } else {
                // Use manual selection (either not automatic or override is checked)
                if ($request->purchaseAccountId) {
                    $purchaseAccountId = is_array($request->purchaseAccountId) || is_object($request->purchaseAccountId)
                        ? (is_array($request->purchaseAccountId) ? $request->purchaseAccountId['id'] : $request->purchaseAccountId->id)
                        : $request->purchaseAccountId;
                } else {
                    return $this->responseWithError('Purchase Account is required');
                }
            }

            // create product
            $product = Product::create([
                'is_service' => $request->itemType == 'service' ? true : false,
                'name' => $request->itemName,
                'code' => $code,
                'model' => $request->itemModel,
                'barcode_symbology' => $request->barcodeSymbology,
                'sub_cat_id' => is_array($request->subCategory) ? $request->subCategory['id'] : $request->subCategory,
                'brand_id' => $brand,
                'unit_id' => is_array($request->itemUnit) ? $request->itemUnit['id'] : $request->itemUnit,
                'tax_id' => $tax,
                'sales_account_id' => $salesAccountId,
                'purchase_account_id' => $purchaseAccountId,
                'tax_type' => $request->taxType,
                'regular_price' => $request->regularPrice,
                'inventory_count' => $openingStockCount,
                'opening_stock_count' => $openingStockCount,
                'purchase_price' => $request->itemType == 'product' ? $openingStockUnitPrice : $request->servicePurchasePrice,
                'opening_stock_unit_price' => $openingStockUnitPrice,
                'discount' => $discount,
                'note' => clean($request->note),
                'alert_qty' => $request->alertQuantity,
                'status' => $request->status,
                'image_path' => $imageName,
                'branch_id' => $branchId,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($product)
                ->withProperties([
                    'name' => $request->name,
                    'code' => '[' . config('config.productPrefix') . '-' . $code . ']',
                    'event' => 'Create',
                    'slug' => $product->slug,
                    'routeName' => 'products.show'
                ])
                ->useLog('Product Created')
                ->log('Product Created');

            DB::commit();

            // Load the created product with relationships for the response
            $product->load('proSubCategory.category', 'productUnit', 'productTax', 'productBrand', 'salesAccount', 'purchaseAccount');

            return $this->responseWithSuccess('Product added successfully', new ProductSelectResource($product));
        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get chart of accounts for dropdown
     */
    public function getChartOfAccounts()
    {
        try {
            $branchId = Auth::user()->default_branch_id ?? null;
            
            $chartOfAccounts = ChartOfAccount::where('is_active', true)
                ->forBranch($branchId)
                ->with('type')
                ->orderBy('name')
                ->get()
                ->map(function ($account) {
                    return [
                        'id' => $account->id,
                        'name' => $account->name,
                        'code' => $account->code,
                        'type' => $account->type ? $account->type->name : 'Unknown'
                    ];
                });
            return response()->json($chartOfAccounts);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve chart of accounts.'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($identifier)
    {
        try {
            // Try to find product by slug first, then by ID if slug lookup fails
            $product = Product::where('slug', $identifier)->with('proSubCategory.category', 'salesAccount.type', 'purchaseAccount.type')->first();
            if (!$product && is_numeric($identifier)) {
                $product = Product::where('id', $identifier)->with('proSubCategory.category', 'salesAccount.type', 'purchaseAccount.type')->first();
            }
            
            if (!$product) {
                return $this->responseWithError('Product not found');
            }

            return new ProductResource($product);
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
    public function update(Request $request, $identifier)
    {
        // Try to find product by slug first, then by ID if slug lookup fails
        $product = Product::where('slug', $identifier)->first();
        if (!$product && is_numeric($identifier)) {
            $product = Product::find($identifier);
        }
        
        if (!$product) {
            return $this->responseWithError('Product not found');
        }
        // validate request
        $this->validate($request, [
            'itemType' => 'required|string',
            'itemName' => 'required|string|max:255',
            'itemCode' => 'required|unique:products,code,' . $product->id,
            'itemModel' => 'nullable|string|min:2|max:255',
            'barcodeSymbology' => 'required|string|max:20',
            'subCategory' => 'required',
            'brand' => 'nullable',
            'itemUnit' => 'required',
            'productTax' => 'required',
            'taxType' => 'required',
            'regularPrice' => 'required|numeric|min:0',
            'servicePurchasePrice' => $request->itemType == 'service' ? 'required|numeric|min:0' : 'nullable',
            'openingStockCount' => 'nullable|numeric|min:0',
            'openingStockUnitPrice' => 'nullable|numeric|min:0',
            'newOpeningStockCount' => $request->isOpeningStock == true ? 'required|numeric|min:1' : 'nullable',
            'newOpeningStockUnitPrice' => $request->isOpeningStock == true ? 'required|numeric|min:1' : 'nullable',
            'discount' => 'nullable|numeric|min:0|max:100',
            'note' => 'nullable|string|max:255',
            'alertQuantity' => 'nullable|numeric|min:1|max:1000',
        ]);
        try {
            DB::beginTransaction();



            // upload thumbnail and set the name
            $imageName = $product->image_path;
            if ($request->image) {
                if ($imageName) {
                    @unlink(public_path('images/products/' . $imageName));
                }
                $imageName = time() . '.' . explode(
                    '/',
                    explode(':', substr($request->image, 0, strpos($request->image, ';')))[1]
                )[1];
                Image::make($request->image)->save(public_path('images/products/') . $imageName);
            }

            $brand = $product->brand_id;
            if (isset($request->brand)) {
                $brand = is_array($request->brand) ? $request->brand['id'] : $request->brand;
            }
            $tax = $product->tax_id;
            if (isset($request->productTax)) {
                $tax = is_array($request->productTax) ? $request->productTax['id'] : $request->productTax;
            }
            $discount = $product->discount;
            if ($request->discount) {
                $discount = $request->discount;
            }

            $newOpeningStockCount = $product->opening_stock_count;
            $newOpeningStockUnitPrice = $product->opening_stock_unit_price;
            $newInventoryCount = $product->inventory_count;
            $purchasePrice = $product->purchase_price;

            if ($request->isOpeningStock == true) {
                // Get the new opening stock values from the request
                $additionalStockCount = $request->newOpeningStockCount;
                $additionalStockUnitPrice = $request->newOpeningStockUnitPrice;

                // Update the total opening stock count and inventory
                $newOpeningStockCount = $product->opening_stock_count + $additionalStockCount;
                $newInventoryCount = $product->inventory_count + $additionalStockCount;

                // Calculate weighted average purchase price
                $totalValueOldStock = $product->inventory_count * $product->purchase_price;
                $totalValueNewStock = $additionalStockCount * $additionalStockUnitPrice;

                $totalStockValue = $totalValueOldStock + $totalValueNewStock;
                $totalStockCount = $product->inventory_count + $additionalStockCount;

                if ($totalStockCount > 0) {
                    $purchasePrice = $totalStockValue / $totalStockCount;
                }
                
                // Update the opening stock unit price to the new weighted average
                $newOpeningStockUnitPrice = $purchasePrice;
            }

            // Safely extract account IDs
            // Safely extract account IDs
            $salesAccountId = null;
            $purchaseAccountId = null;

            $sales_settings = AccountRoutingSetting::where('module', 'sales')->where('setting_key', 'product_sales_account')->first();
            $purchase_settings = AccountRoutingSetting::where('module', 'purchase')->where('setting_key', 'product_purchase_account')->first();

            if ($sales_settings && $sales_settings->routing_type == 'automatic') {
                $salesAccountId = $sales_settings?->main_account_id;

                if ($salesAccountId == null || $salesAccountId == '' || $salesAccountId == 0) {
                    return $this->responseWithError('Sales Account is required - Please configure account routing settings');
                }
            } else {
                if ($request->salesAccountId) {
                    $salesAccountId = is_array($request->salesAccountId) || is_object($request->salesAccountId)
                        ? (is_array($request->salesAccountId) ? $request->salesAccountId['id'] : $request->salesAccountId->id)
                        : $request->salesAccountId;
                } else {
                    return $this->responseWithError('Sales Account is required');
                }
            }

            if ($purchase_settings && $purchase_settings->routing_type == 'automatic') {
                $purchaseAccountId = $purchase_settings?->main_account_id;

                if ($purchaseAccountId == null || $purchaseAccountId == '' || $purchaseAccountId == 0) {
                    return $this->responseWithError('Purchase Account is required - Please configure account routing settings');
                }
            } else {
                if ($request->purchaseAccountId) {
                    $purchaseAccountId = is_array($request->purchaseAccountId) || is_object($request->purchaseAccountId)
                        ? (is_array($request->purchaseAccountId) ? $request->purchaseAccountId['id'] : $request->purchaseAccountId->id)
                        : $request->purchaseAccountId;
                } else {
                    return $this->responseWithError('Purchase Account is required');
                }
            }

            // update product
            $product->update([
                'is_service' => $request->itemType == 'service' ? true : false,
                'name' => $request->itemName,
                'code' => $request->itemCode,
                'model' => $request->itemModel,
                'barcode_symbology' => $request->barcodeSymbology,
                'sub_cat_id' => is_array($request->subCategory) ? $request->subCategory['id'] : $request->subCategory,
                'brand_id' => $brand,
                'unit_id' => is_array($request->itemUnit) ? $request->itemUnit['id'] : $request->itemUnit,
                'tax_id' => $tax,
                'sales_account_id' => $salesAccountId,
                'purchase_account_id' => $purchaseAccountId,
                'tax_type' => $request->taxType,
                'regular_price' => $request->regularPrice,
                'purchase_price' => $request->itemType == 'product' ? $purchasePrice : $request->servicePurchasePrice,
                'inventory_count' => $newInventoryCount,
                'opening_stock_count' => $newOpeningStockCount,
                'opening_stock_unit_price' => $newOpeningStockUnitPrice,
                'discount' => $discount,
                'note' => clean($request->note),
                'alert_qty' => $request->alertQuantity,
                'status' => $request->status,
                'image_path' => $imageName,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($product)
                ->withProperties([
                    'name' => $product->name,
                    'code' => '[' . config('config.productPrefix') . '-' . $product->code . ']',
                    'event' => 'Update',
                    'slug' => $product->slug,
                    'routeName' => 'products.show'
                ])
                ->useLog('Product Updated')
                ->log('Product Updated');

            DB::commit();

            return $this->responseWithSuccess('Product updated successfully');
        } catch (Exception $e) {
            DB::rollback();
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
            DB::beginTransaction();

            $product = Product::where('slug', $slug)->first();
            //delete image from storage
            if ($product->image_path) {
                @unlink(public_path('images/products/' . $product->image_path));
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($product)
                ->withProperties([
                    'name' => $product->name,
                    'code' => '[' . config('config.productPrefix') . '-' . $product->code . ']',
                    'event' => 'Delete'
                ])
                ->useLog('Product Deleted')
                ->log('Product Deleted');


            $product->delete();

            DB::commit();

            return $this->responseWithSuccess('Product deleted successfully');
        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * search resource from storage.
     *
     * @param  int  $id
     * @return AnonymousResourceCollection
     */
    public function search(Request $request)
    {
        $term = $request->term;

        $query = Product::with('proSubCategory.category');
        
        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        if ((int) $user->account_role !== 1) {
            $branchIds = $this->getUserBranchIds($user);
            $query->whereIn('branch_id', $branchIds);
        }
        
        $query->where('name', 'LIKE', '%' . $term . '%')
            ->orWhere('slug', 'LIKE', '%' . $term . '%')
            ->orWhere('model', 'LIKE', '%' . $term . '%')
            ->orWhere('code', 'LIKE', '%' . $term . '%')
            ->orWhere('regular_price', 'LIKE', '%' . $term . '%')
            ->orWhere('purchase_price', 'LIKE', '%' . $term . '%')
            ->orWhereHas('proSubCategory', function ($newQuery) use ($term) {
                $newQuery->where('name', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('category', function ($newQuery) use ($term) {
                        $newQuery->where('name', 'LIKE', '%' . $term . '%');
                    });
            });

        return ProductListingResource::collection($query->orderBy('code', 'ASC')->paginate($request->perPage));
    }

    /**
     * search resource from storage.
     *
     * @param  int  $id
     * @return AnonymousResourceCollection
     */
    public function searchFromPos(Request $request)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        $term = $request->term;
        $query = Product::with('proSubCategory.category')
            ->whereIn('branch_id', $branchIds);
        if (isset($request->catSlug) && isset($request->subCatSlug)) {
            $subCategory = ProductSubCategory::where('slug', $request->subCatSlug)
                ->whereIn('branch_id', $branchIds)
                ->first();
            if ($subCategory) {
                $query = $query->where('sub_cat_id', $subCategory->id);
            }
        } elseif (isset($request->catSlug) && !isset($request->subCatSlug)) {
            $category = ProductCategory::where('slug', $request->catSlug)
                ->whereIn('branch_id', $branchIds)
                ->firstOrFail();
            $subCategories = ProductSubCategory::where('cat_id', $category->id)
                ->whereIn('branch_id', $branchIds)
                ->pluck('id');
            $query = $query->whereIn('sub_cat_id', $subCategories);
        }
        $query = $query->where(function ($query) use ($term) {
            $query->where('name', 'LIKE', '%' . $term . '%')
                ->orWhere('slug', 'LIKE', '%' . $term . '%')
                ->orWhere('model', 'LIKE', '%' . $term . '%')
                ->orWhere('code', 'LIKE', '%' . $term . '%');
        });
        return ProductSelectResource::collection($query->orderBy('code', 'ASC')->limit(24)->get());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allProducts()
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $products = Product::with(
            'purchaseProducts',
            'adjustmentProducts',
            'invoiceProducts',
            'invoiceReturnProducts',
            'productTax',
            'salesAccount',
            'purchaseAccount'
        )->where('status', 1)
        ->whereIn('branch_id', $branchIds)
        ->latest()
        ->get();

        return ProductSelectResource::collection($products);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allProductsNotService()
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $products = Product::where('is_service', false)->with(
            'purchaseProducts',
            'adjustmentProducts',
            'invoiceProducts',
            'invoiceReturnProducts',
            'productTax',
            'salesAccount',
            'purchaseAccount'
        )->where('status', 1)
        ->whereIn('branch_id', $branchIds)
        ->latest()
        ->get();

        return ProductSelectResource::collection($products);
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function allProductsPaginated()
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $products = Product::with(
            'purchaseProducts',
            'adjustmentProducts',
            'invoiceProducts',
            'invoiceReturnProducts',
            'productTax',
            'salesAccount',
            'purchaseAccount'
        )->where('status', 1)
        ->whereIn('branch_id', $branchIds)
        ->latest()
        ->paginate(24);

        return ProductSelectResource::collection($products);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allProductsForSelect()
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $products = Product::with(
            'purchaseProducts',
            'adjustmentProducts',
            'invoiceProducts',
            'invoiceReturnProducts',
            'productTax',
            'salesAccount',
            'purchaseAccount'
        )->where('status', 1)
        ->whereIn('branch_id', $branchIds)
        ->latest()
        ->get();

        return ProductSelectResource::collection($products);
    }

    // generate item code
    public function generateItemCode()
    {
        // Initialize variables
        $prefix = '';
        $nextCode = null;
        $codeLength = 6; // Default code length
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        // Get the product prefix setting first
        $setting = GeneralSetting::where('key', 'product_prefix')->first();
        if ($setting) {
            $prefix = $setting->value;
        }
        
        // Fetch the latest product (including soft-deleted ones) ordered by id descending
        $latestProduct = Product::withTrashed()
            ->whereIn('branch_id', $branchIds)
            ->orderBy('id', 'desc')
            ->first();

        if ($latestProduct && !empty($latestProduct->code)) {
            // Extract the numeric part from the code
            $code = $latestProduct->code;
            
            // Remove prefix if it exists
            if (!empty($prefix) && strpos($code, $prefix) === 0) {
                $code = substr($code, strlen($prefix));
            }
            
            // Extract numeric part from the code (handles codes like "000001", "00123", etc.)
            if (preg_match('/\d+/', $code, $matches)) {
                $numericPart = $matches[0];
                $numericValue = (int) $numericPart;
                $nextCode = $numericValue + 1;
                
                // Preserve the format (leading zeros) by determining the length
                $codeLength = strlen($numericPart);
                // Use the same length, or default to 6 if it's shorter
                $codeLength = max($codeLength, 6);
            } else {
                // If no numeric part found, start from 1
                $nextCode = 1;
            }
        } else {
            // If no product exists, set code = "000001"
            $nextCode = 1;
        }

        // Return prefix and zero-padded code
        return [
            'prefix' => $prefix,
            'code' => str_pad((string) $nextCode, $codeLength, '0', STR_PAD_LEFT),
        ];
    }

    // return products by sub category
    public function productsBySubCategory($catSlug, $subCatSlug)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        if ($catSlug == 'all' && $subCatSlug == 'all') {
            $products = Product::whereIn('branch_id', $branchIds)->latest()->get();
        } elseif ($catSlug != 'all' && $subCatSlug == 'all') {
            $category = ProductCategory::where('slug', $catSlug)
                ->whereIn('branch_id', $branchIds)
                ->first();
            if (!$category) {
                return ProductResource::collection(collect());
            }
            $products = Product::with('proSubCategory.category')
                ->whereIn('branch_id', $branchIds)
                ->whereHas(
                    'proSubCategory',
                    function ($newQuery) use ($category, $branchIds) {
                        $newQuery->where('cat_id', $category->id)
                            ->whereIn('branch_id', $branchIds);
                    }
                )->get();
        } else {
            $subCat = ProductSubCategory::where('slug', $subCatSlug)
                ->whereIn('branch_id', $branchIds)
                ->first();
            if (!$subCat) {
                return ProductResource::collection(collect());
            }
            $products = Product::where('sub_cat_id', $subCat->id)
                ->whereIn('branch_id', $branchIds)
                ->latest()
                ->get();
        }

        return ProductResource::collection($products);
    }

    // return all products by sub category
    public function allProductsBySubCategory($catSlug, $subCatSlug)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        if ($catSlug == 'all' && $subCatSlug == 'all') {
            $products = Product::whereIn('branch_id', $branchIds)->latest()->get();
        } elseif ($catSlug != 'all' && $subCatSlug == 'all') {
            $category = ProductCategory::where('slug', $catSlug)
                ->whereIn('branch_id', $branchIds)
                ->first();
            if (!$category) {
                return ProductSelectResource::collection(collect());
            }
            $products = Product::with('proSubCategory.category')
                ->whereIn('branch_id', $branchIds)
                ->whereHas(
                    'proSubCategory',
                    function ($newQuery) use ($category, $branchIds) {
                        $newQuery->where('cat_id', $category->id)
                            ->whereIn('branch_id', $branchIds);
                    }
                )->get();
        } else {
            $subCat = ProductSubCategory::where('slug', $subCatSlug)
                ->whereIn('branch_id', $branchIds)
                ->first();
            if (!$subCat) {
                return ProductSelectResource::collection(collect());
            }
            $products = Product::where('sub_cat_id', $subCat->id)
                ->whereIn('branch_id', $branchIds)
                ->latest()
                ->paginate(5);
        }

        return ProductSelectResource::collection($products);
    }

    // csv import
    public function import(Request $request)
    {
        $request->validate([
            'file' => ['required', 'mimes:csv,txt', 'file'],
        ]);

        $user = Auth::user();
        $branchId = (int) ($user->default_branch_id ?? 0);

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $data = SimpleExcelReader::create($file, 'csv')->getRows();

            $rules = [
                'name' => ['required', 'string', 'max:255'],
                'model' => ['nullable', 'string', 'min:2', 'max:255'],
                'barcode_symbology' => ['required', 'string', 'max:20'],
                'sub_cat_id' => ['required'],
                'brand_id' => ['nullable'],
                'unit_id' => ['required'],
                'tax_id' => ['required'],
                'tax_type' => ['required'],
                'regular_price' => ['required', 'numeric', 'min:0'],
                'discount' => ['nullable', 'numeric', 'min:0', 'max:100'],
                'note' => ['nullable', 'string', 'max:255'],
                'alert_qty' => ['nullable', 'numeric', 'min:1'],
            ];

            foreach ($data as $key => $item) {
                $validator = Validator::make($item, $rules);
                if ($validator->passes()) {
                    $validatedData = $validator->validated();
                    $validatedData['branch_id'] = $branchId;
                    Product::create(
                        $this->incrementCode() + $validatedData
                    );
                } else {
                    return response()->json([
                        'message' => $validator->errors()->first(),
                        'row_number' => $key + 1
                    ], 422);
                }
                // if($key == 100) break;
            }
            return response()->json([
                'message' => 'Supplier imported successfully'
            ]);
        }
    }

    public function incrementCode(): array
    {
        $codeNo = 1;
        $lastProduct = Product::latest('id')->first();
        if ($lastProduct) {
            $codeNo = (int) $lastProduct->code + 1;
        }
        return [
            'code' => $codeNo
        ];
    }

    // cxv import with template with sheet brand_id, sub_cat_id, unit_id, tax_id
    public function importTemplate()
    {
        // generate csv template
        $this->subCategoryImportTemplate();
        $this->brandImportTemplate();
        $this->unitImportTemplate();
        $this->taxImportTemplate();

        // zip sub-categories.csv and brands.csv and units.csv and taxes.csv
        $zip = new ZipArchive;
        $zip->open('products.zip', ZipArchive::CREATE);
        $zip->addFile(public_path('demo-csv-file/sub-categories.csv'), 'sub-categories.csv');
        $zip->addFile(public_path('demo-csv-file/brands.csv'), 'brands.csv');
        $zip->addFile(public_path('demo-csv-file/units.csv'), 'units.csv');
        $zip->addFile(public_path('demo-csv-file/taxes.csv'), 'taxes.csv');
        $zip->addFile(public_path('demo-csv-file/products.csv'), 'products.csv');
        $zip->close();





        // download zip file
        return response()->download('products.zip');
    }
    public function subCategoryImportTemplate()
    {
        $handle = fopen(public_path('demo-csv-file/sub-categories.csv'), 'w');
        fputcsv($handle, ['sub_cat_id', 'sub_category_name']);
        ProductSubCategory::chunk(2000, function ($subCategories) use ($handle) {
            foreach ($subCategories->toArray() as $subCategory) {
                fputcsv($handle, [$subCategory['id'], $subCategory['name']]);
            }
        });
        fclose($handle);

        return response()->download(public_path('demo-csv-file/sub-categories.csv'));
    }
    public function brandImportTemplate()
    {
        $handle = fopen(public_path('demo-csv-file/brands.csv'), 'w');
        fputcsv($handle, ['brand_id', 'brand_name']);
        Brand::chunk(2000, function ($brands) use ($handle) {
            foreach ($brands->toArray() as $brand) {
                fputcsv($handle, [$brand['id'], $brand['name']]);
            }
        });
        fclose($handle);
    }
    public function unitImportTemplate()
    {
        $handle = fopen(public_path('demo-csv-file/units.csv'), 'w');
        fputcsv($handle, ['unit_id', 'unit_name']);
        Unit::chunk(2000, function ($units) use ($handle) {
            foreach ($units->toArray() as $unit) {
                fputcsv($handle, [$unit['id'], $unit['name']]);
            }
        });
        fclose($handle);
    }
    public function taxImportTemplate()
    {
        $handle = fopen(public_path('demo-csv-file/taxes.csv'), 'w');
        fputcsv($handle, ['tax_id', 'tax_name']);
        VatRate::chunk(2000, function ($taxes) use ($handle) {
            foreach ($taxes->toArray() as $tax) {
                fputcsv($handle, [$tax['id'], $tax['name']]);
            }
        });
        fclose($handle);
    }

    /**
     * Auto-assign Chart of Account to product
     */
    public function autoAssignChartOfAccount($slug, $type = 'purchase')
    {
        try {
            Log::info('Product auto-assign started for slug: ' . $slug);

            $product = Product::where('slug', $slug)->first();

            if (!$product) {
                Log::error('Product not found for slug: ' . $slug);
                return response()->json([
                    'success' => false,
                    'message' => 'Product not found'
                ], 404);
            }

            Log::info('Product found:', [
                'id' => $product->id,
                'name' => $product->name,
                'is_service' => $product->is_service,
                'current_sales_account_id' => $product->sales_account_id,
                'current_purchase_account_id' => $product->purchase_account_id
            ]);

            // Resolve routing setting based on type
            if ($type === 'sales') {
                $routing = AccountRoutingSetting::where('module', 'sales')->where('setting_key', 'product_sales_account')->first();

                if (!$routing) {
                    return response()->json([
                        'error' => true,
                        'message' => 'Sales routing not configured. Please configure Account Routing.'
                    ], 400);
                }

                if ($routing->routing_type === 'automatic') {
                    if (!$routing->main_account_id) {
                        return response()->json([
                            'error' => true,
                            'message' => 'Sales main account missing in routing settings.'
                        ], 400);
                    }
                    $product->update(['sales_account_id' => $routing->main_account_id]);
                    return response()->json([
                        'success' => true,
                        'message' => 'Main Sales Account assigned to product successfully',
                        'sales_account_id' => $routing->main_account_id
                    ]);
                }

                if ($routing->routing_type === 'main_account_per_each') {
                    if (!$routing->main_account_id) {
                        return response()->json([
                            'error' => true,
                            'message' => 'Sales main account missing in routing settings.'
                        ], 400);
                    }
                    // Create child account under main account with product name
                    $newAccount = ChartOfAccount::create([
                        'name' => $product->name,
                        'code' => $this->generateChildAccountCode($routing->main_account_id),
                        'type_id' => $this->getRevenueAccountTypeId(),
                        'parent_id' => $routing->main_account_id,
                        'is_active' => true,
                        'created_by' => Auth::id(),
                        'branch_id' => Auth::user()->default_branch_id,
                    ]);
                    $product->update(['sales_account_id' => $newAccount->id]);
                    return response()->json([
                        'success' => true,
                        'message' => 'Sales Account created under main account and assigned to product',
                        'sales_account_id' => $newAccount->id
                    ]);
                }

                return response()->json([
                    'error' => true,
                    'message' => 'Routing type not supported for auto-assign. Please assign manually.'
                ], 400);
            } else {
                // purchase flow
                $routing = AccountRoutingSetting::where('module', 'purchase')->where('setting_key', 'product_purchase_account')->first();

                if (!$routing) {
                    return response()->json([
                        'error' => true,
                        'message' => 'Purchase routing not configured. Please configure Account Routing.'
                    ], 400);
                }

                if ($routing->routing_type === 'automatic') {
                    if (!$routing->main_account_id) {
                        return response()->json([
                            'error' => true,
                            'message' => 'Purchase main account missing in routing settings.'
                        ], 400);
                    }
                    $product->update(['purchase_account_id' => $routing->main_account_id]);
                    return response()->json([
                        'success' => true,
                        'message' => 'Main Purchase Account assigned to product successfully',
                        'purchase_account_id' => $routing->main_account_id
                    ]);
                }

                if ($routing->routing_type === 'main_account_per_each') {
                    if (!$routing->main_account_id) {
                        return response()->json([
                            'error' => true,
                            'message' => 'Purchase main account missing in routing settings.'
                        ], 400);
                    }
                    $newAccount = ChartOfAccount::create([
                        'name' => $product->name,
                        'code' => $this->generateChildAccountCode($routing->main_account_id),
                        'type_id' => $this->getExpenseAccountTypeId(),
                        'parent_id' => $routing->main_account_id,
                        'is_active' => true,
                        'created_by' => Auth::id(),
                        'branch_id' => Auth::user()->default_branch_id,
                    ]);
                    $product->update(['purchase_account_id' => $newAccount->id]);
                    return response()->json([
                        'success' => true,
                        'message' => 'Purchase Account created under main account and assigned to product',
                        'purchase_account_id' => $newAccount->id
                    ]);
                }

                return response()->json([
                    'error' => true,
                    'message' => 'Routing type not supported for auto-assign. Please assign manually.'
                ], 400);
            }
        } catch (Exception $e) {
            Log::error('Product auto-assign failed: ' . $e->getMessage(), [
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json([
                'error' => true,
                'message' => 'Failed to assign Chart of Account: ' . $e->getMessage()
            ], 500);
        }
    }

    private function generateChildAccountCode($parentId)
    {
        $branchId = Auth::user()->default_branch_id ?? null;
        $parent = ChartOfAccount::forBranch($branchId)->find($parentId);
        if (!$parent) {
            return 'PRD-' . (time() % 1000000);
        }
        $baseCode = $parent->code;
        // Collect existing child codes that start with baseCode-
        $existingCodes = ChartOfAccount::forBranch($branchId)
            ->where('parent_id', $parentId)
            ->where('code', 'like', $baseCode . '-%')
            ->pluck('code')
            ->toArray();

        $counter = 1;
        $newCode = $baseCode . '-' . str_pad($counter, 3, '0', STR_PAD_LEFT);
        while (in_array($newCode, $existingCodes)) {
            $counter++;
            $newCode = $baseCode . '-' . str_pad($counter, 3, '0', STR_PAD_LEFT);
        }
        return $newCode;
    }

    private function getRevenueAccountTypeId()
    {
        $type = ChartOfAccountType::where('name', 'Revenue')->first();
        return $type ? $type->id : 1;
    }

    private function getExpenseAccountTypeId()
    {
        $type = ChartOfAccountType::where('name', 'Expense')->first();
        return $type ? $type->id : 1;
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\AdjustmentProduct;
use App\Models\InvoiceProduct;
use App\Models\InvoiceReturnProduct;
use App\Models\Product;
use App\Models\PurchaseProduct;
use App\Models\PurchaseReturnProduct;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InventoryController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:inventory-view', ['only' => ['allInventory', 'inventoryCount', 'searchInventoryCount']]);
        $this->middleware('can:inventory-history', ['only' => ['inventoryHistoryByItem', 'inventoryHistory', 'searchInventoryHistory']]);
    }

    // return product inventory
    public function allInventory(Request $request)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $query = Product::with('proSubCategory.category', 'productUnit', 'productTax', 'productBrand')
            ->whereIn('branch_id', $branchIds)
            ->orderBy('code', 'ASC');
            
        return ProductResource::collection($query->paginate($request->perPage));
    }

    // search product in inventory
    public function searchInventory(Request $request)
    {
        $term = $request->term;
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        $query = Product::query();
        
        // Apply branch filter
        $query->whereIn('branch_id', $branchIds);

        // Apply search term conditions
        if (!empty($term)) {
            $query->where(function ($query) use ($term) {
                $query->where('name', 'LIKE', '%' . $term . '%')
                    ->orWhere('slug', 'LIKE', '%' . $term . '%')
                    ->orWhere('model', 'LIKE', '%' . $term . '%')
                    ->orWhere('code', 'LIKE', '%' . $term . '%')
                    ->orWhere('regular_price', 'LIKE', '%' . $term . '%')
                    ->orWhere('purchase_price', 'LIKE', '%' . $term . '%')
                    ->orWhere('inventory_count', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('proSubCategory', function ($newQuery) use ($term) {
                        $newQuery->where('name', 'LIKE', '%' . $term . '%')
                            ->orWhereHas('category', function ($newQuery) use ($term) {
                                $newQuery->where('name', 'LIKE', '%' . $term . '%');
                            });
                    });
            });
        }

        // Apply filtering based on filterType
        if ($request->filterType) {
            switch ($request->filterType) {
                case 'low_to_high_stock':
                    $query->orderBy('inventory_count', 'ASC');
                    break;
                case 'high_to_low_stock':
                    $query->orderBy('inventory_count', 'DESC');
                    break;
                case 'low_to_high_purchase_price':
                    $query->orderBy('purchase_price', 'ASC');
                    break;
                case 'high_to_low_purchase_price':
                    $query->orderBy('purchase_price', 'DESC');
                    break;
                case 'active':
                    $query->where('status', true);
                    break;
                case 'inactive':
                    $query->where('status', false);
                    break;
                case 'zero_stock':
                    $query->where(function ($query) {
                        $query->where('inventory_count', 0)
                            ->orWhereNull('inventory_count');
                    });
                    break;
                case 'non_zero_stock':
                    $query->where('inventory_count', '>', 0);
                    break;
                default:
                    $query->orderBy('code', 'ASC');
                    break;
            }
        } else {
            $query->orderBy('code', 'ASC');
        }

        // Return the filtered and paginated results
        return ProductResource::collection(
            $query->with('proSubCategory.category', 'productUnit', 'productTax', 'productBrand')
                ->paginate($request->perPage)
        );
    }

    // return inventory history
    public function inventoryHistoryByItem($slug)
    {
        try {
            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);
            
            $product = Product::where('slug', $slug)
                ->whereIn('branch_id', $branchIds)
                ->with('proSubCategory.category', 'productUnit')
                ->first();
                
            if (!$product) {
                return $this->responseWithError('Product not found');
            }
            
            // stock ins
            $purchaseIns = PurchaseProduct::where('product_id', $product->id)
                ->whereHas('purchase', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->with('purchase.supplier')->get();
            $invoiceReturnIns = InvoiceReturnProduct::where('product_id', $product->id)
                ->whereHas('invoiceReturn', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->with('invoiceReturn.invoice.client')->get();
            $adjutmentIns = AdjustmentProduct::where('product_id', $product->id)
                ->where('type', 1)
                ->whereHas('inventoryAdjustment', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->with('inventoryAdjustment')->get();

            $stockIns = [];
            // Purchases
            foreach ($purchaseIns as $key => $inventoryIn) {
                $stockIns[$key]['code'] = config('config.purchasePrefix') . '-' . $inventoryIn->purchase->purchase_no;
                $stockIns[$key]['quantity'] = $inventoryIn->quantity;
                $stockIns[$key]['date'] = $inventoryIn->purchase->purchase_date;
                $stockIns[$key]['supplier'] = $inventoryIn->purchase->supplier->name;
                $stockIns[$key]['price'] = $inventoryIn->purchase_price;
                $stockIns[$key]['type'] = 'Purchase';
                $stockIns[$key]['purchaseNo'] = $inventoryIn->purchase->purchase_no;
            }

            $length = count($stockIns);
            // Invoice returns
            foreach ($invoiceReturnIns as $key => $inventoryIn) {
                $stockIns[$length]['code'] = config('config.invoiceReturnPrefix') . '-' . $inventoryIn->invoiceReturn->return_no;
                $stockIns[$length]['quantity'] = $inventoryIn->quantity;
                $stockIns[$length]['date'] = $inventoryIn->invoiceReturn->date;
                $stockIns[$length]['client'] = $inventoryIn->invoiceReturn->invoice->client->name;
                $stockIns[$length]['price'] = $product->purchase_price;
                $stockIns[$length]['type'] = 'Invoice Return';
                $stockIns[$length++]['invoiceNo'] = $inventoryIn->invoiceReturn->code;
            }

            $length = count($stockIns);
            // Inventory adjustments
            foreach ($adjutmentIns as $key => $inventoryIn) {
                $stockIns[$length]['code'] = config('config.adjustmentPrefix') . '-' . $inventoryIn->inventoryAdjustment->code;
                $stockIns[$length]['quantity'] = $inventoryIn->quantity;
                $stockIns[$length]['date'] = $inventoryIn->inventoryAdjustment->date;
                $stockIns[$length]['reason'] = $inventoryIn->inventoryAdjustment->reason;
                $stockIns[$length]['price'] = $inventoryIn->purchase_price;
                $stockIns[$length++]['type'] = 'Adjustment';
            }

            // stock outs
            $adjutmentOuts = AdjustmentProduct::where('product_id', $product->id)
                ->where('type', 0)
                ->whereHas('inventoryAdjustment', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->with('inventoryAdjustment')->get();
            $inventoryOuts = InvoiceProduct::where('product_id', $product->id)
                ->whereHas('invoice', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->with('invoice.client')->get();
            $purchaseReturnOuts = PurchaseReturnProduct::where('product_id', $product->id)
                ->whereHas('purchaseReturn', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->with('purchaseReturn.purchase.supplier')->get();

            $stockOuts = [];
            // Invoice sales
            foreach ($inventoryOuts as $key => $inventoryOut) {
                $stockOuts[$key]['quantity'] = $inventoryOut->quantity;
                $stockOuts[$key]['code'] = config('config.invoicePrefix') . '-' . $inventoryOut->invoice->invoice_no;
                $stockOuts[$key]['date'] = $inventoryOut->invoice->invoice_date;
                $stockOuts[$key]['price'] = $inventoryOut->sale_price;
                $stockOuts[$key]['client'] = $inventoryOut->invoice->client->name;
                $stockOuts[$key]['type'] = 'Invoice';
            }

            $length = count($stockOuts);
            // Inventory adjustments
            foreach ($adjutmentOuts as $key => $adjutmentOut) {
                $stockOuts[$length]['quantity'] = $adjutmentOut->quantity;
                $stockOuts[$length]['date'] = $adjutmentOut->inventoryAdjustment->date;
                $stockOuts[$length]['reason'] = $adjutmentOut->inventoryAdjustment->reason;
                $stockOuts[$length]['code'] = config('config.adjustmentPrefix') . '-' . $adjutmentOut->inventoryAdjustment->code;
                $stockOuts[$length]['price'] = $adjutmentOut->purchase_price;
                $stockOuts[$length++]['type'] = 'Adjustment';
            }

            $length = count($stockOuts);
            // Purchase returns
            foreach ($purchaseReturnOuts as $key => $purchaseReturnOut) {
                $stockOuts[$length]['quantity'] = $purchaseReturnOut->quantity;
                $stockOuts[$length]['date'] = $purchaseReturnOut->purchaseReturn->date;
                $stockOuts[$length]['code'] = config('config.purchaseReturnPrefix') . '-' . $purchaseReturnOut->purchaseReturn->code;
                $stockOuts[$length]['supplier'] = $purchaseReturnOut->purchaseReturn->purchase->supplier->name;
                $stockOuts[$length]['reason'] = $purchaseReturnOut->purchaseReturn->reason;
                $stockOuts[$length]['price'] = $purchaseReturnOut->purchase_price;
                $stockOuts[$length++]['type'] = 'Purchase Return';
            }

            return [
                'product' => new ProductResource($product),
                'stockIns' => $stockIns,
                'stockOuts' => $stockOuts,
            ];
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    // return inventory count data
    public function inventoryCount(Request $request)
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        $query = Product::with('proSubCategory.category', 'productUnit', 'productTax', 'productBrand')
            ->whereIn('branch_id', $branchIds)
            ->orderBy('code', 'ASC');
            
        return ProductResource::collection($query->paginate($request->perPage));
    }

    // search inventory count data
    public function searchInventoryCount(Request $request)
    {
        $term = $request->term;
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        $query = Product::query();
        
        // Apply branch filter
        $query->whereIn('branch_id', $branchIds);

        // Apply search term conditions
        if (!empty($term)) {
            $query->where(function ($query) use ($term) {
                $query->where('name', 'LIKE', '%' . $term . '%')
                    ->orWhere('slug', 'LIKE', '%' . $term . '%')
                    ->orWhere('model', 'LIKE', '%' . $term . '%')
                    ->orWhere('code', 'LIKE', '%' . $term . '%')
                    ->orWhere('inventory_count', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('proSubCategory', function ($newQuery) use ($term) {
                        $newQuery->where('name', 'LIKE', '%' . $term . '%')
                            ->orWhereHas('category', function ($newQuery) use ($term) {
                                $newQuery->where('name', 'LIKE', '%' . $term . '%');
                            });
                    });
            });
        }

        // Apply filtering based on filterType
        if ($request->filterType) {
            switch ($request->filterType) {
                case 'with_products':
                    $query->where('inventory_count', '>', 0);
                    break;
                case 'with_data':
                    $query->whereNotNull('inventory_count')
                          ->where('inventory_count', '>', 0);
                    break;
                case 'low_to_high_stock':
                    $query->orderBy('inventory_count', 'ASC');
                    break;
                case 'high_to_low_stock':
                    $query->orderBy('inventory_count', 'DESC');
                    break;
                case 'active':
                    $query->where('status', true);
                    break;
                case 'inactive':
                    $query->where('status', false);
                    break;
                case 'zero_stock':
                    $query->where(function ($query) {
                        $query->where('inventory_count', 0)
                            ->orWhereNull('inventory_count');
                    });
                    break;
                case 'non_zero_stock':
                    $query->where('inventory_count', '>', 0);
                    break;
                default:
                    $query->orderBy('code', 'ASC');
                    break;
            }
        } else {
            $query->orderBy('code', 'ASC');
        }

        // Return the filtered and paginated results
        return ProductResource::collection(
            $query->with('proSubCategory.category', 'productUnit', 'productTax', 'productBrand')
                ->paginate($request->perPage)
        );
    }

    // return general inventory history
    public function inventoryHistory(Request $request)
    {
        try {
            $user = Auth::user();
            $branchIds = $this->getUserBranchIds($user);
            $perPage = $request->perPage ?? 10;
            $history = collect();

            // Get all purchase products
            $purchaseProducts = PurchaseProduct::with(['purchase.supplier', 'product'])
                ->whereHas('purchase', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->whereHas('product', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->orderBy('created_at', 'desc')
                ->get();

            foreach ($purchaseProducts as $item) {
                $history->push([
                    'id' => 'purchase_' . $item->id,
                    'operation_date' => $item->purchase->purchase_date,
                    'product_name' => $item->product->name,
                    'product_code' => $item->product->code,
                    'product_slug' => $item->product->slug,
                    'operation_type' => 'Purchase',
                    'price' => $item->purchase_price,
                    'quantity_change' => $item->quantity,
                    'notes' => 'Purchase from ' . $item->purchase->supplier->name,
                    'reference_code' => config('config.purchasePrefix') . '-' . $item->purchase->purchase_no,
                ]);
            }

            // Get all invoice products
            $invoiceProducts = InvoiceProduct::with(['invoice.client', 'product'])
                ->whereHas('invoice', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->whereHas('product', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->orderBy('created_at', 'desc')
                ->get();

            foreach ($invoiceProducts as $item) {
                $history->push([
                    'id' => 'invoice_' . $item->id,
                    'operation_date' => $item->invoice->invoice_date,
                    'product_name' => $item->product->name,
                    'product_code' => $item->product->code,
                    'product_slug' => $item->product->slug,
                    'operation_type' => 'Invoice',
                    'price' => $item->sale_price,
                    'quantity_change' => -$item->quantity, // Negative for stock out
                    'notes' => 'Sale to ' . $item->invoice->client->name,
                    'reference_code' => config('config.invoicePrefix') . '-' . $item->invoice->invoice_no,
                ]);
            }

            // Get all adjustment products
            $adjustmentProducts = AdjustmentProduct::with(['inventoryAdjustment', 'product'])
                ->whereHas('inventoryAdjustment', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->whereHas('product', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->orderBy('created_at', 'desc')
                ->get();

            foreach ($adjustmentProducts as $item) {
                $quantityChange = $item->type == 1 ? $item->quantity : -$item->quantity;
                $operationType = $item->type == 1 ? 'Stock In' : 'Stock Out';
                
                $history->push([
                    'id' => 'adjustment_' . $item->id,
                    'operation_date' => $item->inventoryAdjustment->date,
                    'product_name' => $item->product->name,
                    'product_code' => $item->product->code,
                    'product_slug' => $item->product->slug,
                    'operation_type' => $operationType,
                    'price' => $item->purchase_price,
                    'quantity_change' => $quantityChange,
                    'notes' => $item->inventoryAdjustment->reason,
                    'reference_code' => config('config.adjustmentPrefix') . '-' . $item->inventoryAdjustment->code,
                ]);
            }

            // Get all invoice return products
            $invoiceReturnProducts = InvoiceReturnProduct::with(['invoiceReturn.invoice.client', 'product'])
                ->whereHas('invoiceReturn', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->whereHas('product', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->orderBy('created_at', 'desc')
                ->get();

            foreach ($invoiceReturnProducts as $item) {
                $history->push([
                    'id' => 'invoice_return_' . $item->id,
                    'operation_date' => $item->invoiceReturn->date,
                    'product_name' => $item->product->name,
                    'product_code' => $item->product->code,
                    'product_slug' => $item->product->slug,
                    'operation_type' => 'Invoice Return',
                    'price' => $item->product->purchase_price,
                    'quantity_change' => $item->quantity,
                    'notes' => 'Return from ' . $item->invoiceReturn->invoice->client->name,
                    'reference_code' => config('config.invoiceReturnPrefix') . '-' . $item->invoiceReturn->return_no,
                ]);
            }

            // Get all purchase return products
            $purchaseReturnProducts = PurchaseReturnProduct::with(['purchaseReturn.purchase.supplier', 'product'])
                ->whereHas('purchaseReturn', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->whereHas('product', function($q) use ($branchIds) {
                    $q->whereIn('branch_id', $branchIds);
                })
                ->orderBy('created_at', 'desc')
                ->get();

            foreach ($purchaseReturnProducts as $item) {
                $history->push([
                    'id' => 'purchase_return_' . $item->id,
                    'operation_date' => $item->purchaseReturn->date,
                    'product_name' => $item->product->name,
                    'product_code' => $item->product->code,
                    'product_slug' => $item->product->slug,
                    'operation_type' => 'Purchase Return',
                    'price' => $item->purchase_price,
                    'quantity_change' => -$item->quantity, // Negative for stock out
                    'notes' => 'Return to ' . $item->purchaseReturn->purchase->supplier->name,
                    'reference_code' => config('config.purchaseReturnPrefix') . '-' . $item->purchaseReturn->code,
                ]);
            }

            // Sort by operation date descending
            $history = $history->sortByDesc('operation_date');

            // Paginate the results
            $total = $history->count();
            $currentPage = $request->page ?? 1;
            $offset = ($currentPage - 1) * $perPage;
            $items = $history->slice($offset, $perPage)->values();

            return response()->json([
                'data' => $items,
                'current_page' => $currentPage,
                'per_page' => $perPage,
                'total' => $total,
                'last_page' => ceil($total / $perPage),
                'from' => $offset + 1,
                'to' => min($offset + $perPage, $total),
            ]);

        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    // search inventory history
    public function searchInventoryHistory(Request $request)
    {
        try {
            $perPage = $request->perPage ?? 10;
            $term = $request->term ?? '';
            $filterType = $request->filterType ?? 'default';
            
            // Get history data using helper method
            $allHistory = $this->getHistoryData($term, $filterType);

            // Paginate the results
            $total = $allHistory->count();
            $currentPage = $request->page ?? 1;
            $offset = ($currentPage - 1) * $perPage;
            $items = $allHistory->slice($offset, $perPage)->values();

            return response()->json([
                'data' => $items,
                'current_page' => $currentPage,
                'per_page' => $perPage,
                'total' => $total,
                'last_page' => ceil($total / $perPage),
                'from' => $offset + 1,
                'to' => min($offset + $perPage, $total),
            ]);

        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }
    
    /**
     * Get inventory history data (helper method)
     */
    private function getHistoryData($term = '', $filterType = 'default')
    {
        $history = collect();

        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        
        // Get all purchase products
        $purchaseQuery = PurchaseProduct::with(['purchase.supplier', 'product'])
            ->whereHas('purchase', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            })
            ->whereHas('product', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            })
            ->whereHas('purchase.supplier');
        if (!empty($term)) {
            $purchaseQuery->whereHas('product', function($q) use ($term) {
                $q->where('name', 'LIKE', '%' . $term . '%')
                  ->orWhere('code', 'LIKE', '%' . $term . '%');
            });
        }
        $purchaseProducts = $purchaseQuery->orderBy('created_at', 'desc')->get();

        foreach ($purchaseProducts as $item) {
            try {
                if (!$item || !isset($item->id)) {
                    continue;
                }
                
                if (($filterType === 'default' || $filterType === 'purchase' || $filterType === 'stock_in')) {
                    $purchase = optional($item)->purchase;
                    $supplier = optional($purchase)->supplier;
                    $product = optional($item)->product;
                    
                    if ($purchase && $supplier && $product && 
                        isset($purchase->purchase_date) && isset($purchase->purchase_no) &&
                        isset($supplier->name) && isset($product->name) && isset($product->code) && isset($product->slug)) {
                        $history->push([
                            'id' => 'purchase_' . $item->id,
                            'operation_date' => $purchase->purchase_date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'product_slug' => $product->slug,
                            'operation_type' => 'Purchase',
                            'price' => $item->purchase_price ?? 0,
                            'quantity_change' => $item->quantity ?? 0,
                            'notes' => 'Purchase from ' . $supplier->name,
                            'reference_code' => config('config.purchasePrefix') . '-' . $purchase->purchase_no,
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Get all invoice products
        $invoiceQuery = InvoiceProduct::with(['invoice.client', 'product'])
            ->whereHas('invoice', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            })
            ->whereHas('product', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            })
            ->whereHas('invoice.client');
        if (!empty($term)) {
            $invoiceQuery->whereHas('product', function($q) use ($term) {
                $q->where('name', 'LIKE', '%' . $term . '%')
                  ->orWhere('code', 'LIKE', '%' . $term . '%');
            });
        }
        $invoiceProducts = $invoiceQuery->orderBy('created_at', 'desc')->get();

        foreach ($invoiceProducts as $item) {
            try {
                if (!$item || !isset($item->id)) {
                    continue;
                }
                
                if (($filterType === 'default' || $filterType === 'invoice' || $filterType === 'stock_out')) {
                    $invoice = optional($item)->invoice;
                    $client = optional($invoice)->client;
                    $product = optional($item)->product;
                    
                    if ($invoice && $client && $product &&
                        isset($invoice->invoice_date) && isset($invoice->invoice_no) &&
                        isset($client->name) && isset($product->name) && isset($product->code) && isset($product->slug)) {
                        $history->push([
                            'id' => 'invoice_' . $item->id,
                            'operation_date' => $invoice->invoice_date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'product_slug' => $product->slug,
                            'operation_type' => 'Invoice',
                            'price' => $item->sale_price ?? 0,
                            'quantity_change' => -($item->quantity ?? 0),
                            'notes' => 'Sale to ' . $client->name,
                            'reference_code' => config('config.invoicePrefix') . '-' . $invoice->invoice_no,
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Get all adjustment products
        $adjustmentQuery = AdjustmentProduct::with(['inventoryAdjustment', 'product'])
            ->whereHas('inventoryAdjustment', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            })
            ->whereHas('product', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            });
        if (!empty($term)) {
            $adjustmentQuery->whereHas('product', function($q) use ($term) {
                $q->where('name', 'LIKE', '%' . $term . '%')
                  ->orWhere('code', 'LIKE', '%' . $term . '%');
            });
        }
        $adjustmentProducts = $adjustmentQuery->orderBy('created_at', 'desc')->get();

        foreach ($adjustmentProducts as $item) {
            try {
                if (!$item || !isset($item->id)) {
                    continue;
                }
                
                $itemType = $item->type ?? null;
                if (($filterType === 'default' || $filterType === 'adjustment' || 
                    ($filterType === 'stock_in' && $itemType == 1) || 
                    ($filterType === 'stock_out' && $itemType == 0))) {
                    $adjustment = optional($item)->inventoryAdjustment;
                    $product = optional($item)->product;
                    
                    if ($adjustment && $product &&
                        isset($adjustment->date) && isset($adjustment->code) &&
                        isset($product->name) && isset($product->code) && isset($product->slug)) {
                        $quantityChange = ($itemType == 1) ? ($item->quantity ?? 0) : -($item->quantity ?? 0);
                        $operationType = ($itemType == 1) ? 'Stock In' : 'Stock Out';
                        
                        $history->push([
                            'id' => 'adjustment_' . $item->id,
                            'operation_date' => $adjustment->date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'product_slug' => $product->slug,
                            'operation_type' => $operationType,
                            'price' => $item->purchase_price ?? 0,
                            'quantity_change' => $quantityChange,
                            'notes' => $adjustment->reason ?? 'Adjustment',
                            'reference_code' => config('config.adjustmentPrefix') . '-' . $adjustment->code,
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Get all invoice return products
        $invoiceReturnQuery = InvoiceReturnProduct::with(['invoiceReturn.invoice.client', 'product'])
            ->whereHas('invoiceReturn', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            })
            ->whereHas('product', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            })
            ->whereHas('invoiceReturn.invoice')
            ->whereHas('invoiceReturn.invoice.client');
        if (!empty($term)) {
            $invoiceReturnQuery->whereHas('product', function($q) use ($term) {
                $q->where('name', 'LIKE', '%' . $term . '%')
                  ->orWhere('code', 'LIKE', '%' . $term . '%');
            });
        }
        $invoiceReturnProducts = $invoiceReturnQuery->orderBy('created_at', 'desc')->get();

        foreach ($invoiceReturnProducts as $item) {
            try {
                if (!$item || !isset($item->id)) {
                    continue;
                }
                
                if (($filterType === 'default' || $filterType === 'invoice_return' || $filterType === 'stock_in')) {
                    $invoiceReturn = optional($item)->invoiceReturn;
                    $invoice = optional($invoiceReturn)->invoice;
                    $client = optional($invoice)->client;
                    $product = optional($item)->product;
                    
                    if ($invoiceReturn && $invoice && $client && $product &&
                        isset($invoiceReturn->date) && isset($invoiceReturn->return_no) &&
                        isset($client->name) && isset($product->name) && isset($product->code) && isset($product->slug)) {
                        $history->push([
                            'id' => 'invoice_return_' . $item->id,
                            'operation_date' => $invoiceReturn->date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'product_slug' => $product->slug,
                            'operation_type' => 'Invoice Return',
                            'price' => $product->purchase_price ?? 0,
                            'quantity_change' => $item->quantity ?? 0,
                            'notes' => 'Return from ' . $client->name,
                            'reference_code' => config('config.invoiceReturnPrefix') . '-' . $invoiceReturn->return_no,
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Get all purchase return products
        $purchaseReturnQuery = PurchaseReturnProduct::with(['purchaseReturn.purchase.supplier', 'product'])
            ->whereHas('purchaseReturn', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            })
            ->whereHas('product', function($q) use ($branchIds) {
                $q->whereIn('branch_id', $branchIds);
            })
            ->whereHas('purchaseReturn.purchase')
            ->whereHas('purchaseReturn.purchase.supplier');
        if (!empty($term)) {
            $purchaseReturnQuery->whereHas('product', function($q) use ($term) {
                $q->where('name', 'LIKE', '%' . $term . '%')
                  ->orWhere('code', 'LIKE', '%' . $term . '%');
            });
        }
        $purchaseReturnProducts = $purchaseReturnQuery->orderBy('created_at', 'desc')->get();

        foreach ($purchaseReturnProducts as $item) {
            try {
                if (!$item || !isset($item->id)) {
                    continue;
                }
                
                if (($filterType === 'default' || $filterType === 'purchase_return' || $filterType === 'stock_out')) {
                    $purchaseReturn = optional($item)->purchaseReturn;
                    $purchase = optional($purchaseReturn)->purchase;
                    $supplier = optional($purchase)->supplier;
                    $product = optional($item)->product;
                    
                    if ($purchaseReturn && $purchase && $supplier && $product &&
                        isset($purchaseReturn->date) && isset($purchaseReturn->code) &&
                        isset($supplier->name) && isset($product->name) && isset($product->code) && isset($product->slug)) {
                        $history->push([
                            'id' => 'purchase_return_' . $item->id,
                            'operation_date' => $purchaseReturn->date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'product_slug' => $product->slug,
                            'operation_type' => 'Purchase Return',
                            'price' => $item->purchase_price ?? 0,
                            'quantity_change' => -($item->quantity ?? 0),
                            'notes' => 'Return to ' . $supplier->name,
                            'reference_code' => config('config.purchaseReturnPrefix') . '-' . $purchaseReturn->code,
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Sort by operation date descending
        return $history->sortByDesc('operation_date');
    }
    
    private function getUserBranchIds($user)
    {
        $defaultBranchId = (int) ($user->default_branch_id ?? 0);
        return [$defaultBranchId > 0 ? $defaultBranchId : 0];
    }
}
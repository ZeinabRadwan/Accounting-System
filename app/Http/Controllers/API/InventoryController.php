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
        return ProductResource::collection(Product::with('proSubCategory.category', 'productUnit', 'productTax', 'productBrand')->orderBy('code', 'ASC')->paginate($request->perPage));
    }

    // search product in inventory
    public function searchInventory(Request $request)
    {
        $term = $request->term;
        $query = Product::query();

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
            $product = Product::where('slug', $slug)->with('proSubCategory.category', 'productUnit')->first();
            // stock ins
            $purchaseIns = PurchaseProduct::where('product_id', $product->id)->with('purchase.supplier')->get();
            $invoiceReturnIns = InvoiceReturnProduct::where('product_id', $product->id)->with('invoiceReturn.invoice.client')->get();
            $adjutmentIns = AdjustmentProduct::where('product_id', $product->id)->where('type', 1)->with('inventoryAdjustment')->get();

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
            $adjutmentOuts = AdjustmentProduct::where('product_id', $product->id)->where('type', 0)->with('inventoryAdjustment')->get();
            $inventoryOuts = InvoiceProduct::where('product_id', $product->id)->with('invoice.client')->get();
            $purchaseReturnOuts = PurchaseReturnProduct::where('product_id', $product->id)->with('purchaseReturn.purchase.supplier')->get();

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
        return ProductResource::collection(Product::with('proSubCategory.category', 'productUnit', 'productTax', 'productBrand')->orderBy('code', 'ASC')->paginate($request->perPage));
    }

    // search inventory count data
    public function searchInventoryCount(Request $request)
    {
        $term = $request->term;
        $query = Product::query();

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
            $perPage = $request->perPage ?? 10;
            $history = collect();

            // Get all purchase products
            $purchaseProducts = PurchaseProduct::with(['purchase.supplier', 'product'])
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
            $perPage = (int) ($request->perPage ?? 10);
            $term = trim($request->term ?? '');
            $filterType = $request->filterType ?? 'default';
            $startDate = $request->startDate ?? '';
            $endDate = $request->endDate ?? '';
            $currentPage = (int) ($request->page ?? 1);
            
            // Build query based on filter type
            $allHistory = $this->buildHistoryQuery($term, $filterType, $startDate, $endDate);
            
            // Paginate the results
            $total = $allHistory->count();
            $offset = ($currentPage - 1) * $perPage;
            $items = $allHistory->slice($offset, $perPage)->values();

            return response()->json([
                'data' => $items,
                'current_page' => $currentPage,
                'per_page' => $perPage,
                'total' => $total,
                'last_page' => $total > 0 ? (int) ceil($total / $perPage) : 1,
                'from' => $total > 0 ? $offset + 1 : 0,
                'to' => min($offset + $perPage, $total),
            ]);

        } catch (\Exception $e) {
            \Log::error('Inventory history search error', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'request' => $request->all()
            ]);
            return $this->responseWithError('An error occurred while searching inventory history: ' . $e->getMessage());
        }
    }
    
    /**
     * Build inventory history query with safe relationship access
     */
    private function buildHistoryQuery($term = '', $filterType = 'default', $startDate = '', $endDate = '')
    {
        $history = collect();
        
        // Helper function to safely get relationship
        $safeGet = function($model, $relation) {
            if (!$model) return null;
            try {
                return optional($model)->$relation;
            } catch (\Exception $e) {
                return null;
            }
        };
        
        // Helper function to build history item safely
        $buildItem = function($data) use (&$history) {
            if (!empty($data)) {
                $history->push($data);
            }
        };
        
        // Determine which operation types to include
        $includePurchase = in_array($filterType, ['default', 'purchase', 'stock_in']);
        $includeInvoice = in_array($filterType, ['default', 'invoice', 'stock_out']);
        $includeAdjustment = in_array($filterType, ['default', 'adjustment', 'stock_in', 'stock_out']);
        $includeInvoiceReturn = in_array($filterType, ['default', 'invoice_return', 'stock_in']);
        $includePurchaseReturn = in_array($filterType, ['default', 'purchase_return', 'stock_out']);
        
        // Process Purchase Products
        if ($includePurchase) {
            $this->processPurchaseProducts($term, $startDate, $endDate, $buildItem);
        }
        
        // Process Invoice Products
        if ($includeInvoice) {
            $this->processInvoiceProducts($term, $startDate, $endDate, $buildItem);
        }
        
        // Process Adjustment Products
        if ($includeAdjustment) {
            $this->processAdjustmentProducts($term, $filterType, $startDate, $endDate, $buildItem);
        }
        
        // Process Invoice Return Products
        if ($includeInvoiceReturn) {
            $this->processInvoiceReturnProducts($term, $startDate, $endDate, $buildItem);
        }
        
        // Process Purchase Return Products
        if ($includePurchaseReturn) {
            $this->processPurchaseReturnProducts($term, $startDate, $endDate, $buildItem);
        }
        
        // Sort by operation date descending
        return $history->sortByDesc('operation_date')->values();
    }
    
    /**
     * Process purchase products for inventory history
     */
    private function processPurchaseProducts($term, $startDate, $endDate, $buildItem)
    {
        $query = PurchaseProduct::query()
            ->join('purchases', 'purchase_products.purchase_id', '=', 'purchases.id')
            ->join('products', 'purchase_products.product_id', '=', 'products.id')
            ->leftJoin('suppliers', 'purchases.supplier_id', '=', 'suppliers.id')
            ->whereNotNull('purchases.id')
            ->whereNotNull('products.id')
            ->select([
                'purchase_products.id',
                'purchase_products.purchase_id',
                'purchase_products.product_id',
                'purchase_products.quantity',
                'purchase_products.purchase_price',
                'purchases.purchase_date',
                'purchases.purchase_no',
                'products.name as product_name',
                'products.code as product_code',
                'products.slug as product_slug',
                'suppliers.name as supplier_name'
            ]);
        
        // Apply search term
        if (!empty($term)) {
            $query->where(function($q) use ($term) {
                $q->where('products.name', 'LIKE', '%' . $term . '%')
                  ->orWhere('products.code', 'LIKE', '%' . $term . '%')
                  ->orWhere('purchases.purchase_no', 'LIKE', '%' . $term . '%');
            });
        }
        
        // Apply date filters
        if (!empty($startDate)) {
            $query->where('purchases.purchase_date', '>=', $startDate);
        }
        if (!empty($endDate)) {
            $query->where('purchases.purchase_date', '<=', $endDate);
        }
        
        $results = $query->orderBy('purchases.purchase_date', 'desc')->get();
        
        foreach ($results as $row) {
            $buildItem([
                'id' => 'purchase_' . $row->id,
                'operation_date' => $row->purchase_date ?? null,
                'product_name' => $row->product_name ?? '',
                'product_code' => $row->product_code ?? '',
                'product_slug' => $row->product_slug ?? '',
                'operation_type' => 'Purchase',
                'price' => $row->purchase_price ?? 0,
                'quantity_change' => $row->quantity ?? 0,
                'notes' => 'Purchase from ' . ($row->supplier_name ?? 'Unknown'),
                'reference_code' => config('config.purchasePrefix', 'PUR') . '-' . ($row->purchase_no ?? ''),
            ]);
        }
    }
    
    /**
     * Process invoice products for inventory history
     */
    private function processInvoiceProducts($term, $startDate, $endDate, $buildItem)
    {
        $query = InvoiceProduct::query()
            ->join('invoices', 'invoice_products.invoice_id', '=', 'invoices.id')
            ->join('products', 'invoice_products.product_id', '=', 'products.id')
            ->leftJoin('clients', 'invoices.client_id', '=', 'clients.id')
            ->whereNotNull('invoices.id')
            ->whereNotNull('products.id')
            ->select([
                'invoice_products.id',
                'invoice_products.invoice_id',
                'invoice_products.product_id',
                'invoice_products.quantity',
                'invoice_products.sale_price',
                'invoices.invoice_date',
                'invoices.invoice_no',
                'products.name as product_name',
                'products.code as product_code',
                'products.slug as product_slug',
                'clients.name as client_name'
            ]);
        
        // Apply search term
        if (!empty($term)) {
            $query->where(function($q) use ($term) {
                $q->where('products.name', 'LIKE', '%' . $term . '%')
                  ->orWhere('products.code', 'LIKE', '%' . $term . '%')
                  ->orWhere('invoices.invoice_no', 'LIKE', '%' . $term . '%');
            });
        }
        
        // Apply date filters
        if (!empty($startDate)) {
            $query->where('invoices.invoice_date', '>=', $startDate);
        }
        if (!empty($endDate)) {
            $query->where('invoices.invoice_date', '<=', $endDate);
        }
        
        $results = $query->orderBy('invoices.invoice_date', 'desc')->get();
        
        foreach ($results as $row) {
            $buildItem([
                'id' => 'invoice_' . $row->id,
                'operation_date' => $row->invoice_date ?? null,
                'product_name' => $row->product_name ?? '',
                'product_code' => $row->product_code ?? '',
                'product_slug' => $row->product_slug ?? '',
                'operation_type' => 'Invoice',
                'price' => $row->sale_price ?? 0,
                'quantity_change' => -($row->quantity ?? 0),
                'notes' => 'Sale to ' . ($row->client_name ?? 'Unknown'),
                'reference_code' => config('config.invoicePrefix', 'INV') . '-' . ($row->invoice_no ?? ''),
            ]);
        }
    }
    
    /**
     * Process adjustment products for inventory history
     */
    private function processAdjustmentProducts($term, $filterType, $startDate, $endDate, $buildItem)
    {
        $query = AdjustmentProduct::query()
            ->join('inventory_adjustments', 'adjustment_products.adjustment_id', '=', 'inventory_adjustments.id')
            ->join('products', 'adjustment_products.product_id', '=', 'products.id')
            ->whereNotNull('inventory_adjustments.id')
            ->whereNotNull('products.id')
            ->select([
                'adjustment_products.id',
                'adjustment_products.adjustment_id',
                'adjustment_products.product_id',
                'adjustment_products.type',
                'adjustment_products.quantity',
                'adjustment_products.purchase_price',
                'inventory_adjustments.date',
                'inventory_adjustments.code',
                'inventory_adjustments.reason',
                'products.name as product_name',
                'products.code as product_code',
                'products.slug as product_slug'
            ]);
        
        // Filter by adjustment type if needed
        if ($filterType === 'stock_in') {
            $query->where('adjustment_products.type', 1);
        } elseif ($filterType === 'stock_out') {
            $query->where('adjustment_products.type', 0);
        }
        
        // Apply search term
        if (!empty($term)) {
            $query->where(function($q) use ($term) {
                $q->where('products.name', 'LIKE', '%' . $term . '%')
                  ->orWhere('products.code', 'LIKE', '%' . $term . '%')
                  ->orWhere('inventory_adjustments.code', 'LIKE', '%' . $term . '%');
            });
        }
        
        // Apply date filters
        if (!empty($startDate)) {
            $query->where('inventory_adjustments.date', '>=', $startDate);
        }
        if (!empty($endDate)) {
            $query->where('inventory_adjustments.date', '<=', $endDate);
        }
        
        $results = $query->orderBy('inventory_adjustments.date', 'desc')->get();
        
        foreach ($results as $row) {
            $quantityChange = ($row->type == 1) ? ($row->quantity ?? 0) : -($row->quantity ?? 0);
            $operationType = ($row->type == 1) ? 'Stock In' : 'Stock Out';
            
            $buildItem([
                'id' => 'adjustment_' . $row->id,
                'operation_date' => $row->date ?? null,
                'product_name' => $row->product_name ?? '',
                'product_code' => $row->product_code ?? '',
                'product_slug' => $row->product_slug ?? '',
                'operation_type' => $operationType,
                'price' => $row->purchase_price ?? 0,
                'quantity_change' => $quantityChange,
                'notes' => $row->reason ?? 'Adjustment',
                'reference_code' => config('config.adjustmentPrefix', 'ADJ') . '-' . ($row->code ?? ''),
            ]);
        }
    }
    
    /**
     * Process invoice return products for inventory history
     */
    private function processInvoiceReturnProducts($term, $startDate, $endDate, $buildItem)
    {
        $query = InvoiceReturnProduct::query()
            ->join('invoice_returns', 'invoice_return_products.return_id', '=', 'invoice_returns.id')
            ->join('invoices', 'invoice_returns.invoice_id', '=', 'invoices.id')
            ->join('products', 'invoice_return_products.product_id', '=', 'products.id')
            ->leftJoin('clients', 'invoices.client_id', '=', 'clients.id')
            ->whereNotNull('invoice_returns.id')
            ->whereNotNull('products.id')
            ->select([
                'invoice_return_products.id',
                'invoice_return_products.return_id',
                'invoice_return_products.product_id',
                'invoice_return_products.quantity',
                'invoice_returns.date',
                'invoice_returns.return_no',
                'products.name as product_name',
                'products.code as product_code',
                'products.slug as product_slug',
                'products.purchase_price',
                'clients.name as client_name'
            ]);
        
        // Apply search term
        if (!empty($term)) {
            $query->where(function($q) use ($term) {
                $q->where('products.name', 'LIKE', '%' . $term . '%')
                  ->orWhere('products.code', 'LIKE', '%' . $term . '%')
                  ->orWhere('invoice_returns.return_no', 'LIKE', '%' . $term . '%');
            });
        }
        
        // Apply date filters
        if (!empty($startDate)) {
            $query->where('invoice_returns.date', '>=', $startDate);
        }
        if (!empty($endDate)) {
            $query->where('invoice_returns.date', '<=', $endDate);
        }
        
        $results = $query->orderBy('invoice_returns.date', 'desc')->get();
        
        foreach ($results as $row) {
            $buildItem([
                'id' => 'invoice_return_' . $row->id,
                'operation_date' => $row->date ?? null,
                'product_name' => $row->product_name ?? '',
                'product_code' => $row->product_code ?? '',
                'product_slug' => $row->product_slug ?? '',
                'operation_type' => 'Invoice Return',
                'price' => $row->purchase_price ?? 0,
                'quantity_change' => $row->quantity ?? 0,
                'notes' => 'Return from ' . ($row->client_name ?? 'Unknown'),
                'reference_code' => config('config.invoiceReturnPrefix', 'INV-RET') . '-' . ($row->return_no ?? ''),
            ]);
        }
    }
    
    /**
     * Process purchase return products for inventory history
     */
    private function processPurchaseReturnProducts($term, $startDate, $endDate, $buildItem)
    {
        $query = PurchaseReturnProduct::query()
            ->join('purchase_returns', 'purchase_return_products.return_id', '=', 'purchase_returns.id')
            ->join('purchases', 'purchase_returns.purchase_id', '=', 'purchases.id')
            ->join('products', 'purchase_return_products.product_id', '=', 'products.id')
            ->leftJoin('suppliers', 'purchases.supplier_id', '=', 'suppliers.id')
            ->whereNotNull('purchase_returns.id')
            ->whereNotNull('products.id')
            ->select([
                'purchase_return_products.id',
                'purchase_return_products.return_id',
                'purchase_return_products.product_id',
                'purchase_return_products.quantity',
                'purchase_return_products.purchase_price',
                'purchase_returns.date',
                'purchase_returns.code',
                'products.name as product_name',
                'products.code as product_code',
                'products.slug as product_slug',
                'suppliers.name as supplier_name'
            ]);
        
        // Apply search term
        if (!empty($term)) {
            $query->where(function($q) use ($term) {
                $q->where('products.name', 'LIKE', '%' . $term . '%')
                  ->orWhere('products.code', 'LIKE', '%' . $term . '%')
                  ->orWhere('purchase_returns.code', 'LIKE', '%' . $term . '%');
            });
        }
        
        // Apply date filters
        if (!empty($startDate)) {
            $query->where('purchase_returns.date', '>=', $startDate);
        }
        if (!empty($endDate)) {
            $query->where('purchase_returns.date', '<=', $endDate);
        }
        
        $results = $query->orderBy('purchase_returns.date', 'desc')->get();
        
        foreach ($results as $row) {
            $buildItem([
                'id' => 'purchase_return_' . $row->id,
                'operation_date' => $row->date ?? null,
                'product_name' => $row->product_name ?? '',
                'product_code' => $row->product_code ?? '',
                'product_slug' => $row->product_slug ?? '',
                'operation_type' => 'Purchase Return',
                'price' => $row->purchase_price ?? 0,
                'quantity_change' => -($row->quantity ?? 0),
                'notes' => 'Return to ' . ($row->supplier_name ?? 'Unknown'),
                'reference_code' => config('config.purchaseReturnPrefix', 'PUR-RET') . '-' . ($row->code ?? ''),
            ]);
        }
    }
}
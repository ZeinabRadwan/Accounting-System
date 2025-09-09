<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Product;
use App\Models\PurchaseOrder;
use Illuminate\Http\Request;
use App\Models\PurchaseOrderProduct;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PurchaseOrderController extends Controller
{
    // define middleware
    public function __construct()
    {
        // Temporarily disabled for debugging
        // $this->middleware('can:purchase-order-list', ['only' => ['index', 'search']]);
        // $this->middleware('can:purchase-order-create', ['only' => ['create']]);
        // $this->middleware('can:purchase-order-view', ['only' => ['show']]);
        // $this->middleware('can:purchase-order-edit', ['only' => ['update']]);
        // $this->middleware('can:purchase-order-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Debug: Check if user is authenticated and has permissions
        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => 'User not authenticated'], 401);
        }
        
        $hasPermission = $user->can('purchase-order-list');
        if (!$hasPermission) {
            return response()->json(['error' => 'User does not have purchase-order-list permission'], 403);
        }
        
        return PurchaseOrder::with('supplier', 'purchaseOrderProducts.product')
            ->latest()
            ->paginate($request->perPage ?? 10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // validate request
        $this->validate($request, [
            'supplier' => 'required',
            'selectedProducts' => 'required|array|min:1',
            'selectedProducts.*' => 'required|distinct',
            'selectedProducts.*.id' => 'required|exists:products,id',
            'selectedProducts.*.quantity' => 'required|numeric|min:1',
            'selectedProducts.*.unitPrice' => 'required|numeric|min:0',
            'discount' => 'nullable|numeric|min:0',
            'transport' => 'nullable|numeric|min:0',
            'subTotal' => 'nullable|numeric|min:0',
            'netTotal' => 'nullable|numeric|min:0',
            'totalProductTax' => 'nullable|numeric|min:0',
            'poReference' => 'nullable|string|max:255',
            'paymentTerms' => 'nullable|string|max:255',
            'purchaseDate' => 'nullable|date_format:Y-m-d',
            'poDate' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
            'status' => 'nullable|in:0,1',
            'isSendEmail' => 'nullable|boolean',
            'isSendSMS' => 'nullable|boolean',
        ]);

        try {
            DB::beginTransaction();

            // generate purchase order number
            $purchaseOrderNo = $this->generatePurchaseOrderNo();

            // create purchase order
            $purchaseOrder = PurchaseOrder::create([
                'purchase_no' => $purchaseOrderNo,
                'supplier_id' => $request->supplier['id'],
                'discount' => $request->discount ?? 0,
                'transport' => $request->transport ?? 0,
                'sub_total' => $request->subTotal ?? 0,
                'net_total' => $request->netTotal ?? 0,
                'total_tax' => $request->totalProductTax ?? 0,
                'po_reference' => $request->poReference,
                'payment_terms' => $request->paymentTerms,
                'po_date' => $request->poDate,
                'purchase_date' => $request->purchaseDate,
                'note' => $request->note,
                'status' => $request->status ?? 1,
                'is_paid' => 0,
                'is_send_email' => $request->isSendEmail ?? false,
                'is_send_sms' => $request->isSendSMS ?? false,
                'created_by' => Auth::id(),
            ]);

            // create purchase order products
            foreach ($request->selectedProducts as $product) {
                PurchaseOrderProduct::create([
                    'purchase_order_id' => $purchaseOrder->id,
                    'product_id' => $product['id'],
                    'quantity' => $product['quantity'],
                    'purchase_price' => $product['unitPrice'],
                    'unit_cost' => $product['unitPrice'],
                    'tax_amount' => 0, // Can be calculated later if needed
                    'discount' => $product['discount'] ?? 0,
                    'discount_type' => $product['discount_type'] ?? 'fixed',
                    'discount_amount' => $product['discount_amount'] ?? 0,
                ]);
            }

            DB::commit();

            return response()->json([
                'message' => 'Purchase order created successfully',
                'data' => $purchaseOrder->load('supplier', 'purchaseOrderProducts.product')
            ], 201);

        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error creating purchase order',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $purchaseOrder = PurchaseOrder::with('supplier', 'purchaseOrderProducts.product')
            ->where('slug', $slug)
            ->firstOrFail();

        return response()->json([
            'data' => $purchaseOrder
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $slug)
    {
        $purchaseOrder = PurchaseOrder::where('slug', $slug)->firstOrFail();

        // validate request
        $this->validate($request, [
            'supplier' => 'required',
            'selectedProducts' => 'required|array|min:1',
            'selectedProducts.*' => 'required|distinct',
            'selectedProducts.*.id' => 'required|exists:products,id',
            'selectedProducts.*.quantity' => 'required|numeric|min:1',
            'selectedProducts.*.unitPrice' => 'required|numeric|min:0',
            'discount' => 'nullable|numeric|min:0',
            'transport' => 'nullable|numeric|min:0',
            'subTotal' => 'nullable|numeric|min:0',
            'netTotal' => 'nullable|numeric|min:0',
            'totalProductTax' => 'nullable|numeric|min:0',
            'poReference' => 'nullable|string|max:255',
            'paymentTerms' => 'nullable|string|max:255',
            'purchaseDate' => 'nullable|date_format:Y-m-d',
            'poDate' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
            'status' => 'nullable|in:0,1',
            'isSendEmail' => 'nullable|boolean',
            'isSendSMS' => 'nullable|boolean',
        ]);

        try {
            DB::beginTransaction();

            // update purchase order
            $purchaseOrder->update([
                'supplier_id' => $request->supplier['id'],
                'discount' => $request->discount ?? 0,
                'transport' => $request->transport ?? 0,
                'sub_total' => $request->subTotal ?? 0,
                'net_total' => $request->netTotal ?? 0,
                'total_tax' => $request->totalProductTax ?? 0,
                'po_reference' => $request->poReference,
                'payment_terms' => $request->paymentTerms,
                'po_date' => $request->poDate,
                'purchase_date' => $request->purchaseDate,
                'note' => $request->note,
                'status' => $request->status ?? 1,
                'is_send_email' => $request->isSendEmail ?? false,
                'is_send_sms' => $request->isSendSMS ?? false,
            ]);

            // delete existing products
            $purchaseOrder->purchaseOrderProducts()->delete();

            // create new purchase order products
            foreach ($request->selectedProducts as $product) {
                PurchaseOrderProduct::create([
                    'purchase_order_id' => $purchaseOrder->id,
                    'product_id' => $product['id'],
                    'quantity' => $product['quantity'],
                    'purchase_price' => $product['unitPrice'],
                    'unit_cost' => $product['unitPrice'],
                    'tax_amount' => 0, // Can be calculated later if needed
                    'discount' => $product['discount'] ?? 0,
                    'discount_type' => $product['discount_type'] ?? 'fixed',
                    'discount_amount' => $product['discount_amount'] ?? 0,
                ]);
            }

            DB::commit();

            return response()->json([
                'message' => 'Purchase order updated successfully',
                'data' => $purchaseOrder->load('supplier', 'purchaseOrderProducts.product')
            ]);

        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error updating purchase order',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($slug)
    {
        try {
            $purchaseOrder = PurchaseOrder::where('slug', $slug)->firstOrFail();
            
            // Delete related products first
            $purchaseOrder->purchaseOrderProducts()->delete();
            
            // Delete the purchase order
            $purchaseOrder->delete();

            return response()->json([
                'message' => 'Purchase order deleted successfully'
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error deleting purchase order',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Search purchase orders
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $query = PurchaseOrder::with('supplier', 'purchaseOrderProducts.product');

        if ($request->term) {
            $query->where(function ($q) use ($request) {
                $q->where('purchase_no', 'like', '%' . $request->term . '%')
                  ->orWhere('po_reference', 'like', '%' . $request->term . '%')
                  ->orWhereHas('supplier', function ($supplierQuery) use ($request) {
                      $supplierQuery->where('name', 'like', '%' . $request->term . '%');
                  });
            });
        }

        if ($request->startDate && $request->endDate) {
            $query->whereBetween('purchase_date', [$request->startDate, $request->endDate]);
        }

        return $query->latest()->paginate($request->perPage ?? 10);
    }

    /**
     * Generate purchase order number
     *
     * @return string
     */
    private function generatePurchaseOrderNo()
    {
        $prefix = 'PO';
        $lastPurchaseOrder = PurchaseOrder::latest()->first();
        
        if ($lastPurchaseOrder) {
            $lastNumber = (int) str_replace($prefix, '', $lastPurchaseOrder->purchase_no);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        return $prefix . str_pad($newNumber, 6, '0', STR_PAD_LEFT);
    }
}
<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Product;
use App\Rules\MinTotal;
use App\Models\Purchase;
use Illuminate\Http\Request;
use App\Models\PurchasePayment;
use App\Models\PurchaseProduct;
use App\Rules\PurchaseTotalPaid;
use App\Models\AccountTransaction;
use App\Models\PurchaseJournal;
use App\Models\GeneralSetting;
use App\Services\BusinessTransactionJournalService;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Notifications\PurchaseNotification;
use App\Http\Resources\PurchaseListResource;
use App\Http\Resources\PurchaseProductsResource;
use App\Notifications\PurchasePaymentNotification;
use Illuminate\Support\Facades\Log;

class PurchaseController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:purchase-list', ['only' => ['index', 'search']]);
        $this->middleware('can:purchase-create', ['only' => ['create']]);
        $this->middleware('can:purchase-view', ['only' => ['show']]);
        $this->middleware('can:purchase-edit', ['only' => ['update']]);
        $this->middleware('can:purchase-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return PurchaseListResource::collection(Purchase::with('supplier', 'purchasePayments', 'purchaseTax')->latest()->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Get country setting to determine if orderTax is required
        $country = GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
        $isSaudiArabia = $country === 'SA';
        
        // Note: For purchases (bills), VAT is required only when NOT Saudi Arabia
        // In Saudi Arabia, purchases don't require bill-level VAT (but items can have VAT)
        
        // validate request
        $this->validate($request, [
            'supplier' => 'required',
            'selectedProducts' => 'required|array|min:1',
            'selectedProducts.*' => 'required|distinct',
            'discount' => 'nullable|numeric'.$request->subTotal,
            'transportCost' => 'nullable|numeric|min:1',
            'orderTax' => 'nullable', // VAT is not required for purchases (bills)
            'netTotal' => 'required|numeric|min:1',
            'poReference' => 'nullable|string|max:255',
            'paymentTerms' => 'nullable|string|max:255',
            'account' => $request->addPayment == true ? 'required' : 'nullable',
            'availableBalance' => $request->addPayment == true ? 'required|numeric' : 'nullable',
            'totalPaid' => [$request->addPayment != true ? 'nullable' : 'required', new PurchaseTotalPaid($request->availableBalance)],
            'chequeNo' => 'nullable|string|max:255',
            'receiptNo' => 'nullable|string|max:255',
            'purchaseDate' => 'nullable|date_format:Y-m-d',
            'poDate' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
        ]);

        try {
            DB::beginTransaction();

            // generate code
            $code = 1;
            $prevCode = Purchase::orderByRaw('CAST(purchase_no AS UNSIGNED) DESC')->first();
            if ($prevCode && is_numeric($prevCode->purchase_no)) {
                $code = $prevCode->purchase_no + 1;
            }

            // get logged in user id
            $userId = auth()->user()->id;

            // Calculate total discount from all products
            $totalProductDiscount = 0;
            foreach ($request->selectedProducts as $selectedProduct) {
                $discountAmount = 0;
                if (isset($selectedProduct['discount']) && $selectedProduct['discount'] > 0) {
                    if (isset($selectedProduct['discountType']) && $selectedProduct['discountType'] === 'percentage') {
                        $discountAmount = ($selectedProduct['unitPrice'] * $selectedProduct['qty'] * $selectedProduct['discount']) / 100;
                    } else {
                        $discountAmount = $selectedProduct['discount'];
                    }
                }
                $totalProductDiscount += $discountAmount;
            }

            // Calculate sub_total following the exact pseudocode logic
            $subTotal = 0;
            foreach ($request->selectedProducts as $selectedProduct) {
                // gross = quantity × purchase_price
                $gross = $selectedProduct['qty'] * $selectedProduct['unitPrice'];
                
                // Calculate discounted amount
                $discounted = 0;
                if (isset($selectedProduct['discountType']) && $selectedProduct['discountType'] === 'percentage') {
                    // discounted = gross - (gross × discount_amount / 100)
                    $discounted = $gross - ($gross * ($selectedProduct['discount'] ?? 0) / 100);
                } else {
                    // discounted = gross - discount_amount
                    $discounted = $gross - ($selectedProduct['discount'] ?? 0);
                }
                
                // vat = discounted × vat_rate
                $vatRate = 0;
                if (isset($selectedProduct['selectedVatRate']) && isset($selectedProduct['selectedVatRate']['rate'])) {
                    $vatRate = $selectedProduct['selectedVatRate']['rate'];
                }
                $vat = $discounted * ($vatRate / 100);
                
                // line_total = discounted + vat
                $lineTotal = $discounted + $vat;
                
                // sub_total += line_total
                $subTotal += $lineTotal;
            }
            
            // if transport is not null: sub_total += transport
            if ($request->transportCost) {
                $subTotal += $request->transportCost;
            }

            // create purchase
            $purchase = Purchase::create([
                'purchase_no' => $code,
                'slug' => uniqid(),
                'supplier_id' => $request->supplier['id'],
                'discount' => $totalProductDiscount, // Sum of all product discount amounts
                'transport' => $request->transportCost,
                'tax_id' => $isSaudiArabia ? null : ($request->orderTax ? $request->orderTax['id'] : null), // VAT only when NOT Saudi Arabia
                'sub_total' => $subTotal, // Calculated following the exact pseudocode logic
                'po_reference' => $request->poReference,
                'payment_terms' => $request->paymentTerms,
                'po_date' => $request->poDate,
                'purchase_date' => $request->purchaseDate,
                'note' => clean($request->note),
                'status' => $request->status,
                'created_by' => $userId,
            ]);

            // store purchase products
            foreach ($request->selectedProducts as $key => $selectedProduct) {
                $product = Product::where('slug', $selectedProduct['slug'])->first();

                // Validate product has purchase account (including fallback)
                if (!$product->hasPurchaseAccountWithFallback()) {
                    throw new Exception('Product ' . $product->name . ' must have a Purchase Account assigned or a default Product Purchase Account configured in routing settings.');
                }

                // Calculate discount amount for stock calculation
                $discountAmount = 0;
                if (isset($selectedProduct['discount']) && $selectedProduct['discount'] > 0) {
                    if (isset($selectedProduct['discountType']) && $selectedProduct['discountType'] === 'percentage') {
                        $discountAmount = ($selectedProduct['unitPrice'] * $selectedProduct['qty'] * $selectedProduct['discount']) / 100;
                    } else {
                        $discountAmount = $selectedProduct['discount'];
                    }
                }

                // Calculate unit cost for stock calculation: ((purchase_price * quantity - discount_amount) + tax_amount) / quantity
                $taxAmount = $selectedProduct['productTax'] ?? 0;
                $calculatedUnitCost = (($selectedProduct['unitPrice'] * $selectedProduct['qty'] - $discountAmount) + $taxAmount) / $selectedProduct['qty'];

                // calculate new purchase price for stock
                $currentStockPrice = $product->inventory_count * $product->purchase_price;
                $newStockPrice = $selectedProduct['qty'] * $calculatedUnitCost;
                $totalStockPrice = $currentStockPrice + $newStockPrice;
                $totalQty = $product->inventory_count + $selectedProduct['qty'];
                $newPurchasePrice = $totalStockPrice / $totalQty;

                // update product stock purchase price
                $product->update([
                    'purchase_price' => $newPurchasePrice,
                    'inventory_count' => $product->inventory_count + $selectedProduct['qty'],
                ]);

                // Calculate unit cost: ((purchase_price * quantity - discount_amount) + tax_amount) / quantity
                $unitCost = (($selectedProduct['unitPrice'] * $selectedProduct['qty'] - $discountAmount) + $taxAmount) / $selectedProduct['qty'];

                PurchaseProduct::create([
                    'purchase_id' => $purchase->id,
                    'product_id' => $product->id,
                    'quantity' => $selectedProduct['qty'],
                    'purchase_price' => $selectedProduct['unitPrice'],
                    'unit_cost' => $unitCost,
                    'tax_amount' => $taxAmount,
                    'discount' => $selectedProduct['discount'] ?? 0,
                    'discount_type' => $selectedProduct['discountType'] ?? 'fixed',
                    'discount_amount' => $discountAmount,
                ]);
            }

            // Create journal entry for purchase (after products are stored)
            try {
                $journalService = new BusinessTransactionJournalService();
                $journalEntry = $journalService->createPurchaseJournal($purchase, $userId);
                Log::info('Journal entry created successfully for purchase: ' . $purchase->purchase_no);
            } catch (\Exception $e) {
                // Log the error but don't fail the purchase creation
                Log::error('Failed to create journal entry for purchase: ' . $e->getMessage());
                Log::error('Purchase ID: ' . $purchase->id);
                Log::error('User ID: ' . $userId);
                Log::error('Exception trace: ' . $e->getTraceAsString());
            }

            // store transaction
            if ($request->addPayment == true) {
                $reason = '['.config('config.purchasePrefix').'-'.$purchase->purchase_no.'] Purchase Payment sent from ['.$request->account['accountNumber'].']';

                // create transaction
                $transaction = AccountTransaction::create([
                    'account_id' => $request->account['id'],
                    'amount' => $request->totalPaid,
                    'reason' => $reason,
                    'type' => 0,
                    'transaction_date' => $request->purchaseDate,
                    'cheque_no' => $request->chequeNo,
                    'receipt_no' => $request->receiptNo,
                    'created_by' => $userId,
                    'status' => $request->status,
                ]);

                // store purchase payment record
                PurchasePayment::create([
                    'slug' => uniqid(),
                    'purchase_id' => $purchase->id,
                    'transaction_id' => $transaction->id,
                    'amount' => $request->totalPaid,
                    'date' => $request->purchaseDate,
                    'note' => clean($request->note),
                    'created_by' => $userId,
                    'status' => $request->status,
                ]);

                // Create journal entry for purchase payment
                try {
                    $journalService = new BusinessTransactionJournalService();
                    $paymentJournalEntry = $journalService->createPurchasePaymentJournal($purchase, $request->totalPaid, $userId);
                } catch (\Exception $e) {
                    // Log the error but don't fail the payment creation
                    Log::error('Failed to create payment journal entry for purchase: ' . $e->getMessage());
                }
            }
            // update purchase
            if ($purchase->totalDue() == 0) {
                $purchase->update([
                    'is_paid' => 1,
                ]);
            }

            //send notification
            if ($request->isSendEmail || $request->isSendSMS) {
                $this->notifySupplier($purchase->slug, $request);
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($purchase)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . config('config.purchasePrefix') . '-' . $code . ']',
                    'event' => 'Create',
                    'slug' => $purchase->slug,
                    'routeName' => 'purchases.show'
                ])
                ->useLog('Purchase Created')
                ->log('Purchase Created');

            DB::commit();

            return $this->responseWithSuccess('Purchase added successfully', [
                'slug' => $purchase->slug,
            ]);
        } catch (Exception $e) {
            DB::rollback();
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
            $purchase = Purchase::with('supplier', 'purchaseProducts.purchase', 'purchaseReturn', 'purchasePayments.purchasePaymentTransaction.cashbookAccount', 'purchaseProducts.product.productUnit', 'purchaseProducts.product.productTax', 'purchaseProducts.product.proSubCategory.category', 'user')->where('slug', $slug)->first();
            
            if (!$purchase) {
                return $this->responseWithError('Purchase not found');
            }
            
            return new PurchaseProductsResource($purchase);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $slug)
    {
        $purchase = Purchase::where('slug', $slug)->with('purchaseProducts.product')->first();
        $totalPaid = $purchase->purchaseTotalPaid();
        $minAmount = ! isset($purchase->purchaseReturn) ? $totalPaid : $totalPaid - $purchase->purchaseReturn->returnTransaction->amount;

        // validate request
        $this->validate($request, [
            'supplier' => 'required',
            'selectedProducts' => 'required|array|min:1',
            'selectedProducts.*' => 'required|distinct',
            'discount' => 'nullable|numeric|min:1|max:'.$request->rowSubTotal,
            'transportCost' => 'nullable|numeric|min:1',
            'orderTax' => 'nullable', // VAT is not required for purchases (bills)
            'netTotal' => ['required', 'numeric', new MinTotal($minAmount, $request->netTotal)],
            'poReference' => 'nullable|string|max:255',
            'paymentTerms' => 'nullable|string|max:255',
            'purchaseDate' => 'nullable|date_format:Y-m-d',
            'poDate' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
        ]);

        try {
            DB::beginTransaction();

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($purchase)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . config('config.purchasePrefix') . '-' . $purchase->purchase_no . ']',
                    'event' => 'Update',
                    'slug' => $purchase->slug,
                    'routeName' => 'purchases.show'
                ])
                ->useLog('Purchase Updated')
                ->log('Purchase Updated');

            // Calculate total discount from all products
            $totalProductDiscount = 0;
            foreach ($request->selectedProducts as $selectedProduct) {
                $discountAmount = 0;
                if (isset($selectedProduct['discount']) && $selectedProduct['discount'] > 0) {
                    if (isset($selectedProduct['discountType']) && $selectedProduct['discountType'] === 'percentage') {
                        $discountAmount = ($selectedProduct['unitPrice'] * $selectedProduct['qty'] * $selectedProduct['discount']) / 100;
                    } else {
                        $discountAmount = $selectedProduct['discount'];
                    }
                }
                $totalProductDiscount += $discountAmount;
            }

            // Calculate sub_total following the exact pseudocode logic
            $subTotal = 0;
            foreach ($request->selectedProducts as $selectedProduct) {
                // gross = quantity × purchase_price
                $gross = $selectedProduct['qty'] * $selectedProduct['unitPrice'];
                
                // Calculate discounted amount
                $discounted = 0;
                if (isset($selectedProduct['discountType']) && $selectedProduct['discountType'] === 'percentage') {
                    // discounted = gross - (gross × discount_amount / 100)
                    $discounted = $gross - ($gross * ($selectedProduct['discount'] ?? 0) / 100);
                } else {
                    // discounted = gross - discount_amount
                    $discounted = $gross - ($selectedProduct['discount'] ?? 0);
                }
                
                // vat = discounted × vat_rate
                $vatRate = 0;
                if (isset($selectedProduct['selectedVatRate']) && isset($selectedProduct['selectedVatRate']['rate'])) {
                    $vatRate = $selectedProduct['selectedVatRate']['rate'];
                }
                $vat = $discounted * ($vatRate / 100);
                
                // line_total = discounted + vat
                $lineTotal = $discounted + $vat;
                
                // sub_total += line_total
                $subTotal += $lineTotal;
            }
            
            // if transport is not null: sub_total += transport
            if ($request->transportCost) {
                $subTotal += $request->transportCost;
            }

            // delete current products
            $purchase->purchaseProducts->each->delete();
            // store purchase products
            foreach ($request->selectedProducts as $key => $selectedProduct) {
                $product = Product::where('slug', $selectedProduct['slug'])->first();

                // Calculate discount amount for stock calculation
                $discountAmount = 0;
                if (isset($selectedProduct['discount']) && $selectedProduct['discount'] > 0) {
                    if (isset($selectedProduct['discountType']) && $selectedProduct['discountType'] === 'percentage') {
                        $discountAmount = ($selectedProduct['unitPrice'] * $selectedProduct['qty'] * $selectedProduct['discount']) / 100;
                    } else {
                        $discountAmount = $selectedProduct['discount'];
                    }
                }

                // Calculate unit cost for stock calculation: ((purchase_price * quantity - discount_amount) + tax_amount) / quantity
                $taxAmount = $selectedProduct['productTax'] ?? 0;
                $calculatedUnitCost = (($selectedProduct['unitPrice'] * $selectedProduct['qty'] - $discountAmount) + $taxAmount) / $selectedProduct['qty'];

                // calculate new purchase price for stock
                $currentStockPrice = $product->inventory_count * $product->purchase_price;
                $newStockPrice = $selectedProduct['qty'] * $calculatedUnitCost;
                $totalStockPrice = $currentStockPrice + $newStockPrice;
                $totalQty = $product->inventory_count + $selectedProduct['qty'];
                $newPurchasePrice = $totalStockPrice / $totalQty;

                $newInventory = $product->inventory_count - $selectedProduct['oldQty'] + $selectedProduct['qty'];

                // update product purchase price
                $product->update([
                    'purchase_price' => $newPurchasePrice,
                    'inventory_count' => $newInventory,
                ]);

                // Calculate unit cost: ((purchase_price * quantity - discount_amount) + tax_amount) / quantity
                $unitCost = (($selectedProduct['unitPrice'] * $selectedProduct['qty'] - $discountAmount) + $taxAmount) / $selectedProduct['qty'];

                // store products
                PurchaseProduct::create([
                    'purchase_id' => $purchase->id,
                    'product_id' => $product->id,
                    'quantity' => $selectedProduct['qty'],
                    'purchase_price' => $selectedProduct['unitPrice'],
                    'unit_cost' => $unitCost,
                    'tax_amount' => $taxAmount,
                    'discount' => $selectedProduct['discount'] ?? 0,
                    'discount_type' => $selectedProduct['discountType'] ?? 'fixed',
                    'discount_amount' => $discountAmount,
                ]);
            }

            // update purchase
            $purchase->update([
                'supplier_id' => $request->supplier['id'],
                'discount' => $totalProductDiscount, // Sum of all product discount amounts
                'transport' => $request->transportCost,
                'tax_id' => $request->orderTax['id'],
                'sub_total' => $subTotal, // Calculated following the exact pseudocode logic
                'po_reference' => $request->poReference,
                'payment_terms' => $request->paymentTerms,
                'po_date' => $request->poDate,
                'purchase_date' => $request->purchaseDate,
                'note' => clean($request->note),
                'status' => $request->status,
                'is_paid' => 1,
            ]);

            DB::commit();

            return $this->responseWithSuccess('Purchase updated successfully', [
                'slug' => $purchase->slug,
            ]);
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

            $purchase = Purchase::where('slug', $slug)->with('purchasePayments.purchasePaymentTransaction', 'purchaseProducts.product.productUnit', 'purchaseReturn.purchaseReturnProducts', 'purchaseReturn.returnTransaction')->first();

            // delete purchase return
            $purchaseReturn = $purchase->purchaseReturn;
            if (isset($purchaseReturn)) {
                if ($purchaseReturn->transaction_id != null) {
                    $purchaseReturn->returnTransaction->delete();
                }
                // update product inventory count
                foreach ($purchaseReturn->purchaseReturnProducts as $purchaseReturnProduct) {
                    $product = $purchaseReturnProduct->product;
                    $product->update([
                        'inventory_count' => $product->inventory_count + $purchaseReturnProduct->quantity,
                    ]);
                }
                // delete return products
                $purchaseReturn->purchaseReturnProducts->each->delete();
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($purchase)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . config('config.purchasePrefix') . '-' . $purchase->purchase_no . ']',
                    'event' => 'Delete'
                ])
                ->useLog('Purchase Deleted')
                ->log('Purchase Deleted');

            // delete purchase
            $purchase->delete();

            DB::commit();

            return $this->responseWithSuccess('Purchase deleted successfully!');
        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * search resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function search(Request $request)
    {
        $term = $request->term;
        $query = Purchase::with('supplier', 'purchasePayments', 'user');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('purchase_date', [$request->startDate, $request->endDate]);
        }

        $query = $query->where(function ($query) use ($term) {
            $query->where('purchase_no', 'LIKE', '%'.$term.'%')
                ->orWhere('sub_total', 'LIKE', '%'.$term.'%')
                ->orWhere('transport', 'LIKE', '%'.$term.'%')
                ->orWhere('discount', 'LIKE', '%'.$term.'%')
                ->orWhere('po_reference', 'LIKE', '%'.$term.'%')
                ->orWhere('payment_terms', 'LIKE', '%'.$term.'%')
                ->orWhereHas('supplier', function ($newQuery) use ($term) {
                    $newQuery->where('name', 'LIKE', '%'.$term.'%')
                        ->orWhere('company_name', 'LIKE', '%'.$term.'%')
                        ->orWhere('phone_number', 'LIKE', '%'.$term.'%')
                        ->orWhere('phone_legacy', 'LIKE', '%'.$term.'%');
                });
        });

        return PurchaseListResource::collection($query->latest()->paginate($request->perPage));
    }

    // notify supplier
    public function notifySupplier($slug, Request $request){
        $purchase = Purchase::with('supplier', 'purchaseProducts.purchase', 'purchaseReturn', 'purchasePayments.purchasePaymentTransaction.cashbookAccount', 'purchaseProducts.product.productUnit', 'purchaseProducts.product.productTax', 'purchaseProducts.product.proSubCategory.category', 'user')->where('slug', $slug)->first();
        // send notification
        $purchase->supplier->notify(new PurchaseNotification($purchase, [
            'isSendEmail' => filter_var($request->isSendEmail, FILTER_VALIDATE_BOOLEAN),
            'isSendSMS' =>  filter_var($request->isSendSMS, FILTER_VALIDATE_BOOLEAN)
        ]));
        return 'Successfully Notified';
    }

    // store purchase payment
    public function storePurchasePayment(Request $request){

        $maxAmount = $request->selectedPurchase['due'] <= $request->account['availableBalance'] ?  $request->selectedPurchase['due']  :  $request->account['availableBalance'];
        // validate request
        $this->validate($request, [
            'selectedPurchase' => 'required|array|min:1',
            'paidAmount' => 'required|numeric|min:1|max:'.$maxAmount,
            'account' => 'required',
            'chequeNo' => 'nullable|string|max:255',
            'receiptNo' => 'nullable|string|max:255',
            'paymentDate' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
        ]);

        $purchase = Purchase::where('slug', $request->selectedPurchase['slug'])->first();
        $userId = auth()->user()->id;
        // store transaction
        $transactionID = null;
        $reason = '['.config('config.purchasePrefix').'-'.$purchase->purchase_no.'] Purchase Payment sent from ['.$request->account['accountNumber'].']';
        // create transaction
        $transaction = AccountTransaction::create([
            'account_id' => $request->account['id'],
            'amount' => $request->paidAmount,
            'reason' => $reason,
            'type' => 0,
            'cheque_no' => $request->chequeNo,
            'receipt_no' => $request->receiptNo,
            'transaction_date' => $request->paymentDate,
            'created_by' => $userId,
            'status' => $request->status,
        ]);
        $transactionID = $transaction->id;

        // store purchase payment
        PurchasePayment::create([
            'slug' => uniqid(),
            'purchase_id' => $purchase->id,
            'amount' => $request->paidAmount,
            'transaction_id' => $transactionID,
            'date' => $request->paymentDate,
            'note' => clean($request->note),
            'created_by' => $userId,
            'status' => $request->status,
        ]);

        // update purchase
        $purchase->update([
            'is_paid' => $purchase->totalDue() <= 0 ? 1 : 0,
        ]);


        if ($request->isSendEmail || $request->isSendEmail) {
            $purchase['amount_paid'] = $request->paidAmount;
            $purchase->supplier->notify(new PurchasePaymentNotification($purchase, [
                'isSendEmail' => filter_var($request->isSendEmail, FILTER_VALIDATE_BOOLEAN),
                'isSendSMS' =>  filter_var($request->isSendSMS, FILTER_VALIDATE_BOOLEAN)
            ]));
        }

        return $this->responseWithSuccess('Supplier payment added successfully!');
    }
}
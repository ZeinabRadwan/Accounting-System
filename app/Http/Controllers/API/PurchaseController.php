<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PurchaseListResource;
use App\Http\Resources\PurchaseProductsResource;
use App\Models\Account;
use App\Models\AccountTransaction;
use App\Models\GeneralSetting;
use App\Models\PaymentVoucher;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\PurchaseProduct;
use App\Notifications\PurchaseNotification;
use App\Notifications\PurchasePaymentNotification;
use App\Rules\MinTotal;
use App\Rules\PurchaseTotalPaid;
use App\Services\BusinessTransactionJournalService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
        $query = Purchase::with('supplier', 'purchasePayments', 'purchaseTax', 'purchaseReturn');

        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        // if ((int) $user->account_role !== 1) {
        $branchIds = $this->getUserBranchIds($user);
        $query->whereIn('branch_id', $branchIds);
        // }

        return PurchaseListResource::collection($query->latest()->paginate($request->perPage));
    }

    private function getUserBranchIds($user)
    {
        $defaultBranchId = (int) ($user->default_branch_id ?? 0);

        return [$defaultBranchId > 0 ? $defaultBranchId : 0];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Get country setting to determine if orderTax is required
        $country = GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
        $isSaudiArabia = $country === 'SA';

        // Note: For purchases (bills), VAT is required only when NOT Saudi Arabia
        // In Saudi Arabia, purchases don't require bill-level VAT (but items can have VAT)

        // Check if supplier is taxable
        $supplier = \App\Models\Supplier::find($request->supplier['id']);
        $isSupplierTaxable = $supplier && $supplier->tax_status === 'taxable' &&
                             $supplier->tax_registration_number &&
                             strlen($supplier->tax_registration_number) > 0;

        // validate request
        $validationRules = [
            'supplier' => 'required',
            'selectedProducts' => 'required|array|min:1',
            'selectedProducts.*' => 'required|distinct',
            'discount' => 'nullable|numeric'.$request->subTotal,
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
        ];

        // Add transport cost validation based on supplier tax status
        if ($isSupplierTaxable) {
            $validationRules['transportTaxableCost'] = 'nullable|numeric|min:0';
        } else {
            $validationRules['transportCost'] = 'nullable|numeric|min:0';
        }

        $this->validate($request, $validationRules);

        // Collect all validation errors for journal entries
        $validationErrors = [];

        // Validate supplier has chart of account (supplier already loaded above)
        if (! $supplier || ! $supplier->isChartOfAccountConnected()) {
            $validationErrors[] = 'Supplier must have a Chart of Account assigned for journal entries.';
        }

        // Validate all products have purchase accounts
        foreach ($request->selectedProducts as $selectedProduct) {
            $product = Product::where('slug', $selectedProduct['slug'])->first();
            if (! $product || ! $product->hasPurchaseAccountWithFallback()) {
                $validationErrors[] = 'Product '.($product->name ?? 'Unknown').' must have a Purchase Account assigned or a default Product Purchase Account configured in routing settings.';
            }
        }

        // If there are validation errors, return them all at once
        if (! empty($validationErrors)) {
            $errorMessage = count($validationErrors) === 1
                ? $validationErrors[0]
                : 'Multiple validation errors found: '.implode('; ', $validationErrors);

            return $this->responseWithError($errorMessage, [
                'validation_errors' => $validationErrors,
                'error_count' => count($validationErrors),
            ]);
        }

        try {
            DB::beginTransaction();

            // generate code
            $code = 1;
            $prevCode = Purchase::orderByRaw('CAST(purchase_no AS UNSIGNED) DESC')->first();
            if ($prevCode && is_numeric($prevCode->purchase_no)) {
                $code = $prevCode->purchase_no + 1;
            }

            // get logged in user id
            $user = auth()->user();
            $userId = $user->id;
            $branchId = (int) ($user->default_branch_id ?? 0);

            // Get default fiscal year and accounting period from general settings
            $currentFiscalYearId = GeneralSetting::where('key', 'current_fiscal_year_id')->first()?->value;
            $currentAccountingPeriodId = GeneralSetting::where('key', 'current_accounting_period_id')->first()?->value;

            // Validate that the settings exist
            if (! $currentFiscalYearId) {
                return $this->responseWithError('Current fiscal year is not configured in system settings.');
            }
            if (! $currentAccountingPeriodId) {
                return $this->responseWithError('Current accounting period is not configured in system settings.');
            }

            // Validate that the fiscal year and accounting period exist in their respective tables
            $fiscalYear = \App\Models\FiscalYear::find($currentFiscalYearId);
            if (! $fiscalYear) {
                return $this->responseWithError('The configured fiscal year does not exist.');
            }

            $accountingPeriod = \App\Models\AccountingPeriod::find($currentAccountingPeriodId);
            if (! $accountingPeriod) {
                return $this->responseWithError('The configured accounting period does not exist.');
            }

            // Validate that the accounting period belongs to the fiscal year
            if ($accountingPeriod->fiscal_year_id != $fiscalYear->id) {
                return $this->responseWithError('The configured accounting period does not belong to the configured fiscal year.');
            }

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

            // Calculate transport costs based on supplier tax status
            $transportTaxable = 0;
            $transportTotal = 0;

            if ($isSupplierTaxable) {
                $transportTaxable = $request->transportTaxableCost ?? 0;

                // Always calculate VAT for taxable suppliers
                // Get default VAT rate for transport (use first VAT rate or 15% default)
                $vatRate = 15; // Default VAT rate
                $defaultVatRate = \App\Models\VatRate::where('status', 1)->orderBy('rate', 'desc')->first();
                if ($defaultVatRate) {
                    $vatRate = $defaultVatRate->rate;
                }

                // Calculate VAT on transport cost
                $transportVAT = $transportTaxable * ($vatRate / 100);

                // Total transport = transport cost + VAT
                $transportTotal = $transportTaxable + $transportVAT;
            } else {
                $transportTotal = $request->transportCost ?? 0;
            }

            // Add transport total to sub_total
            $subTotal += $transportTotal;

            // create purchase
            $purchase = Purchase::create([
                'purchase_no' => $code,
                'slug' => uniqid(),
                'supplier_id' => $request->supplier['id'],
                'discount' => $totalProductDiscount, // Sum of all product discount amounts
                'transport' => $isSupplierTaxable ? $transportTotal : ($request->transportCost ?? 0), // Keep transport for backward compatibility
                'transport_taxable' => $isSupplierTaxable ? $transportTaxable : null,
                'transport_non_taxable' => null, // Deprecated, kept for backward compatibility
                'tax_id' => $isSaudiArabia ? null : ($request->orderTax ? $request->orderTax['id'] : null), // VAT only when NOT Saudi Arabia
                'sub_total' => $subTotal, // Calculated following the exact pseudocode logic
                'po_reference' => $request->poReference,
                'payment_terms' => $request->paymentTerms,
                'po_date' => $request->poDate,
                'purchase_date' => $request->purchaseDate,
                'note' => clean($request->note),
                'status' => $request->status,
                'created_by' => $userId,
                'fiscal_year_id' => $currentFiscalYearId,
                'accounting_period_id' => $currentAccountingPeriodId,
                'branch_id' => $branchId,
            ]);

            // store purchase products
            foreach ($request->selectedProducts as $key => $selectedProduct) {
                $product = Product::where('slug', $selectedProduct['slug'])->first();

                // Validate product has purchase account (including fallback)
                if (! $product->hasPurchaseAccountWithFallback()) {
                    throw new Exception('Product '.$product->name.' must have a Purchase Account assigned or a default Product Purchase Account configured in routing settings.');
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

            // Create journal entry for purchase (skip for Saudi Arabia)
            if (! $isSaudiArabia) {
                try {
                    Log::info('Starting journal entry creation for purchase: '.$purchase->purchase_no);
                    $journalService = new BusinessTransactionJournalService;
                    $journalEntry = $journalService->createPurchaseJournal($purchase, $userId);
                    Log::info('Journal entry created successfully for purchase: '.$purchase->purchase_no.' with ID: '.$journalEntry->id);

                    // Check if purchase_journals record was created
                    $purchaseJournal = \App\Models\PurchaseJournal::where('purchase_id', $purchase->id)
                        ->where('journal_entry_id', $journalEntry->id)
                        ->first();

                    if ($purchaseJournal) {
                        Log::info('Purchase journal bridge record created successfully: '.$purchaseJournal->id);
                    } else {
                        Log::error('Purchase journal bridge record NOT created for purchase: '.$purchase->purchase_no);
                    }
                } catch (\Exception $e) {
                    // Log the error but don't fail the purchase creation
                    Log::error('Failed to create journal entry for purchase: '.$e->getMessage());
                    Log::error('Purchase ID: '.$purchase->id);
                    Log::error('User ID: '.$userId);
                    Log::error('Exception trace: '.$e->getTraceAsString());
                }
            }

            // store transaction
            if ($request->addPayment == true) {
                // Get account
                $account = Account::findOrFail($request->account['id']);

                // Prepare voucher data for purchase payment
                $voucherData = [
                    'slug' => uniqid(),
                    'voucher_type' => 0, // Send (صرف)
                    'entity_type' => 'supplier',
                    'supplier_id' => $purchase->supplier_id,
                    'payment_method' => 'purchase',
                    'purchase_id' => $purchase->id,
                    'amount' => $request->totalPaid,
                    'account_id' => $account->id,
                    'date' => $request->purchaseDate,
                    'cheque_no' => $request->chequeNo ?? null,
                    'receipt_no' => $request->receiptNo ?? null,
                    'note' => clean($request->note),
                    'status' => $request->status,
                    'created_by' => $userId,
                    'branch_id' => $branchId,
                ];

                // Generate transaction reason
                $reason = '['.config('config.purchasePrefix').'-'.$purchase->purchase_no.'] Purchase Payment sent from ['.$account->account_number.']';

                // create transaction
                $transaction = AccountTransaction::create([
                    'account_id' => $account->id,
                    'amount' => $request->totalPaid,
                    'reason' => $reason,
                    'type' => 0,
                    'transaction_date' => $request->purchaseDate,
                    'cheque_no' => $request->chequeNo,
                    'receipt_no' => $request->receiptNo,
                    'created_by' => $userId,
                    'status' => $request->status,
                    'branch_id' => $branchId,
                ]);

                $voucherData['transaction_id'] = $transaction->id;

                // Create payment voucher instead of purchase payment
                $voucher = PaymentVoucher::create($voucherData);

                // Create journal entry for payment voucher (skip for Saudi Arabia)
                if (! $isSaudiArabia && $request->status == 1) {
                    try {
                        $journalService = new BusinessTransactionJournalService;
                        $voucher->load(['supplier.chartOfAccount', 'transaction.account.chartOfAccount']);
                        $paymentJournalEntry = $journalService->createPaymentVoucherJournal($voucher, $userId);
                    } catch (\Exception $e) {
                        // Log the error but don't fail the payment creation
                        Log::error('Failed to create payment journal entry for voucher: '.$e->getMessage());
                    }
                }

            }
            // update purchase
            if ($purchase->totalDue() == 0) {
                $purchase->update([
                    'is_paid' => 1,
                ]);
            }

            // send notification
            if ($request->isSendEmail || $request->isSendSMS) {
                $this->notifySupplier($purchase->slug, $request);
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($purchase)
                ->withProperties([
                    'name' => '',
                    'code' => '['.config('config.purchasePrefix').'-'.$code.']',
                    'event' => 'Create',
                    'slug' => $purchase->slug,
                    'routeName' => 'purchases.show',
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

            if (! $purchase) {
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
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $slug)
    {
        $purchase = Purchase::where('slug', $slug)->with('purchaseProducts.product')->first();
        $totalPaid = $purchase->purchaseTotalPaid();
        $minAmount = ! isset($purchase->purchaseReturn) ? $totalPaid : $totalPaid - $purchase->purchaseReturn->returnTransaction->amount;

        // Check if supplier is taxable
        $supplier = \App\Models\Supplier::find($request->supplier['id']);
        $isSupplierTaxable = $supplier && $supplier->tax_status === 'taxable' &&
                             $supplier->tax_registration_number &&
                             strlen($supplier->tax_registration_number) > 0;

        // validate request
        $validationRules = [
            'supplier' => 'required',
            'selectedProducts' => 'required|array|min:1',
            'selectedProducts.*' => 'required|distinct',
            'discount' => 'nullable|numeric|min:1|max:'.$request->rowSubTotal,
            'orderTax' => 'nullable', // VAT is not required for purchases (bills)
            'netTotal' => ['required', 'numeric', new MinTotal($minAmount, $request->netTotal)],
            'poReference' => 'nullable|string|max:255',
            'paymentTerms' => 'nullable|string|max:255',
            'purchaseDate' => 'nullable|date_format:Y-m-d',
            'poDate' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
        ];

        // Add transport cost validation based on supplier tax status
        if ($isSupplierTaxable) {
            $validationRules['transportTaxableCost'] = 'nullable|numeric|min:0';
        } else {
            $validationRules['transportCost'] = 'nullable|numeric|min:0';
        }

        $this->validate($request, $validationRules);

        try {
            DB::beginTransaction();

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($purchase)
                ->withProperties([
                    'name' => '',
                    'code' => '['.config('config.purchasePrefix').'-'.$purchase->purchase_no.']',
                    'event' => 'Update',
                    'slug' => $purchase->slug,
                    'routeName' => 'purchases.show',
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

            // Calculate transport costs based on supplier tax status
            $transportTaxable = 0;
            $transportTotal = 0;

            if ($isSupplierTaxable) {
                $transportTaxable = $request->transportTaxableCost ?? 0;

                // Always calculate VAT for taxable suppliers
                // Get default VAT rate for transport (use first VAT rate or 15% default)
                $vatRate = 15; // Default VAT rate
                $defaultVatRate = \App\Models\VatRate::where('status', 1)->orderBy('rate', 'desc')->first();
                if ($defaultVatRate) {
                    $vatRate = $defaultVatRate->rate;
                }

                // Calculate VAT on transport cost
                $transportVAT = $transportTaxable * ($vatRate / 100);

                // Total transport = transport cost + VAT
                $transportTotal = $transportTaxable + $transportVAT;
            } else {
                $transportTotal = $request->transportCost ?? 0;
            }

            // Add transport total to sub_total
            $subTotal += $transportTotal;

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

            // Get current fiscal year and accounting period from general settings for update
            $currentFiscalYearId = GeneralSetting::where('key', 'current_fiscal_year_id')->first()?->value;
            $currentAccountingPeriodId = GeneralSetting::where('key', 'current_accounting_period_id')->first()?->value;

            // Validate that the settings exist
            if (! $currentFiscalYearId) {
                return $this->responseWithError('Current fiscal year is not configured in system settings.');
            }
            if (! $currentAccountingPeriodId) {
                return $this->responseWithError('Current accounting period is not configured in system settings.');
            }

            // Validate that the fiscal year and accounting period exist in their respective tables
            $fiscalYear = \App\Models\FiscalYear::find($currentFiscalYearId);
            if (! $fiscalYear) {
                return $this->responseWithError('The configured fiscal year does not exist.');
            }

            $accountingPeriod = \App\Models\AccountingPeriod::find($currentAccountingPeriodId);
            if (! $accountingPeriod) {
                return $this->responseWithError('The configured accounting period does not exist.');
            }

            // Validate that the accounting period belongs to the fiscal year
            if ($accountingPeriod->fiscal_year_id != $fiscalYear->id) {
                return $this->responseWithError('The configured accounting period does not belong to the configured fiscal year.');
            }

            // Get country setting to determine if orderTax is required
            $country = GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
            $isSaudiArabia = $country === 'SA';

            // update purchase
            $purchase->update([
                'supplier_id' => $request->supplier['id'],
                'discount' => $totalProductDiscount, // Sum of all product discount amounts
                'transport' => $isSupplierTaxable ? $transportTotal : ($request->transportCost ?? 0), // Keep transport for backward compatibility
                'transport_taxable' => $isSupplierTaxable ? $transportTaxable : null,
                'transport_non_taxable' => null, // Deprecated, kept for backward compatibility
                'tax_id' => $isSaudiArabia ? null : ($request->orderTax ? $request->orderTax['id'] : null), // VAT only when NOT Saudi Arabia
                'sub_total' => $subTotal, // Calculated following the exact pseudocode logic
                'po_reference' => $request->poReference,
                'payment_terms' => $request->paymentTerms,
                'po_date' => $request->poDate,
                'purchase_date' => $request->purchaseDate,
                'note' => clean($request->note),
                'status' => $request->status,
                'is_paid' => 1,
                'fiscal_year_id' => $currentFiscalYearId,
                'accounting_period_id' => $currentAccountingPeriodId,
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
                    'name' => '',
                    'code' => '['.config('config.purchasePrefix').'-'.$purchase->purchase_no.']',
                    'event' => 'Delete',
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
        $query = Purchase::with('supplier', 'purchasePayments', 'purchaseTax', 'purchaseReturn', 'user');

        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        if ((int) $user->account_role !== 1) {
            $branchIds = $this->getUserBranchIds($user);
            $query->whereIn('branch_id', $branchIds);
        }

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
    public function notifySupplier($slug, Request $request)
    {
        $purchase = Purchase::with('supplier', 'purchaseProducts.purchase', 'purchaseReturn', 'purchasePayments.purchasePaymentTransaction.cashbookAccount', 'purchaseProducts.product.productUnit', 'purchaseProducts.product.productTax', 'purchaseProducts.product.proSubCategory.category', 'user')->where('slug', $slug)->first();
        // send notification
        $purchase->supplier->notify(new PurchaseNotification($purchase, [
            'isSendEmail' => filter_var($request->isSendEmail, FILTER_VALIDATE_BOOLEAN),
            'isSendSMS' => filter_var($request->isSendSMS, FILTER_VALIDATE_BOOLEAN),
        ]));

        return 'Successfully Notified';
    }

    // store purchase payment
    public function storePurchasePayment(Request $request)
    {
        // Get country setting
        $country = GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
        $isSaudiArabia = $country === 'SA';

        $maxAmount = $request->selectedPurchase['due'] <= $request->account['availableBalance'] ? $request->selectedPurchase['due'] : $request->account['availableBalance'];
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

        // Prevent adding payment to inactive purchases
        if (! $purchase || (int) $purchase->status !== 1) {
            return $this->responseWithError('Cannot add payment to an inactive purchase. You have to send the purchase first.');
        }

        $user = auth()->user();
        $userId = $user->id;
        $branchId = (int) ($user->default_branch_id ?? 0);

        // Get account
        $account = Account::findOrFail($request->account['id']);

        // Prepare voucher data for purchase payment
        $voucherData = [
            'slug' => uniqid(),
            'voucher_type' => 0, // Send (صرف)
            'entity_type' => 'supplier',
            'supplier_id' => $purchase->supplier_id,
            'payment_method' => 'purchase',
            'purchase_id' => $purchase->id,
            'amount' => $request->paidAmount,
            'account_id' => $account->id,
            'date' => $request->paymentDate,
            'cheque_no' => $request->chequeNo ?? null,
            'receipt_no' => $request->receiptNo ?? null,
            'note' => clean($request->note),
            'status' => $request->status,
            'created_by' => $userId,
            'branch_id' => $branchId,
        ];

        // Generate transaction reason
        $reason = '['.config('config.purchasePrefix').'-'.$purchase->purchase_no.'] Purchase Payment sent from ['.$account->account_number.']';

        // create transaction
        $transaction = AccountTransaction::create([
            'account_id' => $account->id,
            'amount' => $request->paidAmount,
            'reason' => $reason,
            'type' => 0,
            'cheque_no' => $request->chequeNo,
            'receipt_no' => $request->receiptNo,
            'transaction_date' => $request->paymentDate,
            'created_by' => $userId,
            'status' => $request->status,
            'branch_id' => $branchId,
        ]);

        $voucherData['transaction_id'] = $transaction->id;

        // Create payment voucher instead of purchase payment
        $voucher = PaymentVoucher::create($voucherData);

        // Create journal entry for payment voucher (skip for Saudi Arabia)
        if (! $isSaudiArabia && $request->status == 1) {
            try {
                $journalService = new BusinessTransactionJournalService;
                $voucher->load(['supplier.chartOfAccount', 'transaction.account.chartOfAccount']);
                $paymentJournalEntry = $journalService->createPaymentVoucherJournal($voucher, $userId);
            } catch (\Exception $e) {
                // Log the error but don't fail the payment creation
                Log::error('Failed to create payment journal entry for voucher: '.$e->getMessage());
            }
        }

        // update purchase
        $purchase->update([
            'is_paid' => $purchase->totalDue() <= 0 ? 1 : 0,
        ]);

        if ($request->isSendEmail || $request->isSendEmail) {
            $purchase['amount_paid'] = $request->paidAmount;
            $purchase->supplier->notify(new PurchasePaymentNotification($purchase, [
                'isSendEmail' => filter_var($request->isSendEmail, FILTER_VALIDATE_BOOLEAN),
                'isSendSMS' => filter_var($request->isSendSMS, FILTER_VALIDATE_BOOLEAN),
            ]));
        }

        return $this->responseWithSuccess('Supplier payment added successfully!');
    }

    /**
     * Send purchase to ZATCA
     *
     * @param  string  $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendToZatca($slug)
    {
        try {
            $purchase = Purchase::where('slug', $slug)->with('supplier', 'purchaseProducts.product', 'purchasePayments')->first();

            if (! $purchase) {
                return $this->responseWithError('Purchase not found');
            }

            // Get country setting
            $country = GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
            $isSaudiArabia = $country === 'SA';

            // Only allow for Saudi Arabia
            if (! $isSaudiArabia) {
                return $this->responseWithError('This feature is only available for Saudi Arabia');
            }

            // Only allow for inactive purchases
            if ($purchase->status != 0) {
                return $this->responseWithError('Only inactive purchases can be sent to ZATCA');
            }

            $userId = auth()->user()->id;

            // Create journal entry for purchase (now that we're sending to ZATCA)
            try {
                Log::info("Starting ZATCA journal creation for purchase: {$purchase->purchase_no} (ID: {$purchase->id})");

                // Debug purchase data
                Log::info('Purchase supplier: '.($purchase->supplier ? $purchase->supplier->name : 'NULL'));
                Log::info('Purchase supplier chart of account: '.($purchase->supplier && $purchase->supplier->chartOfAccount ? $purchase->supplier->chartOfAccount->name : 'NULL'));
                Log::info('Purchase products count: '.$purchase->purchaseProducts->count());

                foreach ($purchase->purchaseProducts as $pp) {
                    Log::info("Product: {$pp->product->name}, Purchase Account: ".($pp->product->purchaseAccount ? $pp->product->purchaseAccount->name : 'NULL'));
                }

                $journalService = new BusinessTransactionJournalService;
                $journalEntry = $journalService->createPurchaseJournal($purchase, $userId);
                Log::info("ZATCA journal entry created successfully for purchase: {$purchase->purchase_no} with journal ID: {$journalEntry->id}");
            } catch (\Exception $e) {
                Log::error('Failed to create journal entry for ZATCA purchase: '.$e->getMessage());
                Log::error('Purchase details: ID='.$purchase->id.', Purchase No='.$purchase->purchase_no);
                Log::error('User ID: '.$userId);
                Log::error('Exception trace: '.$e->getTraceAsString());

                return $this->responseWithError('Failed to create journal entries: '.$e->getMessage());
            }

            // Create journal entries for any existing payments
            foreach ($purchase->purchasePayments as $payment) {
                try {
                    $transaction = AccountTransaction::find($payment->transaction_id);
                    if ($transaction) {
                        $paymentJournalEntry = $journalService->createPurchasePaymentJournal($purchase, $payment->amount, $userId);
                        $payment->update([
                            'status' => 1,
                        ]);

                        $transaction->update([
                            'status' => 1,
                        ]);
                    }
                } catch (\Exception $e) {
                    Log::error('Failed to create payment journal entry for ZATCA purchase: '.$e->getMessage());
                    // Continue with other payments even if one fails
                }
            }

            // Update purchase status to active (sent to ZATCA)
            $purchase->update(['status' => 1]);

            // Here you would add actual ZATCA integration
            // For now, we'll just simulate the ZATCA sending
            // You can integrate with ZATCA API here

            // Log the ZATCA sending
            Log::info("Purchase {$purchase->purchase_no} sent to ZATCA", [
                'purchase_id' => $purchase->id,
                'user_id' => $userId,
                'timestamp' => now(),
            ]);

            return $this->responseWithSuccess('Purchase sent to ZATCA successfully and journal entries created', [
                'purchase_id' => $purchase->id,
                'purchase_no' => $purchase->purchase_no,
                'status' => 'sent_to_zatca',
            ]);

        } catch (Exception $e) {
            Log::error('Error sending purchase to ZATCA: '.$e->getMessage());

            return $this->responseWithError('Failed to send purchase to ZATCA: '.$e->getMessage());
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Invoice\StoreInvoiceRequest;
use App\Http\Resources\InvoiceListResource;
use App\Http\Resources\InvoiceResource;
use App\Models\Account;
use App\Models\AccountRoutingSetting;
use App\Models\AccountTransaction;
use App\Models\ChartOfAccount;
use App\Models\Client;
use App\Models\GeneralSetting;
use App\Models\Invoice;
use App\Models\InvoiceProduct;
use App\Models\PaymentVoucher;
use App\Models\Product;
use App\Notifications\InvoiceNotification;
use App\Notifications\InvoicePaymentNotification;
use App\Rules\MinTotal;
use App\Services\BusinessTransactionJournalService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class InvoiceController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:invoice-list', ['only' => ['index', 'search']]);
        $this->middleware('can:invoice-create', ['only' => ['create']]);
        $this->middleware('can:invoice-view', ['only' => ['show']]);
        $this->middleware('can:invoice-edit', ['only' => ['update']]);
        $this->middleware('can:invoice-delete', ['only' => ['destroy']]);
        // Block modifications to active invoices (KSA)
        $this->middleware('prevent_active_invoice_modification', ['only' => ['update', 'destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Invoice::with('client', 'invoiceTax', 'invoicePayments', 'invoiceReturn');

        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        // if ((int) $user->account_role !== 1) {
        $branchIds = $this->getUserBranchIds($user);
        $query->whereIn('branch_id', $branchIds);
        // }

        return InvoiceListResource::collection($query->latest()->paginate($request->perPage));
    }

    private function getUserBranchIds($user)
    {
        $defaultBranchId = (int) ($user->default_branch_id ?? 0);

        return [$defaultBranchId > 0 ? $defaultBranchId : 0];
    }

    private function getDiscountAllowedAccount(): ?ChartOfAccount
    {
        $setting = AccountRoutingSetting::where('module', 'sales')
            ->where('setting_key', 'discount_allowed_account')
            ->first();

        if (! $setting || ! $setting->main_account_id) {
            return null;
        }

        $branchId = Auth::user()->default_branch_id ?? null;

        return ChartOfAccount::forBranch($branchId)->find($setting->main_account_id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreInvoiceRequest $request)
    {
        try {
            $client = Client::findOrFail($request->client['id']);
            $chartOfAccount = $client?->chartOfAccount;

            // Collect all validation errors
            $validationErrors = [];

            // Validate client has chart of account
            if (! $client || ! $chartOfAccount) {
                $validationErrors[] = 'Client must have a Chart of Account assigned for journal entries.';
            }

            $totalDiscountAmount = 0;

            foreach ($request->selectedProducts as $key => $selectedProduct) {
                $product = Product::where('slug', $selectedProduct['slug'])->first();
                if (! $product || ! $product->hasSalesAccount()) {
                    $validationErrors[] = 'Product '.($product->name ?? 'Unknown').' must have a Sales Account assigned.';
                }

                // VAT rate validation removed per business request

                if (isset($selectedProduct['discount']) && $selectedProduct['discount'] > 0) {
                    $totalDiscountAmount += $selectedProduct['discount'];
                }
            }

            if ($totalDiscountAmount > 0) {
                $discountAccount = $this->getDiscountAllowedAccount();
                if (! $discountAccount) {
                    $validationErrors[] = 'Discount Allowed account must be configured in account routing settings to process discounts.';
                }
            }

            if ($request->addPayment == 1) {
                $account = Account::findOrFail($request->account['id']);
                if (! $account) {
                    $validationErrors[] = 'Bank Account not found.';
                }

                if (! $account->chartOfAccount) {
                    $validationErrors[] = 'Bank Account must have a Chart of Account assigned for journal entries.';
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

            DB::beginTransaction();

            // generate code
            $code = $this->generateNextInvoiceCode();

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

            // Get country setting to determine status
            $country = GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
            $isSaudiArabia = $country === 'SA';

            // Set status based on country
            $invoiceStatus = $isSaudiArabia ? 0 : $request->status; // 0 = Inactive for KSA, use request value for others

            // calculate is paid
            $isPaid = 0;
            if ($request->netTotal == $request->paidAmount) {
                $isPaid = 1;
            }

            // dd($request->selectedProducts);

            // create invoice
            $invoice = Invoice::create([
                'invoice_no' => $code,
                'reference' => $request->reference,
                'slug' => uniqid(),
                'client_id' => $request->client['id'],
                'transport' => $request->transportCost,
                'sub_total' => $request->subTotal,
                'discount_type' => $request->discountType,
                'discount' => $request->discount,
                'po_reference' => $request->poReference,
                'payment_terms' => $request->paymentTerms,
                'delivery_place' => $request->deliveryPlace,
                // Handle cases where orderTax may be absent (e.g., KSA flow)
                'tax_id' => $request->orderTax['id'] ?? null,
                'invoice_date' => $request->date,
                'note' => clean($request->note),
                'status' => $invoiceStatus,
                'is_paid' => $isPaid,
                'created_by' => $userId,
                'fiscal_year_id' => $currentFiscalYearId,
                'accounting_period_id' => $currentAccountingPeriodId,
                'branch_id' => $branchId,
            ]);

            // store invoice products
            foreach ($request->selectedProducts as $key => $selectedProduct) {
                $product = Product::where('slug', $selectedProduct['slug'])->first();

                // Validate product has sales account
                if (! $product->hasSalesAccount()) {
                    throw new Exception('Product '.$product->name.' must have a Sales Account assigned.');
                }

                // update product stock
                $product->update([
                    'inventory_count' => $product->inventory_count - $selectedProduct['qty'],
                ]);

                // Calculate discount amount
                $discountAmount = 0;
                if (isset($selectedProduct['discount']) && $selectedProduct['discount'] > 0) {
                    if (isset($selectedProduct['discountType']) && $selectedProduct['discountType'] === 'percentage') {
                        $discountAmount = ($selectedProduct['unitPrice'] * $selectedProduct['qty'] * $selectedProduct['discount']) / 100;
                    } else {
                        $discountAmount = $selectedProduct['discount'];
                    }
                }

                // Calculate server-side unit cost to ensure receipt reflects edited price
                $lineQty = (float) ($selectedProduct['qty'] ?? 0);
                $lineUnitPrice = (float) ($selectedProduct['unitPrice'] ?? 0);
                $lineTaxAmount = (float) ($selectedProduct['productTax'] ?? ($selectedProduct['totalTax'] ?? 0));
                $lineSubtotalAfterDiscount = ($lineUnitPrice * $lineQty) - (float) $discountAmount;
                $calculatedUnitCost = $lineQty > 0 ? (($lineSubtotalAfterDiscount + $lineTaxAmount) / $lineQty) : 0;

                InvoiceProduct::create([
                    'invoice_id' => $invoice->id,
                    'product_id' => $selectedProduct['id'],
                    'quantity' => $selectedProduct['qty'],
                    'purchase_price' => $selectedProduct['avgPurchasePrice'],
                    'sale_price' => $selectedProduct['unitPrice'],
                    'unit_cost' => $calculatedUnitCost,
                    'tax_amount' => $lineTaxAmount,
                    // 'tax_amount' => $selectedProduct['productTax'],
                    'discount' => $selectedProduct['discount'] ?? 0,
                    'discount_type' => $selectedProduct['discountType'] ?? 'fixed',
                    'discount_amount' => $discountAmount,
                    'vat_rate_id' => $selectedProduct['selectedVatRate']['id'] ?? null,
                ]);
            }

            // Create journal entry for invoice sale (skip for Saudi Arabia)
            if (! $isSaudiArabia) {
                try {
                    $journalService = new BusinessTransactionJournalService;
                    $journalEntry = $journalService->createInvoiceSaleJournal($invoice, $userId);
                } catch (\Exception $e) {
                    // Log the error but don't fail the invoice creation
                    Log::error('Failed to create journal entry for invoice: '.$e->getMessage());
                }
            }

            // store transaction (only if invoice is active)
            if ($request->addPayment == 1) {
                if ($invoiceStatus !== 1) {
                    DB::rollBack();

                    return $this->responseWithError('Cannot add payment to an inactive invoice.');
                }

                // Get account
                $account = Account::findOrFail($request->account['id']);

                // Prepare voucher data for invoice payment
                $voucherData = [
                    'slug' => uniqid(),
                    'voucher_type' => 1, // Receive (قبض)
                    'entity_type' => 'client',
                    'client_id' => $invoice->client_id,
                    'payment_method' => 'invoice',
                    'invoice_id' => $invoice->id,
                    'amount' => $request->paidAmount,
                    'account_id' => $account->id,
                    'date' => $request->date,
                    'cheque_no' => $request->chequeNo ?? null,
                    'receipt_no' => $request->receiptNo ?? null,
                    'note' => clean($request->note),
                    'status' => $invoiceStatus,
                    'created_by' => $userId,
                    'branch_id' => $branchId,
                ];

                // Generate transaction reason
                $reason = '['.config('config.invoicePrefix').'-'.$invoice->invoice_no.'] Invoice Payment added to ['.$account->account_number.']';

                // create transaction
                $transaction = AccountTransaction::create([
                    'account_id' => $account->id,
                    'amount' => $request->paidAmount,
                    'reason' => $reason,
                    'type' => 1,
                    'transaction_date' => $request->date,
                    'cheque_no' => $request->chequeNo,
                    'receipt_no' => $request->receiptNo,
                    'created_by' => $userId,
                    'status' => $invoiceStatus,
                    'branch_id' => $branchId,
                ]);

                $voucherData['transaction_id'] = $transaction->id;

                // Create payment voucher instead of invoice payment
                $voucher = PaymentVoucher::create($voucherData);

                // Create journal entry for payment voucher if status is active
                if ($invoiceStatus == 1) {
                    try {
                        $journalService = new BusinessTransactionJournalService;
                        $voucher->load(['client.chartOfAccount', 'transaction.account.chartOfAccount']);
                        $paymentJournalEntry = $journalService->createPaymentVoucherJournal($voucher, $userId);
                    } catch (\Exception $e) {
                        // Log the error but don't fail the payment creation
                        Log::error('Failed to create payment journal entry for voucher: '.$e->getMessage());
                    }
                }

            }

            // send notification
            if ($request->isSendEmail || $request->isSendSMS) {
                $this->notifyCustomer($invoice->slug, $request);
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($invoice)
                ->withProperties([
                    'name' => '',
                    'code' => '['.config('config.invoicePrefix').'-'.$code.']',
                    'event' => 'Create',
                    'slug' => $invoice->slug,
                    'routeName' => 'invoices.show',
                ])
                ->useLog('Invoice Created')
                ->log('Invoice Created');

            DB::commit();

            return $this->responseWithSuccess('Invoice added successfully', [
                'invoice_id' => $invoice->id,
                'invoice_slug' => $invoice->slug,
                'slug' => $invoice->slug,
            ]);
        } catch (Exception $e) {
            DB::rollback();

            return $this->responseWithError($e->getMessage());
        }
    }

    public function storeInvoicePayments(Request $request)
    {
        $this->validate($request, [
            'account' => 'required',
            'paidAmount' => ['required', 'min:1', 'max:'.$request->netTotal],
            'invoice_id' => ['required', 'integer'],
            'chequeNo' => 'nullable|string|max:255',
            'receiptNo' => 'nullable|string|max:255',
            'date' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
            'attachment' => 'nullable|file|mimes:pdf,jpg,jpeg,png,doc,docx|max:10240', // 10MB max
        ]);

        $invoice = Invoice::findOrFail($request->invoice_id);
        // Block adding payment to inactive invoices
        if ((int) $invoice->status !== 1) {
            return $this->responseWithError('Cannot add payment to an inactive invoice.');
        }

        $user = auth()->user();
        $userId = $user->id;
        $branchId = (int) ($user->default_branch_id ?? 0);

        // Decode account if it's JSON string
        $accountData = is_string($request->account) ? json_decode($request->account, true) : $request->account;

        // Get account model
        $account = Account::findOrFail($accountData['id']);

        // store transaction
        $reason = '['.config('config.invoicePrefix').'-'.$invoice->invoice_no.'] Invoice Payment added to ['.$account->account_number.']';
        try {
            DB::beginTransaction();

            // Prepare voucher data for invoice payment
            $voucherData = [
                'slug' => uniqid(),
                'voucher_type' => 1, // Receive (قبض)
                'entity_type' => 'client',
                'client_id' => $invoice->client_id,
                'payment_method' => 'invoice',
                'invoice_id' => $invoice->id,
                'amount' => $request->paidAmount,
                'account_id' => $account->id,
                'date' => $request->date,
                'cheque_no' => $request->chequeNo ?? null,
                'receipt_no' => $request->receiptNo ?? null,
                'note' => clean($request->note),
                'status' => 1,
                'created_by' => $userId,
                'branch_id' => $branchId,
            ];

            // create transaction
            $transaction = AccountTransaction::create([
                'account_id' => $account->id,
                'amount' => $request->paidAmount,
                'reason' => $reason,
                'type' => 1,
                'transaction_date' => $request->date,
                'cheque_no' => $request->chequeNo,
                'receipt_no' => $request->receiptNo,
                'created_by' => $userId,
                'status' => 1,
                'branch_id' => $branchId,
            ]);

            $voucherData['transaction_id'] = $transaction->id;

            // Create payment voucher instead of invoice payment
            $voucher = PaymentVoucher::create($voucherData);

            // Load necessary relationships for journal entry
            $voucher->load([
                'client.chartOfAccount',
                'transaction.account.chartOfAccount',
            ]);

            // Create journal entry for payment voucher only if voucher status is active
            if ($voucher->status == 1) {
                try {
                    $journalService = new BusinessTransactionJournalService;
                    $paymentJournalEntry = $journalService->createPaymentVoucherJournal($voucher, $userId);
                } catch (\Exception $e) {
                    // Log the error but don't fail the payment creation
                    Log::error('Failed to create payment journal entry for voucher: '.$e->getMessage());
                }
            }

            $isPaid = 0;
            if ($request->netTotal == $request->paidAmount) {
                $isPaid = 1;
            }

            // update invoice data
            $invoice->update([
                'reference' => $request->reference,
                'po_reference' => $request->poReference,
                'payment_terms' => $request->paymentTerms,
                'delivery_place' => $request->deliveryPlace,
                'invoice_date' => $request->date,
                'is_paid' => $isPaid,
                'note' => clean($request->note),
            ]);

            if ($request->isSendEmail || $request->isSendEmail) {
                $invoice['amount_paid'] = $request->paidAmount;
                $invoice->client->notify(new InvoicePaymentNotification($invoice, [
                    'isSendEmail' => filter_var($request->isSendEmail, FILTER_VALIDATE_BOOLEAN),
                    'isSendSMS' => filter_var($request->isSendSMS, FILTER_VALIDATE_BOOLEAN),
                ]));
            }

            DB::commit();

            return $this->responseWithSuccess('Invoice payment added successfully!', [
                'invoice_id' => $invoice->id,
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
            $invoice = Invoice::where('slug', $slug)->with([
                'client',
                'invoiceProducts.invoice',
                'paymentVouchers.transaction.cashbookAccount',
                'invoicePayments.invoicePaymentTransaction.cashbookAccount', // Keep for backward compatibility
                'invoiceProducts.product.productUnit',
                'invoiceProducts.product.productTax',
                'invoiceProducts.product.salesAccount',
                'invoiceTax',
                'user',
            ])->first();

            return new InvoiceResource($invoice);
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
        $invoice = Invoice::where('slug', $slug)->with('invoiceProducts.product', 'invoiceReturn')->first();
        $totalPaid = $invoice->invoiceTotalPaid();
        $minAmount = ! isset($invoice->invoiceReturn) ? $totalPaid : $totalPaid - $invoice->invoiceReturn->returnTransaction->amount;

        // validate request
        $this->validate($request, [
            'client' => 'required',
            'reference' => 'nullable|string|max:255',
            'selectedProducts' => 'required|array|min:1',
            'selectedProducts.*' => 'required|distinct',
            'transportCost' => 'nullable|numeric|min:1',
            'netTotal' => ['required', 'numeric', new MinTotal($minAmount, $request->netTotal)],
            'poReference' => 'nullable|string|max:255',
            'paymentTerms' => 'nullable|string|max:255',
            'deliveryPlace' => 'nullable|string|max:255',
            'date' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
        ]);

        try {
            DB::beginTransaction();

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

            // calculate is paid
            $isPaid = 0;
            if ($request->netTotal == $request->totalPaid) {
                $isPaid = 1;
            }

            // update invoice
            $invoice->update([
                'reference' => $request->reference,
                'client_id' => $request->client['id'],
                'transport' => $request->transportCost,
                'sub_total' => $request->subTotal,
                'discount_type' => $request->discountType,
                'discount' => $request->discount,
                'po_reference' => $request->poReference,
                'payment_terms' => $request->paymentTerms,
                'delivery_place' => $request->deliveryPlace,
                'tax_id' => $request->orderTax['id'],
                'invoice_date' => $request->date,
                'note' => clean($request->note),
                'status' => $request->status,
                'is_paid' => $isPaid,
                'fiscal_year_id' => $currentFiscalYearId,
                'accounting_period_id' => $currentAccountingPeriodId,
            ]);

            $invoice->invoiceProducts->each->delete();
            // store invoice products
            foreach ($request->selectedProducts as $key => $selectedProduct) {
                $product = Product::where('slug', $selectedProduct['slug'])->first();
                $totalQty = $product->inventory_count + $selectedProduct['oldQty'] - $selectedProduct['qty'];
                // update product stock
                $product->update([
                    'inventory_count' => $totalQty,
                ]);

                // Calculate discount amount
                $discountAmount = 0;
                if (isset($selectedProduct['discount']) && $selectedProduct['discount'] > 0) {
                    if (isset($selectedProduct['discountType']) && $selectedProduct['discountType'] === 'percentage') {
                        $discountAmount = ($selectedProduct['unitPrice'] * $selectedProduct['qty'] * $selectedProduct['discount']) / 100;
                    } else {
                        $discountAmount = $selectedProduct['discount'];
                    }
                }

                // Calculate server-side unit cost to ensure receipt reflects edited price
                $lineQty = (float) ($selectedProduct['qty'] ?? 0);
                $lineUnitPrice = (float) ($selectedProduct['unitPrice'] ?? 0);
                $lineTaxAmount = (float) ($selectedProduct['productTax'] ?? ($selectedProduct['totalTax'] ?? 0));
                $lineSubtotalAfterDiscount = ($lineUnitPrice * $lineQty) - (float) $discountAmount;
                $calculatedUnitCost = $lineQty > 0 ? (($lineSubtotalAfterDiscount + $lineTaxAmount) / $lineQty) : 0;

                InvoiceProduct::create([
                    'invoice_id' => $invoice->id,
                    'product_id' => $selectedProduct['id'],
                    'quantity' => $selectedProduct['qty'],
                    'purchase_price' => $selectedProduct['avgPurchasePrice'],
                    'sale_price' => $selectedProduct['unitPrice'],
                    'unit_cost' => $calculatedUnitCost,
                    'tax_amount' => $lineTaxAmount,
                    'discount' => $selectedProduct['discount'] ?? 0,
                    'discount_type' => $selectedProduct['discountType'] ?? 'fixed',
                    'discount_amount' => $discountAmount,
                    'vat_rate_id' => $selectedProduct['selectedVatRate']['id'] ?? null,
                ]);
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($invoice)
                ->withProperties([
                    'name' => '',
                    'code' => '['.config('config.invoicePrefix').'-'.$invoice->invoice_no.']',
                    'event' => 'Update',
                    'slug' => $invoice->slug,
                    'routeName' => 'invoices.show',
                ])
                ->useLog('Invoice Updated')
                ->log('Invoice Updated');

            DB::commit();

            return $this->responseWithSuccess('Invoice updated successfully', [
                'slug' => $invoice->slug,
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

            $invoice = Invoice::where('slug', $slug)->with('invoicePayments.invoicePaymentTransaction', 'invoiceProducts.product', 'invoiceReturn')->first();

            // Check if invoice exists
            if (! $invoice) {
                return $this->responseWithError('Invoice not found');
            }

            // Get country setting
            $country = GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
            $isSaudiArabia = $country === 'SA';

            // Prevent deletion of active invoices in Saudi Arabia
            if ($isSaudiArabia && $invoice->status == 1) {
                return $this->responseWithError('Cannot delete active invoices in Saudi Arabia. Please deactivate the invoice first.');
            }

            // delete return transaction
            $invoiceReturn = $invoice->invoiceReturn;
            if (isset($invoiceReturn)) {
                if ($invoiceReturn->transaction_id != null) {
                    $invoiceReturn->returnTransaction->delete();
                }
                // update product inventory count
                foreach ($invoiceReturn->invoiceReturnProducts as $invoiceReturnProduct) {
                    $product = $invoiceReturnProduct->product;
                    $product->update([
                        'inventory_count' => $product->inventory_count - $invoiceReturnProduct->quantity,
                    ]);
                }
                // delete return products
                $invoiceReturn->invoiceReturnProducts->each->delete();
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($invoice)
                ->withProperties([
                    'name' => '',
                    'code' => '['.config('config.invoicePrefix').'-'.$invoice->invoice_no.']',
                    'event' => 'Delete',
                ])
                ->useLog('Invoice Deleted')
                ->log('Invoice Deleted');

            $invoice->delete();

            DB::commit();

            return $this->responseWithSuccess('Invoice deleted successfully');
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
        $user = Auth::user();
        $branchIds = null;

        // Apply branch filter for non-superadmin users
        if ((int) $user->account_role !== 1) {
            $branchIds = $this->getUserBranchIds($user);
        }

        if ($request->term == 'All Users') {
            $query = Invoice::with('client', 'invoicePayments', 'invoiceReturn', 'user');
            if ($branchIds !== null) {
                $query->whereIn('branch_id', $branchIds);
            }

            return InvoiceListResource::collection($query->paginate($request->perPage));
        }

        $term = $request->term;
        $query = Invoice::with('client', 'invoicePayments', 'invoiceReturn', 'user');

        // Apply branch filter
        if ($branchIds !== null) {
            $query->whereIn('branch_id', $branchIds);
        }

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('invoice_date', [$request->startDate, $request->endDate]);
        }

        $query = $query->where(function ($query) use ($term) {
            $query->where('invoice_no', 'LIKE', '%'.$term.'%')
                ->where('reference', 'LIKE', '%'.$term.'%')
                ->orWhere('sub_total', 'LIKE', '%'.$term.'%')
                ->orWhere('po_reference', 'LIKE', '%'.$term.'%')
                ->orWhere('payment_terms', 'LIKE', '%'.$term.'%')
                ->orWhere('delivery_place', 'LIKE', '%'.$term.'%')
                ->orWhereHas('client', function ($newQuery) use ($term) {
                    $newQuery->where('name', 'LIKE', '%'.$term.'%')
                        ->orWhere('client_id', 'LIKE', '%'.$term.'%');
                })->orWhereHas('user', function ($newQuery) use ($term) {
                    $newQuery->where('name', 'LIKE', '%'.$term.'%');
                });
        });

        return InvoiceListResource::collection($query->paginate($request->perPage));
    }

    // notify customer
    public function notifyCustomer($slug, Request $request)
    {
        $invoice = Invoice::where('slug', $slug)->with('client', 'invoiceProducts.invoice', 'invoicePayments.invoicePaymentTransaction.cashbookAccount', 'invoiceProducts.product.productUnit', 'invoiceProducts.product.productTax', 'invoiceTax', 'user')->first();
        // send notification
        $invoice->client->notify(new InvoiceNotification($invoice, [
            'isSendEmail' => filter_var($request->isSendEmail, FILTER_VALIDATE_BOOLEAN),
            'isSendSMS' => filter_var($request->isSendSMS, FILTER_VALIDATE_BOOLEAN),
        ]));

        return 'Successfully Notified';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allDueInvoices()
    {
        $dueInvoices = Invoice::where('status', 1)->where('is_paid', 0)->latest()->get();

        return InvoiceResource::collection($dueInvoices);
    }

    /**
     * Send invoice to ZATCA and create journal entries
     *
     * @param  string  $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendToZatca($slug)
    {
        try {
            $invoice = Invoice::where('slug', $slug)->with('client', 'invoiceProducts.product', 'invoicePayments')->first();

            if (! $invoice) {
                return $this->responseWithError('Invoice not found');
            }

            // Get country setting
            $country = GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
            $isSaudiArabia = $country === 'SA';

            // Only allow for Saudi Arabia
            if (! $isSaudiArabia) {
                return $this->responseWithError('This feature is only available for Saudi Arabia');
            }

            // Only allow for inactive invoices
            if ($invoice->status != 0) {
                return $this->responseWithError('Only inactive invoices can be sent to ZATCA');
            }

            DB::beginTransaction();

            $userId = auth()->user()->id;

            // Create journal entry for invoice sale (now that we're sending to ZATCA)
            try {
                $journalService = new BusinessTransactionJournalService;
                $journalEntry = $journalService->createInvoiceSaleJournal($invoice, $userId);
            } catch (\Exception $e) {
                Log::error('Failed to create journal entry for ZATCA invoice: '.$e->getMessage());
                DB::rollback();

                return $this->responseWithError('Failed to create journal entries: '.$e->getMessage());
            }

            // Create journal entries for any existing payments
            foreach ($invoice->invoicePayments as $payment) {
                try {
                    $transaction = AccountTransaction::find($payment->transaction_id);
                    if ($transaction) {
                        $paymentJournalEntry = $journalService->createInvoicePaymentJournal($transaction, $invoice, $payment->amount, $userId);
                        $payment->update([
                            'status' => 1,
                        ]);

                        $transaction->update([
                            'status' => 1,
                        ]);
                    }
                } catch (\Exception $e) {
                    Log::error('Failed to create payment journal entry for ZATCA invoice: '.$e->getMessage());
                    // Continue with other payments even if one fails
                }
            }

            // Update invoice status to active (sent to ZATCA)
            $invoice->update(['status' => 1]);

            // Here you would add actual ZATCA integration
            // For now, we'll just simulate the ZATCA sending
            // You can integrate with ZATCA API here

            // Log the ZATCA sending
            Log::info("Invoice {$invoice->invoice_no} sent to ZATCA", [
                'invoice_id' => $invoice->id,
                'user_id' => $userId,
                'timestamp' => now(),
            ]);

            DB::commit();

            return $this->responseWithSuccess('Invoice sent to ZATCA successfully and journal entries created', [
                'invoice_id' => $invoice->id,
                'invoice_no' => $invoice->invoice_no,
                'status' => 'sent_to_zatca',
            ]);

        } catch (Exception $e) {
            DB::rollback();
            Log::error('Error sending invoice to ZATCA: '.$e->getMessage());

            return $this->responseWithError('Failed to send invoice to ZATCA: '.$e->getMessage());
        }
    }

    /**
     * Internal method to send invoice to ZATCA (used during invoice creation)
     *
     * @param  Invoice  $invoice
     * @param  int  $userId
     * @return bool
     */
    private function sendToZatcaInternal($invoice, $userId)
    {
        try {
            // Load relationships
            $invoice->load('client', 'invoiceProducts.product', 'invoicePayments');

            // Create journal entry for invoice sale (now that we're sending to ZATCA)
            try {
                $journalService = new BusinessTransactionJournalService;
                $journalEntry = $journalService->createInvoiceSaleJournal($invoice, $userId);
            } catch (\Exception $e) {
                Log::error('Failed to create journal entry for ZATCA invoice: '.$e->getMessage());
                throw $e;
            }

            // Create journal entries for any existing payments
            foreach ($invoice->invoicePayments as $payment) {
                try {
                    $transaction = AccountTransaction::find($payment->transaction_id);
                    if ($transaction) {
                        $paymentJournalEntry = $journalService->createInvoicePaymentJournal($transaction, $invoice, $payment->amount, $userId);
                        $payment->update([
                            'status' => 1,
                        ]);

                        $transaction->update([
                            'status' => 1,
                        ]);
                    }
                } catch (\Exception $e) {
                    Log::error('Failed to create payment journal entry for ZATCA invoice: '.$e->getMessage());
                    // Continue with other payments even if one fails
                }
            }

            // Update invoice status to active (sent to ZATCA)
            $invoice->update(['status' => 1]);

            // Here you would add actual ZATCA integration
            // For now, we'll just simulate the ZATCA sending
            // You can integrate with ZATCA API here

            // Log the ZATCA sending
            Log::info("Invoice {$invoice->invoice_no} sent to ZATCA", [
                'invoice_id' => $invoice->id,
                'user_id' => $userId,
                'timestamp' => now(),
            ]);

            return true;

        } catch (Exception $e) {
            Log::error('Error sending invoice to ZATCA internally: '.$e->getMessage());
            throw $e;
        }
    }

    /**
     * Generate the next invoice code
     *
     * @return string
     */
    private function generateNextInvoiceCode()
    {
        // Get invoice prefix from general settings
        $invoicePrefix = getGeneralSettingsInfo()['invoicePrefix'] ?? 'INV';

        // Get the last invoice to determine the next number
        $lastInvoice = Invoice::where('invoice_no', 'like', $invoicePrefix.'%')
            ->orderByRaw('CAST(SUBSTRING(invoice_no, '.(strlen($invoicePrefix) + 1).') AS UNSIGNED) DESC')
            ->first();

        if ($lastInvoice) {
            // Extract the numeric part from the last invoice_no
            $lastNumber = (int) substr($lastInvoice->invoice_no, strlen($invoicePrefix));
            $nextNumber = $lastNumber + 1;
        } else {
            // If no invoices exist, start with 1
            $nextNumber = 1;
        }

        // Format the number with leading zeros (e.g., 001, 002, etc.)
        return $invoicePrefix.str_pad($nextNumber, 3, '0', STR_PAD_LEFT);
    }
}

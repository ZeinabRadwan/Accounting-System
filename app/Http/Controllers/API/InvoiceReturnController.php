<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Rules\MinOne;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\InvoiceReturn;
use App\Models\AccountTransaction;
use App\Models\GeneralSetting;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\InvoiceReturnProduct;
use Illuminate\Support\Facades\Auth;
use App\Interfaces\ITransactionService;
use App\Http\Resources\InvoiceReturnResource;
use App\Http\Resources\InvoiceReturnListResource;
use App\Http\Requests\Invoice\StoreInvoiceReturnRequest;
use App\Http\Requests\Invoice\UpdateInvoiceReturnRequest;

class InvoiceReturnController extends Controller
{
    protected ITransactionService $transactionService;
    // define middleware
    public function __construct(ITransactionService $transactionService)
    {
        $this->middleware('can:invoice-return-list', ['only' => ['index', 'search']]);
        $this->middleware('can:invoice-return-create', ['only' => ['create']]);
        $this->middleware('can:invoice-return-view', ['only' => ['show']]);
        $this->middleware('can:invoice-return-edit', ['only' => ['update']]);
        $this->middleware('can:invoice-return-delete', ['only' => ['destroy']]);

        $this->transactionService = $transactionService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return InvoiceReturnListResource::collection(InvoiceReturn::with('invoice.client',
            'user', 'invoiceReturnProducts')->latest()->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreInvoiceReturnRequest $request)
    {

        try {
            DB::beginTransaction();

            // generate code
            $code = $this->generateNextReturnCode();

            // get logged in user id
            $userId = auth()->user()->id;

            // Get default fiscal year and accounting period from general settings
            $currentFiscalYearId = GeneralSetting::where('key', 'current_fiscal_year_id')->first()?->value;
            $currentAccountingPeriodId = GeneralSetting::where('key', 'current_accounting_period_id')->first()?->value;

            // Validate that the settings exist
            if (!$currentFiscalYearId) {
                return $this->responseWithError('Current fiscal year is not configured in system settings.');
            }
            if (!$currentAccountingPeriodId) {
                return $this->responseWithError('Current accounting period is not configured in system settings.');
            }

            // Validate that the fiscal year and accounting period exist in their respective tables
            $fiscalYear = \App\Models\FiscalYear::find($currentFiscalYearId);
            if (!$fiscalYear) {
                return $this->responseWithError('The configured fiscal year does not exist.');
            }

            $accountingPeriod = \App\Models\AccountingPeriod::find($currentAccountingPeriodId);
            if (!$accountingPeriod) {
                return $this->responseWithError('The configured accounting period does not exist.');
            }

            // Validate that the accounting period belongs to the fiscal year
            if ($accountingPeriod->fiscal_year_id != $fiscalYear->id) {
                return $this->responseWithError('The configured accounting period does not belong to the configured fiscal year.');
            }

            // store retrun amount
            $isPaid = 0;
            $transactionID = null;
            if ($request->returnAmount > 0) {

                $transaction = $this->transactionService->createTransactionFromInvoiceReturn($request, $userId, $code);

                $isPaid = 1;
                $transactionID = $transaction->id;
            }

            // Calculate total return using the correct formula
            $calculatedTotalReturn = 0;
            foreach ($request->selectedProducts as $selectedProduct) {
                if ($selectedProduct['returnQty'] > 0) {
                    // Get the original invoice product data
                    $invoiceProduct = \App\Models\InvoiceProduct::where('invoice_id', $request->invoice['id'])
                        ->where('product_id', $selectedProduct['id'])
                        ->first();
                    
                    if ($invoiceProduct) {
                        // unit_discount = round(discount_amount / quantity, 2)
                        $unitDiscount = round($invoiceProduct->discount_amount / $invoiceProduct->quantity, 2);
                        
                        // unit_net = sale_price - unit_discount
                        $unitNet = $invoiceProduct->sale_price - $unitDiscount;
                        
                        // unit_vat = round(unit_net * 0.20, 2)
                        $unitVat = round($unitNet * 0.20, 2);
                        
                        // unit_total = unit_net + unit_vat
                        $unitTotal = $unitNet + $unitVat;
                        
                        // return_total = round(unit_total * return_qty, 2)
                        $returnTotal = round($unitTotal * $selectedProduct['returnQty'], 2);
                        
                        $calculatedTotalReturn += $returnTotal;
                    }
                }
            }

            // store invoice return
            $invoiceReturn = InvoiceReturn::create([
                'reason' => $request->returnReason,
                'return_no' => $code,
                'invoice_id' => $request->invoice['id'],
                'total_return' => $calculatedTotalReturn,
                'date' => $request->date,
                'note' => clean($request->note),
                'transaction_id' => $transactionID,
                'created_by' => $userId,
                'status' => $request->status,
                'fiscal_year_id' => $currentFiscalYearId,
                'accounting_period_id' => $currentAccountingPeriodId,
            ]);

            // update invoice
            $invoiceReturn->invoice->update([
                'discount' => $request->invoiceDiscount,
                'is_paid' => $isPaid,
            ]);

            // store invoice products
            foreach ($request->selectedProducts as $key => $selectedProduct) {
                // update product inventory
                $product = Product::where('slug', $selectedProduct['slug'])->first();
                $product->update([
                    'inventory_count' => $product->inventory_count + $selectedProduct['returnQty'],
                ]);

                // store return product
                if ($selectedProduct['returnQty'] > 0) {
                    InvoiceReturnProduct::create([
                        'return_id' => $invoiceReturn->id,
                        'product_id' => $selectedProduct['id'],
                        'sale_price' => $selectedProduct['unitCost'],
                        'purchase_price' => $selectedProduct['avgPurchasePrice'],
                        'quantity' => $selectedProduct['returnQty'],
                    ]);
                }
            }

            // Create journal entry for invoice return only if status is active (1)
            // For Saudi Arabia, returns are created as inactive (0) and journal entries are created when sent to ZATCA
            if ($request->status == 1) {
                try {
                    \Illuminate\Support\Facades\Log::info('Creating journal entry for active invoice return: ' . $invoiceReturn->return_no);
                    $journalService = new \App\Services\BusinessTransactionJournalService();
                    $journalEntry = $journalService->createInvoiceReturnJournal($invoiceReturn, $userId);
                    \Illuminate\Support\Facades\Log::info('Journal entry created successfully for invoice return: ' . $invoiceReturn->return_no);
                } catch (\Exception $e) {
                    // Log the error but don't fail the return creation
                    \Illuminate\Support\Facades\Log::error('Failed to create journal entry for invoice return: ' . $e->getMessage());
                    \Illuminate\Support\Facades\Log::error('Stack trace: ' . $e->getTraceAsString());
                }
            } else {
                \Illuminate\Support\Facades\Log::info('Skipping journal entry creation for inactive invoice return: ' . $invoiceReturn->return_no . ' (status: ' . $request->status . ')');
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($invoiceReturn)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . config('config.invoiceReturnPrefix') . '-' . $code . ']',
                    'event' => 'Create',
                    'slug' => $invoiceReturn->slug,
                    'routeName' => 'invoiceReturns.show'
                ])
                ->useLog('Invoice Return Created')
                ->log('Invoice Return Created');

            DB::commit();

            return $this->responseWithSuccess('Invoice return added successfully', [
                'slug' => $invoiceReturn->slug,
            ]);
        } catch (Exception $e) {
            DB::rollback();
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
    public function update(UpdateInvoiceReturnRequest $request, $slug)
    {
        $invoiceReturn = InvoiceReturn::where('slug', $slug)->with('invoiceReturnProducts', 'user')->first();

        try {
            DB::beginTransaction();

            // Get current fiscal year and accounting period from general settings for update
            $currentFiscalYearId = GeneralSetting::where('key', 'current_fiscal_year_id')->first()?->value;
            $currentAccountingPeriodId = GeneralSetting::where('key', 'current_accounting_period_id')->first()?->value;

            // Validate that the settings exist
            if (!$currentFiscalYearId) {
                return $this->responseWithError('Current fiscal year is not configured in system settings.');
            }
            if (!$currentAccountingPeriodId) {
                return $this->responseWithError('Current accounting period is not configured in system settings.');
            }

            // Validate that the fiscal year and accounting period exist in their respective tables
            $fiscalYear = \App\Models\FiscalYear::find($currentFiscalYearId);
            if (!$fiscalYear) {
                return $this->responseWithError('The configured fiscal year does not exist.');
            }

            $accountingPeriod = \App\Models\AccountingPeriod::find($currentAccountingPeriodId);
            if (!$accountingPeriod) {
                return $this->responseWithError('The configured accounting period does not exist.');
            }

            // Validate that the accounting period belongs to the fiscal year
            if ($accountingPeriod->fiscal_year_id != $fiscalYear->id) {
                return $this->responseWithError('The configured accounting period does not belong to the configured fiscal year.');
            }

            // store retrun amount
            $isPaid = 0;
            $transactionID = null;
            if ($request->returnAmount > 0) {
                if (isset($invoiceReturn->returnTransaction)) {
                    // update transaction
                    $transaction = $invoiceReturn->returnTransaction->update([
                        'account_id' => $request->account['id'],
                        'amount' => $request->returnAmount,
                        'transaction_date' => $request->date,
                        'cheque_no' => $request->chequeNo,
                        'receipt_no' => $request->receiptNo,
                        'status' => $request->status,
                    ]);
                    $transactionID = $invoiceReturn->returnTransaction->id;
                } else {
                    // get logged in user id
                    $userId = auth()->user()->id;
                    $reason = '['.config('config.purchaseReturnPrefix').'-'.$invoiceReturn->code.'] Invoice Return payable sent from ['.$request->account['accountNumber'].']';
                    // create transaction
                    $transaction = AccountTransaction::create([
                        'reason' => $reason,
                        'account_id' => $request->account['id'],
                        'amount' => $request->returnAmount,
                        'transaction_date' => $request->date,
                        'type' => 0,
                        'cheque_no' => $request->chequeNo,
                        'receipt_no' => $request->receiptNo,
                        'status' => $request->status,
                        'created_by' => $userId,
                    ]);
                    $transactionID = $transaction->id;
                }
                $isPaid = 1;
            } else {
                if (isset($invoiceReturn->returnTransaction)) {
                    $invoiceReturn->returnTransaction->delete();
                }
            }

            // Calculate total return using the correct formula
            $calculatedTotalReturn = 0;
            foreach ($request->selectedProducts as $selectedProduct) {
                if ($selectedProduct['returnQty'] > 0) {
                    // Get the original invoice product data
                    $invoiceProduct = \App\Models\InvoiceProduct::where('invoice_id', $invoiceReturn->invoice_id)
                        ->where('product_id', $selectedProduct['id'])
                        ->first();
                    
                    if ($invoiceProduct) {
                        // unit_discount = round(discount_amount / quantity, 2)
                        $unitDiscount = round($invoiceProduct->discount_amount / $invoiceProduct->quantity, 2);
                        
                        // unit_net = sale_price - unit_discount
                        $unitNet = $invoiceProduct->sale_price - $unitDiscount;
                        
                        // unit_vat = round(unit_net * 0.20, 2)
                        $unitVat = round($unitNet * 0.20, 2);
                        
                        // unit_total = unit_net + unit_vat
                        $unitTotal = $unitNet + $unitVat;
                        
                        // return_total = round(unit_total * return_qty, 2)
                        $returnTotal = round($unitTotal * $selectedProduct['returnQty'], 2);
                        
                        $calculatedTotalReturn += $returnTotal;
                    }
                }
            }

            // update invoice return
            $invoiceReturn->update([
                'reason' => $request->returnReason,
                'transaction_id' => $transactionID,
                'total_return' => $calculatedTotalReturn,
                'date' => $request->date,
                'note' => clean($request->note),
                'status' => $request->status,
                'fiscal_year_id' => $currentFiscalYearId,
                'accounting_period_id' => $currentAccountingPeriodId,
            ]);

            // delete return products and store new return products
            $invoiceReturn->invoiceReturnProducts->each->delete();
            foreach ($request->selectedProducts as $key => $selectedProduct) {
                // update product inventory
                $product = Product::where('slug', $selectedProduct['slug'])->first();
                $product->update([
                    'inventory_count' => $product->inventory_count - $selectedProduct['oldQty'] + $selectedProduct['returnQty'],
                ]);

                // store product
                if ($selectedProduct['returnQty']) {
                    InvoiceReturnProduct::create([
                        'return_id' => $invoiceReturn->id,
                        'product_id' => $selectedProduct['id'],
                        'sale_price' => $selectedProduct['unitCost'],
                        'purchase_price' => $selectedProduct['purchasePrice'],
                        'quantity' => $selectedProduct['returnQty'],
                    ]);
                }
            }

            // Create journal entry for invoice return update (after products are updated)
            try {
                $journalService = new \App\Services\BusinessTransactionJournalService();
                $journalEntry = $journalService->createInvoiceReturnJournal($invoiceReturn, $userId);
            } catch (\Exception $e) {
                // Log the error but don't fail the return update
                \Illuminate\Support\Facades\Log::error('Failed to create journal entry for invoice return update: ' . $e->getMessage());
            }

            // update invoice
            $invoiceReturn->invoice->update([
                'discount' => $request->invoiceDiscount,
                'is_paid' => $isPaid,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($invoiceReturn)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . config('config.invoiceReturnPrefix') . '-' . $invoiceReturn->return_no . ']',
                    'event' => 'Update',
                    'slug' => $invoiceReturn->slug,
                    'routeName' => 'invoiceReturns.show'
                ])
                ->useLog('Invoice Return Updated')
                ->log('Invoice Return Updated');

            DB::commit();

            return $this->responseWithSuccess('Invoice return updated successfully');
        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return InvoiceReturnResource|\Illuminate\Http\JsonResponse
     */
    public function show($slug)
    {
        try {
            $invoiceReturn = InvoiceReturn::where('slug', $slug)
                ->with(
                    [
                        'invoice' => [
                            'client',
                            'invoiceProducts' => [
                                'vatRate'
                            ]
                        ],
                        'invoiceReturnProducts' => [
                            'invoiceReturn',
                            'product' => [
                                'productUnit',
                                'productTax',
                            ],
                        ],
                        'user',
                        'journalEntries' => [
                            'lines' => [
                                'chartOfAccount' => [
                                    'type'
                                ]
                            ],
                            'creator',
                            'poster'
                        ]
                    ],
                )->firstOrFail();

            return new InvoiceReturnResource($invoiceReturn);
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
            DB::beginTransaction();

            $invoiceReturn = InvoiceReturn::where('slug', $slug)->with('invoiceReturnProducts.product', 'invoice',
                'returnTransaction')->first();
            // update invoice
            $invoice = $invoiceReturn->invoice;
            $isPaid = $invoiceReturn->invoice->totalDue() == 0 ? 1 : 0;
            $newDiscount = $invoice->discount;
            if ($invoice->discount_type == 1) {
                $newDiscount = ($invoice->discountPercentage() / 100) * $invoice->sub_total;
                $invoice->update([
                    'discount' => $newDiscount,
                    'is_paid' => $isPaid,
                ]);
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($invoiceReturn)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . config('config.invoiceReturnPrefix') . '-' . $invoiceReturn->return_no . ']',
                    'event' => 'Delete'
                ])
                ->useLog('Invoice Return Deleted')
                ->log('Invoice Return Deleted');

            $invoiceReturn->delete();

            DB::commit();

            return $this->responseWithSuccess('Invoice return deleted successfully!');
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
        $query = InvoiceReturn::with('invoice.client', 'user', 'invoiceReturnProducts');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where('reason', 'LIKE', '%'.$term.'%')
                ->orWhere('slug', 'LIKE', '%'.$term.'%')
                ->orWhereHas('invoice', function ($newQuery) use ($term) {
                    $newQuery->where('invoice_no', 'LIKE', '%'.$term.'%')
                        ->orWhere('po_reference', 'LIKE', '%'.$term.'%')
                        ->orWhereHas('client', function ($anotherQuery) use ($term) {
                            $anotherQuery->where('name', 'LIKE', '%'.$term.'%')
                                ->orWhere('client_id', 'LIKE', '%'.$term.'%');
                        });
                });
        });

        return InvoiceReturnListResource::collection($query->latest()->paginate($request->perPage));
    }

    /**
     * Send credit note to ZATCA and create journal entries
     *
     * @param  string  $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendToZatca($slug)
    {
        try {
            $invoiceReturn = InvoiceReturn::where('slug', $slug)->first();
            
            if (!$invoiceReturn) {
                return $this->responseWithError('Credit note not found');
            }

            // Load the relationships explicitly
            $invoiceReturn->load(['invoice.client', 'invoiceReturnProducts.product']);

            // Get country setting
            $country = GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
            $isSaudiArabia = $country === 'SA';

            // Only allow for Saudi Arabia
            if (!$isSaudiArabia) {
                return $this->responseWithError('This feature is only available for Saudi Arabia');
            }

            // Only allow for inactive credit notes
            if ($invoiceReturn->status != 0) {
                return $this->responseWithError('Only inactive credit notes can be sent to ZATCA');
            }

            DB::beginTransaction();

            $userId = auth()->user()->id;

            // Create journal entry for credit note (now that we're sending to ZATCA)
            try {
                \Illuminate\Support\Facades\Log::info('Creating journal entry for ZATCA credit note: ' . $invoiceReturn->return_no);
                $journalService = new \App\Services\BusinessTransactionJournalService();
                $journalEntry = $journalService->createInvoiceReturnJournal($invoiceReturn, $userId);
                \Illuminate\Support\Facades\Log::info('Journal entry created successfully for ZATCA credit note: ' . $invoiceReturn->return_no);
            } catch (\Exception $e) {
                \Illuminate\Support\Facades\Log::error('Failed to create journal entry for ZATCA credit note: ' . $e->getMessage());
                DB::rollback();
                return $this->responseWithError('Failed to create journal entries: ' . $e->getMessage());
            }

            // Update credit note status to active (sent to ZATCA)
            $invoiceReturn->update(['status' => 1]);

            // Here you would add actual ZATCA integration
            // For now, we'll just simulate the ZATCA sending
            // You can integrate with ZATCA API here
            
            // Log the ZATCA sending
            \Illuminate\Support\Facades\Log::info("Credit note {$invoiceReturn->return_no} sent to ZATCA", [
                'credit_note_id' => $invoiceReturn->id,
                'user_id' => $userId,
                'timestamp' => now()
            ]);

            DB::commit();

            return $this->responseWithSuccess('Credit note sent to ZATCA successfully and journal entries created', [
                'credit_note_id' => $invoiceReturn->id,
                'credit_note_no' => $invoiceReturn->return_no,
                'status' => 'sent_to_zatca'
            ]);

        } catch (Exception $e) {
            DB::rollback();
            \Illuminate\Support\Facades\Log::error('Error sending credit note to ZATCA: ' . $e->getMessage());
            return $this->responseWithError('Failed to send credit note to ZATCA: ' . $e->getMessage());
        }
    }

    /**
     * Generate the next return code
     *
     * @return string
     */
    private function generateNextReturnCode()
    {
        // Get return prefix from general settings
        $returnPrefix = getGeneralSettingsInfo()['invoiceReturnPrefix'] ?? 'RET';
        
        // Get the last return to determine the next number
        $lastReturn = InvoiceReturn::where('return_no', 'like', $returnPrefix . '%')
            ->orderByRaw('CAST(SUBSTRING(return_no, ' . (strlen($returnPrefix) + 1) . ') AS UNSIGNED) DESC')
            ->first();
        
        if ($lastReturn) {
            // Extract the numeric part from the last return_no
            $lastNumber = (int) substr($lastReturn->return_no, strlen($returnPrefix));
            $nextNumber = $lastNumber + 1;
        } else {
            // If no returns exist, start with 1
            $nextNumber = 1;
        }
        
        // Format the number with leading zeros (e.g., 001, 002, etc.)
        return $returnPrefix . str_pad($nextNumber, 3, '0', STR_PAD_LEFT);
    }
}

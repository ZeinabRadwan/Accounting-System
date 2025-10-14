<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Client;
use App\Rules\MinItem;
use App\Models\Invoice;
use App\Models\InvoiceJournal;
use App\Services\BusinessTransactionJournalService;
use Illuminate\Http\Request;
use App\Models\InvoicePayment;
use App\Models\AccountTransaction;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\InvoicePaymentResource;
use App\Notifications\ClientInvoicePaymentNotification;
use Illuminate\Support\Facades\Log;
use App\Models\Account;

class InvoicePaymentController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:invoice-payment-list', ['only' => ['index', 'search']]);
        $this->middleware('can:invoice-payment-create', ['only' => ['create']]);
        $this->middleware('can:invoice-payment-view', ['only' => ['show']]);
        $this->middleware('can:invoice-payment-edit', ['only' => ['update']]);
        $this->middleware('can:invoice-payment-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return InvoicePaymentResource::collection(InvoicePayment::with('invoice.client', 'invoice.invoiceTax', 'invoicePaymentTransaction.cashbookAccount', 'user')->latest()->paginate($request->perPage));
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
            'client' => 'required',
            'selectedInvoices' => [new MinItem('invoice')],
            'account' => 'required',
            'chequeNo' => 'nullable|string|max:255',
            'voucherNo' => 'nullable|string|max:255',
            'paymentDate' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
        ]);

        try {
            DB::beginTransaction();

            // get logged in user id
            $userId = auth()->user()->id;
            $invoices = array();
            $client = Client::where('slug', $request['client']['slug'])->first();
            $chartOfAccount = $client?->chartOfAccount;

            if(!$client || !$chartOfAccount){
                return $this->responseWithError('Client must have a Chart of Account assigned for journal entries.'); 
            }


            $account = Account::findOrFail($request->account['id']);
            if (!$account) {
                return $this->responseWithError('Bank Account not found.'); 
            }

            if (!$account->chartOfAccount) {
                return $this->responseWithError('Bank Account must have a Chart of Account assigned for journal entries.'); 
            }



            foreach ($request->selectedInvoices as $key => $selectedInvoice) {
                // get invoice
                $invoice = Invoice::where('slug', $selectedInvoice['slug'])->first();

            // Prevent adding payment to inactive invoices
            if (!$invoice || (int)$invoice->status !== 1) {
                DB::rollBack();
                return $this->responseWithError('Cannot add payment to an inactive invoice.');
            }

                // store transaction
                $transactionID = null;
                $reason = '[' . config('config.invoicePrefix') . '-' . $invoice->invoice_no . '] Invoice payment added to [' . $request->account['accountNumber'] . ']';

                // create transaction
                $transaction = AccountTransaction::create([
                    'account_id' => $request->account['id'],
                    'amount' => $selectedInvoice['paidAmount'],
                    'reason' => $reason,
                    'type' => 1,
                    'cheque_no' => $request->chequeNo,
                    'receipt_no' => $request->receiptNo,
                    'transaction_date' => $request->paymentDate,
                    'created_by' => $userId,
                    'status' => $request->status === 1 ? 1 : 0,
                ]);
                $transactionID = $transaction->id;

                // store invoice payment record
              $InvoicePayment = InvoicePayment::create([
                    'slug' => uniqid(),
                    'invoice_id' => $invoice->id,
                    'transaction_id' => $transactionID,
                    'amount' => $selectedInvoice['paidAmount'],
                    'date' => $request->paymentDate,
                    'created_by' => $userId,
                    'note' => clean($request->note),
                    'status' => $request->status,
                ]);

                // Create journal entry for invoice payment only if status is active
                if ($request->status === 1) {
                    try {
                        $journalService = new BusinessTransactionJournalService();
                        $paymentJournalEntry = $journalService->createInvoicePaymentJournal($transaction, $invoice, $selectedInvoice['paidAmount'], $userId);
                    } catch (\Exception $e) {
                        // Log the error but don't fail the payment creation
                        Log::error('Failed to create payment journal entry for invoice: ' . $e->getMessage());
                    }
                }

                // update invoice
                $invoice->update([
                    'is_paid' => $selectedInvoice['newDue'] == 0 ? 1 : 0,
                ]);

                $invoice['amount_paid'] = $selectedInvoice['paidAmount'];
                array_push($invoices, $invoice);

                // add activity log
                activity()
                    ->causedBy(Auth::user())
                    ->performedOn($InvoicePayment)
                    ->withProperties([
                        'name' => "",
                        'code' => '[' . $client->name . ']',
                        'event' => 'Create',
                        'slug' => $InvoicePayment->slug,
                        'routeName' => 'invoicePayments.show'
                    ])
                    ->useLog('Client Invoice Payment Created')
                    ->log('Client Invoice Payment Created');
            }

            if ($request->isSendEmail || $request->isSendEmail) {
                $client->notify(new ClientInvoicePaymentNotification($invoices, [
                    'isSendEmail' => filter_var($request->isSendEmail, FILTER_VALIDATE_BOOLEAN),
                    'isSendSMS' =>  filter_var($request->isSendSMS, FILTER_VALIDATE_BOOLEAN)
                ]));
            }

            DB::commit();

            return $this->responseWithSuccess('Client payment added successfully');
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
            $invoicePayment = InvoicePayment::with('invoice.client', 'invoicePaymentTransaction.cashbookAccount', 'user')->where('slug', $slug)->first();
            return new InvoicePaymentResource($invoicePayment);
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
    public function update(Request $request, $slug)
    {
        $invoicePayment = InvoicePayment::with('invoice', 'invoicePaymentTransaction')->where('slug', $slug)->first();

        // validate request
        $this->validate($request, [
            'invoice' => 'required',
            'account' => 'required',
            'paidAmount' => 'required|numeric|min:' . $request->minAmount . '|max:' . $request->maxAmount,
            'chequeNo' => 'nullable|string|max:255',
            'receiptNo' => 'nullable|string|max:255',
            'paymentDate' => 'nullable|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
        ]);

        // Check if payment is cancelled - cannot edit cancelled payments
        if ($invoicePayment->status === 2) {
            return $this->responseWithError('Cannot edit cancelled payment.');
        }

        // Check if trying to change status from active to inactive
        if ($invoicePayment->status === 1 && $request->status === 0) {
            return $this->responseWithError('Cannot change payment status from active to inactive.');
        }

        try {
            DB::beginTransaction();

            // get invoice
            $invoice = Invoice::where('slug', $request->invoice['slug'])->first();

            // update invoice payment record
            $invoicePayment->update([
                'amount' => $request->paidAmount,
                'date' => $request->paymentDate,
                'note' => clean($request->note),
                'status' => $request->status,
            ]);

            if (!empty($request->account)) {
                // update transaction
                $invoicePayment->invoicePaymentTransaction->update([
                    'account_id' => $request->account['id'],
                    'amount' => $request->paidAmount,
                    'cheque_no' => $request->chequeNo,
                    'receipt_no' => $request->receiptNo,
                    'transaction_date' => $request->paymentDate,
                    'status' => $request->status === 1 ? 1 : 0,
                ]);
            }

            // Create journal entry if payment status is active and no journal entry exists
            if ($request->status === 'active') {
                // Check if journal entry already exists for this payment
                $existingJournalEntry = \App\Models\InvoiceJournal::where('invoice_id', $invoice->id)
                    ->where('type', 'payment')
                    ->first();
                
                if (!$existingJournalEntry) {
                    try {
                        $journalService = new BusinessTransactionJournalService();
                        $paymentJournalEntry = $journalService->createInvoicePaymentJournal($invoicePayment->invoicePaymentTransaction, $invoice, $request->paidAmount, auth()->user()->id);
                    } catch (\Exception $e) {
                        // Log the error but don't fail the payment update
                        Log::error('Failed to create payment journal entry for invoice: ' . $e->getMessage());
                    }
                } else {
                    // Update journal entry date if it exists and payment date changed
                    $journalEntry = $existingJournalEntry->journalEntry;
                    if ($journalEntry && $journalEntry->entry_date != $request->paymentDate) {
                        $journalEntry->update([
                            'entry_date' => $request->paymentDate,
                        ]);
                    }
                }
            }
            // update invoice
            $invoice->update([
                'is_paid' => $invoicePayment->invoice->totalDue() == 0 ? 1 : 0,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($invoicePayment)
                ->withProperties([
                    'name' => "",
                    'code' => "",
                    'event' => 'Update',
                    'slug' => $invoicePayment->slug,
                    'routeName' => 'invoicePayments.show'
                ])
                ->useLog('Client Invoice Payment Updated')
                ->log('Client Invoice Payment Updated');

            DB::commit();

            return $this->responseWithSuccess('Invoice payment updated successfully');
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

            $invoicePayment = InvoicePayment::where('slug', $slug)->with('invoice.invoiceReturn.returnTransaction', 'invoicePaymentTransaction')->first();

            // Check if payment is active - cannot delete active payments
            if ($invoicePayment->status === 1) {
                return $this->responseWithError('Cannot delete active payment. Please change the status to inactive first.');
            }

            // update invoice
            if ($invoicePayment->invoice->totalDue() - $invoicePayment->amount <= 0) {
                $invoicePayment->invoice->update([
                    'is_paid' => 1,
                ]);
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($invoicePayment)
                ->withProperties([
                    'name' => "",
                    'code' => "",
                    'event' => 'Delete'
                ])
                ->useLog('Client Invoice Payment Deleted')
                ->log('Client Invoice Payment Deleted');

            // delete payment
            $invoicePayment->delete();

            DB::commit();

            return $this->responseWithSuccess('Invoice payment deleted successfully');
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
        if ($request->term == "All Users") {
            $query = InvoicePayment::with('invoice.client', 'invoicePaymentTransaction.cashbookAccount', 'user');
            return InvoicePaymentResource::collection($query->paginate($request->perPage));
        }

        $term = $request->term;
        $query = InvoicePayment::with('invoice.client', 'invoicePaymentTransaction.cashbookAccount', 'user');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where('amount', '=', $term)
                ->orWhereHas('invoice', function ($newQuery) use ($term) {
                    $newQuery->where('invoice_no', 'LIKE', '%' . $term . '%')
                        ->orWhere('po_reference', 'LIKE', '%' . $term . '%')
                        ->orWhereHas('client', function ($anotherQuery) use ($term) {
                            $anotherQuery->where('name', 'LIKE', '%' . $term . '%')
                                ->orWhere('phone', 'LIKE', '%' . $term . '%')
                                ->orWhere('phone_number', 'LIKE', '%' . $term . '%')
                                ->orWhere('phone_secondary', 'LIKE', '%' . $term . '%');
                        })->orWhereHas('user', function ($anotherQuery) use ($term) {
                            $anotherQuery->where('name', 'LIKE', '%' . $term . '%');
                        });
                })
                ->orWhereHas('invoicePaymentTransaction', function ($newQuery) use ($term) {
                    $newQuery->where('cheque_no', 'LIKE', '%' . $term . '%')
                        ->orWhere('receipt_no', 'LIKE', '%' . $term . '%')
                        ->orWhereHas('cashbookAccount', function ($newQuery) use ($term) {
                            $newQuery->where('account_number', 'LIKE', '%' . $term . '%')
                                ->orWhere('bank_name', 'LIKE', '%' . $term . '%');
                        });
                });
        });

        return InvoicePaymentResource::collection($query->latest()->paginate($request->perPage));
    }

    /**
     * Cancel the specified payment.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function cancel($slug)
    {
        try {
            DB::beginTransaction();

            $invoicePayment = InvoicePayment::where('slug', $slug)->with('invoice', 'invoicePaymentTransaction')->first();

            if (!$invoicePayment) {
                return $this->responseWithError('Payment not found.');
            }

            // Check if payment is already cancelled
            if ($invoicePayment->status === 2) {
                return $this->responseWithError('Payment is already cancelled.');
            }

            // Check if payment is active - only active payments can be cancelled
            if ($invoicePayment->status !== 1) {
                return $this->responseWithError('Only active payments can be cancelled.');
            }

            // Update payment status to cancelled
            $invoicePayment->update([
                'status' => 2,
            ]);

            // Delete related journal entries
            $journalEntries = \App\Models\InvoiceJournal::where('invoice_id', $invoicePayment->invoice_id)
                ->where('type', 'payment')
                ->get();

            foreach ($journalEntries as $journal) {
                // Delete journal entry lines first
                $journal->journalEntry->lines()->delete();
                // Delete the journal entry
                $journal->journalEntry->delete();
                // Delete the bridge record
                $journal->delete();
            }

            // Update invoice payment status
            $invoice = $invoicePayment->invoice;
            $invoice->update([
                'is_paid' => $invoice->totalDue() == 0 ? 1 : 0,
            ]);

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($invoicePayment)
                ->withProperties([
                    'name' => "",
                    'code' => "",
                    'event' => 'Cancel',
                    'slug' => $invoicePayment->slug,
                    'routeName' => 'invoicePayments.show'
                ])
                ->useLog('Client Invoice Payment Cancelled')
                ->log('Client Invoice Payment Cancelled');

            DB::commit();

            return $this->responseWithSuccess('Payment cancelled successfully');
        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }
}

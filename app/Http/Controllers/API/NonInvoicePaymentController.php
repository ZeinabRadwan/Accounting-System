<?php

namespace App\Http\Controllers\API;

use Exception;
use Illuminate\Http\Request;
use App\Models\NonInvoicePayment;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Interfaces\ITransactionService;
use App\Http\Resources\NonInvoicePaymentResource;
use App\Http\Resources\NonInvoicePaymentListResource;
use App\Http\Requests\NonInvoicePayment\StoreNonInvoicePaymentRequest;
use App\Http\Requests\NonInvoicePayment\UpdateNonInvoicePaymentRequest;
use App\Services\BusinessTransactionJournalService;
use Illuminate\Support\Facades\Log;
use App\Models\Account;
use App\Models\Client;

class NonInvoicePaymentController extends Controller
{

    protected ITransactionService $transactionService;

    // define middleware
    public function __construct(ITransactionService $transactionService)
    {
        $this->middleware('can:non-invoice-payment-list', ['only' => ['index', 'search']]);
        $this->middleware('can:non-invoice-payment-create', ['only' => ['create']]);
        $this->middleware('can:non-invoice-payment-view', ['only' => ['show']]);
        $this->middleware('can:non-invoice-payment-edit', ['only' => ['update']]);
        $this->middleware('can:non-invoice-payment-delete', ['only' => ['destroy']]);

        $this->transactionService = $transactionService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return NonInvoicePaymentListResource::collection(NonInvoicePayment::with('client', 'paymentTransaction.cashbookAccount')->latest()->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNonInvoicePaymentRequest $request)
    {

        try {
            DB::beginTransaction();

            $userId = auth()->user()->id;



            $client = Client::findOrFail($request->client['id']);
           

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

            // Create bank/cash transaction for both types (0: sent, 1: received)
            $transaction = $this->transactionService->createTransactionFromNonInvoicePayment($request, $userId);


            

            // store payment
          $nonInvoicePayment =  NonInvoicePayment::create([
                'slug' => uniqid(),
                'client_id' => $request->client['id'],
                'amount' => $request->amount,
                'type' => $request->type,
                'transaction_id' => isset($transaction) ? $transaction->id : null,
                'date' => $request->paymentDate,
                'note' => $request->note,
                'status' => $request->status,
                'created_by' => $userId,
            ]);

            // Load the client relationship with chart of account for journal entry creation
            $nonInvoicePayment->load(['client.chartOfAccount']);

            // Create journal entry for non-invoice payment
            try {
                $journalService = new BusinessTransactionJournalService();
                $paymentJournalEntry = $journalService->createNonInvoicePaymentJournal($nonInvoicePayment, $userId);
            } catch (\Exception $e) {
                // Log the error but don't fail the payment creation
                Log::error('Failed to create payment journal entry for non-invoice payment: ' . $e->getMessage());
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($nonInvoicePayment)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . $request->client['name'] . ']',
                    'event' => 'Create',
                    'slug' => $nonInvoicePayment->slug,
                    'routeName' => ''
                ])
                ->useLog('Client Non Invoice Payment Created')
                ->log('Client Non Invoice Payment Created');

            DB::commit();

            return $this->responseWithSuccess('Non invoice payment added successfully');
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
            $payment = NonInvoicePayment::where('slug', $slug)->first();

            return new NonInvoicePaymentResource($payment);
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
    public function update(UpdateNonInvoicePaymentRequest $request, $slug)
    {
        $payment = NonInvoicePayment::where('slug', $slug)->first();
        $userId = auth()->user()->id;

        try {
            DB::beginTransaction();

            $payment->update([
                'amount' => $request->paidAmount,
                'date' => $request->paymentDate,
                'note' => $request->note,
                'status' => $request->status,
            ]);

            if ($payment->paymentTransaction) {
                // update transaction for both types
                $payment->paymentTransaction->update([
                    'account_id' => $request->account['id'],
                    'amount' => $request->paidAmount,
                    'type' => intval($request->type) === 1 ? 1 : 0,
                    'cheque_no' => $request->chequeNo,
                    'receipt_no' => $request->receiptNo,
                    'transaction_date' => $request->paymentDate,
                    'status' => $request->status,
                ]);
            }

            // If amount changed, create a new journal entry for the adjustment
            if ($payment->amount != $request->paidAmount) {
                try {
                    // Load the client relationship with chart of account for journal entry creation
                    $payment->load(['client.chartOfAccount']);
                    
                    $journalService = new BusinessTransactionJournalService();
                    $adjustmentAmount = $request->paidAmount - $payment->amount;
                    if ($adjustmentAmount > 0) {
                        // Create journal entry for the additional amount
                        $paymentJournalEntry = $journalService->createNonInvoicePaymentJournal($payment, $userId);
                    }
                } catch (\Exception $e) {
                    // Log the error but don't fail the update
                    Log::error('Failed to create adjustment journal entry for non-invoice payment: ' . $e->getMessage());
                }
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($payment)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . $request->client['name'] . ']',
                    'event' => 'Update',
                    'slug' => $payment->slug,
                    'routeName' => ''
                ])
                ->useLog('Client Non Invoice Payment Updated')
                ->log('Client Non Invoice Payment Updated');

            DB::commit();

            return $this->responseWithSuccess('Payment updated successfully');
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

            $payment = NonInvoicePayment::where('slug', $slug)->first();

            // check if the payment can be delete
            $canDelete = true;

            if ($payment->type == 1) {
                if (($payment->client->nonInvoiceTotalDue() < $payment->client->nonInvoicePaid()) || $payment->paymentTransaction->cashbookAccount->availableBalance() < $payment->amount) {
                    $canDelete = false;
                }
            }

            if ($canDelete) {
                if ($payment->type == 1) {
                    $payment->paymentTransaction->delete();
                }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($payment)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . $payment->client->name . ']',
                    'event' => 'Deleted'
                ])
                ->useLog('Client Non Invoice Payment deleted')
                ->log('Client Non Invoice Payment deleted');


                $payment->delete();
            } else {
                return $this->responseWithError('Sorry you can\'t delete this invoice!');
            }

            DB::commit();

            return $this->responseWithSuccess('Payment deleted successfully');
        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Cancel the specified non-invoice payment.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function cancel($slug)
    {
        try {
            DB::beginTransaction();

            $payment = NonInvoicePayment::where('slug', $slug)->first();

            if (!$payment) {
                return $this->responseWithError('Payment not found.');
            }

            // If already cancelled
            if ($payment->status === 2) {
                return $this->responseWithError('Payment is already cancelled.');
            }

            // Only active payments can be cancelled
            if ($payment->status !== 1) {
                return $this->responseWithError('Only active payments can be cancelled.');
            }

            // Update payment status to cancelled
            $payment->update([
                'status' => 2,
            ]);

            // Delete related journal entries created for this non-invoice payment
            $journalEntries = \App\Models\JournalEntry::where('source_type', \App\Models\NonInvoicePayment::class)
                ->where('source_id', $payment->id)
                ->get();

            foreach ($journalEntries as $journalEntry) {
                $journalEntry->lines()->delete();
                $journalEntry->delete();
            }

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($payment)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . ($payment->client->name ?? '') . ']',
                    'event' => 'Cancel',
                    'slug' => $payment->slug,
                    'routeName' => ''
                ])
                ->useLog('Client Non Invoice Payment Cancelled')
                ->log('Client Non Invoice Payment Cancelled');

            DB::commit();

            return $this->responseWithSuccess('Payment cancelled successfully');
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
        $query = NonInvoicePayment::with('client', 'paymentTransaction.cashbookAccount');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where('amount', 'LIKE', '%'.$term.'%')
                ->orWhereHas('client', function ($newQuery) use ($term) {
                    $newQuery->where('name', 'LIKE', '%'.$term.'%')
                        ->orWhere('email', 'LIKE', '%'.$term.'%')
                        ->orWhere('company_name', 'LIKE', '%'.$term.'%')
                        ->orWhere('phone', 'LIKE', '%'.$term.'%')
                        ->orWhere('phone_number', 'LIKE', '%'.$term.'%')
                        ->orWhere('phone_secondary', 'LIKE', '%'.$term.'%');
                })
                ->orWhereHas('paymentTransaction', function ($newQuery) use ($term) {
                    $newQuery->where('cheque_no', 'LIKE', '%'.$term.'%')
                        ->orWhere('receipt_no', 'LIKE', '%'.$term.'%')->orWhereHas('cashbookAccount', function ($newQuery) use ($term) {
                            $newQuery->where('account_number', 'LIKE', '%'.$term.'%')
                                ->orWhere('bank_name', 'LIKE', '%'.$term.'%');
                        });
                });
        });

        return NonInvoicePaymentListResource::collection($query->latest()->paginate($request->perPage));
    }
}

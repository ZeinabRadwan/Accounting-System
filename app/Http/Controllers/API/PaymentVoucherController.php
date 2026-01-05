<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaymentVoucher\StorePaymentVoucherRequest;
use App\Http\Requests\PaymentVoucher\UpdatePaymentVoucherRequest;
use App\Http\Resources\PaymentVoucherListResource;
use App\Http\Resources\PaymentVoucherResource;
use App\Models\Account;
use App\Models\AccountTransaction;
use App\Models\Invoice;
use App\Models\PaymentVoucher;
use App\Models\Purchase;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PaymentVoucherController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:payment-voucher-list', ['only' => ['index', 'indexReceive', 'indexSend', 'search']]);
        $this->middleware('can:payment-voucher-create', ['only' => ['store']]);
        $this->middleware('can:payment-voucher-view', ['only' => ['show']]);
        $this->middleware('can:payment-voucher-edit', ['only' => ['update']]);
        $this->middleware('can:payment-voucher-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of receive vouchers (voucher_type = 1).
     *
     * @return \Illuminate\Http\Response
     */
    public function indexReceive(Request $request)
    {
        $perPage = $request->perPage ?? 10;
        $vouchers = PaymentVoucher::with([
            'client',
            'supplier',
            'chartOfAccount',
            'invoice',
            'purchase',
            'transaction.cashbookAccount',
        ])
            ->where('voucher_type', 1) // Receive vouchers
            ->latest()
            ->paginate($perPage);

        return PaymentVoucherListResource::collection($vouchers);
    }

    /**
     * Display a listing of send vouchers (voucher_type = 0).
     *
     * @return \Illuminate\Http\Response
     */
    public function indexSend(Request $request)
    {
        $perPage = $request->perPage ?? 10;
        $vouchers = PaymentVoucher::with([
            'client',
            'supplier',
            'chartOfAccount',
            'invoice',
            'purchase',
            'transaction.cashbookAccount',
        ])
            ->where('voucher_type', 0) // Send vouchers
            ->latest()
            ->paginate($perPage);

        return PaymentVoucherListResource::collection($vouchers);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $perPage = $request->perPage ?? 10;
        $vouchers = PaymentVoucher::with([
            'client',
            'supplier',
            'chartOfAccount',
            'invoice',
            'purchase',
            'transaction.cashbookAccount',
        ])
            ->latest()
            ->paginate($perPage);

        return PaymentVoucherListResource::collection($vouchers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaymentVoucherRequest $request)
    {
        try {
            DB::beginTransaction();

            $user = auth()->user();
            $userId = $user->id;
            $branchId = (int) ($user->default_branch_id ?? 0);

            // Get account
            $account = Account::findOrFail($request->account['id']);
            if (! $account) {
                return $this->responseWithError('Bank Account not found.');
            }

            // Validate account has chart of account
            if (! $account->chartOfAccount) {
                return $this->responseWithError('Bank Account must have a Chart of Account assigned for journal entries.');
            }

            // Validate entity has chart of account (for client and supplier)
            if ($request->entityType === 'client' && isset($request->client['id'])) {
                $client = \App\Models\Client::find($request->client['id']);
                if (! $client || ! $client->chartOfAccount) {
                    return $this->responseWithError('Client must have a Chart of Account assigned for journal entries.');
                }
            } elseif ($request->entityType === 'supplier' && isset($request->supplier['id'])) {
                $supplier = \App\Models\Supplier::find($request->supplier['id']);
                if (! $supplier || ! $supplier->chartOfAccount) {
                    return $this->responseWithError('Supplier must have a Chart of Account assigned for journal entries.');
                }
            }

            // Prepare voucher data
            $voucherData = [
                'slug' => uniqid(),
                'voucher_type' => $request->voucherType,
                'entity_type' => $request->entityType,
                'payment_method' => $request->paymentMethod,
                'amount' => $request->amount,
                'account_id' => $account->id,
                'date' => $request->date,
                'cheque_no' => $request->chequeNo ?? null,
                'receipt_no' => $request->receiptNo ?? null,
                'note' => $request->note ?? null,
                'status' => $request->status ?? 1,
                'created_by' => $userId,
            ];

            // Set entity relationship based on entity type
            if ($request->entityType === 'client' && isset($request->client['id'])) {
                $voucherData['client_id'] = $request->client['id'];
            } elseif ($request->entityType === 'supplier' && isset($request->supplier['id'])) {
                $voucherData['supplier_id'] = $request->supplier['id'];
            } elseif ($request->entityType === 'chart_of_account' && isset($request->chartOfAccount['id'])) {
                $voucherData['chart_of_account_id'] = $request->chartOfAccount['id'];
            }

            // Set invoice or purchase if payment method requires it
            $invoice = null;
            $purchase = null;

            if ($request->paymentMethod === 'invoice' && isset($request->invoice['id'])) {
                $voucherData['invoice_id'] = $request->invoice['id'];
                // Validate invoice exists and is active
                $invoice = Invoice::find($request->invoice['id']);
                if (! $invoice) {
                    return $this->responseWithError('Invoice not found.');
                }
                if ((int) $invoice->status !== 1) {
                    return $this->responseWithError('Cannot add payment to an inactive invoice.');
                }
            } elseif ($request->paymentMethod === 'purchase' && isset($request->purchase['id'])) {
                $voucherData['purchase_id'] = $request->purchase['id'];
                // Validate purchase exists and is active
                $purchase = Purchase::find($request->purchase['id']);
                if (! $purchase) {
                    return $this->responseWithError('Purchase not found.');
                }
                if ((int) $purchase->status !== 1) {
                    return $this->responseWithError('Cannot add payment to an inactive purchase.');
                }
            }

            // Create transaction
            $reason = $this->generateTransactionReason($voucherData, $account);
            $transaction = AccountTransaction::create([
                'account_id' => $account->id,
                'amount' => $request->amount,
                'reason' => $reason,
                'type' => $request->voucherType ? 1 : 0, // 1 = receive, 0 = send
                'transaction_date' => $request->date,
                'cheque_no' => $request->chequeNo ?? null,
                'receipt_no' => $request->receiptNo ?? null,
                'created_by' => $userId,
                'status' => $request->status ?? 1,
                'branch_id' => $branchId,
            ]);

            $voucherData['transaction_id'] = $transaction->id;
            $voucherData['branch_id'] = $branchId;

            // Get payment method and analytical account if provided
            $paymentMethodId = $request->payment_method_id ?? null;
            $analyticalAccountId = null;

            if ($paymentMethodId) {
                $paymentMethod = \App\Models\PaymentMethod::find($paymentMethodId);
                if ($paymentMethod) {
                    $analyticalAccount = $paymentMethod->getBranchAccount($branchId);
                    $analyticalAccountId = $analyticalAccount ? $analyticalAccount->id : null;
                    $voucherData['payment_method_id'] = $paymentMethodId;
                    $voucherData['analytical_account_id'] = $analyticalAccountId;
                }
            }

            // Create voucher
            $voucher = PaymentVoucher::create($voucherData);

            // Update invoice is_paid status if fully paid (for invoice payments)
            if ($request->paymentMethod === 'invoice' && $invoice) {
                $invoice->refresh();
                if ($invoice->totalDue() <= 0) {
                    $invoice->update(['is_paid' => 1]);
                }
            }

            // Update purchase is_paid status if fully paid (for purchase payments)
            if ($request->paymentMethod === 'purchase' && $purchase) {
                $purchase->refresh();
                if ($purchase->totalDue() <= 0) {
                    $purchase->update(['is_paid' => 1]);
                }
            }

            // Load necessary relationships for journal entry
            $voucher->load([
                'client.chartOfAccount',
                'supplier.chartOfAccount',
                'chartOfAccount',
                'transaction.account.chartOfAccount',
            ]);

            // Create journal entry for payment voucher only if status is active
            if ($voucher->status == 1) {
                try {
                    $journalService = new \App\Services\BusinessTransactionJournalService;
                    $paymentJournalEntry = $journalService->createPaymentVoucherJournal($voucher, $userId);
                } catch (\Exception $e) {
                    // Log the error but don't fail the voucher creation
                    \Illuminate\Support\Facades\Log::error('Failed to create payment journal entry for voucher: '.$e->getMessage());
                }
            }

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($voucher)
                ->withProperties([
                    'name' => '',
                    'code' => 'Voucher-'.$voucher->id,
                    'event' => 'Create',
                    'slug' => $voucher->slug,
                    'routeName' => '',
                ])
                ->useLog('Payment Voucher Created')
                ->log('Payment Voucher Created');

            DB::commit();

            return $this->responseWithSuccess('Payment voucher created successfully', new PaymentVoucherResource($voucher));
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
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
        try {
            $voucher = PaymentVoucher::with([
                'client',
                'supplier',
                'chartOfAccount',
                'invoice',
                'purchase',
                'transaction.cashbookAccount',
                'user',
            ])->where('slug', $slug)->first();

            if (! $voucher) {
                return $this->responseWithError(__('Voucher not found.'));
            }

            return new PaymentVoucherResource($voucher);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePaymentVoucherRequest $request, $slug)
    {
        try {
            DB::beginTransaction();

            $voucher = PaymentVoucher::where('slug', $slug)->first();
            if (! $voucher) {
                return $this->responseWithError(__('Voucher not found.'));
            }

            $userId = auth()->user()->id;

            // Update voucher data
            $updateData = [];
            if ($request->has('amount')) {
                $updateData['amount'] = $request->amount;
            }
            if ($request->has('date')) {
                $updateData['date'] = $request->date;
            }
            if ($request->has('note')) {
                $updateData['note'] = $request->note;
            }
            if ($request->has('status')) {
                $updateData['status'] = $request->status;
            }
            if ($request->has('chequeNo')) {
                $updateData['cheque_no'] = $request->chequeNo;
            }
            if ($request->has('receiptNo')) {
                $updateData['receipt_no'] = $request->receiptNo;
            }

            if ($request->has('account')) {
                $account = Account::findOrFail($request->account['id']);
                $updateData['account_id'] = $account->id;
            }

            $voucher->update($updateData);

            // Update transaction if exists
            if ($voucher->transaction && $request->hasAny(['amount', 'date', 'account'])) {
                $transactionData = [];
                if ($request->has('amount')) {
                    $transactionData['amount'] = $request->amount;
                }
                if ($request->has('date')) {
                    $transactionData['transaction_date'] = $request->date;
                }
                if ($request->has('account')) {
                    $transactionData['account_id'] = $request->account['id'];
                }
                if ($request->has('chequeNo')) {
                    $transactionData['cheque_no'] = $request->chequeNo;
                }
                if ($request->has('receiptNo')) {
                    $transactionData['receipt_no'] = $request->receiptNo;
                }
                if ($request->has('status')) {
                    $transactionData['status'] = $request->status;
                }

                $voucher->transaction->update($transactionData);
            }

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($voucher)
                ->withProperties([
                    'name' => '',
                    'code' => 'Voucher-'.$voucher->id,
                    'event' => 'Update',
                    'slug' => $voucher->slug,
                    'routeName' => '',
                ])
                ->useLog('Payment Voucher Updated')
                ->log('Payment Voucher Updated');

            DB::commit();

            return $this->responseWithSuccess('Voucher updated successfully');
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        try {
            DB::beginTransaction();

            $voucher = PaymentVoucher::where('slug', $slug)->first();
            if (! $voucher) {
                return $this->responseWithError(__('Voucher not found.'));
            }

            // Delete transaction if exists
            if ($voucher->transaction) {
                $voucher->transaction->delete();
            }

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($voucher)
                ->withProperties([
                    'name' => '',
                    'code' => 'Voucher-'.$voucher->id,
                    'event' => 'Delete',
                ])
                ->useLog('Payment Voucher Deleted')
                ->log('Payment Voucher Deleted');

            $voucher->delete();

            DB::commit();

            return $this->responseWithSuccess('Voucher deleted successfully');
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Cancel the specified voucher.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function cancel($slug)
    {
        try {
            DB::beginTransaction();

            $voucher = PaymentVoucher::where('slug', $slug)->first();
            if (! $voucher) {
                return $this->responseWithError(__('Voucher not found.'));
            }

            if ($voucher->status === 2) {
                return $this->responseWithError('Voucher is already cancelled.');
            }

            $voucher->update(['status' => 2]);

            // Update transaction status
            if ($voucher->transaction) {
                $voucher->transaction->update(['status' => 0]);
            }

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($voucher)
                ->withProperties([
                    'name' => '',
                    'code' => 'Voucher-'.$voucher->id,
                    'event' => 'Cancel',
                    'slug' => $voucher->slug,
                    'routeName' => '',
                ])
                ->useLog('Payment Voucher Cancelled')
                ->log('Payment Voucher Cancelled');

            DB::commit();

            return $this->responseWithSuccess('Voucher cancelled successfully');
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Search vouchers.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $term = $request->term;
        $voucherType = $request->voucherType ?? null;
        $perPage = $request->perPage ?? 10;

        $query = PaymentVoucher::with([
            'client',
            'supplier',
            'chartOfAccount',
            'invoice',
            'purchase',
            'transaction.account',
        ]);

        // Filter by voucher type if provided
        if ($voucherType !== null) {
            $query->where('voucher_type', $voucherType);
        }

        // Date range filter
        if ($request->startDate && $request->endDate) {
            $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        // Search term
        if ($term) {
            $query->where(function ($q) use ($term) {
                $q->where('amount', 'LIKE', '%'.$term.'%')
                    ->orWhere('note', 'LIKE', '%'.$term.'%')
                    ->orWhere('cheque_no', 'LIKE', '%'.$term.'%')
                    ->orWhere('receipt_no', 'LIKE', '%'.$term.'%')
                    ->orWhereHas('client', function ($q) use ($term) {
                        $q->where('name', 'LIKE', '%'.$term.'%');
                    })
                    ->orWhereHas('supplier', function ($q) use ($term) {
                        $q->where('name', 'LIKE', '%'.$term.'%');
                    })
                    ->orWhereHas('chartOfAccount', function ($q) use ($term) {
                        $q->where('name', 'LIKE', '%'.$term.'%');
                    })
                    ->orWhereHas('transaction.cashbookAccount', function ($q) use ($term) {
                        $q->where('bank_name', 'LIKE', '%'.$term.'%')
                            ->orWhere('account_number', 'LIKE', '%'.$term.'%');
                    });
            });
        }

        $vouchers = $query->latest()->paginate($perPage);

        return PaymentVoucherListResource::collection($vouchers);
    }

    /**
     * Generate transaction reason text.
     *
     * @param  array  $voucherData
     * @param  Account  $account
     * @return string
     */
    private function generateTransactionReason($voucherData, $account)
    {
        $entityName = '';
        $prefix = $voucherData['voucher_type'] ? 'Receive' : 'Send';

        if ($voucherData['entity_type'] === 'client' && isset($voucherData['client_id'])) {
            $entityName = 'Client';
        } elseif ($voucherData['entity_type'] === 'supplier' && isset($voucherData['supplier_id'])) {
            $entityName = 'Supplier';
        } elseif ($voucherData['entity_type'] === 'chart_of_account') {
            $entityName = 'Chart of Account';
        }

        $method = $voucherData['payment_method'] === 'direct' ? 'Direct Payment' :
                  ($voucherData['payment_method'] === 'invoice' ? 'Invoice Payment' : 'Purchase Payment');

        return "[Payment Voucher] {$prefix} - {$entityName} - {$method} - [{$account->account_number}]";
    }
}

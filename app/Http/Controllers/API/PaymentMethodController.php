<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaymentMethod\StorePaymentMethodRequest;
use App\Http\Requests\PaymentMethod\UpdatePaymentMethodRequest;
use App\Http\Resources\PaymentMethodResource;
use App\Models\ChartOfAccount;
use App\Models\PaymentMethod;
use App\Models\PaymentMethodBranchAccount;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PaymentMethodController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:payment-method-management', ['except' => ['allMethods']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return PaymentMethodResource::collection(
            PaymentMethod::with('chartOfAccount')
                ->latest()
                ->paginate($request->perPage)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaymentMethodRequest $request)
    {
        try {
            DB::beginTransaction();

            // Validate chart of account if provided
            if ($request->has('chart_of_account_id') && $request->chart_of_account_id) {
                $chartOfAccount = ChartOfAccount::find($request->chart_of_account_id);
                if (! $chartOfAccount || ! $chartOfAccount->is_active) {
                    return $this->responseWithError('Selected chart of account does not exist or is not active.');
                }
            }

            // save payment method
            $paymentMethod = PaymentMethod::create([
                'name' => $request->name,
                'code' => $request->shortCode,
                'note' => $request->note,
                'status' => $request->status,
                'chart_of_account_id' => $request->chart_of_account_id ?? null,
            ]);

            // Handle branch-specific analytical accounts
            if ($request->has('branch_accounts') && is_array($request->branch_accounts)) {
                foreach ($request->branch_accounts as $branchAccount) {
                    if (isset($branchAccount['branch_id']) && isset($branchAccount['chart_of_account_id'])) {
                        // Validate branch account
                        $branchChartOfAccount = ChartOfAccount::find($branchAccount['chart_of_account_id']);
                        if ($branchChartOfAccount && $branchChartOfAccount->is_active) {
                            PaymentMethodBranchAccount::updateOrCreate(
                                [
                                    'payment_method_id' => $paymentMethod->id,
                                    'branch_id' => $branchAccount['branch_id'],
                                ],
                                [
                                    'chart_of_account_id' => $branchAccount['chart_of_account_id'],
                                ]
                            );
                        }
                    }
                }
            }

            DB::commit();

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($paymentMethod)
                ->withProperties([
                    'name' => '',
                    'code' => '['.$request->name.']',
                    'event' => 'Create',
                ])
                ->useLog('Payment Method Created')
                ->log('Payment Method Created');

            return $this->responseWithSuccess('Payment method added successfully');
        } catch (Exception $e) {
            DB::rollBack();

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
            $method = PaymentMethod::with(['chartOfAccount', 'branchAccounts.chartOfAccount', 'branchAccounts.branch'])
                ->where('slug', $slug)
                ->first();

            if (! $method) {
                return $this->responseWithError('Payment method not found.');
            }

            return new PaymentMethodResource($method);
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
    public function update(UpdatePaymentMethodRequest $request, $slug)
    {
        $method = PaymentMethod::where('slug', $slug)->first();

        if (! $method) {
            return $this->responseWithError('Payment method not found.');
        }

        try {
            DB::beginTransaction();

            // Validate chart of account if provided
            if ($request->has('chart_of_account_id') && $request->chart_of_account_id) {
                $chartOfAccount = ChartOfAccount::find($request->chart_of_account_id);
                if (! $chartOfAccount || ! $chartOfAccount->is_active) {
                    return $this->responseWithError('Selected chart of account does not exist or is not active.');
                }
            }

            // update payment method
            $method->update([
                'name' => $request->name,
                'code' => $request->shortCode,
                'note' => $request->note,
                'status' => $request->status,
                'chart_of_account_id' => $request->chart_of_account_id ?? $method->chart_of_account_id,
            ]);

            // Handle branch-specific analytical accounts
            if ($request->has('branch_accounts') && is_array($request->branch_accounts)) {
                // Delete existing branch accounts not in the request
                $requestBranchIds = collect($request->branch_accounts)->pluck('branch_id')->filter();
                $method->branchAccounts()->whereNotIn('branch_id', $requestBranchIds)->delete();

                // Update or create branch accounts
                foreach ($request->branch_accounts as $branchAccount) {
                    if (isset($branchAccount['branch_id']) && isset($branchAccount['chart_of_account_id'])) {
                        // Validate branch account
                        $branchChartOfAccount = ChartOfAccount::find($branchAccount['chart_of_account_id']);
                        if ($branchChartOfAccount && $branchChartOfAccount->is_active) {
                            PaymentMethodBranchAccount::updateOrCreate(
                                [
                                    'payment_method_id' => $method->id,
                                    'branch_id' => $branchAccount['branch_id'],
                                ],
                                [
                                    'chart_of_account_id' => $branchAccount['chart_of_account_id'],
                                ]
                            );
                        }
                    }
                }
            }

            DB::commit();

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($method)
                ->withProperties([
                    'name' => '',
                    'code' => '['.$request->name.']',
                    'event' => 'Update',
                ])
                ->useLog('Payment Method Updated')
                ->log('Payment Method Updated');

            return $this->responseWithSuccess('Payment method updated successfully');
        } catch (Exception $e) {
            DB::rollBack();

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
            $method = PaymentMethod::where('slug', $slug)->first();

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($method)
                ->withProperties([
                    'name' => '',
                    'code' => '['.$method->name.']',
                    'event' => 'Delete',
                ])
                ->useLog('Payment Method Deleted')
                ->log('Payment Method Deleted');

            $method->delete();

            return $this->responseWithSuccess('Payment method deleted successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * search resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $term = $request->term;

        $query = PaymentMethod::where('name', 'LIKE', '%'.$term.'%')
            ->orWhere('code', 'LIKE', '%'.$term.'%')
            ->orWhere('note', 'LIKE', '%'.$term.'%')
            ->latest()->paginate($request->perPage);

        return PaymentMethodResource::collection($query);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allMethods()
    {
        $methods = PaymentMethod::where('status', 1)->latest()->get();

        return PaymentMethodResource::collection($methods);
    }
}

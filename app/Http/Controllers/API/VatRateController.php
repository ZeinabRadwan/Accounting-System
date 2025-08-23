<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\VatRate;
use App\Models\ChartOfAccount;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\VatRateResource;
use App\Http\Requests\VatRate\StoreVatRateRequest;
use App\Http\Requests\VatRate\UpdateVatRateRequest;

class VatRateController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:vat-rate-management', ['except' => ['allVatRates']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return VatRateResource::collection(VatRate::with(['salesVatAccount', 'purchaseVatAccount'])->latest()->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVatRateRequest $request)
    {
        // save vat rate
        if ($request->isGroupTax) {
            $groupTaxIds = collect($request->groupTaxItem)->pluck('id')->toArray();
            $totalRate = VatRate::whereIn('id', $groupTaxIds)->sum('rate');

            // Create the group tax rate
            $vatRate =  VatRate::create([
                'name' => $request->name,
                'code' => $request->code,
                'rate' => $totalRate,
                'note' => $request->note,
                'status' => $request->status,
                'is_group_tax' => true,
                'group_tax_ids' => $groupTaxIds,
                'sales_vat_account_id' => $request->sales_vat_account_id,
                'purchase_vat_account_id' => $request->purchase_vat_account_id,
            ]);
        } else {
            // Create a normal VAT rate
            $vatRate =  VatRate::create([
                'name' => $request->name,
                'code' => $request->code,
                'rate' => $request->rate,
                'note' => $request->note,
                'status' => $request->status,
                'is_group_tax' => false,
                'group_tax_ids' => null,
                'sales_vat_account_id' => $request->sales_vat_account_id,
                'purchase_vat_account_id' => $request->purchase_vat_account_id,
            ]);
        }

        // add activity log
        activity()
            ->causedBy(Auth::user())
            ->performedOn($vatRate)
            ->withProperties([
                'name' => "",
                'code' => '[' . $request->name . ']',
                'event' => 'Create'
            ])
            ->useLog('VAT Rate Created')
            ->log('VAT Rate Created');

        return $this->responseWithSuccess('VAT rate added successfully.');
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
            $vatRate = VatRate::with(['salesVatAccount', 'purchaseVatAccount'])->where('slug', $slug)->first();

            return new VatRateResource($vatRate);
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
    public function update(UpdateVatRateRequest $request, $slug)
    {
        $vatRate = VatRate::where('slug', $slug)->first();

        try {
            // update vat rate
            if ($request->isGroupTax) {
                $groupTaxIds = collect($request->groupTaxItem)->pluck('id')->toArray();
                $totalRate = VatRate::whereIn('id', $groupTaxIds)->sum('rate');

                // Create the group tax rate
                $vatRate->update([
                    'name' => $request->name,
                    'code' => $request->code,
                    'rate' => $totalRate,
                    'note' => $request->note,
                    'status' => $request->status,
                    'sales_vat_account_id' => $request->sales_vat_account_id,
                    'purchase_vat_account_id' => $request->purchase_vat_account_id,
                ]);
            } else {
                // Create a normal VAT rate
                $vatRate->update([
                    'name' => $request->name,
                    'code' => $request->code,
                    'rate' => $request->rate,
                    'note' => $request->note,
                    'status' => $request->status,
                    'sales_vat_account_id' => $request->sales_vat_account_id,
                    'purchase_vat_account_id' => $request->purchase_vat_account_id,
                ]);
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($vatRate)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . $request->name . ']',
                    'event' => 'Update'
                ])
                ->useLog('Vat Rate Updated')
                ->log('Vat Rate Updated');

            return $this->responseWithSuccess('Vat Rate updated successfully');
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
            $vatRate = VatRate::where('slug', $slug)->first();

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($vatRate)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . $vatRate->name . ']',
                    'event' => 'Delete'
                ])
                ->useLog('VAT Rate Deleted')
                ->log('VAT Rate Deleted');

            $vatRate->delete();

            return $this->responseWithSuccess('VAT rate deleted successfully');
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

        $query = VatRate::with(['salesVatAccount', 'purchaseVatAccount'])
            ->where('name', 'LIKE', '%'.$term.'%')
            ->orWhere('code', 'LIKE', '%'.$term.'%')
            ->orWhere('rate', 'LIKE', '%'.$term.'%')
            ->latest()->paginate($request->perPage);

        return VatRateResource::collection($query);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allVatRates()
    {
        $vatRates = VatRate::with(['salesVatAccount', 'purchaseVatAccount'])->where('status', 1)->latest()->get();

        return VatRateResource::collection($vatRates);
    }

    /**
     * Get VAT chart of accounts for dropdown selection
     *
     * @return \Illuminate\Http\Response
     */
    public function getVatChartOfAccounts()
    {
        try {
            // Get Sales VAT Payable accounts (Liability type)
            $salesVatAccounts = ChartOfAccount::where('is_active', true)
                ->where(function($query) {
                    $query->where('name', 'like', '%Sales VAT Payable%')
                          ->orWhere('name', 'like', '%VAT Payable%')
                          ->orWhere('name', 'like', '%Tax Payable%');
                })
                ->with('type')
                ->orderBy('name')
                ->get()
                ->map(function ($account) {
                    return [
                        'id' => $account->id,
                        'name' => $account->name,
                        'code' => $account->code,
                        'type' => $account->type ? $account->type->name : 'Unknown'
                    ];
                });

            // Get Purchase VAT Receivable accounts (Asset type)
            $purchaseVatAccounts = ChartOfAccount::where('is_active', true)
                ->where(function($query) {
                    $query->where('name', 'like', '%Purchase VAT Receivable%')
                          ->orWhere('name', 'like', '%VAT Receivable%')
                          ->orWhere('name', 'like', '%Tax Receivable%');
                })
                ->with('type')
                ->orderBy('name')
                ->get()
                ->map(function ($account) {
                    return [
                        'id' => $account->id,
                        'name' => $account->name,
                        'code' => $account->code,
                        'type' => $account->type ? $account->type->name : 'Unknown'
                    ];
                });

            // If no specific VAT accounts found, try to get accounts by type
            if ($salesVatAccounts->isEmpty()) {
                $salesVatAccounts = ChartOfAccount::where('is_active', true)
                    ->whereHas('type', function($query) {
                        $query->where('name', 'Liability');
                    })
                    ->where('name', 'like', '%Tax%')
                    ->with('type')
                    ->orderBy('name')
                    ->get()
                    ->map(function ($account) {
                        return [
                            'id' => $account->id,
                            'name' => $account->name,
                            'code' => $account->code,
                            'type' => $account->type ? $account->type->name : 'Unknown'
                        ];
                    });
            }

            if ($purchaseVatAccounts->isEmpty()) {
                $purchaseVatAccounts = ChartOfAccount::where('is_active', true)
                    ->whereHas('type', function($query) {
                        $query->where('name', 'Asset');
                    })
                    ->where('name', 'like', '%Tax%')
                    ->with('type')
                    ->orderBy('name')
                    ->get()
                    ->map(function ($account) {
                        return [
                            'id' => $account->id,
                            'name' => $account->name,
                            'code' => $account->code,
                            'type' => $account->type ? $account->type->name : 'Unknown'
                        ];
                    });
            }

            return $this->responseWithSuccess('VAT chart of accounts retrieved successfully', [
                'sales_vat_accounts' => $salesVatAccounts,
                'purchase_vat_accounts' => $purchaseVatAccounts
            ]);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Check if VAT rates are properly connected to chart of accounts
     *
     * @return \Illuminate\Http\Response
     */
    public function checkVatChartOfAccountConnections()
    {
        try {
            $unconnectedVatRates = VatRate::where('status', 1)
                ->where(function($query) {
                    $query->whereNull('sales_vat_account_id')
                          ->orWhereNull('purchase_vat_account_id');
                })
                ->get()
                ->map(function ($vatRate) {
                    return [
                        'id' => $vatRate->id,
                        'name' => $vatRate->name,
                        'code' => $vatRate->code,
                        'message' => $vatRate->getChartOfAccountValidationMessage()
                    ];
                });

            $connectedVatRates = VatRate::where('status', 1)
                ->whereNotNull('sales_vat_account_id')
                ->whereNotNull('purchase_vat_account_id')
                ->count();

            $totalVatRates = VatRate::where('status', 1)->count();

            return $this->responseWithSuccess('VAT chart of account connections checked successfully', [
                'unconnected_vat_rates' => $unconnectedVatRates,
                'connected_vat_rates' => $connectedVatRates,
                'total_vat_rates' => $totalVatRates,
                'connection_percentage' => $totalVatRates > 0 ? round(($connectedVatRates / $totalVatRates) * 100, 2) : 0
            ]);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }
}

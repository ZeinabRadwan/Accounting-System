<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AccountingPeriod\StoreAccountingPeriodRequest;
use App\Http\Requests\AccountingPeriod\UpdateAccountingPeriodRequest;
use App\Http\Resources\AccountingPeriod\AccountingPeriodResource;
use App\Models\AccountingPeriod;
use App\Models\FiscalYear;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountingPeriodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $accountingPeriods = AccountingPeriod::with(['fiscalYear', 'user'])
            ->when($request->search, function ($query) use ($request) {
                return $query->where('name', 'like', '%' . $request->search . '%');
            })
            ->when($request->fiscal_year_id, function ($query) use ($request) {
                return $query->where('fiscal_year_id', $request->fiscal_year_id);
            })
            ->when($request->is_active !== null, function ($query) use ($request) {
                return $query->where('is_active', $request->is_active);
            })
            ->when($request->is_closed !== null, function ($query) use ($request) {
                return $query->where('is_closed', $request->is_closed);
            })
            ->orderBy('start_date', 'desc')
            ->paginate($request->perPage);

        return AccountingPeriodResource::collection($accountingPeriods);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreAccountingPeriodRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreAccountingPeriodRequest $request)
    {
        $accountingPeriod = AccountingPeriod::create([
            'name' => $request->name,
            'fiscal_year_id' => $request->fiscal_year_id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'is_active' => $request->is_active ?? true,
            'is_closed' => $request->is_closed ?? false,
            'note' => $request->note,
            'created_by' => Auth::id(),
        ]);

        return response()->json([
            'message' => 'Accounting period created successfully',
            'data' => new AccountingPeriodResource($accountingPeriod->load(['fiscalYear', 'user']))
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param AccountingPeriod $accountingPeriod
     * @return AccountingPeriodResource
     */
    public function show($id)
    {
        $accountingPeriod = AccountingPeriod::with(['fiscalYear', 'user'])->find($id);
        
        if (!$accountingPeriod) {
            return response()->json([
                'message' => 'Accounting period not found'
            ], 404);
        }

        return new AccountingPeriodResource($accountingPeriod);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateAccountingPeriodRequest $request
     * @param AccountingPeriod $accountingPeriod
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateAccountingPeriodRequest $request, $id)
    {
        // Find the accounting period manually to ensure it exists in the current tenant context
        $accountingPeriod = AccountingPeriod::find($id);
        
        if (!$accountingPeriod) {
            return response()->json([
                'message' => 'Accounting period not found'
            ], 404);
        }

        $validatedData = $request->validated();
        
        // Check if slug needs to be generated
        if (isset($validatedData['name']) && $validatedData['name'] !== $accountingPeriod->name) {
            // The name has changed, so we need to regenerate the slug
            $validatedData['slug'] = \Str::slug($validatedData['name']);
        }

        $accountingPeriod->update($validatedData);
        
        // Refresh the model to get updated data
        $accountingPeriod->refresh();
        
        // Reload the model with relationships
        $accountingPeriod->load(['fiscalYear', 'user']);

        return response()->json([
            'message' => 'Accounting period updated successfully',
            'data' => new AccountingPeriodResource($accountingPeriod)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param AccountingPeriod $accountingPeriod
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $accountingPeriod = AccountingPeriod::find($id);
        
        if (!$accountingPeriod) {
            return response()->json([
                'message' => 'Accounting period not found'
            ], 404);
        }

        // Check if accounting period is closed
        if ($accountingPeriod->is_closed) {
            return response()->json([
                'message' => 'Cannot delete closed accounting period'
            ], 422);
        }

        $accountingPeriod->delete();

        return response()->json([
            'message' => 'Accounting period deleted successfully'
        ]);
    }

    /**
     * Get all accounting periods for select dropdown.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function allAccountingPeriods()
    {
        $accountingPeriods = AccountingPeriod::with('fiscalYear')
            ->orderBy('start_date', 'desc')
            ->get();

        return response()->json([
            'data' => AccountingPeriodResource::collection($accountingPeriods)
        ]);
    }

    /**
     * Get accounting periods by fiscal year.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByFiscalYear(Request $request)
    {
        $request->validate([
            'fiscal_year_id' => 'required|exists:fiscal_years,id'
        ]);

        $accountingPeriods = AccountingPeriod::where('fiscal_year_id', $request->fiscal_year_id)
            ->select('id', 'name', 'slug', 'start_date', 'end_date', 'is_active', 'is_closed')
            ->orderBy('start_date', 'asc')
            ->get();

        return response()->json([
            'data' => $accountingPeriods
        ]);
    }

    /**
     * Get the current active accounting period.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCurrent()
    {
        $currentAccountingPeriod = AccountingPeriod::getCurrent();

        if (!$currentAccountingPeriod) {
            return response()->json([
                'message' => 'No active accounting period found'
            ], 404);
        }

        return response()->json([
            'data' => new AccountingPeriodResource($currentAccountingPeriod->load(['fiscalYear', 'user']))
        ]);
    }

    /**
     * Set the current accounting period.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function setCurrent(Request $request)
    {
        $request->validate([
            'accounting_period_id' => 'required|exists:accounting_periods,id'
        ]);

        $accountingPeriod = AccountingPeriod::findOrFail($request->accounting_period_id);

        // Set all accounting periods to inactive first
        AccountingPeriod::query()->update(['is_active' => false]);

        // Refresh the model to ensure we have the latest data
        $accountingPeriod->refresh();

        // Set the selected accounting period to active
        $accountingPeriod->update(['is_active' => true]);

        // Update general settings
        $generalSetting = \App\Models\GeneralSetting::where('key', 'current_accounting_period_id')->first();
        if ($generalSetting) {
            $generalSetting->update(['value' => (string) $accountingPeriod->id]);
        } else {
            \App\Models\GeneralSetting::create([
                'key' => 'current_accounting_period_id',
                'display_name' => 'Current Accounting Period ID',
                'value' => (string) $accountingPeriod->id,
            ]);
        }

        return response()->json([
            'message' => 'Current accounting period set successfully',
            'data' => new AccountingPeriodResource($accountingPeriod->load(['fiscalYear', 'user']))
        ]);
    }

    /**
     * Close the accounting period.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function close($id)
    {
        $accountingPeriod = AccountingPeriod::find($id);
        
        if (!$accountingPeriod) {
            return response()->json([
                'message' => 'Accounting period not found'
            ], 404);
        }

        if ($accountingPeriod->is_closed) {
            return response()->json([
                'message' => 'Accounting period is already closed'
            ], 422);
        }

        $accountingPeriod->close();

        return response()->json([
            'message' => 'Accounting period closed successfully',
            'data' => new AccountingPeriodResource($accountingPeriod->load(['fiscalYear', 'user']))
        ]);
    }

    /**
     * Reopen the accounting period.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function reopen($id)
    {
        $accountingPeriod = AccountingPeriod::find($id);
        
        if (!$accountingPeriod) {
            return response()->json([
                'message' => 'Accounting period not found'
            ], 404);
        }

        if (!$accountingPeriod->is_closed) {
            return response()->json([
                'message' => 'Accounting period is already open'
            ], 422);
        }

        $accountingPeriod->reopen();

        return response()->json([
            'message' => 'Accounting period reopened successfully',
            'data' => new AccountingPeriodResource($accountingPeriod->load(['fiscalYear', 'user']))
        ]);
    }
}

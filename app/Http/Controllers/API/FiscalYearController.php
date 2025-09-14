<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\FiscalYear\StoreFiscalYearRequest;
use App\Http\Requests\FiscalYear\UpdateFiscalYearRequest;
use App\Http\Resources\FiscalYear\FiscalYearResource;
use App\Models\FiscalYear;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FiscalYearController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $fiscalYears = FiscalYear::with(['user', 'accountingPeriods'])
            ->when($request->search, function ($query) use ($request) {
                return $query->where('name', 'like', '%' . $request->search . '%');
            })
            ->when($request->is_active !== null, function ($query) use ($request) {
                return $query->where('is_active', $request->is_active);
            })
            ->orderBy('start_date', 'desc')
            ->paginate($request->perPage);

        return FiscalYearResource::collection($fiscalYears);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreFiscalYearRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreFiscalYearRequest $request)
    {
        $fiscalYear = FiscalYear::create([
            'name' => $request->name,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'is_active' => $request->is_active ?? true,
            'note' => $request->note,
            'created_by' => Auth::id(),
        ]);

        // Auto-set as current if it's the only fiscal year
        $totalFiscalYears = FiscalYear::count();
        if ($totalFiscalYears === 1) {
            // Set all fiscal years to inactive first
            FiscalYear::query()->update(['is_active' => false]);
            
            // Set this fiscal year as active
            $fiscalYear->update(['is_active' => true]);
            
            // Update general settings
            $generalSetting = \App\Models\GeneralSetting::where('key', 'current_fiscal_year_id')->first();
            if ($generalSetting) {
                $generalSetting->update(['value' => (string) $fiscalYear->id]);
            } else {
                \App\Models\GeneralSetting::create([
                    'key' => 'current_fiscal_year_id',
                    'display_name' => 'Current Fiscal Year ID',
                    'value' => (string) $fiscalYear->id,
                ]);
            }
        }

        return response()->json([
            'message' => 'Fiscal year created successfully',
            'data' => new FiscalYearResource($fiscalYear->load(['user', 'accountingPeriods']))
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param FiscalYear $fiscalYear
     * @return FiscalYearResource
     */
    public function show($id)
    {
        $fiscalYear = FiscalYear::with(['user', 'accountingPeriods'])->find($id);
        
        if (!$fiscalYear) {
            return response()->json([
                'message' => 'Fiscal year not found'
            ], 404);
        }

        return new FiscalYearResource($fiscalYear);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateFiscalYearRequest $request
     * @param FiscalYear $fiscalYear
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateFiscalYearRequest $request, $id)
    {
        // Find the fiscal year manually to ensure it exists in the current tenant context
        $fiscalYear = FiscalYear::find($id);
        
        if (!$fiscalYear) {
            return response()->json([
                'message' => 'Fiscal year not found'
            ], 404);
        }

        $validatedData = $request->validated();
        
        // Check if slug needs to be generated
        if (isset($validatedData['name']) && $validatedData['name'] !== $fiscalYear->name) {
            // The name has changed, so we need to regenerate the slug
            $validatedData['slug'] = \Str::slug($validatedData['name']);
        }

        $fiscalYear->update($validatedData);
        
        // Refresh the model to get updated data
        $fiscalYear->refresh();
        
        // Reload the model with relationships
        $fiscalYear->load(['user', 'accountingPeriods']);

        return response()->json([
            'message' => 'Fiscal year updated successfully',
            'data' => new FiscalYearResource($fiscalYear)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param FiscalYear $fiscalYear
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $fiscalYear = FiscalYear::find($id);
        
        if (!$fiscalYear) {
            return response()->json([
                'message' => 'Fiscal year not found'
            ], 404);
        }

        // Check if fiscal year has accounting periods
        if ($fiscalYear->accountingPeriods()->count() > 0) {
            return response()->json([
                'message' => 'Cannot delete fiscal year with existing accounting periods'
            ], 422);
        }

        $fiscalYear->delete();

        return response()->json([
            'message' => 'Fiscal year deleted successfully'
        ]);
    }

    /**
     * Get all fiscal years for select dropdown.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function allFiscalYears()
    {
        $fiscalYears = FiscalYear::select('id', 'name', 'slug', 'start_date', 'end_date', 'is_active')
            ->orderBy('start_date', 'desc')
            ->get()
            ->map(function ($fiscalYear) {
                return [
                    'id' => $fiscalYear->id,
                    'name' => $fiscalYear->name,
                    'slug' => $fiscalYear->slug,
                    'full_name' => $fiscalYear->name . ' (' . $fiscalYear->start_date->format('Y') . '-' . $fiscalYear->end_date->format('Y') . ')',
                    'start_date' => $fiscalYear->start_date,
                    'end_date' => $fiscalYear->end_date,
                    'is_active' => $fiscalYear->is_active,
                ];
            });

        return response()->json([
            'data' => $fiscalYears
        ]);
    }

    /**
     * Get the current active fiscal year.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCurrent()
    {
        // Get the current fiscal year ID from general settings
        $currentFiscalYearId = \App\Models\GeneralSetting::where('key', 'current_fiscal_year_id')->first()?->value;
        
        if (!$currentFiscalYearId) {
            return response()->json([
                'message' => 'No current fiscal year set'
            ], 404);
        }

        $currentFiscalYear = FiscalYear::with(['user', 'accountingPeriods'])->find($currentFiscalYearId);

        if (!$currentFiscalYear) {
            return response()->json([
                'message' => 'Current fiscal year not found'
            ], 404);
        }

        return response()->json([
            'data' => new FiscalYearResource($currentFiscalYear)
        ]);
    }

    /**
     * Set the current fiscal year.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function setCurrent(Request $request)
    {
        $request->validate([
            'fiscal_year_id' => 'required|exists:fiscal_years,id'
        ]);

        $fiscalYear = FiscalYear::findOrFail($request->fiscal_year_id);

        // Update general settings
        $generalSetting = \App\Models\GeneralSetting::where('key', 'current_fiscal_year_id')->first();
        if ($generalSetting) {
            $generalSetting->update(['value' => (string) $fiscalYear->id]);
        } else {
            \App\Models\GeneralSetting::create([
                'key' => 'current_fiscal_year_id',
                'display_name' => 'Current Fiscal Year ID',
                'value' => (string) $fiscalYear->id,
            ]);
        }

        return response()->json([
            'message' => 'Current fiscal year set successfully',
            'data' => new FiscalYearResource($fiscalYear)
        ]);
    }
}

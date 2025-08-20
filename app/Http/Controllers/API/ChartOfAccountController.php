<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\ChartOfAccount;
use App\Models\ChartOfAccountType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ChartOfAccountResource;
use App\Http\Requests\ChartOfAccount\StoreChartOfAccountRequest;
use App\Http\Requests\ChartOfAccount\UpdateChartOfAccountRequest;
use Illuminate\Support\Facades\DB;

class ChartOfAccountController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:chart-of-account-list', ['only' => ['index', 'search', 'getAll']]);
        $this->middleware('can:chart-of-account-create', ['only' => ['create', 'store']]);
        $this->middleware('can:chart-of-account-view', ['only' => ['show']]);
        $this->middleware('can:chart-of-account-edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:chart-of-account-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->perPage ?? 10;
        
        $accounts = ChartOfAccount::with(['types', 'parent'])
            ->latest()
            ->paginate($perPage);
            
        return ChartOfAccountResource::collection($accounts);
    }

    /**
     * Get all chart of accounts for tree view (without pagination)
     */
    public function getAll()
    {
        try {
            $accounts = ChartOfAccount::with(['types', 'parent'])
                ->orderBy('order', 'asc')
                ->orderBy('name', 'asc')
                ->get();
                
            return response()->json([
                'data' => $accounts
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error loading chart of accounts',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get all chart of account types for dropdown
     */
    public function getTypes()
    {
        try {
            $types = ChartOfAccountType::select('id', 'name')
                ->orderBy('name')
                ->get();
                
            return response()->json([
                'data' => $types
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error loading account types',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChartOfAccountRequest $request)
    {
        try {
            $chartOfAccount = ChartOfAccount::create([
                'name' => $request->name,
                'code' => $request->code,
                'type_id' => $request->type_id,
                'parent_id' => $request->parent_id,
                'order' => $request->order,
                'is_active' => $request->is_active,
                'created_by' => Auth::id(),
            ]);

            return response()->json([
                'message' => 'Chart of account created successfully',
                'data' => new ChartOfAccountResource($chartOfAccount)
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error creating chart of account',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        try {
            $chartOfAccount = ChartOfAccount::with(['types', 'parent'])
                ->where('code', $slug)
                ->firstOrFail();
            return new ChartOfAccountResource($chartOfAccount);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Chart of account not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChartOfAccountRequest $request, $slug)
    {
        try {
            $chartOfAccount = ChartOfAccount::where('code', $slug)->firstOrFail();
            $chartOfAccount->update($request->validated());

            return response()->json([
                'message' => 'Chart of account updated successfully',
                'data' => new ChartOfAccountResource($chartOfAccount)
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error updating chart of account',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        try {
            $chartOfAccount = ChartOfAccount::where('code', $slug)->firstOrFail();
            $chartOfAccount->delete();
            return $this->responseWithSuccess('Account deleted successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Search chart of accounts
     */
    public function search(Request $request)
    {
        try {
            $perPage = $request->perPage ?? 10;
            
            $query = ChartOfAccount::with(['types', 'parent']);
            
            if ($request->term) {
                $query->where('name', 'like', '%' . $request->term . '%')
                      ->orWhere('code', 'like', '%' . $request->term . '%');
            }

            return ChartOfAccountResource::collection(
                $query->latest()->paginate($perPage)
            );
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error searching chart of accounts',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

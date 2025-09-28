<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\ChartOfAccount;
use App\Models\ChartOfAccountType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\ChartOfAccountResource;
use App\Http\Resources\ChartOfAccountResourceCollection;
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
        
        $accounts = ChartOfAccount::with(['type', 'parent'])
            ->ordered()
            ->paginate($perPage);
            
        return new ChartOfAccountResourceCollection($accounts);
    }

    /**
     * Get all chart of accounts for tree view (without pagination)
     */
    public function getAll()
    {
        try {
            $accounts = ChartOfAccount::with(['type', 'parent'])
                ->ordered()
                ->get();
                
            return new ChartOfAccountResourceCollection($accounts);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error loading chart of accounts',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Lightweight list for dropdowns (faster than full resource)
     */
    public function getDropdown()
    {
        try {
            $accounts = ChartOfAccount::where('is_active', true)
                ->with(['type:id,name'])
                ->select('id', 'name', 'code', 'type_id', 'parent_id')
                ->orderBy('name', 'asc')
                ->get()
                ->map(function ($account) {
                    return [
                        'id' => $account->id,
                        'name' => $account->name,
                        'code' => $account->code,
                        'type' => $account->type ? $account->type->name : null,
                        'parent_id' => $account->parent_id,
                    ];
                });

            return response()->json([
                'data' => $accounts,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error loading dropdown accounts',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get chart of accounts in tree structure
     */
    public function tree()
    {
        try {
            $accounts = ChartOfAccount::with(['type', 'parent'])
                ->ordered()
                ->get();
                
            return new ChartOfAccountResourceCollection($accounts);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error loading chart of accounts tree',
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
            // Log the incoming request for debugging (uncomment if needed)
            // Log::info('Creating chart of account', [
            //     'name' => $request->name,
            //     'code' => $request->code,
            //     'parent_id' => $request->parent_id,
            //     'type_id' => $request->type_id,
            //     'timestamp' => now()
            // ]);

            $chartOfAccount = ChartOfAccount::create([
                'name' => $request->name,
                'code' => $request->code,
                'type_id' => $request->type_id,
                'parent_id' => $request->parent_id,
                'order' => $request->order,
                'is_active' => $request->is_active,
                'created_by' => Auth::id(),
            ]);

            // Log the created account for debugging (uncomment if needed)
            // Log::info('Chart of account created', [
            //     'id' => $chartOfAccount->id,
            //     'name' => $chartOfAccount->name,
            //     'code' => $chartOfAccount->code,
            //     'parent_id' => $chartOfAccount->parent_id,
            //     'timestamp' => now()
            // ]);

            return response()->json([
                'message' => 'Chart of account created successfully',
                'data' => new ChartOfAccountResource($chartOfAccount)
            ], 201);
        } catch (Exception $e) {
            // Log::error('Error creating chart of account', [
            //     'error' => $e->getMessage(),
            //     'request_data' => $request->all()
            // ]);

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
            $chartOfAccount = ChartOfAccount::with(['type', 'parent'])
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

            // Guard: prevent deletion if account has child accounts
            if ($chartOfAccount->children()->exists()) {
                return response()->json([
                    'message' => 'This account has child accounts and cannot be deleted.',
                    'errors' => [ 'chart_of_account' => ['Has child accounts'] ]
                ], 422);
            }

            // Guard: prevent deletion if linked in system
            $linkedClientCount = \App\Models\Client::where('chart_of_account_id', $chartOfAccount->id)->count();
            if ($linkedClientCount > 0) {
                return response()->json([
                    'message' => 'This account is linked to one or more customers and cannot be deleted.',
                    'errors' => [ 'chart_of_account' => ['Linked to customers'] ]
                ], 422);
            }

            $linkedSupplierCount = \App\Models\Supplier::where('chart_of_account_id', $chartOfAccount->id)->count();
            if ($linkedSupplierCount > 0) {
                return response()->json([
                    'message' => 'This account is linked to one or more vendors and cannot be deleted.',
                    'errors' => [ 'chart_of_account' => ['Linked to vendors'] ]
                ], 422);
            }

            $linkedCashbookAccountCount = \App\Models\Account::where('chart_of_account_id', $chartOfAccount->id)->count();
            if ($linkedCashbookAccountCount > 0) {
                return response()->json([
                    'message' => 'This account is linked to one or more bank/cash accounts and cannot be deleted.',
                    'errors' => [ 'chart_of_account' => ['Linked to bank/cash accounts'] ]
                ], 422);
            }

            $linkedVatCount = \App\Models\VatRate::where('sales_vat_account_id', $chartOfAccount->id)
                ->orWhere('purchase_vat_account_id', $chartOfAccount->id)
                ->count();
            if ($linkedVatCount > 0) {
                return response()->json([
                    'message' => 'This account is linked in VAT settings and cannot be deleted.',
                    'errors' => [ 'chart_of_account' => ['Linked to VAT settings'] ]
                ], 422);
            }

            $linkedRoutingCount = \App\Models\AccountRoutingSetting::where('main_account_id', $chartOfAccount->id)
                ->orWhere('main_account_id', $chartOfAccount->id)
                ->count();
            if ($linkedRoutingCount > 0) {
                return response()->json([
                    'message' => 'This account is used in Accounting Settings and cannot be deleted.',
                    'errors' => [ 'chart_of_account' => ['Linked to Accounting Settings'] ]
                ], 422);
            }

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
            
            $query = ChartOfAccount::with(['type', 'parent']);
            
            if ($request->term) {
                $query->where('name', 'like', '%' . $request->term . '%')
                      ->orWhere('code', 'like', '%' . $request->term . '%');
            }

            return new ChartOfAccountResourceCollection(
                $query->latest()->paginate($perPage)
            );
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error searching chart of accounts',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Generate automatic code for chart of account
     */
    public function generateCode(Request $request)
    {
        try {
            $parentId = $request->parent_id;
            
            // Log the request for debugging (can be removed in production)
            // \Log::info('Code generation request', [
            //     'parent_id' => $parentId,
            //     'timestamp' => now()
            // ]);
            
            if ($parentId) {
                // Generate code for child account
                $parent = ChartOfAccount::findOrFail($parentId);
                $parentCode = $parent->code;
                
                // Get all child codes for this parent
                $childCodes = ChartOfAccount::where('parent_id', $parentId)
                    ->pluck('code')
                    ->toArray();
                
                // Find the highest child number
                $maxChildNumber = 0;
                foreach ($childCodes as $childCode) {
                    if (strpos($childCode, $parentCode) === 0) {
                        $childNumber = (int)substr($childCode, strlen($parentCode));
                        $maxChildNumber = max($maxChildNumber, $childNumber);
                    }
                }
                
                $nextNumber = $maxChildNumber + 1;
                
                // Generate new code with proper padding
                $newCode = $parentCode . str_pad($nextNumber, 2, '0', STR_PAD_LEFT);
            } else {
                // Generate code for root account
                $rootCodes = ChartOfAccount::whereNull('parent_id')
                    ->pluck('code')
                    ->toArray();
                
                // Find the highest root number
                $maxRootNumber = 0;
                foreach ($rootCodes as $rootCode) {
                    if (is_numeric($rootCode)) {
                        $maxRootNumber = max($maxRootNumber, (int)$rootCode);
                    }
                }
                
                $nextNumber = $maxRootNumber + 1;
                
                // Generate new code with proper padding
                $newCode = str_pad($nextNumber, 4, '0', STR_PAD_LEFT);
            }
            
            // Ensure the code is unique
            $counter = 1;
            $originalCode = $newCode;
            while (ChartOfAccount::where('code', $newCode)->exists()) {
                if ($parentId) {
                    $newCode = $parentCode . str_pad($nextNumber + $counter, 2, '0', STR_PAD_LEFT);
                } else {
                    $newCode = str_pad($nextNumber + $counter, 4, '0', STR_PAD_LEFT);
                }
                $counter++;
            }
            
            // Log the generated code for debugging (can be removed in production)
            // \Log::info('Generated code', [
            //     'original_code' => $originalCode,
            //     'final_code' => $newCode,
            //     'parent_id' => $parentId,
            //     'parent_code' => $parentId ? $parent->code : null,
            //     'counter' => $counter
            // ]);
            
            return response()->json([
                'code' => $newCode,
                'parent_code' => $parentId ? $parent->code : null,
                'is_child' => (bool)$parentId
            ]);
            
        } catch (Exception $e) {
            // \Log::error('Code generation error', [
            //     'error' => $e->getMessage(),
            //     'parent_id' => $request->parent_id
            // ]);
            
            return response()->json([
                'message' => 'Error generating code',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get journal entries for a specific chart of account
     */
    public function getJournalEntries(Request $request, $slug)
    {
        try {
            $perPage = $request->perPage ?? 10;
            $search = $request->search ?? '';
            
            // Find the chart of account
            $chartOfAccount = ChartOfAccount::where('code', $slug)->firstOrFail();
            
            // Get journal entry lines for this account
            $query = $chartOfAccount->journalEntryLines()
                ->with(['journalEntry.creator', 'journalEntry.poster'])
                ->whereHas('journalEntry', function($q) {
                    $q->where('status', 'posted');
                });
            
            // Apply search if provided
            if ($search) {
                $query->whereHas('journalEntry', function($q) use ($search) {
                    $q->where('reference', 'like', '%' . $search . '%')
                      ->orWhere('description', 'like', '%' . $search . '%');
                });
            }
            
            $journalEntryLines = $query->orderBy('created_at', 'desc')->paginate($perPage);
            
            // Transform the data to include journal entry information
            $transformedData = collect($journalEntryLines->items())->map(function($line) {
                $journalEntry = $line->journalEntry;
                return [
                    'id' => $line->id,
                    'entry_date' => $journalEntry->entry_date,
                    'reference' => $journalEntry->reference,
                    'description' => $journalEntry->description,
                    'debit_amount' => $line->debit_amount,
                    'credit_amount' => $line->credit_amount,
                    'formatted_debit_amount' => number_format($line->debit_amount, 2),
                    'formatted_credit_amount' => number_format($line->credit_amount, 2),
                    'balance' => $line->debit_amount - $line->credit_amount,
                    'balance_type' => $line->debit_amount >= $line->credit_amount ? 'Debit' : 'Credit',
                    'formatted_balance_with_type' => number_format(abs($line->debit_amount - $line->credit_amount), 2) . 
                        ' ' . ($line->debit_amount >= $line->credit_amount ? __('Debit') : __('Credit')),
                    'status' => $journalEntry->status,
                    'formatted_status' => ucfirst($journalEntry->status),
                    'created_by' => $journalEntry->creator ? $journalEntry->creator->name : 'Unknown',
                    'posted_by' => $journalEntry->poster ? $journalEntry->poster->name : null,
                    'created_at' => $line->created_at,
                ];
            });
            
            return response()->json([
                'data' => $transformedData,
                'total' => $journalEntryLines->total(),
                'per_page' => $journalEntryLines->perPage(),
                'current_page' => $journalEntryLines->currentPage(),
                'last_page' => $journalEntryLines->lastPage(),
                'from' => $journalEntryLines->firstItem(),
                'to' => $journalEntryLines->lastItem(),
            ]);
            
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error loading journal entries',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

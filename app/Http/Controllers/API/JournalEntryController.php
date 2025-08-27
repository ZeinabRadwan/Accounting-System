<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\JournalEntryResource;
use App\Models\JournalEntry;
use App\Models\ChartOfAccount;
use App\Services\BusinessTransactionJournalService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Exception;

class JournalEntryController extends Controller
{
    protected $journalService;

    public function __construct(BusinessTransactionJournalService $journalService)
    {
        $this->journalService = $journalService;
        
        // Define middleware for permissions
        $this->middleware('can:journal-entry-list', ['only' => ['index', 'search', 'getAll']]);
        $this->middleware('can:journal-entry-create', ['only' => ['create', 'store']]);
        $this->middleware('can:journal-entry-view', ['only' => ['show']]);
        $this->middleware('can:journal-entry-edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:journal-entry-delete', ['only' => ['destroy']]);
        $this->middleware('can:journal-entry-post', ['only' => ['post', 'void']]);
    }

    /**
     * Display a listing of journal entries
     */
    public function index(Request $request)
    {
        $perPage = $request->perPage ?? 10;
        
        $journalEntries = JournalEntry::with(['lines.chartOfAccount.type', 'creator', 'poster'])
            ->latest()
            ->paginate($perPage);
            
        return JournalEntryResource::collection($journalEntries);
    }

    /**
     * Get all journal entries (without pagination)
     */
    public function getAll()
    {
        try {
            $journalEntries = JournalEntry::with(['lines.chartOfAccount.type', 'creator', 'poster'])
                ->orderBy('entry_date', 'desc')
                ->orderBy('created_at', 'desc')
                ->get();
                
            return response()->json([
                'data' => $journalEntries
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error loading journal entries',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created journal entry
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'entry_date' => 'required|date',
                'reference' => 'nullable|string|max:255',
                'description' => 'required|string|max:500',
                'lines' => 'required|array|min:2',
                'lines.*.chart_of_account_id' => 'required|exists:chart_of_accounts,id',
                'lines.*.debit_amount' => 'required_without:lines.*.credit_amount|numeric|min:0',
                'lines.*.credit_amount' => 'required_without:lines.*.debit_amount|numeric|min:0',
                'lines.*.description' => 'nullable|string|max:255',
                'lines.*.reference' => 'nullable|string|max:255',
                'status' => 'nullable|in:draft,posted',
            ]);

            $data = $request->all();
            $data['status'] = $data['status'] ?? 'draft';
            
            // Handle empty reference string - convert to null if empty
            if (isset($data['reference']) && $data['reference'] === '') {
                $data['reference'] = null;
            }
            
            $journalEntry = $this->journalService->createCustomJournalEntry($data, Auth::id());

            return response()->json([
                'message' => 'Journal entry created successfully',
                'data' => new JournalEntryResource($journalEntry)
            ], 201);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error creating journal entry',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified journal entry
     */
    public function show($id)
    {
        try {
            $journalEntry = JournalEntry::with([
                'lines.chartOfAccount.type', 
                'creator', 
                'poster',
                'accountTransactions'
            ])->findOrFail($id);

            return new JournalEntryResource($journalEntry);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Journal entry not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Update the specified journal entry
     */
    public function update(Request $request, $id)
    {
        try {
            $journalEntry = JournalEntry::findOrFail($id);

            // Only allow editing draft entries
            if ($journalEntry->status !== 'draft') {
                return response()->json([
                    'message' => 'Only draft journal entries can be edited'
                ], 422);
            }

            $request->validate([
                'entry_date' => 'required|date',
                'reference' => 'nullable|string|max:255',
                'description' => 'required|string|max:500',
                'lines' => 'required|array|min:2',
                'lines.*.chart_of_account_id' => 'required|exists:chart_of_accounts,id',
                'lines.*.debit_amount' => 'required_without:lines.*.credit_amount|numeric|min:0',
                'lines.*.credit_amount' => 'required_without:lines.*.debit_amount|numeric|min:0',
                'lines.*.description' => 'nullable|string|max:255',
                'lines.*.reference' => 'nullable|string|max:255',
            ]);

            DB::transaction(function () use ($journalEntry, $request) {
                // Delete existing lines
                $journalEntry->lines()->delete();

                // Handle empty reference string - convert to null if empty
                $reference = $request->reference === '' ? null : $request->reference;

                // Update journal entry
                $journalEntry->update([
                    'entry_date' => $request->entry_date,
                    'reference' => $reference,
                    'description' => $request->description,
                ]);

                // Recalculate totals
                $totalDebits = collect($request->lines)->sum('debit_amount');
                $totalCredits = collect($request->lines)->sum('credit_amount');

                $journalEntry->update([
                    'total_debit' => $totalDebits,
                    'total_credit' => $totalCredits,
                ]);

                // Create new lines
                foreach ($request->lines as $index => $line) {
                    $journalEntry->lines()->create([
                        'chart_of_account_id' => $line['chart_of_account_id'],
                        'debit_amount' => $line['debit_amount'] ?? 0,
                        'credit_amount' => $line['credit_amount'] ?? 0,
                        'description' => $line['description'] ?? '',
                        'reference' => $line['reference'] ?? '',
                        'line_number' => $index + 1,
                    ]);
                }
            });

            $journalEntry->load(['lines.chartOfAccount.type', 'creator', 'poster']);

            return response()->json([
                'message' => 'Journal entry updated successfully',
                'data' => new JournalEntryResource($journalEntry)
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error updating journal entry',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Post a journal entry
     */
    public function post($id)
    {
        try {
            $journalEntry = JournalEntry::findOrFail($id);
            $journalEntry->post();
            
            $journalEntry->load(['lines.chartOfAccount.type', 'creator', 'poster']);

            return response()->json([
                'message' => 'Journal entry posted successfully',
                'data' => new JournalEntryResource($journalEntry)
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error posting journal entry',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    /**
     * Void a journal entry
     */
    public function void($id)
    {
        try {
            $journalEntry = JournalEntry::findOrFail($id);
            $journalEntry->void();
            
            $journalEntry->load(['lines.chartOfAccount.type', 'creator', 'poster']);

            return response()->json([
                'message' => 'Journal entry voided successfully',
                'data' => new JournalEntryResource($journalEntry)
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error voiding journal entry',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    /**
     * Remove the specified journal entry
     */
    public function destroy($id)
    {
        try {
            $journalEntry = JournalEntry::findOrFail($id);

            // Only allow deleting draft entries
            if ($journalEntry->status !== 'draft') {
                return response()->json([
                    'message' => 'Only draft journal entries can be deleted'
                ], 422);
            }

            $journalEntry->delete();

            return response()->json([
                'message' => 'Journal entry deleted successfully'
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error deleting journal entry',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Search journal entries
     */
    public function search(Request $request)
    {
        try {
            $term = $request->term;
            $query = JournalEntry::with(['lines.chartOfAccount.type', 'creator', 'poster']);

            if ($request->startDate && $request->endDate) {
                $query->whereBetween('entry_date', [$request->startDate, $request->endDate]);
            }

            if ($request->status) {
                $query->where('status', $request->status);
            }

            if ($request->source_type) {
                $query->where('source_type', $request->source_type);
            }

            if ($term) {
                $query->where(function ($q) use ($term) {
                    $q->where('entry_number', 'LIKE', "%{$term}%")
                      ->orWhere('reference', 'LIKE', "%{$term}%")
                      ->orWhere('description', 'LIKE', "%{$term}%");
                });
            }

            $perPage = $request->perPage ?? 10;
            $journalEntries = $query->latest()->paginate($perPage);

            return JournalEntryResource::collection($journalEntries);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error searching journal entries',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get chart of accounts for dropdown
     */
    public function getChartOfAccounts()
    {
        try {
            $accounts = ChartOfAccount::with('type')
                ->where('is_active', true)
                ->orderBy('code')
                ->get()
                ->map(function ($account) {
                    return [
                        'id' => $account->id,
                        'code' => $account->code,
                        'name' => $account->name,
                        'type' => $account->type ? $account->type->name : 'Unknown'
                    ];
                });

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
     * Get trial balance
     */
    public function getTrialBalance(Request $request)
    {
        try {
            $startDate = $request->startDate ?? now()->startOfMonth();
            $endDate = $request->endDate ?? now()->endOfMonth();

            $trialBalance = DB::table('journal_entries')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->join('chart_of_accounts', 'journal_entry_lines.chart_of_account_id', '=', 'chart_of_accounts.id')
                ->join('chart_of_account_types', 'chart_of_accounts.type_id', '=', 'chart_of_account_types.id')
                ->where('journal_entries.status', 'posted')
                ->whereBetween('journal_entries.entry_date', [$startDate, $endDate])
                ->select(
                    'chart_of_accounts.id',
                    'chart_of_accounts.code',
                    'chart_of_accounts.name',
                    'chart_of_account_types.name as type_name',
                    DB::raw('SUM(journal_entry_lines.debit_amount) as total_debits'),
                    DB::raw('SUM(journal_entry_lines.credit_amount) as total_credits'),
                    DB::raw('SUM(journal_entry_lines.debit_amount - journal_entry_lines.credit_amount) as net_balance')
                )
                ->groupBy('chart_of_accounts.id', 'chart_of_accounts.code', 'chart_of_accounts.name', 'chart_of_account_types.name')
                ->orderBy('chart_of_account_types.order')
                ->orderBy('chart_of_accounts.code')
                ->get();

            return response()->json([
                'data' => $trialBalance,
                'start_date' => $startDate,
                'end_date' => $endDate
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error generating trial balance',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

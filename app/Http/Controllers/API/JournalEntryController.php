<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\JournalEntryResource;
use App\Models\ChartOfAccount;
use App\Models\JournalEntry;
use App\Services\BusinessTransactionJournalService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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

        $query = JournalEntry::with(['lines.chartOfAccount.type.translations', 'lines.chartOfAccount.translations', 'lines.costCenter', 'lines.analyticalAccount', 'creator', 'poster', 'branch']);

        // Apply all column filters
        $this->applyFilters($query, $request);

        $journalEntries = $query->latest()->paginate($perPage);

        return JournalEntryResource::collection($journalEntries);
    }

    /**
     * Apply filters to query
     */
    protected function applyFilters($query, Request $request)
    {
        // Entry number filter
        if ($request->has('entry_number') && $request->entry_number) {
            $query->where('entry_number', 'LIKE', "%{$request->entry_number}%");
        }

        // Date range filter
        if ($request->has('date_from') && $request->date_from) {
            $query->where('entry_date', '>=', $request->date_from);
        }
        if ($request->has('date_to') && $request->date_to) {
            $query->where('entry_date', '<=', $request->date_to);
        }

        // Branch filter
        if ($request->has('branch') && $request->branch) {
            $query->where('branch_id', $request->branch);
        }

        // Entry type filter
        if ($request->has('type') && $request->type) {
            $query->where('entry_type', $request->type);
        }

        // Reference filter
        if ($request->has('reference') && $request->reference) {
            $query->where('reference', 'LIKE', "%{$request->reference}%");
        }

        // Status filter
        if ($request->has('status') && $request->status) {
            $query->where('status', $request->status);
        }

        // Created by filter
        if ($request->has('created_by') && $request->created_by) {
            $query->whereHas('creator', function ($q) use ($request) {
                $q->where('name', 'LIKE', "%{$request->created_by}%");
            });
        }

        // Notes filter
        if ($request->has('notes') && $request->notes) {
            $query->where('notes', 'LIKE', "%{$request->notes}%");
        }

        // Attachment filter (search in filename)
        if ($request->has('attachment') && $request->attachment) {
            $query->where('attachment', 'LIKE', "%{$request->attachment}%");
        }

        // Account filter (filter by chart of account in lines)
        if ($request->has('account') && $request->account) {
            $query->whereHas('lines', function ($q) use ($request) {
                $q->where('chart_of_account_id', $request->account);
            });
        }

        // Debit amount filter
        if ($request->has('debit') && $request->debit) {
            $query->whereHas('lines', function ($q) use ($request) {
                $q->where('debit_amount', '>=', $request->debit);
            });
        }

        // Credit amount filter
        if ($request->has('credit') && $request->credit) {
            $query->whereHas('lines', function ($q) use ($request) {
                $q->where('credit_amount', '>=', $request->credit);
            });
        }

        // Cost center filter
        if ($request->has('cost_center') && $request->cost_center) {
            $query->whereHas('lines', function ($q) use ($request) {
                $q->whereHas('costCenter', function ($costCenterQuery) use ($request) {
                    $costCenterQuery->where(function ($cc) use ($request) {
                        $cc->where('name', 'LIKE', "%{$request->cost_center}%")
                            ->orWhere('code', 'LIKE', "%{$request->cost_center}%");
                    });
                });
            });
        }

        // Description filter (search in entry description or line descriptions)
        if ($request->has('description') && $request->description) {
            $query->where(function ($q) use ($request) {
                $q->where('description', 'LIKE', "%{$request->description}%")
                    ->orWhereHas('lines', function ($lineQuery) use ($request) {
                        $lineQuery->where('description', 'LIKE', "%{$request->description}%");
                    });
            });
        }

        // Invoice filter (filter by invoice number via reference or source_id)
        if ($request->has('invoice') && $request->invoice) {
            $invoiceNumber = $request->invoice;
            $invoiceModel = \App\Models\Invoice::class;

            // Get invoice IDs that match the invoice number
            $invoiceIds = \App\Models\Invoice::where('invoice_no', 'LIKE', "%{$invoiceNumber}%")
                ->pluck('id')
                ->toArray();

            $query->where(function ($q) use ($invoiceNumber, $invoiceModel, $invoiceIds) {
                // Match by reference (invoice number or invoice number-COGS)
                $q->where('reference', 'LIKE', "%{$invoiceNumber}%");

                // Also match by source_id if source_type is Invoice and invoice IDs were found
                if (! empty($invoiceIds)) {
                    $q->orWhere(function ($subQ) use ($invoiceModel, $invoiceIds) {
                        $subQ->where('source_type', $invoiceModel)
                            ->whereIn('source_id', $invoiceIds);
                    });
                }
            });
        }
    }

    /**
     * Get all journal entries (without pagination)
     */
    public function getAll()
    {
        try {
            $query = JournalEntry::with(['lines.chartOfAccount.type', 'lines.costCenter', 'lines.analyticalAccount', 'creator', 'poster', 'branch'])
                ->orderBy('entry_date', 'desc')
                ->orderBy('created_at', 'desc');

            // Optional branch filter from request
            $request = request();
            if ($request->has('branch_id') && $request->branch_id) {
                $query->where('branch_id', $request->branch_id);
            }

            $journalEntries = $query->get();

            return response()->json([
                'data' => $journalEntries,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error loading journal entries',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a newly created journal entry
     */
    public function store(Request $request)
    {
        try {
            // Check if cost centers are required
            $costCentersRequired = config('accounting.cost_centers.required_for_journal', false);

            $request->validate([
                'entry_date' => 'required|date',
                'entry_type' => 'nullable|string|in:manual,opening_entry,payment_voucher,receipt_voucher,transfer_voucher,pos_sales,sales,sales_returns,purchases,purchase_returns,credit_note,debit_note,inventory_transfer,inventory_adjustment',
                'reference' => 'nullable|string|max:255',
                'description' => 'required|string|max:500',
                'notes' => 'nullable|string',
                'attachment' => 'nullable|file|max:10240', // 10MB max, allow common file types
                'lines' => 'required|string', // JSON string from FormData
                'branch_id' => 'required|integer|exists:branches,id',
                'status' => 'nullable|in:draft,posted',
            ]);

            $data = $request->all();
            $data['status'] = $data['status'] ?? 'draft';

            // Parse lines from JSON string if it's a string
            if (isset($data['lines']) && is_string($data['lines'])) {
                $decodedLines = json_decode($data['lines'], true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    $data['lines'] = $decodedLines;
                } else {
                    return response()->json([
                        'message' => 'Invalid lines data format',
                        'error' => 'Lines must be valid JSON',
                    ], 422);
                }
            }

            // Validate lines structure
            if (! isset($data['lines']) || ! is_array($data['lines']) || count($data['lines']) < 2) {
                return response()->json([
                    'message' => 'Journal entry must have at least 2 lines',
                    'error' => 'Invalid lines data',
                ], 422);
            }

            // Note: Foreign key constraints in the database enforce that:
            // - chart_of_account_id must exist in chart_of_accounts table
            // - analytical_account_id must exist in analytical_accounts table
            // These are separate columns with separate foreign keys, so no additional validation is needed.

            // Set branch from request (already validated as required)
            $data['branch_id'] = (int) $data['branch_id'];

            // Handle empty reference string - convert to null if empty
            if (isset($data['reference']) && $data['reference'] === '') {
                $data['reference'] = null;
            }

            // Handle file upload
            if ($request->hasFile('attachment')) {
                $file = $request->file('attachment');
                $extension = $file->getClientOriginalExtension();
                $attachmentPath = store_in_tenant('journal-entries/attachments', $file, $extension);
                $data['attachment'] = $attachmentPath;
            } else {
                $data['attachment'] = null;
            }

            $journalEntry = $this->journalService->createCustomJournalEntry($data, Auth::id());

            return response()->json([
                'message' => 'Journal entry created successfully',
                'data' => new JournalEntryResource($journalEntry),
            ], 201);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error creating journal entry',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified journal entry
     */
    public function show($id)
    {
        try {
            $query = JournalEntry::with([
                'lines.chartOfAccount.type.translations',
                'lines.chartOfAccount.translations',
                'lines.costCenter',
                'lines.analyticalAccount',
                'creator',
                'poster',
                'branch',
                'accountTransactions',
            ]);

            $journalEntry = $query->findOrFail($id);

            return new JournalEntryResource($journalEntry);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Journal entry not found',
                'error' => $e->getMessage(),
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
                    'message' => 'Only draft journal entries can be edited',
                ], 422);
            }

            $request->validate([
                'entry_date' => 'required|date',
                'entry_type' => 'nullable|string',
                'reference' => 'nullable|string|max:255',
                'description' => 'required|string|max:500',
                'notes' => 'nullable|string',
                'attachment' => 'nullable|string|max:255',
                'lines' => 'required|array|min:2',
                'lines.*.chart_of_account_id' => 'required|exists:chart_of_accounts,id',
                'lines.*.debit_amount' => 'required_without:lines.*.credit_amount|numeric|min:0',
                'lines.*.credit_amount' => 'required_without:lines.*.debit_amount|numeric|min:0',
                'lines.*.description' => 'nullable|string|max:255',
                'lines.*.reference' => 'nullable|string|max:255',
            ]);

            // Note: Foreign key constraints in the database enforce that:
            // - chart_of_account_id must exist in chart_of_accounts table
            // - analytical_account_id must exist in analytical_accounts table
            // These are separate columns with separate foreign keys, so no additional validation is needed.

            DB::transaction(function () use ($journalEntry, $request) {
                // Delete existing lines
                $journalEntry->lines()->delete();

                // Handle empty reference string - convert to null if empty
                $reference = $request->reference === '' ? null : $request->reference;

                // Update journal entry
                $journalEntry->update([
                    'entry_date' => $request->entry_date,
                    'entry_type' => $request->entry_type,
                    'reference' => $reference,
                    'description' => $request->description,
                    'notes' => $request->notes,
                    'attachment' => $request->attachment,
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
                'data' => new JournalEntryResource($journalEntry),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error updating journal entry',
                'error' => $e->getMessage(),
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
                'data' => new JournalEntryResource($journalEntry),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error posting journal entry',
                'error' => $e->getMessage(),
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
                'data' => new JournalEntryResource($journalEntry),
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error voiding journal entry',
                'error' => $e->getMessage(),
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
                    'message' => 'Only draft journal entries can be deleted',
                ], 422);
            }

            $journalEntry->delete();

            return response()->json([
                'message' => 'Journal entry deleted successfully',
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error deleting journal entry',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Search journal entries
     */
    public function search(Request $request)
    {
        try {
            $query = JournalEntry::with(['lines.chartOfAccount.type.translations', 'lines.chartOfAccount.translations', 'lines.costCenter', 'lines.analyticalAccount', 'creator', 'poster', 'branch']);

            // Apply all filters (same as index)
            $this->applyFilters($query, $request);

            // Legacy search term support
            if ($request->term) {
                $term = $request->term;
                $query->where(function ($q) use ($term) {
                    $q->where('entry_number', 'LIKE', "%{$term}%")
                        ->orWhere('reference', 'LIKE', "%{$term}%")
                        ->orWhere('description', 'LIKE', "%{$term}%");
                });
            }

            // Legacy date range support
            if ($request->startDate && $request->endDate) {
                $query->whereBetween('entry_date', [$request->startDate, $request->endDate]);
            }

            // Legacy status support
            if ($request->status && ! $request->has('status')) {
                $query->where('status', $request->status);
            }

            $perPage = $request->perPage ?? 10;
            $journalEntries = $query->latest()->paginate($perPage);

            return JournalEntryResource::collection($journalEntries);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error searching journal entries',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get next entry number
     */
    public function getNextEntryNumber()
    {
        try {
            $nextNumber = JournalEntry::generateEntryNumber();

            return response()->json([
                'next_entry_number' => $nextNumber,
                'formatted_entry_number' => 'JE-'.$nextNumber,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error generating entry number',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get chart of accounts for dropdown
     */
    public function getChartOfAccounts(Request $request)
    {
        try {
            $locale = $request->get('locale', app()->getLocale());
            $branchId = Auth::user()->default_branch_id ?? null;

            $accounts = ChartOfAccount::with(['type', 'translations'])
                ->where('is_active', true)
                ->forBranch($branchId)
                ->orderBy('code')
                ->get()
                ->map(function ($account) use ($locale) {
                    // Get translated name
                    $translatedName = $account->getTranslatedField('name', $locale);
                    if (empty($translatedName)) {
                        $translatedName = $account->name;
                    }

                    // Get translated type name
                    $typeName = 'Unknown';
                    if ($account->type) {
                        $typeName = method_exists($account->type, 'getTranslatedField')
                            ? $account->type->getTranslatedField('name', $locale)
                            : $account->type->name;
                        if (empty($typeName)) {
                            $typeName = $account->type->name;
                        }
                    }

                    return [
                        'id' => $account->id,
                        'code' => $account->code,
                        'name' => $translatedName,
                        'original_name' => $account->name,
                        'type' => $typeName,
                    ];
                });

            return response()->json([
                'data' => $accounts,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error loading chart of accounts',
                'error' => $e->getMessage(),
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

            $query = DB::table('journal_entries')
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
                ->orderBy('chart_of_accounts.code');

            // Optional branch filter from request
            if ($request->has('branch_id') && $request->branch_id) {
                $query->where('journal_entries.branch_id', $request->branch_id);
            }

            $trialBalance = $query->get();

            return response()->json([
                'data' => $trialBalance,
                'start_date' => $startDate,
                'end_date' => $endDate,
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error generating trial balance',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}

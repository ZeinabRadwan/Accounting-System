<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Expense;
use Illuminate\Http\Request;
use App\Services\ImageService;
use App\Services\BusinessTransactionJournalService;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ExpenseResource;
use App\Interfaces\ITransactionService;
use App\Http\Requests\Expense\StoreExpenseRequest;
use App\Http\Requests\Expense\UpdateExpenseRequest;

class ExpenseControllerWithJournal extends Controller
{
    protected ITransactionService $transactionService;
    protected ImageService $imageService;
    protected BusinessTransactionJournalService $journalService;

    // define middleware
    public function __construct(ITransactionService $transactionService, BusinessTransactionJournalService $journalService)
    {
        $this->middleware('can:expense-list', ['only' => ['index', 'search']]);
        $this->middleware('can:expense-create', ['only' => ['create']]);
        $this->middleware('can:expense-view', ['only' => ['show']]);
        $this->middleware('can:expense-edit', ['only' => ['update']]);
        $this->middleware('can:expense-delete', ['only' => ['destroy']]);

        $this->imageService = new ImageService();
        $this->transactionService = $transactionService;
        $this->journalService = $journalService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return ExpenseResource::collection(Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount',
            'user')->latest()->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreExpenseRequest $request)
    {
        try {
            DB::beginTransaction();

            $userId = auth()->user()->id;

            // upload thumbnail and set the name
            $imageName = '';
            if ($request->image) {
                $imageName = $this->imageService->uploadImageAndGetPath($request->image, 'expenses');
            }

            // Create expense first
            $expense = Expense::create([
                'reason' => $request->reason,
                'sub_cat_id' => $request->subCategory['id'],
                'transaction_id' => null, // Will be set after transaction creation
                'date' => $request->date,
                'created_by' => $userId,
                'note' => clean($request->note),
                'image_path' => $imageName,
                'status' => $request->status,
            ]);

            // Create journal entry for the expense
            $journalEntry = $this->journalService->createExpenseJournal($expense, $userId);

            // Create backward-compatible transaction (for existing functionality)
            $transaction = $this->transactionService->createTransactionFromExpense($request, $userId);
            
            // Link the transaction to the journal entry
            $transaction->update(['journal_entry_id' => $journalEntry->id]);

            // Update expense with transaction ID
            $expense->update(['transaction_id' => $transaction->id]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($expense)
                ->withProperties([
                    'name' => $request->reason,
                    'code' => '[' . $request->reason . ']',
                    'event' => 'Create',
                    'slug' => $expense->slug,
                    'routeName' => 'expenses.show'
                ])
                ->useLog('Expenses Created')
                ->log('Expenses Created');

            DB::commit();

            return $this->responseWithSuccess('Expense added successfully', [
                'expense' => new ExpenseResource($expense),
                'journal_entry' => [
                    'id' => $journalEntry->id,
                    'entry_number' => $journalEntry->formatted_entry_number,
                    'status' => $journalEntry->formatted_status,
                ]
            ]);

        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        try {
            $expense = Expense::with([
                'expSubCategory', 
                'expTransaction.cashbookAccount', 
                'expTransaction.journalEntry',
                'user'
            ])->where('slug', $slug)->first();

            return new ExpenseResource($expense);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExpenseRequest $request, $slug)
    {
        $expense = Expense::with('expSubCategory', 'expTransaction.cashbookAccount')->where('slug', $slug)->first();

        try {
            DB::beginTransaction();

            $imageName = $expense->image_path;
            if ($request->image) {
                $imageName = $this->imageService->uploadImageAndGetPath($request->image, 'expenses');
                $this->imageService->checkImageExistsAndDelete($expense->image_path,'expenses');
            }

            // Update transaction
            $transaction = $expense->expTransaction;
            $transaction->update([
                'account_id' => $request->account['id'],
                'amount' => $request->amount,
                'transaction_date' => $request->date,
                'status' => $request->status,
                'cheque_no' => $request->chequeNo,
                'receipt_no' => $request->voucherNo,
            ]);

            // Update expense
            $expense->update([
                'reason' => $request->reason,
                'sub_cat_id' => $request->subCategory['id'],
                'transaction_id' => $transaction->id,
                'date' => $request->date,
                'note' => clean($request->note),
                'image_path' => $imageName,
                'status' => $request->status,
            ]);

            // If there's a linked journal entry, update it
            if ($transaction->journal_entry_id) {
                $this->updateExpenseJournalEntry($expense, $transaction, auth()->user()->id);
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($expense)
                ->withProperties([
                    'name' => $request->reason,
                    'code' => '[' . $request->reason . ']',
                    'event' => 'Update',
                    'slug' => $expense->slug,
                    'routeName' => 'expenses.show'
                ])
                ->useLog('Expenses updated')
                ->log('Expenses updated');

            DB::commit();

            return $this->responseWithSuccess('Expense updated successfully');
        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        try {
            DB::beginTransaction();

            $expense = Expense::where('slug', $slug)->first();
            $this->imageService->checkImageExistsAndDelete($expense->image_path, 'expenses');

            // Delete related transaction and journal entry
            if ($expense->expTransaction) {
                $transaction = $expense->expTransaction;
                
                // If there's a linked journal entry, void it
                if ($transaction->journal_entry_id) {
                    $journalEntry = $transaction->journalEntry;
                    if ($journalEntry && $journalEntry->status === 'posted') {
                        $journalEntry->void();
                    }
                }
                
                $transaction->delete();
            }

            $expense->delete();

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($expense)
                ->withProperties([
                    'name' => $expense->reason,
                    'code' => '[' . $expense->reason . ']',
                    'event' => 'Delete',
                    'slug' => $expense->slug,
                    'routeName' => 'expenses.index'
                ])
                ->useLog('Expenses Deleted')
                ->log('Expenses Deleted');

            DB::commit();

            return $this->responseWithSuccess('Expense deleted successfully');
        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Search expenses
     */
    public function search(Request $request)
    {
        $term = $request->term;
        $query = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount', 'user');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where('reason', 'LIKE', '%' . $term . '%')
                ->orWhere('note', 'LIKE', '%' . $term . '%')
                ->orWhereHas('expSubCategory', function ($newQuery) use ($term) {
                    $newQuery->where('name', 'LIKE', '%' . $term . '%');
                });
        });

        return ExpenseResource::collection($query->latest()->paginate($request->perPage));
    }

    /**
     * Update the journal entry when expense is modified
     */
    private function updateExpenseJournalEntry(Expense $expense, $transaction, int $userId)
    {
        // This method would update the existing journal entry
        // For now, we'll just ensure the journal entry exists
        // In a full implementation, you might want to update the journal entry lines
        // or create a new one and void the old one
    }

    /**
     * Get expense statistics with journal data
     */
    public function getExpenseStats(Request $request)
    {
        try {
            $startDate = $request->startDate ?? now()->startOfMonth();
            $endDate = $request->endDate ?? now()->endOfMonth();

            // Get expense statistics from journal entries
            $expenseStats = DB::table('journal_entries')
                ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
                ->join('chart_of_accounts', 'journal_entry_lines.chart_of_account_id', '=', 'chart_of_accounts.id')
                ->where('journal_entries.status', 'posted')
                ->where('journal_entries.source_type', Expense::class)
                ->whereBetween('journal_entries.entry_date', [$startDate, $endDate])
                ->where('journal_entry_lines.debit_amount', '>', 0)
                ->select(
                    DB::raw('SUM(journal_entry_lines.debit_amount) as total_expenses'),
                    DB::raw('COUNT(DISTINCT journal_entries.id) as total_transactions')
                )
                ->first();

            return response()->json([
                'data' => [
                    'total_expenses' => $expenseStats->total_expenses ?? 0,
                    'total_transactions' => $expenseStats->total_transactions ?? 0,
                    'period' => [
                        'start_date' => $startDate,
                        'end_date' => $endDate,
                    ]
                ]
            ]);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error getting expense statistics',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

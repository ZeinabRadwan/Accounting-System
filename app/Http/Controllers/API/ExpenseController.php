<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Expense;
use App\Models\ExpenseJournal;
use App\Services\BusinessTransactionJournalService;
use Illuminate\Http\Request;
use App\Services\ImageService;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ExpenseResource;
use App\Interfaces\ITransactionService;
use App\Http\Requests\Expense\StoreExpenseRequest;
use App\Http\Requests\Expense\UpdateExpenseRequest;
use Illuminate\Support\Facades\Log;

class ExpenseController extends Controller
{

    protected ITransactionService $transactionService;
    protected ImageService $imageService;

    // define middleware
    public function __construct(ITransactionService $transactionService)
    {
        $this->middleware('can:expense-list', ['only' => ['index', 'search']]);
        $this->middleware('can:expense-create', ['only' => ['create']]);
        $this->middleware('can:expense-view', ['only' => ['show']]);
        $this->middleware('can:expense-edit', ['only' => ['update']]);
        $this->middleware('can:expense-delete', ['only' => ['destroy']]);

        $this->imageService = new ImageService();
        $this->transactionService = $transactionService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $query = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount', 'user');
        
        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        if ((int) $user->account_role !== 1) {
            $branchIds = $this->getUserBranchIds($user);
            $query->whereIn('branch_id', $branchIds);
        }
        
        return ExpenseResource::collection($query->latest()->paginate($request->perPage));
    }
    
    private function getUserBranchIds($user)
    {
        // Get branch IDs from branch_user pivot table
        $branchIds = DB::table('branch_user')
            ->where('user_id', $user->id)
            ->pluck('branch_id')
            ->toArray();
            
        // If no branches assigned, fallback to default_branch_id
        if (empty($branchIds) && $user->default_branch_id) {
            $branchIds = [$user->default_branch_id];
        }
        
        return $branchIds;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreExpenseRequest $request)
    {

        try {
            DB::beginTransaction();

            // upload thumbnail and set the name
            $imageName = '';
            if ($request->image) {
                $imageName = $this->imageService->uploadImageAndGetPath($request->image, 'expenses');
            }

            $userId = auth()->user()->id;

            // store transaction
            $transaction = $this->transactionService->createTransactionFromExpense($request, $userId);

            // Debug: Log the amount being saved
            Log::info('Creating expense with amount: ' . $request->amount);
            
            // create expense
           $expense = Expense::create([
                'reason' => $request->reason,
                'sub_cat_id' => $request->subCategory['id'],
                'transaction_id' => $transaction->id,
                'amount' => $request->amount,
                'expense_account_id' => $request->expenseAccount ? $request->expenseAccount['id'] : null,
                'date' => $request->date,
                'created_by' => $userId,
                'note' => clean($request->note),
                'image_path' => $imageName,
                'status' => $request->status,
            ]);
            
            // Debug: Log the created expense amount
            Log::info('Created expense with ID: ' . $expense->id . ', amount: ' . $expense->amount);

            // Create journal entry for expense
            try {
                $journalService = new BusinessTransactionJournalService();
                $journalEntry = $journalService->createExpenseJournal($expense, $userId);
            } catch (\Exception $e) {
                // Log the error and fail the expense creation
                Log::error('Failed to create journal entry for expense: ' . $e->getMessage());
                DB::rollback();
                return $this->responseWithError('Failed to create journal entry: ' . $e->getMessage());
            }

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

            return $this->responseWithSuccess('Expense added successfully');
        } catch (Exception $e) {
            DB::rollback();
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
            $expense = Expense::with('expSubCategory', 'expTransaction.cashbookAccount', 'user')->where('slug',
                $slug)->first();

            return new ExpenseResource($expense);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get expense accounts from account routing settings.
     *
     * @return \Illuminate\Http\Response
     */
    public function getExpenseAccounts()
    {
        try {
            // Get the expenses account routing setting
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'expenses_account')
                ->where('is_active', true)
                ->with(['mainAccount.type', 'parentAccount.type', 'childAccounts.type', 'parentChildAccounts.type'])
                ->first();
            
            if (!$routingSetting) {
                return $this->responseWithError('Expense account routing is not configured. Please configure it in Accounting Settings.');
            }
            
            if (!$routingSetting->main_account_id && !$routingSetting->parent_account_id) {
                return $this->responseWithError('Expense account routing is not properly configured. Please set a main account.');
            }
            
            // Get accounts from the routing setup (main + children)
            $accounts = $routingSetting->getAccountsForDropdown();
            
            return $this->responseWithSuccess('Expense accounts retrieved successfully', [
                'accounts' => $accounts,
                'routing_setting' => [
                    'id' => $routingSetting->id,
                    'setting_name' => $routingSetting->setting_name,
                    'description' => $routingSetting->description,
                    'main_account' => $routingSetting->mainAccount ? [
                        'id' => $routingSetting->mainAccount->id,
                        'name' => $routingSetting->mainAccount->name,
                        'code' => $routingSetting->mainAccount->code
                    ] : null,
                    'parent_account' => $routingSetting->parentAccount ? [
                        'id' => $routingSetting->parentAccount->id,
                        'name' => $routingSetting->parentAccount->name,
                        'code' => $routingSetting->parentAccount->code
                    ] : null
                ]
            ]);
            
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get the journal entry for a specific expense.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getJournalEntry($id)
    {
        try {
            $expense = Expense::with('journalEntry.lines.chartOfAccount')->findOrFail($id);
            
            if (!$expense->journalEntry) {
                return $this->responseWithError('No journal entry found for this expense.');
            }

            return $this->responseWithSuccess('Journal entry retrieved successfully', $expense->journalEntry);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Void the journal entry for a specific expense.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function voidJournalEntry($id)
    {
        try {
            DB::beginTransaction();

            $expense = Expense::with('journalEntry')->findOrFail($id);
            
            if (!$expense->journalEntry) {
                return $this->responseWithError('No journal entry found for this expense.');
            }

            if ($expense->journalEntry->status === 'void') {
                return $this->responseWithError('Journal entry is already voided.');
            }

            // Void the journal entry
            $expense->journalEntry->update([
                'status' => 'void',
                'voided_by' => auth()->user()->id,
                'voided_at' => now(),
                'void_reason' => 'Voided from expense management'
            ]);

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($expense)
                ->withProperties([
                    'name' => $expense->reason,
                    'event' => 'Void Journal Entry',
                    'journal_entry_id' => $expense->journalEntry->id
                ])
                ->useLog('Expense Journal Voided')
                ->log('Expense Journal Entry Voided');

            DB::commit();

            return $this->responseWithSuccess('Journal entry voided successfully');
        } catch (Exception $e) {
            DB::rollback();
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

            // update transaction
            $transaction = $expense->expTransaction;
            $transaction->update([
                'account_id' => $request->account['id'],
                'amount' => $request->amount,
                'transaction_date' => $request->date,
                'status' => $request->status,
                'cheque_no' => $request->chequeNo,
                'receipt_no' => $request->voucherNo,
            ]);

            // update expense
            $expense->update([
                'reason' => $request->reason,
                'sub_cat_id' => $request->subCategory['id'],
                'transaction_id' => $transaction->id,
                'date' => $request->date,
                'note' => clean($request->note),
                'image_path' => $imageName,
                'status' => $request->status,
            ]);

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
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        try {
            DB::beginTransaction();

            $expense = Expense::where('slug', $slug)->first();
            $this->imageService->checkImageExistsAndDelete($expense->image_path, 'expenses');

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($expense)
                ->withProperties([
                    'name' => $expense->reason,
                    'code' => '[' . $expense->reason . ']',
                    'event' => 'Delete'
                ])
                ->useLog('Expenses Deleted')
                ->log('Expenses Deleted');

            $expense->delete();

            DB::commit();

            return $this->responseWithSuccess('Expense deleted successfully');
        } catch (Exception $e) {
            DB::rollback();
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * search resource from storage.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function search(Request $request)
    {
        $term = $request->term;
        $query = Expense::with('expSubCategory.expCategory', 'expTransaction.cashbookAccount', 'user');

        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        if ((int) $user->account_role !== 1) {
            $branchIds = $this->getUserBranchIds($user);
            $query->whereIn('branch_id', $branchIds);
        }

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where('reason', 'LIKE', '%'.$term.'%')
                ->orWhereHas('expSubCategory', function ($newQuery) use ($term) {
                    $newQuery->where('name', 'LIKE', '%'.$term.'%')
                        ->orWhereHas('expCategory', function ($newQuery) use ($term) {
                            $newQuery->where('name', 'LIKE', '%'.$term.'%');
                        });
                })
                ->orWhereHas('expTransaction', function ($newQuery) use ($term) {
                    $newQuery->where('amount', 'LIKE', '%'.$term.'%')
                        ->orWhereHas('cashbookAccount', function ($newQuery) use ($term) {
                            $newQuery->where('account_number', 'LIKE', '%'.$term.'%');
                        });
                });
        });

        return ExpenseResource::collection($query->latest()->paginate($request->perPage));
    }
}

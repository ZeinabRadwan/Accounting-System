<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AccountTransactionResource;
use App\Models\AccountTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:transaction-history', ['only' => ['allTransactions', 'searchTransactions']]);
    }

    //return all transactions
    public function allTransactions(Request $request)
    {
        $query = AccountTransaction::with('cashbookAccount', 'user');
        
        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        if ((int) $user->account_role !== 1) {
            $branchIds = $this->getUserBranchIds($user);
            $query->whereIn('branch_id', $branchIds);
        }
        
        return AccountTransactionResource::collection($query->latest()->paginate($request->perPage));
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

    // search and return transactions
    public function searchTransactions(Request $request)
    {
        $term = $request->term;
        $query = AccountTransaction::with('cashbookAccount', 'user');

        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        if ((int) $user->account_role !== 1) {
            $branchIds = $this->getUserBranchIds($user);
            $query->whereIn('branch_id', $branchIds);
        }

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('transaction_date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where('reason', 'LIKE', '%'.$term.'%')
                ->orWhere('amount', 'LIKE', '%'.$term.'%')
                ->orWhereHas('cashbookAccount', function ($newQuery) use ($term) {
                    $newQuery->where('bank_name', 'LIKE', '%'.$term.'%')
                        ->orWhere('branch_name', 'LIKE', '%'.$term.'%')
                        ->orWhere('account_number', 'LIKE', '%'.$term.'%');
                });
        });

        return AccountTransactionResource::collection($query->latest()->paginate($request->perPage));
    }
}

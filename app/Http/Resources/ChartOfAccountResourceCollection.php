<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\ChartOfAccount;

class ChartOfAccountResourceCollection extends ResourceCollection
{
    protected $bulkBalances = null;

    public function toArray($request)
    {
        // Get bulk balances for all accounts in the collection
        if ($this->bulkBalances === null) {
            $accountIds = $this->collection->pluck('id')->toArray();
            $this->bulkBalances = ChartOfAccount::getBulkBalancesWithChildren($accountIds);
        }

        return $this->collection->map(function ($account) {
            $balanceData = $this->bulkBalances[$account->id] ?? [
                'debits' => 0,
                'credits' => 0,
                'total_debits' => 0,
                'total_credits' => 0,
                'balance' => 0,
                'total_balance' => 0,
            ];

            return [
                'id' => $account->id,
                'name' => $account->name,
                'code' => $account->code,
                'type_id' => $account->type_id,
                'parent_id' => $account->parent_id,
                'order' => $account->order,
                'is_active' => $account->is_active,
                'created_by' => $account->created_by,
                'created_at' => $account->created_at,
                'updated_at' => $account->updated_at,
                // Debit and Credit information using bulk data
                'debit_amount' => $balanceData['debits'],
                'credit_amount' => $balanceData['credits'],
                'total_debit_amount' => $balanceData['total_debits'],
                'total_credit_amount' => $balanceData['total_credits'],
                'formatted_debit_amount' => number_format($balanceData['debits'], 2),
                'formatted_credit_amount' => number_format($balanceData['credits'], 2),
                'formatted_total_debit_amount' => number_format($balanceData['total_debits'], 2),
                'formatted_total_credit_amount' => number_format($balanceData['total_credits'], 2),
                // Balance information with Debit/Credit labels
                'balance' => $balanceData['balance'],
                'balance_type' => $balanceData['balance'] >= 0 ? 'Debit' : 'Credit',
                'balance_amount' => abs($balanceData['balance']),
                'formatted_balance_with_type' => number_format(abs($balanceData['balance']), 2) . ' ' . ($balanceData['balance'] >= 0 ? 'Debit' : 'Credit'),
                'total_balance' => $balanceData['total_balance'],
                'total_balance_type' => $balanceData['total_balance'] >= 0 ? 'Debit' : 'Credit',
                'total_balance_amount' => abs($balanceData['total_balance']),
                'formatted_total_balance_with_type' => number_format(abs($balanceData['total_balance']), 2) . ' ' . ($balanceData['total_balance'] >= 0 ? 'Debit' : 'Credit'),
                // Keep old formatted fields for backward compatibility
                'formatted_balance' => number_format($balanceData['balance'], 2),
                'formatted_total_balance' => number_format($balanceData['total_balance'], 2),
                // Include relationships
                'type' => $account->whenLoaded('type', function() use ($account) {
                    return [
                        'id' => $account->type->id,
                        'name' => $account->type->name,
                    ];
                }),
                'types' => $account->whenLoaded('type', function() use ($account) {
                    return [
                        'id' => $account->type->id,
                        'name' => $account->type->name,
                    ];
                }),
                'parent' => $account->whenLoaded('parent', function() use ($account) {
                    return [
                        'id' => $account->parent->id,
                        'name' => $account->parent->name,
                    ];
                }),
            ];
        });
    }
}

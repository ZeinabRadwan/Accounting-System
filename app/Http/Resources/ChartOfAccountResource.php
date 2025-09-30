<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;

class ChartOfAccountResource extends JsonResource
{
    protected static $bulkBalances = null;

    public function toArray($request)
    {
        // Use individual calculations for single resource
        $debitAmount = $this->getTotalDebits();
        $creditAmount = $this->getTotalCredits();
        $totalDebitAmount = $this->getTotalDebitsIncludingChildren();
        $totalCreditAmount = $this->getTotalCreditsIncludingChildren();
        $balance = $debitAmount - $creditAmount;
        $totalBalance = $totalDebitAmount - $totalCreditAmount;

        return [
            'id' => $this->id,
            'name' => method_exists($this, 'getTranslatedField') ? $this->getTranslatedField('name') : $this->name,
            'code' => $this->code,
            'type_id' => $this->type_id,
            'parent_id' => $this->parent_id,
            'order' => $this->order,
            'is_active' => $this->is_active,
            'created_by' => $this->created_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            // Debit and Credit information
            'debit_amount' => $debitAmount,
            'credit_amount' => $creditAmount,
            'total_debit_amount' => $totalDebitAmount,
            'total_credit_amount' => $totalCreditAmount,
            'formatted_debit_amount' => number_format($debitAmount, 2),
            'formatted_credit_amount' => number_format($creditAmount, 2),
            'formatted_total_debit_amount' => number_format($totalDebitAmount, 2),
            'formatted_total_credit_amount' => number_format($totalCreditAmount, 2),
            // Balance information with Debit/Credit labels
            'balance' => $balance,
            'balance_type' => $balance >= 0 ? 'Debit' : 'Credit',
            'balance_amount' => abs($balance),
            'formatted_balance_with_type' => number_format(abs($balance), 2) . ' ' . ($balance >= 0 ? 'Debit' : 'Credit'),
            'total_balance' => $totalBalance,
            'total_balance_type' => $totalBalance >= 0 ? 'Debit' : 'Credit',
            'total_balance_amount' => abs($totalBalance),
            'formatted_total_balance_with_type' => number_format(abs($totalBalance), 2) . ' ' . ($totalBalance >= 0 ? 'Debit' : 'Credit'),
            // Keep old formatted fields for backward compatibility
            'formatted_balance' => number_format($balance, 2),
            'formatted_total_balance' => number_format($totalBalance, 2),
            // Include relationships (expose as both 'type' and 'types' for compatibility)
            'type' => $this->whenLoaded('type', function() {
                return [
                    'id' => $this->type->id,
                    'name' => $this->type->name,
                ];
            }),
            'types' => $this->whenLoaded('type', function() {
                return [
                    'id' => $this->type->id,
                    'name' => $this->type->name,
                ];
            }),
            'parent' => $this->whenLoaded('parent', function() {
                return [
                    'id' => $this->parent->id,
                    'name' => method_exists($this->parent, 'getTranslatedField') ? $this->parent->getTranslatedField('name') : $this->parent->name,
                ];
            }),
        ];
    }

    /**
     * Get bulk balances for all accounts in the collection
     */
    protected function getBulkBalances()
    {
        // This method should not be called on individual resources
        // The bulk calculation should be handled at the collection level
        return collect();
    }

    /**
     * Reset bulk balances cache (useful for testing)
     */
    public static function resetBulkBalances()
    {
        static::$bulkBalances = null;
    }
}

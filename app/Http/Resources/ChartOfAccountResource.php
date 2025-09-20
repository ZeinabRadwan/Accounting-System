<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChartOfAccountResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'code' => $this->code,
            'type_id' => $this->type_id,
            'parent_id' => $this->parent_id,
            'order' => $this->order,
            'is_active' => $this->is_active,
            'created_by' => $this->created_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            // Debit and Credit information
            'debit_amount' => $this->getTotalDebits(),
            'credit_amount' => $this->getTotalCredits(),
            'total_debit_amount' => $this->getTotalDebitsIncludingChildren(),
            'total_credit_amount' => $this->getTotalCreditsIncludingChildren(),
            'formatted_debit_amount' => number_format($this->getTotalDebits(), 2),
            'formatted_credit_amount' => number_format($this->getTotalCredits(), 2),
            'formatted_total_debit_amount' => number_format($this->getTotalDebitsIncludingChildren(), 2),
            'formatted_total_credit_amount' => number_format($this->getTotalCreditsIncludingChildren(), 2),
            // Balance information with Debit/Credit labels
            'balance' => $this->getBalance(),
            'balance_type' => $this->getBalanceType(),
            'balance_amount' => $this->getBalanceAmount(),
            'formatted_balance_with_type' => $this->getFormattedBalanceWithType(),
            'total_balance' => $this->getTotalBalance(),
            'total_balance_type' => $this->getTotalBalanceType(),
            'total_balance_amount' => $this->getTotalBalanceAmount(),
            'formatted_total_balance_with_type' => $this->getFormattedTotalBalanceWithType(),
            // Keep old formatted fields for backward compatibility
            'formatted_balance' => number_format($this->getBalance(), 2),
            'formatted_total_balance' => number_format($this->getTotalBalance(), 2),
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
                    'name' => $this->parent->name,
                ];
            }),
        ];
    }
}

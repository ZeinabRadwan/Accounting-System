<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class JournalEntryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'entry_number' => $this->entry_number,
            'formatted_entry_number' => $this->formatted_entry_number,
            'entry_date' => $this->entry_date->format('Y-m-d'),
            'reference' => $this->reference,
            'description' => $this->description,
            'total_debit' => (float) $this->total_debit,
            'total_credit' => (float) $this->total_credit,
            'status' => $this->status,
            'formatted_status' => $this->formatted_status,
            'is_balanced' => $this->is_balanced,
            'balance_difference' => $this->balance_difference,
            'created_by' => $this->created_by,
            'posted_by' => $this->posted_by,
            'posted_at' => $this->posted_at ? $this->posted_at->format('Y-m-d H:i:s') : null,
            'source_type' => $this->source_type,
            'source_id' => $this->source_id,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
            
            // Relationships
            'creator' => $this->whenLoaded('creator', function() {
                return [
                    'id' => $this->creator->id,
                    'name' => $this->creator->name,
                    'email' => $this->creator->email,
                ];
            }),
            
            'poster' => $this->whenLoaded('poster', function() {
                return [
                    'id' => $this->poster->id,
                    'name' => $this->poster->name,
                    'email' => $this->poster->email,
                ];
            }),
            
            'lines' => $this->whenLoaded('lines', function() {
                return $this->lines->map(function($line) {
                    return [
                        'id' => $line->id,
                        'chart_of_account_id' => $line->chart_of_account_id,
                        'debit_amount' => (float) $line->debit_amount,
                        'credit_amount' => (float) $line->credit_amount,
                        'amount' => (float) $line->amount,
                        'amount_type' => $line->amount_type,
                        'formatted_amount' => $line->formatted_amount,
                        'description' => $line->description,
                        'reference' => $line->reference,
                        'line_number' => $line->line_number,
                        'account_info' => $line->account_info,
                        'chart_of_account' => $line->whenLoaded('chartOfAccount', function() use ($line) {
                            return [
                                'id' => $line->chartOfAccount->id,
                                'code' => $line->chartOfAccount->code,
                                'name' => $line->chartOfAccount->name,
                                'type' => $line->chartOfAccount->whenLoaded('types', function() use ($line) {
                                    return [
                                        'id' => $line->chartOfAccount->types->id,
                                        'name' => $line->chartOfAccount->types->name,
                                    ];
                                }),
                            ];
                        }),
                    ];
                });
            }),
            
            'account_transactions' => $this->whenLoaded('accountTransactions', function() {
                return $this->accountTransactions->map(function($transaction) {
                    return [
                        'id' => $transaction->id,
                        'account_id' => $transaction->account_id,
                        'reason' => $transaction->reason,
                        'amount' => (float) $transaction->amount,
                        'type' => (int) $transaction->type,
                        'transaction_date' => $transaction->transaction_date,
                        'cheque_no' => $transaction->cheque_no,
                        'receipt_no' => $transaction->receipt_no,
                        'note' => $transaction->note,
                        'status' => (int) $transaction->status,
                    ];
                });
            }),
        ];
    }
}

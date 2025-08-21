<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AccountResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'bankName' => $this->bank_name,
            'branchName' => $this->branch_name,
            'accountNumber' => $this->account_number,
            'label' => $this->bank_name.'['.$this->account_number.']',
            'availableBalance' => round($this->availableBalance(), 2),
            'totalCredits' => round($this->totalCredits(), 2),
            'totalDebits' => round($this->totalDebits(), 2),
            'date' => $this->date,
            'image' => $this->image_path ? global_asset('/images/accounts/'.$this->image_path) : '',
            'chartOfAccountId' => $this->chart_of_account_id,
            'chartOfAccount' => $this->whenLoaded('chartOfAccount', function() {
                return [
                    'id' => $this->chartOfAccount->id,
                    'name' => $this->chartOfAccount->name,
                    'code' => $this->chartOfAccount->code,
                    'type' => $this->chartOfAccount->type ? $this->chartOfAccount->type->name : null
                ];
            }),
            'note' => $this->note,
            'status' => (int) $this->status,
        ];
    }
}

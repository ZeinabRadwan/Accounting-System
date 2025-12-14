<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentMethodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'code' => $this->code,
            'slug' => $this->slug,
            'note' => $this->note,
            'status' => (int) $this->status,
            'chart_of_account_id' => $this->chart_of_account_id,
            'chart_of_account' => $this->whenLoaded('chartOfAccount', function () {
                return [
                    'id' => $this->chartOfAccount->id,
                    'name' => $this->chartOfAccount->getTranslatedField('name'),
                    'code' => $this->chartOfAccount->code,
                ];
            }),
            'branch_accounts' => $this->whenLoaded('branchAccounts', function () {
                return $this->branchAccounts->map(function ($branchAccount) {
                    return [
                        'id' => $branchAccount->id,
                        'branch_id' => $branchAccount->branch_id,
                        'branch' => $branchAccount->branch ? [
                            'id' => $branchAccount->branch->id,
                            'name' => $branchAccount->branch->name,
                        ] : null,
                        'chart_of_account_id' => $branchAccount->chart_of_account_id,
                        'chart_of_account' => $branchAccount->chartOfAccount ? [
                            'id' => $branchAccount->chartOfAccount->id,
                            'name' => $branchAccount->chartOfAccount->getTranslatedField('name'),
                            'code' => $branchAccount->chartOfAccount->code,
                        ] : null,
                    ];
                });
            }),
        ];
    }
}

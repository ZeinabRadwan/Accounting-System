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
            'analytical_account_id' => $this->analytical_account_id,
            'analytical_account' => $this->whenLoaded('analyticalAccount', function () {
                return [
                    'id' => $this->analyticalAccount->id,
                    'name' => $this->analyticalAccount->name,
                    'code' => $this->analyticalAccount->code,
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
                        'analytical_account_id' => $branchAccount->analytical_account_id,
                        'analytical_account' => $branchAccount->analyticalAccount ? [
                            'id' => $branchAccount->analyticalAccount->id,
                            'name' => $branchAccount->analyticalAccount->name,
                            'code' => $branchAccount->analyticalAccount->code,
                        ] : null,
                    ];
                });
            }),
        ];
    }
}

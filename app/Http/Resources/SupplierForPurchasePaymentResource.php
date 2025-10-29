<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SupplierForPurchasePaymentResource extends JsonResource
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
            'supplierID' => $this->supplier_id,
            'slug' => $this->slug,
            'email' => $this->email,
            'phoneNumber' => $this->phone_number ?: $this->phone_legacy,
            'companyName' => $this->company_name,
            'address' => $this->address,
            'status' => (int) $this->status,
            'image' => getAvatarWithFallback($this->image_path, 'suppliers'),
            'type' => $this->type,
            // Add chart of account ID for validation
            'chart_of_account_id' => $this->chart_of_account_id,
            'purchaseTotal' => round($this->purchaseTotal(), 2),
            'purchaseTotalPaid' => round($this->purchaseTotalPaid(), 2),
            'purchaseDue' => round($this->purchaseTotalDue(), 2),
        ];
    }
}

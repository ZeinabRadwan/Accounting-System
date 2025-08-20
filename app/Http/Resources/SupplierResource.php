<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SupplierResource extends JsonResource
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
            'name' => $this->name,
            'supplierID' => $this->supplier_id,
            'slug' => $this->slug,
            'email' => $this->email,
            'phoneNumber' => $this->phone,
            'phoneNumbers' => $this->phone_numbers,
            'emailAddresses' => $this->email_addresses,
            'companyName' => $this->company_name,
            'type' => $this->type ?? 'Company',
            'vatNumber' => $this->tax_registration_number,
            'crNumber' => $this->cr_number ?? 'N/A',
            'address' => $this->address,
            'nationality' => $this->nationality ? [
                'id' => $this->nationality->id,
                'name' => $this->nationality->name,
                'code' => $this->nationality->code,
            ] : null,
            'cityName' => $this->city_name,
            'district' => $this->district,
            'streetName' => $this->street_name,
            'buildingNumber' => $this->building_number,
            'zipCode' => $this->zip_code,
            'additionalNumber' => $this->additional_number,
            'unitNo' => $this->unit_no,
            'status' => (int) $this->status,
            'image' => $this->image_path ? global_asset('/images/suppliers/'.$this->image_path) : '',
            'account' => $this->account ? [
                'id' => $this->account->id,
                'bankName' => $this->account->bank_name,
                'branchName' => $this->account->branch_name,
                'accountNumber' => $this->account->account_number,
                'note' => $this->account->note,
                'availableBalance' => $this->account->available_balance,
            ] : null,
            'purchaseCount' => $this->purchases->count(),
            'purchaseTotal' => $this->purchaseTotal(),
            'purchaseReturnTotal' => $this->purchaseReturnTotal(),
            'purchaseTotalPaid' => $this->purchaseTotalPaid(),
            'purchaseTotalDue' => $this->purchaseTotalDue(),
            'purTotalDiscount' => $this->purTotalDiscount(),
            'nonPurchaseTotalDue' => $this->nonPurchaseTotalDue(),
            'nonPurchasePaid' => $this->nonPurchasePaid(),
            'nonPurchaseCurrentDue' => $this->nonPurchaseCurrentDue(),
        ];
    }
}

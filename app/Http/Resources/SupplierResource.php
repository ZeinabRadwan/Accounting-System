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
            'phoneNumber' => $this->phone_number ?: $this->phone_legacy,
            'companyName' => $this->company_name,
            'type' => $this->type,
            'taxRegistrationNumber' => $this->tax_registration_number,
            'address' => $this->address,
            'status' => (int) $this->status,
            'image' => $this->image_path ? global_asset('/images/suppliers/'.$this->image_path) : '',
            'image_path' => $this->image_path,
            'chart_of_account_id' => $this->chart_of_account_id,
            
            // New fields for enhanced supplier data
            'code_number' => $this->code_number,
            'notes' => $this->notes,
            'display_language' => $this->display_language,
            'full_name' => $this->full_name,
            'business_name' => $this->business_name,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'street_address1' => $this->street_address1,
            'street_address2' => $this->street_address2,
            'city' => $this->city,
            'state' => $this->state,
            'postal_code' => $this->postal_code,
            'country' => $this->country,
            'neighbourhood' => $this->neighbourhood,
            'commercial_register' => $this->commercial_register,
            'tax_card' => $this->tax_card,
            'attachments' => $this->attachments ? json_decode($this->attachments, true) : null,
            'is_send_email' => $this->is_send_email,
            'is_send_sms' => $this->is_send_sms,
            'chartOfAccount' => function () {
                try {
                    // Check if the relationship is loaded and exists
                    if (!$this->relationLoaded('chartOfAccount')) {
                        return null;
                    }
                    
                    $chartOfAccount = $this->chartOfAccount;
                    if (!$chartOfAccount || !is_object($chartOfAccount)) {
                        return null;
                    }
                    
                    // Safely get the ID
                    $id = null;
                    try {
                        $id = $chartOfAccount->id ?? null;
                        if ($id !== null) {
                            $id = (int) $id;
                        }
                    } catch (\Exception $e) {
                        $id = null;
                    }
                    
                    // Safely get the name
                    $name = '';
                    try {
                        $name = $chartOfAccount->name ?? '';
                        $name = (string) $name;
                    } catch (\Exception $e) {
                        $name = '';
                    }
                    
                    // Safely get the code
                    $code = '';
                    try {
                        $code = $chartOfAccount->code ?? '';
                        $code = (string) $code;
                    } catch (\Exception $e) {
                        $code = '';
                    }
                    
                    // Safely get the type name
                    $typeName = 'Unknown';
                    try {
                        if (isset($chartOfAccount->type) && is_object($chartOfAccount->type)) {
                            $type = $chartOfAccount->type;
                            if (isset($type->name) && $type->name) {
                                $typeName = (string) $type->name;
                            }
                        }
                    } catch (\Exception $e) {
                        $typeName = 'Unknown';
                    }
                    
                    return [
                        'id' => $id,
                        'name' => $name,
                        'code' => $code,
                        'type' => $typeName
                    ];
                    
                } catch (\Exception $e) {
                    return null;
                }
            },
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

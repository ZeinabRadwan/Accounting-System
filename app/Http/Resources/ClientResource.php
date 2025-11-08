<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
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
            'clientID' => $this->client_id,
            'slug' => $this->slug,
            'email' => $this->email,
            'phoneNumber' => $this->phone_number ?: $this->phone,
            'phone' => $this->phone,
            'phoneSecondary' => $this->phone_secondary,
            'companyName' => $this->business_name ?: $this->commercial_name ?: $this->company_name,
            'taxRegistrationNumber' => $this->tax_card ?: $this->tax_registration_number,
            'address' => $this->address,
            'type' => $this->type ?? 'Company',
            'status' => (int) $this->status,
            'image' => getAvatarWithFallback($this->image_path, 'clients'),
            'chart_of_account_id' => $this->chart_of_account_id,
            
            // Account and billing details
            'codeNumber' => $this->code_number,
            'billingMethod' => $this->billing_method,
            'currency' => $this->currency,
            'classification' => $this->classification,
            'notes' => $this->notes,
            'displayLanguage' => $this->display_language,
            
            // Name fields (conditional based on type)
            'fullName' => $this->full_name,
            'businessName' => $this->business_name ?: $this->commercial_name,
            'firstName' => $this->first_name,
            'lastName' => $this->last_name,
            
            // Address information
            'streetAddress1' => $this->street_address1,
            'streetAddress2' => $this->street_address2,
            'city' => $this->city,
            'state' => $this->state,
            'postalCode' => $this->postal_code,
            'country' => $this->country,
            'neighbourhood' => $this->neighbourhood,
            
            // Saudi National Address fields
            'buildingNumber' => $this->building_number,
            'streetNumber' => $this->street_number,
            'districtNumber' => $this->district_number,
            'unitNumber' => $this->unit_number,
            'additionalNumber' => $this->additional_number,
            
            // Business-specific fields
            'commercialRegister' => $this->commercial_register,
            'taxCard' => $this->tax_card ?: $this->tax_registration_number,
            'addSecondaryAddress' => (bool) $this->add_secondary_address,
            
            // Settings and preferences
            'isSendEmail' => (bool) $this->is_send_email,
            'isSendSMS' => (bool) $this->is_send_sms,
            
            // Media and attachments
            'attachments' => $this->attachments,

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

            'clientTotalPaid' => $this->clientTotalPaid(),
            'clientInvoiceTotal' => $this->clientInvoiceTotal(),
            'clientDue' => $this->clientDue(),

            'nonInvoiceDue' => $this->nonInvoiceTotalDue(),
            'nonInvoicePaid' => $this->nonInvoicePaid(),
            'nonInvoiceCurrentDue' => $this->nonInvoiceCurrentDue(),
        ];
    }
}
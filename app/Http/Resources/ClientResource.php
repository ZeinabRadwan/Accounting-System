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
            'phoneNumber' => $this->phone,
            'phoneNumbers' => $this->phone_numbers,
            'emailAddresses' => $this->email_addresses,
            'companyName' => $this->company_name,
            'vatNumber' => $this->tax_registration_number,
            'crNumber' => $this->cr_number ?? 'N/A',
            'address' => $this->address,
            'type' => $this->type ?? 'Company',
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
            'image' => $this->image_path ? global_asset('images/clients/'.$this->image_path) : '',
            'account' => $this->account ? [
                'id' => $this->account->id,
                'bankName' => $this->account->bank_name,
                'branchName' => $this->account->branch_name,
                'accountNumber' => $this->account->account_number,
                'note' => $this->account->note,
                'availableBalance' => $this->account->available_balance,
            ] : null,

            'clientTotalPaid' => $this->clientTotalPaid(),
            'clientInvoiceTotal' => $this->clientInvoiceTotal(),
            'clientDue' => $this->clientDue(),

            'nonInvoiceDue' => $this->nonInvoiceTotalDue(),
            'nonInvoicePaid' => $this->nonInvoicePaid(),
            'nonInvoiceCurrentDue' => $this->nonInvoiceCurrentDue(),
        ];
    }
}
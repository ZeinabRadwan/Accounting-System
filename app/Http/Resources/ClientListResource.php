<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientListResource extends JsonResource
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
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
            'companyName' => $this->company_name,
            'address' => $this->address,
            'type' => $this->type ?? 'Company',
            'status' => (int) $this->status,
            'image' => $this->image_path ? global_asset('images/clients/'.$this->image_path) : '',
            // Add chart of account ID for validation
            'chart_of_account_id' => $this->chart_of_account_id,
            
            // Key new fields for enhanced client form
            'codeNumber' => $this->code_number,
            'billingMethod' => $this->billing_method,
            'currency' => $this->currency,
            'classification' => $this->classification,
            'commercialName' => $this->commercial_name,
            'city' => $this->city,
            'country' => $this->country,
        ];
    }
}
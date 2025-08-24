<?php

namespace App\Http\Requests\Client;

use App\Http\Requests\BaseRequest;
use App\Models\Client;

class UpdateClientRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $slug = $this->route('client');
        $client = Client::where('slug', $slug)->first();
        return [
            // Required fields
            'commercialName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:20|min:3',
            'chartOfAccountId' => 'required|exists:chart_of_accounts,id',
            
            // Account Details
            'codeNumber' => 'nullable|string|max:50',
            'billingMethod' => 'nullable|string|in:print,email,both',
            'currency' => 'nullable|string|size:3',
            'classification' => 'nullable|string|in:vip,regular,wholesale',
            'notes' => 'nullable|string|max:1000',
            'displayLanguage' => 'nullable|string|in:en,ar',
            
            // Client Details
            'type' => 'nullable|string|in:Company,Individual',
            'firstName' => 'nullable|string|max:100',
            'lastName' => 'nullable|string|max:100',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255|unique:clients,email,'.$client->id,
            'streetAddress1' => 'nullable|string|max:255',
            'streetAddress2' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:100',
            'area' => 'nullable|string|max:100',
            'postalCode' => 'nullable|string|max:20',
            'country' => 'nullable|string|size:2',
            'commercialRegister' => 'nullable|string|max:100',
            'taxCard' => 'nullable|string|max:100',
            'addSecondaryAddress' => 'nullable|boolean',
            
            // Additional Fields
            'image' => 'nullable|string',
            'status' => 'nullable|boolean',
            'isSendEmail' => 'nullable|boolean',
            'isSendSMS' => 'nullable|boolean',
            
            // Legacy fields for backward compatibility
            'name' => 'nullable|string|max:255',
            'companyName' => 'nullable|string|max:100',
            'taxRegistrationNumber' => 'nullable|string|max:100',
            'address' => 'nullable|string|max:255',
        ];
    }
}
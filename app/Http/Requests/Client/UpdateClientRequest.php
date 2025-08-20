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
            'name' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:20|min:3|phone',
            'phoneNumbers' => 'nullable|array',
            'phoneNumbers.*' => 'string|max:20|min:3|phone',
            'email' => 'nullable|email|max:255|min:3|unique:clients,email,'.$client->id,
            'emailAddresses' => 'nullable|array',
            'emailAddresses.*' => 'email|max:255|min:3',
            'companyName' => 'nullable|string|max:100|min:2',
            'taxRegistrationNumber' => 'nullable|string|max:100',
            'crNumber' => 'nullable|string|max:100',
            'address' => 'nullable|string|max:255',
            'type' => 'nullable|string|in:Company,Individual',
            'nationalityId' => 'nullable|exists:nationalities,id',
            'cityName' => 'nullable|string|max:100',
            'district' => 'nullable|string|max:100',
            'streetName' => 'nullable|string|max:100',
            'buildingNumber' => 'nullable|string|max:50',
            'zipCode' => 'nullable|string|size:5|regex:/^[0-9]+$/',
            'additionalNumber' => 'nullable|string|max:50',
            'unitNo' => 'nullable|string|max:50',
            'accountOption' => 'required|string|in:existing,new',
            'existingAccount' => 'nullable|required_if:accountOption,existing',
            'bankName' => 'nullable|required_if:accountOption,new|string|max:100',
            'branchName' => 'nullable|string|max:100',
            'accountNumber' => 'nullable|required_if:accountOption,new|string|max:100|unique:accounts,account_number',
            'accountNote' => 'nullable|string|max:255',
        ];
    }
}
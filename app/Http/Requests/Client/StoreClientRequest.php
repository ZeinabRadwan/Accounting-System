<?php

namespace App\Http\Requests\Client;

use App\Http\Requests\BaseRequest;

class StoreClientRequest extends BaseRequest
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
        $taxStatus = $this->input('taxStatus', $this->input('tax_status', 'non_taxable'));
        $isTaxable = $taxStatus === 'taxable';

        return [
            // Required fields
            'phoneNumber' => ['required', 'string', 'max:20', 'min:3'],
            'chartOfAccountId' => ['nullable', 'exists:chart_of_accounts,id'],

            // Account Details
            'codeNumber' => ['nullable', 'string', 'max:50'],
            'notes' => ['nullable', 'string', 'max:1000'],
            'displayLanguage' => ['nullable', 'string', 'in:en,ar'],

            // Client Details
            'type' => ['nullable', 'string', 'in:Company,Individual'],
            'taxStatus' => ['nullable', 'string', 'in:taxable,non_taxable'],
            'tax_status' => ['nullable', 'string', 'in:taxable,non_taxable'],
            'fullName' => ['nullable', 'string', 'max:255'],
            'businessName' => ['nullable', 'string', 'max:255'],
            'firstName' => ['nullable', 'string', 'max:100'],
            'lastName' => ['nullable', 'string', 'max:100'],
            'phone' => ['nullable', 'string', 'max:20'],
            'email' => ['nullable', 'email', 'max:255', 'unique:clients,email'],
            'streetAddress1' => ['nullable', 'string', 'max:255'],
            'streetAddress2' => ['nullable', 'string', 'max:255'],
            'city' => ['nullable', 'string', 'max:100'],
            'state' => ['nullable', 'string', 'max:100'],
            'postalCode' => ['nullable', 'string', 'max:20'],
            'country' => ['nullable', 'string', 'size:2'],
            'neighbourhood' => ['nullable', 'string', 'max:100'],
            'commercialRegister' => $isTaxable ? ['required', 'string', 'max:100'] : ['nullable', 'string', 'max:100'],
            'taxCard' => ['nullable', 'string', 'max:100'],

            // Saudi National Address fields - required if taxable
            'buildingNumber' => $isTaxable ? ['required', 'string', 'max:5'] : ['nullable', 'string', 'max:5'],
            'streetNumber' => $isTaxable ? ['required', 'string', 'max:5'] : ['nullable', 'string', 'max:5'],
            'districtNumber' => $isTaxable ? ['required', 'string', 'max:5'] : ['nullable', 'string', 'max:5'],
            'unitNumber' => $isTaxable ? ['required', 'string', 'max:5'] : ['nullable', 'string', 'max:5'],
            'additionalNumber' => ['nullable', 'string', 'max:5'],

            // Additional Fields
            // 'image' => ['nullable', 'string'],
            'attachments' => ['nullable', 'array'],
            'attachments.*' => ['nullable', 'file', 'mimes:jpeg,png,gif', 'max:2048'],
            'status' => ['nullable', 'boolean'],
            'isSendEmail' => ['nullable', 'boolean'],
            'isSendSMS' => ['nullable', 'boolean'],

            // Legacy fields for backward compatibility
            'name' => ['nullable', 'string', 'max:255'],
            'companyName' => ['nullable', 'string', 'max:100'],
            'taxRegistrationNumber' => $isTaxable ? ['required', 'string', 'size:15', 'regex:/^[0-9]{15}$/'] : ['nullable', 'string', 'max:100'],
            'address' => ['nullable', 'string', 'max:255'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'phoneNumber.required' => 'Mobile number is required.',
            'chartOfAccountId.exists' => 'Selected Chart of Account is invalid.',
            'email.unique' => 'This email address is already taken.',
            'attachments.*.file' => 'Invalid file format.',
            'attachments.*.mimes' => 'Only JPEG, PNG, and GIF files are allowed.',
            'attachments.*.max' => 'File size must be less than 2MB.',
            'commercialRegister.required' => 'Commercial Register is required for taxable clients.',
            'buildingNumber.required' => 'Building Number is required for taxable clients.',
            'streetNumber.required' => 'Street Number is required for taxable clients.',
            'districtNumber.required' => 'District Number is required for taxable clients.',
            'unitNumber.required' => 'Unit Number is required for taxable clients.',
            'taxRegistrationNumber.required' => 'Tax Registration Number is required for taxable clients.',
            'taxRegistrationNumber.size' => 'Tax Registration Number must be exactly 15 digits.',
            'taxRegistrationNumber.regex' => 'Tax Registration Number must contain only numbers and be 15 digits.',
        ];
    }
}

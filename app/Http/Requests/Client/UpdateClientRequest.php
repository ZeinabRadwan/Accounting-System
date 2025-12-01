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

        // Get taxStatus from request - check both camelCase and snake_case
        $taxStatus = $this->input('taxStatus')
            ?? $this->input('tax_status')
            ?? ($client ? ($client->tax_status ?? 'non_taxable') : 'non_taxable');

        // Ensure we have a valid tax status
        if (! in_array($taxStatus, ['taxable', 'non_taxable'])) {
            $taxStatus = 'non_taxable';
        }

        $isTaxable = $taxStatus === 'taxable';

        // Build rules array
        $rules = [
            // Required fields
            'phoneNumber' => 'nullable|string|max:20|min:3',
            'chartOfAccountId' => 'nullable|exists:chart_of_accounts,id',

            // Account Details
            'codeNumber' => 'nullable|string|max:50',
            'notes' => 'nullable|string|max:1000',
            'displayLanguage' => 'nullable|string|in:en,ar',

            // Client Details
            'type' => 'nullable|string|in:Company,Individual',
            'taxStatus' => 'nullable|string|in:taxable,non_taxable',
            'tax_status' => 'nullable|string|in:taxable,non_taxable',
            'fullName' => 'nullable|string|max:255',
            'businessName' => 'nullable|string|max:255',
            'firstName' => 'nullable|string|max:100',
            'lastName' => 'nullable|string|max:100',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255|unique:clients,email,'.($client ? $client->id : 'NULL'),
            'streetAddress1' => 'nullable|string|max:255',
            'streetAddress2' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:100',
            'state' => 'nullable|string|max:100',
            'postalCode' => 'nullable|string|max:20',
            'country' => 'nullable|string|size:2',
            'neighbourhood' => 'nullable|string|max:100',
            'taxCard' => 'nullable|string|max:100',

            // Additional Fields (accept both file uploads and base64/string)
            'image' => 'nullable',
            'attachments' => 'nullable|array',
            'attachments.*' => 'nullable|file|mimes:jpeg,png,gif|max:2048',
            'status' => 'nullable|boolean',
            'isSendEmail' => 'nullable|boolean',
            'isSendSMS' => 'nullable|boolean',

            // Legacy fields for backward compatibility
            'name' => 'nullable|string|max:255',
            'companyName' => 'nullable|string|max:100',
            'address' => 'nullable|string|max:255',
        ];

        // Conditionally add required rules for taxable clients
        if ($isTaxable) {
            $rules['commercialRegister'] = 'required|string|max:100';
            $rules['streetAddress1'] = 'required|string|max:255';
            $rules['postalCode'] = 'required|string|max:20';
            $rules['neighbourhood'] = 'required|string|max:100';
            $rules['city'] = 'required|string|max:100';
            $rules['country'] = 'required|string|size:2';
            $rules['buildingNumber'] = 'required|string|max:5';
            $rules['streetNumber'] = 'required|string|max:5';
            $rules['districtNumber'] = 'required|string|max:5';
            $rules['unitNumber'] = 'required|string|max:5';
            $rules['taxRegistrationNumber'] = 'required|string|size:15|regex:/^[0-9]{15}$/';
        } else {
            $rules['commercialRegister'] = 'nullable|string|max:100';
            $rules['buildingNumber'] = 'nullable|string|max:5';
            $rules['streetNumber'] = 'nullable|string|max:5';
            $rules['districtNumber'] = 'nullable|string|max:5';
            $rules['unitNumber'] = 'nullable|string|max:5';
            $rules['taxRegistrationNumber'] = 'nullable|string|max:100';
        }

        // Always allow additionalNumber
        $rules['additionalNumber'] = 'nullable|string|max:5';

        return $rules;
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'chartOfAccountId.exists' => 'Selected Chart of Account is invalid.',
            'email.unique' => 'This email address is already taken.',
            'attachments.*.file' => 'Invalid file format.',
            'attachments.*.mimes' => 'Only JPEG, PNG, and GIF files are allowed.',
            'attachments.*.max' => 'File size must be less than 2MB.',
            'commercialRegister.required' => 'Commercial Register is required for taxable clients.',
            'streetAddress1.required' => 'Street Address is required for taxable clients.',
            'postalCode.required' => 'Postal Code is required for taxable clients.',
            'neighbourhood.required' => 'Neighbourhood is required for taxable clients.',
            'city.required' => 'City is required for taxable clients.',
            'country.required' => 'Country is required for taxable clients.',
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

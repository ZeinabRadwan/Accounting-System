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
        // Get taxStatus from request - check all possible ways
        $taxStatus = $this->input('taxStatus')
            ?? $this->input('tax_status')
            ?? $this->get('taxStatus')
            ?? $this->get('tax_status')
            ?? $this->request->get('taxStatus')
            ?? $this->request->get('tax_status')
            ?? 'non_taxable';

        // Ensure we have a valid tax status
        if (! in_array($taxStatus, ['taxable', 'non_taxable'])) {
            $taxStatus = 'non_taxable';
        }

        $isTaxable = $taxStatus === 'taxable';

        // Debug logging - log everything
        \Log::info('StoreClientRequest - taxStatus check', [
            'taxStatus_input' => $this->input('taxStatus'),
            'tax_status_input' => $this->input('tax_status'),
            'taxStatus_get' => $this->get('taxStatus'),
            'tax_status_get' => $this->get('tax_status'),
            'taxStatus_request_get' => $this->request->get('taxStatus'),
            'tax_status_request_get' => $this->request->get('tax_status'),
            'final_taxStatus' => $taxStatus,
            'isTaxable' => $isTaxable,
            'all_input' => $this->all(),
            'all_request' => $this->request->all(),
            'request_method' => $this->method(),
            'content_type' => $this->header('Content-Type'),
            'has_taxStatus' => $this->has('taxStatus'),
            'has_tax_status' => $this->has('tax_status'),
        ]);

        // Build rules array
        $rules = [
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
            'taxCard' => ['nullable', 'string', 'max:100'],

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
            'address' => ['nullable', 'string', 'max:255'],
        ];

        // Conditionally add required rules for taxable clients
        if ($isTaxable) {
            $rules['commercialRegister'] = ['required', 'string', 'max:100'];
            $rules['streetAddress1'] = ['required', 'string', 'max:255'];
            $rules['postalCode'] = ['required', 'string', 'max:20'];
            $rules['neighbourhood'] = ['required', 'string', 'max:100'];
            $rules['city'] = ['required', 'string', 'max:100'];
            $rules['country'] = ['required', 'string', 'size:2'];
            $rules['buildingNumber'] = ['required', 'string', 'max:5'];
            // Street name can be longer text, keep required for taxable but with higher max length
            $rules['streetNumber'] = ['required', 'string', 'max:255'];
            $rules['districtNumber'] = ['required', 'string', 'max:5'];
            $rules['taxRegistrationNumber'] = ['required', 'string', 'size:15', 'regex:/^[0-9]{15}$/'];
        } else {
            $rules['commercialRegister'] = ['nullable', 'string', 'max:100'];
            $rules['buildingNumber'] = ['nullable', 'string', 'max:5'];
            $rules['streetNumber'] = ['nullable', 'string', 'max:255'];
            $rules['districtNumber'] = ['nullable', 'string', 'max:5'];
            $rules['taxRegistrationNumber'] = ['nullable', 'string', 'max:100'];
        }

        // Always allow unitNumber & additionalNumber (optional even for taxable clients)
        $rules['unitNumber'] = ['nullable', 'string', 'max:5'];
        $rules['additionalNumber'] = ['nullable', 'string', 'max:5'];

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
            'phoneNumber.required' => 'Mobile number is required.',
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
            'taxRegistrationNumber.required' => 'Tax Registration Number is required for taxable clients.',
            'taxRegistrationNumber.size' => 'Tax Registration Number must be exactly 15 digits.',
            'taxRegistrationNumber.regex' => 'Tax Registration Number must contain only numbers and be 15 digits.',
        ];
    }
}

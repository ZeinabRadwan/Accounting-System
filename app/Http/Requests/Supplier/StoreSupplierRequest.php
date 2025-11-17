<?php

namespace App\Http\Requests\Supplier;

use App\Http\Requests\BaseRequest;

class StoreSupplierRequest extends BaseRequest
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
        \Log::info('StoreSupplierRequest - taxStatus check', [
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
            'name' => 'nullable|required_if:type,Individual|string|max:255',
            'phoneNumber' => 'required|string|max:20|min:3',
            'email' => 'nullable|email|max:255|min:3|unique:suppliers,email',
            'companyName' => 'nullable|required_if:type,Company|string|max:100|min:2',
            'address' => 'nullable|string|max:255',
            'type' => 'required|string|in:Company,Individual',
            'chartOfAccountId' => 'nullable|integer|exists:chart_of_accounts,id',

            // Tax status
            'taxStatus' => 'nullable|string|in:taxable,non_taxable',
            'tax_status' => 'nullable|string|in:taxable,non_taxable',

            // Account Details
            'codeNumber' => 'nullable|string|max:50',
            'notes' => 'nullable|string|max:1000',
            'displayLanguage' => 'nullable|string|in:en,ar',

            // Supplier Details
            'fullName' => 'nullable|string|max:255',
            'businessName' => 'nullable|string|max:255',
            'firstName' => 'nullable|string|max:100',
            'lastName' => 'nullable|string|max:100',
            'phone' => 'nullable|string|max:20',
            'streetAddress1' => 'nullable|string|max:255',
            'streetAddress2' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:100',
            'state' => 'nullable|string|max:100',
            'postalCode' => 'nullable|string|max:20',
            'country' => 'nullable|string|size:2',
            'neighbourhood' => 'nullable|string|max:100',
            'taxCard' => 'nullable|string|max:100',

            // Additional Fields
            'attachments' => 'nullable|array',
            'attachments.*' => 'nullable|file|mimes:jpeg,png,gif|max:2048',
            'status' => 'nullable|boolean',
            'isSendEmail' => 'nullable|boolean',
            'isSendSMS' => 'nullable|boolean',
        ];

        // Conditionally add required rules for taxable suppliers
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
            'phoneNumber.required' => 'Mobile number is required.',
            'name.required_if' => 'The name field is required when type is Individual.',
            'companyName.required_if' => 'The company name field is required when type is Company.',
            'chartOfAccountId.exists' => 'Selected Chart of Account is invalid.',
            'email.unique' => 'This email address is already taken.',
            'attachments.*.file' => 'Invalid file format.',
            'attachments.*.mimes' => 'Only JPEG, PNG, and GIF files are allowed.',
            'attachments.*.max' => 'File size must be less than 2MB.',
            'commercialRegister.required' => 'Commercial Register is required for taxable suppliers.',
            'streetAddress1.required' => 'Street Address is required for taxable suppliers.',
            'postalCode.required' => 'Postal Code is required for taxable suppliers.',
            'neighbourhood.required' => 'Neighbourhood is required for taxable suppliers.',
            'city.required' => 'City is required for taxable suppliers.',
            'country.required' => 'Country is required for taxable suppliers.',
            'buildingNumber.required' => 'Building Number is required for taxable suppliers.',
            'streetNumber.required' => 'Street Number is required for taxable suppliers.',
            'districtNumber.required' => 'District Number is required for taxable suppliers.',
            'unitNumber.required' => 'Unit Number is required for taxable suppliers.',
            'taxRegistrationNumber.required' => 'Tax Registration Number is required for taxable suppliers.',
            'taxRegistrationNumber.size' => 'Tax Registration Number must be exactly 15 digits.',
            'taxRegistrationNumber.regex' => 'Tax Registration Number must contain only numbers and be 15 digits.',
        ];
    }
}

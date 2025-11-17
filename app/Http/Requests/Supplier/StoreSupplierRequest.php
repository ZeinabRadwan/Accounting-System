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
        $taxStatus = $this->input('taxStatus', $this->input('tax_status', 'non_taxable'));
        $isTaxable = $taxStatus === 'taxable';

        return [
            // Required fields
            'name' => 'required_if:type,Individual|nullable|string|max:255',
            'phoneNumber' => 'required|string|max:20|min:3',
            'email' => 'nullable|email|max:255|min:3|unique:suppliers,email',
            'companyName' => 'required_if:type,Company|nullable|string|max:100|min:2',
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
            'commercialRegister' => $isTaxable ? 'required|string|max:100' : 'nullable|string|max:100',
            'taxCard' => 'nullable|string|max:100',

            // Saudi National Address fields - required if taxable
            'buildingNumber' => $isTaxable ? 'required|string|max:5' : 'nullable|string|max:5',
            'streetNumber' => $isTaxable ? 'required|string|max:5' : 'nullable|string|max:5',
            'districtNumber' => $isTaxable ? 'required|string|max:5' : 'nullable|string|max:5',
            'unitNumber' => $isTaxable ? 'required|string|max:5' : 'nullable|string|max:5',
            'additionalNumber' => 'nullable|string|max:5',

            // Additional Fields
            'attachments' => 'nullable|array',
            'attachments.*' => 'nullable|file|mimes:jpeg,png,gif|max:2048',
            'status' => 'nullable|boolean',
            'isSendEmail' => 'nullable|boolean',
            'isSendSMS' => 'nullable|boolean',

            // Legacy fields for backward compatibility
            'taxRegistrationNumber' => $isTaxable ? 'required|string|size:15|regex:/^[0-9]{15}$/' : 'nullable|string|max:100',
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
            'commercialRegister.required' => 'Commercial Register is required for taxable suppliers.',
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

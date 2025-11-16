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
     * Prepare the data for validation.
     * This ensures phoneNumber is properly read from FormData
     */
    protected function prepareForValidation()
    {
        // Debug: Log all input data
        \Log::info('UpdateClientRequest - All input:', $this->all());
        \Log::info('UpdateClientRequest - All request data:', $this->request->all());
        \Log::info('UpdateClientRequest - phoneNumber from input:', ['phoneNumber' => $this->input('phoneNumber')]);
        \Log::info('UpdateClientRequest - phoneNumber from get:', ['phoneNumber' => $this->get('phoneNumber')]);
        \Log::info('UpdateClientRequest - phoneNumber from request:', ['phoneNumber' => $this->request->get('phoneNumber')]);
        \Log::info('UpdateClientRequest - Has phoneNumber:', ['has' => $this->has('phoneNumber')]);
        \Log::info('UpdateClientRequest - Request has phoneNumber:', ['has' => $this->request->has('phoneNumber')]);
        
        // Ensure phoneNumber is read correctly from FormData
        // Try multiple ways to get phoneNumber
        $phoneNumber = $this->input('phoneNumber') 
                    ?? $this->get('phoneNumber') 
                    ?? $this->request->get('phoneNumber')
                    ?? $this->request->input('phoneNumber')
                    ?? null;
        
        // Also check if it's in the request data array directly
        if ($phoneNumber === null && is_array($this->request->all())) {
            $allData = $this->request->all();
            $phoneNumber = $allData['phoneNumber'] ?? null;
        }
        
        \Log::info('UpdateClientRequest - Final phoneNumber:', ['phoneNumber' => $phoneNumber]);
        
        // Always merge phoneNumber if we found it, or set it to empty string if not found
        // This ensures validation can check it properly
        if ($phoneNumber !== null) {
            $this->merge(['phoneNumber' => $phoneNumber]);
        } else {
            // If phoneNumber is not found, set it to empty string so validation can check it
            $this->merge(['phoneNumber' => '']);
        }
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
            'phoneNumber' => 'required|string|max:20|min:3',
            'chartOfAccountId' => 'nullable|exists:chart_of_accounts,id',
            
            // Account Details
            'codeNumber' => 'nullable|string|max:50',
            'notes' => 'nullable|string|max:1000',
            'displayLanguage' => 'nullable|string|in:en,ar',
            
            // Client Details
            'type' => 'nullable|string|in:Company,Individual',
            'fullName' => 'nullable|string|max:255',
            'businessName' => 'nullable|string|max:255',
            'firstName' => 'nullable|string|max:100',
            'lastName' => 'nullable|string|max:100',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255|unique:clients,email,'.$client->id,
            'streetAddress1' => 'nullable|string|max:255',
            'streetAddress2' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:100',
            'state' => 'nullable|string|max:100',
            'postalCode' => 'nullable|string|max:20',
            'country' => 'nullable|string|size:2',
            'neighbourhood' => 'nullable|string|max:100',
            'commercialRegister' => 'nullable|string|max:100',
            'taxCard' => 'nullable|string|max:100',
            
            // Saudi National Address fields
            'buildingNumber' => 'nullable|string|max:5',
            'streetNumber' => 'nullable|string|max:5',
            'districtNumber' => 'nullable|string|max:5',
            'unitNumber' => 'nullable|string|max:5',
            'additionalNumber' => 'nullable|string|max:5',
            
            // Additional Fields
            'image' => 'nullable|string',
            'attachments' => 'nullable|array',
            'attachments.*' => 'nullable|file|mimes:jpeg,png,gif|max:2048',
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
        ];
    }
}
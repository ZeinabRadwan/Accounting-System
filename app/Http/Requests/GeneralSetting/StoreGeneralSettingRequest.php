<?php

namespace App\Http\Requests\GeneralSetting;

use App\Http\Requests\BaseRequest;

class StoreGeneralSettingRequest extends BaseRequest
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
        $rules = [
            'companyName' => 'required|string|max:30',
            'companyTagline' => 'required|string|max:255|min:3',
            'emailAddress' => 'required|string|email|max:80',
            'phoneNumber' => 'nullable|string|max:255',
            'address' => 'required|string|max:255',
            'clientPrefix' => 'required|string|min:2|max:10',
            'supplierPrefix' => 'required|string|min:2|max:10',
            'employeePrefix' => 'required|string|min:2|max:10',
            'proCatPrefix' => 'required|string|min:2|max:10',
            'proSubCatPrefix' => 'required|string|min:2|max:10',
            'productPrefix' => 'required|string|min:2|max:10',
            'expCatPrefix' => 'required|string|min:2|max:10',
            'expSubCatPrefix' => 'required|string|min:2|max:10',
            'purchasePrefix' => 'required|string|min:2|max:10',
            'purchaseReturnPrefix' => 'required|string|min:2|max:10',
            'quotationPrefix' => 'required|string|min:2|max:10',
            'invoicePrefix' => 'required|string|min:2|max:10',
            'invoiceReturnPrefix' => 'required|string|min:2|max:10',
            'adjustmentPrefix' => 'required|string|min:2|max:10',
            'currency' => 'required',
            'language' => 'required|string|min:2|max:10',
            'country' => 'required|string|size:2',
            'copyrightText' => 'required|string|max:100',
            'invoiceThankYouMessage' => 'required|string|max:100',
            'defaultClient' => 'required',
            'defaultAccount' => 'required',
            'defaultVatRate' => 'required',
            'currentFiscalYear' => 'nullable|array',
            'currentAccountingPeriod' => 'nullable|array',
            'systemType' => 'nullable|in:accounting,pos,both',
            'eInvoiceSubmissionMode' => 'nullable|in:auto,manual',
        ];

        // Add ZATCA validation rules if the request contains ZATCA fields
        if ($this->has('zatca_environment')) {
            $rules = array_merge($rules, [
                'zatca_organization_identifier' => 'required|string|size:15|regex:/^3\d{13}3$/',
                'zatca_serial_number' => 'required|string|max:255',
                'zatca_organization_name' => 'required|string|max:255',
                'zatca_address' => 'required|string|max:500',
                'zatca_environment' => 'required|in:developer,production',
                'zatca_otp' => 'required|string|min:6|max:10',
                'zatca_solution_name' => 'required|string|max:255',
                'zatca_common_name' => 'required|string|max:255',
                'zatca_organizational_unit' => 'required|string|max:255',
                'zatca_invoice_type' => 'required|in:standard,simplified,both',
                'zatca_business_category' => 'required|string|max:255',
            ]);
        }

        return $rules;
    }
}

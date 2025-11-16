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
        return [
            'name' => 'required_if:type,Individual|nullable|string|max:255',
            'phoneNumber' => 'required|string|max:20|min:3',
            'email' => 'nullable|email|max:255|min:3|unique:suppliers,email',
            'companyName' => 'required_if:type,Company|nullable|string|max:100|min:2',
            'address' => 'nullable|string|max:255',
            'type' => 'required|string|in:Company,Individual',
            'chartOfAccountId' => 'nullable|integer|exists:chart_of_accounts,id',
        ];
    }
}

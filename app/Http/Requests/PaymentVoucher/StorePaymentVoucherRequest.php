<?php

namespace App\Http\Requests\PaymentVoucher;

use App\Http\Requests\BaseRequest;

class StorePaymentVoucherRequest extends BaseRequest
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
            'voucherType' => 'required|boolean',
            'entityType' => 'required|in:client,supplier,chart_of_account',
            'paymentMethod' => 'required|in:direct,invoice,purchase',
            'account' => 'required',
            'amount' => 'required|numeric|min:1',
            'date' => 'required|date_format:Y-m-d',
            'chequeNo' => 'nullable|string|max:255',
            'receiptNo' => 'nullable|string|max:255',
            'note' => 'nullable|string',
            'status' => 'nullable|boolean',
            // Conditional rules based on entity type
            'client' => 'required_if:entityType,client',
            'supplier' => 'required_if:entityType,supplier',
            'chartOfAccount' => 'required_if:entityType,chart_of_account',
            // Conditional rules for invoice/purchase
            'invoice' => 'required_if:paymentMethod,invoice',
            'purchase' => 'required_if:paymentMethod,purchase',
        ];
    }
}

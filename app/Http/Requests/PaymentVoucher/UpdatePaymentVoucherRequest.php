<?php

namespace App\Http\Requests\PaymentVoucher;

use App\Http\Requests\BaseRequest;

class UpdatePaymentVoucherRequest extends BaseRequest
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
            'voucherType' => 'sometimes|boolean',
            'entityType' => 'sometimes|in:client,supplier,chart_of_account',
            'paymentMethod' => 'sometimes|in:direct,invoice,purchase',
            'account' => 'sometimes|required',
            'amount' => 'sometimes|required|numeric|min:1',
            'date' => 'sometimes|required|date_format:Y-m-d',
            'chequeNo' => 'nullable|string|max:255',
            'receiptNo' => 'nullable|string|max:255',
            'note' => 'nullable|string',
            'status' => 'nullable|boolean',
        ];
    }
}

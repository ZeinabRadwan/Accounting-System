<?php

namespace App\Http\Requests\Purchase;

use App\Http\Requests\BaseRequest;

class StoreDebitNoteRequest extends BaseRequest
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
            'purchase_id' => 'required|exists:purchases,id',
            'discount_amount' => 'required|numeric|min:0.01',
            'note' => 'nullable|string|max:1000',
            'date' => 'nullable|date_format:Y-m-d',
        ];
    }
}

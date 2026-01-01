<?php

namespace App\Http\Requests;

class UpdatePosInvoiceSessionRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'invoice_data' => 'required|array',
            'status' => 'nullable|in:active,suspended',
        ];
    }
}

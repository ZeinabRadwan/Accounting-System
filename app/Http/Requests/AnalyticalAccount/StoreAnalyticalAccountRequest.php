<?php

namespace App\Http\Requests\AnalyticalAccount;

use App\Http\Requests\BaseRequest;

class StoreAnalyticalAccountRequest extends BaseRequest
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
            'name' => ['required', 'string', 'max:150'],
            'code' => ['nullable', 'string', 'max:50', 'unique:analytical_accounts,code'],
            'type' => ['nullable', 'in:payment,channel,platform'],
            'status' => ['nullable', 'in:0,1,true,false'],
            'branch_id' => ['required', 'exists:branches,id'],
        ];
    }
}

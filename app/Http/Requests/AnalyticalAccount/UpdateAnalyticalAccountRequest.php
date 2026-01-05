<?php

namespace App\Http\Requests\AnalyticalAccount;

use App\Http\Requests\BaseRequest;
use Illuminate\Validation\Rule;

class UpdateAnalyticalAccountRequest extends BaseRequest
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
        $analyticalAccountId = $this->route('analytical_account') ?? $this->route('id');

        return [
            'name' => ['sometimes', 'required', 'string', 'max:150'],
            'code' => [
                'nullable',
                'string',
                'max:50',
                Rule::unique('analytical_accounts', 'code')->ignore($analyticalAccountId),
            ],
            'type' => ['nullable', 'in:payment,channel,platform'],
            'status' => ['nullable', 'in:0,1,true,false'],
            'branch_id' => ['required', 'exists:branches,id'],
        ];
    }
}

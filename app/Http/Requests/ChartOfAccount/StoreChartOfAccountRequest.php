<?php

namespace App\Http\Requests\ChartOfAccount;

use Illuminate\Foundation\Http\FormRequest;

class StoreChartOfAccountRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:150',
            'code' => 'required|string|max:50|unique:chart_of_accounts,code',
            'type_id' => 'required|exists:chart_of_account_types,id',
            'parent_id' => 'nullable|exists:chart_of_accounts,id',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ];
    }
}

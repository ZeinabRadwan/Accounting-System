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
            'parent_id' => [
                'nullable',
                'exists:chart_of_accounts,id',
                function ($attribute, $value, $fail) {
                    if ($value) {
                        // Prevent setting parent to self (will be checked in update)
                        // Additional validation: ensure parent account exists and is active
                        $parent = \App\Models\ChartOfAccount::find($value);
                        if (! $parent) {
                            $fail('The selected parent account does not exist.');
                        } elseif (! $parent->is_active) {
                            $fail('The selected parent account is not active.');
                        }
                    }
                },
            ],
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ];
    }
}

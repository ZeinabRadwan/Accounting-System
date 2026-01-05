<?php

namespace App\Http\Requests\ChartOfAccount;

use App\Rules\NotAnalyticalAccount;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateChartOfAccountRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $accountId = $this->route('chart_of_account');

        return [
            'name' => 'required|string|max:150',
            'code' => [
                'required',
                'string',
                'max:50',
                // Rule::unique('chart_of_accounts', 'code')->ignore($accountId)
            ],
            'type_id' => 'required|exists:chart_of_account_types,id',
            'parent_id' => [
                'nullable',
                'exists:chart_of_accounts,id',
                new NotAnalyticalAccount,
                function ($attribute, $value, $fail) use ($accountId) {
                    if ($value) {
                        // Prevent setting parent to self
                        if ($value == $accountId) {
                            $fail('An account cannot be its own parent.');

                            return;
                        }

                        // Prevent circular references - check if the parent is a descendant
                        $account = \App\Models\ChartOfAccount::find($accountId);
                        if ($account) {
                            $allDescendants = \App\Models\ChartOfAccount::getAllDescendantIds($accountId);
                            if (in_array($value, $allDescendants)) {
                                $fail('Cannot set parent to a descendant account. This would create a circular reference.');

                                return;
                            }
                        }

                        // Ensure parent account exists and is active
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

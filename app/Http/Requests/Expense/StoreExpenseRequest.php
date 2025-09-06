<?php

namespace App\Http\Requests\Expense;

use App\Http\Requests\BaseRequest;

class StoreExpenseRequest extends BaseRequest
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
        // Calculate available balance from the selected account
        $availableBalance = 99999999; // Default high value if no account selected
        
        if (isset($this->account['availableBalance'])) {
            $availableBalance = $this->account['availableBalance'];
        }

        return [
            'reason' => 'required|string|max:255',
            'subCategory' => 'required|array',
            'subCategory.id' => 'required|exists:expense_sub_categories,id',
            'subCategory.code' => 'required|string',
            'account' => 'required|array',
            'account.id' => 'required|exists:accounts,id',
            'expenseAccount' => 'required|array',
            'expenseAccount.id' => 'required|exists:chart_of_accounts,id',
            'amount' => 'required|numeric|min:0.01|max:'.$availableBalance,
            'chequeNo' => 'nullable|string|max:255',
            'voucherNo' => 'nullable|string|max:255',
            'date' => 'required|date_format:Y-m-d|before_or_equal:today',
            'note' => 'nullable|string|max:1000',
            'status' => 'required|in:0,1',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }
}

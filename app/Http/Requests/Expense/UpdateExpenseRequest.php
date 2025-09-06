<?php

namespace App\Http\Requests\Expense;

use App\Http\Requests\BaseRequest;
use App\Models\Expense;


class UpdateExpenseRequest extends BaseRequest
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

        $slug = $this->route('expense');

        $expense = Expense::with('expSubCategory', 'expTransaction.cashbookAccount')->where('slug', $slug)->first();
        $availableBalance = 99999999;

        if (isset($this->account['availableBalance'])) {
            $availableBalance = $expense->expTransaction->amount + $this->account['availableBalance'];
        }

        return [
            'reason' => 'required|string|max:255',
            'subCategory' => 'required|array',
            'subCategory.id' => 'required|exists:expense_sub_categories,id',
            'subCategory.code' => 'required|string',
            'account' => 'required|array',
            'account.id' => 'required|exists:accounts,id',
            'amount' => isset($this->account) ? 'required|numeric|min:0.01|max:'.$availableBalance : 'nullable|numeric|min:0.01',
            'chequeNo' => 'nullable|string|max:255',
            'voucherNo' => 'nullable|string|max:255',
            'date' => 'required|date_format:Y-m-d|before_or_equal:today',
            'note' => 'nullable|string|max:1000',
            'status' => 'required|in:0,1',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }
}

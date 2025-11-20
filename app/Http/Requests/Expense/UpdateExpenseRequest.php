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
            'image' => ['nullable', function ($attribute, $value, $fail) {
                // If it's a file upload, validate as file
                if ($this->hasFile($attribute)) {
                    $file = $this->file($attribute);
                    $allowedMimes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
                    $maxSize = 2048; // 2MB in kilobytes

                    if (! in_array($file->getMimeType(), $allowedMimes)) {
                        $fail(__('validation.mimes', ['attribute' => __('validation.attributes.image'), 'values' => 'jpeg, png, jpg, gif']));
                    }

                    if ($file->getSize() > $maxSize * 1024) {
                        $fail(__('validation.max.file', ['attribute' => __('validation.attributes.image'), 'max' => $maxSize]));
                    }
                } elseif ($value && is_string($value)) {
                    // If it's a base64 string, validate the format
                    if (! preg_match('/^data:image\/(jpeg|png|jpg|gif);base64,/', $value)) {
                        $fail(__('validation.mimes', ['attribute' => __('validation.attributes.image'), 'values' => 'jpeg, png, jpg, gif']));

                        return;
                    }

                    // Check base64 string size (2MB limit)
                    $base64Data = substr($value, strpos($value, ',') + 1);
                    $decodedData = base64_decode($base64Data, true);
                    if ($decodedData === false) {
                        $fail(__('validation.image', ['attribute' => __('validation.attributes.image')]));

                        return;
                    }

                    $decodedSize = strlen($decodedData);
                    if ($decodedSize > 2048 * 1024) {
                        $fail(__('validation.max.file', ['attribute' => __('validation.attributes.image'), 'max' => 2048]));
                    }
                }
            }],
        ];
    }
}

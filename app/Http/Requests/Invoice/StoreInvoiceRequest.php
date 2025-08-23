<?php

namespace App\Http\Requests\Invoice;

use App\Http\Requests\BaseRequest;

class StoreInvoiceRequest extends BaseRequest
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
            'client' => 'required',
            'selectedProducts' => 'required|array|min:1',
            'selectedProducts.*.id' => 'required|exists:products,id',
            'selectedProducts.*.qty' => 'required|numeric|min:1',
            'selectedProducts.*.unitPrice' => 'required|numeric|min:0',
            'selectedProducts.*.discount' => 'nullable|numeric|min:0',
            'selectedProducts.*.discountType' => 'nullable|in:fixed,percentage',
            'selectedProducts.*.productTax' => 'required|numeric|min:0',
            'subTotal' => 'required|numeric|min:0',
            'orderTax' => 'required',
            'netTotal' => 'required|numeric|min:0',
            'poReference' => 'nullable|string|max:255',
            'paymentTerms' => 'nullable|string|max:255',
            'deliveryPlace' => 'nullable|string|max:255',
            'date' => 'required|date_format:Y-m-d',
            'note' => 'nullable|string|max:255',
            'status' => 'required|in:1,0',
            'addPayment' => 'nullable|boolean',
            'paidAmount' => 'required_if:addPayment,true|numeric|min:0',
            'account' => 'required_if:addPayment,true',
            'chequeNo' => 'nullable|string|max:255',
            'receiptNo' => 'nullable|string|max:255',
            'isSendEmail' => 'nullable|boolean',
            'isSendSMS' => 'nullable|boolean',
        ];
    }

    /**
     * Configure the validator instance.
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            // Validate product discounts
            if ($this->has('selectedProducts')) {
                foreach ($this->selectedProducts as $index => $product) {
                    if (isset($product['discount']) && $product['discount'] > 0) {
                        $maxDiscount = $product['unitPrice'] * $product['qty'];
                        
                        if (isset($product['discountType']) && $product['discountType'] === 'percentage') {
                            if ($product['discount'] > 100) {
                                $validator->errors()->add(
                                    "selectedProducts.{$index}.discount",
                                    'Discount percentage cannot exceed 100%'
                                );
                            }
                        } else {
                            if ($product['discount'] > $maxDiscount) {
                                $validator->errors()->add(
                                    "selectedProducts.{$index}.discount",
                                    "Discount amount cannot exceed product total ({$maxDiscount})"
                                );
                            }
                        }
                    }
                }
            }

            // Validate payment amount
            if ($this->addPayment && $this->paidAmount > $this->netTotal) {
                $validator->errors()->add(
                    'paidAmount',
                    'Paid amount cannot exceed net total'
                );
            }
        });
    }
}

<?php

namespace App\Http\Requests\Invoice;

use App\Http\Requests\BaseRequest;
use Illuminate\Validation\Rule;

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
            'client' => 'required|array',
            'client.id' => 'required|exists:clients,id',
            'selectedProducts' => 'required|array|min:1',
            'selectedProducts.*.id' => 'required|exists:products,id',
            'selectedProducts.*.slug' => 'required|exists:products,slug',
            'selectedProducts.*.qty' => 'required|numeric|min:0.01',
            'selectedProducts.*.unitPrice' => 'required|numeric|min:0',
            'selectedProducts.*.discount' => 'nullable|numeric|min:0',
            'selectedProducts.*.discountType' => 'nullable|in:fixed,percentage',
            'selectedProducts.*.productTax' => 'required|numeric|min:0',
            'subTotal' => 'required|numeric|min:0',
            'orderTax' => 'required',
            'netTotal' => 'required|numeric|min:0.01',
            'poReference' => 'nullable|string|max:255',
            'paymentTerms' => 'nullable|string|max:255',
            'deliveryPlace' => 'nullable|string|max:255',
            'date' => 'required|date_format:Y-m-d',
            'note' => 'nullable|string|max:1000',
            'status' => 'required|in:1,0',
            'addPayment' => 'nullable|boolean',
            'paidAmount' => [
            'nullable',
            'required_if:addPayment,1',
            Rule::when($this->input('addPayment') == 1, ['numeric', 'min:0.01', 'max:' . ($this->input('netTotal', 0) + 0.01)]),
        ],
            'account' => [
                'nullable',
                'required_if:addPayment,1',
            ],
            'chequeNo' => 'nullable|string|max:255',
            'receiptNo' => 'nullable|string|max:255',
            'isSendEmail' => 'nullable|boolean',
            'isSendSMS' => 'nullable|boolean',
            'discountType' => 'nullable|in:0,1',
            'discount' => 'nullable|numeric|min:0',
            'transportCost' => 'nullable|numeric|min:0',
            'reference' => 'nullable|string|max:255',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'client.required' => 'Please select a client.',
            'client.id.required' => 'Client ID is required.',
            'client.id.exists' => 'Selected client does not exist.',
            'selectedProducts.required' => 'Please select at least one product.',
            'selectedProducts.min' => 'Please select at least one product.',
            'selectedProducts.*.id.required' => 'Product ID is required.',
            'selectedProducts.*.id.exists' => 'Selected product does not exist.',
            'selectedProducts.*.slug.required' => 'Product slug is required.',
            'selectedProducts.*.slug.exists' => 'Selected product does not exist.',
            'selectedProducts.*.qty.required' => 'Product quantity is required.',
            'selectedProducts.*.qty.numeric' => 'Product quantity must be a number.',
            'selectedProducts.*.qty.min' => 'Product quantity must be greater than 0.',
            'selectedProducts.*.unitPrice.required' => 'Product unit price is required.',
            'selectedProducts.*.unitPrice.numeric' => 'Product unit price must be a number.',
            'selectedProducts.*.unitPrice.min' => 'Product unit price cannot be negative.',
            'selectedProducts.*.discount.numeric' => 'Product discount must be a number.',
            'selectedProducts.*.discount.min' => 'Product discount cannot be negative.',
            'selectedProducts.*.discountType.in' => 'Product discount type must be either fixed or percentage.',
            'selectedProducts.*.productTax.required' => 'Product tax is required.',
            'selectedProducts.*.productTax.numeric' => 'Product tax must be a number.',
            'selectedProducts.*.productTax.min' => 'Product tax cannot be negative.',
            'subTotal.required' => 'Subtotal is required.',
            'subTotal.numeric' => 'Subtotal must be a number.',
            'subTotal.min' => 'Subtotal cannot be negative.',
            'orderTax.required' => 'Order tax is required.',
            'netTotal.required' => 'Net total is required.',
            'netTotal.numeric' => 'Net total must be a number.',
            'netTotal.min' => 'Net total must be greater than 0.',
            'poReference.max' => 'PO Reference cannot exceed 255 characters.',
            'paymentTerms.max' => 'Payment terms cannot exceed 255 characters.',
            'deliveryPlace.max' => 'Delivery place cannot exceed 255 characters.',
            'date.required' => 'Invoice date is required.',
            'date.date_format' => 'Invoice date must be in Y-m-d format.',
            'note.max' => 'Note cannot exceed 1000 characters.',
            'status.required' => 'Status is required.',
            'status.in' => 'Status must be either active or inactive.',
            'paidAmount.required_if' => 'Paid amount is required when adding payment.',
            'paidAmount.numeric' => 'Paid amount must be a number.',
            'paidAmount.min' => 'Paid amount must be greater than 0.',
            'paidAmount.max' => 'Paid amount cannot exceed net total.',
            'account.required_if' => 'Account is required when adding payment.',
            'chequeNo.max' => 'Cheque number cannot exceed 255 characters.',
            'receiptNo.max' => 'Receipt number cannot exceed 255 characters.',
            'discount.numeric' => 'Discount must be a number.',
            'discount.min' => 'Discount cannot be negative.',
            'discountType.in' => 'Discount type must be either fixed or percentage.',
            'transportCost.numeric' => 'Transport cost must be a number.',
            'transportCost.min' => 'Transport cost cannot be negative.',
            'reference.max' => 'Reference cannot exceed 255 characters.',
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

            // Validate payment amount only when addPayment is true (1)
            if ($this->addPayment == 1 && $this->paidAmount > $this->netTotal) {
                $validator->errors()->add(
                    'paidAmount',
                    'Paid amount cannot exceed net total'
                );
            }
        });
    }
}

<?php

return [
    'sale_invoice' => 'فاتورة مبيعات :number',
    'payment_received_for_invoice' => 'دفعة مستلمة للفاتورة :number',
    'purchase' => 'مشتريات :number',
    'payment_made_for_purchase' => 'دفعة مدفوعة للمشتريات :number',
    'expense' => 'مصروف: :reason',
    'non_invoice_payment' => 'دفعة بدون فاتورة: :note',
    'loan_payment' => 'دفعة قرض: :note',
    'invoice_return' => 'إرجاع فاتورة :number',
    'balance_transfer' => 'تحويل رصيد: :reason',
    'balance_adjustment' => 'تعديل رصيد: :reason',
    'purchase_return' => 'إرجاع مشتريات PR-:code',
    'supplier_non_purchase_payment' => 'دفعة للمورد بدون مشتريات',
    
    // Journal Entry Line Descriptions
    'accounts_receivable' => 'حسابات مدينة',
    'sales_revenue_for_invoice' => 'إيرادات مبيعات للفاتورة :number',
    'vat_payable_for_invoice' => 'ضريبة القيمة المضافة مستحقة الدفع للفاتورة :number',
    'cash_bank_receipt' => 'إيصال نقدي/بنكي',
    'accounts_payable' => 'حسابات دائنة',
    'accounts_payable_for_purchase' => 'حسابات دائنة للمشتريات :number',
    'purchase_expense_for_purchase' => 'مصروف مشتريات للمشتريات :number',
    'discount_received_for_purchase' => 'خصم مستلم للمشتريات :number',
    'transport_cost_for_purchase' => 'تكلفة نقل للمشتريات :number',
    'vat_input_for_purchase' => 'ضريبة القيمة المضافة على المدخلات للمشتريات :number',
    'reduction_in_accounts_payable_for_purchase' => 'تخفيض في الحسابات الدائنة للمشتريات :number',
    'cash_bank_payment_for_purchase' => 'دفع نقدي/بنكي للمشتريات :number',
    'cash_bank_payment_for_expense' => 'دفع نقدي/بنكي للمصروف',
    'cash_bank_receipt_for_non_invoice_payment' => 'إيصال نقدي/بنكي لدفعة بدون فاتورة',
    'reduction_in_client_accounts_receivable' => 'تخفيض في حسابات العميل المدينة',
    'reduction_in_loans_payable' => 'تخفيض في القروض المستحقة',
    'cash_bank_payment_for_loan' => 'دفع نقدي/بنكي للقرض',
    'reduction_in_accounts_payable' => 'تخفيض في الحسابات الدائنة',
    'cash_bank_payment_for_non_purchase' => 'دفع نقدي/بنكي لدفعة بدون مشتريات',
    
    // VAT
    'vat_receivable' => 'ضريبة القيمة المضافة مستحقة القبض - :description',
    'vat_payable' => 'ضريبة القيمة المضافة مستحقة الدفع - :description',
    'vat_receivable_for' => 'ضريبة القيمة المضافة مستحقة القبض لـ :reference',
    'vat_payable_for' => 'ضريبة القيمة المضافة مستحقة الدفع لـ :reference',
    
    // Invoice Return
    'sales_revenue_reversal_for_return' => 'عكس إيرادات المبيعات للإرجاع :number',
    'vat_payable_reversal_for_return' => 'عكس ضريبة القيمة المضافة المستحقة للإرجاع :number',
    'discount_allowed_reversal_for_return' => 'عكس الخصم المسموح للإرجاع :number',
    'accounts_receivable_reduction_for_return' => 'تخفيض الحسابات المدينة للإرجاع :number',
    
    // Balance Transfer
    'balance_transfer_to' => 'تحويل رصيد إلى :account [:number]',
    'balance_transfer_from' => 'تحويل رصيد من :account [:number]',
    
    // Balance Adjustment
    'balance_added_to' => 'رصيد مضاف إلى :account [:number]',
    'balance_removed_from' => 'رصيد مخصوم من :account [:number]',
    'balance_adjustment_account' => 'تعديل رصيد - :name',
    
    // Purchase Return
    'purchase_return_reverse_expense' => 'إرجاع مشتريات - عكس المصروف لـ PR-:code',
    'purchase_return_reduce_payable' => 'إرجاع مشتريات - تخفيض الحسابات الدائنة لـ PR-:code',
    
    // Payment Voucher
    'payment_voucher' => 'سند دفع (:type): :note',
    'receive' => 'قبض',
    'send' => 'صرف',
    'payment_received' => 'دفعة مستلمة',
    'payment_sent' => 'دفعة مدفوعة',
    'cash_bank_payment' => 'دفع نقدي/بنكي',
    
    // Validation Messages
    'must_be_balanced' => 'يجب أن تكون قيود اليومية متوازنة. يجب أن تساوي إجمالي المدين إجمالي الدائن.',
    'line_cannot_have_both' => 'لا يمكن أن يحتوي سطر قيد اليومية على مبالغ مدين ودائن معاً.',
    'line_must_have_one' => 'يجب أن يحتوي سطر قيد اليومية على مبلغ مدين أو دائن.',
];


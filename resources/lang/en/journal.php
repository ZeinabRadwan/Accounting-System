<?php

return [
    'sale_invoice' => 'Sale Invoice :number',
    'payment_received_for_invoice' => 'Payment received for Invoice :number',
    'purchase' => 'Purchase :number',
    'payment_made_for_purchase' => 'Payment made for Purchase :number',
    'expense' => 'Expense: :reason',
    'non_invoice_payment' => 'Non-Invoice Payment: :note',
    'loan_payment' => 'Loan Payment: :note',
    'invoice_return' => 'Invoice Return :number',
    'balance_transfer' => 'Balance Transfer: :reason',
    'balance_adjustment' => 'Balance Adjustment: :reason',
    'purchase_return' => 'Purchase Return PR-:code',
    'supplier_non_purchase_payment' => 'Supplier Non-Purchase Payment',

    // Journal Entry Line Descriptions
    'accounts_receivable' => 'Accounts Receivable',
    'sales_revenue_for_invoice' => 'Sales Revenue for Invoice :number',
    'vat_payable_for_invoice' => 'VAT Payable for Invoice :number',
    'cash_bank_receipt' => 'Cash/Bank Receipt',
    'accounts_payable' => 'Accounts Payable',
    'accounts_payable_for_purchase' => 'Accounts Payable for Purchase :number',
    'purchase_expense_for_purchase' => 'Purchase Expense for Purchase :number',
    'discount_received_for_purchase' => 'Discount Received for Purchase :number',
    'transport_cost_for_purchase' => 'Transport Cost for Purchase :number',
    'vat_input_for_purchase' => 'VAT Input for Purchase :number',
    'inventory_for_purchase' => 'Inventory for Purchase :number',
    'payment_for_purchase' => 'Payment for Purchase :number',
    'reduction_in_accounts_payable_for_purchase' => 'Reduction in Accounts Payable for Purchase :number',
    'cash_bank_payment_for_purchase' => 'Cash/Bank payment for Purchase :number',
    'cash_bank_payment_for_expense' => 'Cash/Bank payment for expense',
    'cash_bank_receipt_for_non_invoice_payment' => 'Cash/Bank receipt for non-invoice payment',
    'reduction_in_client_accounts_receivable' => 'Reduction in client accounts receivable',
    'reduction_in_loans_payable' => 'Reduction in Loans Payable',
    'cash_bank_payment_for_loan' => 'Cash/Bank payment for loan',
    'reduction_in_accounts_payable' => 'Reduction in Accounts Payable',
    'cash_bank_payment_for_non_purchase' => 'Cash/Bank payment for non-purchase',

    // VAT
    'vat_receivable' => 'VAT Receivable - :description',
    'vat_payable' => 'VAT Payable - :description',
    'vat_receivable_for' => 'VAT Receivable for :reference',
    'vat_payable_for' => 'VAT Payable for :reference',

    // Invoice Return
    'sales_revenue_reversal_for_return' => 'Sales Revenue Reversal for Return :number',
    'vat_payable_reversal_for_return' => 'VAT Payable Reversal for Return :number',
    'discount_allowed_reversal_for_return' => 'Discount Allowed Reversal for Return :number',
    'accounts_receivable_reduction_for_return' => 'Accounts Receivable Reduction for Return :number',

    // Credit Note (allowed discount + 15% tax)
    'credit_note' => 'Credit Note :number',
    'discount_allowed_for_credit_note' => 'Discount Allowed for Credit Note :number',
    'vat_reduction_for_credit_note' => 'VAT Reduction for Credit Note :number',
    'accounts_receivable_reduction_for_credit_note' => 'Accounts Receivable Reduction for Credit Note :number',

    // Balance Transfer
    'balance_transfer_to' => 'Balance Transfer to :account [:number]',
    'balance_transfer_from' => 'Balance Transfer from :account [:number]',

    // Balance Adjustment
    'balance_added_to' => 'Balance Added to :account [:number]',
    'balance_removed_from' => 'Balance Removed from :account [:number]',
    'balance_adjustment_account' => 'Balance Adjustment - :name',

    // Purchase Return
    'purchase_return_reverse_expense' => 'Purchase Return - Reverse expense for PR-:code',
    'purchase_return_reduce_payable' => 'Purchase Return - Reduce payable for PR-:code',

    // Payment Voucher
    'payment_voucher' => 'Payment Voucher (:type): :note',
    'receive' => 'Receive',
    'send' => 'Send',
    'payment_received' => 'Payment Received',
    'payment_sent' => 'Payment Sent',
    'cash_bank_payment' => 'Cash/Bank Payment',

    // Validation Messages
    'must_be_balanced' => 'Journal entry must be balanced. Total debits must equal total credits.',
    'line_cannot_have_both' => 'A journal entry line cannot have both debit and credit amounts.',
    'line_must_have_one' => 'A journal entry line must have either a debit or credit amount.',
];

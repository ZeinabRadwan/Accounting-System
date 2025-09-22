<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cashbook Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used for the cashbook module including
    | balance adjustments, bank accounts, and related functionality.
    |
    */

    // Page Titles and Headers
    'Create Adjustment' => 'Create Adjustment',
    'Adjustments' => 'Adjustments',
    'Cashbook' => 'Cashbook',
    'Dashboard' => 'Dashboard',
    'Create' => 'Create',

    // Form Labels
    'Bank Account' => 'Bank Account',
    'Account' => 'Account',
    'Type' => 'Type',
    'Available Balance' => 'Available Balance',
    'Amount' => 'Amount',
    'Date' => 'Date',
    'Status' => 'Status',
    'Note' => 'Note',

    // Form Options
    'Add Balance' => 'Add Balance',
    'Remove Balance' => 'Remove Balance',
    'Active' => 'Active',
    'Inactive' => 'Inactive',

    // Placeholders
    'Select a bank account' => 'Select a bank account',
    'Select account for journal entry' => 'Select account for journal entry',
    'Enter an amount' => 'Enter an amount',
    'Write your note here!' => 'Write your note here!',

    // Buttons
    'Back' => 'Back',
    'Save' => 'Save',
    'Reset' => 'Reset',

    // Success Messages
    'Adjustment added successfully' => 'Adjustment added successfully',

    // Error Messages
    'Failed to load chart of accounts' => 'Failed to load chart of accounts',
    'Please select a second account' => 'Please select a second account',
    'Opps...something went wrong' => 'Opps...something went wrong',

    // Validation Messages
    'The bank account field is required.' => 'The bank account field is required.',
    'The account field is required.' => 'The account field is required.',
    'The amount field is required.' => 'The amount field is required.',
    'The amount must be a number.' => 'The amount must be a number.',
    'The amount must be greater than 0.' => 'The amount must be greater than 0.',
    'The amount cannot exceed available balance.' => 'The amount cannot exceed available balance.',
    'The date field is required.' => 'The date field is required.',
    'The date must be a valid date.' => 'The date must be a valid date.',
    'The status field is required.' => 'The status field is required.',
    'The note field is optional.' => 'The note field is optional.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Please select a bank account.',
            'exists' => 'The selected bank account is invalid.',
        ],
        'secondAccount' => [
            'required' => 'Please select a second account for journal entry.',
            'exists' => 'The selected account is invalid.',
        ],
        'amount' => [
            'required' => 'The amount field is required.',
            'numeric' => 'The amount must be a valid number.',
            'min' => 'The amount must be greater than 0.',
            'max' => 'The amount cannot exceed the available balance.',
        ],
        'date' => [
            'required' => 'The date field is required.',
            'date' => 'The date must be a valid date.',
        ],
        'type' => [
            'required' => 'The type field is required.',
            'in' => 'The selected type is invalid.',
        ],
        'status' => [
            'required' => 'The status field is required.',
            'in' => 'The selected status is invalid.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'bank account',
        'secondAccount' => 'second account',
        'amount' => 'amount',
        'date' => 'date',
        'type' => 'type',
        'status' => 'status',
        'note' => 'note',
    ],

    // Accounts Module
    'Bank Accounts' => 'Bank Accounts',
    'Add Bank Account' => 'Add Bank Account',
    'Edit Bank Account' => 'Edit Bank Account',
    'Bank Account Details' => 'Bank Account Details',
    'Bank Name' => 'Bank Name',
    'Enter bank name' => 'Enter bank name',
    'Account Number' => 'Account Number',
    'Enter account number' => 'Enter account number',
    'Account Holder Name' => 'Account Holder Name',
    'Enter account holder name' => 'Enter account holder name',
    'Opening Balance' => 'Opening Balance',
    'Enter opening balance' => 'Enter opening balance',
    'Contact Number' => 'Contact Number',
    'Enter contact number' => 'Enter contact number',
    'Bank Address' => 'Bank Address',
    'Enter bank address' => 'Enter bank address',
    'Account added successfully' => 'Account added successfully',
    'Account updated successfully' => 'Account updated successfully',
    'Account deleted successfully' => 'Account deleted successfully',
    'Are you sure you want to delete this account?' => 'Are you sure you want to delete this account?',
    'This account cannot be deleted' => 'This account cannot be deleted',

    // Chart of Accounts Module
    'Chart of Accounts' => 'Chart of Accounts',
    'Add Account' => 'Add Account',
    'Edit Account' => 'Edit Account',
    'Account Details' => 'Account Details',
    'Account Name' => 'Account Name',
    'Enter account name' => 'Enter account name',
    'Account Code' => 'Account Code',
    'Enter account code' => 'Enter account code',
    'Account Type' => 'Account Type',
    'Select account type' => 'Select account type',
    'Parent Account' => 'Parent Account',
    'Select parent account' => 'Select parent account',
    'Description' => 'Description',
    'Enter description' => 'Enter description',
    'Account created successfully' => 'Account created successfully',
    'Tree View' => 'Tree View',
    'Select an Account' => 'Select an Account',
    'Click on any account in the tree to view its details and child accounts.' => 'Click on any account in the tree to view its details and child accounts.',
    'Account Code:' => 'Account Code:',
    'Type:' => 'Type:',
    'Debit' => 'Debit',
    'Credit' => 'Credit',
    'Balance' => 'Balance',
    'Child Accounts' => 'Child Accounts',
    'No Child Accounts' => 'No Child Accounts',
    'This account doesn\'t have any child accounts.' => 'This account doesn\'t have any child accounts.',
    'View' => 'View',
    'Delete' => 'Delete',
    'Refresh' => 'Refresh',
    'Export to Excel' => 'Export to Excel',
    'Export to PDF' => 'Export to PDF',
    'Print Table' => 'Print Table',

    // Transactions Module
    'Transaction History' => 'Transaction History',
    'History' => 'History',
    'Reason' => 'Reason',
    'Created By' => 'Created By',
    'per_page' => 'per_page',
    'From' => 'From',
    'To' => 'To',

    // Transfer Balances Module
    'Balance Transfers' => 'Balance Transfers',
    'Create Transfer' => 'Create Transfer',
    'Edit Balance Transfer' => 'Edit Balance Transfer',
    'Balance Transfers Details' => 'Balance Transfers Details',
    'Transfer Reason' => 'Transfer Reason',
    'Enter a reason' => 'Enter a reason',
    'From Account' => 'From Account',
    'To Account' => 'To Account',
    'Select an account' => 'Select an account',
    'Balance transfer added successfully' => 'Balance transfer added successfully',
    'Transfer updated successfully' => 'Transfer updated successfully',
    'Save changes' => 'Save changes',
    'Details' => 'Details',
    'Activity log' => 'Activity log',
    'download' => 'download',
    'Print' => 'Print',
    'Transfers Details' => 'Transfers Details',
    'Balance Transfer' => 'Balance Transfer',

    // Common Actions
    'Add' => 'Add',
    'Update' => 'Update',
    'Cancel' => 'Cancel',
    'Confirm' => 'Confirm',
    'Are you sure?' => 'Are you sure?',
    'You will not be able to return to this!' => 'You will not be able to return to this!',
    'Deleted!' => 'Deleted!',
    'Deleted successfully.' => 'Deleted successfully.',
    'Cannot Delete' => 'Cannot Delete',
    'Sorry you can\'t remove this item!' => 'Sorry you can\'t remove this item!',
    'Failed!' => 'Failed!',
    'Export' => 'Export',
    'Import' => 'Import',
    'Search' => 'Search',
    'Filter' => 'Filter',
    'Clear' => 'Clear',
    'Apply' => 'Apply',
    'Close' => 'Close',
    'Loading...' => 'Loading...',
    'No data available' => 'No data available',
    'Showing' => 'Showing',
    'to' => 'to',
    'of' => 'of',
    'entries' => 'entries',
    'Previous' => 'Previous',
    'Next' => 'Next',
    'First' => 'First',
    'Last' => 'Last',
];

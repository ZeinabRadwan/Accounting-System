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
];

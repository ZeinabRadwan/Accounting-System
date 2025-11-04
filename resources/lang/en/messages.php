<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Transfer Balance Messages
    |--------------------------------------------------------------------------
    |
    | The following language lines are used for transfer balance operations
    | including success and error messages.
    |
    */

    // Error Messages
    'Debit bank account not found.' => 'Debit bank account not found.',
    'Credit bank account not found.' => 'Credit bank account not found.',
    'Failed to create journal entry: ' => 'Failed to create journal entry: ',
    'Failed to create journal entries: ' => 'Failed to create journal entries: ',
    'Failed to create journal entries: Client must have a Chart of Account assigned for journal entries' => 'Failed to create journal entries: Client must have a Chart of Account assigned for journal entries',
    'Failed to create journal entries: Client must have a Chart of Account assigned for journal entries.' => 'Failed to create journal entries: Client must have a Chart of Account assigned for journal entries.',
    'This transfer is linked to a journal entry (draft/posted) and cannot be deleted.' => 'This transfer is linked to a journal entry (draft/posted) and cannot be deleted.',
    'Sorry you can\'t delete this transfer!' => 'Sorry you can\'t delete this transfer!',

    // Success Messages
    'Transfer added successfully' => 'Transfer added successfully',
    'Transfer updated successfully' => 'Transfer updated successfully',
    'Transfer deleted successfully' => 'Transfer deleted successfully',
    // General / Shared
    'posted_journal_delete_error' => 'This transaction is linked to a posted journal entry and cannot be deleted.',
];

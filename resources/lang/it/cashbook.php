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
    'Create Adjustment' => 'Crea Rettifica',
    'Adjustments' => 'Rettifiche',
    'Cashbook' => 'Libro Cassa',
    'Dashboard' => 'Dashboard',
    'Create' => 'Crea',

    // Form Labels
    'Bank Account' => 'Conto Bancario',
    'Account' => 'Conto',
    'Type' => 'Tipo',
    'Available Balance' => 'Saldo Disponibile',
    'Amount' => 'Importo',
    'Date' => 'Data',
    'Status' => 'Stato',
    'Note' => 'Nota',

    // Form Options
    'Add Balance' => 'Aggiungi Saldo',
    'Remove Balance' => 'Rimuovi Saldo',
    'Active' => 'Attivo',
    'Inactive' => 'Inattivo',

    // Placeholders
    'Select a bank account' => 'Seleziona un conto bancario',
    'Select account for journal entry' => 'Seleziona conto per registrazione contabile',
    'Enter an amount' => 'Inserisci un importo',
    'Write your note here!' => 'Scrivi qui la tua nota!',

    // Buttons
    'Back' => 'Indietro',
    'Save' => 'Salva',
    'Reset' => 'Reimposta',

    // Success Messages
    'Adjustment added successfully' => 'Rettifica aggiunta con successo',
    'Chart of account added successfully' => 'Piano dei conti aggiunto con successo',

    // Error Messages
    'Failed to load chart of accounts' => 'Errore nel caricamento del piano dei conti',
    'Please select a second account' => 'Seleziona un secondo conto',
    'Opps...something went wrong' => 'Ops... qualcosa è andato storto',

    // Validation Messages
    'The bank account field is required.' => 'Il campo conto bancario è obbligatorio.',
    'The account field is required.' => 'Il campo conto è obbligatorio.',
    'The amount field is required.' => 'Il campo importo è obbligatorio.',
    'The amount must be a number.' => 'L\'importo deve essere un numero.',
    'The amount must be greater than 0.' => 'L\'importo deve essere maggiore di 0.',
    'The amount cannot exceed available balance.' => 'L\'importo non può superare il saldo disponibile.',
    'The date field is required.' => 'Il campo data è obbligatorio.',
    'The date must be a valid date.' => 'La data deve essere una data valida.',
    'The status field is required.' => 'Il campo stato è obbligatorio.',
    'The note field is optional.' => 'Il campo nota è opzionale.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Seleziona un conto bancario.',
            'exists' => 'Il conto bancario selezionato non è valido.',
        ],
        'secondAccount' => [
            'required' => 'Seleziona un secondo conto per la registrazione contabile.',
            'exists' => 'Il conto selezionato non è valido.',
        ],
        'amount' => [
            'required' => 'Il campo importo è obbligatorio.',
            'numeric' => 'L\'importo deve essere un numero valido.',
            'min' => 'L\'importo deve essere maggiore di 0.',
            'max' => 'L\'importo non può superare il saldo disponibile.',
        ],
        'date' => [
            'required' => 'Il campo data è obbligatorio.',
            'date' => 'La data deve essere una data valida.',
        ],
        'type' => [
            'required' => 'Il campo tipo è obbligatorio.',
            'in' => 'Il tipo selezionato non è valido.',
        ],
        'status' => [
            'required' => 'Il campo stato è obbligatorio.',
            'in' => 'Lo stato selezionato non è valido.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'conto bancario',
        'secondAccount' => 'secondo conto',
        'amount' => 'importo',
        'date' => 'data',
        'type' => 'tipo',
        'status' => 'stato',
        'note' => 'nota',
    ],
];

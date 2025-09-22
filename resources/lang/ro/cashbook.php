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
    'Create Adjustment' => 'Creează Ajustare',
    'Adjustments' => 'Ajustări',
    'Cashbook' => 'Registrul de Numerar',
    'Dashboard' => 'Panou de Control',
    'Create' => 'Creează',

    // Form Labels
    'Bank Account' => 'Cont Bancar',
    'Account' => 'Cont',
    'Type' => 'Tip',
    'Available Balance' => 'Sold Disponibil',
    'Amount' => 'Sumă',
    'Date' => 'Data',
    'Status' => 'Status',
    'Note' => 'Notă',

    // Form Options
    'Add Balance' => 'Adaugă Sold',
    'Remove Balance' => 'Elimină Sold',
    'Active' => 'Activ',
    'Inactive' => 'Inactiv',

    // Placeholders
    'Select a bank account' => 'Selectează un cont bancar',
    'Select account for journal entry' => 'Selectează cont pentru înregistrarea contabilă',
    'Enter an amount' => 'Introdu o sumă',
    'Write your note here!' => 'Scrie nota ta aici!',

    // Buttons
    'Back' => 'Înapoi',
    'Save' => 'Salvează',
    'Reset' => 'Resetează',

    // Success Messages
    'Adjustment added successfully' => 'Ajustarea a fost adăugată cu succes',

    // Error Messages
    'Failed to load chart of accounts' => 'Eroare la încărcarea planului de conturi',
    'Please select a second account' => 'Te rog selectează un al doilea cont',
    'Opps...something went wrong' => 'Ups... ceva a mers prost',

    // Validation Messages
    'The bank account field is required.' => 'Câmpul cont bancar este obligatoriu.',
    'The account field is required.' => 'Câmpul cont este obligatoriu.',
    'The amount field is required.' => 'Câmpul sumă este obligatoriu.',
    'The amount must be a number.' => 'Suma trebuie să fie un număr.',
    'The amount must be greater than 0.' => 'Suma trebuie să fie mai mare decât 0.',
    'The amount cannot exceed available balance.' => 'Suma nu poate depăși soldul disponibil.',
    'The date field is required.' => 'Câmpul dată este obligatoriu.',
    'The date must be a valid date.' => 'Data trebuie să fie o dată validă.',
    'The status field is required.' => 'Câmpul status este obligatoriu.',
    'The note field is optional.' => 'Câmpul notă este opțional.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Te rog selectează un cont bancar.',
            'exists' => 'Contul bancar selectat este invalid.',
        ],
        'secondAccount' => [
            'required' => 'Te rog selectează un al doilea cont pentru înregistrarea contabilă.',
            'exists' => 'Contul selectat este invalid.',
        ],
        'amount' => [
            'required' => 'Câmpul sumă este obligatoriu.',
            'numeric' => 'Suma trebuie să fie un număr valid.',
            'min' => 'Suma trebuie să fie mai mare decât 0.',
            'max' => 'Suma nu poate depăși soldul disponibil.',
        ],
        'date' => [
            'required' => 'Câmpul dată este obligatoriu.',
            'date' => 'Data trebuie să fie o dată validă.',
        ],
        'type' => [
            'required' => 'Câmpul tip este obligatoriu.',
            'in' => 'Tipul selectat este invalid.',
        ],
        'status' => [
            'required' => 'Câmpul status este obligatoriu.',
            'in' => 'Statusul selectat este invalid.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'cont bancar',
        'secondAccount' => 'al doilea cont',
        'amount' => 'sumă',
        'date' => 'dată',
        'type' => 'tip',
        'status' => 'status',
        'note' => 'notă',
    ],
];

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
    'Create Adjustment' => 'Aanpassing Maken',
    'Adjustments' => 'Aanpassingen',
    'Cashbook' => 'Kasboek',
    'Dashboard' => 'Dashboard',
    'Create' => 'Maken',

    // Form Labels
    'Bank Account' => 'Bankrekening',
    'Account' => 'Rekening',
    'Type' => 'Type',
    'Available Balance' => 'Beschikbaar Saldo',
    'Amount' => 'Bedrag',
    'Date' => 'Datum',
    'Status' => 'Status',
    'Note' => 'Notitie',

    // Form Options
    'Add Balance' => 'Saldo Toevoegen',
    'Remove Balance' => 'Saldo Verwijderen',
    'Active' => 'Actief',
    'Inactive' => 'Inactief',

    // Placeholders
    'Select a bank account' => 'Selecteer een bankrekening',
    'Select account for journal entry' => 'Selecteer rekening voor journaalpost',
    'Enter an amount' => 'Voer een bedrag in',
    'Write your note here!' => 'Schrijf hier uw notitie!',

    // Buttons
    'Back' => 'Terug',
    'Save' => 'Opslaan',
    'Reset' => 'Resetten',

    // Success Messages
    'Adjustment added successfully' => 'Aanpassing succesvol toegevoegd',

    // Error Messages
    'Failed to load chart of accounts' => 'Fout bij het laden van het rekeningenplan',
    'Please select a second account' => 'Selecteer een tweede rekening',
    'Opps...something went wrong' => 'Oeps... er ging iets mis',

    // Validation Messages
    'The bank account field is required.' => 'Het bankrekening veld is verplicht.',
    'The account field is required.' => 'Het rekening veld is verplicht.',
    'The amount field is required.' => 'Het bedrag veld is verplicht.',
    'The amount must be a number.' => 'Het bedrag moet een nummer zijn.',
    'The amount must be greater than 0.' => 'Het bedrag moet groter zijn dan 0.',
    'The amount cannot exceed available balance.' => 'Het bedrag kan het beschikbare saldo niet overschrijden.',
    'The date field is required.' => 'Het datum veld is verplicht.',
    'The date must be a valid date.' => 'De datum moet een geldige datum zijn.',
    'The status field is required.' => 'Het status veld is verplicht.',
    'The note field is optional.' => 'Het notitie veld is optioneel.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Selecteer een bankrekening.',
            'exists' => 'De geselecteerde bankrekening is ongeldig.',
        ],
        'secondAccount' => [
            'required' => 'Selecteer een tweede rekening voor de journaalpost.',
            'exists' => 'De geselecteerde rekening is ongeldig.',
        ],
        'amount' => [
            'required' => 'Het bedrag veld is verplicht.',
            'numeric' => 'Het bedrag moet een geldig nummer zijn.',
            'min' => 'Het bedrag moet groter zijn dan 0.',
            'max' => 'Het bedrag kan het beschikbare saldo niet overschrijden.',
        ],
        'date' => [
            'required' => 'Het datum veld is verplicht.',
            'date' => 'De datum moet een geldige datum zijn.',
        ],
        'type' => [
            'required' => 'Het type veld is verplicht.',
            'in' => 'Het geselecteerde type is ongeldig.',
        ],
        'status' => [
            'required' => 'Het status veld is verplicht.',
            'in' => 'De geselecteerde status is ongeldig.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'bankrekening',
        'secondAccount' => 'tweede rekening',
        'amount' => 'bedrag',
        'date' => 'datum',
        'type' => 'type',
        'status' => 'status',
        'note' => 'notitie',
    ],
];

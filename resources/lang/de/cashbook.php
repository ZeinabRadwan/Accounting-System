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
    'Create Adjustment' => 'Anpassung Erstellen',
    'Adjustments' => 'Anpassungen',
    'Cashbook' => 'Kassenbuch',
    'Dashboard' => 'Dashboard',
    'Create' => 'Erstellen',

    // Form Labels
    'Bank Account' => 'Bankkonto',
    'Account' => 'Konto',
    'Type' => 'Typ',
    'Available Balance' => 'Verfügbarer Saldo',
    'Amount' => 'Betrag',
    'Date' => 'Datum',
    'Status' => 'Status',
    'Note' => 'Notiz',

    // Form Options
    'Add Balance' => 'Saldo Hinzufügen',
    'Remove Balance' => 'Saldo Entfernen',
    'Active' => 'Aktiv',
    'Inactive' => 'Inaktiv',

    // Placeholders
    'Select a bank account' => 'Wählen Sie ein Bankkonto',
    'Select account for journal entry' => 'Wählen Sie ein Konto für Buchungssatz',
    'Enter an amount' => 'Geben Sie einen Betrag ein',
    'Write your note here!' => 'Schreiben Sie hier Ihre Notiz!',

    // Buttons
    'Back' => 'Zurück',
    'Save' => 'Speichern',
    'Reset' => 'Zurücksetzen',

    // Success Messages
    'Adjustment added successfully' => 'Anpassung erfolgreich hinzugefügt',

    // Error Messages
    'Failed to load chart of accounts' => 'Fehler beim Laden des Kontenplans',
    'Please select a second account' => 'Bitte wählen Sie ein zweites Konto',
    'Opps...something went wrong' => 'Ups... etwas ist schief gelaufen',

    // Validation Messages
    'The bank account field is required.' => 'Das Bankkonto-Feld ist erforderlich.',
    'The account field is required.' => 'Das Konto-Feld ist erforderlich.',
    'The amount field is required.' => 'Das Betrag-Feld ist erforderlich.',
    'The amount must be a number.' => 'Der Betrag muss eine Zahl sein.',
    'The amount must be greater than 0.' => 'Der Betrag muss größer als 0 sein.',
    'The amount cannot exceed available balance.' => 'Der Betrag darf den verfügbaren Saldo nicht überschreiten.',
    'The date field is required.' => 'Das Datum-Feld ist erforderlich.',
    'The date must be a valid date.' => 'Das Datum muss ein gültiges Datum sein.',
    'The status field is required.' => 'Das Status-Feld ist erforderlich.',
    'The note field is optional.' => 'Das Notiz-Feld ist optional.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Bitte wählen Sie ein Bankkonto.',
            'exists' => 'Das ausgewählte Bankkonto ist ungültig.',
        ],
        'secondAccount' => [
            'required' => 'Bitte wählen Sie ein zweites Konto für den Buchungssatz.',
            'exists' => 'Das ausgewählte Konto ist ungültig.',
        ],
        'amount' => [
            'required' => 'Das Betrag-Feld ist erforderlich.',
            'numeric' => 'Der Betrag muss eine gültige Zahl sein.',
            'min' => 'Der Betrag muss größer als 0 sein.',
            'max' => 'Der Betrag darf den verfügbaren Saldo nicht überschreiten.',
        ],
        'date' => [
            'required' => 'Das Datum-Feld ist erforderlich.',
            'date' => 'Das Datum muss ein gültiges Datum sein.',
        ],
        'type' => [
            'required' => 'Das Typ-Feld ist erforderlich.',
            'in' => 'Der ausgewählte Typ ist ungültig.',
        ],
        'status' => [
            'required' => 'Das Status-Feld ist erforderlich.',
            'in' => 'Der ausgewählte Status ist ungültig.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'Bankkonto',
        'secondAccount' => 'zweites Konto',
        'amount' => 'Betrag',
        'date' => 'Datum',
        'type' => 'Typ',
        'status' => 'Status',
        'note' => 'Notiz',
    ],
];

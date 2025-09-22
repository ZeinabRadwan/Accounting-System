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
    'Create Adjustment' => 'Utwórz Korektę',
    'Adjustments' => 'Korekty',
    'Cashbook' => 'Księga Kasowa',
    'Dashboard' => 'Panel',
    'Create' => 'Utwórz',

    // Form Labels
    'Bank Account' => 'Konto Bankowe',
    'Account' => 'Konto',
    'Type' => 'Typ',
    'Available Balance' => 'Dostępne Saldo',
    'Amount' => 'Kwota',
    'Date' => 'Data',
    'Status' => 'Status',
    'Note' => 'Notatka',

    // Form Options
    'Add Balance' => 'Dodaj Saldo',
    'Remove Balance' => 'Usuń Saldo',
    'Active' => 'Aktywny',
    'Inactive' => 'Nieaktywny',

    // Placeholders
    'Select a bank account' => 'Wybierz konto bankowe',
    'Select account for journal entry' => 'Wybierz konto dla zapisu księgowego',
    'Enter an amount' => 'Wprowadź kwotę',
    'Write your note here!' => 'Napisz tutaj swoją notatkę!',

    // Buttons
    'Back' => 'Wstecz',
    'Save' => 'Zapisz',
    'Reset' => 'Resetuj',

    // Success Messages
    'Adjustment added successfully' => 'Korekta została pomyślnie dodana',

    // Error Messages
    'Failed to load chart of accounts' => 'Nie udało się załadować planu kont',
    'Please select a second account' => 'Proszę wybrać drugie konto',
    'Opps...something went wrong' => 'Ups... coś poszło nie tak',

    // Validation Messages
    'The bank account field is required.' => 'Pole konto bankowe jest wymagane.',
    'The account field is required.' => 'Pole konto jest wymagane.',
    'The amount field is required.' => 'Pole kwota jest wymagane.',
    'The amount must be a number.' => 'Kwota musi być liczbą.',
    'The amount must be greater than 0.' => 'Kwota musi być większa niż 0.',
    'The amount cannot exceed available balance.' => 'Kwota nie może przekraczać dostępnego salda.',
    'The date field is required.' => 'Pole data jest wymagane.',
    'The date must be a valid date.' => 'Data musi być prawidłową datą.',
    'The status field is required.' => 'Pole status jest wymagane.',
    'The note field is optional.' => 'Pole notatka jest opcjonalne.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Proszę wybrać konto bankowe.',
            'exists' => 'Wybrane konto bankowe jest nieprawidłowe.',
        ],
        'secondAccount' => [
            'required' => 'Proszę wybrać drugie konto dla zapisu księgowego.',
            'exists' => 'Wybrane konto jest nieprawidłowe.',
        ],
        'amount' => [
            'required' => 'Pole kwota jest wymagane.',
            'numeric' => 'Kwota musi być prawidłową liczbą.',
            'min' => 'Kwota musi być większa niż 0.',
            'max' => 'Kwota nie może przekraczać dostępnego salda.',
        ],
        'date' => [
            'required' => 'Pole data jest wymagane.',
            'date' => 'Data musi być prawidłową datą.',
        ],
        'type' => [
            'required' => 'Pole typ jest wymagane.',
            'in' => 'Wybrany typ jest nieprawidłowy.',
        ],
        'status' => [
            'required' => 'Pole status jest wymagane.',
            'in' => 'Wybrany status jest nieprawidłowy.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'konto bankowe',
        'secondAccount' => 'drugie konto',
        'amount' => 'kwota',
        'date' => 'data',
        'type' => 'typ',
        'status' => 'status',
        'note' => 'notatka',
    ],
];

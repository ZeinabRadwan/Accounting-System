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
    'Create Adjustment' => 'Créer un Ajustement',
    'Adjustments' => 'Ajustements',
    'Cashbook' => 'Livre de Caisse',
    'Dashboard' => 'Tableau de Bord',
    'Create' => 'Créer',

    // Form Labels
    'Bank Account' => 'Compte Bancaire',
    'Account' => 'Compte',
    'Type' => 'Type',
    'Available Balance' => 'Solde Disponible',
    'Amount' => 'Montant',
    'Date' => 'Date',
    'Status' => 'Statut',
    'Note' => 'Note',

    // Form Options
    'Add Balance' => 'Ajouter un Solde',
    'Remove Balance' => 'Retirer un Solde',
    'Active' => 'Actif',
    'Inactive' => 'Inactif',

    // Placeholders
    'Select a bank account' => 'Sélectionnez un compte bancaire',
    'Select account for journal entry' => 'Sélectionnez un compte pour l\'écriture comptable',
    'Enter an amount' => 'Entrez un montant',
    'Write your note here!' => 'Écrivez votre note ici !',

    // Buttons
    'Back' => 'Retour',
    'Save' => 'Enregistrer',
    'Reset' => 'Réinitialiser',

    // Success Messages
    'Adjustment added successfully' => 'Ajustement ajouté avec succès',

    // Error Messages
    'Failed to load chart of accounts' => 'Échec du chargement du plan comptable',
    'Please select a second account' => 'Veuillez sélectionner un deuxième compte',
    'Opps...something went wrong' => 'Oups... quelque chose s\'est mal passé',

    // Validation Messages
    'The bank account field is required.' => 'Le champ compte bancaire est requis.',
    'The account field is required.' => 'Le champ compte est requis.',
    'The amount field is required.' => 'Le champ montant est requis.',
    'The amount must be a number.' => 'Le montant doit être un nombre.',
    'The amount must be greater than 0.' => 'Le montant doit être supérieur à 0.',
    'The amount cannot exceed available balance.' => 'Le montant ne peut pas dépasser le solde disponible.',
    'The date field is required.' => 'Le champ date est requis.',
    'The date must be a valid date.' => 'La date doit être une date valide.',
    'The status field is required.' => 'Le champ statut est requis.',
    'The note field is optional.' => 'Le champ note est optionnel.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Veuillez sélectionner un compte bancaire.',
            'exists' => 'Le compte bancaire sélectionné n\'est pas valide.',
        ],
        'secondAccount' => [
            'required' => 'Veuillez sélectionner un deuxième compte pour l\'écriture comptable.',
            'exists' => 'Le compte sélectionné n\'est pas valide.',
        ],
        'amount' => [
            'required' => 'Le champ montant est requis.',
            'numeric' => 'Le montant doit être un nombre valide.',
            'min' => 'Le montant doit être supérieur à 0.',
            'max' => 'Le montant ne peut pas dépasser le solde disponible.',
        ],
        'date' => [
            'required' => 'Le champ date est requis.',
            'date' => 'La date doit être une date valide.',
        ],
        'type' => [
            'required' => 'Le champ type est requis.',
            'in' => 'Le type sélectionné n\'est pas valide.',
        ],
        'status' => [
            'required' => 'Le champ statut est requis.',
            'in' => 'Le statut sélectionné n\'est pas valide.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'compte bancaire',
        'secondAccount' => 'deuxième compte',
        'amount' => 'montant',
        'date' => 'date',
        'type' => 'type',
        'status' => 'statut',
        'note' => 'note',
    ],
];

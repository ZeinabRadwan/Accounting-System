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

    // Accounts Module
    'Bank Accounts' => 'Comptes Bancaires',
    'Add Bank Account' => 'Ajouter un Compte Bancaire',
    'Edit Bank Account' => 'Modifier le Compte Bancaire',
    'Bank Account Details' => 'Détails du Compte Bancaire',
    'Bank Name' => 'Nom de la Banque',
    'Enter bank name' => 'Entrez le nom de la banque',
    'Account Number' => 'Numéro de Compte',
    'Enter account number' => 'Entrez le numéro de compte',
    'Account Holder Name' => 'Nom du Titulaire',
    'Enter account holder name' => 'Entrez le nom du titulaire',
    'Opening Balance' => 'Solde d\'Ouverture',
    'Enter opening balance' => 'Entrez le solde d\'ouverture',
    'Contact Number' => 'Numéro de Contact',
    'Enter contact number' => 'Entrez le numéro de contact',
    'Bank Address' => 'Adresse de la Banque',
    'Enter bank address' => 'Entrez l\'adresse de la banque',
    'Account added successfully' => 'Compte ajouté avec succès',
    'Account updated successfully' => 'Compte mis à jour avec succès',
    'Account deleted successfully' => 'Compte supprimé avec succès',
    'Are you sure you want to delete this account?' => 'Êtes-vous sûr de vouloir supprimer ce compte ?',
    'This account cannot be deleted' => 'Ce compte ne peut pas être supprimé',

    // Chart of Accounts Module
    'Chart of Accounts' => 'Plan Comptable',
    'Add Account' => 'Ajouter un Compte',
    'Edit Account' => 'Modifier le Compte',
    'Account Details' => 'Détails du Compte',
    'Account Name' => 'Nom du Compte',
    'Enter account name' => 'Entrez le nom du compte',
    'Account Code' => 'Code du Compte',
    'Enter account code' => 'Entrez le code du compte',
    'Account Type' => 'Type de Compte',
    'Select account type' => 'Sélectionnez le type de compte',
    'Parent Account' => 'Compte Parent',
    'Select parent account' => 'Sélectionnez le compte parent',
    'Description' => 'Description',
    'Enter description' => 'Entrez la description',
    'Account created successfully' => 'Compte créé avec succès',
    'Tree View' => 'Vue en Arbre',
    'Select an Account' => 'Sélectionnez un Compte',
    'Click on any account in the tree to view its details and child accounts.' => 'Cliquez sur n\'importe quel compte dans l\'arbre pour voir ses détails et comptes enfants.',
    'Account Code:' => 'Code du Compte :',
    'Type:' => 'Type :',
    'Debit' => 'Débit',
    'Credit' => 'Crédit',
    'Balance' => 'Solde',
    'Child Accounts' => 'Comptes Enfants',
    'No Child Accounts' => 'Aucun Compte Enfant',
    'This account doesn\'t have any child accounts.' => 'Ce compte n\'a pas de comptes enfants.',
    'View' => 'Voir',
    'Delete' => 'Supprimer',
    'Refresh' => 'Actualiser',
    'Export to Excel' => 'Exporter vers Excel',
    'Export to PDF' => 'Exporter vers PDF',
    'Print Table' => 'Imprimer le Tableau',

    // Transactions Module
    'Transaction History' => 'Historique des Transactions',
    'History' => 'Historique',
    'Reason' => 'Raison',
    'Created By' => 'Créé Par',
    'per_page' => 'par_page',
    'From' => 'De',
    'To' => 'À',

    // Transfer Balances Module
    'Balance Transfers' => 'Transferts de Solde',
    'Create Transfer' => 'Créer un Transfert',
    'Edit Balance Transfer' => 'Modifier le Transfert de Solde',
    'Balance Transfers Details' => 'Détails des Transferts de Solde',
    'Transfer Reason' => 'Raison du Transfert',
    'Enter a reason' => 'Entrez une raison',
    'From Account' => 'Du Compte',
    'To Account' => 'Vers le Compte',
    'Select an account' => 'Sélectionnez un compte',
    'Balance transfer added successfully' => 'Transfert de solde ajouté avec succès',
    'Transfer updated successfully' => 'Transfert mis à jour avec succès',
    'Save changes' => 'Sauvegarder les modifications',
    'Details' => 'Détails',
    'Activity log' => 'Journal d\'activité',
    'download' => 'télécharger',
    'Print' => 'Imprimer',
    'Transfers Details' => 'Détails des Transferts',
    'Balance Transfer' => 'Transfert de Solde',

    // Common Actions
    'Add' => 'Ajouter',
    'Update' => 'Mettre à jour',
    'Cancel' => 'Annuler',
    'Confirm' => 'Confirmer',
    'Are you sure?' => 'Êtes-vous sûr ?',
    'You will not be able to return to this!' => 'Vous ne pourrez pas revenir à ceci !',
    'Deleted!' => 'Supprimé !',
    'Deleted successfully.' => 'Supprimé avec succès.',
    'Cannot Delete' => 'Impossible de supprimer',
    'Sorry you can\'t remove this item!' => 'Désolé, vous ne pouvez pas supprimer cet élément !',
    'Failed!' => 'Échec !',
    'Export' => 'Exporter',
    'Import' => 'Importer',
    'Search' => 'Rechercher',
    'Filter' => 'Filtrer',
    'Clear' => 'Effacer',
    'Apply' => 'Appliquer',
    'Close' => 'Fermer',
    'Loading...' => 'Chargement...',
    'No data available' => 'Aucune donnée disponible',
    'Showing' => 'Affichage',
    'to' => 'à',
    'of' => 'de',
    'entries' => 'entrées',
    'Previous' => 'Précédent',
    'Next' => 'Suivant',
    'First' => 'Premier',
    'Last' => 'Dernier',
];

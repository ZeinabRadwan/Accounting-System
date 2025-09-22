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
    'Create Adjustment' => 'Criar Ajuste',
    'Adjustments' => 'Ajustes',
    'Cashbook' => 'Livro Caixa',
    'Dashboard' => 'Painel de Controle',
    'Create' => 'Criar',

    // Form Labels
    'Bank Account' => 'Conta Bancária',
    'Account' => 'Conta',
    'Type' => 'Tipo',
    'Available Balance' => 'Saldo Disponível',
    'Amount' => 'Valor',
    'Date' => 'Data',
    'Status' => 'Status',
    'Note' => 'Nota',

    // Form Options
    'Add Balance' => 'Adicionar Saldo',
    'Remove Balance' => 'Remover Saldo',
    'Active' => 'Ativo',
    'Inactive' => 'Inativo',

    // Placeholders
    'Select a bank account' => 'Selecione uma conta bancária',
    'Select account for journal entry' => 'Selecione conta para lançamento contábil',
    'Enter an amount' => 'Digite um valor',
    'Write your note here!' => 'Escreva sua nota aqui!',

    // Buttons
    'Back' => 'Voltar',
    'Save' => 'Salvar',
    'Reset' => 'Reiniciar',

    // Success Messages
    'Adjustment added successfully' => 'Ajuste adicionado com sucesso',

    // Error Messages
    'Failed to load chart of accounts' => 'Falha ao carregar plano de contas',
    'Please select a second account' => 'Selecione uma segunda conta',
    'Opps...something went wrong' => 'Ops... algo deu errado',

    // Validation Messages
    'The bank account field is required.' => 'O campo conta bancária é obrigatório.',
    'The account field is required.' => 'O campo conta é obrigatório.',
    'The amount field is required.' => 'O campo valor é obrigatório.',
    'The amount must be a number.' => 'O valor deve ser um número.',
    'The amount must be greater than 0.' => 'O valor deve ser maior que 0.',
    'The amount cannot exceed available balance.' => 'O valor não pode exceder o saldo disponível.',
    'The date field is required.' => 'O campo data é obrigatório.',
    'The date must be a valid date.' => 'A data deve ser uma data válida.',
    'The status field is required.' => 'O campo status é obrigatório.',
    'The note field is optional.' => 'O campo nota é opcional.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Selecione uma conta bancária.',
            'exists' => 'A conta bancária selecionada é inválida.',
        ],
        'secondAccount' => [
            'required' => 'Selecione uma segunda conta para o lançamento contábil.',
            'exists' => 'A conta selecionada é inválida.',
        ],
        'amount' => [
            'required' => 'O campo valor é obrigatório.',
            'numeric' => 'O valor deve ser um número válido.',
            'min' => 'O valor deve ser maior que 0.',
            'max' => 'O valor não pode exceder o saldo disponível.',
        ],
        'date' => [
            'required' => 'O campo data é obrigatório.',
            'date' => 'A data deve ser uma data válida.',
        ],
        'type' => [
            'required' => 'O campo tipo é obrigatório.',
            'in' => 'O tipo selecionado é inválido.',
        ],
        'status' => [
            'required' => 'O campo status é obrigatório.',
            'in' => 'O status selecionado é inválido.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'conta bancária',
        'secondAccount' => 'segunda conta',
        'amount' => 'valor',
        'date' => 'data',
        'type' => 'tipo',
        'status' => 'status',
        'note' => 'nota',
    ],
];

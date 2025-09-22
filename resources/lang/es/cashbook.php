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
    'Create Adjustment' => 'Crear Ajuste',
    'Adjustments' => 'Ajustes',
    'Cashbook' => 'Libro de Caja',
    'Dashboard' => 'Panel de Control',
    'Create' => 'Crear',

    // Form Labels
    'Bank Account' => 'Cuenta Bancaria',
    'Account' => 'Cuenta',
    'Type' => 'Tipo',
    'Available Balance' => 'Saldo Disponible',
    'Amount' => 'Cantidad',
    'Date' => 'Fecha',
    'Status' => 'Estado',
    'Note' => 'Nota',

    // Form Options
    'Add Balance' => 'Agregar Saldo',
    'Remove Balance' => 'Quitar Saldo',
    'Active' => 'Activo',
    'Inactive' => 'Inactivo',

    // Placeholders
    'Select a bank account' => 'Seleccione una cuenta bancaria',
    'Select account for journal entry' => 'Seleccione cuenta para asiento contable',
    'Enter an amount' => 'Ingrese una cantidad',
    'Write your note here!' => '¡Escriba su nota aquí!',

    // Buttons
    'Back' => 'Atrás',
    'Save' => 'Guardar',
    'Reset' => 'Reiniciar',

    // Success Messages
    'Adjustment added successfully' => 'Ajuste agregado exitosamente',

    // Error Messages
    'Failed to load chart of accounts' => 'Error al cargar el plan de cuentas',
    'Please select a second account' => 'Por favor seleccione una segunda cuenta',
    'Opps...something went wrong' => 'Ups... algo salió mal',

    // Validation Messages
    'The bank account field is required.' => 'El campo cuenta bancaria es obligatorio.',
    'The account field is required.' => 'El campo cuenta es obligatorio.',
    'The amount field is required.' => 'El campo cantidad es obligatorio.',
    'The amount must be a number.' => 'La cantidad debe ser un número.',
    'The amount must be greater than 0.' => 'La cantidad debe ser mayor que 0.',
    'The amount cannot exceed available balance.' => 'La cantidad no puede exceder el saldo disponible.',
    'The date field is required.' => 'El campo fecha es obligatorio.',
    'The date must be a valid date.' => 'La fecha debe ser una fecha válida.',
    'The status field is required.' => 'El campo estado es obligatorio.',
    'The note field is optional.' => 'El campo nota es opcional.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Por favor seleccione una cuenta bancaria.',
            'exists' => 'La cuenta bancaria seleccionada no es válida.',
        ],
        'secondAccount' => [
            'required' => 'Por favor seleccione una segunda cuenta para el asiento contable.',
            'exists' => 'La cuenta seleccionada no es válida.',
        ],
        'amount' => [
            'required' => 'El campo cantidad es obligatorio.',
            'numeric' => 'La cantidad debe ser un número válido.',
            'min' => 'La cantidad debe ser mayor que 0.',
            'max' => 'La cantidad no puede exceder el saldo disponible.',
        ],
        'date' => [
            'required' => 'El campo fecha es obligatorio.',
            'date' => 'La fecha debe ser una fecha válida.',
        ],
        'type' => [
            'required' => 'El campo tipo es obligatorio.',
            'in' => 'El tipo seleccionado no es válido.',
        ],
        'status' => [
            'required' => 'El campo estado es obligatorio.',
            'in' => 'El estado seleccionado no es válido.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'cuenta bancaria',
        'secondAccount' => 'segunda cuenta',
        'amount' => 'cantidad',
        'date' => 'fecha',
        'type' => 'tipo',
        'status' => 'estado',
        'note' => 'nota',
    ],
];

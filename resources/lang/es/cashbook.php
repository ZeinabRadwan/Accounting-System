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

    // Accounts Module
    'Bank Accounts' => 'Cuentas Bancarias',
    'Add Bank Account' => 'Agregar Cuenta Bancaria',
    'Edit Bank Account' => 'Editar Cuenta Bancaria',
    'Bank Account Details' => 'Detalles de Cuenta Bancaria',
    'Bank Name' => 'Nombre del Banco',
    'Enter bank name' => 'Ingrese el nombre del banco',
    'Account Number' => 'Número de Cuenta',
    'Enter account number' => 'Ingrese el número de cuenta',
    'Account Holder Name' => 'Nombre del Titular',
    'Enter account holder name' => 'Ingrese el nombre del titular',
    'Opening Balance' => 'Saldo Inicial',
    'Enter opening balance' => 'Ingrese el saldo inicial',
    'Contact Number' => 'Número de Contacto',
    'Enter contact number' => 'Ingrese el número de contacto',
    'Bank Address' => 'Dirección del Banco',
    'Enter bank address' => 'Ingrese la dirección del banco',
    'Account added successfully' => 'Cuenta agregada exitosamente',
    'Account updated successfully' => 'Cuenta actualizada exitosamente',
    'Account deleted successfully' => 'Cuenta eliminada exitosamente',
    'Are you sure you want to delete this account?' => '¿Está seguro de que desea eliminar esta cuenta?',
    'This account cannot be deleted' => 'Esta cuenta no puede ser eliminada',

    // Chart of Accounts Module
    'Chart of Accounts' => 'Plan de Cuentas',
    'Add Account' => 'Agregar Cuenta',
    'Edit Account' => 'Editar Cuenta',
    'Account Details' => 'Detalles de Cuenta',
    'Account Name' => 'Nombre de Cuenta',
    'Enter account name' => 'Ingrese el nombre de la cuenta',
    'Account Code' => 'Código de Cuenta',
    'Enter account code' => 'Ingrese el código de cuenta',
    'Account Type' => 'Tipo de Cuenta',
    'Select account type' => 'Seleccione el tipo de cuenta',
    'Parent Account' => 'Cuenta Padre',
    'Select parent account' => 'Seleccione la cuenta padre',
    'Description' => 'Descripción',
    'Enter description' => 'Ingrese la descripción',
    'Account created successfully' => 'Cuenta creada exitosamente',
    'Tree View' => 'Vista de Árbol',
    'Select an Account' => 'Seleccione una Cuenta',
    'Click on any account in the tree to view its details and child accounts.' => 'Haga clic en cualquier cuenta del árbol para ver sus detalles y cuentas hijas.',
    'Account Code:' => 'Código de Cuenta:',
    'Type:' => 'Tipo:',
    'Debit' => 'Débito',
    'Credit' => 'Crédito',
    'Balance' => 'Saldo',
    'Child Accounts' => 'Cuentas Hijas',
    'No Child Accounts' => 'Sin Cuentas Hijas',
    'This account doesn\'t have any child accounts.' => 'Esta cuenta no tiene cuentas hijas.',
    'View' => 'Ver',
    'Delete' => 'Eliminar',
    'Refresh' => 'Actualizar',
    'Export to Excel' => 'Exportar a Excel',
    'Export to PDF' => 'Exportar a PDF',
    'Print Table' => 'Imprimir Tabla',

    // Transactions Module
    'Transaction History' => 'Historial de Transacciones',
    'History' => 'Historial',
    'Reason' => 'Razón',
    'Created By' => 'Creado Por',
    'per_page' => 'por_página',
    'From' => 'Desde',
    'To' => 'Hasta',

    // Transfer Balances Module
    'Balance Transfers' => 'Transferencias de Saldo',
    'Create Transfer' => 'Crear Transferencia',
    'Edit Balance Transfer' => 'Editar Transferencia de Saldo',
    'Balance Transfers Details' => 'Detalles de Transferencias de Saldo',
    'Transfer Reason' => 'Razón de Transferencia',
    'Enter a reason' => 'Ingrese una razón',
    'From Account' => 'Desde Cuenta',
    'To Account' => 'Hacia Cuenta',
    'Select an account' => 'Seleccione una cuenta',
    'Balance transfer added successfully' => 'Transferencia de saldo agregada exitosamente',
    'Transfer updated successfully' => 'Transferencia actualizada exitosamente',
    'Save changes' => 'Guardar cambios',
    'Details' => 'Detalles',
    'Activity log' => 'Registro de actividad',
    'download' => 'descargar',
    'Print' => 'Imprimir',
    'Transfers Details' => 'Detalles de Transferencias',
    'Balance Transfer' => 'Transferencia de Saldo',

    // Common Actions
    'Add' => 'Agregar',
    'Update' => 'Actualizar',
    'Cancel' => 'Cancelar',
    'Confirm' => 'Confirmar',
    'Are you sure?' => '¿Está seguro?',
    'You will not be able to return to this!' => '¡No podrá volver a esto!',
    'Deleted!' => '¡Eliminado!',
    'Deleted successfully.' => 'Eliminado exitosamente.',
    'Cannot Delete' => 'No se puede eliminar',
    'Sorry you can\'t remove this item!' => '¡Lo siento, no puede eliminar este elemento!',
    'Failed!' => '¡Falló!',
    'Export' => 'Exportar',
    'Import' => 'Importar',
    'Search' => 'Buscar',
    'Filter' => 'Filtrar',
    'Clear' => 'Limpiar',
    'Apply' => 'Aplicar',
    'Close' => 'Cerrar',
    'Loading...' => 'Cargando...',
    'No data available' => 'No hay datos disponibles',
    'Showing' => 'Mostrando',
    'to' => 'a',
    'of' => 'de',
    'entries' => 'entradas',
    'Previous' => 'Anterior',
    'Next' => 'Siguiente',
    'First' => 'Primero',
    'Last' => 'Último',
];

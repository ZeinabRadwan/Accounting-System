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
    'Create Adjustment' => 'Создать Корректировку',
    'Adjustments' => 'Корректировки',
    'Cashbook' => 'Кассовая Книга',
    'Dashboard' => 'Панель Управления',
    'Create' => 'Создать',

    // Form Labels
    'Bank Account' => 'Банковский Счет',
    'Account' => 'Счет',
    'Type' => 'Тип',
    'Available Balance' => 'Доступный Баланс',
    'Amount' => 'Сумма',
    'Date' => 'Дата',
    'Status' => 'Статус',
    'Note' => 'Примечание',

    // Form Options
    'Add Balance' => 'Добавить Баланс',
    'Remove Balance' => 'Удалить Баланс',
    'Active' => 'Активный',
    'Inactive' => 'Неактивный',

    // Placeholders
    'Select a bank account' => 'Выберите банковский счет',
    'Select account for journal entry' => 'Выберите счет для бухгалтерской записи',
    'Enter an amount' => 'Введите сумму',
    'Write your note here!' => 'Напишите здесь ваше примечание!',

    // Buttons
    'Back' => 'Назад',
    'Save' => 'Сохранить',
    'Reset' => 'Сбросить',

    // Success Messages
    'Adjustment added successfully' => 'Корректировка успешно добавлена',

    // Error Messages
    'Failed to load chart of accounts' => 'Ошибка загрузки плана счетов',
    'Please select a second account' => 'Пожалуйста, выберите второй счет',
    'Opps...something went wrong' => 'Упс... что-то пошло не так',

    // Validation Messages
    'The bank account field is required.' => 'Поле банковский счет обязательно.',
    'The account field is required.' => 'Поле счет обязательно.',
    'The amount field is required.' => 'Поле сумма обязательно.',
    'The amount must be a number.' => 'Сумма должна быть числом.',
    'The amount must be greater than 0.' => 'Сумма должна быть больше 0.',
    'The amount cannot exceed available balance.' => 'Сумма не может превышать доступный баланс.',
    'The date field is required.' => 'Поле дата обязательно.',
    'The date must be a valid date.' => 'Дата должна быть корректной датой.',
    'The status field is required.' => 'Поле статус обязательно.',
    'The note field is optional.' => 'Поле примечание необязательно.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Пожалуйста, выберите банковский счет.',
            'exists' => 'Выбранный банковский счет недействителен.',
        ],
        'secondAccount' => [
            'required' => 'Пожалуйста, выберите второй счет для бухгалтерской записи.',
            'exists' => 'Выбранный счет недействителен.',
        ],
        'amount' => [
            'required' => 'Поле сумма обязательно.',
            'numeric' => 'Сумма должна быть корректным числом.',
            'min' => 'Сумма должна быть больше 0.',
            'max' => 'Сумма не может превышать доступный баланс.',
        ],
        'date' => [
            'required' => 'Поле дата обязательно.',
            'date' => 'Дата должна быть корректной датой.',
        ],
        'type' => [
            'required' => 'Поле тип обязательно.',
            'in' => 'Выбранный тип недействителен.',
        ],
        'status' => [
            'required' => 'Поле статус обязательно.',
            'in' => 'Выбранный статус недействителен.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'банковский счет',
        'secondAccount' => 'второй счет',
        'amount' => 'сумма',
        'date' => 'дата',
        'type' => 'тип',
        'status' => 'статус',
        'note' => 'примечание',
    ],
];

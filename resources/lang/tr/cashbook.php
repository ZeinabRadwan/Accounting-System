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
    'Create Adjustment' => 'Düzeltme Oluştur',
    'Adjustments' => 'Düzeltmeler',
    'Cashbook' => 'Kasa Defteri',
    'Dashboard' => 'Kontrol Paneli',
    'Create' => 'Oluştur',

    // Form Labels
    'Bank Account' => 'Banka Hesabı',
    'Account' => 'Hesap',
    'Type' => 'Tür',
    'Available Balance' => 'Mevcut Bakiye',
    'Amount' => 'Tutar',
    'Date' => 'Tarih',
    'Status' => 'Durum',
    'Note' => 'Not',

    // Form Options
    'Add Balance' => 'Bakiye Ekle',
    'Remove Balance' => 'Bakiye Çıkar',
    'Active' => 'Aktif',
    'Inactive' => 'Pasif',

    // Placeholders
    'Select a bank account' => 'Banka hesabı seçin',
    'Select account for journal entry' => 'Yevmiye kaydı için hesap seçin',
    'Enter an amount' => 'Tutar girin',
    'Write your note here!' => 'Notunuzu buraya yazın!',

    // Buttons
    'Back' => 'Geri',
    'Save' => 'Kaydet',
    'Reset' => 'Sıfırla',

    // Success Messages
    'Adjustment added successfully' => 'Düzeltme başarıyla eklendi',
    'Chart of account added successfully' => 'Hesap planı başarıyla eklendi',

    // Error Messages
    'Failed to load chart of accounts' => 'Hesap planı yüklenemedi',
    'Please select a second account' => 'Lütfen ikinci bir hesap seçin',
    'Opps...something went wrong' => 'Ups... bir şeyler ters gitti',

    // Validation Messages
    'The bank account field is required.' => 'Banka hesabı alanı zorunludur.',
    'The account field is required.' => 'Hesap alanı zorunludur.',
    'The amount field is required.' => 'Tutar alanı zorunludur.',
    'The amount must be a number.' => 'Tutar bir sayı olmalıdır.',
    'The amount must be greater than 0.' => 'Tutar 0\'dan büyük olmalıdır.',
    'The amount cannot exceed available balance.' => 'Tutar mevcut bakiyeyi aşamaz.',
    'The date field is required.' => 'Tarih alanı zorunludur.',
    'The date must be a valid date.' => 'Tarih geçerli bir tarih olmalıdır.',
    'The status field is required.' => 'Durum alanı zorunludur.',
    'The note field is optional.' => 'Not alanı isteğe bağlıdır.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Lütfen bir banka hesabı seçin.',
            'exists' => 'Seçilen banka hesabı geçersiz.',
        ],
        'secondAccount' => [
            'required' => 'Lütfen yevmiye kaydı için ikinci bir hesap seçin.',
            'exists' => 'Seçilen hesap geçersiz.',
        ],
        'amount' => [
            'required' => 'Tutar alanı zorunludur.',
            'numeric' => 'Tutar geçerli bir sayı olmalıdır.',
            'min' => 'Tutar 0\'dan büyük olmalıdır.',
            'max' => 'Tutar mevcut bakiyeyi aşamaz.',
        ],
        'date' => [
            'required' => 'Tarih alanı zorunludur.',
            'date' => 'Tarih geçerli bir tarih olmalıdır.',
        ],
        'type' => [
            'required' => 'Tür alanı zorunludur.',
            'in' => 'Seçilen tür geçersiz.',
        ],
        'status' => [
            'required' => 'Durum alanı zorunludur.',
            'in' => 'Seçilen durum geçersiz.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'banka hesabı',
        'secondAccount' => 'ikinci hesap',
        'amount' => 'tutar',
        'date' => 'tarih',
        'type' => 'tür',
        'status' => 'durum',
        'note' => 'not',
    ],
];

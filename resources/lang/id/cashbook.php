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
    'Create Adjustment' => 'Buat Penyesuaian',
    'Adjustments' => 'Penyesuaian',
    'Cashbook' => 'Buku Kas',
    'Dashboard' => 'Dashboard',
    'Create' => 'Buat',

    // Form Labels
    'Bank Account' => 'Rekening Bank',
    'Account' => 'Akun',
    'Type' => 'Jenis',
    'Available Balance' => 'Saldo Tersedia',
    'Amount' => 'Jumlah',
    'Date' => 'Tanggal',
    'Status' => 'Status',
    'Note' => 'Catatan',

    // Form Options
    'Add Balance' => 'Tambah Saldo',
    'Remove Balance' => 'Hapus Saldo',
    'Active' => 'Aktif',
    'Inactive' => 'Tidak Aktif',

    // Placeholders
    'Select a bank account' => 'Pilih rekening bank',
    'Select account for journal entry' => 'Pilih akun untuk entri jurnal',
    'Enter an amount' => 'Masukkan jumlah',
    'Write your note here!' => 'Tulis catatan Anda di sini!',

    // Buttons
    'Back' => 'Kembali',
    'Save' => 'Simpan',
    'Reset' => 'Reset',

    // Success Messages
    'Adjustment added successfully' => 'Penyesuaian berhasil ditambahkan',
    'Chart of account added successfully' => 'Bagan akun berhasil ditambahkan',

    // Error Messages
    'Failed to load chart of accounts' => 'Gagal memuat bagan akun',
    'Please select a second account' => 'Silakan pilih akun kedua',
    'Opps...something went wrong' => 'Ups... ada yang salah',

    // Validation Messages
    'The bank account field is required.' => 'Field rekening bank wajib diisi.',
    'The account field is required.' => 'Field akun wajib diisi.',
    'The amount field is required.' => 'Field jumlah wajib diisi.',
    'The amount must be a number.' => 'Jumlah harus berupa angka.',
    'The amount must be greater than 0.' => 'Jumlah harus lebih besar dari 0.',
    'The amount cannot exceed available balance.' => 'Jumlah tidak boleh melebihi saldo tersedia.',
    'The date field is required.' => 'Field tanggal wajib diisi.',
    'The date must be a valid date.' => 'Tanggal harus berupa tanggal yang valid.',
    'The status field is required.' => 'Field status wajib diisi.',
    'The note field is optional.' => 'Field catatan bersifat opsional.',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'Silakan pilih rekening bank.',
            'exists' => 'Rekening bank yang dipilih tidak valid.',
        ],
        'secondAccount' => [
            'required' => 'Silakan pilih akun kedua untuk entri jurnal.',
            'exists' => 'Akun yang dipilih tidak valid.',
        ],
        'amount' => [
            'required' => 'Field jumlah wajib diisi.',
            'numeric' => 'Jumlah harus berupa angka yang valid.',
            'min' => 'Jumlah harus lebih besar dari 0.',
            'max' => 'Jumlah tidak boleh melebihi saldo tersedia.',
        ],
        'date' => [
            'required' => 'Field tanggal wajib diisi.',
            'date' => 'Tanggal harus berupa tanggal yang valid.',
        ],
        'type' => [
            'required' => 'Field jenis wajib diisi.',
            'in' => 'Jenis yang dipilih tidak valid.',
        ],
        'status' => [
            'required' => 'Field status wajib diisi.',
            'in' => 'Status yang dipilih tidak valid.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'rekening bank',
        'secondAccount' => 'akun kedua',
        'amount' => 'jumlah',
        'date' => 'tanggal',
        'type' => 'jenis',
        'status' => 'status',
        'note' => 'catatan',
    ],
];

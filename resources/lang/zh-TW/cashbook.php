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
    'Create Adjustment' => '建立調整',
    'Adjustments' => '調整',
    'Cashbook' => '現金簿',
    'Dashboard' => '儀表板',
    'Create' => '建立',

    // Form Labels
    'Bank Account' => '銀行帳戶',
    'Account' => '帳戶',
    'Type' => '類型',
    'Available Balance' => '可用餘額',
    'Amount' => '金額',
    'Date' => '日期',
    'Status' => '狀態',
    'Note' => '備註',

    // Form Options
    'Add Balance' => '新增餘額',
    'Remove Balance' => '移除餘額',
    'Active' => '啟用',
    'Inactive' => '停用',

    // Placeholders
    'Select a bank account' => '選擇銀行帳戶',
    'Select account for journal entry' => '選擇日記帳分錄帳戶',
    'Enter an amount' => '輸入金額',
    'Write your note here!' => '在此寫下您的備註！',

    // Buttons
    'Back' => '返回',
    'Save' => '儲存',
    'Reset' => '重設',

    // Success Messages
    'Adjustment added successfully' => '調整新增成功',

    // Error Messages
    'Failed to load chart of accounts' => '載入會計科目表失敗',
    'Please select a second account' => '請選擇第二個帳戶',
    'Opps...something went wrong' => '哎呀...出了點問題',

    // Validation Messages
    'The bank account field is required.' => '銀行帳戶欄位為必填。',
    'The account field is required.' => '帳戶欄位為必填。',
    'The amount field is required.' => '金額欄位為必填。',
    'The amount must be a number.' => '金額必須是數字。',
    'The amount must be greater than 0.' => '金額必須大於0。',
    'The amount cannot exceed available balance.' => '金額不能超過可用餘額。',
    'The date field is required.' => '日期欄位為必填。',
    'The date must be a valid date.' => '日期必須是有效日期。',
    'The status field is required.' => '狀態欄位為必填。',
    'The note field is optional.' => '備註欄位為選填。',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => '請選擇銀行帳戶。',
            'exists' => '選擇的銀行帳戶無效。',
        ],
        'secondAccount' => [
            'required' => '請選擇日記帳分錄的第二個帳戶。',
            'exists' => '選擇的帳戶無效。',
        ],
        'amount' => [
            'required' => '金額欄位為必填。',
            'numeric' => '金額必須是有效數字。',
            'min' => '金額必須大於0。',
            'max' => '金額不能超過可用餘額。',
        ],
        'date' => [
            'required' => '日期欄位為必填。',
            'date' => '日期必須是有效日期。',
        ],
        'type' => [
            'required' => '類型欄位為必填。',
            'in' => '選擇的類型無效。',
        ],
        'status' => [
            'required' => '狀態欄位為必填。',
            'in' => '選擇的狀態無效。',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => '銀行帳戶',
        'secondAccount' => '第二個帳戶',
        'amount' => '金額',
        'date' => '日期',
        'type' => '類型',
        'status' => '狀態',
        'note' => '備註',
    ],
];

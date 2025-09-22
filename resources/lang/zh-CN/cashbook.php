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
    'Create Adjustment' => '创建调整',
    'Adjustments' => '调整',
    'Cashbook' => '现金簿',
    'Dashboard' => '仪表板',
    'Create' => '创建',

    // Form Labels
    'Bank Account' => '银行账户',
    'Account' => '账户',
    'Type' => '类型',
    'Available Balance' => '可用余额',
    'Amount' => '金额',
    'Date' => '日期',
    'Status' => '状态',
    'Note' => '备注',

    // Form Options
    'Add Balance' => '添加余额',
    'Remove Balance' => '移除余额',
    'Active' => '活跃',
    'Inactive' => '非活跃',

    // Placeholders
    'Select a bank account' => '选择一个银行账户',
    'Select account for journal entry' => '选择日记账分录账户',
    'Enter an amount' => '输入金额',
    'Write your note here!' => '在这里写下您的备注！',

    // Buttons
    'Back' => '返回',
    'Save' => '保存',
    'Reset' => '重置',

    // Success Messages
    'Adjustment added successfully' => '调整添加成功',

    // Error Messages
    'Failed to load chart of accounts' => '加载会计科目表失败',
    'Please select a second account' => '请选择第二个账户',
    'Opps...something went wrong' => '哎呀...出了点问题',

    // Validation Messages
    'The bank account field is required.' => '银行账户字段是必需的。',
    'The account field is required.' => '账户字段是必需的。',
    'The amount field is required.' => '金额字段是必需的。',
    'The amount must be a number.' => '金额必须是数字。',
    'The amount must be greater than 0.' => '金额必须大于0。',
    'The amount cannot exceed available balance.' => '金额不能超过可用余额。',
    'The date field is required.' => '日期字段是必需的。',
    'The date must be a valid date.' => '日期必须是有效日期。',
    'The status field is required.' => '状态字段是必需的。',
    'The note field is optional.' => '备注字段是可选的。',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => '请选择一个银行账户。',
            'exists' => '选择的银行账户无效。',
        ],
        'secondAccount' => [
            'required' => '请选择日记账分录的第二个账户。',
            'exists' => '选择的账户无效。',
        ],
        'amount' => [
            'required' => '金额字段是必需的。',
            'numeric' => '金额必须是有效数字。',
            'min' => '金额必须大于0。',
            'max' => '金额不能超过可用余额。',
        ],
        'date' => [
            'required' => '日期字段是必需的。',
            'date' => '日期必须是有效日期。',
        ],
        'type' => [
            'required' => '类型字段是必需的。',
            'in' => '选择的类型无效。',
        ],
        'status' => [
            'required' => '状态字段是必需的。',
            'in' => '选择的状态无效。',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => '银行账户',
        'secondAccount' => '第二个账户',
        'amount' => '金额',
        'date' => '日期',
        'type' => '类型',
        'status' => '状态',
        'note' => '备注',
    ],
];

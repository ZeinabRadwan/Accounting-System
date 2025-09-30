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
    'Create Adjustment' => 'إنشاء تسوية',
    'Adjustments' => 'التسويات',
    'Cashbook' => 'دفتر النقدية',
    'Dashboard' => 'لوحة التحكم',
    'Create' => 'إنشاء',

    // Form Labels
    'Bank Account' => 'الحساب المصرفي',
    'Account' => 'الحساب',
    'Type' => 'النوع',
    'Available Balance' => 'الرصيد المتاح',
    'Amount' => 'المبلغ',
    'Date' => 'التاريخ',
    'Status' => 'الحالة',
    'Note' => 'ملاحظة',

    // Form Options
    'Add Balance' => 'إضافة رصيد',
    'Remove Balance' => 'إزالة رصيد',
    'Active' => 'نشط',
    'Inactive' => 'غير نشط',

    // Placeholders
    'Select a bank account' => 'اختر حساب مصرفي',
    'Select account for journal entry' => 'اختر حساب لقيود اليومية',
    'Enter an amount' => 'أدخل مبلغ',
    'Write your note here!' => 'اكتب ملاحظتك هنا!',

    // Buttons
    'Back' => 'رجوع',
    'Save' => 'حفظ',
    'Reset' => 'إعادة تعيين',

    // Success Messages
    'Adjustment added successfully' => 'تم إضافة التسوية بنجاح',
    'Chart of account added successfully' => 'تم إضافة دليل الحسابات بنجاح',

    // Error Messages
    'Failed to load chart of accounts' => 'فشل في تحميل دليل الحسابات',
    'Please select a second account' => 'يرجى اختيار حساب ثاني',
    'Opps...something went wrong' => 'عذراً... حدث خطأ ما',

    // Validation Messages
    'The bank account field is required.' => 'حقل الحساب المصرفي مطلوب.',
    'The account field is required.' => 'حقل الحساب مطلوب.',
    'The amount field is required.' => 'حقل المبلغ مطلوب.',
    'The amount must be a number.' => 'المبلغ يجب أن يكون رقماً.',
    'The amount must be greater than 0.' => 'المبلغ يجب أن يكون أكبر من 0.',
    'The amount cannot exceed available balance.' => 'المبلغ لا يمكن أن يتجاوز الرصيد المتاح.',
    'The date field is required.' => 'حقل التاريخ مطلوب.',
    'The date must be a valid date.' => 'التاريخ يجب أن يكون تاريخاً صحيحاً.',
    'The status field is required.' => 'حقل الحالة مطلوب.',
    'The note field is optional.' => 'حقل الملاحظة اختياري.',
    'Root Account' => 'الحساب الرئيسي',
    'Parent Account' => 'الحساب الأب',

    // Custom Validation Messages
    'custom' => [
        'account' => [
            'required' => 'يرجى اختيار حساب مصرفي.',
            'exists' => 'الحساب المصرفي المحدد غير صحيح.',
        ],
        'secondAccount' => [
            'required' => 'يرجى اختيار حساب ثاني لقيود اليومية.',
            'exists' => 'الحساب المحدد غير صحيح.',
        ],
        'amount' => [
            'required' => 'حقل المبلغ مطلوب.',
            'numeric' => 'المبلغ يجب أن يكون رقماً صحيحاً.',
            'min' => 'المبلغ يجب أن يكون أكبر من 0.',
            'max' => 'المبلغ لا يمكن أن يتجاوز الرصيد المتاح.',
        ],
        'date' => [
            'required' => 'حقل التاريخ مطلوب.',
            'date' => 'التاريخ يجب أن يكون تاريخاً صحيحاً.',
        ],
        'type' => [
            'required' => 'حقل النوع مطلوب.',
            'in' => 'النوع المحدد غير صحيح.',
        ],
        'status' => [
            'required' => 'حقل الحالة مطلوب.',
            'in' => 'الحالة المحددة غير صحيحة.',
        ],
    ],

    // Attributes for validation
    'attributes' => [
        'account' => 'الحساب المصرفي',
        'secondAccount' => 'الحساب الثاني',
        'amount' => 'المبلغ',
        'date' => 'التاريخ',
        'type' => 'النوع',
        'status' => 'الحالة',
        'note' => 'الملاحظة',
    ],
];

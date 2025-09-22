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

    // Accounts Module
    'Bank Accounts' => 'حسابات البنك',
    'Add Bank Account' => 'إضافة حساب بنكي',
    'Edit Bank Account' => 'تعديل حساب بنكي',
    'Bank Account Details' => 'تفاصيل الحساب البنكي',
    'Bank Name' => 'اسم البنك',
    'Enter bank name' => 'أدخل اسم البنك',
    'Account Number' => 'رقم الحساب',
    'Enter account number' => 'أدخل رقم الحساب',
    'Account Holder Name' => 'اسم صاحب الحساب',
    'Enter account holder name' => 'أدخل اسم صاحب الحساب',
    'Opening Balance' => 'الرصيد الافتتاحي',
    'Enter opening balance' => 'أدخل الرصيد الافتتاحي',
    'Contact Number' => 'رقم الاتصال',
    'Enter contact number' => 'أدخل رقم الاتصال',
    'Bank Address' => 'عنوان البنك',
    'Enter bank address' => 'أدخل عنوان البنك',
    'Account added successfully' => 'تم إضافة الحساب بنجاح',
    'Account updated successfully' => 'تم تحديث الحساب بنجاح',
    'Account deleted successfully' => 'تم حذف الحساب بنجاح',
    'Are you sure you want to delete this account?' => 'هل أنت متأكد من حذف هذا الحساب؟',
    'This account cannot be deleted' => 'لا يمكن حذف هذا الحساب',

    // Chart of Accounts Module
    'Chart of Accounts' => 'دليل الحسابات',
    'Add Account' => 'إضافة حساب',
    'Edit Account' => 'تعديل حساب',
    'Account Details' => 'تفاصيل الحساب',
    'Account Name' => 'اسم الحساب',
    'Enter account name' => 'أدخل اسم الحساب',
    'Account Code' => 'كود الحساب',
    'Enter account code' => 'أدخل كود الحساب',
    'Account Type' => 'نوع الحساب',
    'Select account type' => 'اختر نوع الحساب',
    'Parent Account' => 'الحساب الأب',
    'Select parent account' => 'اختر الحساب الأب',
    'Description' => 'الوصف',
    'Enter description' => 'أدخل الوصف',
    'Account created successfully' => 'تم إنشاء الحساب بنجاح',
    'Tree View' => 'عرض الشجرة',
    'Select an Account' => 'اختر حساباً',
    'Click on any account in the tree to view its details and child accounts.' => 'انقر على أي حساب في الشجرة لعرض تفاصيله والحسابات الفرعية.',
    'Account Code:' => 'كود الحساب:',
    'Type:' => 'النوع:',
    'Debit' => 'مدين',
    'Credit' => 'دائن',
    'Balance' => 'الرصيد',
    'Child Accounts' => 'الحسابات الفرعية',
    'No Child Accounts' => 'لا توجد حسابات فرعية',
    'This account doesn\'t have any child accounts.' => 'هذا الحساب لا يحتوي على حسابات فرعية.',
    'View' => 'عرض',
    'Delete' => 'حذف',
    'Refresh' => 'تحديث',
    'Export to Excel' => 'تصدير إلى Excel',
    'Export to PDF' => 'تصدير إلى PDF',
    'Print Table' => 'طباعة الجدول',

    // Transactions Module
    'Transaction History' => 'تاريخ المعاملات',
    'History' => 'التاريخ',
    'Reason' => 'السبب',
    'Created By' => 'تم الإنشاء بواسطة',
    'per_page' => 'لكل صفحة',
    'From' => 'من',
    'To' => 'إلى',

    // Transfer Balances Module
    'Balance Transfers' => 'تحويلات الأرصدة',
    'Create Transfer' => 'إنشاء تحويل',
    'Edit Balance Transfer' => 'تعديل تحويل الرصيد',
    'Balance Transfers Details' => 'تفاصيل تحويلات الأرصدة',
    'Transfer Reason' => 'سبب التحويل',
    'Enter a reason' => 'أدخل سبباً',
    'From Account' => 'من الحساب',
    'To Account' => 'إلى الحساب',
    'Select an account' => 'اختر حساباً',
    'Balance transfer added successfully' => 'تم إضافة تحويل الرصيد بنجاح',
    'Transfer updated successfully' => 'تم تحديث التحويل بنجاح',
    'Save changes' => 'حفظ التغييرات',
    'Details' => 'التفاصيل',
    'Activity log' => 'سجل النشاط',
    'download' => 'تحميل',
    'Print' => 'طباعة',
    'Transfers Details' => 'تفاصيل التحويلات',
    'Balance Transfer' => 'تحويل الرصيد',

    // Common Actions
    'Add' => 'إضافة',
    'Update' => 'تحديث',
    'Cancel' => 'إلغاء',
    'Confirm' => 'تأكيد',
    'Are you sure?' => 'هل أنت متأكد؟',
    'You will not be able to return to this!' => 'لن تتمكن من العودة إلى هذا!',
    'Deleted!' => 'تم الحذف!',
    'Deleted successfully.' => 'تم الحذف بنجاح.',
    'Cannot Delete' => 'لا يمكن الحذف',
    'Sorry you can\'t remove this item!' => 'عذراً، لا يمكنك حذف هذا العنصر!',
    'Failed!' => 'فشل!',
    'Export' => 'تصدير',
    'Import' => 'استيراد',
    'Search' => 'بحث',
    'Filter' => 'تصفية',
    'Clear' => 'مسح',
    'Apply' => 'تطبيق',
    'Close' => 'إغلاق',
    'Loading...' => 'جاري التحميل...',
    'No data available' => 'لا توجد بيانات متاحة',
    'Showing' => 'عرض',
    'to' => 'إلى',
    'of' => 'من',
    'entries' => 'إدخالات',
    'Previous' => 'السابق',
    'Next' => 'التالي',
    'First' => 'الأول',
    'Last' => 'الأخير',
];

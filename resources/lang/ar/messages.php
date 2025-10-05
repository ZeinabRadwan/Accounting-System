<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Transfer Balance Messages
    |--------------------------------------------------------------------------
    |
    | The following language lines are used for transfer balance operations
    | including success and error messages.
    |
    */

    // Error Messages
    'Debit bank account not found.' => 'حساب البنك المدين غير موجود.',
    'Credit bank account not found.' => 'حساب البنك الدائن غير موجود.',
    'Failed to create journal entry: ' => 'فشل في إنشاء قيد اليومية: ',
    'This transfer is linked to a journal entry (draft/posted) and cannot be deleted.' => 'هذا التحويل مربوط بقيد يومية (مسودة/مُرسل) ولا يمكن حذفه.',
    'Sorry you can\'t delete this transfer!' => 'عذراً، لا يمكنك حذف هذا التحويل!',

    // Success Messages
    'Transfer added successfully' => 'تم إضافة التحويل بنجاح',
    'Transfer updated successfully' => 'تم تحديث التحويل بنجاح',
    'Transfer deleted successfully' => 'تم حذف التحويل بنجاح',
];
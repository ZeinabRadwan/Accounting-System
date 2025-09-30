<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'يجب قبول :attribute.',
    'active_url' => ':attribute ليس رابط صحيح.',
    'after' => ':attribute يجب أن يكون تاريخ بعد :date.',
    'after_or_equal' => ':attribute يجب أن يكون تاريخ بعد أو يساوي :date.',
    'alpha' => ':attribute يجب أن يحتوي على أحرف فقط.',
    'alpha_dash' => ':attribute يجب أن يحتوي على أحرف وأرقام وشرطات وشرطات سفلية فقط.',
    'alpha_num' => ':attribute يجب أن يحتوي على أحرف وأرقام فقط.',
    'array' => ':attribute يجب أن يكون مصفوفة.',
    'before' => ':attribute يجب أن يكون تاريخ قبل :date.',
    'before_or_equal' => ':attribute يجب أن يكون تاريخ قبل أو يساوي :date.',
    'between' => [
        'numeric' => ':attribute يجب أن يكون بين :min و :max.',
        'file' => ':attribute يجب أن يكون بين :min و :max كيلوبايت.',
        'string' => ':attribute يجب أن يكون بين :min و :max حرف.',
        'array' => ':attribute يجب أن يحتوي على بين :min و :max عنصر.',
    ],
    'boolean' => 'حقل :attribute يجب أن يكون صحيح أو خطأ.',
    'confirmed' => 'تأكيد :attribute غير متطابق.',
    'date' => ':attribute ليس تاريخ صحيح.',
    'date_equals' => ':attribute يجب أن يكون تاريخ يساوي :date.',
    'date_format' => ':attribute لا يطابق التنسيق :format.',
    'different' => ':attribute و :other يجب أن يكونا مختلفين.',
    'digits' => ':attribute يجب أن يكون :digits رقم.',
    'digits_between' => ':attribute يجب أن يكون بين :min و :max رقم.',
    'dimensions' => ':attribute له أبعاد صورة غير صحيحة.',
    'distinct' => 'حقل :attribute له قيمة مكررة.',
    'email' => ':attribute يجب أن يكون عنوان بريد إلكتروني صحيح.',
    'ends_with' => ':attribute يجب أن ينتهي بواحد من التالي: :values.',
    'exists' => ':attribute المحدد غير صحيح.',
    'file' => ':attribute يجب أن يكون ملف.',
    'filled' => 'حقل :attribute يجب أن يحتوي على قيمة.',
    'gt' => [
        'numeric' => ':attribute يجب أن يكون أكبر من :value.',
        'file' => ':attribute يجب أن يكون أكبر من :value كيلوبايت.',
        'string' => ':attribute يجب أن يكون أكبر من :value حرف.',
        'array' => ':attribute يجب أن يحتوي على أكثر من :value عنصر.',
    ],
    'gte' => [
        'numeric' => ':attribute يجب أن يكون أكبر من أو يساوي :value.',
        'file' => ':attribute يجب أن يكون أكبر من أو يساوي :value كيلوبايت.',
        'string' => ':attribute يجب أن يكون أكبر من أو يساوي :value حرف.',
        'array' => ':attribute يجب أن يحتوي على :value عنصر أو أكثر.',
    ],
    'image' => ':attribute يجب أن يكون صورة.',
    'in' => ':attribute المحدد غير صحيح.',
    'in_array' => 'حقل :attribute غير موجود في :other.',
    'integer' => ':attribute يجب أن يكون رقم صحيح.',
    'ip' => ':attribute يجب أن يكون عنوان IP صحيح.',
    'ipv4' => ':attribute يجب أن يكون عنوان IPv4 صحيح.',
    'ipv6' => ':attribute يجب أن يكون عنوان IPv6 صحيح.',
    'json' => ':attribute يجب أن يكون نص JSON صحيح.',
    'lt' => [
        'numeric' => ':attribute يجب أن يكون أقل من :value.',
        'file' => ':attribute يجب أن يكون أقل من :value كيلوبايت.',
        'string' => ':attribute يجب أن يكون أقل من :value حرف.',
        'array' => ':attribute يجب أن يحتوي على أقل من :value عنصر.',
    ],
    'lte' => [
        'numeric' => ':attribute يجب أن يكون أقل من أو يساوي :value.',
        'file' => ':attribute يجب أن يكون أقل من أو يساوي :value كيلوبايت.',
        'string' => ':attribute يجب أن يكون أقل من أو يساوي :value حرف.',
        'array' => ':attribute يجب أن لا يحتوي على أكثر من :value عنصر.',
    ],
    'max' => [
        'numeric' => ':attribute لا يجب أن يكون أكبر من :max.',
        'file' => ':attribute لا يجب أن يكون أكبر من :max كيلوبايت.',
        'string' => ':attribute لا يجب أن يكون أكبر من :max حرف.',
        'array' => ':attribute لا يجب أن يحتوي على أكثر من :max عنصر.',
    ],
    'mimes' => ':attribute يجب أن يكون ملف من نوع: :values.',
    'mimetypes' => ':attribute يجب أن يكون ملف من نوع: :values.',
    'min' => [
        'numeric' => ':attribute يجب أن يكون على الأقل :min.',
        'file' => ':attribute يجب أن يكون على الأقل :min كيلوبايت.',
        'string' => ':attribute يجب أن يكون على الأقل :min حرف.',
        'array' => ':attribute يجب أن يحتوي على على الأقل :min عنصر.',
    ],
    'multiple_of' => ':attribute يجب أن يكون مضاعف من :value',
    'not_in' => ':attribute المحدد غير صحيح.',
    'not_regex' => 'تنسيق :attribute غير صحيح.',
    'numeric' => ':attribute يجب أن يكون رقم.',
    'password' => 'كلمة المرور غير صحيحة.',
    'present' => 'حقل :attribute يجب أن يكون موجود.',
    'regex' => 'تنسيق :attribute غير صحيح.',
    'required' => 'حقل :attribute مطلوب.',
    'required_if' => 'حقل :attribute مطلوب عندما :other هو :value.',
    'required_unless' => 'حقل :attribute مطلوب ما لم يكن :other في :values.',
    'required_with' => 'حقل :attribute مطلوب عندما :values موجود.',
    'required_with_all' => 'حقل :attribute مطلوب عندما :values موجودة.',
    'required_without' => 'حقل :attribute مطلوب عندما :values غير موجود.',
    'required_without_all' => 'حقل :attribute مطلوب عندما لا يوجد أي من :values.',
    'same' => ':attribute و :other يجب أن يتطابقا.',
    'size' => [
        'numeric' => ':attribute يجب أن يكون :size.',
        'file' => ':attribute يجب أن يكون :size كيلوبايت.',
        'string' => ':attribute يجب أن يكون :size حرف.',
        'array' => ':attribute يجب أن يحتوي على :size عنصر.',
    ],
    'starts_with' => ':attribute يجب أن يبدأ بواحد من التالي: :values.',
    'string' => ':attribute يجب أن يكون نص.',
    'timezone' => ':attribute يجب أن يكون منطقة صحيحة.',
    'unique' => ':attribute تم استخدامه مسبقاً.',
    'uploaded' => 'فشل رفع :attribute.',
    'url' => 'تنسيق :attribute غير صحيح.',
    'uuid' => ':attribute يجب أن يكون UUID صحيح.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'reason' => [
            'required' => 'حقل سبب الزيادة مطلوب.',
            'string' => 'سبب الزيادة يجب أن يكون نصاً.',
            'max' => 'سبب الزيادة لا يجب أن يتجاوز 255 حرفاً.',
        ],
        'employee' => [
            'required' => 'يرجى اختيار موظف.',
        ],
        'incrementAmount' => [
            'required' => 'حقل مبلغ الزيادة مطلوب.',
            'numeric' => 'مبلغ الزيادة يجب أن يكون رقماً.',
            'min' => 'مبلغ الزيادة يجب أن يكون على الأقل 0.',
        ],
        'incrementDate' => [
            'date' => 'تاريخ الزيادة ليس تاريخاً صحيحاً.',
            'date_format' => 'تاريخ الزيادة لا يطابق التنسيق Y-m-d.',
            'after_or_equal' => 'تاريخ الزيادة يجب أن يكون بعد أو يساوي تاريخ انضمام الموظف.',
        ],
        'note' => [
            'string' => 'الملاحظة يجب أن تكون نصاً.',
            'max' => 'الملاحظة لا يجب أن تتجاوز 255 حرفاً.',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'itemName' => 'اسم الصنف',
        'itemCode' => 'كود الصنف',
        'itemModel' => 'الموديل',
        'subCategory' => 'الفئة',
        'brand' => 'العلامة التجارية',
        'itemUnit' => 'الوحدة',
        'productTax' => 'معدل الضريبة',
        'regularPrice' => 'السعر',
        'discount' => 'الخصم',
        'sellingPrice' => 'السعر النهائي',
        'openingStockCount' => 'المخزون الافتتاحي',
        'openingStockUnitPrice' => 'سعر وحدة المخزون',
        'servicePurchasePrice' => 'سعر شراء الخدمة',
        'salesAccountId' => 'حساب المبيعات',
        'purchaseAccountId' => 'حساب المشتريات',
        'note' => 'الملاحظات',
        'status' => 'الحالة',
        'image' => 'الصورة',
        'itemType' => 'نوع الصنف',
        'reason' => 'سبب الزيادة',
        'employee' => 'الموظف',
        'incrementAmount' => 'مبلغ الزيادة',
        'incrementDate' => 'تاريخ الزيادة',
        'domain' => 'النطاق',
    ],

];

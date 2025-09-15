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

    'accepted' => ':attribute alanı kabul edilmelidir.',
    'active_url' => ':attribute alanı geçerli bir URL değil.',
    'after' => ':attribute alanı :date tarihinden sonra olmalıdır.',
    'after_or_equal' => ':attribute alanı :date tarihinden sonra veya eşit olmalıdır.',
    'alpha' => ':attribute alanı sadece harflerden oluşmalıdır.',
    'alpha_dash' => ':attribute alanı sadece harfler, rakamlar, tireler ve alt çizgilerden oluşmalıdır.',
    'alpha_num' => ':attribute alanı sadece harfler ve rakamlardan oluşmalıdır.',
    'array' => ':attribute alanı bir dizi olmalıdır.',
    'before' => ':attribute alanı :date tarihinden önce olmalıdır.',
    'before_or_equal' => ':attribute alanı :date tarihinden önce veya eşit olmalıdır.',
    'between' => [
        'numeric' => ':attribute alanı :min ile :max arasında olmalıdır.',
        'file' => ':attribute alanı :min ile :max kilobayt arasında olmalıdır.',
        'string' => ':attribute alanı :min ile :max karakter arasında olmalıdır.',
        'array' => ':attribute alanı :min ile :max öğe arasında olmalıdır.',
    ],
    'boolean' => ':attribute alanı doğru veya yanlış olmalıdır.',
    'confirmed' => ':attribute alanı onayı eşleşmiyor.',
    'date' => ':attribute alanı geçerli bir tarih değil.',
    'date_equals' => ':attribute alanı :date tarihine eşit olmalıdır.',
    'date_format' => ':attribute alanı :format formatına uymuyor.',
    'different' => ':attribute ve :other alanları farklı olmalıdır.',
    'digits' => ':attribute alanı :digits rakam olmalıdır.',
    'digits_between' => ':attribute alanı :min ile :max rakam arasında olmalıdır.',
    'dimensions' => ':attribute alanı geçersiz resim boyutlarına sahip.',
    'distinct' => ':attribute alanı yinelenen bir değere sahip.',
    'email' => ':attribute alanı geçerli bir e-posta adresi olmalıdır.',
    'ends_with' => ':attribute alanı şunlardan biriyle bitmelidir: :values.',
    'exists' => 'Seçilen :attribute alanı geçersiz.',
    'file' => ':attribute alanı bir dosya olmalıdır.',
    'filled' => ':attribute alanı bir değere sahip olmalıdır.',
    'gt' => [
        'numeric' => ':attribute alanı :value değerinden büyük olmalıdır.',
        'file' => ':attribute alanı :value kilobayttan büyük olmalıdır.',
        'string' => ':attribute alanı :value karakterden büyük olmalıdır.',
        'array' => ':attribute alanı :value öğeden fazla olmalıdır.',
    ],
    'gte' => [
        'numeric' => ':attribute alanı :value değerinden büyük veya eşit olmalıdır.',
        'file' => ':attribute alanı :value kilobayttan büyük veya eşit olmalıdır.',
        'string' => ':attribute alanı :value karakterden büyük veya eşit olmalıdır.',
        'array' => ':attribute alanı :value öğe veya daha fazla olmalıdır.',
    ],
    'image' => ':attribute alanı bir resim olmalıdır.',
    'in' => 'Seçilen :attribute alanı geçersiz.',
    'in_array' => ':attribute alanı :other içinde mevcut değil.',
    'integer' => ':attribute alanı bir tam sayı olmalıdır.',
    'ip' => ':attribute alanı geçerli bir IP adresi olmalıdır.',
    'ipv4' => ':attribute alanı geçerli bir IPv4 adresi olmalıdır.',
    'ipv6' => ':attribute alanı geçerli bir IPv6 adresi olmalıdır.',
    'json' => ':attribute alanı geçerli bir JSON dizesi olmalıdır.',
    'lt' => [
        'numeric' => ':attribute alanı :value değerinden küçük olmalıdır.',
        'file' => ':attribute alanı :value kilobayttan küçük olmalıdır.',
        'string' => ':attribute alanı :value karakterden küçük olmalıdır.',
        'array' => ':attribute alanı :value öğeden az olmalıdır.',
    ],
    'lte' => [
        'numeric' => ':attribute alanı :value değerinden küçük veya eşit olmalıdır.',
        'file' => ':attribute alanı :value kilobayttan küçük veya eşit olmalıdır.',
        'string' => ':attribute alanı :value karakterden küçük veya eşit olmalıdır.',
        'array' => ':attribute alanı :value öğeden fazla olmamalıdır.',
    ],
    'max' => [
        'numeric' => ':attribute alanı :max değerinden büyük olamaz.',
        'file' => ':attribute alanı :max kilobayttan büyük olamaz.',
        'string' => ':attribute alanı :max karakterden büyük olamaz.',
        'array' => ':attribute alanı :max öğeden fazla olamaz.',
    ],
    'mimes' => ':attribute alanı şu türde bir dosya olmalıdır: :values.',
    'mimetypes' => ':attribute alanı şu türde bir dosya olmalıdır: :values.',
    'min' => [
        'numeric' => ':attribute alanı en az :min olmalıdır.',
        'file' => ':attribute alanı en az :min kilobayt olmalıdır.',
        'string' => ':attribute alanı en az :min karakter olmalıdır.',
        'array' => ':attribute alanı en az :min öğe olmalıdır.',
    ],
    'multiple_of' => ':attribute alanı :value değerinin katı olmalıdır',
    'not_in' => 'Seçilen :attribute alanı geçersiz.',
    'not_regex' => ':attribute alanı formatı geçersiz.',
    'numeric' => ':attribute alanı bir sayı olmalıdır.',
    'password' => 'Şifre yanlış.',
    'present' => ':attribute alanı mevcut olmalıdır.',
    'regex' => ':attribute alanı formatı geçersiz.',
    'required' => ':attribute alanı zorunludur.',
    'required_if' => ':other alanı :value olduğunda :attribute alanı zorunludur.',
    'required_unless' => ':other alanı :values içinde olmadığında :attribute alanı zorunludur.',
    'required_with' => ':values mevcut olduğunda :attribute alanı zorunludur.',
    'required_with_all' => ':values mevcut olduğunda :attribute alanı zorunludur.',
    'required_without' => ':values mevcut olmadığında :attribute alanı zorunludur.',
    'required_without_all' => ':values hiçbiri mevcut olmadığında :attribute alanı zorunludur.',
    'same' => ':attribute ve :other alanları eşleşmelidir.',
    'size' => [
        'numeric' => ':attribute alanı :size olmalıdır.',
        'file' => ':attribute alanı :size kilobayt olmalıdır.',
        'string' => ':attribute alanı :size karakter olmalıdır.',
        'array' => ':attribute alanı :size öğe içermelidir.',
    ],
    'starts_with' => ':attribute alanı şunlardan biriyle başlamalıdır: :values.',
    'string' => ':attribute alanı bir dize olmalıdır.',
    'timezone' => ':attribute alanı geçerli bir bölge olmalıdır.',
    'unique' => ':attribute alanı zaten alınmış.',
    'uploaded' => ':attribute alanı yüklenemedi.',
    'url' => ':attribute alanı formatı geçersiz.',
    'uuid' => ':attribute alanı geçerli bir UUID olmalıdır.',

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
        'attribute-name' => [
            'rule-name' => 'custom-message',
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
        'itemName' => 'ürün adı',
        'itemCode' => 'ürün kodu',
        'itemModel' => 'model',
        'subCategory' => 'kategori',
        'brand' => 'marka',
        'itemUnit' => 'birim',
        'productTax' => 'vergi oranı',
        'regularPrice' => 'fiyat',
        'discount' => 'indirim',
        'sellingPrice' => 'son fiyat',
        'openingStockCount' => 'açılış stoku',
        'openingStockUnitPrice' => 'stok birim fiyatı',
        'servicePurchasePrice' => 'hizmet satın alma fiyatı',
        'salesAccountId' => 'satış hesabı',
        'purchaseAccountId' => 'satın alma hesabı',
        'note' => 'notlar',
        'status' => 'durum',
        'image' => 'resim',
        'itemType' => 'ürün türü',
    ],

];

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

    'accepted' => 'Het :attribute veld moet worden geaccepteerd.',
    'active_url' => 'Het :attribute veld is geen geldige URL.',
    'after' => 'Het :attribute veld moet een datum na :date zijn.',
    'after_or_equal' => 'Het :attribute veld moet een datum na of gelijk aan :date zijn.',
    'alpha' => 'Het :attribute veld mag alleen letters bevatten.',
    'alpha_dash' => 'Het :attribute veld mag alleen letters, cijfers, streepjes en underscores bevatten.',
    'alpha_num' => 'Het :attribute veld mag alleen letters en cijfers bevatten.',
    'array' => 'Het :attribute veld moet een array zijn.',
    'before' => 'Het :attribute veld moet een datum voor :date zijn.',
    'before_or_equal' => 'Het :attribute veld moet een datum voor of gelijk aan :date zijn.',
    'between' => [
        'numeric' => 'Het :attribute veld moet tussen :min en :max liggen.',
        'file' => 'Het :attribute veld moet tussen :min en :max kilobytes zijn.',
        'string' => 'Het :attribute veld moet tussen :min en :max karakters zijn.',
        'array' => 'Het :attribute veld moet tussen :min en :max items hebben.',
    ],
    'boolean' => 'Het :attribute veld moet waar of onwaar zijn.',
    'confirmed' => 'De :attribute bevestiging komt niet overeen.',
    'date' => 'Het :attribute veld is geen geldige datum.',
    'date_equals' => 'Het :attribute veld moet een datum gelijk aan :date zijn.',
    'date_format' => 'Het :attribute veld komt niet overeen met het formaat :format.',
    'different' => 'De :attribute en :other velden moeten verschillend zijn.',
    'digits' => 'Het :attribute veld moet :digits cijfers hebben.',
    'digits_between' => 'Het :attribute veld moet tussen :min en :max cijfers hebben.',
    'dimensions' => 'Het :attribute veld heeft ongeldige afbeelding dimensies.',
    'distinct' => 'Het :attribute veld heeft een dubbele waarde.',
    'email' => 'Het :attribute veld moet een geldig e-mailadres zijn.',
    'ends_with' => 'Het :attribute veld moet eindigen met een van de volgende: :values.',
    'exists' => 'Het geselecteerde :attribute veld is ongeldig.',
    'file' => 'Het :attribute veld moet een bestand zijn.',
    'filled' => 'Het :attribute veld moet een waarde hebben.',
    'gt' => [
        'numeric' => 'Het :attribute veld moet groter zijn dan :value.',
        'file' => 'Het :attribute veld moet groter zijn dan :value kilobytes.',
        'string' => 'Het :attribute veld moet groter zijn dan :value karakters.',
        'array' => 'Het :attribute veld moet meer dan :value items hebben.',
    ],
    'gte' => [
        'numeric' => 'Het :attribute veld moet groter dan of gelijk aan :value zijn.',
        'file' => 'Het :attribute veld moet groter dan of gelijk aan :value kilobytes zijn.',
        'string' => 'Het :attribute veld moet groter dan of gelijk aan :value karakters zijn.',
        'array' => 'Het :attribute veld moet :value items of meer hebben.',
    ],
    'image' => 'Het :attribute veld moet een afbeelding zijn.',
    'in' => 'Het geselecteerde :attribute veld is ongeldig.',
    'in_array' => 'Het :attribute veld bestaat niet in :other.',
    'integer' => 'Het :attribute veld moet een geheel getal zijn.',
    'ip' => 'Het :attribute veld moet een geldig IP-adres zijn.',
    'ipv4' => 'Het :attribute veld moet een geldig IPv4-adres zijn.',
    'ipv6' => 'Het :attribute veld moet een geldig IPv6-adres zijn.',
    'json' => 'Het :attribute veld moet een geldige JSON string zijn.',
    'lt' => [
        'numeric' => 'Het :attribute veld moet kleiner zijn dan :value.',
        'file' => 'Het :attribute veld moet kleiner zijn dan :value kilobytes.',
        'string' => 'Het :attribute veld moet kleiner zijn dan :value karakters.',
        'array' => 'Het :attribute veld moet minder dan :value items hebben.',
    ],
    'lte' => [
        'numeric' => 'Het :attribute veld moet kleiner dan of gelijk aan :value zijn.',
        'file' => 'Het :attribute veld moet kleiner dan of gelijk aan :value kilobytes zijn.',
        'string' => 'Het :attribute veld moet kleiner dan of gelijk aan :value karakters zijn.',
        'array' => 'Het :attribute veld mag niet meer dan :value items hebben.',
    ],
    'max' => [
        'numeric' => 'Het :attribute veld mag niet groter zijn dan :max.',
        'file' => 'Het :attribute veld mag niet groter zijn dan :max kilobytes.',
        'string' => 'Het :attribute veld mag niet groter zijn dan :max karakters.',
        'array' => 'Het :attribute veld mag niet meer dan :max items hebben.',
    ],
    'mimes' => 'Het :attribute veld moet een bestand van het type: :values zijn.',
    'mimetypes' => 'Het :attribute veld moet een bestand van het type: :values zijn.',
    'min' => [
        'numeric' => 'Het :attribute veld moet minimaal :min zijn.',
        'file' => 'Het :attribute veld moet minimaal :min kilobytes zijn.',
        'string' => 'Het :attribute veld moet minimaal :min karakters zijn.',
        'array' => 'Het :attribute veld moet minimaal :min items hebben.',
    ],
    'multiple_of' => 'Het :attribute veld moet een veelvoud van :value zijn',
    'not_in' => 'Het geselecteerde :attribute veld is ongeldig.',
    'not_regex' => 'Het :attribute veld formaat is ongeldig.',
    'numeric' => 'Het :attribute veld moet een nummer zijn.',
    'password' => 'Het wachtwoord is onjuist.',
    'present' => 'Het :attribute veld moet aanwezig zijn.',
    'regex' => 'Het :attribute veld formaat is ongeldig.',
    'required' => 'Het :attribute veld is verplicht.',
    'required_if' => 'Het :attribute veld is verplicht wanneer :other :value is.',
    'required_unless' => 'Het :attribute veld is verplicht tenzij :other in :values is.',
    'required_with' => 'Het :attribute veld is verplicht wanneer :values aanwezig is.',
    'required_with_all' => 'Het :attribute veld is verplicht wanneer :values aanwezig zijn.',
    'required_without' => 'Het :attribute veld is verplicht wanneer :values niet aanwezig is.',
    'required_without_all' => 'Het :attribute veld is verplicht wanneer geen van :values aanwezig zijn.',
    'same' => 'De :attribute en :other velden moeten overeenkomen.',
    'size' => [
        'numeric' => 'Het :attribute veld moet :size zijn.',
        'file' => 'Het :attribute veld moet :size kilobytes zijn.',
        'string' => 'Het :attribute veld moet :size karakters zijn.',
        'array' => 'Het :attribute veld moet :size items bevatten.',
    ],
    'starts_with' => 'Het :attribute veld moet beginnen met een van de volgende: :values.',
    'string' => 'Het :attribute veld moet een string zijn.',
    'timezone' => 'Het :attribute veld moet een geldige tijdzone zijn.',
    'unique' => 'Het :attribute veld is al gebruikt.',
    'uploaded' => 'Het :attribute veld upload is mislukt.',
    'url' => 'Het :attribute veld formaat is ongeldig.',
    'uuid' => 'Het :attribute veld moet een geldige UUID zijn.',

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
        'itemName' => 'artikelnaam',
        'itemCode' => 'artikelcode',
        'itemModel' => 'model',
        'subCategory' => 'categorie',
        'brand' => 'merk',
        'itemUnit' => 'eenheid',
        'productTax' => 'belastingtarief',
        'regularPrice' => 'prijs',
        'discount' => 'korting',
        'sellingPrice' => 'eindprijs',
        'openingStockCount' => 'openingsvoorraad',
        'openingStockUnitPrice' => 'eenheidsprijs voorraad',
        'servicePurchasePrice' => 'inkoopprijs service',
        'salesAccountId' => 'verkooprekening',
        'purchaseAccountId' => 'inkooprekening',
        'note' => 'notities',
        'status' => 'status',
        'image' => 'afbeelding',
        'itemType' => 'artikeltype',
    ],

];

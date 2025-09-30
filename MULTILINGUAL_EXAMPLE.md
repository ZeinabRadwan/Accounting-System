# Multilingual Chart of Accounts Implementation

This implementation provides a robust multilingual solution for the Chart of Accounts system, supporting multiple languages including English, Arabic, Urdu, French, and more.

## Features

- **Multiple Language Support**: Support for 17+ languages including English, Arabic, Urdu, French, Spanish, German, etc.
- **Fallback System**: Automatic fallback to English if translation is not available
- **Flexible Translation Management**: Easy to add/update/delete translations
- **Search Capabilities**: Search across all languages
- **Translation Statistics**: Track translation completion
- **Export/Import**: Export translations to CSV/JSON for external translation services

## Database Structure

### Translation Table
```sql
CREATE TABLE translations (
    id BIGINT PRIMARY KEY,
    translatable_type VARCHAR(255),
    translatable_id BIGINT,
    field VARCHAR(255),
    locale VARCHAR(5),
    value TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    UNIQUE(translatable_type, translatable_id, field, locale)
);
```

### Chart of Accounts Table
- Keeps original `name` field for backward compatibility
- Added `description` field for additional multilingual content
- Uses translations table for multilingual support

## Usage Examples

### 1. Creating a Chart of Account with Translations

```php
// Using the new multilingual method
$account = ChartOfAccount::createWithTranslations([
    'name' => 'Cash Account',
    'description' => 'Main cash account for daily operations',
    'code' => '1000',
    'type_id' => 1,
    'is_active' => true,
    'created_by' => auth()->id(),
], [
    'name' => [
        'en' => 'Cash Account',
        'ar' => 'حساب النقدية',
        'ur' => 'نقدی اکاؤنٹ',
        'fr' => 'Compte de trésorerie',
    ],
    'description' => [
        'en' => 'Main cash account for daily operations',
        'ar' => 'الحساب النقدي الرئيسي للعمليات اليومية',
        'ur' => 'روزمرہ کے کاموں کے لیے مرکزی نقدی اکاؤنٹ',
        'fr' => 'Compte de trésorerie principal pour les opérations quotidiennes',
    ]
]);
```

### 2. Getting Translated Content

```php
// Get account with current locale translation
$account = ChartOfAccount::find(1);

// Get translated name for current locale (with fallback)
$translatedName = $account->getTranslatedField('name');

// Get translated name for specific locale
$arabicName = $account->getTranslatedField('name', 'ar');

// Get all translations for a field
$allNameTranslations = $account->getTranslations('name');
// Returns: ['en' => 'Cash Account', 'ar' => 'حساب النقدية', ...]

// Get all translations for the account
$allTranslations = $account->getAllTranslations();
```

### 3. Updating Translations

```php
// Update translations for a field
$account->setTranslations('name', [
    'en' => 'Updated Cash Account',
    'ar' => 'حساب النقدية المحدث',
    'ur' => 'اپڈیٹڈ نقدی اکاؤنٹ',
]);

// Update single translation
$account->setTranslation('description', 'ar', 'وصف جديد باللغة العربية');
```

### 4. Searching Across Languages

```php
// Search by translated name
$accounts = ChartOfAccount::searchByName('نقدية', 'ar')->get();

// Search by translated description
$accounts = ChartOfAccount::searchByDescription('operations', 'en')->get();

// Search with fallback
$accounts = ChartOfAccount::whereTranslation('name', 'cash')->get();
```

### 5. API Usage

#### Get Chart of Accounts with Translations
```http
GET /api/chart-of-accounts/translations?locale=ar&include_translations=true
```

#### Create Account with Translations
```http
POST /api/chart-of-accounts/translations
Content-Type: application/json

{
    "name": "Cash Account",
    "description": "Main cash account",
    "code": "1000",
    "type_id": 1,
    "is_active": true,
    "translations": {
        "name": {
            "en": "Cash Account",
            "ar": "حساب النقدية",
            "ur": "نقدی اکاؤنٹ",
            "fr": "Compte de trésorerie"
        },
        "description": {
            "en": "Main cash account for daily operations",
            "ar": "الحساب النقدي الرئيسي للعمليات اليومية",
            "ur": "روزمرہ کے کاموں کے لیے مرکزی نقدی اکاؤنٹ",
            "fr": "Compte de trésorerie principal pour les opérations quotidiennes"
        }
    }
}
```

#### Update Translations
```http
PUT /api/chart-of-accounts/1000/translations/update
Content-Type: application/json

{
    "field": "name",
    "translations": {
        "en": "Updated Cash Account",
        "ar": "حساب النقدية المحدث",
        "ur": "اپڈیٹڈ نقدی اکاؤنٹ"
    }
}
```

#### Search Translations
```http
GET /api/chart-of-accounts/translations/search?search=نقدية&locale=ar&field=name
```

#### Get Translation Statistics
```http
GET /api/chart-of-accounts/translations/stats
```

#### Export Translations
```http
GET /api/chart-of-accounts/translations/export?format=csv
```

## Frontend Integration

### Vue.js Example

```javascript
// Get accounts with translations
async function getAccountsWithTranslations(locale = 'en') {
    const response = await axios.get(`/api/chart-of-accounts/translations?locale=${locale}`);
    return response.data;
}

// Create account with translations
async function createAccountWithTranslations(accountData, translations) {
    const response = await axios.post('/api/chart-of-accounts/translations', {
        ...accountData,
        translations
    });
    return response.data;
}

// Update translations
async function updateTranslations(accountCode, field, translations) {
    const response = await axios.put(`/api/chart-of-accounts/${accountCode}/translations/update`, {
        field,
        translations
    });
    return response.data;
}
```

## Migration Commands

```bash
# Run the migrations
php artisan migrate

# For tenant migrations
php artisan tenants:migrate
```

## Benefits

1. **Scalable**: Easy to add new languages without changing database structure
2. **Performance**: Cached translations for better performance
3. **Flexible**: Can be applied to any model using the Translatable trait
4. **Backward Compatible**: Original fields remain for fallback
5. **Search Friendly**: Full-text search across all languages
6. **Export/Import**: Easy to work with external translation services
7. **Statistics**: Track translation completion and missing translations

## Next Steps

1. Apply the same pattern to other models (Products, Clients, Suppliers, etc.)
2. Create a translation management interface
3. Add bulk translation import/export functionality
4. Implement translation workflow for review and approval
5. Add translation memory for consistency

This implementation provides a solid foundation for a truly multilingual accounting system that can serve users in multiple languages while maintaining data integrity and performance.

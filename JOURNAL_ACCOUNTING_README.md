# Journal Accounting System - Implementation Guide

## Overview

This document explains the new **Double-Entry Journal Accounting System** that has been implemented to replace the simple transaction system. The new system provides proper accounting standards with balanced debits and credits, comprehensive audit trails, and professional financial reporting capabilities.

## 🏗️ System Architecture

### Core Components

1. **JournalEntry Model** - Main journal entry records
2. **JournalEntryLine Model** - Individual debit/credit lines
3. **BusinessTransactionJournalService** - Service for creating business transaction journals
4. **JournalEntryController** - API controller for managing journal entries
5. **DefaultChartOfAccountsSeeder** - Seeder for required chart of accounts

### Database Structure

```
journal_entries
├── id (Primary Key)
├── entry_number (Auto-generated JE-000001)
├── entry_date (Date of transaction)
├── reference (External reference like invoice #)
├── description (Transaction description)
├── total_debit (Sum of all debit amounts)
├── total_credit (Sum of all credit amounts)
├── status (draft, posted, void)
├── created_by (User who created)
├── posted_by (User who posted)
├── posted_at (When posted)
├── source_type (Model class like Invoice, Expense)
├── source_id (Source record ID)
└── timestamps + soft deletes

journal_entry_lines
├── id (Primary Key)
├── journal_entry_id (Foreign key to journal_entries)
├── chart_of_account_id (Chart of account)
├── debit_amount (Debit amount for this line)
├── credit_amount (Credit amount for this line)
├── description (Line-specific description)
├── reference (Line-specific reference)
├── line_number (Order within entry)
└── timestamps
```

## 🚀 Getting Started

### Step 1: Run Migrations

```bash
php artisan migrate
```

This will create:
- `journal_entries` table
- `journal_entry_lines` table
- Add `journal_entry_id` to existing `account_transactions` table

### Step 2: Seed Default Chart of Accounts

```bash
php artisan db:seed --class=DefaultChartOfAccountsSeeder
```

This creates the essential accounts needed for the journal system:
- **Assets**: Cash, Bank Accounts, Accounts Receivable, Inventory, Fixed Assets
- **Liabilities**: Accounts Payable, Loans Payable, Tax Payable
- **Equity**: Owner's Equity, Retained Earnings
- **Revenue**: Sales Revenue, Other Revenue
- **Expenses**: Cost of Goods Sold, Purchase Expense, Operating Expenses, Financial Expenses

### Step 3: Verify Installation

Check that the routes are working:

```bash
php artisan route:list | grep journal
```

You should see:
- `GET /api/journal-entries` - List journal entries
- `POST /api/journal-entries` - Create journal entry
- `GET /api/journal-entries/{id}` - View journal entry
- `PUT /api/journal-entries/{id}` - Update journal entry
- `DELETE /api/journal-entries/{id}` - Delete journal entry
- `POST /api/journal-entries/{id}/post` - Post journal entry
- `POST /api/journal-entries/{id}/void` - Void journal entry
- `GET /api/journal-entries/trial-balance` - Get trial balance

## 📝 Creating Journal Entries

### Method 1: Automatic Creation (Recommended)

The system automatically creates journal entries when business transactions occur:

```php
// In your controller
use App\Services\BusinessTransactionJournalService;

class YourController extends Controller
{
    protected $journalService;

    public function __construct(BusinessTransactionJournalService $journalService)
    {
        $this->journalService = $journalService;
    }

    public function store(Request $request)
    {
        // Create your business record first
        $businessRecord = YourModel::create($request->validated());

        // Create journal entry automatically
        $journalEntry = $this->journalService->createExpenseJournal($businessRecord, auth()->id());

        return response()->json([
            'message' => 'Record created successfully',
            'data' => $businessRecord,
            'journal_entry' => $journalEntry
        ]);
    }
}
```

### Method 2: Manual Creation

Create custom journal entries:

```php
use App\Services\BusinessTransactionJournalService;

$journalService = app(BusinessTransactionJournalService::class);

$journalData = [
    'entry_date' => '2025-01-15',
    'reference' => 'CUSTOM-001',
    'description' => 'Custom journal entry for adjustment',
    'status' => 'draft',
    'lines' => [
        [
            'chart_of_account_id' => 1, // Cash account
            'debit_amount' => 1000.00,
            'credit_amount' => 0,
            'description' => 'Cash received'
        ],
        [
            'chart_of_account_id' => 11, // Sales Revenue account
            'debit_amount' => 0,
            'credit_amount' => 1000.00,
            'description' => 'Revenue recorded'
        ]
    ]
];

$journalEntry = $journalService->createCustomJournalEntry($journalData, auth()->id());
```

## 🔄 Integration with Existing Modules

### Current Integration Status

| Module | Status | Journal Integration |
|--------|--------|---------------------|
| **Expenses** | ✅ Complete | `createExpenseJournal()` |
| **Invoices** | 🔄 Ready | `createInvoiceSaleJournal()` |
| **Invoice Payments** | 🔄 Ready | `createInvoicePaymentJournal()` |
| **Purchases** | 🔄 Ready | `createPurchaseJournal()` |
| **Purchase Payments** | 🔄 Ready | `createPurchasePaymentJournal()` |
| **Loans** | 🔄 Ready | `createLoanPaymentJournal()` |

### Integration Example: Expense Controller

```php
// Before (Old System)
public function store(StoreExpenseRequest $request)
{
    $transaction = $this->transactionService->createTransactionFromExpense($request, $userId);
    $expense = Expense::create([...]);
}

// After (With Journal System)
public function store(StoreExpenseRequest $request)
{
    // Create expense first
    $expense = Expense::create([...]);

    // Create journal entry automatically
    $journalEntry = $this->journalService->createExpenseJournal($expense, $userId);

    // Maintain backward compatibility
    $transaction = $this->transactionService->createTransactionFromExpense($request, $userId);
    $transaction->update(['journal_entry_id' => $journalEntry->id]);

    return response()->json([
        'message' => 'Expense created successfully',
        'expense' => $expense,
        'journal_entry' => $journalEntry
    ]);
}
```

## 📊 Financial Reports

### Trial Balance

```php
// Get trial balance for a date range
$response = $this->get('/api/journal-entries/trial-balance', [
    'startDate' => '2025-01-01',
    'endDate' => '2025-01-31'
]);

$trialBalance = $response->json('data');
```

### Account Balances

```php
// Get account balance from journal entries
$accountBalance = DB::table('journal_entries')
    ->join('journal_entry_lines', 'journal_entries.id', '=', 'journal_entry_lines.journal_entry_id')
    ->where('journal_entries.status', 'posted')
    ->where('journal_entry_lines.chart_of_account_id', $accountId)
    ->select(
        DB::raw('SUM(debit_amount) as total_debits'),
        DB::raw('SUM(credit_amount) as total_credits'),
        DB::raw('SUM(debit_amount - credit_amount) as net_balance')
    )
    ->first();
```

## 🔒 Security & Permissions

### Required Permissions

Add these to your permission system:

```php
// Journal Entry permissions
'journal-entry-list' => 'View journal entries',
'journal-entry-create' => 'Create journal entries',
'journal-entry-view' => 'View journal entry details',
'journal-entry-edit' => 'Edit journal entries',
'journal-entry-delete' => 'Delete journal entries',
'journal-entry-post' => 'Post journal entries',
'journal-entry-void' => 'Void journal entries',
```

### Middleware Usage

```php
// In your controller
public function __construct()
{
    $this->middleware('can:journal-entry-list', ['only' => ['index', 'search']]);
    $this->middleware('can:journal-entry-create', ['only' => ['create', 'store']]);
    $this->middleware('can:journal-entry-view', ['only' => ['show']]);
    $this->middleware('can:journal-entry-edit', ['only' => ['edit', 'update']]);
    $this->middleware('can:journal-entry-delete', ['only' => ['destroy']]);
    $this->middleware('can:journal-entry-post', ['only' => ['post', 'void']]);
}
```

## 🧪 Testing

### Test Journal Entry Creation

```php
// In your test file
public function test_expense_creates_journal_entry()
{
    $expense = Expense::factory()->create();
    
    $journalService = app(BusinessTransactionJournalService::class);
    $journalEntry = $journalService->createExpenseJournal($expense, $this->user->id);
    
    $this->assertDatabaseHas('journal_entries', [
        'id' => $journalEntry->id,
        'source_type' => Expense::class,
        'source_id' => $expense->id,
        'status' => 'posted'
    ]);
    
    $this->assertDatabaseHas('journal_entry_lines', [
        'journal_entry_id' => $journalEntry->id,
        'debit_amount' => $expense->amount
    ]);
    
    $this->assertDatabaseHas('journal_entry_lines', [
        'journal_entry_id' => $journalEntry->id,
        'credit_amount' => $expense->amount
    ]);
}
```

### Test Trial Balance

```php
public function test_trial_balance_is_balanced()
{
    // Create some journal entries
    // ... your test data ...
    
    $response = $this->get('/api/journal-entries/trial-balance');
    
    $trialBalance = $response->json('data');
    $totalDebits = collect($trialBalance)->sum('total_debits');
    $totalCredits = collect($trialBalance)->sum('total_credits');
    
    $this->assertEquals($totalDebits, $totalCredits, 'Trial balance must be balanced');
}
```

## 🚨 Troubleshooting

### Common Issues

#### 1. "Required chart of accounts not found"

**Solution**: Run the seeder
```bash
php artisan db:seed --class=DefaultChartOfAccountsSeeder
```

#### 2. "Journal entry must be balanced"

**Solution**: Ensure debits equal credits
```php
// Check your journal entry lines
$totalDebits = collect($lines)->sum('debit_amount');
$totalCredits = collect($lines)->sum('credit_amount');

if (abs($totalDebits - $totalCredits) > 0.01) {
    throw new Exception('Journal entry must be balanced');
}
```

#### 3. "Only draft entries can be edited"

**Solution**: Check entry status before editing
```php
if ($journalEntry->status !== 'draft') {
    return response()->json([
        'message' => 'Only draft journal entries can be edited'
    ], 422);
}
```

### Debug Commands

```bash
# Check journal entries
php artisan tinker
>>> App\Models\JournalEntry::with('lines')->get()

# Check chart of accounts
>>> App\Models\ChartOfAccount::all()

# Verify trial balance
>>> App\Models\JournalEntry::where('status', 'posted')->get()->sum('total_debit')
>>> App\Models\JournalEntry::where('status', 'posted')->get()->sum('total_credit')
```

## 🔮 Future Enhancements

### Planned Features

1. **Account Balance Tracking**
   - Real-time account balances
   - Balance history tracking
   - Period-end closing

2. **Advanced Reporting**
   - Income Statement
   - Balance Sheet
   - Cash Flow Statement
   - Budget vs. Actual

3. **Multi-Currency Support**
   - Foreign exchange rates
   - Multi-currency journal entries
   - Currency conversion tracking

4. **Automation**
   - Recurring journal entries
   - Scheduled postings
   - Bulk journal creation

5. **Integration**
   - Bank statement import
   - Credit card transaction import
   - External accounting software export

## 📚 API Reference

### Journal Entry Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/journal-entries` | List journal entries |
| `POST` | `/api/journal-entries` | Create journal entry |
| `GET` | `/api/journal-entries/{id}` | View journal entry |
| `PUT` | `/api/journal-entries/{id}` | Update journal entry |
| `DELETE` | `/api/journal-entries/{id}` | Delete journal entry |
| `POST` | `/api/journal-entries/{id}/post` | Post journal entry |
| `POST` | `/api/journal-entries/{id}/void` | Void journal entry |
| `GET` | `/api/journal-entries/search` | Search journal entries |
| `GET` | `/api/journal-entries/trial-balance` | Get trial balance |
| `GET` | `/api/journal-entries/chart-of-accounts` | Get chart of accounts |

### Request/Response Examples

#### Create Journal Entry

**Request:**
```json
POST /api/journal-entries
{
    "entry_date": "2025-01-15",
    "reference": "INV-001",
    "description": "Invoice payment received",
    "lines": [
        {
            "chart_of_account_id": 1,
            "debit_amount": 1000.00,
            "credit_amount": 0,
            "description": "Cash received"
        },
        {
            "chart_of_account_id": 11,
            "debit_amount": 0,
            "credit_amount": 1000.00,
            "description": "Revenue recorded"
        }
    ]
}
```

**Response:**
```json
{
    "message": "Journal entry created successfully",
    "data": {
        "id": 1,
        "entry_number": "JE-000001",
        "formatted_entry_number": "JE-000001",
        "entry_date": "2025-01-15",
        "status": "draft",
        "total_debit": 1000.00,
        "total_credit": 1000.00,
        "is_balanced": true
    }
}
```

## 🤝 Support

For questions or issues:

1. **Check the logs**: `storage/logs/laravel.log`
2. **Verify database**: Check migrations and seeders
3. **Test API endpoints**: Use Postman or similar tool
4. **Review permissions**: Ensure user has required permissions

## 📋 Migration Checklist

- [ ] Run migrations: `php artisan migrate`
- [ ] Seed default accounts: `php artisan db:seed --class=DefaultChartOfAccountsSeeder`
- [ ] Update existing controllers to use journal service
- [ ] Test journal entry creation
- [ ] Verify trial balance is balanced
- [ ] Update permissions system
- [ ] Test API endpoints
- [ ] Update frontend components (if applicable)
- [ ] Train users on new system
- [ ] Monitor system performance

---

**Congratulations!** You now have a professional, enterprise-grade double-entry accounting system that follows GAAP standards and provides comprehensive financial reporting capabilities.

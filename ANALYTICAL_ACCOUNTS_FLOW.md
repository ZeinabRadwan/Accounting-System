# Analytical Accounts System - Complete Flow Documentation

## 📊 System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    ANALYTICAL ACCOUNTS SYSTEM                   │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│   Analytical  │    │   Payment     │    │    Payment    │
│   Accounts    │◄───│   Methods     │◄───│  Transactions │
│  (Metadata)   │    │               │    │               │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Journal Entries  │
                    │  (with metadata)  │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │     Reports       │
                    │  (Analytics Only) │
                    └──────────────────┘
```

## 🌳 Data Model Tree Structure

```
analytical_accounts
├── id
├── name (e.g., "Cash Payments")
├── code (e.g., "AA-CASH")
├── type (payment, channel, platform)
├── status (active/inactive)
├── branch_id (REQUIRED - links to branches)
├── created_by (user who created)
└── timestamps

payment_methods
├── id
├── name (e.g., "Cash Payment")
├── code (e.g., "CASH")
├── slug
├── status
├── analytical_account_id ──────┐
└── timestamps                    │
                                  │
                                  ▼
                          analytical_accounts
                          (One payment method → One analytical account)

payment_method_branch_accounts
├── payment_method_id
├── branch_id
├── analytical_account_id ──────┐
└── timestamps                    │
                                  │
                                  ▼
                          analytical_accounts
                          (Branch-specific overrides)

invoice_payments / purchase_payments / etc.
├── id
├── payment_method_id ───────────┐
├── analytical_account_id ──────┤
├── amount                        │
└── timestamps                    │
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
payment_methods          analytical_accounts        (Stored for historical tracking)

journal_entry_lines
├── id
├── journal_entry_id
├── chart_of_account_id (REQUIRED - for double-entry)
├── analytical_account_id (OPTIONAL - metadata only)
├── debit_amount
├── credit_amount
└── timestamps
```

## 🔄 Complete Flow Chart

### 1. SETUP FLOW (Creating Analytical Accounts & Payment Methods)

```
┌─────────────────────────────────────────────────────────────┐
│                    SETUP PHASE                             │
└─────────────────────────────────────────────────────────────┘

Step 1: Create Analytical Account
┌─────────────────────────────────────────────────────────────┐
│ User → Setup → Analytical Accounts → Create                │
│                                                             │
│ Form Fields:                                                │
│   - Name: "Cash Payments"                                   │
│   - Code: "AA-CASH"                                        │
│   - Type: "payment"                                         │
│   - Branch: [SELECT BRANCH] * REQUIRED                      │
│   - Status: Active                                          │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ POST /api/analytical-accounts                              │
│                                                             │
│ Validation:                                                 │
│   ✓ name (required)                                         │
│   ✓ branch_id (required, exists:branches)                  │
│   ✓ code (unique, nullable)                                 │
│   ✓ type (payment|channel|platform)                        │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ AnalyticalAccount::create([                                 │
│   'name' => 'Cash Payments',                                │
│   'code' => 'AA-CASH',                                      │
│   'branch_id' => 1,  ← REQUIRED                            │
│   'status' => true,                                         │
│   'created_by' => Auth::id()                                │
│ ])                                                          │
└─────────────────────────────────────────────────────────────┘

Step 2: Create Payment Method
┌─────────────────────────────────────────────────────────────┐
│ User → Setup → Payment Methods → Create                    │
│                                                             │
│ Form Fields:                                                │
│   - Name: "Cash Payment"                                    │
│   - Code: "CASH"                                            │
│   - Analytical Account: [SELECT] * REQUIRED                 │
│   - Status: Active                                          │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ POST /api/payment-methods                                   │
│                                                             │
│ PaymentMethod::create([                                     │
│   'name' => 'Cash Payment',                                 │
│   'code' => 'CASH',                                         │
│   'analytical_account_id' => 1,  ← Links to analytical     │
│   'status' => true                                          │
│ ])                                                          │
└─────────────────────────────────────────────────────────────┘
```

### 2. PAYMENT CREATION FLOW

```
┌─────────────────────────────────────────────────────────────┐
│              PAYMENT CREATION FLOW                          │
└─────────────────────────────────────────────────────────────┘

Scenario: User creates an Invoice Payment

┌─────────────────────────────────────────────────────────────┐
│ 1. User opens Invoice Payment Form                          │
│    - Invoice selected                                       │
│    - Amount entered                                         │
│    - Payment Method dropdown shown                          │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Frontend loads Payment Methods                           │
│    GET /api/payment-methods/all                             │
│    → Returns active payment methods with analytical_account │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. User selects Payment Method                              │
│    - Payment Method: "Cash Payment"                         │
│    - Analytical Account automatically displayed:            │
│      "AA-CASH - Cash Payments"                              │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. User submits payment form                                │
│    POST /api/invoice-payments                               │
│    {                                                        │
│      invoice_id: 123,                                       │
│      amount: 1000,                                          │
│      payment_method_id: 1,  ← Selected payment method      │
│      analytical_account_id: 5  ← Auto-filled from method   │
│    }                                                        │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. Backend Processing (InvoicePaymentController)           │
│                                                             │
│    a) Get PaymentMethod by ID                               │
│       $paymentMethod = PaymentMethod::find(1)               │
│                                                             │
│    b) Get Analytical Account                                │
│       $analyticalAccountId = $paymentMethod                │
│           ->getBranchAccount($branchId)                     │
│           ->id                                              │
│                                                             │
│    c) Create InvoicePayment                                 │
│       InvoicePayment::create([                              │
│         'invoice_id' => 123,                                │
│         'amount' => 1000,                                   │
│         'payment_method_id' => 1,                            │
│         'analytical_account_id' => 5  ← Stored for history │
│       ])                                                    │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. Create Journal Entry (BusinessTransactionJournalService)│
│                                                             │
│    createInvoicePaymentJournal($invoicePayment)             │
│                                                             │
│    Journal Entry Lines:                                     │
│    ┌─────────────────────────────────────────┐            │
│    │ Line 1: Debit Bank Account               │            │
│    │   - chart_of_account_id: 10 (Bank)       │            │
│    │   - analytical_account_id: 5 (Cash)     │ ← Metadata │
│    │   - debit_amount: 1000                   │            │
│    └─────────────────────────────────────────┘            │
│    ┌─────────────────────────────────────────┐            │
│    │ Line 2: Credit Accounts Receivable       │            │
│    │   - chart_of_account_id: 20 (AR)        │            │
│    │   - analytical_account_id: 5 (Cash)     │ ← Metadata │
│    │   - credit_amount: 1000                  │            │
│    └─────────────────────────────────────────┘            │
│                                                             │
│    ⚠️ IMPORTANT: analytical_account_id is METADATA ONLY    │
│       - Does NOT affect debit/credit amounts                │
│       - Does NOT appear in Trial Balance                    │
│       - Used ONLY for reporting/analytics                   │
└─────────────────────────────────────────────────────────────┘
```

### 3. BRANCH-SPECIFIC ANALYTICAL ACCOUNTS FLOW

```
┌─────────────────────────────────────────────────────────────┐
│        BRANCH-SPECIFIC ANALYTICAL ACCOUNTS                   │
└─────────────────────────────────────────────────────────────┘

Payment Method: "Cash Payment"
├── Default Analytical Account: "AA-CASH" (Branch 1)
│
└── Branch-Specific Overrides:
    ├── Branch 1 → "AA-CASH-BR1" (Branch 1 specific)
    ├── Branch 2 → "AA-CASH-BR2" (Branch 2 specific)
    └── Branch 3 → Uses default "AA-CASH"

Flow when creating payment:
┌─────────────────────────────────────────────────────────────┐
│ 1. Payment Method selected                                   │
│    payment_method_id = 1                                     │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Get Analytical Account                                   │
│    PaymentMethod::getBranchAccount($branchId)                │
│                                                             │
│    Logic:                                                    │
│    a) Check payment_method_branch_accounts table            │
│       WHERE payment_method_id = 1                           │
│       AND branch_id = 2                                      │
│                                                             │
│    b) If found → Use branch-specific analytical account     │
│       If not found → Use payment method's default            │
│                      analytical_account_id                    │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Store on Payment Record                                   │
│    analytical_account_id = [result from step 2]             │
└─────────────────────────────────────────────────────────────┘
```

### 4. REPORTING FLOW

```
┌─────────────────────────────────────────────────────────────┐
│                    REPORTING FLOW                           │
└─────────────────────────────────────────────────────────────┘

Payment Method Analytics Report
┌─────────────────────────────────────────────────────────────┐
│ GET /api/reports/payment-method-analytics                   │
│   ?start_date=2024-01-01                                    │
│   &end_date=2024-12-31                                      │
│   &analytical_account_id=5                                 │
│   &branch_id=1                                              │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ Query Journal Entry Lines                                   │
│                                                             │
│ SELECT                                                      │
│   analytical_account_id,                                   │
│   SUM(debit_amount) as total_debits,                       │
│   SUM(credit_amount) as total_credits                       │
│ FROM journal_entry_lines                                    │
│ WHERE analytical_account_id = 5                             │
│   AND created_at BETWEEN '2024-01-01' AND '2024-12-31'     │
│ GROUP BY analytical_account_id                              │
└─────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│ Results:                                                     │
│ {                                                            │
│   analytical_account: "Cash Payments",                      │
│   total_amount: 50000,                                       │
│   transaction_count: 150                                     │
│ }                                                            │
│                                                             │
│ ⚠️ This data is for ANALYTICS ONLY                          │
│    - Does NOT affect Trial Balance                          │
│    - Does NOT affect Financial Statements                   │
│    - Used for business intelligence only                    │
└─────────────────────────────────────────────────────────────┘
```

## 🔀 Decision Tree: How Analytical Account is Determined

```
                    Payment Created
                           │
                           ▼
              ┌────────────────────────┐
              │ payment_method_id set? │
              └────────────────────────┘
                      │
          ┌───────────┴───────────┐
          │                       │
         YES                     NO
          │                       │
          ▼                       ▼
    ┌─────────────┐      ┌──────────────────┐
    │ Get Payment │      │ Use NULL         │
    │   Method    │      │ (No analytical)  │
    └─────────────┘      └──────────────────┘
          │
          ▼
    ┌─────────────────────────────┐
    │ Branch ID available?        │
    └─────────────────────────────┘
          │
    ┌─────┴─────┐
    │           │
   YES         NO
    │           │
    ▼           ▼
┌─────────┐  ┌──────────────────┐
│ Check   │  │ Use Payment       │
│ Branch  │  │ Method's default  │
│ Account │  │ analytical_account│
└─────────┘  └──────────────────┘
    │
    ▼
┌─────────────────────────────┐
│ Branch-specific account     │
│ exists in                   │
│ payment_method_branch_      │
│ accounts?                   │
└─────────────────────────────┘
    │
┌───┴───┐
│       │
YES     NO
│       │
▼       ▼
┌───────┐  ┌──────────────────┐
│ Use   │  │ Use Payment       │
│Branch │  │ Method's default  │
│Account│  │ analytical_account│
└───────┘  └──────────────────┘
    │
    ▼
┌─────────────────────────────┐
│ Store analytical_account_id │
│ on payment record           │
└─────────────────────────────┘
```

## 📋 Complete Data Flow Sequence

```
┌─────────────────────────────────────────────────────────────────┐
│                    COMPLETE DATA FLOW                           │
└─────────────────────────────────────────────────────────────────┘

1. SETUP PHASE
   ┌─────────────────────────────────────────────────────────┐
   │ Admin creates Analytical Account                         │
   │   → analytical_accounts table                            │
   │   → branch_id = 1 (REQUIRED)                            │
   │   → code = "AA-CASH"                                     │
   └─────────────────────────────────────────────────────────┘
                    │
                    ▼
   ┌─────────────────────────────────────────────────────────┐
   │ Admin creates Payment Method                            │
   │   → payment_methods table                               │
   │   → analytical_account_id = 1 (links to above)         │
   └─────────────────────────────────────────────────────────┘

2. PAYMENT CREATION PHASE
   ┌─────────────────────────────────────────────────────────┐
   │ User creates Invoice Payment                            │
   │   → Selects payment_method_id = 1                       │
   │   → Frontend shows analytical account automatically      │
   └─────────────────────────────────────────────────────────┘
                    │
                    ▼
   ┌─────────────────────────────────────────────────────────┐
   │ Backend processes payment                                │
   │   → Gets analytical_account_id from payment method      │
   │   → Checks for branch-specific override                 │
   │   → Stores on invoice_payments:                         │
   │     • payment_method_id = 1                             │
   │     • analytical_account_id = 1                          │
   └─────────────────────────────────────────────────────────┘
                    │
                    ▼
   ┌─────────────────────────────────────────────────────────┐
   │ Journal Entry created                                   │
   │   → journal_entries table                               │
   │   → journal_entry_lines table:                          │
   │     • chart_of_account_id = 10 (Bank - for accounting) │
   │     • analytical_account_id = 1 (Cash - for analytics)│
   │     • debit_amount = 1000                               │
   │     • credit_amount = 0                                 │
   └─────────────────────────────────────────────────────────┘

3. REPORTING PHASE
   ┌─────────────────────────────────────────────────────────┐
   │ User requests Payment Method Analytics                  │
   │   → Query journal_entry_lines                           │
   │   → Filter by analytical_account_id                     │
   │   → Group by analytical_account_id                      │
   │   → Return analytics data                               │
   │                                                         │
   │ ⚠️ Does NOT query chart_of_account_id                    │
   │ ⚠️ Does NOT affect Trial Balance                        │
   │ ⚠️ Pure analytics/reporting only                        │
   └─────────────────────────────────────────────────────────┘
```

## 🎯 Key Rules & Constraints

```
┌─────────────────────────────────────────────────────────────┐
│                    CRITICAL RULES                           │
└─────────────────────────────────────────────────────────────┘

RULE 1: Analytical Accounts are METADATA ONLY
   ├── ❌ NEVER used in chart_of_account_id
   ├── ❌ NEVER included in Trial Balance
   ├── ❌ NEVER included in Financial Statements
   └── ✅ ONLY used for reporting and analytics

RULE 2: Branch is REQUIRED
   ├── ✅ Every analytical account MUST have a branch_id
   ├── ❌ No global analytical accounts allowed
   └── ✅ Branch-specific accounts can override defaults

RULE 3: Payment Method Storage
   ├── ✅ payment_method_id stored at PAYMENT level
   ├── ✅ analytical_account_id stored at PAYMENT level
   └── ✅ Historical data preserved (for audit trail)

RULE 4: Journal Entry Lines
   ├── ✅ chart_of_account_id is REQUIRED (for accounting)
   ├── ✅ analytical_account_id is OPTIONAL (for analytics)
   ├── ✅ Both can exist on same line
   └── ✅ Only chart_of_account_id affects double-entry
```

## 🔄 UI Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    UI USER FLOW                             │
└─────────────────────────────────────────────────────────────┘

1. ANALYTICAL ACCOUNTS MANAGEMENT
   ┌─────────────────────────────────────────────────────────┐
   │ Setup → Analytical Accounts                             │
   │   ├── Index: List all analytical accounts                │
   │   ├── Create: Form with branch (required)                │
   │   ├── Edit: Update analytical account                    │
   │   └── Delete: Check if used in journal entries           │
   └─────────────────────────────────────────────────────────┘

2. PAYMENT METHOD MANAGEMENT
   ┌─────────────────────────────────────────────────────────┐
   │ Setup → Payment Methods                                  │
   │   ├── Index: List payment methods with analytical       │
   │   ├── Create: Form with analytical account (required)    │
   │   └── Edit: Update payment method and analytical link    │
   └─────────────────────────────────────────────────────────┘

3. PAYMENT CREATION FLOWS
   ┌─────────────────────────────────────────────────────────┐
   │ Invoice Payment                                          │
   │   ├── Select Payment Method (dropdown)                   │
   │   ├── Analytical Account (auto-displayed, read-only)     │
   │   └── Submit → Stores both IDs                          │
   │                                                         │
   │ Purchase Payment (same flow)                            │
   │ Non-Invoice Payment (same flow)                         │
   │ Payment Voucher (same flow)                             │
   └─────────────────────────────────────────────────────────┘
```

## 📊 Database Relationships Diagram

```
┌──────────────────┐
│    branches      │
│  (id, name)      │
└────────┬─────────┘
         │
         │ 1:N
         │
         ▼
┌──────────────────────────┐
│ analytical_accounts     │
│  (id, name, code,        │
│   branch_id, status)     │
└────────┬─────────────────┘
         │
         │ 1:1 (default)
         │
         ▼
┌──────────────────────────┐
│ payment_methods          │
│  (id, name, code,        │
│   analytical_account_id) │
└────────┬─────────────────┘
         │
         │ 1:N (optional override)
         │
         ▼
┌──────────────────────────────┐
│ payment_method_branch_accounts│
│  (payment_method_id,          │
│   branch_id,                  │
│   analytical_account_id)     │
└──────────────────────────────┘

         │
         │ Used in
         │
         ▼
┌──────────────────────────┐
│ invoice_payments          │
│ purchase_payments         │
│ non_invoice_payments      │
│ payment_vouchers          │
│  (payment_method_id,      │
│   analytical_account_id)  │
└────────┬─────────────────┘
         │
         │ Creates
         │
         ▼
┌──────────────────────────┐
│ journal_entry_lines       │
│  (chart_of_account_id,   │
│   analytical_account_id,  │
│   debit_amount,           │
│   credit_amount)          │
└──────────────────────────┘
```

## 🎬 Complete Example Scenario

```
SCENARIO: Customer pays invoice with Cash Payment

Step 1: Setup (Admin)
   ┌─────────────────────────────────────────────────────────┐
   │ Admin creates:                                           │
   │   • Branch: "Main Branch" (id: 1)                       │
   │   • Analytical Account: "Cash Payments" (id: 5, branch:1)│
   │   • Payment Method: "Cash Payment" (id: 1, analytical:5) │
   └─────────────────────────────────────────────────────────┘

Step 2: Invoice Payment (User)
   ┌─────────────────────────────────────────────────────────┐
   │ User creates payment for Invoice #123:                  │
   │   • Amount: $1,000                                       │
   │   • Payment Method: "Cash Payment" (id: 1)              │
   │   • Analytical Account: Auto-filled "Cash Payments"     │
   └─────────────────────────────────────────────────────────┘
                    │
                    ▼
   ┌─────────────────────────────────────────────────────────┐
   │ Backend creates InvoicePayment:                         │
   │   invoice_payments:                                     │
   │     • invoice_id: 123                                   │
   │     • amount: 1000                                      │
   │     • payment_method_id: 1                              │
   │     • analytical_account_id: 5                          │
   └─────────────────────────────────────────────────────────┘
                    │
                    ▼
   ┌─────────────────────────────────────────────────────────┐
   │ Backend creates Journal Entry:                          │
   │   journal_entries:                                      │
   │     • type: "invoice_payment"                            │
   │     • reference: "INV-123"                               │
   │                                                         │
   │   journal_entry_lines:                                  │
   │     Line 1:                                             │
   │       • chart_of_account_id: 10 (Bank Account)          │
   │       • analytical_account_id: 5 (Cash Payments)        │
   │       • debit_amount: 1000                              │
   │       • credit_amount: 0                                 │
   │                                                         │
   │     Line 2:                                             │
   │       • chart_of_account_id: 20 (Accounts Receivable)   │
   │       • analytical_account_id: 5 (Cash Payments)        │
   │       • debit_amount: 0                                 │
   │       • credit_amount: 1000                             │
   └─────────────────────────────────────────────────────────┘

Step 3: Reporting (Analyst)
   ┌─────────────────────────────────────────────────────────┐
   │ Analyst requests "Cash Payments Report":                │
   │   • Filter: analytical_account_id = 5                   │
   │   • Date Range: 2024-01-01 to 2024-12-31               │
   │                                                         │
   │ Result:                                                 │
   │   • Total Cash Payments: $50,000                        │
   │   • Transaction Count: 150                              │
   │   • Average Payment: $333.33                            │
   │                                                         │
   │ ⚠️ This data is separate from accounting                 │
   │ ⚠️ Trial Balance still shows Bank Account balance       │
   │ ⚠️ Financial Statements unaffected                      │
   └─────────────────────────────────────────────────────────┘
```

## 🔐 Validation & Safety Rules

```
┌─────────────────────────────────────────────────────────────┐
│                    VALIDATION RULES                          │
└─────────────────────────────────────────────────────────────┘

1. ANALYTICAL ACCOUNT VALIDATION
   ✓ Cannot delete if used in journal_entry_lines
   ✓ Branch is required (no global accounts)
   ✓ Code must be unique (if provided)

2. PAYMENT METHOD VALIDATION
   ✓ Analytical account must exist
   ✓ Analytical account must be active
   ✓ Cannot use analytical_account_id as chart_of_account_id

3. CHART OF ACCOUNT VALIDATION
   ✓ Cannot use analytical_account_id in chart_of_account_id
   ✓ Analytical accounts filtered out from COA lists
   ✓ Prevents mixing accounting and analytics

4. JOURNAL ENTRY VALIDATION
   ✓ chart_of_account_id is required (for accounting)
   ✓ analytical_account_id is optional (for analytics)
   ✓ Both can coexist on same line
   ✓ Only chart_of_account_id affects double-entry
```

## 📈 Reporting Capabilities

```
┌─────────────────────────────────────────────────────────────┐
│                    REPORTING FEATURES                        │
└─────────────────────────────────────────────────────────────┘

1. Payment Method Analytics
   ├── Group by Analytical Account
   ├── Group by Payment Method
   ├── Date range filtering
   ├── Branch filtering
   └── Amount aggregation

2. Revenue by Payment Method
   ├── Sales revenue by payment method
   ├── Purchase payments by payment method
   └── Comparison reports

3. Transaction Analysis
   ├── Payment volume by analytical account
   ├── Average transaction size
   └── Payment method trends

⚠️ ALL REPORTS ARE ANALYTICS ONLY
   - Do NOT affect Trial Balance
   - Do NOT affect Financial Statements
   - Used for business intelligence
```

## 🎯 Summary: What Goes Where

```
┌─────────────────────────────────────────────────────────────┐
│                    DATA STORAGE SUMMARY                     │
└─────────────────────────────────────────────────────────────┘

analytical_accounts table:
   ✓ Stores analytical account definitions
   ✓ One per branch (required)
   ✓ Linked to payment methods

payment_methods table:
   ✓ Stores payment method definitions
   ✓ Links to analytical_account_id (default)
   ✓ Can have branch-specific overrides

payment_method_branch_accounts table:
   ✓ Stores branch-specific analytical account overrides
   ✓ Optional (falls back to payment method default)

invoice_payments / purchase_payments / etc.:
   ✓ Stores payment_method_id (which method was used)
   ✓ Stores analytical_account_id (for historical tracking)
   ✓ Both stored for audit trail

journal_entry_lines table:
   ✓ Stores chart_of_account_id (REQUIRED - for accounting)
   ✓ Stores analytical_account_id (OPTIONAL - for analytics)
   ✓ Both can exist, but only chart_of_account affects books
```

## 🚀 Seeder Flow

```
┌─────────────────────────────────────────────────────────────┐
│              SEEDER EXECUTION FLOW                          │
└─────────────────────────────────────────────────────────────┘

Command: php artisan tenants:seed-payment-methods

1. Command finds all tenants
   └── For each tenant:
       ├── Initialize tenant context
       ├── Run TenantPaymentMethodAnalyticalAccountSeeder
       └── Revert tenant context

2. Seeder Execution:
   ┌─────────────────────────────────────────────────────────┐
   │ Step 1: Cleanup                                          │
   │   ├── Delete payment_method_branch_accounts             │
   │   ├── Set payment_method_id = null in payment tables     │
   │   ├── Set analytical_account_id = null in payments      │
   │   ├── Set analytical_account_id = null in journal lines│
   │   ├── Delete all payment_methods                         │
   │   └── Delete all analytical_accounts                     │
   └─────────────────────────────────────────────────────────┘
                    │
                    ▼
   ┌─────────────────────────────────────────────────────────┐
   │ Step 2: Create Analytical Accounts                      │
   │   For each branch:                                       │
   │     For each template (7 types):                        │
   │       ├── Create analytical account                     │
   │       └── Store in array for linking                     │
   └─────────────────────────────────────────────────────────┘
                    │
                    ▼
   ┌─────────────────────────────────────────────────────────┐
   │ Step 3: Create Payment Methods                          │
   │   For each payment method (7 types):                    │
   │     ├── Get analytical account for default branch       │
   │     ├── Create payment method                           │
   │     └── Link to analytical_account_id                    │
   └─────────────────────────────────────────────────────────┘
                    │
                    ▼
   ┌─────────────────────────────────────────────────────────┐
   │ Step 4: Summary                                          │
   │   └── Display created counts                             │
   └─────────────────────────────────────────────────────────┘
```

This documentation covers the complete flow of the analytical accounts system from setup to reporting!







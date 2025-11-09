# Arqam System - Multi-Tenant Multi-Branch Architecture Analysis

## Executive Summary

**Arqam System** is a comprehensive multi-tenant accounting/ERP system built with Laravel that implements a sophisticated two-level data isolation architecture:
1. **Tenant Level**: Complete database isolation using Stancl Tenancy package
2. **Branch Level**: Data isolation within each tenant's database using branch_id foreign keys

---

## System Architecture Overview

### 1. Multi-Tenancy Layer (Top Level)

**Technology**: Laravel with Stancl Tenancy package (`stancl/tenancy`)

**Implementation**:
- Each tenant (company) has its own isolated database
- Tenant identification via domain/subdomain routing
- Central database stores tenant metadata
- Tenant databases created dynamically

**Key Components**:
- **Tenant Model** (`app/Models/Tenant.php`): Extends `BaseTenant` from Stancl Tenancy
- **Tenant Features**:
  - Subscription management (plans, payments, trials)
  - Domain management (multiple domains per tenant)
  - Email verification
  - Archiving/restoration capabilities
  - Banned status tracking

**Tenant Database Structure**:
- Each tenant database contains all business data
- Users, products, invoices, purchases, etc. are tenant-scoped
- No cross-tenant data access

---

### 2. Multi-Branch Layer (Within Tenant)

**Concept**: Each tenant can have multiple branches with complete data isolation

**Implementation Strategy**:
- Branches exist only within tenant databases (not in central DB)
- All business data tables include `branch_id` foreign key
- Branch context managed via session and app container
- Users can be assigned to multiple branches with different roles

---

## Database Architecture

### Central Database (Tenant Management)

**Tables**:
- `tenants` - Tenant metadata, subscriptions, plans
- `domains` - Domain mappings for tenants
- `plans` - Subscription plans
- `subscriptions` - Tenant subscriptions
- `payments` - Payment records

### Tenant Database Structure

#### Core Branch Tables

**`branches` Table**:
```sql
- id (primary key)
- name (branch name)
- code (unique branch code)
- slug (URL-friendly identifier)
- address, phone, email (contact info)
- description
- is_active (boolean)
- is_main (boolean) - marks default branch
- timestamps
- soft_deletes
```

**`branch_user` Pivot Table**:
```sql
- id
- branch_id (foreign key)
- user_id (foreign key)
- role (branch-specific role)
- timestamps
- unique(branch_id, user_id)
```

#### Business Data Tables (All Include `branch_id`)

**Core Entities** (34+ models with branch_id):
- `clients` - Customer records
- `suppliers` - Supplier records
- `products` - Product catalog
- `employees` - Employee records

**Financial Transactions**:
- `invoices` + `invoice_products` + `invoice_payments`
- `purchases` + `purchase_products` + `purchase_payments`
- `invoice_returns` + `invoice_return_products`
- `purchase_returns` + `purchase_return_products`
- `quotations` + `quotation_products`
- `purchase_orders` + `purchase_order_products`

**Accounting**:
- `accounts` - Cashbook accounts
- `account_transactions` - Account transactions
- `journal_entries` + `journal_entry_lines`
- `invoice_journals`, `purchase_journals`, `expense_journals`, `loan_journals`
- `chart_of_accounts` - Chart of accounts (branch-specific)

**Other Entities**:
- `expenses` + `expense_categories` + `expense_sub_categories`
- `assets` + `asset_types`
- `inventory_adjustments` + `adjustment_products`
- `loans` + `loan_payments`
- `payrolls` + `salary_increments`
- `balance_tansfers` - Balance transfers
- `non_invoice_payments` - Client non-invoice payments
- `non_purchase_payments` - Supplier non-purchase payments
- `payment_vouchers` - Payment vouchers

**Configuration Tables** (Branch-Specific Settings):
- `general_settings` - Branch-specific settings
- `product_categories` + `product_sub_categories`
- `brands` - Product brands
- `units` - Measurement units
- `vat_rates` - VAT/tax rates
- `account_routing_settings` - Account routing configuration

**Relationships**:
- `client_representatives` - Client contacts
- `supplier_representatives` - Supplier contacts

---

## Model Relationships

### Branch Model (`app/Models/Branch.php`)

**Key Relationships**:
```php
// Many-to-Many with Users
public function users() {
    return $this->belongsToMany(User::class, 'branch_user')
        ->withPivot('role')
        ->withTimestamps();
}

// Has Many relationships with all business entities
- clients()
- suppliers()
- products()
- invoices()
- purchases()
- quotations()
- accounts()
- expenses()
- employees()
- journalEntries()
- assets()
- inventoryAdjustments()
```

**Key Methods**:
- `getMainBranch()` - Get the main branch for tenant
- `getDefaultBranch()` - Get default branch (main or first active)
- `scopeActive()` - Query scope for active branches
- `scopeMain()` - Query scope for main branch

### User Model (`app/Models/User.php`)

**Branch-Related Fields**:
- `default_branch_id` - User's default branch preference

**Key Relationships**:
```php
// Many-to-Many with Branches
public function branches() {
    return $this->belongsToMany(Branch::class, 'branch_user')
        ->withPivot('role')
        ->withTimestamps();
}

// Default branch
public function defaultBranch() {
    return $this->belongsTo(Branch::class, 'default_branch_id');
}
```

**Key Methods**:
- `currentBranch()` - Get current branch from session or default
- `hasAccessToBranch($branchId)` - Check branch access

### Business Models

**Pattern Applied to All Business Models**:
```php
// In fillable array
protected $fillable = [
    // ... existing fields
    'branch_id',
];

// Relationship
public function branch() {
    return $this->belongsTo(Branch::class);
}
```

**Models with Branch Support** (34+ models):
- Client, Supplier, Product, Invoice, Purchase, Quotation
- Account, AccountTransaction, Expense
- JournalEntry, Asset, Employee, Loan, Payroll
- And all related pivot/child tables

---

## Branch Context Management

### Middleware: `SetBranchContext`

**Location**: `app/Http/Middleware/SetBranchContext.php`

**Functionality**:
1. Retrieves current user
2. Gets branch ID from:
   - Session (`current_branch_id`)
   - User's default branch (`default_branch_id`)
   - First active branch user has access to
3. Stores branch ID in:
   - Session for future requests
   - App container (`app()->instance('current_branch_id', $branchId)`)

**Usage**: Applied to tenant routes to maintain branch context

### Frontend Branch Management

**Vue.js Middleware**: `resources/js/middleware/check-branch.js`
- Validates user has a default branch
- Redirects to branch selection if needed
- Excludes certain routes (login, initialization, etc.)

---

## API Endpoints

### Branch Management Routes

**Base Path**: `/api/branches`

**Endpoints**:
- `GET /api/branches` - List all branches
- `GET /api/branches/search` - Search branches
- `GET /api/branches/current` - Get current branch
- `POST /api/branches/switch` - Switch active branch
- `GET /api/branches/{slug}` - Get branch by slug
- `POST /api/branches` - Create branch
- `PUT /api/branches/{slug}` - Update branch
- `DELETE /api/branches/{slug}` - Delete branch

### User-Branch Assignment Routes

**Endpoints**:
- `GET /api/branches/{branchId}/users` - Get users in branch
- `GET /api/users/{userId}/branches` - Get user's branches
- `POST /api/user-branches` - Assign user to branch
- `PUT /api/user-branches/{userId}/{branchId}` - Update assignment
- `DELETE /api/user-branches/{userId}/{branchId}` - Remove assignment
- `POST /api/user-branches/set-default` - Set default branch

---

## Data Filtering Implementation

### Controller Pattern

**Current Implementation** (Manual Filtering):
```php
// Example from ProductController
public function index(Request $request) {
    $query = Product::with(...);
    
    $user = Auth::user();
    $branchIds = $this->getUserBranchIds($user);
    $query->whereIn('branch_id', $branchIds);
    
    return ProductListingResource::collection($query->paginate(...));
}

private function getUserBranchIds($user) {
    $defaultBranchId = (int) ($user->default_branch_id ?? 0);
    return [$defaultBranchId > 0 ? $defaultBranchId : 0];
}
```

**Controllers Using This Pattern**:
- ProductController
- AssetController
- TransactionController
- ReportController
- InvoiceController
- PurchaseController
- QuotationController
- JournalEntryController
- InventoryController

### Note on Global Scopes

**Current State**: No global scopes implemented for automatic branch filtering
- Controllers manually filter by `branch_id`
- Branch context available via `app('current_branch_id')`
- Could be enhanced with `BelongsToBranch` trait (mentioned in implementation plan)

---

## Key Features

### 1. Branch Isolation
- Complete data separation between branches
- Each branch has independent:
  - Products, clients, suppliers
  - Financial transactions
  - Inventory
  - Accounts and chart of accounts
  - Settings and configuration

### 2. User-Branch Assignment
- Users can belong to multiple branches
- Branch-specific roles via pivot table
- Default branch preference per user
- Access control based on branch assignments

### 3. Branch Switching
- Users can switch between accessible branches
- Session-based branch context
- Automatic fallback to default branch

### 4. Main Branch Concept
- One branch per tenant marked as `is_main`
- Used as default when no branch selected
- Special handling in branch selection logic

### 5. Backward Compatibility
- `branch_id` is nullable in migrations
- Existing tenants without branches continue to work
- Migration creates default branch for existing tenants

---

## Migration Strategy

### Migration Files

1. **`2025_12_28_000001_create_branches_table.php`**
   - Creates branches table
   - Adds slug column (via separate migration)

2. **`2025_12_28_000002_create_branch_user_table.php`**
   - Creates branch_user pivot table
   - Enforces unique user-branch combinations

3. **`2025_12_28_000003_add_branch_id_to_tenant_tables.php`**
   - Adds `branch_id` to 50+ tables
   - Creates foreign key constraints
   - Adds indexes for performance
   - Uses `onDelete('restrict')` to prevent data loss

4. **`2025_12_28_000005_setup_default_branches_for_existing_tenants.php`**
   - Creates default branch for existing tenants
   - Migrates existing data to default branch

5. **`2025_12_29_000001_add_slug_to_branches_table.php`**
   - Adds slug column for URL-friendly identifiers

---

## Security & Access Control

### Branch Access Control
- Users can only access branches they're assigned to
- Branch context validated in controllers
- Session-based branch switching requires authentication

### Permission System
- Role-based permissions (existing system)
- Branch-specific roles via `branch_user.role`
- Permission checks in controllers via middleware

---

## Frontend Integration

### Vue.js Components
- Branch selection interface
- Branch switcher in navigation
- Branch context in store/state management
- Route guards for branch validation

### Branch Selection Flow
1. User logs in
2. System checks for default branch
3. If no default, redirects to branch selection
4. User selects branch
5. Branch stored in session
6. All subsequent requests use selected branch

---

## Reporting & Analytics

### Branch-Scoped Reports
- All reports filter by branch
- Financial reports (balance sheet, P&L, trial balance)
- Sales and purchase reports
- Inventory reports
- Client/supplier reports
- All respect branch boundaries

### Cross-Branch Reporting
- Currently not implemented
- All reports are branch-specific
- Could be enhanced for tenant-level aggregation

---

## System Strengths

1. **Complete Data Isolation**: Two-level isolation (tenant + branch)
2. **Scalability**: Supports unlimited tenants and branches
3. **Flexibility**: Users can work across multiple branches
4. **Backward Compatible**: Existing tenants continue working
5. **Comprehensive**: 50+ tables support branch isolation
6. **Well-Structured**: Clear separation of concerns

---

## Potential Improvements

1. **Global Scopes**: Implement `BelongsToBranch` trait for automatic filtering
2. **Cross-Branch Reports**: Add tenant-level aggregation capabilities
3. **Branch-Level Permissions**: Enhance role system for branch-specific permissions
4. **Branch Templates**: Allow copying branch configuration
5. **Branch Analytics**: Dashboard metrics per branch
6. **Branch Transfer**: Tools to transfer data between branches
7. **API Consistency**: Standardize branch filtering across all controllers

---

## Technical Stack

- **Framework**: Laravel (PHP)
- **Multi-Tenancy**: Stancl Tenancy package
- **Database**: MySQL/PostgreSQL (per tenant)
- **Frontend**: Vue.js
- **Authentication**: Laravel Sanctum
- **ORM**: Eloquent ORM

---

## File Structure

```
app/
├── Models/
│   ├── Tenant.php (Central)
│   ├── Branch.php (Tenant DB)
│   ├── User.php (Tenant DB, branch relationships)
│   └── [34+ business models with branch_id]
├── Http/
│   ├── Controllers/API/
│   │   ├── BranchController.php
│   │   └── UserBranchController.php
│   └── Middleware/
│       └── SetBranchContext.php
database/
└── migrations/tenant/
    ├── create_branches_table.php
    ├── create_branch_user_table.php
    ├── add_branch_id_to_tenant_tables.php
    └── setup_default_branches_for_existing_tenants.php
routes/
└── tenant.php (Branch routes)
resources/js/
└── middleware/check-branch.js
```

---

## Conclusion

The Arqam System implements a sophisticated multi-tenant, multi-branch architecture that provides:
- Complete data isolation at both tenant and branch levels
- Flexible user-branch assignments
- Comprehensive branch support across 50+ business entities
- Backward compatibility with existing tenants
- Scalable architecture for growth

The system is well-architected with clear separation between tenant management (central DB) and business operations (tenant DBs with branch isolation).


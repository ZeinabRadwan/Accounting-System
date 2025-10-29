# Multi-Branch Implementation Plan for Accounting System

## Executive Summary

This document outlines a comprehensive plan to implement multi-branch functionality in the existing multi-tenant accounting system. The implementation will allow each tenant (company) to have multiple branches, with complete data isolation between branches while maintaining the existing architecture and design patterns.

---

## Current System Architecture

### Existing Structure
- **Multi-Tenancy**: Laravel with Stancl Tenancy package
- **Database Strategy**: Each tenant has its own database
- **Data Scope**: Currently, all data is tenant-scoped
- **Key Models**: Clients, Suppliers, Products, Invoices, Purchases, Accounts, Journal Entries, Expenses, etc.
- **User Model**: Located in tenant databases with role-based permissions

### Current Data Isolation
- **Tenant Level**: Complete database isolation per tenant
- **Branch Level**: NO branch-level isolation (all data is tenant-wide)

---

## Proposed Architecture

### New Structure
```
Tenant (Company)
  ├── Branch 1
  │   ├── Users (assigned to branch)
  │   ├── Clients
  │   ├── Invoices
  │   ├── Products
  │   └── All other data...
  ├── Branch 2
  │   ├── Users (assigned to branch)
  │   ├── Clients
  │   ├── Invoices
  │   ├── Products
  │   └── All other data...
  └── ...
```

### Key Design Principles
1. **Branch is a Tenant-Level Concept**: Branches exist only within tenant databases
2. **Complete Data Isolation**: Each branch's data is completely isolated from other branches
3. **Shared Infrastructure**: Users can be assigned to multiple branches with different roles
4. **Consistent Design**: Follow existing patterns and structure
5. **Backward Compatibility**: Existing tenants without branches work seamlessly

---

## Implementation Phases

### Phase 1: Database & Models Setup

#### 1.1 Create Branches Table Migration
**File**: `database/migrations/tenant/create_branches_table.php`

```php
Schema::create('branches', function (Blueprint $table) {
    $table->id();
    $table->string('name');                    // Branch name
    $table->string('code');                    // Unique branch code
    $table->string('address')->nullable();
    $table->string('phone')->nullable();
    $table->string('email')->nullable();
    $table->text('description')->nullable();
    $table->boolean('is_active')->default(true);
    $table->boolean('is_main')->default(false); // Mark main/default branch
    $table->timestamps();
    $table->softDeletes();
    
    $table->unique('code');
});
```

#### 1.2 Add `branch_id` to Key Tables
Create migrations to add `branch_id` to ALL relevant tables:

**Tables that need `branch_id`** (approximately 50+ tables):
- clients
- suppliers
- products
- invoices
- invoice_products
- invoice_payments
- purchases
- purchase_products
- purchase_payments
- quotations
- quotation_products
- accounts
- account_transactions
- expenses
- invoice_returns
- purchase_returns
- journal_entries
- journal_entry_lines
- inventory_adjustments
- adjustment_products
- assets
- employees
- payrolls
- loans
- loan_payments
- balance_transfers
- non_invoice_payments
- non_purchase_payments
- general_settings (to store branch-specific settings)
- ... all other tenant-specific tables

**Migration Pattern**:
```php
// Example: Add branch_id to invoices
Schema::table('invoices', function (Blueprint $table) {
    $table->foreignId('branch_id')->nullable()->after('tenant_id')
        ->constrained()->onDelete('restrict');
    $table->index('branch_id');
});
```

**Notes**:
- `branch_id` should be nullable for backward compatibility
- Add foreign key constraints with `onDelete('restrict')` to prevent accidental data loss
- Add indexes for performance

#### 1.3 Create Branch Model
**File**: `app/Models/Branch.php`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Branch extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'code',
        'address',
        'phone',
        'email',
        'description',
        'is_active',
        'is_main',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_main' => 'boolean',
    ];

    /**
     * Get the users assigned to this branch
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'branch_user')
            ->withPivot('role') // branch-specific role
            ->withTimestamps();
    }

    /**
     * Get all clients for this branch
     */
    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    /**
     * Get all invoices for this branch
     */
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    // ... similar relationships for all other models

    /**
     * Get the main branch
     */
    public static function getMainBranch()
    {
        return static::where('is_main', true)->first();
    }

    /**
     * Scope to get only active branches
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
```

#### 1.4 Update All Models to Support Branches

**Pattern for ALL models**:
```php
// In Invoice.php (and similar for all models)
protected $fillable = [
    // ... existing fields
    'branch_id',
];

// Add relationship
public function branch()
{
    return $this->belongsTo(Branch::class);
}

// Add global scope (optional - see Phase 2)
```

---

### Phase 2: Branch Context Management

#### 2.1 Create Branch Middleware
**File**: `app/Http/Middleware/SetBranchContext.php`

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class SetBranchContext
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        // Get current user
        $user = Auth::user();
        
        if (!$user) {
            return $next($request);
        }

        // Get branch from session, user preference, or default
        $branchId = Session::get('current_branch_id');
        
        if (!$branchId) {
            // Try to get from user's default branch
            $branchId = $user->default_branch_id;
            
            if (!$branchId) {
                // Get first branch user has access to
                $branch = $user->branches()->active()->first();
                $branchId = $branch ? $branch->id : null;
            }
        }

        // Set branch in app context
        if ($branchId) {
            app()->instance('current_branch_id', $branchId);
        }

        return $next($request);
    }
}
```

#### 2.2 Add Branch Scope to Models
**File**: `app/Traits/BelongsToBranch.php` (new trait)

```php
<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

trait BelongsToBranch
{
    /**
     * Boot the trait
     */
    protected static function bootBelongsToBranch()
    {
        // Automatically filter queries to current branch
        static::addGlobalScope('branch', function (Builder $builder) {
            if (app()->has('current_branch_id')) {
                $branchId = app('current_branch_id');
                $builder->where('branch_id', $branchId);
            }
        });
    }

    /**
     * Get the branch for this model
     */
    public function branch()
    {
        return $this->belongsTo(\App\Models\Branch::class);
    }
}
```

**Apply to models** that need automatic filtering:
```php
use BelongsToBranch;

// All relevant models will automatically filter by current branch
```

#### 2.3 Update User Model
**File**: `app/Models/User.php`

```php
// Add to fillable
protected $fillable = [
    // ... existing
    'default_branch_id',
];

// Add relationships
public function branches()
{
    return $this->belongsToMany(Branch::class, 'branch_user')
        ->withPivot('role')
        ->withTimestamps();
}

public function currentBranch()
{
    return app('current_branch_id') 
        ? Branch::find(app('current_branch_id'))
        : $this->branches()->first();
}
```

#### 2.4 Create Branch Switch Controller
**File**: `app/Http/Controllers/API/BranchController.php`

```php
<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class BranchController extends Controller
{
    /**
     * Get all branches user has access to
     */
    public function index()
    {
        $user = Auth::user();
        $branches = $user->branches()->active()->get();
        
        return response()->json([
            'branches' => $branches,
            'current_branch' => $this->getCurrentBranch(),
        ]);
    }

    /**
     * Switch to a different branch
     */
    public function switch(Request $request)
    {
        $request->validate([
            'branch_id' => 'required|exists:branches,id',
        ]);

        $user = Auth::user();
        $branch = Branch::findOrFail($request->branch_id);

        // Check if user has access to this branch
        if (!$user->branches->contains($branch)) {
            return response()->json([
                'message' => 'You do not have access to this branch.'
            ], 403);
        }

        // Set current branch in session
        Session::put('current_branch_id', $branch->id);

        return response()->json([
            'message' => 'Branch switched successfully.',
            'branch' => $branch,
        ]);
    }

    /**
     * Get current branch
     */
    public function getCurrentBranch()
    {
        $branchId = Session::get('current_branch_id');
        if ($branchId) {
            return Branch::find($branchId);
        }
        return Auth::user()->branches()->active()->first();
    }
}
```

---

### Phase 3: UI Components & Frontend

#### 3.1 Create Branch Selector Component
**File**: `resources/js/components/BranchSelector.vue`

```vue
<template>
    <div class="branch-selector">
        <select 
            v-model="selectedBranch" 
            @change="switchBranch"
            class="form-control"
        >
            <option 
                v-for="branch in branches" 
                :key="branch.id" 
                :value="branch.id"
            >
                {{ branch.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            branches: [],
            selectedBranch: null,
        };
    },
    mounted() {
        this.loadBranches();
    },
    methods: {
        async loadBranches() {
            const response = await axios.get('/api/branches');
            this.branches = response.data.branches;
            this.selectedBranch = response.data.current_branch?.id;
        },
        async switchBranch() {
            await axios.post('/api/branches/switch', {
                branch_id: this.selectedBranch,
            });
            // Reload the page or refresh data
            window.location.reload();
        },
    },
};
</script>
```

#### 3.2 Add Branch Management UI
- **Branch List Page**: `/resources/js/pages/Branches/Index.vue`
- **Branch Create/Edit Page**: `/resources/js/pages/Branches/Create.vue`
- **Add to navigation menu** if user has permission

#### 3.3 Update Existing Components
- Add branch filter to all list pages (invoices, clients, etc.)
- Ensure branch selector is visible in header
- Update permission checks to consider branch access

---

### Phase 4: Controllers & Services Update

#### 4.1 Update Controllers Pattern

**Before**:
```php
public function index()
{
    $invoices = Invoice::with('client')->get();
    return response()->json($invoices);
}
```

**After** (with automatic branch filtering via global scope):
```php
public function index()
{
    $invoices = Invoice::with('client')->get(); 
    // Already filtered by branch due to global scope
    return response()->json($invoices);
}
```

#### 4.2 Update Store Methods
```php
public function store(Request $request)
{
    $data = $request->validated();
    
    // Automatically add current branch
    $data['branch_id'] = app('current_branch_id');
    
    $invoice = Invoice::create($data);
    
    return response()->json($invoice);
}
```

#### 4.3 Update Forms & Requests
- Ensure all validation includes branch validation
- Add branch_id to form requests where applicable

---

### Phase 5: Reports & Analytics

#### 5.1 Update Reports
All reports need to consider branch:
- Financial Reports (Balance Sheet, Profit & Loss)
- Inventory Reports
- Sales/Purchase Reports
- VAT Reports

**Pattern**:
```php
// Reports are automatically scoped to current branch
// For cross-branch reports, need special permission
```

#### 5.2 Cross-Branch Reporting
For tenants with "see all branches" permission:
- Add branch filter dropdown to reports
- Option to view "All Branches" or "Specific Branch"
- Aggregate data across branches

---

### Phase 6: Migration & Data Seeding

#### 6.1 Create Default Branch Migration
**File**: `database/migrations/tenant/create_default_branch.php`

```php
public function up()
{
    // Check if branches table exists and has no data
    if (!Schema::hasTable('branches')) {
        return; // Table not created yet
    }

    $branch = Branch::where('is_main', true)->first();
    
    if (!$branch) {
        // Create default branch
        Branch::create([
            'name' => 'Main Branch',
            'code' => 'MAIN',
            'is_main' => true,
            'is_active' => true,
        ]);
    }

    // Update all existing records to point to this branch
    $defaultBranch = Branch::where('is_main', true)->first();
    
    if ($defaultBranch) {
        DB::table('clients')->update(['branch_id' => $defaultBranch->id]);
        DB::table('invoices')->update(['branch_id' => $defaultBranch->id]);
        // ... update all other tables
    }
}
```

#### 6.2 Update Existing Tenants
Run migration script to:
1. Create default "Main Branch" for each tenant
2. Assign all existing data to this main branch
3. Assign all existing users to this main branch

---

### Phase 7: Testing & Validation

#### 7.1 Unit Tests
- Test Branch model relationships
- Test global scopes
- Test middleware
- Test branch switching

#### 7.2 Feature Tests
- Create invoice in Branch A
- Verify it's not visible in Branch B
- Switch branch
- Verify context changes

#### 7.3 Integration Tests
- Full workflow: create branch → assign users → create invoices
- Reports show correct branch data
- Permissions work correctly

---

### Phase 8: Permissions & Access Control

#### 8.1 Branch-Level Permissions
Extend existing role/permission system:

**New Permissions**:
- `view-branches`
- `create-branches`
- `edit-branches`
- `delete-branches`
- `view-all-branches` (for admins)
- `switch-branches`

#### 8.2 User-Branch Assignment
- Users can be assigned to multiple branches
- Different roles in different branches
- Access control based on branch assignment

---

## Technical Considerations

### Database Performance
- **Indexes**: Add `branch_id` indexes to all tables
- **Composite Indexes**: (branch_id, created_at) for performance
- **Query Optimization**: Leverage indexes in reports

### Data Integrity
- **Foreign Key Constraints**: Use `onDelete('restrict')` to prevent orphaned data
- **Default Branch**: Always have at least one branch (main branch)
- **Branch Deletion**: Check for associated data before allowing deletion

### Backward Compatibility
- `branch_id` nullable initially to support existing data
- Default branch created automatically
- Existing tenants work without branches (all data goes to default branch)

### API Compatibility
- No changes to external APIs needed
- Internal filtering handled by global scopes
- Branch context managed transparently

---

## Migration Strategy

### Rollout Plan
1. **Phase 1-3**: Deploy code changes (non-breaking)
2. **Phase 4-5**: Run migration to add branch_id to tables
3. **Phase 6**: Create default branches and assign existing data
4. **Phase 7**: Enable branch features progressively
5. **Phase 8**: Full rollout

### Rollback Plan
- Keep `branch_id` nullable
- Keep default branch behavior
- Maintain backward compatibility
- No data loss during migration

---

## Estimated Impact

### Files to Modify
- **Migrations**: ~50+ files (add `branch_id` to tables)
- **Models**: ~50+ models (add relationships)
- **Controllers**: ~30+ controllers (add branch context)
- **Frontend**: ~20+ components (add branch selector)
- **New Files**: ~15+ files (middleware, traits, controllers, components)

### Estimated Timeline
- **Phase 1-2**: 2-3 days
- **Phase 3-4**: 2-3 days
- **Phase 5-6**: 1-2 days
- **Phase 7-8**: 1-2 days
- **Total**: 6-10 days

---

## Risk Assessment

### Low Risk
- Adding nullable columns (backward compatible)
- Creating default branches
- New UI components

### Medium Risk
- Model relationships
- Global scopes (might affect existing queries)
- Migration of existing data

### High Risk
- Performance impact with global scopes
- Permission system changes
- Cross-branch reporting

---

## Success Criteria

1. ✅ All tenants have at least one branch (default)
2. ✅ All data is properly isolated by branch
3. ✅ Users can switch between branches
4. ✅ Reports show correct branch data
5. ✅ No performance degradation
6. ✅ Backward compatibility maintained
7. ✅ All existing functionality works unchanged
8. ✅ New tenants get branch setup automatically

---

## Future Enhancements

### Short Term (Phase 2)
- Branch-specific settings
- Branch-level permissions
- Branch transfer functionality

### Long Term (Phase 3)
- Inter-branch transactions
- Centralized inventory management
- Multi-location stock transfer
- Branch-specific pricing
- Branch-level chart of accounts

---

## Conclusion

This plan provides a robust, scalable, and maintainable approach to adding multi-branch functionality while preserving the existing system's architecture and design patterns. The implementation is backward compatible and maintains data integrity throughout the process.

The system will support:
- Multiple branches per tenant
- Complete data isolation between branches
- User access control by branch
- Branch-level reporting
- Scalable architecture for future enhancements



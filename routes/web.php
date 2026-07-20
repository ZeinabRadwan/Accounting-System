<?php

use App\Http\Controllers\Reports\CustomerStatementPrintController;
use App\Http\Controllers\Reports\DailyClosingPrintController;
use App\Http\Controllers\Reports\SupplierStatementPrintController;
use App\Http\Controllers\Sales\InvoicePrintController;
use App\Livewire\Admin\Branches\ManageBranches;
use App\Livewire\Admin\Customers\CustomerAccountStatement;
use App\Livewire\Admin\Customers\ManageCustomers;
use App\Livewire\Admin\Dashboard\Dashboard;
use App\Livewire\Admin\Expenses\ManageExpenses;
use App\Livewire\Admin\Inventory\ManageInventory;
use App\Livewire\Admin\Products\ManageCategories;
use App\Livewire\Admin\Products\ManageProducts;
use App\Livewire\Admin\Purchases\ManagePurchases;
use App\Livewire\Admin\Reports\CustomerReport;
use App\Livewire\Admin\Reports\DailyClosingShow;
use App\Livewire\Admin\Reports\DailyClosingsIndex;
use App\Livewire\Admin\Reports\CustomerStatement;
use App\Livewire\Admin\Reports\InventoryReport;
use App\Livewire\Admin\Reports\ProductReport;
use App\Livewire\Admin\Reports\ProfitReport;
use App\Livewire\Admin\Returns\ManageReturns;
use App\Livewire\Admin\Sales\ManageSales;
use App\Livewire\Admin\Settings\DailyInvoiceVisibility;
use App\Livewire\Admin\Settings\DailySettings;
use App\Livewire\Admin\Settings\InvoiceSettings;
use App\Livewire\Admin\Settings\PermissionsManager;
use App\Livewire\Admin\Suppliers\ManageSuppliers;
use App\Livewire\Admin\Suppliers\SupplierAccountStatement;
use App\Livewire\Admin\Transfers\ManageTransfers;
use App\Livewire\Admin\Treasuries\ManageTreasuries;
use App\Livewire\Admin\Treasuries\TreasuryShow;
use App\Livewire\Admin\Users\ManageUsers;
use App\Livewire\Admin\Reports\TreasuryReport;
use App\Livewire\Sales\Pos;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    }

    return redirect()->route('login');
});

Route::get('/locale/{locale}', [\App\Http\Controllers\LocaleController::class, 'switch'])
    ->name('locale.switch');

Route::get('dashboard', function () {
    $user = auth()->user();
    if ($user) {
        if ($user->canAccessAdminPanel()) {
            return redirect()->route('admin.dashboard');
        }

        return redirect()->route('pos');
    }

    return redirect()->route('login');
})
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

Route::middleware(['auth', 'role:super_admin,admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', Dashboard::class)->name('dashboard');

    Route::get('/branches', ManageBranches::class)->name('branches.index');
    Route::get('/users', ManageUsers::class)->name('users.index');

    Route::get('/customers', ManageCustomers::class)->name('customers.index');
    Route::get('/customers/{customer}/statement', CustomerAccountStatement::class)->name('customers.statement');
    Route::get('/customers/{customer}/statement/print', CustomerStatementPrintController::class)->name('customers.statement.print');
    Route::get('/suppliers', ManageSuppliers::class)->name('suppliers.index');
    Route::get('/suppliers/{supplier}/statement', SupplierAccountStatement::class)->name('suppliers.statement');
    Route::get('/suppliers/{supplier}/statement/print', SupplierStatementPrintController::class)->name('suppliers.statement.print');

    Route::get('/products', ManageProducts::class)->name('products.index');
    Route::get('/products/categories', ManageCategories::class)->name('products.categories');

    Route::get('/inventory', ManageInventory::class)->name('inventory.index');
    Route::get('/sales', ManageSales::class)->name('sales.index');
    Route::get('/purchases', ManagePurchases::class)->name('purchases.index');
    Route::get('/returns', ManageReturns::class)->name('returns.index');
    Route::get('/transfers', ManageTransfers::class)->name('transfers.index');
    Route::get('/treasuries', ManageTreasuries::class)->name('treasuries.index');
    Route::get('/treasuries/{treasury}', TreasuryShow::class)->name('treasuries.show');
    Route::get('/expenses', ManageExpenses::class)->name('expenses.index');

    Route::view('/reports', 'admin.reports.index')->name('reports.index');
    Route::get('/reports/inventory', InventoryReport::class)->name('reports.inventory');
    Route::get('/reports/product', ProductReport::class)->name('reports.product');
    Route::get('/reports/customer', CustomerReport::class)->name('reports.customer');
    Route::get('/reports/customer-statement', CustomerStatement::class)->name('reports.customer-statement');
    Route::get('/reports/daily-closings', DailyClosingsIndex::class)->name('daily-closings.index');
    Route::get('/reports/daily-closings/{closing}', DailyClosingShow::class)->name('daily-closings.show');
    Route::get('/reports/daily-closings/{closing}/print', DailyClosingPrintController::class)->name('daily-closings.print');
    Route::get('/reports/profit', ProfitReport::class)->name('reports.profit');
    Route::get('/reports/treasury', TreasuryReport::class)->name('reports.treasury');

    Route::redirect('/settings', '/admin/settings/invoice')->name('settings.index');
    Route::get('/settings/invoice', InvoiceSettings::class)->name('settings.invoice');
    Route::get('/settings/daily', DailySettings::class)->name('settings.daily');
    Route::get('/settings/permissions', PermissionsManager::class)->name('settings.permissions');
    Route::get('/settings/daily-visibility', DailyInvoiceVisibility::class)->name('settings.daily_visibility');
});

Route::middleware(['auth', 'role:super_admin,admin,sales'])->group(function () {
    Route::get('/pos', Pos::class)->name('pos');
    Route::get('/invoices/{invoice}/print', InvoicePrintController::class)->name('invoices.print');
});

Route::middleware(['auth'])->post('/api/geofence/check', \App\Http\Controllers\Geofence\GeofenceCheckController::class)
    ->name('geofence.check');

require __DIR__.'/auth.php';

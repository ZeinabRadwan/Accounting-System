<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use App\Models\Tenant;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;
use App\Http\Controllers\Core\Auth\MultiTenantAuthController;

/*
|--------------------------------------------------------------------------
| Central Application Routes
|--------------------------------------------------------------------------
|
| These routes are for the central application (not tenant-specific).
| They handle tenant management and other central functionality.
|
*/

Route::middleware(['web'])->group(function () {
    // Central dashboard
    Route::get('/', function () {
        return view('central.dashboard');
    })->name('central.dashboard');

    // Multi-tenant authentication routes
    Route::prefix('auth')->name('multi-tenant.')->group(function () {
        Route::get('/login', [MultiTenantAuthController::class, 'showLogin'])->name('login');
        Route::post('/login', [MultiTenantAuthController::class, 'login'])->name('login');
        Route::get('/register', [MultiTenantAuthController::class, 'showRegister'])->name('register');
        Route::post('/register', [MultiTenantAuthController::class, 'register'])->name('register');
        Route::post('/logout', [MultiTenantAuthController::class, 'logout'])->name('logout');
    });

    // Tenant management
    Route::prefix('tenants')->name('tenants.')->group(function () {
        Route::get('/', function () {
            $tenants = Tenant::with('domains')->get();
            return view('central.tenants.index', compact('tenants'));
        })->name('index');

        Route::get('/create', function () {
            return view('central.tenants.create');
        })->name('create');

        Route::post('/store', function () {
            $request = request();
            
            // Validate the request
            $request->validate([
                'tenant_id' => 'required|string|unique:tenants,id|regex:/^[a-zA-Z0-9_-]+$/',
                'domain' => 'required|string|unique:domains,domain',
                'company_name' => 'required|string|max:255',
            ]);
            
            try {
                $tenant = Tenant::create(['id' => $request->tenant_id]);
                $tenant->domains()->create(['domain' => $request->domain]);
                
                return redirect()->route('tenants.index')->with('success', 'Tenant "'.$request->company_name.'" created successfully!');
            } catch (\Exception $e) {
                return redirect()->back()->withErrors(['error' => 'Failed to create tenant: ' . $e->getMessage()])->withInput();
            }
        })->name('store');

        Route::delete('/{tenant}', function (Tenant $tenant) {
            $tenant->delete();
            return redirect()->route('tenants.index')->with('success', 'Tenant deleted successfully!');
        })->name('delete');
    });
});

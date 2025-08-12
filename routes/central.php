<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use App\Models\Tenant;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

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
            
            $tenant = Tenant::create(['id' => $request->tenant_id]);
            $tenant->domains()->create(['domain' => $request->domain]);
            
            return redirect()->route('tenants.index')->with('success', 'Tenant created successfully!');
        })->name('store');

        Route::delete('/{tenant}', function (Tenant $tenant) {
            $tenant->delete();
            return redirect()->route('tenants.index')->with('success', 'Tenant deleted successfully!');
        })->name('delete');
    });
});

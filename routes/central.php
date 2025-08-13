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

    // Multi-tenant authentication routes are now handled by main routes

    // Tenant management
    Route::prefix('tenants')->name('tenants.')->group(function () {
        Route::get('/', function () {
            $tenants = Tenant::all();
            return view('central.tenants.index', compact('tenants'));
        })->name('index');

        Route::get('/create', function () {
            return view('central.tenants.create');
        })->name('create');

        Route::post('/store', function () {
            $request = request();
            
            // Validate the request
            $request->validate([
                'company_name' => 'required|string|max:255',
            ]);
            
            try {
                $tenant = Tenant::create([
                    'company_name' => $request->company_name
                ]);
                
                return redirect()->route('tenants.index')->with('success', 'Tenant "'.$request->company_name.'" created successfully! Tenant path: /' . $tenant->id);
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

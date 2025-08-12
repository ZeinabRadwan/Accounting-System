<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByPath;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    InitializeTenancyByPath::class,
    PreventAccessFromCentralDomains::class,
])->group(function () {
    // Tenant dashboard
    Route::get('/', function () {
        return view('tenant.dashboard');
    })->name('tenant.dashboard');

    // Tenant users
    Route::get('/users', function () {
        return view('tenant.users.index');
    })->name('tenant.users.index');

    // Add more tenant-specific routes here
});
 
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
    Route::get('/', function () {
        return 'This is your multi-tenant application. The id of the current tenant is ' . tenant('id');
    });

    /**
     * Backend Routes
     * Namespaces indicate folder structure
     * All your route in sub file must have a name with not more than 2 index
     * Example: brand.index or dashboard
     * See @var PermissionMiddleware for more information
     */


    Route::group(['prefix' => 'admin', 'middleware' => 'admin', 'as' => 'core.'], function () {
        /*
         * (good if you want to allow more than one group in the core,
         * then limit the core features by different roles or permissions)
         *
         * Note: Administrator has all permissions so you do not have to specify the administrator role everywhere.
         * These routes can not be hit if the password is expired
         */
        include_route_files(__DIR__ . '/core/');
    });
});

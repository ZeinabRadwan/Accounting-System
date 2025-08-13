<?php

use App\Http\Controllers\App\Settings\SettingsApiController;
use App\Http\Controllers\Core\Auth\User\UserPasswordController;
use App\Http\Controllers\Core\LanguageController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\InstallDemoDataController;
use App\Http\Controllers\SymlinkController;
use Illuminate\Support\Facades\Route;

/**
 * This route is only for user dashboard
 * And for some additional route
 */
//auth()->loginUsingId(1);

Route::redirect('/', 'admin/users/login');
Route::get('/get-basic-setting-data', [SettingsApiController::class, 'getBasicSettingData']);

// Main auth routes for multi-tenant system
Route::get('/login', [App\Http\Controllers\Core\Auth\MultiTenantAuthController::class, 'showLogin'])->name('login');
Route::post('/login', [App\Http\Controllers\Core\Auth\MultiTenantAuthController::class, 'login'])->name('login');
Route::get('/register', [App\Http\Controllers\Core\Auth\MultiTenantAuthController::class, 'showRegister'])->name('register');
Route::post('/register', [App\Http\Controllers\Core\Auth\MultiTenantAuthController::class, 'register'])->name('register');
Route::post('/logout', [App\Http\Controllers\Core\Auth\MultiTenantAuthController::class, 'logout'])->name('logout');

Route::get("doc/core/components", [DocumentationController::class, 'index']);
Route::get("doc/core/components/{component_name}", [DocumentationController::class, 'show']);

Route::get('/forget-password', [UserPasswordController::class, 'passwordReset']);
//Route::get('user/registration',[\App\Http\Controllers\Core\Auth\User\RegistrationController::class,'index']);

// Switch between the included languages
Route::get('lang/{lang}', [LanguageController::class, 'swap'])->name('language.change');

// available languages
Route::get('languages', [LanguageController::class, 'index'])->name('languages.index');

/*
 * All login related route will be go there
 * Only guest user can access this route
 */

Route::group(['middleware' => 'guest', 'prefix' => 'user'], function () {
    include_route_files(__DIR__ . '/user/');
});

Route::group(['middleware' => 'guest', 'prefix' => 'admin/users'], function () {
    include_route_files(__DIR__ . '/login/');
});

/**
 * This route is only for brand redirection
 * And for some additional route
 */
Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'authorize']], function () {
    include __DIR__ . '/additional.php';
});

Route::any('install-demo-data', [InstallDemoDataController::class, 'run'])
    ->name('install-demo-data');

Route::any('symlink', [SymlinkController::class, 'run'])
    ->name('storage.symlink');


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

// Tenant path-based routing - this must be BEFORE the general app routes to avoid conflicts
Route::group(['prefix' => '{tenant}', 'where' => ['tenant' => '[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}']], function () {
    // Define tenant routes directly here instead of including tenant.php


        Route::middleware(['tenant.auth'])->group(function () {
            // Tenant dashboard
            Route::get('/dashboard', function () {
                return view('dashboard.default');
            })->name('tenant.dashboard');

            // Tenant users
            Route::get('/users', function () {
                return view('tenant.users.index');
            })->name('tenant.users.index');

            // Tenant logout
            Route::post('/logout', function () {
                auth()->logout();
                request()->session()->invalidate();
                request()->session()->regenerateToken();
                
                // End tenancy and redirect to central
                tenancy()->end();
                return redirect()->route('central.dashboard');
            })->name('tenant.logout');
        });
});

// Central app routes (not tenant-specific) - only for authenticated users
Route::group(['middleware' => ['auth', 'authorize']], function () {
    include_route_files(__DIR__ . '/app/');
});

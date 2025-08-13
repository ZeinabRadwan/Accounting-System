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
  
});

<?php

namespace App\Providers;

use App\Domain\Branch\Models\Branch;
use App\Policies\BranchPolicy;
use App\Domain\Sales\Models\SalesInvoice;
use App\Policies\SalesInvoicePolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::policy(Branch::class, BranchPolicy::class);
        Gate::policy(SalesInvoice::class, SalesInvoicePolicy::class);

        // Super Admin always has every gate/policy ability (including invoice visibility bypass).
        Gate::before(function ($user, $ability) {
            if (method_exists($user, 'isSuperAdmin') && $user->isSuperAdmin()) {
                return true;
            }

            return null;
        });

        // Gate helper for permission checks
        Gate::define('permission', function ($user, string $key) {
            return $user->hasPermission($key);
        });

        // Blade helpers
        Blade::if('perm', function (string $key) {
            $user = auth()->user();
            return $user?->hasPermission($key) ?? false;
        });

        Blade::if('permsany', function (array $keys) {
            $user = auth()->user();
            return $user?->hasAnyPermission($keys) ?? false;
        });

        Blade::if('permsall', function (array $keys) {
            $user = auth()->user();
            return $user?->hasAllPermissions($keys) ?? false;
        });
    }
}

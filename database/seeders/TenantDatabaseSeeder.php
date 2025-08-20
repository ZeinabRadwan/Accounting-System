<?php

namespace Database\Seeders;

use Database\Seeders\Demo\DemoDatabaseSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class TenantDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // for testing purposes
        // this will not run in production environment
        if (App::environment('local')) {
            $this->call([
                DemoDatabaseSeeder::class,
                // Essential seeders that were missing in local environment
                TenantRoleSeeder::class,
                TenantSettingSeeder::class,
                CurrencySeeder::class,
                TenantPermissionSeeder::class, // Permissions first
                UserRoleSeeder::class, // Then roles
                UserPermissionSeeder::class, // Then user permissions
                RolePermissionSeeder::class, // Then role permissions
                TenantClientSeeder::class,
                TenantAccountSeeder::class,
                TenantVatRateSeeder::class,
                TenantMenuSeeder::class,
                TenantChartOfAccountType::class,
                TenantChartOfAccountSeeder::class,
            ]);
        }
        // for production
        else {
            $this->call([
                TenantRoleSeeder::class,
                TenantSettingSeeder::class,
                CurrencySeeder::class,
                UserRoleSeeder::class,
                TenantPermissionSeeder::class,
                UserPermissionSeeder::class,
                RolePermissionSeeder::class,
                TenantClientSeeder::class,
                TenantAccountSeeder::class,
                TenantVatRateSeeder::class,
                TenantMenuSeeder::class,
                TenantChartOfAccountType::class,
                TenantChartOfAccountSeeder::class,
            ]);
        }
    }
}

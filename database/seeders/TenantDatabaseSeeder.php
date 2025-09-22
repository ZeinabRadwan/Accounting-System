<?php

namespace Database\Seeders;

use Database\Seeders\Demo\DemoDatabaseSeeder;
use Database\Seeders\tenant\DefaultFiscalAndAccountingPeriodSeeder;
use Database\Seeders\tenant\DefaultRouteAccountingSettingsSeeder;
use Database\Seeders\tenant\FiscalYearSeeder;
use Database\Seeders\AccountStatementPermissionSeeder;
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
        // if (App::environment('local')) {
            // First create chart of accounts to avoid foreign key constraint issues
           
            // Then run demo seeders
            // $this->call([
            //     DemoDatabaseSeeder::class,
            // ]);

            // $this->call([
            //     TenantSettingSeeder::class,
            //     TenantChartOfAccountType::class,
            //     TenantChartOfAccountSeeder::class,
            //     AccountRoutingSettingsSeeder::class,
            //     FiscalYearSeeder::class,
            //     DefaultRouteAccountingSettingsSeeder::class,
            //     DefaultFiscalAndAccountingPeriodSeeder::class,
            //     AccountStatementPermissionSeeder::class,
            //     TenantPermissionSeeder::class,
            //     RolePermissionSeeder::class,
            // ]);

            // Uncomment the line below to generate bulk data (10,000 invoices + 10,000 purchases)
            // $this->call([TenantBulkDataSeederV2::class]);
            

        // }
        // // for production
        // else {
            $this->call([
                TenantRoleSeeder::class,
                TenantSettingSeeder::class,
                CurrencySeeder::class,
                UserRoleSeeder::class,
                TenantPermissionSeeder::class,
                UserPermissionSeeder::class,
                RolePermissionSeeder::class,
                TenantChartOfAccountType::class,
                TenantChartOfAccountSeeder::class,
                AccountRoutingSettingsSeeder::class,
                FiscalYearSeeder::class,
                DefaultRouteAccountingSettingsSeeder::class,
                DefaultFiscalAndAccountingPeriodSeeder::class,
                AccountStatementPermissionSeeder::class,
                TenantClientSeeder::class,
                TenantAccountSeeder::class,
                TenantVatRateSeeder::class,
                TenantMenuSeeder::class,
            ]);

            $this->call([TenantBulkDataSeederV2::class]);
        // }
    }
}

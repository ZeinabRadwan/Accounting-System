<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Database\Seeders\TenantClientSeeder;
use Illuminate\Console\Command;
use Stancl\Tenancy\Facades\Tenancy;

class SeedClientsForAllTenants extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenants:seed-clients {--tenant=* : Tenant IDs to limit the run}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run TenantClientSeeder for all tenants or specific tenants';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Starting clients seeding for tenants...');

        // Get tenant IDs from option, or all tenants
        $tenantIds = $this->option('tenant');
        $tenants = empty($tenantIds) ? Tenant::all() : Tenant::whereIn('id', $tenantIds)->get();

        if ($tenants->isEmpty()) {
            $this->warn('No tenants found!');

            return 0;
        }

        $this->info("Found {$tenants->count()} tenant(s)");

        $successCount = 0;
        $errorCount = 0;

        foreach ($tenants as $tenant) {
            try {
                $this->info("Processing tenant: {$tenant->company} ({$tenant->getTenantKey()})");

                // Initialize the tenant context
                Tenancy::initialize($tenant);

                // Run the seeder within tenant context
                $seeder = new TenantClientSeeder();
                $seeder->run();

                $this->info("✅ Successfully seeded clients for tenant: {$tenant->getTenantKey()}");
                $successCount++;

            } catch (\Exception $e) {
                $this->error("❌ Error seeding clients for tenant {$tenant->getTenantKey()}: " . $e->getMessage());
                $errorCount++;
            }
        }

        $this->info("\n=== Summary ===");
        $this->info("✅ Successfully processed: {$successCount} tenant(s)");
        if ($errorCount > 0) {
            $this->error("❌ Failed: {$errorCount} tenant(s)");
        }

        return $errorCount > 0 ? 1 : 0;
    }
}

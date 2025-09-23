<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;
use Database\Seeders\TenantUnitSeeder;
use Stancl\Tenancy\Facades\Tenancy;
use Illuminate\Support\Facades\DB;

class SeedUnitsForAllTenants extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenants:seed-units {--force : Force run even if units already exist}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run TenantUnitSeeder for all tenants';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Starting units seeding for all tenants...');
        
        $tenants = Tenant::all();
        
        if ($tenants->isEmpty()) {
            $this->warn('No tenants found!');
            return 0;
        }
        
        $this->info("Found {$tenants->count()} tenant(s)");
        
        $successCount = 0;
        $errorCount = 0;
        $skippedCount = 0;
        
        foreach ($tenants as $tenant) {
            try {
                $this->info("Processing tenant: {$tenant->company} ({$tenant->getTenantKey()})");
                
                // Initialize the tenant context
                Tenancy::initialize($tenant);
                
                // Check if units already exist (unless forced)
                if (!$this->option('force')) {
                    $existingUnits = DB::table('units')->count();
                    if ($existingUnits > 0) {
                        $this->warn("  → Skipping - Units already exist ({$existingUnits} found). Use --force to override.");
                        $skippedCount++;
                        continue;
                    }
                }
                
                // Run the seeder within tenant context
                $seeder = new TenantUnitSeeder();
                $seeder->run();
                
                $this->info("✅ Successfully seeded units for tenant: {$tenant->getTenantKey()}");
                $successCount++;
                
            } catch (\Exception $e) {
                $this->error("❌ Error seeding units for tenant {$tenant->getTenantKey()}: " . $e->getMessage());
                $errorCount++;
            }
        }
        
        $this->info("\n=== Summary ===");
        $this->info("✅ Successfully processed: {$successCount} tenant(s)");
        if ($skippedCount > 0) {
            $this->warn("⏭️  Skipped: {$skippedCount} tenant(s)");
        }
        if ($errorCount > 0) {
            $this->error("❌ Failed: {$errorCount} tenant(s)");
        }
        
        return $errorCount > 0 ? 1 : 0;
    }
}

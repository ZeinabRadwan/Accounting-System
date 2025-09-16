<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;
use Database\Seeders\Demo\DemoRolePermissionTableSeeder;
use Stancl\Tenancy\Facades\Tenancy;

class SeedRolePermissionsForAllTenants extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenants:seed-role-permissions {--force : Force run even if data exists}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run DemoRolePermissionTableSeeder for all tenants';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Starting role permissions seeding for all tenants...');
        
        $tenants = Tenant::all();
        
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
                
                // Run DemoRolePermissionTableSeeder
                $this->info("  → Running DemoRolePermissionTableSeeder...");
                $rolePermissionSeeder = new DemoRolePermissionTableSeeder();
                $rolePermissionSeeder->run();
                
                $this->info("✅ Successfully seeded role permissions for tenant: {$tenant->getTenantKey()}");
                $successCount++;
                
            } catch (\Exception $e) {
                $this->error("❌ Error seeding role permissions for tenant {$tenant->getTenantKey()}: " . $e->getMessage());
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

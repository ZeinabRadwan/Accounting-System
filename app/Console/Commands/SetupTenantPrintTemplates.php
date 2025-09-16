<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Tenant;
use Stancl\Tenancy\Facades\Tenancy;
use Database\Seeders\PrintTemplateSeeder;
use Database\Seeders\PrintTemplatePermissionsSeeder;

class SetupTenantPrintTemplates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenant:setup-print-templates {tenant_id : The tenant ID to setup print templates for}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setup print templates and permissions for a specific tenant';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $tenantId = $this->argument('tenant_id');
        
        try {
            $tenant = Tenant::find($tenantId);
            
            if (!$tenant) {
                $this->error("Tenant with ID {$tenantId} not found!");
                return 1;
            }
            
            $this->info("Setting up print templates for tenant: {$tenant->id} ({$tenant->getTenantKey()})");
            
            // Initialize the tenant context
            Tenancy::initialize($tenant);
            
            // Run PrintTemplateSeeder
            $this->info("Running PrintTemplateSeeder...");
            $printTemplateSeeder = new PrintTemplateSeeder();
            $printTemplateSeeder->run();
            
            // Run PrintTemplatePermissionsSeeder
            $this->info("Running PrintTemplatePermissionsSeeder...");
            $printTemplatePermissionsSeeder = new PrintTemplatePermissionsSeeder();
            $printTemplatePermissionsSeeder->run();
            
            $this->info("✅ Print templates setup completed for tenant: {$tenant->getTenantKey()}");
            
            return 0;
            
        } catch (\Exception $e) {
            $this->error("❌ Error setting up tenant {$tenantId}: " . $e->getMessage());
            return 1;
        }
    }
}
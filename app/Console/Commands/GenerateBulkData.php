<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;
use Database\Seeders\TenantBulkDataSeederV2;
use Stancl\Tenancy\Facades\Tenancy;

class GenerateBulkData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenant:generate-bulk-data 
                            {tenant_id : The ID of the tenant to generate data for}
                            {--invoices=10000 : Number of invoices to generate}
                            {--purchases=10000 : Number of purchases to generate}
                            {--batch-size=50 : Batch size for processing}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate bulk data (invoices, purchases, journal entries) for a specific tenant';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $tenantId = $this->argument('tenant_id');
        $invoiceCount = $this->option('invoices');
        $purchaseCount = $this->option('purchases');
        
        try {
            // Find the tenant
            $tenant = Tenant::find($tenantId);
            
            if (!$tenant) {
                $this->error("Tenant with ID {$tenantId} not found!");
                return 1;
            }
            
            $this->info("Found tenant: {$tenant->company} ({$tenant->getTenantKey()})");
            $this->info('Starting bulk data generation...');
            
            $this->info("Will generate:");
            $this->info("- {$invoiceCount} invoices with products and journal entries");
            $this->info("- {$purchaseCount} purchases with products and journal entries");
            
            if (!$this->confirm('Do you want to continue?')) {
                $this->info('Operation cancelled.');
                return 0;
            }

            // Initialize the tenant context
            Tenancy::initialize($tenant);
            
            // Run the seeder within tenant context
            $seeder = new TenantBulkDataSeederV2();
            $seeder->run();
            
            $this->info('Bulk data generation completed successfully!');
            return 0;
        } catch (\Exception $e) {
            $this->error('Error generating bulk data: ' . $e->getMessage());
            return 1;
        }
    }
}

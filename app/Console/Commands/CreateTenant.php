<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;
use Stancl\Tenancy\Database\Models\Domain;

class CreateTenant extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenant:create {id} {domain}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new tenant with the specified ID and domain';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $id = $this->argument('id');
        $domain = $this->argument('domain');

        // Check if tenant already exists
        if (Tenant::find($id)) {
            $this->error("Tenant with ID '{$id}' already exists!");
            return 1;
        }

        // Check if domain already exists
        if (Domain::where('domain', $domain)->exists()) {
            $this->error("Domain '{$domain}' is already in use!");
            return 1;
        }

            // Create tenant
            $tenant = Tenant::create(['id' => $id]);
            
            // Create domain
            $tenant->domains()->create(['domain' => $domain]);

            $this->info("Tenant '{$id}' created successfully with domain '{$domain}'");
            $this->info("Database: tenant{$id}");
            
            return 0;
        
    }
}

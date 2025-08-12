<?php

namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;

class ListTenants extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenant:list';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'List all tenants';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $tenants = Tenant::with('domains')->get();

        if ($tenants->isEmpty()) {
            $this->info('No tenants found.');
            return 0;
        }

        $this->info('Tenants:');
        $this->newLine();

        $headers = ['ID', 'Domains', 'Created At', 'Updated At'];
        $rows = [];

        foreach ($tenants as $tenant) {
            $domains = $tenant->domains->pluck('domain')->implode(', ');
            $rows[] = [
                $tenant->id,
                $domains ?: 'No domains',
                $tenant->created_at->format('Y-m-d H:i:s'),
                $tenant->updated_at->format('Y-m-d H:i:s'),
            ];
        }

        $this->table($headers, $rows);
        
        return 0;
    }
}

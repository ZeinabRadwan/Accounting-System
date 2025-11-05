<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Database\Seeders\BackfillBranchIdsSeeder;

// For stancl/tenancy
use Stancl\Tenancy\Contracts\Tenant as TenantContract;
use Stancl\Tenancy\Database\Models\Tenant;

class BackfillBranchesForTenants extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenants:backfill-branches {--tenant=* : Tenant IDs to limit the run}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backfill branch_id/default_branch_id across all tenant databases';

    public function handle(): int
    {
        $ids = (array) $this->option('tenant');
        /** @var \Illuminate\Support\Collection<int, TenantContract> $tenants */
        $tenants = empty($ids) ? Tenant::query()->get() : Tenant::query()->whereIn('id', $ids)->get();

        if ($tenants->isEmpty()) {
            $this->warn('No tenants found.');
            return self::SUCCESS;
        }

        $this->info('Running BackfillBranchIdsSeeder for '. $tenants->count() .' tenant(s) ...');

        $tenants->each(function (TenantContract $tenant) {
            tenancy()->initialize($tenant);
            $this->line('  -> Tenant ['.$tenant->getTenantKey().']');
            try {
                (new BackfillBranchIdsSeeder())->run();
            } catch (\Throwable $e) {
                $this->error('     Error: '.$e->getMessage());
            } finally {
                tenancy()->end();
            }
        });

        $this->info('Done.');
        return self::SUCCESS;
    }
}



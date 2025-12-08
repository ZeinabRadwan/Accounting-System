<?php

namespace App\Console\Commands;

use App\Models\TenantUserActivity;
use Illuminate\Console\Command;

class ResetWorkingHours extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'working-hours:reset';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset all working hours (total_seconds) to 0 for all tenant user activities';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $this->info('Resetting working hours...');

        // Execute in central database context
        $updated = tenancy()->central(function () {
            return TenantUserActivity::query()
                ->update(['total_seconds' => 0]);
        });

        $this->info("Successfully reset working hours for {$updated} activity records.");

        return Command::SUCCESS;
    }
}

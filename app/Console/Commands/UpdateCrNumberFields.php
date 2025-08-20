<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Supplier;
use App\Models\Client;
use Illuminate\Support\Facades\DB;

class UpdateCrNumberFields extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:cr-number-fields';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update existing suppliers and clients with default CR Number values';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Starting to update CR Number fields...');

        try {
            // Update suppliers
            $suppliersUpdated = Supplier::whereNull('cr_number')->update(['cr_number' => 'N/A']);
            $this->info("Updated {$suppliersUpdated} suppliers with default CR Number");

            // Update clients
            $clientsUpdated = Client::whereNull('cr_number')->update(['cr_number' => 'N/A']);
            $this->info("Updated {$clientsUpdated} clients with default CR Number");

            // Also ensure type field exists for suppliers
            $suppliersTypeUpdated = Supplier::whereNull('type')->update(['type' => 'Company']);
            $this->info("Updated {$suppliersTypeUpdated} suppliers with default Type");

            $this->info('CR Number fields update completed successfully!');
            return 0;
        } catch (\Exception $e) {
            $this->error('Error updating CR Number fields: ' . $e->getMessage());
            return 1;
        }
    }
}

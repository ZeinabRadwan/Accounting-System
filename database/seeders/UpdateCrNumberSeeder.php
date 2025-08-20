<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Supplier;
use App\Models\Client;

class UpdateCrNumberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('Starting to update CR Number fields...');

        try {
            // Update suppliers
            $suppliersUpdated = Supplier::whereNull('cr_number')->update(['cr_number' => 'N/A']);
            $this->command->info("Updated {$suppliersUpdated} suppliers with default CR Number");

            // Update clients
            $clientsUpdated = Client::whereNull('cr_number')->update(['cr_number' => 'N/A']);
            $this->command->info("Updated {$clientsUpdated} clients with default CR Number");

            // Also ensure type field exists for suppliers
            $suppliersTypeUpdated = Supplier::whereNull('type')->update(['type' => 'Company']);
            $this->command->info("Updated {$suppliersTypeUpdated} suppliers with default Type");

            $this->command->info('CR Number fields update completed successfully!');
        } catch (\Exception $e) {
            $this->command->error('Error updating CR Number fields: ' . $e->getMessage());
        }
    }
}

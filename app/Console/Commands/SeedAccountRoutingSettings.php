<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Database\Seeders\AccountRoutingSettingsSeeder;

class SeedAccountRoutingSettings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:account-routing-settings';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seed the account routing settings table with default values';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Seeding account routing settings...');
        
        try {
            $seeder = new AccountRoutingSettingsSeeder();
            $seeder->run();
            
            $this->info('Account routing settings seeded successfully!');
            $this->info('You can now configure VAT accounts and other routing settings.');
            
        } catch (\Exception $e) {
            $this->error('Error seeding account routing settings: ' . $e->getMessage());
            return 1;
        }
        
        return 0;
    }
}

<?php
namespace Database\Seeders;

use Database\Seeders\Traits\DisableForeignKeys;
use Database\Seeders\Traits\TruncateTable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Database\Seeders\App\SettingTableSeeder;

class DatabaseSeeder extends Seeder
{
    use TruncateTable, DisableForeignKeys;

    /**
     * Seed the application's database.
     * 
     * This seeder is for the CENTRAL database only.
     * It only seeds tenant management data.
     * 
     * For tenant-specific data, use: php artisan tenants:seed
     */
    public function run()
    {
        Model::unguard();
        $this->disableForeignKeys();

        // Only seed central database data here
        // All tenant-specific data should be seeded via tenants:seed command
        
        // Note: The central database only contains:
        // - tenants table
        // - domains table  
        // - cache, jobs, failed_jobs tables
        
        // If you need to create a default tenant, you can do it here
        // But most tenant creation should happen through the application logic

        // SettingTableSeeder
        $this->call([
            SettingTableSeeder::class,
        ]);

        $this->call([
            SidebarMenuSeeder::class,
        ]);
        $this->call([
            TenantPermissionSeeder::class,
        ]);

        $this->enableForeignKeys();
        Model::reguard();
    }
}

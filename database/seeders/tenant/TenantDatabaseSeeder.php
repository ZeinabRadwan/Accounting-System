<?php

namespace database\seeders\Tenant;

use Illuminate\Database\Seeder;
use Database\Seeders\App\NotificationChannelTableSeeder;
use Database\Seeders\App\NotificationEventTableSeeder;
use Database\Seeders\App\NotificationSettingsSeeder;
use Database\Seeders\App\NotificationTemplateSeeder;
use Database\Seeders\App\PermissionChildAppSeeder;
use Database\Seeders\App\SettingTableSeeder;
use Database\Seeders\App\SocialLinkSeeder;
use Database\Seeders\Auth\PermissionTableSeeder;
use Database\Seeders\Auth\TypeSeeder;
use Database\Seeders\Builder\CustomFieldTypeSeeder;
use Database\Seeders\Status\StatusSeeder;
use Database\Seeders\SidebarMenuSeeder;

class TenantDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * This seeder is for TENANT databases only.
     * It seeds all the application data for a specific tenant.
     */
    public function run(): void
    {
        // // Create a default admin user for the tenant
        // DB::table('users')->insert([
        //     'name' => 'Tenant Admin',
        //     'email' => 'admin@tenant.com',
        //     'password' => Hash::make('password'),
        //     'email_verified_at' => now(),
        //     'created_at' => now(),
        //     'updated_at' => now(),
        // ]);

        // Seed all tenant-specific data
        $this->call([
            StatusSeeder::class,
            SocialLinkSeeder::class,
            TypeSeeder::class,
            // UserTableSeeder::class,
            PermissionTableSeeder::class,
            PermissionChildAppSeeder::class,
            // PermissionRoleTableSeeder::class,
            // UserRoleTableSeeder::class,
            SettingTableSeeder::class,
            CustomFieldTypeSeeder::class,
            NotificationChannelTableSeeder::class,
            NotificationEventTableSeeder::class,
            NotificationSettingsSeeder::class,
            NotificationTemplateSeeder::class,
            SidebarMenuSeeder::class,
            // UserDemoSeeder::class,
            // PaymentMethodTableSeeder::class,
        ]);
    }
}

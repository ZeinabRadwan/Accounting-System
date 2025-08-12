<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Database\Seeders\App\CrudTableSeeder;
use Database\Seeders\App\NotificationChannelTableSeeder;
use Database\Seeders\App\NotificationEventTableSeeder;
use Database\Seeders\App\NotificationSettingsSeeder;
use Database\Seeders\App\NotificationTemplateSeeder;
use Database\Seeders\App\PaymentMethodTableSeeder;
use Database\Seeders\App\PermissionChildAppSeeder;
use Database\Seeders\App\SettingTableSeeder;
use Database\Seeders\App\SocialLinkSeeder;
use Database\Seeders\App\StageTableSeeder;
use Database\Seeders\App\UserDemoSeeder;
use Database\Seeders\Auth\PermissionRoleTableSeeder;
use Database\Seeders\Auth\PermissionTableSeeder;
use Database\Seeders\Auth\TypeSeeder;
use Database\Seeders\Auth\UserRoleTableSeeder;
use Database\Seeders\Auth\UserTableSeeder;
use Database\Seeders\Builder\CustomFieldTypeSeeder;
use Database\Seeders\Status\StatusSeeder;

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
            UserTableSeeder::class,
            PermissionTableSeeder::class,
            PermissionChildAppSeeder::class,
            PermissionRoleTableSeeder::class,
            UserRoleTableSeeder::class,
            SettingTableSeeder::class,
            CustomFieldTypeSeeder::class,
            NotificationChannelTableSeeder::class,
            NotificationEventTableSeeder::class,
            NotificationSettingsSeeder::class,
            NotificationTemplateSeeder::class,
            UserDemoSeeder::class,
            PaymentMethodTableSeeder::class,
        ]);
        
        // Seed tenant-specific sample data using factories
        \App\Models\App\SamplePage\Report::factory(4)->create();
        \App\Models\App\SamplePage\KanbanView\Stage::factory(7)
            ->has(\App\Models\App\SamplePage\KanbanView\Task::factory()->count(4))
            ->create();
        \App\Models\App\Crud\Crud::factory(50)->create();
    }
}

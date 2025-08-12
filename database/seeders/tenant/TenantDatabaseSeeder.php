<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TenantDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a default admin user for the tenant
        DB::table('users')->insert([
            'name' => 'Tenant Admin',
            'email' => 'admin@tenant.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Add more tenant-specific seeding here
        $this->call([
            // Add other tenant seeders here
        ]);
    }
}

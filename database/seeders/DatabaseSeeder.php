<?php

namespace Database\Seeders;

use App\Domain\Auth\Enums\UserRole;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::query()->updateOrCreate(
            ['email' => 'admin@dentallink.co'],
            [
                'name' => 'Super Admin',
                'password' => '7878899',
                'role' => UserRole::SuperAdmin,
                'is_active' => true,
                'branch_id' => null,
                'email_verified_at' => now(),
            ]
        );

        $this->call(TreasurySeeder::class);
    }
}

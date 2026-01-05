<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantAnalyticalAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * Creates default analytical accounts for common payment methods
     */
    public function run(): void
    {
        // Check if analytical_accounts table exists
        try {
            if (! DB::getSchemaBuilder()->hasTable('analytical_accounts')) {
                $this->command->warn('Analytical accounts table does not exist. Please run migrations first.');

                return;
            }
        } catch (\Exception $e) {
            $this->command->warn('Cannot check analytical_accounts table: '.$e->getMessage());

            return;
        }

        // Get a user ID for created_by
        $user = DB::table('users')->first();
        if (! $user) {
            $this->command->warn('No users found in tenant database. Analytical accounts seeder requires at least one user.');

            return;
        }
        $userId = $user->id;

        // Default analytical accounts for common payment methods
        $defaultAnalyticalAccounts = [
            [
                'name' => 'Cash Payments',
                'code' => 'AA-CASH',
                'type' => 'payment',
                'status' => true,
            ],
            [
                'name' => 'Bank Transfer Payments',
                'code' => 'AA-BANK',
                'type' => 'payment',
                'status' => true,
            ],
            [
                'name' => 'Credit Card Payments',
                'code' => 'AA-CARD',
                'type' => 'payment',
                'status' => true,
            ],
            [
                'name' => 'Account Payments',
                'code' => 'AA-ACCT',
                'type' => 'payment',
                'status' => true,
            ],
            [
                'name' => 'Cheque Payments',
                'code' => 'AA-CHEQ',
                'type' => 'payment',
                'status' => true,
            ],
            [
                'name' => 'Online Payments',
                'code' => 'AA-ONLN',
                'type' => 'payment',
                'status' => true,
            ],
        ];

        $createdCount = 0;
        $linkedCount = 0;

        // Create analytical accounts if they don't exist
        foreach ($defaultAnalyticalAccounts as $accountData) {
            $existing = DB::table('analytical_accounts')
                ->where('code', $accountData['code'])
                ->first();

            if (! $existing) {
                DB::table('analytical_accounts')->insert([
                    'name' => $accountData['name'],
                    'code' => $accountData['code'],
                    'type' => $accountData['type'],
                    'status' => $accountData['status'],
                    'branch_id' => null,
                    'created_by' => $userId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
                $createdCount++;
            }
        }

        // Link payment methods to analytical accounts based on name matching
        $paymentMethods = DB::table('payment_methods')
            ->whereNull('analytical_account_id')
            ->where('status', 1)
            ->get();

        foreach ($paymentMethods as $paymentMethod) {
            $analyticalAccountId = null;

            // Try to match by name
            $name = strtolower($paymentMethod->name);
            if (str_contains($name, 'cash')) {
                $analyticalAccountId = DB::table('analytical_accounts')->where('code', 'AA-CASH')->value('id');
            } elseif (str_contains($name, 'bank') || str_contains($name, 'transfer')) {
                $analyticalAccountId = DB::table('analytical_accounts')->where('code', 'AA-BANK')->value('id');
            } elseif (str_contains($name, 'card') || str_contains($name, 'credit')) {
                $analyticalAccountId = DB::table('analytical_accounts')->where('code', 'AA-CARD')->value('id');
            } elseif (str_contains($name, 'account')) {
                $analyticalAccountId = DB::table('analytical_accounts')->where('code', 'AA-ACCT')->value('id');
            } elseif (str_contains($name, 'cheque') || str_contains($name, 'check')) {
                $analyticalAccountId = DB::table('analytical_accounts')->where('code', 'AA-CHEQ')->value('id');
            } elseif (str_contains($name, 'online') || str_contains($name, 'digital')) {
                $analyticalAccountId = DB::table('analytical_accounts')->where('code', 'AA-ONLN')->value('id');
            }

            // If no match found, create a new analytical account for this payment method
            if (! $analyticalAccountId) {
                $analyticalAccountId = DB::table('analytical_accounts')->insertGetId([
                    'name' => $paymentMethod->name.' Payments',
                    'code' => 'AA-'.strtoupper(substr($paymentMethod->code ?? $paymentMethod->slug, 0, 10)),
                    'type' => 'payment',
                    'status' => true,
                    'branch_id' => null,
                    'created_by' => $userId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
                $createdCount++;
            }

            // Link payment method to analytical account
            DB::table('payment_methods')
                ->where('id', $paymentMethod->id)
                ->update(['analytical_account_id' => $analyticalAccountId]);
            $linkedCount++;
        }

        $this->command->info('Analytical Accounts seeded successfully!');
        $this->command->info("Created {$createdCount} analytical accounts");
        $this->command->info("Linked {$linkedCount} payment methods to analytical accounts");
    }
}

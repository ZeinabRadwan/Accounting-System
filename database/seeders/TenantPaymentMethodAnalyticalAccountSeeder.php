<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantPaymentMethodAnalyticalAccountSeeder extends Seeder
{
    /**
     * Log message - works both in seeder and command contexts
     */
    private function log($message): void
    {
        if ($this->command) {
            $this->command->info($message);
        } else {
            echo $message."\n";
        }
    }

    /**
     * Log warning - works both in seeder and command contexts
     */
    private function logWarn($message): void
    {
        if ($this->command) {
            $this->command->warn($message);
        } else {
            echo "WARNING: {$message}\n";
        }
    }

    /**
     * Run the database seeds.
     *
     * This seeder:
     * 1. Deletes all existing payment methods and analytical accounts
     * 2. Creates new analytical accounts for each branch
     * 3. Creates new payment methods
     * 4. Links payment methods to analytical accounts
     */
    public function run(): void
    {
        // Check if tables exist
        if (! DB::getSchemaBuilder()->hasTable('analytical_accounts')) {
            $this->logWarn('Analytical accounts table does not exist. Please run migrations first.');

            return;
        }

        if (! DB::getSchemaBuilder()->hasTable('payment_methods')) {
            $this->logWarn('Payment methods table does not exist. Please run migrations first.');

            return;
        }

        // Get a user ID for created_by
        $user = DB::table('users')->first();
        if (! $user) {
            $this->logWarn('No users found in tenant database. Seeder requires at least one user.');

            return;
        }
        $userId = $user->id;

        // Get all branches (analytical accounts require a branch)
        $branches = Branch::all();
        if ($branches->isEmpty()) {
            $this->logWarn('No branches found. Creating analytical accounts requires at least one branch.');

            return;
        }

        $this->log('Starting payment methods and analytical accounts seeder...');

        // Step 1: Delete related records first (to avoid foreign key constraints)
        // Delete payment method branch accounts
        DB::table('payment_method_branch_accounts')->delete();

        // Update payments to remove references (set to null)
        $tablesWithPaymentMethodRef = [
            'invoice_payments',
            'purchase_payments',
            'non_invoice_payments',
            'non_purchase_payments',
            'payment_vouchers',
        ];

        foreach ($tablesWithPaymentMethodRef as $table) {
            if (DB::getSchemaBuilder()->hasTable($table)) {
                DB::table($table)->update(['payment_method_id' => null, 'analytical_account_id' => null]);
            }
        }

        // Update journal entry lines to remove analytical account references
        if (DB::getSchemaBuilder()->hasTable('journal_entry_lines')) {
            DB::table('journal_entry_lines')->update(['analytical_account_id' => null]);
        }

        // Step 2: Delete all existing payment methods
        $deletedPaymentMethods = DB::table('payment_methods')->count();
        DB::table('payment_methods')->delete();
        $this->log("Deleted {$deletedPaymentMethods} existing payment methods");

        // Step 3: Delete all existing analytical accounts
        $deletedAnalyticalAccounts = DB::table('analytical_accounts')->count();
        DB::table('analytical_accounts')->delete();
        $this->log("Deleted {$deletedAnalyticalAccounts} existing analytical accounts");

        // Step 4: Define default analytical accounts to create for each branch
        $analyticalAccountTemplates = [
            [
                'name' => 'Cash Payments',
                'code' => 'AA-CASH',
                'type' => 'payment',
            ],
            [
                'name' => 'Bank Transfer Payments',
                'code' => 'AA-BANK',
                'type' => 'payment',
            ],
            [
                'name' => 'Credit Card Payments',
                'code' => 'AA-CARD',
                'type' => 'payment',
            ],
            [
                'name' => 'Account Payments',
                'code' => 'AA-ACCT',
                'type' => 'payment',
            ],
            [
                'name' => 'Cheque Payments',
                'code' => 'AA-CHEQ',
                'type' => 'payment',
            ],
            [
                'name' => 'Online Payments',
                'code' => 'AA-ONLN',
                'type' => 'payment',
            ],
            [
                'name' => 'Mobile Payment',
                'code' => 'AA-MOBL',
                'type' => 'payment',
            ],
        ];

        // Step 5: Create analytical accounts for each branch
        $analyticalAccounts = [];
        $createdAnalyticalCount = 0;

        foreach ($branches as $branch) {
            foreach ($analyticalAccountTemplates as $template) {
                $analyticalAccountId = DB::table('analytical_accounts')->insertGetId([
                    'name' => $template['name'],
                    'code' => $template['code'],
                    'type' => $template['type'],
                    'status' => true,
                    'branch_id' => $branch->id,
                    'created_by' => $userId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                // Store for linking with payment methods
                $key = $branch->id.'_'.$template['code'];
                $analyticalAccounts[$key] = $analyticalAccountId;
                $createdAnalyticalCount++;
            }
        }

        $this->log("Created {$createdAnalyticalCount} analytical accounts across {$branches->count()} branches");

        // Step 6: Define default payment methods
        $paymentMethods = [
            [
                'name' => 'Cash Payment',
                'code' => 'CASH',
                'note' => 'Cash payment method',
                'analytical_code' => 'AA-CASH',
            ],
            [
                'name' => 'Bank Transfer',
                'code' => 'BANK',
                'note' => 'Bank transfer payment method',
                'analytical_code' => 'AA-BANK',
            ],
            [
                'name' => 'Credit Card',
                'code' => 'CARD',
                'note' => 'Credit card payment method',
                'analytical_code' => 'AA-CARD',
            ],
            [
                'name' => 'Account Payment',
                'code' => 'ACCT',
                'note' => 'Account payment method',
                'analytical_code' => 'AA-ACCT',
            ],
            [
                'name' => 'Cheque',
                'code' => 'CHEQ',
                'note' => 'Cheque payment method',
                'analytical_code' => 'AA-CHEQ',
            ],
            [
                'name' => 'Online Payment',
                'code' => 'ONLN',
                'note' => 'Online payment method',
                'analytical_code' => 'AA-ONLN',
            ],
            [
                'name' => 'Mobile Payment',
                'code' => 'MOBL',
                'note' => 'Mobile payment method',
                'analytical_code' => 'AA-MOBL',
            ],
        ];

        // Step 7: Create payment methods and link to analytical accounts
        $createdPaymentMethodsCount = 0;
        $defaultBranch = $branches->first(); // Use first branch as default for payment methods

        foreach ($paymentMethods as $methodData) {
            // Get analytical account for default branch
            $analyticalAccountKey = $defaultBranch->id.'_'.$methodData['analytical_code'];
            $analyticalAccountId = $analyticalAccounts[$analyticalAccountKey] ?? null;

            if (! $analyticalAccountId) {
                $this->logWarn("Analytical account not found for code: {$methodData['analytical_code']} and branch: {$defaultBranch->id}");

                continue;
            }

            // Generate slug from name
            $slug = \Illuminate\Support\Str::slug($methodData['name']);

            $paymentMethodId = DB::table('payment_methods')->insertGetId([
                'name' => $methodData['name'],
                'slug' => $slug,
                'code' => $methodData['code'],
                'note' => $methodData['note'],
                'status' => true,
                'analytical_account_id' => $analyticalAccountId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $createdPaymentMethodsCount++;
        }

        $this->log("Created {$createdPaymentMethodsCount} payment methods");

        // Summary
        $this->log('');
        $this->log('═══════════════════════════════════════════════════════════');
        $this->log('Payment Methods & Analytical Accounts Seeder Summary');
        $this->log('═══════════════════════════════════════════════════════════');
        $this->log("Branches processed: {$branches->count()}");
        $this->log("Analytical accounts created: {$createdAnalyticalCount}");
        $this->log("Payment methods created: {$createdPaymentMethodsCount}");
        $this->log('═══════════════════════════════════════════════════════════');
        $this->log('Seeder completed successfully!');
    }
}

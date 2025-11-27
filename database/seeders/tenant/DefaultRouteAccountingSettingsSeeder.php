<?php

namespace Database\Seeders\Tenant;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\ChartOfAccount;

class DefaultRouteAccountingSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * This seeder ensures all account routing settings are properly linked
     * to their corresponding chart of accounts and sets them as default selections.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('Starting DefaultRouteAccountingSettingsSeeder...');

        try {
            // Ensure chart of accounts exist
            $accountCount = ChartOfAccount::count();
            if ($accountCount === 0) {
                $this->command->error('No chart of accounts found. Please run TenantChartOfAccountSeeder first.');
                return;
            }

            $this->command->info("Found {$accountCount} chart of accounts in the database.");

            // Map existing routing setting keys to Chart of Account codes from TenantChartOfAccountSeeder
            $settingKeyToAccountCode = [
                // Sales
                'clients_account' => '1130',
                'sales_account' => '4110',
                'product_sales_account' => '4111',
                'discount_allowed_account' => '5310',

                // Purchase
                'suppliers_account' => '2110',
                'purchase_account' => '5110',
                'product_purchase_account' => '5111',
                'discount_received_account' => '5311',

                // VAT
                'sales_vat_account' => '2111',
                'purchase_vat_account' => '1131',

                // Other
                'transport_expense_account' => '5210', // Fallback to Expenses Account
                'expenses_account' => '5210',
                // Inventory / COGS
                'inventory_account' => '1130',
                'cost_of_sales_account' => '5110',
            ];

            $updatedCount = 0;
            $skippedMissingSetting = 0;
            $skippedMissingAccount = 0;

            foreach ($settingKeyToAccountCode as $settingKey => $accountCode) {
                // Find the desired account by code
                $account = ChartOfAccount::where('code', $accountCode)->first();
                if (!$account) {
                    $this->command->warn("Account with code '{$accountCode}' not found for setting '{$settingKey}'. Skipping...");
                    $skippedMissingAccount++;
                    continue;
                }

                // Update only if the routing setting already exists – do NOT create new settings
                $setting = DB::table('account_routing_settings')
                    ->where('setting_key', $settingKey)
                    ->first();

                if (!$setting) {
                    $this->command->warn("Routing setting '{$settingKey}' not found. Skipping creation as per requirements.");
                    $skippedMissingSetting++;
                    continue;
                }

                // Apply defaults: set main_account_id (and parent_account_id for backward compatibility)
                DB::table('account_routing_settings')
                    ->where('id', $setting->id)
                    ->update([
                        'main_account_id' => $account->id,
                        'parent_account_id' => $account->id,
                        'updated_at' => now(),
                    ]);

                $this->command->info("Updated '{$settingKey}' → Account '{$account->name}' ({$account->code})");
                $updatedCount++;
            }

            $this->command->info('DefaultRouteAccountingSettingsSeeder completed successfully!');
            $this->command->info("Updated: {$updatedCount} settings, Missing settings: {$skippedMissingSetting}, Missing accounts: {$skippedMissingAccount}");

            Log::info('DefaultRouteAccountingSettingsSeeder completed', [
                'updated_count' => $updatedCount,
                'skipped_missing_setting' => $skippedMissingSetting,
                'skipped_missing_account' => $skippedMissingAccount,
                'total_accounts' => $accountCount,
            ]);

        } catch (\Exception $e) {
            $this->command->error('Error in DefaultRouteAccountingSettingsSeeder: ' . $e->getMessage());
            Log::error('DefaultRouteAccountingSettingsSeeder failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);
            throw $e;
        }
    }
}

<?php

namespace App\Services;

use App\Models\AccountRoutingSetting;
use App\Models\Branch;
use App\Models\ChartOfAccount;
use Database\Seeders\AccountRoutingSettingsSeeder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AccountRoutingService
{
    /**
     * Get the account routing setting for a specific key and branch
     */
    public function getRoutingSetting(string $settingKey, ?int $branchId = null): ?AccountRoutingSetting
    {
        $branchId = $branchId ?? Auth::user()?->default_branch_id;

        return AccountRoutingSetting::where('setting_key', $settingKey)
            ->where('branch_id', $branchId)
            ->where('is_active', true)
            ->first();
    }

    /**
     * Get the parent account for creating child accounts
     */
    public function getParentAccountForSetting(string $settingKey, ?int $branchId = null): ?ChartOfAccount
    {
        $setting = $this->getRoutingSetting($settingKey, $branchId);

        if (! $setting) {
            return null;
        }

        // Use main_account_id as the parent for child accounts
        if ($setting->main_account_id) {
            return ChartOfAccount::find($setting->main_account_id);
        }

        // Fallback to parent_account_id for legacy support
        if ($setting->parent_account_id) {
            return ChartOfAccount::find($setting->parent_account_id);
        }

        return null;
    }

    /**
     * Create a child account under the specified parent account
     *
     * @param  string  $name  Account name
     * @param  string  $settingKey  The routing setting key (e.g., 'clients_account', 'suppliers_account')
     * @param  int|null  $branchId  Branch ID (null for main accounts)
     * @return ChartOfAccount|null The created account or null on failure
     */
    public function createChildAccount(string $name, string $settingKey, ?int $branchId = null): ?ChartOfAccount
    {
        $parentAccount = $this->getParentAccountForSetting($settingKey, $branchId);

        if (! $parentAccount) {
            Log::warning("Cannot create child account: Parent account not found for setting '{$settingKey}'");

            return null;
        }

        try {
            return DB::transaction(function () use ($name, $parentAccount, $branchId) {
                // Generate unique account code
                $newCode = $this->generateChildAccountCode($parentAccount);

                // Create the new account
                $account = ChartOfAccount::create([
                    'name' => $name,
                    'code' => $newCode,
                    'type_id' => $parentAccount->type_id,
                    'parent_id' => $parentAccount->id,
                    'is_active' => true,
                    'created_by' => Auth::id(),
                    'branch_id' => $branchId ?? Auth::user()?->default_branch_id,
                ]);

                // Create translations if the model supports it
                if (method_exists($account, 'translations')) {
                    DB::table('chart_of_account_translations')->insert([
                        [
                            'chart_of_account_id' => $account->id,
                            'locale' => 'ar',
                            'name' => $name,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ],
                        [
                            'chart_of_account_id' => $account->id,
                            'locale' => 'en',
                            'name' => $name,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ],
                    ]);
                }

                Log::info("Created child account '{$name}' with code '{$newCode}' under parent '{$parentAccount->code}'");

                return $account;
            });
        } catch (\Exception $e) {
            Log::error("Failed to create child account: {$e->getMessage()}");

            return null;
        }
    }

    /**
     * Generate a unique child account code based on parent account
     */
    private function generateChildAccountCode(ChartOfAccount $parentAccount): string
    {
        $baseCode = $parentAccount->code;

        // Find existing child accounts
        $existingCodes = ChartOfAccount::where('parent_id', $parentAccount->id)
            ->pluck('code')
            ->toArray();

        // Determine the pattern - check if children use dash format (e.g., 12301-001)
        $useDashFormat = false;
        foreach ($existingCodes as $code) {
            if (strpos($code, '-') !== false) {
                $useDashFormat = true;
                break;
            }
        }

        if ($useDashFormat) {
            // Use dash format: parent-001, parent-002, etc.
            $maxNumber = 0;
            $pattern = '/^'.preg_quote($baseCode, '/').'-(\d+)$/';
            foreach ($existingCodes as $code) {
                if (preg_match($pattern, $code, $matches)) {
                    $maxNumber = max($maxNumber, (int) $matches[1]);
                }
            }

            return $baseCode.'-'.str_pad($maxNumber + 1, 3, '0', STR_PAD_LEFT);
        }

        // Use numeric suffix format: 1230101, 1230102, etc.
        $maxNumber = 0;
        $codeLength = strlen($baseCode);
        foreach ($existingCodes as $code) {
            if (strlen($code) > $codeLength && strpos($code, $baseCode) === 0) {
                $suffix = substr($code, $codeLength);
                if (is_numeric($suffix)) {
                    $maxNumber = max($maxNumber, (int) $suffix);
                }
            }
        }

        // Determine suffix length based on existing codes
        $suffixLength = 2; // Default
        if (! empty($existingCodes)) {
            $firstChildCode = $existingCodes[0];
            $suffixLength = strlen($firstChildCode) - $codeLength;
            $suffixLength = max(2, $suffixLength); // At least 2 digits
        }

        return $baseCode.str_pad($maxNumber + 1, $suffixLength, '0', STR_PAD_LEFT);
    }

    /**
     * Create or get account for a client
     */
    public function createClientAccount(string $clientName, ?int $branchId = null): ?ChartOfAccount
    {
        return $this->createChildAccount($clientName, 'clients_account', $branchId);
    }

    /**
     * Create or get account for a supplier
     */
    public function createSupplierAccount(string $supplierName, ?int $branchId = null): ?ChartOfAccount
    {
        return $this->createChildAccount($supplierName, 'suppliers_account', $branchId);
    }

    /**
     * Create inventory account for a branch warehouse
     * This creates a sibling account to the main branch's inventory account
     */
    public function createBranchInventoryAccount(Branch $branch): ?ChartOfAccount
    {
        // Get the main branch
        $mainBranch = Branch::where('is_main', true)->first();

        if (! $mainBranch) {
            Log::warning('Cannot create branch inventory account: No main branch found');

            return null;
        }

        // Get the inventory setting from main branch
        $inventorySetting = $this->getRoutingSetting('inventory_account', $mainBranch->id);

        if (! $inventorySetting || ! $inventorySetting->main_account_id) {
            Log::warning('Cannot create branch inventory account: Inventory setting not configured');

            return null;
        }

        // Get the main inventory account
        $mainInventoryAccount = ChartOfAccount::find($inventorySetting->main_account_id);

        if (! $mainInventoryAccount) {
            Log::warning('Cannot create branch inventory account: Main inventory account not found');

            return null;
        }

        // The new branch inventory account should be a sibling (same parent as main inventory)
        $parentAccount = $mainInventoryAccount->parent;

        if (! $parentAccount) {
            // If no parent, use the main inventory account as parent
            $parentAccount = $mainInventoryAccount;
        }

        try {
            return DB::transaction(function () use ($branch, $parentAccount) {
                // Generate unique account code
                $newCode = $this->generateChildAccountCode($parentAccount);

                // Create the inventory account for the branch
                $accountNameAr = "مخزون فرع {$branch->name}";
                $accountNameEn = "{$branch->name} Branch Inventory";

                $account = ChartOfAccount::create([
                    'name' => $accountNameEn,
                    'code' => $newCode,
                    'type_id' => $parentAccount->type_id,
                    'parent_id' => $parentAccount->id,
                    'is_active' => true,
                    'created_by' => Auth::id(),
                    'branch_id' => $branch->id,
                ]);

                // Create translations
                DB::table('chart_of_account_translations')->insert([
                    [
                        'chart_of_account_id' => $account->id,
                        'locale' => 'ar',
                        'name' => $accountNameAr,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ],
                    [
                        'chart_of_account_id' => $account->id,
                        'locale' => 'en',
                        'name' => $accountNameEn,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ],
                ]);

                // Update the inventory setting for the new branch to point to this account
                $this->updateBranchInventorySetting($branch->id, $account->id);

                Log::info("Created inventory account '{$accountNameEn}' for branch '{$branch->name}'");

                return $account;
            });
        } catch (\Exception $e) {
            Log::error("Failed to create branch inventory account: {$e->getMessage()}");

            return null;
        }
    }

    /**
     * Update the inventory account setting for a branch
     */
    private function updateBranchInventorySetting(int $branchId, int $accountId): void
    {
        AccountRoutingSetting::where('branch_id', $branchId)
            ->where('setting_key', 'inventory_account')
            ->update([
                'main_account_id' => $accountId,
                'parent_account_id' => $accountId,
                'updated_at' => now(),
            ]);
    }

    /**
     * Copy account routing settings from main branch to a new branch
     */
    public function copySettingsToNewBranch(int $newBranchId): void
    {
        $mainBranch = Branch::where('is_main', true)->first();

        if (! $mainBranch) {
            Log::warning('Cannot copy settings: No main branch found');

            return;
        }

        AccountRoutingSettingsSeeder::copySettingsFromBranch($mainBranch->id, $newBranchId);
    }

    /**
     * Initialize a new branch with account routing settings and inventory account
     */
    public function initializeNewBranch(Branch $branch): void
    {
        // First, copy settings from main branch
        $this->copySettingsToNewBranch($branch->id);

        // Then, create a dedicated inventory account for the branch
        $this->createBranchInventoryAccount($branch);
    }

    /**
     * Check if routing is configured for automatic account creation
     */
    public function isAutomaticRoutingEnabled(string $settingKey, ?int $branchId = null): bool
    {
        $setting = $this->getRoutingSetting($settingKey, $branchId);

        if (! $setting) {
            return false;
        }

        return $setting->routing_type === 'automatic' || $setting->routing_type === 'main_account_per_each';
    }

    /**
     * Get the routing type for a setting
     */
    public function getRoutingType(string $settingKey, ?int $branchId = null): ?string
    {
        $setting = $this->getRoutingSetting($settingKey, $branchId);

        return $setting?->routing_type;
    }
}

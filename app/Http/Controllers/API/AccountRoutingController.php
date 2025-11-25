<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\AccountRoutingSetting;
use App\Models\ChartOfAccount;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Session;

class AccountRoutingController extends Controller
{
    use ApiResponse;

    /**
     * Get current branch ID
     */
    private function getCurrentBranchId()
    {
        $branchId = Session::get('current_branch_id');

        if (! $branchId) {
            $user = Auth::user();
            $branchId = $user->default_branch_id ?? null;
        }

        return $branchId;
    }

    /**
     * Display a listing of account routing settings
     */
    public function index(Request $request)
    {
        try {
            $branchId = $request->get('branch_id', $this->getCurrentBranchId());

            if (! $branchId) {
                return $this->responseWithError('Branch ID is required');
            }

            $settings = AccountRoutingSetting::where('branch_id', $branchId)
                ->with(['mainAccount.type'])
                ->orderBy('module')
                ->orderBy('setting_key')
                ->get();

            return $this->responseWithSuccess('Account routing settings retrieved successfully', $settings);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Store a new account routing setting
     */
    public function store(Request $request)
    {
        try {
            $branchId = $request->get('branch_id', $this->getCurrentBranchId());

            if (! $branchId) {
                return $this->responseWithError('Branch ID is required');
            }

            $request->validate([
                'branch_id' => 'required|exists:branches,id',
                'module' => 'required|string',
                'setting_key' => 'required|string',
                'setting_name' => 'required|string',
                'account_type' => 'required|string',
                'main_account_id' => 'nullable|exists:chart_of_accounts,id',
                'is_required' => 'boolean',
                'is_active' => 'boolean',
            ]);

            // First, try to find existing setting by branch_id, module, and setting_key
            $existing = AccountRoutingSetting::where('branch_id', $branchId)
                ->where('module', $request->module)
                ->where('setting_key', $request->setting_key)
                ->first();

            if ($existing) {
                // Update existing setting
                $existing->update([
                    'setting_name' => $request->setting_name,
                    'account_type' => $request->account_type,
                    'main_account_id' => $request->main_account_id,
                    'is_required' => $request->is_required ?? false,
                    'is_active' => $request->is_active ?? true,
                ]);

                return $this->responseWithSuccess('Setting updated successfully', $existing);
            }

            // If no branch_id column exists yet (migration not run), check by module and setting_key only
            // This handles the case where migration hasn't been run yet
            if (! Schema::hasColumn('account_routing_settings', 'branch_id')) {
                $existingWithoutBranch = AccountRoutingSetting::where('module', $request->module)
                    ->where('setting_key', $request->setting_key)
                    ->first();

                if ($existingWithoutBranch) {
                    // Update the existing setting and add branch_id
                    $existingWithoutBranch->update([
                        'branch_id' => $branchId,
                        'setting_name' => $request->setting_name,
                        'account_type' => $request->account_type,
                        'main_account_id' => $request->main_account_id,
                        'is_required' => $request->is_required ?? false,
                        'is_active' => $request->is_active ?? true,
                    ]);

                    return $this->responseWithSuccess('Setting updated successfully', $existingWithoutBranch);
                }
            }

            // Create new setting
            try {
                $setting = AccountRoutingSetting::create([
                    'branch_id' => $branchId,
                    'module' => $request->module,
                    'setting_key' => $request->setting_key,
                    'setting_name' => $request->setting_name,
                    'account_type' => $request->account_type,
                    'main_account_id' => $request->main_account_id,
                    'is_required' => $request->is_required ?? false,
                    'is_active' => $request->is_active ?? true,
                ]);

                return $this->responseWithSuccess('Setting created successfully', $setting);
            } catch (\Illuminate\Database\QueryException $e) {
                // If duplicate entry error, try to find and update
                if ($e->getCode() == 23000 && str_contains($e->getMessage(), 'Duplicate entry')) {
                    // Try to find existing by module and setting_key (in case branch_id constraint doesn't exist)
                    $existingByKey = AccountRoutingSetting::where('module', $request->module)
                        ->where('setting_key', $request->setting_key)
                        ->first();

                    if ($existingByKey) {
                        $existingByKey->update([
                            'branch_id' => $branchId,
                            'main_account_id' => $request->main_account_id,
                            'setting_name' => $request->setting_name,
                            'account_type' => $request->account_type,
                            'is_required' => $request->is_required ?? false,
                            'is_active' => $request->is_active ?? true,
                        ]);

                        return $this->responseWithSuccess('Setting updated successfully', $existingByKey);
                    }
                }

                throw $e;
            }
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update account routing settings
     */
    public function update(Request $request)
    {
        try {
            $request->validate([
                'settings' => 'required|array',
                'settings.*.id' => 'required|exists:account_routing_settings,id',
                'settings.*.parent_account_id' => 'nullable|exists:chart_of_accounts,id',
            ]);

            foreach ($request->settings as $settingData) {
                $setting = AccountRoutingSetting::find($settingData['id']);

                if ($setting) {
                    $setting->update([
                        'parent_account_id' => $settingData['parent_account_id'] ?? null,
                    ]);
                }
            }

            return $this->responseWithSuccess('Account routing settings updated successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update a single account routing setting
     */
    public function updateSetting($id, Request $request)
    {
        try {
            $request->validate([
                'main_account_id' => 'nullable|exists:chart_of_accounts,id',
            ]);

            $branchId = $this->getCurrentBranchId();
            $setting = AccountRoutingSetting::where('branch_id', $branchId)
                ->findOrFail($id);

            $updateData = [
                'main_account_id' => $request->main_account_id,
            ];

            $setting->update($updateData);

            return $this->responseWithSuccess('Setting updated successfully', $setting);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Bulk update account routing settings
     */
    public function bulkUpdate(Request $request)
    {
        try {
            $branchId = $this->getCurrentBranchId();

            if (! $branchId) {
                return $this->responseWithError('Branch ID is required');
            }

            $request->validate([
                'updates' => 'required|array',
                'updates.*.id' => 'required|exists:account_routing_settings,id',
                'updates.*.main_account_id' => 'nullable|exists:chart_of_accounts,id',
            ]);

            foreach ($request->updates as $updateData) {
                $setting = AccountRoutingSetting::where('branch_id', $branchId)
                    ->find($updateData['id']);

                if ($setting) {
                    $setting->update([
                        'main_account_id' => $updateData['main_account_id'],
                    ]);
                }
            }

            return $this->responseWithSuccess('All settings updated successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get accounts for a specific setting
     */
    public function getAccountsForSetting($settingKey, Request $request)
    {
        try {
            $branchId = $request->get('branch_id', $this->getCurrentBranchId());

            if (! $branchId) {
                return $this->responseWithError('Branch ID is required');
            }

            $setting = AccountRoutingSetting::where('branch_id', $branchId)
                ->where('setting_key', $settingKey)
                ->with('mainAccount.type')
                ->first();

            if (! $setting) {
                return $this->responseWithError('Setting not found');
            }

            $accounts = $setting->getAccountsForDropdown();

            return $this->responseWithSuccess('Accounts retrieved successfully', [
                'setting' => $setting,
                'accounts' => $accounts,
            ]);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get all available main accounts for selection
     */
    public function getAvailableMainAccounts()
    {
        try {
            $branchId = Auth::user()->default_branch_id ?? null;

            // Get top-level accounts (level 1) - these are already at level 1, but filter for consistency
            $accounts = ChartOfAccount::where('is_active', true)
                ->forBranch($branchId)
                ->whereNull('parent_id') // Only top-level accounts
                ->with(['type', 'parent.parent.parent.parent'])
                ->orderBy('name')
                ->get()
                ->filter(function ($account) {
                    return $account->getLevel() <= 4;
                })
                ->map(function ($account) {
                    return [
                        'id' => $account->id,
                        'name' => $account->name,
                        'code' => $account->code,
                        'type' => $account->type ? $account->type->name : 'Unknown',
                    ];
                });

            return $this->responseWithSuccess('Main accounts retrieved successfully', $accounts);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Check if all required settings are configured
     */
    public function checkConfiguration(Request $request)
    {
        try {
            $branchId = $request->get('branch_id', $this->getCurrentBranchId());

            if (! $branchId) {
                return $this->responseWithError('Branch ID is required');
            }

            $requiredSettings = AccountRoutingSetting::where('branch_id', $branchId)
                ->where('is_required', true)
                ->get();
            $unconfiguredSettings = $requiredSettings->filter(function ($setting) {
                return ! $setting->isConfigured();
            });

            $configurationStatus = [
                'total_required' => $requiredSettings->count(),
                'configured' => $requiredSettings->count() - $unconfiguredSettings->count(),
                'unconfigured' => $unconfiguredSettings->count(),
                'unconfigured_settings' => $unconfiguredSettings->map(function ($setting) {
                    return [
                        'id' => $setting->id,
                        'module' => $setting->module,
                        'setting_key' => $setting->setting_key,
                        'setting_name' => $setting->setting_name,
                        'message' => $setting->getValidationMessage(),
                    ];
                }),
            ];

            return $this->responseWithSuccess('Configuration status checked successfully', $configurationStatus);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get product account routing settings
     */
    public function getProductAccountRouting(Request $request)
    {
        try {
            $branchId = $request->get('branch_id', $this->getCurrentBranchId());

            if (! $branchId) {
                return $this->responseWithError('Branch ID is required');
            }

            $salesSetting = AccountRoutingSetting::where('branch_id', $branchId)
                ->where('module', 'sales')
                ->where('setting_key', 'product_sales_account')
                ->first();

            $purchaseSetting = AccountRoutingSetting::where('branch_id', $branchId)
                ->where('module', 'purchase')
                ->where('setting_key', 'product_purchase_account')
                ->first();

            $settings = [
                'sales' => $salesSetting ? [
                    'main_account_id' => $salesSetting->main_account_id,
                    'routing_type' => $salesSetting->routing_type,
                ] : null,
                'purchase' => $purchaseSetting ? [
                    'main_account_id' => $purchaseSetting->main_account_id,
                    'routing_type' => $purchaseSetting->routing_type,
                ] : null,
            ];

            return $this->responseWithSuccess('Product account routing settings retrieved successfully', $settings);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }
}

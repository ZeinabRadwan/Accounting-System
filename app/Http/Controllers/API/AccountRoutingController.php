<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\AccountRoutingSetting;
use App\Models\ChartOfAccount;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Traits\ApiResponse;

class AccountRoutingController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of account routing settings
     */
    public function index()
    {
        try {
            $settings = AccountRoutingSetting::with(['mainAccount.type'])
                ->orderBy('module')
                ->orderBy('setting_key')
                ->get();

            return $this->responseWithSuccess('Account routing settings retrieved successfully', $settings);
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
                'settings.*.parent_account_id' => 'nullable|exists:chart_of_accounts,id'
            ]);

            foreach ($request->settings as $settingData) {
                $setting = AccountRoutingSetting::find($settingData['id']);
                
                if ($setting) {
                    $setting->update([
                        'parent_account_id' => $settingData['parent_account_id'] ?? null
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
                'routing_type' => 'required|in:automatic,per_each,main_account_per_each,cancel',
                'main_account_id' => 'nullable|exists:chart_of_accounts,id'
            ]);

            $setting = AccountRoutingSetting::findOrFail($id);
            
            $updateData = [
                'routing_type' => $request->routing_type,
                'main_account_id' => $request->main_account_id
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
            $request->validate([
                'updates' => 'required|array',
                'updates.*.id' => 'required|exists:account_routing_settings,id',
                'updates.*.routing_type' => 'required|in:automatic,per_each,main_account_per_each,cancel',
                'updates.*.main_account_id' => 'nullable|exists:chart_of_accounts,id'
            ]);

            foreach ($request->updates as $updateData) {
                $setting = AccountRoutingSetting::find($updateData['id']);
                
                if ($setting) {
                    $setting->update([
                        'routing_type' => $updateData['routing_type'],
                        'main_account_id' => $updateData['main_account_id']
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
    public function getAccountsForSetting($settingKey)
    {
        try {
            $setting = AccountRoutingSetting::where('setting_key', $settingKey)
                ->with('mainAccount.type')
                ->first();

            if (!$setting) {
                return $this->responseWithError('Setting not found');
            }

            $accounts = $setting->getAccountsForDropdown();

            return $this->responseWithSuccess('Accounts retrieved successfully', [
                'setting' => $setting,
                'accounts' => $accounts
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
            $accounts = ChartOfAccount::where('is_active', true)
                ->whereNull('parent_id') // Only top-level accounts
                ->with('type')
                ->orderBy('name')
                ->get()
                ->map(function ($account) {
                    return [
                        'id' => $account->id,
                        'name' => $account->name,
                        'code' => $account->code,
                        'type' => $account->type ? $account->type->name : 'Unknown'
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
    public function checkConfiguration()
    {
        try {
            $requiredSettings = AccountRoutingSetting::where('is_required', true)->get();
            $unconfiguredSettings = $requiredSettings->filter(function ($setting) {
                return !$setting->isConfigured();
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
                        'message' => $setting->getValidationMessage()
                    ];
                })
            ];

            return $this->responseWithSuccess('Configuration status checked successfully', $configurationStatus);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get product account routing settings
     */
    public function getProductAccountRouting()
    {
        try {
            $salesSetting = AccountRoutingSetting::where('module', 'sales')
                ->where('setting_key', 'product_sales_account')
                ->first();

            $purchaseSetting = AccountRoutingSetting::where('module', 'purchase')
                ->where('setting_key', 'product_purchase_account')
                ->first();

            $settings = [
                'sales' => $salesSetting ? [
                    'routing_type' => $salesSetting->routing_type,
                    'parent_account_id' => $salesSetting->parent_account_id,
                    'routing_type_options' => $salesSetting->routing_type_options
                ] : null,
                'purchase' => $purchaseSetting ? [
                    'routing_type' => $purchaseSetting->routing_type,
                    'parent_account_id' => $purchaseSetting->parent_account_id,
                    'routing_type_options' => $purchaseSetting->routing_type_options
                ] : null
            ];

            return $this->responseWithSuccess('Product account routing settings retrieved successfully', $settings);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }
}

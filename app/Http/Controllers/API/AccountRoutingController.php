<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\AccountRoutingSetting;
use App\Models\ChartOfAccount;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AccountRoutingController extends Controller
{
    /**
     * Display a listing of account routing settings
     */
    public function index()
    {
        try {
            $settings = AccountRoutingSetting::with('parentAccount.type')
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
                'parent_account_id' => 'nullable|exists:chart_of_accounts,id'
            ]);

            $setting = AccountRoutingSetting::findOrFail($id);
            $setting->update([
                'parent_account_id' => $request->parent_account_id
            ]);

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
                'updates.*.parent_account_id' => 'nullable|exists:chart_of_accounts,id'
            ]);

            foreach ($request->updates as $updateData) {
                $setting = AccountRoutingSetting::find($updateData['id']);
                
                if ($setting) {
                    $setting->update([
                        'parent_account_id' => $updateData['parent_account_id'] ?? null
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
                ->with('parentAccount.type')
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
     * Get all available parent accounts for selection
     */
    public function getAvailableParentAccounts()
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

            return $this->responseWithSuccess('Parent accounts retrieved successfully', $accounts);
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
}

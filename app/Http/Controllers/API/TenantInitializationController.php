<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class TenantInitializationController extends Controller
{
    /**
     * Check if tenant is initialized
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function check()
    {
        try {
            $isInitialized = $this->getInitializationStatus();
            
            return response()->json([
                'success' => true,
                'data' => [
                    'is_initialized' => $isInitialized
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error checking initialization status',
                'data' => ['is_initialized' => false]
            ], 500);
        }
    }

    /**
     * Store tenant initialization data
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'country' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'company_logo' => 'nullable|string',
            'tax_number' => 'nullable|string|max:255',
            'company_tagline' => 'nullable|string|max:255',
            'email_address' => 'required|email|max:255',
            'phone_number' => 'required|string|max:255',
            'address' => 'nullable|string',
            'default_currency' => 'required|integer',
            'invoice_prefix' => 'required|string|max:10',
            'purchase_prefix' => 'required|string|max:10',
            'quotation_prefix' => 'required|string|max:10',
            'invoice_return_prefix' => 'required|string|max:10',
            'purchase_return_prefix' => 'required|string|max:10',
            'system_type' => 'required|in:accounting,pos,both',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            DB::beginTransaction();

            // Store basic information
            $this->updateSetting('country', $request->country);
            $this->updateSetting('company_name', $request->company_name);
            
            // Store tax number if provided
            if ($request->filled('tax_number')) {
                $this->updateSetting('zatca_organization_identifier', $request->tax_number);
            }
            
            // Handle company logo upload - store as 'logo' to match settings page
            if ($request->filled('company_logo')) {
                $existingLogo = DB::table('general_settings')
                    ->where('key', 'logo')
                    ->first()?->value ?? '';
                
                $logoName = handleGeneralSettingsImage($request->company_logo, $existingLogo, 'logo');
                $this->updateSetting('logo', $logoName);
            }
            
            if ($request->filled('company_tagline')) {
                $this->updateSetting('company_tagline', $request->company_tagline);
            }

            // Store contact details
            $this->updateSetting('email_address', $request->email_address);
            $this->updateSetting('phone_number', $request->phone_number);
            
            if ($request->filled('address')) {
                $this->updateSetting('address', $request->address);
            }

            // Store currency and prefixes
            $this->updateSetting('default_currency', $request->default_currency);
            $this->updateSetting('invoice_prefix', $request->invoice_prefix);
            $this->updateSetting('purchase_prefix', $request->purchase_prefix);
            $this->updateSetting('quotation_prefix', $request->quotation_prefix);
            $this->updateSetting('invoice_return_prefix', $request->invoice_return_prefix);
            $this->updateSetting('purchase_return_prefix', $request->purchase_return_prefix);

            // Store system type
            $this->updateSetting('system_type', $request->system_type);

            // Mark tenant as initialized
            $this->updateSetting('tenant_initialized', '1');

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Initialization completed successfully',
                'data' => [
                    'country' => $request->country,
                    'company_name' => $request->company_name,
                    'system_type' => $request->system_type,
                    'is_initialized' => true
                ]
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to complete initialization: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update a general setting
     *
     * @param string $key
     * @param mixed $value
     * @return void
     */
    private function updateSetting($key, $value)
    {
        DB::table('general_settings')->updateOrInsert(
            ['key' => $key],
            [
                'key' => $key,
                'display_name' => ucwords(str_replace('_', ' ', $key)),
                'value' => $value,
                'updated_at' => now()
            ]
        );
    }

    /**
     * Get initialization status
     *
     * @return bool
     */
    private function getInitializationStatus()
    {
        $setting = DB::table('general_settings')
            ->where('key', 'tenant_initialized')
            ->first();

        return $setting && $setting->value === '1';
    }
}

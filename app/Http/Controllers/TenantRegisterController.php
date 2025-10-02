<?php

namespace App\Http\Controllers;

use App\Http\Requests\TenantRegisterRequest;
use App\Services\TenantService;
use App\Rules\DomainValidation;
use App\Rules\CustomDomainValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stancl\Tenancy\Database\Models\Domain;

class TenantRegisterController extends Controller
{
    /*
    *   Store data
    */
    public function store(TenantRegisterRequest $request, TenantService $tenantService)
    {
        return $tenantService->createTenantAndSendVerificationNotification($request, now());
    }

    /*
    *   Check domain availability and validation
    */
    public function checkDomain(Request $request)
    {
        // Set locale from request header or default to English
        $locale = $request->header('Accept-Language', 'en');
        if (strpos($locale, 'ar') !== false) {
            app()->setLocale('ar');
        } else {
            app()->setLocale('en');
        }
        
        // Also check for locale in the request data
        if ($request->has('locale') && $request->input('locale') === 'ar') {
            app()->setLocale('ar');
        }

        $request->validate([
            'domain' => ['required', 'string', 'max:255', 'alpha_dash']
        ]);

        $domain = $request->input('domain');
        
        // Check domain format validation
        $customDomainValidation = new CustomDomainValidation();
        $isValidFormat = true;
        $formatError = null;
        
        try {
            $customDomainValidation->__invoke('domain', $domain, function($message) use (&$isValidFormat, &$formatError) {
                $isValidFormat = false;
                $formatError = $message;
            });
        } catch (\Exception $e) {
            $isValidFormat = false;
            $formatError = __('validation.domain_format', ['attribute' => __('validation.attributes.domain')]);
        }

        if (!$isValidFormat) {
            return response()->json([
                'valid' => false,
                'available' => false,
                'message' => $formatError
            ], 422);
        }

        // Check if domain is available
        $domainValidation = new DomainValidation();
        $isAvailable = $domainValidation->passes('domain', $domain);

        return response()->json([
            'valid' => true,
            'available' => $isAvailable,
            'message' => $isAvailable ? __('Domain is available') : __('This domain has already been taken')
        ]);
    }
}
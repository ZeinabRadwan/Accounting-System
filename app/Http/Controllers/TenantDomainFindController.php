<?php

namespace App\Http\Controllers;

use App\Models\Tenant;
use App\Models\User;
use App\Rules\FindDomainValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class TenantDomainFindController extends Controller
{
    /*
    *   Find domain from database and login user
    */
    public function findDomain(Request $request)
    {
        $request->validate([
            'domain' => ['required', 'string', 'max:255', 'alpha_dash', new FindDomainValidation],
            'email' => ['required', 'email'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        // get host name
        $host = request()->getHttpHost();
        $domain = $request->domain;

        // Find tenant by subdomain
        $tenant = Tenant::whereHas('domains', function ($query) use ($domain) {
            $query->where('domain', $domain);
        })->first();

        if (! $tenant) {

            return $this->responseWithError(__('Tenant not found for this domain.'), [], 404);

            throw ValidationException::withMessages([
                'domain' => [__('Tenant not found for this domain.')],
            ]);
        }

        // Switch to tenant context
        tenancy()->initialize($tenant);

        // Find user in tenant database
        $user = User::where('email', $request->input('email'))->first();

        Log::info('TenantDomainFindController: Login attempt', [
            'email' => $request->input('email'),
            'user_found' => $user !== null,
            'user_id' => $user?->id,
            'has_password' => ! empty($user?->password),
        ]);

        if (! $user) {
            Log::warning('TenantDomainFindController: User not found', [
                'email' => $request->input('email'),
                'tenant_id' => $tenant->id,
            ]);

            return $this->responseWithError(__('The provided credentials are incorrect.'), [], 401);
        }

        $passwordCheck = Hash::check($request->input('password'), $user->password);
        Log::info('TenantDomainFindController: Password check result', [
            'email' => $request->input('email'),
            'password_match' => $passwordCheck,
        ]);

        if (! $passwordCheck) {
            Log::warning('TenantDomainFindController: Password mismatch', [
                'email' => $request->input('email'),
                'tenant_id' => $tenant->id,
            ]);

            return $this->responseWithError(__('The provided credentials are incorrect.'), [], 401);
        }

        // Set user locale
        app()->setLocale($user->locale);

        // Create a special login URL for the tenant domain with encrypted credentials
        $tenantDomain = $domain.'.'.$host;
        $protocol = request()->secure() ? 'https' : 'http';

        // Encrypt the credentials for secure transmission
        try {
            $encryptedEmail = encrypt($request->input('email'));
            $encryptedPassword = encrypt($request->input('password'));

            // Use rawurlencode for proper URL encoding (handles special characters better)
            $encodedEmail = rawurlencode($encryptedEmail);
            $encodedPassword = rawurlencode($encryptedPassword);

            $loginUrl = $protocol.'://'.$tenantDomain.'/cross-domain-login?'.
                'email='.$encodedEmail.
                '&password='.$encodedPassword;

            Log::info('TenantDomainFindController: Successfully generated login URL', [
                'tenant_domain' => $tenantDomain,
                'login_url_length' => strlen($loginUrl),
                'login_url_preview' => substr($loginUrl, 0, 100).'...',
            ]);

            $response = $this->responseWithSuccess('Domain found successfully', [
                'domain' => $tenantDomain,
                'login_url' => $loginUrl,
                'tenant_id' => $tenant->id,
                'tenant_name' => $tenant->name,
            ]);

            Log::info('TenantDomainFindController: Response prepared', [
                'response_status' => $response->getStatusCode(),
                'response_has_success' => true,
            ]);

            return $response;
        } catch (\Exception $e) {
            Log::error('TenantDomainFindController: Error generating login URL', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return $this->responseWithError('Failed to generate login URL. Please try again.', [], 500);
        }
    }

    /**
     * Login user in tenant context via AJAX
     */
    public function tenantLogin(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string', 'min:6'],
            'tenant_id' => ['required', 'exists:tenants,id'],
        ]);

        // Find tenant
        $tenant = Tenant::find($request->tenant_id);
        if (! $tenant) {
            return $this->responseWithError('Tenant not found.', [], 404);
        }

        // Switch to tenant context
        tenancy()->initialize($tenant);

        // Find user in tenant database
        $user = User::where('email', $request->input('email'))->first();

        if (! $user || ! Hash::check($request->input('password'), $user->password)) {
            return $this->responseWithError(__('The provided credentials are incorrect.'), [], 401);
        }

        // Set user locale
        app()->setLocale($user->locale);

        // Create token
        $token = (string) $user->createToken(Str::random(10))->plainTextToken;

        return $this->responseWithSuccess('Login successful', [
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => null,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'locale' => $user->locale,
            ],
        ]);
    }
}

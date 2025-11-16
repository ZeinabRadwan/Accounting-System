<?php

namespace App\Http\Controllers;

use App\Rules\FindDomainValidation;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
            'domain' => ['required', 'string', 'max:255', 'alpha_dash', new FindDomainValidation()],
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

        if (!$tenant) {

        return $this->responseWithError('Tenant not found for this domain.', [], 404);

            throw ValidationException::withMessages([
                'domain' => ['Tenant not found for this domain.'],
            ]);
        }

        // Switch to tenant context
        tenancy()->initialize($tenant);

        // Find user in tenant database
        $user = User::where('email', $request->input('email'))->first();

        if (!$user || !Hash::check($request->input('password'), $user->password)) {
            return $this->responseWithError('The provided credentials are incorrect.', [], 401);
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        // Set user locale
        app()->setLocale($user->locale);

        // Create a special login URL for the tenant domain with encrypted credentials
        $tenantDomain = $domain . '.' . $host;
        $protocol = request()->secure() ? 'https' : 'http';

        // Encrypt the credentials for secure transmission
        $encryptedEmail = encrypt($request->input('email'));
        $encryptedPassword = encrypt($request->input('password'));

        $loginUrl = $protocol . '://' . $tenantDomain . '/cross-domain-login?' .
            'email=' . urlencode($encryptedEmail) .
            '&password=' . urlencode($encryptedPassword);

        return $this->responseWithSuccess('Domain found successfully', [
            'domain' => $tenantDomain,
            'login_url' => $loginUrl,
            'tenant_id' => $tenant->id,
            'tenant_name' => $tenant->name,
        ]);
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
        if (!$tenant) {
            return $this->responseWithError('Tenant not found.', [], 404);
        }

        // Switch to tenant context
        tenancy()->initialize($tenant);

        // Find user in tenant database
        $user = User::where('email', $request->input('email'))->first();

        if (!$user || !Hash::check($request->input('password'), $user->password)) {
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

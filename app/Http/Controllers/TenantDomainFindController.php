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
            throw ValidationException::withMessages([
                'domain' => ['Tenant not found for this domain.'],
            ]);
        }

        // Switch to tenant context
        tenancy()->initialize($tenant);

        // Find user in tenant database
        $user = User::where('email', $request->input('email'))->first();

        if (!$user || !Hash::check($request->input('password'), $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        // Set user locale
        app()->setLocale($user->locale);

        // Create a direct dashboard URL with authentication token
        $tenantDomain = $domain . '.' . $host;
        $protocol = request()->secure() ? 'https' : 'http';

        // Create token for the user
        $token = (string) $user->createToken(Str::random(10))->plainTextToken;

        // Create direct dashboard URL with encrypted token for secure transmission
        $encryptedToken = encrypt($token);
        $encryptedUserId = encrypt($user->id);
        
        $dashboardUrl = $protocol . '://' . $tenantDomain . '/direct-auth-dashboard?' .
            'token=' . urlencode($encryptedToken) .
            '&user_id=' . urlencode($encryptedUserId);

        return $this->responseWithSuccess('Login successful', [
            'domain' => $tenantDomain,
            'login_url' => $dashboardUrl,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => null,
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class CrossDomainAuthController extends Controller
{
    /**
     * Handle cross-domain login with encrypted credentials
     */
    public function crossDomainLogin(Request $request)
    {
        Log::info('Cross-domain login: Request received', [
            'has_email' => $request->has('email'),
            'has_password' => $request->has('password'),
            'method' => $request->method(),
        ]);

        $encryptedEmail = $request->input('email');
        $encryptedPassword = $request->input('password');

        if (! $encryptedEmail || ! $encryptedPassword) {
            Log::error('Cross-domain login: Missing parameters', [
                'email_present' => ! empty($encryptedEmail),
                'password_present' => ! empty($encryptedPassword),
            ]);

            return redirect('/login')->with('error', 'Invalid login parameters.');
        }

        try {
            // Decrypt the credentials
            $email = decrypt($encryptedEmail);
            $password = decrypt($encryptedPassword);

            Log::info('Cross-domain login: Credentials decrypted', ['email' => $email]);
        } catch (\Exception $e) {
            Log::error('Cross-domain login: Decryption failed', ['error' => $e->getMessage()]);

            return redirect('/login')->with('error', 'Invalid encrypted credentials.');
        }

        // Find user in current tenant database
        $user = User::where('email', $email)->first();

        if (! $user) {
            Log::error('Cross-domain login: User not found', ['email' => $email]);

            return redirect('/login')->with('error', 'User not found.');
        }

        if (! Hash::check($password, $user->password)) {
            Log::error('Cross-domain login: Invalid password', ['email' => $email]);

            return redirect('/login')->with('error', 'Invalid password.');
        }

        // Create token for the user (like the regular login)
        $token = (string) $user->createToken(Str::random(10))->plainTextToken;

        Log::info('Cross-domain login: User authenticated successfully', [
            'user_id' => $user->id,
            'email' => $user->email,
            'token_created' => ! empty($token),
        ]);

        // Set user locale
        app()->setLocale($user->locale);

        // Return JSON response with token and locale (like regular login)
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => null,
            'redirect_url' => '/dashboard',
            'locale' => $user->locale,
        ]);
    }

    /**
     * Authenticate user with credentials and return token for tenant domain
     */
    public function authenticate(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        // Find user in current tenant database
        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        // Create token for the user
        $token = (string) $user->createToken(Str::random(10))->plainTextToken;

        // Set user locale
        app()->setLocale($user->locale);

        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => null,
            'user' => $user,
        ]);
    }
}

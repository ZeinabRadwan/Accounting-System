<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $encryptedEmail = $request->input('email');
        $encryptedPassword = $request->input('password');
        
        if (!$encryptedEmail || !$encryptedPassword) {
            Log::error('Cross-domain login: Missing parameters', [
                'email_present' => !empty($encryptedEmail),
                'password_present' => !empty($encryptedPassword)
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

        if (!$user) {
            Log::error('Cross-domain login: User not found', ['email' => $email]);
            return redirect('/login')->with('error', 'User not found.');
        }

        if (!Hash::check($password, $user->password)) {
            Log::error('Cross-domain login: Invalid password', ['email' => $email]);
            return redirect('/login')->with('error', 'Invalid password.');
        }

        // Create token for the user (like the regular login)
        $token = (string) $user->createToken(Str::random(10))->plainTextToken;
        
        Log::info('Cross-domain login: User authenticated successfully', [
            'user_id' => $user->id,
            'email' => $user->email,
            'token_created' => !empty($token)
        ]);
        
        // Set user locale
        app()->setLocale($user->locale);

        // Return JSON response with token (like regular login)
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => null,
            'redirect_url' => '/dashboard'
        ]);
    }

    /**
     * Handle direct authentication and redirect to dashboard
     */
    public function directAuthDashboard(Request $request)
    {
        $encryptedToken = $request->input('token');
        $encryptedUserId = $request->input('user_id');
        
        if (!$encryptedToken || !$encryptedUserId) {
            Log::error('Direct auth dashboard: Missing parameters', [
                'token_present' => !empty($encryptedToken),
                'user_id_present' => !empty($encryptedUserId)
            ]);
            return redirect('/login')->with('error', 'Invalid authentication parameters.');
        }

        try {
            // Decrypt the token and user ID
            $token = decrypt($encryptedToken);
            $userId = decrypt($encryptedUserId);
            
            Log::info('Direct auth dashboard: Parameters decrypted', ['user_id' => $userId]);
        } catch (\Exception $e) {
            Log::error('Direct auth dashboard: Decryption failed', ['error' => $e->getMessage()]);
            return redirect('/login')->with('error', 'Invalid encrypted parameters.');
        }

        // Find user in current tenant database
        $user = User::find($userId);

        if (!$user) {
            Log::error('Direct auth dashboard: User not found', ['user_id' => $userId]);
            return redirect('/login')->with('error', 'User not found.');
        }

        // Set user locale
        app()->setLocale($user->locale);

        // Return a view that will automatically authenticate and redirect to dashboard
        return view('tenant.auth.direct-auth', [
            'token' => $token,
            'user' => $user,
            'redirect_url' => '/dashboard'
        ]);
    }

    /**
     * API version of direct authentication for Vue component
     */
    public function directAuthDashboardApi(Request $request)
    {
        $encryptedToken = $request->input('token');
        $encryptedUserId = $request->input('user_id');
        
        if (!$encryptedToken || !$encryptedUserId) {
            Log::error('Direct auth dashboard API: Missing parameters', [
                'token_present' => !empty($encryptedToken),
                'user_id_present' => !empty($encryptedUserId)
            ]);
            return response()->json(['error' => 'Invalid authentication parameters.'], 400);
        }

        try {
            // Decrypt the token and user ID
            $token = decrypt($encryptedToken);
            $userId = decrypt($encryptedUserId);
            
            Log::info('Direct auth dashboard API: Parameters decrypted', ['user_id' => $userId]);
        } catch (\Exception $e) {
            Log::error('Direct auth dashboard API: Decryption failed', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Invalid encrypted parameters.'], 400);
        }

        // Find user in current tenant database
        $user = User::find($userId);

        if (!$user) {
            Log::error('Direct auth dashboard API: User not found', ['user_id' => $userId]);
            return response()->json(['error' => 'User not found.'], 404);
        }

        // Set user locale
        app()->setLocale($user->locale);

        // Return JSON response with token
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => null,
            'user' => $user,
            'redirect_url' => '/dashboard'
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

        if (!$user || !Hash::check($request->password, $user->password)) {
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

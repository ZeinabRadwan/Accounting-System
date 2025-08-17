<?php

namespace App\Http\Controllers\App\Client;

use App\Http\Controllers\Controller;
use App\Models\App\Client;
use App\Models\App\Nationality;
use App\Models\App\IdType;
use App\Models\App\Bank;
use App\Models\App\Currency;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class ClientApiController extends Controller
{
    /**
     * Get clients for datatable
     */
    public function index(Request $request): JsonResponse
    {
        $query = Client::select([
            'id',
            'user_id',
            'name',
            'type',
            'cr_number',
            'vat_number',
            'id_type_id',
            'id_no',
            'id_date',
            'phone_no',
            'dob',
            'nationality_id',
            'job',
            'job_place',
            'client_id',
            'bank_id',
            'iban',
            'currency_id',
            'avatar',
            'is_active',
            'balance',
            'created_at',
            'updated_at'
        ])->with([
            'nationality:id,name',
            'idType:id,name',
            'bank:id,name',
            'currency:id,name',
            'translations:id,client_id,locale,name,job,job_place',
            'clientEmails:id,client_id,email,is_primary,is_verified',
            'clientMobiles:id,client_id,mobile_number,country_code,is_primary,is_verified'
        ]);

        // Apply filters
        if ($request->filled('type')) {
            $query->whereIn('type', (array) $request->type);
        }

        if ($request->filled('is_active')) {
            $activeStatus = $request->boolean('is_active');
            $query->where('is_active', $activeStatus);
        }

        if ($request->filled('has_emails')) {
            $hasEmails = $request->boolean('has_emails');
            if ($hasEmails) {
                $query->has('clientEmails');
            } else {
                $query->doesntHave('clientEmails');
            }
        }

        if ($request->filled('has_mobiles')) {
            $hasMobiles = $request->boolean('has_mobiles');
            if ($hasMobiles) {
                $query->has('clientMobiles');
            } else {
                $query->doesntHave('clientMobiles');
            }
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('cr_number', 'like', "%{$search}%")
                  ->orWhere('vat_number', 'like', "%{$search}%");
            });
        }

        $clients = $query->orderBy('created_at', 'desc')
                        ->paginate($request->get('per_page', 10));

        // Add debugging to see what's being returned
        \Log::info('Clients datatable response', [
            'total' => $clients->total(),
            'sample_client' => $clients->first() ? [
                'id' => $clients->first()->id,
                'name' => $clients->first()->name,
                'created_at' => $clients->first()->created_at,
                'created_at_type' => gettype($clients->first()->created_at),
                'emails_count' => $clients->first()->client_emails ? count($clients->first()->client_emails) : 0,
                'mobiles_count' => $clients->first()->client_mobiles ? count($clients->first()->client_mobiles) : 0,
                'translations' => $clients->first()->translations ? $clients->first()->translations->toArray() : 'no_translations',
            ] : 'no_clients'
        ]);

        return response()->json($clients);
    }

    /**
     * Store a newly created client with translation
     */
    public function store(Request $request): JsonResponse
    {
        try {
            DB::beginTransaction();
            
            // Validate client data
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'type' => 'required|in:1,2',
                'cr_number' => 'nullable|string|max:100',
                'vat_number' => 'nullable|string|max:100',
                'id_type_id' => 'nullable|exists:id_types,id',
                'id_no' => 'nullable|string|max:100',
                'id_date' => 'nullable|date',
                'phone_no' => 'nullable|string|max:20',
                'dob' => 'nullable|date',
                'nationality_id' => 'nullable|exists:nationalities,id',
                'job' => 'nullable|string|max:255',
                'job_place' => 'nullable|string|max:255',
                'client_id' => 'nullable|exists:clients,id',
                'bank_id' => 'nullable|exists:banks,id',
                'iban' => 'nullable|string|max:100',
                'currency_id' => 'nullable|exists:currencies,id',
                'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                'is_active' => 'boolean',
                'balance' => 'nullable|numeric',
                
                // Email and Mobile validation
                'primary_email' => 'nullable|email|max:255',
                'primary_mobile' => 'nullable|string|max:20',
                'mobile_country_code' => 'nullable|string|max:5',
                
                // Additional emails and mobiles validation
                'emails' => 'nullable|array',
                'emails.*.email' => 'required_with:emails|email|max:255',
                'emails.*.is_primary' => 'boolean',
                'emails.*.is_verified' => 'boolean',
                
                
                'mobiles' => 'nullable|array',
                'mobiles.*.mobile_number' => 'required_with:mobiles|string|max:20',
                'mobiles.*.country_code' => 'required_with:mobiles|string|max:5',
                'mobiles.*.is_primary' => 'boolean',
                'mobiles.*.is_verified' => 'boolean',
               
                
                // Translation data
                'translation_name' => 'nullable|string|max:255',
                'translation_job' => 'nullable|string|max:255',
                'translation_job_place' => 'nullable|string|max:255',
                'translation_locale' => 'nullable|string|in:ar,en'
            ], [
                // Custom validation messages
                'primary_email.email' => 'The primary email must be a valid email address.',
                'primary_mobile.regex' => 'The primary mobile number must contain only digits and be between 8-15 characters.',
                'emails.*.email.required_with' => 'Email address is required when adding emails.',
                'emails.*.email.email' => 'Each email must be a valid email address.',
                'mobiles.*.mobile_number.required_with' => 'Mobile number is required when adding mobiles.',
                'mobiles.*.mobile_number.regex' => 'Each mobile number must contain only digits and be between 8-15 characters.',
                'mobiles.*.country_code.required_with' => 'Country code is required when adding mobiles.',
            ]);
            
            // Handle file upload if present
            if ($request->hasFile('avatar')) {
                $avatarPath = $request->file('avatar')->store('clients/avatars', 'public');
                $validatedData['avatar'] = $avatarPath;
            }
            
            // Create client
            $client = Client::create($validatedData);

            // Handle emails if provided
            if ($request->filled('emails') && is_array($request->emails)) {
                foreach ($request->emails as $emailData) {
                    $client->clientEmails()->create($emailData);
                }
            }

            // Handle mobiles if provided
            if ($request->filled('mobiles') && is_array($request->mobiles)) {
                foreach ($request->mobiles as $mobileData) {
                    $client->clientMobiles()->create($mobileData);
                }
            }

            if ($request->filled('translation_name') && $request->filled('translation_locale')) {
                $translationData = [
                    'client_id' => $client->id,
                    'locale' => $request->translation_locale,
                    'name' => $request->translation_name,
                    'job' => $request->translation_job,
                    'job_place' => $request->translation_job_place,
                ];
                
                // Remove null values
                $translationData = array_filter($translationData, function($value) {
                    return $value !== null && $value !== '';
                });
                
                if (!empty($translationData)) {
                    $client->translations()->create($translationData);
                }
            }
            
            DB::commit();
            
            // Get current tenant from request
            $tenant = $request->route('tenant');
            
            return response()->json([
                'message' => 'Client created successfully',
                'client' => $client->load(['translations', 'clientEmails', 'clientMobiles']),
                'redirect_url' => "/{$tenant}/clients"
            ], 201);
            
        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
            
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error creating client: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show a specific client
     */
    public function show($tenantId,$id): JsonResponse
    {
        // Resolve client from ID
        $clientModel = Client::findOrFail($id);

        $clientModel->load([
            'nationality:id,name',
            'idType:id,name',
            'bank:id,name',
            'currency:id,name',
            'translations',
            'user:id,first_name,last_name,email'
        ]);

        return response()->json($clientModel);
    }

    /**
     * Update the specified client
     */
    public function update(Request $request, $clientId): JsonResponse
    {
        try {
            DB::beginTransaction();
            
            $client = Client::findOrFail($clientId);
            
            // Validate client data
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'type' => 'required|in:1,2',
                'cr_number' => 'nullable|string|max:100',
                'vat_number' => 'nullable|string|max:100',
                'id_type_id' => 'nullable|exists:id_types,id',
                'id_no' => 'nullable|string|max:100',
                'id_date' => 'nullable|date',
                'phone_no' => 'nullable|string|max:20',
                'dob' => 'nullable|date',
                'nationality_id' => 'nullable|exists:nationalities,id',
                'job' => 'nullable|string|max:255',
                'job_place' => 'nullable|string|max:255',
                'client_id' => 'nullable|exists:clients,id',
                'bank_id' => 'nullable|exists:banks,id',
                'iban' => 'nullable|string|max:100',
                'currency_id' => 'nullable|exists:currencies,id',
                'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                'is_active' => 'boolean',
                'balance' => 'nullable|numeric',
                
                // Email and Mobile validation
                'primary_email' => 'nullable|email|max:255',
                'primary_mobile' => 'nullable|string|regex:/^[0-9]{8,15}$/',
                'mobile_country_code' => 'nullable|string|max:5',
                
                // Additional emails and mobiles validation
                'emails' => 'nullable|array',
                'emails.*.email' => 'required_with:emails|email|max:255',
                'emails.*.is_primary' => 'boolean',
                'emails.*.is_verified' => 'boolean',
                'emails.*.notes' => 'nullable|string|max:500',
                
                'mobiles' => 'nullable|array',
                'mobiles.*.mobile_number' => 'required_with:mobiles|string|regex:/^[0-9]{8,15}$/',
                'mobiles.*.country_code' => 'required_with:mobiles|string|max:5',
                'mobiles.*.is_primary' => 'boolean',
                'mobiles.*.is_verified' => 'boolean',
                'mobiles.*.notes' => 'nullable|string|max:500',
                
                // Translation data
                'translation_name' => 'nullable|string|max:255',
                'translation_job' => 'nullable|string|max:255',
                'translation_job_place' => 'nullable|string|max:255',
                'translation_locale' => 'nullable|string|in:ar,en'
            ], [
                // Custom validation messages
                'primary_email.email' => 'The primary email must be a valid email address.',
                'primary_mobile.regex' => 'The primary mobile number must contain only digits and be between 8-15 characters.',
                'emails.*.email.required_with' => 'Email address is required when adding emails.',
                'emails.*.email.email' => 'Each email must be a valid email address.',
                'mobiles.*.mobile_number.required_with' => 'Mobile number is required when adding mobiles.',
                'mobiles.*.mobile_number.regex' => 'Each mobile number must contain only digits and be between 8-15 characters.',
                'mobiles.*.country_code.required_with' => 'Country code is required when adding mobiles.',
            ]);
            
            // Handle file upload if present
            if ($request->hasFile('avatar')) {
                $avatarPath = $request->file('avatar')->store('clients/avatars', 'public');
                $validatedData['avatar'] = $avatarPath;
            }
            
            // Update client
            $client->update($validatedData);
            
            // Handle emails if provided
            if ($request->filled('emails') && is_array($request->emails)) {
                // Delete existing emails and create new ones
                $client->clientEmails()->delete();
                foreach ($request->emails as $emailData) {
                    $client->clientEmails()->create($emailData);
                }
            }

            // Handle mobiles if provided
            if ($request->filled('mobiles') && is_array($request->mobiles)) {
                // Delete existing mobiles and create new ones
                $client->clientMobiles()->delete();
                foreach ($request->mobiles as $mobileData) {
                    $client->clientMobiles()->create($mobileData);
                }
            }
            
            // Update translation if provided
            if ($request->filled('translation_name') && $request->filled('translation_locale')) {
                $translationData = [
                    'name' => $request->translation_name,
                    'job' => $request->translation_job,
                    'job_place' => $request->translation_job_place,
                ];
                
                // Remove null values
                $translationData = array_filter($translationData, function($value) {
                    return $value !== null && $value !== '';
                });
                
                if (!empty($translationData)) {
                    // Update existing translation or create new one
                    $client->translations()->updateOrCreate(
                        ['locale' => $request->translation_locale],
                        $translationData
                    );
                }
            }
            
            DB::commit();
            
            // Get current tenant from request
            $tenant = $request->route('tenant');
            
            return response()->json([
                'message' => 'Client updated successfully',
                'client' => $client->load(['translations', 'clientEmails', 'clientMobiles']),
                'redirect_url' => "/{$tenant}/clients"
            ]);
            
        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
            
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error updating client: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Delete a client
     */
    public function destroy($tenantId,$id): JsonResponse
    {
        // Resolve client from ID
        $clientModel = Client::findOrFail($id);

        try {
            DB::beginTransaction();
            
            $clientModel->delete();
            
            DB::commit();

            return response()->json([
                'message' => 'Client deleted successfully'
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Failed to delete client',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get client translations
     */
    public function getTranslations($id): JsonResponse
    {
        // Use $id instead of $clientId to avoid confusion
        $clientModel = Client::findOrFail($id);
        
        $translations = $clientModel->translations()->get()->keyBy('locale');
        
        return response()->json([
            'translations' => $translations,
            'available_locales' => config('app.available_locales', ['en', 'ar']),
            'current_locale' => app()->getLocale()
        ]);
    }

    /**
     * Create or update client translation
     */
    public function storeTranslation(Request $request, $id): JsonResponse
    {
        // Use $id instead of $clientId to avoid confusion
        $clientModel = Client::findOrFail($id);
        
        $validated = $request->validate([
            'locale' => 'required|string|max:5',
            'name' => 'nullable|string|max:255',
            'job' => 'nullable|string|max:255',
            'job_place' => 'nullable|string|max:255',
        ]);

        try {
            DB::beginTransaction();
            
            $translation = $clientModel->translations()->updateOrCreate(
                ['locale' => $validated['locale']],
                $validated
            );
            
            DB::commit();

            return response()->json([
                'message' => 'Translation saved successfully',
                'translation' => $translation
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Failed to save translation',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Delete client translation
     */
    public function deleteTranslation(Request $request, $id): JsonResponse
    {
        // Use $id instead of $clientId to avoid confusion
        $clientModel = Client::findOrFail($id);
        
        $validated = $request->validate([
            'locale' => 'required|string|max:5',
        ]);

        try {
            $translation = $clientModel->translations()->where('locale', $validated['locale'])->first();
            
            if ($translation) {
                $translation->delete();
                return response()->json([
                    'message' => 'Translation deleted successfully'
                ]);
            }

            return response()->json([
                'message' => 'Translation not found'
            ], 404);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to delete translation',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get nationalities for filter
     */
    public function getNationalities(Request $request): JsonResponse
    {
        $query = Nationality::query();
        
        if ($request->filled('search')) {
            $query->where('name', 'like', "%{$request->search}%");
        }
        
        $nationalities = $query->select('id', 'name')
                              ->orderBy('name')
                              ->paginate(10);
        
        return response()->json($nationalities);
    }

    /**
     * Get ID types for filter
     */
    public function getIdTypes(Request $request): JsonResponse
    {
        $query = IdType::query();
        
        if ($request->filled('search')) {
            $query->where('name', 'like', "%{$request->search}%");
        }
        
        $idTypes = $query->select('id', 'name')
                        ->orderBy('name')
                        ->paginate(10);
        
        return response()->json($idTypes);
    }

    /**
     * Get banks for filter
     */
    public function getBanks(Request $request): JsonResponse
    {
        $query = Bank::query();
        
        if ($request->filled('search')) {
            $query->where('name', 'like', "%{$request->search}%");
        }
        
        $banks = $query->select('id', 'name')
                      ->orderBy('name')
                      ->paginate(10);
        
        return response()->json($banks);
    }

    /**
     * Get currencies for filter
     */
    public function getCurrencies(Request $request): JsonResponse
    {
        $query = Currency::query();
        
        if ($request->filled('search')) {
            $query->where('name', 'like', "%{$request->search}%");
        }
        
        $currencies = $query->select('id', 'name', 'code', 'symbol')
                           ->orderBy('name')
                           ->paginate(10);
        
        return response()->json($currencies);
    }

    /**
     * Get parent clients for filter (companies only)
     */
    public function getParentClients(Request $request): JsonResponse
    {
        $query = Client::query()
            ->where('type', 2) // Only companies
            ->where('is_active', true) // Only active companies
            ->whereNull('client_id'); // Only top-level companies (no parent)
        
        if ($request->filled('search')) {
            $query->where('name', 'like', "%{$request->search}%");
        }
        
        $parentClients = $query->select('id', 'name', 'cr_number')
                              ->orderBy('name')
                              ->paginate(10);
        
        return response()->json($parentClients);
    }

    /**
     * Get client emails
     */
    public function getEmails($id): JsonResponse
    {
        $client = Client::findOrFail($id);
        $emails = $client->clientEmails()->orderBy('is_primary', 'desc')->get();
        
        return response()->json([
            'emails' => $emails
        ]);
    }

    /**
     * Store client email
     */
    public function storeEmail(Request $request, $id): JsonResponse
    {
        $client = Client::findOrFail($id);
        
        $validated = $request->validate([
            'email' => 'required|email|max:255',
            'is_primary' => 'boolean',
            'is_verified' => 'boolean',
            'notes' => 'nullable|string|max:500',
        ], [
            'email.required' => 'Email address is required.',
            'email.email' => 'Please enter a valid email address.',
        ]);

        // If this is a primary email, unset other primary emails
        if ($validated['is_primary']) {
            $client->clientEmails()->where('is_primary', true)->update(['is_primary' => false]);
        }

        $email = $client->clientEmails()->create($validated);
        
        return response()->json([
            'message' => 'Email added successfully',
            'email' => $email
        ], 201);
    }

    /**
     * Delete client email
     */
    public function deleteEmail($id, $emailId): JsonResponse
    {
        $client = Client::findOrFail($id);
        $email = $client->clientEmails()->findOrFail($emailId);
        
        $email->delete();
        
        return response()->json([
            'message' => 'Email deleted successfully'
        ]);
    }

    /**
     * Get client mobiles
     */
    public function getMobiles($id): JsonResponse
    {
        $client = Client::findOrFail($id);
        $mobiles = $client->clientMobiles()->orderBy('is_primary', 'desc')->get();
        
        return response()->json([
            'mobiles' => $mobiles
        ]);
    }

    /**
     * Store client mobile
     */
    public function storeMobile(Request $request, $id): JsonResponse
    {
        $client = Client::findOrFail($id);
        
        $validated = $request->validate([
            'mobile_number' => 'required|string|regex:/^[0-9]{8,15}$/',
            'country_code' => 'required|string|max:5',
            'is_primary' => 'boolean',
            'is_verified' => 'boolean',
            'notes' => 'nullable|string|max:500',
        ], [
            'mobile_number.required' => 'Mobile number is required.',
            'mobile_number.regex' => 'Mobile number must contain only digits and be between 8-15 characters.',
            'country_code.required' => 'Country code is required.',
        ]);

        // If this is a primary mobile, unset other primary mobiles
        if ($validated['is_primary']) {
            $client->clientMobiles()->where('is_primary', true)->update(['is_primary' => false]);
        }

        $mobile = $client->clientMobiles()->create($validated);
        
        return response()->json([
            'message' => 'Mobile added successfully',
            'mobile' => $mobile
        ], 201);
    }

    /**
     * Delete client mobile
     */
    public function deleteMobile($id, $mobileId): JsonResponse
    {
        $client = Client::findOrFail($id);
        $mobile = $client->clientMobiles()->findOrFail($mobileId);
        
        $mobile->delete();
        
        return response()->json([
            'message' => 'Mobile deleted successfully'
        ]);
    }

    /**
     * Debug method to check emails and mobiles
     */
    public function debugEmailsAndMobiles(): JsonResponse
    {
        $clients = Client::with(['clientEmails', 'clientMobiles'])->get();
        
        $debugData = [];
        foreach ($clients as $client) {
            $debugData[] = [
                'client_id' => $client->id,
                'client_name' => $client->name,
                'emails_count' => $client->clientEmails->count(),
                'mobiles_count' => $client->clientMobiles->count(),
                'emails' => $client->clientEmails->toArray(),
                'mobiles' => $client->clientMobiles->toArray(),
            ];
        }
        
        return response()->json([
            'total_clients' => $clients->count(),
            'clients_data' => $debugData
        ]);
    }
}

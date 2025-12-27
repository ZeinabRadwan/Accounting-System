<?php

namespace App\Jobs;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class CreateTenantAdmin implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /** @var Tenant */
    protected $tenant;

    public function __construct(Tenant $tenant)
    {
        $this->tenant = $tenant;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Log that the job is being executed
        Log::info('CreateTenantAdmin: Job handle() method called', [
            'tenant_id' => $this->tenant->id,
            'tenant_email' => $this->tenant->email,
        ]);

        try {
            // Refresh tenant to ensure we have the latest data including password
            $this->tenant->refresh();

            $this->tenant->run(function ($tenant) {
                Log::info("CreateTenantAdmin: Starting user creation for tenant {$tenant->id}", [
                    'tenant_email' => $tenant->email,
                    'tenant_name' => $tenant->name,
                    'has_password' => ! empty($tenant->password),
                ]);

                // Check if user already exists
                $existingUser = User::where('email', $tenant->email)->first();
                if ($existingUser) {
                    Log::warning("CreateTenantAdmin: User already exists for tenant {$tenant->id}", [
                        'user_id' => $existingUser->id,
                        'email' => $tenant->email,
                    ]);

                    return;
                }

                // Get password from tenant attributes (bypass hidden)
                $password = $tenant->getAttribute('password');
                if (empty($password)) {
                    Log::error("CreateTenantAdmin: Password is empty for tenant {$tenant->id}");
                    throw new \Exception("Password is empty for tenant {$tenant->id}");
                }

                // Create the admin user
                $user = User::create([
                    'name' => $tenant->name,
                    'email' => $tenant->email,
                    'password' => $password, // Already hashed from tenant creation
                    'locale' => 'en',
                    'account_role' => 1, // Admin role
                ]);

                Log::info("CreateTenantAdmin: User created successfully for tenant {$tenant->id}", [
                    'user_id' => $user->id,
                    'email' => $user->email,
                ]);
            });
        } catch (\Exception $e) {
            Log::error("CreateTenantAdmin: Failed to create admin user for tenant {$this->tenant->id}", [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            throw $e;
        }
    }
}

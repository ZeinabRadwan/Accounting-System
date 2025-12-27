<?php

namespace App\Jobs;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

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
        try {
            // Refresh tenant to ensure we have the latest data including password
            $this->tenant->refresh();

            $this->tenant->run(function ($tenant) {
                // Check if user already exists
                $existingUser = User::where('email', $tenant->email)->first();
                if ($existingUser) {
                    return;
                }

                // Get password from tenant attributes (bypass hidden)
                $password = $tenant->getAttribute('password');
                if (empty($password)) {
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
            });
        } catch (\Exception $e) {
            throw $e;
        }
    }
}

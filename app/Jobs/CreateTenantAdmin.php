<?php

namespace App\Jobs;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Schema;
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
     *
     * @return void
     */
    public function handle()
    {
        try {
            // Wait a moment for the database to be fully created
            sleep(1);
            
            $this->tenant->run(function ($tenant) {
                // Check if users table exists before creating user
                if (Schema::hasTable('users')) {
                    User::create([
                        'name' => $tenant->name,
                        'email' => $tenant->email,
                        'password' => $tenant->password,
                        'locale' => 'ar', // Set default locale for new users
                    ]);
                }
            });
        } catch (\Exception $e) {
            // Log the error but don't fail the job
            Log::warning('Failed to create tenant admin user', [
                'tenant_id' => $this->tenant->id,
                'error' => $e->getMessage()
            ]);
        }
    }
}

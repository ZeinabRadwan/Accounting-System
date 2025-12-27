<?php

namespace App\Services;

use App\Http\Requests\TenantRegisterRequest;
use App\Models\GeneralSetting;
use App\Models\Tenant;
use App\Models\User;
use App\Notifications\NewSubscriptionNotification;
use App\Notifications\TenantRegisterNotifyForAdmin;
use App\Notifications\TenantVerificationNotification;
use App\Traits\ApiResponse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use Stancl\Tenancy\Database\Models\Domain;

class TenantService
{
    use ApiResponse;

    protected function tenantData($request, $trialDayCount, $emailVerifiedAt): array
    {
        return [
            'password' => bcrypt($request['password']),
            'ready' => false,
            // some other stuff, if you need. like cashier trials
            'trial_ends_at' => now()->addDays($trialDayCount),
            'trial_ends_email_sent_at' => null,
            'primary_domain_id' => null,
            'fallback_domain_id' => null,
            'is_banned' => false,
            'email_verified_at' => $emailVerifiedAt,
        ];
    }

    /**
     * Create Tenant and Domain
     * Then send email to user and get the domain with host.
     */
    public function createTenantAndSendVerificationNotification(TenantRegisterRequest $request, ?Carbon $emailVerifiedAt = null): \Illuminate\Http\JsonResponse
    {
        // Check SMTP configuration before proceeding with registration
        $smtpValidation = $this->validateSMTPConfiguration();
        if (! $smtpValidation['is_valid']) {
            return $this->responseWithError(
                'SMTP configuration is not properly set up. Please contact the administrator to configure email settings before registration.',
                ['smtp_error' => $smtpValidation['error']],
                422
            );
        }

        $trialDayCount = GeneralSetting::where('key', 'trial_day_count')->first()?->value ?? 14;

        $tenant = Tenant::create(
            $request->safe()->except(['password', 'terms_and_conditions']) +
            $this->tenantData($request, $trialDayCount, $emailVerifiedAt),
        );

        $domain = $tenant->createDomain([
            'domain' => $request->domain,
        ]);

        $tenant->update([
            'ready' => true,
            'primary_domain_id' => $domain->id,
            'fallback_domain_id' => $domain->id,
        ]);

        // Note: Print templates and admin user are set up by the TenantCreated event pipeline
        // (see TenancyServiceProvider) which runs CreateTenantAdmin and SeedDatabase jobs.
        // We only need to set up print templates here if they're not included in the seeder.
        // The admin user is already created by CreateTenantAdmin job in the pipeline.

        // Set up print templates for the new tenant (these are not in the main seeder)
        $this->setupPrintTemplatesForTenant($tenant);

        // get host name
        $host = request()->getHttpHost();
        $domainWithHost = $request->domain.'.'.$host;
        $protocol = request()->secure() ? 'https' : 'http';
        $fullDomainWithHost = $protocol.'://'.$domainWithHost;

        // Create login URL with encrypted credentials for automatic login
        $encryptedEmail = encrypt($request->input('email'));
        $encryptedPassword = encrypt($request->input('password'));

        $loginUrl = $fullDomainWithHost.'/cross-domain-login?'.
            'email='.urlencode($encryptedEmail).
            '&password='.urlencode($encryptedPassword);

        // Create impersonation token for direct access
        $impersonateToken = tenancy()->impersonate(
            $tenant, 1, $domainWithHost
        )->token;

        // tenant verification mail
        $tenant->notify(new TenantVerificationNotification);
        $host = env('CENTRAL_DOMAIN');
        $domainTenant = $tenant->domain.'.'.$host;
        windowsTestSubHostReg($domainTenant);

        return $this->responseWithSuccess(
            'Registration successful. You will be automatically logged in.', [
                'tenant' => $tenant,
                'domain' => $domainWithHost,
                'login_url' => $loginUrl,
                'impersonate_url' => $fullDomainWithHost.'/impersonate/'.$impersonateToken,
                'token' => $impersonateToken,
            ]
        );
    }

    public function createTenantAndDomainThenGetDomainWithHost(Request $request): array
    {
        $trialDayCount = GeneralSetting::where('key', 'trial_day_count')
            ->first()?->value ?? 14;

        $tenant = Tenant::create(
            $request->safe()->except('password') +
            $this->tenantData($request, $trialDayCount, now()),
        );

        // demo

        $domain = $tenant->createDomain([
            'domain' => $request->domain,
        ]);

        $tenant->update([
            'ready' => true,
            'primary_domain_id' => $domain->id,
            'fallback_domain_id' => $domain->id,
        ]);

        // Set up print templates for the new tenant
        $this->setupPrintTemplatesForTenant($tenant);

        // get host name
        $host = request()->getHttpHost();
        $domainWithHost = request()->getScheme().'://'.$request->domain.'.'.$host;
        $token = tenancy()->impersonate(
            $tenant, 1, $request->domain.'.'.$host
        )->token;

        // demo

        // notify tenant
        $tenant->notify(
            new NewSubscriptionNotification($domainWithHost, $request->password)
        );

        return [
            'domainWithHost' => $domainWithHost,
            'token' => $token,
        ];
    }

    /**
     * @return array|void
     */
    public function createDomainAndLogin(Tenant $tenant)
    {
        $domain = $tenant->domain;

        $findDomain = Domain::where('domain', $domain)->first();

        if ($findDomain) {
            return;
        }

        $domain = $tenant->createDomain([
            'domain' => $domain,
        ]);

        $tenant->update([
            'ready' => true,
            'primary_domain_id' => $domain->id,
            'fallback_domain_id' => $domain->id,
        ]);

        // get host name
        [$host, $domainWithHost] = $this->getDomainWithHost($domain);
        $token = tenancy()->impersonate(
            $tenant, 1, $domain->domain.'.'.$host
        )->token;

        // notify tenant
        $tenant->notify(new NewSubscriptionNotification($domainWithHost));
        // notify admin
        $admins = User::where('account_role', 1)->get();
        Notification::send($admins, new TenantRegisterNotifyForAdmin($tenant, $domainWithHost));

        return [
            'domainWithHost' => $domainWithHost,
            'token' => $token,
        ];
    }

    public function getDomainWithHost($tenant): array
    {
        $host = request()->getHttpHost();
        $domainWithHost = request()->getScheme().'://'.$tenant->domain.'.'.$host;

        return [$host, $domainWithHost];
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function impersonateAsTenant(Tenant $tenant)
    {
        $domain = $tenant->domain;

        $domain = Domain::where('domain', $domain)->first();

        // get host name
        [$host, $domainWithHost] = $this->getDomainWithHost($domain);
        $token = tenancy()->impersonate(
            $tenant, 1, $domain->domain.'.'.$host, 'web',
        )->token;

        return $this->responseWithSuccess(
            'Login successful.', [
                'redirect_url' => $domainWithHost.'/impersonate/'.$token,
            ]
        );
    }

    /**
     * Set up print templates for a tenant
     *
     * @return void
     */
    private function setupPrintTemplatesForTenant(Tenant $tenant)
    {
        try {
            // Use tenant->run() which handles context initialization and cleanup automatically
            $tenant->run(function () {
                Log::info('Setting up print templates for new tenant');

                // Run PrintTemplateSeeder
                $printTemplateSeeder = new \Database\Seeders\PrintTemplateSeeder;
                $printTemplateSeeder->run();

                // Run PrintTemplatePermissionsSeeder
                $printTemplatePermissionsSeeder = new \Database\Seeders\PrintTemplatePermissionsSeeder;
                $printTemplatePermissionsSeeder->run();

                Log::info('✅ Print templates setup completed');
            });

        } catch (\Exception $e) {
            Log::error("❌ Error setting up print templates for tenant {$tenant->id}: ".$e->getMessage());
            // Don't throw - allow registration to continue even if print templates fail
        }
    }

    /**
     * Validate SMTP configuration
     */
    private function validateSMTPConfiguration(): array
    {
        try {
            // Check if basic SMTP settings are configured
            $mailHost = config('mail.mailers.smtp.host');
            $mailPort = config('mail.mailers.smtp.port');
            $mailUsername = config('mail.mailers.smtp.username');
            $mailPassword = config('mail.mailers.smtp.password');
            $mailEncryption = config('mail.mailers.smtp.encryption');
            $mailFromAddress = config('mail.from.address');
            $mailFromName = config('mail.from.name');

            // Check if essential SMTP settings are missing
            if (empty($mailHost) || empty($mailPort) || empty($mailUsername) || empty($mailPassword)) {
                return [
                    'is_valid' => false,
                    'error' => 'SMTP host, port, username, or password is not configured',
                ];
            }

            if (empty($mailFromAddress) || empty($mailFromName)) {
                return [
                    'is_valid' => false,
                    'error' => 'Mail from address or name is not configured',
                ];
            }

            // Check if SMTP settings are using default/placeholder values
            $defaultHosts = ['smtp.mailgun.org', 'smtp.mailtrap.io', 'smtp.gmail.com', 'localhost', '127.0.0.1'];
            $defaultUsernames = ['null', 'your-username', 'your_email@gmail.com', 'test@example.com'];
            $defaultPasswords = ['null', 'your-password', 'your_password', 'password'];

            if (in_array($mailHost, $defaultHosts) &&
                (in_array($mailUsername, $defaultUsernames) || in_array($mailPassword, $defaultPasswords))) {
                return [
                    'is_valid' => false,
                    'error' => 'SMTP configuration appears to be using default/placeholder values. Please configure proper SMTP settings.',
                ];
            }

            // Check for common Laravel default values
            if ($mailHost === 'smtp.mailgun.org' && empty(env('MAILGUN_DOMAIN'))) {
                return [
                    'is_valid' => false,
                    'error' => 'SMTP configuration appears to be using default values. Please configure proper SMTP settings.',
                ];
            }

            if ($mailHost === 'smtp.mailtrap.io' && empty(env('MAILTRAP_USERNAME'))) {
                return [
                    'is_valid' => false,
                    'error' => 'SMTP configuration appears to be using default values. Please configure proper SMTP settings.',
                ];
            }

            // For production, we can optionally test the connection
            // But for registration, we'll just validate the configuration exists
            // to avoid delays during user registration
            return [
                'is_valid' => true,
                'error' => null,
            ];

        } catch (\Exception $e) {
            return [
                'is_valid' => false,
                'error' => 'SMTP configuration validation failed: '.$e->getMessage(),
            ];
        }
    }
}

<?php

declare(strict_types=1);

namespace App\Bootstrappers;

use App\Services\MySQLDatabaseManager;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Stancl\Tenancy\Contracts\TenancyBootstrapper;
use Stancl\Tenancy\Contracts\Tenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase;

class TenantDatabaseBootstrapper implements TenancyBootstrapper
{
    /**
     * Bootstrap the tenant database connection.
     * REQUIRES tenant-specific credentials - will not use root user from .env
     *
     * @throws \Exception if tenant credentials are missing
     */
    public function bootstrap(Tenant $tenant): void
    {
        if (! ($tenant instanceof TenantWithDatabase)) {
            return;
        }

        $databaseName = $tenant->database()->getName();

        // Get base connection config from the default MySQL connection (for host/port only)
        $baseConfig = config('database.connections.mysql', []);

        // Get tenant-specific credentials - REQUIRED
        $dbUsername = null;
        $dbPassword = null;

        if (method_exists($tenant, 'getAttribute')) {
            $dbUsername = $tenant->getAttribute('db_username');
            $dbPassword = $tenant->getAttribute('db_password');
        }

        // CRITICAL: Require tenant-specific credentials
        // If missing, attempt to auto-generate them
        if (empty($dbUsername) || empty($dbPassword)) {
            $tenantId = $tenant->getTenantKey();
            Log::warning("Tenant {$tenantId} (database: {$databaseName}) is missing database credentials. Attempting to auto-generate...");

            try {
                // Use central connection to generate credentials
                $centralConnection = config('tenancy.database.central_connection', 'mysql');
                $dbManager = app(MySQLDatabaseManager::class);
                $dbManager->setConnection($centralConnection);

                // Generate and store credentials using the public helper method
                $dbManager->generateCredentialsForTenant($tenant);

                // Refresh tenant attributes to get the newly stored credentials
                $tenant->refresh();
                $dbUsername = $tenant->getAttribute('db_username');
                $dbPassword = $tenant->getAttribute('db_password');

                Log::info("Successfully auto-generated database credentials for tenant {$tenantId}");

            } catch (\Exception $e) {
                $tenantId = $tenant->getTenantKey();
                Log::error("Failed to auto-generate credentials for tenant {$tenantId}: ".$e->getMessage());
                Log::error('Exception trace: '.$e->getTraceAsString());

                throw new \Exception(
                    'Tenant database credentials are missing and could not be auto-generated. '.
                    'This tenant cannot access their database. '.
                    'Please contact the administrator to set up database credentials for this tenant. '.
                    'Error: '.$e->getMessage()
                );
            }

            // Double-check credentials were set
            if (empty($dbUsername) || empty($dbPassword)) {
                $tenantId = $tenant->getTenantKey();
                throw new \Exception(
                    'Tenant database credentials are missing. '.
                    'This tenant cannot access their database. '.
                    'Please contact the administrator to set up database credentials for this tenant.'
                );
            }
        }

        // Decrypt the password
        try {
            $decryptedPassword = Crypt::decryptString($dbPassword);
        } catch (\Exception $e) {
            $tenantId = $tenant->getTenantKey();
            Log::error("Failed to decrypt tenant password for tenant {$tenantId}: ".$e->getMessage());

            throw new \Exception(
                'Failed to decrypt tenant database credentials. '.
                'This tenant cannot access their database. '.
                'Please contact the administrator.'
            );
        }

        // Build tenant config using ONLY tenant-specific credentials
        // Do NOT use root user credentials from .env
        $tenantConfig = [
            'driver' => $baseConfig['driver'] ?? 'mysql',
            'host' => $baseConfig['host'] ?? env('DB_HOST', '127.0.0.1'),
            'port' => $baseConfig['port'] ?? env('DB_PORT', '3306'),
            'database' => $databaseName,
            'username' => $dbUsername, // Tenant-specific username
            'password' => $decryptedPassword, // Tenant-specific password
            'charset' => $baseConfig['charset'] ?? 'utf8mb4',
            'collation' => $baseConfig['collation'] ?? 'utf8mb4_unicode_ci',
            'prefix' => $baseConfig['prefix'] ?? '',
            'prefix_indexes' => $baseConfig['prefix_indexes'] ?? true,
            'strict' => $baseConfig['strict'] ?? false,
            'engine' => $baseConfig['engine'] ?? null,
            'options' => $baseConfig['options'] ?? [],
        ];

        // Log::info("Using tenant-specific MySQL credentials for database: {$databaseName}, user: {$dbUsername}");

        // Set the tenant connection configuration
        Config::set('database.connections.tenant', $tenantConfig);

        // Purge the connection to ensure fresh connection with new credentials
        DB::purge('tenant');

        // Set tenant as default connection
        Config::set('database.default', 'tenant');
        DB::setDefaultConnection('tenant');
    }

    /**
     * Revert the tenant database connection.
     */
    public function revert(): void
    {
        // Revert to central connection
        $centralConnection = config('tenancy.database.central_connection', 'mysql');
        Config::set('database.default', $centralConnection);
        DB::setDefaultConnection($centralConnection);

        // Purge tenant connection to free resources
        try {
            DB::purge('tenant');
        } catch (\Exception $e) {
            // Ignore if tenant connection doesn't exist
        }
    }
}

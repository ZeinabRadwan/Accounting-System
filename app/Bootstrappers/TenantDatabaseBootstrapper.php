<?php

declare(strict_types=1);

namespace App\Bootstrappers;

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
     */
    public function bootstrap(Tenant $tenant): void
    {
        if (! ($tenant instanceof TenantWithDatabase)) {
            return;
        }

        $databaseName = $tenant->database()->getName();

        // Get base connection config from the default MySQL connection
        $baseConfig = config('database.connections.mysql', []);

        // Start with base config
        $tenantConfig = [
            'driver' => $baseConfig['driver'] ?? 'mysql',
            'host' => $baseConfig['host'] ?? env('DB_HOST', '127.0.0.1'),
            'port' => $baseConfig['port'] ?? env('DB_PORT', '3306'),
            'database' => $databaseName,
            'username' => $baseConfig['username'] ?? env('DB_USERNAME'),
            'password' => $baseConfig['password'] ?? env('DB_PASSWORD'),
            'charset' => $baseConfig['charset'] ?? 'utf8mb4',
            'collation' => $baseConfig['collation'] ?? 'utf8mb4_unicode_ci',
            'prefix' => $baseConfig['prefix'] ?? '',
            'prefix_indexes' => $baseConfig['prefix_indexes'] ?? true,
            'strict' => $baseConfig['strict'] ?? false,
            'engine' => $baseConfig['engine'] ?? null,
            'options' => $baseConfig['options'] ?? [],
        ];

        // Override with tenant-specific credentials if available
        if (method_exists($tenant, 'getAttribute')) {
            $dbUsername = $tenant->getAttribute('db_username');
            $dbPassword = $tenant->getAttribute('db_password');

            if ($dbUsername && $dbPassword) {
                try {
                    // Decrypt the password
                    $decryptedPassword = Crypt::decryptString($dbPassword);
                    $tenantConfig['username'] = $dbUsername;
                    $tenantConfig['password'] = $decryptedPassword;

                    Log::info("Using tenant-specific MySQL credentials for database: {$databaseName}, user: {$dbUsername}");
                } catch (\Exception $e) {
                    Log::warning('Failed to decrypt tenant password, using default connection: '.$e->getMessage());
                }
            }
        }

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

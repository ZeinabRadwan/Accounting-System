<?php

declare(strict_types=1);

namespace App\Services;

use Exception;
use Illuminate\Database\Connection;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Stancl\Tenancy\Contracts\TenantDatabaseManager;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Exceptions\NoConnectionSetException;

class MySQLDatabaseManager implements TenantDatabaseManager
{
    /** @var string */
    protected $connection;

    protected function database(): Connection
    {
        if ($this->connection === null) {
            throw new NoConnectionSetException(static::class);
        }

        return DB::connection($this->connection);
    }

    public function setConnection(string $connection): void
    {
        $this->connection = $connection;
    }

    // public function createDatabase(TenantWithDatabase $tenant): bool
    // {
    //     $database = $tenant->database()->getName();
    //     $charset = $this->database()->getConfig('charset');
    //     $collation = $this->database()->getConfig('collation');
    //     return $this->database()->statement("CREATE DATABASE `{$database}` CHARACTER SET `$charset` COLLATE `$collation`");
    // }

    public function createDatabase(TenantWithDatabase $tenant): bool
    {
        $database = $tenant->database()->getName();
        Log::info("Creating database with dedicated MySQL user: {$database}");

        // Check if tenant already has database credentials (for backward compatibility)
        if (method_exists($tenant, 'getAttribute')) {
            $existingUsername = $tenant->getAttribute('db_username');
            $existingPassword = $tenant->getAttribute('db_password');

            if ($existingUsername && $existingPassword) {
                Log::info('Tenant already has database credentials, skipping user creation');
                // Verify database exists
                if ($this->databaseExists($database)) {
                    return true;
                }
                // If database doesn't exist but credentials do, continue to create database
            }
        }

        // Generate unique MySQL user credentials for this tenant
        $dbUsername = $this->generateTenantUsername($tenant);
        $dbPassword = Str::random(32); // Strong password

        // First, create the database
        $databaseCreated = false;

        // Try multiple approaches for database creation

        // Approach 1: Try direct MySQL with CREATE DATABASE
        try {
            Log::info("Attempting direct MySQL database creation for: {$database}");
            $charset = $this->database()->getConfig('charset');
            $collation = $this->database()->getConfig('collation');
            $result = $this->database()->statement("CREATE DATABASE IF NOT EXISTS `{$database}` CHARACTER SET `$charset` COLLATE `$collation`");
            if ($result) {
                Log::info("Successfully created database via direct MySQL: {$database}");
                $databaseCreated = true;
            }
        } catch (\Exception $e) {
            Log::warning("Direct MySQL creation failed for {$database}: ".$e->getMessage());
        }

        // Approach 2: Try cPanel API (if configured and database not created yet)
        if (! $databaseCreated && env('CPANEL_API_TOKEN') && (app()->environment('production') || app()->environment('staging'))) {
            try {
                Log::info("Attempting cPanel API database creation for: {$database}");

                $cpanelUser = env('CPANEL_USERNAME', 'accountwebsoft');
                $apiToken = env('CPANEL_API_TOKEN');
                $cpanelHost = env('CPANEL_HOST', 'account.websoft.sa');
                $cpanelPort = env('CPANEL_PORT', '2083');

                $response = Http::withHeaders([
                    'Authorization' => "cpanel {$cpanelUser}:{$apiToken}",
                ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute/Mysql/create_database", [
                    'name' => $database,
                ]);

                $data = $response->json();
                if (isset($data['status']) && $data['status'] === 1) {
                    Log::info("Successfully created database via cPanel API: {$database}");
                    $databaseCreated = true;
                }
            } catch (\Exception $e) {
                Log::error("cPanel API creation failed for {$database}: ".$e->getMessage());
            }
        }

        if (! $databaseCreated) {
            throw new Exception("Failed to create database '{$database}'. Please contact your hosting provider to enable database creation or grant CREATE privileges.");
        }

        // Now create the MySQL user and grant privileges
        try {
            Log::info("Creating MySQL user: {$dbUsername} for database: {$database}");

            // Get MySQL host (support both localhost and % for remote connections)
            $mysqlHost = $this->getMySQLHost();

            // Create user for localhost
            $this->database()->statement("CREATE USER IF NOT EXISTS '{$dbUsername}'@'{$mysqlHost}' IDENTIFIED BY '{$dbPassword}'");

            // Grant privileges only on this tenant's database
            $this->database()->statement("GRANT ALL PRIVILEGES ON `{$database}`.* TO '{$dbUsername}'@'{$mysqlHost}'");

            // Also create user for % (any host) if needed for remote connections
            if ($mysqlHost !== '%') {
                $this->database()->statement("CREATE USER IF NOT EXISTS '{$dbUsername}'@'%' IDENTIFIED BY '{$dbPassword}'");
                $this->database()->statement("GRANT ALL PRIVILEGES ON `{$database}`.* TO '{$dbUsername}'@'%'");
            }

            $this->database()->statement('FLUSH PRIVILEGES');

            Log::info("Successfully created MySQL user: {$dbUsername} with privileges on database: {$database}");

            // Store credentials in tenant model
            $this->storeTenantCredentials($tenant, $database, $dbUsername, $dbPassword);

            return true;

        } catch (\Exception $e) {
            Log::error("Failed to create MySQL user for tenant {$database}: ".$e->getMessage());
            // If user creation fails, we should still return true if database was created
            // The system can fall back to using the default connection
            if ($databaseCreated) {
                Log::warning('Database created but user creation failed. Tenant will use default connection.');

                return true;
            }
            throw $e;
        }
    }

    /**
     * Check if the current database user has permissions to create databases
     */
    protected function checkDatabasePermissions(): void
    {
        try {
            // Check if we can create databases
            $result = $this->database()->select('SHOW GRANTS FOR CURRENT_USER()');
            Log::info('Current user grants: '.json_encode($result));

            // Check if we have CREATE privilege
            $hasCreatePrivilege = false;
            foreach ($result as $grant) {
                $grantText = $grant->{'Grants for '.env('DB_USERNAME', 'accountwebsoft').'@'.env('DB_HOST', '127.0.0.1')};
                if (strpos($grantText, 'ALL PRIVILEGES ON *.*') !== false ||
                    strpos($grantText, 'CREATE ON *.*') !== false) {
                    $hasCreatePrivilege = true;
                    break;
                }
            }

            if (! $hasCreatePrivilege) {
                Log::warning('Current database user does not have CREATE privilege on *.*');
            } else {
                Log::info('Current database user has CREATE privilege');
            }
        } catch (\Exception $e) {
            Log::warning('Could not check database permissions: '.$e->getMessage());
        }
    }

    // public function callPleskApi(string $method, string $action, array $params = []): array
    // {
    //     try {
    //         $pleskHost = config('tenancy.plesk.host', 'accounting.websoft.sa');
    //         $pleskPort = config('tenancy.plesk.port', 8443);
    //         $pleskUsername = config('tenancy.plesk.username', 'root');
    //         $pleskPassword = config('tenancy.plesk.password', 'Nk9SwV0o');

    //         if (!$pleskUsername || !$pleskPassword) {
    //             throw new GeneralException('Plesk credentials are not configured.');
    //         }

    //         $xml = $this->buildPleskXml($method, $action, $params);

    //         $ch = curl_init();
    //         curl_setopt($ch, CURLOPT_URL, "https://{$pleskHost}:{$pleskPort}/enterprise/control/agent.php");
    //         curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //         curl_setopt($ch, CURLOPT_POST, true);
    //         curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
    //         curl_setopt($ch, CURLOPT_HTTPHEADER, [
    //             'Content-Type: text/xml',
    //             'HTTP_AUTH_LOGIN: ' . $pleskUsername,
    //             'HTTP_AUTH_PASSWD: ' . $pleskPassword
    //         ]);
    //         curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    //         curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    //         curl_setopt($ch, CURLOPT_TIMEOUT, 30);

    //         $response = curl_exec($ch);
    //         $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    //         curl_close($ch);

    //         if ($httpCode !== 200 || !$response) {
    //             throw new GeneralException("Plesk API call failed. HTTP code: {$httpCode}");
    //         }

    //         $result = $this->parsePleskResponse($response);
    //         if (!$result) {
    //             throw new GeneralException("Failed to parse Plesk API response.");
    //         }

    //         return $result;
    //     } catch (\Exception $e) {
    //         throw new GeneralException(
    //             "Exception in Plesk API call '{$method}/{$action}': " . $e->getMessage(),
    //             0,
    //             $e
    //         );
    //     }
    // }

    public function buildPleskXml(string $method, string $action, array $params = []): string
    {
        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<packet version="1.6.9.1">';
        $xml .= "<{$method}>";
        $xml .= "<{$action}>";

        if (isset($params['webspace_id'])) {
            $xml .= "<webspace-id>{$params['webspace_id']}</webspace-id>";
        }

        if (isset($params['name'])) {
            $xml .= "<name>{$params['name']}</name>";
        }

        if (isset($params['type'])) {
            $xml .= "<type>{$params['type']}</type>";
        }

        if (isset($params['server_id'])) {
            $xml .= "<db-server-id>{$params['server_id']}</db-server-id>";
        }

        $xml .= "</{$action}>";
        $xml .= "</{$method}>";
        $xml .= '</packet>';

        return $xml;
    }

    public function parsePleskResponse(string $response): array
    {
        try {
            $xml = simplexml_load_string($response);
            if ($xml === false) {
                throw new Exception('Failed to parse Plesk XML response.');
            }

            $json = json_encode($xml);
            $array = json_decode($json, true);
            if (! is_array($array)) {
                throw new Exception('Failed to convert Plesk XML to array.');
            }

            return $array;
        } catch (\Exception $e) {
            throw new Exception(
                'Exception while parsing Plesk response: '.$e->getMessage(),
                0,
                $e
            );
        }
    }

    public function deleteDatabase(TenantWithDatabase $tenant): bool
    {
        $databaseName = $tenant->database()->getName();

        // Get tenant's MySQL username if it exists
        $dbUsername = null;
        if (method_exists($tenant, 'getAttribute') && $tenant->getAttribute('db_username')) {
            $dbUsername = $tenant->getAttribute('db_username');
        }

        // Drop the MySQL user first (if it exists)
        if ($dbUsername) {
            try {
                Log::info("Attempting to drop MySQL user: {$dbUsername}");
                $mysqlHost = $this->getMySQLHost();

                // Drop user for both localhost and % if they exist
                $this->database()->statement("DROP USER IF EXISTS '{$dbUsername}'@'{$mysqlHost}'");
                if ($mysqlHost !== '%') {
                    $this->database()->statement("DROP USER IF EXISTS '{$dbUsername}'@'%'");
                }
                $this->database()->statement('FLUSH PRIVILEGES');

                Log::info("Successfully dropped MySQL user: {$dbUsername}");
            } catch (\Exception $e) {
                Log::warning("Failed to drop MySQL user '{$dbUsername}': ".$e->getMessage());
                // Continue with database deletion even if user drop fails
            }
        }

        // Check if database exists before trying to drop it
        if (! $this->databaseExists($databaseName)) {
            Log::info("Database '{$databaseName}' does not exist, skipping deletion");

            return true; // Return true since the goal (database not existing) is already achieved
        }

        try {
            Log::info("Attempting to drop database: {$databaseName}");
            $result = $this->database()->statement("DROP DATABASE IF EXISTS `{$databaseName}`");
            Log::info("Successfully dropped database: {$databaseName}");

            return $result;
        } catch (\Exception $e) {
            Log::warning("Failed to drop database '{$databaseName}': ".$e->getMessage());
            // If the database doesn't exist, consider it a success
            if (strpos($e->getMessage(), "database doesn't exist") !== false ||
                strpos($e->getMessage(), 'Unknown database') !== false) {
                Log::info("Database '{$databaseName}' doesn't exist, considering deletion successful");

                return true;
            }
            throw $e;
        }
    }

    public function databaseExists(string $name): bool
    {
        try {
            $result = $this->database()->select('SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?', [$name]);

            return ! empty($result);
        } catch (\Exception $e) {
            Log::warning('Failed to check if database exists: '.$e->getMessage());

            return false;
        }
    }

    public function makeConnectionConfig(array $baseConfig, string $databaseName): array
    {
        $baseConfig['database'] = $databaseName;

        // Try to get tenant-specific credentials
        // This will be called by the bootstrapper, so we need to get the tenant from context
        try {
            $tenant = tenancy()->tenant;
            if ($tenant && method_exists($tenant, 'getAttribute')) {
                $dbUsername = $tenant->getAttribute('db_username');
                $dbPassword = $tenant->getAttribute('db_password');

                if ($dbUsername && $dbPassword) {
                    // Decrypt the password
                    try {
                        $decryptedPassword = Crypt::decryptString($dbPassword);
                        $baseConfig['username'] = $dbUsername;
                        $baseConfig['password'] = $decryptedPassword;

                        Log::info("Using tenant-specific MySQL credentials for database: {$databaseName}");
                    } catch (\Exception $e) {
                        Log::warning('Failed to decrypt tenant password, using default connection: '.$e->getMessage());
                    }
                }
            }
        } catch (\Exception $e) {
            // If we can't get tenant context, fall back to default credentials
            Log::debug('Could not get tenant context for connection config: '.$e->getMessage());
        }

        return $baseConfig;
    }

    /**
     * Generate a unique MySQL username for the tenant
     */
    protected function generateTenantUsername(TenantWithDatabase $tenant): string
    {
        $tenantId = $tenant->getTenantKey();
        // Generate username: prefix + tenant_id (max 16 chars for MySQL username limit)
        $prefix = env('TENANT_DB_USER_PREFIX', 'tenant_');
        $username = $prefix.Str::slug($tenantId);

        // MySQL username max length is 16 characters (for MySQL 5.7+) or 32 (for MySQL 8.0+)
        // We'll use 16 to be safe
        if (strlen($username) > 16) {
            $username = substr($username, 0, 16);
        }

        return $username;
    }

    /**
     * Get MySQL host for user creation (localhost or %)
     */
    protected function getMySQLHost(): string
    {
        // Use localhost by default, but allow configuration
        return env('MYSQL_USER_HOST', 'localhost');
    }

    /**
     * Store tenant database credentials in the tenant model
     */
    protected function storeTenantCredentials(TenantWithDatabase $tenant, string $database, string $username, string $password): void
    {
        try {
            // Encrypt the password before storing
            $encryptedPassword = Crypt::encryptString($password);

            // Use central connection to update tenant record
            tenancy()->central(function () use ($tenant, $database, $username, $encryptedPassword) {
                \DB::table('tenants')
                    ->where('id', $tenant->getTenantKey())
                    ->update([
                        'db_name' => $database,
                        'db_username' => $username,
                        'db_password' => $encryptedPassword,
                    ]);
            });

            // Also update the in-memory tenant object
            if (method_exists($tenant, 'setAttribute')) {
                $tenant->setAttribute('db_name', $database);
                $tenant->setAttribute('db_username', $username);
                $tenant->setAttribute('db_password', $encryptedPassword);
            }

            Log::info("Stored database credentials for tenant: {$database}");
        } catch (\Exception $e) {
            Log::error('Failed to store tenant credentials: '.$e->getMessage());
            // Don't throw - database and user are created, credentials just not stored
        }
    }
}

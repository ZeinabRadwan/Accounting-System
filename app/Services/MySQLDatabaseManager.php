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
        $userCreated = false;

        // Use cPanel API if configured (same as database creation)
        if (env('CPANEL_API_TOKEN') && (app()->environment('production') || app()->environment('staging'))) {
            $userCreated = $this->createMySQLUserViaCpanelAPI($dbUsername, $dbPassword, $database);
        }

        // Fallback to direct MySQL if cPanel API failed or not configured
        if (! $userCreated) {
            try {
                Log::info("Creating MySQL user via direct MySQL: {$dbUsername} for database: {$database}");

                // Get MySQL host (support both localhost and % for remote connections)
                $mysqlHost = $this->getMySQLHost();

                // Create user for localhost
                $this->database()->statement("CREATE USER IF NOT EXISTS '{$dbUsername}'@'{$mysqlHost}' IDENTIFIED BY '{$dbPassword}'");
                Log::info("Created MySQL user '{$dbUsername}'@'{$mysqlHost}'");

                // Grant privileges only on this tenant's database
                $this->database()->statement("GRANT ALL PRIVILEGES ON `{$database}`.* TO '{$dbUsername}'@'{$mysqlHost}'");
                Log::info("Granted privileges to '{$dbUsername}'@'{$mysqlHost}' on database {$database}");

                // Also create user for % (any host) if needed for remote connections
                if ($mysqlHost !== '%') {
                    try {
                        $this->database()->statement("CREATE USER IF NOT EXISTS '{$dbUsername}'@'%' IDENTIFIED BY '{$dbPassword}'");
                        $this->database()->statement("GRANT ALL PRIVILEGES ON `{$database}`.* TO '{$dbUsername}'@'%'");
                        Log::info("Created MySQL user '{$dbUsername}'@'%' and granted privileges");
                    } catch (\Exception $e) {
                        Log::warning('Failed to create user for % host, continuing with localhost only: '.$e->getMessage());
                    }
                }

                $this->database()->statement('FLUSH PRIVILEGES');
                $userCreated = true;

                Log::info("Successfully created MySQL user: {$dbUsername} with privileges on database: {$database}");

            } catch (\Exception $e) {
                Log::error("Failed to create MySQL user for tenant {$database}: ".$e->getMessage());
                Log::error('Exception trace: '.$e->getTraceAsString());

                // Check if user was partially created
                try {
                    $userExists = $this->checkUserExists($dbUsername);
                    if ($userExists) {
                        Log::info("User {$dbUsername} exists, attempting to grant privileges");
                        try {
                            $this->database()->statement("GRANT ALL PRIVILEGES ON `{$database}`.* TO '{$dbUsername}'@'{$mysqlHost}'");
                            if ($mysqlHost !== '%') {
                                $this->database()->statement("GRANT ALL PRIVILEGES ON `{$database}`.* TO '{$dbUsername}'@'%'");
                            }
                            $this->database()->statement('FLUSH PRIVILEGES');
                            $userCreated = true;
                            Log::info("Successfully granted privileges to existing user {$dbUsername}");
                        } catch (\Exception $grantException) {
                            Log::error('Failed to grant privileges to existing user: '.$grantException->getMessage());
                        }
                    }
                } catch (\Exception $checkException) {
                    Log::warning('Could not check if user exists: '.$checkException->getMessage());
                }
            }
        }

        // Always try to store credentials, even if user creation had issues
        // This way we can retry user creation later if needed
        try {
            $this->storeTenantCredentials($tenant, $database, $dbUsername, $dbPassword);
            Log::info("Stored credentials for tenant {$database} with username {$dbUsername}");
        } catch (\Exception $e) {
            Log::error('CRITICAL: Failed to store tenant credentials: '.$e->getMessage());
            Log::error("Database: {$database}, Username: {$dbUsername}");
            // Re-throw this as it's critical - we need credentials stored
            throw new Exception('Failed to store tenant credentials. Database created but credentials not saved. Error: '.$e->getMessage());
        }

        if ($databaseCreated && $userCreated) {
            return true;
        }

        if ($databaseCreated && ! $userCreated) {
            Log::warning('Database created but user creation failed. Credentials stored. Tenant may need manual user setup.');

            // Still return true as database exists and credentials are stored
            // Admin can manually create the user if needed
            return true;
        }

        throw new Exception("Failed to create database '{$database}'");
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
                        Log::error('Failed to decrypt tenant password: '.$e->getMessage());
                        // Don't fall back to default - throw error instead
                        throw new Exception("Failed to decrypt tenant database credentials for database: {$databaseName}");
                    }
                } else {
                    // No credentials available - don't use root user
                    Log::error("Tenant credentials missing for database: {$databaseName}");
                    throw new Exception("Tenant database credentials are missing for database: {$databaseName}. Cannot establish connection.");
                }
            } else {
                // No tenant context - don't use root user
                Log::error("No tenant context available for database: {$databaseName}");
                throw new Exception('No tenant context available. Cannot establish database connection.');
            }
        } catch (\Exception $e) {
            // Re-throw if it's already our custom exception
            if (str_contains($e->getMessage(), 'credentials') || str_contains($e->getMessage(), 'tenant')) {
                throw $e;
            }
            // Otherwise log and throw
            Log::error('Could not get tenant context for connection config: '.$e->getMessage());
            throw new Exception('Cannot establish database connection: '.$e->getMessage());
        }

        return $baseConfig;
    }

    /**
     * Generate a unique MySQL username for the tenant
     * Must match cPanel requirements (same prefix as database)
     */
    protected function generateTenantUsername(TenantWithDatabase $tenant): string
    {
        $tenantId = $tenant->getTenantKey();
        $database = $tenant->database()->getName();

        // Extract prefix from database name (e.g., "accountw_" from "accountw_3ca7a9a6-...")
        // This ensures we use the exact same prefix as the database
        $dbPrefix = 'accountw_'; // Default prefix

        // Try to extract prefix from database name
        if (preg_match('/^([a-zA-Z0-9_]+)_/', $database, $matches)) {
            $dbPrefix = $matches[1].'_';
        } else {
            // Fallback: get from config
            $configPrefix = config('tenancy.database.prefix', env('TENANT_DB_PREFIX', 'accountw_'));
            if ($configPrefix) {
                $dbPrefix = str_ends_with($configPrefix, '_') ? $configPrefix : $configPrefix.'_';
            }
        }

        // Generate username: prefix + shortened tenant_id
        // Remove hyphens and use only alphanumeric
        $tenantIdClean = preg_replace('/[^a-zA-Z0-9]/', '', $tenantId);

        // Use first 8-10 characters of tenant ID for uniqueness (after prefix)
        // This keeps username reasonable length while maintaining uniqueness
        $prefixLength = strlen($dbPrefix);
        $maxLength = 32; // cPanel allows longer usernames, but let's keep it reasonable
        $maxTenantIdLength = min($maxLength - $prefixLength, 16); // Use up to 16 chars for tenant ID part

        $tenantIdPart = substr($tenantIdClean, 0, $maxTenantIdLength);
        $username = $dbPrefix.$tenantIdPart;

        Log::info("Generated MySQL username: {$username} (prefix: {$dbPrefix}, tenant ID: {$tenantId}, database: {$database})");

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
     * Generate and store database credentials for an existing tenant
     * This is useful when credentials are missing and need to be auto-generated
     *
     * @throws Exception if credential generation fails
     */
    public function generateCredentialsForTenant(TenantWithDatabase $tenant): void
    {
        $database = $tenant->database()->getName();
        $tenantId = $tenant->getTenantKey();

        Log::info("Generating credentials for existing tenant: {$tenantId}, database: {$database}");

        // Generate unique MySQL user credentials
        $dbUsername = $this->generateTenantUsername($tenant);
        $dbPassword = Str::random(32);

        // Create MySQL user and grant privileges
        $mysqlHost = $this->getMySQLHost();

        try {
            // Create user for localhost
            $this->database()->statement("CREATE USER IF NOT EXISTS '{$dbUsername}'@'{$mysqlHost}' IDENTIFIED BY '{$dbPassword}'");
            Log::info("Created MySQL user '{$dbUsername}'@'{$mysqlHost}'");

            // Grant privileges on the tenant database
            $this->database()->statement("GRANT ALL PRIVILEGES ON `{$database}`.* TO '{$dbUsername}'@'{$mysqlHost}'");
            Log::info("Granted privileges to '{$dbUsername}'@'{$mysqlHost}' on database {$database}");

            // Also create user for % (any host) if needed
            if ($mysqlHost !== '%') {
                try {
                    $this->database()->statement("CREATE USER IF NOT EXISTS '{$dbUsername}'@'%' IDENTIFIED BY '{$dbPassword}'");
                    $this->database()->statement("GRANT ALL PRIVILEGES ON `{$database}`.* TO '{$dbUsername}'@'%'");
                    Log::info("Created MySQL user '{$dbUsername}'@'%' and granted privileges");
                } catch (\Exception $e) {
                    Log::warning('Failed to create user for % host: '.$e->getMessage());
                }
            }

            $this->database()->statement('FLUSH PRIVILEGES');

            // Store credentials
            $this->storeTenantCredentials($tenant, $database, $dbUsername, $dbPassword);

            Log::info("Successfully generated and stored credentials for tenant {$tenantId}");

        } catch (\Exception $e) {
            Log::error("Failed to generate credentials for tenant {$tenantId}: ".$e->getMessage());
            throw new Exception('Failed to generate database credentials for tenant: '.$e->getMessage(), 0, $e);
        }
    }

    /**
     * Store tenant database credentials in the tenant model
     */
    protected function storeTenantCredentials(TenantWithDatabase $tenant, string $database, string $username, string $password): void
    {
        // Encrypt the password before storing
        $encryptedPassword = Crypt::encryptString($password);
        $tenantId = $tenant->getTenantKey();

        Log::info("Attempting to store credentials for tenant ID: {$tenantId}, database: {$database}, username: {$username}");

        // Try multiple approaches to store credentials
        $stored = false;

        // Approach 1: Use central connection if available
        try {
            if (function_exists('tenancy') && method_exists(tenancy(), 'central')) {
                tenancy()->central(function () use ($tenantId, $database, $username, $encryptedPassword) {
                    $updated = \DB::table('tenants')
                        ->where('id', $tenantId)
                        ->update([
                            'db_name' => $database,
                            'db_username' => $username,
                            'db_password' => $encryptedPassword,
                        ]);

                    if ($updated === 0) {
                        throw new Exception("No rows updated for tenant ID: {$tenantId}");
                    }
                });
                $stored = true;
                Log::info("Stored credentials using central connection for tenant: {$tenantId}");
            }
        } catch (\Exception $e) {
            Log::warning('Failed to store using central connection: '.$e->getMessage());
        }

        // Approach 2: Direct database update using default connection
        if (! $stored) {
            try {
                // Get the central connection name
                $centralConnection = config('tenancy.database.central_connection', 'mysql');

                $updated = \DB::connection($centralConnection)
                    ->table('tenants')
                    ->where('id', $tenantId)
                    ->update([
                        'db_name' => $database,
                        'db_username' => $username,
                        'db_password' => $encryptedPassword,
                    ]);

                if ($updated === 0) {
                    throw new Exception("No rows updated for tenant ID: {$tenantId} using direct connection");
                }

                $stored = true;
                Log::info("Stored credentials using direct connection ({$centralConnection}) for tenant: {$tenantId}");
            } catch (\Exception $e) {
                Log::error('Failed to store using direct connection: '.$e->getMessage());
            }
        }

        // Approach 3: Use tenant model update
        if (! $stored) {
            try {
                if (method_exists($tenant, 'update')) {
                    $tenant->update([
                        'db_name' => $database,
                        'db_username' => $username,
                        'db_password' => $encryptedPassword,
                    ]);
                    $stored = true;
                    Log::info("Stored credentials using tenant model update for tenant: {$tenantId}");
                }
            } catch (\Exception $e) {
                Log::error('Failed to store using tenant model: '.$e->getMessage());
            }
        }

        // Also update the in-memory tenant object
        if (method_exists($tenant, 'setAttribute')) {
            $tenant->setAttribute('db_name', $database);
            $tenant->setAttribute('db_username', $username);
            $tenant->setAttribute('db_password', $encryptedPassword);
        }

        if (! $stored) {
            throw new Exception("Failed to store credentials using all available methods for tenant ID: {$tenantId}");
        }

        Log::info("Successfully stored database credentials for tenant: {$database} (ID: {$tenantId})");
    }

    /**
     * Create MySQL user via cPanel API
     */
    protected function createMySQLUserViaCpanelAPI(string $username, string $password, string $database): bool
    {
        try {
            Log::info("Attempting cPanel API MySQL user creation: {$username} for database: {$database}");

            $cpanelUser = env('CPANEL_USERNAME', 'accountwebsoft');
            $apiToken = env('CPANEL_API_TOKEN');
            $cpanelHost = env('CPANEL_HOST', 'account.websoft.sa');
            $cpanelPort = env('CPANEL_PORT', '2083');

            // Step 1: Create MySQL user via cPanel API
            $createUserResponse = Http::withHeaders([
                'Authorization' => "cpanel {$cpanelUser}:{$apiToken}",
            ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute/Mysql/create_user", [
                'name' => $username,
                'password' => $password,
            ]);

            $createUserData = $createUserResponse->json();
            Log::info('cPanel API create_user response: '.json_encode($createUserData));

            if (! isset($createUserData['status']) || $createUserData['status'] !== 1) {
                // Try alternative endpoint
                Log::info('Trying alternative cPanel API endpoint for user creation');
                $createUserResponse2 = Http::withHeaders([
                    'Authorization' => "cpanel {$cpanelUser}:{$apiToken}",
                ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute2", [
                    'cpanel_jsonapi_version' => '2',
                    'cpanel_jsonapi_module' => 'Mysql',
                    'cpanel_jsonapi_func' => 'create_user',
                    'name' => $username,
                    'password' => $password,
                ]);

                $createUserData2 = $createUserResponse2->json();
                Log::info('cPanel API create_user (alternative) response: '.json_encode($createUserData2));

                if (! isset($createUserData2['cpanelresult']['data'][0]['result']) || $createUserData2['cpanelresult']['data'][0]['result'] !== 1) {
                    throw new Exception('cPanel API failed to create MySQL user: '.json_encode($createUserData2));
                }
            }

            Log::info("Successfully created MySQL user via cPanel API: {$username}");

            // Step 2: Grant privileges on database via cPanel API
            $grantResponse = Http::withHeaders([
                'Authorization' => "cpanel {$cpanelUser}:{$apiToken}",
            ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute/Mysql/set_privileges_on_database", [
                'user' => $username,
                'database' => $database,
                'privileges' => 'ALL PRIVILEGES',
            ]);

            $grantData = $grantResponse->json();
            Log::info('cPanel API set_privileges_on_database response: '.json_encode($grantData));

            if (! isset($grantData['status']) || $grantData['status'] !== 1) {
                // Try alternative endpoint
                Log::info('Trying alternative cPanel API endpoint for privileges');
                $grantResponse2 = Http::withHeaders([
                    'Authorization' => "cpanel {$cpanelUser}:{$apiToken}",
                ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute2", [
                    'cpanel_jsonapi_version' => '2',
                    'cpanel_jsonapi_module' => 'Mysql',
                    'cpanel_jsonapi_func' => 'set_privileges_on_database',
                    'user' => $username,
                    'database' => $database,
                    'privileges' => 'ALL PRIVILEGES',
                ]);

                $grantData2 = $grantResponse2->json();
                Log::info('cPanel API set_privileges_on_database (alternative) response: '.json_encode($grantData2));

                if (! isset($grantData2['cpanelresult']['data'][0]['result']) || $grantData2['cpanelresult']['data'][0]['result'] !== 1) {
                    throw new Exception('cPanel API failed to grant privileges: '.json_encode($grantData2));
                }
            }

            Log::info("Successfully granted ALL PRIVILEGES to user {$username} on database {$database} via cPanel API");

            return true;

        } catch (\Exception $e) {
            Log::error('cPanel API MySQL user creation failed: '.$e->getMessage());
            Log::error("Username: {$username}, Database: {$database}");

            return false;
        }
    }

    /**
     * Check if MySQL user exists
     */
    protected function checkUserExists(string $username): bool
    {
        try {
            $result = $this->database()->select(
                'SELECT COUNT(*) as count FROM mysql.user WHERE User = ?',
                [$username]
            );

            return isset($result[0]) && $result[0]->count > 0;
        } catch (\Exception $e) {
            Log::warning('Could not check if user exists: '.$e->getMessage());

            return false;
        }
    }
}

<?php

declare(strict_types=1);

namespace App\Services;


use Illuminate\Database\Connection;
use Illuminate\Support\Facades\DB;
use Stancl\Tenancy\Contracts\TenantDatabaseManager;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Exceptions\NoConnectionSetException;
use App\Exceptions\GeneralException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;


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
        Log::info("Creating database: {$database}");

        // First, check if we have permissions to create databases
        try {
            $this->checkDatabasePermissions();
        } catch (\Exception $e) {
            Log::error("Database permission check failed: " . $e->getMessage());
        }

        // Try direct MySQL first (most reliable)
        try {
            Log::info("Attempting direct MySQL database creation for: {$database}");
            $charset = $this->database()->getConfig('charset');
            $collation = $this->database()->getConfig('collation');
            $result = $this->database()->statement("CREATE DATABASE `{$database}` CHARACTER SET `$charset` COLLATE `$collation`");
            if ($result) {
                Log::info("Successfully created database via direct MySQL: {$database}");
                return true;
            }
        } catch (\Exception $e) {
            Log::warning("Direct MySQL creation failed for {$database}: " . $e->getMessage());
        }

        // If direct MySQL fails, try cPanel API
        if (app()->environment('production') || app()->environment('staging')) {
            try {
                Log::info("Attempting cPanel UAPI database creation for: {$database}");
                
                // Get cPanel credentials from environment or use defaults
                $cpanelUser = env('CPANEL_USERNAME', 'accountwebsoft');
                $apiToken = env('CPANEL_API_TOKEN', 'L89Q36V64ZHU0JVEWLBO6AG71H0S4FTT');
                $cpanelHost = env('CPANEL_HOST', 'account.websoft.sa');
                $cpanelPort = env('CPANEL_PORT', '2087'); // Use WHM port for UAPI

                Log::info("Using cPanel UAPI: {$cpanelHost}:{$cpanelPort} with user: {$cpanelUser}");

                // Use UAPI format (execute2) which is supported
                $response = Http::withHeaders([
                    'Authorization' => "cpanel {$cpanelUser}:{$apiToken}"
                ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute2", [
                    'cpanel_jsonapi_version' => '2',
                    'cpanel_jsonapi_module' => 'Mysql',
                    'cpanel_jsonapi_func' => 'create_database',
                    'name' => $database
                ]);

                $data = $response->json();
                Log::info("cPanel UAPI response for {$database}: " . json_encode($data));

                if (isset($data['cpanelresult']['data'][0]['result']) && $data['cpanelresult']['data'][0]['result'] === 1) {
                    Log::info("Successfully created database via cPanel UAPI: {$database}");
                    return true;
                }

                // Try alternative UAPI endpoint if the first one fails
                $response2 = Http::withHeaders([
                    'Authorization' => "cpanel {$cpanelUser}:{$apiToken}"
                ])->timeout(30)->get("https://{$cpanelHost}:{$cpanelPort}/execute2", [
                    'cpanel_jsonapi_version' => '2',
                    'cpanel_jsonapi_module' => 'Mysql',
                    'cpanel_jsonapi_func' => 'create_database',
                    'name' => $database,
                    'user' => $cpanelUser // Add user parameter
                ]);

                $data2 = $response2->json();
                Log::info("Alternative cPanel UAPI response for {$database}: " . json_encode($data2));

                if (isset($data2['cpanelresult']['data'][0]['result']) && $data2['cpanelresult']['data'][0]['result'] === 1) {
                    Log::info("Successfully created database via alternative cPanel UAPI: {$database}");
                    return true;
                }

                throw new GeneralException(
                    "Failed to create database '{$database}' via cPanel UAPI. Response: " . $response->body()
                );
            } catch (\Exception $e) {
                Log::error("cPanel UAPI creation failed for {$database}: " . $e->getMessage());
                
                // Final fallback: try to create database user and grant permissions
                try {
                    Log::info("Attempting fallback database creation for: {$database}");
                    
                    // Try to create database with different approach
                    $fallbackResult = $this->database()->statement("CREATE DATABASE IF NOT EXISTS `{$database}`");
                    if ($fallbackResult) {
                        Log::info("Successfully created database via fallback method: {$database}");
                        return true;
                    }
                } catch (\Exception $fallbackException) {
                    Log::error("Fallback database creation also failed for {$database}: " . $fallbackException->getMessage());
                }
                
                throw new GeneralException(
                    "Exception while creating database '{$database}' (cPanel UAPI): " . $e->getMessage(),
                    0,
                    $e
                );
            }
        }

        // For local environment, use direct MySQL
        if (app()->environment('local')) {
            Log::info("Creating database in local environment: {$database}");
            $charset = $this->database()->getConfig('charset');
            $collation = $this->database()->getConfig('collation');
            return $this->database()->statement("CREATE DATABASE `{$database}` CHARACTER SET `$charset` COLLATE `$collation`");
        }

        throw new GeneralException("Unknown environment: cannot create database for '{$database}'.");
    }

    /**
     * Check if the current database user has permissions to create databases
     */
    protected function checkDatabasePermissions(): void
    {
        try {
            // Check if we can create databases
            $result = $this->database()->select("SHOW GRANTS FOR CURRENT_USER()");
            Log::info("Current user grants: " . json_encode($result));
            
            // Check if we have CREATE privilege
            $hasCreatePrivilege = false;
            foreach ($result as $grant) {
                $grantText = $grant->{'Grants for ' . env('DB_USERNAME', 'accountwebsoft') . '@' . env('DB_HOST', '127.0.0.1')};
                if (strpos($grantText, 'ALL PRIVILEGES ON *.*') !== false || 
                    strpos($grantText, 'CREATE ON *.*') !== false) {
                    $hasCreatePrivilege = true;
                    break;
                }
            }
            
            if (!$hasCreatePrivilege) {
                Log::warning("Current database user does not have CREATE privilege on *.*");
            } else {
                Log::info("Current database user has CREATE privilege");
            }
        } catch (\Exception $e) {
            Log::warning("Could not check database permissions: " . $e->getMessage());
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
                throw new GeneralException("Failed to parse Plesk XML response.");
            }

            $json = json_encode($xml);
            $array = json_decode($json, true);
            if (!is_array($array)) {
                throw new GeneralException("Failed to convert Plesk XML to array.");
            }

            return $array;
        } catch (\Exception $e) {
            throw new GeneralException(
                "Exception while parsing Plesk response: " . $e->getMessage(),
                0,
                $e
            );
        }
    }


















    public function deleteDatabase(TenantWithDatabase $tenant): bool
    {
        return $this->database()->statement("DROP DATABASE `{$tenant->database()->getName()}`");
    }

    public function databaseExists(string $name): bool
    {
        return (bool) $this->database()->select("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '$name'");
    }

    public function makeConnectionConfig(array $baseConfig, string $databaseName): array
    {
        $baseConfig['database'] = $databaseName;

        return $baseConfig;
    }
}

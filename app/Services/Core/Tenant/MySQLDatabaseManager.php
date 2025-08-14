<?php

declare(strict_types=1);

namespace App\Services\Core\Tenant;


use Illuminate\Database\Connection;
use Illuminate\Support\Facades\DB;
use Stancl\Tenancy\Contracts\TenantDatabaseManager;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Exceptions\NoConnectionSetException;
use App\Exceptions\GeneralException;

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
    // Generate a valid database name
    $database = 'tenant_' . str_replace('-', '_', $tenant->database()->getName());

    try {
        // Use Plesk XML-RPC API
        $result = $this->callPleskApi('database', 'add-db', [
            'domain' => $this->domain ?? config('tenancy.plesk.domain', 'accounting.websoft.sa'),
            'name' => $database,
            'type' => 'mysql',
            'server' => 'localhost'
        ]);


        return $result;
        if ($result && isset($result['status']) && $result['status'] === 'ok') {
            return true; // success
        }

        // If Plesk API returns error, throw exception
        throw new GeneralException("Failed to create database '{$database}' via Plesk API.", 0, null);

    } catch (\Exception $e) {
        // Wrap any other exception in your custom exception
        throw new GeneralException(
            "Exception while creating database '{$database}': " . $e->getMessage(),
            0,
            $e
        );
    }
}
   
    public function callPleskApi(string $method, string $action, array $params = []): ?array
    {
        try {
            $pleskHost = config('tenancy.plesk.host', 'accounting.websoft.sa');
            $pleskPort = config('tenancy.plesk.port', 8443);
            $pleskUsername = config('tenancy.plesk.username', 'accountwebsoft');
            $pleskPassword = config('tenancy.plesk.password', 'HsB}{ezUScB$');

            if (!$pleskUsername || !$pleskPassword) {
                // Log::error('Plesk credentials not configured');
                return null;
            }

            $xml = $this->buildPleskXml($method, $action, $params);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, "https://{$pleskHost}:{$pleskPort}/enterprise/control/agent.php");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: text/xml',
                'HTTP_AUTH_LOGIN: ' . $pleskUsername,
                'HTTP_AUTH_PASSWD: ' . $pleskPassword
            ]);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Consider enabling in production with proper SSL cert
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);

            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            if ($httpCode === 200 && $response) {
                $result = $this->parsePleskResponse($response);
                // Log::debug("Plesk API response", ['method' => $method, 'action' => $action, 'result' => $result]);
                return $result;
            }

            // Log::error("Plesk API call failed", [
            //     'http_code' => $httpCode,
            //     'response' => $response,
            //     'method' => $method,
            //     'action' => $action
            // ]);
            return null;

        } catch (\Exception $e) {
            // Log::error("Exception in Plesk API call: {$e->getMessage()}", [
            //     'method' => $method,
            //     'action' => $action,
            //     'trace' => $e->getTraceAsString()
            // ]);
            return null;
        }
    }

    /**
     * Build Plesk XML request.
     *
     * @param string $method
     * @param string $action
     * @param array $params
     * @return string
     */
    public function buildPleskXml(string $method, string $action, array $params = []): string
    {
        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<packet version="1.6.9.1">'; // Match the version from the error log
        $xml .= "<{$method}>";
        $xml .= "<{$action}>";

        // Add required parameters for database creation
        $xml .= "<webspace><name>{$params['domain']}</name></webspace>";
        $xml .= "<name>{$params['name']}</name>";
        $xml .= "<type>{$params['type']}</type>";
        if (isset($params['server'])) {
            $xml .= "<server>{$params['server']}</server>";
        }

        $xml .= "</{$action}>";
        $xml .= "</{$method}>";
        $xml .= '</packet>';

        return $xml;
    }

    /**
     * Parse Plesk XML response.
     *
     * @param string $response
     * @return array|null
     */
    public function parsePleskResponse(string $response): ?array
    {
        try {
            $xml = simplexml_load_string($response);
            if ($xml === false) {
                // Log::error("Failed to parse Plesk XML response", ['response' => $response]);
                return null;
            }

            // Convert XML to array
            $json = json_encode($xml);
            return json_decode($json, true);

        } catch (\Exception $e) {
            // Log::error("Failed to parse Plesk response: {$e->getMessage()}", [
            //     'response' => $response,
            //     'trace' => $e->getTraceAsString()
            // ]);
            return null;
        }
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

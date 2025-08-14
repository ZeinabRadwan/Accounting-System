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
    $database = 'tenant_' . str_replace('-', '_', $tenant->database()->getName());

    try {
        // Step 1: Get webspace ID from domain name
        $domain = config('tenancy.plesk.domain', 'accounting.websoft.sa');

        $webspaceInfo = $this->callPleskApi('webspace', 'get', [
            'name' => $domain
        ]);

        $webspaceId = 3;

        // if (!$webspaceId) {
        //     throw new GeneralException("Failed to fetch webspace ID for '{$domain}' from Plesk.");
        // }

        // Step 2: Create database linked to that webspace ID
        $result = $this->callPleskApi('database', 'add-db', [
            'webspace_id' => $webspaceId,
            'name'        => $database,
            'type'        => 'mysql',
            'server_id'   => 1 // 0 = default MySQL server in Plesk
        ]);

        if (
            isset($result['database']['add-db']['result']['status']) &&
            $result['database']['add-db']['result']['status'] === 'ok'
        ) {
            return true;
        }

        throw new GeneralException(
            "Failed to create database '{$database}' via Plesk API. Response: " . json_encode($result)
        );

    } catch (\Exception $e) {
        throw new GeneralException(
            "Exception while creating database '{$database}': " . $e->getMessage(),
            0,
            $e
        );
    }
}

   
public function callPleskApi(string $method, string $action, array $params = []): array
{
    try {
        $pleskHost = config('tenancy.plesk.host', 'accounting.websoft.sa');
        $pleskPort = config('tenancy.plesk.port', 8443);
        $pleskUsername = config('tenancy.plesk.username', 'accountwebsoft');
        $pleskPassword = config('tenancy.plesk.password', 'HsB}{ezUScB$');

        if (!$pleskUsername || !$pleskPassword) {
            throw new GeneralException('Plesk credentials are not configured.');
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
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode !== 200 || !$response) {
            throw new GeneralException("Plesk API call failed. HTTP code: {$httpCode}");
        }

        $result = $this->parsePleskResponse($response);
        if (!$result) {
            throw new GeneralException("Failed to parse Plesk API response.");
        }

        return $result;

    } catch (\Exception $e) {
        throw new GeneralException(
            "Exception in Plesk API call '{$method}/{$action}': " . $e->getMessage(),
            0,
            $e
        );
    }
}

  
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

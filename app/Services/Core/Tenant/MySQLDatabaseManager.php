<?php

declare(strict_types=1);

namespace App\Services\Core\Tenant;


use Illuminate\Database\Connection;
use Illuminate\Support\Facades\DB;
use Stancl\Tenancy\Contracts\TenantDatabaseManager;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Exceptions\NoConnectionSetException;
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

    public function createDatabase(TenantWithDatabase $tenant): bool
    {
        try {
            $database = 'tenant_' . str_replace('-', '_', $tenant->database()->getName()); // Ensure valid database name
            
            // Use Plesk XML-RPC API
            $result = $this->callPleskApi('database', 'add', [
                'domain' => $this->domain ?? config('tenancy.plesk.domain', 'accounting.websoft.sa'),
                'name' => $database,
                'type' => 'mysql'
            ]);
            
            if ($result && isset($result['status']) && $result['status'] === 'ok') {
                Log::info("Successfully created database: {$database}");
                return true;
            }
            
            Log::error("Failed to create database via Plesk API", [
                'database' => $database,
                'result' => $result
            ]);
            return false;
            
        } catch (\Exception $e) {
            Log::error("Exception while creating database: {$e->getMessage()}", [
                'database' => $database,
                'trace' => $e->getTraceAsString()
            ]);
            return false;
        }
    }

     /**
     * Call Plesk XML-RPC API
     */
    protected function callPleskApi(string $method, string $action, array $params = []): ?array
    {
       
        try {
            $pleskHost = config('tenancy.plesk.host', 'accounting.websoft.sa');
            $pleskPort = config('tenancy.plesk.port', 8443);
            $pleskUsername = config('tenancy.plesk.username', 'accountwebsoft');
            $pleskPassword = config('tenancy.plesk.password', 'HsB}{ezUScB$');
            
            if (!$pleskUsername || !$pleskPassword) {
                Log::error('Plesk credentials not configured');
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
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            if ($httpCode === 200 && $response) {
                return $this->parsePleskResponse($response);
            }
            
            Log::error("Plesk API call failed", [
                'http_code' => $httpCode,
                'response' => $response
            ]);
            
            return null;
            
        } catch (\Exception $e) {
            Log::error("Exception in Plesk API call: " . $e->getMessage());
            return null;
        }
    }
    
    /**
     * Build Plesk XML request
     */
    protected function buildPleskXml(string $method, string $action, array $params = []): string
    {
        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<packet>';
        $xml .= "<{$method}>";
        $xml .= "<{$action}>";
        
        foreach ($params as $key => $value) {
            $xml .= "<{$key}>{$value}</{$key}>";
        }
        
        $xml .= "</{$action}>";
        $xml .= "</{$method}>";
        $xml .= '</packet>';
        
        return $xml;
    }
    
    /**
     * Parse Plesk XML response
     */
    protected function parsePleskResponse(string $response): ?array
    {
        try {
            $xml = simplexml_load_string($response);
            if ($xml === false) {
                return null;
            }
            
            // Convert XML to array
            $json = json_encode($xml);
            return json_decode($json, true);
            
        } catch (\Exception $e) {
            Log::error("Failed to parse Plesk response: " . $e->getMessage());
            return null;
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

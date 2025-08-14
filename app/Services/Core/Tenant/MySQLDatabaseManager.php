<?php

declare(strict_types=1);

namespace App\Services\Core\Tenant;


use Illuminate\Database\Connection;
use Illuminate\Support\Facades\DB;
use Stancl\Tenancy\Contracts\TenantDatabaseManager;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Exceptions\NoConnectionSetException;
use Symfony\Component\Process\Process;
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
        try {
            $database = $tenant->database()->getName();
            
            // Use Plesk command to create database
            $command = [
                'plesk', 'bin', 'database', '--create', $database,
                '-domain', $this->domain ?? config('tenancy.plesk.domain', 'accounting.websoft.sa'),
                '-type', 'mysql',
                '-server', 'localhost'
            ];
            
            $process = new Process($command);
            $process->setTimeout(60); // 60 seconds timeout
            $process->run();
            
            if ($process->isSuccessful()) {
                Log::info("Database created successfully via Plesk: {$database}");
                return true;
            } else {
                Log::error("Failed to create database via Plesk: {$database}", [
                    'error' => $process->getErrorOutput(),
                    'output' => $process->getOutput()
                ]);
                return false;
            }
            
        } catch (\Exception $e) {
            Log::error("Exception while creating database via Plesk: " . $e->getMessage(), [
                'tenant' => $tenant->id,
                'database' => $tenant->database()->getName()
            ]);
            return false;
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

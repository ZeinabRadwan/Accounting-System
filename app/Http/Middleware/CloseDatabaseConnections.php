<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class CloseDatabaseConnections
{
    /**
     * Handle an incoming request.
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next): Response
    {
        return $next($request);
    }

    /**
     * Handle tasks after the response has been sent to the browser.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Symfony\Component\HttpFoundation\Response  $response
     */
    public function terminate($request, $response): void
    {
        // Close all database connections after response is sent
        // This prevents connection leaks in multi-tenant applications
        $this->closeConnections();
    }

    /**
     * Close all active database connections.
     */
    protected function closeConnections(): void
    {
        try {
            // Close tenant connection first (if tenancy is active)
            try {
                if (DB::connection()->getName() === 'tenant') {
                    DB::connection('tenant')->disconnect();
                }
            } catch (\Exception $e) {
                // Ignore if tenant connection doesn't exist
            }

            // Get all registered connections and close them
            $connections = config('database.connections', []);

            foreach (array_keys($connections) as $connectionName) {
                try {
                    // Skip tenant connection as it's handled above
                    if ($connectionName === 'tenant') {
                        continue;
                    }

                    $connection = DB::connection($connectionName);
                    if ($connection && method_exists($connection, 'disconnect')) {
                        $connection->disconnect();
                    }
                } catch (\Exception $e) {
                    // Ignore errors when disconnecting (connection might not exist)
                    continue;
                }
            }

            // Also ensure default connection is closed
            try {
                $defaultConnection = DB::getDefaultConnection();
                if ($defaultConnection && $defaultConnection !== 'tenant') {
                    DB::disconnect($defaultConnection);
                }
            } catch (\Exception $e) {
                // Ignore errors
            }
        } catch (\Exception $e) {
            // Ignore any errors during connection cleanup
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class ErrorLogController extends Controller
{
    /**
     * Log frontend errors
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logFrontendError(Request $request)
    {
        try {
            $errorData = $request->all();
            
            // Log the frontend error with context
            Log::error('Frontend Error', [
                'context' => $errorData['context'] ?? 'Unknown',
                'timestamp' => $errorData['timestamp'] ?? now()->toISOString(),
                'url' => $errorData['url'] ?? 'Unknown',
                'user_agent' => $errorData['user_agent'] ?? 'Unknown',
                'user_id' => $errorData['user_id'] ?? null,
                'tenant_id' => $errorData['tenant_id'] ?? null,
                'error' => $errorData['error'] ?? null,
                'response' => $errorData['response'] ?? null,
                'request' => $errorData['request'] ?? null,
                'ip' => $request->ip(),
                'server_timestamp' => now()->toISOString()
            ]);

            return $this->responseWithSuccess('Error logged successfully');
        } catch (Exception $e) {
            Log::error('Failed to log frontend error: ' . $e->getMessage());
            return $this->responseWithError('Failed to log error');
        }
    }
}

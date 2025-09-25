<?php

namespace App\Traits;

use Illuminate\Support\Facades\Log;

trait ApiResponse
{
    protected function responseWithSuccess($message = '', $data = [], $code = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    protected function responseWithError($message = '', $data = [], $code = 400)
    {
        // Log the error with context
        Log::error('API Error Response', [
            'message' => $message,
            'code' => $code,
            'data' => $data,
            'url' => request()->fullUrl(),
            'method' => request()->method(),
            'user_id' => auth()->id(),
            'ip' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'timestamp' => now()->toISOString()
        ]);

        return response()->json([
            'error' => true,
            'message' => $message,
            'data' => $data,
        ], $code);
    }
}

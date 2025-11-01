<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Database\QueryException;
use Throwable;

class Handler extends ExceptionHandler
{
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    public function render($request, Throwable $exception)
    {
        // Handle database connection errors gracefully
        if ($exception instanceof QueryException) {
            $errorMessage = $exception->getMessage();
            
            // Check if it's a connection refused error (2002)
            if (strpos($errorMessage, '2002') !== false || 
                strpos($errorMessage, 'actively refused') !== false ||
                strpos($errorMessage, 'Connection refused') !== false) {
                
                // For API requests, return JSON response
                if ($request->expectsJson() || $request->is('api/*')) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Database connection failed. Please ensure MySQL is running.',
                        'error' => 'Database service unavailable',
                        'hint' => 'Make sure MySQL service is started in XAMPP Control Panel'
                    ], 503);
                }
                
                // For web requests, return a simple HTML response
                return response(
                    '<!DOCTYPE html>
<html>
<head>
    <title>Database Service Unavailable</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        h1 { color: #e74c3c; }
        p { color: #555; font-size: 18px; }
    </style>
</head>
<body>
    <h1>503 - Database Service Unavailable</h1>
    <p>Database connection failed. Please ensure MySQL is running in XAMPP Control Panel.</p>
</body>
</html>',
                    503
                )->header('Content-Type', 'text/html');
            }
        }
        
        return parent::render($request, $exception);
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PermissionMiddleware
{
    /**
     * Usage examples:
     *  - permission:allow_invoice_cancel
     *  - permission:allow_price2|allow_price3   (any)
     *  - permission:allow_item_discount&allow_invoice_discount   (all)
     */
    public function handle(Request $request, Closure $next, string $expression): Response
    {
        $user = $request->user();
        if (! $user) {
            abort(403);
        }

        // Evaluate & (all) first, then | (any)
        if (str_contains($expression, '&')) {
            $keys = array_filter(explode('&', $expression));
            if (! $user->hasAllPermissions($keys)) {
                abort(403);
            }
        } elseif (str_contains($expression, '|')) {
            $keys = array_filter(explode('|', $expression));
            if (! $user->hasAnyPermission($keys)) {
                abort(403);
            }
        } else {
            if (! $user->hasPermission($expression)) {
                abort(403);
            }
        }

        return $next($request);
    }
}


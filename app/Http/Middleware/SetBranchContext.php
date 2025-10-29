<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class SetBranchContext
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Get current user
        $user = Auth::user();
        
        if (!$user) {
            return $next($request);
        }

        // Get branch from session or user preference
        $branchId = Session::get('current_branch_id');
        
        if (!$branchId) {
            // Try to get from user's default branch
            $branchId = $user->default_branch_id;
            
            if (!$branchId && method_exists($user, 'branches')) {
                try {
                    // Get first branch user has access to
                    $branch = $user->branches()->active()->first();
                    $branchId = $branch ? $branch->id : null;
                } catch (\Exception $e) {
                    // If relationship fails, ignore
                    \Log::warning('Failed to get user branches: ' . $e->getMessage());
                    $branchId = null;
                }
            }
            
            // Store in session for future requests
            if ($branchId) {
                Session::put('current_branch_id', $branchId);
            }
        }

        // Set branch in app context
        if ($branchId) {
            app()->instance('current_branch_id', $branchId);
        }

        return $next($request);
    }
}


<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class UserBranchController extends Controller
{
    /**
     * Define middleware
     */
    public function __construct()
    {
        $this->middleware('can:branches-assign-users', ['only' => ['store', 'update', 'destroy']]);
    }

    /**
     * Get users assigned to a specific branch
     */
    public function branchUsers($branchId)
    {
        $user = Auth::user();
        $branch = Branch::findOrFail($branchId);

        // Authorization: super admin (account_role === 1) can view; others need to belong to branch or have list permission
        if ((int) $user->account_role !== 1) {
            $belongs = $user->hasAccessToBranch($branchId);
            if (!$belongs && !$user->hasPermissionTo('branches-list')) {
                return response()->json([
                    'message' => 'You do not have permission to view this information.'
                ], 403);
            }
        }

        // Get all users assigned to this branch
        $branchUsers = DB::table('branch_user')
            ->join('users', 'branch_user.user_id', '=', 'users.id')
            ->where('branch_user.branch_id', $branchId)
            ->where('users.is_active', true)
            ->select('users.id', 'users.name', 'users.email', 'branch_user.created_at')
            ->get();

        return response()->json($branchUsers);
    }

    /**
     * Get branches assigned to a specific user
     */
    public function userBranches($userId)
    {
        $currentUser = Auth::user();

        // Super admin can view any; others only self
        if ((int) $currentUser->account_role !== 1 && $currentUser->id != $userId) {
            return response()->json([
                'message' => 'You can only view your own branch assignments.'
            ], 403);
        }

        // If super admin, return all active branches
        if ((int) $currentUser->account_role === 1) {
            $userBranches = DB::table('branches')
                ->whereNull('deleted_at')
                ->where('is_active', true)
                ->select('id', 'name', 'slug', 'created_at')
                ->get();
        } else {
            // Get all branches assigned to this user
            $userBranches = DB::table('branch_user')
                ->join('branches', 'branch_user.branch_id', '=', 'branches.id')
                ->where('branch_user.user_id', $userId)
                ->select('branches.id', 'branches.name', 'branches.slug', 'branch_user.created_at')
                ->get();
        }

        return response()->json($userBranches);
    }

    /**
     * Assign a user to a branch
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'branch_id' => 'required|exists:branches,id',
        ]);

        $currentUser = Auth::user();
        $targetBranchId = (int) $request->branch_id;

        // Permission rules:
        // - Super admin (account_role === 1): can assign to any branch
        // - Normal users: can assign only to branches they belong to
        if ($currentUser->account_role !== 1) {
            if (!$currentUser->hasAccessToBranch($targetBranchId)) {
                return response()->json([
                    'message' => 'You can only assign users to branches you belong to.'
                ], 403);
            }
        }

        // Prevent duplicate assignment
        $existing = DB::table('branch_user')
            ->where('user_id', $request->user_id)
            ->where('branch_id', $request->branch_id)
            ->first();

        if ($existing) {
            return response()->json([
                'message' => 'User is already assigned to this branch.'
            ], 422);
        }

        // Create assignment (no role)
        DB::table('branch_user')->insert([
            'user_id' => $request->user_id,
            'branch_id' => $request->branch_id,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json([
            'message' => 'User assigned to branch successfully'
        ], 201);
    }

    /**
     * Update a user's role in a branch
     */
    public function update(Request $request, $userId, $branchId)
    {
        // No branch-level role to update; return 404
        return response()->json([
            'message' => 'Nothing to update.'
        ], 404);
    }

    /**
     * Remove a user from a branch
     */
    public function destroy($userId, $branchId)
    {
        // Check if assignment exists
        $existing = DB::table('branch_user')
            ->where('user_id', $userId)
            ->where('branch_id', $branchId)
            ->first();

        if (!$existing) {
            return response()->json([
                'message' => 'User is not assigned to this branch.'
            ], 404);
        }

        // Delete assignment
        DB::table('branch_user')
            ->where('user_id', $userId)
            ->where('branch_id', $branchId)
            ->delete();

        return response()->json([
            'message' => 'User removed from branch successfully'
        ]);
    }

    /**
     * Set a branch as the user's default branch
     */
    public function setDefaultBranch(Request $request)
    {
        $request->validate([
            'branch_id' => 'required|exists:branches,id',
        ]);

        $user = Auth::user();
        $branch = Branch::findOrFail($request->branch_id);
      

        // Check if user has access to this branch (skip for super admin)
        if ((int) $user->account_role !== 1) {
            if (method_exists($user, 'branches') && !$user->branches->contains($branch)) {
                return response()->json([
                    'message' => 'You do not have access to this branch.'
                ], 403);
            }
        }

        // Update default branch
        $user->update([
            'default_branch_id' => $branch->id
        ]);

        // Also update current branch in session
        Session::put('current_branch_id', $branch->id);

        return response()->json([
            'message' => 'Default branch updated successfully'
        ]);
    }
}


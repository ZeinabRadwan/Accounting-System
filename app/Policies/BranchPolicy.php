<?php

namespace App\Policies;

use App\Domain\Branch\Models\Branch;
use App\Models\User;

class BranchPolicy
{
    public function view(?User $user, Branch $branch): bool
    {
        if (! $user) {
            return false;
        }

        if ($user->canAccessAdminPanel()) {
            return true;
        }

        // Sales can only access their assigned branch
        return (int) $user->branch_id === (int) $branch->id;
    }

    public function update(User $user, Branch $branch): bool
    {
        return $user->canAccessAdminPanel();
    }

    public function viewAny(User $user): bool
    {
        return $user->canAccessAdminPanel();
    }
}

<?php

namespace App\Observers;

use App\Models\AnalyticalAccount;

class AnalyticalAccountObserver
{
    /**
     * Handle the AnalyticalAccount "deleting" event.
     * Prevent deletion if the analytical account is used in journal entries.
     */
    public function deleting(AnalyticalAccount $analyticalAccount): void
    {
        if (! $analyticalAccount->canDelete()) {
            $reason = $analyticalAccount->getDeletionBlockReason();
            throw new \Exception($reason ?? 'This analytical account cannot be deleted.');
        }
    }
}

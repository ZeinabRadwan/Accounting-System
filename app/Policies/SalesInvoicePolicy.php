<?php

namespace App\Policies;

use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Settings\DailyVisibility\Models\DailyVisibleInvoiceSet;
use App\Models\User;
use Carbon\Carbon;

class SalesInvoicePolicy
{
    public function view(User $user, SalesInvoice $invoice): bool
    {
        if ($user->bypassesInvoiceVisibility()) {
            return true;
        }

        // Admin + Sales: only invoices included in today's daily visibility set.
        if (! $invoice->visible_for_sales) {
            return false;
        }

        if (! $invoice->daily_visible_invoice_set_id) {
            return false;
        }

        if ($user->isSales() && (int) $user->branch_id !== (int) $invoice->branch_id) {
            return false;
        }

        $today = Carbon::now()->startOfDay()->toDateString();
        $set = DailyVisibleInvoiceSet::query()->whereKey($invoice->daily_visible_invoice_set_id)->first();

        return $set?->business_date?->toDateString() === $today;
    }
}

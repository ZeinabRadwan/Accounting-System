<?php

namespace App\Domain\Settings\DailyVisibility\Services;

use App\Domain\Settings\DailyVisibility\Models\DailyVisibilitySetting;
use App\Domain\Settings\DailyVisibility\Models\DailyVisibleInvoiceSet;
use App\Domain\Settings\DailyVisibility\Models\DailyVisibleInvoiceSetItem;
use App\Domain\Sales\Models\SalesInvoice;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use InvalidArgumentException;

class DailyInvoiceVisibilityService
{
    public function getOrGenerateTodaySet(int $branchId, ?Carbon $date = null): DailyVisibleInvoiceSet
    {
        $date = $date?->copy()->startOfDay() ?? now()->startOfDay();

        $existing = DailyVisibleInvoiceSet::query()
            ->where('branch_id', $branchId)
            ->whereDate('business_date', $date->toDateString())
            ->first();
        if ($existing) {
            return $existing->load('items');
        }

        $setting = DailyVisibilitySetting::query()->where('branch_id', $branchId)->first();
        if (! $setting || ! $setting->is_enabled) {
            // Create empty finalized set to respect "no auto-generate later"
            return DB::transaction(function () use ($branchId, $date) {
                return DailyVisibleInvoiceSet::create([
                    'branch_id' => $branchId,
                    'business_date' => $date->toDateString(),
                    'target_limit' => 0,
                    'actual_total' => 0,
                    'status' => 'finalized',
                    'generated_at' => now(),
                    'finalized_at' => now(),
                ]);
            });
        }

        return $this->generateForDate($branchId, $date, (float) $setting->daily_limit);
    }

    public function generateForDate(int $branchId, Carbon $date, float $limit): DailyVisibleInvoiceSet
    {
        return DB::transaction(function () use ($branchId, $date, $limit) {
            $exists = DailyVisibleInvoiceSet::query()
                ->where('branch_id', $branchId)
                ->whereDate('business_date', $date->toDateString())
                ->lockForUpdate()
                ->first();
            if ($exists && $exists->status === 'finalized') {
                return $exists->load('items');
            }

            $set = DailyVisibleInvoiceSet::create([
                'branch_id' => $branchId,
                'business_date' => $date->toDateString(),
                'target_limit' => $limit,
                'actual_total' => 0,
                'status' => 'draft',
                'generated_at' => now(),
            ]);

            // Get active invoices for the date (ignore cancelled)
            $invoices = SalesInvoice::query()
                ->where('branch_id', $branchId)
                ->whereDate('created_at', $date->toDateString())
                ->where('is_cancelled', false)
                ->orderBy('id') // deterministic order
                ->get(['id','total']);

            // Choose closest sum <= limit
            $selectedIds = $this->selectClosestToLimit($invoices, $limit);
            $actualTotal = (float) SalesInvoice::query()->whereIn('id', $selectedIds)->sum('total');

            // Persist items and flags
            foreach ($selectedIds as $sid) {
                DailyVisibleInvoiceSetItem::create([
                    'daily_visible_invoice_set_id' => $set->id,
                    'sales_invoice_id' => $sid,
                ]);
            }

            // Mark visibility: selected true, others false (for that date+branch)
            SalesInvoice::query()
                ->where('branch_id', $branchId)
                ->whereDate('created_at', $date->toDateString())
                ->update([
                    'visible_for_sales' => false,
                    'daily_visible_invoice_set_id' => null,
                ]);

            if (! empty($selectedIds)) {
                SalesInvoice::query()
                    ->whereIn('id', $selectedIds)
                    ->update([
                        'visible_for_sales' => true,
                        'daily_visible_invoice_set_id' => $set->id,
                    ]);
            }

            $set->actual_total = $actualTotal;
            $set->status = 'finalized';
            $set->finalized_at = now();
            $set->save();

            return $set->load('items');
        });
    }

    public function regenerateToday(int $branchId, ?Carbon $date = null): DailyVisibleInvoiceSet
    {
        $date = $date?->copy()->startOfDay() ?? now()->startOfDay();
        $setting = DailyVisibilitySetting::query()->where('branch_id', $branchId)->first();
        if (! $setting || ! $setting->is_enabled) {
            throw new InvalidArgumentException('Daily visibility is disabled for this branch.');
        }

        return DB::transaction(function () use ($branchId, $date, $setting) {
            // Delete previous set + reset flags for today/branch
            if ($prev = DailyVisibleInvoiceSet::query()
                ->where('branch_id', $branchId)
                ->whereDate('business_date', $date->toDateString())
                ->first()) {
                DailyVisibleInvoiceSetItem::query()->where('daily_visible_invoice_set_id', $prev->id)->delete();
                $prev->delete();
            }
            SalesInvoice::query()
                ->where('branch_id', $branchId)
                ->whereDate('created_at', $date->toDateString())
                ->update(['visible_for_sales' => false, 'daily_visible_invoice_set_id' => null]);

            return $this->generateForDate($branchId, $date, (float) $setting->daily_limit);
        });
    }

    /**
     * Deterministic subset selection as close as possible to limit.
     * Pseudo-polynomial DP using integer cents with pruning.
     *
     * @param Collection<int, \App\Domain\Sales\Models\SalesInvoice> $invoices
     * @return array<int> selected invoice IDs
     */
    protected function selectClosestToLimit(Collection $invoices, float $limit): array
    {
        $values = $invoices->map(fn($i)=>[(int) round(((float)$i->total)*100), (int)$i->id])->values()->all();
        $limitCents = (int) round($limit * 100);

        // DP: map sum => last index used
        $dp = [0 => null];
        $prev = [];

        foreach ($values as $idx => [$val, $id]) {
            $cur = $dp; // snapshot
            foreach ($cur as $sum => $from) {
                $new = $sum + $val;
                if ($new <= $limitCents && ! array_key_exists($new, $dp)) {
                    $dp[$new] = $idx; // store index used to reach new sum
                    $prev[$new] = $sum;
                }
            }
        }

        if (empty($dp)) {
            return [];
        }
        $best = max(array_keys($dp));
        // Reconstruct chosen IDs
        $chosen = [];
        while ($best !== 0 && isset($prev[$best])) {
            $idx = $dp[$best];
            if ($idx === null) {
                break;
            }
            $chosen[] = $values[$idx][1];
            $best = $prev[$best];
        }

        // Deterministic order by invoice id ascending
        sort($chosen);
        return $chosen;
    }
}


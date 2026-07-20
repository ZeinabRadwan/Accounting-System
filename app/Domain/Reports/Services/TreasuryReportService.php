<?php

namespace App\Domain\Reports\Services;

use App\Domain\Treasury\Services\TreasuryService;
use Illuminate\Support\Collection;

class TreasuryReportService
{
    public function __construct(private readonly TreasuryService $treasuryService)
    {
    }

    public function dataset(): Collection
    {
        return $this->treasuryService->reportRows()->map(function ($row) {
            return (object) [
                'id' => $row->id,
                'name' => $row->name,
                'payment_method' => $row->payment_method,
                'current_balance' => (float) $row->current_balance,
                'total_income' => (float) ($row->total_income ?? 0),
                'total_expenses' => (float) ($row->total_expenses ?? 0),
                'transactions_count' => (int) ($row->transactions_count ?? 0),
                'is_active' => (bool) $row->is_active,
            ];
        });
    }
}

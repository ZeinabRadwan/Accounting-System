<?php

namespace App\Domain\Reports\Services;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class CustomerReportService
{
    public function dataset(?int $branchId = null, ?int $customerId = null, ?string $dateFrom = null, ?string $dateTo = null, int $perPage = 25): LengthAwarePaginator
    {
        $q = DB::table('sales_invoices as inv')
            ->leftJoin('customers as c', 'c.id', '=', 'inv.customer_id')
            ->selectRaw("inv.customer_id, COALESCE(c.name, 'Walk-in') as customer_name, COALESCE(c.phone, 'N/A') as customer_phone, COUNT(*) as invoices, SUM(inv.total) as total, SUM(inv.paid_amount) as paid, SUM(inv.remaining_amount) as remaining")
            ->when($branchId, fn($qq)=>$qq->where('inv.branch_id', $branchId))
            ->when($customerId, fn($qq)=>$qq->where('inv.customer_id', $customerId))
            ->when($dateFrom, fn($qq)=>$qq->whereDate('inv.created_at', '>=', $dateFrom))
            ->when($dateTo, fn($qq)=>$qq->whereDate('inv.created_at', '<=', $dateTo))
            ->groupBy('inv.customer_id','c.name','c.phone')
            ->orderBy('customer_name');

        return $q->paginate($perPage);
    }
}


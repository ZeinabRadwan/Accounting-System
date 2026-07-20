<?php

namespace App\Domain\Reports\Services;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class ProfitReportService
{
    public function dataset(?int $branchId = null, ?int $productId = null, ?string $dateFrom = null, ?string $dateTo = null, int $perPage = 25): LengthAwarePaginator
    {
        // Revenue by product
        $revenue = DB::table('sales_invoice_items as i')
            ->join('sales_invoices as inv', 'inv.id', '=', 'i.sales_invoice_id')
            ->selectRaw('i.product_id, SUM(i.line_total) as revenue')
            ->when($branchId, fn($qq)=>$qq->where('inv.branch_id', $branchId))
            ->when($productId, fn($qq)=>$qq->where('i.product_id', $productId))
            ->when($dateFrom, fn($qq)=>$qq->whereDate('inv.created_at', '>=', $dateFrom))
            ->when($dateTo, fn($qq)=>$qq->whereDate('inv.created_at', '<=', $dateTo))
            ->groupBy('i.product_id');

        // Cost (approx) by product using purchases in date range
        $cost = DB::table('purchase_invoice_items as pi')
            ->join('purchase_invoices as pinv', 'pinv.id', '=', 'pi.purchase_invoice_id')
            ->selectRaw('pi.product_id, SUM(pi.line_total_cost) as cogs_estimate')
            ->when($branchId, fn($qq)=>$qq->where('pinv.branch_id', $branchId))
            ->when($productId, fn($qq)=>$qq->where('pi.product_id', $productId))
            ->when($dateFrom, fn($qq)=>$qq->whereDate('pinv.created_at', '>=', $dateFrom))
            ->when($dateTo, fn($qq)=>$qq->whereDate('pinv.created_at', '<=', $dateTo))
            ->groupBy('pi.product_id');

        $q = DB::query()
            ->fromSub($revenue, 'r')
            ->leftJoinSub($cost, 'c', 'c.product_id', '=', 'r.product_id')
            ->join('products as p', 'p.id', '=', 'r.product_id')
            ->selectRaw('p.id as product_id, p.display_name, p.sku, COALESCE(r.revenue,0) as revenue, COALESCE(c.cogs_estimate,0) as cogs, (COALESCE(r.revenue,0)-COALESCE(c.cogs_estimate,0)) as profit')
            ->orderBy('p.display_name');

        return $q->paginate($perPage);
    }
}


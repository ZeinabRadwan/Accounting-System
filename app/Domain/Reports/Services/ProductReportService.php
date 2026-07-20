<?php

namespace App\Domain\Reports\Services;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class ProductReportService
{
    public function dataset(?int $branchId = null, ?int $productId = null, ?string $dateFrom = null, ?string $dateTo = null, int $perPage = 25): LengthAwarePaginator
    {
        $q = DB::table('sales_invoice_items as i')
            ->join('sales_invoices as inv', 'inv.id', '=', 'i.sales_invoice_id')
            ->join('products as p', 'p.id', '=', 'i.product_id')
            ->selectRaw('p.id as product_id, p.display_name, p.sku, SUM(i.quantity * i.conversion_factor) as qty_base_sold, SUM(i.line_total) as revenue')
            ->when($branchId, fn($qq)=>$qq->where('inv.branch_id', $branchId))
            ->when($productId, fn($qq)=>$qq->where('i.product_id', $productId))
            ->when($dateFrom, fn($qq)=>$qq->whereDate('inv.created_at', '>=', $dateFrom))
            ->when($dateTo, fn($qq)=>$qq->whereDate('inv.created_at', '<=', $dateTo))
            ->groupBy('p.id','p.display_name','p.sku')
            ->orderBy('p.display_name');

        return $q->paginate($perPage);
    }
}


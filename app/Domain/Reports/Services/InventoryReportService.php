<?php

namespace App\Domain\Reports\Services;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class InventoryReportService
{
    public function dataset(?int $branchId = null, ?int $productId = null, ?string $dateFrom = null, ?string $dateTo = null, int $perPage = 25): LengthAwarePaginator
    {
        // Snapshot by inventory_stocks; filters provided for export-ready structure.
        $q = DB::table('inventory_stocks as s')
            ->join('products as p', 'p.id', '=', 's.product_id')
            ->join('branches as b', 'b.id', '=', 's.branch_id')
            ->select([
                'b.id as branch_id',
                'b.name as branch_name',
                'p.id as product_id',
                'p.display_name',
                'p.sku',
                's.quantity',
            ])
            ->when($branchId, fn($qq)=>$qq->where('s.branch_id', $branchId))
            ->when($productId, fn($qq)=>$qq->where('s.product_id', $productId))
            ->orderBy('b.name')->orderBy('p.display_name');

        return $q->paginate($perPage);
    }
}


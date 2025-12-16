<?php

namespace App\Services;

use App\Models\Product;
use App\Models\PurchaseProduct;
use App\Models\InvoiceProduct;
use App\Models\PurchaseReturnProduct;
use App\Models\InvoiceReturnProduct;

class InventoryCostService
{
    /**
     * Calculate weighted average cost for a product at a specific point in time
     * 
     * This method calculates the weighted average cost using the weighted average costing method (WAC).
     * It considers all inventory movements (opening stock, purchases, sales, returns) up to the specified date.
     * 
     * Formula: weighted_avg_cost = total_inventory_value / total_inventory_quantity
     * 
     * @param int $productId Product ID
     * @param int|null $branchId Branch ID to filter by (null = all branches)
     * @param string|null $asOfDate Date to calculate as of (Y-m-d format, null = current date)
     * @param int|null $excludeInvoiceId Invoice ID to exclude from calculation (useful when calculating COGS for a sale)
     * @return float Weighted average cost per unit
     */
    public function getWeightedAverageCost(int $productId, ?int $branchId = null, ?string $asOfDate = null, ?int $excludeInvoiceId = null): float
    {
        $product = Product::find($productId);
        if (!$product) {
            return 0;
        }

        return $product->calculateWeightedAverageCost($branchId, $asOfDate, $excludeInvoiceId);
    }
}

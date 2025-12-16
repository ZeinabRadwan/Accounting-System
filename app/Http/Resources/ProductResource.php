<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'itemType' => $this->is_service == true ? 'service' : 'product',
            'name' => $this->name,
            'label' => $this->name . ' [' . $this->code . ']',
            'slug' => $this->slug,
            'code' => is_numeric($this->code) ? str_pad($this->code, 5, '0', STR_PAD_LEFT) : $this->code,
            'itemModel' => $this->model,
            'symbology' => $this->barcode_symbology,
            'subCategory' => new ProductSubCategoryResource($this->whenLoaded('proSubCategory')),
            'category' => $this->whenLoaded('proSubCategory.category', function () {
                return new ProductCategoryResource($this->proSubCategory->category);
            }),
            'itemUnit' => new UnitResource($this->productUnit),
            'itemBrand' => new BrandResource($this->productBrand),
            'itemTax' => new VatRateResource($this->productTax),
            'salesAccount' => $this->whenLoaded('salesAccount', function () {
                return [
                    'id' => $this->salesAccount->id,
                    'name' => $this->salesAccount->name,
                    'code' => $this->salesAccount->code,
                    'type' => $this->salesAccount->type ? $this->salesAccount->type->name : 'Unknown'
                ];
            }),
            'purchaseAccount' => $this->whenLoaded('purchaseAccount', function () {
                return [
                    'id' => $this->purchaseAccount->id,
                    'name' => $this->purchaseAccount->name,
                    'code' => $this->purchaseAccount->code,
                    'type' => $this->purchaseAccount->type ? $this->purchaseAccount->type->name : 'Unknown'
                ];
            }),
            'taxType' => $this->tax_type,
            'taxAmount' => $this->taxAmount(),
            'avgPurchasePrice' => $this->purchase_price,
            'servicePurchasePrice' => $this->purchase_price,
            'regularPrice' => $this->regular_price,
            'sellingPrice' => $this->sellingPrice(),
            'openingStockCount' => $this->opening_stock_count,
            'openingStockUnitPrice' => $this->opening_stock_unit_price,
            'discount' => $this->discount,
            'discountAmount' => $this->discountAmount(),
            'availableQty' => $this->inventory_count > 0 ? $this->inventory_count : 0,
            'alertQty' => $this->alert_qty,
            'note' => $this->note,
            'status' => (int) $this->status,
            'image' => getAvatarWithFallback($this->image_path, 'products'),
            // Add chart of account IDs for validation
            'sales_account_id' => $this->sales_account_id,
            'purchase_account_id' => $this->purchase_account_id,
            // Include purchase products for purchase history display
            'purchaseProducts' => $this->whenLoaded('purchaseProducts', function () {
                return $this->purchaseProducts->map(function ($purchaseProduct) {
                    return [
                        'id' => $purchaseProduct->id,
                        'quantity' => (float) $purchaseProduct->quantity,
                        'purchase_price' => (float) $purchaseProduct->purchase_price,
                        'unit_cost' => (float) $purchaseProduct->unit_cost,
                        'purchase_date' => $purchaseProduct->purchase->purchase_date ?? null,
                        'purchase_no' => $purchaseProduct->purchase->purchase_no ?? null,
                        'purchase_reference' => $purchaseProduct->purchase->reference ?? null,
                        'created_at' => $purchaseProduct->created_at ? $purchaseProduct->created_at->format('Y-m-d H:i:s') : null,
                    ];
                })->sortBy('purchase_date')->values();
            }),
            // Include opening stock data for purchase history
            'openingStockData' => [
                'quantity' => (float) ($this->opening_stock_count ?? 0),
                'unit_price' => (float) ($this->opening_stock_unit_price ?? 0),
                'total_value' => (float) (($this->opening_stock_count ?? 0) * ($this->opening_stock_unit_price ?? 0)),
            ],
            // Include weighted average cost for inventory count page and adjustments.
            // IMPORTANT:
            // - For listing / inventory count we want the same average cost that
            //   the Product Show page uses.
            // - That average is based ONLY on opening stock + all purchase lines
            //   (using purchase_price on the purchase line), not on sales / returns.
            'weightedAverageCost' => $this->when(
                isset($request->include_weighted_avg_cost) && $request->include_weighted_avg_cost,
                function () {
                    try {
                        $openingQty = (float) ($this->opening_stock_count ?? 0);
                        $openingPrice = (float) ($this->opening_stock_unit_price ?? 0);

                        $totalQuantity = $openingQty;
                        $totalValue = $openingQty * $openingPrice;

                        // Add all purchase lines (same data the Product Show page uses)
                        if ($this->relationLoaded('purchaseProducts')) {
                            foreach ($this->purchaseProducts as $purchaseProduct) {
                                $qty = (float) ($purchaseProduct->quantity ?? 0);
                                $price = (float) ($purchaseProduct->purchase_price ?? 0);
                                $totalQuantity += $qty;
                                $totalValue += $qty * $price;
                            }
                        }

                        if ($totalQuantity <= 0) {
                            // Fallback to stored purchase_price if we cannot compute
                            return round((float) ($this->purchase_price ?? 0), 2);
                        }

                        return round($totalValue / $totalQuantity, 2);
                    } catch (\Exception $e) {
                        // Return null if calculation fails, frontend will fallback to purchase_price
                        return null;
                    }
                }
            ),
            // Include unit_price and total_value calculated using the same
            // purchase-history based average. These are used by the inventory
            // count API so the response looks like:
            // { quantity, unit_price (avg), total_value }.
            'unit_price' => $this->when(
                isset($request->include_weighted_avg_cost) && $request->include_weighted_avg_cost,
                function () {
                    try {
                        $openingQty = (float) ($this->opening_stock_count ?? 0);
                        $openingPrice = (float) ($this->opening_stock_unit_price ?? 0);

                        $totalQuantity = $openingQty;
                        $totalValue = $openingQty * $openingPrice;

                        if ($this->relationLoaded('purchaseProducts')) {
                            foreach ($this->purchaseProducts as $purchaseProduct) {
                                $qty = (float) ($purchaseProduct->quantity ?? 0);
                                $price = (float) ($purchaseProduct->purchase_price ?? 0);
                                $totalQuantity += $qty;
                                $totalValue += $qty * $price;
                            }
                        }

                        if ($totalQuantity <= 0) {
                            return round((float) ($this->purchase_price ?? 0), 2);
                        }

                        return round($totalValue / $totalQuantity, 2);
                    } catch (\Exception $e) {
                        return round((float) ($this->purchase_price ?? 0), 2);
                    }
                }
            ),
            'total_value' => $this->when(
                isset($request->include_weighted_avg_cost) && $request->include_weighted_avg_cost,
                function () {
                    try {
                        $openingQty = (float) ($this->opening_stock_count ?? 0);
                        $openingPrice = (float) ($this->opening_stock_unit_price ?? 0);

                        $totalQuantity = $openingQty;
                        $totalValue = $openingQty * $openingPrice;

                        if ($this->relationLoaded('purchaseProducts')) {
                            foreach ($this->purchaseProducts as $purchaseProduct) {
                                $qty = (float) ($purchaseProduct->quantity ?? 0);
                                $price = (float) ($purchaseProduct->purchase_price ?? 0);
                                $totalQuantity += $qty;
                                $totalValue += $qty * $price;
                            }
                        }

                        // If nothing to average, fall back to inventory_count * purchase_price
                        if ($totalQuantity <= 0) {
                            $quantity = (float) ($this->inventory_count ?? 0);
                            $price = (float) ($this->purchase_price ?? 0);
                            return round($quantity * $price, 2);
                        }

                        // Return the summed value of opening + purchases
                        return round($totalValue, 2);
                    } catch (\Exception $e) {
                        $quantity = (float) ($this->inventory_count ?? 0);
                        $price = (float) ($this->purchase_price ?? 0);
                        return round($quantity * $price, 2);
                    }
                }
            ),
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductSelectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'itemType' => $this->is_service == true ? 'service' : 'product',
            'name' => $this->name,
            'label' => $this->name.' ['.$this->code.']',
            'slug' => $this->slug,
            'code' => $this->code,
            'symbology' => $this->barcode_symbology ?? 'CODE128',
            'itemModel' => $this->model,
            'avgPurchasePrice' => $this->purchase_price,
            // Include weighted average cost for inventory adjustments.
            // IMPORTANT: This uses the same calculation as ProductResource and Product Show page:
            // - Based ONLY on opening stock + all purchase lines (using purchase_price on the purchase line)
            // - NOT on sales / returns / branch filters
            'weightedAverageCost' => $this->when(isset($request->include_weighted_avg_cost) && $request->include_weighted_avg_cost, function () {
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
            }),
            'regularPrice' => $this->regular_price,
            'priceWithDiscount' => $this->priceWithDiscount(),
            'sellingPrice' => $this->sellingPrice(),
            'taxAmount' => $this->taxAmount(),
            'taxType' => $this->tax_type,
            'taxRate' => $this->productTax ? $this->productTax->rate : 0,
            'productTax' => $this->productTax ? [
                'id' => $this->productTax->id,
                'name' => $this->productTax->name,
                'slug' => $this->productTax->slug,
                'code' => $this->productTax->code,
                'rate' => $this->productTax->rate,
                'status' => $this->productTax->status,
            ] : null,
            'inventoryCount' => $this->inventory_count > 0 ? $this->inventory_count : 0,
            'image' => getAvatarWithFallback($this->image_path, 'products'),
            // Add chart of account IDs for validation
            'sales_account_id' => $this->sales_account_id,
            'purchase_account_id' => $this->purchase_account_id,
        ];
    }
}
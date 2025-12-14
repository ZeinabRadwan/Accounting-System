<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductSelectReource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // Get supplier_id from request query parameter
        $supplierId = $request->input('supplier_id');

        // Calculate average purchase price for the supplier if supplier_id is provided
        $avgPurchasePriceBySupplier = $this->purchase_price;
        if ($supplierId) {
            $avgPurchasePriceBySupplier = $this->getAveragePurchasePriceBySupplier($supplierId);
        }

        // Get last purchase price
        $lastPurchasePrice = $this->last_purchase_price ?? $this->purchase_price;

        return [
            'id' => $this->id,
            'name' => $this->name,
            'label' => $this->name.' ['.$this->code.']',
            'slug' => $this->slug,
            'code' => $this->code,
            'itemModel' => $this->model,
            'avgPurchasePrice' => $this->purchase_price,
            'lastPurchasePrice' => $lastPurchasePrice,
            'avgPurchasePriceBySupplier' => $avgPurchasePriceBySupplier,
            'regularPrice' => $this->regular_price,
            'priceWithDiscount' => $this->priceWithDiscount(),
            'sellingPrice' => $this->sellingPrice(),
            'taxAmount' => $this->taxAmount(),
            'taxType' => $this->tax_type,
            'taxRate' => $this->productTax?->rate,
            'inventoryCount' => $this->inventory_count > 0 ? $this->inventory_count : 0,
            'image' => $this->image_path ? $this->image_path : '',
            'productTax' => $this->productTax,
            'sales_account_id' => $this->sales_account_id,
            'purchase_account_id' => $this->purchase_account_id,
            // Unit of measure information
            'itemUnit' => $this->whenLoaded('productUnit', function () {
                return [
                    'id' => $this->productUnit->id,
                    'name' => $this->productUnit->name,
                    'code' => $this->productUnit->code,
                ];
            }),
            'unitName' => $this->productUnit?->name ?? '',
            'unitCode' => $this->productUnit?->code ?? '',
            // Alert quantity for low stock indication
            'alertQty' => $this->alert_qty ?? 0,
            'isLowStock' => $this->inventory_count > 0 && $this->alert_qty > 0 && $this->inventory_count <= $this->alert_qty,
        ];
    }
}

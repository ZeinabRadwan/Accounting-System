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
            'label' => $this->name.' ['.$this->code.']',
            'slug' => $this->slug,
            'code' => is_numeric($this->code) ? str_pad($this->code, 5, '0', STR_PAD_LEFT) : $this->code,
            'itemModel' => $this->model,
            'symbology' => $this->barcode_symbology,
            'subCategory' => $this->whenLoaded('proSubCategory', function () {
                return $this->proSubCategory ? new ProductSubCategoryResource($this->proSubCategory) : null;
            }),
            'category' => $this->whenLoaded('proSubCategory', function () {
                return $this->proSubCategory && $this->proSubCategory->category
                    ? new ProductCategoryResource($this->proSubCategory->category)
                    : null;
            }),
            'itemUnit' => $this->productUnit ? new UnitResource($this->productUnit) : null,
            'itemBrand' => $this->productBrand ? new BrandResource($this->productBrand) : null,
            'itemTax' => $this->productTax ? new VatRateResource($this->productTax) : null,
            'salesAccount' => $this->whenLoaded('salesAccount', function () {
                return [
                    'id' => $this->salesAccount->id,
                    'name' => $this->salesAccount->name,
                    'code' => $this->salesAccount->code,
                    'type' => $this->salesAccount->type ? $this->salesAccount->type->name : 'Unknown',
                ];
            }),
            'purchaseAccount' => $this->whenLoaded('purchaseAccount', function () {
                return [
                    'id' => $this->purchaseAccount->id,
                    'name' => $this->purchaseAccount->name,
                    'code' => $this->purchaseAccount->code,
                    'type' => $this->purchaseAccount->type ? $this->purchaseAccount->type->name : 'Unknown',
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
        ];
    }
}

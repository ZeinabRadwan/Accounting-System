<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuotationProductListResource extends JsonResource
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
            'purchasePrice' => $this->purchase_price,
            'salePrice' => $this->sale_price,
            'unitCost' => $this->unit_cost,
            'taxAmount' => $this->tax_amount,
            'quantity' => $this->quantity,
            'discountAmount' => $this->discount_amount,
            'discount' => $this->discount,
            'discountType' => $this->discount_type,
            'purchasePricetotal' => $this->quantity * $this->purchase_price,
            'unitCostTotal' => $this->quantity * $this->unit_cost,
            'taxTotal' => $this->quantity * $this->tax_amount,
            'productID' => $this->product->id,
            'productSlug' => $this->product->slug,
            'productCode' => $this->product->code,
            'productName' => $this->product->name,
            'productModel' => $this->product->model,
            'inventoryCount' => $this->product->inventory_count,
            'avgPurchasePrice' => $this->product->purchase_price,
            'productUnit' => $this->product->productUnit?->code,
            'taxType' => $this->product->tax_type,
            'taxRate' => $this->product->productTax?->rate,
            'sales_account_id' => $this->product->sales_account_id,
            'vat_rate_id' => $this->vat_rate_id,
            'vatRate' => $this->vatRate ? [
                'id' => $this->vatRate->id,
                'name' => $this->vatRate->name,
                'code' => $this->vatRate->code,
                'rate' => $this->vatRate->rate,
            ] : null,
            'selectedVatRate' => $this->product->productTax ? [
                'id' => $this->product->productTax->id,
                'name' => $this->product->productTax->name,
                'rate' => $this->product->productTax->rate,
            ] : null,
        ];
    }
}

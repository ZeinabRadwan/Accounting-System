<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class InvoiceProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $returnQty = DB::table('invoice_return_products')
            ->join('products', 'products.id', '=', 'invoice_return_products.product_id')
            ->join('invoice_returns', 'invoice_returns.id', '=', 'invoice_return_products.return_id')
            ->join('invoices', 'invoices.id', '=', 'invoice_returns.invoice_id')
            ->where('invoice_return_products.product_id', '=', $this->product_id)
            ->where('invoice_returns.invoice_id', '=', $this->invoice->id)
            ->sum('invoice_return_products.quantity');

        // Calculate discount percentage if it's a percentage type
        $discountPercentage = null;
        if ($this->discount_type === 'percentage') {
            // For percentage type, the discount field stores the percentage value (e.g., 10 for 10%)
            // This is the source of truth, so use it when available
            if ($this->discount !== null && $this->discount !== '') {
                $discountPercentage = round((float) $this->discount, 2);
            } else {
                // Fallback: calculate from discount_amount if discount field is not available
                $totalBeforeDiscount = $this->sale_price * $this->quantity;
                if ($totalBeforeDiscount > 0 && $this->discount_amount > 0) {
                    $discountPercentage = round((($this->discount_amount / $totalBeforeDiscount) * 100), 2);
                } else {
                    $discountPercentage = 0;
                }
            }
        } else {
            // For fixed discount type, discountPercentage should be null
            $discountPercentage = null;
        }

        return [
            'id' => $this->id,
            'purchasePrice' => $this->purchase_price,
            'salePrice' => $this->sale_price,
            'quantity' => $this->quantity,
            'unitCost' => $this->unit_cost,
            'unitTax' => $this->tax_amount,
            'productTax' => $this->tax_amount,
            'productDiscount' => $this->discount_amount,
            'discountType' => $this->discount_type,
            'discountPercentage' => $discountPercentage,
            'vatRateId' => $this->vat_rate_id,
            'total' => $this->quantity * $this->sale_price,
            'returnQty' => $returnQty > 0 ? $returnQty : 0,
            'purchasePricetotal' => $this->quantity * $this->purchase_price,
            'unitCostTotal' => $this->quantity * $this->unit_cost,
            'taxTotal' => $this->quantity * $this->tax_amount,
            'productType' => $this->product->is_service == true ? 'service' : 'product',
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
            'vatRate' => $this->vatRate ? [
                'id' => $this->vatRate->id,
                'rate' => $this->vatRate->rate,
                'name' => $this->vatRate->name,
                'code' => $this->vatRate->code,
            ] : null,
        ];
    }
}

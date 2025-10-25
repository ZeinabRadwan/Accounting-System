<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseReturnListReource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // Calculate total return with VAT
        $totalReturnWithVat = $this->calculateTotalReturnWithVat();
        
        return [
            'id' => $this->id,
            'reason' => $this->reason,
            'slug' => $this->slug,
            'totalReturn' => $totalReturnWithVat, // Now shows total with VAT
            'purReturnNo' => $this->code,
            'purchaseNo' => $this->purchase->purchase_no,
            'supplierName' => $this->purchase->supplier->name,
            'supplierPhone' => $this->purchase->supplier->phone_number,
            'returnDate' => $this->date,
            'note' => $this->note,
            'status' => (int) $this->status,
        ];
    }

    /**
     * Calculate total return amount with VAT
     */
    private function calculateTotalReturnWithVat()
    {
        $totalWithVat = 0;
        
        // Get all return products for this purchase return
        $returnProducts = $this->purchaseReturnProducts;
        
        foreach ($returnProducts as $returnProduct) {
            $returnQty = $returnProduct->quantity;
            $purchasePrice = $returnProduct->purchase_price;
            
            // Get the original purchase product to get tax information
            $originalProduct = \App\Models\PurchaseProduct::where('purchase_id', $this->purchase_id)
                ->where('product_id', $returnProduct->product_id)
                ->first();
            
            if ($originalProduct) {
                // Calculate unit discount
                $unitDiscount = $originalProduct->discount_amount > 0 && $originalProduct->quantity > 0 
                    ? $originalProduct->discount_amount / $originalProduct->quantity 
                    : 0;
                
                // Calculate unit net (price after discount)
                $unitNet = $purchasePrice - $unitDiscount;
                
                // Get VAT rate from the product's tax information or use default
                $vatRate = 15; // Default VAT rate for purchases
                if ($returnProduct->product && $returnProduct->product->productTax) {
                    $vatRate = $returnProduct->product->productTax->rate;
                } elseif ($this->purchase && $this->purchase->purchaseTax) {
                    $vatRate = $this->purchase->purchaseTax->rate;
                }
                
                // Calculate unit VAT
                $unitVat = ($unitNet * $vatRate) / 100;
                
                // Calculate unit total (net + VAT)
                $unitTotal = $unitNet + $unitVat;
                
                // Calculate return total for this product
                $productReturnTotal = $unitTotal * $returnQty;
                
                $totalWithVat += $productReturnTotal;
            } else {
                // Fallback: if original product not found, use simple calculation
                $totalWithVat += $returnQty * $purchasePrice;
            }
        }
        
        return round($totalWithVat, 2);
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceReturnListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // Calculate subtotal (sum of sale_price × return_qty) before discount
        // This matches calculateTotalReturnedProductCost() in show.vue
        $subtotal = 0;
        $totalDiscount = 0;
        $totalTax = 0;
        
        if ($this->relationLoaded('invoiceReturnProducts') && $this->invoiceReturnProducts) {
            foreach ($this->invoiceReturnProducts as $returnProduct) {
                if ($returnProduct->quantity > 0) {
                    // Get the original invoice product to get sale_price, discount, and tax
                    $invoiceProduct = \App\Models\InvoiceProduct::where('invoice_id', $this->invoice_id)
                        ->where('product_id', $returnProduct->product_id)
                        ->first();
                    
                    if ($invoiceProduct) {
                        $returnQty = $returnProduct->quantity;
                        $invoiceQty = $invoiceProduct->quantity;
                        
                        // Subtotal = sale_price × return_qty (before discount)
                        $subtotal += $invoiceProduct->sale_price * $returnQty;
                        
                        // Return Discount = (discount_amount / invoice_qty) × return_qty
                        // This matches calculateReturnDiscount() in show.vue
                        if ($invoiceQty > 0) {
                            $perUnitDiscount = round($invoiceProduct->discount_amount / $invoiceQty, 2);
                            $totalDiscount += $perUnitDiscount * $returnQty;
                        }
                        
                        // Return VAT = (tax_amount / invoice_qty) × return_qty
                        // This matches calculateReturnVat() in show.vue
                        if ($invoiceQty > 0) {
                            $perUnitVat = round($invoiceProduct->tax_amount / $invoiceQty, 2);
                            $totalTax += $perUnitVat * $returnQty;
                        }
                    }
                }
            }
        }
        
        // Net Total = Subtotal - Discount + VAT
        // This matches calculateTotalReturnedProductCost() - calculateTotalReturnDiscount() + calculateTotalReturnTax() in show.vue
        $netTotal = $subtotal - $totalDiscount + $totalTax;
        
        return [
            'id' => $this->id,
            'reason' => $this->reason,
            'returnNo' => $this->return_no,
            'slug' => $this->slug,
            'totalReturn' => $this->total_return,
            'subtotal' => round($subtotal, 2),
            'netTotal' => round($netTotal, 2), // Net Total = Subtotal - Discount + VAT
            'invoiceNo' => $this->invoice->invoice_no,
            'invoiceSlug' => $this->invoice->slug,
            'clientName' => $this->invoice->client->name,
            'returnDate' => $this->date,
            'note' => $this->note,
            'status' => (int) $this->status,
            'createdBy' => $this->user,
        ];
    }
}

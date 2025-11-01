<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceForPaymentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // Calculate base subtotal (sum of salePrice × quantity) for display
        $baseSubTotal = 0;
        if ($this->relationLoaded('invoiceProducts')) {
            foreach ($this->invoiceProducts as $product) {
                $baseSubTotal += $product->sale_price * $product->quantity;
            }
        }
        
        return [
            'id' => $this->id,
            'invoiceNo' => $this->invoice_no,
            'label' => config('config.invoicePrefix').$this->invoice_no,
            'slug' => $this->slug,
            'reference' => $this->reference,
            'discountType' => $this->discount_type,
            'discount' => $this->discountAmount(),
            'discountPercentage' => $this->discountPercentage(),
            'transport' => $this->transport,
            'taxRate' => $this->invoiceTax,
            'tax' => $this->total_tax,
            'subTotal' => $baseSubTotal > 0 ? $baseSubTotal : $this->sub_total, // Use base subtotal if available, fallback to sub_total
            'baseSubTotal' => $baseSubTotal > 0 ? $baseSubTotal : null, // Explicit base subtotal
            'invoiceTotal' => $this->invoiceTotal(),
            'totalPaid' => $this->invoiceTotalPaid(),
            'due' => $this->totalDue(),
            'totalInvoiceReturn' => isset($this->invoiceReturn) ? $this->invoiceReturn->total_return : 0,
        ];
    }
}

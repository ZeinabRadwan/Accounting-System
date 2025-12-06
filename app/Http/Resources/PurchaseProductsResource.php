<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if (! $this->resource) {
            return [];
        }

        // Handle attachments - check if column exists and decode JSON if present
        $attachments = [];
        if (isset($this->attachments) && ! empty($this->attachments)) {
            if (is_string($this->attachments)) {
                $attachments = json_decode($this->attachments, true) ?? [];
            } else {
                $attachments = $this->attachments;
            }
        }

        // Format attachments with URLs
        $formattedAttachments = [];
        if (! empty($attachments)) {
            foreach ($attachments as $attachment) {
                if (is_string($attachment)) {
                    $formattedAttachments[] = [
                        'name' => basename($attachment),
                        'url' => asset('storage/'.$attachment),
                        'path' => $attachment,
                    ];
                } elseif (is_array($attachment)) {
                    $formattedAttachments[] = array_merge([
                        'name' => $attachment['name'] ?? basename($attachment['path'] ?? ''),
                        'url' => isset($attachment['path']) ? asset('storage/'.$attachment['path']) : ($attachment['url'] ?? ''),
                        'path' => $attachment['path'] ?? '',
                    ], $attachment);
                }
            }
        }

        return [
            'id' => $this->id,
            'purchaseNo' => $this->purchase_no,
            'slug' => $this->slug,
            'supplier' => new SupplierListReource($this->supplier),
            'transport' => $this->transport,
            'transport_taxable' => $this->transport_taxable,
            'transport_non_taxable' => $this->transport_non_taxable,
            'tax' => $this->taxAmount(),
            'taxType' => $this->purchaseTax,
            'subTotal' => $this->sub_total,
            'purchaseTotal' => $this->purchaseTotal(),
            'totalDiscount' => $this->discount,
            'discount_type' => $this->discount_type,
            'discount_value' => $this->discount_value,
            'totalPaid' => $this->purchaseTotalPaid(),
            'due' => $this->totalDue(),
            'poReference' => $this->po_reference,
            'reference' => $this->reference,
            'paymentTerms' => $this->payment_terms,
            'poDate' => $this->po_date,
            'purchaseDate' => $this->purchase_date,
            'purchase_status' => $this->purchase_status,
            'payment_type' => $this->payment_type,
            'payment_method_id' => $this->payment_method_id,
            'paymentMethod' => $this->paymentMethod,
            'payments' => $this->purchasePayments,
            'products' => PurchaseProductResource::collection($this->purchaseProducts),
            'purchaseReturn' => new PurchaseReturnListReource($this->purchaseReturn),
            'accountReceivable' => isset($this->purchaseReturn->returnTransaction) ? $this->purchaseReturn->returnTransaction->amount : null,
            'note' => $this->note,
            'attachments' => $formattedAttachments,
            'status' => (int) $this->status,
            'createdBy' => $this->user->name,
            'branch' => $this->branch,
            'costCenter' => $this->costCenter,
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DebitNoteResource extends JsonResource
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
            'debitNoteNo' => $this->debit_note_no,
            'slug' => $this->slug,
            'purchase' => new PurchaseListResource($this->whenLoaded('purchase')),
            'purchaseNo' => $this->purchase ? $this->purchase->purchase_no : null,
            'supplier' => new SupplierListResource($this->whenLoaded('supplier')),
            'supplierName' => $this->supplier ? $this->supplier->name : null,
            'discountAmount' => (float) $this->discount_amount,
            'taxRate' => (float) $this->tax_rate,
            'taxAmount' => (float) $this->tax_amount,
            'totalAmount' => (float) $this->total_amount,
            'note' => $this->note,
            'date' => $this->date?->format('Y-m-d'),
            'status' => (int) $this->status,
            'createdBy' => $this->whenLoaded('user', fn () => $this->user?->name),
            'journalEntry' => $this->whenLoaded('journalEntry', function () {
                return $this->journalEntry ? [
                    'id' => $this->journalEntry->id,
                    'entry_number' => $this->journalEntry->entry_number,
                    'slug' => $this->journalEntry->slug ?? null,
                ] : null;
            }),
        ];
    }
}

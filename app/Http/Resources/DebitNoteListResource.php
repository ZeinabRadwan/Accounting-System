<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DebitNoteListResource extends JsonResource
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
            'debitNoteNo' => $this->debit_note_no,
            'slug' => $this->slug,
            'purchaseNo' => $this->purchase?->purchase_no,
            'purchaseSlug' => $this->purchase?->slug,
            'supplierName' => $this->supplier?->name,
            'discountAmount' => (float) $this->discount_amount,
            'taxRate' => (float) $this->tax_rate,
            'taxAmount' => (float) $this->tax_amount,
            'totalAmount' => (float) $this->total_amount,
            'note' => $this->note,
            'date' => $this->date?->format('Y-m-d'),
            'status' => (int) $this->status,
            'createdBy' => $this->user,
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

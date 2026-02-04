<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CreditNoteResource extends JsonResource
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
            'creditNoteNo' => $this->credit_note_no,
            'slug' => $this->slug,
            'invoice' => new InvoiceListResource($this->whenLoaded('invoice')),
            'invoiceNo' => $this->invoice ? $this->invoice->invoice_no : null,
            'client' => new ClientListResource($this->whenLoaded('client')),
            'clientName' => $this->client ? $this->client->name : null,
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

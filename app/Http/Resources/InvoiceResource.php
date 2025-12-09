<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // Handle attachments - check if column exists and decode JSON if present
        $attachments = [];
        if (property_exists($this, 'attachments') && isset($this->attachments) && ! empty($this->attachments)) {
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
            'branch_id' => $this->branch_id,
            'cost_center_id' => $this->cost_center_id,
            'sale_status' => $this->sale_status,
            'representative_id' => $this->representative_id,
            'cashier_id' => $this->cashier_id,
            'invoiceNo' => $this->invoice_no,
            'label' => config('config.invoicePrefix').$this->invoice_no,
            'slug' => $this->slug,
            'reference' => $this->reference,
            'transport' => $this->transport,
            'discount_type' => $this->discount_type,
            'discount' => $this->discount,
            'sub_total' => $this->sub_total,
            'po_reference' => $this->po_reference,
            'payment_terms' => $this->payment_terms,
            'delivery_place' => $this->delivery_place,
            'invoice_date' => $this->invoice_date,
            'note' => $this->note,
            'status' => (int) $this->status,
            'is_paid' => (int) $this->is_paid,
            'client_id' => $this->client_id,
            'tax_id' => $this->tax_id,
            'created_by' => $this->created_by,
            'fiscal_year_id' => $this->fiscal_year_id,
            'accounting_period_id' => $this->accounting_period_id,
            'client' => new ClientListResource($this->client),
            'invoicePayments' => PaymentVoucherListResource::collection($this->paymentVouchers),
            'invoiceProducts' => InvoiceProductResource::collection($this->invoiceProducts),
            'discountType' => $this->discount_type,
            'discountAmount' => $this->discountAmount(),
            'discountPercentage' => $this->discountPercentage(),
            'taxRate' => $this->invoiceTax,
            'tax' => $this->taxAmount(),
            'subTotal' => $this->sub_total,
            'invoiceTotal' => $this->invoiceTotal(),
            'totalPaid' => $this->invoiceTotalPaid(),
            'due' => $this->totalDue(),
            'totalInvoiceReturn' => isset($this->invoiceReturn) ? $this->invoiceReturn->total_return : 0,
            'accountPayable' => isset($this->invoiceReturn->returnTransaction) ? $this->invoiceReturn->returnTransaction->amount : null,
            'poReference' => $this->po_reference,
            'paymentTerms' => $this->payment_terms,
            'deliveryPlace' => $this->delivery_place,
            'invoiceDate' => $this->invoice_date,
            'createdBy' => $this->user->name ?? null,
            // New fields
            'branch' => $this->branch ? [
                'id' => $this->branch->id,
                'name' => $this->branch->name,
                'slug' => $this->branch->slug ?? null,
            ] : null,
            'costCenter' => $this->costCenter ? [
                'id' => $this->costCenter->id,
                'name' => $this->costCenter->name,
                'code' => $this->costCenter->code ?? null,
            ] : null,
            'representative' => $this->representative ? [
                'id' => $this->representative->id,
                'name' => $this->representative->name,
                'slug' => $this->representative->slug ?? null,
            ] : null,
            'cashier' => $this->cashier ? [
                'id' => $this->cashier->id,
                'name' => $this->cashier->name,
                'slug' => $this->cashier->slug ?? null,
            ] : null,
            'paymentMethod' => $this->paymentMethod ? [
                'id' => $this->paymentMethod->id,
                'name' => $this->paymentMethod->name,
                'slug' => $this->paymentMethod->slug ?? null,
                'code' => $this->paymentMethod->code ?? null,
            ] : null,
            'paymentType' => $this->is_paid ? 'paid' : 'due',
            'payment_method_id' => property_exists($this, 'payment_method_id') ? $this->payment_method_id : null,
            'attachments' => $formattedAttachments,
            'saleStatus' => $this->sale_status,
            // Map discount_type (0/1) to discountOnTotalType (fixed/percentage) for frontend compatibility
            'discountOnTotalType' => $this->discount_type !== null ? ($this->discount_type == 1 ? 'percentage' : 'fixed') : null,
            'discountOnTotalValue' => $this->discount,
            'current_date' => $this->invoice_date, // Alias for invoice_date
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

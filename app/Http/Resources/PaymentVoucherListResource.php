<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentVoucherListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $transaction = $this->transaction;

        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'voucherType' => (int) $this->voucher_type,
            'entityType' => $this->entity_type,
            'paymentMethod' => $this->payment_method,
            'client' => $this->when($this->client, $this->client),
            'supplier' => $this->when($this->supplier, $this->supplier),
            'chartOfAccount' => $this->when($this->chartOfAccount, $this->chartOfAccount),
            'invoice' => $this->when($this->invoice, $this->invoice),
            'purchase' => $this->when($this->purchase, $this->purchase),
            'account' => $transaction && $transaction->cashbookAccount ? new AccountResource($transaction->cashbookAccount) : null,
            'transaction' => $transaction ? [
                'id' => $transaction->id,
                'cheque_no' => $transaction->cheque_no,
                'receipt_no' => $transaction->receipt_no,
            ] : null,
            'amount' => $this->amount,
            'date' => $this->date,
            'chequeNo' => $this->cheque_no,
            'receiptNo' => $this->receipt_no,
            'note' => $this->note,
            'status' => (int) $this->status,
        ];
    }
}

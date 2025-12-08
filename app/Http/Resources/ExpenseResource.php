<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseResource extends JsonResource
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
            'reason' => $this->reason,
            'slug' => $this->slug,
            'category' => new ExpenseCategoryResource($this->expSubCategory->expCategory),
            'subCategory' => new ExpenseSubCategoryResource($this->whenLoaded('expSubCategory')),
            'account' => new AccountResource($this->expTransaction->cashbookAccount),
            'transaction' => $this->expTransaction,
            'date' => $this->date,
            'note' => $this->note,
            'status' => (int) $this->status,
            'createdBy' => $this->user->name ?? null,
            'image' => $this->image_path ? global_asset($this->image_path) : '',
            'branch' => $this->whenLoaded('branch') && $this->branch ? [
                'id' => $this->branch->id,
                'name' => $this->branch->name,
                'slug' => $this->branch->slug ?? null,
            ] : null,
            'costCenter' => $this->whenLoaded('costCenter') && $this->costCenter ? [
                'id' => $this->costCenter->id,
                'name' => $this->costCenter->name,
                'code' => $this->costCenter->code ?? null,
            ] : null,
            'reference' => $this->reference ?? null,
            'tax_type' => $this->whenLoaded('tax') && $this->tax ? [
                'id' => $this->tax->id,
                'code' => $this->tax->code ?? null,
                'rate' => $this->tax->rate ?? null,
            ] : null,
            'tax_value' => $this->calculateTaxValue(),
            'attachments' => $this->getFormattedAttachments(),
        ];
    }

    /**
     * Get formatted attachments array.
     *
     * @return array
     */
    private function getFormattedAttachments()
    {
        if (empty($this->attachments)) {
            return [];
        }

        $attachments = [];
        if (is_string($this->attachments)) {
            $attachments = json_decode($this->attachments, true) ?? [];
        } elseif (is_array($this->attachments)) {
            $attachments = $this->attachments;
        }

        $formattedAttachments = [];
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

        return $formattedAttachments;
    }

    /**
     * Calculate tax value based on amount and tax rate.
     *
     * @return float
     */
    private function calculateTaxValue()
    {
        if (!$this->tax || !$this->amount) {
            return 0;
        }

        $taxRate = $this->tax->rate ?? 0;
        return ($this->amount * $taxRate) / 100;
    }
}

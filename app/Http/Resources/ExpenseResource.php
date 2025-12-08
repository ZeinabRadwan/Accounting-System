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
        ];
    }
}

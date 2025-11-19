<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CostCenterResource extends JsonResource
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
            'code' => $this->code,
            'name' => $this->name,
            'name_en' => $this->name_en,
            'display_name' => $this->display_name,
            'localized_name' => $this->localized_name,
            'full_path' => $this->getFullPath(),
            'full_path_with_codes' => $this->getFullPathWithCodes(),
            'parent_id' => $this->parent_id,
            'is_active' => $this->is_active,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at ? $this->created_at->format('Y-m-d H:i:s') : null,
            'updated_at' => $this->updated_at ? $this->updated_at->format('Y-m-d H:i:s') : null,
            'deleted_at' => $this->deleted_at ? $this->deleted_at->format('Y-m-d H:i:s') : null,

            // Relationships
            'parent' => $this->whenLoaded('parent', function () {
                return new CostCenterResource($this->parent);
            }),

            'children' => $this->whenLoaded('children', function () {
                return CostCenterResource::collection($this->children);
            }),

            'creator' => $this->whenLoaded('creator', function () {
                return [
                    'id' => $this->creator->id,
                    'name' => $this->creator->name,
                    'email' => $this->creator->email,
                ];
            }),

            'updater' => $this->whenLoaded('updater', function () {
                return [
                    'id' => $this->updater->id,
                    'name' => $this->updater->name,
                    'email' => $this->updater->email,
                ];
            }),

            // Additional computed properties
            'can_delete' => $this->canDelete(),
            'deletion_block_reason' => $this->getDeletionBlockReason(),
            'journal_entry_lines_count' => $this->when(isset($this->journalEntryLines), function () {
                return $this->journalEntryLines()->count();
            }),
            'children_count' => $this->when(isset($this->children_count), function () {
                return $this->children_count;
            }, function () {
                return $this->children()->count();
            }),
        ];
    }
}

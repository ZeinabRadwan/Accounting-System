<?php

namespace App\Http\Resources\AccountingPeriod;

use Illuminate\Http\Resources\Json\JsonResource;

class AccountingPeriodResource extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug,
            'fiscal_year_id' => $this->fiscal_year_id,
            'start_date' => $this->start_date->format('Y-m-d'),
            'end_date' => $this->end_date->format('Y-m-d'),
            'is_active' => $this->is_active,
            'is_closed' => $this->is_closed,
            'note' => $this->note,
            'created_by' => $this->created_by,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
            'full_name' => $this->full_name,
            'duration_in_days' => $this->duration_in_days,
            'is_currently_active' => $this->isCurrentlyActive(),
            'fiscal_year' => $this->whenLoaded('fiscalYear', function () {
                return [
                    'id' => $this->fiscalYear->id,
                    'name' => $this->fiscalYear->name,
                    'slug' => $this->fiscalYear->slug,
                    'start_date' => $this->fiscalYear->start_date->format('Y-m-d'),
                    'end_date' => $this->fiscalYear->end_date->format('Y-m-d'),
                    'is_active' => $this->fiscalYear->is_active,
                    'full_name' => $this->fiscalYear->full_name,
                ];
            }),
            'user' => $this->whenLoaded('user', function () {
                return [
                    'id' => $this->user->id,
                    'name' => $this->user->name,
                    'email' => $this->user->email,
                ];
            }),
        ];
    }
}

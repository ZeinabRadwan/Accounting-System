<?php

namespace App\Http\Resources\FiscalYear;

use Illuminate\Http\Resources\Json\JsonResource;

class FiscalYearResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // Check if the resource is null
        if (!$this->resource) {
            return [];
        }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'start_date' => $this->start_date ? $this->start_date->format('Y-m-d') : null,
            'end_date' => $this->end_date ? $this->end_date->format('Y-m-d') : null,
            'is_active' => $this->is_active,
            'note' => $this->note,
            'created_by' => $this->created_by,
            'created_at' => $this->created_at ? $this->created_at->format('Y-m-d H:i:s') : null,
            'updated_at' => $this->updated_at ? $this->updated_at->format('Y-m-d H:i:s') : null,
            'full_name' => $this->full_name,
            'duration_in_days' => $this->duration_in_days,
            'is_currently_active' => $this->isCurrentlyActive(),
            'user' => $this->whenLoaded('user', function () {
                return [
                    'id' => $this->user->id,
                    'name' => $this->user->name,
                    'email' => $this->user->email,
                ];
            }),
            'accounting_periods' => $this->whenLoaded('accountingPeriods', function () {
                return $this->accountingPeriods->map(function ($period) {
                    return [
                        'id' => $period->id,
                        'name' => $period->name,
                        'slug' => $period->slug,
                        'start_date' => $period->start_date ? $period->start_date->format('Y-m-d') : null,
                        'end_date' => $period->end_date ? $period->end_date->format('Y-m-d') : null,
                        'is_active' => $period->is_active,
                        'is_closed' => $period->is_closed,
                        'full_name' => $period->full_name,
                    ];
                });
            }),
            'accounting_periods_count' => $this->whenLoaded('accountingPeriods', function () {
                return $this->accountingPeriods->count();
            }),
        ];
    }
}

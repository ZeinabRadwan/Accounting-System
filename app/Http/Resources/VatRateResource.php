<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VatRateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'code' => $this->code,
            'slug' => $this->slug,
            'rate' => $this->rate,
            'note' => $this->note,
            'isGroupTax' => $this->is_group_tax,
            'status' => (int) $this->status,
        ];

        if ($this->is_group_tax && $this->group_tax_ids) {
            $data['groupTaxIds'] = $this->group_tax_ids;
            if ($this->group_tax_details) {
                $data['groupTaxDetails'] = $this->group_tax_details->toArray();
            }
        }

        // Add chart of account information
        if ($this->salesVatAccount) {
            $data['salesVatAccount'] = [
                'id' => $this->salesVatAccount->id,
                'name' => $this->salesVatAccount->name,
                'code' => $this->salesVatAccount->code,
            ];
        }

        if ($this->purchaseVatAccount) {
            $data['purchaseVatAccount'] = [
                'id' => $this->purchaseVatAccount->id,
                'name' => $this->purchaseVatAccount->name,
                'code' => $this->purchaseVatAccount->code,
            ];
        }

        // Add chart of account IDs for form handling
        $data['sales_vat_account_id'] = $this->sales_vat_account_id;
        $data['purchase_vat_account_id'] = $this->purchase_vat_account_id;

        return $data;
    }
}

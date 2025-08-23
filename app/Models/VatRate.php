<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VatRate extends Model
{
    use Sluggable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'code', 'rate', 'note', 'status', 'is_group_tax', 'group_tax_ids',
        'sales_vat_account_id', 'purchase_vat_account_id'
    ];

    protected $casts = [
        'group_tax_ids' => 'array',
    ];

    protected $appends = ['group_tax_details'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
            ],
        ];
    }

    /**
     * Get the sales VAT account for this VAT rate
     */
    public function salesVatAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'sales_vat_account_id');
    }

    /**
     * Get the purchase VAT account for this VAT rate
     */
    public function purchaseVatAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'purchase_vat_account_id');
    }

    /**
     * Get the default sales VAT account if none is set
     */
    public function getSalesVatAccount()
    {
        if ($this->sales_vat_account_id) {
            return $this->salesVatAccount;
        }
        
        // Return default Sales VAT Payable account
        return ChartOfAccount::where('name', 'Sales VAT Payable')
            ->where('is_active', true)
            ->first();
    }

    /**
     * Get the default purchase VAT account if none is set
     */
    public function getPurchaseVatAccount()
    {
        if ($this->purchase_vat_account_id) {
            return $this->purchaseVatAccount;
        }
        
        // Return default Purchase VAT Receivable account
        return ChartOfAccount::where('name', 'Purchase VAT Receivable')
            ->where('is_active', true)
            ->first();
    }

    /**
     * Check if this VAT rate has proper chart of account connections
     */
    public function hasChartOfAccountConnections(): bool
    {
        $salesAccount = $this->getSalesVatAccount();
        $purchaseAccount = $this->getPurchaseVatAccount();
        
        return $salesAccount && $purchaseAccount;
    }

    /**
     * Get validation message for chart of account connections
     */
    public function getChartOfAccountValidationMessage(): string
    {
        if (!$this->hasChartOfAccountConnections()) {
            return "VAT Rate '{$this->name}' is not properly connected to required Chart of Accounts. Please ensure Sales VAT Payable and Purchase VAT Receivable accounts exist.";
        }
        return '';
    }

    // Accessor to get group tax details
    public function getGroupTaxDetailsAttribute()
    {
        if ($this->is_group_tax && !empty($this->group_tax_ids)) {
            return VatRate::whereIn('id', $this->group_tax_ids)->get();
        }

        return null;
    }
}

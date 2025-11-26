<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VatRate extends Model
{
    use HasFactory, Sluggable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'code', 'rate', 'note', 'status', 'is_group_tax', 'group_tax_ids',
        'sales_vat_account_id', 'purchase_vat_account_id',
    ];

    protected $casts = [
        'group_tax_ids' => 'array',
    ];

    protected $appends = ['group_tax_details'];

    /**
     * Return the sluggable configuration array for this model.
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
     * Get the sales VAT account - prioritizes account routing settings over VatRate's own account
     *
     * @param  int|null  $branchId  Branch ID to filter routing settings
     */
    public function getSalesVatAccount(?int $branchId = null)
    {
        // Get branch ID from auth if not provided
        if ($branchId === null) {
            $branchId = auth()->user()?->default_branch_id;
        }

        // First priority: Get account from routing settings (centralized configuration)
        $settingQuery = \App\Models\AccountRoutingSetting::where('module', 'vat')
            ->where('setting_key', 'sales_vat_account')
            ->where('is_active', true);

        // Filter by branch if provided
        if ($branchId) {
            $settingQuery->where('branch_id', $branchId);
        }

        $setting = $settingQuery->first();

        if ($setting && $setting->main_account_id) {
            $account = ChartOfAccount::find($setting->main_account_id);
            if ($account) {
                return $account;
            }
        }

        // Second priority: Fall back to VatRate's own account if routing settings not configured
        if ($this->sales_vat_account_id) {
            return $this->salesVatAccount;
        }

        // Last fallback: Account named "Sales VAT Payable" if nothing else configured
        return ChartOfAccount::where('name', 'Sales VAT Payable')
            ->where('is_active', true)
            ->first();
    }

    /**
     * Get the purchase VAT account - prioritizes account routing settings over VatRate's own account
     *
     * @param  int|null  $branchId  Branch ID to filter routing settings
     */
    public function getPurchaseVatAccount(?int $branchId = null)
    {
        // Get branch ID from auth if not provided
        if ($branchId === null) {
            $branchId = auth()->user()?->default_branch_id;
        }

        // First priority: Get account from routing settings (centralized configuration)
        $settingQuery = \App\Models\AccountRoutingSetting::where('module', 'vat')
            ->where('setting_key', 'purchase_vat_account')
            ->where('is_active', true);

        // Filter by branch if provided
        if ($branchId) {
            $settingQuery->where('branch_id', $branchId);
        }

        $setting = $settingQuery->first();

        if ($setting && $setting->main_account_id) {
            $account = ChartOfAccount::find($setting->main_account_id);
            if ($account) {
                return $account;
            }
        }

        // Second priority: Fall back to VatRate's own account if routing settings not configured
        if ($this->purchase_vat_account_id) {
            return $this->purchaseVatAccount;
        }

        // Last fallback: Account named "Purchase VAT Receivable" if nothing else configured
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
        if (! $this->hasChartOfAccountConnections()) {
            return "VAT Rate '{$this->name}' is not properly connected to required Chart of Accounts. Please ensure Sales VAT Payable and Purchase VAT Receivable accounts exist.";
        }

        return '';
    }

    // Accessor to get group tax details
    public function getGroupTaxDetailsAttribute()
    {
        if ($this->is_group_tax && ! empty($this->group_tax_ids)) {
            return VatRate::whereIn('id', $this->group_tax_ids)->get();
        }

        return null;
    }
}

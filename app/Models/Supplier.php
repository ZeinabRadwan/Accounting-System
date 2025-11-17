<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Supplier extends Model
{
    use HasFactory, Notifiable, Sluggable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'supplier_id',
        'email',
        'company_name',

        'status',
        'image_path',
        'tax_registration_number',
        'type',
        'chart_of_account_id',

        // New fields
        'code_number',
        'notes',
        'display_language',
        'full_name',
        'business_name',
        'first_name',
        'last_name',
        'phone_number',
        'street_address1',
        'street_address2',
        'city',
        'state',
        'postal_code',
        'country',
        'neighbourhood',
        // Saudi National Address fields
        'building_number',
        'street_number',
        'district_number',
        'unit_number',
        'additional_number',
        'commercial_register',
        'tax_card',
        // Tax status
        'tax_status',
        'attachments',
        'is_send_email',
        'is_send_sms',
        'branch_id',
    ];

    /**
     * Get the complete address
     */
    public function getCompleteAddressAttribute()
    {
        $addressParts = [];

        if ($this->street_address1) {
            $addressParts[] = $this->street_address1;
        }
        if ($this->street_address2) {
            $addressParts[] = $this->street_address2;
        }
        if ($this->country) {
            $addressParts[] = $this->country;
        }
        if ($this->state) {
            $addressParts[] = $this->state;
        }
        if ($this->city) {
            $addressParts[] = $this->city;
        }
        if ($this->neighbourhood) {
            $addressParts[] = $this->neighbourhood;
        }
        if ($this->postal_code) {
            $addressParts[] = $this->postal_code;
        }

        return implode(', ', $addressParts);
    }

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

    // get the supplier purchase total
    public function purchaseTotal()
    {
        $total = 0;
        if (isset($this->purchases)) {
            $total = $this->purchases->where('status', 1)->sum('calculated_total');
        }

        return $total;
    }

    // get the supplier purchase return total
    public function purchaseReturnTotal()
    {
        $total = 0;
        if (isset($this->purchases)) {
            $total = $this->purchases->where('status', 1)->sum(function ($purchase) {
                $costOfReturn = isset($purchase->purchaseReturn) ? $purchase->purchaseReturn->total_return : 0;

                return $costOfReturn;
            });
        }

        return $total;
    }

    // get the supplier purchase total discount
    public function purTotalDiscount()
    {
        $totalDiscount = $this->purchases->sum('discount');

        return $totalDiscount > 0 ? $totalDiscount : 0;
    }

    // get the supplier purchase total transport
    public function purTotalTransport()
    {
        $totalTransport = $this->purchases->sum('transport');

        return $totalTransport > 0 ? $totalTransport : 0;
    }

    // get the supplier purchase total tax
    public function purTotalTax()
    {
        $totalTax = $this->purchases->sum('calculated_tax');

        return $totalTax > 0 ? $totalTax : 0;
    }

    // get the supplier purchase total paid
    public function purchaseTotalPaid()
    {
        $totalPaid = 0;
        if ($this->purchasePayments) {
            $totalPaid = $this->purchasePayments->sum('amount');
        }

        return $totalPaid;
    }

    // Get the supplier due
    public function purchaseTotalDue()
    {
        $due = 0;
        if (isset($this->purchases)) {
            $due = $this->purchases->where('status', 1)->sum('calculated_due');
        }

        return $due;
    }

    // return supplier total non purchase paid
    public function nonPurchasePaid()
    {
        $totalPaid = 0;
        $paid = $this->supplierNonPurchasePayments;
        if (isset($paid)) {
            $totalPaid = $paid->where('status', 1)->sum('amount');
        }

        return $totalPaid;
    }

    // return supplier total non purchase due
    public function nonPurchaseTotalDue()
    {
        $totalDue = 0;
        $dues = $this->supplierNonPurchaseDues;
        if (isset($dues)) {
            $totalDue = $dues->where('status', 1)->sum('amount');
        }

        return $totalDue;
    }

    // return supplier total non purchase current due
    public function nonPurchaseCurrentDue()
    {
        return $this->nonPurchaseTotalDue() - $this->nonPurchasePaid();
    }

    /**
     * Get the purchases for the supplier.
     */
    public function purchases()
    {
        return $this->hasMany(Purchase::class, 'supplier_id');
    }

    /**
     * Get the purchase payments for the supplier.
     */
    public function purchasePayments()
    {
        return $this->hasManyThrough(PurchasePayment::class, Purchase::class, 'supplier_id', 'purchase_id');
    }

    /**
     * Get the non purchase dues
     */
    public function supplierNonPurchaseDues()
    {
        return $this->hasMany(NonPurchasePayment::class, 'supplier_id')->where('type', 0);
    }

    /**
     * Get the non invoice payments
     */
    public function supplierNonPurchasePayments()
    {
        return $this->hasMany(NonPurchasePayment::class, 'supplier_id')->where('type', 1);
    }

    public function routeNotificationForTwilio()
    {
        return $this->phone_number;
    }

    /**
     * Get the representatives for the supplier.
     */
    public function representatives()
    {
        return $this->hasMany(SupplierRepresentative::class);
    }

    /**
     * Get the primary representative for the supplier.
     */
    public function primaryRepresentative()
    {
        return $this->hasOne(SupplierRepresentative::class)->where('is_primary', true);
    }

    /**
     * Get the chart of account for the supplier.
     */
    public function chartOfAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'chart_of_account_id');
    }

    /**
     * Ensure supplier has a chart of account assigned and load the relationship.
     */
    public function ensureChartOfAccountLoaded()
    {
        // If no chart of account is assigned, assign one
        if (! $this->chart_of_account_id) {
            $supplierData = [
                'type' => $this->type ?? 'Company',
            ];
            $supplierData = self::assignDefaultChartOfAccount($supplierData);
            if (isset($supplierData['chart_of_account_id'])) {
                $this->update(['chart_of_account_id' => $supplierData['chart_of_account_id']]);
            }
        }

        // Load the relationship if not already loaded
        if (! $this->relationLoaded('chartOfAccount')) {
            $this->load('chartOfAccount');
        }

        return $this;
    }

    /**
     * Get the chart of account ID for journal entries.
     */
    public function getChartOfAccountIdForJournal()
    {
        return $this->chart_of_account_id;
    }

    /**
     * Check if the supplier is connected to a chart of account.
     */
    public function isChartOfAccountConnected()
    {
        return ! is_null($this->chart_of_account_id);
    }

    /**
     * Get validation message for chart of account connection.
     */
    public function getChartOfAccountValidationMessage()
    {
        if (! $this->isChartOfAccountConnected()) {
            return 'Supplier must be connected to a Chart of Account for journal entries.';
        }

        return null;
    }

    /**
     * Automatically assign default Chart of Account if none is set
     */
    public static function assignDefaultChartOfAccount($supplierData)
    {
        // If chart_of_account_id is already provided, use it
        if (isset($supplierData['chart_of_account_id']) && $supplierData['chart_of_account_id']) {
            return $supplierData;
        }

        // Auto-assign based on supplier type or other criteria
        $defaultAccount = null;

        if (isset($supplierData['type'])) {
            switch ($supplierData['type']) {
                case 'Company':
                    // Look for "Accounts Payable - Companies" or similar
                    $defaultAccount = \App\Models\ChartOfAccount::where('is_active', true)
                        ->where('name', 'like', '%Accounts Payable%')
                        ->where('name', 'like', '%Company%')
                        ->first();
                    break;
                case 'Individual':
                    // Look for "Accounts Payable - Individuals" or similar
                    $defaultAccount = \App\Models\ChartOfAccount::where('is_active', true)
                        ->where('name', 'like', '%Accounts Payable%')
                        ->where('name', 'like', '%Individual%')
                        ->first();
                    break;
            }
        }

        // Fallback to any Accounts Payable account
        if (! $defaultAccount) {
            $defaultAccount = \App\Models\ChartOfAccount::where('is_active', true)
                ->where('name', 'like', '%Accounts Payable%')
                ->first();
        }

        // Final fallback to any active account
        if (! $defaultAccount) {
            $defaultAccount = \App\Models\ChartOfAccount::where('is_active', true)->first();
        }

        if ($defaultAccount) {
            $supplierData['chart_of_account_id'] = $defaultAccount->id;
        }

        return $supplierData;
    }

    /**
     * Get the branch for this supplier.
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
}

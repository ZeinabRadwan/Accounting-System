<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Purchase extends Model
{
    use HasFactory, Sluggable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'purchase_no', 'slug', 'supplier_id', 'discount', 'discount_type', 'discount_value', 'transport', 'transport_taxable', 'transport_non_taxable', 'sub_total', 'tax_id', 'po_reference', 'reference', 'payment_terms', 'po_date', 'purchase_date', 'created_by', 'note', 'status', 'is_paid', 'payment_type', 'payment_method_id', 'purchase_status', 'fiscal_year_id', 'accounting_period_id', 'branch_id', 'cost_center_id', 'attachments',
    ];

    protected $appends = ['calculated_due', 'calculated_tax', 'calculated_total'];

    /**
     * Return the sluggable configuration array for this model.
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'purchase_no',
            ],
        ];
    }

    /**
     * Get the purchase due.
     *
     * @return string
     */
    public function getCalculatedDueAttribute()
    {
        return $this->totalDue();
    }

    /**
     * Get the purchase tax.
     *
     * @return string
     */
    public function getCalculatedTaxAttribute()
    {
        return $this->taxAmount();
    }

    /**
     * Get the purchase total.
     *
     * @return string
     */
    public function getCalculatedTotalAttribute()
    {
        return $this->purchaseTotal();
    }

    // calculate tax - now calculated from individual products
    public function taxAmount()
    {
        $totalTax = 0;
        if ($this->purchaseProducts) {
            $totalTax = $this->purchaseProducts->sum('tax_amount');
        }

        // Returns should not affect the displayed tax amount
        // Original tax calculation without subtracting returns
        return $totalTax;
    }

    // purchase total - sub_total already includes everything (products + tax + transport)
    public function purchaseTotal()
    {
        // Return the original sub_total without subtracting returns
        // Returns should not affect the displayed purchase totals
        return $this->sub_total;
    }

    // purchase total paid
    public function purchaseTotalPaid()
    {
        $totalPaid = $this->purchasePayments->sum('amount');

        return $totalPaid;
    }

    // purchase total due
    public function totalDue()
    {
        $due = $this->purchaseTotal() - $this->purchaseTotalPaid();

        return $due >= 0 ? $due : 0;
    }

    /**
     * Get the purchase products.
     */
    public function purchaseProducts()
    {
        return $this->hasMany(PurchaseProduct::class, 'purchase_id');
    }

    /**
     * Get the purchase payments.
     */
    public function purchasePayments()
    {
        return $this->hasMany(PurchasePayment::class, 'purchase_id');
    }

    /**
     * Get the purchase returns.
     */
    public function purchaseReturn()
    {
        return $this->hasOne(PurchaseReturn::class, 'purchase_id');
    }

    /**
     * Get the supplier for this purchase.
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

    /**
     * Get the tax for this purchase.
     */
    public function purchaseTax()
    {
        return $this->belongsTo(VatRate::class, 'tax_id');
    }

    /**
     * Get the user who had created this purchase.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Check if purchase can be sent to ZATCA
     */
    public function canSendToZatca()
    {
        // Only inactive purchases can be sent to ZATCA
        return $this->status == 0;
    }

    /**
     * Check if purchase has been sent to ZATCA
     */
    public function isSentToZatca()
    {
        // Active purchases are considered sent to ZATCA
        return $this->status == 1;
    }

    /**
     * Get the fiscal year for this purchase.
     */
    public function fiscalYear()
    {
        return $this->belongsTo(FiscalYear::class, 'fiscal_year_id');
    }

    /**
     * Get the accounting period for this purchase.
     */
    public function accountingPeriod()
    {
        return $this->belongsTo(AccountingPeriod::class, 'accounting_period_id');
    }

    /**
     * Get the branch for this purchase.
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * Get the cost center for this purchase.
     */
    public function costCenter()
    {
        return $this->belongsTo(CostCenter::class, 'cost_center_id');
    }

    /**
     * Get the payment method for this purchase.
     */
    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method_id');
    }
}

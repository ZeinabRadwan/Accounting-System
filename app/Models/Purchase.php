<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Purchase extends Model
{
    use Sluggable, HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'purchase_no', 'slug', 'supplier_id', 'discount', 'transport', 'sub_total', 'tax_id', 'po_reference', 'payment_terms', 'po_date', 'purchase_date', 'created_by', 'note', 'status', 'is_paid', 'fiscal_year_id', 'accounting_period_id',
    ];

    protected $appends = ['calculated_due', 'calculated_tax', 'calculated_total'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
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
        
        // Handle purchase returns
        if (isset($this->purchaseReturn)) {
            // Subtract tax from returned products
            $returnedTax = $this->purchaseReturn->purchaseReturnProducts->sum(function($returnProduct) {
                return $returnProduct->quantity * $returnProduct->tax_amount;
            });
            $totalTax -= $returnedTax;
        }

        return $totalTax;
    }

    // purchase total - sub_total already includes everything (products + tax + transport)
    public function purchaseTotal()
    {
        $costOfProductReturn = isset($this->purchaseReturn) ? $this->purchaseReturn->total_return : 0;

        return $this->sub_total - $costOfProductReturn;
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
}

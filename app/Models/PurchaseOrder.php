<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    use Sluggable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'purchase_no', 'slug', 'supplier_id', 'discount', 'transport', 'sub_total', 'net_total', 'total_tax', 'tax_id', 'po_reference', 'payment_terms', 'po_date', 'purchase_date', 'created_by', 'note', 'status', 'is_paid', 'is_send_email', 'is_send_sms', 'fiscal_year_id', 'accounting_period_id',
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
     * Get the purchase order due.
     *
     * @return string
     */
    public function getCalculatedDueAttribute()
    {
        return $this->totalDue();
    }

    /**
     * Get the purchase order tax.
     *
     * @return string
     */
    public function getCalculatedTaxAttribute()
    {
        return $this->taxAmount();
    }

    /**
     * Get the purchase order total.
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
        if ($this->purchaseOrderProducts) {
            $totalTax = $this->purchaseOrderProducts->sum('tax_amount');
        }

        return $totalTax;
    }

    // purchase order total - sub_total already includes everything (products + tax + transport)
    public function purchaseTotal()
    {
        return $this->sub_total;
    }

    // purchase order total paid
    public function purchaseTotalPaid()
    {
        // For purchase orders, we might not have payments initially
        // This can be implemented later if needed
        return 0;
    }

    // purchase order total due
    public function totalDue()
    {
        $due = $this->purchaseTotal() - $this->purchaseTotalPaid();

        return $due >= 0 ? $due : 0;
    }

    /**
     * Get the purchase order products.
     */
    public function purchaseOrderProducts()
    {
        return $this->hasMany(PurchaseOrderProduct::class, 'purchase_order_id');
    }

    /**
     * Get the supplier for this purchase order.
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

    /**
     * Get the tax for this purchase order.
     */
    public function purchaseTax()
    {
        return $this->belongsTo(VatRate::class, 'tax_id');
    }

    /**
     * Get the user who had created this purchase order.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the fiscal year for this purchase order.
     */
    public function fiscalYear()
    {
        return $this->belongsTo(FiscalYear::class, 'fiscal_year_id');
    }

    /**
     * Get the accounting period for this purchase order.
     */
    public function accountingPeriod()
    {
        return $this->belongsTo(AccountingPeriod::class, 'accounting_period_id');
    }
}
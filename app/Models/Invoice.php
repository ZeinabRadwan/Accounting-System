<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'invoice_no', 'slug', 'reference', 'client_id', 'discount_type', 'discount', 'transport', 'sub_total', 'po_reference', 'payment_terms', 'delivery_place', 'tax_id', 'invoice_date', 'created_by', 'note', 'status', 'is_paid', 'fiscal_year_id', 'accounting_period_id', 'branch_id',
    ];

    protected $appends = ['calculated_due', 'calculated_tax', 'calculated_total'];

    /**
     * Get the invoice due.
     *
     * @return string
     */
    public function getCalculatedDueAttribute()
    {
        return $this->totalDue();
    }

    /**
     * Get the invoice tax.
     *
     * @return string
     */
    public function getCalculatedTaxAttribute()
    {
        return $this->taxAmount();
    }

    /**
     * Get the invoice total.
     *
     * @return string
     */
    public function getCalculatedTotalAttribute()
    {
        return $this->invoiceTotal();
    }

    // calculate tax
    public function taxAmount()
    {
        $taxRate = $this->invoiceTax;
        $totalTax = 0;
        $subTotal = $this->sub_total;
        
        // Calculate global discount
        $globalDiscount = 0;
        if ($this->discount > 0) {
            if ($this->discount_type == 1) { // Percentage
                $globalDiscount = ($this->discount / 100) * $this->sub_total;
            } else { // Fixed
                $globalDiscount = $this->discount;
            }
        }
        
        // Check if country is Saudi Arabia
        $country = \App\Models\GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
        $isSaudiArabia = $country === 'SA';
        
        if (isset($taxRate) && $taxRate->rate > 0) {
            if (isset($this->invoiceReturn)) {
                $subTotal = $this->sub_total - $this->invoiceReturn->total_return;
            }
            // Calculate tax on amount AFTER global discount
            $taxableAmount = $subTotal - $globalDiscount;
            $totalTax = ($taxRate->rate / 100) * $taxableAmount;
        }

        // For non-Saudi Arabia: Add product-level VAT
        // For Saudi Arabia: sub_total already includes product VAT, so only return invoice-level tax
        if (!$isSaudiArabia) {
            $totalProductVat = 0;
            $invoiceProducts = $this->invoiceProducts;
            foreach ($invoiceProducts as $invoiceProduct) {
                $totalProductVat += $invoiceProduct->tax_amount;
            }
            return $totalTax + $totalProductVat;
        }
        
        // For Saudi Arabia: only return invoice-level tax (product VAT is already in sub_total)
        return $totalTax;
    }

    // return discount percentage
    public function discountPercentage()
    {
        $percentage = null;
        if ($this->discount_type == 1) {
            $costOfReturn = isset($this->invoiceReturn) ? $this->invoiceReturn->total_return : 0;
            $percentage = ($this->discount * 100) / ($this->sub_total - $costOfReturn);
        }

        return (int) $percentage;
    }

    // Get original discount percentage (without returns) for index listing
    public function originalDiscountPercentage()
    {
        $percentage = null;
        if ($this->discount_type == 1) {
            $percentage = ($this->discount * 100) / $this->sub_total;
        }

        return (int) $percentage;
    }

    // Calculate the actual discount amount
    public function discountAmount()
    {
        if ($this->discount > 0) {
            if ($this->discount_type == 1) { // Percentage
                return ($this->discount / 100) * $this->sub_total;
            } else { // Fixed
                return $this->discount;
            }
        }
        return 0;
    }

    // Calculate the actual discount amount
    public function getDiscountAmountAttribute()
    {
        if ($this->discount > 0) {
            if ($this->discount_type == 1) { // Percentage
                return ($this->discount / 100) * $this->sub_total;
            } else { // Fixed
                return $this->discount;
            }
        }
        return 0;
    }

    // invoice total
    public function invoiceTotal()
    {
        $costOfProductReturn = isset($this->invoiceReturn) ? $this->invoiceReturn->total_return : 0;

        // Check if country is Saudi Arabia
        $country = \App\Models\GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
        $isSaudiArabia = $country === 'SA';

        $invoiceProducts = $this->invoiceProducts;
        $totalProductVat = 0;
        $totalProductDiscount = 0;
        $totalProductSubTotal = 0;
        foreach ($invoiceProducts as $invoiceProduct) {
            $totalProductVat += $invoiceProduct->tax_amount;
        }
        foreach ($invoiceProducts as $invoiceProduct) {
            $totalProductDiscount += $invoiceProduct->discount_amount;
        }
        foreach ($invoiceProducts as $invoiceProduct) {
            $totalProductSubTotal += $invoiceProduct->sale_price * $invoiceProduct->quantity;
        }


        // Calculate global discount
        $globalDiscount = 0;
        if ($this->discount > 0) {
            if ($this->discount_type == 1) { // Percentage
                $globalDiscount = ($this->discount / 100) * $this->sub_total;
            } else { // Fixed
                $globalDiscount = $this->discount;
            }
        }

        // Calculate tax on amount AFTER global discount
        $taxAmount = 0;
        if (isset($this->invoiceTax) && $this->invoiceTax->rate > 0) {
            $taxableAmount = $this->sub_total - $globalDiscount;
            if (isset($this->invoiceReturn)) {
                $taxableAmount = $taxableAmount - $this->invoiceReturn->total_return;
            }
            $taxAmount = ($this->invoiceTax->rate / 100) * $taxableAmount;
        }

        if ($isSaudiArabia) {
            // For Saudi Arabia: sub_total stored from frontend ALREADY includes VAT + discount adjustments
            // The frontend sends: subTotal = sum of (totalAfterDiscount + totalTax) for all products
            // So sub_total is the final amount with VAT included
            // We just need to apply global discount and transport adjustments
            // return $this->sub_total - $globalDiscount + $this->transport - $costOfProductReturn;
            return $this->sub_total - $globalDiscount + $this->transport ;
        } else {
            // For other countries: sub_total doesn't include VAT, so add it
            $totalTax = $taxAmount + $totalProductVat;
            // return $this->sub_total - $globalDiscount + $totalTax + $this->transport - $costOfProductReturn;
            return $this->sub_total - $globalDiscount + $totalTax + $this->transport ;
        }
    }

    // purchase total paid
    public function invoiceTotalPaid()
    {
        $totalPaid = 0;
        // Use payment vouchers instead of invoice payments
        $paymentVouchers = $this->paymentVouchers;
        // total paid
        if (isset($paymentVouchers) && $paymentVouchers->count() > 0) {
            $totalPaid = $paymentVouchers->sum('amount');
        } else {
            // Fallback to old invoice payments for backward compatibility
            $invoicePayments = $this->invoicePayments;
            if (isset($invoicePayments)) {
                $totalPaid = $invoicePayments->sum('amount');
            }
        }

        return $totalPaid;
    }

    // invoice total due
    public function totalDue()
    {
        $due = $this->invoiceTotal() - $this->invoiceTotalPaid();
        $costOfReturn = isset($this->invoiceReturn) ? $this->invoiceReturn->total_return : 0;
        $due = $due - $costOfReturn;
        
        return $due >= 0 ? $due : 0;
    }

    // Get original invoice total (without returns) for index listing  
    public function originalInvoiceTotal()
    {
        // Simply return invoiceTotal() + the return amount (undo the return deduction)
        $returnAmount = isset($this->invoiceReturn) ? $this->invoiceReturn->total_return : 0;
        return $this->invoiceTotal() + $returnAmount;
    }

    // Get original invoice tax amount (without returns) for index listing
    public function originalTaxAmount()
    {
        // Tax is affected by returns in the taxAmount() calculation
        // We need to recalculate without considering returns
        
        $taxRate = $this->invoiceTax;
        $totalTax = 0;
        $subTotal = $this->sub_total;
        
        // Calculate global discount
        $globalDiscount = 0;
        if ($this->discount > 0) {
            if ($this->discount_type == 1) { // Percentage
                $globalDiscount = ($this->discount / 100) * $this->sub_total;
            } else { // Fixed
                $globalDiscount = $this->discount;
            }
        }
        
        // Calculate invoice-level tax WITHOUT considering returns
        if (isset($taxRate) && $taxRate->rate > 0) {
            $taxableAmount = $subTotal - $globalDiscount;
            $totalTax = ($taxRate->rate / 100) * $taxableAmount;
        }

        // Check if country is Saudi Arabia
        $country = \App\Models\GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
        $isSaudiArabia = $country === 'SA';
        
        // For non-Saudi Arabia: Add product-level VAT
        // For Saudi Arabia: VAT is already in sub_total, so only return invoice-level tax
        if (!$isSaudiArabia) {
            $totalProductVat = 0;
            $invoiceProducts = $this->invoiceProducts;
            foreach ($invoiceProducts as $invoiceProduct) {
                $totalProductVat += $invoiceProduct->tax_amount;
            }
            return $totalTax + $totalProductVat;
        }
        
        // For Saudi Arabia: only return invoice-level tax (product VAT is already in sub_total)
        return $totalTax;
    }

    // Get original invoice due (without returns) for index listing
    public function originalTotalDue()
    {
        $due = $this->originalInvoiceTotal() - $this->invoiceTotalPaid();
        return $due >= 0 ? $due : 0;
    }

    /**
     * Get the invoice products.
     */
    public function invoiceProducts()
    {
        return $this->hasMany(InvoiceProduct::class, 'invoice_id', 'id')->orderBy('product_id');
    }

    /**
     * Get the invoice payments.
     */
    public function invoicePayments()
    {
        return $this->hasMany(InvoicePayment::class, 'invoice_id');
    }

    /**
     * Get the payment vouchers for this invoice.
     */
    public function paymentVouchers()
    {
        return $this->hasMany(PaymentVoucher::class, 'invoice_id')->where('payment_method', 'invoice');
    }

    /**
     * Get the invoice returns.
     */
    public function invoiceReturn()
    {
        return $this->hasOne(InvoiceReturn::class, 'invoice_id');
    }

    /**
     * Get the invoice return products.
     */
    public function invoiceReturnProducts()
    {
        return $this->hasManyThrough(InvoiceReturnProduct::class, InvoiceReturn::class, 'invoice_id', 'return_id')->orderBy('product_id');
    }

    /**
     * Get the client for this quotation.
     */
    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    /**
     * Get the tax for this invoice.
     */
    public function invoiceTax()
    {
        return $this->belongsTo(VatRate::class, 'tax_id');
    }

    /**
     * Get the user who had created this invoice.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the fiscal year for this invoice.
     */
    public function fiscalYear()
    {
        return $this->belongsTo(FiscalYear::class, 'fiscal_year_id');
    }

    /**
     * Get the accounting period for this invoice.
     */
    public function accountingPeriod()
    {
        return $this->belongsTo(AccountingPeriod::class, 'accounting_period_id');
    }

    /**
     * Get the branch for this invoice.
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
}

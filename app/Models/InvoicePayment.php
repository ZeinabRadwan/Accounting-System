<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoicePayment extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'invoice_id', 'slug',  'amount', 'transaction_id', 'date', 'note', 'attachment', 'status', 'created_by', 'branch_id', 'payment_method_id', 'analytical_account_id',
    ];

    protected $casts = [
        'status' => 'integer',
    ];

    /**
     * Get the invoice for this  payment.
     */
    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoice_id');
    }

    /**
     * Get the  tansaction for this payroll.
     */
    public function invoicePaymentTransaction()
    {
        return $this->belongsTo(AccountTransaction::class, 'transaction_id');
    }

    /**
     * Get the user who had created this payment.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the payment method for this payment.
     */
    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method_id');
    }

    /**
     * Get the analytical account for this payment.
     */
    public function analyticalAccount()
    {
        return $this->belongsTo(AnalyticalAccount::class, 'analytical_account_id');
    }

    /**
     * Get the analytical account ID for this payment.
     * Returns stored value or gets from payment method.
     */
    public function getAnalyticalAccountId(): ?int
    {
        // Return stored analytical account if available
        if ($this->analytical_account_id) {
            return $this->analytical_account_id;
        }

        // Try to get from payment method
        if ($this->payment_method_id && $this->paymentMethod) {
            $branchId = $this->branch_id ?? (auth()->user()->default_branch_id ?? null);
            $analyticalAccount = $this->paymentMethod->getBranchAccount($branchId);

            return $analyticalAccount ? $analyticalAccount->id : null;
        }

        return null;
    }

    /**
     * Check if payment is cancelled
     */
    public function isCancelled()
    {
        return $this->status === 2;
    }

    /**
     * Check if payment is active
     */
    public function isActive()
    {
        return $this->status === 1;
    }

    /**
     * Check if payment is inactive
     */
    public function isInactive()
    {
        return $this->status === 0;
    }
}

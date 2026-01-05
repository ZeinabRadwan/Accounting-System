<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentVoucher extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'slug',
        'voucher_type',
        'entity_type',
        'client_id',
        'supplier_id',
        'chart_of_account_id',
        'payment_method',
        'payment_method_id',
        'invoice_id',
        'purchase_id',
        'amount',
        'account_id',
        'transaction_id',
        'date',
        'cheque_no',
        'receipt_no',
        'note',
        'status',
        'created_by',
        'branch_id',
        'analytical_account_id',
    ];

    /**
     * Get the client
     */
    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    /**
     * Get the supplier
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

    /**
     * Get the chart of account
     */
    public function chartOfAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'chart_of_account_id');
    }

    /**
     * Get the invoice
     */
    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoice_id');
    }

    /**
     * Get the purchase
     */
    public function purchase()
    {
        return $this->belongsTo(Purchase::class, 'purchase_id');
    }

    /**
     * Get the account
     */
    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id');
    }

    /**
     * Get the transaction for this payment.
     */
    public function transaction()
    {
        return $this->belongsTo(AccountTransaction::class, 'transaction_id');
    }

    /**
     * Get the user who created this voucher
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the payment method for this voucher.
     */
    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_method_id');
    }

    /**
     * Get the analytical account for this voucher.
     */
    public function analyticalAccount()
    {
        return $this->belongsTo(AnalyticalAccount::class, 'analytical_account_id');
    }

    /**
     * Get the analytical account ID for this voucher.
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
     * Check if voucher is receive type (قبض)
     */
    public function isReceive()
    {
        return $this->voucher_type === 1;
    }

    /**
     * Check if voucher is send type (صرف)
     */
    public function isSend()
    {
        return $this->voucher_type === 0;
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

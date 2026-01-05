<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NonInvoicePayment extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'client_id', 'slug', 'amount', 'type', 'transaction_id', 'cheque_no', 'receipt_no',  'date', 'note', 'status', 'created_by', 'branch_id', 'payment_method_id', 'analytical_account_id',
    ];

    /**
     * Get the client
     */
    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    /**
     * Get the  tansaction for this payment.
     */
    public function paymentTransaction()
    {
        return $this->belongsTo(AccountTransaction::class, 'transaction_id');
    }

    /**
     * Get the user who has created this account
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
}

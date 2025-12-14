<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethodBranchAccount extends Model
{
    use HasFactory;

    protected $table = 'payment_method_branch_accounts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'payment_method_id',
        'branch_id',
        'chart_of_account_id',
    ];

    /**
     * Get the payment method.
     */
    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class);
    }

    /**
     * Get the branch.
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * Get the chart of account.
     */
    public function chartOfAccount()
    {
        return $this->belongsTo(ChartOfAccount::class);
    }
}

<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    use HasFactory, Sluggable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'code', 'note', 'status', 'analytical_account_id',
    ];

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
     * Get the analytical account for this payment method.
     */
    public function analyticalAccount()
    {
        return $this->belongsTo(AnalyticalAccount::class, 'analytical_account_id');
    }

    /**
     * Get the branch-specific analytical accounts for this payment method.
     */
    public function branchAccounts()
    {
        return $this->hasMany(PaymentMethodBranchAccount::class);
    }

    /**
     * Get the analytical account for a specific branch.
     * Returns analytical account from branch-specific mapping, or falls back to payment method's analytical account.
     *
     * @param  int  $branchId
     * @return \App\Models\AnalyticalAccount|null
     */
    public function getBranchAccount($branchId)
    {
        // First, try to get branch-specific analytical account
        $branchAccount = $this->branchAccounts()->where('branch_id', $branchId)->first();

        if ($branchAccount && $branchAccount->analyticalAccount) {
            return $branchAccount->analyticalAccount;
        }

        // Fall back to payment method's default analytical account
        return $this->analyticalAccount;
    }
}

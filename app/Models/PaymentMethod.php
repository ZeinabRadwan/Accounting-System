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
        'name', 'slug', 'code', 'note', 'status', 'chart_of_account_id',
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
     * Get the chart of account for this payment method.
     */
    public function chartOfAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'chart_of_account_id');
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
     *
     * @param  int  $branchId
     * @return \App\Models\ChartOfAccount|null
     */
    public function getBranchAccount($branchId)
    {
        $branchAccount = $this->branchAccounts()->where('branch_id', $branchId)->first();

        return $branchAccount ? $branchAccount->chartOfAccount : null;
    }
}

<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use App\Models\ChartOfAccount;

class Account extends Model
{
    use Sluggable, HasFactory, SoftDeletes;

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope('forUserBranch', function ($query) {
            $user = Auth::user();
            if ($user && $user->default_branch_id) {
                // Only show accounts where branch_id equals user's default branch
                // Exclude accounts where branch_id is null
                $query->where('branch_id', $user->default_branch_id);
            } else {
                // If no user or no default branch, show no accounts
                $query->whereRaw('1 = 0');
            }
        });
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'bank_name', 'branch_name', 'account_number', 'date', 'image_path', 'created_by', 'chart_of_account_id', 'note', 'status', 'branch_id',
    ];

    protected $appends = ['available_balance'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'account_number',
            ],
        ];
    }

    /**
     * Get the code with prefix.
     *
     * @return string
     */
    public function getAvailableBalanceAttribute()
    {
        return $this->availableBalance();
    }

    /**
     * Get the available balance
     */
    public function availableBalance()
    {
        return $this->totalCredits() - $this->totalDebits();
    }

    /**
     * Get the total credits
     */
    public function totalCredits()
    {
        return $this->balanceTransactions()->where('status', 1)->where('type', 1)->sum('amount');
    }

    /**
     * Get the all debits
     */
    public function totalDebits()
    {
        return $this->balanceTransactions()->where('status', 1)->where('type', 0)->sum('amount');
    }

    /**
     * Get the balance transactions
     */
    public function balanceTransactions()
    {
        return $this->hasMany(AccountTransaction::class, 'account_id');
    }

    /**
     * Get the user who has created this account
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the chart of account this cashbook account is linked to
     */
    public function chartOfAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'chart_of_account_id');
    }

    /**
     * Get the chart of account ID for journal entries
     */
    public function getChartOfAccountIdForJournal()
    {
        // If this account has a linked chart of account, use it
        if ($this->chart_of_account_id) {
            return $this->chart_of_account_id;
        }
        
        // Otherwise, fall back to the default "Bank Accounts" chart of account
        $defaultBankAccount = ChartOfAccount::whereHas('type', function($query) {
            $query->where('name', 'Asset');
        })->where('name', 'like', '%Bank Accounts%')
        ->where('is_active', true)
        ->first();
        
        return $defaultBankAccount ? $defaultBankAccount->id : null;
    }

    /**
     * Check if this account is properly connected to a chart of account
     */
    public function isChartOfAccountConnected(): bool
    {
        return $this->chart_of_account_id !== null;
    }

    /**
     * Get validation error message if chart of account is not connected
     */
    public function getChartOfAccountValidationMessage(): string
    {
        if (!$this->isChartOfAccountConnected()) {
            return "Cashbook account '{$this->bank_name} [{$this->account_number}]' is not connected to any Chart of Account. Please link it to a Chart of Account before using it in transactions.";
        }
        return '';
    }

    /**
     * Get the branch for this account.
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * Scope: filter accounts by branch ID
     * This can be used to override the global scope if needed
     */
    public function scopeForBranch($query, $branchId)
    {
        if ($branchId) {
            return $query->where('branch_id', $branchId);
        }
        return $query->whereRaw('1 = 0'); // Return no results if no branch ID
    }
}

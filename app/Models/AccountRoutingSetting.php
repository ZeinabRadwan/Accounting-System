<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountRoutingSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'branch_id',
        'module',
        'setting_key',
        'setting_name',
        'parent_account_id',
        'routing_type',
        'main_account_id',
        'routing_type_options',
        'account_type',
        'description',
        'is_required',
        'is_active',
    ];

    protected $casts = [
        'is_required' => 'boolean',
        'is_active' => 'boolean',
        'routing_type_options' => 'array',
    ];

    /**
     * Get the branch this setting belongs to
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * Get the main account (this is the single account field for all routing types)
     */
    public function mainAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'main_account_id');
    }

    /**
     * Get the parent account (legacy field)
     */
    public function parentAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'parent_account_id');
    }

    /**
     * Get child accounts under this main account
     */
    public function childAccounts()
    {
        return $this->hasMany(ChartOfAccount::class, 'parent_id', 'main_account_id');
    }

    /**
     * Get child accounts under the parent account (legacy)
     */
    public function parentChildAccounts()
    {
        return $this->hasMany(ChartOfAccount::class, 'parent_id', 'parent_account_id');
    }

    /**
     * Get all accounts (parent + children) for this setting
     * Filters to only show accounts at level 4 and below
     */
    public function getAllAccounts()
    {
        $branchId = \Illuminate\Support\Facades\Auth::user()->default_branch_id ?? null;
        $accounts = collect();

        // Check for main account first (newer approach)
        if ($this->main_account_id) {
            $mainAccount = ChartOfAccount::forBranch($branchId)
                ->with(['parent.parent.parent.parent'])
                ->find($this->main_account_id);
            if ($mainAccount && $mainAccount->is_active) {
                // Only include main account if it's at level 4 or below
                if ($mainAccount->getLevel() <= 4) {
                    $accounts->push($mainAccount);
                }

                // Get child accounts and filter by level
                $childAccounts = ChartOfAccount::forBranch($branchId)
                    ->where('parent_id', $this->main_account_id)
                    ->where('is_active', true)
                    ->with(['parent.parent.parent.parent'])
                    ->get()
                    ->filter(function ($account) {
                        return $account->getLevel() <= 4;
                    });
                $accounts = $accounts->merge($childAccounts);
            }
        }
        // Fallback to parent account (legacy approach)
        elseif ($this->parent_account_id) {
            $parentAccount = ChartOfAccount::forBranch($branchId)
                ->with(['parent.parent.parent.parent'])
                ->find($this->parent_account_id);
            if ($parentAccount && $parentAccount->is_active) {
                // Only include parent account if it's at level 4 or below
                if ($parentAccount->getLevel() <= 4) {
                    $accounts->push($parentAccount);
                }

                // Get child accounts and filter by level
                $childAccounts = ChartOfAccount::forBranch($branchId)
                    ->where('parent_id', $this->parent_account_id)
                    ->where('is_active', true)
                    ->with(['parent.parent.parent.parent'])
                    ->get()
                    ->filter(function ($account) {
                        return $account->getLevel() <= 4;
                    });
                $accounts = $accounts->merge($childAccounts);
            }
        }

        return $accounts;
    }

    /**
     * Get accounts for dropdown selection
     */
    public function getAccountsForDropdown()
    {
        return $this->getAllAccounts()->map(function ($account) {
            return [
                'id' => $account->id,
                'name' => $account->name,
                'code' => $account->code,
                'type' => $account->type ? $account->type->name : 'Unknown',
            ];
        });
    }

    /**
     * Check if this setting is properly configured
     */
    public function isConfigured()
    {
        return ! is_null($this->main_account_id);
    }

    /**
     * Get validation message if not configured
     */
    public function getValidationMessage()
    {
        if (! $this->isConfigured()) {
            return "{$this->setting_name} is not configured. Please set an account in Accounting Settings.";
        }

        return null;
    }
}

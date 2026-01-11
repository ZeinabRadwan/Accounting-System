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
     * Get all accounts (main account + all descendants) for this setting
     * Returns the main account and all its child accounts recursively
     */
    public function getAllAccounts()
    {
        $branchId = \Illuminate\Support\Facades\Auth::user()->default_branch_id ?? null;
        $accounts = collect();

        // Check for main account first (newer approach)
        if ($this->main_account_id) {
            $mainAccount = ChartOfAccount::forBranch($branchId)
                ->find($this->main_account_id);

            if ($mainAccount && $mainAccount->is_active) {
                // Always include the main account
                $accounts->push($mainAccount);

                // Get ALL descendants recursively (not just direct children)
                $allChildren = $mainAccount->getAllChildren();
                $accounts = $accounts->merge($allChildren);
            }
        }
        // Fallback to parent account (legacy approach)
        elseif ($this->parent_account_id) {
            $parentAccount = ChartOfAccount::forBranch($branchId)
                ->find($this->parent_account_id);

            if ($parentAccount && $parentAccount->is_active) {
                // Always include the parent account
                $accounts->push($parentAccount);

                // Get ALL descendants recursively (not just direct children)
                $allChildren = $parentAccount->getAllChildren();
                $accounts = $accounts->merge($allChildren);
            }
        }

        // Filter to only active accounts
        return $accounts->filter(function ($account) {
            return $account->is_active;
        })->unique('id');
    }

    /**
     * Get accounts for dropdown selection
     * Includes main account and all descendants with hierarchy indication
     */
    public function getAccountsForDropdown()
    {
        $allAccounts = $this->getAllAccounts();
        $mainAccountId = $this->main_account_id ?? $this->parent_account_id;

        return $allAccounts->map(function ($account) use ($mainAccountId) {
            $isMainAccount = $account->id == $mainAccountId;
            $indent = $isMainAccount ? '' : '  '; // Indent child accounts

            return [
                'id' => $account->id,
                'name' => $account->name,
                'code' => $account->code,
                'type' => $account->type ? $account->type->name : 'Unknown',
                'is_main' => $isMainAccount,
                'display_name' => $isMainAccount
                    ? $account->code.' - '.$account->name.' (Main)'
                    : $indent.$account->code.' - '.$account->name,
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

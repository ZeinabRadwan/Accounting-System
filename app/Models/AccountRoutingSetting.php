<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountRoutingSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'module',
        'setting_key',
        'setting_name',
        'parent_account_id',
        'account_type',
        'description',
        'is_required',
        'is_active'
    ];

    protected $casts = [
        'is_required' => 'boolean',
        'is_active' => 'boolean',
    ];

    /**
     * Get the parent account
     */
    public function parentAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'parent_account_id');
    }

    /**
     * Get child accounts under this parent
     */
    public function childAccounts()
    {
        return $this->hasMany(ChartOfAccount::class, 'parent_id', 'parent_account_id');
    }

    /**
     * Get all accounts (parent + children) for this setting
     */
    public function getAllAccounts()
    {
        $accounts = collect();
        
        if ($this->parentAccount) {
            $accounts->push($this->parentAccount);
            $accounts = $accounts->merge($this->childAccounts);
        }
        
        return $accounts->filter(function ($account) {
            return $account->is_active;
        });
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
                'type' => $account->type ? $account->type->name : 'Unknown'
            ];
        });
    }

    /**
     * Check if this setting is properly configured
     */
    public function isConfigured()
    {
        return !is_null($this->parent_account_id);
    }

    /**
     * Get validation message if not configured
     */
    public function getValidationMessage()
    {
        if (!$this->isConfigured()) {
            return "{$this->setting_name} is not configured. Please set a parent account in Accounting Settings.";
        }
        return null;
    }
}

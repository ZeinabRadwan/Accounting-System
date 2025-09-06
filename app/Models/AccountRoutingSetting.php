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
        'routing_type',
        'main_account_id',
        'routing_type_options',
        'account_type',
        'description',
        'is_required',
        'is_active'
    ];

    protected $casts = [
        'is_required' => 'boolean',
        'is_active' => 'boolean',
        'routing_type_options' => 'array',
    ];

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
     */
    public function getAllAccounts()
    {
        $accounts = collect();
        
        // Check for main account first (newer approach)
        if ($this->mainAccount) {
            $accounts->push($this->mainAccount);
            $accounts = $accounts->merge($this->childAccounts);
        }
        // Fallback to parent account (legacy approach)
        elseif ($this->parentAccount) {
            $accounts->push($this->parentAccount);
            $accounts = $accounts->merge($this->parentChildAccounts);
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
        switch ($this->routing_type) {
            case 'automatic':
                return !is_null($this->main_account_id);
            case 'per_each':
                return true; // No account needed for per each routing
            case 'main_account_per_each':
                return !is_null($this->main_account_id);
            case 'cancel':
                return true; // No account needed for cancel routing
            default:
                return false;
        }
    }

    /**
     * Get validation message if not configured
     */
    public function getValidationMessage()
    {
        if (!$this->isConfigured()) {
            switch ($this->routing_type) {
                case 'automatic':
                    return "{$this->setting_name} is not configured. Please set a main account in Accounting Settings.";
                case 'main_account_per_each':
                    return "{$this->setting_name} is not configured. Please set a main account in Accounting Settings.";
                default:
                    return "{$this->setting_name} is not configured.";
            }
        }
        return null;
    }

    /**
     * Get routing type display name
     */
    public function getRoutingTypeDisplayName()
    {
        switch ($this->routing_type) {
            case 'automatic':
                return 'Automatic Account Routing';
            case 'per_each':
                return 'Specify Per Each';
            case 'main_account_per_each':
                return 'Specify Main Account Per Each';
            case 'cancel':
                return 'Cancel Account Routing';
            default:
                return 'Unknown';
        }
    }

    /**
     * Check if main account dropdown should be shown
     */
    public function shouldShowMainAccount()
    {
        return in_array($this->routing_type, ['automatic', 'main_account_per_each']);
    }

    /**
     * Get routing type options for this setting
     */
    public function getRoutingTypeOptions()
    {
        if ($this->routing_type_options && is_array($this->routing_type_options)) {
            return $this->routing_type_options;
        }
        
        // Default options if none specified
        return [
            [
                'label' => 'Automatic Account Routing',
                'description' => 'System automatically routes to the selected parent account',
                'value' => 'automatic'
            ],
            [
                'label' => 'Specify Per Each',
                'description' => 'You will specify accounts individually for each item',
                'value' => 'per_each'
            ],
            [
                'label' => 'Specify Main Account Per Each',
                'description' => 'You will specify a main account and then individual accounts',
                'value' => 'main_account_per_each'
            ]
        ];
    }
}

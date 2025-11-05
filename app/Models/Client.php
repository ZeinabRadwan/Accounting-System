<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use Sluggable, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'client_id', 'email', 'phone', 'phone_secondary', 'status', 'image_path', 'type', 'chart_of_account_id', 'branch_id',
        // Account and billing details
        'code_number', 'notes', 'display_language',
        // Name fields (conditional based on type)
        'full_name', 'business_name', 'first_name', 'last_name', 'company_name',
        // Address information (handle both legacy and new fields)
        'address', 'street_address1', 'street_address2', 'city', 'state', 'postal_code', 'country', 'neighbourhood',
        // Business-specific fields (handle both naming conventions)
        'commercial_register', 'tax_card', 'tax_registration_number',
        // Settings and preferences
        'is_send_email', 'is_send_sms',
        // Media and attachments
        'attachments', 'phone_number'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'attachments' => 'array',
        'add_secondary_address' => 'boolean',
        'is_send_email' => 'boolean',
        'is_send_sms' => 'boolean',
        'status' => 'boolean',
    ];

    /**
     * Get the display name based on client type
     */
    public function getDisplayNameAttribute()
    {
        if ($this->type === 'Individual') {
            return $this->full_name ?: $this->name;
        } else {
            return $this->business_name ?: $this->name;
        }
    }

    /**
     * Get the primary contact name
     */
    public function getPrimaryContactNameAttribute()
    {
        if ($this->type === 'Individual') {
            return $this->full_name ?: $this->name;
        } else {
            if ($this->first_name && $this->last_name) {
                return $this->first_name . ' ' . $this->last_name;
            }
            return $this->first_name ?: $this->last_name ?: $this->name;
        }
    }

    /**
     * Get the primary phone number
     */
    public function getPrimaryPhoneAttribute()
    {
        return $this->phone_number ?: $this->phone;
    }

    /**
     * Get the complete address
     */
    public function getCompleteAddressAttribute()
    {
        $addressParts = [];
        
        if ($this->street_address1) $addressParts[] = $this->street_address1;
        if ($this->street_address2) $addressParts[] = $this->street_address2;
        if ($this->country) $addressParts[] = $this->country;
        if ($this->state) $addressParts[] = $this->state;
        if ($this->city) $addressParts[] = $this->city;
        if ($this->neighbourhood) $addressParts[] = $this->neighbourhood;
        if ($this->postal_code) $addressParts[] = $this->postal_code;
        
        return implode(', ', $addressParts);
    }

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
            ],
        ];
    }

    // return client invoices total
    public function clientInvoiceTotal()
    {
        $invoiceTotal = 0;
        $invoices = $this->clientInvoices;
        if ($invoices) {
            $invoiceTotal = $invoices->where('status', 1)->sum('calculated_total');
        }
        return $invoiceTotal;
    }

    // return client total paid
    public function clientTotalPaid()
    {
        $totalPaid = 0;
        if (isset($this->invoicePayments)) {
            $totalPaid = $this->invoicePayments->where('status', 1)->sum('amount');
        }
        return $totalPaid;
    }

    // return client due
    public function clientDue()
    {
        $due = $this->clientInvoices->sum('calculated_due');
        return $due;
    }

    // return client sub total
    public function clientSubTotal()
    {
        $subTotal = 0;
        $invoices = $this->clientInvoices;
        if ($invoices) {
            $subTotal = $invoices->sum('sub_total');
        }

        return $subTotal;
    }

    // return client total discount
    public function clientInvoiceDiscount()
    {
        $discount = 0;
        $invoices = $this->clientInvoices;
        if ($invoices) {
            $discount = $invoices->sum('discount');
        }
        return $discount;
    }

    // return client total transport cost
    public function clientInvoiceTransportCost()
    {
        $transportCost = 0;
        $invoices = $this->clientInvoices;
        if ($invoices) {
            $transportCost = $invoices->sum('transport');
        }
        return $transportCost;
    }

    // return client total non invoice due
    public function nonInvoiceTotalDue()
    {
        $totalDue = 0;
        $dues = $this->clientNonInvoiceDues;
        if (isset($dues)) {
            $totalDue = $dues->where('status', 1)->sum('amount');
        }
        return $totalDue;
    }

    // return client total non invoice paid
    public function nonInvoicePaid()
    {
        $totalPaid = 0;
        $paid = $this->clientNonInvoicePayments;
        if (isset($paid)) {
            $totalPaid = $paid->where('status', 1)->sum('amount');
        }
        return $totalPaid;
    }

    // return client total non invoice current due
    public function nonInvoiceCurrentDue()
    {
        return $this->nonInvoiceTotalDue() - $this->nonInvoicePaid();
    }

    /**
     * Get the non invoice dues
     */
    public function clientNonInvoiceDues()
    {
        return $this->hasMany(NonInvoicePayment::class, 'client_id')->where('type', 0);
    }

    /**
     * Get the non invoice payments
     */
    public function clientNonInvoicePayments()
    {
        return $this->hasMany(NonInvoicePayment::class, 'client_id')->where('type', 1);
    }

    /**
     * Get the invoices.
     */
    public function clientInvoices()
    {
        return $this->hasMany(Invoice::class, 'client_id');
    }

    /**
     * Get the invoice payments for the client.
     */
    public function invoicePayments()
    {
        return $this->hasManyThrough(InvoicePayment::class, Invoice::class, 'client_id', 'invoice_id');
    }

    public function routeNotificationForTwilio()
    {
        return $this->phone;
    }

    /**
     * Get the chart of account for the client.
     */
    public function chartOfAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'chart_of_account_id');
    }

    /**
     * Ensure client has a chart of account assigned and load the relationship.
     */
    public function ensureChartOfAccountLoaded()
    {
        // If no chart of account is assigned, assign one
        if (!$this->chart_of_account_id) {
            $clientData = [
                'type' => $this->type ?? 'Company'
            ];
            $clientData = self::assignDefaultChartOfAccount($clientData);
            if (isset($clientData['chart_of_account_id'])) {
                $this->update(['chart_of_account_id' => $clientData['chart_of_account_id']]);
            }
        }
        
        // Load the relationship if not already loaded
        if (!$this->relationLoaded('chartOfAccount')) {
            $this->load('chartOfAccount');
        }
        
        return $this;
    }

    /**
     * Get the representatives for the client.
     */
    public function representatives()
    {
        return $this->hasMany(ClientRepresentative::class);
    }

    /**
     * Get the primary representative for the client.
     */
    public function primaryRepresentative()
    {
        return $this->hasOne(ClientRepresentative::class)->where('is_primary', true);
    }

    /**
     * Get the chart of account ID for journal entries.
     */
    public function getChartOfAccountIdForJournal()
    {
        return $this->chart_of_account_id;
    }

    /**
     * Check if the client is connected to a chart of account.
     */
    public function isChartOfAccountConnected()
    {
        return !is_null($this->chart_of_account_id);
    }

    /**
     * Get validation message for chart of account connection.
     */
    public function getChartOfAccountValidationMessage()
    {
        if (!$this->isChartOfAccountConnected()) {
            return 'Client must be connected to a Chart of Account for journal entries.';
        }
        return null;
    }

    /**
     * Automatically assign default Chart of Account if none is set
     */
    public static function assignDefaultChartOfAccount($clientData)
    {
        // If chart_of_account_id is already provided, use it
        if (isset($clientData['chart_of_account_id']) && $clientData['chart_of_account_id']) {
            return $clientData;
        }

        // Get the clients account routing setting
        $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'clients_account')
            ->where('is_active', true)
            ->first();
        
        if ($routingSetting && $routingSetting->parent_account_id) {
            // Use the parent account from routing setup
            $defaultAccount = $routingSetting->parentAccount;
            
            if ($defaultAccount && $defaultAccount->is_active) {
                $clientData['chart_of_account_id'] = $defaultAccount->id;
                return $clientData;
            }
        }
        
        // Fallback to the old logic if routing is not configured
        $defaultAccount = null;
        
        if (isset($clientData['type'])) {
            switch ($clientData['type']) {
                case 'Company':
                    // Look for "Accounts Receivable - Companies" or similar
                    $defaultAccount = \App\Models\ChartOfAccount::where('is_active', true)
                        ->where('name', 'like', '%Accounts Receivable%')
                        ->where('name', 'like', '%Company%')
                        ->first();
                    break;
                case 'Individual':
                    // Look for "Accounts Receivable - Individuals" or similar
                    $defaultAccount = \App\Models\ChartOfAccount::where('is_active', true)
                        ->where('name', 'like', '%Accounts Receivable%')
                        ->where('name', 'like', '%Individual%')
                        ->first();
                    break;
            }
        }

        // Fallback to any Accounts Receivable account
        if (!$defaultAccount) {
            $defaultAccount = \App\Models\ChartOfAccount::where('is_active', true)
                ->where('name', 'like', '%Accounts Receivable%')
                ->first();
        }

        // Final fallback to any active account
        if (!$defaultAccount) {
            $defaultAccount = \App\Models\ChartOfAccount::where('is_active', true)->first();
        }

        if ($defaultAccount) {
            $clientData['chart_of_account_id'] = $defaultAccount->id;
        }

        return $clientData;
    }

    /**
     * Get the branch for this client.
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
}
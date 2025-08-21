<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use Sluggable, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'client_id', 'email', 'phone', 'company_name', 'address', 'status', 'image_path','tax_registration_number', 'type', 'chart_of_account_id',
    ];

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

        // Auto-assign based on client type or other criteria
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
}
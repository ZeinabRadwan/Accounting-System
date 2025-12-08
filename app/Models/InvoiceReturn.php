<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoiceReturn extends Model
{
    use HasFactory, Sluggable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'return_no', 'reason', 'slug', 'invoice_id', 'transaction_id', 'total_return', 'date', 'note', 'status', 'created_by', 'fiscal_year_id', 'accounting_period_id', 'branch_id',
    ];

    /**
     * Return the sluggable configuration array for this model.
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'reason',
            ],
        ];
    }

    /**
     * Get the invocie for this return.
     */
    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoice_id');
    }

    /**
     * Get the invoice return products.
     */
    public function invoiceReturnProducts()
    {
        return $this->hasMany(InvoiceReturnProduct::class, 'return_id')->orderBy('product_id');
    }

    /**
     * Get the transaction for this return.
     */
    public function returnTransaction()
    {
        return $this->belongsTo(AccountTransaction::class, 'transaction_id');
    }

    /**
     * Get the user who had created this return.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the journal entries for this invoice return.
     */
    public function journalEntries()
    {
        return $this->morphMany(\App\Models\JournalEntry::class, 'source');
    }

    /**
     * Get the latest journal entry for this invoice return.
     */
    public function latestJournalEntry()
    {
        return $this->morphOne(\App\Models\JournalEntry::class, 'source')->latest();
    }

    /**
     * Get the main journal entry for this invoice return (first one).
     */
    public function journalEntry()
    {
        return $this->morphOne(\App\Models\JournalEntry::class, 'source', 'source_type', 'source_id')
            ->orderBy('id', 'desc');
    }

    /**
     * Get the fiscal year for this invoice return.
     */
    public function fiscalYear()
    {
        return $this->belongsTo(FiscalYear::class, 'fiscal_year_id');
    }

    /**
     * Get the accounting period for this invoice return.
     */
    public function accountingPeriod()
    {
        return $this->belongsTo(AccountingPeriod::class, 'accounting_period_id');
    }
}

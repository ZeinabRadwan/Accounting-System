<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceReturnJournal extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'invoice_return_id',
        'journal_entry_id',
        'type',
    ];

    /**
     * Get the invoice return.
     */
    public function invoiceReturn()
    {
        return $this->belongsTo(InvoiceReturn::class);
    }

    /**
     * Get the journal entry.
     */
    public function journalEntry()
    {
        return $this->belongsTo(JournalEntry::class);
    }
}

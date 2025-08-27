<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InvoiceJournal extends Model
{
    protected $fillable = [
        'invoice_id',
        'journal_entry_id',
        'type',
    ];

    /**
     * Get the invoice that owns the journal entry.
     */
    public function invoice(): BelongsTo
    {
        return $this->belongsTo(Invoice::class);
    }

    /**
     * Get the journal entry that owns the invoice.
     */
    public function journalEntry(): BelongsTo
    {
        return $this->belongsTo(JournalEntry::class);
    }
}

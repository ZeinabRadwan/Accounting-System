<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LoanJournal extends Model
{
    protected $fillable = [
        'loan_payment_id',
        'journal_entry_id',
    ];

    /**
     * Get the loan payment that owns the journal entry.
     */
    public function loanPayment(): BelongsTo
    {
        return $this->belongsTo(LoanPayment::class);
    }

    /**
     * Get the journal entry that owns the loan payment.
     */
    public function journalEntry(): BelongsTo
    {
        return $this->belongsTo(JournalEntry::class);
    }
}

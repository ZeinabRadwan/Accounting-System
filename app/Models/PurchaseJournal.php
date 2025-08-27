<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PurchaseJournal extends Model
{
    protected $fillable = [
        'purchase_id',
        'journal_entry_id',
        'type',
    ];

    /**
     * Get the purchase that owns the journal entry.
     */
    public function purchase(): BelongsTo
    {
        return $this->belongsTo(Purchase::class);
    }

    /**
     * Get the journal entry that owns the purchase.
     */
    public function journalEntry(): BelongsTo
    {
        return $this->belongsTo(JournalEntry::class);
    }
}

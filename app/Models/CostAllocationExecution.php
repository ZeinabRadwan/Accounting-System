<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CostAllocationExecution extends Model
{
    use HasFactory;

    protected $fillable = [
        'cost_allocation_rule_id',
        'execution_date',
        'period_start_date',
        'period_end_date',
        'total_amount',
        'journal_entry_id',
        'executed_by',
        'status',
        'notes',
        'error_message',
    ];

    protected $casts = [
        'execution_date' => 'date',
        'period_start_date' => 'date',
        'period_end_date' => 'date',
        'total_amount' => 'decimal:2',
    ];

    /**
     * Get the allocation rule
     */
    public function rule(): BelongsTo
    {
        return $this->belongsTo(CostAllocationRule::class, 'cost_allocation_rule_id');
    }

    /**
     * Get the journal entry created
     */
    public function journalEntry(): BelongsTo
    {
        return $this->belongsTo(JournalEntry::class);
    }

    /**
     * Get the user who executed this allocation
     */
    public function executor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'executed_by');
    }
}

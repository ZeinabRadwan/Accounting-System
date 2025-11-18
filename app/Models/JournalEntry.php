<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class JournalEntry extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'entry_number',
        'entry_date',
        'reference',
        'description',
        'total_debit',
        'total_credit',
        'status',
        'created_by',
        'posted_by',
        'posted_at',
        'source_type',
        'source_id',
        'fiscal_year_id',
        'accounting_period_id',
        'branch_id',
    ];

    protected $casts = [
        'entry_date' => 'date',
        'posted_at' => 'datetime',
        'total_debit' => 'decimal:2',
        'total_credit' => 'decimal:2',
    ];

    protected $appends = [
        'is_balanced',
        'balance_difference',
        'formatted_entry_number',
        'formatted_status',
    ];

    /**
     * Boot the model and add validation
     */
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->validateBalance();
        });
    }

    /**
     * Validate that debits equal credits
     */
    protected function validateBalance(): void
    {
        if (abs($this->total_debit - $this->total_credit) > 0.01) {
            throw new \InvalidArgumentException(__('journal.must_be_balanced'));
        }
    }

    /**
     * Get the journal entry lines
     */
    public function lines(): HasMany
    {
        return $this->hasMany(JournalEntryLine::class)->orderBy('line_number');
    }

    /**
     * Get the user who created this entry
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the user who posted this entry
     */
    public function poster(): BelongsTo
    {
        return $this->belongsTo(User::class, 'posted_by');
    }

    /**
     * Get the fiscal year for this journal entry
     */
    public function fiscalYear(): BelongsTo
    {
        return $this->belongsTo(FiscalYear::class, 'fiscal_year_id');
    }

    /**
     * Get the accounting period for this journal entry
     */
    public function accountingPeriod(): BelongsTo
    {
        return $this->belongsTo(AccountingPeriod::class, 'accounting_period_id');
    }

    /**
     * Get the source model (polymorphic relationship)
     */
    public function source()
    {
        return $this->morphTo();
    }

    /**
     * Get related account transactions (for backward compatibility)
     */
    public function accountTransactions(): HasMany
    {
        return $this->hasMany(AccountTransaction::class);
    }

    /**
     * Get the branch for this journal entry.
     */
    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * Scope: filter by branch
     */
    public function scopeForBranch($query, $branchId)
    {
        return $query->where('branch_id', $branchId);
    }

    /**
     * Check if the journal entry is balanced
     */
    public function getIsBalancedAttribute(): bool
    {
        return $this->total_debit == $this->total_credit;
    }

    /**
     * Get the balance difference
     */
    public function getBalanceDifferenceAttribute(): float
    {
        return abs($this->total_debit - $this->total_credit);
    }

    /**
     * Get formatted entry number
     */
    public function getFormattedEntryNumberAttribute(): string
    {
        return 'JE-' . str_pad($this->entry_number, 6, '0', STR_PAD_LEFT);
    }

    /**
     * Get formatted status
     */
    public function getFormattedStatusAttribute(): string
    {
        return __(ucfirst($this->status));
    }

    /**
     * Generate the next entry number
     */
    public static function generateEntryNumber(): string
    {
        $lastEntry = self::orderBy('entry_number', 'desc')->first();
        $nextNumber = $lastEntry ? (int)$lastEntry->entry_number + 1 : 1;
        return (string)$nextNumber;
    }

    /**
     * Post the journal entry
     */
    public function post(): bool
    {
        if ($this->status !== 'draft') {
            throw new \Exception('Only draft entries can be posted');
        }

        if (!$this->is_balanced) {
            throw new \Exception('Journal entry must be balanced before posting');
        }

        DB::transaction(function () {
            $this->update([
                'status' => 'posted',
                'posted_by' => Auth::id(),
                'posted_at' => now(),
            ]);

            // Update chart of account balances
            $this->updateAccountBalances();
        });

        return true;
    }

    /**
     * Void the journal entry
     */
    public function void(): bool
    {
        if ($this->status !== 'posted') {
            throw new \Exception('Only posted entries can be voided');
        }

        DB::transaction(function () {
            $this->update(['status' => 'void']);

            // Reverse the account balances
            $this->reverseAccountBalances();
        });

        return true;
    }

    /**
     * Update account balances when posting
     */
    protected function updateAccountBalances(): void
    {
        foreach ($this->lines as $line) {
            $account = $line->chartOfAccount;
            if ($account) {
                // This would typically update a separate account_balances table
                // For now, we'll just ensure the logic is in place
            }
        }
    }

    /**
     * Reverse account balances when voiding
     */
    protected function reverseAccountBalances(): void
    {
        foreach ($this->lines as $line) {
            $account = $line->chartOfAccount;
            if ($account) {
                // Reverse the balance changes
                // This would typically update a separate account_balances table
            }
        }
    }

    /**
     * Scope for posted entries
     */
    public function scopePosted($query)
    {
        return $query->where('status', 'posted');
    }

    /**
     * Scope for draft entries
     */
    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    /**
     * Scope for void entries
     */
    public function scopeVoid($query)
    {
        return $query->where('status', 'void');
    }

    /**
     * Scope for entries by date range
     */
    public function scopeByDateRange($query, $startDate, $endDate)
    {
        return $query->whereBetween('entry_date', [$startDate, $endDate]);
    }

    /**
     * Scope for entries by source
     */
    public function scopeBySource($query, $sourceType, $sourceId = null)
    {
        $query->where('source_type', $sourceType);
        if ($sourceId) {
            $query->where('source_id', $sourceId);
        }
        return $query;
    }

    /**
     * Scope for entries by fiscal year
     */
    public function scopeByFiscalYear($query, $fiscalYearId)
    {
        return $query->where('fiscal_year_id', $fiscalYearId);
    }

    /**
     * Scope for entries by accounting period
     */
    public function scopeByAccountingPeriod($query, $accountingPeriodId)
    {
        return $query->where('accounting_period_id', $accountingPeriodId);
    }
}

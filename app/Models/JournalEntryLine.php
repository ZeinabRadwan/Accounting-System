<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JournalEntryLine extends Model
{
    use HasFactory;

    protected $fillable = [
        'journal_entry_id',
        'chart_of_account_id',
        'cost_center_id',
        'analytical_account_id',
        'debit_amount',
        'credit_amount',
        'description',
        'reference',
        'line_number',
    ];

    protected $casts = [
        'debit_amount' => 'decimal:2',
        'credit_amount' => 'decimal:2',
        'line_number' => 'integer',
    ];

    protected $appends = [
        'amount',
        'amount_type',
        'formatted_amount',
    ];

    /**
     * Boot the model and add validation
     */
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->validateAmounts();
        });
    }

    /**
     * Validate that only one amount type is set
     */
    protected function validateAmounts(): void
    {
        $hasDebit = $this->debit_amount > 0;
        $hasCredit = $this->credit_amount > 0;

        if ($hasDebit && $hasCredit) {
            throw new \InvalidArgumentException(__('journal.line_cannot_have_both'));
        }

        if (! $hasDebit && ! $hasCredit) {
            throw new \InvalidArgumentException(__('journal.line_must_have_one'));
        }
    }

    /**
     * Get the journal entry this line belongs to
     */
    public function journalEntry(): BelongsTo
    {
        return $this->belongsTo(JournalEntry::class);
    }

    /**
     * Get the chart of account for this line
     */
    public function chartOfAccount(): BelongsTo
    {
        return $this->belongsTo(ChartOfAccount::class);
    }

    /**
     * Get the cost center for this line
     */
    public function costCenter(): BelongsTo
    {
        return $this->belongsTo(CostCenter::class);
    }

    /**
     * Get the analytical account for this line
     */
    public function analyticalAccount(): BelongsTo
    {
        return $this->belongsTo(AnalyticalAccount::class, 'analytical_account_id');
    }

    /**
     * Get the amount (either debit or credit)
     */
    public function getAmountAttribute(): float
    {
        return $this->debit_amount > 0 ? $this->debit_amount : $this->credit_amount;
    }

    /**
     * Get the amount type (debit or credit)
     */
    public function getAmountTypeAttribute(): string
    {
        return $this->debit_amount > 0 ? 'debit' : 'credit';
    }

    /**
     * Get formatted amount with type
     */
    public function getFormattedAmountAttribute(): string
    {
        $amount = number_format($this->amount, 2);

        return $this->amount_type === 'debit' ? "Dr. {$amount}" : "Cr. {$amount}";
    }

    /**
     * Check if this line is a debit
     */
    public function isDebit(): bool
    {
        return $this->debit_amount > 0;
    }

    /**
     * Check if this line is a credit
     */
    public function isCredit(): bool
    {
        return $this->credit_amount > 0;
    }

    /**
     * Get the account code and name
     */
    public function getAccountInfoAttribute(): string
    {
        if ($this->chartOfAccount) {
            return $this->chartOfAccount->code.' - '.$this->chartOfAccount->name;
        }

        return 'Unknown Account';
    }
}

<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DebitNote extends Model
{
    use HasFactory, Sluggable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'debit_note_no',
        'slug',
        'purchase_id',
        'supplier_id',
        'discount_amount',
        'tax_rate',
        'tax_amount',
        'total_amount',
        'note',
        'date',
        'status',
        'created_by',
        'fiscal_year_id',
        'accounting_period_id',
        'branch_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'discount_amount' => 'decimal:2',
        'tax_rate' => 'decimal:2',
        'tax_amount' => 'decimal:2',
        'total_amount' => 'decimal:2',
        'date' => 'date',
        'status' => 'boolean',
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array<string, array<string, string>>
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'debit_note_no',
            ],
        ];
    }

    /**
     * Get the purchase for this debit note.
     */
    public function purchase()
    {
        return $this->belongsTo(Purchase::class, 'purchase_id');
    }

    /**
     * Get the supplier for this debit note.
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

    /**
     * Get the user who created this debit note.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the journal entries for this debit note.
     */
    public function journalEntries()
    {
        return $this->morphMany(JournalEntry::class, 'source');
    }

    /**
     * Get the main journal entry for this debit note.
     */
    public function journalEntry()
    {
        return $this->morphOne(JournalEntry::class, 'source', 'source_type', 'source_id')
            ->orderBy('id', 'desc');
    }

    /**
     * Get the fiscal year for this debit note.
     */
    public function fiscalYear()
    {
        return $this->belongsTo(FiscalYear::class, 'fiscal_year_id');
    }

    /**
     * Get the accounting period for this debit note.
     */
    public function accountingPeriod()
    {
        return $this->belongsTo(AccountingPeriod::class, 'accounting_period_id');
    }
}

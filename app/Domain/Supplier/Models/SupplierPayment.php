<?php

namespace App\Domain\Supplier\Models;

use App\Domain\Accounting\Models\JournalEntry;
use App\Domain\Treasury\Models\Treasury;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SupplierPayment extends Model
{
    protected $fillable = [
        'supplier_id',
        'amount',
        'payment_method',
        'treasury_id',
        'paid_at',
        'notes',
        'created_by',
        'journal_entry_id',
        'credit_portion',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'credit_portion' => 'decimal:2',
        'paid_at' => 'datetime',
    ];

    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    public function treasury(): BelongsTo
    {
        return $this->belongsTo(Treasury::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function journalEntry(): BelongsTo
    {
        return $this->belongsTo(JournalEntry::class);
    }

    public function applications(): HasMany
    {
        return $this->hasMany(SupplierPaymentApplication::class);
    }
}

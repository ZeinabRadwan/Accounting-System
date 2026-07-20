<?php

namespace App\Domain\Settings\DailyVisibility\Models;

use App\Domain\Branch\Models\Branch;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DailyVisibleInvoiceSet extends Model
{
    use HasFactory;

    protected $fillable = [
        'branch_id',
        'business_date',
        'target_limit',
        'actual_total',
        'status',
        'generated_at',
        'finalized_at',
    ];

    protected $casts = [
        'business_date' => 'date',
        'target_limit' => 'decimal:2',
        'actual_total' => 'decimal:2',
        'generated_at' => 'datetime',
        'finalized_at' => 'datetime',
    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(DailyVisibleInvoiceSetItem::class);
    }
}


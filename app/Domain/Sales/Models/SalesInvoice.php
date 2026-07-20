<?php

namespace App\Domain\Sales\Models;

use App\Domain\Branch\Models\Branch;
use App\Domain\Customer\Models\Customer;
use App\Domain\Settings\DailyVisibility\Models\DailyVisibleInvoiceSet;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SalesInvoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_number',
        'branch_id',
        'user_id',
        'customer_id',
        'subtotal',
        'discount_amount',
        'total',
        'payment_method',
        'paid_amount',
        'remaining_amount',
        'status',
        'visible_for_sales',
        'daily_visible_invoice_set_id',
        'is_cancelled',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'discount_amount' => 'decimal:2',
        'total' => 'decimal:2',
        'paid_amount' => 'decimal:2',
        'remaining_amount' => 'decimal:2',
        'visible_for_sales' => 'boolean',
        'is_cancelled' => 'boolean',
    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(SalesInvoiceItem::class);
    }

    public function dailyVisibleSet(): BelongsTo
    {
        return $this->belongsTo(DailyVisibleInvoiceSet::class, 'daily_visible_invoice_set_id');
    }

    /**
     * Invoices included in today's Daily Invoice Visibility set(s).
     */
    public function scopeVisibleInTodaySet(Builder $query, ?int $branchId = null): Builder
    {
        $today = Carbon::now()->toDateString();

        return $query
            ->where('visible_for_sales', true)
            ->whereNotNull('daily_visible_invoice_set_id')
            ->whereHas('dailyVisibleSet', function ($q) use ($today, $branchId) {
                $q->whereDate('business_date', $today);
                if ($branchId !== null) {
                    $q->where('branch_id', $branchId);
                }
            });
    }

    /**
     * Apply role-aware visibility for listing / aggregate queries.
     */
    public function scopeVisibleToUser(Builder $query, User $user): Builder
    {
        if ($user->bypassesInvoiceVisibility()) {
            return $query;
        }

        if ($user->isSales()) {
            return $query
                ->where('branch_id', (int) $user->branch_id)
                ->visibleInTodaySet((int) $user->branch_id);
        }

        // Admin (non-super): same visibility rule as Sales, across all branches.
        return $query->visibleInTodaySet();
    }
}

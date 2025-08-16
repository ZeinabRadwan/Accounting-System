<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;

class AccountingPeriod extends AppModel
{
    protected $fillable = [
        'financial_year_id',
        'start_date',
        'end_date',
        'status',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'status' => 'integer',
    ];

    /**
     * Get the financial year that owns this accounting period.
     */
    public function financialYear(): BelongsTo
    {
        return $this->belongsTo(FinancialYear::class);
    }

    /**
     * Scope to get active accounting periods.
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', 1);
    }

    /**
     * Scope to get accounting periods by date range.
     */
    public function scopeInDateRange(Builder $query, $startDate, $endDate): Builder
    {
        return $query->where(function ($q) use ($startDate, $endDate) {
            $q->whereBetween('start_date', [$startDate, $endDate])
              ->orWhereBetween('end_date', [$startDate, $endDate])
              ->orWhere(function ($subQ) use ($startDate, $endDate) {
                  $subQ->where('start_date', '<=', $startDate)
                        ->where('end_date', '>=', $endDate);
              });
        });
    }

    /**
     * Get the current accounting period.
     */
    public function scopeCurrent(Builder $query): Builder
    {
        $today = now()->toDateString();
        return $query->where('start_date', '<=', $today)
                     ->where('end_date', '>=', $today)
                     ->where('status', 1);
    }

    /**
     * Check if the accounting period is active.
     */
    public function isActive(): bool
    {
        return $this->status === 1;
    }

    /**
     * Check if a date falls within this accounting period.
     */
    public function containsDate($date): bool
    {
        $date = is_string($date) ? $date : $date->toDateString();
        return $this->start_date <= $date && $this->end_date >= $date;
    }

    /**
     * Get the duration of the accounting period in days.
     */
    public function getDurationInDaysAttribute(): int
    {
        return $this->start_date->diffInDays($this->end_date) + 1;
    }

    /**
     * Get the accounting period display name.
     */
    public function getDisplayNameAttribute(): string
    {
        if ($this->financialYear) {
            $translatedName = $this->financialYear->getLocalizedNameAttribute();
            if ($translatedName && $translatedName !== 'N/A') {
                return $translatedName . ' - ' . $this->start_date->format('M Y') . ' to ' . $this->end_date->format('M Y');
            }
        }
        
        return $this->start_date->format('M Y') . ' to ' . $this->end_date->format('M Y');
    }
}

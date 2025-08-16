<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;

class FinancialYear extends AppModel
{
    use HasTranslations;

    protected $fillable = [
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
     * Get the accounting periods for this financial year.
     */
    public function accountingPeriods(): HasMany
    {
        return $this->hasMany(AccountingPeriod::class);
    }

    /**
     * Scope to get active financial years.
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', 1);
    }

    /**
     * Scope to get financial years by date range.
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
     * Get the current financial year.
     */
    public function scopeCurrent(Builder $query): Builder
    {
        $today = now()->toDateString();
        return $query->where('start_date', '<=', $today)
                     ->where('end_date', '>=', $today)
                     ->where('status', 1);
    }

    /**
     * Check if the financial year is active.
     */
    public function isActive(): bool
    {
        return $this->status === 1;
    }

    /**
     * Check if a date falls within this financial year.
     */
    public function containsDate($date): bool
    {
        $date = is_string($date) ? $date : $date->toDateString();
        return $this->start_date <= $date && $this->end_date >= $date;
    }

    /**
     * Get the duration of the financial year in days.
     */
    public function getDurationInDaysAttribute(): int
    {
        return $this->start_date->diffInDays($this->end_date) + 1;
    }

    /**
     * Get the financial year display name.
     */
    public function getDisplayNameAttribute(): string
    {
        $translatedName = $this->getLocalizedNameAttribute();
        if ($translatedName && $translatedName !== 'N/A') {
            return $translatedName;
        }
        
        return $this->start_date->format('Y') . ' - ' . $this->end_date->format('Y');
    }
}

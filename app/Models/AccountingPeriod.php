<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AccountingPeriod extends Model
{
    use Sluggable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'fiscal_year_id',
        'start_date',
        'end_date',
        'is_active',
        'is_closed',
        'note',
        'created_by'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'is_active' => 'boolean',
        'is_closed' => 'boolean',
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
            ],
        ];
    }

    /**
     * Get the fiscal year that owns this accounting period.
     */
    public function fiscalYear(): BelongsTo
    {
        return $this->belongsTo(FiscalYear::class, 'fiscal_year_id');
    }

    /**
     * Get the user who created this accounting period.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Scope to get only active accounting periods.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to get only open accounting periods.
     */
    public function scopeOpen($query)
    {
        return $query->where('is_closed', false);
    }

    /**
     * Scope to get only closed accounting periods.
     */
    public function scopeClosed($query)
    {
        return $query->where('is_closed', true);
    }

    /**
     * Get the current active accounting period.
     */
    public static function getCurrent()
    {
        return static::active()
            ->open()
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->first();
    }

    /**
     * Check if this accounting period is currently active.
     */
    public function isCurrentlyActive(): bool
    {
        if (!$this->start_date || !$this->end_date) {
            return false;
        }
        
        return $this->is_active && 
               !$this->is_closed &&
               $this->start_date <= now() && 
               $this->end_date >= now();
    }

    /**
     * Get the duration of the accounting period in days.
     */
    public function getDurationInDays(): int
    {
        if (!$this->start_date || !$this->end_date) {
            return 0;
        }
        
        return $this->start_date->diffInDays($this->end_date) + 1;
    }

    /**
     * Get the accounting period name with date range.
     */
    public function getFullNameAttribute(): string
    {
        $name = $this->name ?? 'Unnamed Period';
        
        if (!$this->start_date || !$this->end_date) {
            return $name;
        }
        
        return $name . ' (' . $this->start_date->format('M d, Y') . ' - ' . $this->end_date->format('M d, Y') . ')';
    }

    /**
     * Close the accounting period.
     */
    public function close(): bool
    {
        return $this->update(['is_closed' => true]);
    }

    /**
     * Reopen the accounting period.
     */
    public function reopen(): bool
    {
        return $this->update(['is_closed' => false]);
    }
}

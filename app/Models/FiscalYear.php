<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FiscalYear extends Model
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
        'start_date',
        'end_date',
        'is_active',
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
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['full_name', 'duration_in_days'];

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
     * Get the accounting periods for this fiscal year.
     */
    public function accountingPeriods(): HasMany
    {
        return $this->hasMany(AccountingPeriod::class, 'fiscal_year_id');
    }

    /**
     * Get the user who created this fiscal year.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Scope to get only active fiscal years.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Get the current active fiscal year.
     */
    public static function getCurrent()
    {
        return static::active()
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->first();
    }

    /**
     * Check if this fiscal year is currently active.
     */
    public function isCurrentlyActive(): bool
    {
        if (!$this->start_date || !$this->end_date) {
            return false;
        }
        return $this->is_active && 
               $this->start_date <= now() && 
               $this->end_date >= now();
    }

    /**
     * Get the duration of the fiscal year in days.
     */
    public function getDurationInDaysAttribute(): int
    {
        if (!$this->start_date || !$this->end_date) {
            return 0;
        }
        return $this->start_date->diffInDays($this->end_date) + 1;
    }

    /**
     * Get the fiscal year name with year range.
     */
    public function getFullNameAttribute(): string
    {
        $name = $this->name ?? 'Unnamed Fiscal Year';
        
        if (!$this->start_date || !$this->end_date) {
            return $name;
        }
        return $name . ' (' . $this->start_date->format('Y') . '-' . $this->end_date->format('Y') . ')';
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class CostAllocationRule extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'source_cost_center_id',
        'basis_type',
        'description',
        'is_active',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (!$model->created_by) {
                $model->created_by = Auth::id();
            }
        });

        static::updating(function ($model) {
            $model->updated_by = Auth::id();
        });
    }

    /**
     * Get the source cost center
     */
    public function sourceCostCenter(): BelongsTo
    {
        return $this->belongsTo(CostCenter::class, 'source_cost_center_id');
    }

    /**
     * Get allocation details
     */
    public function details(): HasMany
    {
        return $this->hasMany(CostAllocationDetail::class)->orderBy('order');
    }

    /**
     * Get executions
     */
    public function executions(): HasMany
    {
        return $this->hasMany(CostAllocationExecution::class);
    }

    /**
     * Get the user who created this rule
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the user who last updated this rule
     */
    public function updater(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    /**
     * Calculate total allocation ratio
     */
    public function getTotalAllocationRatio(): float
    {
        return $this->details()->sum('allocation_ratio');
    }

    /**
     * Check if allocation ratios sum to 100%
     */
    public function isValidAllocation(): bool
    {
        $total = $this->getTotalAllocationRatio();
        return abs($total - 100.0) < 0.01; // Allow small floating point differences
    }

    /**
     * Scope for active rules
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}

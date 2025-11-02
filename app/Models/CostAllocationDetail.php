<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CostAllocationDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'cost_allocation_rule_id',
        'target_cost_center_id',
        'allocation_ratio',
        'order',
    ];

    protected $casts = [
        'allocation_ratio' => 'decimal:4',
        'order' => 'integer',
    ];

    /**
     * Get the allocation rule
     */
    public function rule(): BelongsTo
    {
        return $this->belongsTo(CostAllocationRule::class, 'cost_allocation_rule_id');
    }

    /**
     * Get the target cost center
     */
    public function targetCostCenter(): BelongsTo
    {
        return $this->belongsTo(CostCenter::class, 'target_cost_center_id');
    }
}

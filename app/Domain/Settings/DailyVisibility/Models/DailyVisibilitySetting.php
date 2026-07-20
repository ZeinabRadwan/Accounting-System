<?php

namespace App\Domain\Settings\DailyVisibility\Models;

use App\Domain\Branch\Models\Branch;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DailyVisibilitySetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'branch_id',
        'daily_limit',
        'is_enabled',
    ];

    protected $casts = [
        'daily_limit' => 'decimal:2',
        'is_enabled' => 'boolean',
    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}


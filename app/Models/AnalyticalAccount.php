<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class AnalyticalAccount extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'code',
        'type',
        'status',
        'branch_id',
        'created_by',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Boot the model and add default values
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (! $model->created_by) {
                $model->created_by = Auth::id();
            }
        });
    }

    /**
     * Get the branch this analytical account belongs to
     */
    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class, 'branch_id');
    }

    /**
     * Get the user who created this analytical account
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get journal entry lines for this analytical account
     */
    public function journalEntryLines(): HasMany
    {
        return $this->hasMany(JournalEntryLine::class, 'analytical_account_id');
    }

    /**
     * Check if this analytical account can be deleted
     * An analytical account cannot be deleted if it has journal entry lines associated with it
     */
    public function canDelete(): bool
    {
        // Check if it has journal entry lines
        if ($this->journalEntryLines()->count() > 0) {
            return false;
        }

        return true;
    }

    /**
     * Get the reason why this analytical account cannot be deleted
     */
    public function getDeletionBlockReason(): ?string
    {
        if ($this->journalEntryLines()->count() > 0) {
            return 'This analytical account has journal entry lines associated with it.';
        }

        return null;
    }

    /**
     * Scope for active analytical accounts only
     */
    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    /**
     * Scope to filter by branch
     */
    public function scopeForBranch($query, $branchId)
    {
        if ($branchId) {
            return $query->where('branch_id', $branchId);
        }

        return $query;
    }

    /**
     * Scope to search by name or code
     */
    public function scopeSearch($query, $searchTerm)
    {
        return $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', "%{$searchTerm}%")
                ->orWhere('code', 'like', "%{$searchTerm}%");
        });
    }

    /**
     * Get display name (with code if available)
     */
    public function getDisplayNameAttribute(): string
    {
        if ($this->code) {
            return $this->code.' - '.$this->name;
        }

        return $this->name;
    }
}

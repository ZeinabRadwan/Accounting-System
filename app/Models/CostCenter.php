<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class CostCenter extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'code',
        'name',
        'name_en',
        'parent_id',
        'is_active',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Boot the model and add default values
     */
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
     * Get the parent cost center
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(CostCenter::class, 'parent_id');
    }

    /**
     * Get child cost centers
     */
    public function children(): HasMany
    {
        return $this->hasMany(CostCenter::class, 'parent_id');
    }

    /**
     * Get all descendant cost centers (recursive)
     */
    public function getDescendants()
    {
        $descendants = collect();
        
        foreach ($this->children as $child) {
            $descendants->push($child);
            $descendants = $descendants->merge($child->getDescendants());
        }
        
        return $descendants;
    }

    /**
     * Get all ancestor cost centers (recursive)
     */
    public function getAncestors()
    {
        $ancestors = collect();
        $parent = $this->parent;
        
        while ($parent) {
            $ancestors->prepend($parent);
            $parent = $parent->parent;
        }
        
        return $ancestors;
    }

    /**
     * Get full path of the cost center (e.g., "Company > Department > Section")
     */
    public function getFullPath(): string
    {
        $path = collect();
        
        // Add all ancestors
        $ancestors = $this->getAncestors();
        foreach ($ancestors as $ancestor) {
            $path->push($ancestor->name);
        }
        
        // Add current cost center
        $path->push($this->name);
        
        return $path->implode(' > ');
    }

    /**
     * Get full path with codes (e.g., "CC001 - Company > CC002 - Department > CC003 - Section")
     */
    public function getFullPathWithCodes(): string
    {
        $path = collect();
        
        // Add all ancestors
        $ancestors = $this->getAncestors();
        foreach ($ancestors as $ancestor) {
            $path->push($ancestor->code . ' - ' . $ancestor->name);
        }
        
        // Add current cost center
        $path->push($this->code . ' - ' . $this->name);
        
        return $path->implode(' > ');
    }

    /**
     * Get the user who created this cost center
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the user who last updated this cost center
     */
    public function updater(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    /**
     * Get journal entry lines for this cost center
     */
    public function journalEntryLines(): HasMany
    {
        return $this->hasMany(JournalEntryLine::class);
    }

    /**
     * Get journal entry lines including those of descendant cost centers
     */
    public function getAllJournalEntryLines()
    {
        $descendants = $this->getDescendants();
        $allIds = $descendants->pluck('id')->prepend($this->id);
        
        return JournalEntryLine::whereIn('cost_center_id', $allIds);
    }

    /**
     * Check if this cost center can be deleted
     * A cost center cannot be deleted if it has:
     * - Journal entry lines associated with it
     * - Child cost centers (unless they are also being deleted)
     */
    public function canDelete(): bool
    {
        // Check if it has journal entry lines
        if ($this->journalEntryLines()->count() > 0) {
            return false;
        }

        // Check if it has active child cost centers
        if ($this->children()->where('is_active', true)->count() > 0) {
            return false;
        }

        return true;
    }

    /**
     * Get the reason why this cost center cannot be deleted
     */
    public function getDeletionBlockReason(): ?string
    {
        if ($this->journalEntryLines()->count() > 0) {
            return 'This cost center has journal entry lines associated with it.';
        }

        if ($this->children()->where('is_active', true)->count() > 0) {
            return 'This cost center has active child cost centers.';
        }

        return null;
    }

    /**
     * Scope for active cost centers only
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for root cost centers (no parent)
     */
    public function scopeRoot($query)
    {
        return $query->whereNull('parent_id');
    }

    /**
     * Scope to search by name or code
     */
    public function scopeSearch($query, $searchTerm)
    {
        return $query->where(function ($q) use ($searchTerm) {
            $q->where('name', 'like', "%{$searchTerm}%")
              ->orWhere('name_en', 'like', "%{$searchTerm}%")
              ->orWhere('code', 'like', "%{$searchTerm}%");
        });
    }

    /**
     * Get display name (with code)
     */
    public function getDisplayNameAttribute(): string
    {
        return $this->code . ' - ' . $this->name;
    }

    /**
     * Get name based on locale
     */
    public function getLocalizedNameAttribute(): string
    {
        $locale = app()->getLocale();
        
        if ($locale === 'en' && $this->name_en) {
            return $this->name_en;
        }
        
        return $this->name;
    }
}

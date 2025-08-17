<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;

class ChartOfAccount extends AppModel
{
    use HasTranslations;

    protected $fillable = [
        'name',
        'code',
        'type',
        'sub_type',
        'account_level',
        'has_child',
        'order',
        'is_enabled',
        'is_archived',
        'client_id',
        'description',
        'created_by',
    ];

    protected $casts = [
        'code' => 'integer',
        'type' => 'integer',
        'sub_type' => 'integer',
        'account_level' => 'integer',
        'has_child' => 'boolean',
        'order' => 'integer',
        'is_enabled' => 'boolean',
        'is_archived' => 'boolean',
        'client_id' => 'integer',
        'created_by' => 'integer',
    ];

    // Relationships
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Core\Auth\User::class, 'created_by');
    }

    public function parentAccount(): BelongsTo
    {
        return $this->belongsTo(ChartOfAccount::class, 'parent_id');
    }

    public function childAccounts(): HasMany
    {
        return $this->hasMany(ChartOfAccount::class, 'parent_id');
    }

    // Scopes
    public function scopeActive(Builder $query): void
    {
        $query->where('is_enabled', true);
    }

    public function scopeArchived(Builder $query): void
    {
        $query->where('is_archived', true);
    }

    public function scopeNotArchived(Builder $query): void
    {
        $query->where('is_archived', false);
    }

    public function scopeByType(Builder $query, int $type): void
    {
        $query->where('type', $type);
    }

    public function scopeBySubType(Builder $query, int $subType): void
    {
        $query->where('sub_type', $subType);
    }

    public function scopeByLevel(Builder $query, int $level): void
    {
        $query->where('account_level', $level);
    }

    public function scopeOrdered(Builder $query): void
    {
        $query->orderBy('order')->orderBy('name');
    }

    public function scopeWithChildren(Builder $query): void
    {
        $query->where('has_child', true);
    }

    public function scopeWithoutChildren(Builder $query): void
    {
        $query->where('has_child', false);
    }

    // Accessors
    public function getFullNameAttribute(): string
    {
        return $this->getLocalizedNameAttribute();
    }

    public function getDisplayNameAttribute(): string
    {
        return $this->getLocalizedNameAttribute();
    }

    public function getAccountTypeNameAttribute(): string
    {
        $types = [
            1 => 'Asset',
            2 => 'Liability',
            3 => 'Equity',
            4 => 'Revenue',
            5 => 'Expense',
        ];

        return $types[$this->type] ?? 'Unknown';
    }

    public function getIsParentAttribute(): bool
    {
        return $this->has_child;
    }

    public function getIsChildAttribute(): bool
    {
        return $this->account_level > 0;
    }
}

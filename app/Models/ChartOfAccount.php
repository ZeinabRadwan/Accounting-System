<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ChartOfAccount extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'chart_of_accounts';

    protected $fillable = [
        'name',
        'code',
        'type_id',
        'parent_id',
        'order',
        'is_active',
        'created_by',
        'branch_id',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    /**
     * Get the account type
     */
    public function type()
    {
        return $this->belongsTo(ChartOfAccountType::class, 'type_id');
    }

    public function translations(): HasMany
    {
        return $this->hasMany(ChartOfAccountTranslation::class, 'chart_of_account_id');
    }

    /**
     * Resolve translated value from dedicated translations table
     */
    public function getTranslatedField(string $field, ?string $locale = null)
    {
        $locale = $locale ?: app()->getLocale();

        // Only support dedicated fields
        if (! in_array($field, ['name', 'description'])) {
            return $this->getAttribute($field);
        }

        // If translations are already loaded, use them to avoid N+1 queries
        if ($this->relationLoaded('translations')) {
            $translation = $this->translations->firstWhere('locale', $locale);
            if ($translation && $translation->{$field}) {
                return $translation->{$field};
            }
        } else {
            // Fallback to query if not eager loaded
            $value = $this->translations()
                ->where('locale', $locale)
                ->value($field);
            if ($value) {
                return $value;
            }
        }

        return $this->getAttribute($field);
    }

    /**
     * Return available locales for a translatable field.
     * Dedicated table does not separate by field, so we ignore $field.
     */
    public function getAvailableLocales(string $field): array
    {
        return $this->translations()
            ->pluck('locale')
            ->unique()
            ->values()
            ->toArray();
    }

    /**
     * Get the parent account
     */
    public function parent()
    {
        return $this->belongsTo(ChartOfAccount::class, 'parent_id');
    }

    /**
     * Get the user who created this account
     */
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get journal entry lines for this account
     */
    public function journalEntryLines()
    {
        return $this->hasMany(JournalEntryLine::class);
    }

    /**
     * Get total debit amount for this account
     */
    public function getTotalDebits()
    {
        return $this->journalEntryLines()
            ->whereHas('journalEntry', function ($query) {
                $query->where('status', 'posted');
            })
            ->sum('debit_amount');
    }

    /**
     * Get total credit amount for this account
     */
    public function getTotalCredits()
    {
        return $this->journalEntryLines()
            ->whereHas('journalEntry', function ($query) {
                $query->where('status', 'posted');
            })
            ->sum('credit_amount');
    }

    /**
     * Calculate the current balance for this account
     * Balance = Total Debits - Total Credits
     */
    public function getBalance()
    {
        return $this->getTotalDebits() - $this->getTotalCredits();
    }

    /**
     * Get balance type (Debit or Credit)
     * If balance is positive, it's a Debit balance
     * If balance is negative, it's a Credit balance
     */
    public function getBalanceType()
    {
        $balance = $this->getBalance();

        return $balance >= 0 ? 'Debit' : 'Credit';
    }

    /**
     * Get absolute balance amount (without sign)
     */
    public function getBalanceAmount()
    {
        return abs($this->getBalance());
    }

    /**
     * Get formatted balance with type (e.g., "1,500.00 Debit" or "2,300.00 Credit")
     */
    public function getFormattedBalanceWithType()
    {
        $amount = $this->getBalanceAmount();
        $type = $this->getBalanceType();

        return number_format($amount, 2).' '.$type;
    }

    /**
     * Get balance for a specific date range
     */
    public function getBalanceForDateRange($startDate = null, $endDate = null)
    {
        $query = $this->journalEntryLines()
            ->whereHas('journalEntry', function ($q) {
                $q->where('status', 'posted');
            });

        if ($startDate) {
            $query->whereHas('journalEntry', function ($q) use ($startDate) {
                $q->where('entry_date', '>=', $startDate);
            });
        }

        if ($endDate) {
            $query->whereHas('journalEntry', function ($q) use ($endDate) {
                $q->where('entry_date', '<=', $endDate);
            });
        }

        $debits = (clone $query)->sum('debit_amount');
        $credits = (clone $query)->sum('credit_amount');

        return $debits - $credits;
    }

    /**
     * Calculate the level/depth of this account in the hierarchy
     * Level 1 is the root (no parent), Level 2 has a Level 1 parent, etc.
     * This method works with eager-loaded parent relationships to avoid N+1 queries
     */
    public function getLevel(): int
    {
        $level = 1;
        $current = $this;

        // Use a set to detect cycles (shouldn't happen, but safety check)
        $visited = [];

        while ($current->parent_id !== null) {
            // Check for cycle
            if (isset($visited[$current->id])) {
                break;
            }
            $visited[$current->id] = true;

            $level++;

            // If parent is already loaded, use it; otherwise we'd need to query
            if ($current->relationLoaded('parent') && $current->parent) {
                $current = $current->parent;
            } else {
                // If parent not loaded, we can't traverse further
                // This means we're at a deeper level than we can calculate
                break;
            }
        }

        return $level;
    }

    /**
     * Get all child accounts (recursive)
     * Optimized to use a single recursive query when children are not already loaded
     */
    public function getAllChildren()
    {
        // If children are already loaded, use them (for small trees)
        if ($this->relationLoaded('children') && $this->children->count() < 100) {
            $children = collect();
            foreach ($this->children as $child) {
                $children->push($child);
                $children = $children->merge($child->getAllChildren());
            }

            return $children;
        }

        // For large trees, use a single recursive query
        return static::getAllDescendants($this->id);
    }

    /**
     * Get all descendant account IDs using a single recursive query
     * This is much more efficient than loading and traversing relationships
     */
    public static function getAllDescendants($parentId)
    {
        $allDescendantIds = collect([$parentId]);
        $currentLevelIds = collect([$parentId]);

        // Use iterative approach instead of recursive queries to avoid deep recursion
        $maxDepth = 20; // Safety limit
        $depth = 0;

        while ($currentLevelIds->isNotEmpty() && $depth < $maxDepth) {
            $nextLevelIds = static::whereIn('parent_id', $currentLevelIds)
                ->pluck('id');

            if ($nextLevelIds->isEmpty()) {
                break;
            }

            $allDescendantIds = $allDescendantIds->merge($nextLevelIds);
            $currentLevelIds = $nextLevelIds;
            $depth++;
        }

        // Return all descendants except the parent itself
        return static::whereIn('id', $allDescendantIds->unique())
            ->where('id', '!=', $parentId)
            ->get();
    }

    /**
     * Get children accounts
     */
    public function children()
    {
        return $this->hasMany(ChartOfAccount::class, 'parent_id');
    }

    /**
     * Calculate total balance including all child accounts
     */
    public function getTotalBalance()
    {
        $ownBalance = $this->getBalance();
        $childrenBalance = $this->getAllChildren()->sum(function ($child) {
            return $child->getBalance();
        });

        return $ownBalance + $childrenBalance;
    }

    /**
     * Get total balance type including all child accounts (Debit or Credit)
     */
    public function getTotalBalanceType()
    {
        $totalBalance = $this->getTotalBalance();

        return $totalBalance >= 0 ? 'Debit' : 'Credit';
    }

    /**
     * Get absolute total balance amount including all child accounts (without sign)
     */
    public function getTotalBalanceAmount()
    {
        return abs($this->getTotalBalance());
    }

    /**
     * Get formatted total balance with type including all child accounts
     */
    public function getFormattedTotalBalanceWithType()
    {
        $amount = $this->getTotalBalanceAmount();
        $type = $this->getTotalBalanceType();

        return number_format($amount, 2).' '.$type;
    }

    /**
     * Get total debits including all child accounts
     */
    public function getTotalDebitsIncludingChildren()
    {
        $ownDebits = $this->getTotalDebits();
        $childrenDebits = $this->getAllChildren()->sum(function ($child) {
            return $child->getTotalDebits();
        });

        return $ownDebits + $childrenDebits;
    }

    /**
     * Get total credits including all child accounts
     */
    public function getTotalCreditsIncludingChildren()
    {
        $ownCredits = $this->getTotalCredits();
        $childrenCredits = $this->getAllChildren()->sum(function ($child) {
            return $child->getTotalCredits();
        });

        return $ownCredits + $childrenCredits;
    }

    /**
     * Get balances for multiple accounts efficiently using a single query
     * This method is optimized for bulk operations like chart of accounts listing
     */
    public static function getBulkBalances($accountIds = null)
    {
        // Quick check: if no journal entries exist, return empty collection immediately
        $hasEntries = DB::table('journal_entries')
            ->where('status', 'posted')
            ->exists();

        if (! $hasEntries) {
            return collect();
        }

        $query = DB::table('journal_entry_lines as jel')
            ->join('journal_entries as je', 'jel.journal_entry_id', '=', 'je.id')
            ->where('je.status', 'posted')
            ->select(
                'jel.chart_of_account_id',
                DB::raw('SUM(jel.debit_amount) as total_debits'),
                DB::raw('SUM(jel.credit_amount) as total_credits')
            )
            ->groupBy('jel.chart_of_account_id');

        if ($accountIds) {
            $query->whereIn('jel.chart_of_account_id', $accountIds);
        }

        return $query->get()->keyBy('chart_of_account_id');
    }

    /**
     * Get balances for multiple accounts including children efficiently
     * Optimized to use bulk queries instead of individual finds
     */
    public static function getBulkBalancesWithChildren($accountIds = null)
    {
        // Get all account IDs (we need all for balance calculations)
        $allAccountIds = $accountIds ? collect($accountIds) : static::pluck('id');
        $targetAccountIds = $allAccountIds->toArray();

        // Build children map efficiently using a single query approach
        $accountChildrenMap = static::buildChildrenMap($targetAccountIds);

        // Get all descendant IDs for balance calculation
        $allDescendantIds = $allAccountIds->toArray();
        foreach ($accountChildrenMap as $childrenIds) {
            $allDescendantIds = array_merge($allDescendantIds, $childrenIds);
        }
        $allDescendantIds = array_unique($allDescendantIds);

        // Get balances for all accounts in a single query
        $balances = static::getBulkBalances($allDescendantIds);

        // Group by parent accounts
        $result = [];

        foreach ($targetAccountIds as $accountId) {
            $ownBalance = $balances->get($accountId);
            $ownDebits = $ownBalance ? $ownBalance->total_debits : 0;
            $ownCredits = $ownBalance ? $ownBalance->total_credits : 0;

            $childrenIds = $accountChildrenMap[$accountId] ?? [];
            $childrenDebits = $balances->whereIn('chart_of_account_id', $childrenIds)->sum('total_debits');
            $childrenCredits = $balances->whereIn('chart_of_account_id', $childrenIds)->sum('total_credits');

            $result[$accountId] = [
                'debits' => $ownDebits,
                'credits' => $ownCredits,
                'total_debits' => $ownDebits + $childrenDebits,
                'total_credits' => $ownCredits + $childrenCredits,
                'balance' => $ownDebits - $ownCredits,
                'total_balance' => ($ownDebits + $childrenDebits) - ($ownCredits + $childrenCredits),
            ];
        }

        return $result;
    }

    /**
     * Build a map of account IDs to their descendant IDs efficiently
     * Uses iterative breadth-first approach to avoid deep recursion
     */
    public static function buildChildrenMap($accountIds)
    {
        $childrenMap = [];

        // Get all accounts with their parent relationships in one query
        $allAccounts = static::select('id', 'parent_id')->get()->keyBy('id');

        // Build direct parent-child map
        $parentToChildren = [];
        foreach ($allAccounts as $account) {
            if ($account->parent_id) {
                if (! isset($parentToChildren[$account->parent_id])) {
                    $parentToChildren[$account->parent_id] = [];
                }
                $parentToChildren[$account->parent_id][] = $account->id;
            }
        }

        // For each target account, get all descendants using iterative BFS
        foreach ($accountIds as $accountId) {
            $descendants = [];
            $queue = [$accountId];
            $visited = [$accountId => true];

            while (! empty($queue)) {
                $currentId = array_shift($queue);

                if (isset($parentToChildren[$currentId])) {
                    foreach ($parentToChildren[$currentId] as $childId) {
                        if (! isset($visited[$childId])) {
                            $visited[$childId] = true;
                            $descendants[] = $childId;
                            $queue[] = $childId;
                        }
                    }
                }
            }

            $childrenMap[$accountId] = $descendants;
        }

        return $childrenMap;
    }

    /**
     * Get all descendant account IDs for a given parent ID
     * Uses iterative approach to avoid deep recursion
     */
    public static function getAllDescendantIds($parentId)
    {
        $allDescendantIds = collect();
        $currentLevelIds = collect([$parentId]);

        $maxDepth = 20; // Safety limit
        $depth = 0;

        while ($currentLevelIds->isNotEmpty() && $depth < $maxDepth) {
            $nextLevelIds = static::whereIn('parent_id', $currentLevelIds)
                ->pluck('id');

            if ($nextLevelIds->isEmpty()) {
                break;
            }

            $allDescendantIds = $allDescendantIds->merge($nextLevelIds);
            $currentLevelIds = $nextLevelIds;
            $depth++;
        }

        return $allDescendantIds->unique()->toArray();
    }

    /**
     * Scope for active accounts only
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for ordering by hierarchy
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc')->orderBy('name', 'asc');
    }

    /**
     * Scope to filter accounts by maximum level
     * Only includes accounts at or below the specified level
     */
    public function scopeMaxLevel($query, int $maxLevel)
    {
        // We need to calculate level for each account
        // This is done in memory after fetching, as calculating level in SQL is complex
        return $query;
    }

    /**
     * Scope to filter accounts that are descendants of a parent account up to a maximum level
     * When a parent is selected, only shows descendants up to level 4 (excluding level 5+)
     */
    public function scopeDescendantsOf($query, $parentId, int $maxLevel = 4)
    {
        if (! $parentId) {
            return $query;
        }

        // Load parent with its parent chain to calculate level
        $parent = static::with(['parent.parent.parent.parent'])->find($parentId);
        if (! $parent) {
            return $query->whereRaw('1 = 0'); // Return empty result
        }

        // Get all descendant IDs recursively
        // Exclude the parent itself, only show its descendants
        $allDescendantIds = collect();
        $children = $parent->getAllChildren();

        // Load parent relationships for all children to calculate levels
        $children->load(['parent.parent.parent.parent']);

        foreach ($children as $child) {
            $childLevel = $child->getLevel();
            // Only include descendants at level 4 or below
            if ($childLevel <= $maxLevel) {
                $allDescendantIds->push($child->id);
            }
        }

        // If no valid descendants found, return empty
        if ($allDescendantIds->isEmpty()) {
            return $query->whereRaw('1 = 0');
        }

        return $query->whereIn('id', $allDescendantIds->unique());
    }

    /**
     * Scope to filter by branch
     * If branch_id is NULL, account is available to all branches
     * If branch_id is not NULL, account is only available to that specific branch
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  int|null  $branchId  Current branch ID (from user's default_branch_id)
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeForBranch($query, $branchId = null)
    {
        // If no branch ID provided, try to get from authenticated user
        if ($branchId === null && Auth::check()) {
            $branchId = Auth::user()->default_branch_id ?? null;
        }

        // If still no branch ID, return all accounts (backward compatibility)
        if ($branchId === null) {
            return $query;
        }

        // Filter: branch_id IS NULL (shared) OR branch_id = current_branch_id
        return $query->where(function ($q) use ($branchId) {
            $q->whereNull('branch_id')
                ->orWhere('branch_id', $branchId);
        });
    }

    /**
     * Get translated name for current locale
     */
    public function getTranslatedNameAttribute()
    {
        return $this->getTranslatedField('name');
    }

    /**
     * Get all translations for this account
     */
    public function getAllTranslations()
    {
        $translations = [];

        foreach ($this->translations as $translation) {
            $translations[$translation->locale] = [
                'name' => $translation->name,
                'description' => $translation->description,
            ];
        }

        return $translations;
    }

    /**
     * Get all translations for this account (attribute accessor)
     */
    public function getAllTranslationsAttribute()
    {
        return $this->getAllTranslations();
    }

    /**
     * Scope to search by translated name
     */
    public function scopeSearchByName($query, $searchTerm, $locale = null)
    {
        return $query->where(function ($q) use ($searchTerm, $locale) {
            $q->where('name', 'like', "%{$searchTerm}%")
                ->orWhereHas('translations', function ($translationQuery) use ($searchTerm, $locale) {
                    $translationQuery->where('name', 'like', "%{$searchTerm}%");
                    if ($locale) {
                        $translationQuery->where('locale', $locale);
                    }
                });
        });
    }

    /**
     * Scope to search by translated description
     */
    public function scopeSearchByDescription($query, $searchTerm, $locale = null)
    {
        return $query->where(function ($q) use ($searchTerm, $locale) {
            $q->where('description', 'like', "%{$searchTerm}%")
                ->orWhereHas('translations', function ($translationQuery) use ($searchTerm, $locale) {
                    $translationQuery->where('description', 'like', "%{$searchTerm}%");
                    if ($locale) {
                        $translationQuery->where('locale', $locale);
                    }
                });
        });
    }

    /**
     * Create or update account with translations
     */
    public static function createWithTranslations($data, $translations = [])
    {
        $account = static::create($data);

        if (! empty($translations)) {
            foreach ($translations as $field => $fieldTranslations) {
                if (in_array($field, $account->translatable)) {
                    $account->setTranslations($field, $fieldTranslations);
                }
            }
        }

        return $account;
    }

    /**
     * Update account with translations
     */
    public function updateWithTranslations($data, $translations = [])
    {
        $this->update($data);

        if (! empty($translations)) {
            foreach ($translations as $field => $fieldTranslations) {
                if (in_array($field, $this->translatable)) {
                    $this->setTranslations($field, $fieldTranslations);
                }
            }
        }

        return $this;
    }
}

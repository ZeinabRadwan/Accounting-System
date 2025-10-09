<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

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
        if (!in_array($field, ['name', 'description'])) {
            return $this->getAttribute($field);
        }

        $value = $this->translations()
            ->where('locale', $locale)
            ->value($field);

        return $value ?: $this->getAttribute($field);
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
            ->whereHas('journalEntry', function($query) {
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
            ->whereHas('journalEntry', function($query) {
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
        return number_format($amount, 2) . ' ' . $type;
    }

    /**
     * Get balance for a specific date range
     */
    public function getBalanceForDateRange($startDate = null, $endDate = null)
    {
        $query = $this->journalEntryLines()
            ->whereHas('journalEntry', function($q) {
                $q->where('status', 'posted');
            });

        if ($startDate) {
            $query->whereHas('journalEntry', function($q) use ($startDate) {
                $q->where('entry_date', '>=', $startDate);
            });
        }

        if ($endDate) {
            $query->whereHas('journalEntry', function($q) use ($endDate) {
                $q->where('entry_date', '<=', $endDate);
            });
        }

        $debits = (clone $query)->sum('debit_amount');
        $credits = (clone $query)->sum('credit_amount');

        return $debits - $credits;
    }

    /**
     * Get all child accounts (recursive)
     */
    public function getAllChildren()
    {
        $children = collect();
        
        foreach ($this->children as $child) {
            $children->push($child);
            $children = $children->merge($child->getAllChildren());
        }
        
        return $children;
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
        $childrenBalance = $this->getAllChildren()->sum(function($child) {
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
        return number_format($amount, 2) . ' ' . $type;
    }

    /**
     * Get total debits including all child accounts
     */
    public function getTotalDebitsIncludingChildren()
    {
        $ownDebits = $this->getTotalDebits();
        $childrenDebits = $this->getAllChildren()->sum(function($child) {
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
        $childrenCredits = $this->getAllChildren()->sum(function($child) {
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
     * This method uses a single query with CTE for better performance
     */
    public static function getBulkBalancesWithChildren($accountIds = null)
    {
        // First get all account IDs including children
        $allAccountIds = collect();
        
        if ($accountIds) {
            foreach ($accountIds as $accountId) {
                $account = static::find($accountId);
                if ($account) {
                    $allAccountIds->push($accountId);
                    $allAccountIds = $allAccountIds->merge($account->getAllChildren()->pluck('id'));
                }
            }
        } else {
            $allAccountIds = static::pluck('id');
        }

        // Get balances for all accounts
        $balances = static::getBulkBalances($allAccountIds->unique()->toArray());

        // Group by parent accounts
        $result = [];
        $targetAccountIds = $accountIds ?? static::pluck('id');
        
        foreach ($targetAccountIds as $accountId) {
            $account = static::find($accountId);
            if ($account) {
                $ownBalance = $balances->get($accountId);
                $ownDebits = $ownBalance ? $ownBalance->total_debits : 0;
                $ownCredits = $ownBalance ? $ownBalance->total_credits : 0;

                $childrenIds = $account->getAllChildren()->pluck('id');
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
        }

        return $result;
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
        
        if (!empty($translations)) {
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
        
        if (!empty($translations)) {
            foreach ($translations as $field => $fieldTranslations) {
                if (in_array($field, $this->translatable)) {
                    $this->setTranslations($field, $fieldTranslations);
                }
            }
        }
        
        return $this;
    }
}

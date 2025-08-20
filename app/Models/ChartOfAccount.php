<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ChartOfAccount extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $fillable = [
        'name',
        'name_ar',
        'code',
        'type',
        'sub_type',
        'is_enabled',
        'description',
        'created_by',
    ];

    private $accounts = [];

    public function types()
    {
        return $this->hasOne('App\Models\ChartOfAccountType', 'id', 'type');
    }

    public function accounts()
    {
        return $this->hasOne('App\Models\JournalItem', 'account', 'id');
    }

    public function balance()
    {
        $journalItem         = JournalItem::select(DB::raw('sum(credit) as totalCredit'), DB::raw('sum(debit) as totalDebit'), DB::raw('sum(credit) - sum(debit) as netAmount'))->where('account', $this->id);
        $journalItem         = $journalItem->first();
        $data['totalCredit'] = $journalItem->totalCredit;
        $data['totalDebit']  = $journalItem->totalDebit;
        $data['netAmount']   = $journalItem->netAmount;

        return $data;
    }
  
    public function balance_sheet($accounting_period_id = null,$start=null,$end=null,$financial_year_id = null)
    {
        $journalItem         = JournalItem::leftjoin('journal_entries','journal_entries.id','journal_items.journal')->select(DB::raw('sum(credit) as totalCredit'), DB::raw('sum(debit) as totalDebit'), DB::raw('sum(debit) - sum(credit) as netAmount'))->where('journal_entries.is_posted',1)->where('account', $this->id);
        
        if(!empty($start))
        {
            $journalItem         = $journalItem->where('journal_entries.date','>=',$start);
        }
        if(!empty($end))
        {
            $journalItem         = $journalItem->where('journal_entries.date','<=',$end);
        }

        $journalItem         = $journalItem->first();

        if(empty(session('items')))
        {
            session()->push('items',$this->id);
            session()->push('debit', $journalItem->totalDebit);
            session()->push('credit', $journalItem->totalCredit);
            session()->push('net', $journalItem->netAmount);
        }
        else
        {
            if(!in_array($this->id, session('items')))
            {
                session()->push('items',$this->id);
                session()->push('debit', $journalItem->totalDebit);
                session()->push('credit', $journalItem->totalCredit);
                session()->push('net', $journalItem->netAmount);
            }
        }

        $data['totalCredit'] = $journalItem->totalCredit;
        $data['totalDebit']  = $journalItem->totalDebit;
        $data['netAmount']   = $journalItem->netAmount;

        return $data;
    }
  
    public function opening_balance($accounting_period_id = null, $start = null, $financial_year_id = null)
    {
        // Cache key to avoid redundant calculations
        $cacheKey = "opening_balance_{$this->id}_{$accounting_period_id}_{$start}_{$financial_year_id}";

        return Cache::remember($cacheKey, now()->addSecond(), function () use ($accounting_period_id, $start, $financial_year_id) {
            $query = JournalItem::join('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
                ->where('journal_entries.is_posted', 1)
                ->where('journal_items.account', $this->id)
                ->selectRaw('
                    SUM(journal_items.credit) as totalCredit,
                    SUM(journal_items.debit) as totalDebit,
                    SUM(journal_items.debit - journal_items.credit) as netAmount
                ');

            // Apply date filter
            if (!empty($start)) {
                $query->where('journal_entries.date', '<', $start);
            }

            // Fetch result
            $journalItem = $query->first();

            return [
                'totalCredit' => $journalItem->totalCredit ?? 0,
                'totalDebit'  => $journalItem->totalDebit ?? 0,
                'netAmount'   => $journalItem->netAmount ?? 0,
            ];
        });
    }

    public function closing_balance($accounting_period_id = null, $start = null, $end = null, $financial_year_id = null)
    {
        // Cache key to avoid redundant calculations
        $cacheKey = "closing_balance_{$this->id}_{$accounting_period_id}_{$start}_{$end}_{$financial_year_id}";

        return Cache::remember($cacheKey, now()->addSecond(), function () use ($start, $end) {
            $query = JournalItem::join('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
                ->where('journal_entries.is_posted', 1)
                ->where('journal_items.account', $this->id)
                ->selectRaw('
                    SUM(CASE WHEN journal_entries.date < ? THEN journal_items.debit ELSE 0 END) as openingDebit,
                    SUM(CASE WHEN journal_entries.date < ? THEN journal_items.credit ELSE 0 END) as openingCredit,
                    SUM(CASE WHEN journal_entries.date BETWEEN ? AND ? THEN journal_items.debit ELSE 0 END) as movementDebit,
                    SUM(CASE WHEN journal_entries.date BETWEEN ? AND ? THEN journal_items.credit ELSE 0 END) as movementCredit
                ', [$start, $start, $start, $end, $start, $end]);

            $balances = $query->first();

            // Extract balances safely
            $openingDebit   = $balances->openingDebit ?? 0;
            $openingCredit  = $balances->openingCredit ?? 0;
            $movementDebit  = $balances->movementDebit ?? 0;
            $movementCredit = $balances->movementCredit ?? 0;

            // Net Closing Balance Calculation
            $netBalance = ($openingDebit + $movementDebit) - ($openingCredit + $movementCredit);

            // Determine Debit or Credit Closing Balance
            $closingDebit  = $netBalance > 0 ? $netBalance : 0;
            $closingCredit = $netBalance < 0 ? abs($netBalance) : 0;

            return [
                'totalDebit'  => $closingDebit,
                'totalCredit' => $closingCredit,
            ];
        });
    }
    
    public function movement($accounting_period_id = null, $start = null, $end = null, $financial_year_id = null)
    {
        // Cache key to avoid redundant calculations
        $cacheKey = "movement_{$this->id}_{$accounting_period_id}_{$start}_{$end}_{$financial_year_id}";
    
        return Cache::remember($cacheKey, now()->addSecond(), function () use ($start, $end) {
            $query = JournalItem::join('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
                ->where('journal_entries.is_posted', 1)
                ->where('journal_entries.journal_entry_type', '!=', 8) // Exclude journal entry type 8
                ->where('journal_items.account', $this->id)
                ->selectRaw('
                    SUM(journal_items.credit) as totalCredit,
                    SUM(journal_items.debit) as totalDebit,
                    SUM(journal_items.debit - journal_items.credit) as netAmount
                ');
    
            // Apply date range filters
            if (!empty($start)) {
                $query->where('journal_entries.date', '>=', $start);
            }
            if (!empty($end)) {
                $query->where('journal_entries.date', '<=', $end);
            }
    
            // Fetch result
            $journalItem = $query->first();
    
            return [
                'totalCredit' => $journalItem->totalCredit ?? 0,
                'totalDebit'  => $journalItem->totalDebit ?? 0,
                'netAmount'   => $journalItem->netAmount ?? 0,
            ];
        });
    }
    

    public function getChildren($children)
    {
        foreach ($children as  $child) {
            if($child->id != $child->sub_type)
            {
                array_push($this->accounts,$child->id);

                if($child->has_child == 1)
                {
                    $this->getChildren($child->children);
                }
            }
        }

        return $this->accounts;
    }

    public function getClosingBalanceTotal($accounting_period_id = null, $start = null, $end = null, $financial_year_id = null,$acc = null)
    {
        $opening_balance         = JournalItem::leftjoin('journal_entries','journal_entries.id','journal_items.journal')->select(DB::raw('sum(credit) as totalCredit'), DB::raw('sum(debit) as totalDebit'), DB::raw('sum(debit) - sum(credit) as netAmount'))->where('journal_entries.is_posted',1)->where('account', $this->id);
    
        $net_movement = JournalItem::leftJoin('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
        ->leftJoin('chart_of_accounts', 'chart_of_accounts.id', '=', 'journal_items.account')
        ->select('journal_items.debit','journal_items.credit')
        ->where('chart_of_accounts.created_by', Auth::user()->creatorId())
        ->where('journal_entries.is_posted', 1) // Only posted entries
        ->where('journal_entries.journal_entry_type','!=',8);

        // Apply account-specific filter if provided
        if (!empty($acc)) {
            array_push($this->accounts, $acc);
            $account = ChartOfAccount::find($acc);
            $acc = $this->getChildren($account->children);
            $net_movement = $net_movement->whereIn('journal_items.account', $acc);
            $opening_balance = $opening_balance->whereIn('journal_items.account', $acc);
        }

        // Filter by start date
        if (!empty($start)) {
            $net_movement = $net_movement->where('journal_entries.date', '>=', $start);
             $opening_balance = $opening_balance->where('journal_entries.date', '<', $start);
        }

        // Filter by end date
        if (!empty($end)) {
            $net_movement = $net_movement->where('journal_entries.date', '<=', $end);
        }

        // Fetch the totals
        $net_movement = $net_movement->get();
        $opening_balance = $opening_balance->first();

        $net_movement_debit = 0;
        $net_movement_credit = 0;

        foreach ($net_movement as $item) {
            $bal = $item->debit  - $item->credit;
            if($bal > 0)
            {
                $net_movement_debit += $bal;
            }
            else if($bal < 0)
            {
                $net_movement_credit += abs($bal);
            }
        }

        // Prepare data for output
        $data = [
            'totalCredit' => $net_movement_credit + $opening_balance->totalCredit  ?? 0,
            'totalDebit' => $net_movement_debit + $opening_balance->totalDebit  ?? 0,
        ];

        return $data;
    }
    
    public function getNetMovementTotal($accounting_period_id = null, $start = null, $end = null, $financial_year_id = null,$acc = null)
    {
        // Initialize the query
        $journalItem = JournalItem::leftJoin('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
            ->leftJoin('chart_of_accounts', 'chart_of_accounts.id', '=', 'journal_items.account')
            ->select('journal_items.debit','journal_items.credit')
            ->where('chart_of_accounts.created_by', Auth::user()->creatorId())
            ->where('journal_entries.is_posted', 1) // Only posted entries
            ->where('journal_entries.journal_entry_type','!=',8);

        // Apply account-specific filter if provided
        if (!empty($acc)) {
            array_push($this->accounts, $acc);
            $account = ChartOfAccount::find($acc);
            $acc = $this->getChildren($account->children);
            $journalItem = $journalItem->whereIn('journal_items.account', $acc);
        }

        // Filter by start date
        if (!empty($start)) {
            $journalItem = $journalItem->where('journal_entries.date', '>=', $start);
        }

        // Filter by end date
        if (!empty($end)) {
            $journalItem = $journalItem->where('journal_entries.date', '<=', $end);
        }

        // Fetch the totals
        $journalItem = $journalItem->get();

        $net_movement_debit = 0;
        $net_movement_credit = 0;

        foreach ($journalItem as $item) {
            $bal = $item->debit  - $item->credit;
            if($bal > 0)
            {
                $net_movement_debit += $bal;
            }
            else if($bal < 0)
            {
                $net_movement_credit += abs($bal);
            }
        }

        // Prepare data for output
        $data = [
            'totalCredit' => $net_movement_credit ?? 0,
            'totalDebit' => $net_movement_debit ?? 0,
        ];

        return $data;
    }

    public function getMovementTotal($accounting_period_id = null, $start = null, $end = null, $financial_year_id = null, $acc = null)
    {
        // Cache key to prevent redundant calculations
        $cacheKey = "movement_balance_{$this->id}_{$accounting_period_id}_{$start}_{$end}_{$financial_year_id}_{$acc}";
    
        return Cache::remember($cacheKey, now()->addSecond(), function () use ($start, $end, $acc) {
            $query = JournalItem::join('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
                ->join('chart_of_accounts', 'chart_of_accounts.id', '=', 'journal_items.account')
                ->selectRaw('
                    SUM(journal_items.credit) as totalCredit,
                    SUM(journal_items.debit) as totalDebit,
                    SUM(journal_items.debit) - SUM(journal_items.credit) as netAmount
                ')
                ->where('chart_of_accounts.created_by', Auth::user()->creatorId())
                ->where('journal_entries.is_posted', 1) // Only posted entries
                ->where('journal_entries.journal_entry_type', '!=', 8); // Exclude specific entry type
    
            // Apply account-specific filter if provided
            if (!empty($acc)) {
                $account = ChartOfAccount::find($acc);
                $accountIds = $this->getChildren($account->children);
                $query = $query->whereIn('journal_items.account', $accountIds);
            }
    
            // Apply start date filter
            if (!empty($start)) {
                $query = $query->where('journal_entries.date', '>=', $start);
            }
    
            // Apply end date filter
            if (!empty($end)) {
                $query = $query->where('journal_entries.date', '<=', $end);
            }
    
            // Fetch the totals
            $journalItem = $query->first();
    
            return [
                'totalCredit' => $journalItem->totalCredit ?? 0,
                'totalDebit'  => $journalItem->totalDebit ?? 0,
                'netAmount'   => $journalItem->netAmount ?? 0, // Adjust for balance sheet calculations
            ];
        });
    }
    
    public function getOpeningBalanceTotal($accounting_period_id = null, $start = null, $end = null, $financial_year_id = null, $acc = null)
    {
       
        $cacheKey = "opening_balance_{$this->id}_{$accounting_period_id}_{$start}_{$end}_{$financial_year_id}_{$acc}";

        return Cache::remember($cacheKey, now()->addSecond(), function () use ($accounting_period_id, $start, $financial_year_id,$acc) {
            $query = JournalItem::join('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
                ->where('journal_entries.is_posted', 1)
                ->selectRaw('
                    SUM(journal_items.credit) as totalCredit,
                    SUM(journal_items.debit) as totalDebit,
                    SUM(journal_items.debit - journal_items.credit) as netAmount
                ');

            if (!empty($acc)) {
                 array_push($this->accounts, $acc);
                $account = ChartOfAccount::find($acc);
                $accountIds = $this->getChildren($account->children);
                $query = $query->whereIn('journal_items.account', $accountIds);
            }
    
            // Apply start date filter
            if (!empty($start)) {
                $query->where('journal_entries.date', '<', $start);
            }
    
            // Fetch the totals
            $journalItem = $query->first();
    
            return [
                'totalCredit' => $journalItem->totalCredit ?? 0,
                'totalDebit'  => $journalItem->totalDebit ?? 0,
                'netAmount'   => $journalItem->netAmount ?? 0, // Adjust for balance sheet calculations
            ];
        });
    }
    
    public function getTotal($accounting_period_id = null, $start = null, $end = null, $acc = null, $financial_year_id = null)
    {
        // Initialize the query
        $journalItem = JournalItem::leftJoin('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
            ->leftJoin('chart_of_accounts', 'chart_of_accounts.id', '=', 'journal_items.account')
            ->select(
                DB::raw('SUM(credit) as totalCredit'),
                DB::raw('SUM(debit) as totalDebit'),
                DB::raw('SUM(debit) - SUM(credit) as netAmount')
            )
            ->where('chart_of_accounts.created_by', Auth::user()->creatorId())
            ->where('journal_entries.is_posted', 1) // Only posted entries
            ->where('chart_of_accounts.type', $this->type); // Filter by chart of account type

        // Apply account-specific filter if provided
        if (!empty($acc)) {
            array_push($this->accounts, $acc);
            $account = ChartOfAccount::find($acc);
            $acc = $this->getChildren($account->children);
            $journalItem = $journalItem->whereIn('journal_items.account', $acc);
        }

        // Filter by start date
        if (!empty($start)) {
            $journalItem = $journalItem->where('journal_entries.date', '>=', $start);
        }

        // Filter by end date
        if (!empty($end)) {
            $journalItem = $journalItem->where('journal_entries.date', '<=', $end);
        }

        // Fetch the totals
        $journalItem = $journalItem->first();

        // Prepare data for output
        $data = [
            'totalCredit' => $journalItem->totalCredit ?? 0,
            'totalDebit' => $journalItem->totalDebit ?? 0,
            'netAmount' => $journalItem->netAmount ?? 0, // Adjust for balance sheet calculations
        ];

        return $data;
    }

    public function getProfitLoss($start = null, $end = null,$project_id = null)
    {
        // Initialize the query
        $journalItem = JournalItem::leftJoin('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
            ->leftJoin('chart_of_accounts', 'chart_of_accounts.id', '=', 'journal_items.account')
            ->select(
                DB::raw('SUM(credit) as totalCredit'),
                DB::raw('SUM(debit) as totalDebit')
            )
            ->where('chart_of_accounts.created_by', Auth::user()->creatorId())
            ->where('journal_entries.is_posted', 1)
            ->where('account', $this->id);

        // Filter by start date
        if (!empty($start)) {
            $journalItem = $journalItem->where('journal_entries.date', '>=', $start);
        }

        // Filter by end date
        if (!empty($end)) {
            $journalItem = $journalItem->where('journal_entries.date', '<=', $end);
        }
        if (!empty($project_id)) {
            $journalItem = $journalItem->where('journal_entries.project_id',  $project_id);
        }

        // Fetch the totals
        $journalItem = $journalItem->first();

        $data = [
            'totalCredit' => $journalItem->totalCredit ?? 0,
            'totalDebit' => $journalItem->totalDebit ?? 0,
        ];

        return $data;
    }
    
    public function getProfitLossTotal($start = null, $end = null,$acc = null,$project_id = null)
    {
        // Initialize the query
        $journalItem = JournalItem::leftJoin('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
            ->leftJoin('chart_of_accounts', 'chart_of_accounts.id', '=', 'journal_items.account')
            ->select(
                DB::raw('SUM(credit) as totalCredit'),
                DB::raw('SUM(debit) as totalDebit')
            )
            ->where('chart_of_accounts.created_by', Auth::user()->creatorId())
            ->where('journal_entries.is_posted', 1);

        // Apply account-specific filter if provided
        if (!empty($acc)) {
            array_push($this->accounts, $acc);
            $account = ChartOfAccount::find($acc);
            $acc = $this->getChildren($account->children);
            $journalItem = $journalItem->whereIn('journal_items.account', $acc);
        }

        // Filter by start date
        if (!empty($start)) {
            $journalItem = $journalItem->where('journal_entries.date', '>=', $start);
        }

        // Filter by end date
        if (!empty($end)) {
            $journalItem = $journalItem->where('journal_entries.date', '<=', $end);
        }
        if (!empty($project_id)) {
            $journalItem = $journalItem->where('journal_entries.project_id',  $project_id);
        }

        // Fetch the totals
        $journalItem = $journalItem->first();

        $data = [
            'totalCredit' => $journalItem->totalCredit ?? 0,
            'totalDebit' => $journalItem->totalDebit ?? 0,
        ];

        return $data;
    }
    
    public function getAccountTotal($accounting_period_id = null, $start = null, $end = null, $acc = null, $financial_year_id = null)
    {
        // Generate a cache key based on function parameters
        $cacheKey = "account_total_{$accounting_period_id}_{$start}_{$end}_{$acc}_{$financial_year_id}_" . auth()->id();
    
        return Cache::remember($cacheKey, now()->addSecond(), function () use ($start, $end, $acc) {
            // Initialize query
            $query = JournalItem::leftJoin('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
                ->leftJoin('chart_of_accounts', 'chart_of_accounts.id', '=', 'journal_items.account')
                ->where('chart_of_accounts.created_by', auth()->user()->creatorId())
                ->where('journal_entries.is_posted', 1)
                ->selectRaw('SUM(credit) as totalCredit, SUM(debit) as totalDebit');
    
            // Apply account filter
            if (!empty($acc)) {
                array_push($this->accounts, $acc);
                if ($account = ChartOfAccount::find($acc)) {
                    $acc = $this->getChildren($account->children);
                    $query->whereIn('journal_items.account', $acc);
                }
            }
    
            // Apply date filters if provided
            if (!empty($start) && !empty($end)) {
                $query->whereBetween('journal_entries.date', [$start, $end]);
            } elseif (!empty($start)) {
                $query->where('journal_entries.date', '>=', $start);
            } elseif (!empty($end)) {
                $query->where('journal_entries.date', '<=', $end);
            }
    
            // Fetch the result
            $result = $query->first();
    
            return ($result->totalCredit == 0 && $result->totalDebit == 0) ? false : true;
        });
    }
    
    public function BalanceSheetgetTotal($accounting_period_id = null, $start = null, $end = null, $acc = null, $financial_year_id = null)
    {
        // Initialize the query
        $journalItem = JournalItem::leftJoin('journal_entries', 'journal_entries.id', '=', 'journal_items.journal')
            ->leftJoin('chart_of_accounts', 'chart_of_accounts.id', '=', 'journal_items.account')
            ->select(
                DB::raw('SUM(credit) as totalCredit'),
                DB::raw('SUM(debit) as totalDebit'),
                DB::raw('SUM(debit) - SUM(credit) as netAmount')
            )
            ->where('chart_of_accounts.created_by', Auth::user()->creatorId())
            ->where('journal_entries.is_posted', 1) // Only posted entries
            ->where('chart_of_accounts.type', $this->type); // Filter by chart of account type

        // Apply account-specific filter if provided
        if (!empty($acc)) {
            array_push($this->accounts, $acc);
            $account = ChartOfAccount::find($acc);
            $acc = $this->getChildren($account->children);
            $journalItem = $journalItem->whereIn('journal_items.account', $acc);
        }

        // Filter by start date
        if (!empty($start)) {
            $journalItem = $journalItem->where('journal_entries.date', '>=', $start);
        }

        // Filter by end date
        if (!empty($end)) {
            $journalItem = $journalItem->where('journal_entries.date', '<=', $end);
        }

        // Fetch the totals
        $journalItem = $journalItem->first();

        // Prepare data for output
        $data = [
            'totalCredit' => $journalItem->totalCredit ?? 0,
            'totalDebit' => $journalItem->totalDebit ?? 0,
            'netAmount' => $journalItem->netAmount ?? 0, // Adjust for balance sheet calculations
        ];

        return $data;
    }

    public function subType()
    {
        return $this->hasOne('App\Models\ChartOfAccount', 'id', 'sub_type');
    }
    
    public function sub()
    {
        return $this->hasOne('App\Models\ChartOfAccount', 'id', 'sub_type');
    }

    public function child()
    {
        return $this->hasOne('App\Models\ChartOfAccount', 'id', 'sub_type');
    }

    public function children()
    {
        return $this->hasMany('App\Models\ChartOfAccount', 'sub_type', 'id')->orderBy('account_level','asc')->orderBy('order','asc');
    }

    public function childrenn()
    {
        return $this->hasMany('App\Models\ChartOfAccount', 'sub_type', 'account_id')->orderBy('account_level','asc')->orderBy('order','asc');
    }

    public function journal()
    {
        return $this->hasMany(JournalItem::class, 'account', 'id');
    }

    public function postledger()
    {
        return $this->hasMany(PostLedgerItem::class, 'account', 'id');
    }

    public function salesChoices()
    {
        return $this->belongsToMany(Choice::class, 'sales_account');
    }

    public function purchaseChoices()
    {
        return $this->belongsToMany(Choice::class, 'purchase_account');
    }

    public function taxes(): BelongsToMany
    {
        return $this->belongsToMany(Tax::class, 'chart_of_account_tax')
            ->withPivot('created_by', 'type')
            ->withTimestamps();
    }
}

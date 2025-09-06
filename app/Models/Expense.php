<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use Sluggable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'reason', 'slug', 'sub_cat_id', 'transaction_id', 'amount', 'expense_account_id', 'date', 'created_by', 'note', 'image_path', 'status',
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'reason',
            ],
        ];
    }

    /**
     * Get the asset type that owns the asset.
     */
    public function expSubCategory()
    {
        return $this->belongsTo(ExpenseSubCategory::class, 'sub_cat_id');
    }

    /**
     * Get the tansaction for this expense.
     */
    public function expTransaction()
    {
        return $this->belongsTo(AccountTransaction::class, 'transaction_id');
    }

    /**
     * Get the user who had created this expense.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the journal entry for this expense.
     */
    public function expenseJournal()
    {
        return $this->hasOne(ExpenseJournal::class);
    }

    /**
     * Get the journal entry through the expense journal relationship.
     */
    public function journalEntry()
    {
        return $this->hasOneThrough(JournalEntry::class, ExpenseJournal::class, 'expense_id', 'id', 'id', 'journal_entry_id');
    }

    /**
     * Get the expense account (chart of account) for this expense.
     */
    public function expenseAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'expense_account_id');
    }
}

<?php

namespace App\Domain\Expense\Models;

use App\Domain\Branch\Models\Branch;
use App\Domain\Expense\Enums\ExpenseCategory;
use App\Domain\Treasury\Models\Treasury;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Expense extends Model
{
    use HasFactory;

    protected $fillable = [
        'expense_number',
        'branch_id',
        'treasury_id',
        'payment_method',
        'category',
        'title',
        'notes',
        'amount',
        'expense_date',
        'created_by',
    ];

    protected $casts = [
        'category' => ExpenseCategory::class,
        'amount' => 'decimal:2',
        'expense_date' => 'date',
    ];

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function treasury(): BelongsTo
    {
        return $this->belongsTo(Treasury::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}

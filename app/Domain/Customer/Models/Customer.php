<?php

namespace App\Domain\Customer\Models;

use App\Domain\Customer\Enums\CustomerType;
use App\Domain\Customer\Enums\StudentClass;
use App\Domain\Sales\Models\SalesInvoice;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'type',
        'student_class',
        'credit_balance',
    ];

    protected $casts = [
        'type' => CustomerType::class,
        'student_class' => StudentClass::class,
        'credit_balance' => 'decimal:2',
    ];

    public function invoices(): HasMany
    {
        return $this->hasMany(SalesInvoice::class);
    }

    public function payments(): HasMany
    {
        return $this->hasMany(CustomerPayment::class);
    }

    public function outstandingBalance(): float
    {
        return (float) $this->invoices()
            ->where(function ($q) {
                $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
            })
            ->sum('remaining_amount');
    }

    public function netBalance(): float
    {
        return round($this->outstandingBalance() - (float) $this->credit_balance, 2);
    }
}

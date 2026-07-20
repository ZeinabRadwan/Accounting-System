<?php

namespace App\Domain\Supplier\Models;

use App\Domain\Purchase\Models\PurchaseInvoice;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'address',
        'credit_balance',
    ];

    protected $casts = [
        'credit_balance' => 'decimal:2',
    ];

    public function purchases(): HasMany
    {
        return $this->hasMany(PurchaseInvoice::class);
    }

    public function purchaseInvoices(): HasMany
    {
        return $this->purchases();
    }

    public function payments(): HasMany
    {
        return $this->hasMany(SupplierPayment::class);
    }

    public function outstandingBalance(): float
    {
        return (float) $this->purchases()
            ->where('remaining_amount', '>', 0)
            ->sum('remaining_amount');
    }

    public function netBalance(): float
    {
        return round($this->outstandingBalance() - (float) $this->credit_balance, 2);
    }
}

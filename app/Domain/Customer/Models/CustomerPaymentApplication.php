<?php

namespace App\Domain\Customer\Models;

use App\Domain\Sales\Models\SalesInvoice;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerPaymentApplication extends Model
{
    protected $fillable = [
        'customer_payment_id',
        'sales_invoice_id',
        'applied_amount',
    ];

    protected $casts = [
        'applied_amount' => 'decimal:2',
    ];

    public function payment(): BelongsTo
    {
        return $this->belongsTo(CustomerPayment::class, 'customer_payment_id');
    }

    public function invoice(): BelongsTo
    {
        return $this->belongsTo(SalesInvoice::class, 'sales_invoice_id');
    }
}

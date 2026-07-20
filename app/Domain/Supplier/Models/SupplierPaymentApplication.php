<?php

namespace App\Domain\Supplier\Models;

use App\Domain\Purchase\Models\PurchaseInvoice;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SupplierPaymentApplication extends Model
{
    protected $fillable = [
        'supplier_payment_id',
        'purchase_invoice_id',
        'applied_amount',
    ];

    protected $casts = [
        'applied_amount' => 'decimal:2',
    ];

    public function payment(): BelongsTo
    {
        return $this->belongsTo(SupplierPayment::class, 'supplier_payment_id');
    }

    public function invoice(): BelongsTo
    {
        return $this->belongsTo(PurchaseInvoice::class, 'purchase_invoice_id');
    }
}

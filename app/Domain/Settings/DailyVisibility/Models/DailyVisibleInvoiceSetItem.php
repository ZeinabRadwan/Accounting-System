<?php

namespace App\Domain\Settings\DailyVisibility\Models;

use App\Domain\Sales\Models\SalesInvoice;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DailyVisibleInvoiceSetItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'daily_visible_invoice_set_id',
        'sales_invoice_id',
    ];

    public function invoice(): BelongsTo
    {
        return $this->belongsTo(SalesInvoice::class, 'sales_invoice_id');
    }

    public function set(): BelongsTo
    {
        return $this->belongsTo(DailyVisibleInvoiceSet::class, 'daily_visible_invoice_set_id');
    }
}


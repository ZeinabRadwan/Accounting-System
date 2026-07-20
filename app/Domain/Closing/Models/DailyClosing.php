<?php

namespace App\Domain\Closing\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyClosing extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'closing_datetime',
        'closing_period',
        'total_sales',
        'total_purchases',
        'total_sales_returns',
        'total_purchase_returns',
        'total_expenses',
        'net_sales',
        'net_profit',
        'treasury_summary',
        'created_at',
    ];

    protected function casts(): array
    {
        return [
            'closing_datetime' => 'datetime',
            'total_sales' => 'decimal:2',
            'total_purchases' => 'decimal:2',
            'total_sales_returns' => 'decimal:2',
            'total_purchase_returns' => 'decimal:2',
            'total_expenses' => 'decimal:2',
            'net_sales' => 'decimal:2',
            'net_profit' => 'decimal:2',
            'treasury_summary' => 'array',
            'created_at' => 'datetime',
        ];
    }

    public function counts(): array
    {
        return (array) data_get($this->treasury_summary, 'counts', []);
    }

    public function treasuries(): array
    {
        return (array) data_get($this->treasury_summary, 'treasuries', []);
    }
}

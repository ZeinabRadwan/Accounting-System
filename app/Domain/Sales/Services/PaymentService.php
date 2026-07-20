<?php

namespace App\Domain\Sales\Services;

class PaymentService
{
    public function determineStatus(float $total, float $paid): string
    {
        if ($paid >= $total && $total > 0) {
            return 'paid';
        }
        if ($paid > 0 && $paid < $total) {
            return 'partially_paid';
        }
        return 'unpaid';
    }
}


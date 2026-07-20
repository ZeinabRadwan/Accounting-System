<?php

namespace App\Domain\Treasury\Enums;

enum TreasuryTransactionType: string
{
    case Income = 'income';
    case Expense = 'expense';
}

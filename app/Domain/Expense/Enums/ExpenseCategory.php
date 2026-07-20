<?php

namespace App\Domain\Expense\Enums;

enum ExpenseCategory: string
{
    case Rent = 'rent';
    case Utilities = 'utilities';
    case Salaries = 'salaries';
    case Transport = 'transport';
    case Supplies = 'supplies';
    case Maintenance = 'maintenance';
    case Marketing = 'marketing';
    case Other = 'other';

    public function label(): string
    {
        return match ($this) {
            self::Rent => __('Rent'),
            self::Utilities => __('Utilities'),
            self::Salaries => __('Salaries'),
            self::Transport => __('Transport'),
            self::Supplies => __('Supplies'),
            self::Maintenance => __('Maintenance'),
            self::Marketing => __('Marketing'),
            self::Other => __('Other'),
        };
    }

    /** @return list<string> */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}

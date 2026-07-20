<?php

namespace App\Domain\Customer\Enums;

enum CustomerType: string
{
    case Doctor = 'doctor';
    case Student = 'student';

    public function label(): string
    {
        return match ($this) {
            self::Doctor => __('Doctor'),
            self::Student => __('Student'),
        };
    }

    /** @return list<string> */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}

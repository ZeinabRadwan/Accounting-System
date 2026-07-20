<?php

namespace App\Domain\Customer\Enums;

enum StudentClass: string
{
    case Clinic = 'clinic';
    case Preclinic = 'preclinic';

    public function label(): string
    {
        return match ($this) {
            self::Clinic => __('Clinic'),
            self::Preclinic => __('Preclinic'),
        };
    }

    /** @return list<string> */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}

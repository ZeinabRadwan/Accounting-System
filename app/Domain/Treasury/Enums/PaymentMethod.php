<?php

namespace App\Domain\Treasury\Enums;

enum PaymentMethod: string
{
    case Cash = 'cash';
    case Visa = 'visa';
    case Instapay = 'instapay';
    case VodafoneCash = 'vodafone_cash';

    public function label(): string
    {
        return match ($this) {
            self::Cash => __('Cash'),
            self::Visa => __('Visa'),
            self::Instapay => __('Instapay'),
            self::VodafoneCash => __('Vodafone Cash'),
        };
    }

    public function defaultTreasuryName(): string
    {
        return match ($this) {
            self::Cash => 'Cash Treasury',
            self::Visa => 'Visa Treasury',
            self::Instapay => 'Instapay Treasury',
            self::VodafoneCash => 'Vodafone Cash Treasury',
        };
    }

    /**
     * Normalize UI aliases (e.g. vodafone → vodafone_cash).
     */
    public static function normalize(string $value): string
    {
        $value = strtolower(trim($value));

        return match ($value) {
            'vodafone', 'vodafone cash', 'vodafone_cash' => self::VodafoneCash->value,
            'cash' => self::Cash->value,
            'visa' => self::Visa->value,
            'instapay' => self::Instapay->value,
            default => $value,
        };
    }

    public static function tryFromNormalized(string $value): ?self
    {
        return self::tryFrom(self::normalize($value));
    }

    /** @return list<string> */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}

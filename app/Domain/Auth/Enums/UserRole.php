<?php

namespace App\Domain\Auth\Enums;

enum UserRole: string
{
    case SuperAdmin = 'super_admin';
    case Admin = 'admin';
    case Sales = 'sales';

    public function label(): string
    {
        return match ($this) {
            self::SuperAdmin => 'Super Admin',
            self::Admin => 'Admin',
            self::Sales => 'Sales',
        };
    }

    /**
     * @return list<string>
     */
    public static function values(): array
    {
        return array_map(fn (self $role) => $role->value, self::cases());
    }

    public function canAccessAdminPanel(): bool
    {
        return $this === self::SuperAdmin || $this === self::Admin;
    }

    public function bypassesInvoiceVisibility(): bool
    {
        return $this === self::SuperAdmin;
    }

    public static function tryFromMixed(mixed $value): ?self
    {
        if ($value instanceof self) {
            return $value;
        }

        if (is_string($value) && $value !== '') {
            return self::tryFrom($value);
        }

        return null;
    }
}

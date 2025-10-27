<?php

namespace App\Helpers;

use Illuminate\Support\Facades\DB;

class SystemTypeHelper
{
    const SYSTEM_TYPE_POS = 'pos';
    const SYSTEM_TYPE_ACCOUNTING = 'accounting';
    const SYSTEM_TYPE_BOTH = 'both';

    /**
     * Get the system type from general_settings
     *
     * @return string|null
     */
    public static function getSystemType()
    {
        try {
            $setting = DB::table('general_settings')
                ->where('key', 'system_type')
                ->first();

            return $setting ? $setting->value : null;
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * Check if user can access a module based on system type
     *
     * @param string $module The module to check (e.g., 'pos', 'accounting')
     * @return bool
     */
    public static function canAccessModule($module)
    {
        $systemType = self::getSystemType();

        // If no system type is set, allow access (for backwards compatibility)
        if (!$systemType) {
            return true;
        }

        // If 'both' is selected, allow all access
        if ($systemType === self::SYSTEM_TYPE_BOTH) {
            return true;
        }

        // Check if the requested module matches the system type
        return $systemType === $module;
    }

    /**
     * Check if the system type is POS
     *
     * @return bool
     */
    public static function isPOS()
    {
        return self::getSystemType() === self::SYSTEM_TYPE_POS;
    }

    /**
     * Check if the system type is Accounting
     *
     * @return bool
     */
    public static function isAccounting()
    {
        return self::getSystemType() === self::SYSTEM_TYPE_ACCOUNTING;
    }

    /**
     * Check if the system type is Both
     *
     * @return bool
     */
    public static function isBoth()
    {
        return self::getSystemType() === self::SYSTEM_TYPE_BOTH;
    }
}

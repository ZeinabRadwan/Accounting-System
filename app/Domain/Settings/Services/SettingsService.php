<?php

namespace App\Domain\Settings\Services;

use App\Domain\Settings\Models\Setting;
use Illuminate\Support\Facades\Cache;

class SettingsService
{
    protected function cacheKey(string $group, string $key): string
    {
        return "settings:{$group}:{$key}";
    }

    public function get(string $group, string $key, mixed $default = null): mixed
    {
        $ck = $this->cacheKey($group, $key);

        return Cache::remember($ck, 3600, function () use ($group, $key, $default) {
            $row = Setting::query()->where('group', $group)->where('key', $key)->first();

            return $row?->value ?? $default;
        });
    }

    public function set(string $group, string $key, mixed $value, ?int $updatedBy = null): void
    {
        $payload = is_array($value) ? $value : ['value' => $value];

        Setting::query()->updateOrCreate(
            ['group' => $group, 'key' => $key],
            ['value' => $payload, 'updated_by' => $updatedBy]
        );

        Cache::forget($this->cacheKey($group, $key));
    }

    public function getScalar(string $group, string $key, mixed $default = ''): mixed
    {
        $raw = $this->get($group, $key, null);

        if ($raw === null) {
            return $default;
        }

        if (is_array($raw)) {
            return array_key_exists('value', $raw) ? $raw['value'] : $default;
        }

        return $raw;
    }

    public function getInvoiceTemplate(): array
    {
        return [
            'store_name' => (string) $this->getScalar('invoice', 'store_name', ''),
            'logo_path' => (string) $this->getScalar('invoice', 'logo_path', ''),
            'address' => (string) $this->getScalar('invoice', 'address', ''),
            'phone' => (string) $this->getScalar('invoice', 'phone', ''),
            'receipt_header' => (string) $this->getScalar('invoice', 'receipt_header', ''),
            'receipt_footer' => (string) $this->getScalar('invoice', 'receipt_footer', ''),
        ];
    }

    public function saveInvoiceTemplate(array $data, ?int $updatedBy = null): void
    {
        foreach (['store_name', 'logo_path', 'address', 'phone', 'receipt_header', 'receipt_footer'] as $k) {
            $this->set('invoice', $k, $data[$k] ?? '', $updatedBy);
        }
    }

    public function getDailySettings(): array
    {
        return [
            'daily_sales_limit' => (float) $this->getScalar('daily', 'daily_sales_limit', 0),
            'invoice_prefix' => (string) $this->getScalar('daily', 'invoice_prefix', 'INV-'),
            'default_payment_method' => (string) $this->getScalar('daily', 'default_payment_method', 'cash'),
        ];
    }

    public function saveDailySettings(array $data, ?int $updatedBy = null): void
    {
        $this->set('daily', 'daily_sales_limit', (float) ($data['daily_sales_limit'] ?? 0), $updatedBy);
        $this->set('daily', 'invoice_prefix', (string) ($data['invoice_prefix'] ?? 'INV-'), $updatedBy);
        $this->set('daily', 'default_payment_method', (string) ($data['default_payment_method'] ?? 'cash'), $updatedBy);
    }
}

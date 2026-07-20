<?php

namespace App\Domain\Notifications\Services;

use App\Domain\Notifications\Enums\NotificationEvent;
use App\Domain\Settings\Services\SettingsService;

class NotificationSettingsService
{
    public const GROUP = 'notifications';

    public const DEFAULT_LOW_STOCK_THRESHOLD = 10;

    public const DEFAULT_LARGE_TREASURY_THRESHOLD = 10000;

    public function __construct(private readonly SettingsService $settings)
    {
    }

    public function isEnabled(NotificationEvent $event): bool
    {
        $raw = $this->settings->get(self::GROUP, 'enabled_'.$event->value, null);

        if ($raw === null) {
            return true;
        }

        if (is_array($raw)) {
            return (bool) ($raw['value'] ?? true);
        }

        return (bool) $raw;
    }

    public function setEnabled(NotificationEvent $event, bool $enabled, ?int $updatedBy = null): void
    {
        $this->settings->set(self::GROUP, 'enabled_'.$event->value, $enabled, $updatedBy);
    }

    public function lowStockThreshold(): float
    {
        return (float) $this->settings->getScalar(
            self::GROUP,
            'low_stock_threshold',
            self::DEFAULT_LOW_STOCK_THRESHOLD
        );
    }

    public function setLowStockThreshold(float $value, ?int $updatedBy = null): void
    {
        $this->settings->set(self::GROUP, 'low_stock_threshold', max(0, $value), $updatedBy);
    }

    public function largeTreasuryThreshold(): float
    {
        return (float) $this->settings->getScalar(
            self::GROUP,
            'large_treasury_threshold',
            self::DEFAULT_LARGE_TREASURY_THRESHOLD
        );
    }

    public function setLargeTreasuryThreshold(float $value, ?int $updatedBy = null): void
    {
        $this->settings->set(self::GROUP, 'large_treasury_threshold', max(0, $value), $updatedBy);
    }

    /**
     * @return array{events: array<string, bool>, low_stock_threshold: float, large_treasury_threshold: float}
     */
    public function all(): array
    {
        $events = [];
        foreach (NotificationEvent::configurable() as $event) {
            $events[$event->value] = $this->isEnabled($event);
        }

        return [
            'events' => $events,
            'low_stock_threshold' => $this->lowStockThreshold(),
            'large_treasury_threshold' => $this->largeTreasuryThreshold(),
        ];
    }

    /**
     * @param  array<string, bool>  $events
     */
    public function save(array $events, float $lowStockThreshold, float $largeTreasuryThreshold, ?int $updatedBy = null): void
    {
        foreach (NotificationEvent::configurable() as $event) {
            $this->setEnabled($event, (bool) ($events[$event->value] ?? true), $updatedBy);
        }

        $this->setLowStockThreshold($lowStockThreshold, $updatedBy);
        $this->setLargeTreasuryThreshold($largeTreasuryThreshold, $updatedBy);
    }
}

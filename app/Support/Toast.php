<?php

namespace App\Support;

class Toast
{
    public const SUCCESS = 'success';

    public const ERROR = 'error';

    public const WARNING = 'warning';

    public const INFO = 'info';

    /**
     * @param  array<string, mixed>  $replace
     * @return array{type: string, title: string, message: string, duration: int}
     */
    public static function make(
        string $message,
        string $type = self::SUCCESS,
        ?string $title = null,
        array $replace = [],
        int $duration = 4500,
    ): array {
        $type = self::normalizeType($type);

        return [
            'type' => $type,
            'title' => $title !== null ? __($title, $replace) : self::defaultTitle($type),
            'message' => __($message, $replace),
            'duration' => max(1500, $duration),
        ];
    }

    /**
     * @param  array<string, mixed>  $replace
     */
    public static function flash(
        string $message,
        string $type = self::SUCCESS,
        ?string $title = null,
        array $replace = [],
        int $duration = 4500,
    ): void {
        session()->flash('toast', self::make($message, $type, $title, $replace, $duration));
    }

    /**
     * @param  array{type: string, title: string, message: string, duration: int}  $payload
     */
    public static function script(array $payload): string
    {
        $json = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_AMP | JSON_HEX_QUOT);

        return 'window.Alpine && Alpine.store("toast") && Alpine.store("toast").push('.$json.')';
    }

    public static function normalizeType(string $type): string
    {
        $type = strtolower(trim($type));

        return match ($type) {
            'danger', 'error', 'failed', 'fail' => self::ERROR,
            'warn', 'warning' => self::WARNING,
            'info', 'information', 'notice' => self::INFO,
            default => self::SUCCESS,
        };
    }

    public static function defaultTitle(string $type): string
    {
        return match (self::normalizeType($type)) {
            self::ERROR => __('Error'),
            self::WARNING => __('Warning'),
            self::INFO => __('Information'),
            default => __('Success'),
        };
    }
}

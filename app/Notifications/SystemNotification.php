<?php

namespace App\Notifications;

use App\Domain\Notifications\Enums\NotificationEvent;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class SystemNotification extends Notification
{
    use Queueable;

    /**
     * @param  array<string, mixed>  $meta
     */
    public function __construct(
        public readonly NotificationEvent $event,
        public readonly string $title,
        public readonly string $body,
        public readonly ?string $url = null,
        public readonly ?string $tone = null,
        public readonly ?string $icon = null,
        public readonly array $meta = [],
        public readonly ?string $fingerprint = null,
    ) {
    }

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toDatabase(object $notifiable): array
    {
        return array_merge([
            'event' => $this->event->value,
            'title' => $this->title,
            'body' => $this->body,
            'description' => $this->body,
            'icon' => $this->icon ?? $this->event->defaultIcon(),
            'type' => $this->tone ?? $this->event->defaultTone(),
            'module' => $this->event->module(),
            'url' => $this->url,
            'fingerprint' => $this->fingerprint,
            'meta' => $this->meta,
        ], $this->meta);
    }
}

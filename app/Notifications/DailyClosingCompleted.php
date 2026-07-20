<?php

namespace App\Notifications;

use App\Domain\Closing\Models\DailyClosing;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class DailyClosingCompleted extends Notification
{
    use Queueable;

    public function __construct(private readonly DailyClosing $closing)
    {
    }

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toDatabase(object $notifiable): array
    {
        return [
            'title' => __('Daily Closing Completed'),
            'closing_id' => $this->closing->id,
            'closing_datetime' => $this->closing->closing_datetime?->format('Y-m-d H:i'),
            'total_sales' => (float) $this->closing->total_sales,
            'total_purchases' => (float) $this->closing->total_purchases,
            'total_expenses' => (float) $this->closing->total_expenses,
            'net_profit' => (float) $this->closing->net_profit,
            'treasuries' => collect($this->closing->treasuries())
                ->map(fn (array $row) => [
                    'treasury_name' => $row['treasury_name'] ?? '',
                    'closing_balance' => (float) ($row['closing_balance'] ?? 0),
                ])
                ->values()
                ->all(),
            'url' => route('admin.daily-closings.show', $this->closing),
        ];
    }
}

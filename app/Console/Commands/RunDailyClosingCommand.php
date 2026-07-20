<?php

namespace App\Console\Commands;

use App\Domain\Closing\Services\DailyClosingService;
use Illuminate\Console\Command;

class RunDailyClosingCommand extends Command
{
    protected $signature = 'daily-closing:run {period : 5pm or midnight}';

    protected $description = 'Generate the scheduled daily closing snapshot.';

    public function handle(DailyClosingService $service): int
    {
        $period = (string) $this->argument('period');
        $scheduledAt = $service->scheduledTimestampFor($period, now());
        $closing = $service->runScheduledClosing($scheduledAt, $period);

        $this->info(sprintf(
            'Daily closing %d stored for %s (%s).',
            $closing->id,
            $closing->closing_datetime?->format('Y-m-d H:i:s') ?? '',
            $closing->closing_period
        ));

        return self::SUCCESS;
    }
}

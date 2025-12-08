<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // telescope daily data pruner
        $schedule->command('telescope:prune')->daily();

        $schedule->command('db:wipe')->timezone('Asia/Dhaka')->everyTwoHours();
        $schedule->command('database:import')->timezone('Asia/Dhaka')->everyTwoHours();
        $schedule->command('trial-ends-email:send')->hourly();

        // Reset working hours daily at 8 AM
        $schedule->command('working-hours:reset')
            ->dailyAt('08:00')
            ->timezone('Asia/Dhaka');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}

<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::command('daily-closing:run 5pm')
    ->dailyAt('17:00')
    ->withoutOverlapping();

Schedule::command('daily-closing:run midnight')
    ->dailyAt('00:00')
    ->withoutOverlapping();

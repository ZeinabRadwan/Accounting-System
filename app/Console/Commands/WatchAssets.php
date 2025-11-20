<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Symfony\Component\Process\Process;

class WatchAssets extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'assets:watch';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear public assets then run npm watch';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $this->clearPublicAssets();

        $this->info('Running npm run watch...');

        $process = Process::fromShellCommandline('npm run watch', base_path());
        $process->setTimeout(null);
        $process->setIdleTimeout(null);

        $process->run(function ($type, $buffer) {
            $this->output->write($buffer);
        });

        if (! $process->isSuccessful()) {
            $this->error('npm run watch failed.');

            return self::FAILURE;
        }

        return self::SUCCESS;
    }

    protected function clearPublicAssets(): void
    {
        $directories = [
            public_path('css'),
            public_path('js'),
        ];

        foreach ($directories as $directory) {
            if (File::exists($directory)) {
                File::deleteDirectory($directory);
                $this->info("Deleted {$directory}");
            } else {
                $this->comment("Directory {$directory} not found, skipping.");
            }
        }
    }
}

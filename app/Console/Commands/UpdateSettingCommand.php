<?php

namespace App\Console\Commands;

use App\Composer;
use App\Notifications\UserEmailNotification;
use App\Models\Utility;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;
use Symfony\Component\Process\Process;
use Illuminate\Support\Facades\Artisan;


class UpdateSettingCommand extends Command
{
    protected $signature = 'git:setting';
    protected $description = 'Command description';
    private $composerLog = [];
    protected $working_folder = '/home2/accountwebsoft';

    public function handle()
    {
        $filePath = __DIR__ . '/../../../system_update_setting.json';

        if (file_exists($filePath)) {
            $fileContents = file_get_contents($filePath);
            $settings = json_decode($fileContents, true);
            if ($settings !== null) {
                $upgUpdate = $settings['upg_update']; 
                $publicUpdate = $settings['public_update'];
                $runMigration = $settings['run_migration'];
                $runMigrationRollBack = $settings['run_migration_rollback'];
                $runComposer = $settings['run_composer'];
                $runSeeder = $settings['run_seeder'];
                $runCommandd = $settings['run_command'];
                $email = $settings['TechnicianEmail'];
                $clearLogs = $settings['clear_logs'];
                $appDebug = $settings['APP_DEBUG'];

                $final_text = '';
                $errors = [];

                if ($upgUpdate) {
                    $result = $this->updateUpdateFile();
                    if (strpos($result, 'Error') !== false) {
                        $errors[] = $result;
                    } else {
                        $final_text .= ' <br> ' . $result;
                    }
                }

                if ($publicUpdate) {
                    $result = $this->updatePublic();
                    if (strpos($result, 'Error') !== false) {
                        $errors[] = $result;
                    } else {
                        $final_text .= ' <br> ' . $result;
                    }
                   
                }
                 

                if (is_array($runMigration) && $runMigration[0]) {
                    $migrationType = isset($runMigration[1]) ? $runMigration[1] : null;
                    $result = $this->runMigrate($migrationType);
                    if (strpos($result, 'Error') !== false) {
                        $errors[] = $result;
                    } else {
                        $final_text .= ' <br> ' . $result;
                    }
                } elseif ($runMigration) {
                    // Backward compatibility: if runMigration is boolean, treat as central
                    $result = $this->runMigrate(null);
                    if (strpos($result, 'Error') !== false) {
                        $errors[] = $result;
                    } else {
                        $final_text .= ' <br> ' . $result;
                    }
                }

                if ($runMigrationRollBack) {
                    $result = $this->runMigrateRollback();
                    if (strpos($result, 'Error') !== false) {
                        $errors[] = $result;
                    } else {
                        $final_text .= ' <br> ' . $result;
                    }
                }

                if ($runSeeder[0]) {
                    $seederType = isset($runSeeder[2]) ? $runSeeder[2] : null;
                    $result = $this->runSeeder($runSeeder[1], $seederType);
                    if (strpos($result, 'Error') !== false) {
                        $errors[] = $result;
                    } else {
                        $final_text .= ' <br> ' . $result;
                    }
                }

                if ($runCommandd[0]) {
                    $result = $this->runCommandd($runCommandd[1]);
                    if (strpos($result, 'Error') !== false) {
                        $errors[] = $result;
                    } else {
                        $final_text .= ' <br> ' . $result;
                    }
                }

                if ($clearLogs) {
                    $result = $this->clearLogs();
                    if (strpos($result, 'Error') !== false) {
                        $errors[] = $result;
                    } else {
                        $final_text .= ' <br> ' . $result;
                    }
                }

                if ($runComposer) {
                    $result = $this->runComposer();
                    if (strpos($result, 'Error') !== false) {
                        $errors[] = $result;
                    } else {
                        $final_text .= ' <br> ' . $result;
                    }
                }

//                $envResult = $this->updateEnv('APP_DEBUG', $appDebug ? 'true' : 'false');
//                if (strpos($envResult, 'Error') !== false) {
//                    $errors[] = $envResult;
//                } else {
//                    $final_text .= ' <br> ' . $envResult;
//                }

                if (!empty($errors)) {
                    $final_title = __('System Update - Errors ' . env('APP_URL') . ' - ' . date('Y-m-d H:i:s'));
                    $error_text = implode('<br>', $errors);
                    Notification::route('mail', $email)->notify(new UserEmailNotification($error_text, $final_title));
                }

                echo $final_text;
            }
        }
    }


    private function updateUpdateFile()
    {
        $work_folder = $this->working_folder;

        // Ensure the work_folder path is correctly quoted
        $update_command = 'cp -R "' . $work_folder . '/repositories/Accounting-System/public/upg.php" "' . $work_folder . '/public_html/upg.php"';
        exec($update_command . ' 2>&1', $output, $return_var); // Capture errors as well

        // Log the output and return variable for debugging
        error_log('Command: ' . $update_command);
        error_log('Return Var: ' . $return_var);
        error_log('Output: ' . implode("\n", $output));

        if ($return_var === 0) {
            return 'UPG file Updated Successfully';
        } else {
            return 'Error updating UPG file: ' . implode("\n", $output);
        }
    }


    // private function updateManifest() {
    //     // mix-manifest.json
    //     $work_folder = $this->working_folder;

    //     $manifest_command = 'cp -R "' . $work_folder . '/repositories/Accounting-System/public/mix-manifest.json" "' . $work_folder . '/public_html/mix-manifest.json"';


    //     exec($manifest_command, $output, $return_var);
    //     if ($return_var !== 0) {
    //         return $manifest_command;
    //     }

    //     return 'Manifest Updated Successfully';
    // }

    // private function updateVendor() {
    //     $work_folder = $this->working_folder;

    //     $vendor_command = 'cp -R ' . $work_folder . '/repositories/Accounting-System/public/vendor/ ' . $work_folder . '/public_html/';
    //     exec($vendor_command, $output, $return_var);
    //     if ($return_var !== 0) {
    //         return $vendor_command;
    //         return 'Error updating vendor files: ' . implode("\n", $output);
    //     }
 
    //     return 'CSS files updated successfully';
    // }

    // private function updateCss()
    // {
    //     $work_folder = $this->working_folder;

    //     $css_command = 'cp -R ' . $work_folder . '/repositories/Accounting-System/public/css/ ' . $work_folder . '/public_html/';
    //     exec($css_command, $output, $return_var);
    //     if ($return_var !== 0) {
    //         return $css_command;
    //         return 'Error updating CSS files: ' . implode("\n", $output);
    //     }
 
    //     return 'CSS files updated successfully';
    // } 

    private function updatePublic()
    {
        $work_folder = $this->working_folder;

        // Copy Vite build directory (replaces old Laravel Mix public/js and public/css)
        $public_command = 'cp -R ' . $work_folder . '/repositories/Accounting-System/public/build/ ' . $work_folder . '/public_html/';
        exec($public_command, $output, $return_var);

        // Copy fonts if they exist
        $public_command = 'cp -R ' . $work_folder . '/repositories/Accounting-System/public/fonts ' . $work_folder . '/public_html/';
        exec($public_command, $output, $return_var);

        if ($return_var !== 0) {
            return $public_command;
            return 'Error updating Public files: ' . implode("\n", $output);
        }
 
        return 'Public files updated successfully';
    }


    private function updateJs()
    {
        $work_folder = $this->working_folder;

        // Copy Vite build directory (replaces old Laravel Mix public/js)
        $js_command = 'cp -R ' . $work_folder . '/repositories/Accounting-System/public/build/ ' . $work_folder . '/public_html/';
        exec($js_command, $output, $return_var);

        if ($return_var === 0) {
            return 'Build files updated successfully';
        } else {
            return 'Error updating build files: ' . implode("\n", $output);
        }
    }

    private function runMigrate($migrationType = null)
    {
        try {

            $backup_command = Artisan::call('backup:run', ['--only-db' => true]);
            Artisan::call('backup:clean');

            if ($backup_command === 0) {
                $return_var = 0;
                
                if ($migrationType === 'central') {
                    // Run migration for central database only
                    $return_var = Artisan::call('migrate');
                } elseif ($migrationType === 'tenant') {
                    // Run migration for tenant databases
                    $return_var = Artisan::call('tenants:migrate');
                } else {
                    // Run migration normally (original behavior - central)
                    $return_var = Artisan::call('migrate');
                }

                if ($return_var === 0) {
                    $typeInfo = $migrationType ? ' (' . $migrationType . ')' : '';
                    return 'Migration was run Successfully' . $typeInfo;
                } else {
                    return 'Error running migration.';
                }
            } else {
                $backup_output = Artisan::output();
                // //Log::error('Error creating backup: ' . $backup_output);
                return 'Error creating backup. We cannot migrate without backup -> ' . $backup_output;
            }
        } catch (\Exception $e) {
            return 'An error occurred: ' . $e->getMessage();
        }
    }

    private function runMigrateRollback()
    {
        $return_var = Artisan::call('migrate:rollback');

        if ($return_var === 0) {
            return 'Migration Was Rolled Back Successfully';
        } else {
            return 'Error In Migration Rolling Back.';
        }
    }

    private function runCommandd($commandName)
    {
        $return_var = Artisan::call($commandName);

        if ($return_var === 0) {
            return $commandName . ' Was run successfully';
        } else {
            return 'Error In ' . $commandName . ' Command';
        }
    }

    private function runSeeder($seederName, $seederType = null)
    {
        try {
            // $backup_command = Artisan::call('backup:run', ['--only-db' => true]);
            $backup_command = 0;

            if ($backup_command === 0) {
                $return_var = 0;
                
                if ($seederType === 'central') {
                    // Run seeder for central database only
                    $return_var = Artisan::call('db:seed', ['--class' => $seederName]);
                } elseif ($seederType === 'tenant') {
                    $return_var = Artisan::call('tenants:seed', ['--class' => $seederName]);
                } else {
                    // Run seeder normally (original behavior)
                    $return_var = Artisan::call('db:seed', ['--class' => $seederName]);
                }

                if ($return_var === 0) {
                    $typeInfo = $seederType ? ' (' . $seederType . ')' : '';
                    return $seederName . ' Was run successfully' . $typeInfo;
                } else {
                    return 'Error In ' . $seederName . ' Seeder.';
                }
            } else {
                $backup_output = Artisan::output();
                // //Log::error('Error creating backup: ' . $backup_output);
                return 'Error creating backup. We cannot migrate without backup -> ' . $backup_output;
            }
        } catch (\Exception $e) {
            return 'An error occurred: ' . $e->getMessage();
        }
    }

    private function runComposer()
    {
        $composerPath = '/opt/cpanel/composer/bin/composer';
        $homePath = $this->working_folder; // Default home path if HOME is not set
        $workingDir = $this->working_folder . '/repositories/Accounting-System'; // Adjust this to your actual application path

        $command = "export PATH=\"\$PATH:/opt/cpanel/composer/bin\" && export HOME=\"$homePath\" && export COMPOSER_HOME=\"$homePath\" && $composerPath update";

// Use the working directory in the Process configuration
        $process = new Process(['/bin/sh', '-c', $command], $workingDir);
        $process->run();

        if (!$process->isSuccessful()) {
            $errorOutput = "Error running composer update: " . $process->getErrorOutput();
        } else {
            $errorOutput = null;
        }

// Check if .htaccess exists before attempting to remove it
//        $checkHtaccessCommand = 'rm [ -f "$HOME/.htaccess" ]';
//        $checkHtaccessOutput = shell_exec($checkHtaccessCommand);
//
//        if ($checkHtaccessOutput === null) {
//            return "Error checking/removing .htaccess";
//        }

        if ($errorOutput) {
            return $errorOutput;
        }

        return "Composer update and .htaccess removal were successful.";
    }

    // private function updateEnv($key, $value)
    // {

    //     $arrEnv = [$key => $value];

    //     if (Utility::setEnvironmentValue($arrEnv)) {
    //         return 'APP DEBUG Updated Successfully';
    //     } else {
    //         return 'Error while updating APP DEBUG';
    //     }
    // }

    private function clearLogs()
    {
        exec('echo "" > ' . storage_path('logs/laravel.log'));

        return 'Logs Cleared Successfully';
    }
}

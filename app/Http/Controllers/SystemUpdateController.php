<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SystemUpdateController extends Controller
{
    public function index(Request $request)
    {
        if (empty(env('SYSTEM_UPDATE_KEY')) && empty(env('SYSTEM_UPDATE_KEY_HASH'))) {
            abort(404);
        }
        $this->enforceKey($request);
        $filePath = base_path('system_update_setting.json');
        $settings = [];
        if (file_exists($filePath)) {
            $settings = json_decode(file_get_contents($filePath), true) ?: [];
        }

        return view('system-update', [
            'settings' => $settings,
            'providedKey' => $this->getProvidedKey($request),
        ]);
    }

    // All action execution logic removed. This controller only reads/writes the JSON settings file.

    private function enforceKey(Request $request): void
    {
        $provided = $this->getProvidedKey($request);
        if (! $provided) {
            abort(403);
        }

        $hash = env('SYSTEM_UPDATE_KEY_HASH');
        if (! empty($hash)) {
            if (! Hash::check($provided, $hash)) {
                abort(403);
            }
            return;
        }

        $plain = env('SYSTEM_UPDATE_KEY');
        if (empty($plain) || ! hash_equals($plain, $provided)) {
            abort(403);
        }
    }

    private function getProvidedKey(Request $request): ?string
    {
        $provided = 'QkZ9Nn2YF7wqTt3Jp4R8uV1xLm6Sd0Hb';
        if (! $provided) {
            $provided = $request->query('key');
        }
        if (! $provided) {
            $provided = $request->header('X-System-Update-Key');
        }
        return $provided ?: null;
    }

    public function getSettings(Request $request)
    {
        if (empty(env('SYSTEM_UPDATE_KEY')) && empty(env('SYSTEM_UPDATE_KEY_HASH'))) {
            abort(404);
        }
        $this->enforceKey($request);

        $filePath = base_path('system_update_setting.json');
        $settings = [];
        if (file_exists($filePath)) {
            $decoded = json_decode(file_get_contents($filePath), true);
            if (is_array($decoded)) {
                $settings = $decoded;
            }
        }

        return response()->json(['settings' => $settings]);
    }

    public function saveSettings(Request $request)
    {
        if (empty(env('SYSTEM_UPDATE_KEY')) && empty(env('SYSTEM_UPDATE_KEY_HASH'))) {
            abort(404);
        }
        $this->enforceKey($request);

        $payload = $request->input('settings');

        // Accept JSON string or associative array
        if (is_string($payload)) {
            $decoded = json_decode($payload, true);
            if (json_last_error() !== JSON_ERROR_NONE || ! is_array($decoded)) {
                return response()->json([
                    'message' => 'Invalid JSON provided for settings.'
                ], 422);
            }
            $data = $decoded;
        } elseif (is_array($payload)) {
            $data = $payload;
        } else {
            return response()->json([
                'message' => 'Settings must be a JSON object or JSON string.'
            ], 422);
        }

        $filePath = base_path('system_update_setting.json');
        try {
            file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }

        return response()->json([
            'status' => 'ok',
            'settings' => $data,
        ]);
    }

    public function pushSettings(Request $request)
    {
        if (empty(env('SYSTEM_UPDATE_KEY')) && empty(env('SYSTEM_UPDATE_KEY_HASH'))) {
            abort(404);
        }
        $this->enforceKey($request);

        $repoPath = base_path();
        $output = [];
        $exitCodes = [];

        try {
            $cwd = getcwd();
            @chdir($repoPath);

            $steps = [
                'git add system_update_setting.json',
                'git commit -m "chore(system-update): update system_update_setting.json via UI"',
                'git push'
            ];

            foreach ($steps as $cmd) {
                $cmdOutput = [];
                $code = 0;
                @exec($cmd . ' 2>&1', $cmdOutput, $code);
                $output[] = '> ' . $cmd;
                $output = array_merge($output, $cmdOutput);
                $exitCodes[] = $code;
                // If push fails we still return output to help debug
            }
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        } finally {
            if (isset($cwd)) { @chdir($cwd); }
        }

        return response()->json([
            'status' => 'ok',
            'output' => $output,
            'exit_codes' => $exitCodes,
        ]);
    }

    public function pushBuildResults(Request $request)
    {
        if (empty(env('SYSTEM_UPDATE_KEY')) && empty(env('SYSTEM_UPDATE_KEY_HASH'))) {
            abort(404);
        }
        $this->enforceKey($request);

        $repoPath = base_path();
        $output = [];
        $exitCodes = [];

        try {
            $cwd = getcwd();
            @chdir($repoPath);

            $steps = [
                'git add system_update_setting.json public/mix-manifest.json public/css public/js',
                'git commit -m "chore(system-update): build assets via UI"',
                'git push'
            ];

            foreach ($steps as $cmd) {
                $cmdOutput = [];
                $code = 0;
                @exec($cmd . ' 2>&1', $cmdOutput, $code);
                $output[] = '> ' . $cmd;
                $output = array_merge($output, $cmdOutput);
                $exitCodes[] = $code;
                // If any step fails, we still return output to help debug
            }
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        } finally {
            if (isset($cwd)) { @chdir($cwd); }
        }

        return response()->json([
            'status' => 'ok',
            'output' => $output,
            'exit_codes' => $exitCodes,
        ]);
    }

    public function buildOnly(Request $request)
    {
        if (empty(env('SYSTEM_UPDATE_KEY')) && empty(env('SYSTEM_UPDATE_KEY_HASH'))) {
            abort(404);
        }
        $this->enforceKey($request);

        $repoPath = base_path();
        $output = [];
        $exitCode = 0;

        try {
            $cwd = getcwd();
            @chdir($repoPath);

            $cmd = 'npm run build 2>&1';
            $output[] = '> npm run build';
            $output[] = '';

            // Use proc_open for real-time output streaming
            $descriptorspec = array(
                0 => array("pipe", "r"),  // stdin
                1 => array("pipe", "w"),  // stdout
                2 => array("pipe", "w")   // stderr
            );

            $process = proc_open($cmd, $descriptorspec, $pipes, $repoPath);

            if (is_resource($process)) {
                fclose($pipes[0]); // Close stdin

                // Read output in real-time
                while (!feof($pipes[1])) {
                    $line = fgets($pipes[1]);
                    if ($line !== false) {
                        $output[] = rtrim($line);
                    }
                }

                // Read any remaining stderr
                while (!feof($pipes[2])) {
                    $line = fgets($pipes[2]);
                    if ($line !== false) {
                        $output[] = rtrim($line);
                    }
                }

                fclose($pipes[1]);
                fclose($pipes[2]);
                $exitCode = proc_close($process);
            } else {
                $output[] = 'Failed to start npm run build process';
                $exitCode = 1;
            }
        } catch (\Throwable $e) {
            $output[] = 'Error: ' . $e->getMessage();
            $exitCode = 1;
        } finally {
            if (isset($cwd)) { @chdir($cwd); }
        }

        return response()->json([
            'status' => 'ok',
            'output' => $output,
            'exit_code' => $exitCode,
        ]);
    }

    public function buildStream(Request $request)
    {
        if (empty(env('SYSTEM_UPDATE_KEY')) && empty(env('SYSTEM_UPDATE_KEY_HASH'))) {
            abort(404);
        }
        $this->enforceKey($request);

        $repoPath = base_path();

        // Set headers for Server-Sent Events
        $response = response()->stream(function() use ($repoPath) {
            $cwd = getcwd();
            @chdir($repoPath);

            $cmd = 'npm run build 2>&1';
            
            // Send initial message
            echo "data: " . json_encode(['type' => 'start', 'message' => '> npm run build']) . "\n\n";
            ob_flush();
            flush();

            // Use proc_open for real-time output streaming
            $descriptorspec = array(
                0 => array("pipe", "r"),  // stdin
                1 => array("pipe", "w"),  // stdout
                2 => array("pipe", "w")   // stderr
            );

            $process = proc_open($cmd, $descriptorspec, $pipes, $repoPath);

            if (is_resource($process)) {
                fclose($pipes[0]); // Close stdin

                // Read output in real-time and stream it
                while (!feof($pipes[1])) {
                    $line = fgets($pipes[1]);
                    if ($line !== false) {
                        $message = rtrim($line);
                        echo "data: " . json_encode(['type' => 'output', 'message' => $message]) . "\n\n";
                        ob_flush();
                        flush();
                    }
                }

                // Read any remaining stderr
                while (!feof($pipes[2])) {
                    $line = fgets($pipes[2]);
                    if ($line !== false) {
                        $message = rtrim($line);
                        echo "data: " . json_encode(['type' => 'output', 'message' => $message]) . "\n\n";
                        ob_flush();
                        flush();
                    }
                }

                fclose($pipes[1]);
                fclose($pipes[2]);
                $exitCode = proc_close($process);
                
                // Send completion message
                echo "data: " . json_encode(['type' => 'complete', 'exit_code' => $exitCode]) . "\n\n";
                ob_flush();
                flush();
            } else {
                echo "data: " . json_encode(['type' => 'error', 'message' => 'Failed to start npm run build process']) . "\n\n";
                ob_flush();
                flush();
            }

            if (isset($cwd)) { @chdir($cwd); }
        }, 200, [
            'Content-Type' => 'text/event-stream',
            'Cache-Control' => 'no-cache',
            'Connection' => 'keep-alive',
            'X-Accel-Buffering' => 'no', // Disable nginx buffering
        ]);

        return $response;
    }
}



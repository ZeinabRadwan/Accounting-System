<?php

$secret = 'hH4z&9@KqW$8u!PjX2#dM7%vLr^tN5yB'; // Set this to the secret token you configured in GitHub
function verifyGitHubWebhook($payload, $secret, $signature)
{
    $hash = 'sha256=' . hash_hmac('sha256', $payload, $secret, false);
    return hash_equals($hash, $signature);
}

$headers = getallheaders();
$payload = file_get_contents('php://input');
$signature = $headers['X-Hub-Signature-256'] ?? '';

if (!verifyGitHubWebhook($payload, $secret, $signature)) {
   http_response_code(403);

   echo "Forbidden";
   exit;
}

class UpdateSettingCommand
{
    private $pullLog = [];
    private $alreadyUpToDate = false;
    private $secret;
    public $update_emails = "update@websoft.sa";

    public function __construct($secret)
    {
        $this->secret = $secret;
    }

    public function handle()
    {
        echo $this->runPull();

        echo $this->sendPostRequest();
    }


    private function runPull()
    {
        $domain = $_SERVER['HTTP_HOST'];

        // Set the correct Git path
        putenv('PATH=/usr/local/cpanel/3rdparty/lib/path-bin:/usr/bin:/bin');


        // Define the command for other environments
        $command = 'git fetch --depth=2 && git reset --hard origin/main';

        // Set the working directory and status file
        $work_folder = __DIR__ . '/../repositories/Arqam-System';
        $status_file = __DIR__ . '/../repositories/Arqam-System/github_status.json';

        // Change the working directory
        chdir($work_folder);

        // Check if the status file exists; if not, create it
        if (!file_exists($status_file)) {
            file_put_contents($status_file, json_encode([])); // Create an empty JSON file
        }

        // Print the command for debugging
        echo "Executing command: $command\n";

        // Execute the command
        $output = shell_exec($command);

        // Capture the output and check for errors
        if ($output === null) {
            echo "Command failed to execute.\n";
            $updateStatus = "Git pull failed.";
        } else {
            echo "Output:\n$output\n";
            $updateStatus = "Successfully updated the application.";
        }

        // Get the latest commit details
        $commitCommand = 'git log -1 --pretty=format:"%H %an %s"';
        $commitMessage = '';
        $commitAuthor = '';
        exec($commitCommand, $commitOutput, $commitReturnVar);

        if ($commitReturnVar === 0 && !empty($commitOutput)) {
            // Parse commit details
            $commitDetails = explode(" ", implode(" ", $commitOutput), 3);
            $commitAuthor = $commitDetails[1];
            $commitMessage = $commitDetails[2];
        }

        // Write to the status file
        $this->writeStatusFile($status_file, $commitMessage, $commitAuthor, $output !== null);

        // Send an email notification in case of failure
        if ($output === null) {
            // Get the HTTP or HTTPS protocol
            $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
            $fullDomain = $protocol . $domain;

            // Email details
            $from = 'noreply@' . $_SERVER['SERVER_NAME'];
            $to = $this->update_emails;
            $subject = "Error While Updating System: " . $fullDomain . " - " . date('Y-m-d H:i:s');
            $message = "An error occurred while attempting to update the system:\n\n" . $output;
            $headers = "From: " . $from . "\r\n";

            // Send email
            if (!mail($to, $subject, $message, $headers)) {
                return "Failed to send email notification.";
            }
        }

        return $updateStatus . "\n";
    }


    private function writeStatusFile($filePath, $commitName, $authorName, $updateStatus): void
    {
        $statusData = [
            "commit_name" => $commitName,
            "author_name" => $authorName,
            "update_status" => $updateStatus
        ];

        file_put_contents($filePath, json_encode($statusData, JSON_PRETTY_PRINT));
    }

    private function sendPostRequest()
    {
        // Get the HTTP or HTTPS protocol
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
        $domain = $_SERVER['HTTP_HOST'];
        $fullDomain = $protocol . $domain;

        // Initialize cURL session
        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, "$fullDomain/updateSystem"); // Change 'http://domain/systemUpdate' to your actual URL
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Add the secret token to the request headers
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Bearer ' . $this->secret
        ]);

        // Optional: Set POST fields if needed
        $postData = [];
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));

        // Execute the POST request
        $response = curl_exec($ch);

        // Check for errors
        if (curl_errno($ch)) {
            echo 'Request Error: ' . curl_error($ch);
        } else {
            return $response;
        }

        // Close the cURL session
        curl_close($ch);
    }
}

$command = new UpdateSettingCommand($secret);
$command->handle();

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authenticating...</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f8f9fa;
        }
        .auth-container {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .spinner {
            border: 3px solid #f3f3f3;
            border-top: 3px solid #007bff;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="auth-container">
        <div class="spinner"></div>
        <h3>Authenticating...</h3>
        <p>You will be redirected to the dashboard shortly.</p>
    </div>

    <script>
        // Auto-authenticate and redirect to dashboard
        (function() {
            const token = @json($token);
            const user = @json($user);
            const redirectUrl = @json($redirect_url);
            
            // Set token in cookie (matching the Vue app's auth pattern)
            function setCookie(name, value, days = null) {
                let expires = '';
                if (days) {
                    const date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = '; expires=' + date.toUTCString();
                }
                document.cookie = name + '=' + (value || '') + expires + '; path=/; secure; samesite=strict';
            }
            
            // Set the token cookie (the Vue app reads from this)
            setCookie('token', token);
            
            // Also set user data in localStorage temporarily
            if (user) {
                localStorage.setItem('temp_user_data', JSON.stringify(user));
            }
            
            // Redirect to dashboard - the Vue app will pick up the token from cookie
            setTimeout(function() {
                window.location.href = redirectUrl || '/dashboard';
            }, 800);
        })();
    </script>
</body>
</html>

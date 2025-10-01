<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }} - Account Suspended</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            font-family: 'Figtree', sans-serif;
        }
        
        .suspension-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .suspension-card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            padding: 3rem;
            max-width: 600px;
            width: 100%;
            text-align: center;
            animation: slideUp 0.6s ease-out;
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .suspension-icon {
            font-size: 4rem;
            color: #e74c3c;
            margin-bottom: 1.5rem;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .suspension-title {
            color: #2c3e50;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .suspension-subtitle {
            color: #7f8c8d;
            font-size: 1.2rem;
            margin-bottom: 2rem;
            line-height: 1.6;
        }
        
        .suspension-message {
            background: #f8f9fa;
            border-left: 4px solid #e74c3c;
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 8px;
            text-align: left;
        }
        
        .contact-info {
            background: #ecf0f1;
            padding: 1.5rem;
            border-radius: 10px;
            margin: 2rem 0;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            margin: 0.5rem 0;
            color: #2c3e50;
        }
        
        .contact-item i {
            margin-right: 1rem;
            color: #3498db;
            width: 20px;
        }
        
        .btn-home {
            background: linear-gradient(45deg, #3498db, #2980b9);
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            color: white;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            margin-top: 1rem;
            transition: all 0.3s ease;
        }
        
        .btn-home:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
            color: white;
        }
        
        .footer-text {
            margin-top: 2rem;
            color: #95a5a6;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="suspension-container">
        <div class="suspension-card">
            <div class="suspension-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            
            <h1 class="suspension-title">{{ __('Account Suspended') }}</h1>
            
            <p class="suspension-subtitle">
                {{ __('Your company account has been temporarily suspended.') }}
            </p>
            
            <div class="suspension-message">
                <h5><i class="fas fa-info-circle"></i> {{ __('What does this mean?') }}</h5>
                <p class="mb-0">
                    {{ __('Your company account and all associated user accounts have been temporarily suspended. This means you and your team members cannot access the system until the suspension is lifted.') }}
                </p>
            </div>
            
            <div class="contact-info">
                <h5><i class="fas fa-headset"></i> {{ __('Need Help?') }}</h5>
                <p class="mb-3">{{ __('If you believe this is an error or need assistance, please contact our support team:') }}</p>
                
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>{{ __('Email') }}: support@{{ config('app.domain', 'example.com') }}</span>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>{{ __('Phone') }}: +1 (555) 123-4567</span>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-clock"></i>
                    <span>{{ __('Support Hours') }}: {{ __('Monday - Friday, 9:00 AM - 6:00 PM') }}</span>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-calendar"></i>
                    <span>{{ __('Suspended On') }}: {{ $suspendedAt ?? now()->format('M d, Y \a\t g:i A') }}</span>
                </div>
            </div>
            
            <a href="{{ url('/') }}" class="btn-home">
                <i class="fas fa-home"></i> {{ __('Return to Homepage') }}
            </a>
            
            <div class="footer-text">
                <p>{{ __('Thank you for your understanding.') }}</p>
                <p>&copy; {{ date('Y') }} {{ config('app.name', 'Laravel') }}. {{ __('All rights reserved.') }}</p>
            </div>
        </div>
    </div>
    
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

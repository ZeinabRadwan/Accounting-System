<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - Central Dashboard</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="{{ route('central.dashboard') }}">
                <i class="fas fa-building me-2"></i>
                {{ config('app.name', 'Laravel') }} - Central
            </a>
            
            <div class="navbar-nav ms-auto">
                @guest
                    <a class="nav-link" href="{{ route('login') }}">
                        <i class="fas fa-sign-in-alt me-1"></i> Login
                    </a>
                    <a class="nav-link" href="{{ route('register') }}">
                        <i class="fas fa-user-plus me-1"></i> Register
                    </a>
                @else
                    <span class="navbar-text me-3">
                        Welcome, {{ auth()->user()->first_name }}!
                    </span>
                    <form method="POST" action="{{ route('logout') }}" class="d-inline">
                        @csrf
                        <button type="submit" class="btn btn-outline-light btn-sm">
                            <i class="fas fa-sign-out-alt me-1"></i> Logout
                        </button>
                    </form>
                @endguest
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        @endif

        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h4><i class="fas fa-tachometer-alt me-2"></i>Central Dashboard</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Welcome to {{ config('app.name', 'Laravel') }} Multi-Tenant System</h5>
                        <p class="card-text">
                            This is the central application that manages all tenants in the system. 
                            From here you can:
                        </p>
                        <ul>
                            <li>Create and manage tenants</li>
                            <li>Monitor system status</li>
                            <li>Access global settings</li>
                            <li>View system analytics</li>
                        </ul>
                        
                        <div class="mt-4">
                            <a href="{{ route('tenants.index') }}" class="btn btn-primary me-2">
                                <i class="fas fa-building me-1"></i> Manage Tenants
                            </a>
                            <a href="{{ route('tenants.create') }}" class="btn btn-success me-2">
                                <i class="fas fa-plus me-1"></i> Create New Tenant
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h5><i class="fas fa-info-circle me-2"></i>Quick Actions</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-grid gap-2">
                            <a href="{{ route('login') }}" class="btn btn-outline-primary">
                                <i class="fas fa-sign-in-alt me-1"></i> Tenant Login
                            </a>
                            <a href="{{ route('register') }}" class="btn btn-outline-success">
                                <i class="fas fa-user-plus me-1"></i> Register New Tenant
                            </a>
                            <a href="{{ route('tenants.index') }}" class="btn btn-outline-info">
                                <i class="fas fa-list me-1"></i> View All Tenants
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-header">
                        <h5><i class="fas fa-cogs me-2"></i>System Status</h5>
                    </div>
                    <div class="card-body">
                        <div class="row text-center">
                            <div class="col-6">
                                <div class="border-end">
                                    <h4 class="text-primary">{{ \App\Models\Tenant::count() }}</h4>
                                    <small class="text-muted">Total Tenants</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <h4 class="text-success">{{ \App\Models\Tenant::whereHas('domains')->count() }}</h4>
                                <small class="text-muted">Active Domains</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - {{ session('tenant_domain', 'Tenant') }} Dashboard</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container">
            <a class="navbar-brand" href="{{ route('tenant.dashboard') }}">
                <i class="fas fa-building me-2"></i>
                {{ config('app.name', 'Laravel') }} - {{ session('tenant_domain', 'Tenant') }}
            </a>
            
            <div class="navbar-nav ms-auto">
                @auth
                    <span class="navbar-text me-3">
                        Welcome, {{ auth()->user()->first_name }} {{ auth()->user()->last_name }}!
                    </span>
                    <div class="navbar-nav">
                        <a class="nav-link" href="{{ route('tenant.users.index') }}">
                            <i class="fas fa-users me-1"></i> Users
                        </a>
                        <form method="POST" action="{{ route('tenant.logout') }}" class="d-inline">
                            @csrf
                            <button type="submit" class="btn btn-outline-light btn-sm">
                                <i class="fas fa-sign-out-alt me-1"></i> Logout
                            </button>
                        </form>
                    </div>
                @endauth
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
                        <h4><i class="fas fa-tachometer-alt me-2"></i>Tenant Dashboard</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Welcome to {{ session('tenant_domain', 'Your Tenant') }}</h5>
                        <p class="card-text">
                            You are now logged into your tenant environment. This is your dedicated workspace where you can:
                        </p>
                        <ul>
                            <li>Manage your organization's data</li>
                            <li>Configure tenant-specific settings</li>
                            <li>Access your applications and tools</li>
                            <li>Manage user accounts and permissions</li>
                        </ul>
                        
                        <div class="mt-4">
                            <a href="{{ route('tenant.users.index') }}" class="btn btn-primary me-2">
                                <i class="fas fa-users me-1"></i> Manage Users
                            </a>
                            <a href="#" class="btn btn-info me-2">
                                <i class="fas fa-cogs me-1"></i> Settings
                            </a>
                            <a href="#" class="btn btn-warning">
                                <i class="fas fa-chart-bar me-1"></i> Analytics
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card mt-4">
                    <div class="card-header">
                        <h5><i class="fas fa-info-circle me-2"></i>Tenant Information</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <p><strong>Tenant ID:</strong> {{ session('tenant_id') }}</p>
                                <p><strong>Domain:</strong> {{ session('tenant_domain') }}</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>Database:</strong> tenant{{ session('tenant_id') }}</p>
                                <p><strong>Status:</strong> <span class="badge bg-success">Active</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h5><i class="fas fa-user me-2"></i>Current User</h5>
                    </div>
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <i class="fas fa-user-circle fa-4x text-primary"></i>
                        </div>
                        <h6>{{ auth()->user()->first_name }} {{ auth()->user()->last_name }}</h6>
                        <p class="text-muted">{{ auth()->user()->email }}</p>
                        <div class="mt-3">
                            @foreach(auth()->user()->roles as $role)
                                <span class="badge bg-primary me-1">{{ $role->name }}</span>
                            @endforeach
                        </div>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-header">
                        <h5><i class="fas fa-clock me-2"></i>Recent Activity</h5>
                    </div>
                    <div class="card-body">
                        <div class="list-group list-group-flush">
                            <div class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fas fa-sign-in-alt text-success me-2"></i>
                                    <small>Login successful</small>
                                </div>
                                <small class="text-muted">{{ now()->diffForHumans() }}</small>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fas fa-building text-info me-2"></i>
                                    <small>Tenant initialized</small>
                                </div>
                                <small class="text-muted">{{ now()->diffForHumans() }}</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-header">
                        <h5><i class="fas fa-arrow-left me-2"></i>Back to Central</h5>
                    </div>
                    <div class="card-body">
                        <a href="{{ route('central.dashboard') }}" class="btn btn-outline-secondary w-100">
                            <i class="fas fa-building me-1"></i> Central Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

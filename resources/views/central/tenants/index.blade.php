<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - Manage Tenants</title>

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
                <a class="nav-link" href="{{ route('central.dashboard') }}">
                    <i class="fas fa-arrow-left me-1"></i> Back to Dashboard
                </a>
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
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4><i class="fas fa-building me-2"></i>Manage Tenants</h4>
                        <a href="{{ route('tenants.create') }}" class="btn btn-primary">
                            <i class="fas fa-plus me-1"></i> Create New Tenant
                        </a>
                    </div>
                    <div class="card-body">
                        @if($tenants->count() > 0)
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Domain</th>
                                            <th>Database</th>
                                            <th>Created</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($tenants as $tenant)
                                            <tr>
                                                <td>
                                                    <strong>{{ $tenant->id }}</strong>
                                                </td>
                                                <td>
                                                    @if($tenant->domains->count() > 0)
                                                        @foreach($tenant->domains as $domain)
                                                            <span class="badge bg-info me-1">{{ $domain->domain }}</span>
                                                        @endforeach
                                                    @else
                                                        <span class="text-muted">No domains</span>
                                                    @endif
                                                </td>
                                                <td>
                                                    <code>tenant{{ $tenant->id }}</code>
                                                </td>
                                                <td>{{ $tenant->created_at->format('M d, Y H:i') }}</td>
                                                <td>
                                                    <span class="badge bg-success">Active</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group" role="group">
                                                        <a href="#" class="btn btn-sm btn-outline-primary" title="View">
                                                            <i class="fas fa-eye"></i>
                                                        </a>
                                                        <a href="#" class="btn btn-sm btn-outline-info" title="Edit">
                                                            <i class="fas fa-edit"></i>
                                                        </a>
                                                        <a href="#" class="btn btn-sm btn-outline-warning" title="Settings">
                                                            <i class="fas fa-cogs"></i>
                                                        </a>
                                                        <form method="POST" action="{{ route('tenants.delete', $tenant) }}" 
                                                              class="d-inline" onsubmit="return confirm('Are you sure you want to delete this tenant? This action cannot be undone.')">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-sm btn-outline-danger" title="Delete">
                                                                <i class="fas fa-trash"></i>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        @else
                            <div class="text-center py-5">
                                <i class="fas fa-building fa-3x text-muted mb-3"></i>
                                <h5 class="text-muted">No Tenants Found</h5>
                                <p class="text-muted">You haven't created any tenants yet. Get started by creating your first tenant.</p>
                                <a href="{{ route('tenants.create') }}" class="btn btn-primary">
                                    <i class="fas fa-plus me-1"></i> Create Your First Tenant
                                </a>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5><i class="fas fa-chart-pie me-2"></i>Tenant Statistics</h5>
                    </div>
                    <div class="card-body">
                        <div class="row text-center">
                            <div class="col-6">
                                <div class="border-end">
                                    <h4 class="text-primary">{{ $tenants->count() }}</h4>
                                    <small class="text-muted">Total Tenants</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <h4 class="text-success">{{ $tenants->whereHas('domains')->count() }}</h4>
                                <small class="text-muted">Active Domains</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5><i class="fas fa-info-circle me-2"></i>Quick Actions</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-grid gap-2">
                            <a href="{{ route('tenants.create') }}" class="btn btn-outline-primary">
                                <i class="fas fa-plus me-1"></i> Create New Tenant
                            </a>
                            <a href="{{ route('central.dashboard') }}" class="btn btn-outline-secondary">
                                <i class="fas fa-tachometer-alt me-1"></i> Central Dashboard
                            </a>
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

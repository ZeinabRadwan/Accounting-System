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
                                            <th>Company Name</th>
                                            <th>Tenant Path</th>
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
                                                    <strong>{{ $tenant->company_name ?? 'N/A' }}</strong>
                                                </td>
                                                <td>
                                                    <code>/{{ $tenant->id }}</code>
                                                    <small class="text-muted d-block">{{ $tenant->id }}</small>
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
                                                        <a href="/{{ $tenant->id }}/dashboard" class="btn btn-sm btn-outline-primary" title="View Dashboard" target="_blank">
                                                            <i class="fas fa-external-link-alt"></i>
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
                                <p class="text-muted">Get started by creating your first tenant organization.</p>
                                <a href="{{ route('tenants.create') }}" class="btn btn-primary">
                                    <i class="fas fa-plus me-1"></i> Create First Tenant
                                </a>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

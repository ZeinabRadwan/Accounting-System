<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Tenants</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="{{ route('central.dashboard') }}">Central Application</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link active" href="{{ route('tenants.index') }}">Manage Tenants</a>
                <a class="nav-link" href="#">Settings</a>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4>Manage Tenants</h4>
                        <a href="{{ route('tenants.create') }}" class="btn btn-success">Create New Tenant</a>
                    </div>
                    <div class="card-body">
                        @if(session('success'))
                            <div class="alert alert-success">
                                {{ session('success') }}
                            </div>
                        @endif

                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Tenant ID</th>
                                        <th>Domains</th>
                                        <th>Database</th>
                                        <th>Created At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($tenants as $tenant)
                                    <tr>
                                        <td>{{ $tenant->id }}</td>
                                        <td>
                                            @foreach($tenant->domains as $domain)
                                                <span class="badge bg-info">{{ $domain->domain }}</span>
                                            @endforeach
                                        </td>
                                        <td><code>tenant{{ $tenant->id }}</code></td>
                                        <td>{{ $tenant->created_at->format('Y-m-d H:i:s') }}</td>
                                        <td>
                                            <a href="/{{ $tenant->id }}" class="btn btn-sm btn-primary" target="_blank">Visit</a>
                                            <button class="btn btn-sm btn-warning">Edit</button>
                                            <form action="{{ route('tenants.delete', $tenant) }}" method="POST" class="d-inline">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure?')">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                        @if($tenants->isEmpty())
                            <div class="text-center py-4">
                                <p class="text-muted">No tenants found. Create your first tenant to get started.</p>
                                <a href="{{ route('tenants.create') }}" class="btn btn-primary">Create First Tenant</a>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create New Tenant</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="{{ route('central.dashboard') }}">Central Application</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="{{ route('tenants.index') }}">Manage Tenants</a>
                <a class="nav-link" href="#">Settings</a>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h4>Create New Tenant</h4>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('tenants.store') }}" method="POST">
                            @csrf
                            
                            <div class="mb-3">
                                <label for="tenant_id" class="form-label">Tenant ID</label>
                                <input type="text" class="form-control @error('tenant_id') is-invalid @enderror" 
                                       id="tenant_id" name="tenant_id" value="{{ old('tenant_id') }}" 
                                       placeholder="e.g., company1, store2" required>
                                <div class="form-text">This will be used as the database name prefix (tenant{id})</div>
                                @error('tenant_id')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label for="domain" class="form-label">Domain/Subdomain</label>
                                <input type="text" class="form-control @error('domain') is-invalid @enderror" 
                                       id="domain" name="domain" value="{{ old('domain') }}" 
                                       placeholder="e.g., company1.localhost, store2.localhost" required>
                                <div class="form-text">This will be the URL path for accessing the tenant</div>
                                @error('domain')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            <div class="mb-3">
                                <label for="description" class="form-label">Description (Optional)</label>
                                <textarea class="form-control" id="description" name="description" rows="3" 
                                          placeholder="Brief description of this tenant">{{ old('description') }}</textarea>
                            </div>

                            <div class="d-flex justify-content-between">
                                <a href="{{ route('tenants.index') }}" class="btn btn-secondary">Cancel</a>
                                <button type="submit" class="btn btn-primary">Create Tenant</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="card mt-4">
                    <div class="card-header">
                        <h6>What happens when you create a tenant?</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li>✅ A new tenant record is created</li>
                            <li>✅ A new database is created (tenant{id})</li>
                            <li>✅ Tenant migrations are run automatically</li>
                            <li>✅ Tenant seeder is run to create initial data</li>
                            <li>✅ The tenant becomes accessible at /{tenant_id}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

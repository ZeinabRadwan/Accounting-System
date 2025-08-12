<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tenant Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Tenant Dashboard</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="{{ route('tenant.users.index') }}">Users</a>
                <a class="nav-link" href="/">Logout</a>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Welcome to Your Tenant Dashboard</h4>
                    </div>
                    <div class="card-body">
                        <p>This is your tenant-specific dashboard. You are currently in tenant: <strong>{{ tenant('id') }}</strong></p>
                        
                        <div class="row mt-4">
                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Users</h5>
                                        <p class="card-text">Manage your tenant users</p>
                                        <a href="{{ route('tenant.users.index') }}" class="btn btn-primary">View Users</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Settings</h5>
                                        <p class="card-text">Configure tenant settings</p>
                                        <a href="#" class="btn btn-secondary">Settings</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Reports</h5>
                                        <p class="card-text">View tenant reports</p>
                                        <a href="#" class="btn btn-info">Reports</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

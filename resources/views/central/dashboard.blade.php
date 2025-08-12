<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Central Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">Central Application</a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="{{ route('tenants.index') }}">Manage Tenants</a>
                <a class="nav-link" href="#">Settings</a>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Central Dashboard</h4>
                    </div>
                    <div class="card-body">
                        <p>Welcome to the central application dashboard. This is where you manage all your tenants.</p>
                        
                        <div class="row mt-4">
                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Tenants</h5>
                                        <p class="card-text">Manage your tenants</p>
                                        <a href="{{ route('tenants.index') }}" class="btn btn-primary">Manage Tenants</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">Create Tenant</h5>
                                        <p class="card-text">Create a new tenant</p>
                                        <a href="{{ route('tenants.create') }}" class="btn btn-success">Create Tenant</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <h5 class="card-title">System Status</h5>
                                        <p class="card-text">Check system health</p>
                                        <a href="#" class="btn btn-info">System Status</a>
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

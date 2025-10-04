<?php

namespace App\Http\Controllers\Central;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\Invoice;
use App\Models\Employee;
use App\Models\Purchase;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Services\TenantService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\Tenant\TenantResource;
use App\Http\Requests\Tenant\StoreTenantRequest;
use App\Http\Requests\Tenant\UpdateTenantRequest;

class TenantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $tenants = Tenant::with('plan')->active()->latest()->paginate($request->perPage);
        return TenantResource::collection($tenants);
    }

    /**
     * Display archived tenants.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function archived(Request $request)
    {
        $tenants = Tenant::with('plan')
            ->archived()
            ->latest('archived_at')
            ->paginate($request->perPage);
        
        // Add archived_by_name to each tenant
        $tenants->getCollection()->transform(function ($tenant) {
            if ($tenant->archived_by) {
                $user = \App\Models\User::find($tenant->archived_by);
                $tenant->archived_by_name = $user ? $user->name : 'Unknown';
            }
            return $tenant;
        });
        
        return TenantResource::collection($tenants);
    }

    /**
     * Display the specified resource.
     *
     * @param Tenant $tenant
     *
     * @return TenantResource
     */
    public function show(Tenant $tenant)
    {
        $tenant->limitations = $tenant->run(function () use ($tenant) {
            $clientLimit = $tenant->plan->limit_clients;
            $clientCurrent = Client::count();

            $supplierLimit = $tenant->plan->limit_suppliers;
            $supplierCurrent = Supplier::count();

            $employeeLimit = $tenant->plan->limit_employees;
            $employeeCurrent = Employee::count();

            $domainLimit = $tenant->plan->limit_domains;
            $domainCurrent = $tenant->domains()->count();

            $purchaseLimit = $tenant->plan->limit_purchases;
            $purchaseCurrent = Purchase::count();

            $invoiceLimit = $tenant->plan->limit_invoices;
            $invoiceCurrent = Invoice::count();

            return [
                [
                    'name' => 'Clients Limit',
                    'limit' => $clientLimit == 0 ? 'Unlimited' : $clientLimit,
                    'current' => $clientCurrent == 0 ? 0 : $clientCurrent,
                    'remaining' => $clientLimit == 0 ? 'Unlimited' : $clientLimit - $clientCurrent,
                    'icon' => 'fas fa-users',
                    'bgColor' => 'bg-primary',
                ],
                [
                    'name' => 'Suppliers Limit',
                    'limit' => $supplierLimit == 0 ? 'Unlimited' : $supplierLimit,
                    'current' => $supplierCurrent == 0 ? 0 : $supplierCurrent,
                    'remaining' => $supplierLimit == 0 ? 'Unlimited' : $supplierLimit - $supplierCurrent,
                    'icon' => 'fas fa-people-carry',
                    'bgColor' => 'bg-info',
                ],
                [
                    'name' => 'Employees Limit',
                    'limit' => $employeeLimit == 0 ? 'Unlimited' : $employeeLimit,
                    'current' => $employeeCurrent == 0 ? 0 : $employeeCurrent,
                    'remaining' => $employeeLimit == 0 ? 'Unlimited' : $employeeLimit - $employeeCurrent,
                    'icon' => 'fas fa-users-cog',
                    'bgColor' => 'bg-success',
                ],
                [
                    'name' => 'Domains Limit',
                    'limit' => $domainLimit == 0 ? 'Unlimited' : $domainLimit,
                    'current' => $domainCurrent == 0 ? 0 : $domainCurrent,
                    'remaining' => $domainLimit == 0 ? 'Unlimited' : $domainLimit - $domainCurrent,
                    'icon' => 'fas fa-globe',
                    'bgColor' => 'bg-gray',
                ],
                [
                    'name' => 'Purchases Limit',
                    'limit' => $purchaseLimit == 0 ? 'Unlimited' : $purchaseLimit,
                    'current' => $purchaseCurrent == 0 ? 0 : $purchaseCurrent,
                    'remaining' => $purchaseLimit == 0 ? 'Unlimited' : $purchaseLimit - $purchaseCurrent,
                    'icon' => 'fas fa-shopping-basket',
                    'bgColor' => 'bg-olive',
                ],
                [
                    'name' => 'invoices limit',
                    'limit' => $invoiceLimit == 0 ? 'Unlimited' : $invoiceLimit,
                    'current' => $invoiceCurrent == 0 ? 0 : $invoiceCurrent,
                    'remaining' => $invoiceLimit == 0 ? 'Unlimited' : $invoiceLimit - $invoiceCurrent,
                    'icon' => 'fas fa-file-invoice',
                    'bgColor' => 'bg-indigo',
                ],
            ];
        });

        $tenant->tenant_invoices = $tenant->payments()->with('plan')->get();
        return new TenantResource($tenant);
    }

    public function store(StoreTenantRequest $request, TenantService $tenantService)
    {
        $tenantService->createTenantAndDomainThenGetDomainWithHost($request);

        return $this->responseWithSuccess('Tenant created successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateTenantRequest $request
     * @param Tenant $tenant
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateTenantRequest $request, Tenant $tenant)
    {
        $tenant->update($request->validated());
        return $this->responseWithSuccess('Tenant updated successfully');
    }

    /**
     * Archive the specified tenant.
     *
     * @param Tenant $tenant
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Tenant $tenant)
    {
        try {
            // Log the archiving attempt
            Log::info("Attempting to archive tenant: {$tenant->id}", [
                'tenant_id' => $tenant->id,
                'tenant_data' => $tenant->data,
                'user_id' => auth()->id()
            ]);

            // Archive the tenant instead of deleting
            $tenant->archive(auth()->id());
            Log::info("Successfully archived tenant: {$tenant->id}");

            return $this->responseWithSuccess('Tenant archived successfully');
            
        } catch (\Exception $e) {
            Log::error("Failed to archive tenant: {$tenant->id}", [
                'tenant_id' => $tenant->id,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth()->id()
            ]);

            return $this->responseWithError('Failed to archive tenant: ' . $e->getMessage());
        }
    }

    /**
     * Restore the specified archived tenant.
     *
     * @param Tenant $tenant
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function restore(Tenant $tenant)
    {
        try {
            // Check if tenant is actually archived
            if (!$tenant->isArchived()) {
                return $this->responseWithError('Tenant is not archived');
            }

            // Log the restoration attempt
            Log::info("Attempting to restore tenant: {$tenant->id}", [
                'tenant_id' => $tenant->id,
                'user_id' => auth()->id()
            ]);

            // Restore the tenant
            $tenant->restore();
            Log::info("Successfully restored tenant: {$tenant->id}");

            return $this->responseWithSuccess('Tenant restored successfully');
            
        } catch (\Exception $e) {
            Log::error("Failed to restore tenant: {$tenant->id}", [
                'tenant_id' => $tenant->id,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth()->id()
            ]);

            return $this->responseWithError('Failed to restore tenant: ' . $e->getMessage());
        }
    }

    /**
     * search resource from storage.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function search(Request $request)
    {
        $term = $request->term;
        $query = Tenant::query();

        if ($request->startDate && $request->endDate) {
            $startDate = Carbon::createFromFormat('Y-m-d', $request->startDate)->startOfDay();
            $endDate = Carbon::createFromFormat('Y-m-d', $request->endDate)->endOfDay();
            $query = $query->whereBetween('created_at', [$startDate, $endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where('data->name', 'Like', '%' . $term . '%')
                ->orWhere('data->domain', 'Like', '%' . $term . '%')
                ->orWhere('data->email', 'Like', '%' . $term . '%')
                ->orWhere('data->company', 'Like', '%' . $term . '%');
        });

        return TenantResource::collection($query->latest()->paginate($request->perPage));
    }

    public function ban(Tenant $tenant)
    {
        if ($tenant->is_banned) {
            $tenant->update([
                'is_banned' => false,
            ]);

            return $this->responseWithSuccess('Unban');
        } else {
            $tenant->update([
                'is_banned' => true,
            ]);

            return $this->responseWithSuccess('Ban');
        }
    }

    public function impersonate(Tenant $tenant, TenantService $tenantService)
    {
        if (auth()->user()->account_role !== 1) {
            return $this->responseWithError(__('impersonation.error'));
        }

        return $tenantService->impersonateAsTenant($tenant);
    }

    /**
     * Permanently delete the specified tenant and its database.
     *
     * @param Tenant $tenant
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function permanentDelete(Tenant $tenant)
    {
        try {
            // Check if tenant is archived
            if (!$tenant->isArchived()) {
                return $this->responseWithError('Only archived tenants can be permanently deleted');
            }

            // Log the permanent deletion attempt
            Log::info("Attempting to permanently delete tenant: {$tenant->id}", [
                'tenant_id' => $tenant->id,
                'tenant_data' => $tenant->data,
                'user_id' => auth()->id()
            ]);

            // Get the database manager for the tenant's database
            $databaseManager = app(\Stancl\Tenancy\Contracts\TenantDatabaseManager::class);
            
            // Delete the tenant's database
            $databaseManager->deleteDatabase($tenant);

            // Permanently delete the tenant record
            $tenant->forceDelete();

            Log::info("Successfully permanently deleted tenant: {$tenant->id}");

            return $this->responseWithSuccess('Tenant permanently deleted successfully');
            
        } catch (\Exception $e) {
            Log::error("Failed to permanently delete tenant: {$tenant->id}", [
                'tenant_id' => $tenant->id,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'user_id' => auth()->id()
            ]);

            return $this->responseWithError('Failed to permanently delete tenant: ' . $e->getMessage());
        }
    }
}
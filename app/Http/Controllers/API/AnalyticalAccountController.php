<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AnalyticalAccount\StoreAnalyticalAccountRequest;
use App\Http\Requests\AnalyticalAccount\UpdateAnalyticalAccountRequest;
use App\Http\Resources\AnalyticalAccountResource;
use App\Models\AnalyticalAccount;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AnalyticalAccountController extends Controller
{
    public function __construct()
    {
        // Define middleware for permissions (using cost center permissions as template)
        $this->middleware('can:view_cost_centers', ['only' => ['index', 'show', 'getAll', 'search']]);
        $this->middleware('can:create_cost_center', ['only' => ['store']]);
        $this->middleware('can:update_cost_center', ['only' => ['update']]);
        $this->middleware('can:delete_cost_center', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of analytical accounts.
     */
    public function index(Request $request)
    {
        try {
            $perPage = (int) ($request->perPage ?? 10);
            $query = AnalyticalAccount::with(['branch', 'creator']);

            // Apply filters
            if ($request->has('search')) {
                $query->search($request->search);
            }

            if ($request->has('status')) {
                $query->where('status', $request->status);
            }

            if ($request->has('branch_id')) {
                $query->forBranch($request->branch_id);
            }

            if ($request->has('type')) {
                $query->where('type', $request->type);
            }

            // Order by name
            $query->orderBy('name', 'asc');

            $analyticalAccounts = $query->paginate($perPage);

            return AnalyticalAccountResource::collection($analyticalAccounts);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get all analytical accounts (without pagination) - for dropdowns
     */
    public function getAll(Request $request)
    {
        try {
            $query = AnalyticalAccount::active();

            if ($request->has('search')) {
                $query->search($request->search);
            }

            if ($request->has('branch_id')) {
                $query->forBranch($request->branch_id);
            }

            // Limit results for typeahead
            $limit = (int) ($request->limit ?? 50);
            $analyticalAccounts = $query->orderBy('name', 'asc')->limit($limit)->get();

            return AnalyticalAccountResource::collection($analyticalAccounts);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Store a newly created analytical account.
     */
    public function store(StoreAnalyticalAccountRequest $request)
    {
        try {
            DB::beginTransaction();

            // Convert status to boolean (handle string "1"/"0" from form)
            $status = $request->has('status')
                ? (in_array($request->status, [1, '1', true, 'true'], true) ? true : false)
                : true;

            $analyticalAccount = AnalyticalAccount::create([
                'name' => $request->name,
                'code' => $request->code,
                'type' => $request->type,
                'status' => $status,
                'branch_id' => $request->branch_id,
                'created_by' => Auth::id(),
            ]);

            // Load relationships
            $analyticalAccount->load(['branch', 'creator']);

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($analyticalAccount)
                ->withProperties([
                    'name' => $analyticalAccount->name,
                    'code' => $analyticalAccount->code ? '['.$analyticalAccount->code.']' : null,
                    'event' => 'Create',
                ])
                ->useLog('Analytical Account Created')
                ->log('Analytical Account Created');

            DB::commit();

            return $this->responseWithSuccess('Analytical account created successfully', new AnalyticalAccountResource($analyticalAccount), 201);
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display the specified analytical account.
     */
    public function show($id)
    {
        try {
            $analyticalAccount = AnalyticalAccount::with(['branch', 'creator', 'journalEntryLines'])
                ->findOrFail($id);

            return $this->responseWithSuccess('Analytical account retrieved successfully', new AnalyticalAccountResource($analyticalAccount));
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update the specified analytical account.
     */
    public function update(UpdateAnalyticalAccountRequest $request, $id)
    {
        try {
            $analyticalAccount = AnalyticalAccount::findOrFail($id);

            DB::beginTransaction();

            // Convert status to boolean if provided (handle string "1"/"0" from form)
            $status = $request->has('status')
                ? (in_array($request->status, [1, '1', true, 'true'], true) ? true : false)
                : $analyticalAccount->status;

            $analyticalAccount->update([
                'name' => $request->has('name') ? $request->name : $analyticalAccount->name,
                'code' => $request->has('code') ? $request->code : $analyticalAccount->code,
                'type' => $request->has('type') ? $request->type : $analyticalAccount->type,
                'status' => $status,
                'branch_id' => $request->has('branch_id') ? $request->branch_id : $analyticalAccount->branch_id,
            ]);

            // Load relationships
            $analyticalAccount->load(['branch', 'creator']);

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($analyticalAccount)
                ->withProperties([
                    'name' => $analyticalAccount->name,
                    'code' => $analyticalAccount->code ? '['.$analyticalAccount->code.']' : null,
                    'event' => 'Update',
                ])
                ->useLog('Analytical Account Updated')
                ->log('Analytical Account Updated');

            DB::commit();

            return $this->responseWithSuccess('Analytical account updated successfully', new AnalyticalAccountResource($analyticalAccount));
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified analytical account.
     */
    public function destroy($id)
    {
        try {
            $analyticalAccount = AnalyticalAccount::findOrFail($id);

            if (! $analyticalAccount->canDelete()) {
                return $this->responseWithError($analyticalAccount->getDeletionBlockReason());
            }

            DB::beginTransaction();

            // Add activity log before deletion
            activity()
                ->causedBy(Auth::user())
                ->performedOn($analyticalAccount)
                ->withProperties([
                    'name' => $analyticalAccount->name,
                    'code' => $analyticalAccount->code ? '['.$analyticalAccount->code.']' : null,
                    'event' => 'Delete',
                ])
                ->useLog('Analytical Account Deleted')
                ->log('Analytical Account Deleted');

            $analyticalAccount->delete();

            DB::commit();

            return $this->responseWithSuccess('Analytical account deleted successfully');
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Search analytical accounts
     */
    public function search(Request $request)
    {
        try {
            $perPage = (int) ($request->perPage ?? 10);
            $searchTerm = $request->term ?? '';

            $query = AnalyticalAccount::with(['branch', 'creator']);

            if ($searchTerm) {
                $query->search($searchTerm);
            }

            if ($request->has('status')) {
                $query->where('status', $request->status);
            }

            if ($request->has('branch_id')) {
                $query->forBranch($request->branch_id);
            }

            $analyticalAccounts = $query->orderBy('name', 'asc')->paginate($perPage);

            return AnalyticalAccountResource::collection($analyticalAccounts);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }
}

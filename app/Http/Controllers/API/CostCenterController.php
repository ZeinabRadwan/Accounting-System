<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CostCenter\StoreCostCenterRequest;
use App\Http\Requests\CostCenter\UpdateCostCenterRequest;
use App\Http\Resources\CostCenterResource;
use App\Models\CostCenter;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CostCenterController extends Controller
{
    public function __construct()
    {
        // Define middleware for permissions
        $this->middleware('can:view_cost_centers', ['only' => ['index', 'show', 'getAll', 'getTree', 'search']]);
        $this->middleware('can:create_cost_center', ['only' => ['store']]);
        $this->middleware('can:update_cost_center', ['only' => ['update', 'move']]);
        $this->middleware('can:delete_cost_center', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of cost centers.
     */
    public function index(Request $request)
    {
        try {
            $perPage = (int) ($request->perPage ?? 10);
            $query = CostCenter::with(['parent', 'creator', 'updater']);

            // Apply filters
            if ($request->has('search')) {
                $query->search($request->search);
            }

            if ($request->has('is_active')) {
                $query->where('is_active', $request->is_active);
            }

            if ($request->has('parent_id')) {
                if ($request->parent_id === 'null' || $request->parent_id === null) {
                    $query->root();
                } else {
                    $query->where('parent_id', $request->parent_id);
                }
            }

            // Order by code
            $query->orderBy('code', 'asc');

            $costCenters = $query->paginate($perPage);

            return CostCenterResource::collection($costCenters);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get all cost centers (without pagination) - for dropdowns
     */
    public function getAll(Request $request)
    {
        try {
            $query = CostCenter::active();

            if ($request->has('search')) {
                $query->search($request->search);
            }

            // Limit results for typeahead
            $limit = (int) ($request->limit ?? 50);
            $costCenters = $query->orderBy('code', 'asc')->limit($limit)->get();

            return CostCenterResource::collection($costCenters);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get all cost centers optimized for tree view
     */
    public function getTree(Request $request)
    {
        try {
            $query = CostCenter::query();

            // Only load parent relationship for tree structure (optimized)
            $query->with('parent:id,code,name,name_en');

            // Count children for each cost center
            $query->withCount('children');

            // Apply filters
            if ($request->has('search')) {
                $query->search($request->search);
            }

            if ($request->has('is_active')) {
                $query->where('is_active', $request->is_active);
            }

            // Order by code for consistent tree structure
            $costCenters = $query->orderBy('code', 'asc')->get();

            return $this->responseWithSuccess('Cost centers retrieved successfully', CostCenterResource::collection($costCenters));
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Store a newly created cost center.
     */
    public function store(StoreCostCenterRequest $request)
    {
        try {
            DB::beginTransaction();

            $costCenter = CostCenter::create([
                'code' => $request->code,
                'name' => $request->name,
                'name_en' => $request->name_en,
                'parent_id' => $request->parent_id,
                'is_active' => $request->is_active ?? true,
                'created_by' => Auth::id(),
            ]);

            // Load relationships
            $costCenter->load(['parent', 'creator']);

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($costCenter)
                ->withProperties([
                    'name' => $costCenter->name,
                    'code' => '['.$costCenter->code.']',
                    'event' => 'Create',
                ])
                ->useLog('Cost Center Created')
                ->log('Cost Center Created');

            DB::commit();

            return $this->responseWithSuccess('Cost center created successfully', new CostCenterResource($costCenter), 201);
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display the specified cost center.
     */
    public function show($id)
    {
        try {
            $costCenter = CostCenter::with(['parent', 'children', 'creator', 'updater', 'journalEntryLines'])
                ->findOrFail($id);

            return $this->responseWithSuccess('Cost center retrieved successfully', new CostCenterResource($costCenter));
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update the specified cost center.
     */
    public function update(UpdateCostCenterRequest $request, $id)
    {
        try {
            $costCenter = CostCenter::findOrFail($id);

            // Prevent circular reference
            if ($request->parent_id) {
                $descendants = $costCenter->getDescendants();
                if ($descendants->pluck('id')->contains($request->parent_id)) {
                    return $this->responseWithError('Cannot set a descendant as parent (circular reference).');
                }
            }

            DB::beginTransaction();

            $costCenter->update([
                'code' => $request->code,
                'name' => $request->name,
                'name_en' => $request->name_en,
                'parent_id' => $request->parent_id,
                'is_active' => $request->is_active ?? $costCenter->is_active,
                'updated_by' => Auth::id(),
            ]);

            // Load relationships
            $costCenter->load(['parent', 'updater']);

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($costCenter)
                ->withProperties([
                    'name' => $costCenter->name,
                    'code' => '['.$costCenter->code.']',
                    'event' => 'Update',
                ])
                ->useLog('Cost Center Updated')
                ->log('Cost Center Updated');

            DB::commit();

            return $this->responseWithSuccess('Cost center updated successfully', new CostCenterResource($costCenter));
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified cost center.
     */
    public function destroy($id)
    {
        try {
            $costCenter = CostCenter::findOrFail($id);

            if (! $costCenter->canDelete()) {
                return $this->responseWithError($costCenter->getDeletionBlockReason());
            }

            DB::beginTransaction();

            // Add activity log before deletion
            activity()
                ->causedBy(Auth::user())
                ->performedOn($costCenter)
                ->withProperties([
                    'name' => $costCenter->name,
                    'code' => '['.$costCenter->code.']',
                    'event' => 'Delete',
                ])
                ->useLog('Cost Center Deleted')
                ->log('Cost Center Deleted');

            $costCenter->delete();

            DB::commit();

            return $this->responseWithSuccess('Cost center deleted successfully');
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Search cost centers
     */
    public function search(Request $request)
    {
        try {
            $perPage = (int) ($request->perPage ?? 10);
            $searchTerm = $request->term ?? '';

            $query = CostCenter::with(['parent', 'creator']);

            if ($searchTerm) {
                $query->search($searchTerm);
            }

            if ($request->has('is_active')) {
                $query->where('is_active', $request->is_active);
            }

            $costCenters = $query->orderBy('code', 'asc')->paginate($perPage);

            return CostCenterResource::collection($costCenters);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Move cost center to a new parent
     */
    public function move(Request $request, $id)
    {
        try {
            $costCenter = CostCenter::findOrFail($id);
            $newParentId = $request->parent_id;

            // Validate parent_id (can be null for root)
            if ($newParentId !== null) {
                $newParent = CostCenter::findOrFail($newParentId);

                // Prevent circular reference - check if new parent is a descendant
                $descendants = $costCenter->getDescendants();
                if ($descendants->pluck('id')->contains($newParentId)) {
                    return $this->responseWithError('Cannot move cost center to its own descendant (circular reference).');
                }

                // Prevent moving to itself
                if ($costCenter->id === $newParentId) {
                    return $this->responseWithError('Cannot move cost center to itself.');
                }
            }

            DB::beginTransaction();

            $oldParentId = $costCenter->parent_id;

            $costCenter->update([
                'parent_id' => $newParentId,
                'updated_by' => Auth::id(),
            ]);

            // Load relationships
            $costCenter->load(['parent', 'updater']);

            // Add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($costCenter)
                ->withProperties([
                    'name' => $costCenter->name,
                    'code' => '['.$costCenter->code.']',
                    'event' => 'Move',
                    'old_parent_id' => $oldParentId,
                    'new_parent_id' => $newParentId,
                ])
                ->useLog('Cost Center Moved')
                ->log('Cost Center Moved');

            DB::commit();

            return $this->responseWithSuccess('Cost center moved successfully', new CostCenterResource($costCenter));
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CostAllocationRule;
use App\Models\CostAllocationDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CostAllocationRuleController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request->perPage ?? 10;
            $query = CostAllocationRule::with(['sourceCostCenter', 'details.targetCostCenter', 'creator']);

            if ($request->has('search')) {
                $query->where('name', 'like', "%{$request->search}%");
            }

            if ($request->has('is_active')) {
                $query->where('is_active', $request->is_active);
            }

            $rules = $query->orderBy('created_at', 'desc')->paginate($perPage);

            return response()->json($rules);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'source_cost_center_id' => 'required|exists:cost_centers,id',
                'basis_type' => 'required|in:percentage,employees,revenue,area,consumption',
                'description' => 'nullable|string',
                'details' => 'required|array|min:1',
                'details.*.target_cost_center_id' => 'required|exists:cost_centers,id',
                'details.*.allocation_ratio' => 'required|numeric|min:0|max:100',
            ]);

            DB::beginTransaction();

            $rule = CostAllocationRule::create([
                'name' => $request->name,
                'source_cost_center_id' => $request->source_cost_center_id,
                'basis_type' => $request->basis_type,
                'description' => $request->description,
                'is_active' => $request->is_active ?? true,
                'created_by' => Auth::id(),
            ]);

            // Create details
            foreach ($request->details as $index => $detail) {
                CostAllocationDetail::create([
                    'cost_allocation_rule_id' => $rule->id,
                    'target_cost_center_id' => $detail['target_cost_center_id'],
                    'allocation_ratio' => $detail['allocation_ratio'],
                    'order' => $index,
                ]);
            }

            // Validate totals
            $total = $rule->getTotalAllocationRatio();
            if (abs($total - 100.0) > 0.01) {
                DB::rollBack();
                return $this->responseWithError("Total allocation ratio must equal 100%. Current total: {$total}%");
            }

            $rule->load(['sourceCostCenter', 'details.targetCostCenter']);

            activity()
                ->causedBy(Auth::user())
                ->performedOn($rule)
                ->withProperties(['event' => 'Create'])
                ->useLog('Cost Allocation Rule Created')
                ->log('Cost Allocation Rule Created');

            DB::commit();

            return $this->responseWithSuccess('Cost allocation rule created successfully', $rule, 201);
        } catch (Exception $e) {
            DB::rollBack();
            return $this->responseWithError($e->getMessage());
        }
    }

    public function show($id)
    {
        try {
            $rule = CostAllocationRule::with(['sourceCostCenter', 'details.targetCostCenter', 'creator', 'executions'])->findOrFail($id);
            return response()->json($rule);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $rule = CostAllocationRule::findOrFail($id);

            $request->validate([
                'name' => 'required|string|max:255',
                'source_cost_center_id' => 'required|exists:cost_centers,id',
                'basis_type' => 'required|in:percentage,employees,revenue,area,consumption',
                'description' => 'nullable|string',
                'details' => 'required|array|min:1',
                'details.*.target_cost_center_id' => 'required|exists:cost_centers,id',
                'details.*.allocation_ratio' => 'required|numeric|min:0|max:100',
            ]);

            DB::beginTransaction();

            $rule->update([
                'name' => $request->name,
                'source_cost_center_id' => $request->source_cost_center_id,
                'basis_type' => $request->basis_type,
                'description' => $request->description,
                'is_active' => $request->is_active ?? $rule->is_active,
                'updated_by' => Auth::id(),
            ]);

            // Delete existing details
            $rule->details()->delete();

            // Create new details
            foreach ($request->details as $index => $detail) {
                CostAllocationDetail::create([
                    'cost_allocation_rule_id' => $rule->id,
                    'target_cost_center_id' => $detail['target_cost_center_id'],
                    'allocation_ratio' => $detail['allocation_ratio'],
                    'order' => $index,
                ]);
            }

            // Validate totals
            $total = $rule->fresh()->getTotalAllocationRatio();
            if (abs($total - 100.0) > 0.01) {
                DB::rollBack();
                return $this->responseWithError("Total allocation ratio must equal 100%. Current total: {$total}%");
            }

            activity()
                ->causedBy(Auth::user())
                ->performedOn($rule)
                ->withProperties(['event' => 'Update'])
                ->useLog('Cost Allocation Rule Updated')
                ->log('Cost Allocation Rule Updated');

            DB::commit();

            return $this->responseWithSuccess('Cost allocation rule updated successfully', $rule->fresh()->load(['sourceCostCenter', 'details.targetCostCenter']));
        } catch (Exception $e) {
            DB::rollBack();
            return $this->responseWithError($e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $rule = CostAllocationRule::findOrFail($id);

            // Check if has executions
            if ($rule->executions()->where('status', 'completed')->count() > 0) {
                return $this->responseWithError('Cannot delete rule with completed executions.');
            }

            DB::beginTransaction();

            activity()
                ->causedBy(Auth::user())
                ->performedOn($rule)
                ->withProperties(['event' => 'Delete'])
                ->useLog('Cost Allocation Rule Deleted')
                ->log('Cost Allocation Rule Deleted');

            $rule->delete();

            DB::commit();

            return $this->responseWithSuccess('Cost allocation rule deleted successfully');
        } catch (Exception $e) {
            DB::rollBack();
            return $this->responseWithError($e->getMessage());
        }
    }
}

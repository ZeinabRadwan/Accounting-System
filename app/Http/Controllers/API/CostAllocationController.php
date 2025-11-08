<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CostAllocationRule;
use App\Models\CostAllocationExecution;
use App\Models\ChartOfAccount;
use App\Services\CostAllocationService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CostAllocationController extends Controller
{
    protected $allocationService;

    public function __construct(CostAllocationService $allocationService)
    {
        $this->allocationService = $allocationService;
    }

    /**
     * Execute cost allocation
     */
    public function execute(Request $request)
    {
        try {
            $request->validate([
                'rule_id' => 'required|exists:cost_allocation_rules,id',
                'total_amount' => 'required|numeric|min:0',
                'period_start_date' => 'required|date',
                'period_end_date' => 'required|date|after_or_equal:period_start_date',
                'execution_date' => 'nullable|date',
                'source_account_id' => 'nullable|exists:chart_of_accounts,id',
                'target_account_id' => 'nullable|exists:chart_of_accounts,id',
                'metrics' => 'nullable|array',
            ]);

            $rule = CostAllocationRule::findOrFail($request->rule_id);

            $branchId = Auth::user()->default_branch_id ?? null;
            
            $sourceAccount = $request->source_account_id 
                ? ChartOfAccount::forBranch($branchId)->find($request->source_account_id)
                : null;

            $targetAccount = $request->target_account_id
                ? ChartOfAccount::forBranch($branchId)->find($request->target_account_id)
                : null;

            $execution = $this->allocationService->executeAllocation(
                $rule,
                $request->total_amount,
                $request->period_start_date,
                $request->period_end_date,
                $request->execution_date,
                $request->metrics ?? [],
                $sourceAccount,
                $targetAccount
            );

            return $this->responseWithSuccess('Cost allocation executed successfully', $execution->load(['rule', 'journalEntry']));
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get executions list
     */
    public function executions(Request $request)
    {
        try {
            $perPage = $request->perPage ?? 10;
            $query = CostAllocationExecution::with(['rule.sourceCostCenter', 'executor', 'journalEntry']);

            if ($request->has('rule_id')) {
                $query->where('cost_allocation_rule_id', $request->rule_id);
            }

            if ($request->has('status')) {
                $query->where('status', $request->status);
            }

            $executions = $query->orderBy('created_at', 'desc')->paginate($perPage);

            return response()->json($executions);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Validate allocation rule
     */
    public function validateRule($id)
    {
        try {
            $rule = CostAllocationRule::with('details')->findOrFail($id);
            $validation = $this->allocationService->validateAllocation($rule);

            return response()->json([
                'valid' => $validation['valid'],
                'errors' => $validation['errors'],
                'total_ratio' => $rule->getTotalAllocationRatio(),
            ]);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }
}

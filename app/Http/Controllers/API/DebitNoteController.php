<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Purchase\StoreDebitNoteRequest;
use App\Http\Resources\DebitNoteListResource;
use App\Http\Resources\DebitNoteResource;
use App\Models\DebitNote;
use App\Models\GeneralSetting;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DebitNoteController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:purchase-return-list', ['only' => ['index']]);
        $this->middleware('can:purchase-return-create', ['only' => ['store']]);
        $this->middleware('can:purchase-return-view', ['only' => ['show']]);
    }

    /**
     * Display a listing of debit notes.
     */
    public function index(Request $request)
    {
        $query = DebitNote::with(['purchase', 'supplier', 'user', 'journalEntry']);

        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        $query->whereIn('branch_id', $branchIds);

        return DebitNoteListResource::collection($query->latest()->paginate($request->get('perPage', 15)));
    }

    /**
     * Store a newly created debit note (earned discount + 15% tax).
     */
    public function store(StoreDebitNoteRequest $request)
    {
        try {
            DB::beginTransaction();

            $user = Auth::user();
            $userId = $user->id;
            $branchId = (int) ($user->default_branch_id ?? 0);

            $purchase = \App\Models\Purchase::find($request->purchase_id);
            if (! $purchase || ! $purchase->supplier_id) {
                return $this->responseWithError('Purchase invoice not found or has no supplier.');
            }

            $currentFiscalYearId = GeneralSetting::where('key', 'current_fiscal_year_id')->first()?->value;
            $currentAccountingPeriodId = GeneralSetting::where('key', 'current_accounting_period_id')->first()?->value;
            if (! $currentFiscalYearId || ! $currentAccountingPeriodId) {
                return $this->responseWithError('Current fiscal year and accounting period must be configured.');
            }

            $fiscalYear = \App\Models\FiscalYear::find($currentFiscalYearId);
            $accountingPeriod = \App\Models\AccountingPeriod::find($currentAccountingPeriodId);
            if (! $fiscalYear || ! $accountingPeriod || $accountingPeriod->fiscal_year_id != $fiscalYear->id) {
                return $this->responseWithError('Invalid fiscal year or accounting period configuration.');
            }

            $discountAmount = (float) $request->discount_amount;
            $taxRate = 15;
            $taxAmount = round($discountAmount * ($taxRate / 100), 2);
            $totalAmount = round($discountAmount + $taxAmount, 2);

            $debitNoteNo = $this->generateNextDebitNoteCode();

            $debitNote = DebitNote::create([
                'debit_note_no' => $debitNoteNo,
                'purchase_id' => $purchase->id,
                'supplier_id' => $purchase->supplier_id,
                'discount_amount' => $discountAmount,
                'tax_rate' => $taxRate,
                'tax_amount' => $taxAmount,
                'total_amount' => $totalAmount,
                'note' => clean($request->note),
                'date' => $request->date ?: now()->format('Y-m-d'),
                'status' => 1,
                'created_by' => $userId,
                'fiscal_year_id' => $currentFiscalYearId,
                'accounting_period_id' => $currentAccountingPeriodId,
                'branch_id' => $branchId,
            ]);

            try {
                $journalService = new \App\Services\BusinessTransactionJournalService;
                $journalService->createDebitNoteJournal($debitNote, $userId);
            } catch (Exception $e) {
                DB::rollBack();

                return $this->responseWithError($e->getMessage());
            }

            activity()
                ->causedBy($user)
                ->performedOn($debitNote)
                ->withProperties([
                    'code' => $debitNote->debit_note_no,
                    'event' => 'Create',
                    'slug' => $debitNote->slug,
                    'routeName' => 'debitNotes.show',
                ])
                ->useLog('Debit Note Created')
                ->log('Debit Note Created');

            DB::commit();

            return $this->responseWithSuccess(__('Debit note saved successfully.'), [
                'slug' => $debitNote->slug,
            ]);
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display the specified debit note.
     */
    public function show(string $debit_note)
    {
        $debitNote = DebitNote::where('slug', $debit_note)
            ->with(['purchase', 'supplier', 'user', 'journalEntry'])
            ->first();

        if (! $debitNote) {
            return $this->responseWithError(__('Debit note not found.'), [], 404);
        }

        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        if (! in_array($debitNote->branch_id, $branchIds)) {
            return $this->responseWithError(__('Unauthorized.'), [], 403);
        }

        return new DebitNoteResource($debitNote);
    }

    private function getUserBranchIds($user): array
    {
        $defaultBranchId = (int) ($user->default_branch_id ?? 0);

        return [$defaultBranchId > 0 ? $defaultBranchId : 0];
    }

    private function generateNextDebitNoteCode(): string
    {
        $prefix = 'DN';
        $last = DebitNote::where('debit_note_no', 'like', $prefix.'%')
            ->orderByRaw('CAST(SUBSTRING(debit_note_no, '.(strlen($prefix) + 1).') AS UNSIGNED) DESC')
            ->first();

        $nextNumber = $last ? (int) substr($last->debit_note_no, strlen($prefix)) + 1 : 1;

        return $prefix.str_pad((string) $nextNumber, 4, '0', STR_PAD_LEFT);
    }
}

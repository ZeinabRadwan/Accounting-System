<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Invoice\StoreCreditNoteRequest;
use App\Http\Resources\CreditNoteListResource;
use App\Http\Resources\CreditNoteResource;
use App\Models\CreditNote;
use App\Models\GeneralSetting;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CreditNoteController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:invoice-return-list', ['only' => ['index']]);
        $this->middleware('can:invoice-return-create', ['only' => ['store']]);
        $this->middleware('can:invoice-return-view', ['only' => ['show']]);
    }

    /**
     * Display a listing of credit notes.
     */
    public function index(Request $request)
    {
        $query = CreditNote::with(['invoice', 'client', 'user', 'journalEntry']);

        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        $query->whereIn('branch_id', $branchIds);

        return CreditNoteListResource::collection($query->latest()->paginate($request->get('perPage', 15)));
    }

    /**
     * Store a newly created credit note (allowed discount + 15% tax).
     */
    public function store(StoreCreditNoteRequest $request)
    {
        try {
            DB::beginTransaction();

            $user = Auth::user();
            $userId = $user->id;
            $branchId = (int) ($user->default_branch_id ?? 0);

            $invoice = \App\Models\Invoice::find($request->invoice_id);
            if (! $invoice || ! $invoice->client_id) {
                return $this->responseWithError('Sales invoice not found or has no client.');
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

            $creditNoteNo = $this->generateNextCreditNoteCode();

            $creditNote = CreditNote::create([
                'credit_note_no' => $creditNoteNo,
                'invoice_id' => $invoice->id,
                'client_id' => $invoice->client_id,
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
                $journalService->createCreditNoteJournal($creditNote, $userId);
            } catch (Exception $e) {
                DB::rollBack();

                return $this->responseWithError($e->getMessage());
            }

            activity()
                ->causedBy($user)
                ->performedOn($creditNote)
                ->withProperties([
                    'code' => $creditNote->credit_note_no,
                    'event' => 'Create',
                    'slug' => $creditNote->slug,
                    'routeName' => 'creditNotes.show',
                ])
                ->useLog('Credit Note Created')
                ->log('Credit Note Created');

            DB::commit();

            return $this->responseWithSuccess(__('Credit note saved successfully.'), [
                'slug' => $creditNote->slug,
            ]);
        } catch (Exception $e) {
            DB::rollBack();

            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display the specified credit note.
     */
    public function show(string $credit_note)
    {
        $creditNote = CreditNote::where('slug', $credit_note)
            ->with(['invoice', 'client', 'user', 'journalEntry'])
            ->first();

        if (! $creditNote) {
            return $this->responseWithError(__('Credit note not found.'), [], 404);
        }

        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);
        if (! in_array($creditNote->branch_id, $branchIds)) {
            return $this->responseWithError(__('Unauthorized.'), [], 403);
        }

        return new CreditNoteResource($creditNote);
    }

    private function getUserBranchIds($user): array
    {
        $defaultBranchId = (int) ($user->default_branch_id ?? 0);

        return [$defaultBranchId > 0 ? $defaultBranchId : 0];
    }

    private function generateNextCreditNoteCode(): string
    {
        $prefix = 'CN';
        $last = CreditNote::where('credit_note_no', 'like', $prefix.'%')
            ->orderByRaw('CAST(SUBSTRING(credit_note_no, '.(strlen($prefix) + 1).') AS UNSIGNED) DESC')
            ->first();

        $nextNumber = $last ? (int) substr($last->credit_note_no, strlen($prefix)) + 1 : 1;

        return $prefix.str_pad((string) $nextNumber, 4, '0', STR_PAD_LEFT);
    }
}

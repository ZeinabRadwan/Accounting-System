<?php

namespace App\Domain\Expense\Services;

use App\Domain\Expense\Enums\ExpenseCategory;
use App\Domain\Expense\Models\Expense;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Services\TreasuryService;
use DomainException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ExpenseService
{
    public function __construct(
        private readonly TreasuryService $treasuryService,
    ) {
    }

    public function create(array $data): Expense
    {
        $amount = (float) ($data['amount'] ?? 0);
        if ($amount <= 0) {
            throw new DomainException('Expense amount must be greater than zero.');
        }

        $paymentMethod = PaymentMethod::normalize((string) $data['payment_method']);
        $category = ExpenseCategory::tryFrom((string) $data['category'])
            ?? throw new DomainException('Invalid expense category.');

        return DB::transaction(function () use ($data, $amount, $paymentMethod, $category) {
            $treasury = $this->treasuryService->findActiveByPaymentMethod($paymentMethod);

            /** @var Expense $expense */
            $expense = Expense::query()->create([
                'expense_number' => $this->generateExpenseNumber(),
                'branch_id' => $data['branch_id'] ?? null,
                'treasury_id' => $treasury->id,
                'payment_method' => $paymentMethod,
                'category' => $category->value,
                'title' => $data['title'],
                'notes' => $data['notes'] ?? null,
                'amount' => $amount,
                'expense_date' => $data['expense_date'],
                'created_by' => $data['created_by'] ?? null,
            ]);

            $this->treasuryService->recordExpense(
                paymentMethod: $paymentMethod,
                amount: $amount,
                referenceType: Expense::class,
                referenceId: $expense->id,
                description: 'Expense '.$expense->expense_number.' · '.$expense->title,
                createdBy: $data['created_by'] ?? null,
            );

            return $expense->load(['branch', 'treasury', 'creator']);
        });
    }

    public function delete(Expense $expense): void
    {
        throw new DomainException('Expenses cannot be deleted. Record a correcting entry instead.');
    }

    protected function generateExpenseNumber(): string
    {
        return 'EXP-'.Str::upper(Str::random(8));
    }
}

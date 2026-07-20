<?php

namespace App\Domain\Treasury\Services;

use App\Domain\Notifications\Services\SystemNotifier;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Enums\TreasuryTransactionType;
use App\Domain\Treasury\Models\Treasury;
use App\Domain\Treasury\Models\TreasuryTransaction;
use DomainException;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class TreasuryService
{
    /**
     * Ensure the four default payment-method treasuries exist.
     */
    public function seedDefaults(): void
    {
        foreach (PaymentMethod::cases() as $method) {
            Treasury::query()->firstOrCreate(
                ['payment_method' => $method->value],
                [
                    'name' => $method->defaultTreasuryName(),
                    'current_balance' => 0,
                    'is_active' => true,
                ]
            );
        }
    }

    public function findActiveByPaymentMethod(string $paymentMethod): Treasury
    {
        $normalized = PaymentMethod::normalize($paymentMethod);

        /** @var Treasury|null $treasury */
        $treasury = Treasury::query()
            ->where('payment_method', $normalized)
            ->where('is_active', true)
            ->first();

        if (! $treasury) {
            throw new DomainException("No active treasury found for payment method [{$normalized}].");
        }

        return $treasury;
    }

    /**
     * Increase treasury balance and log an income transaction.
     * Must be called inside an outer DB transaction when composing with invoices.
     */
    public function recordIncome(
        string $paymentMethod,
        float $amount,
        ?string $referenceType = null,
        ?int $referenceId = null,
        ?string $description = null,
        ?int $createdBy = null,
    ): TreasuryTransaction {
        if ($amount <= 0) {
            throw new DomainException('Income amount must be greater than zero.');
        }

        return $this->applyChange(
            paymentMethod: $paymentMethod,
            amount: $amount,
            type: TreasuryTransactionType::Income,
            referenceType: $referenceType,
            referenceId: $referenceId,
            description: $description,
            createdBy: $createdBy,
        );
    }

    /**
     * Decrease treasury balance and log an expense transaction.
     */
    public function recordExpense(
        string $paymentMethod,
        float $amount,
        ?string $referenceType = null,
        ?int $referenceId = null,
        ?string $description = null,
        ?int $createdBy = null,
    ): TreasuryTransaction {
        if ($amount <= 0) {
            throw new DomainException('Expense amount must be greater than zero.');
        }

        return $this->applyChange(
            paymentMethod: $paymentMethod,
            amount: $amount,
            type: TreasuryTransactionType::Expense,
            referenceType: $referenceType,
            referenceId: $referenceId,
            description: $description,
            createdBy: $createdBy,
        );
    }

    /**
     * Record income/expense for a known treasury id.
     */
    public function recordForTreasury(
        int $treasuryId,
        TreasuryTransactionType $type,
        float $amount,
        ?string $referenceType = null,
        ?int $referenceId = null,
        ?string $description = null,
        ?int $createdBy = null,
        bool $allowNegativeBalance = false,
    ): TreasuryTransaction {
        if ($amount <= 0) {
            throw new DomainException('Amount must be greater than zero.');
        }

        return DB::transaction(function () use ($treasuryId, $type, $amount, $referenceType, $referenceId, $description, $createdBy, $allowNegativeBalance) {
            /** @var Treasury $treasury */
            $treasury = Treasury::query()->whereKey($treasuryId)->lockForUpdate()->firstOrFail();

            if (! $treasury->is_active) {
                throw new DomainException('Treasury is inactive.');
            }

            return $this->mutateTreasury(
                $treasury,
                $type,
                $amount,
                $referenceType,
                $referenceId,
                $description,
                $createdBy,
                $allowNegativeBalance,
            );
        });
    }

    public function create(array $data): Treasury
    {
        $method = PaymentMethod::normalize((string) $data['payment_method']);

        if (Treasury::query()->where('payment_method', $method)->exists()) {
            throw new DomainException('A treasury already exists for this payment method.');
        }

        // Balance always starts at zero; use recordIncome/recordExpense for changes.
        return Treasury::query()->create([
            'name' => $data['name'],
            'payment_method' => $method,
            'current_balance' => 0,
            'is_active' => (bool) ($data['is_active'] ?? true),
        ]);
    }

    public function update(Treasury $treasury, array $data): Treasury
    {
        $method = PaymentMethod::normalize((string) ($data['payment_method'] ?? $treasury->payment_method));

        $duplicate = Treasury::query()
            ->where('payment_method', $method)
            ->where('id', '!=', $treasury->id)
            ->exists();

        if ($duplicate) {
            throw new DomainException('A treasury already exists for this payment method.');
        }

        $treasury->fill([
            'name' => $data['name'] ?? $treasury->name,
            'payment_method' => $method,
            'is_active' => array_key_exists('is_active', $data)
                ? (bool) $data['is_active']
                : $treasury->is_active,
        ])->save();

        return $treasury->refresh();
    }

    /**
     * @return Collection<int, object>
     */
    public function reportRows(): Collection
    {
        return Treasury::query()
            ->withCount('transactions')
            ->withSum(['transactions as total_income' => fn ($q) => $q->where('type', TreasuryTransactionType::Income->value)], 'amount')
            ->withSum(['transactions as total_expenses' => fn ($q) => $q->where('type', TreasuryTransactionType::Expense->value)], 'amount')
            ->orderBy('name')
            ->get();
    }

    protected function applyChange(
        string $paymentMethod,
        float $amount,
        TreasuryTransactionType $type,
        ?string $referenceType,
        ?int $referenceId,
        ?string $description,
        ?int $createdBy,
    ): TreasuryTransaction {
        return DB::transaction(function () use ($paymentMethod, $amount, $type, $referenceType, $referenceId, $description, $createdBy) {
            $normalized = PaymentMethod::normalize($paymentMethod);

            /** @var Treasury|null $treasury */
            $treasury = Treasury::query()
                ->where('payment_method', $normalized)
                ->lockForUpdate()
                ->first();

            if (! $treasury) {
                throw new DomainException("No treasury found for payment method [{$normalized}].");
            }

            if (! $treasury->is_active) {
                throw new DomainException("Treasury [{$treasury->name}] is inactive.");
            }

            return $this->mutateTreasury($treasury, $type, $amount, $referenceType, $referenceId, $description, $createdBy, false);
        });
    }

    protected function mutateTreasury(
        Treasury $treasury,
        TreasuryTransactionType $type,
        float $amount,
        ?string $referenceType,
        ?int $referenceId,
        ?string $description,
        ?int $createdBy,
        bool $allowNegativeBalance = false,
    ): TreasuryTransaction {
        $balance = (float) $treasury->current_balance;

        if ($type === TreasuryTransactionType::Income) {
            $treasury->current_balance = $balance + $amount;
        } else {
            if (! $allowNegativeBalance && $balance + 1e-6 < $amount) {
                throw new DomainException("Insufficient balance in {$treasury->name}. Available: {$balance}, needed: {$amount}.");
            }
            $treasury->current_balance = $balance - $amount;
        }

        $treasury->save();

        $transaction = TreasuryTransaction::query()->create([
            'treasury_id' => $treasury->id,
            'type' => $type->value,
            'amount' => $amount,
            'reference_type' => $referenceType,
            'reference_id' => $referenceId,
            'description' => $description,
            'created_by' => $createdBy,
        ]);

        DB::afterCommit(fn () => app(SystemNotifier::class)->treasuryTransaction(
            $treasury,
            $amount,
            $type->value === 'income' ? 'Income' : 'Expense',
        ));

        return $transaction;
    }
}

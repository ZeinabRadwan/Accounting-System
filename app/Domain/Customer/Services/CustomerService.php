<?php

namespace App\Domain\Customer\Services;

use App\Domain\Customer\Enums\CustomerType;
use App\Domain\Customer\Enums\StudentClass;
use App\Domain\Customer\Models\Customer;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class CustomerService
{
    public function paginate(
        ?string $search = null,
        ?string $type = null,
        ?string $studentClass = null,
        int $perPage = 15,
        bool $outstandingOnly = false,
    ): LengthAwarePaginator {
        return Customer::query()
            ->withSum([
                'invoices as outstanding_balance' => function ($q) {
                    $q->where(function ($qq) {
                        $qq->where('is_cancelled', false)->orWhereNull('is_cancelled');
                    });
                },
            ], 'remaining_amount')
            ->when($search, function ($q) use ($search) {
                $q->where(function ($qq) use ($search) {
                    $qq->where('phone', 'like', "%{$search}%")
                        ->orWhere('name', 'like', "%{$search}%");
                });
            })
            ->when($type, fn ($q) => $q->where('type', $type))
            ->when($studentClass, fn ($q) => $q->where('student_class', $studentClass))
            ->when($outstandingOnly, function ($q) {
                $q->whereHas('invoices', function ($iq) {
                    $iq->where('remaining_amount', '>', 0)
                        ->where(function ($qq) {
                            $qq->where('is_cancelled', false)->orWhereNull('is_cancelled');
                        });
                });
            })
            ->orderBy('name')
            ->paginate($perPage);
    }

    public function countWithOutstanding(): int
    {
        return (int) DB::table('sales_invoices')
            ->whereNotNull('customer_id')
            ->where('remaining_amount', '>', 0)
            ->where(function ($q) {
                $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
            })
            ->selectRaw('count(distinct customer_id) as aggregate')
            ->value('aggregate');
    }

    public function quickSearch(string $term, int $limit = 10): Collection
    {
        return Customer::query()
            ->where(function ($q) use ($term) {
                $q->where('phone', 'like', "%{$term}%")
                    ->orWhere('name', 'like', "%{$term}%");
            })
            ->orderBy('name')
            ->limit($limit)
            ->get(['id', 'name', 'phone', 'type', 'student_class']);
    }

    public function create(array $data): Customer
    {
        return Customer::create($this->normalizePayload($data));
    }

    public function update(Customer $customer, array $data): Customer
    {
        $customer->fill($this->normalizePayload($data))->save();

        return $customer->refresh();
    }

    public function delete(Customer $customer): void
    {
        $customer->delete();
    }

    public function quickCreateIfNotExists(string $name, string $phone, ?string $type = null, ?string $studentClass = null): Customer
    {
        $existing = Customer::query()->where('phone', $phone)->first();
        if ($existing) {
            return $existing;
        }

        return $this->create([
            'name' => $name,
            'phone' => $phone,
            'type' => $type ?? CustomerType::Doctor->value,
            'student_class' => $studentClass,
        ]);
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array{name:string,phone:string,type:string,student_class:?string}
     */
    protected function normalizePayload(array $data): array
    {
        $type = CustomerType::tryFrom((string) ($data['type'] ?? CustomerType::Doctor->value))
            ?? CustomerType::Doctor;

        $studentClass = null;
        if ($type === CustomerType::Student) {
            $raw = $data['student_class'] ?? null;
            if (is_string($raw) && $raw !== '') {
                $studentClass = StudentClass::tryFrom($raw)?->value;
            }
        }

        return [
            'name' => $data['name'],
            'phone' => $data['phone'],
            'type' => $type->value,
            'student_class' => $studentClass,
        ];
    }
}

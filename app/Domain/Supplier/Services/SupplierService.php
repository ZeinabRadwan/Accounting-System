<?php

namespace App\Domain\Supplier\Services;

use App\Domain\Supplier\Models\Supplier;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class SupplierService
{
    public function paginate(
        ?string $search = null,
        int $perPage = 15,
        bool $outstandingOnly = false,
    ): LengthAwarePaginator {
        return Supplier::query()
            ->withSum('purchases as outstanding_balance', 'remaining_amount')
            ->when($search, function ($q) use ($search) {
                $q->where(function ($qq) use ($search) {
                    $qq->where('phone', 'like', "%{$search}%")
                        ->orWhere('name', 'like', "%{$search}%")
                        ->orWhere('address', 'like', "%{$search}%");
                });
            })
            ->when($outstandingOnly, function ($q) {
                $q->whereHas('purchases', fn ($iq) => $iq->where('remaining_amount', '>', 0));
            })
            ->orderBy('name')
            ->paginate($perPage);
    }

    public function countWithOutstanding(): int
    {
        return (int) DB::table('purchase_invoices')
            ->whereNotNull('supplier_id')
            ->where('remaining_amount', '>', 0)
            ->selectRaw('count(distinct supplier_id) as aggregate')
            ->value('aggregate');
    }

    public function quickSearch(string $term, int $limit = 10): \Illuminate\Database\Eloquent\Collection
    {
        return Supplier::query()
            ->where(function ($q) use ($term) {
                $q->where('phone', 'like', "%{$term}%")
                    ->orWhere('name', 'like', "%{$term}%");
            })
            ->orderBy('name')
            ->limit($limit)
            ->get(['id', 'name', 'phone']);
    }

    public function quickCreateIfNotExists(string $name, string $phone, ?string $address = null): Supplier
    {
        $existing = Supplier::query()->where('phone', $phone)->first();
        if ($existing) {
            return $existing;
        }

        return $this->create([
            'name' => $name,
            'phone' => $phone,
            'address' => $address,
        ]);
    }

    public function create(array $data): Supplier
    {
        return Supplier::create([
            'name' => $data['name'],
            'phone' => $data['phone'],
            'address' => $data['address'] ?? null,
        ]);
    }

    public function update(Supplier $supplier, array $data): Supplier
    {
        $supplier->fill([
            'name' => $data['name'],
            'phone' => $data['phone'],
            'address' => $data['address'] ?? null,
        ])->save();

        return $supplier->refresh();
    }

    public function delete(Supplier $supplier): void
    {
        $supplier->delete();
    }
}

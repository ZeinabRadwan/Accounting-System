<?php

namespace App\Domain\Branch\Services;

use App\Domain\Branch\Models\Branch;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use DomainException;

class BranchService
{
    public function listBranches(?string $search = null): Collection
    {
        return Branch::query()
            ->when($search, function ($q) use ($search) {
                $q->where(function ($qq) use ($search) {
                    $qq->where('name', 'like', "%{$search}%")
                       ->orWhere('code', 'like', "%{$search}%")
                       ->orWhere('address', 'like', "%{$search}%");
                });
            })
            ->orderBy('name')
            ->get();
    }

    public function create(array $data): Branch
    {
        return Branch::create([
            'name' => $data['name'],
            'code' => $data['code'],
            'address' => $data['address'] ?? null,
            'is_active' => (bool) ($data['is_active'] ?? true),
        ]);
    }

    public function update(Branch $branch, array $data): Branch
    {
        $fill = [
            'name' => $data['name'],
            'code' => $data['code'],
            'address' => $data['address'] ?? null,
            'is_active' => (bool) ($data['is_active'] ?? $branch->is_active),
        ];

        if (array_key_exists('latitude', $data)) {
            $fill['latitude'] = $data['latitude'];
            $fill['longitude'] = $data['longitude'];
            $fill['allowed_radius'] = $data['allowed_radius'];
        }

        $branch->fill($fill)->save();

        return $branch->refresh();
    }

    public function updateGeofence(Branch $branch, ?float $latitude, ?float $longitude, ?int $allowedRadius): Branch
    {
        $branch->fill([
            'latitude' => $latitude,
            'longitude' => $longitude,
            'allowed_radius' => $allowedRadius,
        ])->save();

        return $branch->refresh();
    }

    public function delete(Branch $branch): void
    {
        DB::transaction(function () use ($branch) {
            // Block deletion if any related user/data exists.
            if ($branch->users()->exists()) {
                throw new DomainException('Cannot delete branch with assigned users.');
            }

            $branch->delete();
        });
    }
}


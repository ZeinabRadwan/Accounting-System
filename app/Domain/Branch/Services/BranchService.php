<?php

namespace App\Domain\Branch\Services;

use App\Domain\Branch\Models\Branch;
use App\Domain\Notifications\Services\SystemNotifier;
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
        $branch = Branch::create([
            'name' => $data['name'],
            'code' => $data['code'],
            'address' => $data['address'] ?? null,
            'is_active' => (bool) ($data['is_active'] ?? true),
        ]);

        app(SystemNotifier::class)->branchCreated($branch);

        return $branch;
    }

    public function update(Branch $branch, array $data): Branch
    {
        $wasActive = (bool) $branch->is_active;

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
        $branch = $branch->refresh();

        app(SystemNotifier::class)->branchUpdated(
            $branch,
            statusChanged: $wasActive !== (bool) $branch->is_active,
            wasActive: $wasActive,
        );

        return $branch;
    }

    public function updateGeofence(Branch $branch, ?float $latitude, ?float $longitude, ?int $allowedRadius): Branch
    {
        $branch->fill([
            'latitude' => $latitude,
            'longitude' => $longitude,
            'allowed_radius' => $allowedRadius,
        ])->save();

        $branch = $branch->refresh();
        app(SystemNotifier::class)->branchGeofenceChanged($branch);

        return $branch;
    }

    public function delete(Branch $branch): void
    {
        DB::transaction(function () use ($branch) {
            // Block deletion if any related user/data exists.
            if ($branch->users()->exists()) {
                throw new DomainException('Cannot delete branch with assigned users.');
            }

            DB::afterCommit(fn () => app(SystemNotifier::class)->branchDeleted($branch));
            $branch->delete();
        });
    }
}

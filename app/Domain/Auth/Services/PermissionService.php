<?php

namespace App\Domain\Auth\Services;

use App\Domain\Auth\Models\Permission;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class PermissionService
{
    public function ensurePermissionsExist(array $keys): Collection
    {
        $existing = Permission::query()->whereIn('key', $keys)->pluck('key')->all();
        $toCreate = array_diff($keys, $existing);

        foreach ($toCreate as $key) {
            Permission::create([
                'key' => $key,
                'name' => str_replace('_', ' ', $key),
                'description' => null,
                'is_active' => true,
            ]);
        }

        return Permission::query()->whereIn('key', $keys)->get();
    }

    public function grant(User $user, array|string $keys): void
    {
        $keys = is_array($keys) ? $keys : [$keys];
        $perms = $this->ensurePermissionsExist($keys);
        $user->permissions()->syncWithoutDetaching($perms->pluck('id')->all());
    }

    public function revoke(User $user, array|string $keys): void
    {
        $keys = is_array($keys) ? $keys : [$keys];
        $ids = Permission::query()->whereIn('key', $keys)->pluck('id')->all();
        if ($ids) {
            $user->permissions()->detach($ids);
        }
    }

    public function sync(User $user, array $keys): void
    {
        $perms = $this->ensurePermissionsExist($keys);
        $user->permissions()->sync($perms->pluck('id')->all());
    }
}


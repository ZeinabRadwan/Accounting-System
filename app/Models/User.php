<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Domain\Auth\Enums\UserRole;
use App\Domain\Auth\Models\Permission;
use App\Domain\Auth\Services\ProfilePhotoService;
use App\Domain\Branch\Models\Branch;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'profile_photo',
        'password',
        'branch_id',
        'role',
        'is_active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var list<string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'role' => UserRole::class,
            'is_active' => 'boolean',
        ];
    }

    protected static function booted(): void
    {
        static::deleting(function (User $user) {
            app(ProfilePhotoService::class)->delete($user->profile_photo);
        });
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'user_permissions')
            ->withTimestamps();
    }

    protected function profilePhotoUrl(): Attribute
    {
        return Attribute::get(function (): ?string {
            return app(ProfilePhotoService::class)->url($this->profile_photo);
        });
    }

    public function roleEnum(): ?UserRole
    {
        return UserRole::tryFromMixed($this->role);
    }

    public function isSuperAdmin(): bool
    {
        return $this->roleEnum() === UserRole::SuperAdmin;
    }

    public function isAdmin(): bool
    {
        return $this->roleEnum() === UserRole::Admin;
    }

    public function isSales(): bool
    {
        return $this->roleEnum() === UserRole::Sales;
    }

    public function canAccessAdminPanel(): bool
    {
        return $this->roleEnum()?->canAccessAdminPanel() ?? false;
    }

    public function bypassesInvoiceVisibility(): bool
    {
        return $this->roleEnum()?->bypassesInvoiceVisibility() ?? false;
    }

    public function hasPermission(string $key): bool
    {
        // Super Admin and Admin have full module permissions.
        // Sales invoice visibility is enforced separately via policies/queries.
        if ($this->isSuperAdmin() || $this->isAdmin()) {
            return true;
        }

        return $this->permissions->contains(fn (Permission $p) => $p->key === $key && $p->is_active);
    }

    public function hasAnyPermission(array $keys): bool
    {
        foreach ($keys as $key) {
            if ($this->hasPermission($key)) {
                return true;
            }
        }

        return false;
    }

    public function hasAllPermissions(array $keys): bool
    {
        foreach ($keys as $key) {
            if (! $this->hasPermission($key)) {
                return false;
            }
        }

        return true;
    }
}

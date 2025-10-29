<?php

namespace App\Models;

use App\Notifications\ResetPassword;
use App\Notifications\VerifyEmail;
use App\Traits\HasPermissions;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasPermissions, Sluggable, HasFactory;

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
            ],
        ];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'account_role',
        'is_active',
        'locale',
        'profile_image',
        'default_branch_id',
    ];

    protected $attributes = [
        'locale' => 'ar', // Set default locale
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'photo_url',
    ];

    /**
     * Get the profile photo URL attribute.
     *
     * @return string
     */
    public function getPhotoUrlAttribute()
    {
        if ($this->profile_image) {
            // Use relative URL to avoid domain issues in multi-tenant setup
            return '/images/users/' . $this->profile_image;
        }
        
        return vsprintf('https://www.gravatar.com/avatar/%s.jpg?s=200&d=%s', [
            md5(strtolower($this->email)),
            $this->name ? urlencode("https://ui-avatars.com/api/$this->name") : 'mp',
        ]);
    }

    /**
     * Get the oauth providers.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function oauthProviders()
    {
        return $this->hasMany(OAuthProvider::class);
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token));
    }

    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail);
    }

    public function receivesBroadcastNotificationsOn()
    {
        return 'App.Models.User.'.$this->id;
    }

    /**
     * @return int
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * @return array
     */
    public function hasRole(...$roles)
    {
        return $this->roles()->whereIn('slug', $roles)->count();
    }

    /**
     * The roles that belong to the user.
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_role');
    }

    /**
     * @return array
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'user_permission');
    }

    /**
     * Get the Accounts.
     */
    public function cashbookAccounts()
    {
        return $this->hasMany(Account::class, 'created_by');
    }

    public function employee()
    {
        return $this->hasOne(Employee::class);
    }

    /**
     * Get the branches this user belongs to
     */
    public function branches()
    {
        return $this->belongsToMany(Branch::class, 'branch_user')
            ->withPivot('role')
            ->withTimestamps();
    }

    /**
     * Get the default branch for this user
     */
    public function defaultBranch()
    {
        return $this->belongsTo(Branch::class, 'default_branch_id');
    }

    /**
     * Get the current branch context
     */
    public function currentBranch()
    {
        $branchId = session('current_branch_id') ?? $this->default_branch_id;
        
        if ($branchId) {
            return Branch::find($branchId);
        }
        
        return $this->branches()->active()->first();
    }

    /**
     * Check if user has access to a branch
     */
    public function hasAccessToBranch($branchId): bool
    {
        return $this->branches()->where('branches.id', $branchId)->exists();
    }
}

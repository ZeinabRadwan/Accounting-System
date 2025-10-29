<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class Branch extends Model
{
    use SoftDeletes, Sluggable;

    protected $fillable = [
        'name',
        'code',
        'slug',
        'address',
        'phone',
        'email',
        'description',
        'is_active',
        'is_main',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_main' => 'boolean',
    ];

    /**
     * Sluggable configuration
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    /**
     * Get all users assigned to this branch
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'branch_user')
            ->withPivot('role')
            ->withTimestamps();
    }

    /**
     * Get all clients in this branch
     */
    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    /**
     * Get all suppliers in this branch
     */
    public function suppliers()
    {
        return $this->hasMany(Supplier::class);
    }

    /**
     * Get all products in this branch
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }

    /**
     * Get all invoices in this branch
     */
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    /**
     * Get all purchases in this branch
     */
    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }

    /**
     * Get all quotations in this branch
     */
    public function quotations()
    {
        return $this->hasMany(Quotation::class);
    }

    /**
     * Get all accounts in this branch
     */
    public function accounts()
    {
        return $this->hasMany(Account::class);
    }

    /**
     * Get all expenses in this branch
     */
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

    /**
     * Get all employees in this branch
     */
    public function employees()
    {
        return $this->hasMany(Employee::class);
    }

    /**
     * Get all journal entries in this branch
     */
    public function journalEntries()
    {
        return $this->hasMany(JournalEntry::class);
    }

    /**
     * Get all assets in this branch
     */
    public function assets()
    {
        return $this->hasMany(Asset::class);
    }

    /**
     * Get all inventory adjustments in this branch
     */
    public function inventoryAdjustments()
    {
        return $this->hasMany(InventoryAdjustment::class);
    }

    /**
     * Scope: Get only active branches
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope: Get main branch
     */
    public function scopeMain($query)
    {
        return $query->where('is_main', true);
    }

    /**
     * Get the main branch for the current tenant
     */
    public static function getMainBranch()
    {
        return static::where('is_main', true)->first();
    }

    /**
     * Get the default branch (main or first available)
     */
    public static function getDefaultBranch()
    {
        $main = static::getMainBranch();
        if ($main) {
            return $main;
        }
        
        return static::active()->first();
    }
}

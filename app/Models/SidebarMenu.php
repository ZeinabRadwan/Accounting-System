<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SidebarMenu extends Model
{
    protected $fillable = [
        'parent_id', 'menu_id', 'icon', 'name', 'url', 'permissions', 'order'
    ];

    protected $casts = [
        'permissions' => 'array',
    ];

    public function children()
    {
        return $this->hasMany(SidebarMenu::class, 'parent_id')->orderBy('order');
    }
}

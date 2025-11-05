<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Helpers\SystemTypeHelper;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $userRoles = $this->roles()->with('permissions')->get();
        $roles = $userRoles->pluck('slug');
        $rolesPermissions = $userRoles->pluck('permissions')->flatten(1)->pluck('slug');

        return [
            'name' => $this->name,
            'email' => $this->email,
            'profile_image' => $this->profile_image,
            'photo_url' => $this->photo_url,
            'slug' => $this->slug,
            'locale' => $this->locale,
            'account_role' => $this->account_role,
            'default_branch_id' => $this->default_branch_id,
            'created_at' => $this->created_at,
            'roles' => $roles,
            'permissions' => $rolesPermissions,
            'system_type' => SystemTypeHelper::getSystemType(),
        ];
    }
}
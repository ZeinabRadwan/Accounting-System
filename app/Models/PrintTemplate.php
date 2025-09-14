<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrintTemplate extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'module',
        'template_key',
        'display_name',
        'description',
        'is_default',
        'is_active',
        'template_config',
        'html_template',
        'css_styles',
        'preview_data',
        'custom_logo',
        'sort_order',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'template_config' => 'array',
        'preview_data' => 'array',
        'is_default' => 'boolean',
        'is_active' => 'boolean',
    ];

    /**
     * Get templates by module
     */
    public function scopeByModule($query, $module)
    {
        return $query->where('module', $module);
    }

    /**
     * Get active templates
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Get default template for a module
     */
    public function scopeDefault($query, $module = null)
    {
        $query = $query->where('is_default', true);
        if ($module) {
            $query->where('module', $module);
        }
        return $query;
    }

    /**
     * Get template configuration
     */
    public function getConfigAttribute()
    {
        return $this->template_config ?? [];
    }

    /**
     * Set template configuration
     */
    public function setConfigAttribute($value)
    {
        $this->template_config = is_array($value) ? $value : json_decode($value, true);
    }

    /**
     * Get preview data
     */
    public function getPreviewDataAttribute()
    {
        return $this->preview_data ?? [];
    }

    /**
     * Set preview data
     */
    public function setPreviewDataAttribute($value)
    {
        $this->preview_data = is_array($value) ? $value : json_decode($value, true);
    }

    /**
     * Get the logo URL for this template
     */
    public function getLogoUrlAttribute()
    {
        if ($this->custom_logo) {
            return asset('images/' . $this->custom_logo);
        }

        // Fallback to general settings logo
        $settings = \App\Models\GeneralSetting::get();
        $logo = $settings->where('key', 'logo')->first()?->value;
        
        if ($logo) {
            return asset('images/' . $logo);
        }

        // Default logo
        return asset('images/logo.png');
    }

    /**
     * Get the logo path for this template
     */
    public function getLogoPathAttribute()
    {
        if ($this->custom_logo) {
            return public_path('images/' . $this->custom_logo);
        }

        // Fallback to general settings logo
        $settings = \App\Models\GeneralSetting::get();
        $logo = $settings->where('key', 'logo')->first()?->value;
        
        if ($logo) {
            return public_path('images/' . $logo);
        }

        // Default logo
        return public_path('images/logo.png');
    }
}

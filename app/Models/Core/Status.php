<?php

namespace App\Models\Core;

use App\Models\Core\Traits\Translate\TranslatedNameTrait;


class Status extends BaseModel
{
    use TranslatedNameTrait;
   

    protected $appends = ['translated_name'];
    protected $fillable = ['name', 'type', 'class'];

    public function getTranslatedNameAttribute()
    {
        // Example: Return the name attribute or use a translation package
        return $this->name; // Modify based on your translation logic
    }

    public static function findByNameAndType($name, $type = 'user')
    {
        return self::query()
            ->where('name', $name)
            ->where('type', $type)
            ->first();
    }

    protected static function boot()
    {
        parent::boot();

        static::saved(function ($status) {
            cache()->forget('statuses');
            cache()->forget('statuses-'.optional($status)->type);
        });

        static::deleting(function ($status) {
            cache()->forget('statuses');
            cache()->forget('statuses-'.optional($status)->type);
        });
    }
}
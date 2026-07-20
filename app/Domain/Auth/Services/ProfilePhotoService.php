<?php

namespace App\Domain\Auth\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ProfilePhotoService
{
    public const DISK = 'public';

    public const DIRECTORY = 'users';

    /**
     * Store a new profile photo and optionally remove the previous file.
     */
    public function store(UploadedFile $file, ?string $previousPath = null): string
    {
        if ($previousPath) {
            $this->delete($previousPath);
        }

        return $file->store(self::DIRECTORY, self::DISK);
    }

    public function delete(?string $path): void
    {
        if (! $path) {
            return;
        }

        if (Storage::disk(self::DISK)->exists($path)) {
            Storage::disk(self::DISK)->delete($path);
        }
    }

    public function url(?string $path): ?string
    {
        if (! $path) {
            return null;
        }

        return Storage::disk(self::DISK)->url($path);
    }
}

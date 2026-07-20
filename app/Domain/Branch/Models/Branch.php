<?php

namespace App\Domain\Branch\Models;

use App\Domain\Inventory\Models\InventoryStock;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Branch extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'address',
        'is_active',
        'latitude',
        'longitude',
        'allowed_radius',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'latitude' => 'decimal:7',
        'longitude' => 'decimal:7',
        'allowed_radius' => 'integer',
    ];

    public function hasGeofence(): bool
    {
        return $this->latitude !== null
            && $this->longitude !== null
            && $this->allowed_radius !== null
            && $this->allowed_radius > 0;
    }

    /**
     * Check if a coordinate is within the branch geofence using Haversine.
     */
    public function isWithinGeofence(float $lat, float $lng): bool
    {
        if (! $this->hasGeofence()) {
            return true;
        }

        $distance = self::haversineDistance(
            (float) $this->latitude,
            (float) $this->longitude,
            $lat,
            $lng,
        );

        return $distance <= (int) $this->allowed_radius;
    }

    /**
     * Haversine distance in meters between two lat/lng points.
     */
    public static function haversineDistance(float $lat1, float $lng1, float $lat2, float $lng2): float
    {
        $earthRadius = 6371000;

        $dLat = deg2rad($lat2 - $lat1);
        $dLng = deg2rad($lng2 - $lng1);

        $a = sin($dLat / 2) * sin($dLat / 2)
            + cos(deg2rad($lat1)) * cos(deg2rad($lat2))
            * sin($dLng / 2) * sin($dLng / 2);

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c;
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function inventoryStocks(): HasMany
    {
        return $this->hasMany(InventoryStock::class);
    }
}


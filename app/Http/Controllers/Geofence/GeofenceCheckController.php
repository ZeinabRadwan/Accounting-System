<?php

namespace App\Http\Controllers\Geofence;

use App\Domain\Branch\Models\Branch;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class GeofenceCheckController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $user = $request->user();

        if (! $user || ! $user->isSales()) {
            return response()->json(['allowed' => true]);
        }

        $validated = $request->validate([
            'latitude' => ['required', 'numeric', 'between:-90,90'],
            'longitude' => ['required', 'numeric', 'between:-180,180'],
        ]);

        $branch = $user->branch;

        if (! $branch || ! $branch->hasGeofence()) {
            return response()->json(['allowed' => true]);
        }

        $allowed = $branch->isWithinGeofence(
            (float) $validated['latitude'],
            (float) $validated['longitude'],
        );

        return response()->json([
            'allowed' => $allowed,
            'message' => $allowed ? null : __('You are outside your assigned branch\'s allowed location.'),
        ]);
    }
}

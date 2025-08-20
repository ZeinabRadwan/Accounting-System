<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Nationality;
use App\Models\City;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    /**
     * Get all active nationalities
     */
    public function getNationalities()
    {
        $nationalities = Nationality::where('status', 1)
            ->orderBy('name')
            ->get(['id', 'name', 'code']);

        return response()->json([
            'success' => true,
            'data' => $nationalities
        ]);
    }

    /**
     * Get all active cities
     */
    public function getCities()
    {
        $cities = City::where('status', 1)
            ->orderBy('name')
            ->get(['id', 'name', 'code']);

        return response()->json([
            'success' => true,
            'data' => $cities
        ]);
    }
}

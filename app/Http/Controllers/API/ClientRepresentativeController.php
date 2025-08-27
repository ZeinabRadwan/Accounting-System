<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\ClientRepresentative;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientRepresentativeController extends Controller
{
    /**
     * Get all representatives for a client.
     *
     * @param  string  $clientSlug
     * @return \Illuminate\Http\Response
     */
    public function index($clientSlug)
    {
        try {
            $client = Client::where('slug', $clientSlug)->firstOrFail();
            $representatives = $client->representatives()->orderBy('is_primary', 'desc')->orderBy('name')->get();
            
            return response()->json([
                'success' => true,
                'data' => $representatives
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Client not found'
            ], 404);
        }
    }

    /**
     * Store a newly created representative.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $clientSlug
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $clientSlug)
    {
        try {
            $client = Client::where('slug', $clientSlug)->firstOrFail();
            
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'nullable|email|max:255',
                'phone' => 'nullable|string|max:20',
                'position' => 'nullable|string|max:100',
                'is_primary' => 'boolean',
                'notes' => 'nullable|string|max:1000',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                ], 422);
            }

            // If this is a primary representative, unset others
            if ($request->is_primary) {
                $client->representatives()->update(['is_primary' => false]);
            }

            $representative = $client->representatives()->create($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Representative added successfully',
                'data' => $representative
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to add representative: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified representative.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $clientSlug
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $clientSlug, $id)
    {
        try {
            $client = Client::where('slug', $clientSlug)->firstOrFail();
            $representative = $client->representatives()->findOrFail($id);
            
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'nullable|email|max:255',
                'phone' => 'nullable|string|max:20',
                'position' => 'nullable|string|max:100',
                'is_primary' => 'boolean',
                'notes' => 'nullable|string|max:1000',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                ], 422);
            }

            // If this is a primary representative, unset others
            if ($request->is_primary) {
                $client->representatives()->where('id', '!=', $id)->update(['is_primary' => false]);
            }

            $representative->update($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Representative updated successfully',
                'data' => $representative
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update representative: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified representative.
     *
     * @param  string  $clientSlug
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($clientSlug, $id)
    {
        try {
            $client = Client::where('slug', $clientSlug)->firstOrFail();
            $representative = $client->representatives()->findOrFail($id);
            
            $representative->delete();

            return response()->json([
                'success' => true,
                'message' => 'Representative removed successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to remove representative: ' . $e->getMessage()
            ], 500);
        }
    }
}

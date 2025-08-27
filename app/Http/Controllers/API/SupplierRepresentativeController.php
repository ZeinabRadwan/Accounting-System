<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Supplier;
use App\Models\SupplierRepresentative;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SupplierRepresentativeController extends Controller
{
    /**
     * Get all representatives for a supplier.
     *
     * @param  string  $supplierSlug
     * @return \Illuminate\Http\Response
     */
    public function index($supplierSlug)
    {
        try {
            $supplier = Supplier::where('slug', $supplierSlug)->firstOrFail();
            $representatives = $supplier->representatives()->orderBy('is_primary', 'desc')->orderBy('name')->get();
            
            return response()->json([
                'success' => true,
                'data' => $representatives
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Supplier not found'
            ], 404);
        }
    }

    /**
     * Store a newly created representative.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $supplierSlug
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $supplierSlug)
    {
        try {
            $supplier = Supplier::where('slug', $supplierSlug)->firstOrFail();
            
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
                $supplier->representatives()->update(['is_primary' => false]);
            }

            $representative = $supplier->representatives()->create($request->all());

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
     * @param  string  $supplierSlug
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $supplierSlug, $id)
    {
        try {
            $supplier = Supplier::where('slug', $supplierSlug)->firstOrFail();
            $representative = $supplier->representatives()->findOrFail($id);
            
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
                $supplier->representatives()->where('id', '!=', $id)->update(['is_primary' => false]);
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
     * @param  string  $supplierSlug
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($supplierSlug, $id)
    {
        try {
            $supplier = Supplier::where('slug', $supplierSlug)->firstOrFail();
            $representative = $supplier->representatives()->findOrFail($id);
            
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

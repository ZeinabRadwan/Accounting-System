<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class BranchController extends Controller
{
    /**
     * Define middleware
     */
    public function __construct()
    {
        $this->middleware('can:branches-list', ['only' => ['index', 'show']]);
        $this->middleware('can:branches-create', ['only' => ['store']]);
        $this->middleware('can:branches-edit', ['only' => ['update']]);
        $this->middleware('can:branches-delete', ['only' => ['destroy']]);
    }

    /**
     * Get all branches
     */
    public function index(Request $request)
    {
        try {
            $perPage = $request->get('perPage', 10);
            $page = $request->get('page', 1);
            
            $branches = Branch::query()->paginate($perPage, ['*'], 'page', $page);
            
            return response()->json($branches);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to load branches',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get a specific branch
     */
    public function show($slug)
    {
        try {
            $branch = Branch::where('slug', $slug)->firstOrFail();
            
            return response()->json([
                'branch' => $branch
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Branch not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Create a new branch
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'nullable|string|max:50',
            'address' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'description' => 'nullable|string',
            'is_active' => 'boolean',
            'is_main' => 'boolean',
        ]);

        try {
            // Generate slug from name
            $slug = \Illuminate\Support\Str::slug($request->name);
            
            // Ensure uniqueness
            $originalSlug = $slug;
            $counter = 1;
            while (Branch::where('slug', $slug)->exists()) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }

            $branch = Branch::create([
                'name' => $request->name,
                'code' => $request->code,
                'slug' => $slug,
                'address' => $request->address,
                'phone' => $request->phone,
                'email' => $request->email,
                'description' => $request->description,
                'is_active' => $request->is_active ?? true,
                'is_main' => $request->is_main ?? false,
            ]);

            return response()->json([
                'message' => 'Branch created successfully',
                'branch' => $branch
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create branch',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update a branch
     */
    public function update(Request $request, $slug)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'nullable|string|max:50',
            'address' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'description' => 'nullable|string',
            'is_active' => 'boolean',
            'is_main' => 'boolean',
        ]);

        try {
            $branch = Branch::where('slug', $slug)->firstOrFail();
            
            // Generate new slug if name changed
            $newSlug = \Illuminate\Support\Str::slug($request->name);
            if ($newSlug !== $branch->slug) {
                // Ensure uniqueness
                $originalSlug = $newSlug;
                $counter = 1;
                while (Branch::where('slug', $newSlug)->where('id', '!=', $branch->id)->exists()) {
                    $newSlug = $originalSlug . '-' . $counter;
                    $counter++;
                }
            } else {
                $newSlug = $branch->slug;
            }

            $branch->update([
                'name' => $request->name,
                'code' => $request->code,
                'slug' => $newSlug,
                'address' => $request->address,
                'phone' => $request->phone,
                'email' => $request->email,
                'description' => $request->description,
                'is_active' => $request->is_active ?? $branch->is_active,
                'is_main' => $request->is_main ?? $branch->is_main,
            ]);

            return response()->json([
                'message' => 'Branch updated successfully',
                'branch' => $branch
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to update branch',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Delete a branch
     */
    public function destroy($slug)
    {
        try {
            $branch = Branch::where('slug', $slug)->firstOrFail();
            
            // Prevent deletion of main branch
            if ($branch->is_main) {
                return response()->json([
                    'message' => 'Cannot delete the main branch'
                ], 422);
            }


            if($branch->users->count() > 0) {
                return response()->json([
                    'message' => 'Cannot delete branch because it has users assigned to it'
                ], 422);
            }

            $branch->delete();

            return response()->json([
                'message' => 'Branch deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to delete branch',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Switch to a different branch
     */
    public function switch(Request $request)
    {
        $request->validate([
            'branch_id' => 'required|exists:branches,id',
        ]);

        $user = Auth::user();
        $branch = Branch::findOrFail($request->branch_id);
        $user->update([
            'default_branch_id' => $branch->id
        ]);

        // Check if user has access to this branch
        if (method_exists($user, 'branches') && !$user->branches->contains($branch)) {
            return response()->json([
                'message' => 'You do not have access to this branch.'
            ], 403);
        }

        // Set current branch in session
        Session::put('current_branch_id', $branch->id);

        return response()->json([
            'message' => 'Branch switched successfully',
            'branch' => $branch
        ]);
    }

    /**
     * Get current branch
     */
    public function current()
    {
        $branchId = Session::get('current_branch_id');
        
        if ($branchId) {
            $branch = Branch::find($branchId);
            if ($branch) {
                return response()->json([
                    'branch' => $branch
                ]);
            }
        }

        // Return default branch if none set
        $defaultBranch = Branch::where('is_main', true)->first();
        
        return response()->json([
            'branch' => $defaultBranch
        ]);
    }

    /**
     * Search branches
     */
    public function search(Request $request)
    {
        try {
            $term = $request->get('term', '');
            $perPage = $request->get('perPage', 10);
            $page = $request->get('page', 1);
            
            $query = Branch::query();
            
            if ($term) {
                $query->where(function($q) use ($term) {
                    $q->where('name', 'LIKE', "%{$term}%")
                      ->orWhere('code', 'LIKE', "%{$term}%")
                      ->orWhere('phone', 'LIKE', "%{$term}%")
                      ->orWhere('email', 'LIKE', "%{$term}%");
                });
            }
            
            $branches = $query->paginate($perPage, ['*'], 'page', $page);
            
            return response()->json($branches);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to search branches',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}



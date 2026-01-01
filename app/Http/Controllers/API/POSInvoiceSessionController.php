<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePosInvoiceSessionRequest;
use App\Http\Requests\UpdatePosInvoiceSessionRequest;
use App\Models\POSInvoiceSession;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class POSInvoiceSessionController extends Controller
{
    /**
     * Get all active/suspended sessions for the current user.
     */
    public function index(): JsonResponse
    {
        $sessions = POSInvoiceSession::where('user_id', Auth::id())
            ->open()
            ->orderBy('opened_at', 'desc')
            ->get()
            ->map(function ($session) {
                return [
                    'id' => $session->id,
                    'session_key' => $session->session_key,
                    'status' => $session->status,
                    'invoice_data' => $session->invoice_data,
                    'opened_at' => $session->opened_at->toISOString(),
                    'closed_at' => $session->closed_at?->toISOString(),
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $sessions,
        ]);
    }

    /**
     * Create a new invoice session.
     */
    public function store(StorePosInvoiceSessionRequest $request): JsonResponse
    {
        try {
            DB::beginTransaction();

            // Suspend any existing active session for this user
            POSInvoiceSession::where('user_id', Auth::id())
                ->where('status', 'active')
                ->update(['status' => 'suspended']);

            // Create new session
            $session = POSInvoiceSession::create([
                'user_id' => Auth::id(),
                'status' => $request->input('status', 'active'),
                'invoice_data' => $request->input('invoice_data'),
                'opened_at' => now(),
            ]);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Invoice session created successfully',
                'data' => [
                    'id' => $session->id,
                    'session_key' => $session->session_key,
                    'status' => $session->status,
                    'invoice_data' => $session->invoice_data,
                    'opened_at' => $session->opened_at->toISOString(),
                ],
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'success' => false,
                'message' => 'Failed to create invoice session',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update an existing invoice session.
     */
    public function update(UpdatePosInvoiceSessionRequest $request, int $id): JsonResponse
    {
        try {
            $session = POSInvoiceSession::where('user_id', Auth::id())
                ->findOrFail($id);

            DB::beginTransaction();

            // If setting status to active, suspend other active sessions
            if ($request->has('status') && $request->input('status') === 'active') {
                POSInvoiceSession::where('user_id', Auth::id())
                    ->where('id', '!=', $id)
                    ->where('status', 'active')
                    ->update(['status' => 'suspended']);
            }

            // Update session
            $session->update([
                'invoice_data' => $request->input('invoice_data'),
                'status' => $request->input('status', $session->status),
            ]);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Invoice session updated successfully',
                'data' => [
                    'id' => $session->id,
                    'session_key' => $session->session_key,
                    'status' => $session->status,
                    'invoice_data' => $session->invoice_data,
                    'opened_at' => $session->opened_at->toISOString(),
                ],
            ]);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'success' => false,
                'message' => 'Failed to update invoice session',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Close an invoice session (mark as closed and remove from active list).
     */
    public function close(int $id): JsonResponse
    {
        try {
            $session = POSInvoiceSession::where('user_id', Auth::id())
                ->open()
                ->findOrFail($id);

            $session->update([
                'status' => 'closed',
                'closed_at' => now(),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Invoice session closed successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to close invoice session',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Save an invoice session (mark as closed after saving the invoice).
     */
    public function save(int $id): JsonResponse
    {
        try {
            $session = POSInvoiceSession::where('user_id', Auth::id())
                ->open()
                ->findOrFail($id);

            $session->update([
                'status' => 'closed',
                'closed_at' => now(),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Invoice session saved successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to save invoice session',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete an invoice session.
     */
    public function destroy(int $id): JsonResponse
    {
        try {
            $session = POSInvoiceSession::where('user_id', Auth::id())
                ->findOrFail($id);

            $session->delete();

            return response()->json([
                'success' => true,
                'message' => 'Invoice session deleted successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete invoice session',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}

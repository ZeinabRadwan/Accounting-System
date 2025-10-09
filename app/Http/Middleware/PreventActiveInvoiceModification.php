<?php

namespace App\Http\Middleware;

use App\Models\Invoice;
use Closure;
use Illuminate\Http\Request;

class PreventActiveInvoiceModification
{
    /**
     * Handle an incoming request.
     * Blocks edit/update/delete when invoice is active under KSA rules.
     */
    public function handle(Request $request, Closure $next)
    {
        // Resolve slug from route parameters
        $slug = $request->route('slug') ?? $request->route('invoice') ?? null;

        if ($slug) {
            $invoice = Invoice::where('slug', $slug)->first();

            if ($invoice) {
                // Country configuration (default SA if not set)
                $country = \App\Models\GeneralSetting::where('key', 'country')->first()?->value ?? 'SA';
                $isSaudiArabia = $country === 'SA';

                // Block modification if KSA and invoice is active
                if ($isSaudiArabia && (int) $invoice->status === 1) {
                    if ($request->expectsJson()) {
                        return response()->json([
                            'message' => __('Sorry you can\'t modify an active invoice.'),
                            'error' => 'active_invoice_modification_blocked',
                        ], 422);
                    }

                    abort(422, __('Sorry you can\'t modify an active invoice.'));
                }
            }
        }

        return $next($request);
    }
}




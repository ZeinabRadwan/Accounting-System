<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SuspensionController extends Controller
{
    /**
     * Show the suspension page for archived tenants
     *
     * @param Request $request
     * @return \Illuminate\View\View
     */
    public function show(Request $request)
    {
        $suspendedAt = null;
        
        // If we have tenant context, get the suspension date
        if (tenant()) {
            $suspendedAt = tenant()->archived_at;
        }
        
        return view('suspended', compact('suspendedAt'));
    }
}
<?php

namespace App\Http\Controllers\Admin;

use App\Domain\Settings\DailyVisibility\Services\DailyInvoiceVisibilityService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class DailyVisibilityController
{
    public function index(Request $request, DailyInvoiceVisibilityService $service): View
    {
        return view('admin.settings.daily-visibility');
    }

    public function generate(Request $request, DailyInvoiceVisibilityService $service): RedirectResponse
    {
        $data = $request->validate([
            'branch_id' => ['required','integer','exists:branches,id'],
        ]);
        $service->getOrGenerateTodaySet((int) $data['branch_id']);
        return back()->with('status', 'Generated');
    }

    public function regenerate(Request $request, DailyInvoiceVisibilityService $service): RedirectResponse
    {
        $data = $request->validate([
            'branch_id' => ['required','integer','exists:branches,id'],
            'confirm' => ['required','accepted'],
        ]);
        $service->regenerateToday((int) $data['branch_id']);
        return back()->with('status', 'Regenerated');
    }
}


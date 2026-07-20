<?php

namespace App\Http\Controllers\Reports;

use App\Domain\Closing\Models\DailyClosing;
use App\Domain\Settings\Services\SettingsService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;

class DailyClosingPrintController extends Controller
{
    public function __invoke(
        Request $request,
        DailyClosing $closing,
        SettingsService $settings,
    ): View {
        abort_unless($request->user()?->isSuperAdmin(), 403);

        return view('reports.daily-closing-print', [
            'closing' => $closing,
            'counts' => $closing->counts(),
            'treasuries' => $closing->treasuries(),
            'template' => $settings->getInvoiceTemplate(),
            'autoPrint' => $request->boolean('auto'),
        ]);
    }
}

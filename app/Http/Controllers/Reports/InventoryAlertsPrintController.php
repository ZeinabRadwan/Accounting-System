<?php

namespace App\Http\Controllers\Reports;

use App\Domain\Inventory\Services\InventoryAlertService;
use App\Domain\Settings\Services\SettingsService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;

class InventoryAlertsPrintController extends Controller
{
    public function __invoke(
        Request $request,
        InventoryAlertService $service,
        SettingsService $settings,
    ): View {
        $branchId = $request->integer('branch') ?: null;
        $categoryId = $request->integer('category') ?: null;
        $status = $request->query('status');
        if (! in_array($status, [InventoryAlertService::STATUS_LOW, InventoryAlertService::STATUS_OUT], true)) {
            $status = null;
        }

        $report = $service->report($branchId, $categoryId, $status);

        return view('reports.inventory-alerts-print', [
            'report' => $report,
            'template' => $settings->getInvoiceTemplate(),
            'autoPrint' => $request->boolean('auto'),
            'filters' => [
                'branch' => $branchId,
                'category' => $categoryId,
                'status' => $status,
            ],
        ]);
    }
}

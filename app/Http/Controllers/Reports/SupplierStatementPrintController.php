<?php

namespace App\Http\Controllers\Reports;

use App\Domain\Reports\Services\SupplierStatementService;
use App\Domain\Settings\Services\SettingsService;
use App\Domain\Supplier\Models\Supplier;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SupplierStatementPrintController extends Controller
{
    public function __invoke(
        Request $request,
        Supplier $supplier,
        SupplierStatementService $service,
        SettingsService $settings,
    ): View {
        $statement = $service->statement(
            $supplier->id,
            $request->query('date_from'),
            $request->query('date_to'),
            $request->integer('branch_id') ?: null,
        );

        return view('reports.supplier-statement-print', [
            'supplier' => $supplier,
            'statement' => $statement,
            'template' => $settings->getInvoiceTemplate(),
            'autoPrint' => $request->boolean('auto'),
            'dateFrom' => $request->query('date_from'),
            'dateTo' => $request->query('date_to'),
        ]);
    }
}

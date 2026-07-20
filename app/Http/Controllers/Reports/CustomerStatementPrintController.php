<?php

namespace App\Http\Controllers\Reports;

use App\Domain\Customer\Models\Customer;
use App\Domain\Reports\Services\CustomerStatementService;
use App\Domain\Settings\Services\SettingsService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;

class CustomerStatementPrintController extends Controller
{
    public function __invoke(
        Request $request,
        Customer $customer,
        CustomerStatementService $service,
        SettingsService $settings,
    ): View {
        $statement = $service->statement(
            $customer->id,
            $request->query('date_from'),
            $request->query('date_to'),
            $request->integer('branch_id') ?: null,
        );

        return view('reports.customer-statement-print', [
            'customer' => $customer,
            'statement' => $statement,
            'template' => $settings->getInvoiceTemplate(),
            'autoPrint' => $request->boolean('auto'),
            'dateFrom' => $request->query('date_from'),
            'dateTo' => $request->query('date_to'),
        ]);
    }
}
